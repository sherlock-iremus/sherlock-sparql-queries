import { RESOURCE_LIGHT_IDENTITY_PREDICATES } from 'sherlock-rdf/lib/rdf-resource-identity'
import { PREFIXES } from './common';

function toPrefixed(uri: string): string {
  for (const [base, prefix] of Object.entries(PREFIXES)) {
    if (uri.startsWith(base)) {
      return `${prefix}:${uri.slice(base.length)}`
    }
  }
  return `<${uri}>`
}

/*
* displayNotIndexedE13: true if you want the query to return all E13 assigned to the same resource than the matched one.
*/

const toLuceneSearchString = (needle: string, textField: string) => {
  const excludedWords = ["de", "d", "ba"];
  if (excludedWords.includes(needle.split(' ').at(-1) || '')) {
    needle = needle.split(' ').slice(0, -1).join(' ');
  };

  const fuzzySearchString = needle.split(' ').map(_ => excludedWords.includes(_) ? _ : _ + '~').join(' ');

  return `'${textField}:"${needle}" ${textField}:"${needle}*" ${textField}:"${fuzzySearchString}"'`
}

export const f = (
  projectCode: string,
  collectionUris: string[],
  projectGraphUri: string,
  search: string,
  displayNotIndexedE13: boolean
) => {
  console.log(projectCode)
  // Format search query to approximate each word
  return `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX text: <http://jena.apache.org/text#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX purl: <http://www.purl.org/>

SELECT DISTINCT *
WHERE {
  ##################################################
  ###     This query has 3 main fragments        ###
  ###    Items from indexed E13 fragment         ###
  ###    Items directly indexed                  ###
  ###    Items from indexed identifier fragment  ###
  ##################################################

  ##################################################
  ###     Items from indexed E13 fragment        ###
  ### Example : Item <- E13 -> P141 -> "Berlioz" ###
  ##################################################

  {
  ${itemsFromE13Fragment(projectCode, collectionUris, projectGraphUri, search, displayNotIndexedE13)}
  }

  UNION
  ##################################################
  ###         Items directly indexed             ###
  ### Example : Item -> rdfs:label -> "Berlioz"  ###
  ##################################################
  {
    ${itemsDirectlyIndexed(collectionUris, projectGraphUri, search)}
  }
  UNION
  ##################################################
  ###   Items from indexed identifier fragment   ###
  ### Example : Item -> E42 -> "Berlioz"        ###
  ##################################################
  {
    ${itemsFromIdentifierFragment(collectionUris, projectGraphUri, search)}
  }

  ##################################################
  ###            Item light identity             ###
  ##################################################
  ${lightIdentityFragment()}
}
ORDER BY DESC(?score)
`
}

const lightIdentityFragment = () => {
  return `
  OPTIONAL {
    GRAPH ?g_item_identity {
      OPTIONAL {
        VALUES ?item_label_p { ${RESOURCE_LIGHT_IDENTITY_PREDICATES.map(toPrefixed).join(' ')} }
        ?item ?item_label_p ?item_label .
        FILTER(isLiteral(?item_label))
      }
    }
  }
  `
}

const itemsFromIdentifierFragment = (collectionUris: string[], projectGraphUri: string, search: string) => {
  return `
  GRAPH <${projectGraphUri}> {
    (?identifier ?score ?lit ?g ?prop) text:query (${toLuceneSearchString(search, "texte")}) .
    VALUES ?p { crm:P1_is_identified_by } .
    VALUES ?type { crm:E41_Appellation crm:E42_Identifier } .
    ?item ?p ?identifier .
    ?identifier crm:P190_has_symbolic_content ?label .
    ?identifier rdf:type ?type .
    ?collection_uri sherlock:has_member ?item .
    VALUES ?collection_uri { ${collectionUris.map(uri => `<${uri}>`).join(' ')} }
    ?identifier crm:P2_has_type ?E55_Type .
    GRAPH ?g_item_identifiers {
      ?E55_Type rdf:type crm:E55_Type .
      ?E55_Type crm:P1_is_identified_by ?type_label .
    }
  }
  `
}

const itemsDirectlyIndexed = (collectionUris: string[], projectGraphUri: string, search: string) => {
  return `
  GRAPH <${projectGraphUri}> {
    (?item ?score ?lit ?g ?prop) text:query (${toLuceneSearchString(search, "texte")}) .
    ?item ?p ?label .
    FILTER(?lit = ?label)
    ?collection_uri sherlock:has_member ?item .
    VALUES ?collection_uri { ${collectionUris.map(uri => `<${uri}>`).join(' ')} }
  }
  FILTER(isLiteral(?label))
  `
}

const itemsFromE13Fragment = (
  projectCode: string,
  collectionUris: string[],
  projectGraphUri: string,
  search: string,
  displayNotIndexedE13: boolean
) => `
    GRAPH <${projectGraphUri}> {
      {
        (?e13_indexed ?score ?lit ?g ?prop) text:query (${toLuceneSearchString(search, "p141")}) .
        GRAPH ?g {
          ?e13_indexed crm:P140_assigned_attribute_to ?item .
          ?collection_uri sherlock:has_member ?item .
          VALUES ?collection_uri { ${collectionUris.map(uri => `<${uri}>`).join(' ')} }
        }
      }

      ?e13 crm:P140_assigned_attribute_to ?item .
      ?e13 crm:P177_assigned_property_of_type ?p177 .
      ?e13 crm:P141_assigned ?p141 .
      ?e13 rdf:type crm:E13_Attribute_Assignment .
      ${!displayNotIndexedE13 ? `FILTER(?e13 = ?e13_indexed)` : ``}
      FILTER(isLiteral(?p141))
    }

    ##################################################
    ###        P177 labels of E13 fragment         ###
    ### Example : Item <- E13 -> P141 -> "Berlioz" ###
    ##################################################
    GRAPH ?g_meta {
      OPTIONAL {
        ?p177 crm:P1_is_identified_by ?p177_label .
        OPTIONAL {
          ?p177 crm:P1_is_identified_by ?p177_e42 .
          ?p177_e42 rdf:type crm:E42_Identifier .
          ?p177_e42 crm:P190_has_symbolic_content ?project_code .
          # ?p177_e42 crm:P2_has_type <http://data-iremus.huma-num.fr/id/5372610b-88b1-4949-b87a-1e5102bf2fb7> .
          # FILTER(STRSTARTS(?project_code, "${projectCode}::"))
        }
        FILTER(isLiteral(?p177_label))
      }
    }
  `
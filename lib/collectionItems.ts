// TODO: add light identity for non-E13-fetched items
/*
* includeE13: true if you want the search engine to run on P141_assigned literals.
* displayNotIndexedE13: true if you want the query to return all E13 assigned to the same resource than the matched one.
*/
export const f = (projectCode: string, collectionUri: string, search: string, includeE13: boolean, displayNotIndexedE13: boolean) => {
  console.log(projectCode)
  // Format search query to approximate each word
  search = search.split(" ").map(word => `${word}~`).join(" ");
  return `PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX text: <http://jena.apache.org/text#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT *
WHERE {
{
  ${itemsFromE13Fragment(projectCode, collectionUri, search, includeE13, displayNotIndexedE13)}
}
UNION
{
  ${itemsDirectlyIndexed(collectionUri, search)}
}
}`
}


// rdfs:label (il faut récupérer l'identité light)
const itemsDirectlyIndexed = (collectionUri: string, search: string) => {
  return `

SELECT *
WHERE {
    GRAPH ?g_item_identity {
    (?item ?score ?lit ?gr ?prop) text:query ("texte:${search}") .
    	?item crm:P1_is_identified_by|crm:P102_has_title|skos:prefLabel|crm:P48_has_preferred_identifier|rdfs:label ?label .
    	?item ?p ?label .
    	<${collectionUri}> sherlock:has_member ?item .
    }
  FILTER(isLiteral(?label))
}
  ORDER BY DESC(?score) 
  LIMIT 50
  `
}

const itemsFromE13Fragment = (projectCode: string, collectionUri: string, search: string, includeE13: boolean, displayNotIndexedE13: boolean) => {
  return includeE13 ? `
  GRAPH ?g {
    {
    SELECT DISTINCT ?e13_indexed ?item
    	WHERE {
        (?e13_indexed ?score ?lit ?gr ?prop) text:query ("p141:${search}") .
        	GRAPH ?g {
            ?e13_indexed crm:P140_assigned_attribute_to ?item .
            <${collectionUri}> sherlock:has_member ?item .
        	}
    	}
      	ORDER BY DESC(?score)
      	LIMIT 50
    }

    ?e13 crm:P140_assigned_attribute_to ?item .
    ?e13 crm:P177_assigned_property_of_type ?p177 .
    ?e13 crm:P141_assigned ?p141 .
    ?e13 rdf:type crm:E13_Attribute_Assignment .
    ${!displayNotIndexedE13 ? `FILTER(?e13 = ?e13_indexed)` : ``}
    OPTIONAL {
      ?item rdfs:label ?item_label
    }
    FILTER(isLiteral(?p141))
  }
  GRAPH ?g_meta {
    OPTIONAL {
      ?p177 crm:P1_is_identified_by ?p177_label .
      OPTIONAL {
        ?p177 crm:P1_is_identified_by ?p177_e42 .
        ?p177_e42 rdf:type crm:E42_Identifier .
        ?p177_e42 crm:P190_has_symbolic_content ?project_code .
        ?p177_e42 crm:P2_has_type <http://data-iremus.huma-num.fr/id/5372610b-88b1-4949-b87a-1e5102bf2fb7> .
        FILTER(STRSTARTS(?project_code, "${projectCode}::"))
    }
      FILTER(isLiteral(?p177_label))
    }
  }`
    : ``;
}
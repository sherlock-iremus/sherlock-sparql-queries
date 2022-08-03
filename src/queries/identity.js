export const example = [
  ["resource", "http://data-iremus.huma-num.fr/id/18654b25-a05d-415e-b809-e334827edea8"],
  ["getLinkedResourcesIdentity", true],
  ["countLinkedResources", true],
  ["linkingPredicate", undefined],
  ["linkedResourcesDirection", "OUTGOING"]
]

const LinkedResourcesDirectionEnum = {
  INCOMING: "INCOMING",
  OUTGOING: "OUTGOING"
}

/**
 * @param {string} resource IRI of the targeted resource
 * @param {boolean} getLinkedResourcesIdentity True if you want to retrieve identity of all linked resources to your resource 
 * @param {boolean} countLinkedResources True if you want to get number of linked resources 
 * @param {string} linkingPredicate Will return only identites of resources linked with this predicate (getLinkedResourceIdentity must be true) 
 * @param {"INCOMING"|"OUTGOING"} linkedResourcesDirection Define which linked resources you want to get the identity of, default outgoing (getLinkedResourceIdentity must be true) 
 * @returns A formatted and executable sparql query
 */
export const identity = (resource, getLinkedResourcesIdentity = false, countLinkedResources = false, linkingPredicate = null, linkedResourcesDirection = LinkedResourcesDirectionEnum.OUTGOING) => 
  stringToBoolean(getLinkedResourcesIdentity) 
    ? linkedResourcesIdentity(resource, countLinkedResources, linkingPredicate, linkedResourcesDirection) 
    : resourceIdentity(resource, countLinkedResources);

/**
 * @returns Resource identity (types / identifiers / number of resources linked / vocabularies) 
 */
const resourceIdentity = (resource, countLinkedResources) => `
  ${prefixesFragment()}
  SELECT *
  WHERE {
    GRAPH ?g {
      {
        VALUES ?p { crm:P1_is_identified_by crm:P102_has_title dcterms:title rdfs:label skos:prefLabel skos:altLabel }
        <${resource}> ?p ?label .
        FILTER(isLiteral(?label)) .
      }
      ${identifiersFragment(`<${resource}>`)}
      ${authorityDocumentFragment(`<${resource}>`)}
      ${typesDocumentationFragment(`<${resource}>`)}
      ${countLinkedResourcesFragment(`<${resource}>`, countLinkedResources)}
    }
  }`

/**
 * @returns Resources linked identity (types / identifiers / number of resources linked / vocabularies)
 */
const linkedResourcesIdentity = (resource, countLinkedResources, linkingPredicate, linkedResourcesDirection) => {
  const p = linkingPredicate ? `<${linkingPredicate}>` : '?lp';

  return `
  ${prefixesFragment()}
  SELECT *
  WHERE {
    GRAPH ?lr_g {
      ${resourceDeclarationFragment(`<${resource}>`, p, linkedResourcesDirection)}
      OPTIONAL {
        GRAPH ?g {
          {
            VALUES ?p { crm:P1_is_identified_by crm:P102_has_title dcterms:title rdfs:label skos:prefLabel skos:altLabel }
            ?lr ?p ?label .
            FILTER(isLiteral(?label)) .
          }
          ${identifiersFragment("?lr")}
          ${authorityDocumentFragment("?lr")}
          ${typesDocumentationFragment("?lr")}
          ${countLinkedResourcesFragment("?lr", countLinkedResources)}
        }
      }
    }
  }`
}

/**
 * @param {string} resource IRI of the resource 
 */
const authorityDocumentFragment = (resource) => `
  UNION {
    GRAPH ?e32_e55__g {
      ?e32 crm:P71_lists ${resource} .
    }
    OPTIONAL {
      GRAPH ?e32__g {
        ?e32 crm:P1_is_identified_by ?e32__label .
      }
    }
  }`

/**
 * @param {string} resource IRI of the resource 
 */
const typesDocumentationFragment = (resource) => `
  UNION {
    VALUES ?p { crm:P2_has_type rdf:type }
    ${resource} ?p ?r .
    OPTIONAL {
      GRAPH ?r_types__g {
        VALUES ?r_type { crm:E55_Type } .
        ?r rdf:type ?r_type .
        ?r crm:P1_is_identified_by ?label .
        ?type_e32 crm:P71_lists ?r .
        FILTER(isLiteral(?label)) .
        OPTIONAL {
          GRAPH ?type_e32__g {
            ?type_e32 crm:P1_is_identified_by ?type_e32__label .
          }
        }
      }
    }
  }
`

/**
 * 
 * @param {string} resource IRI of the resource
 */
const identifiersFragment = (resource) => `
  UNION
  {
    VALUES ?p { crm:P1_is_identified_by crm:P102_has_title }
    ${resource} ?p ?r .
    GRAPH ?r_types__g { 
      VALUES ?r_type { crm:E35_Title crm:E41_Appellation crm:E42_Identifier }
      ?r rdf:type ?r_type .
      ?r crm:P190_has_symbolic_content ?label .
    }
    OPTIONAL {
      GRAPH ?r_types_types__graph {
        ?r crm:P2_has_type ?r_type_type .
        ?r_type_type crm:P1_is_identified_by ?r_type_type__label .
      }
    }
  }
  `

/**
 * @param {string} resource IRI of the resource
 */
const countLinkedResourcesFragment = (resource, countLinkedResources) => 
  stringToBoolean(countLinkedResources)
    ? `
    UNION {
      SELECT (COUNT(?r_out) AS ?c_out) ?lr
      WHERE { GRAPH ?g_out { ${resource} ?p_out ?r_out } }
      GROUP BY ?c_out ?lr
    }
    UNION {
      SELECT (COUNT(*) AS ?c_in) ?lr
      WHERE { GRAPH ?g_in { ?r_in ?p_in ${resource} } }
      GROUP BY ?c_in ?lr
    }`
    : ''

const resourceDeclarationFragment = (resource, p, linkedResourcesDirection) => 
  linkedResourcesDirection === LinkedResourcesDirectionEnum.INCOMING 
    ? `?lr ${p} ${resource}`
    : `${resource} ${p} ?lr`

const prefixesFragment = () => `
  PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
  PREFIX dcterms: <http://purl.org/dc/terms/>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  `

const stringToBoolean = (string) => string === 'false' ? false : !!string

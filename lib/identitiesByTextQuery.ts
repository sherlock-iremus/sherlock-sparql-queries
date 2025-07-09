import { identitiersLiterals, identifiersResources, identifiersPredicates, types } from "./identity"

/**
 * @param {string} queryString queryString
 * @param {number} limit number of different resources you want to retrieve. This does not limit number of rows
 * @returns A formatted and executable sparql query
 */
export const identitiesByTextQuery = (queryString: string, limit: number) => {
  return `${prefixesFragment()}  
  SELECT *
  WHERE {
    ${subjectRestrictionWithTextQuery(queryString, limit)}
    GRAPH ?g {
    ${identitiersLiterals(`?s`)}
    UNION
    ${identifiersResources(`?s`)}
    UNION
    ${types(`?s`)}
    }
  }`
}

const subjectRestrictionWithTextQuery = (queryString: string, limit: number) => `
{
  SELECT DISTINCT ?s ?score WHERE 
  {
    # Literal text:query that match an identifier 
    {
      { (?x ?score) text:query ("${queryString}")}
      GRAPH ?g_x {
        VALUES ?identifier_predicate {${identifiersPredicates()}} .
        ?s ?identifier_predicate ?x 
      }
    }
    UNION
    # Literal text:query that match a relevant resource
    # Pas de P190 car le sujet d'un P190 n'est pas la ressource en tant que telle.
    {
      ${identifiersPredicatesThatMatchARelevantResource().map(predicate => `
      {
        (?s ?score) text:query (${predicate} "${queryString}")
      }
      `).join(" UNION ")}
    }
  }
  ORDER BY DESC(?score) 
  LIMIT ${limit}  
}
`

const identifiersPredicatesThatMatchARelevantResource = () => [
  "crm:P1_is_identified_by",
  "crm:P102_has_title",
  "crm:P48_has_preferred_identifier",
  "dcterms:title",
  "rdfs:label",
  "skos:prefLabel",
  "skos:altLabel",
]

const prefixesFragment = () => `PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX text: <http://jena.apache.org/text#>
`;

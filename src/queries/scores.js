import { SHERLOCK_TYPE } from "../common/rdf.js";

/**
 * @returns A formatted and executable sparql query
 */
export const scores = () => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT (COUNT(DISTINCT ?annotation) AS ?count_annotations) (COUNT( DISTINCT ?selection) AS ?count_selections) ?score
(IRI(CONCAT("http://data-iremus.huma-num.fr/files/modality-tonality/mei/", STRAFTER(STR(?score), "http://data-iremus.huma-num.fr/id/"), ".mei")) AS ?mei) 
WHERE {
 GRAPH ?g {
    ?score crm:P2_has_type <${SHERLOCK_TYPE.score}>. # SCORE TYPE
    OPTIONAL {
      GRAPH ?g2 {
        ?annotation <http://data-iremus.huma-num.fr/ns/sherlock#has_document_context> ?score.
        ?annotation rdf:type crm:E13_Attribute_Assignment
      }
    }
    OPTIONAL {
      GRAPH ?g2 {
        ?selection <http://data-iremus.huma-num.fr/ns/sherlock#has_document_context> ?score.
        ?selection crm:P2_has_type <${SHERLOCK_TYPE.selection}> #SELECTION TYPE
      }
    }
  }
}
GROUP BY ?score
`
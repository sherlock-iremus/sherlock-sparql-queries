import { SHERLOCK_TYPE } from "sherlock-rdf"

/**
 * @returns A formatted and executable sparql query
 */
export const scores = () => `
BASE <http://data-iremus.huma-num.fr/id/>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>

SELECT
    ?score
    (IRI(CONCAT("http://data-iremus.huma-num.fr/files/modality-tonality/mei/", STRAFTER(STR(?score), "http://data-iremus.huma-num.fr/id/"), ".mei")) AS ?mei_file) 
    (COUNT(DISTINCT ?direct_e13) AS ?count_direct_e13)
    (COUNT(DISTINCT ?e13_on_fragment) AS ?count_e13_on_fragment)
    (COUNT(DISTINCT ?e13_on_selection) AS ?count_e13_on_selection)
    (COUNT(DISTINCT ?e13_e13_on_analytical_entity) AS ?count_e13_on_analytical_entity)
    (COUNT(DISTINCT ?selection) AS ?count_selections)
    (?count_direct_e13 + ?count_e13_on_fragment + ?count_e13_on_selection + ?count_e13_on_analytical_entity AS ?count_e13_total)
WHERE {
    GRAPH <http://data-iremus.huma-num.fr/graph/catalogue> {
        ?score crm:P2_has_type <${SHERLOCK_TYPE.score}> .
        {
            GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> {
                ?direct_e13 rdf:type crm:E13_Attribute_Assignment .
                ?direct_e13 crm:P140_assigned_attribute_to ?score .
            }
        }
        UNION {
            GRAPH <http://data-iremus.huma-num.fr/graph/mei> {
                ?fragment crm:P106i_forms_part_of ?score .
            }
            GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> {
                ?e13_on_fragment rdf:type crm:E13_Attribute_Assignment .
                ?e13_on_fragment crm:P140_assigned_attribute_to ?fragment .
            }
        }
        UNION {
            GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> {
                ?e13_on_selection rdf:type crm:E13_Attribute_Assignment .
                ?e13_on_selection crm:P140_assigned_attribute_to ?selection .
                ?selection crm:P2_has_type <${SHERLOCK_TYPE.selection}> .
                ?selection sherlock:has_document_context ?score .
            }
        }
        UNION {
            GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> {
                ?e13_on_analytical_entity rdf:type crm:E13_Attribute_Assignment .
                ?e13_on_analytical_entity crm:P141_assigned ?analytical_entity .
                ?analytical_entity rdf:type crm:E28_Conceptual_Object .
                ?analytical_entity crm:P2_has_type <${SHERLOCK_TYPE.analyticalEntity}> .
                ?e13_on_analytical_entity crm:P140_assigned_attribute_to ?analytical_selection .
                ?analytical_selection sherlock:has_document_context ?score .
            }
        }
    }
}
GROUP BY ?score
`
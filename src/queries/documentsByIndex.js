/**
 * @param {string} indexUri Iri of the index
 * @returns A formatted and executable sparql query
 */
export const documentsByIndex = (indexUri) => `
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX she: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT ?e13_p140 (GROUP_CONCAT(DISTINCT ?e13_p140_label ; separator=" \\n~~\\n ") as ?e13_p140_labels) ?e13_p177 ?e13_p177_label ?concept ?concept_description ?context (GROUP_CONCAT(DISTINCT ?context_label ; separator=" \\n~~\\n ") as ?context_labels) ?creation_date ?creator ?creator_label ?analytical_project ?analytical_project_label
WHERE 
{ 
    GRAPH <http://data-iremus.huma-num.fr/graph/opentheso> {
        <${indexUri}> skos:narrower* ?concept .
        OPTIONAL {
            ?concept dcterms:description ?concept_description .
        }

        #CAS OU LE CONCEPT EST RELIE PAR UNE E13
        OPTIONAL {
            GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant> {  
                ?e13 crm:P141_assigned ?concept .
            }
        }

        #CAS OU LE CONCEPT EST ASSOCIE A UNE ENTITE, ELLE MEME RELIEE A UNE E13
        OPTIONAL {
            GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant> {  
                ?s ?p ?concept .
                ?e13 crm:P141_assigned ?s .
            }
        }

        #TRIPLETS CONTEXTUELS
        OPTIONAL {
            GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant> {  

                OPTIONAL {
                    ?e13 crm:P177_assigned_property_of_type ?e13_p177 .
                    OPTIONAL {
                        GRAPH ?graph_indexation_type {
                            ?e13_p177 crm:P1_is_identified_by ?e13_p177_label
                        }
                    }
                }
                OPTIONAL {
                    ?e13 crm:P140_assigned_attribute_to ?e13_p140 .
                    OPTIONAL {
                        GRAPH ?graph_e13_p140 {
                            ?e13_p140 crm:P1_is_identified_by ?e13_p140_identifier .
                            ?e13_p140_identifier crm:P190_has_symbolic_content ?e13_p140_label
                        }
                    }
                }    
                OPTIONAL {
                    ?e13 she:has_document_context ?context .
                    OPTIONAL {
                        GRAPH ?graph_context {
                            ?context crm:P1_is_identified_by ?context_identifier .
                            ?context_identifier crm:P190_has_symbolic_content ?context_label
                        }
                    }
                }
                OPTIONAL {
                    ?analytical_project crm:P9_consists_of ?e13 .
                    OPTIONAL {
                        GRAPH ?graph_analytical_project {
                            ?analytical_project crm:P1_is_identified_by ?analytical_project_label
                        }
                    }
                }
                OPTIONAL {
                    ?e13 dcterms:created ?creation_date .
                }
                OPTIONAL {
                    ?e13 crm:P14_carried_out_by ?creator .
                    OPTIONAL {
                        GRAPH ?graph_indexation_creator {
                            ?creator crm:P1_is_identified_by ?creator_label
                        }
                    }
                }
            }
        }

    }

} 
GROUP BY ?e13_p140 ?e13_p177 ?e13_p177_label ?concept ?concept_description ?context ?creation_date ?creator ?creator_label ?analytical_project ?analytical_project_label

`;

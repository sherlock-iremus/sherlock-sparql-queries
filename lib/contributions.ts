import { SHERLOCK_TYPE } from "sherlock-rdf/

/**
 * @param {string} contributorIri Iri of the contributor  
 * @returns A formatted and executable sparql query
 */
export const contributions = (contributorIri: string) => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT ?contribution ?contribution_type_label ?context ?annotation_subject_type_label ?annotation_object_type_label ?annotation_type_label ?annotation_type ?annotation_object ?annotation_subject ?annotation_subject_type ?annotation_subject_type  ?annotation_object_type 
WHERE {
  GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> { #ALL CONTRIBUTIONS ARE SUPPOSED TO BE DONE IN SHERLOCK GRAPH
	# CONTRIBUTIONS FROM DCTERMS:CREATOR
    {
      ?contribution dcterms:creator <${contributorIri}>. #CONTRIBUTOR
      VALUES ?contribution_type { <${SHERLOCK_TYPE.selection}> } #SELECTION TYPE
      ?contribution crm:P2_has_type ?contribution_type.
      GRAPH ?g1 {
        ?contribution_type crm:P1_is_identified_by ?contribution_type_label
      }
    } 
    UNION 
    # CONTRIBUTIONS FROM CRM:E13 --> CRM:P14
    {
    	?contribution crm:P14_carried_out_by <${contributorIri}>. #CONTRIBUTOR
      	?contribution rdf:type crm:E13_Attribute_Assignment.
      	?contribution crm:P140_assigned_attribute_to ?annotation_subject.
      	?contribution crm:P141_assigned ?annotation_object.
      	?contribution crm:P177_assigned_property_of_type ?annotation_type.
      	OPTIONAL {
        	GRAPH ?g2 {
              ?annotation_subject crm:P2_has_type ?annotation_subject_type
              GRAPH ?g3 {
                  ?annotation_subject_type crm:P1_is_identified_by ?annotation_subject_type_label
              }
        	}
      	}
      	OPTIONAL {
        	GRAPH ?g4
        	{
          		?annotation_object crm:P2_has_type ?annotation_object_type
        		GRAPH ?g5 {
          			?annotation_object_type crm:P1_is_identified_by ?annotation_object_type_label
        		}
        	}
      	}
      	OPTIONAL {
        	GRAPH ?g6 {
        		?annotation_type crm:P1_is_identified_by ?annotation_type_label
        	}
      	}	
    }
    OPTIONAL {
    	?contribution sherlock:has_document_context ?context
    }
  }
}
`
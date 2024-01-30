import { SHERLOCK_TYPE } from "sherlock-rdf/dist/rdf-resource-identity"

/**
 * @param {string} resource Iri of the document containing selections 
 * @returns A formatted and executable sparql query
 */
export const selections = (resource: string) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT DISTINCT 
?selection 
?contributor
?date
?min_measure_number 
?items_count 
?analyticalEntity_type 
WHERE {
    GRAPH ?g {
      ?selection dcterms:creator ?contributor.
      #######################################
      #### GET ANALYTICAL ENTITIES TYPES ####
      #######################################
      OPTIONAL {
          ?e13_selection_analyticalEntity crm:P140_assigned_attribute_to ?selection.
          ?e13_selection_analyticalEntity rdf:type crm:E13_Attribute_Assignment.
          ?e13_selection_analyticalEntity crm:P141_assigned ?analyticalEntity.
          ?analyticalEntity crm:P2_has_type <${SHERLOCK_TYPE.analyticalEntity}>.
          ?e13_analyticalEntity_types crm:P140_assigned_attribute_to ?analyticalEntity.
          ?e13_analyticalEntity_types crm:P177_assigned_property_of_type rdf:type.
          ?e13_analyticalEntity_types crm:P141_assigned ?analyticalEntity_type
       }
  	}
  { 
    SELECT DISTINCT ?date ?selection (count(?item) AS ?items_count) (MIN(?recursive_measure_number) AS ?min_measure_number)
    WHERE {
	  GRAPH ?g1 {  
        #######################################
        ######## GET SELECTIONS ITEMS #########
        #######################################
        ?selection dcterms:created ?date.
        ?selection sherlock:has_document_context <${resource}>.
        ?selection crm:P2_has_type <${SHERLOCK_TYPE.selection}>.
        ?selection crm:P106_is_composed_of* ?item.

        #######################################
        ######## GET MEASURE NUMBERS ##########
        #######################################

       	# If the item has no measure_number (is most likely a selection), remove it from count 
       	FILTER(?recursive_measure_number > 0)
       	OPTIONAL {
          GRAPH ?g2 { #SIMPLE NOTE
          	?item sherlockmei:measure_number ?recursive_measure_number. 
          }
        }
        OPTIONAL {
          graph ?g2 { #POSITIONED NOTE
          	?beat_anchor sherlockmei:has_beat_anchor ?item.
          	?beat_anchor sherlockmei:measure_number ?recursive_measure_number
          }
        }
        OPTIONAL {
          graph ?g2 { # VERTICALITY
          	?contains_beat sherlockmei:contains_beat ?item.
          	?contains_beat sherlockmei:measure_number ?recursive_measure_number
          }
        }
      }
    }
    GROUP BY ?selection ?date
  }
}

GROUP BY ?selection ?contributor ?date ?analyticalEntity_type ?items_count ?min_measure_number
`
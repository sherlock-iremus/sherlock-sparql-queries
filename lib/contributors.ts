import { SHERLOCK_TYPE } from "sherlock-rdf/dist/rdf-resource-identity";

/**
 * @returns A formatted and executable sparql query
 */
export const contributors = () => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT ?contributor ?name (COUNT(?contribution) AS ?contributions) (CONCAT( "#", ?hex_color_code) AS ?hex_color) ?emoji ?orcid (IRI(CONCAT("https://orcid.org/", ?orcid)) AS ?orcid_profile) (IRI(CONCAT("https://pub.orcid.org/v3.0/", ?orcid)) AS ?orcid_api_user_endpoint) ?untyped_identifier ?contributor_type_label ?user_graph

WHERE {
  GRAPH ?user_graph {  
    VALUES ?contributor_type_predicate {rdf:type crm:P2_has_type}. 
    VALUES ?contributor_type {crm:E21_Person <${SHERLOCK_TYPE.software}>}. #PERSON OR SOFTWARE
    ?contributor ?contributor_type_predicate ?contributor_type
    
    OPTIONAL {
	    ?contributor crm:P2_has_type <${SHERLOCK_TYPE.software}>. #SOFTWARE
      ?contributor crm:P2_has_type ?contributor_type
      GRAPH ?type_graph {
        ?contributor_type crm:P1_is_identified_by ?contributor_type_label
      }
    }
    OPTIONAL {
	    ?contributor rdf:type ?contributor_type_label #PERSON
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?hex_color_code_identifier.
      ?hex_color_code_identifier crm:P2_has_type <${SHERLOCK_TYPE.hexColorCode}>. #HEX COLOR CODE IDENTIFIER
      ?hex_color_code_identifier crm:P190_has_symbolic_content ?hex_color_code
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?emoji_identifier.
      ?emoji_identifier crm:P2_has_type <${SHERLOCK_TYPE.emoji}>. #EMOJI IDENTIFIER
      ?emoji_identifier crm:P190_has_symbolic_content ?emoji
    }
    OPTIONAL {
      ?contributor crm:P1_is_identified_by ?orcid_appellation.
      ?orcid_appellation crm:P2_has_type <${SHERLOCK_TYPE.orcidGeneratedName}>. #ORCID NAME IDENTIFIER
      ?orcid_appellation crm:P190_has_symbolic_content ?name
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?ORCID_identifier.
      ?ORCID_identifier crm:P2_has_type <${SHERLOCK_TYPE.orcidId}>. #ORCID IDENTIFIER
      ?ORCID_identifier crm:P190_has_symbolic_content ?orcid
    }
    OPTIONAL {
    	GRAPH ?g2 {
      		?contributor crm:P1_is_identified_by ?untyped_identifier.
        	FILTER(ISLITERAL(?untyped_identifier))
      }
    }
    GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> { #ALL ANNOTATIONS ARE SUPPOSED TO BE DONE IN SHERLOCK GRAPH
      VALUES ?contribution_predicate { dcterms:creator crm:P14_carried_out_by }
    	?contribution ?contribution_predicate ?contributor 
    }
  }
}
GROUP BY ?contributor ?name ?hex_color_code ?emoji ?orcid ?orcid_profile ?untyped_identifier ?contributor_type_label ?user_graph`;

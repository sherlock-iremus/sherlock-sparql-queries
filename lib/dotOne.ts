export const getDotOneProperties = (resourceUri: string) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT *
WHERE {
  GRAPH ?g {
    ?pc0 crm:P01_has_domain <${resourceUri}> .
    ?pc0 rdf:type ?pc0_type .
    ?pc0 crm:P03_has_range_literal ?value .
    ?pc0 ?dotOneProperty ?e55 .
    VALUES ?dotOneProperty { crm:P3.1_has_type crm:P14.1_in_the_role_of crm:P16.1_mode_of_use crm:P19.1_mode_of_use crm:P62.1_mode_of_depiction crm:P67.1_has_type crm:P69.1_has_type crm:P102.1_has_type crm:P107.1_kind_of_member crm:P130.1_kind_of_similarity crm:P136.1_in_the_taxonomic_role crm:P137.1_in_the_taxonomic_role crm:P138.1_mode_of_representation crm:P139.1_has_type crm:P144.1_kind_of_member crm:P189.1_has_type }
  }
  GRAPH ?g_types {
    ?e55 rdf:type crm:E55_Type .
    ?e55 crm:P1_is_identified_by ?e55_label .
  }
}`;
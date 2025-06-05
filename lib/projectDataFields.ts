export const f = (projectCode: string, collection: string) => `PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT *
WHERE {
  GRAPH ?g {
    <http://data-iremus.huma-num.fr/id/${collection}> sherlock:has_member ?resource .
    ?e13 crm:P140_assigned_attribute_to ?resource .
    ?e13 crm:P177_assigned_property_of_type ?p177 .
    ?e13 crm:P141_assigned ?p141 .
    ?e13 rdf:type crm:E13_Attribute_Assignment .
    FILTER(isLiteral(?p141))
  }
  GRAPH ?g_meta {
    ?p177 crm:P1_is_identified_by ?p177_label .
    ?p177 crm:P1_is_identified_by ?p177_e42 .
    ?p177_e42 rdf:type crm:E42_Identifier .
    ?p177_e42 crm:P190_has_symbolic_content ?project_code .
    ?p177_e42 crm:P2_has_type <http://data-iremus.huma-num.fr/id/5372610b-88b1-4949-b87a-1e5102bf2fb7> .
    FILTER(isLiteral(?p177_label))
    FILTER(STRSTARTS(?project_code, "${projectCode}::"))
  }
}`
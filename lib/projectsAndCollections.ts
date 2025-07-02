export const f = (projectCode: string | undefined) => {
return `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX text: <http://jena.apache.org/text#>

SELECT *
WHERE {
  GRAPH ?g {
  	?e42_business_id crm:P190_has_symbolic_content ${projectCode ? '"' + projectCode + '"' : '?project_code'} .
    ?e42_business_id rdf:type crm:E42_Identifier .
    ?e42_business_id crm:P2_has_type <http://data-iremus.huma-num.fr/id/574ffe9e-525c-42f2-8188-329ba3c7231d> . # Type business id
    ?E7_project crm:P1_is_identified_by ?e42_business_id .
    ?E7_project rdf:type crm:E7_Activity .
    ?E7_project crm:P2_has_type <http://data-iremus.huma-num.fr/id/58c38fd3-ca35-476a-aa39-9cc815ee2dab> . # Type projet
    ?E7_project crm:P1_is_identified_by ?project_name .
    ?E7_project crm:P1_is_identified_by ?e42_graph_uri .
    ?e42_graph_uri rdf:type crm:E42_Identifier .
    ?e42_graph_uri crm:P2_has_type <http://data-iremus.huma-num.fr/id/ca70f2d9-44f1-4137-82e6-882752767d22> . # Type graph uri
    ?e42_graph_uri crm:P190_has_symbolic_content ?graph_uri .
    ?E65_creation crm:P9i_forms_part_of ?E7_project .
    ?E65_creation rdf:type crm:E65_Creation .
    ?E65_creation crm:P94_has_created ?collection .
    ?collection rdf:type sherlock:Collection .
    ?collection crm:P1_is_identified_by ?collection_name
    FILTER(isLITERAL(?project_name))
    FILTER(isLITERAL(?collection_name))
  }
}`
}

export default f;
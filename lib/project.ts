export const getProject = (resourceURI: string) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>

SELECT ?project_code ?project_logo ?project_name ?project_uri (REPLACE(STR(?project_uri), "^.*/([^/]*)$", "$1") AS ?project_uuid)
WHERE {
  GRAPH ?g1 {
    <${resourceURI}> sherlock:hasContextProject ?project_uri .
  }
  GRAPH ?g2 {
    ?project_uri crm:P1_is_identified_by ?project_name .
    FILTER(isLiteral(?project_name))
    
    ?project_uri crm:P1_is_identified_by ?e42_logo .
    ?e42_logo rdf:type crm:E42_Identifier .
    ?e42_logo crm:P2_has_type iremus:804d8e72-cced-4b78-85d4-78a016e1c153 .
    ?e42_logo crm:P190_has_symbolic_content ?project_logo .
    
    ?project_uri crm:P1_is_identified_by ?e42_code .
    ?e42_code rdf:type crm:E42_Identifier .
    ?e42_code crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
    ?e42_code crm:P190_has_symbolic_content ?project_code .
  }
}`
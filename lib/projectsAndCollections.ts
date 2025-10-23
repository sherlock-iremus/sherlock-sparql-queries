import { spfmt } from 'sparql-formatter'

export const projectAndCollections = (projectCode: string | undefined) => spfmt.format(`
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX text: <http://jena.apache.org/text#>

SELECT *
WHERE {
  GRAPH ?g {
    ?E7_project a crm:E7_Activity .
    ?E7_project crm:P2_has_type iremus:58c38fd3-ca35-476a-aa39-9cc815ee2dab .
    ?E7_project crm:P1_is_identified_by ?project_name .
    FILTER(isLITERAL(?project_name))

    ?E7_project crm:P1_is_identified_by ?e42_business_id .
    ?e42_business_id a crm:E42_Identifier .
    ?e42_business_id crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
    ?e42_business_id crm:P190_has_symbolic_content ${projectCode ? '"' + projectCode + '"' : '?project_code'} .

    OPTIONAL {
      ?E7_project crm:P1_is_identified_by ?e42_graph_uri .
      ?e42_graph_uri a crm:E42_Identifier .
      ?e42_graph_uri crm:P2_has_type iremus:ca70f2d9-44f1-4137-82e6-882752767d22 .
      ?e42_graph_uri crm:P190_has_symbolic_content ?graph_uri .
    }

    OPTIONAL {
      ?E65_creation crm:P9i_forms_part_of ?E7_project .
      ?E65_creation a crm:E65_Creation .
      ?E65_creation crm:P94_has_created ?collection .
      ?collection a sherlock:Collection .
      ?collection crm:P1_is_identified_by ?collection_name
      FILTER(isLITERAL(?collection_name))
    }
  }
}
`)
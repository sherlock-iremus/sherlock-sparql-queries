export const identity = (resource) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT *
WHERE {
  GRAPH ?g {
    {
      VALUES ?p { crm:P1_is_identified_by crm:P102_has_title dcterms:title rdfs:label skos:prefLabel skos:altLabel }
      <${resource}> ?p ?label .
      FILTER(isLiteral(?label)) .
    }
    UNION
    {
      VALUES ?p { crm:P1_is_identified_by crm:P102_has_title }
      <${resource}> ?p ?r .
      GRAPH ?r_types__g { 
        VALUES ?r_type { crm:E35_Title crm:E41_Appellation crm:E42_Identifier }
        ?r rdf:type ?r_type .
        ?r crm:P190_has_symbolic_content ?label .
      }
      OPTIONAL {
        GRAPH ?r_types_types__graph {
          ?r crm:P2_has_type ?r_type_type .
          ?r_type_type crm:P1_is_identified_by ?r_type_type__label .
        }
      }
    }
    UNION {
      GRAPH ?e32_e55__g {
        ?e32 crm:P71_lists <${resource}> .
      }
      OPTIONAL {
        GRAPH ?e32__g {
          ?e32 crm:P1_is_identified_by ?e32__label .
        }
      }
    }
    UNION
    {
      VALUES ?p { crm:P2_has_type rdf:type }
      <${resource}> ?p ?r .
      OPTIONAL {
        GRAPH ?r_types__g {
          VALUES ?r_type { crm:E55_Type } .
          ?r rdf:type ?r_type .
          ?r crm:P1_is_identified_by ?label .
          ?type_e32 crm:P71_lists ?r .
          FILTER(isLiteral(?label)) .
          OPTIONAL {
            GRAPH ?type_e32__g {
              ?type_e32 crm:P1_is_identified_by ?type_e32__label .
            }
          }
        }
      }
    }
    UNION {
      SELECT (COUNT(*) AS ?c_out)
      WHERE { GRAPH ?g_out { <${resource}> ?p_out ?r_out } }
      GROUP BY ?c_out
    }
    UNION {
      SELECT (COUNT(*) AS ?c_in)
      WHERE { GRAPH ?g_in { ?r_in ?p_in <${resource}> } }
      GROUP BY ?c_in
    }
  }
}
`;
export const p127 = (resource: string) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT *
WHERE {
  GRAPH ?g {
    <${resource}> crm:P127_has_broader_term* ?bt .
    ?bt crm:P1_is_identified_by ?bt_label .
    OPTIONAL {
      ?bt crm:P127_has_broader_term ?btbt .
      ?btbt crm:P1_is_identified_by ?btbt_label .
    }
  }
}
`;
import { sparqlEndpoint } from "./sparql";

export const q = (resource) => `
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

export const format_ancestors_label = (results) => {
  const s = "a";

  return s;
};

const test_query = q(
  `http://data-iremus.huma-num.fr/id/d4b92b44-3305-44c7-87a9-a56bfd5539ec`
);

// console.log(test_query);
// console.log(format_ancestors_label());

(async () => console.log(await sparqlEndpoint(test_query)))();

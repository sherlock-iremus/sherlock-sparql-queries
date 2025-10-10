import { spfmt } from 'sparql-formatter'
import { LL_PREDICATES, makePrefixesQueryPart } from './common'

export const listLinkedResources = (r: string, p: string) => spfmt.format(`
${makePrefixesQueryPart()}

SELECT DISTINCT ?linked_resource (COALESCE(?business_id_literal, "") AS ?business_id)
(CONCAT(
    COALESCE(GROUP_CONCAT(DISTINCT ?literal_label; SEPARATOR = " • "), ""),
    COALESCE(GROUP_CONCAT(DISTINCT ?id_label; SEPARATOR = " • "), ""),
    COALESCE(GROUP_CONCAT(DISTINCT ?title; SEPARATOR = " • "), "")
)  AS ?label) 
WHERE {
  GRAPH ?g {
    <${r}> <${p}> ?linked_resource .

    OPTIONAL {
      ?linked_resource ${LL_PREDICATES.join('|')} ?literal_label .
      FILTER(isLiteral(?literal_label))
    }
    OPTIONAL {
      ?linked_resource crm:P1_is_identified_by ?id .
      FILTER NOT EXISTS { ?id a crm:E42_Identifier }
      ?id <http://www.cidoc-crm.org/cidoc-crm/P190_has_symbolic_content> ?id_label .
    }
    OPTIONAL {
      ?linked_resource crm:P1_is_identified_by ?e42_business_id .
      ?e42_business_id a crm:E42_Identifier .
      ?e42_business_id crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
      ?e42_business_id crm:P190_has_symbolic_content ?business_id_literal .
    }
    OPTIONAL {
      ?linked_resource crm:P102_has_title ?e35 .
      ?e35 a crm:E35_Title .
      ?e35 crm:P190_has_symbolic_content ?title .
    }
  }
}
GROUP BY ?linked_resource ?business_id_literal ?business_id
ORDER BY ?linked_resource
`)
import { spfmt } from 'sparql-formatter'

export const getResourceByBusinessId = (resourceBusinessId: string): string => spfmt.format(`
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>

SELECT ?resource
WHERE {
    GRAPH ?g {
        ?resource crm:P1_is_identified_by ?resource_business_id_e42 .
        ?resource_business_id_e42 a crm:E42_Identifier .
        ?resource_business_id_e42 crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
        ?resource_business_id_e42 crm:P190_has_symbolic_content "${resourceBusinessId}" .
    }
}
`)
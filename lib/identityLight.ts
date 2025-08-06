import { RESOURCE_LIGHT_IDENTITY_PREDICATES } from 'sherlock-rdf'

const PREFIXES = `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX text: <http://jena.apache.org/text#>
`
const SELECT = 'SELECT ?linked_resource ?label (COALESCE(?_internal_id, "") AS ?internal_id)'
const LABEL = `
    ?linked_resource ${RESOURCE_LIGHT_IDENTITY_PREDICATES.map((predicate: string) => '<' + predicate + '>').join('|')} ?label .
    FILTER(isLiteral(?label))
`

const INTERNAL_ID = `
    OPTIONAL {
      ?linked_resource crm:P1_is_identified_by ?e42_internal_id .
      ?e42_internal_id crm:P2_has_type <574ffe9e-525c-42f2-8188-329ba3c7231d> .
      ?e42_internal_id crm:P190_has_symbolic_content ?_internal_id .
    }
`

export function identityLight(resource: string, linkingPredicate: string): string {
  return `
${PREFIXES}
${SELECT}
WHERE {
  GRAPH ?g {
    <${resource}> <${linkingPredicate}> ?linked_resource .
    ${LABEL}
    ${INTERNAL_ID}
  }
}
`}

export function identityIncomingLight(resource: string, linkingPredicate: string): string {
  return `
${PREFIXES}
${SELECT}
WHERE {
  GRAPH ?g {
    ?linked_resource <${linkingPredicate}> <${resource}> .
    ${LABEL}
    FILTER(lang(?label)="fr")
    ${INTERNAL_ID}
  }
}
`}

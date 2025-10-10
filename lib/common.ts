import { makePrefixedUri, CRM_BASE, DCTERMS_BASE, RDF_BASE, RDFS_BASE, SKOS_BASE } from 'sherlock-rdf/lib/rdf-prefixes'

export const IDENTIFIERS_PREDICATES = [
    'crm:P1_is_identified_by',
    'crm:P48_has_preferred_identifier',
    'crm:P102_has_title',
    'rdfs:label',
    'skos:prefLabel'
]

export const LL_PREDICATES = [
    'crm:P1_is_identified_by',
    'crm:P102_has_title',
    'crm:P48_has_preferred_identifier',
    'crm:P190_has_symbolic_content',
    'dcterms:title',
    'rdfs:label',
    'skos:altLabel',
    'skos:prefLabel'
]

export const IDENTITY_PREDICATES = [
    CRM_BASE + 'P1_is_identified_by',
    CRM_BASE + 'P102_has_title',
    CRM_BASE + 'P190_has_symbolic_content',
    CRM_BASE + 'P1_is_identified_by',
    CRM_BASE + 'E35_Title',
    CRM_BASE + 'E41_Appellation',
    CRM_BASE + 'E42_Identifier',
    CRM_BASE + 'P2_has_type',
    DCTERMS_BASE + 'title',
    RDF_BASE + 'type',
    RDFS_BASE + 'label',
    SKOS_BASE + 'prefLabel',
    SKOS_BASE + 'altLabel'
]

export const IDENTITY_PREDICATES_PREFIXED = IDENTITY_PREDICATES.map(makePrefixedUri).map(puri => puri.toString())

export enum LinkedResourcesDirectionEnum {
    INCOMING = 'INCOMING',
    OUTGOING = 'OUTGOING'
}

export const PREFIXES = {
    'http://www.cidoc-crm.org/cidoc-crm/': 'crm',
    'http://purl.org/dc/terms/': 'dcterms',
    'http://www.w3.org/1999/02/22-rdf-syntax-ns#': 'rdf',
    'http://www.w3.org/2000/01/rdf-schema#': 'rdfs',
    'http://www.w3.org/2004/02/skos/core#': 'skos',
    'http://jena.apache.org/text#': 'text',
    'http://data-iremus.huma-num.fr/ns/sherlock#': 'sherlock',
    'http://data-iremus.huma-num.fr/id/': 'iremus',
    'http://purl.org/dc/elements/1.1/': 'purl',
    'http://xmlns.com/foaf/0.1/': 'foaf',
}

export function makePrefixesQueryPart() {
    let x = ''
    for (const [base, prefix] of Object.entries(PREFIXES)) {
        x += `PREFIX ${prefix}: <${base}>\n`
    }
    return x
}
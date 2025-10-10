export declare const IDENTIFIERS_PREDICATES: string[];
export declare const LL_PREDICATES: string[];
export declare const IDENTITY_PREDICATES: string[];
export declare const IDENTITY_PREDICATES_PREFIXED: string[];
export declare enum LinkedResourcesDirectionEnum {
    INCOMING = "INCOMING",
    OUTGOING = "OUTGOING"
}
export declare const PREFIXES: {
    'http://www.cidoc-crm.org/cidoc-crm/': string;
    'http://purl.org/dc/terms/': string;
    'http://www.w3.org/1999/02/22-rdf-syntax-ns#': string;
    'http://www.w3.org/2000/01/rdf-schema#': string;
    'http://www.w3.org/2004/02/skos/core#': string;
    'http://jena.apache.org/text#': string;
    'http://data-iremus.huma-num.fr/ns/sherlock#': string;
    'http://data-iremus.huma-num.fr/id/': string;
    'http://purl.org/dc/elements/1.1/': string;
    'http://xmlns.com/foaf/0.1/': string;
};
export declare function makePrefixesQueryPart(): string;

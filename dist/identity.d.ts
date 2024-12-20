export declare const IDENTITY_PREDICATES: string[];
export declare enum LinkedResourcesDirectionEnum {
    INCOMING = "INCOMING",
    OUTGOING = "OUTGOING"
}
export declare const identifiersPredicates: () => string;
export declare const identity: (resource: string, getLinkedResourcesIdentity?: boolean, linkingPredicates?: string[], linkedResourcesDirection?: LinkedResourcesDirectionEnum) => any;
export declare const types: (resource: string) => string;
export declare const identitiersLiterals: (resource: string) => string;
export declare const identifiersResources: (resource: string) => string;
export declare const authorityDocument: (resource: string) => string;

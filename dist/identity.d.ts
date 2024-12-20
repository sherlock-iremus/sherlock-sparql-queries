export declare const IDENTITY_PREDICATES: string[];
export declare enum LinkedResourcesDirectionEnum {
    INCOMING = "INCOMING",
    OUTGOING = "OUTGOING"
}
export declare const identity: (resource: string, getLinkedResourcesIdentity?: boolean, linkingPredicates?: string[], linkedResourcesDirection?: LinkedResourcesDirectionEnum) => any;

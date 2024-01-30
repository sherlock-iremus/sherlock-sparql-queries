declare enum LinkedResourcesDirectionEnum {
    INCOMING = "INCOMING",
    OUTGOING = "OUTGOING"
}
/**
 * @param {string} resource IRI of the targeted resource
 * @param {boolean} getLinkedResourcesIdentity True if you want to retrieve identity of all linked resources to your resource
 * @param {boolean} appendE13ifiedIdentity True if you want to retrieve identity linked by an E13 to your resource
 * @param {boolean} countLinkedResources True if you want to get number of linked resources
 * @param {string} linkingPredicate Will return only identites of resources linked with this predicate (getLinkedResourceIdentity must be true)
 * @param {"INCOMING"|"OUTGOING"} linkedResourcesDirection Define which linked resources you want to get the identity of, default outgoing (getLinkedResourceIdentity must be true)
 * @returns A formatted and executable sparql query
 */
export declare const identity: (resource: string, getLinkedResourcesIdentity?: boolean, appendE13ifiedIdentity?: boolean, countLinkedResources?: boolean, linkingPredicate?: string, linkedResourcesDirection?: LinkedResourcesDirectionEnum) => string;
export {};

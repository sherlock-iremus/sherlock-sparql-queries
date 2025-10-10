import { LinkedResourcesDirectionEnum } from './common';
export declare const identity: (resource: string, getLinkedResourcesIdentity?: boolean, linkingPredicates?: string[], linkedResourcesDirection?: LinkedResourcesDirectionEnum) => string;
export declare const types: (resource: string) => string;
export declare const identitiersLiterals: (resource: string) => string;
export declare const identifiersResources: (resource: string) => string;
export declare const authorityDocument: (resource: string) => string;

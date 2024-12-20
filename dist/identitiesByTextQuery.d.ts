/**
 * @param {string} queryString queryString
 * @param {number} limit number of different resources you want to retrieve. This does not limit number of rows
 * @returns A formatted and executable sparql query
 */
export declare const identitiesByTextQuery: (queryString: string, limit: number) => string;

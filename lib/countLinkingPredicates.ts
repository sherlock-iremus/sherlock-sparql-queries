export const countOutgoingPredicates = (resource: string) => `
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    <${resource}> ?lp ?lr .
  }
}
GROUP BY ?lp
`;

export const countIncomingPredicates = (resource: string) => `
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    ?lr ?lp <${resource}> .
  }
}
GROUP BY ?lp
`;
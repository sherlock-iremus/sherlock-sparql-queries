export const countLinkingPredicates = (resource: string) => `
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    <${resource}> ?lp ?lr
  }
}
GROUP BY ?lp
`;
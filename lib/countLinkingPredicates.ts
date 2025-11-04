import { spfmt } from 'sparql-formatter'

export const countOutgoingPredicates = (resourceUri: string): string => spfmt.format(`
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    <${resourceUri}> ?lp ?lr .
  }
}
GROUP BY ?lp
`)

export const countIncomingPredicates = (resourceUri: string): string => spfmt.format(`
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    ?lr ?lp <${resourceUri}> .
  }
}
GROUP BY ?lp
`)
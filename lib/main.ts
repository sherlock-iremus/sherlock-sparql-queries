export function bind(query: string, parameters: Array<string>) {
  for (const p in parameters) {
    query = query.replaceAll("${" + p + "}", parameters[p]);
  }
  return query;
}

// RDF & SPARQL STUFF

export * as RDF from './common/rdf'
export * as SPARQL from './common/sparql'
export * as MODEL_RDF from './model/RDF'
export * as MODEL_SPARQL from './model/SPARQL'

// QUERIES

export * as getAnalyticalProject from './queries/analyticalProject'
export * as annotations from './queries/annotations'
export * as constants from './queries/constants'
export * as contributons from './queries/contributions'
export * as contributor from './queries/contributor'
export * as contributors from './queries/contributors'
export * as documentsByIndex from './queries/documentsByIndex'
export * as fondamentales from './queries/fondamentales'
export * as getResources from './queries/getResources'
export * as historicalModelsOntologies from './queries/historicalModelsOntologies'
export * as identity from './queries/identity'
export * as mg_livraisons from './queries/mg_livraisons'
export * as noteOccurences from './queries/noteOccurences'
export * as p127 from './queries/p127'
export * as getP140 from './queries/p140'
export * as scores from './queries/scores'
export * as selections from './queries/selections'
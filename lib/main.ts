export function bind(query: string, parameters: Array<string>) {
  for (const p in parameters) {
    query = query.replaceAll("${" + p + "}", parameters[p]);
  }
  return query;
}

export * as RDF from './common/rdf'
export * as SPARQL from './common/sparql'
export * as MODEL_SPARQL from './model/SPARQL'
/**
 * @returns A formatted and executable sparql query
 */
export const historicalModelsOntologies = () => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>

SELECT ?ontology (COUNT(?concept) AS ?concepts) (COUNT(?property) AS ?properties)
WHERE {
 GRAPH <http://data-iremus.huma-num.fr/graph/modality-tonality-ontology> {
    {
      ?concept rdf:type owl:Class.
      ?ontology rdf:type owl:Ontology.
      FILTER(STRSTARTS(STR(?concept), STR(?ontology))).
    }
    UNION 
    {
      ?property rdf:type owl:ObjectProperty.
      ?ontology rdf:type owl:Ontology.
      FILTER(STRSTARTS(STR(?property), STR(?ontology))).
      
    }
  }
}
GROUP BY ?ontology ?author ?comment
`

export const getCorpusByCreator = (creatorUri: string) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT ?id (COUNT(?manifestation) AS ?manifestations) (SAMPLE(?projectLabel) AS ?label)
FROM <http://data-iremus.huma-num.fr/graph/tonalities-projects-and-corpuses>
WHERE {
  ?project crm:P2_has_type iremus:21816195-6708-4bbd-a758-ee354bb84900 .
  ?project crm:P14_carried_out_by <${creatorUri}> .
  ?project crm:P94_has_created ?id .
  ?id crm:P1_is_identified_by ?identifier .
  ?identifier crm:P190_has_symbolic_content ?projectLabel .
  ?id sherlock:has_member ?manifestation .
}
GROUP BY ?id`;

export const getCorpusManifestations = (corpusUri: string) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT ?url FROM <http://data-iremus.huma-num.fr/graph/tonalities-projects-and-corpuses>
WHERE {
  <${corpusUri}> sherlock:has_member ?manifestation .
  ?manifestation crm:P1_is_identified_by ?identifier .
  ?identifier crm:P190_has_symbolic_content ?url .
}`;

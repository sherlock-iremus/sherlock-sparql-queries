export const getAnnotations = (scoreIri: string, projectIri: string) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX dcterms: <http://purl.org/dc/terms/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
  ?annotation sherlock:has_document_context <${scoreIri}>.
  <${projectIri}> crm:P9_consists_of ?annotation.
  ?annotation crm:P141_assigned ?concept.
  ?annotation dcterms:created ?date.
  ?annotation crm:P140_assigned_attribute_to  ?entity.
  ?e13 crm:P141_assigned ?entity.
  ?e13 sherlock:has_document_context ?page.
}
`;

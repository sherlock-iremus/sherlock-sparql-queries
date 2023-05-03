export const getAnnotations = (scoreIri, projectIri) => `
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX dcterms: <http://purl.org/dc/terms/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
  ?annotation sherlock:has_document_context <${scoreIri}>.
  <${projectIri}> crm:P9_consists_of ?annotation.
  ?annotation crm:P141_assigned ?concept.
  ?annotation crm:P140_assigned_attribute_to  ?entity.
  ?notes crm:P141_assigned ?entity.
}
`;

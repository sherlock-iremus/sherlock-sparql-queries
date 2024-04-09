export const getProjectsByCreator = (creatorUri: string) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT ?project (COUNT(?annotation) AS ?annotations) (SAMPLE(?projectLabel) AS ?label) (SAMPLE(?projectType) AS ?type)
FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
    ?project crm:P2_has_type iremus:21816195-6708-4bbd-a758-ee354bb84900 .
    ?project crm:P14_carried_out_by <${creatorUri}> .
    ?project crm:P1_is_identified_by ?projectLabel .
    ?project sherlock:has_privacy_type ?projectType .
    ?project crm:P9_consists_of ?annotation .
    ?annotation sherlock:has_document_context ?score .
}
GROUP BY ?project`;
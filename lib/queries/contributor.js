export const getContributor = (contributorIri) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX analysis: <http://modality-tonality.huma-num.fr/analysisOntology#>
SELECT ?contributor ?color ?emoji ?program
FROM <http://data-iremus.huma-num.fr/graph/users>
WHERE {
    VALUES ?contributor { <${contributorIri}> }
    
    OPTIONAL { ?contributor analysis:hasPythonModuleName ?program }
    OPTIONAL {
        ?contributor crm:P1_is_identified_by ?unicode.
        ?unicode crm:P2_has_type <http://data-iremus.huma-num.fr/id/04242f64-fbb3-4b5b-bb2e-3ddd59eeea18>.
        ?unicode crm:P190_has_symbolic_content ?emoji.
        ?contributor crm:P1_is_identified_by ?hexcode.
        ?hexcode crm:P2_has_type <http://data-iremus.huma-num.fr/id/5f1bb74f-6ea0-4073-8b68-086f98454f1c>.
        ?hexcode crm:P190_has_symbolic_content ?color.
    }
}`;

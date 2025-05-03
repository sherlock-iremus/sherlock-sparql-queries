export const e13WithLiteralP141 = (p140: string) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT *
WHERE {
    GRAPH ?g {
        ?e13 ?p <${p140}> .
        ?e13 rdf:type crm:E13_Attribute_Assignment .
        ?e13 crm:P141_assigned ?p141 .
        ?e13 crm:P177_assigned_property_of_type ?p177 .
        FILTER(isLiteral(?p141))
    }
    GRAPH ?g_meta {
        ?p177 crm:P1_is_identified_by ?p177_label .
        FILTER(isLiteral(?p177_label))
    }
}`
export const getProfile = (userUri: string) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT ?contributor ?emoji ?color ?orcid ?name
FROM <http://data-iremus.huma-num.fr/graph/users>
WHERE {
    VALUES ?contributor { <${userUri}> }

    ?contributor crm:P1_is_identified_by ?id1.
    ?id1 crm:P2_has_type <http://data-iremus.huma-num.fr/id/04242f64-fbb3-4b5b-bb2e-3ddd59eeea18>.
    ?id1 crm:P190_has_symbolic_content ?emoji.

    ?contributor crm:P1_is_identified_by ?id2.
    ?id2 crm:P2_has_type <http://data-iremus.huma-num.fr/id/5f1bb74f-6ea0-4073-8b68-086f98454f1c>.
    ?id2 crm:P190_has_symbolic_content ?color.

    ?contributor crm:P1_is_identified_by ?id3.
    ?id3 crm:P2_has_type <http://data-iremus.huma-num.fr/id/d7ef2583-ff31-4913-9ed3-bc3a1c664b21>.
    ?id3 crm:P190_has_symbolic_content ?orcid.
    
    ?contributor crm:P1_is_identified_by ?id4.
    ?id4 crm:P2_has_type <http://data-iremus.huma-num.fr/id/73ea8d74-3526-4f6a-8830-dd369795650d>.
    ?id4 crm:P190_has_symbolic_content ?name.
}`;

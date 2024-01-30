import { ANALYTICAL_PROJECT, DRAFT_PROJECT } from "./constants";

export const getAnalyticalProject = (analyticalProjectIri: string) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
    VALUES ?project { <${analyticalProjectIri}> }
    VALUES ?draft { <${DRAFT_PROJECT}> }
    ?project crm:P2_has_type <${ANALYTICAL_PROJECT}>.
    ?project crm:P1_is_identified_by ?label.
    ?project crm:P14_carried_out_by ?contributor.
    OPTIONAL { ?project sherlock:has_privacy_type ?draft }.
}
LIMIT 1`;

import { SHERLOCK_TYPE } from "sherlock-rdf";

/**
 * @param {string} score Iri of the score
 * @returns A formatted and executable sparql query
 */
export const fondamentales = (score: string) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT DISTINCT ?score ?annotation ?verticality ?note_label ?measure_number 
WHERE {
  GRAPH ?g {
    ${bindScore(score)}
    ?score crm:P2_has_type <${SHERLOCK_TYPE.score}>. #Score type
    ?verticality sherlock:has_document_context ?score.
    ?verticality crm:P2_has_type <${SHERLOCK_TYPE.verticality}>. #MEI score offset
    ?note_in_score sherlockmei:contains_beat ?verticality.
    ?note_in_score sherlockmei:measure_number ?measure_number.
    GRAPH ?sherlock_graph {
        ?annotation crm:P140_assigned_attribute_to ?verticality.
        ?annotation crm:P177_assigned_property_of_type <${SHERLOCK_TYPE.fondamentaleIdentification}>. #Identification de fondamentale
        ?annotation crm:P141_assigned ?note.
        GRAPH ?sherlock_data_graph {
            ?note crm:P1_is_identified_by ?note_label
        }
    }
  }
}
ORDER BY ?score ?measure_number
`;

const bindScore = (score: string) => {
    return score ? `BIND (<${score}> as ?score).` : ''
}
import { SHERLOCK_TYPE } from "../common/rdf";

/**
 * @param {string} resource Iri of the score
 * @param {string} note Literal representation of the note in the corpus
 * @returns A formatted and executable sparql query
 */
export const noteOccurences = (resource: string, note: string) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT ?note_pname (count(?note) AS ?notes) 
WHERE {
  GRAPH ?g {
    ?note sherlock:has_document_context <${resource}>.
    ?note crm:P2_has_type <${SHERLOCK_TYPE.note}>. #NOTE
    ?note sherlockmei:pname ?note_pname.
    ${note && `VALUES ?note_pname { "${note}" }`}
  }
}
GROUP BY ?note_pname`;

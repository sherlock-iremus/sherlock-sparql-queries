const getResources = () => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT DISTINCT ?s
    WHERE {
        GRAPH ?g {
            ?s ?p ?o .
            GRAPH ?g2 {
            ?s rdf:type ?type .
        }
        FILTER(?type != <http://www.ics.forth.gr/isl/CRMdig/D35_Area>) . 
        FILTER(?type != crm:E42_Identifier) . 
        VALUES ?p { crm:P1_is_identified_by crm:P102_has_title dcterms:title rdfs:label skos:prefLabel skos:altLabel crm:P190_has_symbolic_content }
    }
  }
`;

module.exports = getResources;

// @ts-ignore
import { spfmt } from "sparql-formatter";

export const mercure_galant_livraisons = (): string =>
	spfmt.format(`
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?livraison_f2 ?livraison_business_id ?livraison_title_source (COUNT(?article_f2) AS ?livraison_n_articles)
WHERE {
  GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant-tei> {
    ?livraison_f2 a lrmoo:F2_Expression .
    ?livraison_f2 crm:P2_has_type iremus:901c2bb5-549d-47e9-bd91-7a21d7cbe49f .

    ?livraison_f2 crm:P1_is_identified_by ?livraison_business_id_e42 .
    ?livraison_business_id_e42 a crm:E42_Identifier .
    ?livraison_business_id_e42 crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
    ?livraison_business_id_e42 crm:P190_has_symbolic_content ?livraison_business_id .

    ?livraison_f2 crm:P102_has_title ?livraison_title_source_e35 .
    ?livraison_title_source_e35 a crm:E35_Title .
    ?livraison_title_source_e35 crm:P2_has_type iremus:d7fadc20-3937-4b35-8a19-f090fee5b6c6 .
    ?livraison_title_source_e35 crm:P190_has_symbolic_content ?livraison_title_source .

    ?livraison_f2 lrmoo:R5_has_component ?article_f2 .
    ?article_f2 a lrmoo:F2_Expression .
    ?article_f2 crm:P2_has_type iremus:13f43e00-680a-4a6d-a223-48e8d9bbeaae .
  }
}
GROUP BY ?livraison_f2 ?livraison_business_id ?livraison_title_source
ORDER BY ?livraison_business_id
`);

export const mercure_galant_livraison = (livraisonBusinessId: string): string =>
	spfmt.format(`
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT *
WHERE {
  GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant-tei> {
    VALUES ?livraison_business_id { "${livraisonBusinessId}" }
    ?livraison a lrmoo:F2_Expression .
    ?livraison crm:P1_is_identified_by ?livraison_business_id_e42 .
    ?livraison_business_id_e42 crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
    ?livraison_business_id_e42 crm:P190_has_symbolic_content ?livraison_business_id .

    ?livraison lrmoo:R5_has_component ?article .
    ?article a lrmoo:F2_Expression .
    ?article crm:P1_is_identified_by ?article_business_id_e42 .
    ?article_business_id_e42 crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
    ?article_business_id_e42 crm:P190_has_symbolic_content ?article_business_id .

    OPTIONAL {
      ?article crm:P1_is_identified_by ?E42_pagination .
      ?E42_pagination a crm:E42_Identifier .
      ?E42_pagination crm:P2_has_type iremus:9704a621-3aa0-4e64-a68a-d956c943d4a6 .
      ?E42_pagination crm:P190_has_symbolic_content ?pagination .
    }

    OPTIONAL {
      ?article crm:P102_has_title ?e35_forge .
      ?e35_forge a crm:E35_Title .
      ?e35_forge crm:P2_has_type iremus:aa97d53f-d397-4222-92ad-ea74d5310f60 .
      ?e35_forge crm:P190_has_symbolic_content ?title_forge .
    }
    OPTIONAL {
      ?article crm:P102_has_title ?e35_paratexte .
      ?e35_paratexte a crm:E35_Title .
      ?e35_paratexte crm:P2_has_type iremus:3e8d9526-4c24-4c3a-b7c1-0dfc8ab74e22 .
      ?e35_paratexte crm:P190_has_symbolic_content ?title_paratexte .
    }
    OPTIONAL {
      ?article crm:P102_has_title ?e35_propre .
      ?e35_propre a crm:E35_Title .
      ?e35_propre crm:P2_has_type iremus:f50565da-e46e-40cc-b7b3-167cd0a52404 .
      ?e35_propre crm:P190_has_symbolic_content ?title_propre .
    }
  }
}
ORDER BY ?article_business_id
`);

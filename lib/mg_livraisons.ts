// @ts-ignore
import { spfmt } from 'sparql-formatter'

function common(): string {
  return `
# Livraisons F1 et F2 TEI
?F1_livraison a lrmoo:F1_Work .
?F1_livraison crm:P102_has_title ?livraison_titre .
?F1_livraison crm:P2_has_type iremus:901c2bb5-549d-47e9-bd91-7a21d7cbe49f . # type livraison
?F1_livraison lrmoo:R3_is_realised_in ?F2_livraison_tei .
?F2_livraison_tei a lrmoo:F2_Expression .
?F2_livraison_tei crm:P2_has_type iremus:901c2bb5-549d-47e9-bd91-7a21d7cbe49f . # type livraison
?F2_livraison_tei crm:P2_has_type iremus:625bc194-d452-4f38-9ba9-83b2e0a79e00 . # type contenu tei
?F2_livraison_tei crm:P1_is_identified_by ?E42_F2_livraison_business_id .
?E42_F2_livraison_business_id crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d . # type business id
?E42_F2_livraison_business_id a crm:E42_Identifier .
?E42_F2_livraison_business_id crm:P190_has_symbolic_content ?livraison_business_id .
# Articles F2
?F2_livraison_tei lrmoo:R75_incorporates ?F2_article_tei .
?F2_article_tei a lrmoo:F2_Expression .
?F2_article_tei crm:P2_has_type iremus:13f43e00-680a-4a6d-a223-48e8d9bbeaae . # type article
?F2_article_tei crm:P2_has_type iremus:625bc194-d452-4f38-9ba9-83b2e0a79e00 . # type contenu tei
# Date de publication
?F1_livraison lrmoo:R3_is_realised_in ?F2_livraison_originale .
?F3_manifestation_originale lrmoo:R4_embodies ?F2_livraison_originale .
?F3_manifestation_originale a lrmoo:F3_Manifestation .
?F2_livraison_originale a lrmoo:F2_Expression .
?F2_livraison_originale crm:P2_has_type iremus:901c2bb5-549d-47e9-bd91-7a21d7cbe49f . # type livraison
?F2_livraison_originale crm:P2_has_type iremus:7d7fc017-61ba-4f80-88e1-744f1d00dd60 . # type texte original
?F30 lrmoo:R24_created ?F3_manifestation_originale .
?F30 a lrmoo:F30_Manifestation_Creation .
?F30 crm:P4_has_time-span ?E52 .
?E52 crm:P82b_end_of_the_end ?date .
`
}

export const mg_livraisons = (): string => spfmt(`
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?F2_livraison_tei ?livraison_titre ?date ?livraison_business_id (COUNT(?F2_article_tei) AS ?n_articles)
WHERE {
  GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant-tei> {
    ?F18 a lrmoo:F18_Serial_Work .
    ?F18 lrmoo:R10_has_member ?F1_livraison .
    ${common()}
  }
}
GROUP BY ?F2_livraison_tei ?livraison_titre ?date ?livraison_business_id
ORDER BY ?livraison_business_id
`);

export const mg_livraison = (livraisonBusinessId: string): string => spfmt(`
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?F2_article_tei ?article_title ?article_business_id ?livraison_titre
WHERE {
  GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant-tei> {
    VALUES ?livraison_business_id { "${livraisonBusinessId}" }
    ?F2_livraison_tei crm:P1_is_identified_by ?E42_tei_file .
    ?E42_tei_file a crm:E42_Identifier .
    ?E42_tei_file crm:P2_has_type iremus:f005e36a-4690-4c83-9791-2927f5f823e0 . # type url de fichier tei
    ?F2_article_tei crm:P1_is_identified_by ?E42_article_business_id .
    ?E42_article_business_id a crm:E42_Identifier .
    ?E42_article_business_id crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d . # type business id
    ?E42_article_business_id crm:P190_has_symbolic_content ?article_business_id .
    ?F2_article_tei crm:P102_has_title ?article_title .
    ${common()}
  }
}
ORDER BY ?article_business_id
`)
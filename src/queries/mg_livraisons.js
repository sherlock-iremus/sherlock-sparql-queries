export const mg_livraisons = () => `
    PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
    PREFIX lrmoo: <http://www.cidoc-crm.org/lrmoo/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
           
    SELECT DISTINCT ?F2_livraison ?titre ?date ?reference_livraison (COUNT(?F2_article) AS ?n_articles)
    WHERE {
      GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant> {
      
        # RECUPERATION LIVRAISON

        ?F18 a lrmoo:F18_Serial_Work .
        ?F18 lrmoo:R10_has_member ?F1_livraison .
        ?F1_livraison lrmoo:R3_is_realised_in ?F2_livraison .
        ?F1_livraison lrmoo:R3_is_realised_in ?E31_livraison_document .
        ?E31_livraison_document crm:P1_is_identified_by ?E42_reference_livraison .
        ?E42_reference_livraison rdfs:label ?reference_livraison .
        ?E42_reference_livraison crm:P2_has_type ?type .
        VALUES (?type) {
          (<http://data-iremus.huma-num.fr/id/92c258a0-1e34-437f-9686-e24322b95305>)
        }
      
        # RECUPERATION TITRE

        ?F1_livraison crm:P1_is_identified_by ?titre .
      
        # RECUPERATION DATE
              
        ?F3_manifestation lrmoo:R4_embodies ?F2_livraison .
        ?F3_manifestation rdf:type lrmoo:F3_Manifestation .
        ?F30_manifestation_creation lrmoo:R24_created ?F3_manifestation .
        ?F30_manifestation_creation rdf:type lrmoo:F30_Manifestation_Creation .
        ?F30_manifestation_creation crm:P4_has_time-span ?E52_time_span .
        ?E52_time_span crm:P82b_end_of_the_end ?date .

        # COMPTAGE DES ARTICLES

        ?F2_livraison crm:P148_has_component ?F2_article .

        # ESTAMPES

        ?F2_livraison crm:P165_has_component
      }
    }
    GROUP BY ?F2_livraison ?titre ?date ?reference_livraison
    ORDER BY ?date
`;

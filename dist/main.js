const J = "http://data-iremus.huma-num.fr/id/d2a536eb-4a95-484f-b13d-f597ac8ea2fd", K = "http://data-iremus.huma-num.fr/id/9d0388cb-a178-46b2-b047-b5a98f7bdf0b", q = "http://data-iremus.huma-num.fr/id/689e148d-a97d-45b4-898d-c395a24884df", z = "http://data-iremus.huma-num.fr/id/90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86", Q = "http://data-iremus.huma-num.fr/id/6d72746a-9f28-4739-8786-c6415d53c56d", Z = "http://data-iremus.huma-num.fr/id/bf9dce29-8123-4e8e-b24d-0c7f134bbc8e", tt = "http://data-iremus.huma-num.fr/id/29b00e39-75da-4945-b6c4-a0ca00f96f68", et = "http://data-iremus.huma-num.fr/id/82dbd157-20df-422c-88db-28d6075d99a1", h = "http://data-iremus.huma-num.fr/id/21816195-6708-4bbd-a758-ee354bb84900", E = "http://data-iremus.huma-num.fr/id/cabe46bf-23d4-4392-aa20-b3eb21ad7dfd", rt = (t) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
    VALUES ?project { <${t}> }
    VALUES ?draft { <${E}> }
    ?project crm:P2_has_type <${h}>.
    ?project crm:P1_is_identified_by ?label.
    ?project crm:P14_carried_out_by ?contributor.
    OPTIONAL { ?project sherlock:has_privacy_type ?draft }.
}
LIMIT 1`, ot = (t, r) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX dcterms: <http://purl.org/dc/terms/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
  ?annotation sherlock:has_document_context <${t}>.
  <${r}> crm:P9_consists_of ?annotation.
  ?annotation crm:P141_assigned ?concept.
  ?annotation dcterms:created ?date.
  ?annotation crm:P140_assigned_attribute_to  ?entity.
  ?e13 crm:P141_assigned ?entity.
  ?e13 sherlock:has_document_context ?page.
}
`, P = "http://purl.org/ontology/bibo/", b = "http://www.cidoc-crm.org/lrmoo/", f = "http://www.cidoc-crm.org/cidoc-crm/", y = "http://www.ics.forth.gr/isl/CRMdig/", R = "http://purl.org/dc/elements/1.1/", I = "http://purl.org/dc/terms/", T = "http://xmlns.com/foaf/0.1/", O = "http://data-iremus.huma-num.fr/ns/hemef#", c = "http://data-iremus.huma-num.fr/id/", g = "http://data-iremus.huma-num.fr/id/", A = "http://data-iremus.huma-num.fr/ns/", w = "http://data-iremus.huma-num.fr/graph/", N = "http://data-iremus.huma-num.fr/ns/musrad30#", S = "http://www.w3.org/2002/07/owl#", L = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", F = "http://www.w3.org/2000/01/rdf-schema#", C = "http://schema.org/", $ = "http://www.w3.org/2004/02/skos/core#", G = {
  [f]: "crm",
  [y]: "crmdig",
  [P]: "bibo",
  [R]: "dc",
  [I]: "dcterms",
  [T]: "foaf",
  [O]: "hemef",
  [g]: "",
  [A]: "",
  [N]: "musrad30",
  [b]: "lrmoo",
  [S]: "owl",
  [L]: "rdf",
  [F]: "rdfs",
  [C]: "schema",
  [$]: "skos",
  [w]: ""
};
Object.entries(G).sort(
  (t, r) => t[0].length < r[0].length ? 1 : -1
);
const o = {
  selection: c + "9d0388cb-a178-46b2-b047-b5a98f7bdf0b",
  analyticalEntity: c + "6d72746a-9f28-4739-8786-c6415d53c56d",
  score: c + "bf9dce29-8123-4e8e-b24d-0c7f134bbc8e",
  software: c + "29b00e39-75da-4945-b6c4-a0ca00f96f68",
  hexColorCode: c + "5f1bb74f-6ea0-4073-8b68-086f98454f1c",
  emoji: c + "04242f64-fbb3-4b5b-bb2e-3ddd59eeea18",
  orcidId: c + "d7ef2583-ff31-4913-9ed3-bc3a1c664b21",
  note: c + "d2a536eb-4a95-484f-b13d-f597ac8ea2fd",
  verticality: c + "90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86",
  fondamentaleIdentification: c + "003559fc-f033-4fc3-9c05-0d5f283123ed",
  orcidGeneratedName: c + "73ea8d74-3526-4f6a-8830-dd369795650d"
}, nt = (t) => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT ?contribution ?contribution_type_label ?context ?annotation_subject_type_label ?annotation_object_type_label ?annotation_type_label ?annotation_type ?annotation_object ?annotation_subject ?annotation_subject_type ?annotation_subject_type  ?annotation_object_type 
WHERE {
  GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> { #ALL CONTRIBUTIONS ARE SUPPOSED TO BE DONE IN SHERLOCK GRAPH
	# CONTRIBUTIONS FROM DCTERMS:CREATOR
    {
      ?contribution dcterms:creator <${t}>. #CONTRIBUTOR
      VALUES ?contribution_type { <${o.selection}> } #SELECTION TYPE
      ?contribution crm:P2_has_type ?contribution_type.
      GRAPH ?g1 {
        ?contribution_type crm:P1_is_identified_by ?contribution_type_label
      }
    } 
    UNION 
    # CONTRIBUTIONS FROM CRM:E13 --> CRM:P14
    {
    	?contribution crm:P14_carried_out_by <${t}>. #CONTRIBUTOR
      	?contribution rdf:type crm:E13_Attribute_Assignment.
      	?contribution crm:P140_assigned_attribute_to ?annotation_subject.
      	?contribution crm:P141_assigned ?annotation_object.
      	?contribution crm:P177_assigned_property_of_type ?annotation_type.
      	OPTIONAL {
        	GRAPH ?g2 {
              ?annotation_subject crm:P2_has_type ?annotation_subject_type
              GRAPH ?g3 {
                  ?annotation_subject_type crm:P1_is_identified_by ?annotation_subject_type_label
              }
        	}
      	}
      	OPTIONAL {
        	GRAPH ?g4
        	{
          		?annotation_object crm:P2_has_type ?annotation_object_type
        		GRAPH ?g5 {
          			?annotation_object_type crm:P1_is_identified_by ?annotation_object_type_label
        		}
        	}
      	}
      	OPTIONAL {
        	GRAPH ?g6 {
        		?annotation_type crm:P1_is_identified_by ?annotation_type_label
        	}
      	}	
    }
    OPTIONAL {
    	?contribution sherlock:has_document_context ?context
    }
  }
}
`, ct = (t) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX analysis: <http://modality-tonality.huma-num.fr/analysisOntology#>
SELECT ?contributor ?color ?emoji ?program
FROM <http://data-iremus.huma-num.fr/graph/users>
WHERE {
    VALUES ?contributor { <${t}> }
    
    OPTIONAL { ?contributor analysis:hasPythonModuleName ?program }
    OPTIONAL {
        ?contributor crm:P1_is_identified_by ?unicode.
        ?unicode crm:P2_has_type <http://data-iremus.huma-num.fr/id/04242f64-fbb3-4b5b-bb2e-3ddd59eeea18>.
        ?unicode crm:P190_has_symbolic_content ?emoji.
        ?contributor crm:P1_is_identified_by ?hexcode.
        ?hexcode crm:P2_has_type <http://data-iremus.huma-num.fr/id/5f1bb74f-6ea0-4073-8b68-086f98454f1c>.
        ?hexcode crm:P190_has_symbolic_content ?color.
    }
}`, at = () => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT ?contributor ?name (COUNT(?contribution) AS ?contributions) (CONCAT( "#", ?hex_color_code) AS ?hex_color) ?emoji ?orcid (IRI(CONCAT("https://orcid.org/", ?orcid)) AS ?orcid_profile) (IRI(CONCAT("https://pub.orcid.org/v3.0/", ?orcid)) AS ?orcid_api_user_endpoint) ?untyped_identifier ?contributor_type_label ?user_graph

WHERE {
  GRAPH ?user_graph {  
    VALUES ?contributor_type_predicate {rdf:type crm:P2_has_type}. 
    VALUES ?contributor_type {crm:E21_Person <${o.software}>}. #PERSON OR SOFTWARE
    ?contributor ?contributor_type_predicate ?contributor_type
    
    OPTIONAL {
	    ?contributor crm:P2_has_type <${o.software}>. #SOFTWARE
      ?contributor crm:P2_has_type ?contributor_type
      GRAPH ?type_graph {
        ?contributor_type crm:P1_is_identified_by ?contributor_type_label
      }
    }
    OPTIONAL {
	    ?contributor rdf:type ?contributor_type_label #PERSON
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?hex_color_code_identifier.
      ?hex_color_code_identifier crm:P2_has_type <${o.hexColorCode}>. #HEX COLOR CODE IDENTIFIER
      ?hex_color_code_identifier crm:P190_has_symbolic_content ?hex_color_code
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?emoji_identifier.
      ?emoji_identifier crm:P2_has_type <${o.emoji}>. #EMOJI IDENTIFIER
      ?emoji_identifier crm:P190_has_symbolic_content ?emoji
    }
    OPTIONAL {
      ?contributor crm:P1_is_identified_by ?orcid_appellation.
      ?orcid_appellation crm:P2_has_type <${o.orcidGeneratedName}>. #ORCID NAME IDENTIFIER
      ?orcid_appellation crm:P190_has_symbolic_content ?name
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?ORCID_identifier.
      ?ORCID_identifier crm:P2_has_type <${o.orcidId}>. #ORCID IDENTIFIER
      ?ORCID_identifier crm:P190_has_symbolic_content ?orcid
    }
    OPTIONAL {
    	GRAPH ?g2 {
      		?contributor crm:P1_is_identified_by ?untyped_identifier.
        	FILTER(ISLITERAL(?untyped_identifier))
      }
    }
    GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> { #ALL ANNOTATIONS ARE SUPPOSED TO BE DONE IN SHERLOCK GRAPH
      VALUES ?contribution_predicate { dcterms:creator crm:P14_carried_out_by }
    	?contribution ?contribution_predicate ?contributor 
    }
  }
}
GROUP BY ?contributor ?name ?hex_color_code ?emoji ?orcid ?orcid_profile ?untyped_identifier ?contributor_type_label ?user_graph`, it = (t) => `
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX she: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT ?e13_p140 (GROUP_CONCAT(DISTINCT ?e13_p140_label ; separator=" \\n~~\\n ") as ?e13_p140_labels) ?e13_p177 ?e13_p177_label ?concept ?concept_description ?context (GROUP_CONCAT(DISTINCT ?context_label ; separator=" \\n~~\\n ") as ?context_labels) ?creation_date ?creator ?creator_label ?analytical_project ?analytical_project_label
WHERE 
{ 
    GRAPH <http://data-iremus.huma-num.fr/graph/opentheso> {
        <${t}> skos:narrower* ?concept .
        OPTIONAL {
            ?concept dcterms:description ?concept_description .
        }

        #CAS OU LE CONCEPT EST RELIE PAR UNE E13
        OPTIONAL {
            GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant> {  
                ?e13 crm:P141_assigned ?concept .
            }
        }

        #CAS OU LE CONCEPT EST ASSOCIE A UNE ENTITE, ELLE MEME RELIEE A UNE E13
        OPTIONAL {
            GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant> {  
                ?s ?p ?concept .
                ?e13 crm:P141_assigned ?s .
            }
        }

        #TRIPLETS CONTEXTUELS
        OPTIONAL {
            GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant> {  

                OPTIONAL {
                    ?e13 crm:P177_assigned_property_of_type ?e13_p177 .
                    OPTIONAL {
                        GRAPH ?graph_indexation_type {
                            ?e13_p177 crm:P1_is_identified_by ?e13_p177_label
                        }
                    }
                }
                OPTIONAL {
                    ?e13 crm:P140_assigned_attribute_to ?e13_p140 .
                    OPTIONAL {
                        GRAPH ?graph_e13_p140 {
                            ?e13_p140 crm:P1_is_identified_by ?e13_p140_identifier .
                            ?e13_p140_identifier crm:P190_has_symbolic_content ?e13_p140_label
                        }
                    }
                }    
                OPTIONAL {
                    ?e13 she:has_document_context ?context .
                    OPTIONAL {
                        GRAPH ?graph_context {
                            ?context crm:P1_is_identified_by ?context_identifier .
                            ?context_identifier crm:P190_has_symbolic_content ?context_label
                        }
                    }
                }
                OPTIONAL {
                    ?analytical_project crm:P9_consists_of ?e13 .
                    OPTIONAL {
                        GRAPH ?graph_analytical_project {
                            ?analytical_project crm:P1_is_identified_by ?analytical_project_label
                        }
                    }
                }
                OPTIONAL {
                    ?e13 dcterms:created ?creation_date .
                }
                OPTIONAL {
                    ?e13 crm:P14_carried_out_by ?creator .
                    OPTIONAL {
                        GRAPH ?graph_indexation_creator {
                            ?creator crm:P1_is_identified_by ?creator_label
                        }
                    }
                }
            }
        }

    }

} 
GROUP BY ?e13_p140 ?e13_p177 ?e13_p177_label ?concept ?concept_description ?context ?creation_date ?creator ?creator_label ?analytical_project ?analytical_project_label

`, _t = (t) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT DISTINCT ?score ?annotation ?verticality ?note_label ?measure_number 
WHERE {
  GRAPH ?g {
    ${H(t)}
    ?score crm:P2_has_type <${o.score}>. #Score type
    ?verticality sherlock:has_document_context ?score.
    ?verticality crm:P2_has_type <${o.verticality}>. #MEI score offset
    ?note_in_score sherlockmei:contains_beat ?verticality.
    ?note_in_score sherlockmei:measure_number ?measure_number.
    GRAPH ?sherlock_graph {
        ?annotation crm:P140_assigned_attribute_to ?verticality.
        ?annotation crm:P177_assigned_property_of_type <${o.fondamentaleIdentification}>. #Identification de fondamentale
        ?annotation crm:P141_assigned ?note.
        GRAPH ?sherlock_data_graph {
            ?note crm:P1_is_identified_by ?note_label
        }
    }
  }
}
ORDER BY ?score ?measure_number
`, H = (t) => t ? `BIND (<${t}> as ?score).` : "", st = () => `
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
`, mt = () => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>

SELECT ?ontology (COUNT(?concept) AS ?concepts) (COUNT(?property) AS ?properties)
WHERE {
 GRAPH <http://data-iremus.huma-num.fr/graph/modality-tonality-ontology> {
    {
      ?concept rdf:type owl:Class.
      ?ontology rdf:type owl:Ontology.
      FILTER(STRSTARTS(STR(?concept), STR(?ontology))).
    }
    UNION 
    {
      ?property rdf:type owl:ObjectProperty.
      ?ontology rdf:type owl:Ontology.
      FILTER(STRSTARTS(STR(?property), STR(?ontology))).
      
    }
  }
}
GROUP BY ?ontology ?author ?comment
`, U = [
  "crm:P1_is_identified_by",
  "crm:P102_has_title dcterms:title",
  "rdfs:label",
  "skos:prefLabel",
  "skos:altLabel",
  "crm:P190_has_symbolic_content"
], k = () => U.join(" "), X = [
  "crm:P1_is_identified_by",
  "crm:P102_has_title"
], x = () => X.join(" "), D = [
  "crm:E35_Title",
  "crm:E41_Appellation",
  "crm:E42_Identifier"
], j = () => D.join(" "), v = ["crm:P2_has_type", "rdf:type"], M = () => v.join(" "), dt = (t, r = !1, e = !1, n = !1, a = "", m = "OUTGOING") => (console.log(`identity has been called with 

  resource : %s
  getLinkedResourcesIdentity: %o
  appendE13ifiedIdentity: %o
  countLinkedResources: %o
  linkingPredicate: %s
  linkedResourcesDirection: %s`, t, r, e, n, a, m), r ? W(
  t,
  n,
  a,
  m
) : B(t, n, e)), B = (t, r, e) => `
  ${u()}
  SELECT *
  WHERE {
    GRAPH ?g {
      ${i(
  `<${t}>`,
  "?p",
  "?label",
  e
)}
      ${_(
  `<${t}>`,
  "?p",
  "?r",
  "?label",
  e
)}
      ${d(`<${t}>`, e)}
      ${l(`<${t}>`)}
      ${p(`<${t}>`, r)}
    }
  }`, W = (t, r, e, n) => {
  const a = e ? `<${e}>` : "?lp";
  return `
  ${u()}
  SELECT *
  WHERE {
    GRAPH ?lr_g {
      ${V(
    `<${t}>`,
    a,
    n
  )}
      OPTIONAL {
        GRAPH ?g {
          ${i("?lr", "?p", "?label", !1)}
          ${_("?lr", "?p", "?r", "?label", !1)}
          ${d("?lr", !1)}
          ${l("?lr")}
          ${p("?lr", r)}
        }
      }
    }
  }`;
}, i = (t, r, e, n) => `
{
  VALUES ${r} { ${k()} } .
  ${s(
  t,
  r,
  e,
  n
)}
  FILTER(isLiteral(${e})) .  
}
`, _ = (t, r, e, n, a) => `
  UNION
  {
    VALUES ${r} { ${x()} }
    ${s(
  t,
  r,
  e,
  a
)}
    GRAPH ${e}_types__g { 
      VALUES ${e}_type { ${j()} }
      ${e} rdf:type ${e}_type .
      ${e} crm:P190_has_symbolic_content ${n} .
    }
    OPTIONAL {
      GRAPH ${e}_types_types__graph {
        ${e} crm:P2_has_type ${e}_type_type .
        GRAPH ${e}_types_types_label_graph {
          ${e}_type_type crm:P1_is_identified_by ${e}_type_type__label .
        }
      }
    }
  }
  `, d = (t, r) => `
  UNION {
    GRAPH ?e32_e55__g {
      ${s(
  "?e32",
  "crm:P71_lists",
  t,
  r
)}
    }
    OPTIONAL {
      GRAPH ?e32__g {
        ?e32 crm:P1_is_identified_by ?e32__label .
      }
    }
  }`, l = (t) => `
UNION {
  VALUES ?p { ${M()} }
  ${t} ?p ?r .
  OPTIONAL {
    GRAPH ?r_types__g {
      VALUES ?r_type { crm:E55_Type } .
      ?r rdf:type ?r_type .
      ?r crm:P1_is_identified_by ?label .
      ?type_e32 crm:P71_lists ?r .
      FILTER(isLiteral(?label)) .
      OPTIONAL {
        GRAPH ?type_e32__g {
          ?type_e32 crm:P1_is_identified_by ?type_e32__label .
        }
      }
    }
  }
}
`, p = (t, r) => r ? `
    UNION {
      SELECT (COUNT(?r_out) AS ?c_out) ?lr
      WHERE { GRAPH ?g_out { ${t} ?p_out ?r_out } }
      GROUP BY ?c_out ?lr
    }
    UNION {
      SELECT (COUNT(*) AS ?c_in) ?lr
      WHERE { GRAPH ?g_in { ?r_in ?p_in ${t} } }
      GROUP BY ?c_in ?lr
    }` : "", Y = (t, r, e, n) => n ? `
    UNION 
    {
      ?e13 crm:P177_assigned_property_of_type ${r} .
      ?e13 crm:P140_assigned_attribute_to ${t} .
      ?e13 crm:P141_assigned ${e} .
      ?e13 crm:P14_carried_out_by ?e13_carrier .
      OPTIONAL {
        GRAPH ?e13_g {
          ${i(
  "?e13_carrier",
  "?e13_carrier_p",
  "?e13_carrier_label",
  !1
)}
          ${_(
  "?e13_carrier",
  "?e13_carrier_p",
  "?e13_carrier_object",
  "?e13_carrier_label",
  !1
)}
        }
      }
    }` : "", s = (t, r, e, n) => `
    {
      ${t} ${r} ${e} .
    }
    ${Y(
  t,
  r,
  e,
  n
)}
  `, V = (t, r, e) => {
  if (e === "INCOMING")
    return `?lr ${r} ${t}`;
  if (e === "OUTGOING")
    return `${t} ${r} ?lr`;
}, u = () => `
  PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
  PREFIX dcterms: <http://purl.org/dc/terms/>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  `, lt = () => `
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
        ?E42_reference_livraison crm:P190_has_symbolic_content ?reference_livraison .
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
`, pt = (t, r) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT ?note_pname (count(?note) AS ?notes) 
WHERE {
  GRAPH ?g {
    ?note sherlock:has_document_context <${t}>.
    ?note crm:P2_has_type <${o.note}>. #NOTE
    ?note sherlockmei:pname ?note_pname.
    ${r && `VALUES ?note_pname { "${r}" }`}
  }
}
GROUP BY ?note_pname`, ut = (t) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT *
WHERE {
  GRAPH ?g {
    <${t}> crm:P127_has_broader_term* ?bt .
    ?bt crm:P1_is_identified_by ?bt_label .
    OPTIONAL {
      ?bt crm:P127_has_broader_term ?btbt .
      ?btbt crm:P1_is_identified_by ?btbt_label .
    }
  }
}
`, ht = (t) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE { <${t}> crm:P140_assigned_attribute_to ?p140 }`, Et = () => `
BASE <http://data-iremus.huma-num.fr/id/>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>

SELECT
    ?score
    (IRI(CONCAT("http://data-iremus.huma-num.fr/files/modality-tonality/mei/", STRAFTER(STR(?score), "http://data-iremus.huma-num.fr/id/"), ".mei")) AS ?mei_file) 
    (COUNT(DISTINCT ?direct_e13) AS ?count_direct_e13)
    (COUNT(DISTINCT ?e13_on_fragment) AS ?count_e13_on_fragment)
    (COUNT(DISTINCT ?e13_on_selection) AS ?count_e13_on_selection)
    (COUNT(DISTINCT ?e13_e13_on_analytical_entity) AS ?count_e13_on_analytical_entity)
    (COUNT(DISTINCT ?selection) AS ?count_selections)
    (?count_direct_e13 + ?count_e13_on_fragment + ?count_e13_on_selection + ?count_e13_on_analytical_entity AS ?count_e13_total)
WHERE {
    GRAPH <http://data-iremus.huma-num.fr/graph/catalogue> {
        ?score crm:P2_has_type <${o.score}> .
        {
            GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> {
                ?direct_e13 rdf:type crm:E13_Attribute_Assignment .
                ?direct_e13 crm:P140_assigned_attribute_to ?score .
            }
        }
        UNION {
            GRAPH <http://data-iremus.huma-num.fr/graph/mei> {
                ?fragment crm:P106i_forms_part_of ?score .
            }
            GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> {
                ?e13_on_fragment rdf:type crm:E13_Attribute_Assignment .
                ?e13_on_fragment crm:P140_assigned_attribute_to ?fragment .
            }
        }
        UNION {
            GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> {
                ?e13_on_selection rdf:type crm:E13_Attribute_Assignment .
                ?e13_on_selection crm:P140_assigned_attribute_to ?selection .
                ?selection crm:P2_has_type <${o.selection}> .
                ?selection sherlock:has_document_context ?score .
            }
        }
        UNION {
            GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> {
                ?e13_on_analytical_entity rdf:type crm:E13_Attribute_Assignment .
                ?e13_on_analytical_entity crm:P141_assigned ?analytical_entity .
                ?analytical_entity rdf:type crm:E28_Conceptual_Object .
                ?analytical_entity crm:P2_has_type <${o.analyticalEntity}> .
                ?e13_on_analytical_entity crm:P140_assigned_attribute_to ?analytical_selection .
                ?analytical_selection sherlock:has_document_context ?score .
            }
        }
    }
}
GROUP BY ?score
`, Pt = (t) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT DISTINCT 
?selection 
?contributor
?date
?min_measure_number 
?items_count 
?analyticalEntity_type 
WHERE {
    GRAPH ?g {
      ?selection dcterms:creator ?contributor.
      #######################################
      #### GET ANALYTICAL ENTITIES TYPES ####
      #######################################
      OPTIONAL {
          ?e13_selection_analyticalEntity crm:P140_assigned_attribute_to ?selection.
          ?e13_selection_analyticalEntity rdf:type crm:E13_Attribute_Assignment.
          ?e13_selection_analyticalEntity crm:P141_assigned ?analyticalEntity.
          ?analyticalEntity crm:P2_has_type <${o.analyticalEntity}>.
          ?e13_analyticalEntity_types crm:P140_assigned_attribute_to ?analyticalEntity.
          ?e13_analyticalEntity_types crm:P177_assigned_property_of_type rdf:type.
          ?e13_analyticalEntity_types crm:P141_assigned ?analyticalEntity_type
       }
  	}
  { 
    SELECT DISTINCT ?date ?selection (count(?item) AS ?items_count) (MIN(?recursive_measure_number) AS ?min_measure_number)
    WHERE {
	  GRAPH ?g1 {  
        #######################################
        ######## GET SELECTIONS ITEMS #########
        #######################################
        ?selection dcterms:created ?date.
        ?selection sherlock:has_document_context <${t}>.
        ?selection crm:P2_has_type <${o.selection}>.
        ?selection crm:P106_is_composed_of* ?item.

        #######################################
        ######## GET MEASURE NUMBERS ##########
        #######################################

       	# If the item has no measure_number (is most likely a selection), remove it from count 
       	FILTER(?recursive_measure_number > 0)
       	OPTIONAL {
          GRAPH ?g2 { #SIMPLE NOTE
          	?item sherlockmei:measure_number ?recursive_measure_number. 
          }
        }
        OPTIONAL {
          graph ?g2 { #POSITIONED NOTE
          	?beat_anchor sherlockmei:has_beat_anchor ?item.
          	?beat_anchor sherlockmei:measure_number ?recursive_measure_number
          }
        }
        OPTIONAL {
          graph ?g2 { # VERTICALITY
          	?contains_beat sherlockmei:contains_beat ?item.
          	?contains_beat sherlockmei:measure_number ?recursive_measure_number
          }
        }
      }
    }
    GROUP BY ?selection ?date
  }
}

GROUP BY ?selection ?contributor ?date ?analyticalEntity_type ?items_count ?min_measure_number
`;
export {
  Q as ANALYTICAL_ENTITY,
  h as ANALYTICAL_PROJECT,
  et as ANNOTATION,
  E as DRAFT_PROJECT,
  J as NOTE,
  q as POSITIONNED_NOTE,
  Z as SCORE,
  K as SELECTION,
  tt as SOFTWARE,
  z as VERTICALITY,
  nt as contributions,
  at as contributors,
  it as documentsByIndex,
  _t as fondamentales,
  rt as getAnalyticalProject,
  ot as getAnnotations,
  ct as getContributor,
  ht as getP140,
  st as getResources,
  mt as historicalModelsOntologies,
  dt as identity,
  lt as mg_livraisons,
  pt as noteOccurences,
  ut as p127,
  Et as scores,
  Pt as selections
};

var x = Object.defineProperty;
var B = (t, e, r) => e in t ? x(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var a = (t, e, r) => (B(t, typeof e != "symbol" ? e + "" : e, r), r);
const I = "http://purl.org/ontology/bibo/", p = "http://www.cidoc-crm.org/lrmoo/", s = "http://www.cidoc-crm.org/cidoc-crm/", u = "http://www.ics.forth.gr/isl/CRMdig/", b = "http://purl.org/dc/elements/1.1/", l = "http://purl.org/dc/terms/", i = "http://xmlns.com/foaf/0.1/", T = "http://data-iremus.huma-num.fr/ns/hemef#", W = "http://data-iremus.huma-num.fr/files/", c = "http://data-iremus.huma-num.fr/id/", g = "http://data-iremus.huma-num.fr/id/", A = "http://data-iremus.huma-num.fr/ns/", S = "http://data-iremus.huma-num.fr/graph/", w = "http://data-iremus.huma-num.fr/ns/musrad30#", N = "http://www.w3.org/2002/07/owl#", E = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", m = "http://www.w3.org/2000/01/rdf-schema#", F = "http://schema.org/", d = "http://www.w3.org/2004/02/skos/core#", h = {
  [s]: "crm",
  [u]: "crmdig",
  [I]: "bibo",
  [b]: "dc",
  [l]: "dcterms",
  [i]: "foaf",
  [T]: "hemef",
  [g]: "",
  [A]: "",
  [w]: "musrad30",
  [p]: "lrmoo",
  [N]: "owl",
  [E]: "rdf",
  [m]: "rdfs",
  [F]: "schema",
  [d]: "skos",
  [S]: ""
}, Y = Object.entries(h).sort(
  (t, e) => t[0].length < e[0].length ? 1 : -1
), L = [
  s + "P1_is_identified_by",
  b + "title",
  l + "title",
  i + "familyName",
  i + "firstName",
  i + "givenName",
  i + "name",
  m + "label",
  d + "prefLabel"
], z = [
  ...L,
  E + "type",
  l + "creator",
  d + "inScheme",
  m + "subClassOf"
], o = {
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
}, V = {
  de: "🇩🇪",
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
  it: "🇮🇹"
}, q = ["fr", "en", "it", "de", "es"];
function K(t) {
  return t.startsWith(s) || t.startsWith(u) || t.startsWith(p) ? t.split("/").slice(-1)[0].split("_")[0] : null;
}
function C(t) {
  for (const [e, r] of Object.entries(h))
    t = t.replace(e, r !== "" ? r + ":" : "");
  return t;
}
function $(t) {
  const e = t.find((r) => r.label);
  return e ? e.label.value : "";
}
function J(t, e) {
  return `${$(e)}   ${C(t)}`;
}
const Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BIBO_BASE: I,
  COUNTRY_FLAGS: V,
  CRMDIG_BASE: u,
  CRM_BASE: s,
  DATA_IREMUS_FILES_BASE: W,
  DATA_IREMUS_ID_BASE: c,
  DCTERMS_BASE: l,
  DC_BASE: b,
  FOAF_BASE: i,
  HEMEF_BASE: T,
  IREMUS_GRAPH_BASE: S,
  IREMUS_NS_BASE: A,
  IREMUS_RESOURCE_BASE: g,
  LABEL_PREDICATES: L,
  LANGS_ORDER: q,
  LRMOO_BASE: p,
  MUSRAD30_BASE: w,
  OWL_BASE: N,
  PRIORITIZED_RDF_PREFIXES: Y,
  RDFS_BASE: m,
  RDF_BASE: E,
  RDF_PREFIXES: h,
  RESOURCE_IDENTITY_PREDICATES: z,
  SCHEMAORG_BASE: F,
  SHERLOCK_TYPE: o,
  SKOS_BASE: d,
  computeIdentity: $,
  computeResourceLabel: J,
  formatUri: C,
  getCode: K
}, Symbol.toStringTag, { value: "Module" })), Q = async (t) => {
  let e = await fetch("https://data-iremus.huma-num.fr/sparql", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    },
    mode: "cors",
    cache: "no-cache",
    redirect: "follow",
    body: `query=${encodeURIComponent(t)}`
  });
  return e = await e.json(), e;
}, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  sparqlEndpoint: Q
}, Symbol.toStringTag, { value: "Module" }));
var f = /* @__PURE__ */ ((t) => (t.literal = "literal", t.uri = "uri", t))(f || {}), P = /* @__PURE__ */ ((t) => (t.NONE = "", t.DE = "de", t.EL = "el", t.EN = "en", t.ES = "es", t.FR = "fr", t.PT = "pt", t.RU = "ru", t.ZH = "zh", t))(P || {});
const Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Languages: P,
  Type: f
}, Symbol.toStringTag, { value: "Module" }));
class Z {
  constructor() {
    a(this, "head");
    a(this, "results");
    this.head = new j(), this.results = new H();
  }
}
class j {
  constructor() {
    a(this, "vars");
    this.vars = [];
  }
}
class H {
  constructor() {
    a(this, "bindings");
    this.bindings = [];
  }
}
class tt {
}
class et {
  constructor() {
    a(this, "lang");
    a(this, "type");
    a(this, "value");
    this.lang = P.NONE, this.type = f.uri, this.value = "";
  }
}
const xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SparqlResultObject: Z,
  SparqlResultObject_Binding: tt,
  SparqlResultObject_Head: j,
  SparqlResultObject_Results: H,
  SparqlResultObject_Variable: et
}, Symbol.toStringTag, { value: "Module" })), rt = "http://data-iremus.huma-num.fr/id/d2a536eb-4a95-484f-b13d-f597ac8ea2fd", ot = "http://data-iremus.huma-num.fr/id/9d0388cb-a178-46b2-b047-b5a98f7bdf0b", nt = "http://data-iremus.huma-num.fr/id/689e148d-a97d-45b4-898d-c395a24884df", ct = "http://data-iremus.huma-num.fr/id/90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86", at = "http://data-iremus.huma-num.fr/id/6d72746a-9f28-4739-8786-c6415d53c56d", it = "http://data-iremus.huma-num.fr/id/bf9dce29-8123-4e8e-b24d-0c7f134bbc8e", _t = "http://data-iremus.huma-num.fr/id/29b00e39-75da-4945-b6c4-a0ca00f96f68", st = "http://data-iremus.huma-num.fr/id/82dbd157-20df-422c-88db-28d6075d99a1", U = "http://data-iremus.huma-num.fr/id/21816195-6708-4bbd-a758-ee354bb84900", G = "http://data-iremus.huma-num.fr/id/cabe46bf-23d4-4392-aa20-b3eb21ad7dfd", Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ANALYTICAL_ENTITY: at,
  ANALYTICAL_PROJECT: U,
  ANNOTATION: st,
  DRAFT_PROJECT: G,
  NOTE: rt,
  POSITIONNED_NOTE: nt,
  SCORE: it,
  SELECTION: ot,
  SOFTWARE: _t,
  VERTICALITY: ct
}, Symbol.toStringTag, { value: "Module" })), lt = (t) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
    VALUES ?project { <${t}> }
    VALUES ?draft { <${G}> }
    ?project crm:P2_has_type <${U}>.
    ?project crm:P1_is_identified_by ?label.
    ?project crm:P14_carried_out_by ?contributor.
    OPTIONAL { ?project sherlock:has_privacy_type ?draft }.
}
LIMIT 1`, Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAnalyticalProject: lt
}, Symbol.toStringTag, { value: "Module" })), mt = (t, e) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX dcterms: <http://purl.org/dc/terms/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
  ?annotation sherlock:has_document_context <${t}>.
  <${e}> crm:P9_consists_of ?annotation.
  ?annotation crm:P141_assigned ?concept.
  ?annotation dcterms:created ?date.
  ?annotation crm:P140_assigned_attribute_to  ?entity.
  ?e13 crm:P141_assigned ?entity.
  ?e13 sherlock:has_document_context ?page.
}
`, Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAnnotations: mt
}, Symbol.toStringTag, { value: "Module" })), dt = (t) => `
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
`, zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  contributions: dt
}, Symbol.toStringTag, { value: "Module" })), pt = (t) => `
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
}`, Vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getContributor: pt
}, Symbol.toStringTag, { value: "Module" })), ut = () => `
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
GROUP BY ?contributor ?name ?hex_color_code ?emoji ?orcid ?orcid_profile ?untyped_identifier ?contributor_type_label ?user_graph`, qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  contributors: ut
}, Symbol.toStringTag, { value: "Module" })), bt = (t) => `
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

`, Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  documentsByIndex: bt
}, Symbol.toStringTag, { value: "Module" })), Et = (t) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT DISTINCT ?score ?annotation ?verticality ?note_label ?measure_number 
WHERE {
  GRAPH ?g {
    ${ht(t)}
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
`, ht = (t) => t ? `BIND (<${t}> as ?score).` : "", Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fondamentales: Et
}, Symbol.toStringTag, { value: "Module" })), ft = () => `
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
`, Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getResources: ft
}, Symbol.toStringTag, { value: "Module" })), Pt = () => `
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
`, Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  historicalModelsOntologies: Pt
}, Symbol.toStringTag, { value: "Module" })), yt = [
  "crm:P1_is_identified_by",
  "crm:P102_has_title dcterms:title",
  "rdfs:label",
  "skos:prefLabel",
  "skos:altLabel",
  "crm:P190_has_symbolic_content"
], Rt = () => yt.join(" "), Ot = [
  "crm:P1_is_identified_by",
  "crm:P102_has_title"
], It = () => Ot.join(" "), Tt = [
  "crm:E35_Title",
  "crm:E41_Appellation",
  "crm:E42_Identifier"
], gt = () => Tt.join(" "), At = ["crm:P2_has_type", "rdf:type"], St = () => At.join(" "), wt = (t, e = !1, r = !1, n = !1, _ = "", X = "OUTGOING") => e ? Ft(
  t,
  n,
  _,
  X
) : Nt(t, n, r), Nt = (t, e, r) => `
  ${k()}
  SELECT *
  WHERE {
    GRAPH ?g {
      ${y(
  `<${t}>`,
  "?p",
  "?label",
  r
)}
      ${R(
  `<${t}>`,
  "?p",
  "?r",
  "?label",
  r
)}
      ${M(`<${t}>`, r)}
      ${v(`<${t}>`)}
      ${D(`<${t}>`, e)}
    }
  }`, Ft = (t, e, r, n) => {
  const _ = r ? `<${r}>` : "?lp";
  return `
  ${k()}
  SELECT *
  WHERE {
    GRAPH ?lr_g {
      ${Ct(
    `<${t}>`,
    _,
    n
  )}
      OPTIONAL {
        GRAPH ?g {
          ${y("?lr", "?p", "?label", !1)}
          ${R("?lr", "?p", "?r", "?label", !1)}
          ${M("?lr", !1)}
          ${v("?lr")}
          ${D("?lr", e)}
        }
      }
    }
  }`;
}, y = (t, e, r, n) => `
{
  VALUES ${e} { ${Rt()} } .
  ${O(
  t,
  e,
  r,
  n
)}
  FILTER(isLiteral(${r})) .  
}
`, R = (t, e, r, n, _) => `
  UNION
  {
    VALUES ${e} { ${It()} }
    ${O(
  t,
  e,
  r,
  _
)}
    GRAPH ${r}_types__g { 
      VALUES ${r}_type { ${gt()} }
      ${r} rdf:type ${r}_type .
      ${r} crm:P190_has_symbolic_content ${n} .
    }
    OPTIONAL {
      GRAPH ${r}_types_types__graph {
        ${r} crm:P2_has_type ${r}_type_type .
        GRAPH ${r}_types_types_label_graph {
          ${r}_type_type crm:P1_is_identified_by ${r}_type_type__label .
        }
      }
    }
  }
  `, M = (t, e) => `
  UNION {
    GRAPH ?e32_e55__g {
      ${O(
  "?e32",
  "crm:P71_lists",
  t,
  e
)}
    }
    OPTIONAL {
      GRAPH ?e32__g {
        ?e32 crm:P1_is_identified_by ?e32__label .
      }
    }
  }`, v = (t) => `
UNION {
  VALUES ?p { ${St()} }
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
`, D = (t, e) => e ? `
    UNION {
      SELECT (COUNT(?r_out) AS ?c_out) ?lr
      WHERE { GRAPH ?g_out { ${t} ?p_out ?r_out } }
      GROUP BY ?c_out ?lr
    }
    UNION {
      SELECT (COUNT(*) AS ?c_in) ?lr
      WHERE { GRAPH ?g_in { ?r_in ?p_in ${t} } }
      GROUP BY ?c_in ?lr
    }` : "", Lt = (t, e, r, n) => n ? `
    UNION 
    {
      ?e13 crm:P177_assigned_property_of_type ${e} .
      ?e13 crm:P140_assigned_attribute_to ${t} .
      ?e13 crm:P141_assigned ${r} .
      ?e13 crm:P14_carried_out_by ?e13_carrier .
      OPTIONAL {
        GRAPH ?e13_g {
          ${y(
  "?e13_carrier",
  "?e13_carrier_p",
  "?e13_carrier_label",
  !1
)}
          ${R(
  "?e13_carrier",
  "?e13_carrier_p",
  "?e13_carrier_object",
  "?e13_carrier_label",
  !1
)}
        }
      }
    }` : "", O = (t, e, r, n) => `
    {
      ${t} ${e} ${r} .
    }
    ${Lt(
  t,
  e,
  r,
  n
)}
  `, Ct = (t, e, r) => {
  if (r === "INCOMING")
    return `?lr ${e} ${t}`;
  if (r === "OUTGOING")
    return `${t} ${e} ?lr`;
}, k = () => `
  PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
  PREFIX dcterms: <http://purl.org/dc/terms/>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  `, te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: wt
}, Symbol.toStringTag, { value: "Module" })), $t = () => `
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
`, ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  mg_livraisons: $t
}, Symbol.toStringTag, { value: "Module" })), jt = (t, e) => `

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
    ${e && `VALUES ?note_pname { "${e}" }`}
  }
}
GROUP BY ?note_pname`, re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  noteOccurences: jt
}, Symbol.toStringTag, { value: "Module" })), Ht = (t) => `
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
`, oe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  p127: Ht
}, Symbol.toStringTag, { value: "Module" })), Ut = (t) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE { <${t}> crm:P140_assigned_attribute_to ?p140 }`, ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getP140: Ut
}, Symbol.toStringTag, { value: "Module" })), Gt = () => `
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
`, ce = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scores: Gt
}, Symbol.toStringTag, { value: "Module" })), Mt = (t) => `
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
`, ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selections: Mt
}, Symbol.toStringTag, { value: "Module" }));
function ie(t, e) {
  for (const r in e)
    t = t.replaceAll("${" + r + "}", e[r]);
  return t;
}
export {
  Xt as MODEL_RDF,
  xt as MODEL_SPARQL,
  Dt as RDF,
  kt as SPARQL,
  Yt as annotations,
  ie as bind,
  Bt as constants,
  zt as contributons,
  Vt as contributor,
  qt as contributors,
  Kt as documentsByIndex,
  Jt as fondamentales,
  Wt as getAnalyticalProject,
  ne as getP140,
  Qt as getResources,
  Zt as historicalModelsOntologies,
  te as identity,
  ee as mg_livraisons,
  re as noteOccurences,
  oe as p127,
  ce as scores,
  ae as selections
};

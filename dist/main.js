const Yd = "http://data-iremus.huma-num.fr/id/d2a536eb-4a95-484f-b13d-f597ac8ea2fd", zd = "http://data-iremus.huma-num.fr/id/9d0388cb-a178-46b2-b047-b5a98f7bdf0b", Qd = "http://data-iremus.huma-num.fr/id/689e148d-a97d-45b4-898d-c395a24884df", Zd = "http://data-iremus.huma-num.fr/id/90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86", Kd = "http://data-iremus.huma-num.fr/id/6d72746a-9f28-4739-8786-c6415d53c56d", Jd = "http://data-iremus.huma-num.fr/id/bf9dce29-8123-4e8e-b24d-0c7f134bbc8e", qd = "http://data-iremus.huma-num.fr/id/29b00e39-75da-4945-b6c4-a0ca00f96f68", e1 = "http://data-iremus.huma-num.fr/id/82dbd157-20df-422c-88db-28d6075d99a1", Fg = "http://data-iremus.huma-num.fr/id/21816195-6708-4bbd-a758-ee354bb84900", xg = "http://data-iremus.huma-num.fr/id/cabe46bf-23d4-4392-aa20-b3eb21ad7dfd", s1 = (i) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
    VALUES ?project { <${i}> }
    VALUES ?draft { <${xg}> }
    ?project crm:P2_has_type <${Fg}>.
    ?project crm:P1_is_identified_by ?label.
    ?project crm:P14_carried_out_by ?contributor.
    OPTIONAL { ?project sherlock:has_privacy_type ?draft }.
}
LIMIT 1`, r1 = (i, d) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX dcterms: <http://purl.org/dc/terms/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
  ?annotation sherlock:has_document_context <${i}>.
  <${d}> crm:P9_consists_of ?annotation.
  ?annotation crm:P141_assigned ?concept.
  ?annotation dcterms:created ?date.
  ?annotation crm:P140_assigned_attribute_to  ?entity.
  ?e13 crm:P141_assigned ?entity.
  ?e13 sherlock:has_document_context ?page.
}
`;
var Dg = Object.defineProperty, Gg = (i, d, e) => d in i ? Dg(i, d, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[d] = e, X = (i, d, e) => Gg(i, typeof d != "symbol" ? d + "" : d, e);
const Ug = "http://purl.org/ontology/bibo/", Hg = "http://www.cidoc-crm.org/lrmoo/", Bg = "http://www.cidoc-crm.org/cidoc-crm/", kg = "http://www.ics.forth.gr/isl/CRMdig/", Mg = "http://dbpedia.org/resource/", jg = "http://purl.org/dc/elements/1.1/", Xg = "http://purl.org/dc/terms/", Vg = "http://xmlns.com/foaf/0.1/", Wg = "http://data-iremus.huma-num.fr/ns/hemef#", oe = "http://data-iremus.huma-num.fr/id/", Yg = "http://data-iremus.huma-num.fr/id/", zg = "http://data-iremus.huma-num.fr/ns/", Qg = "http://data-iremus.huma-num.fr/graph/", Zg = "http://www.mimo-db.eu/", Kg = "http://data-iremus.huma-num.fr/ns/musrad30#", Jg = "http://www.w3.org/2002/07/owl#", qg = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", ed = "http://www.w3.org/2000/01/rdf-schema#", sd = "http://schema.org/", rd = "http://www.w3.org/2004/02/skos/core#", td = /* @__PURE__ */ new Map([
  [Bg, "crm"],
  [kg, "crmdig"],
  [Ug, "bibo"],
  [Mg, "dbpedia"],
  [jg, "dc"],
  [Xg, "dcterms"],
  [Vg, "foaf"],
  [Wg, "hemef"],
  [Qg, "iremus-graph"],
  [Yg, "iremus-data"],
  [zg, "iremus-ns"],
  [Hg, "lrmoo"],
  [Zg, "mimo"],
  [Kg, "musrad30"],
  [Jg, "owl"],
  [qg, "rdf"],
  [ed, "rdfs"],
  [sd, "schema"],
  [rd, "skos"]
]);
Object.entries(td).sort(
  (i, d) => i[0].length < d[0].length ? 1 : -1
);
class id {
  constructor(d = "") {
    X(this, "_pog"), X(this, "_uri"), this._uri = d, this._pog = /* @__PURE__ */ new Map();
  }
  getValues(d) {
    return this._pog.get(d);
  }
  addPOG(d, e) {
    var m;
    this._pog.has(d) ? (m = this._pog.get(d)) == null || m.push(e) : this._pog.set(d, [e]);
  }
  get uri() {
    return this._uri;
  }
  get pog() {
    return this._pog;
  }
}
const Xr = class {
  constructor(d) {
    X(this, "_classesRegistry", /* @__PURE__ */ new Map()), X(this, "_name"), X(this, "_classes"), X(this, "_properties"), X(this, "_propertiesRegistry", /* @__PURE__ */ new Map()), this._name = d, this._classes = [], this._properties = [];
  }
  addClass(d) {
    this._classes.push(d), this._classes = this._classes.sort(), this._classesRegistry.set(d.uri, d);
  }
  addProperty(d) {
    this._properties.push(d), this._properties = this._properties.sort(), this._propertiesRegistry.set(d.uri, d);
  }
  get name() {
    return this._name;
  }
  get classes() {
    return this._classes;
  }
  get properties() {
    return this._properties;
  }
  get classesRegistry() {
    return this._classesRegistry;
  }
  get propertiesRegistry() {
    return this._propertiesRegistry;
  }
  sortAll() {
    this._classes = this._classes.sort((d, e) => d.intCodeForSorting - e.intCodeForSorting), this._properties = this._properties.sort((d, e) => d.intCodeForSorting - e.intCodeForSorting);
  }
};
X(Xr, "void", new Xr(""));
let Fi = Xr;
class Yr extends id {
  constructor(d, e, m) {
    super(d), X(this, "_comment"), X(this, "_intCodeForSorting"), X(this, "_label"), X(this, "_name"), X(this, "_ontology"), this._comment = /* @__PURE__ */ new Map(), this._intCodeForSorting = -1, this._label = /* @__PURE__ */ new Map(), this._name = e, this._ontology = m;
  }
  get comment() {
    return this._comment;
  }
  set comment(d) {
    this._comment = d;
  }
  get intCodeForSorting() {
    return this._intCodeForSorting;
  }
  set intCodeForSorting(d) {
    this._intCodeForSorting = d;
  }
  set label(d) {
    this._label = d;
  }
  get name() {
    return this._name;
  }
  get ontology() {
    return this._ontology;
  }
  getComment(d) {
    return this._comment.get(d);
  }
  getLabel(d) {
    return this._label.get(d);
  }
}
X(Yr, "label", "");
const Vr = class extends Yr {
  constructor(d, e, m) {
    super(d, e, m), X(this, "_subClassOf"), this._subClassOf = new Array();
  }
  addSubClassOf(d) {
    this._subClassOf.push(d);
  }
};
X(Vr, "void", new Vr("", "", Fi.void));
let Ii = Vr;
const Oi = class xi extends Yr {
  constructor(d, e, m) {
    super(d, e, m), X(this, "_domain", Ii.void), X(this, "_inverseOf", xi.void), X(this, "_range", Ii.void), X(this, "_subPropertyOf"), this._subPropertyOf = new Array();
  }
  get domain() {
    return this._domain;
  }
  set domain(d) {
    this._domain = d;
  }
  get inverseOf() {
    return this._inverseOf;
  }
  set inverseOf(d) {
    this._inverseOf = d;
  }
  get range() {
    return this._range;
  }
  set range(d) {
    this._range = d;
  }
  addSubPropertyOf(d) {
    this._subPropertyOf.push(d);
  }
};
X(Oi, "void", new Oi("", "", Fi.void));
const K = {
  selection: oe + "9d0388cb-a178-46b2-b047-b5a98f7bdf0b",
  analyticalEntity: oe + "6d72746a-9f28-4739-8786-c6415d53c56d",
  score: oe + "bf9dce29-8123-4e8e-b24d-0c7f134bbc8e",
  software: oe + "29b00e39-75da-4945-b6c4-a0ca00f96f68",
  hexColorCode: oe + "5f1bb74f-6ea0-4073-8b68-086f98454f1c",
  emoji: oe + "04242f64-fbb3-4b5b-bb2e-3ddd59eeea18",
  orcidId: oe + "d7ef2583-ff31-4913-9ed3-bc3a1c664b21",
  note: oe + "d2a536eb-4a95-484f-b13d-f597ac8ea2fd",
  verticality: oe + "90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86",
  fondamentaleIdentification: oe + "003559fc-f033-4fc3-9c05-0d5f283123ed",
  orcidGeneratedName: oe + "73ea8d74-3526-4f6a-8830-dd369795650d"
}, l1 = (i) => `
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
      ?contribution dcterms:creator <${i}>. #CONTRIBUTOR
      VALUES ?contribution_type { <${K.selection}> } #SELECTION TYPE
      ?contribution crm:P2_has_type ?contribution_type.
      GRAPH ?g1 {
        ?contribution_type crm:P1_is_identified_by ?contribution_type_label
      }
    } 
    UNION 
    # CONTRIBUTIONS FROM CRM:E13 --> CRM:P14
    {
    	?contribution crm:P14_carried_out_by <${i}>. #CONTRIBUTOR
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
`, a1 = (i) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX analysis: <http://modality-tonality.huma-num.fr/analysisOntology#>
SELECT ?contributor ?color ?emoji ?program
FROM <http://data-iremus.huma-num.fr/graph/users>
WHERE {
    VALUES ?contributor { <${i}> }
    
    OPTIONAL { ?contributor analysis:hasPythonModuleName ?program }
    OPTIONAL {
        ?contributor crm:P1_is_identified_by ?unicode.
        ?unicode crm:P2_has_type <http://data-iremus.huma-num.fr/id/04242f64-fbb3-4b5b-bb2e-3ddd59eeea18>.
        ?unicode crm:P190_has_symbolic_content ?emoji.
        ?contributor crm:P1_is_identified_by ?hexcode.
        ?hexcode crm:P2_has_type <http://data-iremus.huma-num.fr/id/5f1bb74f-6ea0-4073-8b68-086f98454f1c>.
        ?hexcode crm:P190_has_symbolic_content ?color.
    }
}`, f1 = () => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT ?contributor ?name (COUNT(?contribution) AS ?contributions) (CONCAT( "#", ?hex_color_code) AS ?hex_color) ?emoji ?orcid (IRI(CONCAT("https://orcid.org/", ?orcid)) AS ?orcid_profile) (IRI(CONCAT("https://pub.orcid.org/v3.0/", ?orcid)) AS ?orcid_api_user_endpoint) ?untyped_identifier ?contributor_type_label ?user_graph

WHERE {
  GRAPH ?user_graph {  
    VALUES ?contributor_type_predicate {rdf:type crm:P2_has_type}. 
    VALUES ?contributor_type {crm:E21_Person <${K.software}>}. #PERSON OR SOFTWARE
    ?contributor ?contributor_type_predicate ?contributor_type
    
    OPTIONAL {
	    ?contributor crm:P2_has_type <${K.software}>. #SOFTWARE
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
      ?hex_color_code_identifier crm:P2_has_type <${K.hexColorCode}>. #HEX COLOR CODE IDENTIFIER
      ?hex_color_code_identifier crm:P190_has_symbolic_content ?hex_color_code
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?emoji_identifier.
      ?emoji_identifier crm:P2_has_type <${K.emoji}>. #EMOJI IDENTIFIER
      ?emoji_identifier crm:P190_has_symbolic_content ?emoji
    }
    OPTIONAL {
      ?contributor crm:P1_is_identified_by ?orcid_appellation.
      ?orcid_appellation crm:P2_has_type <${K.orcidGeneratedName}>. #ORCID NAME IDENTIFIER
      ?orcid_appellation crm:P190_has_symbolic_content ?name
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?ORCID_identifier.
      ?ORCID_identifier crm:P2_has_type <${K.orcidId}>. #ORCID IDENTIFIER
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
GROUP BY ?contributor ?name ?hex_color_code ?emoji ?orcid ?orcid_profile ?untyped_identifier ?contributor_type_label ?user_graph`, o1 = (i) => `
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    <${i}> ?lp ?lr .
  }
}
GROUP BY ?lp
`, c1 = (i) => `
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    ?lr ?lp <${i}> .
  }
}
GROUP BY ?lp
`, n1 = (i) => `
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX she: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT ?e13_p140 (GROUP_CONCAT(DISTINCT ?e13_p140_label ; separator=" \\n~~\\n ") as ?e13_p140_labels) ?e13_p177 ?e13_p177_label ?concept ?concept_description ?context (GROUP_CONCAT(DISTINCT ?context_label ; separator=" \\n~~\\n ") as ?context_labels) ?creation_date ?creator ?creator_label ?analytical_project ?analytical_project_label
WHERE 
{ 
    GRAPH <http://data-iremus.huma-num.fr/graph/opentheso> {
        <${i}> skos:narrower* ?concept .
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

`, h1 = (i = "", d = "", e = "", m = "") => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX lrmoo: <http://www.cidoc-crm.org/lrmoo/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

SELECT *
WHERE {
  GRAPH ?g {
    ${i ? `BIND (<${i}> as ?f1)` : ""}
    ${d ? `BIND (<${d}> as ?f2)` : ""}
    ${e ? `BIND (<${e}> as ?f3)` : ""}
    ${m ? `BIND (<${m}> as ?f5)` : ""}
    ################################################################################
    # F1
    ################################################################################
    OPTIONAL {
      ?f1 rdf:type lrmoo:F1_Work .
      ?f1 lrmoo:R3_is_realized_in ?f2 .

      OPTIONAL {
        ?f1 rdf:type lrmoo:F1_Work .
        ?f1 lrmoo:R3_is_realized_in ?f2 .
      }
      OPTIONAL {
        ?f1 crm:P1_is_identified_by ?f1_appellation .
        FILTER(!isLiteral(?f1_appellation)) .
        ?f1_appellation crm:P190_has_symbolic_content ?f1_label .
      }
      OPTIONAL {
        ?f1 crm:P1_is_identified_by ?f1_label .
        FILTER(isLiteral(?f1_label)) .
      }
      OPTIONAL {
        ?f1 crm:P2_has_type ?f1_e55 .
        GRAPH ?g_f1_e55 {
          ?f1_e55 rdf:type crm:E55_Type .
          ?f1_e55 crm:P1_is_identified_by ?f1_e55_label .
        }
      }
    }

    ################################################################################
    # F2
    ################################################################################
    OPTIONAL {
      ?f2 rdf:type lrmoo:F2_Expression .

      OPTIONAL {
        ?f2 crm:P1_is_identified_by ?f2_appellation .
        FILTER(!isLiteral(?f2_appellation)) .
        ?f2_appellation crm:P190_has_symbolic_content ?f2_label .
      }
      OPTIONAL {
        ?f2 crm:P1_is_identified_by ?f2_label .
        FILTER(isLiteral(?f2_label)) .
      }
      OPTIONAL {
        ?f2 crm:P2_has_type ?f2_e55 .
        GRAPH ?g_f2_e55 {
          ?f2_e55 rdf:type crm:E55_Type .
          ?f2_e55 crm:P1_is_identified_by ?f2_e55_label .
        }
      }
    }

    ################################################################################
    # F3
    ################################################################################
    OPTIONAL {
      ?f3 rdf:type lrmoo:F3_Manifestation .
      ?f3 lrmoo:R4_embodies ?f2 .

      OPTIONAL {
        ?f3 crm:P1_is_identified_by ?f3_appellation .
        FILTER(!isLiteral(?f3_appellation)) .
        ?f3_appellation crm:P190_has_symbolic_content ?f3_label .
      }
      OPTIONAL {
        ?f3 crm:P1_is_identified_by ?f3_label .
        FILTER(isLiteral(?f3_label)) .
      }
      OPTIONAL {
        ?f3 crm:P2_has_type ?f3_e55 .
        GRAPH ?g_f3_e55 {
          ?f3_e55 rdf:type crm:E55_Type .
          ?f3_e55 crm:P1_is_identified_by ?f3_e55_label .
        }
      }
    }

    ################################################################################
    # F5
    ################################################################################
    OPTIONAL {
      ?f5 rdf:type lrmoo:F5_Item .
      ?f5 lrmoo:R7_exemplifies ?f3 .

      OPTIONAL {
        ?f5 crm:P1_is_identified_by ?f5_appellation .
        FILTER(!isLiteral(?f5_appellation)) .
        ?f5_appellation crm:P190_has_symbolic_content ?f5_label .
      }
      OPTIONAL {
        ?f5 crm:P1_is_identified_by ?f5_label .
        FILTER(isLiteral(?f5_label)) .
      }
      OPTIONAL {
        ?f5 crm:P2_has_type ?f5_e55 .
        GRAPH ?g_f5_e55 {
          ?f5_e55 rdf:type crm:E55_Type .
          ?f5_e55 crm:P1_is_identified_by ?f5_e55_label .
        }
      }
    }
  }
}
`, u1 = (i) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT DISTINCT ?score ?annotation ?verticality ?note_label ?measure_number 
WHERE {
  GRAPH ?g {
    ${ld(i)}
    ?score crm:P2_has_type <${K.score}>. #Score type
    ?verticality sherlock:has_document_context ?score.
    ?verticality crm:P2_has_type <${K.verticality}>. #MEI score offset
    ?note_in_score sherlockmei:contains_beat ?verticality.
    ?note_in_score sherlockmei:measure_number ?measure_number.
    GRAPH ?sherlock_graph {
        ?annotation crm:P140_assigned_attribute_to ?verticality.
        ?annotation crm:P177_assigned_property_of_type <${K.fondamentaleIdentification}>. #Identification de fondamentale
        ?annotation crm:P141_assigned ?note.
        GRAPH ?sherlock_data_graph {
            ?note crm:P1_is_identified_by ?note_label
        }
    }
  }
}
ORDER BY ?score ?measure_number
`, ld = (i) => i ? `BIND (<${i}> as ?score).` : "", p1 = () => `
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
`, g1 = () => `
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
`;
function ad(i, d) {
  function e() {
    this.constructor = i;
  }
  e.prototype = d.prototype, i.prototype = new e();
}
function Ze(i, d, e, m) {
  var R = Error.call(this, i);
  return Object.setPrototypeOf && Object.setPrototypeOf(R, Ze.prototype), R.expected = d, R.found = e, R.location = m, R.name = "SyntaxError", R;
}
ad(Ze, Error);
function jr(i, d, e) {
  return e = e || " ", i.length > d ? i : (d -= i.length, e += e.repeat(d), i + e.slice(0, d));
}
Ze.prototype.format = function(i) {
  var d = "Error: " + this.message;
  if (this.location) {
    var e = null, m;
    for (m = 0; m < i.length; m++)
      if (i[m].source === this.location.source) {
        e = i[m].text.split(/\r\n|\n|\r/g);
        break;
      }
    var R = this.location.start, z = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(R) : R, J = this.location.source + ":" + z.line + ":" + z.column;
    if (e) {
      var W = this.location.end, ne = jr("", z.line.toString().length, " "), O = e[R.line - 1], D = R.line === W.line ? W.column : O.length + 1, A = D - R.column || 1;
      d += `
 --> ` + J + `
` + ne + ` |
` + z.line + " | " + O + `
` + ne + " | " + jr("", R.column - 1, " ") + jr("", A, "^");
    } else
      d += `
 at ` + J;
  }
  return d;
};
Ze.buildMessage = function(i, d) {
  var e = {
    literal: function(O) {
      return '"' + R(O.text) + '"';
    },
    class: function(O) {
      var D = O.parts.map(function(A) {
        return Array.isArray(A) ? z(A[0]) + "-" + z(A[1]) : z(A);
      });
      return "[" + (O.inverted ? "^" : "") + D.join("") + "]";
    },
    any: function() {
      return "any character";
    },
    end: function() {
      return "end of input";
    },
    other: function(O) {
      return O.description;
    }
  };
  function m(O) {
    return O.charCodeAt(0).toString(16).toUpperCase();
  }
  function R(O) {
    return O.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(D) {
      return "\\x0" + m(D);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(D) {
      return "\\x" + m(D);
    });
  }
  function z(O) {
    return O.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(D) {
      return "\\x0" + m(D);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(D) {
      return "\\x" + m(D);
    });
  }
  function J(O) {
    return e[O.type](O);
  }
  function W(O) {
    var D = O.map(J), A, $e;
    if (D.sort(), D.length > 0) {
      for (A = 1, $e = 1; A < D.length; A++)
        D[A - 1] !== D[A] && (D[$e] = D[A], $e++);
      D.length = $e;
    }
    switch (D.length) {
      case 1:
        return D[0];
      case 2:
        return D[0] + " or " + D[1];
      default:
        return D.slice(0, -1).join(", ") + ", or " + D[D.length - 1];
    }
  }
  function ne(O) {
    return O ? '"' + R(O) + '"' : "end of input";
  }
  return "Expected " + W(i) + " but " + ne(d) + " found.";
};
function fd(i, d) {
  d = d !== void 0 ? d : {};
  var e = {}, m = d.grammarSource, R = { DOCUMENT: Zt }, z = Zt, J = "base", W = "prefix", ne = "select", O = "distinct", D = "reduced", A = "(", $e = "as", E = ")", le = "*", Kr = "construct", as = "where", Pe = "{", Te = "}", Vi = "describe", Wi = "ask", Yi = "from", js = "named", zi = "group", Jr = "by", Qi = "having", Zi = "order", Ki = "asc", Ji = "desc", qi = "limit", el = "offset", qr = "values", Ue = ";", sl = "load", Le = "silent", rl = "into", tl = "clear", il = "drop", ll = "create", al = "add", Xs = "to", fl = "move", ol = "copy", et = "insert", st = "data", Vs = "delete", cl = "with", nl = "using", rt = "default", fs = "graph", hl = "all", Q = ".", ul = "optional", pl = "service", gl = "bind", tt = "UNDEF", dl = "minus", it = "union", wl = "filter", U = ",", os = "a", cs = "|", be = "/", lt = "^", Ws = "?", Re = "+", Ys = "!", zs = "[", Qs = "]", ns = "||", hs = "&&", us = "=", ps = "!=", Zs = "<", Ks = ">", gs = "<=", ds = ">=", ws = "in", Js = "not", he = "-", _l = "str", $l = "lang", bl = "langmatches", vl = "datatype", Al = "bound", ml = "iri", Cl = "uri", El = "bnode", yl = "rand", Pl = "abs", Tl = "ceil", Ll = "floor", Rl = "round", Il = "concat", Ol = "strlen", Nl = "ucase", Sl = "lcase", Fl = "encode_for_uri", xl = "contains", Dl = "strbefore", Gl = "strstarts", Ul = "strends", Hl = "strafter", Bl = "year", kl = "month", Ml = "day", jl = "hours", Xl = "minutes", Vl = "seconds", Wl = "timezone", Yl = "tz", zl = "now", Ql = "uuid", Zl = "struuid", Kl = "md5", Jl = "sha1", ql = "sha256", ea = "sha384", sa = "sha512", ra = "coalesce", ta = "if", ia = "strlang", la = "strdt", aa = "sameterm", fa = "isuri", oa = "isiri", ca = "isblank", na = "isliteral", ha = "isnumeric", ua = "regex", pa = "substr", ga = "replace", at = "exists", da = "count", wa = "sum", _a = "min", $a = "max", ba = "avg", va = "sample", Aa = "group_concat", ma = "separator", ft = "^^", Ca = "true", Ea = "false", He = ":", ot = "_:", ct = "$", nt = "@", Ke = "'", _s = '"', $s = "'''", bs = "''", vs = '"""', As = '""', ht = "\\", qs = "#", ut = "_", pt = "%", ya = "~", Pa = "&", gt = /^[^<>"{}|\^`\\\0- ]/, M = /^[0-9]/, dt = /^[a-zA-Z]/, ms = /^[a-zA-Z0-9]/, Ta = /^[eE]/, La = /^[+\-]/, wt = /^[^'\\\n\r]/, _t = /^[^"\\\n\r]/, $t = /^[^'\\]/, bt = /^[^"\\]/, Ra = /^[tbnrf\\"']/, Ia = /^[ \t]/, Oa = /^[\r\n]/, Na = /^[^\r\n]/, Sa = /^[A-Z]/, Fa = /^[a-z]/, xa = /^[\xC0-\xD6]/, Da = /^[\xD8-\xF6]/, Ga = /^[\xF8-\u02FF]/, Ua = /^[\u0370-\u037D]/, Ha = /^[\u037F-\u1FFF]/, Ba = /^[\u200C-\u200D]/, ka = /^[\u2070-\u218F]/, Ma = /^[\u2C00-\u2FEF]/, ja = /^[\u3001-\uD7FF]/, Xa = /^[\uF900-\uFDCF]/, Va = /^[\uFDF0-\uFFFD]/, er = /^[\xB7]/, sr = /^[\u0300-\u036F]/, rr = /^[\u203F-\u2040]/, Wa = /^[A-F]/, Ya = /^[a-f]/, za = b("BASE", !0), Qa = b("PREFIX", !0), Za = b("SELECT", !0), ve = b("DISTINCT", !0), Ka = b("REDUCED", !0), y = b("(", !1), Cs = b("AS", !0), P = b(")", !1), ae = b("*", !1), vt = b("CONSTRUCT", !0), Es = b("WHERE", !0), Ie = b("{", !1), Oe = b("}", !1), Ja = b("DESCRIBE", !0), qa = b("ASK", !0), ef = b("FROM", !0), tr = b("NAMED", !0), sf = b("GROUP", !0), At = b("BY", !0), rf = b("HAVING", !0), tf = b("ORDER", !0), lf = b("ASC", !0), af = b("DESC", !0), ff = b("LIMIT", !0), of = b("OFFSET", !0), mt = b("VALUES", !0), Be = b(";", !1), cf = b("LOAD", !0), Ne = b("SILENT", !0), nf = b("INTO", !0), hf = b("CLEAR", !0), uf = b("DROP", !0), pf = b("CREATE", !0), gf = b("ADD", !0), ir = b("TO", !0), df = b("MOVE", !0), wf = b("COPY", !0), Ct = b("INSERT", !0), Et = b("DATA", !0), lr = b("DELETE", !0), _f = b("WITH", !0), $f = b("USING", !0), yt = b("DEFAULT", !0), ys = b("GRAPH", !0), bf = b("ALL", !0), Z = b(".", !1), vf = b("OPTIONAL", !0), Af = b("SERVICE", !0), mf = b("BIND", !0), Cf = b("UNDEF", !1), Ef = b("MINUS", !0), Pt = b("UNION", !0), yf = b("FILTER", !0), H = b(",", !1), Ps = b("a", !1), Ts = b("|", !1), Ae = b("/", !1), Tt = b("^", !1), ar = b("?", !1), Se = b("+", !1), fr = b("!", !1), or = b("[", !1), cr = b("]", !1), Lt = b("||", !1), Rt = b("&&", !1), Ls = b("=", !1), It = b("!=", !1), nr = b("<", !1), hr = b(">", !1), Ot = b("<=", !1), Nt = b(">=", !1), Rs = b("IN", !0), ur = b("NOT", !0), ue = b("-", !1), Pf = b("STR", !0), Tf = b("LANG", !0), Lf = b("LANGMATCHES", !0), Rf = b("DATATYPE", !0), If = b("BOUND", !0), Of = b("IRI", !0), Nf = b("URI", !0), Sf = b("BNODE", !0), Ff = b("RAND", !0), xf = b("ABS", !0), Df = b("CEIL", !0), Gf = b("FLOOR", !0), Uf = b("ROUND", !0), Hf = b("CONCAT", !0), Bf = b("STRLEN", !0), kf = b("UCASE", !0), Mf = b("LCASE", !0), jf = b("ENCODE_FOR_URI", !0), Xf = b("CONTAINS", !0), Vf = b("STRBEFORE", !0), Wf = b("STRSTARTS", !0), Yf = b("STRENDS", !0), zf = b("STRAFTER", !0), Qf = b("YEAR", !0), Zf = b("MONTH", !0), Kf = b("DAY", !0), Jf = b("HOURS", !0), qf = b("MINUTES", !0), eo = b("SECONDS", !0), so = b("TIMEZONE", !0), ro = b("TZ", !0), to = b("NOW", !0), io = b("UUID", !0), lo = b("STRUUID", !0), ao = b("MD5", !0), fo = b("SHA1", !0), oo = b("SHA256", !0), co = b("SHA384", !0), no = b("SHA512", !0), ho = b("COALESCE", !0), uo = b("IF", !0), po = b("STRLANG", !0), go = b("STRDT", !0), wo = b("sameTerm", !0), _o = b("isURI", !0), $o = b("isIRI", !0), bo = b("isBLANK", !0), vo = b("isLITERAL", !0), Ao = b("isNUMERIC", !0), mo = b("REGEX", !0), Co = b("SUBSTR", !0), Eo = b("REPLACE", !0), St = b("EXISTS", !0), yo = b("COUNT", !0), Po = b("SUM", !0), To = b("MIN", !0), Lo = b("MAX", !0), Ro = b("AVG", !0), Io = b("SAMPLE", !0), Oo = b("GROUP_CONCAT", !0), No = b("SEPARATOR", !0), So = b("^^", !1), Fo = b("true", !0), xo = b("false", !0), Ft = F(["<", ">", '"', "{", "}", "|", "^", "`", "\\", ["\0", " "]], !0, !1), ke = b(":", !1), Do = b("_:", !1), j = F([["0", "9"]], !1, !1), xt = b("$", !1), Dt = b("@", !1), Gt = F([["a", "z"], ["A", "Z"]], !1, !1), Is = F([["a", "z"], ["A", "Z"], ["0", "9"]], !1, !1), Go = F(["e", "E"], !1, !1), Uo = F(["+", "-"], !1, !1), Je = b("'", !1), Ut = F(["'", "\\", `
`, "\r"], !0, !1), Os = b('"', !1), Ht = F(['"', "\\", `
`, "\r"], !0, !1), Bt = b("'''", !1), kt = b("''", !1), Mt = F(["'", "\\"], !0, !1), jt = b('"""', !1), Xt = b('""', !1), Vt = F(['"', "\\"], !0, !1), Wt = b("\\", !1), Ho = F(["t", "b", "n", "r", "f", "\\", '"', "'"], !1, !1), Bo = F([" ", "	"], !1, !1), ko = F(["\r", `
`], !1, !1), Mo = F(["\r", `
`], !0, !1), pr = b("#", !1), jo = F([["A", "Z"]], !1, !1), Xo = F([["a", "z"]], !1, !1), Vo = F([["À", "Ö"]], !1, !1), Wo = F([["Ø", "ö"]], !1, !1), Yo = F([["ø", "˿"]], !1, !1), zo = F([["Ͱ", "ͽ"]], !1, !1), Qo = F([["Ϳ", "῿"]], !1, !1), Zo = F([["‌", "‍"]], !1, !1), Ko = F([["⁰", "↏"]], !1, !1), Jo = F([["Ⰰ", "⿯"]], !1, !1), qo = F([["、", "퟿"]], !1, !1), ec = F([["豈", "﷏"]], !1, !1), sc = F([["ﷰ", "�"]], !1, !1), Yt = b("_", !1), gr = F(["·"], !1, !1), dr = F([["̀", "ͯ"]], !1, !1), wr = F([["‿", "⁀"]], !1, !1), zt = b("%", !1), rc = F([["A", "F"]], !1, !1), tc = F([["a", "f"]], !1, !1), ic = b("~", !1), lc = b("&", !1), ac = function(s, a) {
    let o = {};
    s.length ? o = {
      headers: s,
      ...a
    } : o = a;
    const t = Object.entries(Ri).map(([n, l]) => ({
      pos: parseInt(n),
      text: l
    }));
    return t.length && (o.comments = t), o;
  }, fc = function(s, a, o) {
    let t = { type: "Query" };
    return s.length && (t.prologue = s), t.queryBody = a, o && (t.values = o), t;
  }, oc = function(s) {
    return {
      type: "BaseDecl",
      base: s
    };
  }, cc = function(s, a) {
    return {
      type: "PrefixDecl",
      prefix: s,
      iri: a
    };
  }, nc = function(s, a, o, t) {
    return a.length && (s.from = a), s = {
      ...s,
      where: o,
      ...t
    }, s;
  }, hc = function(s, a, o, t) {
    let n = {
      ...s,
      where: a,
      ...o
    };
    return t && (n.values = t), n;
  }, uc = function(s, a) {
    let o;
    a === "*" ? o = ["*"] : o = a.map((n) => n.length === 2 ? n[1] : {
      expression: n[3],
      as: n[7]
    });
    let t = { select: o };
    if (s) {
      const n = s.toUpperCase();
      n === "DISTINCT" ? t.distinct = !0 : n === "REDUCED" && (t.reduced = !0);
    }
    return t.location = N(), t;
  }, pc = function(s, a, o, t) {
    let n = { type: "construct" };
    return a.length && (n.from = a), n = {
      ...n,
      template: s,
      where: o,
      ...t,
      location: N()
    }, n;
  }, gc = function(s, a, o) {
    let t = { type: "construct" };
    return s.length && (t.from = s), t = {
      ...t,
      where: [a],
      ...o,
      location: N()
    }, t;
  }, dc = function(s, a, o, t) {
    let n = { type: "describe" };
    return a.length && (n.from = a), n.describe = s, o && (n.where = o), n = {
      ...n,
      ...t,
      location: N()
    }, n;
  }, wc = function(s, a, o) {
    let t = { type: "ask" };
    return s.length && (t.from = s), t = {
      ...t,
      where: a,
      ...o,
      location: N()
    }, t;
  }, _c = function(s) {
    return s;
  }, $c = function(s) {
    return {
      graph: s,
      location: N()
    };
  }, bc = function(s) {
    return {
      namedGraph: s,
      location: N()
    };
  }, vc = function(s) {
    return s.graphPattern || s;
  }, Ac = function(s, a, o, t) {
    let n = {};
    return s && (n.group = s), a && (n.having = a), o && (n.orderBy = o), t && (n.limitOffset = t), n;
  }, mc = function(s) {
    return s;
  }, Cc = function(s) {
    return s;
  }, Ec = function(s) {
    return s;
  }, yc = function(s, a) {
    return a ? {
      expressionType: "aliasedexpression",
      bracketted: !0,
      expression: s,
      as: a[2],
      location: N()
    } : {
      bracketted: !0,
      ...s
    };
  }, Pc = function(s) {
    return s;
  }, Tc = function(s) {
    return s;
  }, Lc = function(s) {
    return s;
  }, Rc = function(s) {
    return s;
  }, Ic = function(s, a) {
    let o = {};
    return s.toUpperCase() === "ASC" ? o = {
      asc: !0,
      ...a
    } : s.toUpperCase() === "DESC" && (o = {
      desc: !0,
      ...a
    }), o;
  }, Oc = function(s) {
    return s;
  }, Nc = function(s) {
    let a = [s[0]];
    return s[1] && a.push(s[1]), a;
  }, Sc = function(s) {
    return {
      limit: parseInt(s.literal)
    };
  }, Fc = function(s) {
    return {
      offset: parseInt(s.literal)
    };
  }, xc = function(s) {
    return s ? s[1] : null;
  }, Dc = function(s, a) {
    let o = {};
    s.length && (o.prologue = s);
    let t = [];
    return a && (t = [a[1]], a[2] && (t = t.concat(a[2][3].update))), o.update = t, o;
  }, Gc = function(s, a, o) {
    let t = {
      type: "load",
      silent: s,
      sourceGraph: a
    };
    return o && (t.destinyGraph = o[2]), t;
  }, Uc = function(s, a) {
    return {
      type: "clear",
      silent: s,
      destinyGraph: a
    };
  }, Hc = function(s, a) {
    return {
      type: "drop",
      silent: s,
      destinyGraph: a
    };
  }, Bc = function(s, a) {
    return {
      type: "create",
      silent: s,
      destinyGraph: a
    };
  }, kc = function(s, a, o) {
    return {
      type: "add",
      silent: s,
      graphs: [a, o]
    };
  }, Mc = function(s, a, o) {
    return {
      type: "move",
      silent: s,
      graphs: [a, o]
    };
  }, jc = function(s, a, o) {
    return {
      type: "copy",
      silent: s,
      graphs: [a, o]
    };
  }, Xc = function(s) {
    return {
      type: "insertdata",
      insert: s
    };
  }, Vc = function(s) {
    return {
      type: "deletedata",
      delete: s
    };
  }, Wc = function(s) {
    return {
      type: "deletewhere",
      delete: s
    };
  }, Yc = function(s, a, o, t) {
    let n = {
      type: "modify"
    };
    return s && (n.with = s[2]), a.length === 3 ? (n.delete = a[0], a[2] && (n.insert = a[2])) : n.insert = a, o.length && (n.using = o), n.where = t.graphPattern, n;
  }, zc = function(s) {
    return s;
  }, Qc = function(s) {
    return s;
  }, Zc = function(s) {
    return s.length === 3 ? {
      named: !0,
      iri: s[2]
    } : {
      iri: s
    };
  }, Kc = function() {
    return "default";
  }, Jc = function(s) {
    return s;
  }, qc = function(s) {
    return s;
  }, en = function(s) {
    return s;
  }, sn = function() {
    return "default";
  }, rn = function() {
    return "named";
  }, tn = function() {
    return "all";
  }, ln = function(s) {
    return s;
  }, an = function(s) {
    return s;
  }, fn = function(s, a) {
    let o = [];
    return s && (o = o.concat(s)), a.forEach((t) => {
      o = o.concat(t[0]), t[2] && (o = o.concat(t[2]));
    }), o;
  }, on = function(s, a) {
    return {
      graph: s,
      ...a
    };
  }, cn = function(s, a) {
    let o = [s];
    return a && a[3] && (o = o.concat(a[3].triplePattern)), {
      triplePattern: o,
      location: N()
    };
  }, nn = function(s) {
    return s;
  }, hn = function(s, a) {
    let o = [];
    return s && o.push(s), a.forEach((t) => {
      o.push(t[0]), t[4] && o.push(t[4]);
    }), {
      graphPattern: o,
      location: N()
    };
  }, un = function(s, a) {
    let o = [s];
    return a && a[3] && (o = o.concat(a[3].triplePattern)), {
      type: "TriplesBlock",
      triplePattern: o,
      location: N()
    };
  }, pn = function(s) {
    return {
      type: "OptionalGraphPattern",
      optional: s.graphPattern || s,
      location: N()
    };
  }, gn = function(s, a) {
    return {
      type: "GraphGraphPattern",
      graph: s,
      ...a
    };
  }, dn = function(s, a, o) {
    let t = {
      type: "ServiceGraphPattern",
      service: a,
      pattern: o.graphPattern || o
    };
    return s && (t.silent = !0), t.location = N(), t;
  }, wn = function(s, a) {
    return {
      type: "Bind",
      bind: s,
      as: a,
      location: N()
    };
  }, _n = function(s) {
    return s;
  }, $n = function(s, a) {
    return {
      oneVar: s,
      data: a,
      location: N()
    };
  }, bn = function(s, a) {
    return {
      variables: s,
      data: a,
      location: N()
    };
  }, vn = function(s) {
    return s;
  }, An = function(s) {
    return s;
  }, mn = function(s) {
    return {
      type: "MinusGraphPattern",
      minus: s.graphPattern || s,
      location: N()
    };
  }, Cn = function(s, a) {
    return a.length ? {
      union: [s].concat(a.map((o) => o[3])),
      location: N()
    } : s;
  }, En = function(s) {
    return {
      type: "Filter",
      filter: s,
      location: N()
    };
  }, yn = function(s, a) {
    return {
      functionRef: s,
      args: a.list,
      location: N()
    };
  }, Pn = function() {
    return {
      list: []
    };
  }, Tn = function(s, a, o) {
    return {
      distinct: !!s,
      list: [a].concat(o.map((t) => t[2]))
    };
  }, Ln = function() {
    return [];
  }, Rn = function(s, a) {
    return [s].concat(a.map((o) => o[2]));
  }, In = function(s) {
    return s;
  }, On = function(s, a) {
    let o = [s];
    return a && a[3] && (o = o.concat(a[3].triplePattern)), {
      triplePattern: o,
      location: N()
    };
  }, Nn = function(s, a) {
    return {
      subject: s,
      properties: a
    };
  }, Sn = function(s, a) {
    return {
      subject: s,
      properties: a
    };
  }, Fn = function(s, a, o) {
    let t = [];
    return t.push({ predicate: s, objects: a }), o.forEach((n) => {
      n[3] && t.push({ predicate: n[3][0], objects: n[3][2] });
    }), t;
  }, xn = function() {
    return {
      a: !0,
      location: N()
    };
  }, Dn = function(s, a) {
    return [s, ...a];
  }, Gn = function(s, a) {
    return {
      subject: s,
      properties: a
    };
  }, Un = function(s, a) {
    return {
      subject: s,
      properties: a
    };
  }, Hn = function(s, a, o) {
    let t = [];
    return t.push({ predicate: s, objects: a }), o.forEach((n) => {
      n[3] && t.push({ predicate: n[3][0], objects: n[3][2] });
    }), t;
  }, Bn = function(s, a) {
    return [s, ...a];
  }, kn = function(s, a) {
    if (a.length) {
      let o = [s];
      for (let t = 0; t < a.length; t++)
        o.push(a[t][3]);
      return {
        alternative: o,
        location: N()
      };
    } else
      return s;
  }, Mn = function(s, a) {
    if (a.length) {
      let o = [s];
      for (let t = 0; t < a.length; t++)
        o.push(a[t][3]);
      return {
        sequence: o,
        location: N()
      };
    } else
      return s;
  }, jn = function(s, a) {
    return a && (s.modifier = a), s;
  }, Xn = function(s) {
    return s.inverse = !0, s;
  }, Vn = function() {
    return {
      a: !0,
      location: N()
    };
  }, Wn = function(s) {
    return {
      bracketted: !0,
      ...s
    };
  }, Yn = function(s) {
    return {
      collection: s,
      location: N()
    };
  }, zn = function(s) {
    return {
      blankNodeProperties: s,
      location: N()
    };
  }, Qn = function(s) {
    return {
      collection: s,
      location: N()
    };
  }, Zn = function(s) {
    return {
      blankNodeProperties: s,
      location: N()
    };
  }, Kn = function(s) {
    return s;
  }, Jn = function(s) {
    return s;
  }, qn = function(s) {
    return s;
  }, eh = function(s) {
    return s;
  }, sh = function(s) {
    return {
      ...s,
      location: N()
    };
  }, rh = function(s, a) {
    return a.length ? {
      expressionType: "conditionalor",
      operands: [s].concat(a.map((o) => o[3]))
    } : s;
  }, th = function(s, a) {
    return a.length ? {
      expressionType: "conditionaland",
      operands: [s].concat(a.map((o) => o[3]))
    } : s;
  }, ih = function(s, a) {
    if (a.length) {
      const o = s;
      let t = a[0][1].toUpperCase(), n = a[0][3];
      return t === "NOT" && (t += " " + a[0][3].toUpperCase(), n = a[0][5]), {
        expressionType: "relationalexpression",
        operator: t,
        op1: o,
        op2: n
      };
    } else
      return s;
  }, lh = function(s, a) {
    if (a.length === 0)
      return s;
    let o = [];
    return a.forEach((t) => {
      t.length == 4 && o.push({
        operator: t[1],
        expression: t[3]
      });
    }), {
      expressionType: "additiveexpression",
      op1: s,
      ops: o
    };
  }, ah = function(s, a) {
    return a.length ? {
      expressionType: "multiplicativeexpression",
      first: s,
      rest: a.map((o) => ({ operator: o[1], expression: o[3] }))
    } : s;
  }, fh = function(s) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "!",
      expression: s
    };
  }, oh = function(s) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "+",
      expression: s
    };
  }, ch = function(s) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "-",
      expression: s
    };
  }, nh = function(s) {
    return {
      expressionType: "atomic",
      value: s
    };
  }, hh = function(s) {
    return {
      expressionType: "atomic",
      value: s
    };
  }, uh = function(s) {
    return {
      expressionType: "atomic",
      value: s
    };
  }, ph = function(s) {
    return {
      expressionType: "atomic",
      value: s
    };
  }, gh = function(s) {
    return {
      bracketted: !0,
      ...s
    };
  }, dh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "str",
      args: [s]
    };
  }, wh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "lang",
      args: [s]
    };
  }, _h = function(s, a) {
    return {
      expressionType: "builtincall",
      builtincall: "langMatches",
      args: [s, a]
    };
  }, $h = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "datatype",
      args: [s]
    };
  }, bh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "bound",
      args: [s]
    };
  }, vh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "IRI",
      args: [s]
    };
  }, Ah = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "URI",
      args: [s]
    };
  }, mh = function(s) {
    const a = {
      expressionType: "builtincall",
      builtincall: "BNODE",
      args: null
    };
    return s.length === 5 && (a.args = [s[2]]), a;
  }, Ch = function() {
    return {
      expressionType: "builtincall",
      builtincall: "rand"
    };
  }, Eh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "abs",
      args: [s]
    };
  }, yh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "ceil",
      args: [s]
    };
  }, Ph = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "floor",
      args: [s]
    };
  }, Th = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "round",
      args: [s]
    };
  }, Lh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "CONCAT",
      args: s
    };
  }, Rh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "STRLEN",
      args: [s]
    };
  }, Ih = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "UCASE",
      args: [s]
    };
  }, Oh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "LCASE",
      args: [s]
    };
  }, Nh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "ENCODE_FOR_URI",
      args: [s]
    };
  }, Sh = function(s, a) {
    return {
      expressionType: "builtincall",
      builtincall: "CONTAINS",
      args: [s, a]
    };
  }, Fh = function(s, a) {
    return {
      expressionType: "builtincall",
      builtincall: "STRBEFORE",
      args: [s, a]
    };
  }, xh = function(s, a) {
    return {
      expressionType: "builtincall",
      builtincall: "STRSTARTS",
      args: [s, a]
    };
  }, Dh = function(s, a) {
    return {
      expressionType: "builtincall",
      builtincall: "STRENDS",
      args: [s, a]
    };
  }, Gh = function(s, a) {
    return {
      expressionType: "builtincall",
      builtincall: "STRAFTER",
      args: [s, a]
    };
  }, Uh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "year",
      args: [s]
    };
  }, Hh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "month",
      args: [s]
    };
  }, Bh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "day",
      args: [s]
    };
  }, kh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "hours",
      args: [s]
    };
  }, Mh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "minutes",
      args: [s]
    };
  }, jh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "seconds",
      args: [s]
    };
  }, Xh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "timezone",
      args: [s]
    };
  }, Vh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "tz",
      args: [s]
    };
  }, Wh = function() {
    return {
      expressionType: "builtincall",
      builtincall: "now"
    };
  }, Yh = function() {
    return {
      expressionType: "builtincall",
      builtincall: "UUID"
    };
  }, zh = function() {
    return {
      expressionType: "builtincall",
      builtincall: "STRUUID"
    };
  }, Qh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "MD5",
      args: [s]
    };
  }, Zh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA1",
      args: [s]
    };
  }, Kh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA256",
      args: [s]
    };
  }, Jh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA384",
      args: [s]
    };
  }, qh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA512",
      args: [s]
    };
  }, eu = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "COALESCE",
      args: s
    };
  }, su = function(s, a, o) {
    return {
      expressionType: "builtincall",
      builtincall: "IF",
      args: [s, a, o]
    };
  }, ru = function(s, a) {
    return {
      expressionType: "builtincall",
      builtincall: "STRLANG",
      args: [s, a]
    };
  }, tu = function(s, a) {
    return {
      expressionType: "builtincall",
      builtincall: "STRDT",
      args: [s, a]
    };
  }, iu = function(s, a) {
    return {
      expressionType: "builtincall",
      builtincall: "sameTerm",
      args: [s, a]
    };
  }, lu = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "isURI",
      args: [s]
    };
  }, au = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "isBlank",
      args: [s]
    };
  }, fu = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "isLiteral",
      args: [s]
    };
  }, ou = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "isNumeric",
      args: [s]
    };
  }, cu = function(s, a, o) {
    let t = {
      expressionType: "regex",
      text: s,
      pattern: a
    };
    return o && (t.flags = o[2]), t;
  }, nu = function(s, a, o) {
    let t = [s, a];
    return o && t.push(o[2]), {
      expressionType: "builtincall",
      builtincall: "substr",
      args: t
    };
  }, hu = function(s, a, o, t) {
    let n = [s, a, o];
    return t && n.push(t[2]), {
      expressionType: "builtincall",
      builtincall: "replace",
      args: n
    };
  }, uu = function(s) {
    return {
      exists: s.graphPattern || s
    };
  }, pu = function(s) {
    return {
      notexists: s.graphPattern || s
    };
  }, gu = function(s, a) {
    return {
      expressionType: "aggregate",
      aggregateType: "count",
      distinct: !!s,
      expression: a
    };
  }, du = function(s, a) {
    return {
      expressionType: "aggregate",
      aggregateType: "sum",
      distinct: !!s,
      expression: a
    };
  }, wu = function(s, a) {
    return {
      expressionType: "aggregate",
      aggregateType: "min",
      distinct: !!s,
      expression: a
    };
  }, _u = function(s, a) {
    return {
      expressionType: "aggregate",
      aggregateType: "max",
      distinct: !!s,
      expression: a
    };
  }, $u = function(s, a) {
    return {
      expressionType: "aggregate",
      aggregateType: "avg",
      distinct: !!s,
      expression: a
    };
  }, bu = function(s, a) {
    return {
      expressionType: "aggregate",
      aggregateType: "sample",
      distinct: !!s,
      expression: a
    };
  }, vu = function(s, a, o) {
    let t = null;
    return o != null && o.length && (t = o[7]), {
      expressionType: "aggregate",
      aggregateType: "group_concat",
      expression: a,
      separator: t,
      distinct: !!s
    };
  }, Au = function(s, a) {
    let o = {
      expressionType: "irireforfunction",
      iriref: s
    };
    return a && (o.args = a.list), o;
  }, mu = function(s, a) {
    return typeof a == "string" ? s.lang = a : a && (s.dataType = a[1]), s.location = N(), s;
  }, Cu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !0
    };
  }, Eu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !1
    };
  }, yu = function(s) {
    return {
      iri: s,
      location: N()
    };
  }, Pu = function(s) {
    return s;
  }, Tu = function(s) {
    return {
      iriPrefix: s[0],
      iriLocal: s[1],
      location: N()
    };
  }, Lu = function(s) {
    return {
      iriPrefix: s,
      iriLocal: "",
      location: N()
    };
  }, Ru = function(s) {
    return {
      blankNode: s,
      location: N()
    };
  }, Iu = function() {
    return {
      blankNode: "[]",
      location: N()
    };
  }, Ou = function(s) {
    return s.join("");
  }, Nu = function(s) {
    return s || "";
  }, Su = function(s, a) {
    return [s, a];
  }, Fu = function() {
    return te();
  }, xu = function(s) {
    return {
      variable: s
    };
  }, Du = function(s) {
    return {
      varType: "$",
      variable: s
    };
  }, Gu = function(s, a) {
    let o = s.join("");
    return a.length && (o += "-" + a[0][1].join("")), o.toLowerCase();
  }, Uu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#integer",
      literal: te()
    };
  }, Hu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#decimal",
      literal: te()
    };
  }, Bu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: te()
    };
  }, ku = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: te()
    };
  }, Mu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: te()
    };
  }, ju = function(s) {
    return s.literal = "+" + s.literal, s;
  }, Xu = function(s) {
    return s.literal = "+" + s.literal, s;
  }, Vu = function(s) {
    return s.literal = "+" + s.literal, s;
  }, Wu = function(s) {
    return s.literal = "-" + s.literal, s;
  }, Yu = function(s) {
    return s.literal = "-" + s.literal, s;
  }, zu = function(s) {
    return s.literal = "-" + s.literal, s;
  }, Qu = function(s) {
    return {
      quote: "'",
      literal: s.join("")
      // except ' \ LF CR
    };
  }, Zu = function(s) {
    return {
      quote: '"',
      literal: s.join("")
      // except " \ LF CR
    };
  }, Ku = function(s) {
    return {
      quote: "'''",
      literal: s.map((a) => a[0] ? a[0] + a[1] : a[1]).join("")
    };
  }, Ju = function(s) {
    return {
      quote: '"""',
      literal: s.map((a) => a[0] ? a[0] + a[1] : a[1]).join("")
    };
  }, qu = function() {
    return te();
  }, ep = function() {
    return te();
  }, sp = function() {
    return Ri[N().start.offset] = te(), "";
  }, rp = function() {
    return te();
  }, tp = function() {
    return te();
  }, ip = function() {
    return te();
  }, r = 0, w = 0, Ns = [{ line: 1, column: 1 }], pe = 0, _r = [], Ss;
  if ("startRule" in d) {
    if (!(d.startRule in R))
      throw new Error(`Can't start parsing from rule "` + d.startRule + '".');
    z = R[d.startRule];
  }
  function te() {
    return i.substring(w, r);
  }
  function N() {
    return $r(w, r);
  }
  function b(s, a) {
    return { type: "literal", text: s, ignoreCase: a };
  }
  function F(s, a, o) {
    return { type: "class", parts: s, inverted: a, ignoreCase: o };
  }
  function lp() {
    return { type: "end" };
  }
  function Qt(s) {
    var a = Ns[s], o;
    if (a)
      return a;
    for (o = s - 1; !Ns[o]; )
      o--;
    for (a = Ns[o], a = {
      line: a.line,
      column: a.column
    }; o < s; )
      i.charCodeAt(o) === 10 ? (a.line++, a.column = 1) : a.column++, o++;
    return Ns[s] = a, a;
  }
  function $r(s, a, o) {
    var t = Qt(s), n = Qt(a), l = {
      source: m,
      start: {
        offset: s,
        line: t.line,
        column: t.column
      },
      end: {
        offset: a,
        line: n.line,
        column: n.column
      }
    };
    return l;
  }
  function u(s) {
    r < pe || (r > pe && (pe = r, _r = []), _r.push(s));
  }
  function ap(s, a, o) {
    return new Ze(
      Ze.buildMessage(s, a),
      s,
      a,
      o
    );
  }
  function Zt() {
    var s, a, o, t, n, l;
    for (s = r, a = [], o = yi(); o !== e; )
      a.push(o), o = yi();
    for (o = [], t = f(); t !== e; )
      o.push(t), t = f();
    if (t = fp(), t !== e) {
      for (n = [], l = f(); l !== e; )
        n.push(l), l = f();
      w = s, s = ac(a, t);
    } else
      r = s, s = e;
    return s;
  }
  function fp() {
    var s;
    return s = op(), s === e && (s = fi()), s;
  }
  function op() {
    var s, a, o, t, n;
    for (s = r, a = Kt(), o = [], t = f(); t !== e; )
      o.push(t), t = f();
    return t = cp(), t === e && (t = hp(), t === e && (t = up(), t === e && (t = pp()))), t !== e ? (n = ai(), w = s, s = fc(a, t, n)) : (r = s, s = e), s;
  }
  function Kt() {
    var s, a;
    for (s = [], a = Jt(), a === e && (a = qt()); a !== e; )
      s.push(a), a = Jt(), a === e && (a = qt());
    return s;
  }
  function Jt() {
    var s, a, o, t, n;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.substr(r, 4).toLowerCase() === J ? (o = i.substr(r, 4), r += 4) : (o = e, u(za)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      n = Dr(), n !== e ? (w = s, s = oc(n)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function qt() {
    var s, a, o, t, n, l, h;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.substr(r, 6).toLowerCase() === W ? (o = i.substr(r, 6), r += 6) : (o = e, u(Qa)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = Gr(), n !== e) {
        for (l = [], h = f(); h !== e; )
          l.push(h), h = f();
        h = Dr(), h !== e ? (w = s, s = cc(n, h)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function cp() {
    var s, a, o, t, n, l, h, c;
    if (s = r, a = ei(), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (t = [], n = ge(); n !== e; )
        t.push(n), n = ge();
      for (n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (l = qe(), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = je(), w = s, s = nc(a, t, l, c);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function np() {
    var s, a, o, t, n, l, h;
    if (s = r, a = ei(), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = qe(), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        l = je(), h = ai(), w = s, s = hc(a, t, l, h);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function ei() {
    var s, a, o, t, n, l, h, c, g, p, _, $, v, T, I, x, S;
    if (s = r, i.substr(r, 6).toLowerCase() === ne ? (a = i.substr(r, 6), r += 6) : (a = e, u(Za)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 8).toLowerCase() === O ? (t = i.substr(r, 8), r += 8) : (t = e, u(ve)), t === e && (i.substr(r, 7).toLowerCase() === D ? (t = i.substr(r, 7), r += 7) : (t = e, u(Ka))), t === e && (t = null), n = [], l = f(); l !== e; )
        n.push(l), l = f();
      for (l = [], h = r, c = [], g = f(); g !== e; )
        c.push(g), g = f();
      if (g = Y(), g !== e ? (c = [c, g], h = c) : (r = h, h = e), h === e) {
        for (h = r, c = [], g = f(); g !== e; )
          c.push(g), g = f();
        if (i.charCodeAt(r) === 40 ? (g = A, r++) : (g = e, u(y)), g !== e) {
          for (p = [], _ = f(); _ !== e; )
            p.push(_), _ = f();
          if (_ = C(), _ !== e) {
            for ($ = [], v = f(); v !== e; )
              $.push(v), v = f();
            if (i.substr(r, 2).toLowerCase() === $e ? (v = i.substr(r, 2), r += 2) : (v = e, u(Cs)), v !== e) {
              for (T = [], I = f(); I !== e; )
                T.push(I), I = f();
              if (I = Y(), I !== e) {
                for (x = [], S = f(); S !== e; )
                  x.push(S), S = f();
                i.charCodeAt(r) === 41 ? (S = E, r++) : (S = e, u(P)), S !== e ? (c = [c, g, p, _, $, v, T, I, x, S], h = c) : (r = h, h = e);
              } else
                r = h, h = e;
            } else
              r = h, h = e;
          } else
            r = h, h = e;
        } else
          r = h, h = e;
      }
      if (h !== e)
        for (; h !== e; ) {
          for (l.push(h), h = r, c = [], g = f(); g !== e; )
            c.push(g), g = f();
          if (g = Y(), g !== e ? (c = [c, g], h = c) : (r = h, h = e), h === e) {
            for (h = r, c = [], g = f(); g !== e; )
              c.push(g), g = f();
            if (i.charCodeAt(r) === 40 ? (g = A, r++) : (g = e, u(y)), g !== e) {
              for (p = [], _ = f(); _ !== e; )
                p.push(_), _ = f();
              if (_ = C(), _ !== e) {
                for ($ = [], v = f(); v !== e; )
                  $.push(v), v = f();
                if (i.substr(r, 2).toLowerCase() === $e ? (v = i.substr(r, 2), r += 2) : (v = e, u(Cs)), v !== e) {
                  for (T = [], I = f(); I !== e; )
                    T.push(I), I = f();
                  if (I = Y(), I !== e) {
                    for (x = [], S = f(); S !== e; )
                      x.push(S), S = f();
                    i.charCodeAt(r) === 41 ? (S = E, r++) : (S = e, u(P)), S !== e ? (c = [c, g, p, _, $, v, T, I, x, S], h = c) : (r = h, h = e);
                  } else
                    r = h, h = e;
                } else
                  r = h, h = e;
              } else
                r = h, h = e;
            } else
              r = h, h = e;
          }
        }
      else
        l = e;
      l === e && (i.charCodeAt(r) === 42 ? (l = le, r++) : (l = e, u(ae))), l !== e ? (w = s, s = uc(t, l)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function hp() {
    var s, a, o, t, n, l, h, c, g, p, _, $, v, T;
    if (s = r, i.substr(r, 9).toLowerCase() === Kr ? (a = i.substr(r, 9), r += 9) : (a = e, u(vt)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = Xp(), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        for (l = [], h = ge(); h !== e; )
          l.push(h), h = ge();
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (c = qe(), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          p = je(), w = s, s = pc(t, l, c, p);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    if (s === e)
      if (s = r, i.substr(r, 9).toLowerCase() === Kr ? (a = i.substr(r, 9), r += 9) : (a = e, u(vt)), a !== e) {
        for (o = [], t = f(); t !== e; )
          o.push(t), t = f();
        for (t = [], n = ge(); n !== e; )
          t.push(n), n = ge();
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (i.substr(r, 5).toLowerCase() === as ? (l = i.substr(r, 5), r += 5) : (l = e, u(Es)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          if (i.charCodeAt(r) === 123 ? (c = Pe, r++) : (c = e, u(Ie)), c !== e) {
            for (g = [], p = f(); p !== e; )
              g.push(p), p = f();
            for (p = Ve(), p === e && (p = null), _ = [], $ = f(); $ !== e; )
              _.push($), $ = f();
            if (i.charCodeAt(r) === 125 ? ($ = Te, r++) : ($ = e, u(Oe)), $ !== e) {
              for (v = [], T = f(); T !== e; )
                v.push(T), T = f();
              T = je(), w = s, s = gc(t, p, T);
            } else
              r = s, s = e;
          } else
            r = s, s = e;
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    return s;
  }
  function up() {
    var s, a, o, t, n, l, h, c, g, p;
    if (s = r, i.substr(r, 8).toLowerCase() === Vi ? (a = i.substr(r, 8), r += 8) : (a = e, u(Ja)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = [], n = Ye(), n !== e)
        for (; n !== e; )
          t.push(n), n = Ye();
      else
        t = e;
      if (t === e && (i.charCodeAt(r) === 42 ? (t = le, r++) : (t = e, u(ae))), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        for (l = [], h = ge(); h !== e; )
          l.push(h), h = ge();
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        for (c = qe(), c === e && (c = null), g = [], p = f(); p !== e; )
          g.push(p), p = f();
        p = je(), w = s, s = dc(t, l, c, p);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function pp() {
    var s, a, o, t, n, l, h, c, g;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.substr(r, 3).toLowerCase() === Wi ? (o = i.substr(r, 3), r += 3) : (o = e, u(qa)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      for (n = [], l = ge(); l !== e; )
        n.push(l), l = ge();
      for (l = [], h = f(); h !== e; )
        l.push(h), h = f();
      if (h = qe(), h !== e) {
        for (c = [], g = f(); g !== e; )
          c.push(g), g = f();
        g = je(), w = s, s = wc(n, h, g);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function ge() {
    var s, a, o, t, n, l;
    if (s = r, i.substr(r, 4).toLowerCase() === Yi ? (a = i.substr(r, 4), r += 4) : (a = e, u(ef)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = gp(), t === e && (t = dp()), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        w = s, s = _c(t);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function gp() {
    var s, a, o;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    return o = V(), o !== e ? (w = s, s = $c(o)) : (r = s, s = e), s;
  }
  function dp() {
    var s, a, o, t;
    if (s = r, i.substr(r, 5).toLowerCase() === js ? (a = i.substr(r, 5), r += 5) : (a = e, u(tr)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = V(), t !== e ? (w = s, s = bc(t)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function qe() {
    var s, a, o;
    for (s = r, i.substr(r, 5).toLowerCase() === as ? (i.substr(r, 5), r += 5) : u(Es), a = [], o = f(); o !== e; )
      a.push(o), o = f();
    return o = fe(), o !== e ? (w = s, s = vc(o)) : (r = s, s = e), s;
  }
  function je() {
    var s, a, o, t, n;
    return s = r, a = wp(), a === e && (a = null), o = _p(), o === e && (o = null), t = $p(), t === e && (t = null), n = bp(), n === e && (n = null), w = s, s = Ac(a, o, t, n), s;
  }
  function wp() {
    var s, a, o, t, n, l, h;
    if (s = r, i.substr(r, 5).toLowerCase() === zi ? (a = i.substr(r, 5), r += 5) : (a = e, u(sf)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.substr(r, 2).toLowerCase() === Jr ? (t = i.substr(r, 2), r += 2) : (t = e, u(At)), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (l = [], h = si(), h !== e)
          for (; h !== e; )
            l.push(h), h = si();
        else
          l = e;
        l !== e ? (w = s, s = mc(l)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function si() {
    var s, a, o, t, n, l, h, c, g, p, _;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (o = Ir(), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      w = s, s = Cc(o);
    } else
      r = s, s = e;
    if (s === e) {
      for (s = r, a = [], o = f(); o !== e; )
        a.push(o), o = f();
      if (o = _i(), o !== e) {
        for (t = [], n = f(); n !== e; )
          t.push(n), n = f();
        w = s, s = Ec(o);
      } else
        r = s, s = e;
      if (s === e) {
        for (s = r, a = [], o = f(); o !== e; )
          a.push(o), o = f();
        if (i.charCodeAt(r) === 40 ? (o = A, r++) : (o = e, u(y)), o !== e) {
          for (t = [], n = f(); n !== e; )
            t.push(n), n = f();
          if (n = C(), n !== e) {
            for (l = [], h = f(); h !== e; )
              l.push(h), h = f();
            if (h = r, i.substr(r, 2).toLowerCase() === $e ? (c = i.substr(r, 2), r += 2) : (c = e, u(Cs)), c !== e) {
              for (g = [], p = f(); p !== e; )
                g.push(p), p = f();
              p = Y(), p !== e ? (c = [c, g, p], h = c) : (r = h, h = e);
            } else
              r = h, h = e;
            for (h === e && (h = null), c = [], g = f(); g !== e; )
              c.push(g), g = f();
            if (i.charCodeAt(r) === 41 ? (g = E, r++) : (g = e, u(P)), g !== e) {
              for (p = [], _ = f(); _ !== e; )
                p.push(_), _ = f();
              w = s, s = yc(n, h);
            } else
              r = s, s = e;
          } else
            r = s, s = e;
        } else
          r = s, s = e;
        if (s === e) {
          for (s = r, a = [], o = f(); o !== e; )
            a.push(o), o = f();
          if (o = Y(), o !== e) {
            for (t = [], n = f(); n !== e; )
              t.push(n), n = f();
            w = s, s = Pc(o);
          } else
            r = s, s = e;
        }
      }
    }
    return s;
  }
  function _p() {
    var s, a, o, t, n;
    if (s = r, i.substr(r, 6).toLowerCase() === Qi ? (a = i.substr(r, 6), r += 6) : (a = e, u(rf)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = [], n = ri(), n !== e)
        for (; n !== e; )
          t.push(n), n = ri();
      else
        t = e;
      t !== e ? (w = s, s = Tc(t)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function ri() {
    var s, a, o, t;
    if (s = r, a = Ar(), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      w = s, s = Lc(a);
    } else
      r = s, s = e;
    return s;
  }
  function $p() {
    var s, a, o, t, n, l, h, c;
    if (s = r, i.substr(r, 5).toLowerCase() === Zi ? (a = i.substr(r, 5), r += 5) : (a = e, u(tf)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.substr(r, 2).toLowerCase() === Jr ? (t = i.substr(r, 2), r += 2) : (t = e, u(At)), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (l = [], h = ti(), h !== e)
          for (; h !== e; )
            l.push(h), h = ti();
        else
          l = e;
        if (l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          w = s, s = Rc(l);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function ti() {
    var s, a, o, t, n, l;
    if (s = r, i.substr(r, 3).toLowerCase() === Ki ? (a = i.substr(r, 3), r += 3) : (a = e, u(lf)), a === e && (i.substr(r, 4).toLowerCase() === Ji ? (a = i.substr(r, 4), r += 4) : (a = e, u(af))), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = Rr(), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        w = s, s = Ic(a, t);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    if (s === e)
      if (s = r, a = Ar(), a === e && (a = Y()), a !== e) {
        for (o = [], t = f(); t !== e; )
          o.push(t), t = f();
        w = s, s = Oc(a);
      } else
        r = s, s = e;
    return s;
  }
  function bp() {
    var s, a, o, t;
    return s = r, a = r, o = ii(), o !== e ? (t = li(), t === e && (t = null), o = [o, t], a = o) : (r = a, a = e), a === e && (a = r, o = li(), o !== e ? (t = ii(), t === e && (t = null), o = [o, t], a = o) : (r = a, a = e)), a !== e && (w = s, a = Nc(a)), s = a, s;
  }
  function ii() {
    var s, a, o, t, n, l;
    if (s = r, i.substr(r, 5).toLowerCase() === qi ? (a = i.substr(r, 5), r += 5) : (a = e, u(ff)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = is(), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        w = s, s = Sc(t);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function li() {
    var s, a, o, t, n, l;
    if (s = r, i.substr(r, 6).toLowerCase() === el ? (a = i.substr(r, 6), r += 6) : (a = e, u(of)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = is(), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        w = s, s = Fc(t);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function ai() {
    var s, a, o, t;
    return s = r, a = r, i.substr(r, 6).toLowerCase() === qr ? (o = i.substr(r, 6), r += 6) : (o = e, u(mt)), o !== e ? (t = di(), t !== e ? (o = [o, t], a = o) : (r = a, a = e)) : (r = a, a = e), a === e && (a = null), w = s, a = xc(a), s = a, s;
  }
  function fi() {
    var s, a, o, t, n, l, h, c, g, p;
    for (s = r, a = Kt(), o = r, t = [], n = f(); n !== e; )
      t.push(n), n = f();
    if (n = vp(), n !== e) {
      for (l = r, h = [], c = f(); c !== e; )
        h.push(c), c = f();
      if (i.charCodeAt(r) === 59 ? (c = Ue, r++) : (c = e, u(Be)), c !== e) {
        for (g = [], p = f(); p !== e; )
          g.push(p), p = f();
        p = fi(), h = [h, c, g, p], l = h;
      } else
        r = l, l = e;
      l === e && (l = null), t = [t, n, l], o = t;
    } else
      r = o, o = e;
    for (o === e && (o = null), t = [], n = f(); n !== e; )
      t.push(n), n = f();
    return w = s, s = Dc(a, o), s;
  }
  function vp() {
    var s;
    return s = Ap(), s === e && (s = mp(), s === e && (s = Cp(), s === e && (s = yp(), s === e && (s = Pp(), s === e && (s = Tp(), s === e && (s = Ep(), s === e && (s = Lp(), s === e && (s = Rp(), s === e && (s = Ip(), s === e && (s = Op())))))))))), s;
  }
  function Ap() {
    var s, a, o, t, n, l, h, c, g, p, _;
    if (s = r, i.substr(r, 4).toLowerCase() === sl ? (a = i.substr(r, 4), r += 4) : (a = e, u(cf)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Le ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (l = V(), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (c = r, i.substr(r, 4).toLowerCase() === rl ? (g = i.substr(r, 4), r += 4) : (g = e, u(nf)), g !== e) {
          for (p = [], _ = f(); _ !== e; )
            p.push(_), _ = f();
          _ = br(), _ !== e ? (g = [g, p, _], c = g) : (r = c, c = e);
        } else
          r = c, c = e;
        c === e && (c = null), w = s, s = Gc(t, l, c);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function mp() {
    var s, a, o, t, n, l;
    if (s = r, i.substr(r, 5).toLowerCase() === tl ? (a = i.substr(r, 5), r += 5) : (a = e, u(hf)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Le ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], l = f(); l !== e; )
        n.push(l), l = f();
      l = ni(), l !== e ? (w = s, s = Uc(t, l)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Cp() {
    var s, a, o, t, n, l;
    if (s = r, i.substr(r, 4).toLowerCase() === il ? (a = i.substr(r, 4), r += 4) : (a = e, u(uf)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Le ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], l = f(); l !== e; )
        n.push(l), l = f();
      l = ni(), l !== e ? (w = s, s = Hc(t, l)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Ep() {
    var s, a, o, t, n, l;
    if (s = r, i.substr(r, 6).toLowerCase() === ll ? (a = i.substr(r, 6), r += 6) : (a = e, u(pf)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Le ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], l = f(); l !== e; )
        n.push(l), l = f();
      l = br(), l !== e ? (w = s, s = Bc(t, l)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function yp() {
    var s, a, o, t, n, l, h, c, g, p;
    if (s = r, i.substr(r, 3).toLowerCase() === al ? (a = i.substr(r, 3), r += 3) : (a = e, u(gf)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Le ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (l = Xe(), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (i.substr(r, 2).toLowerCase() === Xs ? (c = i.substr(r, 2), r += 2) : (c = e, u(ir)), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          p = Xe(), p !== e ? (w = s, s = kc(t, l, p)) : (r = s, s = e);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Pp() {
    var s, a, o, t, n, l, h, c, g, p;
    if (s = r, i.substr(r, 4).toLowerCase() === fl ? (a = i.substr(r, 4), r += 4) : (a = e, u(df)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Le ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (l = Xe(), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (i.substr(r, 2).toLowerCase() === Xs ? (c = i.substr(r, 2), r += 2) : (c = e, u(ir)), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          p = Xe(), p !== e ? (w = s, s = Mc(t, l, p)) : (r = s, s = e);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Tp() {
    var s, a, o, t, n, l, h, c, g, p;
    if (s = r, i.substr(r, 4).toLowerCase() === ol ? (a = i.substr(r, 4), r += 4) : (a = e, u(wf)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Le ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (l = Xe(), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (i.substr(r, 2).toLowerCase() === Xs ? (c = i.substr(r, 2), r += 2) : (c = e, u(ir)), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          p = Xe(), p !== e ? (w = s, s = jc(t, l, p)) : (r = s, s = e);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Lp() {
    var s, a, o, t, n, l;
    if (s = r, i.substr(r, 6).toLowerCase() === et ? (a = i.substr(r, 6), r += 6) : (a = e, u(Ct)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.substr(r, 4).toLowerCase() === st ? (t = i.substr(r, 4), r += 4) : (t = e, u(Et)), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        l = hi(), l !== e ? (w = s, s = Xc(l)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Rp() {
    var s, a, o, t, n;
    if (s = r, i.substr(r, 6).toLowerCase() === Vs ? (a = i.substr(r, 6), r += 6) : (a = e, u(lr)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      i.substr(r, 4).toLowerCase() === st ? (t = i.substr(r, 4), r += 4) : (t = e, u(Et)), t !== e ? (n = hi(), n !== e ? (w = s, s = Vc(n)) : (r = s, s = e)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Ip() {
    var s, a, o, t, n, l;
    if (s = r, i.substr(r, 6).toLowerCase() === Vs ? (a = i.substr(r, 6), r += 6) : (a = e, u(lr)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.substr(r, 5).toLowerCase() === as ? (t = i.substr(r, 5), r += 5) : (t = e, u(Es)), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        l = vr(), l !== e ? (w = s, s = Wc(l)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Op() {
    var s, a, o, t, n, l, h, c, g, p, _;
    if (s = r, a = r, i.substr(r, 4).toLowerCase() === cl ? (o = i.substr(r, 4), r += 4) : (o = e, u(_f)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = V(), n !== e) {
        for (l = [], h = f(); h !== e; )
          l.push(h), h = f();
        o = [o, t, n, l], a = o;
      } else
        r = a, a = e;
    } else
      r = a, a = e;
    if (a === e && (a = null), o = r, t = Np(), t !== e) {
      for (n = [], l = f(); l !== e; )
        n.push(l), l = f();
      l = oi(), l === e && (l = null), t = [t, n, l], o = t;
    } else
      r = o, o = e;
    if (o === e && (o = oi()), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      for (n = [], l = ci(); l !== e; )
        n.push(l), l = ci();
      for (l = [], h = f(); h !== e; )
        l.push(h), h = f();
      if (i.substr(r, 5).toLowerCase() === as ? (h = i.substr(r, 5), r += 5) : (h = e, u(Es)), h !== e) {
        for (c = [], g = f(); g !== e; )
          c.push(g), g = f();
        if (g = fe(), g !== e) {
          for (p = [], _ = f(); _ !== e; )
            p.push(_), _ = f();
          w = s, s = Yc(a, o, n, g);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Np() {
    var s, a, o;
    return s = r, i.substr(r, 6).toLowerCase() === Vs ? (a = i.substr(r, 6), r += 6) : (a = e, u(lr)), a !== e ? (o = vr(), o !== e ? (w = s, s = zc(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function oi() {
    var s, a, o;
    return s = r, i.substr(r, 6).toLowerCase() === et ? (a = i.substr(r, 6), r += 6) : (a = e, u(Ct)), a !== e ? (o = vr(), o !== e ? (w = s, s = Qc(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function ci() {
    var s, a, o, t, n, l, h, c;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.substr(r, 5).toLowerCase() === nl ? (o = i.substr(r, 5), r += 5) : (o = e, u($f)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = V(), n === e)
        if (n = r, i.substr(r, 5).toLowerCase() === js ? (l = i.substr(r, 5), r += 5) : (l = e, u(tr)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = V(), c !== e ? (l = [l, h, c], n = l) : (r = n, n = e);
        } else
          r = n, n = e;
      n !== e ? (w = s, s = Zc(n)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Xe() {
    var s, a, o, t;
    if (s = r, i.substr(r, 7).toLowerCase() === rt ? (a = i.substr(r, 7), r += 7) : (a = e, u(yt)), a !== e && (w = s, a = Kc()), s = a, s === e) {
      for (s = r, i.substr(r, 5).toLowerCase() === fs ? (a = i.substr(r, 5), r += 5) : (a = e, u(ys)), a === e && (a = null), o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = V(), t !== e ? (w = s, s = Jc(t)) : (r = s, s = e);
    }
    return s;
  }
  function br() {
    var s, a, o, t;
    if (s = r, i.substr(r, 5).toLowerCase() === fs ? (a = i.substr(r, 5), r += 5) : (a = e, u(ys)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = V(), t !== e ? (w = s, s = qc(t)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function ni() {
    var s, a;
    return s = r, a = br(), a !== e && (w = s, a = en(a)), s = a, s === e && (s = r, i.substr(r, 7).toLowerCase() === rt ? (a = i.substr(r, 7), r += 7) : (a = e, u(yt)), a !== e && (w = s, a = sn()), s = a, s === e && (s = r, i.substr(r, 5).toLowerCase() === js ? (a = i.substr(r, 5), r += 5) : (a = e, u(tr)), a !== e && (w = s, a = rn()), s = a, s === e && (s = r, i.substr(r, 3).toLowerCase() === hl ? (a = i.substr(r, 3), r += 3) : (a = e, u(bf)), a !== e && (w = s, a = tn()), s = a))), s;
  }
  function vr() {
    var s, a, o, t, n, l, h, c, g;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.charCodeAt(r) === 123 ? (o = Pe, r++) : (o = e, u(Ie)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      for (n = ui(), l = [], h = f(); h !== e; )
        l.push(h), h = f();
      if (i.charCodeAt(r) === 125 ? (h = Te, r++) : (h = e, u(Oe)), h !== e) {
        for (c = [], g = f(); g !== e; )
          c.push(g), g = f();
        w = s, s = ln(n);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function hi() {
    var s, a, o, t, n, l, h, c, g;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.charCodeAt(r) === 123 ? (o = Pe, r++) : (o = e, u(Ie)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      for (n = ui(), l = [], h = f(); h !== e; )
        l.push(h), h = f();
      if (i.charCodeAt(r) === 125 ? (h = Te, r++) : (h = e, u(Oe)), h !== e) {
        for (c = [], g = f(); g !== e; )
          c.push(g), g = f();
        w = s, s = an(n);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function ui() {
    var s, a, o, t, n, l, h;
    for (s = r, a = Ve(), a === e && (a = null), o = [], t = r, n = pi(), n !== e ? (i.charCodeAt(r) === 46 ? (l = Q, r++) : (l = e, u(Z)), l === e && (l = null), h = Ve(), h === e && (h = null), n = [n, l, h], t = n) : (r = t, t = e); t !== e; )
      o.push(t), t = r, n = pi(), n !== e ? (i.charCodeAt(r) === 46 ? (l = Q, r++) : (l = e, u(Z)), l === e && (l = null), h = Ve(), h === e && (h = null), n = [n, l, h], t = n) : (r = t, t = e);
    return w = s, s = fn(a, o), s;
  }
  function pi() {
    var s, a, o, t, n, l, h, c, g, p, _, $, v;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.substr(r, 5).toLowerCase() === fs ? (o = i.substr(r, 5), r += 5) : (o = e, u(ys)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = Ye(), n !== e) {
        for (l = [], h = f(); h !== e; )
          l.push(h), h = f();
        if (i.charCodeAt(r) === 123 ? (h = Pe, r++) : (h = e, u(Ie)), h !== e) {
          for (c = [], g = f(); g !== e; )
            c.push(g), g = f();
          for (g = Ve(), g === e && (g = null), p = [], _ = f(); _ !== e; )
            p.push(_), _ = f();
          if (i.charCodeAt(r) === 125 ? (_ = Te, r++) : (_ = e, u(Oe)), _ !== e) {
            for ($ = [], v = f(); v !== e; )
              $.push(v), v = f();
            w = s, s = on(n, g);
          } else
            r = s, s = e;
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Ve() {
    var s, a, o, t, n, l, h;
    if (s = r, a = vi(), a !== e) {
      for (o = r, t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (i.charCodeAt(r) === 46 ? (n = Q, r++) : (n = e, u(Z)), n !== e) {
        for (l = [], h = f(); h !== e; )
          l.push(h), h = f();
        h = Ve(), h === e && (h = null), t = [t, n, l, h], o = t;
      } else
        r = o, o = e;
      o === e && (o = null), w = s, s = cn(a, o);
    } else
      r = s, s = e;
    return s;
  }
  function fe() {
    var s, a, o, t, n, l;
    if (s = r, i.charCodeAt(r) === 123 ? (a = Pe, r++) : (a = e, u(Ie)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = np(), t === e && (t = Sp()), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        i.charCodeAt(r) === 125 ? (l = Te, r++) : (l = e, u(Oe)), l !== e ? (w = s, s = nn(t)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Sp() {
    var s, a, o, t, n, l, h, c, g, p;
    for (s = r, a = Fs(), a === e && (a = null), o = [], t = f(); t !== e; )
      o.push(t), t = f();
    if (t = [], n = r, l = gi(), l !== e) {
      for (h = [], c = f(); c !== e; )
        h.push(c), c = f();
      for (i.charCodeAt(r) === 46 ? (c = Q, r++) : (c = e, u(Z)), c === e && (c = null), g = [], p = f(); p !== e; )
        g.push(p), p = f();
      p = Fs(), p === e && (p = null), l = [l, h, c, g, p], n = l;
    } else
      r = n, n = e;
    for (; n !== e; )
      if (t.push(n), n = r, l = gi(), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        for (i.charCodeAt(r) === 46 ? (c = Q, r++) : (c = e, u(Z)), c === e && (c = null), g = [], p = f(); p !== e; )
          g.push(p), p = f();
        p = Fs(), p === e && (p = null), l = [l, h, c, g, p], n = l;
      } else
        r = n, n = e;
    return w = s, s = hn(a, t), s;
  }
  function Fs() {
    var s, a, o, t, n, l, h;
    if (s = r, a = Wp(), a !== e) {
      for (o = r, t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (i.charCodeAt(r) === 46 ? (n = Q, r++) : (n = e, u(Z)), n !== e) {
        for (l = [], h = f(); h !== e; )
          l.push(h), h = f();
        h = Fs(), h === e && (h = null), t = [t, n, l, h], o = t;
      } else
        r = o, o = e;
      o === e && (o = null), w = s, s = un(a, o);
    } else
      r = s, s = e;
    return s;
  }
  function gi() {
    var s;
    return s = Mp(), s === e && (s = Fp(), s === e && (s = kp(), s === e && (s = xp(), s === e && (s = Dp(), s === e && (s = jp(), s === e && (s = Gp(), s === e && (s = Up()))))))), s;
  }
  function Fp() {
    var s, a, o, t, n;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.substr(r, 8).toLowerCase() === ul ? (o = i.substr(r, 8), r += 8) : (o = e, u(vf)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      n = fe(), n !== e ? (w = s, s = pn(n)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function xp() {
    var s, a, o, t, n, l, h;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.substr(r, 5).toLowerCase() === fs ? (o = i.substr(r, 5), r += 5) : (o = e, u(ys)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = Ye(), n !== e) {
        for (l = [], h = f(); h !== e; )
          l.push(h), h = f();
        h = fe(), h !== e ? (w = s, s = gn(n, h)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Dp() {
    var s, a, o, t, n, l, h, c;
    if (s = r, i.substr(r, 7).toLowerCase() === pl ? (a = i.substr(r, 7), r += 7) : (a = e, u(Af)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Le ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (l = Ye(), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = fe(), c !== e ? (w = s, s = dn(t, l, c)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Gp() {
    var s, a, o, t, n, l, h, c, g, p, _, $, v;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.substr(r, 4).toLowerCase() === gl ? (o = i.substr(r, 4), r += 4) : (o = e, u(mf)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (i.charCodeAt(r) === 40 ? (n = A, r++) : (n = e, u(y)), n !== e) {
        for (l = [], h = f(); h !== e; )
          l.push(h), h = f();
        if (h = C(), h !== e) {
          for (c = [], g = f(); g !== e; )
            c.push(g), g = f();
          if (i.substr(r, 2).toLowerCase() === $e ? (g = i.substr(r, 2), r += 2) : (g = e, u(Cs)), g !== e) {
            for (p = [], _ = f(); _ !== e; )
              p.push(_), _ = f();
            if (_ = Y(), _ !== e) {
              for ($ = [], v = f(); v !== e; )
                $.push(v), v = f();
              i.charCodeAt(r) === 41 ? (v = E, r++) : (v = e, u(P)), v !== e ? (w = s, s = wn(h, _)) : (r = s, s = e);
            } else
              r = s, s = e;
          } else
            r = s, s = e;
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Up() {
    var s, a, o, t, n;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.substr(r, 6).toLowerCase() === qr ? (o = i.substr(r, 6), r += 6) : (o = e, u(mt)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      n = di(), n !== e ? (w = s, s = _n(n)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function di() {
    var s;
    return s = Hp(), s === e && (s = Bp()), s;
  }
  function Hp() {
    var s, a, o, t, n, l, h, c;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (o = Y(), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (i.charCodeAt(r) === 123 ? (n = Pe, r++) : (n = e, u(Ie)), n !== e) {
        for (l = [], h = f(); h !== e; )
          l.push(h), h = f();
        for (h = [], c = xs(); c !== e; )
          h.push(c), c = xs();
        i.charCodeAt(r) === 125 ? (c = Te, r++) : (c = e, u(Oe)), c !== e ? (w = s, s = $n(o, h)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Bp() {
    var s, a, o, t, n, l, h, c, g, p, _;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.charCodeAt(r) === 40 ? (o = A, r++) : (o = e, u(y)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      for (n = [], l = Y(); l !== e; )
        n.push(l), l = Y();
      if (i.charCodeAt(r) === 41 ? (l = E, r++) : (l = e, u(P)), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (i.charCodeAt(r) === 123 ? (c = Pe, r++) : (c = e, u(Ie)), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          for (p = [], _ = wi(); _ !== e; )
            p.push(_), _ = wi();
          i.charCodeAt(r) === 125 ? (_ = Te, r++) : (_ = e, u(Oe)), _ !== e ? (w = s, s = bn(n, p)) : (r = s, s = e);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function wi() {
    var s, a, o, t, n, l, h;
    if (s = r, i.charCodeAt(r) === 40 ? (a = A, r++) : (a = e, u(y)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (t = [], n = xs(); n !== e; )
        t.push(n), n = xs();
      if (i.charCodeAt(r) === 41 ? (n = E, r++) : (n = e, u(P)), n !== e) {
        for (l = [], h = f(); h !== e; )
          l.push(h), h = f();
        w = s, s = vn(t);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function xs() {
    var s, a, o, t;
    if (s = r, a = V(), a === e && (a = Or(), a === e && (a = Nr(), a === e && (a = xr(), a === e && (i.substr(r, 5) === tt ? (a = tt, r += 5) : (a = e, u(Cf)))))), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      w = s, s = An(a);
    } else
      r = s, s = e;
    return s;
  }
  function kp() {
    var s, a, o, t;
    if (s = r, i.substr(r, 5).toLowerCase() === dl ? (a = i.substr(r, 5), r += 5) : (a = e, u(Ef)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = fe(), t !== e ? (w = s, s = mn(t)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Mp() {
    var s, a, o, t, n, l, h, c;
    if (s = r, a = fe(), a !== e) {
      for (o = [], t = r, n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (i.substr(r, 5).toLowerCase() === it ? (l = i.substr(r, 5), r += 5) : (l = e, u(Pt)), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = fe(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (i.substr(r, 5).toLowerCase() === it ? (l = i.substr(r, 5), r += 5) : (l = e, u(Pt)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = fe(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
      }
      w = s, s = Cn(a, o);
    } else
      r = s, s = e;
    return s;
  }
  function jp() {
    var s, a, o, t, n;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.substr(r, 6).toLowerCase() === wl ? (o = i.substr(r, 6), r += 6) : (o = e, u(yf)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      n = Ar(), n !== e ? (w = s, s = En(n)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Ar() {
    var s;
    return s = Rr(), s === e && (s = Ir(), s === e && (s = _i())), s;
  }
  function _i() {
    var s, a, o, t;
    if (s = r, a = V(), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = $i(), t !== e ? (w = s, s = yn(a, t)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function $i() {
    var s, a, o, t, n, l, h, c, g, p, _, $;
    if (s = r, a = xe(), a !== e && (w = s, a = Pn()), s = a, s === e)
      if (s = r, i.charCodeAt(r) === 40 ? (a = A, r++) : (a = e, u(y)), a !== e) {
        for (o = [], t = f(); t !== e; )
          o.push(t), t = f();
        for (i.substr(r, 8).toLowerCase() === O ? (t = i.substr(r, 8), r += 8) : (t = e, u(ve)), t === e && (t = null), n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (l = C(), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          if (c = [], g = r, i.charCodeAt(r) === 44 ? (p = U, r++) : (p = e, u(H)), p !== e) {
            for (_ = [], $ = f(); $ !== e; )
              _.push($), $ = f();
            $ = C(), $ !== e ? (p = [p, _, $], g = p) : (r = g, g = e);
          } else
            r = g, g = e;
          for (; g !== e; )
            if (c.push(g), g = r, i.charCodeAt(r) === 44 ? (p = U, r++) : (p = e, u(H)), p !== e) {
              for (_ = [], $ = f(); $ !== e; )
                _.push($), $ = f();
              $ = C(), $ !== e ? (p = [p, _, $], g = p) : (r = g, g = e);
            } else
              r = g, g = e;
          i.charCodeAt(r) === 41 ? (g = E, r++) : (g = e, u(P)), g !== e ? (w = s, s = Tn(t, l, c)) : (r = s, s = e);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    return s;
  }
  function We() {
    var s, a, o, t, n, l, h, c, g, p;
    if (s = r, a = xe(), a !== e && (w = s, a = Ln()), s = a, s === e)
      if (s = r, i.charCodeAt(r) === 40 ? (a = A, r++) : (a = e, u(y)), a !== e) {
        for (o = [], t = f(); t !== e; )
          o.push(t), t = f();
        if (t = V(), t === e && (t = C()), t !== e) {
          for (n = [], l = f(); l !== e; )
            n.push(l), l = f();
          if (l = [], h = r, i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
            for (g = [], p = f(); p !== e; )
              g.push(p), p = f();
            p = V(), p === e && (p = C()), p !== e ? (c = [c, g, p], h = c) : (r = h, h = e);
          } else
            r = h, h = e;
          for (; h !== e; )
            if (l.push(h), h = r, i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
              for (g = [], p = f(); p !== e; )
                g.push(p), p = f();
              p = V(), p === e && (p = C()), p !== e ? (c = [c, g, p], h = c) : (r = h, h = e);
            } else
              r = h, h = e;
          i.charCodeAt(r) === 41 ? (h = E, r++) : (h = e, u(P)), h !== e ? (w = s, s = Rn(t, l)) : (r = s, s = e);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    return s;
  }
  function Xp() {
    var s, a, o, t, n, l;
    if (s = r, i.charCodeAt(r) === 123 ? (a = Pe, r++) : (a = e, u(Ie)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (t = bi(), t === e && (t = null), n = [], l = f(); l !== e; )
        n.push(l), l = f();
      i.charCodeAt(r) === 125 ? (l = Te, r++) : (l = e, u(Oe)), l !== e ? (w = s, s = In(t)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function bi() {
    var s, a, o, t, n, l, h;
    if (s = r, a = vi(), a !== e) {
      for (o = r, t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (i.charCodeAt(r) === 46 ? (n = Q, r++) : (n = e, u(Z)), n !== e) {
        for (l = [], h = f(); h !== e; )
          l.push(h), h = f();
        h = bi(), h === e && (h = null), t = [t, n, l, h], o = t;
      } else
        r = o, o = e;
      o === e && (o = null), w = s, s = On(a, o);
    } else
      r = s, s = e;
    return s;
  }
  function vi() {
    var s, a, o, t, n;
    if (s = r, a = Us(), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = mr(), t !== e ? (w = s, s = Nn(a, t)) : (r = s, s = e);
    } else
      r = s, s = e;
    if (s === e) {
      for (s = r, a = [], o = f(); o !== e; )
        a.push(o), o = f();
      if (o = mi(), o !== e) {
        for (t = [], n = f(); n !== e; )
          t.push(n), n = f();
        n = Vp(), w = s, s = Sn(o, n);
      } else
        r = s, s = e;
    }
    return s;
  }
  function Vp() {
    var s;
    return s = mr(), s === e && (s = null), s;
  }
  function mr() {
    var s, a, o, t, n, l, h, c, g, p, _, $, v;
    if (s = r, a = Cr(), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = es(), t !== e) {
        for (n = [], l = r, h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (i.charCodeAt(r) === 59 ? (c = Ue, r++) : (c = e, u(Be)), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          if (p = r, _ = Cr(), _ !== e) {
            for ($ = [], v = f(); v !== e; )
              $.push(v), v = f();
            v = es(), v !== e ? (_ = [_, $, v], p = _) : (r = p, p = e);
          } else
            r = p, p = e;
          p === e && (p = null), h = [h, c, g, p], l = h;
        } else
          r = l, l = e;
        for (; l !== e; ) {
          for (n.push(l), l = r, h = [], c = f(); c !== e; )
            h.push(c), c = f();
          if (i.charCodeAt(r) === 59 ? (c = Ue, r++) : (c = e, u(Be)), c !== e) {
            for (g = [], p = f(); p !== e; )
              g.push(p), p = f();
            if (p = r, _ = Cr(), _ !== e) {
              for ($ = [], v = f(); v !== e; )
                $.push(v), v = f();
              v = es(), v !== e ? (_ = [_, $, v], p = _) : (r = p, p = e);
            } else
              r = p, p = e;
            p === e && (p = null), h = [h, c, g, p], l = h;
          } else
            r = l, l = e;
        }
        w = s, s = Fn(a, t, n);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Cr() {
    var s, a;
    return s = Ye(), s === e && (s = r, i.charCodeAt(r) === 97 ? (a = os, r++) : (a = e, u(Ps)), a !== e && (w = s, a = xn()), s = a), s;
  }
  function es() {
    var s, a, o, t, n, l, h, c;
    if (s = r, a = ss(), a !== e) {
      for (o = [], t = r, n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (i.charCodeAt(r) === 44 ? (l = U, r++) : (l = e, u(H)), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = ss(), c !== e ? t = c : (r = t, t = e);
      } else
        r = t, t = e;
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (i.charCodeAt(r) === 44 ? (l = U, r++) : (l = e, u(H)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = ss(), c !== e ? t = c : (r = t, t = e);
        } else
          r = t, t = e;
      }
      w = s, s = Dn(a, o);
    } else
      r = s, s = e;
    return s;
  }
  function Wp() {
    var s, a, o, t, n;
    if (s = r, a = Us(), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = Er(), t !== e ? (w = s, s = Gn(a, t)) : (r = s, s = e);
    } else
      r = s, s = e;
    if (s === e) {
      for (s = r, a = [], o = f(); o !== e; )
        a.push(o), o = f();
      if (o = Ci(), o !== e) {
        for (t = [], n = f(); n !== e; )
          t.push(n), n = f();
        n = Yp(), w = s, s = Un(o, n);
      } else
        r = s, s = e;
    }
    return s;
  }
  function Yp() {
    var s;
    return s = Er(), s === e && (s = null), s;
  }
  function Er() {
    var s, a, o, t, n, l, h, c, g, p, _, $, v;
    if (s = r, a = Ds(), a === e && (a = Y()), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = zp(), t !== e) {
        for (n = [], l = r, h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (i.charCodeAt(r) === 59 ? (c = Ue, r++) : (c = e, u(Be)), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          if (p = r, _ = Ds(), _ === e && (_ = Y()), _ !== e) {
            for ($ = [], v = f(); v !== e; )
              $.push(v), v = f();
            v = es(), v !== e ? (_ = [_, $, v], p = _) : (r = p, p = e);
          } else
            r = p, p = e;
          p === e && (p = null), h = [h, c, g, p], l = h;
        } else
          r = l, l = e;
        for (; l !== e; ) {
          for (n.push(l), l = r, h = [], c = f(); c !== e; )
            h.push(c), c = f();
          if (i.charCodeAt(r) === 59 ? (c = Ue, r++) : (c = e, u(Be)), c !== e) {
            for (g = [], p = f(); p !== e; )
              g.push(p), p = f();
            if (p = r, _ = Ds(), _ === e && (_ = Y()), _ !== e) {
              for ($ = [], v = f(); v !== e; )
                $.push(v), v = f();
              v = es(), v !== e ? (_ = [_, $, v], p = _) : (r = p, p = e);
            } else
              r = p, p = e;
            p === e && (p = null), h = [h, c, g, p], l = h;
          } else
            r = l, l = e;
        }
        w = s, s = Hn(a, t, n);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function zp() {
    var s, a, o, t, n, l, h, c;
    if (s = r, a = rs(), a !== e) {
      for (o = [], t = r, n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (i.charCodeAt(r) === 44 ? (l = U, r++) : (l = e, u(H)), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = rs(), c !== e ? t = c : (r = t, t = e);
      } else
        r = t, t = e;
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (i.charCodeAt(r) === 44 ? (l = U, r++) : (l = e, u(H)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = rs(), c !== e ? t = c : (r = t, t = e);
        } else
          r = t, t = e;
      }
      w = s, s = Bn(a, o);
    } else
      r = s, s = e;
    return s;
  }
  function Ds() {
    var s, a, o, t, n, l, h, c;
    if (s = r, a = yr(), a !== e) {
      for (o = [], t = r, n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (i.charCodeAt(r) === 124 ? (l = cs, r++) : (l = e, u(Ts)), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = yr(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (i.charCodeAt(r) === 124 ? (l = cs, r++) : (l = e, u(Ts)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = yr(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
      }
      w = s, s = kn(a, o);
    } else
      r = s, s = e;
    return s;
  }
  function yr() {
    var s, a, o, t, n, l, h, c;
    if (s = r, a = Pr(), a !== e) {
      for (o = [], t = r, n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (i.charCodeAt(r) === 47 ? (l = be, r++) : (l = e, u(Ae)), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = Pr(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (i.charCodeAt(r) === 47 ? (l = be, r++) : (l = e, u(Ae)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = Pr(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
      }
      w = s, s = Mn(a, o);
    } else
      r = s, s = e;
    return s;
  }
  function Ai() {
    var s, a, o;
    return s = r, a = Zp(), a !== e ? (o = Qp(), o === e && (o = null), w = s, s = jn(a, o)) : (r = s, s = e), s;
  }
  function Pr() {
    var s, a, o;
    return s = Ai(), s === e && (s = r, i.charCodeAt(r) === 94 ? (a = lt, r++) : (a = e, u(Tt)), a !== e ? (o = Ai(), o !== e ? (w = s, s = Xn(o)) : (r = s, s = e)) : (r = s, s = e)), s;
  }
  function Qp() {
    var s;
    return i.charCodeAt(r) === 63 ? (s = Ws, r++) : (s = e, u(ar)), s === e && (i.charCodeAt(r) === 42 ? (s = le, r++) : (s = e, u(ae)), s === e && (i.charCodeAt(r) === 43 ? (s = Re, r++) : (s = e, u(Se)))), s;
  }
  function Zp() {
    var s, a, o, t;
    return s = V(), s === e && (s = r, i.charCodeAt(r) === 97 ? (a = os, r++) : (a = e, u(Ps)), a !== e && (w = s, a = Vn()), s = a, s === e && (s = r, i.charCodeAt(r) === 33 ? (a = Ys, r++) : (a = e, u(fr)), a !== e ? (o = Kp(), o !== e ? (a = [a, o], s = a) : (r = s, s = e)) : (r = s, s = e), s === e && (s = r, i.charCodeAt(r) === 40 ? (a = A, r++) : (a = e, u(y)), a !== e ? (o = Ds(), o !== e ? (i.charCodeAt(r) === 41 ? (t = E, r++) : (t = e, u(P)), t !== e ? (w = s, s = Wn(o)) : (r = s, s = e)) : (r = s, s = e)) : (r = s, s = e)))), s;
  }
  function Kp() {
    var s, a, o, t, n, l, h, c;
    if (s = Gs(), s === e)
      if (s = r, i.charCodeAt(r) === 40 ? (a = A, r++) : (a = e, u(y)), a !== e) {
        if (o = r, t = Gs(), t !== e) {
          for (n = [], l = r, i.charCodeAt(r) === 124 ? (h = cs, r++) : (h = e, u(Ts)), h !== e ? (c = Gs(), c !== e ? (h = [h, c], l = h) : (r = l, l = e)) : (r = l, l = e); l !== e; )
            n.push(l), l = r, i.charCodeAt(r) === 124 ? (h = cs, r++) : (h = e, u(Ts)), h !== e ? (c = Gs(), c !== e ? (h = [h, c], l = h) : (r = l, l = e)) : (r = l, l = e);
          t = [t, n], o = t;
        } else
          r = o, o = e;
        o === e && (o = null), i.charCodeAt(r) === 41 ? (t = E, r++) : (t = e, u(P)), t !== e ? (a = [a, o, t], s = a) : (r = s, s = e);
      } else
        r = s, s = e;
    return s;
  }
  function Gs() {
    var s, a, o;
    return s = V(), s === e && (i.charCodeAt(r) === 97 ? (s = os, r++) : (s = e, u(Ps)), s === e && (s = r, i.charCodeAt(r) === 94 ? (a = lt, r++) : (a = e, u(Tt)), a !== e ? (o = V(), o === e && (i.charCodeAt(r) === 97 ? (o = os, r++) : (o = e, u(Ps))), o !== e ? (a = [a, o], s = a) : (r = s, s = e)) : (r = s, s = e))), s;
  }
  function mi() {
    var s, a;
    return s = r, a = eg(), a !== e && (w = s, a = Yn(a)), s = a, s === e && (s = Jp()), s;
  }
  function Jp() {
    var s, a, o, t, n, l, h, c, g;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.charCodeAt(r) === 91 ? (o = zs, r++) : (o = e, u(or)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = mr(), n !== e) {
        for (l = [], h = f(); h !== e; )
          l.push(h), h = f();
        if (i.charCodeAt(r) === 93 ? (h = Qs, r++) : (h = e, u(cr)), h !== e) {
          for (c = [], g = f(); g !== e; )
            c.push(g), g = f();
          w = s, s = zn(n);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Ci() {
    var s, a;
    return s = r, a = sg(), a !== e && (w = s, a = Qn(a)), s = a, s === e && (s = qp()), s;
  }
  function qp() {
    var s, a, o, t, n, l, h, c, g;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.charCodeAt(r) === 91 ? (o = zs, r++) : (o = e, u(or)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = Er(), n !== e) {
        for (l = [], h = f(); h !== e; )
          l.push(h), h = f();
        if (i.charCodeAt(r) === 93 ? (h = Qs, r++) : (h = e, u(cr)), h !== e) {
          for (c = [], g = f(); g !== e; )
            c.push(g), g = f();
          w = s, s = Zn(n);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function eg() {
    var s, a, o, t, n, l, h, c, g;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.charCodeAt(r) === 40 ? (o = A, r++) : (o = e, u(y)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = [], l = ss(), l !== e)
        for (; l !== e; )
          n.push(l), l = ss();
      else
        n = e;
      if (n !== e) {
        for (l = [], h = f(); h !== e; )
          l.push(h), h = f();
        if (i.charCodeAt(r) === 41 ? (h = E, r++) : (h = e, u(P)), h !== e) {
          for (c = [], g = f(); g !== e; )
            c.push(g), g = f();
          w = s, s = Kn(n);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function sg() {
    var s, a, o, t, n, l, h, c, g;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (i.charCodeAt(r) === 40 ? (o = A, r++) : (o = e, u(y)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = [], l = rs(), l !== e)
        for (; l !== e; )
          n.push(l), l = rs();
      else
        n = e;
      if (n !== e) {
        for (l = [], h = f(); h !== e; )
          l.push(h), h = f();
        if (i.charCodeAt(r) === 41 ? (h = E, r++) : (h = e, u(P)), h !== e) {
          for (c = [], g = f(); g !== e; )
            c.push(g), g = f();
          w = s, s = Jn(n);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function ss() {
    var s, a, o;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    return o = Us(), o === e && (o = mi()), o !== e ? (w = s, s = qn(o)) : (r = s, s = e), s;
  }
  function rs() {
    var s, a, o;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    return o = Us(), o === e && (o = Ci()), o !== e ? (w = s, s = eh(o)) : (r = s, s = e), s;
  }
  function Us() {
    var s;
    return s = Y(), s === e && (s = rg()), s;
  }
  function Ye() {
    var s;
    return s = Y(), s === e && (s = V()), s;
  }
  function Y() {
    var s, a, o, t, n;
    for (s = r, a = [], o = f(); o !== e; )
      a.push(o), o = f();
    if (o = dg(), o === e && (o = wg()), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      w = s, s = sh(o);
    } else
      r = s, s = e;
    return s;
  }
  function rg() {
    var s;
    return s = V(), s === e && (s = Or(), s === e && (s = Nr(), s === e && (s = xr(), s === e && (s = ug(), s === e && (s = xe()))))), s;
  }
  function C() {
    var s, a, o, t, n, l, h, c;
    if (s = r, a = Tr(), a !== e) {
      for (o = [], t = r, n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (i.substr(r, 2) === ns ? (l = ns, r += 2) : (l = e, u(Lt)), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = Tr(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (i.substr(r, 2) === ns ? (l = ns, r += 2) : (l = e, u(Lt)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = Tr(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
      }
      w = s, s = rh(a, o);
    } else
      r = s, s = e;
    return s;
  }
  function Tr() {
    var s, a, o, t, n, l, h, c;
    if (s = r, a = Lr(), a !== e) {
      for (o = [], t = r, n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (i.substr(r, 2) === hs ? (l = hs, r += 2) : (l = e, u(Rt)), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = Lr(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (i.substr(r, 2) === hs ? (l = hs, r += 2) : (l = e, u(Rt)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = Lr(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
      }
      w = s, s = th(a, o);
    } else
      r = s, s = e;
    return s;
  }
  function Lr() {
    var s, a, o, t, n, l, h, c, g, p;
    if (s = r, a = q(), a !== e) {
      for (o = [], t = r, n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (i.charCodeAt(r) === 61 ? (l = us, r++) : (l = e, u(Ls)), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = q(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      if (t === e) {
        for (t = r, n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (i.substr(r, 2) === ps ? (l = ps, r += 2) : (l = e, u(It)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = q(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
        if (t === e) {
          for (t = r, n = [], l = f(); l !== e; )
            n.push(l), l = f();
          if (i.charCodeAt(r) === 60 ? (l = Zs, r++) : (l = e, u(nr)), l !== e) {
            for (h = [], c = f(); c !== e; )
              h.push(c), c = f();
            c = q(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
          } else
            r = t, t = e;
          if (t === e) {
            for (t = r, n = [], l = f(); l !== e; )
              n.push(l), l = f();
            if (i.charCodeAt(r) === 62 ? (l = Ks, r++) : (l = e, u(hr)), l !== e) {
              for (h = [], c = f(); c !== e; )
                h.push(c), c = f();
              c = q(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
            } else
              r = t, t = e;
            if (t === e) {
              for (t = r, n = [], l = f(); l !== e; )
                n.push(l), l = f();
              if (i.substr(r, 2) === gs ? (l = gs, r += 2) : (l = e, u(Ot)), l !== e) {
                for (h = [], c = f(); c !== e; )
                  h.push(c), c = f();
                c = q(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
              } else
                r = t, t = e;
              if (t === e) {
                for (t = r, n = [], l = f(); l !== e; )
                  n.push(l), l = f();
                if (i.substr(r, 2) === ds ? (l = ds, r += 2) : (l = e, u(Nt)), l !== e) {
                  for (h = [], c = f(); c !== e; )
                    h.push(c), c = f();
                  c = q(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
                } else
                  r = t, t = e;
                if (t === e) {
                  for (t = r, n = [], l = f(); l !== e; )
                    n.push(l), l = f();
                  if (i.substr(r, 2).toLowerCase() === ws ? (l = i.substr(r, 2), r += 2) : (l = e, u(Rs)), l !== e) {
                    for (h = [], c = f(); c !== e; )
                      h.push(c), c = f();
                    c = We(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
                  } else
                    r = t, t = e;
                  if (t === e) {
                    for (t = r, n = [], l = f(); l !== e; )
                      n.push(l), l = f();
                    if (i.substr(r, 3).toLowerCase() === Js ? (l = i.substr(r, 3), r += 3) : (l = e, u(ur)), l !== e) {
                      for (h = [], c = f(); c !== e; )
                        h.push(c), c = f();
                      if (i.substr(r, 2).toLowerCase() === ws ? (c = i.substr(r, 2), r += 2) : (c = e, u(Rs)), c !== e) {
                        for (g = [], p = f(); p !== e; )
                          g.push(p), p = f();
                        p = We(), p !== e ? (n = [n, l, h, c, g, p], t = n) : (r = t, t = e);
                      } else
                        r = t, t = e;
                    } else
                      r = t, t = e;
                  }
                }
              }
            }
          }
        }
      }
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (i.charCodeAt(r) === 61 ? (l = us, r++) : (l = e, u(Ls)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = q(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
        if (t === e) {
          for (t = r, n = [], l = f(); l !== e; )
            n.push(l), l = f();
          if (i.substr(r, 2) === ps ? (l = ps, r += 2) : (l = e, u(It)), l !== e) {
            for (h = [], c = f(); c !== e; )
              h.push(c), c = f();
            c = q(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
          } else
            r = t, t = e;
          if (t === e) {
            for (t = r, n = [], l = f(); l !== e; )
              n.push(l), l = f();
            if (i.charCodeAt(r) === 60 ? (l = Zs, r++) : (l = e, u(nr)), l !== e) {
              for (h = [], c = f(); c !== e; )
                h.push(c), c = f();
              c = q(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
            } else
              r = t, t = e;
            if (t === e) {
              for (t = r, n = [], l = f(); l !== e; )
                n.push(l), l = f();
              if (i.charCodeAt(r) === 62 ? (l = Ks, r++) : (l = e, u(hr)), l !== e) {
                for (h = [], c = f(); c !== e; )
                  h.push(c), c = f();
                c = q(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
              } else
                r = t, t = e;
              if (t === e) {
                for (t = r, n = [], l = f(); l !== e; )
                  n.push(l), l = f();
                if (i.substr(r, 2) === gs ? (l = gs, r += 2) : (l = e, u(Ot)), l !== e) {
                  for (h = [], c = f(); c !== e; )
                    h.push(c), c = f();
                  c = q(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
                } else
                  r = t, t = e;
                if (t === e) {
                  for (t = r, n = [], l = f(); l !== e; )
                    n.push(l), l = f();
                  if (i.substr(r, 2) === ds ? (l = ds, r += 2) : (l = e, u(Nt)), l !== e) {
                    for (h = [], c = f(); c !== e; )
                      h.push(c), c = f();
                    c = q(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
                  } else
                    r = t, t = e;
                  if (t === e) {
                    for (t = r, n = [], l = f(); l !== e; )
                      n.push(l), l = f();
                    if (i.substr(r, 2).toLowerCase() === ws ? (l = i.substr(r, 2), r += 2) : (l = e, u(Rs)), l !== e) {
                      for (h = [], c = f(); c !== e; )
                        h.push(c), c = f();
                      c = We(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
                    } else
                      r = t, t = e;
                    if (t === e) {
                      for (t = r, n = [], l = f(); l !== e; )
                        n.push(l), l = f();
                      if (i.substr(r, 3).toLowerCase() === Js ? (l = i.substr(r, 3), r += 3) : (l = e, u(ur)), l !== e) {
                        for (h = [], c = f(); c !== e; )
                          h.push(c), c = f();
                        if (i.substr(r, 2).toLowerCase() === ws ? (c = i.substr(r, 2), r += 2) : (c = e, u(Rs)), c !== e) {
                          for (g = [], p = f(); p !== e; )
                            g.push(p), p = f();
                          p = We(), p !== e ? (n = [n, l, h, c, g, p], t = n) : (r = t, t = e);
                        } else
                          r = t, t = e;
                      } else
                        r = t, t = e;
                    }
                  }
                }
              }
            }
          }
        }
      }
      w = s, s = ih(a, o);
    } else
      r = s, s = e;
    return s;
  }
  function q() {
    var s, a, o, t, n, l, h, c, g, p, _;
    if (s = r, a = ts(), a !== e) {
      for (o = [], t = r, n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (i.charCodeAt(r) === 43 ? (l = Re, r++) : (l = e, u(Se)), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = ts(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      if (t === e) {
        for (t = r, n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (i.charCodeAt(r) === 45 ? (l = he, r++) : (l = e, u(ue)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = ts(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
        if (t === e)
          if (t = r, n = Sr(), n === e && (n = Fr()), n !== e) {
            for (l = [], h = r, c = [], g = f(); g !== e; )
              c.push(g), g = f();
            if (i.charCodeAt(r) === 42 ? (g = le, r++) : (g = e, u(ae)), g !== e) {
              for (p = [], _ = f(); _ !== e; )
                p.push(_), _ = f();
              _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
            } else
              r = h, h = e;
            if (h === e) {
              for (h = r, c = [], g = f(); g !== e; )
                c.push(g), g = f();
              if (i.charCodeAt(r) === 47 ? (g = be, r++) : (g = e, u(Ae)), g !== e) {
                for (p = [], _ = f(); _ !== e; )
                  p.push(_), _ = f();
                _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
              } else
                r = h, h = e;
            }
            for (; h !== e; ) {
              for (l.push(h), h = r, c = [], g = f(); g !== e; )
                c.push(g), g = f();
              if (i.charCodeAt(r) === 42 ? (g = le, r++) : (g = e, u(ae)), g !== e) {
                for (p = [], _ = f(); _ !== e; )
                  p.push(_), _ = f();
                _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
              } else
                r = h, h = e;
              if (h === e) {
                for (h = r, c = [], g = f(); g !== e; )
                  c.push(g), g = f();
                if (i.charCodeAt(r) === 47 ? (g = be, r++) : (g = e, u(Ae)), g !== e) {
                  for (p = [], _ = f(); _ !== e; )
                    p.push(_), _ = f();
                  _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
                } else
                  r = h, h = e;
              }
            }
            n = [n, l], t = n;
          } else
            r = t, t = e;
      }
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (i.charCodeAt(r) === 43 ? (l = Re, r++) : (l = e, u(Se)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = ts(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
        if (t === e) {
          for (t = r, n = [], l = f(); l !== e; )
            n.push(l), l = f();
          if (i.charCodeAt(r) === 45 ? (l = he, r++) : (l = e, u(ue)), l !== e) {
            for (h = [], c = f(); c !== e; )
              h.push(c), c = f();
            c = ts(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
          } else
            r = t, t = e;
          if (t === e)
            if (t = r, n = Sr(), n === e && (n = Fr()), n !== e) {
              for (l = [], h = r, c = [], g = f(); g !== e; )
                c.push(g), g = f();
              if (i.charCodeAt(r) === 42 ? (g = le, r++) : (g = e, u(ae)), g !== e) {
                for (p = [], _ = f(); _ !== e; )
                  p.push(_), _ = f();
                _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
              } else
                r = h, h = e;
              if (h === e) {
                for (h = r, c = [], g = f(); g !== e; )
                  c.push(g), g = f();
                if (i.charCodeAt(r) === 47 ? (g = be, r++) : (g = e, u(Ae)), g !== e) {
                  for (p = [], _ = f(); _ !== e; )
                    p.push(_), _ = f();
                  _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
                } else
                  r = h, h = e;
              }
              for (; h !== e; ) {
                for (l.push(h), h = r, c = [], g = f(); g !== e; )
                  c.push(g), g = f();
                if (i.charCodeAt(r) === 42 ? (g = le, r++) : (g = e, u(ae)), g !== e) {
                  for (p = [], _ = f(); _ !== e; )
                    p.push(_), _ = f();
                  _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
                } else
                  r = h, h = e;
                if (h === e) {
                  for (h = r, c = [], g = f(); g !== e; )
                    c.push(g), g = f();
                  if (i.charCodeAt(r) === 47 ? (g = be, r++) : (g = e, u(Ae)), g !== e) {
                    for (p = [], _ = f(); _ !== e; )
                      p.push(_), _ = f();
                    _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
                  } else
                    r = h, h = e;
                }
              }
              n = [n, l], t = n;
            } else
              r = t, t = e;
        }
      }
      w = s, s = lh(a, o);
    } else
      r = s, s = e;
    return s;
  }
  function ts() {
    var s, a, o, t, n, l, h, c;
    if (s = r, a = ee(), a !== e) {
      for (o = [], t = r, n = [], l = f(); l !== e; )
        n.push(l), l = f();
      if (i.charCodeAt(r) === 42 ? (l = le, r++) : (l = e, u(ae)), l !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = ee(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      if (t === e) {
        for (t = r, n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (i.charCodeAt(r) === 47 ? (l = be, r++) : (l = e, u(Ae)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = ee(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
      }
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (i.charCodeAt(r) === 42 ? (l = le, r++) : (l = e, u(ae)), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = ee(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
        if (t === e) {
          for (t = r, n = [], l = f(); l !== e; )
            n.push(l), l = f();
          if (i.charCodeAt(r) === 47 ? (l = be, r++) : (l = e, u(Ae)), l !== e) {
            for (h = [], c = f(); c !== e; )
              h.push(c), c = f();
            c = ee(), c !== e ? (n = [n, l, h, c], t = n) : (r = t, t = e);
          } else
            r = t, t = e;
        }
      }
      w = s, s = ah(a, o);
    } else
      r = s, s = e;
    return s;
  }
  function ee() {
    var s, a, o, t;
    if (s = r, i.charCodeAt(r) === 33 ? (a = Ys, r++) : (a = e, u(fr)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = Hs(), t !== e ? (w = s, s = fh(t)) : (r = s, s = e);
    } else
      r = s, s = e;
    if (s === e) {
      if (s = r, i.charCodeAt(r) === 43 ? (a = Re, r++) : (a = e, u(Se)), a !== e) {
        for (o = [], t = f(); t !== e; )
          o.push(t), t = f();
        t = Hs(), t !== e ? (w = s, s = oh(t)) : (r = s, s = e);
      } else
        r = s, s = e;
      if (s === e) {
        if (s = r, i.charCodeAt(r) === 45 ? (a = he, r++) : (a = e, u(ue)), a !== e) {
          for (o = [], t = f(); t !== e; )
            o.push(t), t = f();
          t = Hs(), t !== e ? (w = s, s = ch(t)) : (r = s, s = e);
        } else
          r = s, s = e;
        s === e && (s = Hs());
      }
    }
    return s;
  }
  function Hs() {
    var s, a;
    return s = Rr(), s === e && (s = Ir(), s === e && (s = cg(), s === e && (s = r, a = Or(), a !== e && (w = s, a = nh(a)), s = a, s === e && (s = r, a = Nr(), a !== e && (w = s, a = hh(a)), s = a, s === e && (s = r, a = xr(), a !== e && (w = s, a = uh(a)), s = a, s === e && (s = r, a = Y(), a !== e && (w = s, a = ph(a)), s = a)))))), s;
  }
  function Rr() {
    var s, a, o, t, n, l;
    if (s = r, i.charCodeAt(r) === 40 ? (a = A, r++) : (a = e, u(y)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = C(), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        i.charCodeAt(r) === 41 ? (l = E, r++) : (l = e, u(P)), l !== e ? (w = s, s = gh(t)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Ir() {
    var s, a, o, t, n, l, h, c, g, p, _, $, v, T, I, x;
    if (s = og(), s === e) {
      if (s = r, i.substr(r, 3).toLowerCase() === _l ? (a = i.substr(r, 3), r += 3) : (a = e, u(Pf)), a !== e) {
        for (o = [], t = f(); t !== e; )
          o.push(t), t = f();
        if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
          for (n = [], l = f(); l !== e; )
            n.push(l), l = f();
          if (l = C(), l !== e) {
            for (h = [], c = f(); c !== e; )
              h.push(c), c = f();
            i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = dh(l)) : (r = s, s = e);
          } else
            r = s, s = e;
        } else
          r = s, s = e;
      } else
        r = s, s = e;
      if (s === e) {
        if (s = r, i.substr(r, 4).toLowerCase() === $l ? (a = i.substr(r, 4), r += 4) : (a = e, u(Tf)), a !== e) {
          for (o = [], t = f(); t !== e; )
            o.push(t), t = f();
          if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
            for (n = [], l = f(); l !== e; )
              n.push(l), l = f();
            if (l = C(), l !== e) {
              for (h = [], c = f(); c !== e; )
                h.push(c), c = f();
              i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = wh(l)) : (r = s, s = e);
            } else
              r = s, s = e;
          } else
            r = s, s = e;
        } else
          r = s, s = e;
        if (s === e) {
          if (s = r, i.substr(r, 11).toLowerCase() === bl ? (a = i.substr(r, 11), r += 11) : (a = e, u(Lf)), a !== e) {
            for (o = [], t = f(); t !== e; )
              o.push(t), t = f();
            if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
              for (n = [], l = f(); l !== e; )
                n.push(l), l = f();
              if (l = C(), l !== e) {
                for (h = [], c = f(); c !== e; )
                  h.push(c), c = f();
                if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                  for (g = [], p = f(); p !== e; )
                    g.push(p), p = f();
                  if (p = C(), p !== e) {
                    for (_ = [], $ = f(); $ !== e; )
                      _.push($), $ = f();
                    i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = _h(l, p)) : (r = s, s = e);
                  } else
                    r = s, s = e;
                } else
                  r = s, s = e;
              } else
                r = s, s = e;
            } else
              r = s, s = e;
          } else
            r = s, s = e;
          if (s === e) {
            if (s = r, i.substr(r, 8).toLowerCase() === vl ? (a = i.substr(r, 8), r += 8) : (a = e, u(Rf)), a !== e) {
              for (o = [], t = f(); t !== e; )
                o.push(t), t = f();
              if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                for (n = [], l = f(); l !== e; )
                  n.push(l), l = f();
                if (l = C(), l !== e) {
                  for (h = [], c = f(); c !== e; )
                    h.push(c), c = f();
                  i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = $h(l)) : (r = s, s = e);
                } else
                  r = s, s = e;
              } else
                r = s, s = e;
            } else
              r = s, s = e;
            if (s === e) {
              if (s = r, i.substr(r, 5).toLowerCase() === Al ? (a = i.substr(r, 5), r += 5) : (a = e, u(If)), a !== e) {
                for (o = [], t = f(); t !== e; )
                  o.push(t), t = f();
                if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                  for (n = [], l = f(); l !== e; )
                    n.push(l), l = f();
                  if (l = Y(), l !== e) {
                    for (h = [], c = f(); c !== e; )
                      h.push(c), c = f();
                    i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = bh(l)) : (r = s, s = e);
                  } else
                    r = s, s = e;
                } else
                  r = s, s = e;
              } else
                r = s, s = e;
              if (s === e) {
                if (s = r, i.substr(r, 3).toLowerCase() === ml ? (a = i.substr(r, 3), r += 3) : (a = e, u(Of)), a !== e) {
                  for (o = [], t = f(); t !== e; )
                    o.push(t), t = f();
                  if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                    for (n = [], l = f(); l !== e; )
                      n.push(l), l = f();
                    if (l = C(), l !== e) {
                      for (h = [], c = f(); c !== e; )
                        h.push(c), c = f();
                      i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = vh(l)) : (r = s, s = e);
                    } else
                      r = s, s = e;
                  } else
                    r = s, s = e;
                } else
                  r = s, s = e;
                if (s === e) {
                  if (s = r, i.substr(r, 3).toLowerCase() === Cl ? (a = i.substr(r, 3), r += 3) : (a = e, u(Nf)), a !== e) {
                    for (o = [], t = f(); t !== e; )
                      o.push(t), t = f();
                    if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                      for (n = [], l = f(); l !== e; )
                        n.push(l), l = f();
                      if (l = C(), l !== e) {
                        for (h = [], c = f(); c !== e; )
                          h.push(c), c = f();
                        i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Ah(l)) : (r = s, s = e);
                      } else
                        r = s, s = e;
                    } else
                      r = s, s = e;
                  } else
                    r = s, s = e;
                  if (s === e) {
                    if (s = r, i.substr(r, 5).toLowerCase() === El ? (a = i.substr(r, 5), r += 5) : (a = e, u(Sf)), a !== e) {
                      for (o = [], t = f(); t !== e; )
                        o.push(t), t = f();
                      if (t = r, i.charCodeAt(r) === 40 ? (n = A, r++) : (n = e, u(y)), n !== e) {
                        for (l = [], h = f(); h !== e; )
                          l.push(h), h = f();
                        if (h = C(), h !== e) {
                          for (c = [], g = f(); g !== e; )
                            c.push(g), g = f();
                          i.charCodeAt(r) === 41 ? (g = E, r++) : (g = e, u(P)), g !== e ? (n = [n, l, h, c, g], t = n) : (r = t, t = e);
                        } else
                          r = t, t = e;
                      } else
                        r = t, t = e;
                      t === e && (t = xe()), t !== e ? (w = s, s = mh(t)) : (r = s, s = e);
                    } else
                      r = s, s = e;
                    if (s === e) {
                      if (s = r, i.substr(r, 4).toLowerCase() === yl ? (a = i.substr(r, 4), r += 4) : (a = e, u(Ff)), a !== e) {
                        for (o = [], t = f(); t !== e; )
                          o.push(t), t = f();
                        t = xe(), t !== e ? (w = s, s = Ch()) : (r = s, s = e);
                      } else
                        r = s, s = e;
                      if (s === e) {
                        if (s = r, i.substr(r, 3).toLowerCase() === Pl ? (a = i.substr(r, 3), r += 3) : (a = e, u(xf)), a !== e) {
                          for (o = [], t = f(); t !== e; )
                            o.push(t), t = f();
                          if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                            for (n = [], l = f(); l !== e; )
                              n.push(l), l = f();
                            if (l = C(), l !== e) {
                              for (h = [], c = f(); c !== e; )
                                h.push(c), c = f();
                              i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Eh(l)) : (r = s, s = e);
                            } else
                              r = s, s = e;
                          } else
                            r = s, s = e;
                        } else
                          r = s, s = e;
                        if (s === e) {
                          if (s = r, i.substr(r, 4).toLowerCase() === Tl ? (a = i.substr(r, 4), r += 4) : (a = e, u(Df)), a !== e) {
                            for (o = [], t = f(); t !== e; )
                              o.push(t), t = f();
                            if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                              for (n = [], l = f(); l !== e; )
                                n.push(l), l = f();
                              if (l = C(), l !== e) {
                                for (h = [], c = f(); c !== e; )
                                  h.push(c), c = f();
                                i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = yh(l)) : (r = s, s = e);
                              } else
                                r = s, s = e;
                            } else
                              r = s, s = e;
                          } else
                            r = s, s = e;
                          if (s === e) {
                            if (s = r, i.substr(r, 5).toLowerCase() === Ll ? (a = i.substr(r, 5), r += 5) : (a = e, u(Gf)), a !== e) {
                              for (o = [], t = f(); t !== e; )
                                o.push(t), t = f();
                              if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                for (n = [], l = f(); l !== e; )
                                  n.push(l), l = f();
                                if (l = C(), l !== e) {
                                  for (h = [], c = f(); c !== e; )
                                    h.push(c), c = f();
                                  i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Ph(l)) : (r = s, s = e);
                                } else
                                  r = s, s = e;
                              } else
                                r = s, s = e;
                            } else
                              r = s, s = e;
                            if (s === e) {
                              if (s = r, i.substr(r, 5).toLowerCase() === Rl ? (a = i.substr(r, 5), r += 5) : (a = e, u(Uf)), a !== e) {
                                for (o = [], t = f(); t !== e; )
                                  o.push(t), t = f();
                                if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                  for (n = [], l = f(); l !== e; )
                                    n.push(l), l = f();
                                  if (l = C(), l !== e) {
                                    for (h = [], c = f(); c !== e; )
                                      h.push(c), c = f();
                                    i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Th(l)) : (r = s, s = e);
                                  } else
                                    r = s, s = e;
                                } else
                                  r = s, s = e;
                              } else
                                r = s, s = e;
                              if (s === e) {
                                if (s = r, i.substr(r, 6).toLowerCase() === Il ? (a = i.substr(r, 6), r += 6) : (a = e, u(Hf)), a !== e) {
                                  for (o = [], t = f(); t !== e; )
                                    o.push(t), t = f();
                                  t = We(), t !== e ? (w = s, s = Lh(t)) : (r = s, s = e);
                                } else
                                  r = s, s = e;
                                if (s === e && (s = ig(), s === e)) {
                                  if (s = r, i.substr(r, 6).toLowerCase() === Ol ? (a = i.substr(r, 6), r += 6) : (a = e, u(Bf)), a !== e) {
                                    for (o = [], t = f(); t !== e; )
                                      o.push(t), t = f();
                                    if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                      for (n = [], l = f(); l !== e; )
                                        n.push(l), l = f();
                                      if (l = C(), l !== e) {
                                        for (h = [], c = f(); c !== e; )
                                          h.push(c), c = f();
                                        i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Rh(l)) : (r = s, s = e);
                                      } else
                                        r = s, s = e;
                                    } else
                                      r = s, s = e;
                                  } else
                                    r = s, s = e;
                                  if (s === e && (s = lg(), s === e)) {
                                    if (s = r, i.substr(r, 5).toLowerCase() === Nl ? (a = i.substr(r, 5), r += 5) : (a = e, u(kf)), a !== e) {
                                      for (o = [], t = f(); t !== e; )
                                        o.push(t), t = f();
                                      if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                        for (n = [], l = f(); l !== e; )
                                          n.push(l), l = f();
                                        if (l = C(), l !== e) {
                                          for (h = [], c = f(); c !== e; )
                                            h.push(c), c = f();
                                          i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Ih(l)) : (r = s, s = e);
                                        } else
                                          r = s, s = e;
                                      } else
                                        r = s, s = e;
                                    } else
                                      r = s, s = e;
                                    if (s === e) {
                                      if (s = r, i.substr(r, 5).toLowerCase() === Sl ? (a = i.substr(r, 5), r += 5) : (a = e, u(Mf)), a !== e) {
                                        for (o = [], t = f(); t !== e; )
                                          o.push(t), t = f();
                                        if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                          for (n = [], l = f(); l !== e; )
                                            n.push(l), l = f();
                                          if (l = C(), l !== e) {
                                            for (h = [], c = f(); c !== e; )
                                              h.push(c), c = f();
                                            i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Oh(l)) : (r = s, s = e);
                                          } else
                                            r = s, s = e;
                                        } else
                                          r = s, s = e;
                                      } else
                                        r = s, s = e;
                                      if (s === e) {
                                        if (s = r, i.substr(r, 14).toLowerCase() === Fl ? (a = i.substr(r, 14), r += 14) : (a = e, u(jf)), a !== e) {
                                          for (o = [], t = f(); t !== e; )
                                            o.push(t), t = f();
                                          if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                            for (n = [], l = f(); l !== e; )
                                              n.push(l), l = f();
                                            if (l = C(), l !== e) {
                                              for (h = [], c = f(); c !== e; )
                                                h.push(c), c = f();
                                              i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Nh(l)) : (r = s, s = e);
                                            } else
                                              r = s, s = e;
                                          } else
                                            r = s, s = e;
                                        } else
                                          r = s, s = e;
                                        if (s === e) {
                                          if (s = r, i.substr(r, 8).toLowerCase() === xl ? (a = i.substr(r, 8), r += 8) : (a = e, u(Xf)), a !== e) {
                                            for (o = [], t = f(); t !== e; )
                                              o.push(t), t = f();
                                            if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                              for (n = [], l = f(); l !== e; )
                                                n.push(l), l = f();
                                              if (l = C(), l !== e) {
                                                for (h = [], c = f(); c !== e; )
                                                  h.push(c), c = f();
                                                if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                  for (g = [], p = f(); p !== e; )
                                                    g.push(p), p = f();
                                                  if (p = C(), p !== e) {
                                                    for (_ = [], $ = f(); $ !== e; )
                                                      _.push($), $ = f();
                                                    i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = Sh(l, p)) : (r = s, s = e);
                                                  } else
                                                    r = s, s = e;
                                                } else
                                                  r = s, s = e;
                                              } else
                                                r = s, s = e;
                                            } else
                                              r = s, s = e;
                                          } else
                                            r = s, s = e;
                                          if (s === e) {
                                            if (s = r, i.substr(r, 9).toLowerCase() === Dl ? (a = i.substr(r, 9), r += 9) : (a = e, u(Vf)), a !== e) {
                                              for (o = [], t = f(); t !== e; )
                                                o.push(t), t = f();
                                              if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                for (n = [], l = f(); l !== e; )
                                                  n.push(l), l = f();
                                                if (l = C(), l !== e) {
                                                  for (h = [], c = f(); c !== e; )
                                                    h.push(c), c = f();
                                                  if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                    for (g = [], p = f(); p !== e; )
                                                      g.push(p), p = f();
                                                    if (p = C(), p !== e) {
                                                      for (_ = [], $ = f(); $ !== e; )
                                                        _.push($), $ = f();
                                                      i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = Fh(l, p)) : (r = s, s = e);
                                                    } else
                                                      r = s, s = e;
                                                  } else
                                                    r = s, s = e;
                                                } else
                                                  r = s, s = e;
                                              } else
                                                r = s, s = e;
                                            } else
                                              r = s, s = e;
                                            if (s === e) {
                                              if (s = r, i.substr(r, 9).toLowerCase() === Gl ? (a = i.substr(r, 9), r += 9) : (a = e, u(Wf)), a !== e) {
                                                for (o = [], t = f(); t !== e; )
                                                  o.push(t), t = f();
                                                if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                  for (n = [], l = f(); l !== e; )
                                                    n.push(l), l = f();
                                                  if (l = C(), l !== e) {
                                                    for (h = [], c = f(); c !== e; )
                                                      h.push(c), c = f();
                                                    if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                      for (g = [], p = f(); p !== e; )
                                                        g.push(p), p = f();
                                                      if (p = C(), p !== e) {
                                                        for (_ = [], $ = f(); $ !== e; )
                                                          _.push($), $ = f();
                                                        i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = xh(l, p)) : (r = s, s = e);
                                                      } else
                                                        r = s, s = e;
                                                    } else
                                                      r = s, s = e;
                                                  } else
                                                    r = s, s = e;
                                                } else
                                                  r = s, s = e;
                                              } else
                                                r = s, s = e;
                                              if (s === e) {
                                                if (s = r, i.substr(r, 7).toLowerCase() === Ul ? (a = i.substr(r, 7), r += 7) : (a = e, u(Yf)), a !== e) {
                                                  for (o = [], t = f(); t !== e; )
                                                    o.push(t), t = f();
                                                  if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                    for (n = [], l = f(); l !== e; )
                                                      n.push(l), l = f();
                                                    if (l = C(), l !== e) {
                                                      for (h = [], c = f(); c !== e; )
                                                        h.push(c), c = f();
                                                      if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                        for (g = [], p = f(); p !== e; )
                                                          g.push(p), p = f();
                                                        if (p = C(), p !== e) {
                                                          for (_ = [], $ = f(); $ !== e; )
                                                            _.push($), $ = f();
                                                          i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = Dh(l, p)) : (r = s, s = e);
                                                        } else
                                                          r = s, s = e;
                                                      } else
                                                        r = s, s = e;
                                                    } else
                                                      r = s, s = e;
                                                  } else
                                                    r = s, s = e;
                                                } else
                                                  r = s, s = e;
                                                if (s === e) {
                                                  if (s = r, i.substr(r, 8).toLowerCase() === Hl ? (a = i.substr(r, 8), r += 8) : (a = e, u(zf)), a !== e) {
                                                    for (o = [], t = f(); t !== e; )
                                                      o.push(t), t = f();
                                                    if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                      for (n = [], l = f(); l !== e; )
                                                        n.push(l), l = f();
                                                      if (l = C(), l !== e) {
                                                        for (h = [], c = f(); c !== e; )
                                                          h.push(c), c = f();
                                                        if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                          for (g = [], p = f(); p !== e; )
                                                            g.push(p), p = f();
                                                          if (p = C(), p !== e) {
                                                            for (_ = [], $ = f(); $ !== e; )
                                                              _.push($), $ = f();
                                                            i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = Gh(l, p)) : (r = s, s = e);
                                                          } else
                                                            r = s, s = e;
                                                        } else
                                                          r = s, s = e;
                                                      } else
                                                        r = s, s = e;
                                                    } else
                                                      r = s, s = e;
                                                  } else
                                                    r = s, s = e;
                                                  if (s === e) {
                                                    if (s = r, i.substr(r, 4).toLowerCase() === Bl ? (a = i.substr(r, 4), r += 4) : (a = e, u(Qf)), a !== e) {
                                                      for (o = [], t = f(); t !== e; )
                                                        o.push(t), t = f();
                                                      if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                        for (n = [], l = f(); l !== e; )
                                                          n.push(l), l = f();
                                                        if (l = C(), l !== e) {
                                                          for (h = [], c = f(); c !== e; )
                                                            h.push(c), c = f();
                                                          i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Uh(l)) : (r = s, s = e);
                                                        } else
                                                          r = s, s = e;
                                                      } else
                                                        r = s, s = e;
                                                    } else
                                                      r = s, s = e;
                                                    if (s === e) {
                                                      if (s = r, i.substr(r, 5).toLowerCase() === kl ? (a = i.substr(r, 5), r += 5) : (a = e, u(Zf)), a !== e) {
                                                        for (o = [], t = f(); t !== e; )
                                                          o.push(t), t = f();
                                                        if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                          for (n = [], l = f(); l !== e; )
                                                            n.push(l), l = f();
                                                          if (l = C(), l !== e) {
                                                            for (h = [], c = f(); c !== e; )
                                                              h.push(c), c = f();
                                                            i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Hh(l)) : (r = s, s = e);
                                                          } else
                                                            r = s, s = e;
                                                        } else
                                                          r = s, s = e;
                                                      } else
                                                        r = s, s = e;
                                                      if (s === e) {
                                                        if (s = r, i.substr(r, 3).toLowerCase() === Ml ? (a = i.substr(r, 3), r += 3) : (a = e, u(Kf)), a !== e) {
                                                          for (o = [], t = f(); t !== e; )
                                                            o.push(t), t = f();
                                                          if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                            for (n = [], l = f(); l !== e; )
                                                              n.push(l), l = f();
                                                            if (l = C(), l !== e) {
                                                              for (h = [], c = f(); c !== e; )
                                                                h.push(c), c = f();
                                                              i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Bh(l)) : (r = s, s = e);
                                                            } else
                                                              r = s, s = e;
                                                          } else
                                                            r = s, s = e;
                                                        } else
                                                          r = s, s = e;
                                                        if (s === e) {
                                                          if (s = r, i.substr(r, 5).toLowerCase() === jl ? (a = i.substr(r, 5), r += 5) : (a = e, u(Jf)), a !== e) {
                                                            for (o = [], t = f(); t !== e; )
                                                              o.push(t), t = f();
                                                            if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                              for (n = [], l = f(); l !== e; )
                                                                n.push(l), l = f();
                                                              if (l = C(), l !== e) {
                                                                for (h = [], c = f(); c !== e; )
                                                                  h.push(c), c = f();
                                                                i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = kh(l)) : (r = s, s = e);
                                                              } else
                                                                r = s, s = e;
                                                            } else
                                                              r = s, s = e;
                                                          } else
                                                            r = s, s = e;
                                                          if (s === e) {
                                                            if (s = r, i.substr(r, 7).toLowerCase() === Xl ? (a = i.substr(r, 7), r += 7) : (a = e, u(qf)), a !== e) {
                                                              for (o = [], t = f(); t !== e; )
                                                                o.push(t), t = f();
                                                              if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                for (n = [], l = f(); l !== e; )
                                                                  n.push(l), l = f();
                                                                if (l = C(), l !== e) {
                                                                  for (h = [], c = f(); c !== e; )
                                                                    h.push(c), c = f();
                                                                  i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Mh(l)) : (r = s, s = e);
                                                                } else
                                                                  r = s, s = e;
                                                              } else
                                                                r = s, s = e;
                                                            } else
                                                              r = s, s = e;
                                                            if (s === e) {
                                                              if (s = r, i.substr(r, 7).toLowerCase() === Vl ? (a = i.substr(r, 7), r += 7) : (a = e, u(eo)), a !== e) {
                                                                for (o = [], t = f(); t !== e; )
                                                                  o.push(t), t = f();
                                                                if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                  for (n = [], l = f(); l !== e; )
                                                                    n.push(l), l = f();
                                                                  if (l = C(), l !== e) {
                                                                    for (h = [], c = f(); c !== e; )
                                                                      h.push(c), c = f();
                                                                    i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = jh(l)) : (r = s, s = e);
                                                                  } else
                                                                    r = s, s = e;
                                                                } else
                                                                  r = s, s = e;
                                                              } else
                                                                r = s, s = e;
                                                              if (s === e) {
                                                                if (s = r, i.substr(r, 8).toLowerCase() === Wl ? (a = i.substr(r, 8), r += 8) : (a = e, u(so)), a !== e) {
                                                                  for (o = [], t = f(); t !== e; )
                                                                    o.push(t), t = f();
                                                                  if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                    for (n = [], l = f(); l !== e; )
                                                                      n.push(l), l = f();
                                                                    if (l = C(), l !== e) {
                                                                      for (h = [], c = f(); c !== e; )
                                                                        h.push(c), c = f();
                                                                      i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Xh(l)) : (r = s, s = e);
                                                                    } else
                                                                      r = s, s = e;
                                                                  } else
                                                                    r = s, s = e;
                                                                } else
                                                                  r = s, s = e;
                                                                if (s === e) {
                                                                  if (s = r, i.substr(r, 2).toLowerCase() === Yl ? (a = i.substr(r, 2), r += 2) : (a = e, u(ro)), a !== e) {
                                                                    for (o = [], t = f(); t !== e; )
                                                                      o.push(t), t = f();
                                                                    if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                      for (n = [], l = f(); l !== e; )
                                                                        n.push(l), l = f();
                                                                      if (l = C(), l !== e) {
                                                                        for (h = [], c = f(); c !== e; )
                                                                          h.push(c), c = f();
                                                                        i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Vh(l)) : (r = s, s = e);
                                                                      } else
                                                                        r = s, s = e;
                                                                    } else
                                                                      r = s, s = e;
                                                                  } else
                                                                    r = s, s = e;
                                                                  if (s === e) {
                                                                    if (s = r, i.substr(r, 3).toLowerCase() === zl ? (a = i.substr(r, 3), r += 3) : (a = e, u(to)), a !== e) {
                                                                      for (o = [], t = f(); t !== e; )
                                                                        o.push(t), t = f();
                                                                      t = xe(), t !== e ? (w = s, s = Wh()) : (r = s, s = e);
                                                                    } else
                                                                      r = s, s = e;
                                                                    if (s === e) {
                                                                      if (s = r, i.substr(r, 4).toLowerCase() === Ql ? (a = i.substr(r, 4), r += 4) : (a = e, u(io)), a !== e) {
                                                                        for (o = [], t = f(); t !== e; )
                                                                          o.push(t), t = f();
                                                                        t = xe(), t !== e ? (w = s, s = Yh()) : (r = s, s = e);
                                                                      } else
                                                                        r = s, s = e;
                                                                      if (s === e) {
                                                                        if (s = r, i.substr(r, 7).toLowerCase() === Zl ? (a = i.substr(r, 7), r += 7) : (a = e, u(lo)), a !== e) {
                                                                          for (o = [], t = f(); t !== e; )
                                                                            o.push(t), t = f();
                                                                          t = xe(), t !== e ? (w = s, s = zh()) : (r = s, s = e);
                                                                        } else
                                                                          r = s, s = e;
                                                                        if (s === e) {
                                                                          if (s = r, i.substr(r, 3).toLowerCase() === Kl ? (a = i.substr(r, 3), r += 3) : (a = e, u(ao)), a !== e) {
                                                                            for (o = [], t = f(); t !== e; )
                                                                              o.push(t), t = f();
                                                                            if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                              for (n = [], l = f(); l !== e; )
                                                                                n.push(l), l = f();
                                                                              if (l = C(), l !== e) {
                                                                                for (h = [], c = f(); c !== e; )
                                                                                  h.push(c), c = f();
                                                                                i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Qh(l)) : (r = s, s = e);
                                                                              } else
                                                                                r = s, s = e;
                                                                            } else
                                                                              r = s, s = e;
                                                                          } else
                                                                            r = s, s = e;
                                                                          if (s === e) {
                                                                            if (s = r, i.substr(r, 4).toLowerCase() === Jl ? (a = i.substr(r, 4), r += 4) : (a = e, u(fo)), a !== e) {
                                                                              for (o = [], t = f(); t !== e; )
                                                                                o.push(t), t = f();
                                                                              if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                                for (n = [], l = f(); l !== e; )
                                                                                  n.push(l), l = f();
                                                                                if (l = C(), l !== e) {
                                                                                  for (h = [], c = f(); c !== e; )
                                                                                    h.push(c), c = f();
                                                                                  i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Zh(l)) : (r = s, s = e);
                                                                                } else
                                                                                  r = s, s = e;
                                                                              } else
                                                                                r = s, s = e;
                                                                            } else
                                                                              r = s, s = e;
                                                                            if (s === e) {
                                                                              if (s = r, i.substr(r, 6).toLowerCase() === ql ? (a = i.substr(r, 6), r += 6) : (a = e, u(oo)), a !== e) {
                                                                                for (o = [], t = f(); t !== e; )
                                                                                  o.push(t), t = f();
                                                                                if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                                  for (n = [], l = f(); l !== e; )
                                                                                    n.push(l), l = f();
                                                                                  if (l = C(), l !== e) {
                                                                                    for (h = [], c = f(); c !== e; )
                                                                                      h.push(c), c = f();
                                                                                    i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Kh(l)) : (r = s, s = e);
                                                                                  } else
                                                                                    r = s, s = e;
                                                                                } else
                                                                                  r = s, s = e;
                                                                              } else
                                                                                r = s, s = e;
                                                                              if (s === e) {
                                                                                if (s = r, i.substr(r, 6).toLowerCase() === ea ? (a = i.substr(r, 6), r += 6) : (a = e, u(co)), a !== e) {
                                                                                  for (o = [], t = f(); t !== e; )
                                                                                    o.push(t), t = f();
                                                                                  if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                                    for (n = [], l = f(); l !== e; )
                                                                                      n.push(l), l = f();
                                                                                    if (l = C(), l !== e) {
                                                                                      for (h = [], c = f(); c !== e; )
                                                                                        h.push(c), c = f();
                                                                                      i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Jh(l)) : (r = s, s = e);
                                                                                    } else
                                                                                      r = s, s = e;
                                                                                  } else
                                                                                    r = s, s = e;
                                                                                } else
                                                                                  r = s, s = e;
                                                                                if (s === e) {
                                                                                  if (s = r, i.substr(r, 6).toLowerCase() === sa ? (a = i.substr(r, 6), r += 6) : (a = e, u(no)), a !== e) {
                                                                                    for (o = [], t = f(); t !== e; )
                                                                                      o.push(t), t = f();
                                                                                    if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                                      for (n = [], l = f(); l !== e; )
                                                                                        n.push(l), l = f();
                                                                                      if (l = C(), l !== e) {
                                                                                        for (h = [], c = f(); c !== e; )
                                                                                          h.push(c), c = f();
                                                                                        i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = qh(l)) : (r = s, s = e);
                                                                                      } else
                                                                                        r = s, s = e;
                                                                                    } else
                                                                                      r = s, s = e;
                                                                                  } else
                                                                                    r = s, s = e;
                                                                                  if (s === e) {
                                                                                    if (s = r, i.substr(r, 8).toLowerCase() === ra ? (a = i.substr(r, 8), r += 8) : (a = e, u(ho)), a !== e) {
                                                                                      for (o = [], t = f(); t !== e; )
                                                                                        o.push(t), t = f();
                                                                                      t = We(), t !== e ? (w = s, s = eu(t)) : (r = s, s = e);
                                                                                    } else
                                                                                      r = s, s = e;
                                                                                    if (s === e) {
                                                                                      if (s = r, i.substr(r, 2).toLowerCase() === ta ? (a = i.substr(r, 2), r += 2) : (a = e, u(uo)), a !== e) {
                                                                                        for (o = [], t = f(); t !== e; )
                                                                                          o.push(t), t = f();
                                                                                        if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                                          for (n = [], l = f(); l !== e; )
                                                                                            n.push(l), l = f();
                                                                                          if (l = C(), l !== e) {
                                                                                            for (h = [], c = f(); c !== e; )
                                                                                              h.push(c), c = f();
                                                                                            if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                                                              for (g = [], p = f(); p !== e; )
                                                                                                g.push(p), p = f();
                                                                                              if (p = C(), p !== e) {
                                                                                                for (_ = [], $ = f(); $ !== e; )
                                                                                                  _.push($), $ = f();
                                                                                                if (i.charCodeAt(r) === 44 ? ($ = U, r++) : ($ = e, u(H)), $ !== e) {
                                                                                                  for (v = [], T = f(); T !== e; )
                                                                                                    v.push(T), T = f();
                                                                                                  if (T = C(), T !== e) {
                                                                                                    for (I = [], x = f(); x !== e; )
                                                                                                      I.push(x), x = f();
                                                                                                    i.charCodeAt(r) === 41 ? (x = E, r++) : (x = e, u(P)), x !== e ? (w = s, s = su(l, p, T)) : (r = s, s = e);
                                                                                                  } else
                                                                                                    r = s, s = e;
                                                                                                } else
                                                                                                  r = s, s = e;
                                                                                              } else
                                                                                                r = s, s = e;
                                                                                            } else
                                                                                              r = s, s = e;
                                                                                          } else
                                                                                            r = s, s = e;
                                                                                        } else
                                                                                          r = s, s = e;
                                                                                      } else
                                                                                        r = s, s = e;
                                                                                      if (s === e) {
                                                                                        if (s = r, i.substr(r, 7).toLowerCase() === ia ? (a = i.substr(r, 7), r += 7) : (a = e, u(po)), a !== e) {
                                                                                          for (o = [], t = f(); t !== e; )
                                                                                            o.push(t), t = f();
                                                                                          if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                                            for (n = [], l = f(); l !== e; )
                                                                                              n.push(l), l = f();
                                                                                            if (l = C(), l !== e) {
                                                                                              for (h = [], c = f(); c !== e; )
                                                                                                h.push(c), c = f();
                                                                                              if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                                                                for (g = [], p = f(); p !== e; )
                                                                                                  g.push(p), p = f();
                                                                                                if (p = C(), p !== e) {
                                                                                                  for (_ = [], $ = f(); $ !== e; )
                                                                                                    _.push($), $ = f();
                                                                                                  i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = ru(l, p)) : (r = s, s = e);
                                                                                                } else
                                                                                                  r = s, s = e;
                                                                                              } else
                                                                                                r = s, s = e;
                                                                                            } else
                                                                                              r = s, s = e;
                                                                                          } else
                                                                                            r = s, s = e;
                                                                                        } else
                                                                                          r = s, s = e;
                                                                                        if (s === e) {
                                                                                          if (s = r, i.substr(r, 5).toLowerCase() === la ? (a = i.substr(r, 5), r += 5) : (a = e, u(go)), a !== e) {
                                                                                            for (o = [], t = f(); t !== e; )
                                                                                              o.push(t), t = f();
                                                                                            if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                                              for (n = [], l = f(); l !== e; )
                                                                                                n.push(l), l = f();
                                                                                              if (l = C(), l !== e) {
                                                                                                for (h = [], c = f(); c !== e; )
                                                                                                  h.push(c), c = f();
                                                                                                if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                                                                  for (g = [], p = f(); p !== e; )
                                                                                                    g.push(p), p = f();
                                                                                                  if (p = C(), p !== e) {
                                                                                                    for (_ = [], $ = f(); $ !== e; )
                                                                                                      _.push($), $ = f();
                                                                                                    i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = tu(l, p)) : (r = s, s = e);
                                                                                                  } else
                                                                                                    r = s, s = e;
                                                                                                } else
                                                                                                  r = s, s = e;
                                                                                              } else
                                                                                                r = s, s = e;
                                                                                            } else
                                                                                              r = s, s = e;
                                                                                          } else
                                                                                            r = s, s = e;
                                                                                          if (s === e) {
                                                                                            if (s = r, i.substr(r, 8).toLowerCase() === aa ? (a = i.substr(r, 8), r += 8) : (a = e, u(wo)), a !== e) {
                                                                                              for (o = [], t = f(); t !== e; )
                                                                                                o.push(t), t = f();
                                                                                              if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                                                for (n = [], l = f(); l !== e; )
                                                                                                  n.push(l), l = f();
                                                                                                if (l = C(), l !== e) {
                                                                                                  for (h = [], c = f(); c !== e; )
                                                                                                    h.push(c), c = f();
                                                                                                  if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                                                                    for (g = [], p = f(); p !== e; )
                                                                                                      g.push(p), p = f();
                                                                                                    if (p = C(), p !== e) {
                                                                                                      for (_ = [], $ = f(); $ !== e; )
                                                                                                        _.push($), $ = f();
                                                                                                      i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = iu(l, p)) : (r = s, s = e);
                                                                                                    } else
                                                                                                      r = s, s = e;
                                                                                                  } else
                                                                                                    r = s, s = e;
                                                                                                } else
                                                                                                  r = s, s = e;
                                                                                              } else
                                                                                                r = s, s = e;
                                                                                            } else
                                                                                              r = s, s = e;
                                                                                            if (s === e) {
                                                                                              if (s = r, i.substr(r, 5).toLowerCase() === fa ? (a = i.substr(r, 5), r += 5) : (a = e, u(_o)), a === e && (i.substr(r, 5).toLowerCase() === oa ? (a = i.substr(r, 5), r += 5) : (a = e, u($o))), a !== e) {
                                                                                                for (o = [], t = f(); t !== e; )
                                                                                                  o.push(t), t = f();
                                                                                                if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                                                  for (n = [], l = f(); l !== e; )
                                                                                                    n.push(l), l = f();
                                                                                                  if (l = C(), l !== e) {
                                                                                                    for (h = [], c = f(); c !== e; )
                                                                                                      h.push(c), c = f();
                                                                                                    i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = lu(l)) : (r = s, s = e);
                                                                                                  } else
                                                                                                    r = s, s = e;
                                                                                                } else
                                                                                                  r = s, s = e;
                                                                                              } else
                                                                                                r = s, s = e;
                                                                                              if (s === e) {
                                                                                                if (s = r, i.substr(r, 7).toLowerCase() === ca ? (a = i.substr(r, 7), r += 7) : (a = e, u(bo)), a !== e) {
                                                                                                  for (o = [], t = f(); t !== e; )
                                                                                                    o.push(t), t = f();
                                                                                                  if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                                                    for (n = [], l = f(); l !== e; )
                                                                                                      n.push(l), l = f();
                                                                                                    if (l = C(), l !== e) {
                                                                                                      for (h = [], c = f(); c !== e; )
                                                                                                        h.push(c), c = f();
                                                                                                      i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = au(l)) : (r = s, s = e);
                                                                                                    } else
                                                                                                      r = s, s = e;
                                                                                                  } else
                                                                                                    r = s, s = e;
                                                                                                } else
                                                                                                  r = s, s = e;
                                                                                                if (s === e) {
                                                                                                  if (s = r, i.substr(r, 9).toLowerCase() === na ? (a = i.substr(r, 9), r += 9) : (a = e, u(vo)), a !== e) {
                                                                                                    for (o = [], t = f(); t !== e; )
                                                                                                      o.push(t), t = f();
                                                                                                    if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                                                      for (n = [], l = f(); l !== e; )
                                                                                                        n.push(l), l = f();
                                                                                                      if (l = C(), l !== e) {
                                                                                                        for (h = [], c = f(); c !== e; )
                                                                                                          h.push(c), c = f();
                                                                                                        i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = fu(l)) : (r = s, s = e);
                                                                                                      } else
                                                                                                        r = s, s = e;
                                                                                                    } else
                                                                                                      r = s, s = e;
                                                                                                  } else
                                                                                                    r = s, s = e;
                                                                                                  if (s === e) {
                                                                                                    if (s = r, i.substr(r, 9).toLowerCase() === ha ? (a = i.substr(r, 9), r += 9) : (a = e, u(Ao)), a !== e) {
                                                                                                      for (o = [], t = f(); t !== e; )
                                                                                                        o.push(t), t = f();
                                                                                                      if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                                                                                                        for (n = [], l = f(); l !== e; )
                                                                                                          n.push(l), l = f();
                                                                                                        if (l = C(), l !== e) {
                                                                                                          for (h = [], c = f(); c !== e; )
                                                                                                            h.push(c), c = f();
                                                                                                          i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = ou(l)) : (r = s, s = e);
                                                                                                        } else
                                                                                                          r = s, s = e;
                                                                                                      } else
                                                                                                        r = s, s = e;
                                                                                                    } else
                                                                                                      r = s, s = e;
                                                                                                    s === e && (s = tg(), s === e && (s = ag(), s === e && (s = fg())));
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return s;
  }
  function tg() {
    var s, a, o, t, n, l, h, c, g, p, _, $, v, T, I;
    if (s = r, i.substr(r, 5).toLowerCase() === ua ? (a = i.substr(r, 5), r += 5) : (a = e, u(mo)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (l = C(), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
            for (g = [], p = f(); p !== e; )
              g.push(p), p = f();
            if (p = C(), p !== e) {
              for (_ = [], $ = f(); $ !== e; )
                _.push($), $ = f();
              if ($ = r, i.charCodeAt(r) === 44 ? (v = U, r++) : (v = e, u(H)), v !== e) {
                for (T = [], I = f(); I !== e; )
                  T.push(I), I = f();
                I = C(), I !== e ? (v = [v, T, I], $ = v) : (r = $, $ = e);
              } else
                r = $, $ = e;
              for ($ === e && ($ = null), v = [], T = f(); T !== e; )
                v.push(T), T = f();
              i.charCodeAt(r) === 41 ? (T = E, r++) : (T = e, u(P)), T !== e ? (w = s, s = cu(l, p, $)) : (r = s, s = e);
            } else
              r = s, s = e;
          } else
            r = s, s = e;
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function ig() {
    var s, a, o, t, n, l, h, c, g, p, _, $, v, T, I;
    if (s = r, i.substr(r, 6).toLowerCase() === pa ? (a = i.substr(r, 6), r += 6) : (a = e, u(Co)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (l = C(), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
            for (g = [], p = f(); p !== e; )
              g.push(p), p = f();
            if (p = C(), p !== e) {
              for (_ = [], $ = f(); $ !== e; )
                _.push($), $ = f();
              if ($ = r, i.charCodeAt(r) === 44 ? (v = U, r++) : (v = e, u(H)), v !== e) {
                for (T = [], I = f(); I !== e; )
                  T.push(I), I = f();
                I = C(), I !== e ? (v = [v, T, I], $ = v) : (r = $, $ = e);
              } else
                r = $, $ = e;
              for ($ === e && ($ = null), v = [], T = f(); T !== e; )
                v.push(T), T = f();
              i.charCodeAt(r) === 41 ? (T = E, r++) : (T = e, u(P)), T !== e ? (w = s, s = nu(l, p, $)) : (r = s, s = e);
            } else
              r = s, s = e;
          } else
            r = s, s = e;
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function lg() {
    var s, a, o, t, n, l, h, c, g, p, _, $, v, T, I, x, S, de, Me;
    if (s = r, i.substr(r, 7).toLowerCase() === ga ? (a = i.substr(r, 7), r += 7) : (a = e, u(Eo)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        if (l = C(), l !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
            for (g = [], p = f(); p !== e; )
              g.push(p), p = f();
            if (p = C(), p !== e) {
              for (_ = [], $ = f(); $ !== e; )
                _.push($), $ = f();
              if (i.charCodeAt(r) === 44 ? ($ = U, r++) : ($ = e, u(H)), $ !== e) {
                for (v = [], T = f(); T !== e; )
                  v.push(T), T = f();
                if (T = C(), T !== e) {
                  for (I = [], x = f(); x !== e; )
                    I.push(x), x = f();
                  if (x = r, i.charCodeAt(r) === 44 ? (S = U, r++) : (S = e, u(H)), S !== e) {
                    for (de = [], Me = f(); Me !== e; )
                      de.push(Me), Me = f();
                    Me = C(), Me !== e ? (S = [S, de, Me], x = S) : (r = x, x = e);
                  } else
                    r = x, x = e;
                  for (x === e && (x = null), S = [], de = f(); de !== e; )
                    S.push(de), de = f();
                  i.charCodeAt(r) === 41 ? (de = E, r++) : (de = e, u(P)), de !== e ? (w = s, s = hu(l, p, T, x)) : (r = s, s = e);
                } else
                  r = s, s = e;
              } else
                r = s, s = e;
            } else
              r = s, s = e;
          } else
            r = s, s = e;
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function ag() {
    var s, a, o, t;
    if (s = r, i.substr(r, 6).toLowerCase() === at ? (a = i.substr(r, 6), r += 6) : (a = e, u(St)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = fe(), t !== e ? (w = s, s = uu(t)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function fg() {
    var s, a, o, t, n, l;
    if (s = r, i.substr(r, 3).toLowerCase() === Js ? (a = i.substr(r, 3), r += 3) : (a = e, u(ur)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.substr(r, 6).toLowerCase() === at ? (t = i.substr(r, 6), r += 6) : (t = e, u(St)), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        l = fe(), l !== e ? (w = s, s = pu(l)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function og() {
    var s, a, o, t, n, l, h, c, g, p, _, $, v, T, I, x, S;
    if (s = r, i.substr(r, 5).toLowerCase() === da ? (a = i.substr(r, 5), r += 5) : (a = e, u(yo)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
        for (n = [], l = f(); l !== e; )
          n.push(l), l = f();
        for (i.substr(r, 8).toLowerCase() === O ? (l = i.substr(r, 8), r += 8) : (l = e, u(ve)), l === e && (l = null), h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (i.charCodeAt(r) === 42 ? (c = le, r++) : (c = e, u(ae)), c === e && (c = C()), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          if (i.charCodeAt(r) === 41 ? (p = E, r++) : (p = e, u(P)), p !== e) {
            for (_ = [], $ = f(); $ !== e; )
              _.push($), $ = f();
            w = s, s = gu(l, c);
          } else
            r = s, s = e;
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    if (s === e) {
      if (s = r, i.substr(r, 3).toLowerCase() === wa ? (a = i.substr(r, 3), r += 3) : (a = e, u(Po)), a !== e) {
        for (o = [], t = f(); t !== e; )
          o.push(t), t = f();
        if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
          for (n = [], l = f(); l !== e; )
            n.push(l), l = f();
          for (i.substr(r, 8).toLowerCase() === O ? (l = i.substr(r, 8), r += 8) : (l = e, u(ve)), l === e && (l = null), h = [], c = f(); c !== e; )
            h.push(c), c = f();
          if (c = C(), c !== e) {
            for (g = [], p = f(); p !== e; )
              g.push(p), p = f();
            if (i.charCodeAt(r) === 41 ? (p = E, r++) : (p = e, u(P)), p !== e) {
              for (_ = [], $ = f(); $ !== e; )
                _.push($), $ = f();
              w = s, s = du(l, c);
            } else
              r = s, s = e;
          } else
            r = s, s = e;
        } else
          r = s, s = e;
      } else
        r = s, s = e;
      if (s === e) {
        if (s = r, i.substr(r, 3).toLowerCase() === _a ? (a = i.substr(r, 3), r += 3) : (a = e, u(To)), a !== e) {
          for (o = [], t = f(); t !== e; )
            o.push(t), t = f();
          if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
            for (n = [], l = f(); l !== e; )
              n.push(l), l = f();
            for (i.substr(r, 8).toLowerCase() === O ? (l = i.substr(r, 8), r += 8) : (l = e, u(ve)), l === e && (l = null), h = [], c = f(); c !== e; )
              h.push(c), c = f();
            if (c = C(), c !== e) {
              for (g = [], p = f(); p !== e; )
                g.push(p), p = f();
              if (i.charCodeAt(r) === 41 ? (p = E, r++) : (p = e, u(P)), p !== e) {
                for (_ = [], $ = f(); $ !== e; )
                  _.push($), $ = f();
                w = s, s = wu(l, c);
              } else
                r = s, s = e;
            } else
              r = s, s = e;
          } else
            r = s, s = e;
        } else
          r = s, s = e;
        if (s === e) {
          if (s = r, i.substr(r, 3).toLowerCase() === $a ? (a = i.substr(r, 3), r += 3) : (a = e, u(Lo)), a !== e) {
            for (o = [], t = f(); t !== e; )
              o.push(t), t = f();
            if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
              for (n = [], l = f(); l !== e; )
                n.push(l), l = f();
              for (i.substr(r, 8).toLowerCase() === O ? (l = i.substr(r, 8), r += 8) : (l = e, u(ve)), l === e && (l = null), h = [], c = f(); c !== e; )
                h.push(c), c = f();
              if (c = C(), c !== e) {
                for (g = [], p = f(); p !== e; )
                  g.push(p), p = f();
                if (i.charCodeAt(r) === 41 ? (p = E, r++) : (p = e, u(P)), p !== e) {
                  for (_ = [], $ = f(); $ !== e; )
                    _.push($), $ = f();
                  w = s, s = _u(l, c);
                } else
                  r = s, s = e;
              } else
                r = s, s = e;
            } else
              r = s, s = e;
          } else
            r = s, s = e;
          if (s === e) {
            if (s = r, i.substr(r, 3).toLowerCase() === ba ? (a = i.substr(r, 3), r += 3) : (a = e, u(Ro)), a !== e) {
              for (o = [], t = f(); t !== e; )
                o.push(t), t = f();
              if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                for (n = [], l = f(); l !== e; )
                  n.push(l), l = f();
                for (i.substr(r, 8).toLowerCase() === O ? (l = i.substr(r, 8), r += 8) : (l = e, u(ve)), l === e && (l = null), h = [], c = f(); c !== e; )
                  h.push(c), c = f();
                if (c = C(), c !== e) {
                  for (g = [], p = f(); p !== e; )
                    g.push(p), p = f();
                  if (i.charCodeAt(r) === 41 ? (p = E, r++) : (p = e, u(P)), p !== e) {
                    for (_ = [], $ = f(); $ !== e; )
                      _.push($), $ = f();
                    w = s, s = $u(l, c);
                  } else
                    r = s, s = e;
                } else
                  r = s, s = e;
              } else
                r = s, s = e;
            } else
              r = s, s = e;
            if (s === e) {
              if (s = r, i.substr(r, 6).toLowerCase() === va ? (a = i.substr(r, 6), r += 6) : (a = e, u(Io)), a !== e) {
                for (o = [], t = f(); t !== e; )
                  o.push(t), t = f();
                if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                  for (n = [], l = f(); l !== e; )
                    n.push(l), l = f();
                  for (i.substr(r, 8).toLowerCase() === O ? (l = i.substr(r, 8), r += 8) : (l = e, u(ve)), l === e && (l = null), h = [], c = f(); c !== e; )
                    h.push(c), c = f();
                  if (c = C(), c !== e) {
                    for (g = [], p = f(); p !== e; )
                      g.push(p), p = f();
                    if (i.charCodeAt(r) === 41 ? (p = E, r++) : (p = e, u(P)), p !== e) {
                      for (_ = [], $ = f(); $ !== e; )
                        _.push($), $ = f();
                      w = s, s = bu(l, c);
                    } else
                      r = s, s = e;
                  } else
                    r = s, s = e;
                } else
                  r = s, s = e;
              } else
                r = s, s = e;
              if (s === e)
                if (s = r, i.substr(r, 12).toLowerCase() === Aa ? (a = i.substr(r, 12), r += 12) : (a = e, u(Oo)), a !== e) {
                  for (o = [], t = f(); t !== e; )
                    o.push(t), t = f();
                  if (i.charCodeAt(r) === 40 ? (t = A, r++) : (t = e, u(y)), t !== e) {
                    for (n = [], l = f(); l !== e; )
                      n.push(l), l = f();
                    for (i.substr(r, 8).toLowerCase() === O ? (l = i.substr(r, 8), r += 8) : (l = e, u(ve)), l === e && (l = null), h = [], c = f(); c !== e; )
                      h.push(c), c = f();
                    if (c = C(), c !== e) {
                      for (g = r, p = [], _ = f(); _ !== e; )
                        p.push(_), _ = f();
                      if (i.charCodeAt(r) === 59 ? (_ = Ue, r++) : (_ = e, u(Be)), _ !== e) {
                        for ($ = [], v = f(); v !== e; )
                          $.push(v), v = f();
                        if (i.substr(r, 9).toLowerCase() === ma ? (v = i.substr(r, 9), r += 9) : (v = e, u(No)), v !== e) {
                          for (T = [], I = f(); I !== e; )
                            T.push(I), I = f();
                          if (i.charCodeAt(r) === 61 ? (I = us, r++) : (I = e, u(Ls)), I !== e) {
                            for (x = [], S = f(); S !== e; )
                              x.push(S), S = f();
                            S = Ei(), S !== e ? (p = [p, _, $, v, T, I, x, S], g = p) : (r = g, g = e);
                          } else
                            r = g, g = e;
                        } else
                          r = g, g = e;
                      } else
                        r = g, g = e;
                      for (g === e && (g = null), p = [], _ = f(); _ !== e; )
                        p.push(_), _ = f();
                      if (i.charCodeAt(r) === 41 ? (_ = E, r++) : (_ = e, u(P)), _ !== e) {
                        for ($ = [], v = f(); v !== e; )
                          $.push(v), v = f();
                        w = s, s = vu(l, c, g);
                      } else
                        r = s, s = e;
                    } else
                      r = s, s = e;
                  } else
                    r = s, s = e;
                } else
                  r = s, s = e;
            }
          }
        }
      }
    }
    return s;
  }
  function cg() {
    var s, a, o, t;
    if (s = r, a = V(), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = $i(), t === e && (t = null), w = s, s = Au(a, t);
    } else
      r = s, s = e;
    return s;
  }
  function Or() {
    var s, a, o, t, n;
    return s = r, a = Ei(), a !== e ? (o = _g(), o === e && (o = r, i.substr(r, 2) === ft ? (t = ft, r += 2) : (t = e, u(So)), t !== e ? (n = V(), n !== e ? (t = [t, n], o = t) : (r = o, o = e)) : (r = o, o = e)), o === e && (o = null), w = s, s = mu(a, o)) : (r = s, s = e), s;
  }
  function Nr() {
    var s;
    return s = ng(), s === e && (s = Sr(), s === e && (s = Fr())), s;
  }
  function ng() {
    var s;
    return s = Hr(), s === e && (s = Ur(), s === e && (s = is())), s;
  }
  function Sr() {
    var s;
    return s = vg(), s === e && (s = bg(), s === e && (s = $g())), s;
  }
  function Fr() {
    var s;
    return s = Cg(), s === e && (s = mg(), s === e && (s = Ag())), s;
  }
  function xr() {
    var s, a;
    return s = r, i.substr(r, 4).toLowerCase() === Ca ? (a = i.substr(r, 4), r += 4) : (a = e, u(Fo)), a !== e && (w = s, a = Cu()), s = a, s === e && (s = r, i.substr(r, 5).toLowerCase() === Ea ? (a = i.substr(r, 5), r += 5) : (a = e, u(xo)), a !== e && (w = s, a = Eu()), s = a), s;
  }
  function Ei() {
    var s;
    return s = Pg(), s === e && (s = Tg(), s === e && (s = Eg(), s === e && (s = yg()))), s;
  }
  function V() {
    var s, a;
    return s = r, a = Dr(), a !== e && (w = s, a = yu(a)), s = a, s === e && (s = r, a = hg(), a !== e && (w = s, a = Pu(a)), s = a), s;
  }
  function hg() {
    var s, a;
    return s = r, a = pg(), a !== e && (w = s, a = Tu(a)), s = a, s === e && (s = r, a = Gr(), a !== e && (w = s, a = Lu(a)), s = a), s;
  }
  function ug() {
    var s, a;
    return s = r, a = gg(), a !== e && (w = s, a = Ru(a)), s = a, s === e && (s = r, a = Rg(), a !== e && (w = s, a = Iu()), s = a), s;
  }
  function Dr() {
    var s, a, o, t;
    if (s = r, i.charCodeAt(r) === 60 ? (a = Zs, r++) : (a = e, u(nr)), a !== e) {
      for (o = [], gt.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(Ft)); t !== e; )
        o.push(t), gt.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(Ft));
      i.charCodeAt(r) === 62 ? (t = Ks, r++) : (t = e, u(hr)), t !== e ? (w = s, s = Ou(o)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Gr() {
    var s, a, o;
    return s = r, a = Ig(), a === e && (a = null), i.charCodeAt(r) === 58 ? (o = He, r++) : (o = e, u(ke)), o !== e ? (w = s, s = Nu(a)) : (r = s, s = e), s;
  }
  function pg() {
    var s, a, o;
    return s = r, a = Gr(), a !== e ? (o = Og(), o !== e ? (w = s, s = Su(a, o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function gg() {
    var s, a, o, t, n, l, h;
    if (s = r, i.substr(r, 2) === ot ? (a = ot, r += 2) : (a = e, u(Do)), a !== e)
      if (o = ze(), o === e && (M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j))), o !== e) {
        for (t = [], n = ie(), n === e && (n = r, i.charCodeAt(r) === 46 ? (l = Q, r++) : (l = e, u(Z)), l !== e ? (h = ie(), h !== e ? (l = [l, h], n = l) : (r = n, n = e)) : (r = n, n = e)); n !== e; )
          t.push(n), n = ie(), n === e && (n = r, i.charCodeAt(r) === 46 ? (l = Q, r++) : (l = e, u(Z)), l !== e ? (h = ie(), h !== e ? (l = [l, h], n = l) : (r = n, n = e)) : (r = n, n = e));
        w = s, s = Fu();
      } else
        r = s, s = e;
    else
      r = s, s = e;
    return s;
  }
  function dg() {
    var s, a, o;
    return s = r, i.charCodeAt(r) === 63 ? (a = Ws, r++) : (a = e, u(ar)), a !== e ? (o = Ti(), o !== e ? (w = s, s = xu(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function wg() {
    var s, a, o;
    return s = r, i.charCodeAt(r) === 36 ? (a = ct, r++) : (a = e, u(xt)), a !== e ? (o = Ti(), o !== e ? (w = s, s = Du(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function _g() {
    var s, a, o, t, n, l, h, c;
    if (s = r, i.charCodeAt(r) === 64 ? (a = nt, r++) : (a = e, u(Dt)), a !== e) {
      if (o = [], dt.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(Gt)), t !== e)
        for (; t !== e; )
          o.push(t), dt.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(Gt));
      else
        o = e;
      if (o !== e) {
        if (t = [], n = r, i.charCodeAt(r) === 45 ? (l = he, r++) : (l = e, u(ue)), l !== e) {
          if (h = [], ms.test(i.charAt(r)) ? (c = i.charAt(r), r++) : (c = e, u(Is)), c !== e)
            for (; c !== e; )
              h.push(c), ms.test(i.charAt(r)) ? (c = i.charAt(r), r++) : (c = e, u(Is));
          else
            h = e;
          h !== e ? (l = [l, h], n = l) : (r = n, n = e);
        } else
          r = n, n = e;
        for (; n !== e; )
          if (t.push(n), n = r, i.charCodeAt(r) === 45 ? (l = he, r++) : (l = e, u(ue)), l !== e) {
            if (h = [], ms.test(i.charAt(r)) ? (c = i.charAt(r), r++) : (c = e, u(Is)), c !== e)
              for (; c !== e; )
                h.push(c), ms.test(i.charAt(r)) ? (c = i.charAt(r), r++) : (c = e, u(Is));
            else
              h = e;
            h !== e ? (l = [l, h], n = l) : (r = n, n = e);
          } else
            r = n, n = e;
        w = s, s = Gu(o, t);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function is() {
    var s, a, o;
    if (s = r, a = [], M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j)), o !== e)
      for (; o !== e; )
        a.push(o), M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j));
    else
      a = e;
    return a !== e && (w = s, a = Uu()), s = a, s;
  }
  function Ur() {
    var s, a, o, t, n;
    for (s = r, a = [], M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j)); o !== e; )
      a.push(o), M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j));
    if (i.charCodeAt(r) === 46 ? (o = Q, r++) : (o = e, u(Z)), o !== e) {
      if (t = [], M.test(i.charAt(r)) ? (n = i.charAt(r), r++) : (n = e, u(j)), n !== e)
        for (; n !== e; )
          t.push(n), M.test(i.charAt(r)) ? (n = i.charAt(r), r++) : (n = e, u(j));
      else
        t = e;
      t !== e ? (w = s, s = Hu()) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Hr() {
    var s, a, o, t, n;
    if (s = r, a = [], M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j)), o !== e)
      for (; o !== e; )
        a.push(o), M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j));
    else
      a = e;
    if (a !== e)
      if (i.charCodeAt(r) === 46 ? (o = Q, r++) : (o = e, u(Z)), o !== e) {
        for (t = [], M.test(i.charAt(r)) ? (n = i.charAt(r), r++) : (n = e, u(j)); n !== e; )
          t.push(n), M.test(i.charAt(r)) ? (n = i.charAt(r), r++) : (n = e, u(j));
        n = Br(), n !== e ? (w = s, s = Bu()) : (r = s, s = e);
      } else
        r = s, s = e;
    else
      r = s, s = e;
    if (s === e) {
      if (s = r, i.charCodeAt(r) === 46 ? (a = Q, r++) : (a = e, u(Z)), a !== e) {
        if (o = [], M.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(j)), t !== e)
          for (; t !== e; )
            o.push(t), M.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(j));
        else
          o = e;
        o !== e ? (t = Br(), t !== e ? (w = s, s = ku()) : (r = s, s = e)) : (r = s, s = e);
      } else
        r = s, s = e;
      if (s === e) {
        if (s = r, a = [], M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j)), o !== e)
          for (; o !== e; )
            a.push(o), M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j));
        else
          a = e;
        a !== e ? (o = Br(), o !== e ? (w = s, s = Mu()) : (r = s, s = e)) : (r = s, s = e);
      }
    }
    return s;
  }
  function $g() {
    var s, a, o;
    return s = r, i.charCodeAt(r) === 43 ? (a = Re, r++) : (a = e, u(Se)), a !== e ? (o = is(), o !== e ? (w = s, s = ju(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function bg() {
    var s, a, o;
    return s = r, i.charCodeAt(r) === 43 ? (a = Re, r++) : (a = e, u(Se)), a !== e ? (o = Ur(), o !== e ? (w = s, s = Xu(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function vg() {
    var s, a, o;
    return s = r, i.charCodeAt(r) === 43 ? (a = Re, r++) : (a = e, u(Se)), a !== e ? (o = Hr(), o !== e ? (w = s, s = Vu(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function Ag() {
    var s, a, o;
    return s = r, i.charCodeAt(r) === 45 ? (a = he, r++) : (a = e, u(ue)), a !== e ? (o = is(), o !== e ? (w = s, s = Wu(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function mg() {
    var s, a, o;
    return s = r, i.charCodeAt(r) === 45 ? (a = he, r++) : (a = e, u(ue)), a !== e ? (o = Ur(), o !== e ? (w = s, s = Yu(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function Cg() {
    var s, a, o;
    return s = r, i.charCodeAt(r) === 45 ? (a = he, r++) : (a = e, u(ue)), a !== e ? (o = Hr(), o !== e ? (w = s, s = zu(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function Br() {
    var s, a, o, t, n;
    if (s = r, Ta.test(i.charAt(r)) ? (a = i.charAt(r), r++) : (a = e, u(Go)), a !== e) {
      if (La.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(Uo)), o === e && (o = null), t = [], M.test(i.charAt(r)) ? (n = i.charAt(r), r++) : (n = e, u(j)), n !== e)
        for (; n !== e; )
          t.push(n), M.test(i.charAt(r)) ? (n = i.charAt(r), r++) : (n = e, u(j));
      else
        t = e;
      t !== e ? (a = [a, o, t], s = a) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Eg() {
    var s, a, o, t;
    if (s = r, i.charCodeAt(r) === 39 ? (a = Ke, r++) : (a = e, u(Je)), a !== e) {
      for (o = [], wt.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(Ut)), t === e && (t = Fe()); t !== e; )
        o.push(t), wt.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(Ut)), t === e && (t = Fe());
      i.charCodeAt(r) === 39 ? (t = Ke, r++) : (t = e, u(Je)), t !== e ? (w = s, s = Qu(o)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function yg() {
    var s, a, o, t;
    if (s = r, i.charCodeAt(r) === 34 ? (a = _s, r++) : (a = e, u(Os)), a !== e) {
      for (o = [], _t.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(Ht)), t === e && (t = Fe()); t !== e; )
        o.push(t), _t.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(Ht)), t === e && (t = Fe());
      i.charCodeAt(r) === 34 ? (t = _s, r++) : (t = e, u(Os)), t !== e ? (w = s, s = Zu(o)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Pg() {
    var s, a, o, t, n, l;
    if (s = r, i.substr(r, 3) === $s ? (a = $s, r += 3) : (a = e, u(Bt)), a !== e) {
      for (o = [], t = r, i.substr(r, 2) === bs ? (n = bs, r += 2) : (n = e, u(kt)), n === e && (i.charCodeAt(r) === 39 ? (n = Ke, r++) : (n = e, u(Je))), n === e && (n = null), $t.test(i.charAt(r)) ? (l = i.charAt(r), r++) : (l = e, u(Mt)), l === e && (l = Fe()), l !== e ? (n = [n, l], t = n) : (r = t, t = e); t !== e; )
        o.push(t), t = r, i.substr(r, 2) === bs ? (n = bs, r += 2) : (n = e, u(kt)), n === e && (i.charCodeAt(r) === 39 ? (n = Ke, r++) : (n = e, u(Je))), n === e && (n = null), $t.test(i.charAt(r)) ? (l = i.charAt(r), r++) : (l = e, u(Mt)), l === e && (l = Fe()), l !== e ? (n = [n, l], t = n) : (r = t, t = e);
      i.substr(r, 3) === $s ? (t = $s, r += 3) : (t = e, u(Bt)), t !== e ? (w = s, s = Ku(o)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Tg() {
    var s, a, o, t, n, l;
    if (s = r, i.substr(r, 3) === vs ? (a = vs, r += 3) : (a = e, u(jt)), a !== e) {
      for (o = [], t = r, i.substr(r, 2) === As ? (n = As, r += 2) : (n = e, u(Xt)), n === e && (i.charCodeAt(r) === 34 ? (n = _s, r++) : (n = e, u(Os))), n === e && (n = null), bt.test(i.charAt(r)) ? (l = i.charAt(r), r++) : (l = e, u(Vt)), l === e && (l = Fe()), l !== e ? (n = [n, l], t = n) : (r = t, t = e); t !== e; )
        o.push(t), t = r, i.substr(r, 2) === As ? (n = As, r += 2) : (n = e, u(Xt)), n === e && (i.charCodeAt(r) === 34 ? (n = _s, r++) : (n = e, u(Os))), n === e && (n = null), bt.test(i.charAt(r)) ? (l = i.charAt(r), r++) : (l = e, u(Vt)), l === e && (l = Fe()), l !== e ? (n = [n, l], t = n) : (r = t, t = e);
      i.substr(r, 3) === vs ? (t = vs, r += 3) : (t = e, u(jt)), t !== e ? (w = s, s = Ju(o)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Fe() {
    var s, a, o;
    return s = r, i.charCodeAt(r) === 92 ? (a = ht, r++) : (a = e, u(Wt)), a !== e ? (Ra.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(Ho)), o !== e ? (w = s, s = qu()) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function xe() {
    var s, a, o, t;
    if (s = r, i.charCodeAt(r) === 40 ? (a = A, r++) : (a = e, u(y)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      i.charCodeAt(r) === 41 ? (t = E, r++) : (t = e, u(P)), t !== e ? (a = [a, o, t], s = a) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function f() {
    var s;
    return s = Lg(), s === e && (s = kr(), s === e && (s = Mr())), s;
  }
  function kr() {
    var s;
    return Ia.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Bo)), s;
  }
  function Mr() {
    var s;
    return Oa.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(ko)), s;
  }
  function Bs() {
    var s;
    return Na.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Mo)), s;
  }
  function yi() {
    var s, a, o, t;
    if (s = r, i.charCodeAt(r) === 35 ? (a = qs, r++) : (a = e, u(pr)), a !== e) {
      for (o = [], t = Bs(); t !== e; )
        o.push(t), t = Bs();
      t = Mr(), t !== e ? (w = s, s = ep()) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Lg() {
    var s, a, o, t, n;
    for (s = r, Mr(), a = [], o = kr(); o !== e; )
      a.push(o), o = kr();
    if (i.charCodeAt(r) === 35 ? (o = qs, r++) : (o = e, u(pr)), o !== e) {
      for (t = [], n = Bs(); n !== e; )
        t.push(n), n = Bs();
      w = s, s = sp();
    } else
      r = s, s = e;
    return s;
  }
  function Rg() {
    var s, a, o, t;
    if (s = r, i.charCodeAt(r) === 91 ? (a = zs, r++) : (a = e, u(or)), a !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      i.charCodeAt(r) === 93 ? (t = Qs, r++) : (t = e, u(cr)), t !== e ? (a = [a, o, t], s = a) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Pi() {
    var s;
    return Sa.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(jo)), s === e && (Fa.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Xo)), s === e && (xa.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Vo)), s === e && (Da.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Wo)), s === e && (Ga.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Yo)), s === e && (Ua.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(zo)), s === e && (Ha.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Qo)), s === e && (Ba.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Zo)), s === e && (ka.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Ko)), s === e && (Ma.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Jo)), s === e && (ja.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(qo)), s === e && (Xa.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(ec)), s === e && (Va.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(sc)))))))))))))), s;
  }
  function ze() {
    var s;
    return s = Pi(), s === e && (i.charCodeAt(r) === 95 ? (s = ut, r++) : (s = e, u(Yt))), s;
  }
  function Ti() {
    var s, a, o, t;
    if (s = r, a = ze(), a === e && (M.test(i.charAt(r)) ? (a = i.charAt(r), r++) : (a = e, u(j))), a !== e) {
      for (o = [], t = ze(), t === e && (M.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(j)), t === e && (er.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(gr)), t === e && (sr.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(dr)), t === e && (rr.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(wr)))))); t !== e; )
        o.push(t), t = ze(), t === e && (M.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(j)), t === e && (er.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(gr)), t === e && (sr.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(dr)), t === e && (rr.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(wr))))));
      w = s, s = rp();
    } else
      r = s, s = e;
    return s;
  }
  function ie() {
    var s;
    return s = ze(), s === e && (i.charCodeAt(r) === 45 ? (s = he, r++) : (s = e, u(ue)), s === e && (M.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(j)), s === e && (er.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(gr)), s === e && (sr.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(dr)), s === e && (rr.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(wr))))))), s;
  }
  function Ig() {
    var s, a, o, t, n, l;
    if (s = r, a = Pi(), a !== e) {
      for (o = [], t = ie(), t === e && (t = r, i.charCodeAt(r) === 46 ? (n = Q, r++) : (n = e, u(Z)), n !== e ? (l = ie(), l !== e ? (n = [n, l], t = n) : (r = t, t = e)) : (r = t, t = e)); t !== e; )
        o.push(t), t = ie(), t === e && (t = r, i.charCodeAt(r) === 46 ? (n = Q, r++) : (n = e, u(Z)), n !== e ? (l = ie(), l !== e ? (n = [n, l], t = n) : (r = t, t = e)) : (r = t, t = e));
      w = s, s = tp();
    } else
      r = s, s = e;
    return s;
  }
  function Og() {
    var s, a, o, t, n, l;
    if (s = r, a = ze(), a === e && (i.charCodeAt(r) === 58 ? (a = He, r++) : (a = e, u(ke)), a === e && (M.test(i.charAt(r)) ? (a = i.charAt(r), r++) : (a = e, u(j)), a === e && (a = ls()))), a !== e) {
      for (o = [], t = ie(), t === e && (i.charCodeAt(r) === 58 ? (t = He, r++) : (t = e, u(ke)), t === e && (t = ls())), t === e && (t = r, i.charCodeAt(r) === 46 ? (n = Q, r++) : (n = e, u(Z)), n !== e ? (l = ie(), l === e && (i.charCodeAt(r) === 58 ? (l = He, r++) : (l = e, u(ke)), l === e && (l = ls())), l !== e ? (n = [n, l], t = n) : (r = t, t = e)) : (r = t, t = e)); t !== e; )
        o.push(t), t = ie(), t === e && (i.charCodeAt(r) === 58 ? (t = He, r++) : (t = e, u(ke)), t === e && (t = ls())), t === e && (t = r, i.charCodeAt(r) === 46 ? (n = Q, r++) : (n = e, u(Z)), n !== e ? (l = ie(), l === e && (i.charCodeAt(r) === 58 ? (l = He, r++) : (l = e, u(ke)), l === e && (l = ls())), l !== e ? (n = [n, l], t = n) : (r = t, t = e)) : (r = t, t = e));
      w = s, s = ip();
    } else
      r = s, s = e;
    return s;
  }
  function ls() {
    var s;
    return s = Ng(), s === e && (s = Sg()), s;
  }
  function Ng() {
    var s, a, o, t;
    return s = r, i.charCodeAt(r) === 37 ? (a = pt, r++) : (a = e, u(zt)), a !== e ? (o = Li(), o !== e ? (t = Li(), t !== e ? (a = [a, o, t], s = a) : (r = s, s = e)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function Li() {
    var s;
    return M.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(j)), s === e && (Wa.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(rc)), s === e && (Ya.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(tc)))), s;
  }
  function Sg() {
    var s, a, o;
    return s = r, i.charCodeAt(r) === 92 ? (a = ht, r++) : (a = e, u(Wt)), a !== e ? (i.charCodeAt(r) === 95 ? (o = ut, r++) : (o = e, u(Yt)), o === e && (i.charCodeAt(r) === 126 ? (o = ya, r++) : (o = e, u(ic)), o === e && (i.charCodeAt(r) === 46 ? (o = Q, r++) : (o = e, u(Z)), o === e && (i.charCodeAt(r) === 45 ? (o = he, r++) : (o = e, u(ue)), o === e && (i.charCodeAt(r) === 33 ? (o = Ys, r++) : (o = e, u(fr)), o === e && (i.charCodeAt(r) === 36 ? (o = ct, r++) : (o = e, u(xt)), o === e && (i.charCodeAt(r) === 38 ? (o = Pa, r++) : (o = e, u(lc)), o === e && (i.charCodeAt(r) === 39 ? (o = Ke, r++) : (o = e, u(Je)), o === e && (i.charCodeAt(r) === 40 ? (o = A, r++) : (o = e, u(y)), o === e && (i.charCodeAt(r) === 41 ? (o = E, r++) : (o = e, u(P)), o === e && (i.charCodeAt(r) === 42 ? (o = le, r++) : (o = e, u(ae)), o === e && (i.charCodeAt(r) === 43 ? (o = Re, r++) : (o = e, u(Se)), o === e && (i.charCodeAt(r) === 44 ? (o = U, r++) : (o = e, u(H)), o === e && (i.charCodeAt(r) === 59 ? (o = Ue, r++) : (o = e, u(Be)), o === e && (i.charCodeAt(r) === 58 ? (o = He, r++) : (o = e, u(ke)), o === e && (i.charCodeAt(r) === 61 ? (o = us, r++) : (o = e, u(Ls)), o === e && (i.charCodeAt(r) === 47 ? (o = be, r++) : (o = e, u(Ae)), o === e && (i.charCodeAt(r) === 63 ? (o = Ws, r++) : (o = e, u(ar)), o === e && (i.charCodeAt(r) === 35 ? (o = qs, r++) : (o = e, u(pr)), o === e && (i.charCodeAt(r) === 64 ? (o = nt, r++) : (o = e, u(Dt)), o === e && (i.charCodeAt(r) === 37 ? (o = pt, r++) : (o = e, u(zt)))))))))))))))))))))), o !== e ? (a = [a, o], s = a) : (r = s, s = e)) : (r = s, s = e), s;
  }
  let Ri = {};
  if (Ss = z(), Ss !== e && r === i.length)
    return Ss;
  throw Ss !== e && r < i.length && u(lp()), ap(
    _r,
    pe < i.length ? i.charAt(pe) : null,
    pe < i.length ? $r(pe, pe + 1) : $r(pe, pe)
  );
}
let Ee, De, Ge, zr = "  ", ks = 0;
function od(i, d = 2) {
  var e, m, R, z, J;
  if (zr = " ".repeat(d), Ee = [], De = i.comments, Ge = "", i.headers && L(i.headers.join("")), (e = i.prologue) != null && e.length && (i.prologue.forEach((W) => {
    W.base ? L(`BASE <${W.base}>`) : L(`PREFIX ${W.prefix || ""}: <${W.iri}>`);
  }), L("")), (m = i.queryBody) != null && m.select)
    Di(i.queryBody);
  else if (((R = i.queryBody) == null ? void 0 : R.type) === "construct")
    pd(i.queryBody);
  else if (((z = i.queryBody) == null ? void 0 : z.type) === "ask")
    cd(i.queryBody);
  else if (((J = i.queryBody) == null ? void 0 : J.type) === "describe")
    nd(i.queryBody);
  else if (i.update)
    for (let W = 0; W < i.update.length; W++)
      W > 0 && (Ee[Ee.length - 1] += ` ;
`), hd(i.update[W]);
  for (i.values && Zr(i.values); De && De.length; )
    Ee[Ee.length - 1] += De.shift().text;
  return Ee.join(`
`);
}
const we = (i = 1) => {
  Ge += zr.repeat(i);
}, _e = (i = 1) => {
  Ge = Ge.substr(0, Ge.length - zr.length * i);
}, L = (i) => {
  Ee.push(Ge + i);
}, k = (i, d) => {
  for (; De && De.length && De[0].pos < d; )
    Ee[Ee.length - 1] += De.shift().text;
  L(i);
}, cd = (i) => {
  L("ASK {");
  const d = se(i.where);
  k("}", d + 1), Ms(i);
}, nd = (i) => {
  const d = i.describe.map(G).join(" ");
  if (L(`DESCRIBE ${d}`), Qr(i.from), i.where) {
    L("WHERE {");
    const e = se(i.where);
    k("}", e + 1);
  }
  Ms(i);
}, hd = (i) => {
  if (i.type === "insertdata")
    L("INSERT DATA {"), we(), ye(i.insert), _e(), L("}");
  else if (i.type === "deletedata")
    L("DELETE DATA {"), we(), ye(i.delete), _e(), L("}");
  else if (i.type === "deletewhere")
    L("DELETE WHERE {"), we(), ye(i.delete), _e(), L("}");
  else if (i.type === "modify") {
    i.with && L(`WITH ${G(i.with)}`), i.delete && (L("DELETE {"), we(), ye(i.delete), _e(), L("}")), i.insert && (L("INSERT {"), we(), ye(i.insert), _e(), L("}")), i.using && i.using.forEach((e) => {
      L(`USING ${ud(e)}`);
    }), L("WHERE {");
    const d = se(i.where);
    k("}", d + 1);
  } else if (i.type === "add") {
    const d = Qe(i.graphs[0]), e = Qe(i.graphs[1]);
    let m = " ";
    i.silent && (m = " SILENT "), L(`ADD${m}${d} TO ${e}`);
  } else if (i.type === "move") {
    const d = Qe(i.graphs[0]), e = Qe(i.graphs[1]);
    let m = " ";
    i.silent && (m = " SILENT "), L(`MOVE${m}${d} TO ${e}`);
  } else if (i.type === "copy") {
    const d = Qe(i.graphs[0]), e = Qe(i.graphs[1]);
    let m = " ";
    i.silent && (m = " SILENT "), L(`COPY${m}${d} TO ${e}`);
  } else if (i.type === "load") {
    let d = " ";
    i.silent && (d = " SILENT "), L(`LOAD${d}${re(i.sourceGraph)}`);
  } else if (i.type === "clear") {
    let d = " ";
    i.silent && (d = " SILENT "), L(`CLEAR${d}${Ni(i.destinyGraph)}`);
  } else if (i.type === "drop") {
    let d = " ";
    i.silent && (d = " SILENT "), L(`DROP${d}${Ni(i.destinyGraph)}`);
  } else if (i.type === "create") {
    let d = " ";
    i.silent && (d = " SILENT "), L(`CREATE${d}GRAPH ${re(i.destinyGraph)}`);
  }
}, ud = (i) => i.named ? `NAMED ${re(i.iri)}` : re(i.iri), Qe = (i) => i === "default" ? "DEFAULT" : re(i), Ni = (i) => i === "default" ? "DEFAULT" : i === "named" ? "NAMED" : i === "all" ? "ALL" : `GRAPH ${re(i)}`, se = (i, d = 0) => (we(), i.select ? (Di(i), i.values && (Zr(i.values), d = i.location.end.offset)) : i.graphPattern ? i.graphPattern.forEach((e) => {
  Si(e), d = e.location.end.offset;
}) : i.forEach((e) => {
  Si(e), d = e.location.end.offset;
}), _e(), d), Di = (i) => {
  i.select;
  const d = i.location.start.offset;
  let e = i.location.end.offset;
  k($d(i), d);
  const m = Qr(i.from);
  m > e && (e = m), k("WHERE {", e + 1), e = se(i.where, e), k("}", e + 1), Ms(i);
}, Qr = (i) => {
  if (i) {
    let d;
    return i.forEach((e) => {
      e.graph ? d = gd(e.graph) : e.namedGraph && (d = dd(e.namedGraph));
    }), d;
  }
}, Ms = (i) => {
  var d;
  i.group && L(wd(i.group)), i.having && L(`HAVING ${B(i.having[0])}`), i.orderBy && L("ORDER BY " + _d(i.orderBy)), (d = i.limitOffset) == null || d.forEach((e) => {
    e.limit ? L(`LIMIT ${e.limit}`) : e.offset && L(`OFFSET ${e.offset}`);
  });
}, pd = (i) => {
  i.template ? (k("CONSTRUCT {", i.location.start.offset), we(), ye(i.template.triplePattern), _e(), L("}")) : L("CONSTRUCT"), Qr(i.from), L("WHERE {");
  const d = se(i.where);
  k("}", d + 1), Ms(i);
}, gd = (i) => {
  const d = re(i);
  if (d != null) {
    const e = i.location.start.offset, m = i.location.end.offset;
    return k("FROM " + d, e), m;
  }
}, dd = (i) => {
  const d = re(i);
  if (d != null) {
    const e = i.location.start.offset, m = i.location.end.offset;
    return k("FROM NAMED " + d, e), m;
  }
}, Si = (i) => {
  if (ks = i.location.start.offset, i.graphPattern && i.graph) {
    k(`GRAPH ${G(i.graph)} {`, ks);
    const d = se(i);
    k("}", d + 1);
    return;
  }
  if (i.graphPattern || i.select) {
    L("{");
    const d = se(i);
    k("}", d + 1);
    return;
  }
  if (i.data) {
    Zr(i);
    return;
  }
  if (i.triplePattern) {
    ye(i.triplePattern);
    return;
  }
  if (i.union) {
    for (let d = 0; d < i.union.length; d++)
      d > 0 && L("UNION"), L("{"), se(i.union[d]), k("}", i.union[d].location.end.offset + 2);
    return;
  }
  if (i.optional) {
    k("OPTIONAL {", ks);
    const d = se(i.optional);
    k("}", d + 1);
    return;
  }
  if (i.minus) {
    k("MINUS {", ks);
    const d = se(i.minus);
    k("}", d + 1);
    return;
  }
  if (i.filter) {
    vd(i);
    return;
  }
  if (i.bind) {
    L(`BIND (${B(i.bind)} AS ${ce(i.as)})`);
    return;
  }
  if (i.service) {
    let d = " ";
    i.silent && (d = " SILENT "), L(`SERVICE${d}${G(i.service)} {`);
    const e = se(i.pattern);
    k("}", e + 1);
    return;
  }
  if (i.functionRef) {
    const d = i.args.map(B).join(", ");
    L(re(i.functionRef) + `(${d})`);
  }
}, wd = (i) => {
  let d = ["GROUP BY"], e = 0;
  return i.forEach((m) => {
    d[e].length > 80 ? (e++, d[e] = "  ") : d[e] += " ", d[e] += G(m);
  }), d.join(`
`);
}, _d = (i) => {
  let d = [];
  return i.forEach((e) => {
    let m;
    e.variable ? m = ce(e) : m = B(e), e.asc ? d.push(`ASC(${m})`) : e.desc ? d.push(`DESC(${m})`) : d.push(m);
  }), d.join(" ");
}, $d = (i) => {
  let d = [];
  d[0] = "SELECT", i.distinct && (d[0] += " DISTINCT"), i.reduced && (d[0] += " REDUCED");
  let e = 0;
  return i.select.forEach((m) => {
    d[e].length > 80 ? (e++, d[e] = "  ") : d[e] += " ", d[e] += bd(m);
  }), d.join(`
`);
}, bd = (i) => {
  if (i.variable)
    return ce(i);
  if (i.as)
    return `(${B(i.expression)} AS ${ce(i.as)})`;
  if (i === "*")
    return "*";
}, vd = (i) => {
  if (i.filter.notexists) {
    L("FILTER NOT EXISTS {");
    const d = se(i.filter.notexists);
    k("}", d + 1);
  } else if (i.filter.exists) {
    L("FILTER EXISTS {");
    const d = se(i.filter.exists);
    k("}", d + 1);
  } else
    k(`FILTER ${B(i.filter)}`, i.location.start.offset);
}, ye = (i) => {
  i.forEach((d) => {
    d.graph ? (k(`GRAPH ${G(d.graph)} {`, d.graph.location.start.offset), we(), ye(d.triplePattern), _e(), L("}")) : d.triplePattern ? ye(d.triplePattern) : Ad(d);
  });
}, Ad = (i) => {
  const d = G(i.subject);
  let e, m;
  i.properties.forEach((R) => {
    e ? (k(`${e} ;`, m), e = " ".repeat(d.length) + ` ${G(R.predicate)} ${G(R.objects)}`, R.predicate.location ? m = R.predicate.location.start.offset : m = R.predicate.value.location.start.offset) : (e = `${d} ${G(R.predicate)} ${G(R.objects)}`, m = i.subject.location.start.offset);
  }), k(`${e} .`, m);
}, md = (i, d) => {
  if (i.length === 1 && !d) {
    const R = i[0];
    return ` ${G(R.predicate)} ${G(R.objects)}`;
  }
  we();
  let e = "";
  const m = Ge + " ".repeat(2);
  return i.forEach((R) => {
    e ? (e += ` ;
`, e += `${m} ${G(R.predicate)} ${G(R.objects, !0)}`) : (e += `
${m}`, e += ` ${G(R.predicate)} ${G(R.objects, !0)}`);
  }), e += `
${Ge}`, _e(), e;
}, Cd = (i) => {
  if (i.aggregateType === "count") {
    let d = i.distinct ? "DISTINCT " : "", e;
    return i.expression === "*" ? e = "*" : e = B(i.expression), `COUNT(${d}${e})`;
  } else {
    if (i.aggregateType === "sum")
      return `sum(${ce(i.expression.value)})`;
    if (i.aggregateType === "min")
      return `MIN(${ce(i.expression.value)})`;
    if (i.aggregateType === "max")
      return `MAX(${ce(i.expression.value)})`;
    if (i.aggregateType === "avg")
      return `AVG(${B(i.expression)})`;
    if (i.aggregateType === "sample")
      return `SAMPLE(${ce(i.expression.value)})`;
    if (i.aggregateType === "group_concat") {
      let d = i.distinct ? "DISTINCT " : "", e = "";
      return i.separator && (e = `; SEPARATOR = ${Gi(i.separator)}`), `GROUP_CONCAT(${d}${B(i.expression)}${e})`;
    }
  }
}, B = (i) => {
  if (i.functionRef)
    return re(i.functionRef) + "(" + i.args.map(B).join(", ") + ")";
  switch (i.expressionType) {
    case "atomic":
      return G(i.value);
    case "irireforfunction":
      let d = re(i.iriref);
      return i.args && (d += "(" + i.args.map(B).join(", ") + ")"), me(d, i.bracketted);
    case "builtincall":
      let e = "";
      return i.args && (e = i.args.map(G).join(", ")), me(`${i.builtincall}(${e})`, i.bracketted);
    case "unaryexpression":
      let m = i.unaryexpression + B(i.expression);
      return me(m, i.bracketted);
    case "aggregate":
      return Cd(i);
    case "multiplicativeexpression":
      let R = B(i.first);
      return i.rest.forEach((O) => {
        R += " " + O.operator + " " + B(O.expression);
      }), me(R, i.bracketted);
    case "additiveexpression":
      let z = B(i.op1);
      return i.ops.forEach((O) => {
        z += " " + O.operator + " " + B(O.expression);
      }), me(z, i.bracketted);
    case "relationalexpression":
      let J = B(i.op1) + " " + i.operator + " ";
      return Array.isArray(i.op2) ? J += "(" + i.op2.map(G).join(", ") + ")" : J += B(i.op2), me(J, i.bracketted);
    case "aliasedexpression":
      let W = B(i.expression);
      return i.as && (W += ` AS ${ce(i.as)}`), me(W, i.bracketted);
    case "conditionaland":
      return me(i.operands.map(B).join(" && "), i.bracketted);
    case "conditionalor":
      return me(i.operands.map(B).join(" || "), i.bracketted);
    case "regex":
      let ne = B(i.text);
      return ne += ", " + B(i.pattern), i.flags && (ne += ", " + B(i.flags)), `regex(${ne})`;
  }
}, me = (i, d) => d ? `(${i})` : i, Zr = (i) => {
  if (i.oneVar) {
    const d = G(i.oneVar), e = i.data.map(G).join(" ");
    L(`VALUES ${d} { ${e} }`);
  } else if (i.variables) {
    const d = i.variables.map(ce).join(" ");
    if (i.variables.length === 1) {
      const e = i.data.map((m) => "(" + m.map(G).join(" ") + ")").join(" ");
      L(`VALUES (${d}) { ${e} }`);
    } else
      L(`VALUES (${d}) {`), we(), i.data.map((e) => {
        L("(" + e.map(G).join(" ") + ")");
      }), _e(), L("}");
  }
}, G = (i, d = !1) => {
  if (i === "UNDEF")
    return i;
  if (Array.isArray(i))
    return i.map((m) => G(m, d)).join(", ");
  if (i.variable)
    return ce(i);
  if (i.collection)
    return `( ${i.collection.map((R) => G(R)).join(" ")} )`;
  if (i.hasOwnProperty("literal"))
    return Gi(i);
  if (i.blankNode)
    return i.blankNode;
  if (i.expressionType)
    return B(i);
  if (i.blankNodeProperties)
    return `[${md(i.blankNodeProperties, d)} ]`;
  let e = "";
  return i.inverse && (e += "^"), (i.iriPrefix || i.iriLocal || i.iri || i.a) && (e += re(i)), i.alternative ? e += i.alternative.map((m) => G(m)).join("|") : i.sequence && (e += i.sequence.map((m) => G(m)).join("/")), i.bracketted && (e = `(${e})`), i.modifier && (e += i.modifier), e;
}, Gi = (i) => {
  if (i.dataType === "http://www.w3.org/2001/XMLSchema#decimal")
    return i.literal;
  if (i.dataType === "http://www.w3.org/2001/XMLSchema#double")
    return i.literal;
  if (i.dataType === "http://www.w3.org/2001/XMLSchema#integer")
    return i.literal;
  if (i.dataType === "http://www.w3.org/2001/XMLSchema#boolean")
    return i.literal;
  let d = i.quote + i.literal + i.quote;
  return i.dataType ? d += `^^${re(i.dataType)}` : i.lang && (d += "@" + i.lang), d;
}, re = (i) => {
  if (i.iri)
    return `<${i.iri}>`;
  if (i.iriPrefix && i.iriLocal)
    return `${i.iriPrefix}:${i.iriLocal}`;
  if (i.iriPrefix)
    return `${i.iriPrefix}:`;
  if (i.iriLocal)
    return `:${i.iriLocal}`;
  if (i.a)
    return "a";
}, ce = (i) => i.varType === "$" ? "$" + i.variable : "?" + i.variable, Ui = (i, d = 2) => od(fd(i), d);
typeof window < "u" && (window.spfmt = Ui);
const Ed = "http://purl.org/ontology/bibo/", yd = "http://www.cidoc-crm.org/lrmoo/", Ce = "http://www.cidoc-crm.org/cidoc-crm/", Pd = "http://www.ics.forth.gr/isl/CRMdig/", Td = "http://dbpedia.org/resource/", Ld = "http://purl.org/dc/elements/1.1/", Hi = "http://purl.org/dc/terms/", Rd = "http://xmlns.com/foaf/0.1/", Id = "http://data-iremus.huma-num.fr/ns/hemef#", Od = "http://data-iremus.huma-num.fr/id/", Nd = "http://data-iremus.huma-num.fr/ns/", Sd = "http://data-iremus.huma-num.fr/graph/", Fd = "http://www.mimo-db.eu/", xd = "http://data-iremus.huma-num.fr/ns/musrad30#", Dd = "http://www.w3.org/2002/07/owl#", Bi = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", ki = "http://www.w3.org/2000/01/rdf-schema#", Gd = "http://schema.org/", Wr = "http://www.w3.org/2004/02/skos/core#", Ud = /* @__PURE__ */ new Map([
  [Ce, "crm"],
  [Pd, "crmdig"],
  [Ed, "bibo"],
  [Td, "dbpedia"],
  [Ld, "dc"],
  [Hi, "dcterms"],
  [Rd, "foaf"],
  [Id, "hemef"],
  [Sd, "iremus-graph"],
  [Od, "iremus-data"],
  [Nd, "iremus-ns"],
  [yd, "lrmoo"],
  [Fd, "mimo"],
  [xd, "musrad30"],
  [Dd, "owl"],
  [Bi, "rdf"],
  [ki, "rdfs"],
  [Gd, "schema"],
  [Wr, "skos"]
]);
Object.entries(Ud).sort(
  (i, d) => i[0].length < d[0].length ? 1 : -1
);
const d1 = [
  Ce + "P1_is_identified_by",
  Ce + "P102_has_title",
  Ce + "P190_has_symbolic_content",
  Ce + "P1_is_identified_by",
  Ce + "E35_Title",
  Ce + "E41_Appellation",
  Ce + "E42_Identifier",
  Ce + "P2_has_type",
  Hi + "title",
  Bi + "type",
  ki + "label",
  Wr + "prefLabel",
  Wr + "altLabel"
];
var Hd = /* @__PURE__ */ ((i) => (i.INCOMING = "INCOMING", i.OUTGOING = "OUTGOING", i))(Hd || {});
const Bd = () => [
  "crm:P1_is_identified_by",
  "crm:P48_has_preferred_identifier",
  "crm:P102_has_title",
  "dcterms:title",
  "crm:P190_has_symbolic_content",
  "rdfs:label",
  "skos:prefLabel",
  "skos:altLabel"
].join(" "), kd = () => [
  "crm:P1_is_identified_by",
  "crm:P48_has_preferred_identifier",
  "crm:P102_has_title"
].join(" "), Md = () => ["crm:E35_Title", "crm:E41_Appellation", "crm:E42_Identifier"].join(" "), w1 = (i, d = !1, e = [], m = "OUTGOING") => Ui(
  Vd() + (d ? Xd(
    i,
    e,
    m
  ) : jd(i))
), jd = (i) => `
SELECT *
WHERE {
  GRAPH ?g {
    ${ji(`<${i}>`)}
    UNION
    ${Xi(`<${i}>`)}
    UNION
    ${Mi(`<${i}>`)}
    UNION
    ${Wd(`<${i}>`)}
  }
}
`, Xd = (i, d, e) => {
  let m = "";
  return d.length > 0 && (m = `VALUES ?lp { ${d.map((R) => `<${R}>`).join(" ")} }`), `
SELECT *
WHERE {
  GRAPH ?g {
    ${m}
    ${e === "INCOMING" ? `?lr ?lp <${i}>` : `<${i}> ?lp ?lr`}
    OPTIONAL {
      GRAPH ?r_g {
        ${ji("?lr")}
        UNION
        ${Xi("?lr")}
        UNION
        ${Mi("?lr")} 
      }
    }
  }
}
ORDER BY ?lp ?lr
`;
}, Vd = () => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX iremus-data: <http://data-iremus.huma-num.fr/id/>
PREFIX iremus-graphs: <http://data-iremus.huma-num.fr/graph/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX sherlock-ns: <http://data-iremus.huma-num.fr/ns/sherlock#>
`, Mi = (i) => `
{ ######## get types (rdf:type)
  ${i} ?p ?r .
  VALUES ?p { rdf:type }
}
UNION
{ ######## get types (crm:P2_has_type)
 ${i} ?p ?r .
 VALUES ?p { crm:P2_has_type }
 OPTIONAL {
    GRAPH ?r_types_g {
      {
        ?r rdf:type crm:E55_Type .
        VALUES ?r_type { crm:E55_Type } .
        ?r crm:P1_is_identified_by ?label .
        FILTER(isLiteral(?label)) .
        OPTIONAL {
          ?type_authdoc crm:P71_lists ?r .
          GRAPH ?type_authdoc_g {
            ?type_authdoc crm:P1_is_identified_by ?type_authdoc_label .
          }
        }
      }
      UNION
      {
        ?r rdf:type skos:Concept .
        ?r skos:prefLabel ?label .
        OPTIONAL {
          ?r skos:inScheme ?type_authdoc .
          GRAPH ?type_authdoc_g {
            ?type_authdoc dcterms:title ?type_authdoc_label .
          }
        }
      }
    }
  }
}
`, ji = (i) => `
{ ######## get direct literal label
${i} ?p ?label .
VALUES ?p { ${Bd()} } .
FILTER(isLiteral(?label)) .
}
`, Xi = (i) => `
{ ######## get identifiers linked resources
  ${i} ?p ?r .
  VALUES ?p { ${kd()} }
  GRAPH ?r_types_g {
    ?r rdf:type ?r_type .
    ?r crm:P190_has_symbolic_content ?label .
    VALUES ?r_type { ${Md()} }
  }
  OPTIONAL {
    GRAPH ?r_types_types_g {
      ?r crm:P2_has_type ?r_type_type .
      GRAPH ?r_types_types_label_g {
        ?r_type_type crm:P1_is_identified_by ?r_type_type_label .
        FILTER(isLiteral(?r_type_type_label)) .
      }
    }
  }
}
`, Wd = (i) => `
{ ######## if the base resource is part of a E32
  GRAPH ?authdoc_g {
    ?authdoc crm:P71_lists ${i} .
  }
  OPTIONAL {
    GRAPH ?authdoc_label_g {
      ?authdoc crm:P1_is_identified_by ?authdoc_label .
    }
  }
}
UNION
{ ######## if the base resource is part of a skos:ConceptScheme
  GRAPH ?authdoc_g {
    ${i} ?p ?authdoc .
    VALUES ?p { skos:inScheme }

  }
  OPTIONAL {
    GRAPH ?authdoc_g {
      ?authdoc ?authdoc_label_p ?authdoc_label .
      VALUES ?authdoc_label_p { dcterms:title skos:prefLabel }
    }
  }
}
`, _1 = () => `
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
`, $1 = (i, d) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT ?note_pname (count(?note) AS ?notes) 
WHERE {
  GRAPH ?g {
    ?note sherlock:has_document_context <${i}>.
    ?note crm:P2_has_type <${K.note}>. #NOTE
    ?note sherlockmei:pname ?note_pname.
    ${d && `VALUES ?note_pname { "${d}" }`}
  }
}
GROUP BY ?note_pname`, b1 = (i) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT *
WHERE {
  GRAPH ?g {
    <${i}> crm:P127_has_broader_term* ?bt .
    ?bt crm:P1_is_identified_by ?bt_label .
    OPTIONAL {
      ?bt crm:P127_has_broader_term ?btbt .
      ?btbt crm:P1_is_identified_by ?btbt_label .
    }
  }
}
`, v1 = (i) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE { <${i}> crm:P140_assigned_attribute_to ?p140 }`, A1 = () => `
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
        ?score crm:P2_has_type <${K.score}> .
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
                ?selection crm:P2_has_type <${K.selection}> .
                ?selection sherlock:has_document_context ?score .
            }
        }
        UNION {
            GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> {
                ?e13_on_analytical_entity rdf:type crm:E13_Attribute_Assignment .
                ?e13_on_analytical_entity crm:P141_assigned ?analytical_entity .
                ?analytical_entity rdf:type crm:E28_Conceptual_Object .
                ?analytical_entity crm:P2_has_type <${K.analyticalEntity}> .
                ?e13_on_analytical_entity crm:P140_assigned_attribute_to ?analytical_selection .
                ?analytical_selection sherlock:has_document_context ?score .
            }
        }
    }
}
GROUP BY ?score
`, m1 = (i) => `
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
          ?analyticalEntity crm:P2_has_type <${K.analyticalEntity}>.
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
        ?selection sherlock:has_document_context <${i}>.
        ?selection crm:P2_has_type <${K.selection}>.
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
function C1(i) {
  return `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

SELECT ?s
WHERE {
  GRAPH ?g {
	  ?s crm:P1_is_identified_by ?e42 .
    ?e42 rdf:type crm:E42_Identifier .
    ?e42 crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
    ?e42 crm:P190_has_symbolic_content "${i}" .
  }
}
`;
}
export {
  Kd as ANALYTICAL_ENTITY,
  Fg as ANALYTICAL_PROJECT,
  e1 as ANNOTATION,
  xg as DRAFT_PROJECT,
  d1 as IDENTITY_PREDICATES,
  Hd as LinkedResourcesDirectionEnum,
  Yd as NOTE,
  Qd as POSITIONNED_NOTE,
  Jd as SCORE,
  zd as SELECTION,
  qd as SOFTWARE,
  Zd as VERTICALITY,
  l1 as contributions,
  f1 as contributors,
  c1 as countIncomingPredicates,
  o1 as countOutgoingPredicates,
  n1 as documentsByIndex,
  u1 as fondamentales,
  s1 as getAnalyticalProject,
  r1 as getAnnotations,
  a1 as getContributor,
  v1 as getP140,
  C1 as getResourceByUrlFragment,
  p1 as getResources,
  g1 as historicalModelsOntologies,
  w1 as identity,
  _1 as mg_livraisons,
  $1 as noteOccurences,
  b1 as p127,
  A1 as scores,
  m1 as selections,
  h1 as wemi
};

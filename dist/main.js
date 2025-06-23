var Xg = Object.defineProperty;
var Vg = (h, A, e) => A in h ? Xg(h, A, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[A] = e;
var wg = (h, A, e) => Vg(h, typeof A != "symbol" ? A + "" : A, e);
const uw = "http://data-iremus.huma-num.fr/id/d2a536eb-4a95-484f-b13d-f597ac8ea2fd", pw = "http://data-iremus.huma-num.fr/id/9d0388cb-a178-46b2-b047-b5a98f7bdf0b", gw = "http://data-iremus.huma-num.fr/id/689e148d-a97d-45b4-898d-c395a24884df", ww = "http://data-iremus.huma-num.fr/id/90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86", dw = "http://data-iremus.huma-num.fr/id/6d72746a-9f28-4739-8786-c6415d53c56d", $w = "http://data-iremus.huma-num.fr/id/bf9dce29-8123-4e8e-b24d-0c7f134bbc8e", vw = "http://data-iremus.huma-num.fr/id/29b00e39-75da-4945-b6c4-a0ca00f96f68", bw = "http://data-iremus.huma-num.fr/id/82dbd157-20df-422c-88db-28d6075d99a1", Wg = "http://data-iremus.huma-num.fr/id/21816195-6708-4bbd-a758-ee354bb84900", Yg = "http://data-iremus.huma-num.fr/id/cabe46bf-23d4-4392-aa20-b3eb21ad7dfd", Aw = (h) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
    VALUES ?project { <${h}> }
    VALUES ?draft { <${Yg}> }
    ?project crm:P2_has_type <${Wg}>.
    ?project crm:P1_is_identified_by ?label.
    ?project crm:P14_carried_out_by ?contributor.
    OPTIONAL { ?project sherlock:has_privacy_type ?draft }.
}
LIMIT 1`, Cw = (h, A) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX dcterms: <http://purl.org/dc/terms/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
  ?annotation sherlock:has_document_context <${h}>.
  <${A}> crm:P9_consists_of ?annotation.
  ?annotation crm:P141_assigned ?concept.
  ?annotation dcterms:created ?date.
  ?annotation crm:P140_assigned_attribute_to  ?entity.
  ?e13 crm:P141_assigned ?entity.
  ?e13 sherlock:has_document_context ?page.
}
`;
var Qg = Object.defineProperty, zg = (h, A, e) => A in h ? Qg(h, A, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[A] = e, oe = (h, A, e) => zg(h, typeof A != "symbol" ? A + "" : A, e);
const Zg = "http://purl.org/ontology/bibo/", qg = "http://iflastandards.info/ns/lrm/lrmoo/", Kg = "http://www.cidoc-crm.org/cidoc-crm/", Jg = "http://www.ics.forth.gr/isl/CRMdig/", e1 = "http://dbpedia.org/resource/", s1 = "http://purl.org/dc/elements/1.1/", r1 = "http://purl.org/dc/terms/", i1 = "http://xmlns.com/foaf/0.1/", l1 = "http://data-iremus.huma-num.fr/ns/hemef#", Ye = "http://data-iremus.huma-num.fr/id/", t1 = "http://data-iremus.huma-num.fr/id/", a1 = "http://data-iremus.huma-num.fr/ns/", f1 = "http://data-iremus.huma-num.fr/graph/", o1 = "http://www.mimo-db.eu/", h1 = "http://data-iremus.huma-num.fr/ns/musrad30#", c1 = "http://www.w3.org/2002/07/owl#", n1 = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", u1 = "http://www.w3.org/2000/01/rdf-schema#", p1 = "http://schema.org/", g1 = "http://www.w3.org/2004/02/skos/core#", w1 = /* @__PURE__ */ new Map([
  [Kg, "crm"],
  [Jg, "crmdig"],
  [Zg, "bibo"],
  [e1, "dbpedia"],
  [s1, "dc"],
  [r1, "dcterms"],
  [i1, "foaf"],
  [l1, "hemef"],
  [f1, "iremus-graph"],
  [t1, "iremus-data"],
  [a1, "iremus-ns"],
  [qg, "lrmoo"],
  [o1, "mimo"],
  [h1, "musrad30"],
  [c1, "owl"],
  [n1, "rdf"],
  [u1, "rdfs"],
  [p1, "schema"],
  [g1, "skos"]
]);
Object.entries(w1).sort(
  (h, A) => h[0].length < A[0].length ? 1 : -1
);
class d1 {
  constructor(A = "") {
    oe(this, "_pog"), oe(this, "_uri"), this._uri = A, this._pog = /* @__PURE__ */ new Map();
  }
  getValues(A) {
    return this._pog.get(A);
  }
  addPOG(A, e) {
    var T;
    this._pog.has(A) ? (T = this._pog.get(A)) == null || T.push(e) : this._pog.set(A, [e]);
  }
  get uri() {
    return this._uri;
  }
  get pog() {
    return this._pog;
  }
}
const vg = class {
  constructor(A) {
    oe(this, "_classesRegistry", /* @__PURE__ */ new Map()), oe(this, "_name"), oe(this, "_classes"), oe(this, "_properties"), oe(this, "_propertiesRegistry", /* @__PURE__ */ new Map()), this._name = A, this._classes = [], this._properties = [];
  }
  addClass(A) {
    this._classes.push(A), this._classes = this._classes.sort(), this._classesRegistry.set(A.uri, A);
  }
  addProperty(A) {
    this._properties.push(A), this._properties = this._properties.sort(), this._propertiesRegistry.set(A.uri, A);
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
    this._classes = this._classes.sort((A, e) => A.intCodeForSorting - e.intCodeForSorting), this._properties = this._properties.sort((A, e) => A.intCodeForSorting - e.intCodeForSorting);
  }
};
oe(vg, "void", new vg(""));
let xg = vg;
class _g extends d1 {
  constructor(A, e, T) {
    super(A), oe(this, "_comment"), oe(this, "_intCodeForSorting"), oe(this, "_label"), oe(this, "_name"), oe(this, "_ontology"), this._comment = /* @__PURE__ */ new Map(), this._intCodeForSorting = -1, this._label = /* @__PURE__ */ new Map(), this._name = e, this._ontology = T;
  }
  get comment() {
    return this._comment;
  }
  set comment(A) {
    this._comment = A;
  }
  get intCodeForSorting() {
    return this._intCodeForSorting;
  }
  set intCodeForSorting(A) {
    this._intCodeForSorting = A;
  }
  set label(A) {
    this._label = A;
  }
  get name() {
    return this._name;
  }
  get ontology() {
    return this._ontology;
  }
  getComment(A) {
    return this._comment.get(A);
  }
  getLabel(A) {
    return this._label.get(A);
  }
}
oe(_g, "label", "");
const bg = class extends _g {
  constructor(A, e, T) {
    super(A, e, T), oe(this, "_subClassOf"), this._subClassOf = new Array();
  }
  addSubClassOf(A) {
    this._subClassOf.push(A);
  }
};
oe(bg, "void", new bg("", "", xg.void));
let Rg = bg;
const Ig = class Dg extends _g {
  constructor(A, e, T) {
    super(A, e, T), oe(this, "_domain", Rg.void), oe(this, "_inverseOf", Dg.void), oe(this, "_range", Rg.void), oe(this, "_subPropertyOf"), this._subPropertyOf = new Array();
  }
  get domain() {
    return this._domain;
  }
  set domain(A) {
    this._domain = A;
  }
  get inverseOf() {
    return this._inverseOf;
  }
  set inverseOf(A) {
    this._inverseOf = A;
  }
  get range() {
    return this._range;
  }
  set range(A) {
    this._range = A;
  }
  addSubPropertyOf(A) {
    this._subPropertyOf.push(A);
  }
};
oe(Ig, "void", new Ig("", "", xg.void));
const Pe = {
  selection: Ye + "9d0388cb-a178-46b2-b047-b5a98f7bdf0b",
  analyticalEntity: Ye + "6d72746a-9f28-4739-8786-c6415d53c56d",
  score: Ye + "bf9dce29-8123-4e8e-b24d-0c7f134bbc8e",
  software: Ye + "29b00e39-75da-4945-b6c4-a0ca00f96f68",
  hexColorCode: Ye + "5f1bb74f-6ea0-4073-8b68-086f98454f1c",
  emoji: Ye + "04242f64-fbb3-4b5b-bb2e-3ddd59eeea18",
  orcidId: Ye + "d7ef2583-ff31-4913-9ed3-bc3a1c664b21",
  note: Ye + "d2a536eb-4a95-484f-b13d-f597ac8ea2fd",
  verticality: Ye + "90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86",
  fondamentaleIdentification: Ye + "003559fc-f033-4fc3-9c05-0d5f283123ed",
  orcidGeneratedName: Ye + "73ea8d74-3526-4f6a-8830-dd369795650d"
}, Ew = (h) => `
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
      ?contribution dcterms:creator <${h}>. #CONTRIBUTOR
      VALUES ?contribution_type { <${Pe.selection}> } #SELECTION TYPE
      ?contribution crm:P2_has_type ?contribution_type.
      GRAPH ?g1 {
        ?contribution_type crm:P1_is_identified_by ?contribution_type_label
      }
    } 
    UNION 
    # CONTRIBUTIONS FROM CRM:E13 --> CRM:P14
    {
    	?contribution crm:P14_carried_out_by <${h}>. #CONTRIBUTOR
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
`, yw = (h) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX analysis: <http://modality-tonality.huma-num.fr/analysisOntology#>
SELECT ?contributor ?color ?emoji ?program
FROM <http://data-iremus.huma-num.fr/graph/users>
WHERE {
    VALUES ?contributor { <${h}> }
    
    OPTIONAL { ?contributor analysis:hasPythonModuleName ?program }
    OPTIONAL {
        ?contributor crm:P1_is_identified_by ?unicode.
        ?unicode crm:P2_has_type <http://data-iremus.huma-num.fr/id/04242f64-fbb3-4b5b-bb2e-3ddd59eeea18>.
        ?unicode crm:P190_has_symbolic_content ?emoji.
        ?contributor crm:P1_is_identified_by ?hexcode.
        ?hexcode crm:P2_has_type <http://data-iremus.huma-num.fr/id/5f1bb74f-6ea0-4073-8b68-086f98454f1c>.
        ?hexcode crm:P190_has_symbolic_content ?color.
    }
}`, Pw = () => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT ?contributor ?name (COUNT(?contribution) AS ?contributions) (CONCAT( "#", ?hex_color_code) AS ?hex_color) ?emoji ?orcid (IRI(CONCAT("https://orcid.org/", ?orcid)) AS ?orcid_profile) (IRI(CONCAT("https://pub.orcid.org/v3.0/", ?orcid)) AS ?orcid_api_user_endpoint) ?untyped_identifier ?contributor_type_label ?user_graph

WHERE {
  GRAPH ?user_graph {  
    VALUES ?contributor_type_predicate {rdf:type crm:P2_has_type}. 
    VALUES ?contributor_type {crm:E21_Person <${Pe.software}>}. #PERSON OR SOFTWARE
    ?contributor ?contributor_type_predicate ?contributor_type
    
    OPTIONAL {
	    ?contributor crm:P2_has_type <${Pe.software}>. #SOFTWARE
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
      ?hex_color_code_identifier crm:P2_has_type <${Pe.hexColorCode}>. #HEX COLOR CODE IDENTIFIER
      ?hex_color_code_identifier crm:P190_has_symbolic_content ?hex_color_code
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?emoji_identifier.
      ?emoji_identifier crm:P2_has_type <${Pe.emoji}>. #EMOJI IDENTIFIER
      ?emoji_identifier crm:P190_has_symbolic_content ?emoji
    }
    OPTIONAL {
      ?contributor crm:P1_is_identified_by ?orcid_appellation.
      ?orcid_appellation crm:P2_has_type <${Pe.orcidGeneratedName}>. #ORCID NAME IDENTIFIER
      ?orcid_appellation crm:P190_has_symbolic_content ?name
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?ORCID_identifier.
      ?ORCID_identifier crm:P2_has_type <${Pe.orcidId}>. #ORCID IDENTIFIER
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
GROUP BY ?contributor ?name ?hex_color_code ?emoji ?orcid ?orcid_profile ?untyped_identifier ?contributor_type_label ?user_graph`, Lw = (h) => `
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    <${h}> ?lp ?lr .
  }
}
GROUP BY ?lp
`, Tw = (h) => `
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    ?lr ?lp <${h}> .
  }
}
GROUP BY ?lp
`, Rw = (h) => `
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX she: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT ?e13_p140 (GROUP_CONCAT(DISTINCT ?e13_p140_label ; separator=" \\n~~\\n ") as ?e13_p140_labels) ?e13_p177 ?e13_p177_label ?concept ?concept_description ?context (GROUP_CONCAT(DISTINCT ?context_label ; separator=" \\n~~\\n ") as ?context_labels) ?creation_date ?creator ?creator_label ?analytical_project ?analytical_project_label
WHERE 
{ 
    GRAPH <http://data-iremus.huma-num.fr/graph/opentheso> {
        <${h}> skos:narrower* ?concept .
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

`, Iw = (h) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT *
WHERE {
  GRAPH ?g {
    ?pc0 crm:P01_has_domain <${h}> .
    ?pc0 rdf:type ?pc0_type .
    ?pc0 crm:P03_has_range_literal ?value .
    ?pc0 ?dotOneProperty ?e55 .
    VALUES ?dotOneProperty { crm:P3.1_has_type crm:P14.1_in_the_role_of crm:P16.1_mode_of_use crm:P19.1_mode_of_use crm:P62.1_mode_of_depiction crm:P67.1_has_type crm:P69.1_has_type crm:P102.1_has_type crm:P107.1_kind_of_member crm:P130.1_kind_of_similarity crm:P136.1_in_the_taxonomic_role crm:P137.1_in_the_taxonomic_role crm:P138.1_mode_of_representation crm:P139.1_has_type crm:P144.1_kind_of_member crm:P189.1_has_type }
  }
  GRAPH ?g_types {
    ?e55 rdf:type crm:E55_Type .
    ?e55 crm:P1_is_identified_by ?e55_label .
  }
}`, Ow = (h) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT *
WHERE {
    GRAPH ?g {
        ?e13 ?p <${h}> .
        ?e13 rdf:type crm:E13_Attribute_Assignment .
        ?e13 crm:P141_assigned ?p141 .
        ?e13 crm:P177_assigned_property_of_type ?p177 .
        FILTER(isLiteral(?p141))
    }
    GRAPH ?g_meta {
        ?p177 crm:P1_is_identified_by ?p177_label .
        FILTER(isLiteral(?p177_label))
    }
}`, Nw = (h) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT DISTINCT ?score ?annotation ?verticality ?note_label ?measure_number 
WHERE {
  GRAPH ?g {
    ${$1(h)}
    ?score crm:P2_has_type <${Pe.score}>. #Score type
    ?verticality sherlock:has_document_context ?score.
    ?verticality crm:P2_has_type <${Pe.verticality}>. #MEI score offset
    ?note_in_score sherlockmei:contains_beat ?verticality.
    ?note_in_score sherlockmei:measure_number ?measure_number.
    GRAPH ?sherlock_graph {
        ?annotation crm:P140_assigned_attribute_to ?verticality.
        ?annotation crm:P177_assigned_property_of_type <${Pe.fondamentaleIdentification}>. #Identification de fondamentale
        ?annotation crm:P141_assigned ?note.
        GRAPH ?sherlock_data_graph {
            ?note crm:P1_is_identified_by ?note_label
        }
    }
  }
}
ORDER BY ?score ?measure_number
`, $1 = (h) => h ? `BIND (<${h}> as ?score).` : "", Sw = () => `
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
`, Fw = () => `
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
function v1(h, A) {
  function e() {
    this.constructor = h;
  }
  e.prototype = A.prototype, h.prototype = new e();
}
function kr(h, A, e, T) {
  var S = Error.call(this, h);
  return Object.setPrototypeOf && Object.setPrototypeOf(S, kr.prototype), S.expected = A, S.found = e, S.location = T, S.name = "SyntaxError", S;
}
v1(kr, Error);
function dg(h, A, e) {
  return e = e || " ", h.length > A ? h : (A -= h.length, e += e.repeat(A), h + e.slice(0, A));
}
kr.prototype.format = function(h) {
  var A = "Error: " + this.message;
  if (this.location) {
    var e = null, T;
    for (T = 0; T < h.length; T++)
      if (h[T].source === this.location.source) {
        e = h[T].text.split(/\r\n|\n|\r/g);
        break;
      }
    var S = this.location.start, Y = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(S) : S, he = this.location.source + ":" + Y.line + ":" + Y.column;
    if (e) {
      var q = this.location.end, we = dg("", Y.line.toString().length, " "), O = e[S.line - 1], x = S.line === q.line ? q.column : O.length + 1, C = x - S.column || 1;
      A += `
 --> ` + he + `
` + we + ` |
` + Y.line + " | " + O + `
` + we + " | " + dg("", S.column - 1, " ") + dg("", C, "^");
    } else
      A += `
 at ` + he;
  }
  return A;
};
kr.buildMessage = function(h, A) {
  var e = {
    literal: function(O) {
      return '"' + S(O.text) + '"';
    },
    class: function(O) {
      var x = O.parts.map(function(C) {
        return Array.isArray(C) ? Y(C[0]) + "-" + Y(C[1]) : Y(C);
      });
      return "[" + (O.inverted ? "^" : "") + x.join("") + "]";
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
  function T(O) {
    return O.charCodeAt(0).toString(16).toUpperCase();
  }
  function S(O) {
    return O.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(x) {
      return "\\x0" + T(x);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(x) {
      return "\\x" + T(x);
    });
  }
  function Y(O) {
    return O.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(x) {
      return "\\x0" + T(x);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(x) {
      return "\\x" + T(x);
    });
  }
  function he(O) {
    return e[O.type](O);
  }
  function q(O) {
    var x = O.map(he), C, ce;
    if (x.sort(), x.length > 0) {
      for (C = 1, ce = 1; C < x.length; C++)
        x[C - 1] !== x[C] && (x[ce] = x[C], ce++);
      x.length = ce;
    }
    switch (x.length) {
      case 1:
        return x[0];
      case 2:
        return x[0] + " or " + x[1];
      default:
        return x.slice(0, -1).join(", ") + ", or " + x[x.length - 1];
    }
  }
  function we(O) {
    return O ? '"' + S(O) + '"' : "end of input";
  }
  return "Expected " + q(h) + " but " + we(A) + " found.";
};
function b1(h, A) {
  A = A !== void 0 ? A : {};
  var e = {}, T = A.grammarSource, S = { DOCUMENT: ji }, Y = ji, he = "base", q = "prefix", we = "select", O = "distinct", x = "reduced", C = "(", ce = "as", E = ")", se = "*", Xr = "construct", qe = "where", de = "{", $e = "}", Ll = "describe", Tl = "ask", Rl = "from", Gs = "named", Il = "group", Vr = "by", Ol = "having", Nl = "order", Sl = "asc", Fl = "desc", xl = "limit", Dl = "offset", Wr = "values", Le = ";", Gl = "load", ve = "silent", Ul = "into", Bl = "clear", Hl = "drop", Ml = "create", kl = "add", Us = "to", jl = "move", Xl = "copy", Yr = "insert", Qr = "data", Bs = "delete", Vl = "with", Wl = "using", zr = "default", Ke = "graph", Yl = "all", j = ".", Ql = "optional", zl = "service", Zl = "bind", Zr = "UNDEF", ql = "minus", qr = "union", Kl = "filter", D = ",", Je = "a", es = "|", ne = "/", Kr = "^", Hs = "?", be = "+", Ms = "!", ks = "[", js = "]", ss = "||", rs = "&&", is = "=", ls = "!=", Xs = "<", Vs = ">", ts = "<=", as = ">=", fs = "in", Ws = "not", le = "-", Jl = "str", et = "lang", st = "langmatches", rt = "datatype", it = "bound", lt = "iri", tt = "uri", at = "bnode", ft = "rand", ot = "abs", ht = "ceil", ct = "floor", nt = "round", ut = "concat", pt = "strlen", gt = "ucase", wt = "lcase", dt = "encode_for_uri", $t = "contains", vt = "strbefore", bt = "strstarts", At = "strends", Ct = "strafter", _t = "year", mt = "month", Et = "day", yt = "hours", Pt = "minutes", Lt = "seconds", Tt = "timezone", Rt = "tz", It = "now", Ot = "uuid", Nt = "struuid", St = "md5", Ft = "sha1", xt = "sha256", Dt = "sha384", Gt = "sha512", Ut = "coalesce", Bt = "if", Ht = "strlang", Mt = "strdt", kt = "sameterm", jt = "isuri", Xt = "isiri", Vt = "isblank", Wt = "isliteral", Yt = "isnumeric", Qt = "regex", zt = "substr", Zt = "replace", Jr = "exists", qt = "count", Kt = "sum", Jt = "min", ea = "max", sa = "avg", ra = "sample", ia = "group_concat", la = "separator", ei = "^^", ta = "true", aa = "false", Te = ":", si = "_:", ri = "$", ii = "@", Be = "'", os = '"', hs = "'''", cs = "''", ns = '"""', us = '""', li = "\\", Ys = "#", ti = "_", ai = "%", fa = "~", oa = "&", fi = /^[^<>"{}|\^`\\\0- ]/, B = /^[0-9]/, oi = /^[a-zA-Z]/, ps = /^[a-zA-Z0-9]/, ha = /^[eE]/, ca = /^[+\-]/, hi = /^[^'\\\n\r]/, ci = /^[^"\\\n\r]/, ni = /^[^'\\]/, ui = /^[^"\\]/, na = /^[tbnrf\\"']/, ua = /^[ \t]/, pa = /^[\r\n]/, ga = /^[^\r\n]/, wa = /^[A-Z]/, da = /^[a-z]/, $a = /^[\xC0-\xD6]/, va = /^[\xD8-\xF6]/, ba = /^[\xF8-\u02FF]/, Aa = /^[\u0370-\u037D]/, Ca = /^[\u037F-\u1FFF]/, _a = /^[\u200C-\u200D]/, ma = /^[\u2070-\u218F]/, Ea = /^[\u2C00-\u2FEF]/, ya = /^[\u3001-\uD7FF]/, Pa = /^[\uF900-\uFDCF]/, La = /^[\uFDF0-\uFFFD]/, Qs = /^[\xB7]/, zs = /^[\u0300-\u036F]/, Zs = /^[\u203F-\u2040]/, Ta = /^[A-F]/, Ra = /^[a-f]/, Ia = v("BASE", !0), Oa = v("PREFIX", !0), Na = v("SELECT", !0), ue = v("DISTINCT", !0), Sa = v("REDUCED", !0), y = v("(", !1), gs = v("AS", !0), P = v(")", !1), re = v("*", !1), pi = v("CONSTRUCT", !0), ws = v("WHERE", !0), Ae = v("{", !1), Ce = v("}", !1), Fa = v("DESCRIBE", !0), xa = v("ASK", !0), Da = v("FROM", !0), qs = v("NAMED", !0), Ga = v("GROUP", !0), gi = v("BY", !0), Ua = v("HAVING", !0), Ba = v("ORDER", !0), Ha = v("ASC", !0), Ma = v("DESC", !0), ka = v("LIMIT", !0), ja = v("OFFSET", !0), wi = v("VALUES", !0), Re = v(";", !1), Xa = v("LOAD", !0), _e = v("SILENT", !0), Va = v("INTO", !0), Wa = v("CLEAR", !0), Ya = v("DROP", !0), Qa = v("CREATE", !0), za = v("ADD", !0), Ks = v("TO", !0), Za = v("MOVE", !0), qa = v("COPY", !0), di = v("INSERT", !0), $i = v("DATA", !0), Js = v("DELETE", !0), Ka = v("WITH", !0), Ja = v("USING", !0), vi = v("DEFAULT", !0), ds = v("GRAPH", !0), ef = v("ALL", !0), X = v(".", !1), sf = v("OPTIONAL", !0), rf = v("SERVICE", !0), lf = v("BIND", !0), tf = v("UNDEF", !1), af = v("MINUS", !0), bi = v("UNION", !0), ff = v("FILTER", !0), G = v(",", !1), $s = v("a", !1), vs = v("|", !1), pe = v("/", !1), Ai = v("^", !1), er = v("?", !1), me = v("+", !1), sr = v("!", !1), rr = v("[", !1), ir = v("]", !1), Ci = v("||", !1), _i = v("&&", !1), bs = v("=", !1), mi = v("!=", !1), lr = v("<", !1), tr = v(">", !1), Ei = v("<=", !1), yi = v(">=", !1), As = v("IN", !0), ar = v("NOT", !0), te = v("-", !1), of = v("STR", !0), hf = v("LANG", !0), cf = v("LANGMATCHES", !0), nf = v("DATATYPE", !0), uf = v("BOUND", !0), pf = v("IRI", !0), gf = v("URI", !0), wf = v("BNODE", !0), df = v("RAND", !0), $f = v("ABS", !0), vf = v("CEIL", !0), bf = v("FLOOR", !0), Af = v("ROUND", !0), Cf = v("CONCAT", !0), _f = v("STRLEN", !0), mf = v("UCASE", !0), Ef = v("LCASE", !0), yf = v("ENCODE_FOR_URI", !0), Pf = v("CONTAINS", !0), Lf = v("STRBEFORE", !0), Tf = v("STRSTARTS", !0), Rf = v("STRENDS", !0), If = v("STRAFTER", !0), Of = v("YEAR", !0), Nf = v("MONTH", !0), Sf = v("DAY", !0), Ff = v("HOURS", !0), xf = v("MINUTES", !0), Df = v("SECONDS", !0), Gf = v("TIMEZONE", !0), Uf = v("TZ", !0), Bf = v("NOW", !0), Hf = v("UUID", !0), Mf = v("STRUUID", !0), kf = v("MD5", !0), jf = v("SHA1", !0), Xf = v("SHA256", !0), Vf = v("SHA384", !0), Wf = v("SHA512", !0), Yf = v("COALESCE", !0), Qf = v("IF", !0), zf = v("STRLANG", !0), Zf = v("STRDT", !0), qf = v("sameTerm", !0), Kf = v("isURI", !0), Jf = v("isIRI", !0), eo = v("isBLANK", !0), so = v("isLITERAL", !0), ro = v("isNUMERIC", !0), io = v("REGEX", !0), lo = v("SUBSTR", !0), to = v("REPLACE", !0), Pi = v("EXISTS", !0), ao = v("COUNT", !0), fo = v("SUM", !0), oo = v("MIN", !0), ho = v("MAX", !0), co = v("AVG", !0), no = v("SAMPLE", !0), uo = v("GROUP_CONCAT", !0), po = v("SEPARATOR", !0), go = v("^^", !1), wo = v("true", !0), $o = v("false", !0), Li = F(["<", ">", '"', "{", "}", "|", "^", "`", "\\", ["\0", " "]], !0, !1), Ie = v(":", !1), vo = v("_:", !1), H = F([["0", "9"]], !1, !1), Ti = v("$", !1), Ri = v("@", !1), Ii = F([["a", "z"], ["A", "Z"]], !1, !1), Cs = F([["a", "z"], ["A", "Z"], ["0", "9"]], !1, !1), bo = F(["e", "E"], !1, !1), Ao = F(["+", "-"], !1, !1), He = v("'", !1), Oi = F(["'", "\\", `
`, "\r"], !0, !1), _s = v('"', !1), Ni = F(['"', "\\", `
`, "\r"], !0, !1), Si = v("'''", !1), Fi = v("''", !1), xi = F(["'", "\\"], !0, !1), Di = v('"""', !1), Gi = v('""', !1), Ui = F(['"', "\\"], !0, !1), Bi = v("\\", !1), Co = F(["t", "b", "n", "r", "f", "\\", '"', "'"], !1, !1), _o = F([" ", "	"], !1, !1), mo = F(["\r", `
`], !1, !1), Eo = F(["\r", `
`], !0, !1), fr = v("#", !1), yo = F([["A", "Z"]], !1, !1), Po = F([["a", "z"]], !1, !1), Lo = F([["À", "Ö"]], !1, !1), To = F([["Ø", "ö"]], !1, !1), Ro = F([["ø", "˿"]], !1, !1), Io = F([["Ͱ", "ͽ"]], !1, !1), Oo = F([["Ϳ", "῿"]], !1, !1), No = F([["‌", "‍"]], !1, !1), So = F([["⁰", "↏"]], !1, !1), Fo = F([["Ⰰ", "⿯"]], !1, !1), xo = F([["、", "퟿"]], !1, !1), Do = F([["豈", "﷏"]], !1, !1), Go = F([["ﷰ", "�"]], !1, !1), Hi = v("_", !1), or = F(["·"], !1, !1), hr = F([["̀", "ͯ"]], !1, !1), cr = F([["‿", "⁀"]], !1, !1), Mi = v("%", !1), Uo = F([["A", "F"]], !1, !1), Bo = F([["a", "f"]], !1, !1), Ho = v("~", !1), Mo = v("&", !1), ko = function(i, r) {
    let f = {};
    i.length ? f = {
      headers: i,
      ...r
    } : f = r;
    const l = Object.entries(_l).map(([t, o]) => ({
      pos: parseInt(t),
      text: o
    }));
    return l.length && (f.comments = l), f;
  }, jo = function(i, r, f) {
    let l = { type: "Query" };
    return i.length && (l.prologue = i), l.queryBody = r, f && (l.values = f), l;
  }, Xo = function(i) {
    return {
      type: "BaseDecl",
      base: i
    };
  }, Vo = function(i, r) {
    return {
      type: "PrefixDecl",
      prefix: i,
      iri: r
    };
  }, Wo = function(i, r, f, l) {
    return r.length && (i.from = r), i = {
      ...i,
      where: f,
      ...l
    }, i;
  }, Yo = function(i, r, f, l) {
    let t = {
      ...i,
      where: r,
      ...f
    };
    return l && (t.values = l), t;
  }, Qo = function(i, r) {
    let f;
    r === "*" ? f = ["*"] : f = r.map((t) => t.length === 2 ? t[1] : {
      expression: t[3],
      as: t[7]
    });
    let l = { select: f };
    if (i) {
      const t = i.toUpperCase();
      t === "DISTINCT" ? l.distinct = !0 : t === "REDUCED" && (l.reduced = !0);
    }
    return l.location = I(), l;
  }, zo = function(i, r, f, l) {
    let t = { type: "construct" };
    return r.length && (t.from = r), t = {
      ...t,
      template: i,
      where: f,
      ...l,
      location: I()
    }, t;
  }, Zo = function(i, r, f) {
    let l = { type: "construct" };
    return i.length && (l.from = i), l = {
      ...l,
      where: [r],
      ...f,
      location: I()
    }, l;
  }, qo = function(i, r, f, l) {
    let t = { type: "describe" };
    return r.length && (t.from = r), t.describe = i, f && (t.where = f), t = {
      ...t,
      ...l,
      location: I()
    }, t;
  }, Ko = function(i, r, f) {
    let l = { type: "ask" };
    return i.length && (l.from = i), l = {
      ...l,
      where: r,
      ...f,
      location: I()
    }, l;
  }, Jo = function(i) {
    return i;
  }, eh = function(i) {
    return {
      graph: i,
      location: I()
    };
  }, sh = function(i) {
    return {
      namedGraph: i,
      location: I()
    };
  }, rh = function(i) {
    return i.graphPattern || i;
  }, ih = function(i, r, f, l) {
    let t = {};
    return i && (t.group = i), r && (t.having = r), f && (t.orderBy = f), l && (t.limitOffset = l), t;
  }, lh = function(i) {
    return i;
  }, th = function(i) {
    return i;
  }, ah = function(i) {
    return i;
  }, fh = function(i, r) {
    return r ? {
      expressionType: "aliasedexpression",
      bracketted: !0,
      expression: i,
      as: r[2],
      location: I()
    } : {
      bracketted: !0,
      ...i
    };
  }, oh = function(i) {
    return i;
  }, hh = function(i) {
    return i;
  }, ch = function(i) {
    return i;
  }, nh = function(i) {
    return i;
  }, uh = function(i, r) {
    let f = {};
    return i.toUpperCase() === "ASC" ? f = {
      asc: !0,
      ...r
    } : i.toUpperCase() === "DESC" && (f = {
      desc: !0,
      ...r
    }), f;
  }, ph = function(i) {
    return i;
  }, gh = function(i) {
    let r = [i[0]];
    return i[1] && r.push(i[1]), r;
  }, wh = function(i) {
    return {
      limit: parseInt(i.literal)
    };
  }, dh = function(i) {
    return {
      offset: parseInt(i.literal)
    };
  }, $h = function(i) {
    return i ? i[1] : null;
  }, vh = function(i, r) {
    let f = {};
    i.length && (f.prologue = i);
    let l = [];
    return r && (l = [r[1]], r[2] && (l = l.concat(r[2][3].update))), f.update = l, f;
  }, bh = function(i, r, f) {
    let l = {
      type: "load",
      silent: i,
      sourceGraph: r
    };
    return f && (l.destinyGraph = f[2]), l;
  }, Ah = function(i, r) {
    return {
      type: "clear",
      silent: i,
      destinyGraph: r
    };
  }, Ch = function(i, r) {
    return {
      type: "drop",
      silent: i,
      destinyGraph: r
    };
  }, _h = function(i, r) {
    return {
      type: "create",
      silent: i,
      destinyGraph: r
    };
  }, mh = function(i, r, f) {
    return {
      type: "add",
      silent: i,
      graphs: [r, f]
    };
  }, Eh = function(i, r, f) {
    return {
      type: "move",
      silent: i,
      graphs: [r, f]
    };
  }, yh = function(i, r, f) {
    return {
      type: "copy",
      silent: i,
      graphs: [r, f]
    };
  }, Ph = function(i) {
    return {
      type: "insertdata",
      insert: i
    };
  }, Lh = function(i) {
    return {
      type: "deletedata",
      delete: i
    };
  }, Th = function(i) {
    return {
      type: "deletewhere",
      delete: i
    };
  }, Rh = function(i, r, f, l) {
    let t = {
      type: "modify"
    };
    return i && (t.with = i[2]), r.length === 3 ? (t.delete = r[0], r[2] && (t.insert = r[2])) : t.insert = r, f.length && (t.using = f), t.where = l.graphPattern, t;
  }, Ih = function(i) {
    return i;
  }, Oh = function(i) {
    return i;
  }, Nh = function(i) {
    return i.length === 3 ? {
      named: !0,
      iri: i[2]
    } : {
      iri: i
    };
  }, Sh = function() {
    return "default";
  }, Fh = function(i) {
    return i;
  }, xh = function(i) {
    return i;
  }, Dh = function(i) {
    return i;
  }, Gh = function() {
    return "default";
  }, Uh = function() {
    return "named";
  }, Bh = function() {
    return "all";
  }, Hh = function(i) {
    return i;
  }, Mh = function(i) {
    return i;
  }, kh = function(i, r) {
    let f = [];
    return i && (f = f.concat(i)), r.forEach((l) => {
      f = f.concat(l[0]), l[2] && (f = f.concat(l[2]));
    }), f;
  }, jh = function(i, r) {
    return {
      graph: i,
      ...r
    };
  }, Xh = function(i, r) {
    let f = [i];
    return r && r[3] && (f = f.concat(r[3].triplePattern)), {
      triplePattern: f,
      location: I()
    };
  }, Vh = function(i) {
    return i;
  }, Wh = function(i, r) {
    let f = [];
    return i && f.push(i), r.forEach((l) => {
      f.push(l[0]), l[4] && f.push(l[4]);
    }), {
      graphPattern: f,
      location: I()
    };
  }, Yh = function(i, r) {
    let f = [i];
    return r && r[3] && (f = f.concat(r[3].triplePattern)), {
      type: "TriplesBlock",
      triplePattern: f,
      location: I()
    };
  }, Qh = function(i) {
    return {
      type: "OptionalGraphPattern",
      optional: i.graphPattern || i,
      location: I()
    };
  }, zh = function(i, r) {
    return {
      type: "GraphGraphPattern",
      graph: i,
      ...r
    };
  }, Zh = function(i, r, f) {
    let l = {
      type: "ServiceGraphPattern",
      service: r,
      pattern: f.graphPattern || f
    };
    return i && (l.silent = !0), l.location = I(), l;
  }, qh = function(i, r) {
    return {
      type: "Bind",
      bind: i,
      as: r,
      location: I()
    };
  }, Kh = function(i) {
    return i;
  }, Jh = function(i, r) {
    return {
      oneVar: i,
      data: r,
      location: I()
    };
  }, ec = function(i, r) {
    return {
      variables: i,
      data: r,
      location: I()
    };
  }, sc = function(i) {
    return i;
  }, rc = function(i) {
    return i;
  }, ic = function(i) {
    return {
      type: "MinusGraphPattern",
      minus: i.graphPattern || i,
      location: I()
    };
  }, lc = function(i, r) {
    return r.length ? {
      union: [i].concat(r.map((f) => f[3])),
      location: I()
    } : i;
  }, tc = function(i) {
    return {
      type: "Filter",
      filter: i,
      location: I()
    };
  }, ac = function(i, r) {
    return {
      functionRef: i,
      args: r.list,
      location: I()
    };
  }, fc = function() {
    return {
      list: []
    };
  }, oc = function(i, r, f) {
    return {
      distinct: !!i,
      list: [r, ...f]
    };
  }, hc = function() {
    return [];
  }, cc = function(i, r) {
    return [i, ...r];
  }, nc = function(i) {
    return i;
  }, uc = function(i, r) {
    let f = [i];
    return r && r[3] && (f = f.concat(r[3].triplePattern)), {
      triplePattern: f,
      location: I()
    };
  }, pc = function(i, r) {
    return {
      subject: i,
      properties: r
    };
  }, gc = function(i, r) {
    return {
      subject: i,
      properties: r
    };
  }, wc = function(i, r, f) {
    let l = [];
    return l.push({ predicate: i, objects: r }), f.forEach((t) => {
      t[3] && l.push({ predicate: t[3][0], objects: t[3][2] });
    }), l;
  }, dc = function() {
    return {
      a: !0,
      location: I()
    };
  }, $c = function(i, r) {
    return [i, ...r];
  }, vc = function(i, r) {
    return {
      subject: i,
      properties: r
    };
  }, bc = function(i, r) {
    return {
      subject: i,
      properties: r
    };
  }, Ac = function(i, r, f) {
    let l = [];
    return l.push({ predicate: i, objects: r }), f.forEach((t) => {
      t[3] && l.push({ predicate: t[3][0], objects: t[3][2] });
    }), l;
  }, Cc = function(i, r) {
    return [i, ...r];
  }, _c = function(i, r) {
    if (r.length) {
      let f = [i];
      for (let l = 0; l < r.length; l++)
        f.push(r[l][3]);
      return {
        alternative: f,
        location: I()
      };
    } else
      return i;
  }, mc = function(i, r) {
    if (r.length) {
      let f = [i];
      for (let l = 0; l < r.length; l++)
        f.push(r[l][3]);
      return {
        sequence: f,
        location: I()
      };
    } else
      return i;
  }, Ec = function(i, r) {
    return r && (i.modifier = r), i;
  }, yc = function(i) {
    return i.inverse = !0, i;
  }, Pc = function() {
    return {
      a: !0,
      location: I()
    };
  }, Lc = function(i) {
    return {
      bracketted: !0,
      ...i
    };
  }, Tc = function(i) {
    return {
      collection: i,
      location: I()
    };
  }, Rc = function(i) {
    return {
      blankNodeProperties: i,
      location: I()
    };
  }, Ic = function(i) {
    return {
      collection: i,
      location: I()
    };
  }, Oc = function(i) {
    return {
      blankNodeProperties: i,
      location: I()
    };
  }, Nc = function(i) {
    return i;
  }, Sc = function(i) {
    return i;
  }, Fc = function(i) {
    return i;
  }, xc = function(i) {
    return i;
  }, Dc = function(i) {
    return {
      ...i,
      location: I()
    };
  }, Gc = function(i, r) {
    return r.length ? {
      expressionType: "conditionalor",
      operands: [i, ...r]
    } : i;
  }, Uc = function(i, r) {
    return r.length ? {
      expressionType: "conditionaland",
      operands: [i, ...r]
    } : i;
  }, Bc = function(i, r) {
    if (r.length) {
      const f = i;
      let l = r[0][1].toUpperCase(), t = r[0][3];
      return l === "NOT" && (l += " " + r[0][3].toUpperCase(), t = r[0][5]), {
        expressionType: "relationalexpression",
        operator: l,
        op1: f,
        op2: t
      };
    } else
      return i;
  }, Hc = function(i, r) {
    if (r.length === 0)
      return i;
    let f = [];
    return r.forEach((l) => {
      l.length == 4 && f.push({
        operator: l[1],
        expression: l[3]
      });
    }), {
      expressionType: "additiveexpression",
      op1: i,
      ops: f
    };
  }, Mc = function(i, r) {
    return r.length ? {
      expressionType: "multiplicativeexpression",
      first: i,
      rest: r.map((f) => ({ operator: f[1], expression: f[3] }))
    } : i;
  }, kc = function(i) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "!",
      expression: i
    };
  }, jc = function(i) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "+",
      expression: i
    };
  }, Xc = function(i) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "-",
      expression: i
    };
  }, Vc = function(i) {
    return {
      expressionType: "atomic",
      value: i
    };
  }, Wc = function(i) {
    return {
      expressionType: "atomic",
      value: i
    };
  }, Yc = function(i) {
    return {
      expressionType: "atomic",
      value: i
    };
  }, Qc = function(i) {
    return {
      expressionType: "atomic",
      value: i
    };
  }, zc = function(i) {
    return {
      bracketted: !0,
      ...i
    };
  }, Zc = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "str",
      args: [i]
    };
  }, qc = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "lang",
      args: [i]
    };
  }, Kc = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "langMatches",
      args: [i, r]
    };
  }, Jc = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "datatype",
      args: [i]
    };
  }, en = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "bound",
      args: [i]
    };
  }, sn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "IRI",
      args: [i]
    };
  }, rn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "URI",
      args: [i]
    };
  }, ln = function(i) {
    const r = {
      expressionType: "builtincall",
      builtincall: "BNODE",
      args: null
    };
    return i.length === 5 && (r.args = [i[2]]), r;
  }, tn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "rand"
    };
  }, an = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "abs",
      args: [i]
    };
  }, fn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "ceil",
      args: [i]
    };
  }, on = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "floor",
      args: [i]
    };
  }, hn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "round",
      args: [i]
    };
  }, cn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "CONCAT",
      args: i
    };
  }, nn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "STRLEN",
      args: [i]
    };
  }, un = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "UCASE",
      args: [i]
    };
  }, pn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "LCASE",
      args: [i]
    };
  }, gn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "ENCODE_FOR_URI",
      args: [i]
    };
  }, wn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "CONTAINS",
      args: [i, r]
    };
  }, dn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRBEFORE",
      args: [i, r]
    };
  }, $n = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRSTARTS",
      args: [i, r]
    };
  }, vn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRENDS",
      args: [i, r]
    };
  }, bn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRAFTER",
      args: [i, r]
    };
  }, An = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "year",
      args: [i]
    };
  }, Cn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "month",
      args: [i]
    };
  }, _n = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "day",
      args: [i]
    };
  }, mn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "hours",
      args: [i]
    };
  }, En = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "minutes",
      args: [i]
    };
  }, yn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "seconds",
      args: [i]
    };
  }, Pn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "timezone",
      args: [i]
    };
  }, Ln = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "tz",
      args: [i]
    };
  }, Tn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "now"
    };
  }, Rn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "UUID"
    };
  }, In = function() {
    return {
      expressionType: "builtincall",
      builtincall: "STRUUID"
    };
  }, On = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "MD5",
      args: [i]
    };
  }, Nn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA1",
      args: [i]
    };
  }, Sn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA256",
      args: [i]
    };
  }, Fn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA384",
      args: [i]
    };
  }, xn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA512",
      args: [i]
    };
  }, Dn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "COALESCE",
      args: i
    };
  }, Gn = function(i, r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "IF",
      args: [i, r, f]
    };
  }, Un = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRLANG",
      args: [i, r]
    };
  }, Bn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRDT",
      args: [i, r]
    };
  }, Hn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "sameTerm",
      args: [i, r]
    };
  }, Mn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "isURI",
      args: [i]
    };
  }, kn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "isBlank",
      args: [i]
    };
  }, jn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "isLiteral",
      args: [i]
    };
  }, Xn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "isNumeric",
      args: [i]
    };
  }, Vn = function(i, r, f) {
    let l = {
      expressionType: "regex",
      text: i,
      pattern: r
    };
    return f && (l.flags = f[2]), l;
  }, Wn = function(i, r, f) {
    let l = [i, r];
    return f && l.push(f[2]), {
      expressionType: "builtincall",
      builtincall: "substr",
      args: l
    };
  }, Yn = function(i, r, f, l) {
    let t = [i, r, f];
    return l && t.push(l[2]), {
      expressionType: "builtincall",
      builtincall: "replace",
      args: t
    };
  }, Qn = function(i) {
    return {
      exists: i.graphPattern || i
    };
  }, zn = function(i) {
    return {
      notexists: i.graphPattern || i
    };
  }, Zn = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "count",
      distinct: !!i,
      expression: r
    };
  }, qn = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "sum",
      distinct: !!i,
      expression: r
    };
  }, Kn = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "min",
      distinct: !!i,
      expression: r
    };
  }, Jn = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "max",
      distinct: !!i,
      expression: r
    };
  }, eu = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "avg",
      distinct: !!i,
      expression: r
    };
  }, su = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "sample",
      distinct: !!i,
      expression: r
    };
  }, ru = function(i, r, f) {
    let l = null;
    return f != null && f.length && (l = f[7]), {
      expressionType: "aggregate",
      aggregateType: "group_concat",
      expression: r,
      separator: l,
      distinct: !!i
    };
  }, iu = function(i, r) {
    let f = {
      expressionType: "irireforfunction",
      iriref: i
    };
    return r && (f.args = r.list), f;
  }, lu = function(i, r) {
    return typeof r == "string" ? i.lang = r : r && (i.dataType = r[1]), i.location = I(), i;
  }, tu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !0
    };
  }, au = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !1
    };
  }, fu = function(i) {
    return {
      iri: i,
      location: I()
    };
  }, ou = function(i) {
    return i;
  }, hu = function(i) {
    return {
      iriPrefix: i[0],
      iriLocal: i[1],
      location: I()
    };
  }, cu = function(i) {
    return {
      iriPrefix: i,
      iriLocal: "",
      location: I()
    };
  }, nu = function(i) {
    return {
      blankNode: i,
      location: I()
    };
  }, uu = function() {
    return {
      blankNode: "[]",
      location: I()
    };
  }, pu = function(i) {
    return i.join("");
  }, gu = function(i) {
    return i || "";
  }, wu = function(i, r) {
    return [i, r];
  }, du = function() {
    return K();
  }, $u = function(i) {
    return {
      variable: i
    };
  }, vu = function(i) {
    return {
      varType: "$",
      variable: i
    };
  }, bu = function(i, r) {
    let f = i.join("");
    return r.length && (f += "-" + r[0][1].join("")), f.toLowerCase();
  }, Au = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#integer",
      literal: K()
    };
  }, Cu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#decimal",
      literal: K()
    };
  }, _u = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: K()
    };
  }, mu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: K()
    };
  }, Eu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: K()
    };
  }, yu = function(i) {
    return i.literal = "+" + i.literal, i;
  }, Pu = function(i) {
    return i.literal = "+" + i.literal, i;
  }, Lu = function(i) {
    return i.literal = "+" + i.literal, i;
  }, Tu = function(i) {
    return i.literal = "-" + i.literal, i;
  }, Ru = function(i) {
    return i.literal = "-" + i.literal, i;
  }, Iu = function(i) {
    return i.literal = "-" + i.literal, i;
  }, Ou = function(i) {
    return {
      quote: "'",
      literal: i.join("")
      // except ' \ LF CR
    };
  }, Nu = function(i) {
    return {
      quote: '"',
      literal: i.join("")
      // except " \ LF CR
    };
  }, Su = function(i) {
    return {
      quote: "'''",
      literal: i.map((r) => r[0] ? r[0] + r[1] : r[1]).join("")
    };
  }, Fu = function(i) {
    return {
      quote: '"""',
      literal: i.map((r) => r[0] ? r[0] + r[1] : r[1]).join("")
    };
  }, xu = function() {
    return K();
  }, Du = function() {
    return K();
  }, Gu = function() {
    return _l[I().start.offset] = K(), "";
  }, Uu = function() {
    return K();
  }, Bu = function() {
    return K();
  }, Hu = function() {
    return K();
  }, s = 0, d = 0, ms = [{ line: 1, column: 1 }], ae = 0, nr = [], Es;
  if ("startRule" in A) {
    if (!(A.startRule in S))
      throw new Error(`Can't start parsing from rule "` + A.startRule + '".');
    Y = S[A.startRule];
  }
  function K() {
    return h.substring(d, s);
  }
  function I() {
    return ur(d, s);
  }
  function v(i, r) {
    return { type: "literal", text: i, ignoreCase: r };
  }
  function F(i, r, f) {
    return { type: "class", parts: i, inverted: r, ignoreCase: f };
  }
  function Mu() {
    return { type: "end" };
  }
  function ki(i) {
    var r = ms[i], f;
    if (r)
      return r;
    for (f = i - 1; !ms[f]; )
      f--;
    for (r = ms[f], r = {
      line: r.line,
      column: r.column
    }; f < i; )
      h.charCodeAt(f) === 10 ? (r.line++, r.column = 1) : r.column++, f++;
    return ms[i] = r, r;
  }
  function ur(i, r, f) {
    var l = ki(i), t = ki(r), o = {
      source: T,
      start: {
        offset: i,
        line: l.line,
        column: l.column
      },
      end: {
        offset: r,
        line: t.line,
        column: t.column
      }
    };
    return o;
  }
  function p(i) {
    s < ae || (s > ae && (ae = s, nr = []), nr.push(i));
  }
  function ku(i, r, f) {
    return new kr(
      kr.buildMessage(i, r),
      i,
      r,
      f
    );
  }
  function ji() {
    var i, r, f, l, t, o;
    for (i = s, r = [], f = vl(); f !== e; )
      r.push(f), f = vl();
    for (f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (l = ju(), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      d = i, i = ko(r, l);
    } else
      s = i, i = e;
    return i;
  }
  function ju() {
    var i;
    return i = Xu(), i === e && (i = el()), i;
  }
  function Xu() {
    var i, r, f, l, t;
    for (i = s, r = Xi(), f = [], l = a(); l !== e; )
      f.push(l), l = a();
    return l = Vu(), l === e && (l = Yu(), l === e && (l = Qu(), l === e && (l = zu()))), l !== e ? (t = Ji(), d = i, i = jo(r, l, t)) : (s = i, i = e), i;
  }
  function Xi() {
    var i, r;
    for (i = [], r = Vi(), r === e && (r = Wi()); r !== e; )
      i.push(r), r = Vi(), r === e && (r = Wi());
    return i;
  }
  function Vi() {
    var i, r, f, l, t;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 4).toLowerCase() === he ? (f = h.substr(s, 4), s += 4) : (f = e, p(Ia)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      t = Nr(), t !== e ? (d = i, i = Xo(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Wi() {
    var i, r, f, l, t, o, c;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 6).toLowerCase() === q ? (f = h.substr(s, 6), s += 6) : (f = e, p(Oa)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = Sr(), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = Nr(), c !== e ? (d = i, i = Vo(t, c)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Vu() {
    var i, r, f, l, t, o, c, n;
    if (i = s, r = Yi(), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      for (l = [], t = fe(); t !== e; )
        l.push(t), t = fe();
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = Me(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Oe(), d = i, i = Wo(r, l, o, n);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Wu() {
    var i, r, f, l, t, o, c;
    if (i = s, r = Yi(), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = Me(), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        o = Oe(), c = Ji(), d = i, i = Yo(r, l, o, c);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Yi() {
    var i, r, f, l, t, o, c, n, u, g, w, $, b, m, L, R, N;
    if (i = s, h.substr(s, 6).toLowerCase() === we ? (r = h.substr(s, 6), s += 6) : (r = e, p(Na)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      for (h.substr(s, 8).toLowerCase() === O ? (l = h.substr(s, 8), s += 8) : (l = e, p(ue)), l === e && (h.substr(s, 7).toLowerCase() === x ? (l = h.substr(s, 7), s += 7) : (l = e, p(Sa))), l === e && (l = null), t = [], o = a(); o !== e; )
        t.push(o), o = a();
      for (o = [], c = s, n = [], u = a(); u !== e; )
        n.push(u), u = a();
      if (u = k(), u !== e ? (n = [n, u], c = n) : (s = c, c = e), c === e) {
        for (c = s, n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.charCodeAt(s) === 40 ? (u = C, s++) : (u = e, p(y)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          if (w = _(), w !== e) {
            for ($ = [], b = a(); b !== e; )
              $.push(b), b = a();
            if (h.substr(s, 2).toLowerCase() === ce ? (b = h.substr(s, 2), s += 2) : (b = e, p(gs)), b !== e) {
              for (m = [], L = a(); L !== e; )
                m.push(L), L = a();
              if (L = k(), L !== e) {
                for (R = [], N = a(); N !== e; )
                  R.push(N), N = a();
                h.charCodeAt(s) === 41 ? (N = E, s++) : (N = e, p(P)), N !== e ? (n = [n, u, g, w, $, b, m, L, R, N], c = n) : (s = c, c = e);
              } else
                s = c, c = e;
            } else
              s = c, c = e;
          } else
            s = c, c = e;
        } else
          s = c, c = e;
      }
      if (c !== e)
        for (; c !== e; ) {
          for (o.push(c), c = s, n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (u = k(), u !== e ? (n = [n, u], c = n) : (s = c, c = e), c === e) {
            for (c = s, n = [], u = a(); u !== e; )
              n.push(u), u = a();
            if (h.charCodeAt(s) === 40 ? (u = C, s++) : (u = e, p(y)), u !== e) {
              for (g = [], w = a(); w !== e; )
                g.push(w), w = a();
              if (w = _(), w !== e) {
                for ($ = [], b = a(); b !== e; )
                  $.push(b), b = a();
                if (h.substr(s, 2).toLowerCase() === ce ? (b = h.substr(s, 2), s += 2) : (b = e, p(gs)), b !== e) {
                  for (m = [], L = a(); L !== e; )
                    m.push(L), L = a();
                  if (L = k(), L !== e) {
                    for (R = [], N = a(); N !== e; )
                      R.push(N), N = a();
                    h.charCodeAt(s) === 41 ? (N = E, s++) : (N = e, p(P)), N !== e ? (n = [n, u, g, w, $, b, m, L, R, N], c = n) : (s = c, c = e);
                  } else
                    s = c, c = e;
                } else
                  s = c, c = e;
              } else
                s = c, c = e;
            } else
              s = c, c = e;
          }
        }
      else
        o = e;
      o === e && (h.charCodeAt(s) === 42 ? (o = se, s++) : (o = e, p(re))), o !== e ? (d = i, i = Qo(l, o)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Yu() {
    var i, r, f, l, t, o, c, n, u, g, w, $, b, m;
    if (i = s, h.substr(s, 9).toLowerCase() === Xr ? (r = h.substr(s, 9), s += 9) : (r = e, p(pi)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = Pp(), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        for (o = [], c = fe(); c !== e; )
          o.push(c), c = fe();
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (n = Me(), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          g = Oe(), d = i, i = zo(l, o, n, g);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    if (i === e)
      if (i = s, h.substr(s, 9).toLowerCase() === Xr ? (r = h.substr(s, 9), s += 9) : (r = e, p(pi)), r !== e) {
        for (f = [], l = a(); l !== e; )
          f.push(l), l = a();
        for (l = [], t = fe(); t !== e; )
          l.push(t), t = fe();
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (h.substr(s, 5).toLowerCase() === qe ? (o = h.substr(s, 5), s += 5) : (o = e, p(ws)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          if (h.charCodeAt(s) === 123 ? (n = de, s++) : (n = e, p(Ae)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            for (g = Se(), g === e && (g = null), w = [], $ = a(); $ !== e; )
              w.push($), $ = a();
            if (h.charCodeAt(s) === 125 ? ($ = $e, s++) : ($ = e, p(Ce)), $ !== e) {
              for (b = [], m = a(); m !== e; )
                b.push(m), m = a();
              m = Oe(), d = i, i = Zo(l, g, m);
            } else
              s = i, i = e;
          } else
            s = i, i = e;
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    return i;
  }
  function Qu() {
    var i, r, f, l, t, o, c, n, u, g;
    if (i = s, h.substr(s, 8).toLowerCase() === Ll ? (r = h.substr(s, 8), s += 8) : (r = e, p(Fa)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = [], t = xe(), t !== e)
        for (; t !== e; )
          l.push(t), t = xe();
      else
        l = e;
      if (l === e && (h.charCodeAt(s) === 42 ? (l = se, s++) : (l = e, p(re))), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        for (o = [], c = fe(); c !== e; )
          o.push(c), c = fe();
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        for (n = Me(), n === e && (n = null), u = [], g = a(); g !== e; )
          u.push(g), g = a();
        g = Oe(), d = i, i = qo(l, o, n, g);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function zu() {
    var i, r, f, l, t, o, c, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 3).toLowerCase() === Tl ? (f = h.substr(s, 3), s += 3) : (f = e, p(xa)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (t = [], o = fe(); o !== e; )
        t.push(o), o = fe();
      for (o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (c = Me(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Oe(), d = i, i = Ko(t, c, u);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function fe() {
    var i, r, f, l, t, o;
    if (i = s, h.substr(s, 4).toLowerCase() === Rl ? (r = h.substr(s, 4), s += 4) : (r = e, p(Da)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = Zu(), l === e && (l = qu()), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        d = i, i = Jo(l);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Zu() {
    var i, r, f;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    return f = V(), f !== e ? (d = i, i = eh(f)) : (s = i, i = e), i;
  }
  function qu() {
    var i, r, f, l;
    if (i = s, h.substr(s, 5).toLowerCase() === Gs ? (r = h.substr(s, 5), s += 5) : (r = e, p(qs)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      l = V(), l !== e ? (d = i, i = sh(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Me() {
    var i, r, f;
    for (i = s, h.substr(s, 5).toLowerCase() === qe ? (h.substr(s, 5), s += 5) : p(ws), r = [], f = a(); f !== e; )
      r.push(f), f = a();
    return f = ie(), f !== e ? (d = i, i = rh(f)) : (s = i, i = e), i;
  }
  function Oe() {
    var i, r, f, l, t;
    return i = s, r = Ku(), r === e && (r = null), f = Ju(), f === e && (f = null), l = ep(), l === e && (l = null), t = sp(), t === e && (t = null), d = i, i = ih(r, f, l, t), i;
  }
  function Ku() {
    var i, r, f, l, t, o, c;
    if (i = s, h.substr(s, 5).toLowerCase() === Il ? (r = h.substr(s, 5), s += 5) : (r = e, p(Ga)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (h.substr(s, 2).toLowerCase() === Vr ? (l = h.substr(s, 2), s += 2) : (l = e, p(gi)), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (o = [], c = Qi(), c !== e)
          for (; c !== e; )
            o.push(c), c = Qi();
        else
          o = e;
        o !== e ? (d = i, i = lh(o)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Qi() {
    var i, r, f, l, t, o, c, n, u, g, w;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (f = Pr(), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      d = i, i = th(f);
    } else
      s = i, i = e;
    if (i === e) {
      for (i = s, r = [], f = a(); f !== e; )
        r.push(f), f = a();
      if (f = cl(), f !== e) {
        for (l = [], t = a(); t !== e; )
          l.push(t), t = a();
        d = i, i = ah(f);
      } else
        s = i, i = e;
      if (i === e) {
        for (i = s, r = [], f = a(); f !== e; )
          r.push(f), f = a();
        if (h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
          for (l = [], t = a(); t !== e; )
            l.push(t), t = a();
          if (t = _(), t !== e) {
            for (o = [], c = a(); c !== e; )
              o.push(c), c = a();
            if (c = s, h.substr(s, 2).toLowerCase() === ce ? (n = h.substr(s, 2), s += 2) : (n = e, p(gs)), n !== e) {
              for (u = [], g = a(); g !== e; )
                u.push(g), g = a();
              g = k(), g !== e ? (n = [n, u, g], c = n) : (s = c, c = e);
            } else
              s = c, c = e;
            for (c === e && (c = null), n = [], u = a(); u !== e; )
              n.push(u), u = a();
            if (h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e) {
              for (g = [], w = a(); w !== e; )
                g.push(w), w = a();
              d = i, i = fh(t, c);
            } else
              s = i, i = e;
          } else
            s = i, i = e;
        } else
          s = i, i = e;
        if (i === e) {
          for (i = s, r = [], f = a(); f !== e; )
            r.push(f), f = a();
          if (f = k(), f !== e) {
            for (l = [], t = a(); t !== e; )
              l.push(t), t = a();
            d = i, i = oh(f);
          } else
            s = i, i = e;
        }
      }
    }
    return i;
  }
  function Ju() {
    var i, r, f, l, t;
    if (i = s, h.substr(s, 6).toLowerCase() === Ol ? (r = h.substr(s, 6), s += 6) : (r = e, p(Ua)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = [], t = zi(), t !== e)
        for (; t !== e; )
          l.push(t), t = zi();
      else
        l = e;
      l !== e ? (d = i, i = hh(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function zi() {
    var i, r, f, l;
    if (i = s, r = wr(), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      d = i, i = ch(r);
    } else
      s = i, i = e;
    return i;
  }
  function ep() {
    var i, r, f, l, t, o, c, n;
    if (i = s, h.substr(s, 5).toLowerCase() === Nl ? (r = h.substr(s, 5), s += 5) : (r = e, p(Ba)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (h.substr(s, 2).toLowerCase() === Vr ? (l = h.substr(s, 2), s += 2) : (l = e, p(gi)), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (o = [], c = Zi(), c !== e)
          for (; c !== e; )
            o.push(c), c = Zi();
        else
          o = e;
        if (o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          d = i, i = nh(o);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Zi() {
    var i, r, f, l, t, o;
    if (i = s, h.substr(s, 3).toLowerCase() === Sl ? (r = h.substr(s, 3), s += 3) : (r = e, p(Ha)), r === e && (h.substr(s, 4).toLowerCase() === Fl ? (r = h.substr(s, 4), s += 4) : (r = e, p(Ma))), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = yr(), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        d = i, i = uh(r, l);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    if (i === e)
      if (i = s, r = wr(), r === e && (r = k()), r !== e) {
        for (f = [], l = a(); l !== e; )
          f.push(l), l = a();
        d = i, i = ph(r);
      } else
        s = i, i = e;
    return i;
  }
  function sp() {
    var i, r, f, l;
    return i = s, r = s, f = qi(), f !== e ? (l = Ki(), l === e && (l = null), f = [f, l], r = f) : (s = r, r = e), r === e && (r = s, f = Ki(), f !== e ? (l = qi(), l === e && (l = null), f = [f, l], r = f) : (s = r, r = e)), r !== e && (d = i, r = gh(r)), i = r, i;
  }
  function qi() {
    var i, r, f, l, t, o;
    if (i = s, h.substr(s, 5).toLowerCase() === xl ? (r = h.substr(s, 5), s += 5) : (r = e, p(ka)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = Ve(), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        d = i, i = wh(l);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Ki() {
    var i, r, f, l, t, o;
    if (i = s, h.substr(s, 6).toLowerCase() === Dl ? (r = h.substr(s, 6), s += 6) : (r = e, p(ja)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = Ve(), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        d = i, i = dh(l);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Ji() {
    var i, r, f, l;
    return i = s, r = s, h.substr(s, 6).toLowerCase() === Wr ? (f = h.substr(s, 6), s += 6) : (f = e, p(wi)), f !== e ? (l = ol(), l !== e ? (f = [f, l], r = f) : (s = r, r = e)) : (s = r, r = e), r === e && (r = null), d = i, r = $h(r), i = r, i;
  }
  function el() {
    var i, r, f, l, t, o, c, n, u, g;
    for (i = s, r = Xi(), f = s, l = [], t = a(); t !== e; )
      l.push(t), t = a();
    if (t = rp(), t !== e) {
      for (o = s, c = [], n = a(); n !== e; )
        c.push(n), n = a();
      if (h.charCodeAt(s) === 59 ? (n = Le, s++) : (n = e, p(Re)), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        g = el(), c = [c, n, u, g], o = c;
      } else
        s = o, o = e;
      o === e && (o = null), l = [l, t, o], f = l;
    } else
      s = f, f = e;
    for (f === e && (f = null), l = [], t = a(); t !== e; )
      l.push(t), t = a();
    return d = i, i = vh(r, f), i;
  }
  function rp() {
    var i;
    return i = ip(), i === e && (i = lp(), i === e && (i = tp(), i === e && (i = fp(), i === e && (i = op(), i === e && (i = hp(), i === e && (i = ap(), i === e && (i = cp(), i === e && (i = np(), i === e && (i = up(), i === e && (i = pp())))))))))), i;
  }
  function ip() {
    var i, r, f, l, t, o, c, n, u, g, w;
    if (i = s, h.substr(s, 4).toLowerCase() === Gl ? (r = h.substr(s, 4), s += 4) : (r = e, p(Xa)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (l = h.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = V(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (n = s, h.substr(s, 4).toLowerCase() === Ul ? (u = h.substr(s, 4), s += 4) : (u = e, p(Va)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          w = pr(), w !== e ? (u = [u, g, w], n = u) : (s = n, n = e);
        } else
          s = n, n = e;
        n === e && (n = null), d = i, i = bh(l, o, n);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function lp() {
    var i, r, f, l, t, o;
    if (i = s, h.substr(s, 5).toLowerCase() === Bl ? (r = h.substr(s, 5), s += 5) : (r = e, p(Wa)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (l = h.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), t = [], o = a(); o !== e; )
        t.push(o), o = a();
      o = il(), o !== e ? (d = i, i = Ah(l, o)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function tp() {
    var i, r, f, l, t, o;
    if (i = s, h.substr(s, 4).toLowerCase() === Hl ? (r = h.substr(s, 4), s += 4) : (r = e, p(Ya)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (l = h.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), t = [], o = a(); o !== e; )
        t.push(o), o = a();
      o = il(), o !== e ? (d = i, i = Ch(l, o)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function ap() {
    var i, r, f, l, t, o;
    if (i = s, h.substr(s, 6).toLowerCase() === Ml ? (r = h.substr(s, 6), s += 6) : (r = e, p(Qa)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (l = h.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), t = [], o = a(); o !== e; )
        t.push(o), o = a();
      o = pr(), o !== e ? (d = i, i = _h(l, o)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function fp() {
    var i, r, f, l, t, o, c, n, u, g;
    if (i = s, h.substr(s, 3).toLowerCase() === kl ? (r = h.substr(s, 3), s += 3) : (r = e, p(za)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (l = h.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = Ne(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.substr(s, 2).toLowerCase() === Us ? (n = h.substr(s, 2), s += 2) : (n = e, p(Ks)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          g = Ne(), g !== e ? (d = i, i = mh(l, o, g)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function op() {
    var i, r, f, l, t, o, c, n, u, g;
    if (i = s, h.substr(s, 4).toLowerCase() === jl ? (r = h.substr(s, 4), s += 4) : (r = e, p(Za)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (l = h.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = Ne(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.substr(s, 2).toLowerCase() === Us ? (n = h.substr(s, 2), s += 2) : (n = e, p(Ks)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          g = Ne(), g !== e ? (d = i, i = Eh(l, o, g)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function hp() {
    var i, r, f, l, t, o, c, n, u, g;
    if (i = s, h.substr(s, 4).toLowerCase() === Xl ? (r = h.substr(s, 4), s += 4) : (r = e, p(qa)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (l = h.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = Ne(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.substr(s, 2).toLowerCase() === Us ? (n = h.substr(s, 2), s += 2) : (n = e, p(Ks)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          g = Ne(), g !== e ? (d = i, i = yh(l, o, g)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function cp() {
    var i, r, f, l, t, o;
    if (i = s, h.substr(s, 6).toLowerCase() === Yr ? (r = h.substr(s, 6), s += 6) : (r = e, p(di)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (h.substr(s, 4).toLowerCase() === Qr ? (l = h.substr(s, 4), s += 4) : (l = e, p($i)), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        o = ll(), o !== e ? (d = i, i = Ph(o)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function np() {
    var i, r, f, l, t;
    if (i = s, h.substr(s, 6).toLowerCase() === Bs ? (r = h.substr(s, 6), s += 6) : (r = e, p(Js)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      h.substr(s, 4).toLowerCase() === Qr ? (l = h.substr(s, 4), s += 4) : (l = e, p($i)), l !== e ? (t = ll(), t !== e ? (d = i, i = Lh(t)) : (s = i, i = e)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function up() {
    var i, r, f, l, t, o;
    if (i = s, h.substr(s, 6).toLowerCase() === Bs ? (r = h.substr(s, 6), s += 6) : (r = e, p(Js)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (h.substr(s, 5).toLowerCase() === qe ? (l = h.substr(s, 5), s += 5) : (l = e, p(ws)), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        o = gr(), o !== e ? (d = i, i = Th(o)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function pp() {
    var i, r, f, l, t, o, c, n, u, g, w;
    if (i = s, r = s, h.substr(s, 4).toLowerCase() === Vl ? (f = h.substr(s, 4), s += 4) : (f = e, p(Ka)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = V(), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        f = [f, l, t, o], r = f;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    if (r === e && (r = null), f = s, l = gp(), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      o = sl(), o === e && (o = null), l = [l, t, o], f = l;
    } else
      s = f, f = e;
    if (f === e && (f = sl()), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (t = [], o = rl(); o !== e; )
        t.push(o), o = rl();
      for (o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.substr(s, 5).toLowerCase() === qe ? (c = h.substr(s, 5), s += 5) : (c = e, p(ws)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (u = ie(), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          d = i, i = Rh(r, f, t, u);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function gp() {
    var i, r, f;
    return i = s, h.substr(s, 6).toLowerCase() === Bs ? (r = h.substr(s, 6), s += 6) : (r = e, p(Js)), r !== e ? (f = gr(), f !== e ? (d = i, i = Ih(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function sl() {
    var i, r, f;
    return i = s, h.substr(s, 6).toLowerCase() === Yr ? (r = h.substr(s, 6), s += 6) : (r = e, p(di)), r !== e ? (f = gr(), f !== e ? (d = i, i = Oh(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function rl() {
    var i, r, f, l, t, o, c, n;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 5).toLowerCase() === Wl ? (f = h.substr(s, 5), s += 5) : (f = e, p(Ja)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = V(), t === e)
        if (t = s, h.substr(s, 5).toLowerCase() === Gs ? (o = h.substr(s, 5), s += 5) : (o = e, p(qs)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = V(), n !== e ? (o = [o, c, n], t = o) : (s = t, t = e);
        } else
          s = t, t = e;
      t !== e ? (d = i, i = Nh(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Ne() {
    var i, r, f, l;
    if (i = s, h.substr(s, 7).toLowerCase() === zr ? (r = h.substr(s, 7), s += 7) : (r = e, p(vi)), r !== e && (d = i, r = Sh()), i = r, i === e) {
      for (i = s, h.substr(s, 5).toLowerCase() === Ke ? (r = h.substr(s, 5), s += 5) : (r = e, p(ds)), r === e && (r = null), f = [], l = a(); l !== e; )
        f.push(l), l = a();
      l = V(), l !== e ? (d = i, i = Fh(l)) : (s = i, i = e);
    }
    return i;
  }
  function pr() {
    var i, r, f, l;
    if (i = s, h.substr(s, 5).toLowerCase() === Ke ? (r = h.substr(s, 5), s += 5) : (r = e, p(ds)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      l = V(), l !== e ? (d = i, i = xh(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function il() {
    var i, r;
    return i = s, r = pr(), r !== e && (d = i, r = Dh(r)), i = r, i === e && (i = s, h.substr(s, 7).toLowerCase() === zr ? (r = h.substr(s, 7), s += 7) : (r = e, p(vi)), r !== e && (d = i, r = Gh()), i = r, i === e && (i = s, h.substr(s, 5).toLowerCase() === Gs ? (r = h.substr(s, 5), s += 5) : (r = e, p(qs)), r !== e && (d = i, r = Uh()), i = r, i === e && (i = s, h.substr(s, 3).toLowerCase() === Yl ? (r = h.substr(s, 3), s += 3) : (r = e, p(ef)), r !== e && (d = i, r = Bh()), i = r))), i;
  }
  function gr() {
    var i, r, f, l, t, o, c, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.charCodeAt(s) === 123 ? (f = de, s++) : (f = e, p(Ae)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (t = tl(), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 125 ? (c = $e, s++) : (c = e, p(Ce)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        d = i, i = Hh(t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function ll() {
    var i, r, f, l, t, o, c, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.charCodeAt(s) === 123 ? (f = de, s++) : (f = e, p(Ae)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (t = tl(), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 125 ? (c = $e, s++) : (c = e, p(Ce)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        d = i, i = Mh(t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function tl() {
    var i, r, f, l, t, o, c;
    for (i = s, r = Se(), r === e && (r = null), f = [], l = s, t = al(), t !== e ? (h.charCodeAt(s) === 46 ? (o = j, s++) : (o = e, p(X)), o === e && (o = null), c = Se(), c === e && (c = null), t = [t, o, c], l = t) : (s = l, l = e); l !== e; )
      f.push(l), l = s, t = al(), t !== e ? (h.charCodeAt(s) === 46 ? (o = j, s++) : (o = e, p(X)), o === e && (o = null), c = Se(), c === e && (c = null), t = [t, o, c], l = t) : (s = l, l = e);
    return d = i, i = kh(r, f), i;
  }
  function al() {
    var i, r, f, l, t, o, c, n, u, g, w, $, b;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 5).toLowerCase() === Ke ? (f = h.substr(s, 5), s += 5) : (f = e, p(ds)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = xe(), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 123 ? (c = de, s++) : (c = e, p(Ae)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          for (u = Se(), u === e && (u = null), g = [], w = a(); w !== e; )
            g.push(w), w = a();
          if (h.charCodeAt(s) === 125 ? (w = $e, s++) : (w = e, p(Ce)), w !== e) {
            for ($ = [], b = a(); b !== e; )
              $.push(b), b = a();
            d = i, i = jh(t, u);
          } else
            s = i, i = e;
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Se() {
    var i, r, f, l, t, o, c;
    if (i = s, r = pl(), r !== e) {
      for (f = s, l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (h.charCodeAt(s) === 46 ? (t = j, s++) : (t = e, p(X)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = Se(), c === e && (c = null), l = [l, t, o, c], f = l;
      } else
        s = f, f = e;
      f === e && (f = null), d = i, i = Xh(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function ie() {
    var i, r, f, l, t, o;
    if (i = s, h.charCodeAt(s) === 123 ? (r = de, s++) : (r = e, p(Ae)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = Wu(), l === e && (l = wp()), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        h.charCodeAt(s) === 125 ? (o = $e, s++) : (o = e, p(Ce)), o !== e ? (d = i, i = Vh(l)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function wp() {
    var i, r, f, l, t, o, c, n, u, g;
    for (i = s, r = ys(), r === e && (r = null), f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (l = [], t = s, o = fl(), o !== e) {
      for (c = [], n = a(); n !== e; )
        c.push(n), n = a();
      for (h.charCodeAt(s) === 46 ? (n = j, s++) : (n = e, p(X)), n === e && (n = null), u = [], g = a(); g !== e; )
        u.push(g), g = a();
      g = ys(), g === e && (g = null), o = [o, c, n, u, g], t = o;
    } else
      s = t, t = e;
    for (; t !== e; )
      if (l.push(t), t = s, o = fl(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        for (h.charCodeAt(s) === 46 ? (n = j, s++) : (n = e, p(X)), n === e && (n = null), u = [], g = a(); g !== e; )
          u.push(g), g = a();
        g = ys(), g === e && (g = null), o = [o, c, n, u, g], t = o;
      } else
        s = t, t = e;
    return d = i, i = Wh(r, l), i;
  }
  function ys() {
    var i, r, f, l, t, o, c;
    if (i = s, r = Tp(), r !== e) {
      for (f = s, l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (h.charCodeAt(s) === 46 ? (t = j, s++) : (t = e, p(X)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = ys(), c === e && (c = null), l = [l, t, o, c], f = l;
      } else
        s = f, f = e;
      f === e && (f = null), d = i, i = Yh(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function fl() {
    var i;
    return i = Ep(), i === e && (i = dp(), i === e && (i = mp(), i === e && (i = $p(), i === e && (i = vp(), i === e && (i = yp(), i === e && (i = bp(), i === e && (i = Ap()))))))), i;
  }
  function dp() {
    var i, r, f, l, t;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 8).toLowerCase() === Ql ? (f = h.substr(s, 8), s += 8) : (f = e, p(sf)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      t = ie(), t !== e ? (d = i, i = Qh(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function $p() {
    var i, r, f, l, t, o, c;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 5).toLowerCase() === Ke ? (f = h.substr(s, 5), s += 5) : (f = e, p(ds)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = xe(), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = ie(), c !== e ? (d = i, i = zh(t, c)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function vp() {
    var i, r, f, l, t, o, c, n;
    if (i = s, h.substr(s, 7).toLowerCase() === zl ? (r = h.substr(s, 7), s += 7) : (r = e, p(rf)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (l = h.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = xe(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = ie(), n !== e ? (d = i, i = Zh(l, o, n)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function bp() {
    var i, r, f, l, t, o, c, n, u, g, w, $, b;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 4).toLowerCase() === Zl ? (f = h.substr(s, 4), s += 4) : (f = e, p(lf)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (c = _(), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (h.substr(s, 2).toLowerCase() === ce ? (u = h.substr(s, 2), s += 2) : (u = e, p(gs)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (w = k(), w !== e) {
              for ($ = [], b = a(); b !== e; )
                $.push(b), b = a();
              h.charCodeAt(s) === 41 ? (b = E, s++) : (b = e, p(P)), b !== e ? (d = i, i = qh(c, w)) : (s = i, i = e);
            } else
              s = i, i = e;
          } else
            s = i, i = e;
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Ap() {
    var i, r, f, l, t;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 6).toLowerCase() === Wr ? (f = h.substr(s, 6), s += 6) : (f = e, p(wi)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      t = ol(), t !== e ? (d = i, i = Kh(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function ol() {
    var i;
    return i = Cp(), i === e && (i = _p()), i;
  }
  function Cp() {
    var i, r, f, l, t, o, c, n;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (f = k(), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (h.charCodeAt(s) === 123 ? (t = de, s++) : (t = e, p(Ae)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        for (c = [], n = Ps(); n !== e; )
          c.push(n), n = Ps();
        h.charCodeAt(s) === 125 ? (n = $e, s++) : (n = e, p(Ce)), n !== e ? (d = i, i = Jh(f, c)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function _p() {
    var i, r, f, l, t, o, c, n, u, g, w;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (t = [], o = k(); o !== e; )
        t.push(o), o = k();
      if (h.charCodeAt(s) === 41 ? (o = E, s++) : (o = e, p(P)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 123 ? (n = de, s++) : (n = e, p(Ae)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          for (g = [], w = hl(); w !== e; )
            g.push(w), w = hl();
          h.charCodeAt(s) === 125 ? (w = $e, s++) : (w = e, p(Ce)), w !== e ? (d = i, i = ec(t, g)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function hl() {
    var i, r, f, l, t, o, c;
    if (i = s, h.charCodeAt(s) === 40 ? (r = C, s++) : (r = e, p(y)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      for (l = [], t = Ps(); t !== e; )
        l.push(t), t = Ps();
      if (h.charCodeAt(s) === 41 ? (t = E, s++) : (t = e, p(P)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        d = i, i = sc(l);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Ps() {
    var i, r, f, l;
    if (i = s, r = V(), r === e && (r = Lr(), r === e && (r = Tr(), r === e && (r = Or(), r === e && (h.substr(s, 5) === Zr ? (r = Zr, s += 5) : (r = e, p(tf)))))), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      d = i, i = rc(r);
    } else
      s = i, i = e;
    return i;
  }
  function mp() {
    var i, r, f, l;
    if (i = s, h.substr(s, 5).toLowerCase() === ql ? (r = h.substr(s, 5), s += 5) : (r = e, p(af)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      l = ie(), l !== e ? (d = i, i = ic(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Ep() {
    var i, r, f, l, t, o, c, n;
    if (i = s, r = ie(), r !== e) {
      for (f = [], l = s, t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.substr(s, 5).toLowerCase() === qr ? (o = h.substr(s, 5), s += 5) : (o = e, p(bi)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = ie(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (f.push(l), l = s, t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (h.substr(s, 5).toLowerCase() === qr ? (o = h.substr(s, 5), s += 5) : (o = e, p(bi)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = ie(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
        } else
          s = l, l = e;
      }
      d = i, i = lc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function yp() {
    var i, r, f, l, t;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 6).toLowerCase() === Kl ? (f = h.substr(s, 6), s += 6) : (f = e, p(ff)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      t = wr(), t !== e ? (d = i, i = tc(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function wr() {
    var i;
    return i = yr(), i === e && (i = Pr(), i === e && (i = cl())), i;
  }
  function cl() {
    var i, r, f, l;
    if (i = s, r = V(), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      l = nl(), l !== e ? (d = i, i = ac(r, l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function nl() {
    var i, r, f, l, t, o, c, n, u, g, w, $;
    if (i = s, r = ye(), r !== e && (d = i, r = fc()), i = r, i === e)
      if (i = s, h.charCodeAt(s) === 40 ? (r = C, s++) : (r = e, p(y)), r !== e) {
        for (f = [], l = a(); l !== e; )
          f.push(l), l = a();
        for (h.substr(s, 8).toLowerCase() === O ? (l = h.substr(s, 8), s += 8) : (l = e, p(ue)), l === e && (l = null), t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (o = _(), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          if (n = [], u = s, h.charCodeAt(s) === 44 ? (g = D, s++) : (g = e, p(G)), g !== e) {
            for (w = [], $ = a(); $ !== e; )
              w.push($), $ = a();
            $ = _(), $ !== e ? u = $ : (s = u, u = e);
          } else
            s = u, u = e;
          for (; u !== e; )
            if (n.push(u), u = s, h.charCodeAt(s) === 44 ? (g = D, s++) : (g = e, p(G)), g !== e) {
              for (w = [], $ = a(); $ !== e; )
                w.push($), $ = a();
              $ = _(), $ !== e ? u = $ : (s = u, u = e);
            } else
              s = u, u = e;
          h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = i, i = oc(l, o, n)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    return i;
  }
  function Fe() {
    var i, r, f, l, t, o, c, n, u, g, w, $;
    if (i = s, r = ye(), r !== e && (d = i, r = hc()), i = r, i === e)
      if (i = s, h.charCodeAt(s) === 40 ? (r = C, s++) : (r = e, p(y)), r !== e) {
        for (f = [], l = a(); l !== e; )
          f.push(l), l = a();
        if (l = _(), l !== e) {
          for (t = [], o = a(); o !== e; )
            t.push(o), o = a();
          if (o = [], c = s, h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = _(), g !== e) {
              for (w = [], $ = a(); $ !== e; )
                w.push($), $ = a();
              c = g;
            } else
              s = c, c = e;
          } else
            s = c, c = e;
          for (; c !== e; )
            if (o.push(c), c = s, h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
              for (u = [], g = a(); g !== e; )
                u.push(g), g = a();
              if (g = _(), g !== e) {
                for (w = [], $ = a(); $ !== e; )
                  w.push($), $ = a();
                c = g;
              } else
                s = c, c = e;
            } else
              s = c, c = e;
          h.charCodeAt(s) === 41 ? (c = E, s++) : (c = e, p(P)), c !== e ? (d = i, i = cc(l, o)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    return i;
  }
  function Pp() {
    var i, r, f, l, t, o;
    if (i = s, h.charCodeAt(s) === 123 ? (r = de, s++) : (r = e, p(Ae)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      for (l = ul(), l === e && (l = null), t = [], o = a(); o !== e; )
        t.push(o), o = a();
      h.charCodeAt(s) === 125 ? (o = $e, s++) : (o = e, p(Ce)), o !== e ? (d = i, i = nc(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function ul() {
    var i, r, f, l, t, o, c;
    if (i = s, r = pl(), r !== e) {
      for (f = s, l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (h.charCodeAt(s) === 46 ? (t = j, s++) : (t = e, p(X)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = ul(), c === e && (c = null), l = [l, t, o, c], f = l;
      } else
        s = f, f = e;
      f === e && (f = null), d = i, i = uc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function pl() {
    var i, r, f, l, t;
    if (i = s, r = Rs(), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      l = dr(), l !== e ? (d = i, i = pc(r, l)) : (s = i, i = e);
    } else
      s = i, i = e;
    if (i === e) {
      for (i = s, r = [], f = a(); f !== e; )
        r.push(f), f = a();
      if (f = wl(), f !== e) {
        for (l = [], t = a(); t !== e; )
          l.push(t), t = a();
        t = Lp(), d = i, i = gc(f, t);
      } else
        s = i, i = e;
    }
    return i;
  }
  function Lp() {
    var i;
    return i = dr(), i === e && (i = null), i;
  }
  function dr() {
    var i, r, f, l, t, o, c, n, u, g, w, $, b;
    if (i = s, r = $r(), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = vr(), l !== e) {
        for (t = [], o = s, c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 59 ? (n = Le, s++) : (n = e, p(Re)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          if (g = s, w = $r(), w !== e) {
            for ($ = [], b = a(); b !== e; )
              $.push(b), b = a();
            b = vr(), b !== e ? (w = [w, $, b], g = w) : (s = g, g = e);
          } else
            s = g, g = e;
          g === e && (g = null), c = [c, n, u, g], o = c;
        } else
          s = o, o = e;
        for (; o !== e; ) {
          for (t.push(o), o = s, c = [], n = a(); n !== e; )
            c.push(n), n = a();
          if (h.charCodeAt(s) === 59 ? (n = Le, s++) : (n = e, p(Re)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = s, w = $r(), w !== e) {
              for ($ = [], b = a(); b !== e; )
                $.push(b), b = a();
              b = vr(), b !== e ? (w = [w, $, b], g = w) : (s = g, g = e);
            } else
              s = g, g = e;
            g === e && (g = null), c = [c, n, u, g], o = c;
          } else
            s = o, o = e;
        }
        d = i, i = wc(r, l, t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function $r() {
    var i, r;
    return i = xe(), i === e && (i = s, h.charCodeAt(s) === 97 ? (r = Je, s++) : (r = e, p($s)), r !== e && (d = i, r = dc()), i = r), i;
  }
  function vr() {
    var i, r, f, l, t, o, c, n;
    if (i = s, r = ke(), r !== e) {
      for (f = [], l = s, t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.charCodeAt(s) === 44 ? (o = D, s++) : (o = e, p(G)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = ke(), n !== e ? l = n : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (f.push(l), l = s, t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (h.charCodeAt(s) === 44 ? (o = D, s++) : (o = e, p(G)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = ke(), n !== e ? l = n : (s = l, l = e);
        } else
          s = l, l = e;
      }
      d = i, i = $c(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Tp() {
    var i, r, f, l, t;
    if (i = s, r = Rs(), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      l = br(), l !== e ? (d = i, i = vc(r, l)) : (s = i, i = e);
    } else
      s = i, i = e;
    if (i === e) {
      for (i = s, r = [], f = a(); f !== e; )
        r.push(f), f = a();
      if (f = dl(), f !== e) {
        for (l = [], t = a(); t !== e; )
          l.push(t), t = a();
        t = Rp(), d = i, i = bc(f, t);
      } else
        s = i, i = e;
    }
    return i;
  }
  function Rp() {
    var i;
    return i = br(), i === e && (i = null), i;
  }
  function br() {
    var i, r, f, l, t, o, c, n, u, g, w, $, b;
    if (i = s, r = Ls(), r === e && (r = k()), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = Ar(), l !== e) {
        for (t = [], o = s, c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 59 ? (n = Le, s++) : (n = e, p(Re)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          if (g = s, w = Ls(), w === e && (w = k()), w !== e) {
            for ($ = [], b = a(); b !== e; )
              $.push(b), b = a();
            b = Ar(), b !== e ? (w = [w, $, b], g = w) : (s = g, g = e);
          } else
            s = g, g = e;
          g === e && (g = null), c = [c, n, u, g], o = c;
        } else
          s = o, o = e;
        for (; o !== e; ) {
          for (t.push(o), o = s, c = [], n = a(); n !== e; )
            c.push(n), n = a();
          if (h.charCodeAt(s) === 59 ? (n = Le, s++) : (n = e, p(Re)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = s, w = Ls(), w === e && (w = k()), w !== e) {
              for ($ = [], b = a(); b !== e; )
                $.push(b), b = a();
              b = Ar(), b !== e ? (w = [w, $, b], g = w) : (s = g, g = e);
            } else
              s = g, g = e;
            g === e && (g = null), c = [c, n, u, g], o = c;
          } else
            s = o, o = e;
        }
        d = i, i = Ac(r, l, t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Ar() {
    var i, r, f, l, t, o, c, n;
    if (i = s, r = je(), r !== e) {
      for (f = [], l = s, t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.charCodeAt(s) === 44 ? (o = D, s++) : (o = e, p(G)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = je(), n !== e ? l = n : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (f.push(l), l = s, t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (h.charCodeAt(s) === 44 ? (o = D, s++) : (o = e, p(G)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = je(), n !== e ? l = n : (s = l, l = e);
        } else
          s = l, l = e;
      }
      d = i, i = Cc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Ls() {
    var i, r, f, l, t, o, c, n;
    if (i = s, r = Cr(), r !== e) {
      for (f = [], l = s, t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.charCodeAt(s) === 124 ? (o = es, s++) : (o = e, p(vs)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Cr(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (f.push(l), l = s, t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (h.charCodeAt(s) === 124 ? (o = es, s++) : (o = e, p(vs)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = Cr(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
        } else
          s = l, l = e;
      }
      d = i, i = _c(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Cr() {
    var i, r, f, l, t, o, c, n;
    if (i = s, r = _r(), r !== e) {
      for (f = [], l = s, t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.charCodeAt(s) === 47 ? (o = ne, s++) : (o = e, p(pe)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = _r(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (f.push(l), l = s, t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (h.charCodeAt(s) === 47 ? (o = ne, s++) : (o = e, p(pe)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = _r(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
        } else
          s = l, l = e;
      }
      d = i, i = mc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function gl() {
    var i, r, f;
    return i = s, r = Op(), r !== e ? (f = Ip(), f === e && (f = null), d = i, i = Ec(r, f)) : (s = i, i = e), i;
  }
  function _r() {
    var i, r, f;
    return i = gl(), i === e && (i = s, h.charCodeAt(s) === 94 ? (r = Kr, s++) : (r = e, p(Ai)), r !== e ? (f = gl(), f !== e ? (d = i, i = yc(f)) : (s = i, i = e)) : (s = i, i = e)), i;
  }
  function Ip() {
    var i;
    return h.charCodeAt(s) === 63 ? (i = Hs, s++) : (i = e, p(er)), i === e && (h.charCodeAt(s) === 42 ? (i = se, s++) : (i = e, p(re)), i === e && (h.charCodeAt(s) === 43 ? (i = be, s++) : (i = e, p(me)))), i;
  }
  function Op() {
    var i, r, f, l;
    return i = V(), i === e && (i = s, h.charCodeAt(s) === 97 ? (r = Je, s++) : (r = e, p($s)), r !== e && (d = i, r = Pc()), i = r, i === e && (i = s, h.charCodeAt(s) === 33 ? (r = Ms, s++) : (r = e, p(sr)), r !== e ? (f = Np(), f !== e ? (r = [r, f], i = r) : (s = i, i = e)) : (s = i, i = e), i === e && (i = s, h.charCodeAt(s) === 40 ? (r = C, s++) : (r = e, p(y)), r !== e ? (f = Ls(), f !== e ? (h.charCodeAt(s) === 41 ? (l = E, s++) : (l = e, p(P)), l !== e ? (d = i, i = Lc(f)) : (s = i, i = e)) : (s = i, i = e)) : (s = i, i = e)))), i;
  }
  function Np() {
    var i, r, f, l, t, o, c, n;
    if (i = Ts(), i === e)
      if (i = s, h.charCodeAt(s) === 40 ? (r = C, s++) : (r = e, p(y)), r !== e) {
        if (f = s, l = Ts(), l !== e) {
          for (t = [], o = s, h.charCodeAt(s) === 124 ? (c = es, s++) : (c = e, p(vs)), c !== e ? (n = Ts(), n !== e ? (c = [c, n], o = c) : (s = o, o = e)) : (s = o, o = e); o !== e; )
            t.push(o), o = s, h.charCodeAt(s) === 124 ? (c = es, s++) : (c = e, p(vs)), c !== e ? (n = Ts(), n !== e ? (c = [c, n], o = c) : (s = o, o = e)) : (s = o, o = e);
          l = [l, t], f = l;
        } else
          s = f, f = e;
        f === e && (f = null), h.charCodeAt(s) === 41 ? (l = E, s++) : (l = e, p(P)), l !== e ? (r = [r, f, l], i = r) : (s = i, i = e);
      } else
        s = i, i = e;
    return i;
  }
  function Ts() {
    var i, r, f;
    return i = V(), i === e && (h.charCodeAt(s) === 97 ? (i = Je, s++) : (i = e, p($s)), i === e && (i = s, h.charCodeAt(s) === 94 ? (r = Kr, s++) : (r = e, p(Ai)), r !== e ? (f = V(), f === e && (h.charCodeAt(s) === 97 ? (f = Je, s++) : (f = e, p($s))), f !== e ? (r = [r, f], i = r) : (s = i, i = e)) : (s = i, i = e))), i;
  }
  function wl() {
    var i, r;
    return i = s, r = xp(), r !== e && (d = i, r = Tc(r)), i = r, i === e && (i = Sp()), i;
  }
  function Sp() {
    var i, r, f, l, t, o, c, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.charCodeAt(s) === 91 ? (f = ks, s++) : (f = e, p(rr)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = dr(), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 93 ? (c = js, s++) : (c = e, p(ir)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          d = i, i = Rc(t);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function dl() {
    var i, r;
    return i = s, r = Dp(), r !== e && (d = i, r = Ic(r)), i = r, i === e && (i = Fp()), i;
  }
  function Fp() {
    var i, r, f, l, t, o, c, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.charCodeAt(s) === 91 ? (f = ks, s++) : (f = e, p(rr)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = br(), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 93 ? (c = js, s++) : (c = e, p(ir)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          d = i, i = Oc(t);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function xp() {
    var i, r, f, l, t, o, c, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = [], o = ke(), o !== e)
        for (; o !== e; )
          t.push(o), o = ke();
      else
        t = e;
      if (t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 41 ? (c = E, s++) : (c = e, p(P)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          d = i, i = Nc(t);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Dp() {
    var i, r, f, l, t, o, c, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = [], o = je(), o !== e)
        for (; o !== e; )
          t.push(o), o = je();
      else
        t = e;
      if (t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 41 ? (c = E, s++) : (c = e, p(P)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          d = i, i = Sc(t);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function ke() {
    var i, r, f;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    return f = Rs(), f === e && (f = wl()), f !== e ? (d = i, i = Fc(f)) : (s = i, i = e), i;
  }
  function je() {
    var i, r, f;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    return f = Rs(), f === e && (f = dl()), f !== e ? (d = i, i = xc(f)) : (s = i, i = e), i;
  }
  function Rs() {
    var i;
    return i = k(), i === e && (i = Gp()), i;
  }
  function xe() {
    var i;
    return i = k(), i === e && (i = V()), i;
  }
  function k() {
    var i, r, f, l, t;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (f = Zp(), f === e && (f = qp()), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      d = i, i = Dc(f);
    } else
      s = i, i = e;
    return i;
  }
  function Gp() {
    var i;
    return i = V(), i === e && (i = Lr(), i === e && (i = Tr(), i === e && (i = Or(), i === e && (i = Yp(), i === e && (i = ye()))))), i;
  }
  function _() {
    var i, r, f, l, t, o, c, n;
    if (i = s, r = mr(), r !== e) {
      for (f = [], l = s, t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.substr(s, 2) === ss ? (o = ss, s += 2) : (o = e, p(Ci)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = mr(), n !== e ? l = n : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (f.push(l), l = s, t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (h.substr(s, 2) === ss ? (o = ss, s += 2) : (o = e, p(Ci)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = mr(), n !== e ? l = n : (s = l, l = e);
        } else
          s = l, l = e;
      }
      d = i, i = Gc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function mr() {
    var i, r, f, l, t, o, c, n;
    if (i = s, r = Er(), r !== e) {
      for (f = [], l = s, t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.substr(s, 2) === rs ? (o = rs, s += 2) : (o = e, p(_i)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Er(), n !== e ? l = n : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (f.push(l), l = s, t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (h.substr(s, 2) === rs ? (o = rs, s += 2) : (o = e, p(_i)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = Er(), n !== e ? l = n : (s = l, l = e);
        } else
          s = l, l = e;
      }
      d = i, i = Uc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Er() {
    var i, r, f, l, t, o, c, n, u, g;
    if (i = s, r = z(), r !== e) {
      for (f = [], l = s, t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.charCodeAt(s) === 61 ? (o = is, s++) : (o = e, p(bs)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
      } else
        s = l, l = e;
      if (l === e) {
        for (l = s, t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (h.substr(s, 2) === ls ? (o = ls, s += 2) : (o = e, p(mi)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e) {
          for (l = s, t = [], o = a(); o !== e; )
            t.push(o), o = a();
          if (h.charCodeAt(s) === 60 ? (o = Xs, s++) : (o = e, p(lr)), o !== e) {
            for (c = [], n = a(); n !== e; )
              c.push(n), n = a();
            n = z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
          } else
            s = l, l = e;
          if (l === e) {
            for (l = s, t = [], o = a(); o !== e; )
              t.push(o), o = a();
            if (h.charCodeAt(s) === 62 ? (o = Vs, s++) : (o = e, p(tr)), o !== e) {
              for (c = [], n = a(); n !== e; )
                c.push(n), n = a();
              n = z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
            } else
              s = l, l = e;
            if (l === e) {
              for (l = s, t = [], o = a(); o !== e; )
                t.push(o), o = a();
              if (h.substr(s, 2) === ts ? (o = ts, s += 2) : (o = e, p(Ei)), o !== e) {
                for (c = [], n = a(); n !== e; )
                  c.push(n), n = a();
                n = z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
              } else
                s = l, l = e;
              if (l === e) {
                for (l = s, t = [], o = a(); o !== e; )
                  t.push(o), o = a();
                if (h.substr(s, 2) === as ? (o = as, s += 2) : (o = e, p(yi)), o !== e) {
                  for (c = [], n = a(); n !== e; )
                    c.push(n), n = a();
                  n = z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
                } else
                  s = l, l = e;
                if (l === e) {
                  for (l = s, t = [], o = a(); o !== e; )
                    t.push(o), o = a();
                  if (h.substr(s, 2).toLowerCase() === fs ? (o = h.substr(s, 2), s += 2) : (o = e, p(As)), o !== e) {
                    for (c = [], n = a(); n !== e; )
                      c.push(n), n = a();
                    n = Fe(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
                  } else
                    s = l, l = e;
                  if (l === e) {
                    for (l = s, t = [], o = a(); o !== e; )
                      t.push(o), o = a();
                    if (h.substr(s, 3).toLowerCase() === Ws ? (o = h.substr(s, 3), s += 3) : (o = e, p(ar)), o !== e) {
                      for (c = [], n = a(); n !== e; )
                        c.push(n), n = a();
                      if (h.substr(s, 2).toLowerCase() === fs ? (n = h.substr(s, 2), s += 2) : (n = e, p(As)), n !== e) {
                        for (u = [], g = a(); g !== e; )
                          u.push(g), g = a();
                        g = Fe(), g !== e ? (t = [t, o, c, n, u, g], l = t) : (s = l, l = e);
                      } else
                        s = l, l = e;
                    } else
                      s = l, l = e;
                  }
                }
              }
            }
          }
        }
      }
      for (; l !== e; ) {
        for (f.push(l), l = s, t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (h.charCodeAt(s) === 61 ? (o = is, s++) : (o = e, p(bs)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e) {
          for (l = s, t = [], o = a(); o !== e; )
            t.push(o), o = a();
          if (h.substr(s, 2) === ls ? (o = ls, s += 2) : (o = e, p(mi)), o !== e) {
            for (c = [], n = a(); n !== e; )
              c.push(n), n = a();
            n = z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
          } else
            s = l, l = e;
          if (l === e) {
            for (l = s, t = [], o = a(); o !== e; )
              t.push(o), o = a();
            if (h.charCodeAt(s) === 60 ? (o = Xs, s++) : (o = e, p(lr)), o !== e) {
              for (c = [], n = a(); n !== e; )
                c.push(n), n = a();
              n = z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
            } else
              s = l, l = e;
            if (l === e) {
              for (l = s, t = [], o = a(); o !== e; )
                t.push(o), o = a();
              if (h.charCodeAt(s) === 62 ? (o = Vs, s++) : (o = e, p(tr)), o !== e) {
                for (c = [], n = a(); n !== e; )
                  c.push(n), n = a();
                n = z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
              } else
                s = l, l = e;
              if (l === e) {
                for (l = s, t = [], o = a(); o !== e; )
                  t.push(o), o = a();
                if (h.substr(s, 2) === ts ? (o = ts, s += 2) : (o = e, p(Ei)), o !== e) {
                  for (c = [], n = a(); n !== e; )
                    c.push(n), n = a();
                  n = z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
                } else
                  s = l, l = e;
                if (l === e) {
                  for (l = s, t = [], o = a(); o !== e; )
                    t.push(o), o = a();
                  if (h.substr(s, 2) === as ? (o = as, s += 2) : (o = e, p(yi)), o !== e) {
                    for (c = [], n = a(); n !== e; )
                      c.push(n), n = a();
                    n = z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
                  } else
                    s = l, l = e;
                  if (l === e) {
                    for (l = s, t = [], o = a(); o !== e; )
                      t.push(o), o = a();
                    if (h.substr(s, 2).toLowerCase() === fs ? (o = h.substr(s, 2), s += 2) : (o = e, p(As)), o !== e) {
                      for (c = [], n = a(); n !== e; )
                        c.push(n), n = a();
                      n = Fe(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
                    } else
                      s = l, l = e;
                    if (l === e) {
                      for (l = s, t = [], o = a(); o !== e; )
                        t.push(o), o = a();
                      if (h.substr(s, 3).toLowerCase() === Ws ? (o = h.substr(s, 3), s += 3) : (o = e, p(ar)), o !== e) {
                        for (c = [], n = a(); n !== e; )
                          c.push(n), n = a();
                        if (h.substr(s, 2).toLowerCase() === fs ? (n = h.substr(s, 2), s += 2) : (n = e, p(As)), n !== e) {
                          for (u = [], g = a(); g !== e; )
                            u.push(g), g = a();
                          g = Fe(), g !== e ? (t = [t, o, c, n, u, g], l = t) : (s = l, l = e);
                        } else
                          s = l, l = e;
                      } else
                        s = l, l = e;
                    }
                  }
                }
              }
            }
          }
        }
      }
      d = i, i = Bc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function z() {
    var i, r, f, l, t, o, c, n, u, g, w;
    if (i = s, r = Xe(), r !== e) {
      for (f = [], l = s, t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.charCodeAt(s) === 43 ? (o = be, s++) : (o = e, p(me)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Xe(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
      } else
        s = l, l = e;
      if (l === e) {
        for (l = s, t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (h.charCodeAt(s) === 45 ? (o = le, s++) : (o = e, p(te)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = Xe(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e)
          if (l = s, t = Rr(), t === e && (t = Ir()), t !== e) {
            for (o = [], c = s, n = [], u = a(); u !== e; )
              n.push(u), u = a();
            if (h.charCodeAt(s) === 42 ? (u = se, s++) : (u = e, p(re)), u !== e) {
              for (g = [], w = a(); w !== e; )
                g.push(w), w = a();
              w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
            } else
              s = c, c = e;
            if (c === e) {
              for (c = s, n = [], u = a(); u !== e; )
                n.push(u), u = a();
              if (h.charCodeAt(s) === 47 ? (u = ne, s++) : (u = e, p(pe)), u !== e) {
                for (g = [], w = a(); w !== e; )
                  g.push(w), w = a();
                w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
              } else
                s = c, c = e;
            }
            for (; c !== e; ) {
              for (o.push(c), c = s, n = [], u = a(); u !== e; )
                n.push(u), u = a();
              if (h.charCodeAt(s) === 42 ? (u = se, s++) : (u = e, p(re)), u !== e) {
                for (g = [], w = a(); w !== e; )
                  g.push(w), w = a();
                w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
              } else
                s = c, c = e;
              if (c === e) {
                for (c = s, n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (h.charCodeAt(s) === 47 ? (u = ne, s++) : (u = e, p(pe)), u !== e) {
                  for (g = [], w = a(); w !== e; )
                    g.push(w), w = a();
                  w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
                } else
                  s = c, c = e;
              }
            }
            t = [t, o], l = t;
          } else
            s = l, l = e;
      }
      for (; l !== e; ) {
        for (f.push(l), l = s, t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (h.charCodeAt(s) === 43 ? (o = be, s++) : (o = e, p(me)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = Xe(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e) {
          for (l = s, t = [], o = a(); o !== e; )
            t.push(o), o = a();
          if (h.charCodeAt(s) === 45 ? (o = le, s++) : (o = e, p(te)), o !== e) {
            for (c = [], n = a(); n !== e; )
              c.push(n), n = a();
            n = Xe(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
          } else
            s = l, l = e;
          if (l === e)
            if (l = s, t = Rr(), t === e && (t = Ir()), t !== e) {
              for (o = [], c = s, n = [], u = a(); u !== e; )
                n.push(u), u = a();
              if (h.charCodeAt(s) === 42 ? (u = se, s++) : (u = e, p(re)), u !== e) {
                for (g = [], w = a(); w !== e; )
                  g.push(w), w = a();
                w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
              } else
                s = c, c = e;
              if (c === e) {
                for (c = s, n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (h.charCodeAt(s) === 47 ? (u = ne, s++) : (u = e, p(pe)), u !== e) {
                  for (g = [], w = a(); w !== e; )
                    g.push(w), w = a();
                  w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
                } else
                  s = c, c = e;
              }
              for (; c !== e; ) {
                for (o.push(c), c = s, n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (h.charCodeAt(s) === 42 ? (u = se, s++) : (u = e, p(re)), u !== e) {
                  for (g = [], w = a(); w !== e; )
                    g.push(w), w = a();
                  w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
                } else
                  s = c, c = e;
                if (c === e) {
                  for (c = s, n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  if (h.charCodeAt(s) === 47 ? (u = ne, s++) : (u = e, p(pe)), u !== e) {
                    for (g = [], w = a(); w !== e; )
                      g.push(w), w = a();
                    w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
                  } else
                    s = c, c = e;
                }
              }
              t = [t, o], l = t;
            } else
              s = l, l = e;
        }
      }
      d = i, i = Hc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Xe() {
    var i, r, f, l, t, o, c, n;
    if (i = s, r = Z(), r !== e) {
      for (f = [], l = s, t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.charCodeAt(s) === 42 ? (o = se, s++) : (o = e, p(re)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
      } else
        s = l, l = e;
      if (l === e) {
        for (l = s, t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (h.charCodeAt(s) === 47 ? (o = ne, s++) : (o = e, p(pe)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = Z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
        } else
          s = l, l = e;
      }
      for (; l !== e; ) {
        for (f.push(l), l = s, t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (h.charCodeAt(s) === 42 ? (o = se, s++) : (o = e, p(re)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = Z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e) {
          for (l = s, t = [], o = a(); o !== e; )
            t.push(o), o = a();
          if (h.charCodeAt(s) === 47 ? (o = ne, s++) : (o = e, p(pe)), o !== e) {
            for (c = [], n = a(); n !== e; )
              c.push(n), n = a();
            n = Z(), n !== e ? (t = [t, o, c, n], l = t) : (s = l, l = e);
          } else
            s = l, l = e;
        }
      }
      d = i, i = Mc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Z() {
    var i, r, f, l;
    if (i = s, h.charCodeAt(s) === 33 ? (r = Ms, s++) : (r = e, p(sr)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      l = Is(), l !== e ? (d = i, i = kc(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    if (i === e) {
      if (i = s, h.charCodeAt(s) === 43 ? (r = be, s++) : (r = e, p(me)), r !== e) {
        for (f = [], l = a(); l !== e; )
          f.push(l), l = a();
        l = Is(), l !== e ? (d = i, i = jc(l)) : (s = i, i = e);
      } else
        s = i, i = e;
      if (i === e) {
        if (i = s, h.charCodeAt(s) === 45 ? (r = le, s++) : (r = e, p(te)), r !== e) {
          for (f = [], l = a(); l !== e; )
            f.push(l), l = a();
          l = Is(), l !== e ? (d = i, i = Xc(l)) : (s = i, i = e);
        } else
          s = i, i = e;
        i === e && (i = Is());
      }
    }
    return i;
  }
  function Is() {
    var i, r;
    return i = yr(), i === e && (i = Pr(), i === e && (i = Xp(), i === e && (i = s, r = Lr(), r !== e && (d = i, r = Vc(r)), i = r, i === e && (i = s, r = Tr(), r !== e && (d = i, r = Wc(r)), i = r, i === e && (i = s, r = Or(), r !== e && (d = i, r = Yc(r)), i = r, i === e && (i = s, r = k(), r !== e && (d = i, r = Qc(r)), i = r)))))), i;
  }
  function yr() {
    var i, r, f, l, t, o;
    if (i = s, h.charCodeAt(s) === 40 ? (r = C, s++) : (r = e, p(y)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = _(), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        h.charCodeAt(s) === 41 ? (o = E, s++) : (o = e, p(P)), o !== e ? (d = i, i = zc(l)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Pr() {
    var i, r, f, l, t, o, c, n, u, g, w, $, b, m, L, R;
    if (i = jp(), i === e) {
      if (i = s, h.substr(s, 3).toLowerCase() === Jl ? (r = h.substr(s, 3), s += 3) : (r = e, p(of)), r !== e) {
        for (f = [], l = a(); l !== e; )
          f.push(l), l = a();
        if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
          for (t = [], o = a(); o !== e; )
            t.push(o), o = a();
          if (o = _(), o !== e) {
            for (c = [], n = a(); n !== e; )
              c.push(n), n = a();
            h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Zc(o)) : (s = i, i = e);
          } else
            s = i, i = e;
        } else
          s = i, i = e;
      } else
        s = i, i = e;
      if (i === e) {
        if (i = s, h.substr(s, 4).toLowerCase() === et ? (r = h.substr(s, 4), s += 4) : (r = e, p(hf)), r !== e) {
          for (f = [], l = a(); l !== e; )
            f.push(l), l = a();
          if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
            for (t = [], o = a(); o !== e; )
              t.push(o), o = a();
            if (o = _(), o !== e) {
              for (c = [], n = a(); n !== e; )
                c.push(n), n = a();
              h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = qc(o)) : (s = i, i = e);
            } else
              s = i, i = e;
          } else
            s = i, i = e;
        } else
          s = i, i = e;
        if (i === e) {
          if (i = s, h.substr(s, 11).toLowerCase() === st ? (r = h.substr(s, 11), s += 11) : (r = e, p(cf)), r !== e) {
            for (f = [], l = a(); l !== e; )
              f.push(l), l = a();
            if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
              for (t = [], o = a(); o !== e; )
                t.push(o), o = a();
              if (o = _(), o !== e) {
                for (c = [], n = a(); n !== e; )
                  c.push(n), n = a();
                if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                  for (u = [], g = a(); g !== e; )
                    u.push(g), g = a();
                  if (g = _(), g !== e) {
                    for (w = [], $ = a(); $ !== e; )
                      w.push($), $ = a();
                    h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = Kc(o, g)) : (s = i, i = e);
                  } else
                    s = i, i = e;
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
            } else
              s = i, i = e;
          } else
            s = i, i = e;
          if (i === e) {
            if (i = s, h.substr(s, 8).toLowerCase() === rt ? (r = h.substr(s, 8), s += 8) : (r = e, p(nf)), r !== e) {
              for (f = [], l = a(); l !== e; )
                f.push(l), l = a();
              if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                for (t = [], o = a(); o !== e; )
                  t.push(o), o = a();
                if (o = _(), o !== e) {
                  for (c = [], n = a(); n !== e; )
                    c.push(n), n = a();
                  h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Jc(o)) : (s = i, i = e);
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
            } else
              s = i, i = e;
            if (i === e) {
              if (i = s, h.substr(s, 5).toLowerCase() === it ? (r = h.substr(s, 5), s += 5) : (r = e, p(uf)), r !== e) {
                for (f = [], l = a(); l !== e; )
                  f.push(l), l = a();
                if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                  for (t = [], o = a(); o !== e; )
                    t.push(o), o = a();
                  if (o = k(), o !== e) {
                    for (c = [], n = a(); n !== e; )
                      c.push(n), n = a();
                    h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = en(o)) : (s = i, i = e);
                  } else
                    s = i, i = e;
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
              if (i === e) {
                if (i = s, h.substr(s, 3).toLowerCase() === lt ? (r = h.substr(s, 3), s += 3) : (r = e, p(pf)), r !== e) {
                  for (f = [], l = a(); l !== e; )
                    f.push(l), l = a();
                  if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                    for (t = [], o = a(); o !== e; )
                      t.push(o), o = a();
                    if (o = _(), o !== e) {
                      for (c = [], n = a(); n !== e; )
                        c.push(n), n = a();
                      h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = sn(o)) : (s = i, i = e);
                    } else
                      s = i, i = e;
                  } else
                    s = i, i = e;
                } else
                  s = i, i = e;
                if (i === e) {
                  if (i = s, h.substr(s, 3).toLowerCase() === tt ? (r = h.substr(s, 3), s += 3) : (r = e, p(gf)), r !== e) {
                    for (f = [], l = a(); l !== e; )
                      f.push(l), l = a();
                    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                      for (t = [], o = a(); o !== e; )
                        t.push(o), o = a();
                      if (o = _(), o !== e) {
                        for (c = [], n = a(); n !== e; )
                          c.push(n), n = a();
                        h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = rn(o)) : (s = i, i = e);
                      } else
                        s = i, i = e;
                    } else
                      s = i, i = e;
                  } else
                    s = i, i = e;
                  if (i === e) {
                    if (i = s, h.substr(s, 5).toLowerCase() === at ? (r = h.substr(s, 5), s += 5) : (r = e, p(wf)), r !== e) {
                      for (f = [], l = a(); l !== e; )
                        f.push(l), l = a();
                      if (l = s, h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                        for (o = [], c = a(); c !== e; )
                          o.push(c), c = a();
                        if (c = _(), c !== e) {
                          for (n = [], u = a(); u !== e; )
                            n.push(u), u = a();
                          h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (t = [t, o, c, n, u], l = t) : (s = l, l = e);
                        } else
                          s = l, l = e;
                      } else
                        s = l, l = e;
                      l === e && (l = ye()), l !== e ? (d = i, i = ln(l)) : (s = i, i = e);
                    } else
                      s = i, i = e;
                    if (i === e) {
                      if (i = s, h.substr(s, 4).toLowerCase() === ft ? (r = h.substr(s, 4), s += 4) : (r = e, p(df)), r !== e) {
                        for (f = [], l = a(); l !== e; )
                          f.push(l), l = a();
                        l = ye(), l !== e ? (d = i, i = tn()) : (s = i, i = e);
                      } else
                        s = i, i = e;
                      if (i === e) {
                        if (i = s, h.substr(s, 3).toLowerCase() === ot ? (r = h.substr(s, 3), s += 3) : (r = e, p($f)), r !== e) {
                          for (f = [], l = a(); l !== e; )
                            f.push(l), l = a();
                          if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                            for (t = [], o = a(); o !== e; )
                              t.push(o), o = a();
                            if (o = _(), o !== e) {
                              for (c = [], n = a(); n !== e; )
                                c.push(n), n = a();
                              h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = an(o)) : (s = i, i = e);
                            } else
                              s = i, i = e;
                          } else
                            s = i, i = e;
                        } else
                          s = i, i = e;
                        if (i === e) {
                          if (i = s, h.substr(s, 4).toLowerCase() === ht ? (r = h.substr(s, 4), s += 4) : (r = e, p(vf)), r !== e) {
                            for (f = [], l = a(); l !== e; )
                              f.push(l), l = a();
                            if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                              for (t = [], o = a(); o !== e; )
                                t.push(o), o = a();
                              if (o = _(), o !== e) {
                                for (c = [], n = a(); n !== e; )
                                  c.push(n), n = a();
                                h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = fn(o)) : (s = i, i = e);
                              } else
                                s = i, i = e;
                            } else
                              s = i, i = e;
                          } else
                            s = i, i = e;
                          if (i === e) {
                            if (i = s, h.substr(s, 5).toLowerCase() === ct ? (r = h.substr(s, 5), s += 5) : (r = e, p(bf)), r !== e) {
                              for (f = [], l = a(); l !== e; )
                                f.push(l), l = a();
                              if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                for (t = [], o = a(); o !== e; )
                                  t.push(o), o = a();
                                if (o = _(), o !== e) {
                                  for (c = [], n = a(); n !== e; )
                                    c.push(n), n = a();
                                  h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = on(o)) : (s = i, i = e);
                                } else
                                  s = i, i = e;
                              } else
                                s = i, i = e;
                            } else
                              s = i, i = e;
                            if (i === e) {
                              if (i = s, h.substr(s, 5).toLowerCase() === nt ? (r = h.substr(s, 5), s += 5) : (r = e, p(Af)), r !== e) {
                                for (f = [], l = a(); l !== e; )
                                  f.push(l), l = a();
                                if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                  for (t = [], o = a(); o !== e; )
                                    t.push(o), o = a();
                                  if (o = _(), o !== e) {
                                    for (c = [], n = a(); n !== e; )
                                      c.push(n), n = a();
                                    h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = hn(o)) : (s = i, i = e);
                                  } else
                                    s = i, i = e;
                                } else
                                  s = i, i = e;
                              } else
                                s = i, i = e;
                              if (i === e) {
                                if (i = s, h.substr(s, 6).toLowerCase() === ut ? (r = h.substr(s, 6), s += 6) : (r = e, p(Cf)), r !== e) {
                                  for (f = [], l = a(); l !== e; )
                                    f.push(l), l = a();
                                  l = Fe(), l !== e ? (d = i, i = cn(l)) : (s = i, i = e);
                                } else
                                  s = i, i = e;
                                if (i === e && (i = Bp(), i === e)) {
                                  if (i = s, h.substr(s, 6).toLowerCase() === pt ? (r = h.substr(s, 6), s += 6) : (r = e, p(_f)), r !== e) {
                                    for (f = [], l = a(); l !== e; )
                                      f.push(l), l = a();
                                    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                      for (t = [], o = a(); o !== e; )
                                        t.push(o), o = a();
                                      if (o = _(), o !== e) {
                                        for (c = [], n = a(); n !== e; )
                                          c.push(n), n = a();
                                        h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = nn(o)) : (s = i, i = e);
                                      } else
                                        s = i, i = e;
                                    } else
                                      s = i, i = e;
                                  } else
                                    s = i, i = e;
                                  if (i === e && (i = Hp(), i === e)) {
                                    if (i = s, h.substr(s, 5).toLowerCase() === gt ? (r = h.substr(s, 5), s += 5) : (r = e, p(mf)), r !== e) {
                                      for (f = [], l = a(); l !== e; )
                                        f.push(l), l = a();
                                      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                        for (t = [], o = a(); o !== e; )
                                          t.push(o), o = a();
                                        if (o = _(), o !== e) {
                                          for (c = [], n = a(); n !== e; )
                                            c.push(n), n = a();
                                          h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = un(o)) : (s = i, i = e);
                                        } else
                                          s = i, i = e;
                                      } else
                                        s = i, i = e;
                                    } else
                                      s = i, i = e;
                                    if (i === e) {
                                      if (i = s, h.substr(s, 5).toLowerCase() === wt ? (r = h.substr(s, 5), s += 5) : (r = e, p(Ef)), r !== e) {
                                        for (f = [], l = a(); l !== e; )
                                          f.push(l), l = a();
                                        if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                          for (t = [], o = a(); o !== e; )
                                            t.push(o), o = a();
                                          if (o = _(), o !== e) {
                                            for (c = [], n = a(); n !== e; )
                                              c.push(n), n = a();
                                            h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = pn(o)) : (s = i, i = e);
                                          } else
                                            s = i, i = e;
                                        } else
                                          s = i, i = e;
                                      } else
                                        s = i, i = e;
                                      if (i === e) {
                                        if (i = s, h.substr(s, 14).toLowerCase() === dt ? (r = h.substr(s, 14), s += 14) : (r = e, p(yf)), r !== e) {
                                          for (f = [], l = a(); l !== e; )
                                            f.push(l), l = a();
                                          if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                            for (t = [], o = a(); o !== e; )
                                              t.push(o), o = a();
                                            if (o = _(), o !== e) {
                                              for (c = [], n = a(); n !== e; )
                                                c.push(n), n = a();
                                              h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = gn(o)) : (s = i, i = e);
                                            } else
                                              s = i, i = e;
                                          } else
                                            s = i, i = e;
                                        } else
                                          s = i, i = e;
                                        if (i === e) {
                                          if (i = s, h.substr(s, 8).toLowerCase() === $t ? (r = h.substr(s, 8), s += 8) : (r = e, p(Pf)), r !== e) {
                                            for (f = [], l = a(); l !== e; )
                                              f.push(l), l = a();
                                            if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                              for (t = [], o = a(); o !== e; )
                                                t.push(o), o = a();
                                              if (o = _(), o !== e) {
                                                for (c = [], n = a(); n !== e; )
                                                  c.push(n), n = a();
                                                if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                  for (u = [], g = a(); g !== e; )
                                                    u.push(g), g = a();
                                                  if (g = _(), g !== e) {
                                                    for (w = [], $ = a(); $ !== e; )
                                                      w.push($), $ = a();
                                                    h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = wn(o, g)) : (s = i, i = e);
                                                  } else
                                                    s = i, i = e;
                                                } else
                                                  s = i, i = e;
                                              } else
                                                s = i, i = e;
                                            } else
                                              s = i, i = e;
                                          } else
                                            s = i, i = e;
                                          if (i === e) {
                                            if (i = s, h.substr(s, 9).toLowerCase() === vt ? (r = h.substr(s, 9), s += 9) : (r = e, p(Lf)), r !== e) {
                                              for (f = [], l = a(); l !== e; )
                                                f.push(l), l = a();
                                              if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                for (t = [], o = a(); o !== e; )
                                                  t.push(o), o = a();
                                                if (o = _(), o !== e) {
                                                  for (c = [], n = a(); n !== e; )
                                                    c.push(n), n = a();
                                                  if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                    for (u = [], g = a(); g !== e; )
                                                      u.push(g), g = a();
                                                    if (g = _(), g !== e) {
                                                      for (w = [], $ = a(); $ !== e; )
                                                        w.push($), $ = a();
                                                      h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = dn(o, g)) : (s = i, i = e);
                                                    } else
                                                      s = i, i = e;
                                                  } else
                                                    s = i, i = e;
                                                } else
                                                  s = i, i = e;
                                              } else
                                                s = i, i = e;
                                            } else
                                              s = i, i = e;
                                            if (i === e) {
                                              if (i = s, h.substr(s, 9).toLowerCase() === bt ? (r = h.substr(s, 9), s += 9) : (r = e, p(Tf)), r !== e) {
                                                for (f = [], l = a(); l !== e; )
                                                  f.push(l), l = a();
                                                if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                  for (t = [], o = a(); o !== e; )
                                                    t.push(o), o = a();
                                                  if (o = _(), o !== e) {
                                                    for (c = [], n = a(); n !== e; )
                                                      c.push(n), n = a();
                                                    if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                      for (u = [], g = a(); g !== e; )
                                                        u.push(g), g = a();
                                                      if (g = _(), g !== e) {
                                                        for (w = [], $ = a(); $ !== e; )
                                                          w.push($), $ = a();
                                                        h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = $n(o, g)) : (s = i, i = e);
                                                      } else
                                                        s = i, i = e;
                                                    } else
                                                      s = i, i = e;
                                                  } else
                                                    s = i, i = e;
                                                } else
                                                  s = i, i = e;
                                              } else
                                                s = i, i = e;
                                              if (i === e) {
                                                if (i = s, h.substr(s, 7).toLowerCase() === At ? (r = h.substr(s, 7), s += 7) : (r = e, p(Rf)), r !== e) {
                                                  for (f = [], l = a(); l !== e; )
                                                    f.push(l), l = a();
                                                  if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                    for (t = [], o = a(); o !== e; )
                                                      t.push(o), o = a();
                                                    if (o = _(), o !== e) {
                                                      for (c = [], n = a(); n !== e; )
                                                        c.push(n), n = a();
                                                      if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                        for (u = [], g = a(); g !== e; )
                                                          u.push(g), g = a();
                                                        if (g = _(), g !== e) {
                                                          for (w = [], $ = a(); $ !== e; )
                                                            w.push($), $ = a();
                                                          h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = vn(o, g)) : (s = i, i = e);
                                                        } else
                                                          s = i, i = e;
                                                      } else
                                                        s = i, i = e;
                                                    } else
                                                      s = i, i = e;
                                                  } else
                                                    s = i, i = e;
                                                } else
                                                  s = i, i = e;
                                                if (i === e) {
                                                  if (i = s, h.substr(s, 8).toLowerCase() === Ct ? (r = h.substr(s, 8), s += 8) : (r = e, p(If)), r !== e) {
                                                    for (f = [], l = a(); l !== e; )
                                                      f.push(l), l = a();
                                                    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                      for (t = [], o = a(); o !== e; )
                                                        t.push(o), o = a();
                                                      if (o = _(), o !== e) {
                                                        for (c = [], n = a(); n !== e; )
                                                          c.push(n), n = a();
                                                        if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                          for (u = [], g = a(); g !== e; )
                                                            u.push(g), g = a();
                                                          if (g = _(), g !== e) {
                                                            for (w = [], $ = a(); $ !== e; )
                                                              w.push($), $ = a();
                                                            h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = bn(o, g)) : (s = i, i = e);
                                                          } else
                                                            s = i, i = e;
                                                        } else
                                                          s = i, i = e;
                                                      } else
                                                        s = i, i = e;
                                                    } else
                                                      s = i, i = e;
                                                  } else
                                                    s = i, i = e;
                                                  if (i === e) {
                                                    if (i = s, h.substr(s, 4).toLowerCase() === _t ? (r = h.substr(s, 4), s += 4) : (r = e, p(Of)), r !== e) {
                                                      for (f = [], l = a(); l !== e; )
                                                        f.push(l), l = a();
                                                      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                        for (t = [], o = a(); o !== e; )
                                                          t.push(o), o = a();
                                                        if (o = _(), o !== e) {
                                                          for (c = [], n = a(); n !== e; )
                                                            c.push(n), n = a();
                                                          h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = An(o)) : (s = i, i = e);
                                                        } else
                                                          s = i, i = e;
                                                      } else
                                                        s = i, i = e;
                                                    } else
                                                      s = i, i = e;
                                                    if (i === e) {
                                                      if (i = s, h.substr(s, 5).toLowerCase() === mt ? (r = h.substr(s, 5), s += 5) : (r = e, p(Nf)), r !== e) {
                                                        for (f = [], l = a(); l !== e; )
                                                          f.push(l), l = a();
                                                        if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                          for (t = [], o = a(); o !== e; )
                                                            t.push(o), o = a();
                                                          if (o = _(), o !== e) {
                                                            for (c = [], n = a(); n !== e; )
                                                              c.push(n), n = a();
                                                            h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Cn(o)) : (s = i, i = e);
                                                          } else
                                                            s = i, i = e;
                                                        } else
                                                          s = i, i = e;
                                                      } else
                                                        s = i, i = e;
                                                      if (i === e) {
                                                        if (i = s, h.substr(s, 3).toLowerCase() === Et ? (r = h.substr(s, 3), s += 3) : (r = e, p(Sf)), r !== e) {
                                                          for (f = [], l = a(); l !== e; )
                                                            f.push(l), l = a();
                                                          if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                            for (t = [], o = a(); o !== e; )
                                                              t.push(o), o = a();
                                                            if (o = _(), o !== e) {
                                                              for (c = [], n = a(); n !== e; )
                                                                c.push(n), n = a();
                                                              h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = _n(o)) : (s = i, i = e);
                                                            } else
                                                              s = i, i = e;
                                                          } else
                                                            s = i, i = e;
                                                        } else
                                                          s = i, i = e;
                                                        if (i === e) {
                                                          if (i = s, h.substr(s, 5).toLowerCase() === yt ? (r = h.substr(s, 5), s += 5) : (r = e, p(Ff)), r !== e) {
                                                            for (f = [], l = a(); l !== e; )
                                                              f.push(l), l = a();
                                                            if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                              for (t = [], o = a(); o !== e; )
                                                                t.push(o), o = a();
                                                              if (o = _(), o !== e) {
                                                                for (c = [], n = a(); n !== e; )
                                                                  c.push(n), n = a();
                                                                h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = mn(o)) : (s = i, i = e);
                                                              } else
                                                                s = i, i = e;
                                                            } else
                                                              s = i, i = e;
                                                          } else
                                                            s = i, i = e;
                                                          if (i === e) {
                                                            if (i = s, h.substr(s, 7).toLowerCase() === Pt ? (r = h.substr(s, 7), s += 7) : (r = e, p(xf)), r !== e) {
                                                              for (f = [], l = a(); l !== e; )
                                                                f.push(l), l = a();
                                                              if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                for (t = [], o = a(); o !== e; )
                                                                  t.push(o), o = a();
                                                                if (o = _(), o !== e) {
                                                                  for (c = [], n = a(); n !== e; )
                                                                    c.push(n), n = a();
                                                                  h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = En(o)) : (s = i, i = e);
                                                                } else
                                                                  s = i, i = e;
                                                              } else
                                                                s = i, i = e;
                                                            } else
                                                              s = i, i = e;
                                                            if (i === e) {
                                                              if (i = s, h.substr(s, 7).toLowerCase() === Lt ? (r = h.substr(s, 7), s += 7) : (r = e, p(Df)), r !== e) {
                                                                for (f = [], l = a(); l !== e; )
                                                                  f.push(l), l = a();
                                                                if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                  for (t = [], o = a(); o !== e; )
                                                                    t.push(o), o = a();
                                                                  if (o = _(), o !== e) {
                                                                    for (c = [], n = a(); n !== e; )
                                                                      c.push(n), n = a();
                                                                    h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = yn(o)) : (s = i, i = e);
                                                                  } else
                                                                    s = i, i = e;
                                                                } else
                                                                  s = i, i = e;
                                                              } else
                                                                s = i, i = e;
                                                              if (i === e) {
                                                                if (i = s, h.substr(s, 8).toLowerCase() === Tt ? (r = h.substr(s, 8), s += 8) : (r = e, p(Gf)), r !== e) {
                                                                  for (f = [], l = a(); l !== e; )
                                                                    f.push(l), l = a();
                                                                  if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                    for (t = [], o = a(); o !== e; )
                                                                      t.push(o), o = a();
                                                                    if (o = _(), o !== e) {
                                                                      for (c = [], n = a(); n !== e; )
                                                                        c.push(n), n = a();
                                                                      h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Pn(o)) : (s = i, i = e);
                                                                    } else
                                                                      s = i, i = e;
                                                                  } else
                                                                    s = i, i = e;
                                                                } else
                                                                  s = i, i = e;
                                                                if (i === e) {
                                                                  if (i = s, h.substr(s, 2).toLowerCase() === Rt ? (r = h.substr(s, 2), s += 2) : (r = e, p(Uf)), r !== e) {
                                                                    for (f = [], l = a(); l !== e; )
                                                                      f.push(l), l = a();
                                                                    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                      for (t = [], o = a(); o !== e; )
                                                                        t.push(o), o = a();
                                                                      if (o = _(), o !== e) {
                                                                        for (c = [], n = a(); n !== e; )
                                                                          c.push(n), n = a();
                                                                        h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Ln(o)) : (s = i, i = e);
                                                                      } else
                                                                        s = i, i = e;
                                                                    } else
                                                                      s = i, i = e;
                                                                  } else
                                                                    s = i, i = e;
                                                                  if (i === e) {
                                                                    if (i = s, h.substr(s, 3).toLowerCase() === It ? (r = h.substr(s, 3), s += 3) : (r = e, p(Bf)), r !== e) {
                                                                      for (f = [], l = a(); l !== e; )
                                                                        f.push(l), l = a();
                                                                      l = ye(), l !== e ? (d = i, i = Tn()) : (s = i, i = e);
                                                                    } else
                                                                      s = i, i = e;
                                                                    if (i === e) {
                                                                      if (i = s, h.substr(s, 4).toLowerCase() === Ot ? (r = h.substr(s, 4), s += 4) : (r = e, p(Hf)), r !== e) {
                                                                        for (f = [], l = a(); l !== e; )
                                                                          f.push(l), l = a();
                                                                        l = ye(), l !== e ? (d = i, i = Rn()) : (s = i, i = e);
                                                                      } else
                                                                        s = i, i = e;
                                                                      if (i === e) {
                                                                        if (i = s, h.substr(s, 7).toLowerCase() === Nt ? (r = h.substr(s, 7), s += 7) : (r = e, p(Mf)), r !== e) {
                                                                          for (f = [], l = a(); l !== e; )
                                                                            f.push(l), l = a();
                                                                          l = ye(), l !== e ? (d = i, i = In()) : (s = i, i = e);
                                                                        } else
                                                                          s = i, i = e;
                                                                        if (i === e) {
                                                                          if (i = s, h.substr(s, 3).toLowerCase() === St ? (r = h.substr(s, 3), s += 3) : (r = e, p(kf)), r !== e) {
                                                                            for (f = [], l = a(); l !== e; )
                                                                              f.push(l), l = a();
                                                                            if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                              for (t = [], o = a(); o !== e; )
                                                                                t.push(o), o = a();
                                                                              if (o = _(), o !== e) {
                                                                                for (c = [], n = a(); n !== e; )
                                                                                  c.push(n), n = a();
                                                                                h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = On(o)) : (s = i, i = e);
                                                                              } else
                                                                                s = i, i = e;
                                                                            } else
                                                                              s = i, i = e;
                                                                          } else
                                                                            s = i, i = e;
                                                                          if (i === e) {
                                                                            if (i = s, h.substr(s, 4).toLowerCase() === Ft ? (r = h.substr(s, 4), s += 4) : (r = e, p(jf)), r !== e) {
                                                                              for (f = [], l = a(); l !== e; )
                                                                                f.push(l), l = a();
                                                                              if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                for (t = [], o = a(); o !== e; )
                                                                                  t.push(o), o = a();
                                                                                if (o = _(), o !== e) {
                                                                                  for (c = [], n = a(); n !== e; )
                                                                                    c.push(n), n = a();
                                                                                  h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Nn(o)) : (s = i, i = e);
                                                                                } else
                                                                                  s = i, i = e;
                                                                              } else
                                                                                s = i, i = e;
                                                                            } else
                                                                              s = i, i = e;
                                                                            if (i === e) {
                                                                              if (i = s, h.substr(s, 6).toLowerCase() === xt ? (r = h.substr(s, 6), s += 6) : (r = e, p(Xf)), r !== e) {
                                                                                for (f = [], l = a(); l !== e; )
                                                                                  f.push(l), l = a();
                                                                                if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                  for (t = [], o = a(); o !== e; )
                                                                                    t.push(o), o = a();
                                                                                  if (o = _(), o !== e) {
                                                                                    for (c = [], n = a(); n !== e; )
                                                                                      c.push(n), n = a();
                                                                                    h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Sn(o)) : (s = i, i = e);
                                                                                  } else
                                                                                    s = i, i = e;
                                                                                } else
                                                                                  s = i, i = e;
                                                                              } else
                                                                                s = i, i = e;
                                                                              if (i === e) {
                                                                                if (i = s, h.substr(s, 6).toLowerCase() === Dt ? (r = h.substr(s, 6), s += 6) : (r = e, p(Vf)), r !== e) {
                                                                                  for (f = [], l = a(); l !== e; )
                                                                                    f.push(l), l = a();
                                                                                  if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                    for (t = [], o = a(); o !== e; )
                                                                                      t.push(o), o = a();
                                                                                    if (o = _(), o !== e) {
                                                                                      for (c = [], n = a(); n !== e; )
                                                                                        c.push(n), n = a();
                                                                                      h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Fn(o)) : (s = i, i = e);
                                                                                    } else
                                                                                      s = i, i = e;
                                                                                  } else
                                                                                    s = i, i = e;
                                                                                } else
                                                                                  s = i, i = e;
                                                                                if (i === e) {
                                                                                  if (i = s, h.substr(s, 6).toLowerCase() === Gt ? (r = h.substr(s, 6), s += 6) : (r = e, p(Wf)), r !== e) {
                                                                                    for (f = [], l = a(); l !== e; )
                                                                                      f.push(l), l = a();
                                                                                    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                      for (t = [], o = a(); o !== e; )
                                                                                        t.push(o), o = a();
                                                                                      if (o = _(), o !== e) {
                                                                                        for (c = [], n = a(); n !== e; )
                                                                                          c.push(n), n = a();
                                                                                        h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = xn(o)) : (s = i, i = e);
                                                                                      } else
                                                                                        s = i, i = e;
                                                                                    } else
                                                                                      s = i, i = e;
                                                                                  } else
                                                                                    s = i, i = e;
                                                                                  if (i === e) {
                                                                                    if (i = s, h.substr(s, 8).toLowerCase() === Ut ? (r = h.substr(s, 8), s += 8) : (r = e, p(Yf)), r !== e) {
                                                                                      for (f = [], l = a(); l !== e; )
                                                                                        f.push(l), l = a();
                                                                                      l = Fe(), l !== e ? (d = i, i = Dn(l)) : (s = i, i = e);
                                                                                    } else
                                                                                      s = i, i = e;
                                                                                    if (i === e) {
                                                                                      if (i = s, h.substr(s, 2).toLowerCase() === Bt ? (r = h.substr(s, 2), s += 2) : (r = e, p(Qf)), r !== e) {
                                                                                        for (f = [], l = a(); l !== e; )
                                                                                          f.push(l), l = a();
                                                                                        if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                          for (t = [], o = a(); o !== e; )
                                                                                            t.push(o), o = a();
                                                                                          if (o = _(), o !== e) {
                                                                                            for (c = [], n = a(); n !== e; )
                                                                                              c.push(n), n = a();
                                                                                            if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                                                              for (u = [], g = a(); g !== e; )
                                                                                                u.push(g), g = a();
                                                                                              if (g = _(), g !== e) {
                                                                                                for (w = [], $ = a(); $ !== e; )
                                                                                                  w.push($), $ = a();
                                                                                                if (h.charCodeAt(s) === 44 ? ($ = D, s++) : ($ = e, p(G)), $ !== e) {
                                                                                                  for (b = [], m = a(); m !== e; )
                                                                                                    b.push(m), m = a();
                                                                                                  if (m = _(), m !== e) {
                                                                                                    for (L = [], R = a(); R !== e; )
                                                                                                      L.push(R), R = a();
                                                                                                    h.charCodeAt(s) === 41 ? (R = E, s++) : (R = e, p(P)), R !== e ? (d = i, i = Gn(o, g, m)) : (s = i, i = e);
                                                                                                  } else
                                                                                                    s = i, i = e;
                                                                                                } else
                                                                                                  s = i, i = e;
                                                                                              } else
                                                                                                s = i, i = e;
                                                                                            } else
                                                                                              s = i, i = e;
                                                                                          } else
                                                                                            s = i, i = e;
                                                                                        } else
                                                                                          s = i, i = e;
                                                                                      } else
                                                                                        s = i, i = e;
                                                                                      if (i === e) {
                                                                                        if (i = s, h.substr(s, 7).toLowerCase() === Ht ? (r = h.substr(s, 7), s += 7) : (r = e, p(zf)), r !== e) {
                                                                                          for (f = [], l = a(); l !== e; )
                                                                                            f.push(l), l = a();
                                                                                          if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                            for (t = [], o = a(); o !== e; )
                                                                                              t.push(o), o = a();
                                                                                            if (o = _(), o !== e) {
                                                                                              for (c = [], n = a(); n !== e; )
                                                                                                c.push(n), n = a();
                                                                                              if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                                                                for (u = [], g = a(); g !== e; )
                                                                                                  u.push(g), g = a();
                                                                                                if (g = _(), g !== e) {
                                                                                                  for (w = [], $ = a(); $ !== e; )
                                                                                                    w.push($), $ = a();
                                                                                                  h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = Un(o, g)) : (s = i, i = e);
                                                                                                } else
                                                                                                  s = i, i = e;
                                                                                              } else
                                                                                                s = i, i = e;
                                                                                            } else
                                                                                              s = i, i = e;
                                                                                          } else
                                                                                            s = i, i = e;
                                                                                        } else
                                                                                          s = i, i = e;
                                                                                        if (i === e) {
                                                                                          if (i = s, h.substr(s, 5).toLowerCase() === Mt ? (r = h.substr(s, 5), s += 5) : (r = e, p(Zf)), r !== e) {
                                                                                            for (f = [], l = a(); l !== e; )
                                                                                              f.push(l), l = a();
                                                                                            if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                              for (t = [], o = a(); o !== e; )
                                                                                                t.push(o), o = a();
                                                                                              if (o = _(), o !== e) {
                                                                                                for (c = [], n = a(); n !== e; )
                                                                                                  c.push(n), n = a();
                                                                                                if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                                                                  for (u = [], g = a(); g !== e; )
                                                                                                    u.push(g), g = a();
                                                                                                  if (g = _(), g !== e) {
                                                                                                    for (w = [], $ = a(); $ !== e; )
                                                                                                      w.push($), $ = a();
                                                                                                    h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = Bn(o, g)) : (s = i, i = e);
                                                                                                  } else
                                                                                                    s = i, i = e;
                                                                                                } else
                                                                                                  s = i, i = e;
                                                                                              } else
                                                                                                s = i, i = e;
                                                                                            } else
                                                                                              s = i, i = e;
                                                                                          } else
                                                                                            s = i, i = e;
                                                                                          if (i === e) {
                                                                                            if (i = s, h.substr(s, 8).toLowerCase() === kt ? (r = h.substr(s, 8), s += 8) : (r = e, p(qf)), r !== e) {
                                                                                              for (f = [], l = a(); l !== e; )
                                                                                                f.push(l), l = a();
                                                                                              if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                                for (t = [], o = a(); o !== e; )
                                                                                                  t.push(o), o = a();
                                                                                                if (o = _(), o !== e) {
                                                                                                  for (c = [], n = a(); n !== e; )
                                                                                                    c.push(n), n = a();
                                                                                                  if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                                                                    for (u = [], g = a(); g !== e; )
                                                                                                      u.push(g), g = a();
                                                                                                    if (g = _(), g !== e) {
                                                                                                      for (w = [], $ = a(); $ !== e; )
                                                                                                        w.push($), $ = a();
                                                                                                      h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = Hn(o, g)) : (s = i, i = e);
                                                                                                    } else
                                                                                                      s = i, i = e;
                                                                                                  } else
                                                                                                    s = i, i = e;
                                                                                                } else
                                                                                                  s = i, i = e;
                                                                                              } else
                                                                                                s = i, i = e;
                                                                                            } else
                                                                                              s = i, i = e;
                                                                                            if (i === e) {
                                                                                              if (i = s, h.substr(s, 5).toLowerCase() === jt ? (r = h.substr(s, 5), s += 5) : (r = e, p(Kf)), r === e && (h.substr(s, 5).toLowerCase() === Xt ? (r = h.substr(s, 5), s += 5) : (r = e, p(Jf))), r !== e) {
                                                                                                for (f = [], l = a(); l !== e; )
                                                                                                  f.push(l), l = a();
                                                                                                if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                                  for (t = [], o = a(); o !== e; )
                                                                                                    t.push(o), o = a();
                                                                                                  if (o = _(), o !== e) {
                                                                                                    for (c = [], n = a(); n !== e; )
                                                                                                      c.push(n), n = a();
                                                                                                    h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Mn(o)) : (s = i, i = e);
                                                                                                  } else
                                                                                                    s = i, i = e;
                                                                                                } else
                                                                                                  s = i, i = e;
                                                                                              } else
                                                                                                s = i, i = e;
                                                                                              if (i === e) {
                                                                                                if (i = s, h.substr(s, 7).toLowerCase() === Vt ? (r = h.substr(s, 7), s += 7) : (r = e, p(eo)), r !== e) {
                                                                                                  for (f = [], l = a(); l !== e; )
                                                                                                    f.push(l), l = a();
                                                                                                  if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                                    for (t = [], o = a(); o !== e; )
                                                                                                      t.push(o), o = a();
                                                                                                    if (o = _(), o !== e) {
                                                                                                      for (c = [], n = a(); n !== e; )
                                                                                                        c.push(n), n = a();
                                                                                                      h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = kn(o)) : (s = i, i = e);
                                                                                                    } else
                                                                                                      s = i, i = e;
                                                                                                  } else
                                                                                                    s = i, i = e;
                                                                                                } else
                                                                                                  s = i, i = e;
                                                                                                if (i === e) {
                                                                                                  if (i = s, h.substr(s, 9).toLowerCase() === Wt ? (r = h.substr(s, 9), s += 9) : (r = e, p(so)), r !== e) {
                                                                                                    for (f = [], l = a(); l !== e; )
                                                                                                      f.push(l), l = a();
                                                                                                    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                                      for (t = [], o = a(); o !== e; )
                                                                                                        t.push(o), o = a();
                                                                                                      if (o = _(), o !== e) {
                                                                                                        for (c = [], n = a(); n !== e; )
                                                                                                          c.push(n), n = a();
                                                                                                        h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = jn(o)) : (s = i, i = e);
                                                                                                      } else
                                                                                                        s = i, i = e;
                                                                                                    } else
                                                                                                      s = i, i = e;
                                                                                                  } else
                                                                                                    s = i, i = e;
                                                                                                  if (i === e) {
                                                                                                    if (i = s, h.substr(s, 9).toLowerCase() === Yt ? (r = h.substr(s, 9), s += 9) : (r = e, p(ro)), r !== e) {
                                                                                                      for (f = [], l = a(); l !== e; )
                                                                                                        f.push(l), l = a();
                                                                                                      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                                        for (t = [], o = a(); o !== e; )
                                                                                                          t.push(o), o = a();
                                                                                                        if (o = _(), o !== e) {
                                                                                                          for (c = [], n = a(); n !== e; )
                                                                                                            c.push(n), n = a();
                                                                                                          h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Xn(o)) : (s = i, i = e);
                                                                                                        } else
                                                                                                          s = i, i = e;
                                                                                                      } else
                                                                                                        s = i, i = e;
                                                                                                    } else
                                                                                                      s = i, i = e;
                                                                                                    i === e && (i = Up(), i === e && (i = Mp(), i === e && (i = kp())));
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
    return i;
  }
  function Up() {
    var i, r, f, l, t, o, c, n, u, g, w, $, b, m, L;
    if (i = s, h.substr(s, 5).toLowerCase() === Qt ? (r = h.substr(s, 5), s += 5) : (r = e, p(io)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (o = _(), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = _(), g !== e) {
              for (w = [], $ = a(); $ !== e; )
                w.push($), $ = a();
              if ($ = s, h.charCodeAt(s) === 44 ? (b = D, s++) : (b = e, p(G)), b !== e) {
                for (m = [], L = a(); L !== e; )
                  m.push(L), L = a();
                L = _(), L !== e ? (b = [b, m, L], $ = b) : (s = $, $ = e);
              } else
                s = $, $ = e;
              for ($ === e && ($ = null), b = [], m = a(); m !== e; )
                b.push(m), m = a();
              h.charCodeAt(s) === 41 ? (m = E, s++) : (m = e, p(P)), m !== e ? (d = i, i = Vn(o, g, $)) : (s = i, i = e);
            } else
              s = i, i = e;
          } else
            s = i, i = e;
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Bp() {
    var i, r, f, l, t, o, c, n, u, g, w, $, b, m, L;
    if (i = s, h.substr(s, 6).toLowerCase() === zt ? (r = h.substr(s, 6), s += 6) : (r = e, p(lo)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (o = _(), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = _(), g !== e) {
              for (w = [], $ = a(); $ !== e; )
                w.push($), $ = a();
              if ($ = s, h.charCodeAt(s) === 44 ? (b = D, s++) : (b = e, p(G)), b !== e) {
                for (m = [], L = a(); L !== e; )
                  m.push(L), L = a();
                L = _(), L !== e ? (b = [b, m, L], $ = b) : (s = $, $ = e);
              } else
                s = $, $ = e;
              for ($ === e && ($ = null), b = [], m = a(); m !== e; )
                b.push(m), m = a();
              h.charCodeAt(s) === 41 ? (m = E, s++) : (m = e, p(P)), m !== e ? (d = i, i = Wn(o, g, $)) : (s = i, i = e);
            } else
              s = i, i = e;
          } else
            s = i, i = e;
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Hp() {
    var i, r, f, l, t, o, c, n, u, g, w, $, b, m, L, R, N, M, ge;
    if (i = s, h.substr(s, 7).toLowerCase() === Zt ? (r = h.substr(s, 7), s += 7) : (r = e, p(to)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        if (o = _(), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = _(), g !== e) {
              for (w = [], $ = a(); $ !== e; )
                w.push($), $ = a();
              if (h.charCodeAt(s) === 44 ? ($ = D, s++) : ($ = e, p(G)), $ !== e) {
                for (b = [], m = a(); m !== e; )
                  b.push(m), m = a();
                if (m = _(), m !== e) {
                  for (L = [], R = a(); R !== e; )
                    L.push(R), R = a();
                  if (R = s, h.charCodeAt(s) === 44 ? (N = D, s++) : (N = e, p(G)), N !== e) {
                    for (M = [], ge = a(); ge !== e; )
                      M.push(ge), ge = a();
                    ge = _(), ge !== e ? (N = [N, M, ge], R = N) : (s = R, R = e);
                  } else
                    s = R, R = e;
                  for (R === e && (R = null), N = [], M = a(); M !== e; )
                    N.push(M), M = a();
                  h.charCodeAt(s) === 41 ? (M = E, s++) : (M = e, p(P)), M !== e ? (d = i, i = Yn(o, g, m, R)) : (s = i, i = e);
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
            } else
              s = i, i = e;
          } else
            s = i, i = e;
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Mp() {
    var i, r, f, l;
    if (i = s, h.substr(s, 6).toLowerCase() === Jr ? (r = h.substr(s, 6), s += 6) : (r = e, p(Pi)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      l = ie(), l !== e ? (d = i, i = Qn(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function kp() {
    var i, r, f, l, t, o;
    if (i = s, h.substr(s, 3).toLowerCase() === Ws ? (r = h.substr(s, 3), s += 3) : (r = e, p(ar)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (h.substr(s, 6).toLowerCase() === Jr ? (l = h.substr(s, 6), s += 6) : (l = e, p(Pi)), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        o = ie(), o !== e ? (d = i, i = zn(o)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function jp() {
    var i, r, f, l, t, o, c, n, u, g, w, $, b, m, L, R, N;
    if (i = s, h.substr(s, 5).toLowerCase() === qt ? (r = h.substr(s, 5), s += 5) : (r = e, p(ao)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        for (h.substr(s, 8).toLowerCase() === O ? (o = h.substr(s, 8), s += 8) : (o = e, p(ue)), o === e && (o = null), c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 42 ? (n = se, s++) : (n = e, p(re)), n === e && (n = _()), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          if (h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
            for (w = [], $ = a(); $ !== e; )
              w.push($), $ = a();
            d = i, i = Zn(o, n);
          } else
            s = i, i = e;
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    if (i === e) {
      if (i = s, h.substr(s, 3).toLowerCase() === Kt ? (r = h.substr(s, 3), s += 3) : (r = e, p(fo)), r !== e) {
        for (f = [], l = a(); l !== e; )
          f.push(l), l = a();
        if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
          for (t = [], o = a(); o !== e; )
            t.push(o), o = a();
          for (h.substr(s, 8).toLowerCase() === O ? (o = h.substr(s, 8), s += 8) : (o = e, p(ue)), o === e && (o = null), c = [], n = a(); n !== e; )
            c.push(n), n = a();
          if (n = _(), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
              for (w = [], $ = a(); $ !== e; )
                w.push($), $ = a();
              d = i, i = qn(o, n);
            } else
              s = i, i = e;
          } else
            s = i, i = e;
        } else
          s = i, i = e;
      } else
        s = i, i = e;
      if (i === e) {
        if (i = s, h.substr(s, 3).toLowerCase() === Jt ? (r = h.substr(s, 3), s += 3) : (r = e, p(oo)), r !== e) {
          for (f = [], l = a(); l !== e; )
            f.push(l), l = a();
          if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
            for (t = [], o = a(); o !== e; )
              t.push(o), o = a();
            for (h.substr(s, 8).toLowerCase() === O ? (o = h.substr(s, 8), s += 8) : (o = e, p(ue)), o === e && (o = null), c = [], n = a(); n !== e; )
              c.push(n), n = a();
            if (n = _(), n !== e) {
              for (u = [], g = a(); g !== e; )
                u.push(g), g = a();
              if (h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
                for (w = [], $ = a(); $ !== e; )
                  w.push($), $ = a();
                d = i, i = Kn(o, n);
              } else
                s = i, i = e;
            } else
              s = i, i = e;
          } else
            s = i, i = e;
        } else
          s = i, i = e;
        if (i === e) {
          if (i = s, h.substr(s, 3).toLowerCase() === ea ? (r = h.substr(s, 3), s += 3) : (r = e, p(ho)), r !== e) {
            for (f = [], l = a(); l !== e; )
              f.push(l), l = a();
            if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
              for (t = [], o = a(); o !== e; )
                t.push(o), o = a();
              for (h.substr(s, 8).toLowerCase() === O ? (o = h.substr(s, 8), s += 8) : (o = e, p(ue)), o === e && (o = null), c = [], n = a(); n !== e; )
                c.push(n), n = a();
              if (n = _(), n !== e) {
                for (u = [], g = a(); g !== e; )
                  u.push(g), g = a();
                if (h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
                  for (w = [], $ = a(); $ !== e; )
                    w.push($), $ = a();
                  d = i, i = Jn(o, n);
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
            } else
              s = i, i = e;
          } else
            s = i, i = e;
          if (i === e) {
            if (i = s, h.substr(s, 3).toLowerCase() === sa ? (r = h.substr(s, 3), s += 3) : (r = e, p(co)), r !== e) {
              for (f = [], l = a(); l !== e; )
                f.push(l), l = a();
              if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                for (t = [], o = a(); o !== e; )
                  t.push(o), o = a();
                for (h.substr(s, 8).toLowerCase() === O ? (o = h.substr(s, 8), s += 8) : (o = e, p(ue)), o === e && (o = null), c = [], n = a(); n !== e; )
                  c.push(n), n = a();
                if (n = _(), n !== e) {
                  for (u = [], g = a(); g !== e; )
                    u.push(g), g = a();
                  if (h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
                    for (w = [], $ = a(); $ !== e; )
                      w.push($), $ = a();
                    d = i, i = eu(o, n);
                  } else
                    s = i, i = e;
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
            } else
              s = i, i = e;
            if (i === e) {
              if (i = s, h.substr(s, 6).toLowerCase() === ra ? (r = h.substr(s, 6), s += 6) : (r = e, p(no)), r !== e) {
                for (f = [], l = a(); l !== e; )
                  f.push(l), l = a();
                if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                  for (t = [], o = a(); o !== e; )
                    t.push(o), o = a();
                  for (h.substr(s, 8).toLowerCase() === O ? (o = h.substr(s, 8), s += 8) : (o = e, p(ue)), o === e && (o = null), c = [], n = a(); n !== e; )
                    c.push(n), n = a();
                  if (n = _(), n !== e) {
                    for (u = [], g = a(); g !== e; )
                      u.push(g), g = a();
                    if (h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
                      for (w = [], $ = a(); $ !== e; )
                        w.push($), $ = a();
                      d = i, i = su(o, n);
                    } else
                      s = i, i = e;
                  } else
                    s = i, i = e;
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
              if (i === e)
                if (i = s, h.substr(s, 12).toLowerCase() === ia ? (r = h.substr(s, 12), s += 12) : (r = e, p(uo)), r !== e) {
                  for (f = [], l = a(); l !== e; )
                    f.push(l), l = a();
                  if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                    for (t = [], o = a(); o !== e; )
                      t.push(o), o = a();
                    for (h.substr(s, 8).toLowerCase() === O ? (o = h.substr(s, 8), s += 8) : (o = e, p(ue)), o === e && (o = null), c = [], n = a(); n !== e; )
                      c.push(n), n = a();
                    if (n = _(), n !== e) {
                      for (u = s, g = [], w = a(); w !== e; )
                        g.push(w), w = a();
                      if (h.charCodeAt(s) === 59 ? (w = Le, s++) : (w = e, p(Re)), w !== e) {
                        for ($ = [], b = a(); b !== e; )
                          $.push(b), b = a();
                        if (h.substr(s, 9).toLowerCase() === la ? (b = h.substr(s, 9), s += 9) : (b = e, p(po)), b !== e) {
                          for (m = [], L = a(); L !== e; )
                            m.push(L), L = a();
                          if (h.charCodeAt(s) === 61 ? (L = is, s++) : (L = e, p(bs)), L !== e) {
                            for (R = [], N = a(); N !== e; )
                              R.push(N), N = a();
                            N = $l(), N !== e ? (g = [g, w, $, b, m, L, R, N], u = g) : (s = u, u = e);
                          } else
                            s = u, u = e;
                        } else
                          s = u, u = e;
                      } else
                        s = u, u = e;
                      for (u === e && (u = null), g = [], w = a(); w !== e; )
                        g.push(w), w = a();
                      if (h.charCodeAt(s) === 41 ? (w = E, s++) : (w = e, p(P)), w !== e) {
                        for ($ = [], b = a(); b !== e; )
                          $.push(b), b = a();
                        d = i, i = ru(o, n, u);
                      } else
                        s = i, i = e;
                    } else
                      s = i, i = e;
                  } else
                    s = i, i = e;
                } else
                  s = i, i = e;
            }
          }
        }
      }
    }
    return i;
  }
  function Xp() {
    var i, r, f, l;
    if (i = s, r = V(), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      l = nl(), l === e && (l = null), d = i, i = iu(r, l);
    } else
      s = i, i = e;
    return i;
  }
  function Lr() {
    var i, r, f, l, t;
    return i = s, r = $l(), r !== e ? (f = Kp(), f === e && (f = s, h.substr(s, 2) === ei ? (l = ei, s += 2) : (l = e, p(go)), l !== e ? (t = V(), t !== e ? (l = [l, t], f = l) : (s = f, f = e)) : (s = f, f = e)), f === e && (f = null), d = i, i = lu(r, f)) : (s = i, i = e), i;
  }
  function Tr() {
    var i;
    return i = Vp(), i === e && (i = Rr(), i === e && (i = Ir())), i;
  }
  function Vp() {
    var i;
    return i = xr(), i === e && (i = Fr(), i === e && (i = Ve())), i;
  }
  function Rr() {
    var i;
    return i = sg(), i === e && (i = eg(), i === e && (i = Jp())), i;
  }
  function Ir() {
    var i;
    return i = lg(), i === e && (i = ig(), i === e && (i = rg())), i;
  }
  function Or() {
    var i, r;
    return i = s, h.substr(s, 4).toLowerCase() === ta ? (r = h.substr(s, 4), s += 4) : (r = e, p(wo)), r !== e && (d = i, r = tu()), i = r, i === e && (i = s, h.substr(s, 5).toLowerCase() === aa ? (r = h.substr(s, 5), s += 5) : (r = e, p($o)), r !== e && (d = i, r = au()), i = r), i;
  }
  function $l() {
    var i;
    return i = fg(), i === e && (i = og(), i === e && (i = tg(), i === e && (i = ag()))), i;
  }
  function V() {
    var i, r;
    return i = s, r = Nr(), r !== e && (d = i, r = fu(r)), i = r, i === e && (i = s, r = Wp(), r !== e && (d = i, r = ou(r)), i = r), i;
  }
  function Wp() {
    var i, r;
    return i = s, r = Qp(), r !== e && (d = i, r = hu(r)), i = r, i === e && (i = s, r = Sr(), r !== e && (d = i, r = cu(r)), i = r), i;
  }
  function Yp() {
    var i, r;
    return i = s, r = zp(), r !== e && (d = i, r = nu(r)), i = r, i === e && (i = s, r = cg(), r !== e && (d = i, r = uu()), i = r), i;
  }
  function Nr() {
    var i, r, f, l;
    if (i = s, h.charCodeAt(s) === 60 ? (r = Xs, s++) : (r = e, p(lr)), r !== e) {
      for (f = [], fi.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Li)); l !== e; )
        f.push(l), fi.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Li));
      h.charCodeAt(s) === 62 ? (l = Vs, s++) : (l = e, p(tr)), l !== e ? (d = i, i = pu(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Sr() {
    var i, r, f;
    return i = s, r = ng(), r === e && (r = null), h.charCodeAt(s) === 58 ? (f = Te, s++) : (f = e, p(Ie)), f !== e ? (d = i, i = gu(r)) : (s = i, i = e), i;
  }
  function Qp() {
    var i, r, f;
    return i = s, r = Sr(), r !== e ? (f = ug(), f !== e ? (d = i, i = wu(r, f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function zp() {
    var i, r, f, l, t, o, c;
    if (i = s, h.substr(s, 2) === si ? (r = si, s += 2) : (r = e, p(vo)), r !== e)
      if (f = De(), f === e && (B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H))), f !== e) {
        for (l = [], t = J(), t === e && (t = s, h.charCodeAt(s) === 46 ? (o = j, s++) : (o = e, p(X)), o !== e ? (c = J(), c !== e ? (o = [o, c], t = o) : (s = t, t = e)) : (s = t, t = e)); t !== e; )
          l.push(t), t = J(), t === e && (t = s, h.charCodeAt(s) === 46 ? (o = j, s++) : (o = e, p(X)), o !== e ? (c = J(), c !== e ? (o = [o, c], t = o) : (s = t, t = e)) : (s = t, t = e));
        d = i, i = du();
      } else
        s = i, i = e;
    else
      s = i, i = e;
    return i;
  }
  function Zp() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 63 ? (r = Hs, s++) : (r = e, p(er)), r !== e ? (f = Al(), f !== e ? (d = i, i = $u(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function qp() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 36 ? (r = ri, s++) : (r = e, p(Ti)), r !== e ? (f = Al(), f !== e ? (d = i, i = vu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function Kp() {
    var i, r, f, l, t, o, c, n;
    if (i = s, h.charCodeAt(s) === 64 ? (r = ii, s++) : (r = e, p(Ri)), r !== e) {
      if (f = [], oi.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Ii)), l !== e)
        for (; l !== e; )
          f.push(l), oi.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Ii));
      else
        f = e;
      if (f !== e) {
        if (l = [], t = s, h.charCodeAt(s) === 45 ? (o = le, s++) : (o = e, p(te)), o !== e) {
          if (c = [], ps.test(h.charAt(s)) ? (n = h.charAt(s), s++) : (n = e, p(Cs)), n !== e)
            for (; n !== e; )
              c.push(n), ps.test(h.charAt(s)) ? (n = h.charAt(s), s++) : (n = e, p(Cs));
          else
            c = e;
          c !== e ? (o = [o, c], t = o) : (s = t, t = e);
        } else
          s = t, t = e;
        for (; t !== e; )
          if (l.push(t), t = s, h.charCodeAt(s) === 45 ? (o = le, s++) : (o = e, p(te)), o !== e) {
            if (c = [], ps.test(h.charAt(s)) ? (n = h.charAt(s), s++) : (n = e, p(Cs)), n !== e)
              for (; n !== e; )
                c.push(n), ps.test(h.charAt(s)) ? (n = h.charAt(s), s++) : (n = e, p(Cs));
            else
              c = e;
            c !== e ? (o = [o, c], t = o) : (s = t, t = e);
          } else
            s = t, t = e;
        d = i, i = bu(f, l);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Ve() {
    var i, r, f;
    if (i = s, r = [], B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H)), f !== e)
      for (; f !== e; )
        r.push(f), B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H));
    else
      r = e;
    return r !== e && (d = i, r = Au()), i = r, i;
  }
  function Fr() {
    var i, r, f, l, t;
    for (i = s, r = [], B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H)); f !== e; )
      r.push(f), B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H));
    if (h.charCodeAt(s) === 46 ? (f = j, s++) : (f = e, p(X)), f !== e) {
      if (l = [], B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H)), t !== e)
        for (; t !== e; )
          l.push(t), B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H));
      else
        l = e;
      l !== e ? (d = i, i = Cu()) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function xr() {
    var i, r, f, l, t;
    if (i = s, r = [], B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H)), f !== e)
      for (; f !== e; )
        r.push(f), B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H));
    else
      r = e;
    if (r !== e)
      if (h.charCodeAt(s) === 46 ? (f = j, s++) : (f = e, p(X)), f !== e) {
        for (l = [], B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H)); t !== e; )
          l.push(t), B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H));
        t = Dr(), t !== e ? (d = i, i = _u()) : (s = i, i = e);
      } else
        s = i, i = e;
    else
      s = i, i = e;
    if (i === e) {
      if (i = s, h.charCodeAt(s) === 46 ? (r = j, s++) : (r = e, p(X)), r !== e) {
        if (f = [], B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H)), l !== e)
          for (; l !== e; )
            f.push(l), B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H));
        else
          f = e;
        f !== e ? (l = Dr(), l !== e ? (d = i, i = mu()) : (s = i, i = e)) : (s = i, i = e);
      } else
        s = i, i = e;
      if (i === e) {
        if (i = s, r = [], B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H)), f !== e)
          for (; f !== e; )
            r.push(f), B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H));
        else
          r = e;
        r !== e ? (f = Dr(), f !== e ? (d = i, i = Eu()) : (s = i, i = e)) : (s = i, i = e);
      }
    }
    return i;
  }
  function Jp() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 43 ? (r = be, s++) : (r = e, p(me)), r !== e ? (f = Ve(), f !== e ? (d = i, i = yu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function eg() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 43 ? (r = be, s++) : (r = e, p(me)), r !== e ? (f = Fr(), f !== e ? (d = i, i = Pu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function sg() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 43 ? (r = be, s++) : (r = e, p(me)), r !== e ? (f = xr(), f !== e ? (d = i, i = Lu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function rg() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 45 ? (r = le, s++) : (r = e, p(te)), r !== e ? (f = Ve(), f !== e ? (d = i, i = Tu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function ig() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 45 ? (r = le, s++) : (r = e, p(te)), r !== e ? (f = Fr(), f !== e ? (d = i, i = Ru(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function lg() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 45 ? (r = le, s++) : (r = e, p(te)), r !== e ? (f = xr(), f !== e ? (d = i, i = Iu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function Dr() {
    var i, r, f, l, t;
    if (i = s, ha.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(bo)), r !== e) {
      if (ca.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(Ao)), f === e && (f = null), l = [], B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H)), t !== e)
        for (; t !== e; )
          l.push(t), B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H));
      else
        l = e;
      l !== e ? (r = [r, f, l], i = r) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function tg() {
    var i, r, f, l;
    if (i = s, h.charCodeAt(s) === 39 ? (r = Be, s++) : (r = e, p(He)), r !== e) {
      for (f = [], hi.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Oi)), l === e && (l = Ee()); l !== e; )
        f.push(l), hi.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Oi)), l === e && (l = Ee());
      h.charCodeAt(s) === 39 ? (l = Be, s++) : (l = e, p(He)), l !== e ? (d = i, i = Ou(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function ag() {
    var i, r, f, l;
    if (i = s, h.charCodeAt(s) === 34 ? (r = os, s++) : (r = e, p(_s)), r !== e) {
      for (f = [], ci.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Ni)), l === e && (l = Ee()); l !== e; )
        f.push(l), ci.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Ni)), l === e && (l = Ee());
      h.charCodeAt(s) === 34 ? (l = os, s++) : (l = e, p(_s)), l !== e ? (d = i, i = Nu(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function fg() {
    var i, r, f, l, t, o;
    if (i = s, h.substr(s, 3) === hs ? (r = hs, s += 3) : (r = e, p(Si)), r !== e) {
      for (f = [], l = s, h.substr(s, 2) === cs ? (t = cs, s += 2) : (t = e, p(Fi)), t === e && (h.charCodeAt(s) === 39 ? (t = Be, s++) : (t = e, p(He))), t === e && (t = null), ni.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(xi)), o === e && (o = Ee()), o !== e ? (t = [t, o], l = t) : (s = l, l = e); l !== e; )
        f.push(l), l = s, h.substr(s, 2) === cs ? (t = cs, s += 2) : (t = e, p(Fi)), t === e && (h.charCodeAt(s) === 39 ? (t = Be, s++) : (t = e, p(He))), t === e && (t = null), ni.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(xi)), o === e && (o = Ee()), o !== e ? (t = [t, o], l = t) : (s = l, l = e);
      h.substr(s, 3) === hs ? (l = hs, s += 3) : (l = e, p(Si)), l !== e ? (d = i, i = Su(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function og() {
    var i, r, f, l, t, o;
    if (i = s, h.substr(s, 3) === ns ? (r = ns, s += 3) : (r = e, p(Di)), r !== e) {
      for (f = [], l = s, h.substr(s, 2) === us ? (t = us, s += 2) : (t = e, p(Gi)), t === e && (h.charCodeAt(s) === 34 ? (t = os, s++) : (t = e, p(_s))), t === e && (t = null), ui.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(Ui)), o === e && (o = Ee()), o !== e ? (t = [t, o], l = t) : (s = l, l = e); l !== e; )
        f.push(l), l = s, h.substr(s, 2) === us ? (t = us, s += 2) : (t = e, p(Gi)), t === e && (h.charCodeAt(s) === 34 ? (t = os, s++) : (t = e, p(_s))), t === e && (t = null), ui.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(Ui)), o === e && (o = Ee()), o !== e ? (t = [t, o], l = t) : (s = l, l = e);
      h.substr(s, 3) === ns ? (l = ns, s += 3) : (l = e, p(Di)), l !== e ? (d = i, i = Fu(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Ee() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 92 ? (r = li, s++) : (r = e, p(Bi)), r !== e ? (na.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(Co)), f !== e ? (d = i, i = xu()) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function ye() {
    var i, r, f, l;
    if (i = s, h.charCodeAt(s) === 40 ? (r = C, s++) : (r = e, p(y)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      h.charCodeAt(s) === 41 ? (l = E, s++) : (l = e, p(P)), l !== e ? (r = [r, f, l], i = r) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function a() {
    var i;
    return i = hg(), i === e && (i = Gr(), i === e && (i = Ur())), i;
  }
  function Gr() {
    var i;
    return ua.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(_o)), i;
  }
  function Ur() {
    var i;
    return pa.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(mo)), i;
  }
  function Os() {
    var i;
    return ga.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Eo)), i;
  }
  function vl() {
    var i, r, f, l;
    if (i = s, h.charCodeAt(s) === 35 ? (r = Ys, s++) : (r = e, p(fr)), r !== e) {
      for (f = [], l = Os(); l !== e; )
        f.push(l), l = Os();
      l = Ur(), l !== e ? (d = i, i = Du()) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function hg() {
    var i, r, f, l, t;
    for (i = s, Ur(), r = [], f = Gr(); f !== e; )
      r.push(f), f = Gr();
    if (h.charCodeAt(s) === 35 ? (f = Ys, s++) : (f = e, p(fr)), f !== e) {
      for (l = [], t = Os(); t !== e; )
        l.push(t), t = Os();
      d = i, i = Gu();
    } else
      s = i, i = e;
    return i;
  }
  function cg() {
    var i, r, f, l;
    if (i = s, h.charCodeAt(s) === 91 ? (r = ks, s++) : (r = e, p(rr)), r !== e) {
      for (f = [], l = a(); l !== e; )
        f.push(l), l = a();
      h.charCodeAt(s) === 93 ? (l = js, s++) : (l = e, p(ir)), l !== e ? (r = [r, f, l], i = r) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function bl() {
    var i;
    return wa.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(yo)), i === e && (da.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Po)), i === e && ($a.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Lo)), i === e && (va.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(To)), i === e && (ba.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Ro)), i === e && (Aa.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Io)), i === e && (Ca.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Oo)), i === e && (_a.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(No)), i === e && (ma.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(So)), i === e && (Ea.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Fo)), i === e && (ya.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(xo)), i === e && (Pa.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Do)), i === e && (La.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Go)))))))))))))), i;
  }
  function De() {
    var i;
    return i = bl(), i === e && (h.charCodeAt(s) === 95 ? (i = ti, s++) : (i = e, p(Hi))), i;
  }
  function Al() {
    var i, r, f, l;
    if (i = s, r = De(), r === e && (B.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(H))), r !== e) {
      for (f = [], l = De(), l === e && (B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H)), l === e && (Qs.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(or)), l === e && (zs.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(hr)), l === e && (Zs.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(cr)))))); l !== e; )
        f.push(l), l = De(), l === e && (B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H)), l === e && (Qs.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(or)), l === e && (zs.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(hr)), l === e && (Zs.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(cr))))));
      d = i, i = Uu();
    } else
      s = i, i = e;
    return i;
  }
  function J() {
    var i;
    return i = De(), i === e && (h.charCodeAt(s) === 45 ? (i = le, s++) : (i = e, p(te)), i === e && (B.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(H)), i === e && (Qs.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(or)), i === e && (zs.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(hr)), i === e && (Zs.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(cr))))))), i;
  }
  function ng() {
    var i, r, f, l, t, o;
    if (i = s, r = bl(), r !== e) {
      for (f = [], l = J(), l === e && (l = s, h.charCodeAt(s) === 46 ? (t = j, s++) : (t = e, p(X)), t !== e ? (o = J(), o !== e ? (t = [t, o], l = t) : (s = l, l = e)) : (s = l, l = e)); l !== e; )
        f.push(l), l = J(), l === e && (l = s, h.charCodeAt(s) === 46 ? (t = j, s++) : (t = e, p(X)), t !== e ? (o = J(), o !== e ? (t = [t, o], l = t) : (s = l, l = e)) : (s = l, l = e));
      d = i, i = Bu();
    } else
      s = i, i = e;
    return i;
  }
  function ug() {
    var i, r, f, l, t, o;
    if (i = s, r = De(), r === e && (h.charCodeAt(s) === 58 ? (r = Te, s++) : (r = e, p(Ie)), r === e && (B.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(H)), r === e && (r = We()))), r !== e) {
      for (f = [], l = J(), l === e && (h.charCodeAt(s) === 58 ? (l = Te, s++) : (l = e, p(Ie)), l === e && (l = We())), l === e && (l = s, h.charCodeAt(s) === 46 ? (t = j, s++) : (t = e, p(X)), t !== e ? (o = J(), o === e && (h.charCodeAt(s) === 58 ? (o = Te, s++) : (o = e, p(Ie)), o === e && (o = We())), o !== e ? (t = [t, o], l = t) : (s = l, l = e)) : (s = l, l = e)); l !== e; )
        f.push(l), l = J(), l === e && (h.charCodeAt(s) === 58 ? (l = Te, s++) : (l = e, p(Ie)), l === e && (l = We())), l === e && (l = s, h.charCodeAt(s) === 46 ? (t = j, s++) : (t = e, p(X)), t !== e ? (o = J(), o === e && (h.charCodeAt(s) === 58 ? (o = Te, s++) : (o = e, p(Ie)), o === e && (o = We())), o !== e ? (t = [t, o], l = t) : (s = l, l = e)) : (s = l, l = e));
      d = i, i = Hu();
    } else
      s = i, i = e;
    return i;
  }
  function We() {
    var i;
    return i = pg(), i === e && (i = gg()), i;
  }
  function pg() {
    var i, r, f, l;
    return i = s, h.charCodeAt(s) === 37 ? (r = ai, s++) : (r = e, p(Mi)), r !== e ? (f = Cl(), f !== e ? (l = Cl(), l !== e ? (r = [r, f, l], i = r) : (s = i, i = e)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function Cl() {
    var i;
    return B.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(H)), i === e && (Ta.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Uo)), i === e && (Ra.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Bo)))), i;
  }
  function gg() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 92 ? (r = li, s++) : (r = e, p(Bi)), r !== e ? (h.charCodeAt(s) === 95 ? (f = ti, s++) : (f = e, p(Hi)), f === e && (h.charCodeAt(s) === 126 ? (f = fa, s++) : (f = e, p(Ho)), f === e && (h.charCodeAt(s) === 46 ? (f = j, s++) : (f = e, p(X)), f === e && (h.charCodeAt(s) === 45 ? (f = le, s++) : (f = e, p(te)), f === e && (h.charCodeAt(s) === 33 ? (f = Ms, s++) : (f = e, p(sr)), f === e && (h.charCodeAt(s) === 36 ? (f = ri, s++) : (f = e, p(Ti)), f === e && (h.charCodeAt(s) === 38 ? (f = oa, s++) : (f = e, p(Mo)), f === e && (h.charCodeAt(s) === 39 ? (f = Be, s++) : (f = e, p(He)), f === e && (h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f === e && (h.charCodeAt(s) === 41 ? (f = E, s++) : (f = e, p(P)), f === e && (h.charCodeAt(s) === 42 ? (f = se, s++) : (f = e, p(re)), f === e && (h.charCodeAt(s) === 43 ? (f = be, s++) : (f = e, p(me)), f === e && (h.charCodeAt(s) === 44 ? (f = D, s++) : (f = e, p(G)), f === e && (h.charCodeAt(s) === 59 ? (f = Le, s++) : (f = e, p(Re)), f === e && (h.charCodeAt(s) === 58 ? (f = Te, s++) : (f = e, p(Ie)), f === e && (h.charCodeAt(s) === 61 ? (f = is, s++) : (f = e, p(bs)), f === e && (h.charCodeAt(s) === 47 ? (f = ne, s++) : (f = e, p(pe)), f === e && (h.charCodeAt(s) === 63 ? (f = Hs, s++) : (f = e, p(er)), f === e && (h.charCodeAt(s) === 35 ? (f = Ys, s++) : (f = e, p(fr)), f === e && (h.charCodeAt(s) === 64 ? (f = ii, s++) : (f = e, p(Ri)), f === e && (h.charCodeAt(s) === 37 ? (f = ai, s++) : (f = e, p(Mi)))))))))))))))))))))), f !== e ? (r = [r, f], i = r) : (s = i, i = e)) : (s = i, i = e), i;
  }
  let _l = {};
  if (Es = Y(), Es !== e && s === h.length)
    return Es;
  throw Es !== e && s < h.length && p(Mu()), ku(
    nr,
    ae < h.length ? h.charAt(ae) : null,
    ae < h.length ? ur(ae, ae + 1) : ur(ae, ae)
  );
}
function A1(h, A) {
  function e() {
    this.constructor = h;
  }
  e.prototype = A.prototype, h.prototype = new e();
}
function jr(h, A, e, T) {
  var S = Error.call(this, h);
  return Object.setPrototypeOf && Object.setPrototypeOf(S, jr.prototype), S.expected = A, S.found = e, S.location = T, S.name = "SyntaxError", S;
}
A1(jr, Error);
function $g(h, A, e) {
  return e = e || " ", h.length > A ? h : (A -= h.length, e += e.repeat(A), h + e.slice(0, A));
}
jr.prototype.format = function(h) {
  var A = "Error: " + this.message;
  if (this.location) {
    var e = null, T;
    for (T = 0; T < h.length; T++)
      if (h[T].source === this.location.source) {
        e = h[T].text.split(/\r\n|\n|\r/g);
        break;
      }
    var S = this.location.start, Y = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(S) : S, he = this.location.source + ":" + Y.line + ":" + Y.column;
    if (e) {
      var q = this.location.end, we = $g("", Y.line.toString().length, " "), O = e[S.line - 1], x = S.line === q.line ? q.column : O.length + 1, C = x - S.column || 1;
      A += `
 --> ` + he + `
` + we + ` |
` + Y.line + " | " + O + `
` + we + " | " + $g("", S.column - 1, " ") + $g("", C, "^");
    } else
      A += `
 at ` + he;
  }
  return A;
};
jr.buildMessage = function(h, A) {
  var e = {
    literal: function(O) {
      return '"' + S(O.text) + '"';
    },
    class: function(O) {
      var x = O.parts.map(function(C) {
        return Array.isArray(C) ? Y(C[0]) + "-" + Y(C[1]) : Y(C);
      });
      return "[" + (O.inverted ? "^" : "") + x.join("") + "]";
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
  function T(O) {
    return O.charCodeAt(0).toString(16).toUpperCase();
  }
  function S(O) {
    return O.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(x) {
      return "\\x0" + T(x);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(x) {
      return "\\x" + T(x);
    });
  }
  function Y(O) {
    return O.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(x) {
      return "\\x0" + T(x);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(x) {
      return "\\x" + T(x);
    });
  }
  function he(O) {
    return e[O.type](O);
  }
  function q(O) {
    var x = O.map(he), C, ce;
    if (x.sort(), x.length > 0) {
      for (C = 1, ce = 1; C < x.length; C++)
        x[C - 1] !== x[C] && (x[ce] = x[C], ce++);
      x.length = ce;
    }
    switch (x.length) {
      case 1:
        return x[0];
      case 2:
        return x[0] + " or " + x[1];
      default:
        return x.slice(0, -1).join(", ") + ", or " + x[x.length - 1];
    }
  }
  function we(O) {
    return O ? '"' + S(O) + '"' : "end of input";
  }
  return "Expected " + q(h) + " but " + we(A) + " found.";
};
function C1(h, A) {
  A = A !== void 0 ? A : {};
  var e = {}, T = A.grammarSource, S = { DOCUMENT: ji }, Y = ji, he = "base", q = "prefix", we = "select", O = "distinct", x = "reduced", C = "(", ce = "as", E = ")", se = "*", Xr = "construct", qe = "where", de = "{", $e = "}", Ll = "describe", Tl = "ask", Rl = "from", Gs = "named", Il = "group", Vr = "by", Ol = "having", Nl = "order", Sl = "asc", Fl = "desc", xl = "limit", Dl = "offset", Wr = "values", Le = ";", Gl = "load", ve = "silent", Ul = "into", Bl = "clear", Hl = "drop", Ml = "create", kl = "add", Us = "to", jl = "move", Xl = "copy", Yr = "insert", Qr = "data", Bs = "delete", Vl = "with", Wl = "using", zr = "default", Ke = "graph", Yl = "all", j = ".", Ql = "optional", zl = "service", Zl = "bind", Zr = "UNDEF", ql = "minus", qr = "union", Kl = "filter", D = ",", Je = "a", es = "|", ne = "/", Kr = "^", Hs = "?", be = "+", Ms = "!", ks = "[", js = "]", ss = "||", rs = "&&", is = "=", ls = "!=", Xs = "<", Vs = ">", ts = "<=", as = ">=", fs = "in", Ws = "not", le = "-", Jl = "str", et = "lang", st = "langmatches", rt = "datatype", it = "bound", lt = "iri", tt = "uri", at = "bnode", ft = "rand", ot = "abs", ht = "ceil", ct = "floor", nt = "round", ut = "concat", pt = "strlen", gt = "ucase", wt = "lcase", dt = "encode_for_uri", $t = "contains", vt = "strbefore", bt = "strstarts", At = "strends", Ct = "strafter", _t = "year", mt = "month", Et = "day", yt = "hours", Pt = "minutes", Lt = "seconds", Tt = "timezone", Rt = "tz", It = "now", Ot = "uuid", Nt = "struuid", St = "md5", Ft = "sha1", xt = "sha256", Dt = "sha384", Gt = "sha512", Ut = "coalesce", Bt = "if", Ht = "strlang", Mt = "strdt", kt = "sameterm", jt = "isuri", Xt = "isiri", Vt = "isblank", Wt = "isliteral", Yt = "isnumeric", Qt = "regex", zt = "substr", Zt = "replace", Jr = "exists", qt = "count", Kt = "sum", Jt = "min", ea = "max", sa = "avg", ra = "sample", ia = "group_concat", la = "separator", ei = "^^", ta = "true", aa = "false", Te = ":", si = "_:", ri = "$", ii = "@", Be = "'", os = '"', hs = "'''", cs = "''", ns = '"""', us = '""', li = "\\", Ys = "#", ti = "_", ai = "%", fa = "~", oa = "&", fi = /^[^<>"{}|\^`\\\0- ]/, B = /^[0-9]/, oi = /^[a-zA-Z]/, ps = /^[a-zA-Z0-9]/, ha = /^[eE]/, ca = /^[+\-]/, hi = /^[^'\\\n\r]/, ci = /^[^"\\\n\r]/, ni = /^[^'\\]/, ui = /^[^"\\]/, na = /^[tbnrf\\"']/, ua = /^[ \t]/, pa = /^[\r\n]/, ga = /^[^\r\n]/, wa = /^[A-Z]/, da = /^[a-z]/, $a = /^[\xC0-\xD6]/, va = /^[\xD8-\xF6]/, ba = /^[\xF8-\u02FF]/, Aa = /^[\u0370-\u037D]/, Ca = /^[\u037F-\u1FFF]/, _a = /^[\u200C-\u200D]/, ma = /^[\u2070-\u218F]/, Ea = /^[\u2C00-\u2FEF]/, ya = /^[\u3001-\uD7FF]/, Pa = /^[\uF900-\uFDCF]/, La = /^[\uFDF0-\uFFFD]/, Qs = /^[\xB7]/, zs = /^[\u0300-\u036F]/, Zs = /^[\u203F-\u2040]/, Ta = /^[A-F]/, Ra = /^[a-f]/, Ia = v("BASE", !0), Oa = v("PREFIX", !0), Na = v("SELECT", !0), ue = v("DISTINCT", !0), Sa = v("REDUCED", !0), y = v("(", !1), gs = v("AS", !0), P = v(")", !1), re = v("*", !1), pi = v("CONSTRUCT", !0), ws = v("WHERE", !0), Ae = v("{", !1), Ce = v("}", !1), Fa = v("DESCRIBE", !0), xa = v("ASK", !0), Da = v("FROM", !0), qs = v("NAMED", !0), Ga = v("GROUP", !0), gi = v("BY", !0), Ua = v("HAVING", !0), Ba = v("ORDER", !0), Ha = v("ASC", !0), Ma = v("DESC", !0), ka = v("LIMIT", !0), ja = v("OFFSET", !0), wi = v("VALUES", !0), Re = v(";", !1), Xa = v("LOAD", !0), _e = v("SILENT", !0), Va = v("INTO", !0), Wa = v("CLEAR", !0), Ya = v("DROP", !0), Qa = v("CREATE", !0), za = v("ADD", !0), Ks = v("TO", !0), Za = v("MOVE", !0), qa = v("COPY", !0), di = v("INSERT", !0), $i = v("DATA", !0), Js = v("DELETE", !0), Ka = v("WITH", !0), Ja = v("USING", !0), vi = v("DEFAULT", !0), ds = v("GRAPH", !0), ef = v("ALL", !0), X = v(".", !1), sf = v("OPTIONAL", !0), rf = v("SERVICE", !0), lf = v("BIND", !0), tf = v("UNDEF", !1), af = v("MINUS", !0), bi = v("UNION", !0), ff = v("FILTER", !0), G = v(",", !1), $s = v("a", !1), vs = v("|", !1), pe = v("/", !1), Ai = v("^", !1), er = v("?", !1), me = v("+", !1), sr = v("!", !1), rr = v("[", !1), ir = v("]", !1), Ci = v("||", !1), _i = v("&&", !1), bs = v("=", !1), mi = v("!=", !1), lr = v("<", !1), tr = v(">", !1), Ei = v("<=", !1), yi = v(">=", !1), As = v("IN", !0), ar = v("NOT", !0), te = v("-", !1), of = v("STR", !0), hf = v("LANG", !0), cf = v("LANGMATCHES", !0), nf = v("DATATYPE", !0), uf = v("BOUND", !0), pf = v("IRI", !0), gf = v("URI", !0), wf = v("BNODE", !0), df = v("RAND", !0), $f = v("ABS", !0), vf = v("CEIL", !0), bf = v("FLOOR", !0), Af = v("ROUND", !0), Cf = v("CONCAT", !0), _f = v("STRLEN", !0), mf = v("UCASE", !0), Ef = v("LCASE", !0), yf = v("ENCODE_FOR_URI", !0), Pf = v("CONTAINS", !0), Lf = v("STRBEFORE", !0), Tf = v("STRSTARTS", !0), Rf = v("STRENDS", !0), If = v("STRAFTER", !0), Of = v("YEAR", !0), Nf = v("MONTH", !0), Sf = v("DAY", !0), Ff = v("HOURS", !0), xf = v("MINUTES", !0), Df = v("SECONDS", !0), Gf = v("TIMEZONE", !0), Uf = v("TZ", !0), Bf = v("NOW", !0), Hf = v("UUID", !0), Mf = v("STRUUID", !0), kf = v("MD5", !0), jf = v("SHA1", !0), Xf = v("SHA256", !0), Vf = v("SHA384", !0), Wf = v("SHA512", !0), Yf = v("COALESCE", !0), Qf = v("IF", !0), zf = v("STRLANG", !0), Zf = v("STRDT", !0), qf = v("sameTerm", !0), Kf = v("isURI", !0), Jf = v("isIRI", !0), eo = v("isBLANK", !0), so = v("isLITERAL", !0), ro = v("isNUMERIC", !0), io = v("REGEX", !0), lo = v("SUBSTR", !0), to = v("REPLACE", !0), Pi = v("EXISTS", !0), ao = v("COUNT", !0), fo = v("SUM", !0), oo = v("MIN", !0), ho = v("MAX", !0), co = v("AVG", !0), no = v("SAMPLE", !0), uo = v("GROUP_CONCAT", !0), po = v("SEPARATOR", !0), go = v("^^", !1), wo = v("true", !0), $o = v("false", !0), Li = F(["<", ">", '"', "{", "}", "|", "^", "`", "\\", ["\0", " "]], !0, !1), Ie = v(":", !1), vo = v("_:", !1), H = F([["0", "9"]], !1, !1), Ti = v("$", !1), Ri = v("@", !1), Ii = F([["a", "z"], ["A", "Z"]], !1, !1), Cs = F([["a", "z"], ["A", "Z"], ["0", "9"]], !1, !1), bo = F(["e", "E"], !1, !1), Ao = F(["+", "-"], !1, !1), He = v("'", !1), Oi = F(["'", "\\", `
`, "\r"], !0, !1), _s = v('"', !1), Ni = F(['"', "\\", `
`, "\r"], !0, !1), Si = v("'''", !1), Fi = v("''", !1), xi = F(["'", "\\"], !0, !1), Di = v('"""', !1), Gi = v('""', !1), Ui = F(['"', "\\"], !0, !1), Bi = v("\\", !1), Co = F(["t", "b", "n", "r", "f", "\\", '"', "'"], !1, !1), _o = F([" ", "	"], !1, !1), mo = F(["\r", `
`], !1, !1), Eo = F(["\r", `
`], !0, !1), fr = v("#", !1), yo = F([["A", "Z"]], !1, !1), Po = F([["a", "z"]], !1, !1), Lo = F([["À", "Ö"]], !1, !1), To = F([["Ø", "ö"]], !1, !1), Ro = F([["ø", "˿"]], !1, !1), Io = F([["Ͱ", "ͽ"]], !1, !1), Oo = F([["Ϳ", "῿"]], !1, !1), No = F([["‌", "‍"]], !1, !1), So = F([["⁰", "↏"]], !1, !1), Fo = F([["Ⰰ", "⿯"]], !1, !1), xo = F([["、", "퟿"]], !1, !1), Do = F([["豈", "﷏"]], !1, !1), Go = F([["ﷰ", "�"]], !1, !1), Hi = v("_", !1), or = F(["·"], !1, !1), hr = F([["̀", "ͯ"]], !1, !1), cr = F([["‿", "⁀"]], !1, !1), Mi = v("%", !1), Uo = F([["A", "F"]], !1, !1), Bo = F([["a", "f"]], !1, !1), Ho = v("~", !1), Mo = v("&", !1), ko = function(r, f) {
    let l = {};
    r.length ? l = {
      headers: r,
      ...f
    } : l = f;
    const t = Object.entries(_l).map(([o, c]) => ({
      pos: parseInt(o),
      text: c
    }));
    return t.length && (l.comments = t), l;
  }, jo = function(r, f, l) {
    let t = { type: "Query" };
    return r.length && (t.prologue = r), t.queryBody = f, l && (t.values = l), t;
  }, Xo = function(r) {
    return {
      type: "BaseDecl",
      base: r
    };
  }, Vo = function(r, f) {
    return {
      type: "PrefixDecl",
      prefix: r,
      iri: f
    };
  }, Wo = function(r, f, l, t) {
    return f.length && (r.from = f), r = {
      ...r,
      where: l,
      ...t
    }, r;
  }, Yo = function(r, f, l, t) {
    let o = {
      ...r,
      where: f,
      ...l
    };
    return t && (o.values = t), o;
  }, Qo = function(r, f) {
    let l;
    f === "*" ? l = ["*"] : l = f.map((o) => o.length === 2 ? o[1] : {
      expression: o[3],
      as: o[7]
    });
    let t = { select: l };
    if (r) {
      const o = r.toUpperCase();
      o === "DISTINCT" ? t.distinct = !0 : o === "REDUCED" && (t.reduced = !0);
    }
    return t.location = I(), t;
  }, zo = function(r, f, l, t) {
    let o = { type: "construct" };
    return f.length && (o.from = f), o = {
      ...o,
      template: r,
      where: l,
      ...t,
      location: I()
    }, o;
  }, Zo = function(r, f, l) {
    let t = { type: "construct" };
    return r.length && (t.from = r), t = {
      ...t,
      where: [f],
      ...l,
      location: I()
    }, t;
  }, qo = function(r, f, l, t) {
    let o = { type: "describe" };
    return f.length && (o.from = f), o.describe = r, l && (o.where = l), o = {
      ...o,
      ...t,
      location: I()
    }, o;
  }, Ko = function(r, f, l) {
    let t = { type: "ask" };
    return r.length && (t.from = r), t = {
      ...t,
      where: f,
      ...l,
      location: I()
    }, t;
  }, Jo = function(r) {
    return r;
  }, eh = function(r) {
    return {
      graph: r,
      location: I()
    };
  }, sh = function(r) {
    return {
      namedGraph: r,
      location: I()
    };
  }, rh = function(r) {
    return r.graphPattern || r;
  }, ih = function(r, f, l, t) {
    let o = {};
    return r && (o.group = r), f && (o.having = f), l && (o.orderBy = l), t && (o.limitOffset = t), o;
  }, lh = function(r) {
    return r;
  }, th = function(r) {
    return r;
  }, ah = function(r) {
    return r;
  }, fh = function(r, f) {
    return f ? {
      expressionType: "aliasedexpression",
      bracketted: !0,
      expression: r,
      as: f[2],
      location: I()
    } : {
      bracketted: !0,
      ...r
    };
  }, oh = function(r) {
    return r;
  }, hh = function(r) {
    return r;
  }, ch = function(r) {
    return r;
  }, nh = function(r) {
    return r;
  }, uh = function(r, f) {
    let l = {};
    return r.toUpperCase() === "ASC" ? l = {
      asc: !0,
      ...f
    } : r.toUpperCase() === "DESC" && (l = {
      desc: !0,
      ...f
    }), l;
  }, ph = function(r) {
    return r;
  }, gh = function(r) {
    let f = [r[0]];
    return r[1] && f.push(r[1]), f;
  }, wh = function(r) {
    return {
      limit: parseInt(r.literal)
    };
  }, dh = function(r) {
    return {
      offset: parseInt(r.literal)
    };
  }, $h = function(r) {
    return r ? r[1] : null;
  }, vh = function(r, f) {
    let l = {};
    r.length && (l.prologue = r);
    let t = [];
    return f && (t = [f[1]], f[2] && (t = t.concat(f[2][3].update))), l.update = t, l;
  }, bh = function(r, f, l) {
    let t = {
      type: "load",
      silent: r,
      sourceGraph: f
    };
    return l && (t.destinyGraph = l[2]), t;
  }, Ah = function(r, f) {
    return {
      type: "clear",
      silent: r,
      destinyGraph: f
    };
  }, Ch = function(r, f) {
    return {
      type: "drop",
      silent: r,
      destinyGraph: f
    };
  }, _h = function(r, f) {
    return {
      type: "create",
      silent: r,
      destinyGraph: f
    };
  }, mh = function(r, f, l) {
    return {
      type: "add",
      silent: r,
      graphs: [f, l]
    };
  }, Eh = function(r, f, l) {
    return {
      type: "move",
      silent: r,
      graphs: [f, l]
    };
  }, yh = function(r, f, l) {
    return {
      type: "copy",
      silent: r,
      graphs: [f, l]
    };
  }, Ph = function(r) {
    return {
      type: "insertdata",
      insert: r
    };
  }, Lh = function(r) {
    return {
      type: "deletedata",
      delete: r
    };
  }, Th = function(r) {
    return {
      type: "deletewhere",
      delete: r
    };
  }, Rh = function(r, f, l, t) {
    let o = {
      type: "modify"
    };
    return r && (o.with = r[2]), f.length === 3 ? (o.delete = f[0], f[2] && (o.insert = f[2])) : o.insert = f, l.length && (o.using = l), o.where = t.graphPattern, o;
  }, Ih = function(r) {
    return r;
  }, Oh = function(r) {
    return r;
  }, Nh = function(r) {
    return r.length === 3 ? {
      named: !0,
      iri: r[2]
    } : {
      iri: r
    };
  }, Sh = function() {
    return "default";
  }, Fh = function(r) {
    return r;
  }, xh = function(r) {
    return r;
  }, Dh = function(r) {
    return r;
  }, Gh = function() {
    return "default";
  }, Uh = function() {
    return "named";
  }, Bh = function() {
    return "all";
  }, Hh = function(r) {
    return r;
  }, Mh = function(r) {
    return r;
  }, kh = function(r, f) {
    let l = [];
    return r && (l = l.concat(r)), f.forEach((t) => {
      l = l.concat(t[0]), t[2] && (l = l.concat(t[2]));
    }), l;
  }, jh = function(r, f) {
    return {
      graph: r,
      ...f
    };
  }, Xh = function(r, f) {
    let l = [r];
    return f && f[3] && (l = l.concat(f[3].triplePattern)), {
      triplePattern: l,
      location: I()
    };
  }, Vh = function(r) {
    return r;
  }, Wh = function(r, f) {
    let l = [];
    return r && l.push(r), f.forEach((t) => {
      l.push(t[0]), t[4] && l.push(t[4]);
    }), {
      graphPattern: l,
      location: I()
    };
  }, Yh = function(r, f) {
    let l = [r];
    if (f && f[3])
      if (i(r.subject, f[3].triplePattern[0].subject)) {
        l = JSON.parse(JSON.stringify(f[3].triplePattern));
        const t = r.properties.length - 1;
        i(r.properties[t].predicate, f[3].triplePattern[0].properties[0].predicate) ? (l[0].properties = r.properties, l[0].properties[t].objects = r.properties[t].objects.concat(f[3].triplePattern[0].properties[0].objects), l[0].properties = l[0].properties.concat(f[3].triplePattern[0].properties.slice(1))) : l[0].properties = r.properties.concat(f[3].triplePattern[0].properties);
      } else
        l = [r].concat(f[3].triplePattern);
    return {
      type: "TriplesBlock",
      triplePattern: l,
      location: I()
    };
  }, Qh = function(r) {
    return {
      type: "OptionalGraphPattern",
      optional: r.graphPattern || r,
      location: I()
    };
  }, zh = function(r, f) {
    return {
      type: "GraphGraphPattern",
      graph: r,
      ...f
    };
  }, Zh = function(r, f, l) {
    let t = {
      type: "ServiceGraphPattern",
      service: f,
      pattern: l.graphPattern || l
    };
    return r && (t.silent = !0), t.location = I(), t;
  }, qh = function(r, f) {
    return {
      type: "Bind",
      bind: r,
      as: f,
      location: I()
    };
  }, Kh = function(r) {
    return r;
  }, Jh = function(r, f) {
    return {
      oneVar: r,
      data: f,
      location: I()
    };
  }, ec = function(r, f) {
    return {
      variables: r,
      data: f,
      location: I()
    };
  }, sc = function(r) {
    return r;
  }, rc = function(r) {
    return r;
  }, ic = function(r) {
    return {
      type: "MinusGraphPattern",
      minus: r.graphPattern || r,
      location: I()
    };
  }, lc = function(r, f) {
    return f.length ? {
      union: [r].concat(f.map((l) => l[3])),
      location: I()
    } : r;
  }, tc = function(r) {
    return {
      type: "Filter",
      filter: r,
      location: I()
    };
  }, ac = function(r, f) {
    return {
      functionRef: r,
      args: f.list,
      location: I()
    };
  }, fc = function() {
    return {
      list: []
    };
  }, oc = function(r, f, l) {
    return {
      distinct: !!r,
      list: [f, ...l]
    };
  }, hc = function() {
    return [];
  }, cc = function(r, f) {
    return [r, ...f];
  }, nc = function(r) {
    return r;
  }, uc = function(r, f) {
    let l = [r];
    return f && f[3] && (l = l.concat(f[3].triplePattern)), {
      triplePattern: l,
      location: I()
    };
  }, pc = function(r, f) {
    return {
      subject: r,
      properties: f
    };
  }, gc = function(r, f) {
    return {
      subject: r,
      properties: f
    };
  }, wc = function(r, f, l) {
    let t = [];
    return t.push({ predicate: r, objects: f }), l.forEach((o) => {
      o[3] && t.push({ predicate: o[3][0], objects: o[3][2] });
    }), t;
  }, dc = function() {
    return {
      a: !0,
      location: I()
    };
  }, $c = function(r, f) {
    return [r, ...f];
  }, vc = function(r, f) {
    return {
      subject: r,
      properties: f
    };
  }, bc = function(r, f) {
    return {
      subject: r,
      properties: f
    };
  }, Ac = function(r, f, l) {
    let t = [];
    return t.push({ predicate: r, objects: f }), l.forEach((o) => {
      o[3] && t.push({ predicate: o[3][0], objects: o[3][2] });
    }), t;
  }, Cc = function(r, f) {
    return [r, ...f];
  }, _c = function(r, f) {
    if (f.length) {
      let l = [r];
      for (let t = 0; t < f.length; t++)
        l.push(f[t][3]);
      return {
        alternative: l,
        location: I()
      };
    } else
      return r;
  }, mc = function(r, f) {
    if (f.length) {
      let l = [r];
      for (let t = 0; t < f.length; t++)
        l.push(f[t][3]);
      return {
        sequence: l,
        location: I()
      };
    } else
      return r;
  }, Ec = function(r, f) {
    return f && (r.modifier = f), r;
  }, yc = function(r) {
    return r.inverse = !0, r;
  }, Pc = function() {
    return {
      a: !0,
      location: I()
    };
  }, Lc = function(r) {
    return {
      bracketted: !0,
      ...r
    };
  }, Tc = function(r) {
    return {
      collection: r,
      location: I()
    };
  }, Rc = function(r) {
    return {
      blankNodeProperties: r,
      location: I()
    };
  }, Ic = function(r) {
    return {
      collection: r,
      location: I()
    };
  }, Oc = function(r) {
    return {
      blankNodeProperties: r,
      location: I()
    };
  }, Nc = function(r) {
    return r;
  }, Sc = function(r) {
    return r;
  }, Fc = function(r) {
    return r;
  }, xc = function(r) {
    return r;
  }, Dc = function(r) {
    return {
      ...r,
      location: I()
    };
  }, Gc = function(r, f) {
    return f.length ? {
      expressionType: "conditionalor",
      operands: [r, ...f]
    } : r;
  }, Uc = function(r, f) {
    return f.length ? {
      expressionType: "conditionaland",
      operands: [r, ...f]
    } : r;
  }, Bc = function(r, f) {
    if (f.length) {
      const l = r;
      let t = f[0][1].toUpperCase(), o = f[0][3];
      return t === "NOT" && (t += " " + f[0][3].toUpperCase(), o = f[0][5]), {
        expressionType: "relationalexpression",
        operator: t,
        op1: l,
        op2: o
      };
    } else
      return r;
  }, Hc = function(r, f) {
    if (f.length === 0)
      return r;
    let l = [];
    return f.forEach((t) => {
      t.length == 4 && l.push({
        operator: t[1],
        expression: t[3]
      });
    }), {
      expressionType: "additiveexpression",
      op1: r,
      ops: l
    };
  }, Mc = function(r, f) {
    return f.length ? {
      expressionType: "multiplicativeexpression",
      first: r,
      rest: f.map((l) => ({ operator: l[1], expression: l[3] }))
    } : r;
  }, kc = function(r) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "!",
      expression: r
    };
  }, jc = function(r) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "+",
      expression: r
    };
  }, Xc = function(r) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "-",
      expression: r
    };
  }, Vc = function(r) {
    return {
      expressionType: "atomic",
      value: r
    };
  }, Wc = function(r) {
    return {
      expressionType: "atomic",
      value: r
    };
  }, Yc = function(r) {
    return {
      expressionType: "atomic",
      value: r
    };
  }, Qc = function(r) {
    return {
      expressionType: "atomic",
      value: r
    };
  }, zc = function(r) {
    return {
      bracketted: !0,
      ...r
    };
  }, Zc = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "str",
      args: [r]
    };
  }, qc = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "lang",
      args: [r]
    };
  }, Kc = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "langMatches",
      args: [r, f]
    };
  }, Jc = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "datatype",
      args: [r]
    };
  }, en = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "bound",
      args: [r]
    };
  }, sn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "IRI",
      args: [r]
    };
  }, rn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "URI",
      args: [r]
    };
  }, ln = function(r) {
    const f = {
      expressionType: "builtincall",
      builtincall: "BNODE",
      args: null
    };
    return r.length === 5 && (f.args = [r[2]]), f;
  }, tn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "rand"
    };
  }, an = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "abs",
      args: [r]
    };
  }, fn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "ceil",
      args: [r]
    };
  }, on = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "floor",
      args: [r]
    };
  }, hn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "round",
      args: [r]
    };
  }, cn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "CONCAT",
      args: r
    };
  }, nn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRLEN",
      args: [r]
    };
  }, un = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "UCASE",
      args: [r]
    };
  }, pn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "LCASE",
      args: [r]
    };
  }, gn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "ENCODE_FOR_URI",
      args: [r]
    };
  }, wn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "CONTAINS",
      args: [r, f]
    };
  }, dn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRBEFORE",
      args: [r, f]
    };
  }, $n = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRSTARTS",
      args: [r, f]
    };
  }, vn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRENDS",
      args: [r, f]
    };
  }, bn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRAFTER",
      args: [r, f]
    };
  }, An = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "year",
      args: [r]
    };
  }, Cn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "month",
      args: [r]
    };
  }, _n = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "day",
      args: [r]
    };
  }, mn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "hours",
      args: [r]
    };
  }, En = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "minutes",
      args: [r]
    };
  }, yn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "seconds",
      args: [r]
    };
  }, Pn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "timezone",
      args: [r]
    };
  }, Ln = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "tz",
      args: [r]
    };
  }, Tn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "now"
    };
  }, Rn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "UUID"
    };
  }, In = function() {
    return {
      expressionType: "builtincall",
      builtincall: "STRUUID"
    };
  }, On = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "MD5",
      args: [r]
    };
  }, Nn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA1",
      args: [r]
    };
  }, Sn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA256",
      args: [r]
    };
  }, Fn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA384",
      args: [r]
    };
  }, xn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA512",
      args: [r]
    };
  }, Dn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "COALESCE",
      args: r
    };
  }, Gn = function(r, f, l) {
    return {
      expressionType: "builtincall",
      builtincall: "IF",
      args: [r, f, l]
    };
  }, Un = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRLANG",
      args: [r, f]
    };
  }, Bn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRDT",
      args: [r, f]
    };
  }, Hn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "sameTerm",
      args: [r, f]
    };
  }, Mn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "isURI",
      args: [r]
    };
  }, kn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "isBlank",
      args: [r]
    };
  }, jn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "isLiteral",
      args: [r]
    };
  }, Xn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "isNumeric",
      args: [r]
    };
  }, Vn = function(r, f, l) {
    let t = {
      expressionType: "regex",
      text: r,
      pattern: f
    };
    return l && (t.flags = l[2]), t;
  }, Wn = function(r, f, l) {
    let t = [r, f];
    return l && t.push(l[2]), {
      expressionType: "builtincall",
      builtincall: "substr",
      args: t
    };
  }, Yn = function(r, f, l, t) {
    let o = [r, f, l];
    return t && o.push(t[2]), {
      expressionType: "builtincall",
      builtincall: "replace",
      args: o
    };
  }, Qn = function(r) {
    return {
      exists: r.graphPattern || r
    };
  }, zn = function(r) {
    return {
      notexists: r.graphPattern || r
    };
  }, Zn = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "count",
      distinct: !!r,
      expression: f
    };
  }, qn = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "sum",
      distinct: !!r,
      expression: f
    };
  }, Kn = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "min",
      distinct: !!r,
      expression: f
    };
  }, Jn = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "max",
      distinct: !!r,
      expression: f
    };
  }, eu = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "avg",
      distinct: !!r,
      expression: f
    };
  }, su = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "sample",
      distinct: !!r,
      expression: f
    };
  }, ru = function(r, f, l) {
    let t = null;
    return l != null && l.length && (t = l[7]), {
      expressionType: "aggregate",
      aggregateType: "group_concat",
      expression: f,
      separator: t,
      distinct: !!r
    };
  }, iu = function(r, f) {
    let l = {
      expressionType: "irireforfunction",
      iriref: r
    };
    return f && (l.args = f.list), l;
  }, lu = function(r, f) {
    return typeof f == "string" ? r.lang = f : f && (r.dataType = f[1]), r.location = I(), r;
  }, tu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !0
    };
  }, au = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !1
    };
  }, fu = function(r) {
    return {
      iri: r,
      location: I()
    };
  }, ou = function(r) {
    return r;
  }, hu = function(r) {
    return {
      iriPrefix: r[0],
      iriLocal: r[1],
      location: I()
    };
  }, cu = function(r) {
    return {
      iriPrefix: r,
      iriLocal: "",
      location: I()
    };
  }, nu = function(r) {
    return {
      blankNode: r,
      location: I()
    };
  }, uu = function() {
    return {
      blankNode: "[]",
      location: I()
    };
  }, pu = function(r) {
    return r.join("");
  }, gu = function(r) {
    return r || "";
  }, wu = function(r, f) {
    return [r, f];
  }, du = function() {
    return K();
  }, $u = function(r) {
    return {
      variable: r
    };
  }, vu = function(r) {
    return {
      varType: "$",
      variable: r
    };
  }, bu = function(r, f) {
    let l = r.join("");
    return f.length && (l += "-" + f[0][1].join("")), l.toLowerCase();
  }, Au = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#integer",
      literal: K()
    };
  }, Cu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#decimal",
      literal: K()
    };
  }, _u = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: K()
    };
  }, mu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: K()
    };
  }, Eu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: K()
    };
  }, yu = function(r) {
    return r.literal = "+" + r.literal, r;
  }, Pu = function(r) {
    return r.literal = "+" + r.literal, r;
  }, Lu = function(r) {
    return r.literal = "+" + r.literal, r;
  }, Tu = function(r) {
    return r.literal = "-" + r.literal, r;
  }, Ru = function(r) {
    return r.literal = "-" + r.literal, r;
  }, Iu = function(r) {
    return r.literal = "-" + r.literal, r;
  }, Ou = function(r) {
    return {
      quote: "'",
      literal: r.join("")
      // except ' \ LF CR
    };
  }, Nu = function(r) {
    return {
      quote: '"',
      literal: r.join("")
      // except " \ LF CR
    };
  }, Su = function(r) {
    return {
      quote: "'''",
      literal: r.map((f) => f[0] ? f[0] + f[1] : f[1]).join("")
    };
  }, Fu = function(r) {
    return {
      quote: '"""',
      literal: r.map((f) => f[0] ? f[0] + f[1] : f[1]).join("")
    };
  }, xu = function() {
    return K();
  }, Du = function() {
    return K();
  }, Gu = function() {
    return _l[I().start.offset] = K(), "";
  }, Uu = function() {
    return K();
  }, Bu = function() {
    return K();
  }, Hu = function() {
    return K();
  }, s = 0, d = 0, ms = [{ line: 1, column: 1 }], ae = 0, nr = [], Es;
  if ("startRule" in A) {
    if (!(A.startRule in S))
      throw new Error(`Can't start parsing from rule "` + A.startRule + '".');
    Y = S[A.startRule];
  }
  function K() {
    return h.substring(d, s);
  }
  function I() {
    return ur(d, s);
  }
  function v(r, f) {
    return { type: "literal", text: r, ignoreCase: f };
  }
  function F(r, f, l) {
    return { type: "class", parts: r, inverted: f, ignoreCase: l };
  }
  function Mu() {
    return { type: "end" };
  }
  function ki(r) {
    var f = ms[r], l;
    if (f)
      return f;
    for (l = r - 1; !ms[l]; )
      l--;
    for (f = ms[l], f = {
      line: f.line,
      column: f.column
    }; l < r; )
      h.charCodeAt(l) === 10 ? (f.line++, f.column = 1) : f.column++, l++;
    return ms[r] = f, f;
  }
  function ur(r, f, l) {
    var t = ki(r), o = ki(f), c = {
      source: T,
      start: {
        offset: r,
        line: t.line,
        column: t.column
      },
      end: {
        offset: f,
        line: o.line,
        column: o.column
      }
    };
    return c;
  }
  function p(r) {
    s < ae || (s > ae && (ae = s, nr = []), nr.push(r));
  }
  function ku(r, f, l) {
    return new jr(
      jr.buildMessage(r, f),
      r,
      f,
      l
    );
  }
  function ji() {
    var r, f, l, t, o, c;
    for (r = s, f = [], l = vl(); l !== e; )
      f.push(l), l = vl();
    for (l = [], t = a(); t !== e; )
      l.push(t), t = a();
    if (t = ju(), t !== e) {
      for (o = [], c = a(); c !== e; )
        o.push(c), c = a();
      d = r, r = ko(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function ju() {
    var r;
    return r = Xu(), r === e && (r = el()), r;
  }
  function Xu() {
    var r, f, l, t, o;
    for (r = s, f = Xi(), l = [], t = a(); t !== e; )
      l.push(t), t = a();
    return t = Vu(), t === e && (t = Yu(), t === e && (t = Qu(), t === e && (t = zu()))), t !== e ? (o = Ji(), d = r, r = jo(f, t, o)) : (s = r, r = e), r;
  }
  function Xi() {
    var r, f;
    for (r = [], f = Vi(), f === e && (f = Wi()); f !== e; )
      r.push(f), f = Vi(), f === e && (f = Wi());
    return r;
  }
  function Vi() {
    var r, f, l, t, o;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.substr(s, 4).toLowerCase() === he ? (l = h.substr(s, 4), s += 4) : (l = e, p(Ia)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      o = Nr(), o !== e ? (d = r, r = Xo(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Wi() {
    var r, f, l, t, o, c, n;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.substr(s, 6).toLowerCase() === q ? (l = h.substr(s, 6), s += 6) : (l = e, p(Oa)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = Sr(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Nr(), n !== e ? (d = r, r = Vo(o, n)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Vu() {
    var r, f, l, t, o, c, n, u;
    if (r = s, f = Yi(), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (t = [], o = fe(); o !== e; )
        t.push(o), o = fe();
      for (o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (c = Me(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Oe(), d = r, r = Wo(f, t, c, u);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Wu() {
    var r, f, l, t, o, c, n;
    if (r = s, f = Yi(), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = Me(), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = Oe(), n = Ji(), d = r, r = Yo(f, t, c, n);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Yi() {
    var r, f, l, t, o, c, n, u, g, w, $, b, m, L, R, N, M;
    if (r = s, h.substr(s, 6).toLowerCase() === we ? (f = h.substr(s, 6), s += 6) : (f = e, p(Na)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (h.substr(s, 8).toLowerCase() === O ? (t = h.substr(s, 8), s += 8) : (t = e, p(ue)), t === e && (h.substr(s, 7).toLowerCase() === x ? (t = h.substr(s, 7), s += 7) : (t = e, p(Sa))), t === e && (t = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      for (c = [], n = s, u = [], g = a(); g !== e; )
        u.push(g), g = a();
      if (g = k(), g !== e ? (u = [u, g], n = u) : (s = n, n = e), n === e) {
        for (n = s, u = [], g = a(); g !== e; )
          u.push(g), g = a();
        if (h.charCodeAt(s) === 40 ? (g = C, s++) : (g = e, p(y)), g !== e) {
          for (w = [], $ = a(); $ !== e; )
            w.push($), $ = a();
          if ($ = _(), $ !== e) {
            for (b = [], m = a(); m !== e; )
              b.push(m), m = a();
            if (h.substr(s, 2).toLowerCase() === ce ? (m = h.substr(s, 2), s += 2) : (m = e, p(gs)), m !== e) {
              for (L = [], R = a(); R !== e; )
                L.push(R), R = a();
              if (R = k(), R !== e) {
                for (N = [], M = a(); M !== e; )
                  N.push(M), M = a();
                h.charCodeAt(s) === 41 ? (M = E, s++) : (M = e, p(P)), M !== e ? (u = [u, g, w, $, b, m, L, R, N, M], n = u) : (s = n, n = e);
              } else
                s = n, n = e;
            } else
              s = n, n = e;
          } else
            s = n, n = e;
        } else
          s = n, n = e;
      }
      if (n !== e)
        for (; n !== e; ) {
          for (c.push(n), n = s, u = [], g = a(); g !== e; )
            u.push(g), g = a();
          if (g = k(), g !== e ? (u = [u, g], n = u) : (s = n, n = e), n === e) {
            for (n = s, u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (h.charCodeAt(s) === 40 ? (g = C, s++) : (g = e, p(y)), g !== e) {
              for (w = [], $ = a(); $ !== e; )
                w.push($), $ = a();
              if ($ = _(), $ !== e) {
                for (b = [], m = a(); m !== e; )
                  b.push(m), m = a();
                if (h.substr(s, 2).toLowerCase() === ce ? (m = h.substr(s, 2), s += 2) : (m = e, p(gs)), m !== e) {
                  for (L = [], R = a(); R !== e; )
                    L.push(R), R = a();
                  if (R = k(), R !== e) {
                    for (N = [], M = a(); M !== e; )
                      N.push(M), M = a();
                    h.charCodeAt(s) === 41 ? (M = E, s++) : (M = e, p(P)), M !== e ? (u = [u, g, w, $, b, m, L, R, N, M], n = u) : (s = n, n = e);
                  } else
                    s = n, n = e;
                } else
                  s = n, n = e;
              } else
                s = n, n = e;
            } else
              s = n, n = e;
          }
        }
      else
        c = e;
      c === e && (h.charCodeAt(s) === 42 ? (c = se, s++) : (c = e, p(re))), c !== e ? (d = r, r = Qo(t, c)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Yu() {
    var r, f, l, t, o, c, n, u, g, w, $, b, m, L;
    if (r = s, h.substr(s, 9).toLowerCase() === Xr ? (f = h.substr(s, 9), s += 9) : (f = e, p(pi)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = Pp(), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        for (c = [], n = fe(); n !== e; )
          c.push(n), n = fe();
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (u = Me(), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          w = Oe(), d = r, r = zo(t, c, u, w);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    if (r === e)
      if (r = s, h.substr(s, 9).toLowerCase() === Xr ? (f = h.substr(s, 9), s += 9) : (f = e, p(pi)), f !== e) {
        for (l = [], t = a(); t !== e; )
          l.push(t), t = a();
        for (t = [], o = fe(); o !== e; )
          t.push(o), o = fe();
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.substr(s, 5).toLowerCase() === qe ? (c = h.substr(s, 5), s += 5) : (c = e, p(ws)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (h.charCodeAt(s) === 123 ? (u = de, s++) : (u = e, p(Ae)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            for (w = Se(), w === e && (w = null), $ = [], b = a(); b !== e; )
              $.push(b), b = a();
            if (h.charCodeAt(s) === 125 ? (b = $e, s++) : (b = e, p(Ce)), b !== e) {
              for (m = [], L = a(); L !== e; )
                m.push(L), L = a();
              L = Oe(), d = r, r = Zo(t, w, L);
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    return r;
  }
  function Qu() {
    var r, f, l, t, o, c, n, u, g, w;
    if (r = s, h.substr(s, 8).toLowerCase() === Ll ? (f = h.substr(s, 8), s += 8) : (f = e, p(Fa)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = [], o = xe(), o !== e)
        for (; o !== e; )
          t.push(o), o = xe();
      else
        t = e;
      if (t === e && (h.charCodeAt(s) === 42 ? (t = se, s++) : (t = e, p(re))), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        for (c = [], n = fe(); n !== e; )
          c.push(n), n = fe();
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        for (u = Me(), u === e && (u = null), g = [], w = a(); w !== e; )
          g.push(w), w = a();
        w = Oe(), d = r, r = qo(t, c, u, w);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function zu() {
    var r, f, l, t, o, c, n, u, g;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.substr(s, 3).toLowerCase() === Tl ? (l = h.substr(s, 3), s += 3) : (l = e, p(xa)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      for (o = [], c = fe(); c !== e; )
        o.push(c), c = fe();
      for (c = [], n = a(); n !== e; )
        c.push(n), n = a();
      if (n = Me(), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        g = Oe(), d = r, r = Ko(o, n, g);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function fe() {
    var r, f, l, t, o, c;
    if (r = s, h.substr(s, 4).toLowerCase() === Rl ? (f = h.substr(s, 4), s += 4) : (f = e, p(Da)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = Zu(), t === e && (t = qu()), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        d = r, r = Jo(t);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Zu() {
    var r, f, l;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    return l = V(), l !== e ? (d = r, r = eh(l)) : (s = r, r = e), r;
  }
  function qu() {
    var r, f, l, t;
    if (r = s, h.substr(s, 5).toLowerCase() === Gs ? (f = h.substr(s, 5), s += 5) : (f = e, p(qs)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      t = V(), t !== e ? (d = r, r = sh(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Me() {
    var r, f, l;
    for (r = s, h.substr(s, 5).toLowerCase() === qe ? (h.substr(s, 5), s += 5) : p(ws), f = [], l = a(); l !== e; )
      f.push(l), l = a();
    return l = ie(), l !== e ? (d = r, r = rh(l)) : (s = r, r = e), r;
  }
  function Oe() {
    var r, f, l, t, o;
    return r = s, f = Ku(), f === e && (f = null), l = Ju(), l === e && (l = null), t = ep(), t === e && (t = null), o = sp(), o === e && (o = null), d = r, r = ih(f, l, t, o), r;
  }
  function Ku() {
    var r, f, l, t, o, c, n;
    if (r = s, h.substr(s, 5).toLowerCase() === Il ? (f = h.substr(s, 5), s += 5) : (f = e, p(Ga)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (h.substr(s, 2).toLowerCase() === Vr ? (t = h.substr(s, 2), s += 2) : (t = e, p(gi)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (c = [], n = Qi(), n !== e)
          for (; n !== e; )
            c.push(n), n = Qi();
        else
          c = e;
        c !== e ? (d = r, r = lh(c)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Qi() {
    var r, f, l, t, o, c, n, u, g, w, $;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (l = Pr(), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      d = r, r = th(l);
    } else
      s = r, r = e;
    if (r === e) {
      for (r = s, f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = cl(), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        d = r, r = ah(l);
      } else
        s = r, r = e;
      if (r === e) {
        for (r = s, f = [], l = a(); l !== e; )
          f.push(l), l = a();
        if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
          for (t = [], o = a(); o !== e; )
            t.push(o), o = a();
          if (o = _(), o !== e) {
            for (c = [], n = a(); n !== e; )
              c.push(n), n = a();
            if (n = s, h.substr(s, 2).toLowerCase() === ce ? (u = h.substr(s, 2), s += 2) : (u = e, p(gs)), u !== e) {
              for (g = [], w = a(); w !== e; )
                g.push(w), w = a();
              w = k(), w !== e ? (u = [u, g, w], n = u) : (s = n, n = e);
            } else
              s = n, n = e;
            for (n === e && (n = null), u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
              for (w = [], $ = a(); $ !== e; )
                w.push($), $ = a();
              d = r, r = fh(o, n);
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
        if (r === e) {
          for (r = s, f = [], l = a(); l !== e; )
            f.push(l), l = a();
          if (l = k(), l !== e) {
            for (t = [], o = a(); o !== e; )
              t.push(o), o = a();
            d = r, r = oh(l);
          } else
            s = r, r = e;
        }
      }
    }
    return r;
  }
  function Ju() {
    var r, f, l, t, o;
    if (r = s, h.substr(s, 6).toLowerCase() === Ol ? (f = h.substr(s, 6), s += 6) : (f = e, p(Ua)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = [], o = zi(), o !== e)
        for (; o !== e; )
          t.push(o), o = zi();
      else
        t = e;
      t !== e ? (d = r, r = hh(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function zi() {
    var r, f, l, t;
    if (r = s, f = wr(), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      d = r, r = ch(f);
    } else
      s = r, r = e;
    return r;
  }
  function ep() {
    var r, f, l, t, o, c, n, u;
    if (r = s, h.substr(s, 5).toLowerCase() === Nl ? (f = h.substr(s, 5), s += 5) : (f = e, p(Ba)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (h.substr(s, 2).toLowerCase() === Vr ? (t = h.substr(s, 2), s += 2) : (t = e, p(gi)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (c = [], n = Zi(), n !== e)
          for (; n !== e; )
            c.push(n), n = Zi();
        else
          c = e;
        if (c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          d = r, r = nh(c);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Zi() {
    var r, f, l, t, o, c;
    if (r = s, h.substr(s, 3).toLowerCase() === Sl ? (f = h.substr(s, 3), s += 3) : (f = e, p(Ha)), f === e && (h.substr(s, 4).toLowerCase() === Fl ? (f = h.substr(s, 4), s += 4) : (f = e, p(Ma))), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = yr(), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        d = r, r = uh(f, t);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    if (r === e)
      if (r = s, f = wr(), f === e && (f = k()), f !== e) {
        for (l = [], t = a(); t !== e; )
          l.push(t), t = a();
        d = r, r = ph(f);
      } else
        s = r, r = e;
    return r;
  }
  function sp() {
    var r, f, l, t;
    return r = s, f = s, l = qi(), l !== e ? (t = Ki(), t === e && (t = null), l = [l, t], f = l) : (s = f, f = e), f === e && (f = s, l = Ki(), l !== e ? (t = qi(), t === e && (t = null), l = [l, t], f = l) : (s = f, f = e)), f !== e && (d = r, f = gh(f)), r = f, r;
  }
  function qi() {
    var r, f, l, t, o, c;
    if (r = s, h.substr(s, 5).toLowerCase() === xl ? (f = h.substr(s, 5), s += 5) : (f = e, p(ka)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = Ve(), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        d = r, r = wh(t);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Ki() {
    var r, f, l, t, o, c;
    if (r = s, h.substr(s, 6).toLowerCase() === Dl ? (f = h.substr(s, 6), s += 6) : (f = e, p(ja)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = Ve(), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        d = r, r = dh(t);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Ji() {
    var r, f, l, t;
    return r = s, f = s, h.substr(s, 6).toLowerCase() === Wr ? (l = h.substr(s, 6), s += 6) : (l = e, p(wi)), l !== e ? (t = ol(), t !== e ? (l = [l, t], f = l) : (s = f, f = e)) : (s = f, f = e), f === e && (f = null), d = r, f = $h(f), r = f, r;
  }
  function el() {
    var r, f, l, t, o, c, n, u, g, w;
    for (r = s, f = Xi(), l = s, t = [], o = a(); o !== e; )
      t.push(o), o = a();
    if (o = rp(), o !== e) {
      for (c = s, n = [], u = a(); u !== e; )
        n.push(u), u = a();
      if (h.charCodeAt(s) === 59 ? (u = Le, s++) : (u = e, p(Re)), u !== e) {
        for (g = [], w = a(); w !== e; )
          g.push(w), w = a();
        w = el(), n = [n, u, g, w], c = n;
      } else
        s = c, c = e;
      c === e && (c = null), t = [t, o, c], l = t;
    } else
      s = l, l = e;
    for (l === e && (l = null), t = [], o = a(); o !== e; )
      t.push(o), o = a();
    return d = r, r = vh(f, l), r;
  }
  function rp() {
    var r;
    return r = ip(), r === e && (r = lp(), r === e && (r = tp(), r === e && (r = fp(), r === e && (r = op(), r === e && (r = hp(), r === e && (r = ap(), r === e && (r = cp(), r === e && (r = np(), r === e && (r = up(), r === e && (r = pp())))))))))), r;
  }
  function ip() {
    var r, f, l, t, o, c, n, u, g, w, $;
    if (r = s, h.substr(s, 4).toLowerCase() === Gl ? (f = h.substr(s, 4), s += 4) : (f = e, p(Xa)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (t = h.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (c = V(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (u = s, h.substr(s, 4).toLowerCase() === Ul ? (g = h.substr(s, 4), s += 4) : (g = e, p(Va)), g !== e) {
          for (w = [], $ = a(); $ !== e; )
            w.push($), $ = a();
          $ = pr(), $ !== e ? (g = [g, w, $], u = g) : (s = u, u = e);
        } else
          s = u, u = e;
        u === e && (u = null), d = r, r = bh(t, c, u);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function lp() {
    var r, f, l, t, o, c;
    if (r = s, h.substr(s, 5).toLowerCase() === Bl ? (f = h.substr(s, 5), s += 5) : (f = e, p(Wa)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (t = h.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      c = il(), c !== e ? (d = r, r = Ah(t, c)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function tp() {
    var r, f, l, t, o, c;
    if (r = s, h.substr(s, 4).toLowerCase() === Hl ? (f = h.substr(s, 4), s += 4) : (f = e, p(Ya)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (t = h.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      c = il(), c !== e ? (d = r, r = Ch(t, c)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function ap() {
    var r, f, l, t, o, c;
    if (r = s, h.substr(s, 6).toLowerCase() === Ml ? (f = h.substr(s, 6), s += 6) : (f = e, p(Qa)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (t = h.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      c = pr(), c !== e ? (d = r, r = _h(t, c)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function fp() {
    var r, f, l, t, o, c, n, u, g, w;
    if (r = s, h.substr(s, 3).toLowerCase() === kl ? (f = h.substr(s, 3), s += 3) : (f = e, p(za)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (t = h.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (c = Ne(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.substr(s, 2).toLowerCase() === Us ? (u = h.substr(s, 2), s += 2) : (u = e, p(Ks)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          w = Ne(), w !== e ? (d = r, r = mh(t, c, w)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function op() {
    var r, f, l, t, o, c, n, u, g, w;
    if (r = s, h.substr(s, 4).toLowerCase() === jl ? (f = h.substr(s, 4), s += 4) : (f = e, p(Za)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (t = h.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (c = Ne(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.substr(s, 2).toLowerCase() === Us ? (u = h.substr(s, 2), s += 2) : (u = e, p(Ks)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          w = Ne(), w !== e ? (d = r, r = Eh(t, c, w)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function hp() {
    var r, f, l, t, o, c, n, u, g, w;
    if (r = s, h.substr(s, 4).toLowerCase() === Xl ? (f = h.substr(s, 4), s += 4) : (f = e, p(qa)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (t = h.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (c = Ne(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.substr(s, 2).toLowerCase() === Us ? (u = h.substr(s, 2), s += 2) : (u = e, p(Ks)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          w = Ne(), w !== e ? (d = r, r = yh(t, c, w)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function cp() {
    var r, f, l, t, o, c;
    if (r = s, h.substr(s, 6).toLowerCase() === Yr ? (f = h.substr(s, 6), s += 6) : (f = e, p(di)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (h.substr(s, 4).toLowerCase() === Qr ? (t = h.substr(s, 4), s += 4) : (t = e, p($i)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = ll(), c !== e ? (d = r, r = Ph(c)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function np() {
    var r, f, l, t, o;
    if (r = s, h.substr(s, 6).toLowerCase() === Bs ? (f = h.substr(s, 6), s += 6) : (f = e, p(Js)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      h.substr(s, 4).toLowerCase() === Qr ? (t = h.substr(s, 4), s += 4) : (t = e, p($i)), t !== e ? (o = ll(), o !== e ? (d = r, r = Lh(o)) : (s = r, r = e)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function up() {
    var r, f, l, t, o, c;
    if (r = s, h.substr(s, 6).toLowerCase() === Bs ? (f = h.substr(s, 6), s += 6) : (f = e, p(Js)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (h.substr(s, 5).toLowerCase() === qe ? (t = h.substr(s, 5), s += 5) : (t = e, p(ws)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = gr(), c !== e ? (d = r, r = Th(c)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function pp() {
    var r, f, l, t, o, c, n, u, g, w, $;
    if (r = s, f = s, h.substr(s, 4).toLowerCase() === Vl ? (l = h.substr(s, 4), s += 4) : (l = e, p(Ka)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = V(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        l = [l, t, o, c], f = l;
      } else
        s = f, f = e;
    } else
      s = f, f = e;
    if (f === e && (f = null), l = s, t = gp(), t !== e) {
      for (o = [], c = a(); c !== e; )
        o.push(c), c = a();
      c = sl(), c === e && (c = null), t = [t, o, c], l = t;
    } else
      s = l, l = e;
    if (l === e && (l = sl()), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      for (o = [], c = rl(); c !== e; )
        o.push(c), c = rl();
      for (c = [], n = a(); n !== e; )
        c.push(n), n = a();
      if (h.substr(s, 5).toLowerCase() === qe ? (n = h.substr(s, 5), s += 5) : (n = e, p(ws)), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        if (g = ie(), g !== e) {
          for (w = [], $ = a(); $ !== e; )
            w.push($), $ = a();
          d = r, r = Rh(f, l, o, g);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function gp() {
    var r, f, l;
    return r = s, h.substr(s, 6).toLowerCase() === Bs ? (f = h.substr(s, 6), s += 6) : (f = e, p(Js)), f !== e ? (l = gr(), l !== e ? (d = r, r = Ih(l)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function sl() {
    var r, f, l;
    return r = s, h.substr(s, 6).toLowerCase() === Yr ? (f = h.substr(s, 6), s += 6) : (f = e, p(di)), f !== e ? (l = gr(), l !== e ? (d = r, r = Oh(l)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function rl() {
    var r, f, l, t, o, c, n, u;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.substr(s, 5).toLowerCase() === Wl ? (l = h.substr(s, 5), s += 5) : (l = e, p(Ja)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = V(), o === e)
        if (o = s, h.substr(s, 5).toLowerCase() === Gs ? (c = h.substr(s, 5), s += 5) : (c = e, p(qs)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = V(), u !== e ? (c = [c, n, u], o = c) : (s = o, o = e);
        } else
          s = o, o = e;
      o !== e ? (d = r, r = Nh(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Ne() {
    var r, f, l, t;
    if (r = s, h.substr(s, 7).toLowerCase() === zr ? (f = h.substr(s, 7), s += 7) : (f = e, p(vi)), f !== e && (d = r, f = Sh()), r = f, r === e) {
      for (r = s, h.substr(s, 5).toLowerCase() === Ke ? (f = h.substr(s, 5), s += 5) : (f = e, p(ds)), f === e && (f = null), l = [], t = a(); t !== e; )
        l.push(t), t = a();
      t = V(), t !== e ? (d = r, r = Fh(t)) : (s = r, r = e);
    }
    return r;
  }
  function pr() {
    var r, f, l, t;
    if (r = s, h.substr(s, 5).toLowerCase() === Ke ? (f = h.substr(s, 5), s += 5) : (f = e, p(ds)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      t = V(), t !== e ? (d = r, r = xh(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function il() {
    var r, f;
    return r = s, f = pr(), f !== e && (d = r, f = Dh(f)), r = f, r === e && (r = s, h.substr(s, 7).toLowerCase() === zr ? (f = h.substr(s, 7), s += 7) : (f = e, p(vi)), f !== e && (d = r, f = Gh()), r = f, r === e && (r = s, h.substr(s, 5).toLowerCase() === Gs ? (f = h.substr(s, 5), s += 5) : (f = e, p(qs)), f !== e && (d = r, f = Uh()), r = f, r === e && (r = s, h.substr(s, 3).toLowerCase() === Yl ? (f = h.substr(s, 3), s += 3) : (f = e, p(ef)), f !== e && (d = r, f = Bh()), r = f))), r;
  }
  function gr() {
    var r, f, l, t, o, c, n, u, g;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.charCodeAt(s) === 123 ? (l = de, s++) : (l = e, p(Ae)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      for (o = tl(), c = [], n = a(); n !== e; )
        c.push(n), n = a();
      if (h.charCodeAt(s) === 125 ? (n = $e, s++) : (n = e, p(Ce)), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        d = r, r = Hh(o);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function ll() {
    var r, f, l, t, o, c, n, u, g;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.charCodeAt(s) === 123 ? (l = de, s++) : (l = e, p(Ae)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      for (o = tl(), c = [], n = a(); n !== e; )
        c.push(n), n = a();
      if (h.charCodeAt(s) === 125 ? (n = $e, s++) : (n = e, p(Ce)), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        d = r, r = Mh(o);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function tl() {
    var r, f, l, t, o, c, n;
    for (r = s, f = Se(), f === e && (f = null), l = [], t = s, o = al(), o !== e ? (h.charCodeAt(s) === 46 ? (c = j, s++) : (c = e, p(X)), c === e && (c = null), n = Se(), n === e && (n = null), o = [o, c, n], t = o) : (s = t, t = e); t !== e; )
      l.push(t), t = s, o = al(), o !== e ? (h.charCodeAt(s) === 46 ? (c = j, s++) : (c = e, p(X)), c === e && (c = null), n = Se(), n === e && (n = null), o = [o, c, n], t = o) : (s = t, t = e);
    return d = r, r = kh(f, l), r;
  }
  function al() {
    var r, f, l, t, o, c, n, u, g, w, $, b, m;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.substr(s, 5).toLowerCase() === Ke ? (l = h.substr(s, 5), s += 5) : (l = e, p(ds)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = xe(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 123 ? (n = de, s++) : (n = e, p(Ae)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          for (g = Se(), g === e && (g = null), w = [], $ = a(); $ !== e; )
            w.push($), $ = a();
          if (h.charCodeAt(s) === 125 ? ($ = $e, s++) : ($ = e, p(Ce)), $ !== e) {
            for (b = [], m = a(); m !== e; )
              b.push(m), m = a();
            d = r, r = jh(o, g);
          } else
            s = r, r = e;
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Se() {
    var r, f, l, t, o, c, n;
    if (r = s, f = pl(), f !== e) {
      for (l = s, t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.charCodeAt(s) === 46 ? (o = j, s++) : (o = e, p(X)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Se(), n === e && (n = null), t = [t, o, c, n], l = t;
      } else
        s = l, l = e;
      l === e && (l = null), d = r, r = Xh(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function ie() {
    var r, f, l, t, o, c;
    if (r = s, h.charCodeAt(s) === 123 ? (f = de, s++) : (f = e, p(Ae)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = Wu(), t === e && (t = wp()), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        h.charCodeAt(s) === 125 ? (c = $e, s++) : (c = e, p(Ce)), c !== e ? (d = r, r = Vh(t)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function wp() {
    var r, f, l, t, o, c, n, u, g, w;
    for (r = s, f = ys(), f === e && (f = null), l = [], t = a(); t !== e; )
      l.push(t), t = a();
    if (t = [], o = s, c = fl(), c !== e) {
      for (n = [], u = a(); u !== e; )
        n.push(u), u = a();
      for (h.charCodeAt(s) === 46 ? (u = j, s++) : (u = e, p(X)), u === e && (u = null), g = [], w = a(); w !== e; )
        g.push(w), w = a();
      w = ys(), w === e && (w = null), c = [c, n, u, g, w], o = c;
    } else
      s = o, o = e;
    for (; o !== e; )
      if (t.push(o), o = s, c = fl(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        for (h.charCodeAt(s) === 46 ? (u = j, s++) : (u = e, p(X)), u === e && (u = null), g = [], w = a(); w !== e; )
          g.push(w), w = a();
        w = ys(), w === e && (w = null), c = [c, n, u, g, w], o = c;
      } else
        s = o, o = e;
    return d = r, r = Wh(f, t), r;
  }
  function ys() {
    var r, f, l, t, o, c, n;
    if (r = s, f = Tp(), f !== e) {
      for (l = s, t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.charCodeAt(s) === 46 ? (o = j, s++) : (o = e, p(X)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = ys(), n === e && (n = null), t = [t, o, c, n], l = t;
      } else
        s = l, l = e;
      l === e && (l = null), d = r, r = Yh(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function fl() {
    var r;
    return r = Ep(), r === e && (r = dp(), r === e && (r = mp(), r === e && (r = $p(), r === e && (r = vp(), r === e && (r = yp(), r === e && (r = bp(), r === e && (r = Ap()))))))), r;
  }
  function dp() {
    var r, f, l, t, o;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.substr(s, 8).toLowerCase() === Ql ? (l = h.substr(s, 8), s += 8) : (l = e, p(sf)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      o = ie(), o !== e ? (d = r, r = Qh(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function $p() {
    var r, f, l, t, o, c, n;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.substr(s, 5).toLowerCase() === Ke ? (l = h.substr(s, 5), s += 5) : (l = e, p(ds)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = xe(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = ie(), n !== e ? (d = r, r = zh(o, n)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function vp() {
    var r, f, l, t, o, c, n, u;
    if (r = s, h.substr(s, 7).toLowerCase() === zl ? (f = h.substr(s, 7), s += 7) : (f = e, p(rf)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === ve ? (t = h.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (c = xe(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = ie(), u !== e ? (d = r, r = Zh(t, c, u)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function bp() {
    var r, f, l, t, o, c, n, u, g, w, $, b, m;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.substr(s, 4).toLowerCase() === Zl ? (l = h.substr(s, 4), s += 4) : (l = e, p(lf)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.charCodeAt(s) === 40 ? (o = C, s++) : (o = e, p(y)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (n = _(), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          if (h.substr(s, 2).toLowerCase() === ce ? (g = h.substr(s, 2), s += 2) : (g = e, p(gs)), g !== e) {
            for (w = [], $ = a(); $ !== e; )
              w.push($), $ = a();
            if ($ = k(), $ !== e) {
              for (b = [], m = a(); m !== e; )
                b.push(m), m = a();
              h.charCodeAt(s) === 41 ? (m = E, s++) : (m = e, p(P)), m !== e ? (d = r, r = qh(n, $)) : (s = r, r = e);
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Ap() {
    var r, f, l, t, o;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.substr(s, 6).toLowerCase() === Wr ? (l = h.substr(s, 6), s += 6) : (l = e, p(wi)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      o = ol(), o !== e ? (d = r, r = Kh(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function ol() {
    var r;
    return r = Cp(), r === e && (r = _p()), r;
  }
  function Cp() {
    var r, f, l, t, o, c, n, u;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (l = k(), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.charCodeAt(s) === 123 ? (o = de, s++) : (o = e, p(Ae)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        for (n = [], u = Ps(); u !== e; )
          n.push(u), u = Ps();
        h.charCodeAt(s) === 125 ? (u = $e, s++) : (u = e, p(Ce)), u !== e ? (d = r, r = Jh(l, n)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function _p() {
    var r, f, l, t, o, c, n, u, g, w, $;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      for (o = [], c = k(); c !== e; )
        o.push(c), c = k();
      if (h.charCodeAt(s) === 41 ? (c = E, s++) : (c = e, p(P)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.charCodeAt(s) === 123 ? (u = de, s++) : (u = e, p(Ae)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          for (w = [], $ = hl(); $ !== e; )
            w.push($), $ = hl();
          h.charCodeAt(s) === 125 ? ($ = $e, s++) : ($ = e, p(Ce)), $ !== e ? (d = r, r = ec(o, w)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function hl() {
    var r, f, l, t, o, c, n;
    if (r = s, h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (t = [], o = Ps(); o !== e; )
        t.push(o), o = Ps();
      if (h.charCodeAt(s) === 41 ? (o = E, s++) : (o = e, p(P)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        d = r, r = sc(t);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Ps() {
    var r, f, l, t;
    if (r = s, f = V(), f === e && (f = Lr(), f === e && (f = Tr(), f === e && (f = Or(), f === e && (h.substr(s, 5) === Zr ? (f = Zr, s += 5) : (f = e, p(tf)))))), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      d = r, r = rc(f);
    } else
      s = r, r = e;
    return r;
  }
  function mp() {
    var r, f, l, t;
    if (r = s, h.substr(s, 5).toLowerCase() === ql ? (f = h.substr(s, 5), s += 5) : (f = e, p(af)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      t = ie(), t !== e ? (d = r, r = ic(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Ep() {
    var r, f, l, t, o, c, n, u;
    if (r = s, f = ie(), f !== e) {
      for (l = [], t = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.substr(s, 5).toLowerCase() === qr ? (c = h.substr(s, 5), s += 5) : (c = e, p(bi)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = ie(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (l.push(t), t = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.substr(s, 5).toLowerCase() === qr ? (c = h.substr(s, 5), s += 5) : (c = e, p(bi)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = ie(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
        } else
          s = t, t = e;
      }
      d = r, r = lc(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function yp() {
    var r, f, l, t, o;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.substr(s, 6).toLowerCase() === Kl ? (l = h.substr(s, 6), s += 6) : (l = e, p(ff)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      o = wr(), o !== e ? (d = r, r = tc(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function wr() {
    var r;
    return r = yr(), r === e && (r = Pr(), r === e && (r = cl())), r;
  }
  function cl() {
    var r, f, l, t;
    if (r = s, f = V(), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      t = nl(), t !== e ? (d = r, r = ac(f, t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function nl() {
    var r, f, l, t, o, c, n, u, g, w, $, b;
    if (r = s, f = ye(), f !== e && (d = r, f = fc()), r = f, r === e)
      if (r = s, h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
        for (l = [], t = a(); t !== e; )
          l.push(t), t = a();
        for (h.substr(s, 8).toLowerCase() === O ? (t = h.substr(s, 8), s += 8) : (t = e, p(ue)), t === e && (t = null), o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (c = _(), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (u = [], g = s, h.charCodeAt(s) === 44 ? (w = D, s++) : (w = e, p(G)), w !== e) {
            for ($ = [], b = a(); b !== e; )
              $.push(b), b = a();
            b = _(), b !== e ? g = b : (s = g, g = e);
          } else
            s = g, g = e;
          for (; g !== e; )
            if (u.push(g), g = s, h.charCodeAt(s) === 44 ? (w = D, s++) : (w = e, p(G)), w !== e) {
              for ($ = [], b = a(); b !== e; )
                $.push(b), b = a();
              b = _(), b !== e ? g = b : (s = g, g = e);
            } else
              s = g, g = e;
          h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e ? (d = r, r = oc(t, c, u)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    return r;
  }
  function Fe() {
    var r, f, l, t, o, c, n, u, g, w, $, b;
    if (r = s, f = ye(), f !== e && (d = r, f = hc()), r = f, r === e)
      if (r = s, h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
        for (l = [], t = a(); t !== e; )
          l.push(t), t = a();
        if (t = _(), t !== e) {
          for (o = [], c = a(); c !== e; )
            o.push(c), c = a();
          if (c = [], n = s, h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (w = _(), w !== e) {
              for ($ = [], b = a(); b !== e; )
                $.push(b), b = a();
              n = w;
            } else
              s = n, n = e;
          } else
            s = n, n = e;
          for (; n !== e; )
            if (c.push(n), n = s, h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
              for (g = [], w = a(); w !== e; )
                g.push(w), w = a();
              if (w = _(), w !== e) {
                for ($ = [], b = a(); b !== e; )
                  $.push(b), b = a();
                n = w;
              } else
                s = n, n = e;
            } else
              s = n, n = e;
          h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = r, r = cc(t, c)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    return r;
  }
  function Pp() {
    var r, f, l, t, o, c;
    if (r = s, h.charCodeAt(s) === 123 ? (f = de, s++) : (f = e, p(Ae)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      for (t = ul(), t === e && (t = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      h.charCodeAt(s) === 125 ? (c = $e, s++) : (c = e, p(Ce)), c !== e ? (d = r, r = nc(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function ul() {
    var r, f, l, t, o, c, n;
    if (r = s, f = pl(), f !== e) {
      for (l = s, t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (h.charCodeAt(s) === 46 ? (o = j, s++) : (o = e, p(X)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = ul(), n === e && (n = null), t = [t, o, c, n], l = t;
      } else
        s = l, l = e;
      l === e && (l = null), d = r, r = uc(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function pl() {
    var r, f, l, t, o;
    if (r = s, f = Rs(), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      t = dr(), t !== e ? (d = r, r = pc(f, t)) : (s = r, r = e);
    } else
      s = r, r = e;
    if (r === e) {
      for (r = s, f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = wl(), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        o = Lp(), d = r, r = gc(l, o);
      } else
        s = r, r = e;
    }
    return r;
  }
  function Lp() {
    var r;
    return r = dr(), r === e && (r = null), r;
  }
  function dr() {
    var r, f, l, t, o, c, n, u, g, w, $, b, m;
    if (r = s, f = $r(), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = vr(), t !== e) {
        for (o = [], c = s, n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.charCodeAt(s) === 59 ? (u = Le, s++) : (u = e, p(Re)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          if (w = s, $ = $r(), $ !== e) {
            for (b = [], m = a(); m !== e; )
              b.push(m), m = a();
            m = vr(), m !== e ? ($ = [$, b, m], w = $) : (s = w, w = e);
          } else
            s = w, w = e;
          w === e && (w = null), n = [n, u, g, w], c = n;
        } else
          s = c, c = e;
        for (; c !== e; ) {
          for (o.push(c), c = s, n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (h.charCodeAt(s) === 59 ? (u = Le, s++) : (u = e, p(Re)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (w = s, $ = $r(), $ !== e) {
              for (b = [], m = a(); m !== e; )
                b.push(m), m = a();
              m = vr(), m !== e ? ($ = [$, b, m], w = $) : (s = w, w = e);
            } else
              s = w, w = e;
            w === e && (w = null), n = [n, u, g, w], c = n;
          } else
            s = c, c = e;
        }
        d = r, r = wc(f, t, o);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function $r() {
    var r, f;
    return r = xe(), r === e && (r = s, h.charCodeAt(s) === 97 ? (f = Je, s++) : (f = e, p($s)), f !== e && (d = r, f = dc()), r = f), r;
  }
  function vr() {
    var r, f, l, t, o, c, n, u;
    if (r = s, f = ke(), f !== e) {
      for (l = [], t = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 44 ? (c = D, s++) : (c = e, p(G)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = ke(), u !== e ? t = u : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (l.push(t), t = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 44 ? (c = D, s++) : (c = e, p(G)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = ke(), u !== e ? t = u : (s = t, t = e);
        } else
          s = t, t = e;
      }
      d = r, r = $c(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function Tp() {
    var r, f, l, t, o;
    if (r = s, f = Rs(), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      t = br(), t !== e ? (d = r, r = vc(f, t)) : (s = r, r = e);
    } else
      s = r, r = e;
    if (r === e) {
      for (r = s, f = [], l = a(); l !== e; )
        f.push(l), l = a();
      if (l = dl(), l !== e) {
        for (t = [], o = a(); o !== e; )
          t.push(o), o = a();
        o = Rp(), d = r, r = bc(l, o);
      } else
        s = r, r = e;
    }
    return r;
  }
  function Rp() {
    var r;
    return r = br(), r === e && (r = null), r;
  }
  function br() {
    var r, f, l, t, o, c, n, u, g, w, $, b, m;
    if (r = s, f = Ls(), f === e && (f = k()), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = Ar(), t !== e) {
        for (o = [], c = s, n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.charCodeAt(s) === 59 ? (u = Le, s++) : (u = e, p(Re)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          if (w = s, $ = Ls(), $ === e && ($ = k()), $ !== e) {
            for (b = [], m = a(); m !== e; )
              b.push(m), m = a();
            m = Ar(), m !== e ? ($ = [$, b, m], w = $) : (s = w, w = e);
          } else
            s = w, w = e;
          w === e && (w = null), n = [n, u, g, w], c = n;
        } else
          s = c, c = e;
        for (; c !== e; ) {
          for (o.push(c), c = s, n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (h.charCodeAt(s) === 59 ? (u = Le, s++) : (u = e, p(Re)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (w = s, $ = Ls(), $ === e && ($ = k()), $ !== e) {
              for (b = [], m = a(); m !== e; )
                b.push(m), m = a();
              m = Ar(), m !== e ? ($ = [$, b, m], w = $) : (s = w, w = e);
            } else
              s = w, w = e;
            w === e && (w = null), n = [n, u, g, w], c = n;
          } else
            s = c, c = e;
        }
        d = r, r = Ac(f, t, o);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Ar() {
    var r, f, l, t, o, c, n, u;
    if (r = s, f = je(), f !== e) {
      for (l = [], t = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 44 ? (c = D, s++) : (c = e, p(G)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = je(), u !== e ? t = u : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (l.push(t), t = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 44 ? (c = D, s++) : (c = e, p(G)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = je(), u !== e ? t = u : (s = t, t = e);
        } else
          s = t, t = e;
      }
      d = r, r = Cc(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function Ls() {
    var r, f, l, t, o, c, n, u;
    if (r = s, f = Cr(), f !== e) {
      for (l = [], t = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 124 ? (c = es, s++) : (c = e, p(vs)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Cr(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (l.push(t), t = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 124 ? (c = es, s++) : (c = e, p(vs)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Cr(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
        } else
          s = t, t = e;
      }
      d = r, r = _c(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function Cr() {
    var r, f, l, t, o, c, n, u;
    if (r = s, f = _r(), f !== e) {
      for (l = [], t = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 47 ? (c = ne, s++) : (c = e, p(pe)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = _r(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (l.push(t), t = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 47 ? (c = ne, s++) : (c = e, p(pe)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = _r(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
        } else
          s = t, t = e;
      }
      d = r, r = mc(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function gl() {
    var r, f, l;
    return r = s, f = Op(), f !== e ? (l = Ip(), l === e && (l = null), d = r, r = Ec(f, l)) : (s = r, r = e), r;
  }
  function _r() {
    var r, f, l;
    return r = gl(), r === e && (r = s, h.charCodeAt(s) === 94 ? (f = Kr, s++) : (f = e, p(Ai)), f !== e ? (l = gl(), l !== e ? (d = r, r = yc(l)) : (s = r, r = e)) : (s = r, r = e)), r;
  }
  function Ip() {
    var r;
    return h.charCodeAt(s) === 63 ? (r = Hs, s++) : (r = e, p(er)), r === e && (h.charCodeAt(s) === 42 ? (r = se, s++) : (r = e, p(re)), r === e && (h.charCodeAt(s) === 43 ? (r = be, s++) : (r = e, p(me)))), r;
  }
  function Op() {
    var r, f, l, t;
    return r = V(), r === e && (r = s, h.charCodeAt(s) === 97 ? (f = Je, s++) : (f = e, p($s)), f !== e && (d = r, f = Pc()), r = f, r === e && (r = s, h.charCodeAt(s) === 33 ? (f = Ms, s++) : (f = e, p(sr)), f !== e ? (l = Np(), l !== e ? (f = [f, l], r = f) : (s = r, r = e)) : (s = r, r = e), r === e && (r = s, h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e ? (l = Ls(), l !== e ? (h.charCodeAt(s) === 41 ? (t = E, s++) : (t = e, p(P)), t !== e ? (d = r, r = Lc(l)) : (s = r, r = e)) : (s = r, r = e)) : (s = r, r = e)))), r;
  }
  function Np() {
    var r, f, l, t, o, c, n, u;
    if (r = Ts(), r === e)
      if (r = s, h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
        if (l = s, t = Ts(), t !== e) {
          for (o = [], c = s, h.charCodeAt(s) === 124 ? (n = es, s++) : (n = e, p(vs)), n !== e ? (u = Ts(), u !== e ? (n = [n, u], c = n) : (s = c, c = e)) : (s = c, c = e); c !== e; )
            o.push(c), c = s, h.charCodeAt(s) === 124 ? (n = es, s++) : (n = e, p(vs)), n !== e ? (u = Ts(), u !== e ? (n = [n, u], c = n) : (s = c, c = e)) : (s = c, c = e);
          t = [t, o], l = t;
        } else
          s = l, l = e;
        l === e && (l = null), h.charCodeAt(s) === 41 ? (t = E, s++) : (t = e, p(P)), t !== e ? (f = [f, l, t], r = f) : (s = r, r = e);
      } else
        s = r, r = e;
    return r;
  }
  function Ts() {
    var r, f, l;
    return r = V(), r === e && (h.charCodeAt(s) === 97 ? (r = Je, s++) : (r = e, p($s)), r === e && (r = s, h.charCodeAt(s) === 94 ? (f = Kr, s++) : (f = e, p(Ai)), f !== e ? (l = V(), l === e && (h.charCodeAt(s) === 97 ? (l = Je, s++) : (l = e, p($s))), l !== e ? (f = [f, l], r = f) : (s = r, r = e)) : (s = r, r = e))), r;
  }
  function wl() {
    var r, f;
    return r = s, f = xp(), f !== e && (d = r, f = Tc(f)), r = f, r === e && (r = Sp()), r;
  }
  function Sp() {
    var r, f, l, t, o, c, n, u, g;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.charCodeAt(s) === 91 ? (l = ks, s++) : (l = e, p(rr)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = dr(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 93 ? (n = js, s++) : (n = e, p(ir)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          d = r, r = Rc(o);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function dl() {
    var r, f;
    return r = s, f = Dp(), f !== e && (d = r, f = Ic(f)), r = f, r === e && (r = Fp()), r;
  }
  function Fp() {
    var r, f, l, t, o, c, n, u, g;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.charCodeAt(s) === 91 ? (l = ks, s++) : (l = e, p(rr)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = br(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 93 ? (n = js, s++) : (n = e, p(ir)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          d = r, r = Oc(o);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function xp() {
    var r, f, l, t, o, c, n, u, g;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = [], c = ke(), c !== e)
        for (; c !== e; )
          o.push(c), c = ke();
      else
        o = e;
      if (o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          d = r, r = Nc(o);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Dp() {
    var r, f, l, t, o, c, n, u, g;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      if (o = [], c = je(), c !== e)
        for (; c !== e; )
          o.push(c), c = je();
      else
        o = e;
      if (o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          d = r, r = Sc(o);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function ke() {
    var r, f, l;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    return l = Rs(), l === e && (l = wl()), l !== e ? (d = r, r = Fc(l)) : (s = r, r = e), r;
  }
  function je() {
    var r, f, l;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    return l = Rs(), l === e && (l = dl()), l !== e ? (d = r, r = xc(l)) : (s = r, r = e), r;
  }
  function Rs() {
    var r;
    return r = k(), r === e && (r = Gp()), r;
  }
  function xe() {
    var r;
    return r = k(), r === e && (r = V()), r;
  }
  function k() {
    var r, f, l, t, o;
    for (r = s, f = [], l = a(); l !== e; )
      f.push(l), l = a();
    if (l = Zp(), l === e && (l = qp()), l !== e) {
      for (t = [], o = a(); o !== e; )
        t.push(o), o = a();
      d = r, r = Dc(l);
    } else
      s = r, r = e;
    return r;
  }
  function Gp() {
    var r;
    return r = V(), r === e && (r = Lr(), r === e && (r = Tr(), r === e && (r = Or(), r === e && (r = Yp(), r === e && (r = ye()))))), r;
  }
  function _() {
    var r, f, l, t, o, c, n, u;
    if (r = s, f = mr(), f !== e) {
      for (l = [], t = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.substr(s, 2) === ss ? (c = ss, s += 2) : (c = e, p(Ci)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = mr(), u !== e ? t = u : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (l.push(t), t = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.substr(s, 2) === ss ? (c = ss, s += 2) : (c = e, p(Ci)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = mr(), u !== e ? t = u : (s = t, t = e);
        } else
          s = t, t = e;
      }
      d = r, r = Gc(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function mr() {
    var r, f, l, t, o, c, n, u;
    if (r = s, f = Er(), f !== e) {
      for (l = [], t = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.substr(s, 2) === rs ? (c = rs, s += 2) : (c = e, p(_i)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Er(), u !== e ? t = u : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (l.push(t), t = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.substr(s, 2) === rs ? (c = rs, s += 2) : (c = e, p(_i)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Er(), u !== e ? t = u : (s = t, t = e);
        } else
          s = t, t = e;
      }
      d = r, r = Uc(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function Er() {
    var r, f, l, t, o, c, n, u, g, w;
    if (r = s, f = z(), f !== e) {
      for (l = [], t = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 61 ? (c = is, s++) : (c = e, p(bs)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
      } else
        s = t, t = e;
      if (t === e) {
        for (t = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.substr(s, 2) === ls ? (c = ls, s += 2) : (c = e, p(mi)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e) {
          for (t = s, o = [], c = a(); c !== e; )
            o.push(c), c = a();
          if (h.charCodeAt(s) === 60 ? (c = Xs, s++) : (c = e, p(lr)), c !== e) {
            for (n = [], u = a(); u !== e; )
              n.push(u), u = a();
            u = z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
          } else
            s = t, t = e;
          if (t === e) {
            for (t = s, o = [], c = a(); c !== e; )
              o.push(c), c = a();
            if (h.charCodeAt(s) === 62 ? (c = Vs, s++) : (c = e, p(tr)), c !== e) {
              for (n = [], u = a(); u !== e; )
                n.push(u), u = a();
              u = z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
            } else
              s = t, t = e;
            if (t === e) {
              for (t = s, o = [], c = a(); c !== e; )
                o.push(c), c = a();
              if (h.substr(s, 2) === ts ? (c = ts, s += 2) : (c = e, p(Ei)), c !== e) {
                for (n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                u = z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
              } else
                s = t, t = e;
              if (t === e) {
                for (t = s, o = [], c = a(); c !== e; )
                  o.push(c), c = a();
                if (h.substr(s, 2) === as ? (c = as, s += 2) : (c = e, p(yi)), c !== e) {
                  for (n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  u = z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
                } else
                  s = t, t = e;
                if (t === e) {
                  for (t = s, o = [], c = a(); c !== e; )
                    o.push(c), c = a();
                  if (h.substr(s, 2).toLowerCase() === fs ? (c = h.substr(s, 2), s += 2) : (c = e, p(As)), c !== e) {
                    for (n = [], u = a(); u !== e; )
                      n.push(u), u = a();
                    u = Fe(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
                  } else
                    s = t, t = e;
                  if (t === e) {
                    for (t = s, o = [], c = a(); c !== e; )
                      o.push(c), c = a();
                    if (h.substr(s, 3).toLowerCase() === Ws ? (c = h.substr(s, 3), s += 3) : (c = e, p(ar)), c !== e) {
                      for (n = [], u = a(); u !== e; )
                        n.push(u), u = a();
                      if (h.substr(s, 2).toLowerCase() === fs ? (u = h.substr(s, 2), s += 2) : (u = e, p(As)), u !== e) {
                        for (g = [], w = a(); w !== e; )
                          g.push(w), w = a();
                        w = Fe(), w !== e ? (o = [o, c, n, u, g, w], t = o) : (s = t, t = e);
                      } else
                        s = t, t = e;
                    } else
                      s = t, t = e;
                  }
                }
              }
            }
          }
        }
      }
      for (; t !== e; ) {
        for (l.push(t), t = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 61 ? (c = is, s++) : (c = e, p(bs)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e) {
          for (t = s, o = [], c = a(); c !== e; )
            o.push(c), c = a();
          if (h.substr(s, 2) === ls ? (c = ls, s += 2) : (c = e, p(mi)), c !== e) {
            for (n = [], u = a(); u !== e; )
              n.push(u), u = a();
            u = z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
          } else
            s = t, t = e;
          if (t === e) {
            for (t = s, o = [], c = a(); c !== e; )
              o.push(c), c = a();
            if (h.charCodeAt(s) === 60 ? (c = Xs, s++) : (c = e, p(lr)), c !== e) {
              for (n = [], u = a(); u !== e; )
                n.push(u), u = a();
              u = z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
            } else
              s = t, t = e;
            if (t === e) {
              for (t = s, o = [], c = a(); c !== e; )
                o.push(c), c = a();
              if (h.charCodeAt(s) === 62 ? (c = Vs, s++) : (c = e, p(tr)), c !== e) {
                for (n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                u = z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
              } else
                s = t, t = e;
              if (t === e) {
                for (t = s, o = [], c = a(); c !== e; )
                  o.push(c), c = a();
                if (h.substr(s, 2) === ts ? (c = ts, s += 2) : (c = e, p(Ei)), c !== e) {
                  for (n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  u = z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
                } else
                  s = t, t = e;
                if (t === e) {
                  for (t = s, o = [], c = a(); c !== e; )
                    o.push(c), c = a();
                  if (h.substr(s, 2) === as ? (c = as, s += 2) : (c = e, p(yi)), c !== e) {
                    for (n = [], u = a(); u !== e; )
                      n.push(u), u = a();
                    u = z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
                  } else
                    s = t, t = e;
                  if (t === e) {
                    for (t = s, o = [], c = a(); c !== e; )
                      o.push(c), c = a();
                    if (h.substr(s, 2).toLowerCase() === fs ? (c = h.substr(s, 2), s += 2) : (c = e, p(As)), c !== e) {
                      for (n = [], u = a(); u !== e; )
                        n.push(u), u = a();
                      u = Fe(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
                    } else
                      s = t, t = e;
                    if (t === e) {
                      for (t = s, o = [], c = a(); c !== e; )
                        o.push(c), c = a();
                      if (h.substr(s, 3).toLowerCase() === Ws ? (c = h.substr(s, 3), s += 3) : (c = e, p(ar)), c !== e) {
                        for (n = [], u = a(); u !== e; )
                          n.push(u), u = a();
                        if (h.substr(s, 2).toLowerCase() === fs ? (u = h.substr(s, 2), s += 2) : (u = e, p(As)), u !== e) {
                          for (g = [], w = a(); w !== e; )
                            g.push(w), w = a();
                          w = Fe(), w !== e ? (o = [o, c, n, u, g, w], t = o) : (s = t, t = e);
                        } else
                          s = t, t = e;
                      } else
                        s = t, t = e;
                    }
                  }
                }
              }
            }
          }
        }
      }
      d = r, r = Bc(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function z() {
    var r, f, l, t, o, c, n, u, g, w, $;
    if (r = s, f = Xe(), f !== e) {
      for (l = [], t = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 43 ? (c = be, s++) : (c = e, p(me)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Xe(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
      } else
        s = t, t = e;
      if (t === e) {
        for (t = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 45 ? (c = le, s++) : (c = e, p(te)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Xe(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e)
          if (t = s, o = Rr(), o === e && (o = Ir()), o !== e) {
            for (c = [], n = s, u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (h.charCodeAt(s) === 42 ? (g = se, s++) : (g = e, p(re)), g !== e) {
              for (w = [], $ = a(); $ !== e; )
                w.push($), $ = a();
              $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
            } else
              s = n, n = e;
            if (n === e) {
              for (n = s, u = [], g = a(); g !== e; )
                u.push(g), g = a();
              if (h.charCodeAt(s) === 47 ? (g = ne, s++) : (g = e, p(pe)), g !== e) {
                for (w = [], $ = a(); $ !== e; )
                  w.push($), $ = a();
                $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
              } else
                s = n, n = e;
            }
            for (; n !== e; ) {
              for (c.push(n), n = s, u = [], g = a(); g !== e; )
                u.push(g), g = a();
              if (h.charCodeAt(s) === 42 ? (g = se, s++) : (g = e, p(re)), g !== e) {
                for (w = [], $ = a(); $ !== e; )
                  w.push($), $ = a();
                $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
              } else
                s = n, n = e;
              if (n === e) {
                for (n = s, u = [], g = a(); g !== e; )
                  u.push(g), g = a();
                if (h.charCodeAt(s) === 47 ? (g = ne, s++) : (g = e, p(pe)), g !== e) {
                  for (w = [], $ = a(); $ !== e; )
                    w.push($), $ = a();
                  $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
                } else
                  s = n, n = e;
              }
            }
            o = [o, c], t = o;
          } else
            s = t, t = e;
      }
      for (; t !== e; ) {
        for (l.push(t), t = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 43 ? (c = be, s++) : (c = e, p(me)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Xe(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e) {
          for (t = s, o = [], c = a(); c !== e; )
            o.push(c), c = a();
          if (h.charCodeAt(s) === 45 ? (c = le, s++) : (c = e, p(te)), c !== e) {
            for (n = [], u = a(); u !== e; )
              n.push(u), u = a();
            u = Xe(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
          } else
            s = t, t = e;
          if (t === e)
            if (t = s, o = Rr(), o === e && (o = Ir()), o !== e) {
              for (c = [], n = s, u = [], g = a(); g !== e; )
                u.push(g), g = a();
              if (h.charCodeAt(s) === 42 ? (g = se, s++) : (g = e, p(re)), g !== e) {
                for (w = [], $ = a(); $ !== e; )
                  w.push($), $ = a();
                $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
              } else
                s = n, n = e;
              if (n === e) {
                for (n = s, u = [], g = a(); g !== e; )
                  u.push(g), g = a();
                if (h.charCodeAt(s) === 47 ? (g = ne, s++) : (g = e, p(pe)), g !== e) {
                  for (w = [], $ = a(); $ !== e; )
                    w.push($), $ = a();
                  $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
                } else
                  s = n, n = e;
              }
              for (; n !== e; ) {
                for (c.push(n), n = s, u = [], g = a(); g !== e; )
                  u.push(g), g = a();
                if (h.charCodeAt(s) === 42 ? (g = se, s++) : (g = e, p(re)), g !== e) {
                  for (w = [], $ = a(); $ !== e; )
                    w.push($), $ = a();
                  $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
                } else
                  s = n, n = e;
                if (n === e) {
                  for (n = s, u = [], g = a(); g !== e; )
                    u.push(g), g = a();
                  if (h.charCodeAt(s) === 47 ? (g = ne, s++) : (g = e, p(pe)), g !== e) {
                    for (w = [], $ = a(); $ !== e; )
                      w.push($), $ = a();
                    $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
                  } else
                    s = n, n = e;
                }
              }
              o = [o, c], t = o;
            } else
              s = t, t = e;
        }
      }
      d = r, r = Hc(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function Xe() {
    var r, f, l, t, o, c, n, u;
    if (r = s, f = Z(), f !== e) {
      for (l = [], t = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 42 ? (c = se, s++) : (c = e, p(re)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
      } else
        s = t, t = e;
      if (t === e) {
        for (t = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 47 ? (c = ne, s++) : (c = e, p(pe)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
        } else
          s = t, t = e;
      }
      for (; t !== e; ) {
        for (l.push(t), t = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 42 ? (c = se, s++) : (c = e, p(re)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e) {
          for (t = s, o = [], c = a(); c !== e; )
            o.push(c), c = a();
          if (h.charCodeAt(s) === 47 ? (c = ne, s++) : (c = e, p(pe)), c !== e) {
            for (n = [], u = a(); u !== e; )
              n.push(u), u = a();
            u = Z(), u !== e ? (o = [o, c, n, u], t = o) : (s = t, t = e);
          } else
            s = t, t = e;
        }
      }
      d = r, r = Mc(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function Z() {
    var r, f, l, t;
    if (r = s, h.charCodeAt(s) === 33 ? (f = Ms, s++) : (f = e, p(sr)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      t = Is(), t !== e ? (d = r, r = kc(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    if (r === e) {
      if (r = s, h.charCodeAt(s) === 43 ? (f = be, s++) : (f = e, p(me)), f !== e) {
        for (l = [], t = a(); t !== e; )
          l.push(t), t = a();
        t = Is(), t !== e ? (d = r, r = jc(t)) : (s = r, r = e);
      } else
        s = r, r = e;
      if (r === e) {
        if (r = s, h.charCodeAt(s) === 45 ? (f = le, s++) : (f = e, p(te)), f !== e) {
          for (l = [], t = a(); t !== e; )
            l.push(t), t = a();
          t = Is(), t !== e ? (d = r, r = Xc(t)) : (s = r, r = e);
        } else
          s = r, r = e;
        r === e && (r = Is());
      }
    }
    return r;
  }
  function Is() {
    var r, f;
    return r = yr(), r === e && (r = Pr(), r === e && (r = Xp(), r === e && (r = s, f = Lr(), f !== e && (d = r, f = Vc(f)), r = f, r === e && (r = s, f = Tr(), f !== e && (d = r, f = Wc(f)), r = f, r === e && (r = s, f = Or(), f !== e && (d = r, f = Yc(f)), r = f, r === e && (r = s, f = k(), f !== e && (d = r, f = Qc(f)), r = f)))))), r;
  }
  function yr() {
    var r, f, l, t, o, c;
    if (r = s, h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (t = _(), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        h.charCodeAt(s) === 41 ? (c = E, s++) : (c = e, p(P)), c !== e ? (d = r, r = zc(t)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Pr() {
    var r, f, l, t, o, c, n, u, g, w, $, b, m, L, R, N;
    if (r = jp(), r === e) {
      if (r = s, h.substr(s, 3).toLowerCase() === Jl ? (f = h.substr(s, 3), s += 3) : (f = e, p(of)), f !== e) {
        for (l = [], t = a(); t !== e; )
          l.push(t), t = a();
        if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
          for (o = [], c = a(); c !== e; )
            o.push(c), c = a();
          if (c = _(), c !== e) {
            for (n = [], u = a(); u !== e; )
              n.push(u), u = a();
            h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Zc(c)) : (s = r, r = e);
          } else
            s = r, r = e;
        } else
          s = r, r = e;
      } else
        s = r, r = e;
      if (r === e) {
        if (r = s, h.substr(s, 4).toLowerCase() === et ? (f = h.substr(s, 4), s += 4) : (f = e, p(hf)), f !== e) {
          for (l = [], t = a(); t !== e; )
            l.push(t), t = a();
          if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
            for (o = [], c = a(); c !== e; )
              o.push(c), c = a();
            if (c = _(), c !== e) {
              for (n = [], u = a(); u !== e; )
                n.push(u), u = a();
              h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = qc(c)) : (s = r, r = e);
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
        if (r === e) {
          if (r = s, h.substr(s, 11).toLowerCase() === st ? (f = h.substr(s, 11), s += 11) : (f = e, p(cf)), f !== e) {
            for (l = [], t = a(); t !== e; )
              l.push(t), t = a();
            if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
              for (o = [], c = a(); c !== e; )
                o.push(c), c = a();
              if (c = _(), c !== e) {
                for (n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                  for (g = [], w = a(); w !== e; )
                    g.push(w), w = a();
                  if (w = _(), w !== e) {
                    for ($ = [], b = a(); b !== e; )
                      $.push(b), b = a();
                    h.charCodeAt(s) === 41 ? (b = E, s++) : (b = e, p(P)), b !== e ? (d = r, r = Kc(c, w)) : (s = r, r = e);
                  } else
                    s = r, r = e;
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
            } else
              s = r, r = e;
          } else
            s = r, r = e;
          if (r === e) {
            if (r = s, h.substr(s, 8).toLowerCase() === rt ? (f = h.substr(s, 8), s += 8) : (f = e, p(nf)), f !== e) {
              for (l = [], t = a(); t !== e; )
                l.push(t), t = a();
              if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                for (o = [], c = a(); c !== e; )
                  o.push(c), c = a();
                if (c = _(), c !== e) {
                  for (n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Jc(c)) : (s = r, r = e);
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
            } else
              s = r, r = e;
            if (r === e) {
              if (r = s, h.substr(s, 5).toLowerCase() === it ? (f = h.substr(s, 5), s += 5) : (f = e, p(uf)), f !== e) {
                for (l = [], t = a(); t !== e; )
                  l.push(t), t = a();
                if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                  for (o = [], c = a(); c !== e; )
                    o.push(c), c = a();
                  if (c = k(), c !== e) {
                    for (n = [], u = a(); u !== e; )
                      n.push(u), u = a();
                    h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = en(c)) : (s = r, r = e);
                  } else
                    s = r, r = e;
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
              if (r === e) {
                if (r = s, h.substr(s, 3).toLowerCase() === lt ? (f = h.substr(s, 3), s += 3) : (f = e, p(pf)), f !== e) {
                  for (l = [], t = a(); t !== e; )
                    l.push(t), t = a();
                  if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                    for (o = [], c = a(); c !== e; )
                      o.push(c), c = a();
                    if (c = _(), c !== e) {
                      for (n = [], u = a(); u !== e; )
                        n.push(u), u = a();
                      h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = sn(c)) : (s = r, r = e);
                    } else
                      s = r, r = e;
                  } else
                    s = r, r = e;
                } else
                  s = r, r = e;
                if (r === e) {
                  if (r = s, h.substr(s, 3).toLowerCase() === tt ? (f = h.substr(s, 3), s += 3) : (f = e, p(gf)), f !== e) {
                    for (l = [], t = a(); t !== e; )
                      l.push(t), t = a();
                    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                      for (o = [], c = a(); c !== e; )
                        o.push(c), c = a();
                      if (c = _(), c !== e) {
                        for (n = [], u = a(); u !== e; )
                          n.push(u), u = a();
                        h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = rn(c)) : (s = r, r = e);
                      } else
                        s = r, r = e;
                    } else
                      s = r, r = e;
                  } else
                    s = r, r = e;
                  if (r === e) {
                    if (r = s, h.substr(s, 5).toLowerCase() === at ? (f = h.substr(s, 5), s += 5) : (f = e, p(wf)), f !== e) {
                      for (l = [], t = a(); t !== e; )
                        l.push(t), t = a();
                      if (t = s, h.charCodeAt(s) === 40 ? (o = C, s++) : (o = e, p(y)), o !== e) {
                        for (c = [], n = a(); n !== e; )
                          c.push(n), n = a();
                        if (n = _(), n !== e) {
                          for (u = [], g = a(); g !== e; )
                            u.push(g), g = a();
                          h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e ? (o = [o, c, n, u, g], t = o) : (s = t, t = e);
                        } else
                          s = t, t = e;
                      } else
                        s = t, t = e;
                      t === e && (t = ye()), t !== e ? (d = r, r = ln(t)) : (s = r, r = e);
                    } else
                      s = r, r = e;
                    if (r === e) {
                      if (r = s, h.substr(s, 4).toLowerCase() === ft ? (f = h.substr(s, 4), s += 4) : (f = e, p(df)), f !== e) {
                        for (l = [], t = a(); t !== e; )
                          l.push(t), t = a();
                        t = ye(), t !== e ? (d = r, r = tn()) : (s = r, r = e);
                      } else
                        s = r, r = e;
                      if (r === e) {
                        if (r = s, h.substr(s, 3).toLowerCase() === ot ? (f = h.substr(s, 3), s += 3) : (f = e, p($f)), f !== e) {
                          for (l = [], t = a(); t !== e; )
                            l.push(t), t = a();
                          if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                            for (o = [], c = a(); c !== e; )
                              o.push(c), c = a();
                            if (c = _(), c !== e) {
                              for (n = [], u = a(); u !== e; )
                                n.push(u), u = a();
                              h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = an(c)) : (s = r, r = e);
                            } else
                              s = r, r = e;
                          } else
                            s = r, r = e;
                        } else
                          s = r, r = e;
                        if (r === e) {
                          if (r = s, h.substr(s, 4).toLowerCase() === ht ? (f = h.substr(s, 4), s += 4) : (f = e, p(vf)), f !== e) {
                            for (l = [], t = a(); t !== e; )
                              l.push(t), t = a();
                            if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                              for (o = [], c = a(); c !== e; )
                                o.push(c), c = a();
                              if (c = _(), c !== e) {
                                for (n = [], u = a(); u !== e; )
                                  n.push(u), u = a();
                                h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = fn(c)) : (s = r, r = e);
                              } else
                                s = r, r = e;
                            } else
                              s = r, r = e;
                          } else
                            s = r, r = e;
                          if (r === e) {
                            if (r = s, h.substr(s, 5).toLowerCase() === ct ? (f = h.substr(s, 5), s += 5) : (f = e, p(bf)), f !== e) {
                              for (l = [], t = a(); t !== e; )
                                l.push(t), t = a();
                              if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                for (o = [], c = a(); c !== e; )
                                  o.push(c), c = a();
                                if (c = _(), c !== e) {
                                  for (n = [], u = a(); u !== e; )
                                    n.push(u), u = a();
                                  h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = on(c)) : (s = r, r = e);
                                } else
                                  s = r, r = e;
                              } else
                                s = r, r = e;
                            } else
                              s = r, r = e;
                            if (r === e) {
                              if (r = s, h.substr(s, 5).toLowerCase() === nt ? (f = h.substr(s, 5), s += 5) : (f = e, p(Af)), f !== e) {
                                for (l = [], t = a(); t !== e; )
                                  l.push(t), t = a();
                                if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                  for (o = [], c = a(); c !== e; )
                                    o.push(c), c = a();
                                  if (c = _(), c !== e) {
                                    for (n = [], u = a(); u !== e; )
                                      n.push(u), u = a();
                                    h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = hn(c)) : (s = r, r = e);
                                  } else
                                    s = r, r = e;
                                } else
                                  s = r, r = e;
                              } else
                                s = r, r = e;
                              if (r === e) {
                                if (r = s, h.substr(s, 6).toLowerCase() === ut ? (f = h.substr(s, 6), s += 6) : (f = e, p(Cf)), f !== e) {
                                  for (l = [], t = a(); t !== e; )
                                    l.push(t), t = a();
                                  t = Fe(), t !== e ? (d = r, r = cn(t)) : (s = r, r = e);
                                } else
                                  s = r, r = e;
                                if (r === e && (r = Bp(), r === e)) {
                                  if (r = s, h.substr(s, 6).toLowerCase() === pt ? (f = h.substr(s, 6), s += 6) : (f = e, p(_f)), f !== e) {
                                    for (l = [], t = a(); t !== e; )
                                      l.push(t), t = a();
                                    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                      for (o = [], c = a(); c !== e; )
                                        o.push(c), c = a();
                                      if (c = _(), c !== e) {
                                        for (n = [], u = a(); u !== e; )
                                          n.push(u), u = a();
                                        h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = nn(c)) : (s = r, r = e);
                                      } else
                                        s = r, r = e;
                                    } else
                                      s = r, r = e;
                                  } else
                                    s = r, r = e;
                                  if (r === e && (r = Hp(), r === e)) {
                                    if (r = s, h.substr(s, 5).toLowerCase() === gt ? (f = h.substr(s, 5), s += 5) : (f = e, p(mf)), f !== e) {
                                      for (l = [], t = a(); t !== e; )
                                        l.push(t), t = a();
                                      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                        for (o = [], c = a(); c !== e; )
                                          o.push(c), c = a();
                                        if (c = _(), c !== e) {
                                          for (n = [], u = a(); u !== e; )
                                            n.push(u), u = a();
                                          h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = un(c)) : (s = r, r = e);
                                        } else
                                          s = r, r = e;
                                      } else
                                        s = r, r = e;
                                    } else
                                      s = r, r = e;
                                    if (r === e) {
                                      if (r = s, h.substr(s, 5).toLowerCase() === wt ? (f = h.substr(s, 5), s += 5) : (f = e, p(Ef)), f !== e) {
                                        for (l = [], t = a(); t !== e; )
                                          l.push(t), t = a();
                                        if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                          for (o = [], c = a(); c !== e; )
                                            o.push(c), c = a();
                                          if (c = _(), c !== e) {
                                            for (n = [], u = a(); u !== e; )
                                              n.push(u), u = a();
                                            h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = pn(c)) : (s = r, r = e);
                                          } else
                                            s = r, r = e;
                                        } else
                                          s = r, r = e;
                                      } else
                                        s = r, r = e;
                                      if (r === e) {
                                        if (r = s, h.substr(s, 14).toLowerCase() === dt ? (f = h.substr(s, 14), s += 14) : (f = e, p(yf)), f !== e) {
                                          for (l = [], t = a(); t !== e; )
                                            l.push(t), t = a();
                                          if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                            for (o = [], c = a(); c !== e; )
                                              o.push(c), c = a();
                                            if (c = _(), c !== e) {
                                              for (n = [], u = a(); u !== e; )
                                                n.push(u), u = a();
                                              h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = gn(c)) : (s = r, r = e);
                                            } else
                                              s = r, r = e;
                                          } else
                                            s = r, r = e;
                                        } else
                                          s = r, r = e;
                                        if (r === e) {
                                          if (r = s, h.substr(s, 8).toLowerCase() === $t ? (f = h.substr(s, 8), s += 8) : (f = e, p(Pf)), f !== e) {
                                            for (l = [], t = a(); t !== e; )
                                              l.push(t), t = a();
                                            if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                              for (o = [], c = a(); c !== e; )
                                                o.push(c), c = a();
                                              if (c = _(), c !== e) {
                                                for (n = [], u = a(); u !== e; )
                                                  n.push(u), u = a();
                                                if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                  for (g = [], w = a(); w !== e; )
                                                    g.push(w), w = a();
                                                  if (w = _(), w !== e) {
                                                    for ($ = [], b = a(); b !== e; )
                                                      $.push(b), b = a();
                                                    h.charCodeAt(s) === 41 ? (b = E, s++) : (b = e, p(P)), b !== e ? (d = r, r = wn(c, w)) : (s = r, r = e);
                                                  } else
                                                    s = r, r = e;
                                                } else
                                                  s = r, r = e;
                                              } else
                                                s = r, r = e;
                                            } else
                                              s = r, r = e;
                                          } else
                                            s = r, r = e;
                                          if (r === e) {
                                            if (r = s, h.substr(s, 9).toLowerCase() === vt ? (f = h.substr(s, 9), s += 9) : (f = e, p(Lf)), f !== e) {
                                              for (l = [], t = a(); t !== e; )
                                                l.push(t), t = a();
                                              if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                for (o = [], c = a(); c !== e; )
                                                  o.push(c), c = a();
                                                if (c = _(), c !== e) {
                                                  for (n = [], u = a(); u !== e; )
                                                    n.push(u), u = a();
                                                  if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                    for (g = [], w = a(); w !== e; )
                                                      g.push(w), w = a();
                                                    if (w = _(), w !== e) {
                                                      for ($ = [], b = a(); b !== e; )
                                                        $.push(b), b = a();
                                                      h.charCodeAt(s) === 41 ? (b = E, s++) : (b = e, p(P)), b !== e ? (d = r, r = dn(c, w)) : (s = r, r = e);
                                                    } else
                                                      s = r, r = e;
                                                  } else
                                                    s = r, r = e;
                                                } else
                                                  s = r, r = e;
                                              } else
                                                s = r, r = e;
                                            } else
                                              s = r, r = e;
                                            if (r === e) {
                                              if (r = s, h.substr(s, 9).toLowerCase() === bt ? (f = h.substr(s, 9), s += 9) : (f = e, p(Tf)), f !== e) {
                                                for (l = [], t = a(); t !== e; )
                                                  l.push(t), t = a();
                                                if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                  for (o = [], c = a(); c !== e; )
                                                    o.push(c), c = a();
                                                  if (c = _(), c !== e) {
                                                    for (n = [], u = a(); u !== e; )
                                                      n.push(u), u = a();
                                                    if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                      for (g = [], w = a(); w !== e; )
                                                        g.push(w), w = a();
                                                      if (w = _(), w !== e) {
                                                        for ($ = [], b = a(); b !== e; )
                                                          $.push(b), b = a();
                                                        h.charCodeAt(s) === 41 ? (b = E, s++) : (b = e, p(P)), b !== e ? (d = r, r = $n(c, w)) : (s = r, r = e);
                                                      } else
                                                        s = r, r = e;
                                                    } else
                                                      s = r, r = e;
                                                  } else
                                                    s = r, r = e;
                                                } else
                                                  s = r, r = e;
                                              } else
                                                s = r, r = e;
                                              if (r === e) {
                                                if (r = s, h.substr(s, 7).toLowerCase() === At ? (f = h.substr(s, 7), s += 7) : (f = e, p(Rf)), f !== e) {
                                                  for (l = [], t = a(); t !== e; )
                                                    l.push(t), t = a();
                                                  if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                    for (o = [], c = a(); c !== e; )
                                                      o.push(c), c = a();
                                                    if (c = _(), c !== e) {
                                                      for (n = [], u = a(); u !== e; )
                                                        n.push(u), u = a();
                                                      if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                        for (g = [], w = a(); w !== e; )
                                                          g.push(w), w = a();
                                                        if (w = _(), w !== e) {
                                                          for ($ = [], b = a(); b !== e; )
                                                            $.push(b), b = a();
                                                          h.charCodeAt(s) === 41 ? (b = E, s++) : (b = e, p(P)), b !== e ? (d = r, r = vn(c, w)) : (s = r, r = e);
                                                        } else
                                                          s = r, r = e;
                                                      } else
                                                        s = r, r = e;
                                                    } else
                                                      s = r, r = e;
                                                  } else
                                                    s = r, r = e;
                                                } else
                                                  s = r, r = e;
                                                if (r === e) {
                                                  if (r = s, h.substr(s, 8).toLowerCase() === Ct ? (f = h.substr(s, 8), s += 8) : (f = e, p(If)), f !== e) {
                                                    for (l = [], t = a(); t !== e; )
                                                      l.push(t), t = a();
                                                    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                      for (o = [], c = a(); c !== e; )
                                                        o.push(c), c = a();
                                                      if (c = _(), c !== e) {
                                                        for (n = [], u = a(); u !== e; )
                                                          n.push(u), u = a();
                                                        if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                          for (g = [], w = a(); w !== e; )
                                                            g.push(w), w = a();
                                                          if (w = _(), w !== e) {
                                                            for ($ = [], b = a(); b !== e; )
                                                              $.push(b), b = a();
                                                            h.charCodeAt(s) === 41 ? (b = E, s++) : (b = e, p(P)), b !== e ? (d = r, r = bn(c, w)) : (s = r, r = e);
                                                          } else
                                                            s = r, r = e;
                                                        } else
                                                          s = r, r = e;
                                                      } else
                                                        s = r, r = e;
                                                    } else
                                                      s = r, r = e;
                                                  } else
                                                    s = r, r = e;
                                                  if (r === e) {
                                                    if (r = s, h.substr(s, 4).toLowerCase() === _t ? (f = h.substr(s, 4), s += 4) : (f = e, p(Of)), f !== e) {
                                                      for (l = [], t = a(); t !== e; )
                                                        l.push(t), t = a();
                                                      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                        for (o = [], c = a(); c !== e; )
                                                          o.push(c), c = a();
                                                        if (c = _(), c !== e) {
                                                          for (n = [], u = a(); u !== e; )
                                                            n.push(u), u = a();
                                                          h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = An(c)) : (s = r, r = e);
                                                        } else
                                                          s = r, r = e;
                                                      } else
                                                        s = r, r = e;
                                                    } else
                                                      s = r, r = e;
                                                    if (r === e) {
                                                      if (r = s, h.substr(s, 5).toLowerCase() === mt ? (f = h.substr(s, 5), s += 5) : (f = e, p(Nf)), f !== e) {
                                                        for (l = [], t = a(); t !== e; )
                                                          l.push(t), t = a();
                                                        if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                          for (o = [], c = a(); c !== e; )
                                                            o.push(c), c = a();
                                                          if (c = _(), c !== e) {
                                                            for (n = [], u = a(); u !== e; )
                                                              n.push(u), u = a();
                                                            h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Cn(c)) : (s = r, r = e);
                                                          } else
                                                            s = r, r = e;
                                                        } else
                                                          s = r, r = e;
                                                      } else
                                                        s = r, r = e;
                                                      if (r === e) {
                                                        if (r = s, h.substr(s, 3).toLowerCase() === Et ? (f = h.substr(s, 3), s += 3) : (f = e, p(Sf)), f !== e) {
                                                          for (l = [], t = a(); t !== e; )
                                                            l.push(t), t = a();
                                                          if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                            for (o = [], c = a(); c !== e; )
                                                              o.push(c), c = a();
                                                            if (c = _(), c !== e) {
                                                              for (n = [], u = a(); u !== e; )
                                                                n.push(u), u = a();
                                                              h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = _n(c)) : (s = r, r = e);
                                                            } else
                                                              s = r, r = e;
                                                          } else
                                                            s = r, r = e;
                                                        } else
                                                          s = r, r = e;
                                                        if (r === e) {
                                                          if (r = s, h.substr(s, 5).toLowerCase() === yt ? (f = h.substr(s, 5), s += 5) : (f = e, p(Ff)), f !== e) {
                                                            for (l = [], t = a(); t !== e; )
                                                              l.push(t), t = a();
                                                            if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                              for (o = [], c = a(); c !== e; )
                                                                o.push(c), c = a();
                                                              if (c = _(), c !== e) {
                                                                for (n = [], u = a(); u !== e; )
                                                                  n.push(u), u = a();
                                                                h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = mn(c)) : (s = r, r = e);
                                                              } else
                                                                s = r, r = e;
                                                            } else
                                                              s = r, r = e;
                                                          } else
                                                            s = r, r = e;
                                                          if (r === e) {
                                                            if (r = s, h.substr(s, 7).toLowerCase() === Pt ? (f = h.substr(s, 7), s += 7) : (f = e, p(xf)), f !== e) {
                                                              for (l = [], t = a(); t !== e; )
                                                                l.push(t), t = a();
                                                              if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                for (o = [], c = a(); c !== e; )
                                                                  o.push(c), c = a();
                                                                if (c = _(), c !== e) {
                                                                  for (n = [], u = a(); u !== e; )
                                                                    n.push(u), u = a();
                                                                  h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = En(c)) : (s = r, r = e);
                                                                } else
                                                                  s = r, r = e;
                                                              } else
                                                                s = r, r = e;
                                                            } else
                                                              s = r, r = e;
                                                            if (r === e) {
                                                              if (r = s, h.substr(s, 7).toLowerCase() === Lt ? (f = h.substr(s, 7), s += 7) : (f = e, p(Df)), f !== e) {
                                                                for (l = [], t = a(); t !== e; )
                                                                  l.push(t), t = a();
                                                                if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                  for (o = [], c = a(); c !== e; )
                                                                    o.push(c), c = a();
                                                                  if (c = _(), c !== e) {
                                                                    for (n = [], u = a(); u !== e; )
                                                                      n.push(u), u = a();
                                                                    h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = yn(c)) : (s = r, r = e);
                                                                  } else
                                                                    s = r, r = e;
                                                                } else
                                                                  s = r, r = e;
                                                              } else
                                                                s = r, r = e;
                                                              if (r === e) {
                                                                if (r = s, h.substr(s, 8).toLowerCase() === Tt ? (f = h.substr(s, 8), s += 8) : (f = e, p(Gf)), f !== e) {
                                                                  for (l = [], t = a(); t !== e; )
                                                                    l.push(t), t = a();
                                                                  if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                    for (o = [], c = a(); c !== e; )
                                                                      o.push(c), c = a();
                                                                    if (c = _(), c !== e) {
                                                                      for (n = [], u = a(); u !== e; )
                                                                        n.push(u), u = a();
                                                                      h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Pn(c)) : (s = r, r = e);
                                                                    } else
                                                                      s = r, r = e;
                                                                  } else
                                                                    s = r, r = e;
                                                                } else
                                                                  s = r, r = e;
                                                                if (r === e) {
                                                                  if (r = s, h.substr(s, 2).toLowerCase() === Rt ? (f = h.substr(s, 2), s += 2) : (f = e, p(Uf)), f !== e) {
                                                                    for (l = [], t = a(); t !== e; )
                                                                      l.push(t), t = a();
                                                                    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                      for (o = [], c = a(); c !== e; )
                                                                        o.push(c), c = a();
                                                                      if (c = _(), c !== e) {
                                                                        for (n = [], u = a(); u !== e; )
                                                                          n.push(u), u = a();
                                                                        h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Ln(c)) : (s = r, r = e);
                                                                      } else
                                                                        s = r, r = e;
                                                                    } else
                                                                      s = r, r = e;
                                                                  } else
                                                                    s = r, r = e;
                                                                  if (r === e) {
                                                                    if (r = s, h.substr(s, 3).toLowerCase() === It ? (f = h.substr(s, 3), s += 3) : (f = e, p(Bf)), f !== e) {
                                                                      for (l = [], t = a(); t !== e; )
                                                                        l.push(t), t = a();
                                                                      t = ye(), t !== e ? (d = r, r = Tn()) : (s = r, r = e);
                                                                    } else
                                                                      s = r, r = e;
                                                                    if (r === e) {
                                                                      if (r = s, h.substr(s, 4).toLowerCase() === Ot ? (f = h.substr(s, 4), s += 4) : (f = e, p(Hf)), f !== e) {
                                                                        for (l = [], t = a(); t !== e; )
                                                                          l.push(t), t = a();
                                                                        t = ye(), t !== e ? (d = r, r = Rn()) : (s = r, r = e);
                                                                      } else
                                                                        s = r, r = e;
                                                                      if (r === e) {
                                                                        if (r = s, h.substr(s, 7).toLowerCase() === Nt ? (f = h.substr(s, 7), s += 7) : (f = e, p(Mf)), f !== e) {
                                                                          for (l = [], t = a(); t !== e; )
                                                                            l.push(t), t = a();
                                                                          t = ye(), t !== e ? (d = r, r = In()) : (s = r, r = e);
                                                                        } else
                                                                          s = r, r = e;
                                                                        if (r === e) {
                                                                          if (r = s, h.substr(s, 3).toLowerCase() === St ? (f = h.substr(s, 3), s += 3) : (f = e, p(kf)), f !== e) {
                                                                            for (l = [], t = a(); t !== e; )
                                                                              l.push(t), t = a();
                                                                            if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                              for (o = [], c = a(); c !== e; )
                                                                                o.push(c), c = a();
                                                                              if (c = _(), c !== e) {
                                                                                for (n = [], u = a(); u !== e; )
                                                                                  n.push(u), u = a();
                                                                                h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = On(c)) : (s = r, r = e);
                                                                              } else
                                                                                s = r, r = e;
                                                                            } else
                                                                              s = r, r = e;
                                                                          } else
                                                                            s = r, r = e;
                                                                          if (r === e) {
                                                                            if (r = s, h.substr(s, 4).toLowerCase() === Ft ? (f = h.substr(s, 4), s += 4) : (f = e, p(jf)), f !== e) {
                                                                              for (l = [], t = a(); t !== e; )
                                                                                l.push(t), t = a();
                                                                              if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                for (o = [], c = a(); c !== e; )
                                                                                  o.push(c), c = a();
                                                                                if (c = _(), c !== e) {
                                                                                  for (n = [], u = a(); u !== e; )
                                                                                    n.push(u), u = a();
                                                                                  h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Nn(c)) : (s = r, r = e);
                                                                                } else
                                                                                  s = r, r = e;
                                                                              } else
                                                                                s = r, r = e;
                                                                            } else
                                                                              s = r, r = e;
                                                                            if (r === e) {
                                                                              if (r = s, h.substr(s, 6).toLowerCase() === xt ? (f = h.substr(s, 6), s += 6) : (f = e, p(Xf)), f !== e) {
                                                                                for (l = [], t = a(); t !== e; )
                                                                                  l.push(t), t = a();
                                                                                if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                  for (o = [], c = a(); c !== e; )
                                                                                    o.push(c), c = a();
                                                                                  if (c = _(), c !== e) {
                                                                                    for (n = [], u = a(); u !== e; )
                                                                                      n.push(u), u = a();
                                                                                    h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Sn(c)) : (s = r, r = e);
                                                                                  } else
                                                                                    s = r, r = e;
                                                                                } else
                                                                                  s = r, r = e;
                                                                              } else
                                                                                s = r, r = e;
                                                                              if (r === e) {
                                                                                if (r = s, h.substr(s, 6).toLowerCase() === Dt ? (f = h.substr(s, 6), s += 6) : (f = e, p(Vf)), f !== e) {
                                                                                  for (l = [], t = a(); t !== e; )
                                                                                    l.push(t), t = a();
                                                                                  if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                    for (o = [], c = a(); c !== e; )
                                                                                      o.push(c), c = a();
                                                                                    if (c = _(), c !== e) {
                                                                                      for (n = [], u = a(); u !== e; )
                                                                                        n.push(u), u = a();
                                                                                      h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Fn(c)) : (s = r, r = e);
                                                                                    } else
                                                                                      s = r, r = e;
                                                                                  } else
                                                                                    s = r, r = e;
                                                                                } else
                                                                                  s = r, r = e;
                                                                                if (r === e) {
                                                                                  if (r = s, h.substr(s, 6).toLowerCase() === Gt ? (f = h.substr(s, 6), s += 6) : (f = e, p(Wf)), f !== e) {
                                                                                    for (l = [], t = a(); t !== e; )
                                                                                      l.push(t), t = a();
                                                                                    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                      for (o = [], c = a(); c !== e; )
                                                                                        o.push(c), c = a();
                                                                                      if (c = _(), c !== e) {
                                                                                        for (n = [], u = a(); u !== e; )
                                                                                          n.push(u), u = a();
                                                                                        h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = xn(c)) : (s = r, r = e);
                                                                                      } else
                                                                                        s = r, r = e;
                                                                                    } else
                                                                                      s = r, r = e;
                                                                                  } else
                                                                                    s = r, r = e;
                                                                                  if (r === e) {
                                                                                    if (r = s, h.substr(s, 8).toLowerCase() === Ut ? (f = h.substr(s, 8), s += 8) : (f = e, p(Yf)), f !== e) {
                                                                                      for (l = [], t = a(); t !== e; )
                                                                                        l.push(t), t = a();
                                                                                      t = Fe(), t !== e ? (d = r, r = Dn(t)) : (s = r, r = e);
                                                                                    } else
                                                                                      s = r, r = e;
                                                                                    if (r === e) {
                                                                                      if (r = s, h.substr(s, 2).toLowerCase() === Bt ? (f = h.substr(s, 2), s += 2) : (f = e, p(Qf)), f !== e) {
                                                                                        for (l = [], t = a(); t !== e; )
                                                                                          l.push(t), t = a();
                                                                                        if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                          for (o = [], c = a(); c !== e; )
                                                                                            o.push(c), c = a();
                                                                                          if (c = _(), c !== e) {
                                                                                            for (n = [], u = a(); u !== e; )
                                                                                              n.push(u), u = a();
                                                                                            if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                                                              for (g = [], w = a(); w !== e; )
                                                                                                g.push(w), w = a();
                                                                                              if (w = _(), w !== e) {
                                                                                                for ($ = [], b = a(); b !== e; )
                                                                                                  $.push(b), b = a();
                                                                                                if (h.charCodeAt(s) === 44 ? (b = D, s++) : (b = e, p(G)), b !== e) {
                                                                                                  for (m = [], L = a(); L !== e; )
                                                                                                    m.push(L), L = a();
                                                                                                  if (L = _(), L !== e) {
                                                                                                    for (R = [], N = a(); N !== e; )
                                                                                                      R.push(N), N = a();
                                                                                                    h.charCodeAt(s) === 41 ? (N = E, s++) : (N = e, p(P)), N !== e ? (d = r, r = Gn(c, w, L)) : (s = r, r = e);
                                                                                                  } else
                                                                                                    s = r, r = e;
                                                                                                } else
                                                                                                  s = r, r = e;
                                                                                              } else
                                                                                                s = r, r = e;
                                                                                            } else
                                                                                              s = r, r = e;
                                                                                          } else
                                                                                            s = r, r = e;
                                                                                        } else
                                                                                          s = r, r = e;
                                                                                      } else
                                                                                        s = r, r = e;
                                                                                      if (r === e) {
                                                                                        if (r = s, h.substr(s, 7).toLowerCase() === Ht ? (f = h.substr(s, 7), s += 7) : (f = e, p(zf)), f !== e) {
                                                                                          for (l = [], t = a(); t !== e; )
                                                                                            l.push(t), t = a();
                                                                                          if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                            for (o = [], c = a(); c !== e; )
                                                                                              o.push(c), c = a();
                                                                                            if (c = _(), c !== e) {
                                                                                              for (n = [], u = a(); u !== e; )
                                                                                                n.push(u), u = a();
                                                                                              if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                                                                for (g = [], w = a(); w !== e; )
                                                                                                  g.push(w), w = a();
                                                                                                if (w = _(), w !== e) {
                                                                                                  for ($ = [], b = a(); b !== e; )
                                                                                                    $.push(b), b = a();
                                                                                                  h.charCodeAt(s) === 41 ? (b = E, s++) : (b = e, p(P)), b !== e ? (d = r, r = Un(c, w)) : (s = r, r = e);
                                                                                                } else
                                                                                                  s = r, r = e;
                                                                                              } else
                                                                                                s = r, r = e;
                                                                                            } else
                                                                                              s = r, r = e;
                                                                                          } else
                                                                                            s = r, r = e;
                                                                                        } else
                                                                                          s = r, r = e;
                                                                                        if (r === e) {
                                                                                          if (r = s, h.substr(s, 5).toLowerCase() === Mt ? (f = h.substr(s, 5), s += 5) : (f = e, p(Zf)), f !== e) {
                                                                                            for (l = [], t = a(); t !== e; )
                                                                                              l.push(t), t = a();
                                                                                            if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                              for (o = [], c = a(); c !== e; )
                                                                                                o.push(c), c = a();
                                                                                              if (c = _(), c !== e) {
                                                                                                for (n = [], u = a(); u !== e; )
                                                                                                  n.push(u), u = a();
                                                                                                if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                                                                  for (g = [], w = a(); w !== e; )
                                                                                                    g.push(w), w = a();
                                                                                                  if (w = _(), w !== e) {
                                                                                                    for ($ = [], b = a(); b !== e; )
                                                                                                      $.push(b), b = a();
                                                                                                    h.charCodeAt(s) === 41 ? (b = E, s++) : (b = e, p(P)), b !== e ? (d = r, r = Bn(c, w)) : (s = r, r = e);
                                                                                                  } else
                                                                                                    s = r, r = e;
                                                                                                } else
                                                                                                  s = r, r = e;
                                                                                              } else
                                                                                                s = r, r = e;
                                                                                            } else
                                                                                              s = r, r = e;
                                                                                          } else
                                                                                            s = r, r = e;
                                                                                          if (r === e) {
                                                                                            if (r = s, h.substr(s, 8).toLowerCase() === kt ? (f = h.substr(s, 8), s += 8) : (f = e, p(qf)), f !== e) {
                                                                                              for (l = [], t = a(); t !== e; )
                                                                                                l.push(t), t = a();
                                                                                              if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                                for (o = [], c = a(); c !== e; )
                                                                                                  o.push(c), c = a();
                                                                                                if (c = _(), c !== e) {
                                                                                                  for (n = [], u = a(); u !== e; )
                                                                                                    n.push(u), u = a();
                                                                                                  if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                                                                    for (g = [], w = a(); w !== e; )
                                                                                                      g.push(w), w = a();
                                                                                                    if (w = _(), w !== e) {
                                                                                                      for ($ = [], b = a(); b !== e; )
                                                                                                        $.push(b), b = a();
                                                                                                      h.charCodeAt(s) === 41 ? (b = E, s++) : (b = e, p(P)), b !== e ? (d = r, r = Hn(c, w)) : (s = r, r = e);
                                                                                                    } else
                                                                                                      s = r, r = e;
                                                                                                  } else
                                                                                                    s = r, r = e;
                                                                                                } else
                                                                                                  s = r, r = e;
                                                                                              } else
                                                                                                s = r, r = e;
                                                                                            } else
                                                                                              s = r, r = e;
                                                                                            if (r === e) {
                                                                                              if (r = s, h.substr(s, 5).toLowerCase() === jt ? (f = h.substr(s, 5), s += 5) : (f = e, p(Kf)), f === e && (h.substr(s, 5).toLowerCase() === Xt ? (f = h.substr(s, 5), s += 5) : (f = e, p(Jf))), f !== e) {
                                                                                                for (l = [], t = a(); t !== e; )
                                                                                                  l.push(t), t = a();
                                                                                                if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                                  for (o = [], c = a(); c !== e; )
                                                                                                    o.push(c), c = a();
                                                                                                  if (c = _(), c !== e) {
                                                                                                    for (n = [], u = a(); u !== e; )
                                                                                                      n.push(u), u = a();
                                                                                                    h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Mn(c)) : (s = r, r = e);
                                                                                                  } else
                                                                                                    s = r, r = e;
                                                                                                } else
                                                                                                  s = r, r = e;
                                                                                              } else
                                                                                                s = r, r = e;
                                                                                              if (r === e) {
                                                                                                if (r = s, h.substr(s, 7).toLowerCase() === Vt ? (f = h.substr(s, 7), s += 7) : (f = e, p(eo)), f !== e) {
                                                                                                  for (l = [], t = a(); t !== e; )
                                                                                                    l.push(t), t = a();
                                                                                                  if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                                    for (o = [], c = a(); c !== e; )
                                                                                                      o.push(c), c = a();
                                                                                                    if (c = _(), c !== e) {
                                                                                                      for (n = [], u = a(); u !== e; )
                                                                                                        n.push(u), u = a();
                                                                                                      h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = kn(c)) : (s = r, r = e);
                                                                                                    } else
                                                                                                      s = r, r = e;
                                                                                                  } else
                                                                                                    s = r, r = e;
                                                                                                } else
                                                                                                  s = r, r = e;
                                                                                                if (r === e) {
                                                                                                  if (r = s, h.substr(s, 9).toLowerCase() === Wt ? (f = h.substr(s, 9), s += 9) : (f = e, p(so)), f !== e) {
                                                                                                    for (l = [], t = a(); t !== e; )
                                                                                                      l.push(t), t = a();
                                                                                                    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                                      for (o = [], c = a(); c !== e; )
                                                                                                        o.push(c), c = a();
                                                                                                      if (c = _(), c !== e) {
                                                                                                        for (n = [], u = a(); u !== e; )
                                                                                                          n.push(u), u = a();
                                                                                                        h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = jn(c)) : (s = r, r = e);
                                                                                                      } else
                                                                                                        s = r, r = e;
                                                                                                    } else
                                                                                                      s = r, r = e;
                                                                                                  } else
                                                                                                    s = r, r = e;
                                                                                                  if (r === e) {
                                                                                                    if (r = s, h.substr(s, 9).toLowerCase() === Yt ? (f = h.substr(s, 9), s += 9) : (f = e, p(ro)), f !== e) {
                                                                                                      for (l = [], t = a(); t !== e; )
                                                                                                        l.push(t), t = a();
                                                                                                      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                                        for (o = [], c = a(); c !== e; )
                                                                                                          o.push(c), c = a();
                                                                                                        if (c = _(), c !== e) {
                                                                                                          for (n = [], u = a(); u !== e; )
                                                                                                            n.push(u), u = a();
                                                                                                          h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Xn(c)) : (s = r, r = e);
                                                                                                        } else
                                                                                                          s = r, r = e;
                                                                                                      } else
                                                                                                        s = r, r = e;
                                                                                                    } else
                                                                                                      s = r, r = e;
                                                                                                    r === e && (r = Up(), r === e && (r = Mp(), r === e && (r = kp())));
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
    return r;
  }
  function Up() {
    var r, f, l, t, o, c, n, u, g, w, $, b, m, L, R;
    if (r = s, h.substr(s, 5).toLowerCase() === Qt ? (f = h.substr(s, 5), s += 5) : (f = e, p(io)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (c = _(), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (w = _(), w !== e) {
              for ($ = [], b = a(); b !== e; )
                $.push(b), b = a();
              if (b = s, h.charCodeAt(s) === 44 ? (m = D, s++) : (m = e, p(G)), m !== e) {
                for (L = [], R = a(); R !== e; )
                  L.push(R), R = a();
                R = _(), R !== e ? (m = [m, L, R], b = m) : (s = b, b = e);
              } else
                s = b, b = e;
              for (b === e && (b = null), m = [], L = a(); L !== e; )
                m.push(L), L = a();
              h.charCodeAt(s) === 41 ? (L = E, s++) : (L = e, p(P)), L !== e ? (d = r, r = Vn(c, w, b)) : (s = r, r = e);
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Bp() {
    var r, f, l, t, o, c, n, u, g, w, $, b, m, L, R;
    if (r = s, h.substr(s, 6).toLowerCase() === zt ? (f = h.substr(s, 6), s += 6) : (f = e, p(lo)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (c = _(), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (w = _(), w !== e) {
              for ($ = [], b = a(); b !== e; )
                $.push(b), b = a();
              if (b = s, h.charCodeAt(s) === 44 ? (m = D, s++) : (m = e, p(G)), m !== e) {
                for (L = [], R = a(); R !== e; )
                  L.push(R), R = a();
                R = _(), R !== e ? (m = [m, L, R], b = m) : (s = b, b = e);
              } else
                s = b, b = e;
              for (b === e && (b = null), m = [], L = a(); L !== e; )
                m.push(L), L = a();
              h.charCodeAt(s) === 41 ? (L = E, s++) : (L = e, p(P)), L !== e ? (d = r, r = Wn(c, w, b)) : (s = r, r = e);
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Hp() {
    var r, f, l, t, o, c, n, u, g, w, $, b, m, L, R, N, M, ge, Br;
    if (r = s, h.substr(s, 7).toLowerCase() === Zt ? (f = h.substr(s, 7), s += 7) : (f = e, p(to)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (c = _(), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (w = _(), w !== e) {
              for ($ = [], b = a(); b !== e; )
                $.push(b), b = a();
              if (h.charCodeAt(s) === 44 ? (b = D, s++) : (b = e, p(G)), b !== e) {
                for (m = [], L = a(); L !== e; )
                  m.push(L), L = a();
                if (L = _(), L !== e) {
                  for (R = [], N = a(); N !== e; )
                    R.push(N), N = a();
                  if (N = s, h.charCodeAt(s) === 44 ? (M = D, s++) : (M = e, p(G)), M !== e) {
                    for (ge = [], Br = a(); Br !== e; )
                      ge.push(Br), Br = a();
                    Br = _(), Br !== e ? (M = [M, ge, Br], N = M) : (s = N, N = e);
                  } else
                    s = N, N = e;
                  for (N === e && (N = null), M = [], ge = a(); ge !== e; )
                    M.push(ge), ge = a();
                  h.charCodeAt(s) === 41 ? (ge = E, s++) : (ge = e, p(P)), ge !== e ? (d = r, r = Yn(c, w, L, N)) : (s = r, r = e);
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Mp() {
    var r, f, l, t;
    if (r = s, h.substr(s, 6).toLowerCase() === Jr ? (f = h.substr(s, 6), s += 6) : (f = e, p(Pi)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      t = ie(), t !== e ? (d = r, r = Qn(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function kp() {
    var r, f, l, t, o, c;
    if (r = s, h.substr(s, 3).toLowerCase() === Ws ? (f = h.substr(s, 3), s += 3) : (f = e, p(ar)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (h.substr(s, 6).toLowerCase() === Jr ? (t = h.substr(s, 6), s += 6) : (t = e, p(Pi)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = ie(), c !== e ? (d = r, r = zn(c)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function jp() {
    var r, f, l, t, o, c, n, u, g, w, $, b, m, L, R, N, M;
    if (r = s, h.substr(s, 5).toLowerCase() === qt ? (f = h.substr(s, 5), s += 5) : (f = e, p(ao)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        for (h.substr(s, 8).toLowerCase() === O ? (c = h.substr(s, 8), s += 8) : (c = e, p(ue)), c === e && (c = null), n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.charCodeAt(s) === 42 ? (u = se, s++) : (u = e, p(re)), u === e && (u = _()), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          if (h.charCodeAt(s) === 41 ? (w = E, s++) : (w = e, p(P)), w !== e) {
            for ($ = [], b = a(); b !== e; )
              $.push(b), b = a();
            d = r, r = Zn(c, u);
          } else
            s = r, r = e;
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    if (r === e) {
      if (r = s, h.substr(s, 3).toLowerCase() === Kt ? (f = h.substr(s, 3), s += 3) : (f = e, p(fo)), f !== e) {
        for (l = [], t = a(); t !== e; )
          l.push(t), t = a();
        if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
          for (o = [], c = a(); c !== e; )
            o.push(c), c = a();
          for (h.substr(s, 8).toLowerCase() === O ? (c = h.substr(s, 8), s += 8) : (c = e, p(ue)), c === e && (c = null), n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (u = _(), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (h.charCodeAt(s) === 41 ? (w = E, s++) : (w = e, p(P)), w !== e) {
              for ($ = [], b = a(); b !== e; )
                $.push(b), b = a();
              d = r, r = qn(c, u);
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
      } else
        s = r, r = e;
      if (r === e) {
        if (r = s, h.substr(s, 3).toLowerCase() === Jt ? (f = h.substr(s, 3), s += 3) : (f = e, p(oo)), f !== e) {
          for (l = [], t = a(); t !== e; )
            l.push(t), t = a();
          if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
            for (o = [], c = a(); c !== e; )
              o.push(c), c = a();
            for (h.substr(s, 8).toLowerCase() === O ? (c = h.substr(s, 8), s += 8) : (c = e, p(ue)), c === e && (c = null), n = [], u = a(); u !== e; )
              n.push(u), u = a();
            if (u = _(), u !== e) {
              for (g = [], w = a(); w !== e; )
                g.push(w), w = a();
              if (h.charCodeAt(s) === 41 ? (w = E, s++) : (w = e, p(P)), w !== e) {
                for ($ = [], b = a(); b !== e; )
                  $.push(b), b = a();
                d = r, r = Kn(c, u);
              } else
                s = r, r = e;
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
        if (r === e) {
          if (r = s, h.substr(s, 3).toLowerCase() === ea ? (f = h.substr(s, 3), s += 3) : (f = e, p(ho)), f !== e) {
            for (l = [], t = a(); t !== e; )
              l.push(t), t = a();
            if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
              for (o = [], c = a(); c !== e; )
                o.push(c), c = a();
              for (h.substr(s, 8).toLowerCase() === O ? (c = h.substr(s, 8), s += 8) : (c = e, p(ue)), c === e && (c = null), n = [], u = a(); u !== e; )
                n.push(u), u = a();
              if (u = _(), u !== e) {
                for (g = [], w = a(); w !== e; )
                  g.push(w), w = a();
                if (h.charCodeAt(s) === 41 ? (w = E, s++) : (w = e, p(P)), w !== e) {
                  for ($ = [], b = a(); b !== e; )
                    $.push(b), b = a();
                  d = r, r = Jn(c, u);
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
            } else
              s = r, r = e;
          } else
            s = r, r = e;
          if (r === e) {
            if (r = s, h.substr(s, 3).toLowerCase() === sa ? (f = h.substr(s, 3), s += 3) : (f = e, p(co)), f !== e) {
              for (l = [], t = a(); t !== e; )
                l.push(t), t = a();
              if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                for (o = [], c = a(); c !== e; )
                  o.push(c), c = a();
                for (h.substr(s, 8).toLowerCase() === O ? (c = h.substr(s, 8), s += 8) : (c = e, p(ue)), c === e && (c = null), n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (u = _(), u !== e) {
                  for (g = [], w = a(); w !== e; )
                    g.push(w), w = a();
                  if (h.charCodeAt(s) === 41 ? (w = E, s++) : (w = e, p(P)), w !== e) {
                    for ($ = [], b = a(); b !== e; )
                      $.push(b), b = a();
                    d = r, r = eu(c, u);
                  } else
                    s = r, r = e;
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
            } else
              s = r, r = e;
            if (r === e) {
              if (r = s, h.substr(s, 6).toLowerCase() === ra ? (f = h.substr(s, 6), s += 6) : (f = e, p(no)), f !== e) {
                for (l = [], t = a(); t !== e; )
                  l.push(t), t = a();
                if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                  for (o = [], c = a(); c !== e; )
                    o.push(c), c = a();
                  for (h.substr(s, 8).toLowerCase() === O ? (c = h.substr(s, 8), s += 8) : (c = e, p(ue)), c === e && (c = null), n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  if (u = _(), u !== e) {
                    for (g = [], w = a(); w !== e; )
                      g.push(w), w = a();
                    if (h.charCodeAt(s) === 41 ? (w = E, s++) : (w = e, p(P)), w !== e) {
                      for ($ = [], b = a(); b !== e; )
                        $.push(b), b = a();
                      d = r, r = su(c, u);
                    } else
                      s = r, r = e;
                  } else
                    s = r, r = e;
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
              if (r === e)
                if (r = s, h.substr(s, 12).toLowerCase() === ia ? (f = h.substr(s, 12), s += 12) : (f = e, p(uo)), f !== e) {
                  for (l = [], t = a(); t !== e; )
                    l.push(t), t = a();
                  if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                    for (o = [], c = a(); c !== e; )
                      o.push(c), c = a();
                    for (h.substr(s, 8).toLowerCase() === O ? (c = h.substr(s, 8), s += 8) : (c = e, p(ue)), c === e && (c = null), n = [], u = a(); u !== e; )
                      n.push(u), u = a();
                    if (u = _(), u !== e) {
                      for (g = s, w = [], $ = a(); $ !== e; )
                        w.push($), $ = a();
                      if (h.charCodeAt(s) === 59 ? ($ = Le, s++) : ($ = e, p(Re)), $ !== e) {
                        for (b = [], m = a(); m !== e; )
                          b.push(m), m = a();
                        if (h.substr(s, 9).toLowerCase() === la ? (m = h.substr(s, 9), s += 9) : (m = e, p(po)), m !== e) {
                          for (L = [], R = a(); R !== e; )
                            L.push(R), R = a();
                          if (h.charCodeAt(s) === 61 ? (R = is, s++) : (R = e, p(bs)), R !== e) {
                            for (N = [], M = a(); M !== e; )
                              N.push(M), M = a();
                            M = $l(), M !== e ? (w = [w, $, b, m, L, R, N, M], g = w) : (s = g, g = e);
                          } else
                            s = g, g = e;
                        } else
                          s = g, g = e;
                      } else
                        s = g, g = e;
                      for (g === e && (g = null), w = [], $ = a(); $ !== e; )
                        w.push($), $ = a();
                      if (h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e) {
                        for (b = [], m = a(); m !== e; )
                          b.push(m), m = a();
                        d = r, r = ru(c, u, g);
                      } else
                        s = r, r = e;
                    } else
                      s = r, r = e;
                  } else
                    s = r, r = e;
                } else
                  s = r, r = e;
            }
          }
        }
      }
    }
    return r;
  }
  function Xp() {
    var r, f, l, t;
    if (r = s, f = V(), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      t = nl(), t === e && (t = null), d = r, r = iu(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Lr() {
    var r, f, l, t, o;
    return r = s, f = $l(), f !== e ? (l = Kp(), l === e && (l = s, h.substr(s, 2) === ei ? (t = ei, s += 2) : (t = e, p(go)), t !== e ? (o = V(), o !== e ? (t = [t, o], l = t) : (s = l, l = e)) : (s = l, l = e)), l === e && (l = null), d = r, r = lu(f, l)) : (s = r, r = e), r;
  }
  function Tr() {
    var r;
    return r = Vp(), r === e && (r = Rr(), r === e && (r = Ir())), r;
  }
  function Vp() {
    var r;
    return r = xr(), r === e && (r = Fr(), r === e && (r = Ve())), r;
  }
  function Rr() {
    var r;
    return r = sg(), r === e && (r = eg(), r === e && (r = Jp())), r;
  }
  function Ir() {
    var r;
    return r = lg(), r === e && (r = ig(), r === e && (r = rg())), r;
  }
  function Or() {
    var r, f;
    return r = s, h.substr(s, 4).toLowerCase() === ta ? (f = h.substr(s, 4), s += 4) : (f = e, p(wo)), f !== e && (d = r, f = tu()), r = f, r === e && (r = s, h.substr(s, 5).toLowerCase() === aa ? (f = h.substr(s, 5), s += 5) : (f = e, p($o)), f !== e && (d = r, f = au()), r = f), r;
  }
  function $l() {
    var r;
    return r = fg(), r === e && (r = og(), r === e && (r = tg(), r === e && (r = ag()))), r;
  }
  function V() {
    var r, f;
    return r = s, f = Nr(), f !== e && (d = r, f = fu(f)), r = f, r === e && (r = s, f = Wp(), f !== e && (d = r, f = ou(f)), r = f), r;
  }
  function Wp() {
    var r, f;
    return r = s, f = Qp(), f !== e && (d = r, f = hu(f)), r = f, r === e && (r = s, f = Sr(), f !== e && (d = r, f = cu(f)), r = f), r;
  }
  function Yp() {
    var r, f;
    return r = s, f = zp(), f !== e && (d = r, f = nu(f)), r = f, r === e && (r = s, f = cg(), f !== e && (d = r, f = uu()), r = f), r;
  }
  function Nr() {
    var r, f, l, t;
    if (r = s, h.charCodeAt(s) === 60 ? (f = Xs, s++) : (f = e, p(lr)), f !== e) {
      for (l = [], fi.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Li)); t !== e; )
        l.push(t), fi.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Li));
      h.charCodeAt(s) === 62 ? (t = Vs, s++) : (t = e, p(tr)), t !== e ? (d = r, r = pu(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Sr() {
    var r, f, l;
    return r = s, f = ng(), f === e && (f = null), h.charCodeAt(s) === 58 ? (l = Te, s++) : (l = e, p(Ie)), l !== e ? (d = r, r = gu(f)) : (s = r, r = e), r;
  }
  function Qp() {
    var r, f, l;
    return r = s, f = Sr(), f !== e ? (l = ug(), l !== e ? (d = r, r = wu(f, l)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function zp() {
    var r, f, l, t, o, c, n;
    if (r = s, h.substr(s, 2) === si ? (f = si, s += 2) : (f = e, p(vo)), f !== e)
      if (l = De(), l === e && (B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H))), l !== e) {
        for (t = [], o = J(), o === e && (o = s, h.charCodeAt(s) === 46 ? (c = j, s++) : (c = e, p(X)), c !== e ? (n = J(), n !== e ? (c = [c, n], o = c) : (s = o, o = e)) : (s = o, o = e)); o !== e; )
          t.push(o), o = J(), o === e && (o = s, h.charCodeAt(s) === 46 ? (c = j, s++) : (c = e, p(X)), c !== e ? (n = J(), n !== e ? (c = [c, n], o = c) : (s = o, o = e)) : (s = o, o = e));
        d = r, r = du();
      } else
        s = r, r = e;
    else
      s = r, r = e;
    return r;
  }
  function Zp() {
    var r, f, l;
    return r = s, h.charCodeAt(s) === 63 ? (f = Hs, s++) : (f = e, p(er)), f !== e ? (l = Al(), l !== e ? (d = r, r = $u(l)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function qp() {
    var r, f, l;
    return r = s, h.charCodeAt(s) === 36 ? (f = ri, s++) : (f = e, p(Ti)), f !== e ? (l = Al(), l !== e ? (d = r, r = vu(l)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function Kp() {
    var r, f, l, t, o, c, n, u;
    if (r = s, h.charCodeAt(s) === 64 ? (f = ii, s++) : (f = e, p(Ri)), f !== e) {
      if (l = [], oi.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Ii)), t !== e)
        for (; t !== e; )
          l.push(t), oi.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Ii));
      else
        l = e;
      if (l !== e) {
        if (t = [], o = s, h.charCodeAt(s) === 45 ? (c = le, s++) : (c = e, p(te)), c !== e) {
          if (n = [], ps.test(h.charAt(s)) ? (u = h.charAt(s), s++) : (u = e, p(Cs)), u !== e)
            for (; u !== e; )
              n.push(u), ps.test(h.charAt(s)) ? (u = h.charAt(s), s++) : (u = e, p(Cs));
          else
            n = e;
          n !== e ? (c = [c, n], o = c) : (s = o, o = e);
        } else
          s = o, o = e;
        for (; o !== e; )
          if (t.push(o), o = s, h.charCodeAt(s) === 45 ? (c = le, s++) : (c = e, p(te)), c !== e) {
            if (n = [], ps.test(h.charAt(s)) ? (u = h.charAt(s), s++) : (u = e, p(Cs)), u !== e)
              for (; u !== e; )
                n.push(u), ps.test(h.charAt(s)) ? (u = h.charAt(s), s++) : (u = e, p(Cs));
            else
              n = e;
            n !== e ? (c = [c, n], o = c) : (s = o, o = e);
          } else
            s = o, o = e;
        d = r, r = bu(l, t);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Ve() {
    var r, f, l;
    if (r = s, f = [], B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H)), l !== e)
      for (; l !== e; )
        f.push(l), B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H));
    else
      f = e;
    return f !== e && (d = r, f = Au()), r = f, r;
  }
  function Fr() {
    var r, f, l, t, o;
    for (r = s, f = [], B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H)); l !== e; )
      f.push(l), B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H));
    if (h.charCodeAt(s) === 46 ? (l = j, s++) : (l = e, p(X)), l !== e) {
      if (t = [], B.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(H)), o !== e)
        for (; o !== e; )
          t.push(o), B.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(H));
      else
        t = e;
      t !== e ? (d = r, r = Cu()) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function xr() {
    var r, f, l, t, o;
    if (r = s, f = [], B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H)), l !== e)
      for (; l !== e; )
        f.push(l), B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H));
    else
      f = e;
    if (f !== e)
      if (h.charCodeAt(s) === 46 ? (l = j, s++) : (l = e, p(X)), l !== e) {
        for (t = [], B.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(H)); o !== e; )
          t.push(o), B.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(H));
        o = Dr(), o !== e ? (d = r, r = _u()) : (s = r, r = e);
      } else
        s = r, r = e;
    else
      s = r, r = e;
    if (r === e) {
      if (r = s, h.charCodeAt(s) === 46 ? (f = j, s++) : (f = e, p(X)), f !== e) {
        if (l = [], B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H)), t !== e)
          for (; t !== e; )
            l.push(t), B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H));
        else
          l = e;
        l !== e ? (t = Dr(), t !== e ? (d = r, r = mu()) : (s = r, r = e)) : (s = r, r = e);
      } else
        s = r, r = e;
      if (r === e) {
        if (r = s, f = [], B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H)), l !== e)
          for (; l !== e; )
            f.push(l), B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H));
        else
          f = e;
        f !== e ? (l = Dr(), l !== e ? (d = r, r = Eu()) : (s = r, r = e)) : (s = r, r = e);
      }
    }
    return r;
  }
  function Jp() {
    var r, f, l;
    return r = s, h.charCodeAt(s) === 43 ? (f = be, s++) : (f = e, p(me)), f !== e ? (l = Ve(), l !== e ? (d = r, r = yu(l)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function eg() {
    var r, f, l;
    return r = s, h.charCodeAt(s) === 43 ? (f = be, s++) : (f = e, p(me)), f !== e ? (l = Fr(), l !== e ? (d = r, r = Pu(l)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function sg() {
    var r, f, l;
    return r = s, h.charCodeAt(s) === 43 ? (f = be, s++) : (f = e, p(me)), f !== e ? (l = xr(), l !== e ? (d = r, r = Lu(l)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function rg() {
    var r, f, l;
    return r = s, h.charCodeAt(s) === 45 ? (f = le, s++) : (f = e, p(te)), f !== e ? (l = Ve(), l !== e ? (d = r, r = Tu(l)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function ig() {
    var r, f, l;
    return r = s, h.charCodeAt(s) === 45 ? (f = le, s++) : (f = e, p(te)), f !== e ? (l = Fr(), l !== e ? (d = r, r = Ru(l)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function lg() {
    var r, f, l;
    return r = s, h.charCodeAt(s) === 45 ? (f = le, s++) : (f = e, p(te)), f !== e ? (l = xr(), l !== e ? (d = r, r = Iu(l)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function Dr() {
    var r, f, l, t, o;
    if (r = s, ha.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(bo)), f !== e) {
      if (ca.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Ao)), l === e && (l = null), t = [], B.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(H)), o !== e)
        for (; o !== e; )
          t.push(o), B.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(H));
      else
        t = e;
      t !== e ? (f = [f, l, t], r = f) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function tg() {
    var r, f, l, t;
    if (r = s, h.charCodeAt(s) === 39 ? (f = Be, s++) : (f = e, p(He)), f !== e) {
      for (l = [], hi.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Oi)), t === e && (t = Ee()); t !== e; )
        l.push(t), hi.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Oi)), t === e && (t = Ee());
      h.charCodeAt(s) === 39 ? (t = Be, s++) : (t = e, p(He)), t !== e ? (d = r, r = Ou(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function ag() {
    var r, f, l, t;
    if (r = s, h.charCodeAt(s) === 34 ? (f = os, s++) : (f = e, p(_s)), f !== e) {
      for (l = [], ci.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Ni)), t === e && (t = Ee()); t !== e; )
        l.push(t), ci.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Ni)), t === e && (t = Ee());
      h.charCodeAt(s) === 34 ? (t = os, s++) : (t = e, p(_s)), t !== e ? (d = r, r = Nu(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function fg() {
    var r, f, l, t, o, c;
    if (r = s, h.substr(s, 3) === hs ? (f = hs, s += 3) : (f = e, p(Si)), f !== e) {
      for (l = [], t = s, h.substr(s, 2) === cs ? (o = cs, s += 2) : (o = e, p(Fi)), o === e && (h.charCodeAt(s) === 39 ? (o = Be, s++) : (o = e, p(He))), o === e && (o = null), ni.test(h.charAt(s)) ? (c = h.charAt(s), s++) : (c = e, p(xi)), c === e && (c = Ee()), c !== e ? (o = [o, c], t = o) : (s = t, t = e); t !== e; )
        l.push(t), t = s, h.substr(s, 2) === cs ? (o = cs, s += 2) : (o = e, p(Fi)), o === e && (h.charCodeAt(s) === 39 ? (o = Be, s++) : (o = e, p(He))), o === e && (o = null), ni.test(h.charAt(s)) ? (c = h.charAt(s), s++) : (c = e, p(xi)), c === e && (c = Ee()), c !== e ? (o = [o, c], t = o) : (s = t, t = e);
      h.substr(s, 3) === hs ? (t = hs, s += 3) : (t = e, p(Si)), t !== e ? (d = r, r = Su(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function og() {
    var r, f, l, t, o, c;
    if (r = s, h.substr(s, 3) === ns ? (f = ns, s += 3) : (f = e, p(Di)), f !== e) {
      for (l = [], t = s, h.substr(s, 2) === us ? (o = us, s += 2) : (o = e, p(Gi)), o === e && (h.charCodeAt(s) === 34 ? (o = os, s++) : (o = e, p(_s))), o === e && (o = null), ui.test(h.charAt(s)) ? (c = h.charAt(s), s++) : (c = e, p(Ui)), c === e && (c = Ee()), c !== e ? (o = [o, c], t = o) : (s = t, t = e); t !== e; )
        l.push(t), t = s, h.substr(s, 2) === us ? (o = us, s += 2) : (o = e, p(Gi)), o === e && (h.charCodeAt(s) === 34 ? (o = os, s++) : (o = e, p(_s))), o === e && (o = null), ui.test(h.charAt(s)) ? (c = h.charAt(s), s++) : (c = e, p(Ui)), c === e && (c = Ee()), c !== e ? (o = [o, c], t = o) : (s = t, t = e);
      h.substr(s, 3) === ns ? (t = ns, s += 3) : (t = e, p(Di)), t !== e ? (d = r, r = Fu(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Ee() {
    var r, f, l;
    return r = s, h.charCodeAt(s) === 92 ? (f = li, s++) : (f = e, p(Bi)), f !== e ? (na.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Co)), l !== e ? (d = r, r = xu()) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function ye() {
    var r, f, l, t;
    if (r = s, h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      h.charCodeAt(s) === 41 ? (t = E, s++) : (t = e, p(P)), t !== e ? (f = [f, l, t], r = f) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function a() {
    var r;
    return r = hg(), r === e && (r = Gr(), r === e && (r = Ur())), r;
  }
  function Gr() {
    var r;
    return ua.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(_o)), r;
  }
  function Ur() {
    var r;
    return pa.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(mo)), r;
  }
  function Os() {
    var r;
    return ga.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Eo)), r;
  }
  function vl() {
    var r, f, l, t;
    if (r = s, h.charCodeAt(s) === 35 ? (f = Ys, s++) : (f = e, p(fr)), f !== e) {
      for (l = [], t = Os(); t !== e; )
        l.push(t), t = Os();
      t = Ur(), t !== e ? (d = r, r = Du()) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function hg() {
    var r, f, l, t, o;
    for (r = s, Ur(), f = [], l = Gr(); l !== e; )
      f.push(l), l = Gr();
    if (h.charCodeAt(s) === 35 ? (l = Ys, s++) : (l = e, p(fr)), l !== e) {
      for (t = [], o = Os(); o !== e; )
        t.push(o), o = Os();
      d = r, r = Gu();
    } else
      s = r, r = e;
    return r;
  }
  function cg() {
    var r, f, l, t;
    if (r = s, h.charCodeAt(s) === 91 ? (f = ks, s++) : (f = e, p(rr)), f !== e) {
      for (l = [], t = a(); t !== e; )
        l.push(t), t = a();
      h.charCodeAt(s) === 93 ? (t = js, s++) : (t = e, p(ir)), t !== e ? (f = [f, l, t], r = f) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function bl() {
    var r;
    return wa.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(yo)), r === e && (da.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Po)), r === e && ($a.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Lo)), r === e && (va.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(To)), r === e && (ba.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Ro)), r === e && (Aa.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Io)), r === e && (Ca.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Oo)), r === e && (_a.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(No)), r === e && (ma.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(So)), r === e && (Ea.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Fo)), r === e && (ya.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(xo)), r === e && (Pa.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Do)), r === e && (La.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Go)))))))))))))), r;
  }
  function De() {
    var r;
    return r = bl(), r === e && (h.charCodeAt(s) === 95 ? (r = ti, s++) : (r = e, p(Hi))), r;
  }
  function Al() {
    var r, f, l, t;
    if (r = s, f = De(), f === e && (B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H))), f !== e) {
      for (l = [], t = De(), t === e && (B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H)), t === e && (Qs.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(or)), t === e && (zs.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(hr)), t === e && (Zs.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(cr)))))); t !== e; )
        l.push(t), t = De(), t === e && (B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H)), t === e && (Qs.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(or)), t === e && (zs.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(hr)), t === e && (Zs.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(cr))))));
      d = r, r = Uu();
    } else
      s = r, r = e;
    return r;
  }
  function J() {
    var r;
    return r = De(), r === e && (h.charCodeAt(s) === 45 ? (r = le, s++) : (r = e, p(te)), r === e && (B.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(H)), r === e && (Qs.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(or)), r === e && (zs.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(hr)), r === e && (Zs.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(cr))))))), r;
  }
  function ng() {
    var r, f, l, t, o, c;
    if (r = s, f = bl(), f !== e) {
      for (l = [], t = J(), t === e && (t = s, h.charCodeAt(s) === 46 ? (o = j, s++) : (o = e, p(X)), o !== e ? (c = J(), c !== e ? (o = [o, c], t = o) : (s = t, t = e)) : (s = t, t = e)); t !== e; )
        l.push(t), t = J(), t === e && (t = s, h.charCodeAt(s) === 46 ? (o = j, s++) : (o = e, p(X)), o !== e ? (c = J(), c !== e ? (o = [o, c], t = o) : (s = t, t = e)) : (s = t, t = e));
      d = r, r = Bu();
    } else
      s = r, r = e;
    return r;
  }
  function ug() {
    var r, f, l, t, o, c;
    if (r = s, f = De(), f === e && (h.charCodeAt(s) === 58 ? (f = Te, s++) : (f = e, p(Ie)), f === e && (B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H)), f === e && (f = We()))), f !== e) {
      for (l = [], t = J(), t === e && (h.charCodeAt(s) === 58 ? (t = Te, s++) : (t = e, p(Ie)), t === e && (t = We())), t === e && (t = s, h.charCodeAt(s) === 46 ? (o = j, s++) : (o = e, p(X)), o !== e ? (c = J(), c === e && (h.charCodeAt(s) === 58 ? (c = Te, s++) : (c = e, p(Ie)), c === e && (c = We())), c !== e ? (o = [o, c], t = o) : (s = t, t = e)) : (s = t, t = e)); t !== e; )
        l.push(t), t = J(), t === e && (h.charCodeAt(s) === 58 ? (t = Te, s++) : (t = e, p(Ie)), t === e && (t = We())), t === e && (t = s, h.charCodeAt(s) === 46 ? (o = j, s++) : (o = e, p(X)), o !== e ? (c = J(), c === e && (h.charCodeAt(s) === 58 ? (c = Te, s++) : (c = e, p(Ie)), c === e && (c = We())), c !== e ? (o = [o, c], t = o) : (s = t, t = e)) : (s = t, t = e));
      d = r, r = Hu();
    } else
      s = r, r = e;
    return r;
  }
  function We() {
    var r;
    return r = pg(), r === e && (r = gg()), r;
  }
  function pg() {
    var r, f, l, t;
    return r = s, h.charCodeAt(s) === 37 ? (f = ai, s++) : (f = e, p(Mi)), f !== e ? (l = Cl(), l !== e ? (t = Cl(), t !== e ? (f = [f, l, t], r = f) : (s = r, r = e)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function Cl() {
    var r;
    return B.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(H)), r === e && (Ta.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Uo)), r === e && (Ra.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Bo)))), r;
  }
  function gg() {
    var r, f, l;
    return r = s, h.charCodeAt(s) === 92 ? (f = li, s++) : (f = e, p(Bi)), f !== e ? (h.charCodeAt(s) === 95 ? (l = ti, s++) : (l = e, p(Hi)), l === e && (h.charCodeAt(s) === 126 ? (l = fa, s++) : (l = e, p(Ho)), l === e && (h.charCodeAt(s) === 46 ? (l = j, s++) : (l = e, p(X)), l === e && (h.charCodeAt(s) === 45 ? (l = le, s++) : (l = e, p(te)), l === e && (h.charCodeAt(s) === 33 ? (l = Ms, s++) : (l = e, p(sr)), l === e && (h.charCodeAt(s) === 36 ? (l = ri, s++) : (l = e, p(Ti)), l === e && (h.charCodeAt(s) === 38 ? (l = oa, s++) : (l = e, p(Mo)), l === e && (h.charCodeAt(s) === 39 ? (l = Be, s++) : (l = e, p(He)), l === e && (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l === e && (h.charCodeAt(s) === 41 ? (l = E, s++) : (l = e, p(P)), l === e && (h.charCodeAt(s) === 42 ? (l = se, s++) : (l = e, p(re)), l === e && (h.charCodeAt(s) === 43 ? (l = be, s++) : (l = e, p(me)), l === e && (h.charCodeAt(s) === 44 ? (l = D, s++) : (l = e, p(G)), l === e && (h.charCodeAt(s) === 59 ? (l = Le, s++) : (l = e, p(Re)), l === e && (h.charCodeAt(s) === 58 ? (l = Te, s++) : (l = e, p(Ie)), l === e && (h.charCodeAt(s) === 61 ? (l = is, s++) : (l = e, p(bs)), l === e && (h.charCodeAt(s) === 47 ? (l = ne, s++) : (l = e, p(pe)), l === e && (h.charCodeAt(s) === 63 ? (l = Hs, s++) : (l = e, p(er)), l === e && (h.charCodeAt(s) === 35 ? (l = Ys, s++) : (l = e, p(fr)), l === e && (h.charCodeAt(s) === 64 ? (l = ii, s++) : (l = e, p(Ri)), l === e && (h.charCodeAt(s) === 37 ? (l = ai, s++) : (l = e, p(Mi)))))))))))))))))))))), l !== e ? (f = [f, l], r = f) : (s = r, r = e)) : (s = r, r = e), r;
  }
  let _l = {};
  function i(r, f) {
    return !!(r.variable && r.variable === f.variable || r.iri && r.iri === f.iri || r.iriPrefix && r.iriPrefix === f.iriPrefix && r.iriLocal === f.iriLocal);
  }
  if (Es = Y(), Es !== e && s === h.length)
    return Es;
  throw Es !== e && s < h.length && p(Mu()), ku(
    nr,
    ae < h.length ? h.charAt(ae) : null,
    ae < h.length ? ur(ae, ae + 1) : ur(ae, ae)
  );
}
let Ss, xs, Ds, mg = "  ", ml = 0;
function Og(h, A = 2) {
  var e, T, S, Y, he;
  if (mg = " ".repeat(A), Ss = [], xs = h.comments, Ds = "", h.headers && U(h.headers.join("")), (e = h.prologue) != null && e.length && (h.prologue.forEach((q) => {
    q.base ? U(`BASE <${q.base}>`) : U(`PREFIX ${q.prefix || ""}: <${q.iri}>`);
  }), U("")), (T = h.queryBody) != null && T.select)
    Gg(h.queryBody);
  else if (((S = h.queryBody) == null ? void 0 : S.type) === "construct")
    P1(h.queryBody);
  else if (((Y = h.queryBody) == null ? void 0 : Y.type) === "ask")
    _1(h.queryBody);
  else if (((he = h.queryBody) == null ? void 0 : he.type) === "describe")
    m1(h.queryBody);
  else if (h.update)
    for (let q = 0; q < h.update.length; q++)
      q > 0 && (Ss[Ss.length - 1] += ` ;
`), E1(h.update[q]);
  for (h.values && yg(h.values); xs && xs.length; )
    Ss[Ss.length - 1] += xs.shift().text;
  return Ss.join(`
`);
}
const ze = (h = 1) => {
  Ds += mg.repeat(h);
}, Ze = (h = 1) => {
  Ds = Ds.substr(0, Ds.length - mg.length * h);
}, U = (h) => {
  Ss.push(Ds + h);
}, ee = (h, A) => {
  for (; xs && xs.length && xs[0].pos < A; )
    Ss[Ss.length - 1] += xs.shift().text;
  U(h);
}, _1 = (h) => {
  U("ASK {");
  const A = Ge(h.where);
  ee("}", A + 1), yl(h);
}, m1 = (h) => {
  const A = h.describe.map(W).join(" ");
  if (U(`DESCRIBE ${A}`), Eg(h.from), h.where) {
    U("WHERE {");
    const e = Ge(h.where);
    ee("}", e + 1);
  }
  yl(h);
}, E1 = (h) => {
  if (h.type === "insertdata")
    U("INSERT DATA {"), ze(), Fs(h.insert), Ze(), U("}");
  else if (h.type === "deletedata")
    U("DELETE DATA {"), ze(), Fs(h.delete), Ze(), U("}");
  else if (h.type === "deletewhere")
    U("DELETE WHERE {"), ze(), Fs(h.delete), Ze(), U("}");
  else if (h.type === "modify") {
    h.with && U(`WITH ${W(h.with)}`), h.delete && (U("DELETE {"), ze(), Fs(h.delete), Ze(), U("}")), h.insert && (U("INSERT {"), ze(), Fs(h.insert), Ze(), U("}")), h.using && h.using.forEach((e) => {
      U(`USING ${y1(e)}`);
    }), U("WHERE {");
    const A = Ge(h.where);
    ee("}", A + 1);
  } else if (h.type === "add") {
    const A = Mr(h.graphs[0]), e = Mr(h.graphs[1]);
    let T = " ";
    h.silent && (T = " SILENT "), U(`ADD${T}${A} TO ${e}`);
  } else if (h.type === "move") {
    const A = Mr(h.graphs[0]), e = Mr(h.graphs[1]);
    let T = " ";
    h.silent && (T = " SILENT "), U(`MOVE${T}${A} TO ${e}`);
  } else if (h.type === "copy") {
    const A = Mr(h.graphs[0]), e = Mr(h.graphs[1]);
    let T = " ";
    h.silent && (T = " SILENT "), U(`COPY${T}${A} TO ${e}`);
  } else if (h.type === "load") {
    let A = " ";
    h.silent && (A = " SILENT "), U(`LOAD${A}${Ue(h.sourceGraph)}`);
  } else if (h.type === "clear") {
    let A = " ";
    h.silent && (A = " SILENT "), U(`CLEAR${A}${Ng(h.destinyGraph)}`);
  } else if (h.type === "drop") {
    let A = " ";
    h.silent && (A = " SILENT "), U(`DROP${A}${Ng(h.destinyGraph)}`);
  } else if (h.type === "create") {
    let A = " ";
    h.silent && (A = " SILENT "), U(`CREATE${A}GRAPH ${Ue(h.destinyGraph)}`);
  }
}, y1 = (h) => h.named ? `NAMED ${Ue(h.iri)}` : Ue(h.iri), Mr = (h) => h === "default" ? "DEFAULT" : Ue(h), Ng = (h) => h === "default" ? "DEFAULT" : h === "named" ? "NAMED" : h === "all" ? "ALL" : `GRAPH ${Ue(h)}`, Ge = (h, A = 0) => (ze(), h.select ? (Gg(h), h.values && (yg(h.values), A = h.location.end.offset)) : h.graphPattern ? h.graphPattern.forEach((e) => {
  Sg(e), A = e.location.end.offset;
}) : h.forEach((e) => {
  Sg(e), A = e.location.end.offset;
}), Ze(), A), Gg = (h) => {
  h.select;
  const A = h.location.start.offset;
  let e = h.location.end.offset;
  ee(O1(h), A);
  const T = Eg(h.from);
  T > e && (e = T), ee("WHERE {", e + 1), e = Ge(h.where, e), ee("}", e + 1), yl(h);
}, Eg = (h) => {
  if (h) {
    let A;
    return h.forEach((e) => {
      e.graph ? A = L1(e.graph) : e.namedGraph && (A = T1(e.namedGraph));
    }), A;
  }
}, yl = (h) => {
  var A;
  h.group && U(R1(h.group)), h.having && U(`HAVING ${Q(h.having[0])}`), h.orderBy && U("ORDER BY " + I1(h.orderBy)), (A = h.limitOffset) == null || A.forEach((e) => {
    e.limit ? U(`LIMIT ${e.limit}`) : e.offset && U(`OFFSET ${e.offset}`);
  });
}, P1 = (h) => {
  h.template ? (ee("CONSTRUCT {", h.location.start.offset), ze(), Fs(h.template.triplePattern), Ze(), U("}")) : U("CONSTRUCT"), Eg(h.from), U("WHERE {");
  const A = Ge(h.where);
  ee("}", A + 1), yl(h);
}, L1 = (h) => {
  const A = Ue(h);
  if (A != null) {
    const e = h.location.start.offset, T = h.location.end.offset;
    return ee("FROM " + A, e), T;
  }
}, T1 = (h) => {
  const A = Ue(h);
  if (A != null) {
    const e = h.location.start.offset, T = h.location.end.offset;
    return ee("FROM NAMED " + A, e), T;
  }
}, Sg = (h) => {
  if (ml = h.location.start.offset, h.graphPattern && h.graph) {
    ee(`GRAPH ${W(h.graph)} {`, ml);
    const A = Ge(h);
    ee("}", A + 1);
    return;
  }
  if (h.graphPattern || h.select) {
    U("{");
    const A = Ge(h);
    ee("}", A + 1);
    return;
  }
  if (h.data) {
    yg(h);
    return;
  }
  if (h.triplePattern) {
    Fs(h.triplePattern);
    return;
  }
  if (h.union) {
    for (let A = 0; A < h.union.length; A++)
      A > 0 && U("UNION"), U("{"), Ge(h.union[A]), ee("}", h.union[A].location.end.offset + 2);
    return;
  }
  if (h.optional) {
    ee("OPTIONAL {", ml);
    const A = Ge(h.optional);
    ee("}", A + 1);
    return;
  }
  if (h.minus) {
    ee("MINUS {", ml);
    const A = Ge(h.minus);
    ee("}", A + 1);
    return;
  }
  if (h.filter) {
    S1(h);
    return;
  }
  if (h.bind) {
    U(`BIND (${Q(h.bind)} AS ${Hr(h.as)})`);
    return;
  }
  if (h.service) {
    let A = " ";
    h.silent && (A = " SILENT "), U(`SERVICE${A}${W(h.service)} {`);
    const e = Ge(h.pattern);
    ee("}", e + 1);
    return;
  }
  if (h.functionRef) {
    const A = h.args.map(Q).join(", ");
    U(Ue(h.functionRef) + `(${A})`);
  }
}, R1 = (h) => {
  let A = ["GROUP BY"], e = 0;
  return h.forEach((T) => {
    A[e].length > 80 ? (e++, A[e] = "  ") : A[e] += " ", A[e] += W(T);
  }), A.join(`
`);
}, I1 = (h) => {
  let A = [];
  return h.forEach((e) => {
    let T;
    e.variable ? T = Hr(e) : T = Q(e), e.asc ? A.push(`ASC${T}`) : e.desc ? A.push(`DESC${T}`) : A.push(T);
  }), A.join(" ");
}, O1 = (h) => {
  let A = [];
  A[0] = "SELECT", h.distinct && (A[0] += " DISTINCT"), h.reduced && (A[0] += " REDUCED");
  let e = 0;
  return h.select.forEach((T) => {
    A[e].length > 80 ? (e++, A[e] = "  ") : A[e] += " ", A[e] += N1(T);
  }), A.join(`
`);
}, N1 = (h) => {
  if (h.variable)
    return Hr(h);
  if (h.as)
    return `(${Q(h.expression)} AS ${Hr(h.as)})`;
  if (h === "*")
    return "*";
}, S1 = (h) => {
  if (h.filter.notexists) {
    U("FILTER NOT EXISTS {");
    const A = Ge(h.filter.notexists);
    ee("}", A + 1);
  } else if (h.filter.exists) {
    U("FILTER EXISTS {");
    const A = Ge(h.filter.exists);
    ee("}", A + 1);
  } else
    ee(`FILTER ${Q(h.filter)}`, h.location.start.offset);
}, Fs = (h) => {
  h.forEach((A) => {
    A.graph ? (ee(`GRAPH ${W(A.graph)} {`, A.graph.location.start.offset), ze(), Fs(A.triplePattern), Ze(), U("}")) : A.triplePattern ? Fs(A.triplePattern) : F1(A);
  });
}, F1 = (h) => {
  const A = W(h.subject);
  let e, T;
  h.properties.forEach((S) => {
    e ? (ee(`${e} ;`, T), e = " ".repeat(A.length) + ` ${W(S.predicate)} ${W(S.objects)}`, S.predicate.location ? T = S.predicate.location.start.offset : T = S.predicate.value.location.start.offset) : (e = `${A} ${W(S.predicate)} ${W(S.objects)}`, T = h.subject.location.start.offset);
  }), ee(`${e} .`, T);
}, El = (h) => {
  let A = "";
  return h.forEach((e) => {
    A && (A += " "), e.graph ? (A += `GRAPH ${W(e.graph)} { `, A += El(e.triplePattern), A += " }") : e.triplePattern ? A += El(e.triplePattern) : (A += x1(e), (h.length > 1 || e.properties.length > 1) && (A += " ."));
  }), A;
}, x1 = (h) => {
  const A = W(h.subject);
  let e;
  return h.properties.forEach((T) => {
    e ? e += ` ; ${W(T.predicate)} ${W(T.objects)}` : e = `${A} ${W(T.predicate)} ${W(T.objects)}`;
  }), e;
}, D1 = (h, A) => {
  if (h.length === 1 && !A) {
    const S = h[0];
    return ` ${W(S.predicate)} ${W(S.objects)}`;
  }
  ze();
  let e = "";
  const T = Ds + " ".repeat(2);
  return h.forEach((S) => {
    e ? (e += ` ;
`, e += `${T} ${W(S.predicate)} ${W(S.objects, !0)}`) : (e += `
${T}`, e += ` ${W(S.predicate)} ${W(S.objects, !0)}`);
  }), e += `
${Ds}`, Ze(), e;
}, G1 = (h) => {
  let A = h.distinct ? "DISTINCT " : "";
  if (h.aggregateType === "count") {
    let e;
    return h.expression === "*" ? e = "*" : e = Q(h.expression), `COUNT(${A}${e})`;
  } else {
    if (h.aggregateType === "sum")
      return `sum(${A}${Q(h.expression)})`;
    if (h.aggregateType === "min")
      return `MIN(${A}${Q(h.expression)})`;
    if (h.aggregateType === "max")
      return `MAX(${A}${Q(h.expression)})`;
    if (h.aggregateType === "avg")
      return `AVG(${A}${Q(h.expression)})`;
    if (h.aggregateType === "sample")
      return `SAMPLE(${A}${Q(h.expression)})`;
    if (h.aggregateType === "group_concat") {
      let e = "";
      return h.separator && (e = `; SEPARATOR = ${Ug(h.separator)}`), `GROUP_CONCAT(${A}${Q(h.expression)}${e})`;
    }
  }
}, Q = (h) => {
  if (h.functionRef)
    return Ue(h.functionRef) + "(" + h.args.map(Q).join(", ") + ")";
  if (h.exists)
    return `EXISTS { ${El(h.exists)} }`;
  if (h.notexists)
    return `NOT EXISTS { ${El(h.notexists)} }`;
  switch (h.expressionType) {
    case "atomic":
      return Qe(W(h.value), h.bracketted);
    case "irireforfunction":
      let A = Ue(h.iriref);
      return h.args && (A += "(" + h.args.map(Q).join(", ") + ")"), Qe(A, h.bracketted);
    case "builtincall":
      let e = "";
      return h.args && (e = h.args.map(W).join(", ")), Qe(`${h.builtincall}(${e})`, h.bracketted);
    case "unaryexpression":
      let T = h.unaryexpression + Q(h.expression);
      return Qe(T, h.bracketted);
    case "aggregate":
      return G1(h);
    case "multiplicativeexpression":
      let S = Q(h.first);
      return h.rest.forEach((O) => {
        S += " " + O.operator + " " + Q(O.expression);
      }), Qe(S, h.bracketted);
    case "additiveexpression":
      let Y = Q(h.op1);
      return h.ops.forEach((O) => {
        Y += " " + O.operator + " " + Q(O.expression);
      }), Qe(Y, h.bracketted);
    case "relationalexpression":
      let he = Q(h.op1) + " " + h.operator + " ";
      return Array.isArray(h.op2) ? he += "(" + h.op2.map(W).join(", ") + ")" : he += Q(h.op2), Qe(he, h.bracketted);
    case "aliasedexpression":
      let q = Q(h.expression);
      return h.as && (q += ` AS ${Hr(h.as)}`), Qe(q, h.bracketted);
    case "conditionaland":
      return Qe(h.operands.map(Q).join(" && "), h.bracketted);
    case "conditionalor":
      return Qe(h.operands.map(Q).join(" || "), h.bracketted);
    case "regex":
      let we = Q(h.text);
      return we += ", " + Q(h.pattern), h.flags && (we += ", " + Q(h.flags)), `regex(${we})`;
  }
}, Qe = (h, A) => A ? `(${h})` : h, yg = (h) => {
  if (h.oneVar) {
    const A = W(h.oneVar), e = h.data.map(W).join(" ");
    U(`VALUES ${A} { ${e} }`);
  } else if (h.variables) {
    const A = h.variables.map(Hr).join(" ");
    if (h.variables.length === 1) {
      const e = h.data.map((T) => "(" + T.map(W).join(" ") + ")").join(" ");
      U(`VALUES (${A}) { ${e} }`);
    } else
      U(`VALUES (${A}) {`), ze(), h.data.map((e) => {
        U("(" + e.map(W).join(" ") + ")");
      }), Ze(), U("}");
  }
}, W = (h, A = !1) => {
  if (h === "UNDEF")
    return h;
  if (Array.isArray(h))
    return h.map((T) => W(T, A)).join(", ");
  if (h.variable)
    return Hr(h);
  if (h.collection)
    return `( ${h.collection.map((S) => W(S)).join(" ")} )`;
  if (h.hasOwnProperty("literal"))
    return Ug(h);
  if (h.blankNode)
    return h.blankNode;
  if (h.expressionType)
    return Q(h);
  if (h.blankNodeProperties)
    return `[${D1(h.blankNodeProperties, A)} ]`;
  let e = "";
  return h.inverse && (e += "^"), (h.iriPrefix || h.iriLocal || h.iri || h.a) && (e += Ue(h)), h.alternative ? e += h.alternative.map((T) => W(T)).join("|") : h.sequence && (e += h.sequence.map((T) => W(T)).join("/")), h.bracketted && (e = `(${e})`), h.modifier && (e += h.modifier), e;
}, Ug = (h) => {
  if (h.dataType === "http://www.w3.org/2001/XMLSchema#decimal")
    return h.literal;
  if (h.dataType === "http://www.w3.org/2001/XMLSchema#double")
    return h.literal;
  if (h.dataType === "http://www.w3.org/2001/XMLSchema#integer")
    return h.literal;
  if (h.dataType === "http://www.w3.org/2001/XMLSchema#boolean")
    return h.literal;
  let A = h.quote + h.literal + h.quote;
  return h.dataType ? A += `^^${Ue(h.dataType)}` : h.lang && (A += "@" + h.lang), A;
}, Ue = (h) => {
  if (h.iri)
    return `<${h.iri}>`;
  if (h.iriPrefix && h.iriLocal)
    return `${h.iriPrefix}:${h.iriLocal}`;
  if (h.iriPrefix)
    return `${h.iriPrefix}:`;
  if (h.iriLocal)
    return `:${h.iriLocal}`;
  if (h.a)
    return "a";
}, Hr = (h) => h.varType === "$" ? "$" + h.variable : "?" + h.variable, Pl = (h, A = 2, e = !1) => Og(e ? C1(h) : b1(h), A);
typeof window < "u" && (window.spfmt = Pl);
const U1 = "http://purl.org/ontology/bibo/", B1 = "http://iflastandards.info/ns/lrm/lrmoo/", Ns = "http://www.cidoc-crm.org/cidoc-crm/", H1 = "http://www.ics.forth.gr/isl/CRMdig/", M1 = "http://dbpedia.org/resource/", k1 = "http://purl.org/dc/elements/1.1/", Bg = "http://purl.org/dc/terms/", j1 = "http://xmlns.com/foaf/0.1/", X1 = "http://data-iremus.huma-num.fr/ns/hemef#", V1 = "http://data-iremus.huma-num.fr/id/", W1 = "http://data-iremus.huma-num.fr/ns/", Y1 = "http://data-iremus.huma-num.fr/graph/", Q1 = "http://www.mimo-db.eu/", z1 = "http://data-iremus.huma-num.fr/ns/musrad30#", Z1 = "http://www.w3.org/2002/07/owl#", Hg = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", Mg = "http://www.w3.org/2000/01/rdf-schema#", q1 = "http://schema.org/", Ag = "http://www.w3.org/2004/02/skos/core#", Cg = /* @__PURE__ */ new Map([
  [Ns, "crm"],
  [H1, "crmdig"],
  [U1, "bibo"],
  [M1, "dbpedia"],
  [k1, "dc"],
  [Bg, "dcterms"],
  [j1, "foaf"],
  [X1, "hemef"],
  [Y1, "iremus-graph"],
  [V1, "iremus-data"],
  [W1, "iremus-ns"],
  [B1, "lrmoo"],
  [Q1, "mimo"],
  [z1, "musrad30"],
  [Z1, "owl"],
  [Hg, "rdf"],
  [Mg, "rdfs"],
  [q1, "schema"],
  [Ag, "skos"]
]);
Object.entries(Cg).sort(
  (h, A) => h[0].length < A[0].length ? 1 : -1
);
class Fg {
  constructor(A, e) {
    wg(this, "prefix");
    wg(this, "localPart");
    this.prefix = A, this.localPart = e;
  }
  toString() {
    return this.prefix + ":" + this.localPart;
  }
}
function K1(h) {
  for (const A of Cg.keys())
    if (h.startsWith(A))
      return new Fg(Cg.get(A), h.replace(A, ""));
  return new Fg("", h);
}
const J1 = [
  Ns + "P1_is_identified_by",
  Ns + "P102_has_title",
  Ns + "P190_has_symbolic_content",
  Ns + "P1_is_identified_by",
  Ns + "E35_Title",
  Ns + "E41_Appellation",
  Ns + "E42_Identifier",
  Ns + "P2_has_type",
  Bg + "title",
  Hg + "type",
  Mg + "label",
  Ag + "prefLabel",
  Ag + "altLabel"
], ew = J1.map(K1).map((h) => h.toString());
var sw = /* @__PURE__ */ ((h) => (h.INCOMING = "INCOMING", h.OUTGOING = "OUTGOING", h))(sw || {});
const rw = () => [
  "crm:P1_is_identified_by",
  "crm:P48_has_preferred_identifier",
  "crm:P102_has_title",
  "dcterms:title",
  "crm:P190_has_symbolic_content",
  "rdfs:label",
  "skos:prefLabel",
  "skos:altLabel"
].join(" "), kg = () => [
  "crm:P1_is_identified_by",
  "crm:P48_has_preferred_identifier",
  "crm:P102_has_title"
].join(" "), iw = () => ["crm:E35_Title", "crm:E41_Appellation", "crm:E42_Identifier"].join(" "), xw = (h, A = !1, e = [], T = "OUTGOING") => A && e.length == 0 ? "" : Pl(
  aw() + (A ? tw(
    h,
    e,
    T
  ) : lw(h))
), lw = (h) => `
SELECT *
WHERE {
  GRAPH ?g {
    ${Lg(`<${h}>`)}
    UNION
    ${Tg(`<${h}>`)}
    UNION
    ${Pg(`<${h}>`)}
    UNION
    ${fw(`<${h}>`)}
  }
}
`, tw = (h, A, e) => {
  let T = "";
  return A.length > 0 && (T = `VALUES ?lp { ${A.map((S) => `<${S}>`).join(" ")} }`), `
SELECT *
WHERE {
  GRAPH ?g {
    ${T}
    ${e === "INCOMING" ? `?lr ?lp <${h}>` : `<${h}> ?lp ?lr`}
    OPTIONAL {
      GRAPH ?r_g {
        ${Lg("?lr")}
        UNION
        ${Tg("?lr")}
        UNION
        ${Pg("?lr")} 
      }
    }
    FILTER (?lp NOT IN (${ew}))
  }
}
ORDER BY ?lp ?lr
`;
}, aw = () => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX iremus-data: <http://data-iremus.huma-num.fr/id/>
PREFIX iremus-graphs: <http://data-iremus.huma-num.fr/graph/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX sherlock-ns: <http://data-iremus.huma-num.fr/ns/sherlock#>
`, Pg = (h) => `
{ ######## get types (rdf:type)
  ${h} ?p ?r .
  VALUES ?p { rdf:type }
}
UNION
{ ######## get types (crm:P2_has_type)
 ${h} ?p ?r .
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
`, Lg = (h) => `
{ ######## get direct literal label
${h} ?p ?label .
VALUES ?p { ${rw()} } .
FILTER(isLiteral(?label)) .
}
`, Tg = (h) => `
{ ######## get identifiers linked resources
  ${h} ?p ?r .
  VALUES ?p { ${kg()} }
  GRAPH ?r_types_g {
    ?r rdf:type ?r_type .
    ?r crm:P190_has_symbolic_content ?label .
    VALUES ?r_type { ${iw()} }
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
`, fw = (h) => `
{ ######## if the base resource is part of a E32
  GRAPH ?authdoc_g {
    ?authdoc crm:P71_lists ${h} .
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
    ${h} ?p ?authdoc .
    VALUES ?p { skos:inScheme }

  }
  OPTIONAL {
    GRAPH ?authdoc_g {
      ?authdoc ?authdoc_label_p ?authdoc_label .
      VALUES ?authdoc_label_p { dcterms:title skos:prefLabel }
    }
  }
}
`, Dw = (h, A) => `${cw()}  
  SELECT *
  WHERE {
    ${ow(h, A)}
    GRAPH ?g {
    ${Lg("?s")}
    UNION
    ${Tg("?s")}
    UNION
    ${Pg("?s")}
    }
  }`, ow = (h, A) => `
{
  SELECT DISTINCT ?s ?score WHERE 
  {
    # Literal text:query that match an identifier 
    {
      { (?x ?score) text:query ("${h}")}
      GRAPH ?g_x {
        VALUES ?identifier_predicate {${kg()}} .
        ?s ?identifier_predicate ?x 
      }
    }
    UNION
    # Literal text:query that match a relevant resource
    # Pas de P190 car le sujet d'un P190 n'est pas la ressource en tant que telle.
    {
      ${hw().map((e) => `
      {
        (?s ?score) text:query (${e} "${h}")
      }
      `).join(" UNION ")}
    }
  }
  ORDER BY DESC(?score) 
  LIMIT ${A}  
}
`, hw = () => [
  "crm:P1_is_identified_by",
  "crm:P102_has_title",
  "dcterms:title",
  "rdfs:label",
  "skos:prefLabel",
  "skos:altLabel"
], cw = () => `PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX text: <http://jena.apache.org/text#>
`;
function jg() {
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
`;
}
const Gw = () => Pl(`
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
    ${jg()}
  }
}
GROUP BY ?F2_livraison_tei ?livraison_titre ?date ?livraison_business_id
ORDER BY ?livraison_business_id
`), Uw = (h) => Pl(`
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?F2_article_tei ?article_title ?article_business_id ?livraison_titre
WHERE {
  GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant-tei> {
    VALUES ?livraison_business_id { "${h}" }
    ?F2_livraison_tei crm:P1_is_identified_by ?E42_tei_file .
    ?E42_tei_file a crm:E42_Identifier .
    ?E42_tei_file crm:P2_has_type iremus:f005e36a-4690-4c83-9791-2927f5f823e0 . # type url de fichier tei
    ?F2_article_tei crm:P1_is_identified_by ?E42_article_business_id .
    ?E42_article_business_id a crm:E42_Identifier .
    ?E42_article_business_id crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d . # type business id
    ?E42_article_business_id crm:P190_has_symbolic_content ?article_business_id .
    ?F2_article_tei crm:P102_has_title ?article_title .
    ${jg()}
  }
}
ORDER BY ?article_business_id
`), Bw = (h, A) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT ?note_pname (count(?note) AS ?notes) 
WHERE {
  GRAPH ?g {
    ?note sherlock:has_document_context <${h}>.
    ?note crm:P2_has_type <${Pe.note}>. #NOTE
    ?note sherlockmei:pname ?note_pname.
    ${A && `VALUES ?note_pname { "${A}" }`}
  }
}
GROUP BY ?note_pname`, Hw = (h) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT *
WHERE {
  GRAPH ?g {
    <${h}> crm:P127_has_broader_term* ?bt .
    ?bt crm:P1_is_identified_by ?bt_label .
    OPTIONAL {
      ?bt crm:P127_has_broader_term ?btbt .
      ?btbt crm:P1_is_identified_by ?btbt_label .
    }
  }
}
`, Mw = (h) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE { <${h}> crm:P140_assigned_attribute_to ?p140 }`, kw = () => `
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
        ?score crm:P2_has_type <${Pe.score}> .
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
                ?selection crm:P2_has_type <${Pe.selection}> .
                ?selection sherlock:has_document_context ?score .
            }
        }
        UNION {
            GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> {
                ?e13_on_analytical_entity rdf:type crm:E13_Attribute_Assignment .
                ?e13_on_analytical_entity crm:P141_assigned ?analytical_entity .
                ?analytical_entity rdf:type crm:E28_Conceptual_Object .
                ?analytical_entity crm:P2_has_type <${Pe.analyticalEntity}> .
                ?e13_on_analytical_entity crm:P140_assigned_attribute_to ?analytical_selection .
                ?analytical_selection sherlock:has_document_context ?score .
            }
        }
    }
}
GROUP BY ?score
`, jw = (h) => `
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
          ?analyticalEntity crm:P2_has_type <${Pe.analyticalEntity}>.
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
        ?selection sherlock:has_document_context <${h}>.
        ?selection crm:P2_has_type <${Pe.selection}>.
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
`, Xw = (h) => `
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT ?project_name ?annotation ?date ?creator ?orcid  WHERE {
 	GRAPH 	
<http://data-iremus.huma-num.fr/graph/sherlock> {
    ?project crm:P2_has_type <http://data-iremus.huma-num.fr/id/21816195-6708-4bbd-a758-ee354bb84900> .
    ?project crm:P1_is_identified_by ?project_name .
    ?project crm:P9_consists_of ?annotation .
    ?annotation dcterms:created ?date.
    ?annotation dcterms:creator ?creator.
    OPTIONAL {
      GRAPH <http://data-iremus.huma-num.fr/graph/users> {
      ?creator crm:P1_is_identified_by ?orcid_appellation.
      ?orcid_appellation crm:P2_has_type <http://data-iremus.huma-num.fr/id/73ea8d74-3526-4f6a-8830-dd369795650d>. #ORCID NAME IDENTIFIER
      ?orcid_appellation crm:P190_has_symbolic_content ?orcid 
      }
    }
  }
}

LIMIT ${h}`;
function Vw(h) {
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
    ?e42 crm:P190_has_symbolic_content "${h}" .
  }
}
`;
}
const Ww = (h = "", A = "", e = "", T = "") => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

SELECT *
WHERE {
  GRAPH ?g {
    ${h ? `BIND (<${h}> as ?f1)` : ""}
    ${A ? `BIND (<${A}> as ?f2)` : ""}
    ${e ? `BIND (<${e}> as ?f3)` : ""}
    ${T ? `BIND (<${T}> as ?f5)` : ""}
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
`, Yw = (h) => `https://yasgui.triply.cc/#query=${encodeURIComponent(h)}&endpoint=http%3A%2F%2Fdata-iremus.huma-num.fr%2Fsparql%2F&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=gchart`;
export {
  dw as ANALYTICAL_ENTITY,
  Wg as ANALYTICAL_PROJECT,
  bw as ANNOTATION,
  Yg as DRAFT_PROJECT,
  J1 as IDENTITY_PREDICATES,
  ew as IDENTITY_PREDICATES_PREFIXED,
  sw as LinkedResourcesDirectionEnum,
  uw as NOTE,
  gw as POSITIONNED_NOTE,
  $w as SCORE,
  pw as SELECTION,
  vw as SOFTWARE,
  ww as VERTICALITY,
  fw as authorityDocument,
  Ew as contributions,
  Pw as contributors,
  Tw as countIncomingPredicates,
  Lw as countOutgoingPredicates,
  Rw as documentsByIndex,
  Ow as e13WithLiteralP141,
  Nw as fondamentales,
  Aw as getAnalyticalProject,
  Cw as getAnnotations,
  yw as getContributor,
  Iw as getDotOneProperties,
  Mw as getP140,
  Vw as getResourceByUrlFragment,
  Sw as getResources,
  Fw as historicalModelsOntologies,
  kg as identifiersPredicates,
  Tg as identifiersResources,
  Lg as identitiersLiterals,
  Dw as identitiesByTextQuery,
  xw as identity,
  Yw as makeYasguiUri,
  Uw as mg_livraison,
  Gw as mg_livraisons,
  Bw as noteOccurences,
  Hw as p127,
  kw as scores,
  jw as selections,
  Xw as tonalitiesContributions,
  Pg as types,
  Ww as wemi
};

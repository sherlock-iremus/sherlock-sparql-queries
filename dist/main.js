const Zd = "http://data-iremus.huma-num.fr/id/d2a536eb-4a95-484f-b13d-f597ac8ea2fd", Kd = "http://data-iremus.huma-num.fr/id/9d0388cb-a178-46b2-b047-b5a98f7bdf0b", Jd = "http://data-iremus.huma-num.fr/id/689e148d-a97d-45b4-898d-c395a24884df", qd = "http://data-iremus.huma-num.fr/id/90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86", e1 = "http://data-iremus.huma-num.fr/id/6d72746a-9f28-4739-8786-c6415d53c56d", s1 = "http://data-iremus.huma-num.fr/id/bf9dce29-8123-4e8e-b24d-0c7f134bbc8e", r1 = "http://data-iremus.huma-num.fr/id/29b00e39-75da-4945-b6c4-a0ca00f96f68", t1 = "http://data-iremus.huma-num.fr/id/82dbd157-20df-422c-88db-28d6075d99a1", xg = "http://data-iremus.huma-num.fr/id/21816195-6708-4bbd-a758-ee354bb84900", Dg = "http://data-iremus.huma-num.fr/id/cabe46bf-23d4-4392-aa20-b3eb21ad7dfd", i1 = (i) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
    VALUES ?project { <${i}> }
    VALUES ?draft { <${Dg}> }
    ?project crm:P2_has_type <${xg}>.
    ?project crm:P1_is_identified_by ?label.
    ?project crm:P14_carried_out_by ?contributor.
    OPTIONAL { ?project sherlock:has_privacy_type ?draft }.
}
LIMIT 1`, a1 = (i, d) => `
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
var Gg = Object.defineProperty, Ug = (i, d, e) => d in i ? Gg(i, d, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[d] = e, X = (i, d, e) => Ug(i, typeof d != "symbol" ? d + "" : d, e);
const Hg = "http://purl.org/ontology/bibo/", kg = "http://iflastandards.info/ns/lrm/lrmoo/", Bg = "http://www.cidoc-crm.org/cidoc-crm/", Mg = "http://www.ics.forth.gr/isl/CRMdig/", jg = "http://dbpedia.org/resource/", Xg = "http://purl.org/dc/elements/1.1/", Vg = "http://purl.org/dc/terms/", Wg = "http://xmlns.com/foaf/0.1/", Yg = "http://data-iremus.huma-num.fr/ns/hemef#", oe = "http://data-iremus.huma-num.fr/id/", Qg = "http://data-iremus.huma-num.fr/id/", zg = "http://data-iremus.huma-num.fr/ns/", Zg = "http://data-iremus.huma-num.fr/graph/", Kg = "http://www.mimo-db.eu/", Jg = "http://data-iremus.huma-num.fr/ns/musrad30#", qg = "http://www.w3.org/2002/07/owl#", ed = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", sd = "http://www.w3.org/2000/01/rdf-schema#", rd = "http://schema.org/", td = "http://www.w3.org/2004/02/skos/core#", id = /* @__PURE__ */ new Map([
  [Bg, "crm"],
  [Mg, "crmdig"],
  [Hg, "bibo"],
  [jg, "dbpedia"],
  [Xg, "dc"],
  [Vg, "dcterms"],
  [Wg, "foaf"],
  [Yg, "hemef"],
  [Zg, "iremus-graph"],
  [Qg, "iremus-data"],
  [zg, "iremus-ns"],
  [kg, "lrmoo"],
  [Kg, "mimo"],
  [Jg, "musrad30"],
  [qg, "owl"],
  [ed, "rdf"],
  [sd, "rdfs"],
  [rd, "schema"],
  [td, "skos"]
]);
Object.entries(id).sort(
  (i, d) => i[0].length < d[0].length ? 1 : -1
);
class ad {
  constructor(d = "") {
    X(this, "_pog"), X(this, "_uri"), this._uri = d, this._pog = /* @__PURE__ */ new Map();
  }
  getValues(d) {
    return this._pog.get(d);
  }
  addPOG(d, e) {
    var A;
    this._pog.has(d) ? (A = this._pog.get(d)) == null || A.push(e) : this._pog.set(d, [e]);
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
let Gi = Xr;
class Yr extends ad {
  constructor(d, e, A) {
    super(d), X(this, "_comment"), X(this, "_intCodeForSorting"), X(this, "_label"), X(this, "_name"), X(this, "_ontology"), this._comment = /* @__PURE__ */ new Map(), this._intCodeForSorting = -1, this._label = /* @__PURE__ */ new Map(), this._name = e, this._ontology = A;
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
  constructor(d, e, A) {
    super(d, e, A), X(this, "_subClassOf"), this._subClassOf = new Array();
  }
  addSubClassOf(d) {
    this._subClassOf.push(d);
  }
};
X(Vr, "void", new Vr("", "", Gi.void));
let Si = Vr;
const Fi = class Ui extends Yr {
  constructor(d, e, A) {
    super(d, e, A), X(this, "_domain", Si.void), X(this, "_inverseOf", Ui.void), X(this, "_range", Si.void), X(this, "_subPropertyOf"), this._subPropertyOf = new Array();
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
X(Fi, "void", new Fi("", "", Gi.void));
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
}, o1 = (i) => `
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
`, c1 = (i) => `
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
}`, n1 = () => `
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
GROUP BY ?contributor ?name ?hex_color_code ?emoji ?orcid ?orcid_profile ?untyped_identifier ?contributor_type_label ?user_graph`, h1 = (i) => `
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    <${i}> ?lp ?lr .
  }
}
GROUP BY ?lp
`, u1 = (i) => `
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    ?lr ?lp <${i}> .
  }
}
GROUP BY ?lp
`, p1 = (i) => `
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

`, g1 = (i) => `

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
`, ld = (i) => i ? `BIND (<${i}> as ?score).` : "", d1 = () => `
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
`, w1 = () => `
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
function fd(i, d) {
  function e() {
    this.constructor = i;
  }
  e.prototype = d.prototype, i.prototype = new e();
}
function Ze(i, d, e, A) {
  var L = Error.call(this, i);
  return Object.setPrototypeOf && Object.setPrototypeOf(L, Ze.prototype), L.expected = d, L.found = e, L.location = A, L.name = "SyntaxError", L;
}
fd(Ze, Error);
function jr(i, d, e) {
  return e = e || " ", i.length > d ? i : (d -= i.length, e += e.repeat(d), i + e.slice(0, d));
}
Ze.prototype.format = function(i) {
  var d = "Error: " + this.message;
  if (this.location) {
    var e = null, A;
    for (A = 0; A < i.length; A++)
      if (i[A].source === this.location.source) {
        e = i[A].text.split(/\r\n|\n|\r/g);
        break;
      }
    var L = this.location.start, Q = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(L) : L, J = this.location.source + ":" + Q.line + ":" + Q.column;
    if (e) {
      var W = this.location.end, ne = jr("", Q.line.toString().length, " "), O = e[L.line - 1], D = L.line === W.line ? W.column : O.length + 1, m = D - L.column || 1;
      d += `
 --> ` + J + `
` + ne + ` |
` + Q.line + " | " + O + `
` + ne + " | " + jr("", L.column - 1, " ") + jr("", m, "^");
    } else
      d += `
 at ` + J;
  }
  return d;
};
Ze.buildMessage = function(i, d) {
  var e = {
    literal: function(O) {
      return '"' + L(O.text) + '"';
    },
    class: function(O) {
      var D = O.parts.map(function(m) {
        return Array.isArray(m) ? Q(m[0]) + "-" + Q(m[1]) : Q(m);
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
  function A(O) {
    return O.charCodeAt(0).toString(16).toUpperCase();
  }
  function L(O) {
    return O.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(D) {
      return "\\x0" + A(D);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(D) {
      return "\\x" + A(D);
    });
  }
  function Q(O) {
    return O.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(D) {
      return "\\x0" + A(D);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(D) {
      return "\\x" + A(D);
    });
  }
  function J(O) {
    return e[O.type](O);
  }
  function W(O) {
    var D = O.map(J), m, $e;
    if (D.sort(), D.length > 0) {
      for (m = 1, $e = 1; m < D.length; m++)
        D[m - 1] !== D[m] && (D[$e] = D[m], $e++);
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
    return O ? '"' + L(O) + '"' : "end of input";
  }
  return "Expected " + W(i) + " but " + ne(d) + " found.";
};
function od(i, d) {
  d = d !== void 0 ? d : {};
  var e = {}, A = d.grammarSource, L = { DOCUMENT: qt }, Q = qt, J = "base", W = "prefix", ne = "select", O = "distinct", D = "reduced", m = "(", $e = "as", E = ")", ae = "*", et = "construct", ls = "where", Pe = "{", Te = "}", Wi = "describe", Yi = "ask", Qi = "from", js = "named", zi = "group", st = "by", Zi = "having", Ki = "order", Ji = "asc", qi = "desc", ea = "limit", sa = "offset", rt = "values", Ue = ";", ra = "load", Re = "silent", ta = "into", ia = "clear", aa = "drop", la = "create", fa = "add", Xs = "to", oa = "move", ca = "copy", tt = "insert", it = "data", Vs = "delete", na = "with", ha = "using", at = "default", fs = "graph", ua = "all", z = ".", pa = "optional", ga = "service", da = "bind", lt = "UNDEF", wa = "minus", ft = "union", _a = "filter", U = ",", os = "a", cs = "|", be = "/", ot = "^", Ws = "?", Le = "+", Ys = "!", Qs = "[", zs = "]", ns = "||", hs = "&&", us = "=", ps = "!=", Zs = "<", Ks = ">", gs = "<=", ds = ">=", ws = "in", Js = "not", he = "-", $a = "str", ba = "lang", va = "langmatches", ma = "datatype", Aa = "bound", Ca = "iri", Ea = "uri", ya = "bnode", Pa = "rand", Ta = "abs", Ra = "ceil", La = "floor", Ia = "round", Oa = "concat", Na = "strlen", Sa = "ucase", Fa = "lcase", xa = "encode_for_uri", Da = "contains", Ga = "strbefore", Ua = "strstarts", Ha = "strends", ka = "strafter", Ba = "year", Ma = "month", ja = "day", Xa = "hours", Va = "minutes", Wa = "seconds", Ya = "timezone", Qa = "tz", za = "now", Za = "uuid", Ka = "struuid", Ja = "md5", qa = "sha1", el = "sha256", sl = "sha384", rl = "sha512", tl = "coalesce", il = "if", al = "strlang", ll = "strdt", fl = "sameterm", ol = "isuri", cl = "isiri", nl = "isblank", hl = "isliteral", ul = "isnumeric", pl = "regex", gl = "substr", dl = "replace", ct = "exists", wl = "count", _l = "sum", $l = "min", bl = "max", vl = "avg", ml = "sample", Al = "group_concat", Cl = "separator", nt = "^^", El = "true", yl = "false", He = ":", ht = "_:", ut = "$", pt = "@", Ke = "'", _s = '"', $s = "'''", bs = "''", vs = '"""', ms = '""', gt = "\\", qs = "#", dt = "_", wt = "%", Pl = "~", Tl = "&", _t = /^[^<>"{}|\^`\\\0- ]/, M = /^[0-9]/, $t = /^[a-zA-Z]/, As = /^[a-zA-Z0-9]/, Rl = /^[eE]/, Ll = /^[+\-]/, bt = /^[^'\\\n\r]/, vt = /^[^"\\\n\r]/, mt = /^[^'\\]/, At = /^[^"\\]/, Il = /^[tbnrf\\"']/, Ol = /^[ \t]/, Nl = /^[\r\n]/, Sl = /^[^\r\n]/, Fl = /^[A-Z]/, xl = /^[a-z]/, Dl = /^[\xC0-\xD6]/, Gl = /^[\xD8-\xF6]/, Ul = /^[\xF8-\u02FF]/, Hl = /^[\u0370-\u037D]/, kl = /^[\u037F-\u1FFF]/, Bl = /^[\u200C-\u200D]/, Ml = /^[\u2070-\u218F]/, jl = /^[\u2C00-\u2FEF]/, Xl = /^[\u3001-\uD7FF]/, Vl = /^[\uF900-\uFDCF]/, Wl = /^[\uFDF0-\uFFFD]/, er = /^[\xB7]/, sr = /^[\u0300-\u036F]/, rr = /^[\u203F-\u2040]/, Yl = /^[A-F]/, Ql = /^[a-f]/, zl = b("BASE", !0), Zl = b("PREFIX", !0), Kl = b("SELECT", !0), ve = b("DISTINCT", !0), Jl = b("REDUCED", !0), y = b("(", !1), Cs = b("AS", !0), P = b(")", !1), le = b("*", !1), Ct = b("CONSTRUCT", !0), Es = b("WHERE", !0), Ie = b("{", !1), Oe = b("}", !1), ql = b("DESCRIBE", !0), ef = b("ASK", !0), sf = b("FROM", !0), tr = b("NAMED", !0), rf = b("GROUP", !0), Et = b("BY", !0), tf = b("HAVING", !0), af = b("ORDER", !0), lf = b("ASC", !0), ff = b("DESC", !0), of = b("LIMIT", !0), cf = b("OFFSET", !0), yt = b("VALUES", !0), ke = b(";", !1), nf = b("LOAD", !0), Ne = b("SILENT", !0), hf = b("INTO", !0), uf = b("CLEAR", !0), pf = b("DROP", !0), gf = b("CREATE", !0), df = b("ADD", !0), ir = b("TO", !0), wf = b("MOVE", !0), _f = b("COPY", !0), Pt = b("INSERT", !0), Tt = b("DATA", !0), ar = b("DELETE", !0), $f = b("WITH", !0), bf = b("USING", !0), Rt = b("DEFAULT", !0), ys = b("GRAPH", !0), vf = b("ALL", !0), Z = b(".", !1), mf = b("OPTIONAL", !0), Af = b("SERVICE", !0), Cf = b("BIND", !0), Ef = b("UNDEF", !1), yf = b("MINUS", !0), Lt = b("UNION", !0), Pf = b("FILTER", !0), H = b(",", !1), Ps = b("a", !1), Ts = b("|", !1), me = b("/", !1), It = b("^", !1), lr = b("?", !1), Se = b("+", !1), fr = b("!", !1), or = b("[", !1), cr = b("]", !1), Ot = b("||", !1), Nt = b("&&", !1), Rs = b("=", !1), St = b("!=", !1), nr = b("<", !1), hr = b(">", !1), Ft = b("<=", !1), xt = b(">=", !1), Ls = b("IN", !0), ur = b("NOT", !0), ue = b("-", !1), Tf = b("STR", !0), Rf = b("LANG", !0), Lf = b("LANGMATCHES", !0), If = b("DATATYPE", !0), Of = b("BOUND", !0), Nf = b("IRI", !0), Sf = b("URI", !0), Ff = b("BNODE", !0), xf = b("RAND", !0), Df = b("ABS", !0), Gf = b("CEIL", !0), Uf = b("FLOOR", !0), Hf = b("ROUND", !0), kf = b("CONCAT", !0), Bf = b("STRLEN", !0), Mf = b("UCASE", !0), jf = b("LCASE", !0), Xf = b("ENCODE_FOR_URI", !0), Vf = b("CONTAINS", !0), Wf = b("STRBEFORE", !0), Yf = b("STRSTARTS", !0), Qf = b("STRENDS", !0), zf = b("STRAFTER", !0), Zf = b("YEAR", !0), Kf = b("MONTH", !0), Jf = b("DAY", !0), qf = b("HOURS", !0), eo = b("MINUTES", !0), so = b("SECONDS", !0), ro = b("TIMEZONE", !0), to = b("TZ", !0), io = b("NOW", !0), ao = b("UUID", !0), lo = b("STRUUID", !0), fo = b("MD5", !0), oo = b("SHA1", !0), co = b("SHA256", !0), no = b("SHA384", !0), ho = b("SHA512", !0), uo = b("COALESCE", !0), po = b("IF", !0), go = b("STRLANG", !0), wo = b("STRDT", !0), _o = b("sameTerm", !0), $o = b("isURI", !0), bo = b("isIRI", !0), vo = b("isBLANK", !0), mo = b("isLITERAL", !0), Ao = b("isNUMERIC", !0), Co = b("REGEX", !0), Eo = b("SUBSTR", !0), yo = b("REPLACE", !0), Dt = b("EXISTS", !0), Po = b("COUNT", !0), To = b("SUM", !0), Ro = b("MIN", !0), Lo = b("MAX", !0), Io = b("AVG", !0), Oo = b("SAMPLE", !0), No = b("GROUP_CONCAT", !0), So = b("SEPARATOR", !0), Fo = b("^^", !1), xo = b("true", !0), Do = b("false", !0), Gt = F(["<", ">", '"', "{", "}", "|", "^", "`", "\\", ["\0", " "]], !0, !1), Be = b(":", !1), Go = b("_:", !1), j = F([["0", "9"]], !1, !1), Ut = b("$", !1), Ht = b("@", !1), kt = F([["a", "z"], ["A", "Z"]], !1, !1), Is = F([["a", "z"], ["A", "Z"], ["0", "9"]], !1, !1), Uo = F(["e", "E"], !1, !1), Ho = F(["+", "-"], !1, !1), Je = b("'", !1), Bt = F(["'", "\\", `
`, "\r"], !0, !1), Os = b('"', !1), Mt = F(['"', "\\", `
`, "\r"], !0, !1), jt = b("'''", !1), Xt = b("''", !1), Vt = F(["'", "\\"], !0, !1), Wt = b('"""', !1), Yt = b('""', !1), Qt = F(['"', "\\"], !0, !1), zt = b("\\", !1), ko = F(["t", "b", "n", "r", "f", "\\", '"', "'"], !1, !1), Bo = F([" ", "	"], !1, !1), Mo = F(["\r", `
`], !1, !1), jo = F(["\r", `
`], !0, !1), pr = b("#", !1), Xo = F([["A", "Z"]], !1, !1), Vo = F([["a", "z"]], !1, !1), Wo = F([["À", "Ö"]], !1, !1), Yo = F([["Ø", "ö"]], !1, !1), Qo = F([["ø", "˿"]], !1, !1), zo = F([["Ͱ", "ͽ"]], !1, !1), Zo = F([["Ϳ", "῿"]], !1, !1), Ko = F([["‌", "‍"]], !1, !1), Jo = F([["⁰", "↏"]], !1, !1), qo = F([["Ⰰ", "⿯"]], !1, !1), ec = F([["、", "퟿"]], !1, !1), sc = F([["豈", "﷏"]], !1, !1), rc = F([["ﷰ", "�"]], !1, !1), Zt = b("_", !1), gr = F(["·"], !1, !1), dr = F([["̀", "ͯ"]], !1, !1), wr = F([["‿", "⁀"]], !1, !1), Kt = b("%", !1), tc = F([["A", "F"]], !1, !1), ic = F([["a", "f"]], !1, !1), ac = b("~", !1), lc = b("&", !1), fc = function(s, l) {
    let o = {};
    s.length ? o = {
      headers: s,
      ...l
    } : o = l;
    const t = Object.entries(Ni).map(([n, a]) => ({
      pos: parseInt(n),
      text: a
    }));
    return t.length && (o.comments = t), o;
  }, oc = function(s, l, o) {
    let t = { type: "Query" };
    return s.length && (t.prologue = s), t.queryBody = l, o && (t.values = o), t;
  }, cc = function(s) {
    return {
      type: "BaseDecl",
      base: s
    };
  }, nc = function(s, l) {
    return {
      type: "PrefixDecl",
      prefix: s,
      iri: l
    };
  }, hc = function(s, l, o, t) {
    return l.length && (s.from = l), s = {
      ...s,
      where: o,
      ...t
    }, s;
  }, uc = function(s, l, o, t) {
    let n = {
      ...s,
      where: l,
      ...o
    };
    return t && (n.values = t), n;
  }, pc = function(s, l) {
    let o;
    l === "*" ? o = ["*"] : o = l.map((n) => n.length === 2 ? n[1] : {
      expression: n[3],
      as: n[7]
    });
    let t = { select: o };
    if (s) {
      const n = s.toUpperCase();
      n === "DISTINCT" ? t.distinct = !0 : n === "REDUCED" && (t.reduced = !0);
    }
    return t.location = N(), t;
  }, gc = function(s, l, o, t) {
    let n = { type: "construct" };
    return l.length && (n.from = l), n = {
      ...n,
      template: s,
      where: o,
      ...t,
      location: N()
    }, n;
  }, dc = function(s, l, o) {
    let t = { type: "construct" };
    return s.length && (t.from = s), t = {
      ...t,
      where: [l],
      ...o,
      location: N()
    }, t;
  }, wc = function(s, l, o, t) {
    let n = { type: "describe" };
    return l.length && (n.from = l), n.describe = s, o && (n.where = o), n = {
      ...n,
      ...t,
      location: N()
    }, n;
  }, _c = function(s, l, o) {
    let t = { type: "ask" };
    return s.length && (t.from = s), t = {
      ...t,
      where: l,
      ...o,
      location: N()
    }, t;
  }, $c = function(s) {
    return s;
  }, bc = function(s) {
    return {
      graph: s,
      location: N()
    };
  }, vc = function(s) {
    return {
      namedGraph: s,
      location: N()
    };
  }, mc = function(s) {
    return s.graphPattern || s;
  }, Ac = function(s, l, o, t) {
    let n = {};
    return s && (n.group = s), l && (n.having = l), o && (n.orderBy = o), t && (n.limitOffset = t), n;
  }, Cc = function(s) {
    return s;
  }, Ec = function(s) {
    return s;
  }, yc = function(s) {
    return s;
  }, Pc = function(s, l) {
    return l ? {
      expressionType: "aliasedexpression",
      bracketted: !0,
      expression: s,
      as: l[2],
      location: N()
    } : {
      bracketted: !0,
      ...s
    };
  }, Tc = function(s) {
    return s;
  }, Rc = function(s) {
    return s;
  }, Lc = function(s) {
    return s;
  }, Ic = function(s) {
    return s;
  }, Oc = function(s, l) {
    let o = {};
    return s.toUpperCase() === "ASC" ? o = {
      asc: !0,
      ...l
    } : s.toUpperCase() === "DESC" && (o = {
      desc: !0,
      ...l
    }), o;
  }, Nc = function(s) {
    return s;
  }, Sc = function(s) {
    let l = [s[0]];
    return s[1] && l.push(s[1]), l;
  }, Fc = function(s) {
    return {
      limit: parseInt(s.literal)
    };
  }, xc = function(s) {
    return {
      offset: parseInt(s.literal)
    };
  }, Dc = function(s) {
    return s ? s[1] : null;
  }, Gc = function(s, l) {
    let o = {};
    s.length && (o.prologue = s);
    let t = [];
    return l && (t = [l[1]], l[2] && (t = t.concat(l[2][3].update))), o.update = t, o;
  }, Uc = function(s, l, o) {
    let t = {
      type: "load",
      silent: s,
      sourceGraph: l
    };
    return o && (t.destinyGraph = o[2]), t;
  }, Hc = function(s, l) {
    return {
      type: "clear",
      silent: s,
      destinyGraph: l
    };
  }, kc = function(s, l) {
    return {
      type: "drop",
      silent: s,
      destinyGraph: l
    };
  }, Bc = function(s, l) {
    return {
      type: "create",
      silent: s,
      destinyGraph: l
    };
  }, Mc = function(s, l, o) {
    return {
      type: "add",
      silent: s,
      graphs: [l, o]
    };
  }, jc = function(s, l, o) {
    return {
      type: "move",
      silent: s,
      graphs: [l, o]
    };
  }, Xc = function(s, l, o) {
    return {
      type: "copy",
      silent: s,
      graphs: [l, o]
    };
  }, Vc = function(s) {
    return {
      type: "insertdata",
      insert: s
    };
  }, Wc = function(s) {
    return {
      type: "deletedata",
      delete: s
    };
  }, Yc = function(s) {
    return {
      type: "deletewhere",
      delete: s
    };
  }, Qc = function(s, l, o, t) {
    let n = {
      type: "modify"
    };
    return s && (n.with = s[2]), l.length === 3 ? (n.delete = l[0], l[2] && (n.insert = l[2])) : n.insert = l, o.length && (n.using = o), n.where = t.graphPattern, n;
  }, zc = function(s) {
    return s;
  }, Zc = function(s) {
    return s;
  }, Kc = function(s) {
    return s.length === 3 ? {
      named: !0,
      iri: s[2]
    } : {
      iri: s
    };
  }, Jc = function() {
    return "default";
  }, qc = function(s) {
    return s;
  }, en = function(s) {
    return s;
  }, sn = function(s) {
    return s;
  }, rn = function() {
    return "default";
  }, tn = function() {
    return "named";
  }, an = function() {
    return "all";
  }, ln = function(s) {
    return s;
  }, fn = function(s) {
    return s;
  }, on = function(s, l) {
    let o = [];
    return s && (o = o.concat(s)), l.forEach((t) => {
      o = o.concat(t[0]), t[2] && (o = o.concat(t[2]));
    }), o;
  }, cn = function(s, l) {
    return {
      graph: s,
      ...l
    };
  }, nn = function(s, l) {
    let o = [s];
    return l && l[3] && (o = o.concat(l[3].triplePattern)), {
      triplePattern: o,
      location: N()
    };
  }, hn = function(s) {
    return s;
  }, un = function(s, l) {
    let o = [];
    return s && o.push(s), l.forEach((t) => {
      o.push(t[0]), t[4] && o.push(t[4]);
    }), {
      graphPattern: o,
      location: N()
    };
  }, pn = function(s, l) {
    let o = [s];
    return l && l[3] && (o = o.concat(l[3].triplePattern)), {
      type: "TriplesBlock",
      triplePattern: o,
      location: N()
    };
  }, gn = function(s) {
    return {
      type: "OptionalGraphPattern",
      optional: s.graphPattern || s,
      location: N()
    };
  }, dn = function(s, l) {
    return {
      type: "GraphGraphPattern",
      graph: s,
      ...l
    };
  }, wn = function(s, l, o) {
    let t = {
      type: "ServiceGraphPattern",
      service: l,
      pattern: o.graphPattern || o
    };
    return s && (t.silent = !0), t.location = N(), t;
  }, _n = function(s, l) {
    return {
      type: "Bind",
      bind: s,
      as: l,
      location: N()
    };
  }, $n = function(s) {
    return s;
  }, bn = function(s, l) {
    return {
      oneVar: s,
      data: l,
      location: N()
    };
  }, vn = function(s, l) {
    return {
      variables: s,
      data: l,
      location: N()
    };
  }, mn = function(s) {
    return s;
  }, An = function(s) {
    return s;
  }, Cn = function(s) {
    return {
      type: "MinusGraphPattern",
      minus: s.graphPattern || s,
      location: N()
    };
  }, En = function(s, l) {
    return l.length ? {
      union: [s].concat(l.map((o) => o[3])),
      location: N()
    } : s;
  }, yn = function(s) {
    return {
      type: "Filter",
      filter: s,
      location: N()
    };
  }, Pn = function(s, l) {
    return {
      functionRef: s,
      args: l.list,
      location: N()
    };
  }, Tn = function() {
    return {
      list: []
    };
  }, Rn = function(s, l, o) {
    return {
      distinct: !!s,
      list: [l].concat(o.map((t) => t[2]))
    };
  }, Ln = function() {
    return [];
  }, In = function(s, l) {
    return [s].concat(l.map((o) => o[2]));
  }, On = function(s) {
    return s;
  }, Nn = function(s, l) {
    let o = [s];
    return l && l[3] && (o = o.concat(l[3].triplePattern)), {
      triplePattern: o,
      location: N()
    };
  }, Sn = function(s, l) {
    return {
      subject: s,
      properties: l
    };
  }, Fn = function(s, l) {
    return {
      subject: s,
      properties: l
    };
  }, xn = function(s, l, o) {
    let t = [];
    return t.push({ predicate: s, objects: l }), o.forEach((n) => {
      n[3] && t.push({ predicate: n[3][0], objects: n[3][2] });
    }), t;
  }, Dn = function() {
    return {
      a: !0,
      location: N()
    };
  }, Gn = function(s, l) {
    return [s, ...l];
  }, Un = function(s, l) {
    return {
      subject: s,
      properties: l
    };
  }, Hn = function(s, l) {
    return {
      subject: s,
      properties: l
    };
  }, kn = function(s, l, o) {
    let t = [];
    return t.push({ predicate: s, objects: l }), o.forEach((n) => {
      n[3] && t.push({ predicate: n[3][0], objects: n[3][2] });
    }), t;
  }, Bn = function(s, l) {
    return [s, ...l];
  }, Mn = function(s, l) {
    if (l.length) {
      let o = [s];
      for (let t = 0; t < l.length; t++)
        o.push(l[t][3]);
      return {
        alternative: o,
        location: N()
      };
    } else
      return s;
  }, jn = function(s, l) {
    if (l.length) {
      let o = [s];
      for (let t = 0; t < l.length; t++)
        o.push(l[t][3]);
      return {
        sequence: o,
        location: N()
      };
    } else
      return s;
  }, Xn = function(s, l) {
    return l && (s.modifier = l), s;
  }, Vn = function(s) {
    return s.inverse = !0, s;
  }, Wn = function() {
    return {
      a: !0,
      location: N()
    };
  }, Yn = function(s) {
    return {
      bracketted: !0,
      ...s
    };
  }, Qn = function(s) {
    return {
      collection: s,
      location: N()
    };
  }, zn = function(s) {
    return {
      blankNodeProperties: s,
      location: N()
    };
  }, Zn = function(s) {
    return {
      collection: s,
      location: N()
    };
  }, Kn = function(s) {
    return {
      blankNodeProperties: s,
      location: N()
    };
  }, Jn = function(s) {
    return s;
  }, qn = function(s) {
    return s;
  }, eh = function(s) {
    return s;
  }, sh = function(s) {
    return s;
  }, rh = function(s) {
    return {
      ...s,
      location: N()
    };
  }, th = function(s, l) {
    return l.length ? {
      expressionType: "conditionalor",
      operands: [s].concat(l.map((o) => o[3]))
    } : s;
  }, ih = function(s, l) {
    return l.length ? {
      expressionType: "conditionaland",
      operands: [s].concat(l.map((o) => o[3]))
    } : s;
  }, ah = function(s, l) {
    if (l.length) {
      const o = s;
      let t = l[0][1].toUpperCase(), n = l[0][3];
      return t === "NOT" && (t += " " + l[0][3].toUpperCase(), n = l[0][5]), {
        expressionType: "relationalexpression",
        operator: t,
        op1: o,
        op2: n
      };
    } else
      return s;
  }, lh = function(s, l) {
    if (l.length === 0)
      return s;
    let o = [];
    return l.forEach((t) => {
      t.length == 4 && o.push({
        operator: t[1],
        expression: t[3]
      });
    }), {
      expressionType: "additiveexpression",
      op1: s,
      ops: o
    };
  }, fh = function(s, l) {
    return l.length ? {
      expressionType: "multiplicativeexpression",
      first: s,
      rest: l.map((o) => ({ operator: o[1], expression: o[3] }))
    } : s;
  }, oh = function(s) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "!",
      expression: s
    };
  }, ch = function(s) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "+",
      expression: s
    };
  }, nh = function(s) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "-",
      expression: s
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
      expressionType: "atomic",
      value: s
    };
  }, dh = function(s) {
    return {
      bracketted: !0,
      ...s
    };
  }, wh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "str",
      args: [s]
    };
  }, _h = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "lang",
      args: [s]
    };
  }, $h = function(s, l) {
    return {
      expressionType: "builtincall",
      builtincall: "langMatches",
      args: [s, l]
    };
  }, bh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "datatype",
      args: [s]
    };
  }, vh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "bound",
      args: [s]
    };
  }, mh = function(s) {
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
  }, Ch = function(s) {
    const l = {
      expressionType: "builtincall",
      builtincall: "BNODE",
      args: null
    };
    return s.length === 5 && (l.args = [s[2]]), l;
  }, Eh = function() {
    return {
      expressionType: "builtincall",
      builtincall: "rand"
    };
  }, yh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "abs",
      args: [s]
    };
  }, Ph = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "ceil",
      args: [s]
    };
  }, Th = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "floor",
      args: [s]
    };
  }, Rh = function(s) {
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
  }, Ih = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "STRLEN",
      args: [s]
    };
  }, Oh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "UCASE",
      args: [s]
    };
  }, Nh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "LCASE",
      args: [s]
    };
  }, Sh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "ENCODE_FOR_URI",
      args: [s]
    };
  }, Fh = function(s, l) {
    return {
      expressionType: "builtincall",
      builtincall: "CONTAINS",
      args: [s, l]
    };
  }, xh = function(s, l) {
    return {
      expressionType: "builtincall",
      builtincall: "STRBEFORE",
      args: [s, l]
    };
  }, Dh = function(s, l) {
    return {
      expressionType: "builtincall",
      builtincall: "STRSTARTS",
      args: [s, l]
    };
  }, Gh = function(s, l) {
    return {
      expressionType: "builtincall",
      builtincall: "STRENDS",
      args: [s, l]
    };
  }, Uh = function(s, l) {
    return {
      expressionType: "builtincall",
      builtincall: "STRAFTER",
      args: [s, l]
    };
  }, Hh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "year",
      args: [s]
    };
  }, kh = function(s) {
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
  }, Mh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "hours",
      args: [s]
    };
  }, jh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "minutes",
      args: [s]
    };
  }, Xh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "seconds",
      args: [s]
    };
  }, Vh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "timezone",
      args: [s]
    };
  }, Wh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "tz",
      args: [s]
    };
  }, Yh = function() {
    return {
      expressionType: "builtincall",
      builtincall: "now"
    };
  }, Qh = function() {
    return {
      expressionType: "builtincall",
      builtincall: "UUID"
    };
  }, zh = function() {
    return {
      expressionType: "builtincall",
      builtincall: "STRUUID"
    };
  }, Zh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "MD5",
      args: [s]
    };
  }, Kh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA1",
      args: [s]
    };
  }, Jh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA256",
      args: [s]
    };
  }, qh = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA384",
      args: [s]
    };
  }, eu = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA512",
      args: [s]
    };
  }, su = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "COALESCE",
      args: s
    };
  }, ru = function(s, l, o) {
    return {
      expressionType: "builtincall",
      builtincall: "IF",
      args: [s, l, o]
    };
  }, tu = function(s, l) {
    return {
      expressionType: "builtincall",
      builtincall: "STRLANG",
      args: [s, l]
    };
  }, iu = function(s, l) {
    return {
      expressionType: "builtincall",
      builtincall: "STRDT",
      args: [s, l]
    };
  }, au = function(s, l) {
    return {
      expressionType: "builtincall",
      builtincall: "sameTerm",
      args: [s, l]
    };
  }, lu = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "isURI",
      args: [s]
    };
  }, fu = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "isBlank",
      args: [s]
    };
  }, ou = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "isLiteral",
      args: [s]
    };
  }, cu = function(s) {
    return {
      expressionType: "builtincall",
      builtincall: "isNumeric",
      args: [s]
    };
  }, nu = function(s, l, o) {
    let t = {
      expressionType: "regex",
      text: s,
      pattern: l
    };
    return o && (t.flags = o[2]), t;
  }, hu = function(s, l, o) {
    let t = [s, l];
    return o && t.push(o[2]), {
      expressionType: "builtincall",
      builtincall: "substr",
      args: t
    };
  }, uu = function(s, l, o, t) {
    let n = [s, l, o];
    return t && n.push(t[2]), {
      expressionType: "builtincall",
      builtincall: "replace",
      args: n
    };
  }, pu = function(s) {
    return {
      exists: s.graphPattern || s
    };
  }, gu = function(s) {
    return {
      notexists: s.graphPattern || s
    };
  }, du = function(s, l) {
    return {
      expressionType: "aggregate",
      aggregateType: "count",
      distinct: !!s,
      expression: l
    };
  }, wu = function(s, l) {
    return {
      expressionType: "aggregate",
      aggregateType: "sum",
      distinct: !!s,
      expression: l
    };
  }, _u = function(s, l) {
    return {
      expressionType: "aggregate",
      aggregateType: "min",
      distinct: !!s,
      expression: l
    };
  }, $u = function(s, l) {
    return {
      expressionType: "aggregate",
      aggregateType: "max",
      distinct: !!s,
      expression: l
    };
  }, bu = function(s, l) {
    return {
      expressionType: "aggregate",
      aggregateType: "avg",
      distinct: !!s,
      expression: l
    };
  }, vu = function(s, l) {
    return {
      expressionType: "aggregate",
      aggregateType: "sample",
      distinct: !!s,
      expression: l
    };
  }, mu = function(s, l, o) {
    let t = null;
    return o != null && o.length && (t = o[7]), {
      expressionType: "aggregate",
      aggregateType: "group_concat",
      expression: l,
      separator: t,
      distinct: !!s
    };
  }, Au = function(s, l) {
    let o = {
      expressionType: "irireforfunction",
      iriref: s
    };
    return l && (o.args = l.list), o;
  }, Cu = function(s, l) {
    return typeof l == "string" ? s.lang = l : l && (s.dataType = l[1]), s.location = N(), s;
  }, Eu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !0
    };
  }, yu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !1
    };
  }, Pu = function(s) {
    return {
      iri: s,
      location: N()
    };
  }, Tu = function(s) {
    return s;
  }, Ru = function(s) {
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
  }, Iu = function(s) {
    return {
      blankNode: s,
      location: N()
    };
  }, Ou = function() {
    return {
      blankNode: "[]",
      location: N()
    };
  }, Nu = function(s) {
    return s.join("");
  }, Su = function(s) {
    return s || "";
  }, Fu = function(s, l) {
    return [s, l];
  }, xu = function() {
    return te();
  }, Du = function(s) {
    return {
      variable: s
    };
  }, Gu = function(s) {
    return {
      varType: "$",
      variable: s
    };
  }, Uu = function(s, l) {
    let o = s.join("");
    return l.length && (o += "-" + l[0][1].join("")), o.toLowerCase();
  }, Hu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#integer",
      literal: te()
    };
  }, ku = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#decimal",
      literal: te()
    };
  }, Bu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: te()
    };
  }, Mu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: te()
    };
  }, ju = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: te()
    };
  }, Xu = function(s) {
    return s.literal = "+" + s.literal, s;
  }, Vu = function(s) {
    return s.literal = "+" + s.literal, s;
  }, Wu = function(s) {
    return s.literal = "+" + s.literal, s;
  }, Yu = function(s) {
    return s.literal = "-" + s.literal, s;
  }, Qu = function(s) {
    return s.literal = "-" + s.literal, s;
  }, zu = function(s) {
    return s.literal = "-" + s.literal, s;
  }, Zu = function(s) {
    return {
      quote: "'",
      literal: s.join("")
      // except ' \ LF CR
    };
  }, Ku = function(s) {
    return {
      quote: '"',
      literal: s.join("")
      // except " \ LF CR
    };
  }, Ju = function(s) {
    return {
      quote: "'''",
      literal: s.map((l) => l[0] ? l[0] + l[1] : l[1]).join("")
    };
  }, qu = function(s) {
    return {
      quote: '"""',
      literal: s.map((l) => l[0] ? l[0] + l[1] : l[1]).join("")
    };
  }, ep = function() {
    return te();
  }, sp = function() {
    return te();
  }, rp = function() {
    return Ni[N().start.offset] = te(), "";
  }, tp = function() {
    return te();
  }, ip = function() {
    return te();
  }, ap = function() {
    return te();
  }, r = 0, w = 0, Ns = [{ line: 1, column: 1 }], pe = 0, _r = [], Ss;
  if ("startRule" in d) {
    if (!(d.startRule in L))
      throw new Error(`Can't start parsing from rule "` + d.startRule + '".');
    Q = L[d.startRule];
  }
  function te() {
    return i.substring(w, r);
  }
  function N() {
    return $r(w, r);
  }
  function b(s, l) {
    return { type: "literal", text: s, ignoreCase: l };
  }
  function F(s, l, o) {
    return { type: "class", parts: s, inverted: l, ignoreCase: o };
  }
  function lp() {
    return { type: "end" };
  }
  function Jt(s) {
    var l = Ns[s], o;
    if (l)
      return l;
    for (o = s - 1; !Ns[o]; )
      o--;
    for (l = Ns[o], l = {
      line: l.line,
      column: l.column
    }; o < s; )
      i.charCodeAt(o) === 10 ? (l.line++, l.column = 1) : l.column++, o++;
    return Ns[s] = l, l;
  }
  function $r(s, l, o) {
    var t = Jt(s), n = Jt(l), a = {
      source: A,
      start: {
        offset: s,
        line: t.line,
        column: t.column
      },
      end: {
        offset: l,
        line: n.line,
        column: n.column
      }
    };
    return a;
  }
  function u(s) {
    r < pe || (r > pe && (pe = r, _r = []), _r.push(s));
  }
  function fp(s, l, o) {
    return new Ze(
      Ze.buildMessage(s, l),
      s,
      l,
      o
    );
  }
  function qt() {
    var s, l, o, t, n, a;
    for (s = r, l = [], o = Ri(); o !== e; )
      l.push(o), o = Ri();
    for (o = [], t = f(); t !== e; )
      o.push(t), t = f();
    if (t = op(), t !== e) {
      for (n = [], a = f(); a !== e; )
        n.push(a), a = f();
      w = s, s = fc(l, t);
    } else
      r = s, s = e;
    return s;
  }
  function op() {
    var s;
    return s = cp(), s === e && (s = ni()), s;
  }
  function cp() {
    var s, l, o, t, n;
    for (s = r, l = ei(), o = [], t = f(); t !== e; )
      o.push(t), t = f();
    return t = np(), t === e && (t = up(), t === e && (t = pp(), t === e && (t = gp()))), t !== e ? (n = ci(), w = s, s = oc(l, t, n)) : (r = s, s = e), s;
  }
  function ei() {
    var s, l;
    for (s = [], l = si(), l === e && (l = ri()); l !== e; )
      s.push(l), l = si(), l === e && (l = ri());
    return s;
  }
  function si() {
    var s, l, o, t, n;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.substr(r, 4).toLowerCase() === J ? (o = i.substr(r, 4), r += 4) : (o = e, u(zl)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      n = Dr(), n !== e ? (w = s, s = cc(n)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function ri() {
    var s, l, o, t, n, a, h;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.substr(r, 6).toLowerCase() === W ? (o = i.substr(r, 6), r += 6) : (o = e, u(Zl)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = Gr(), n !== e) {
        for (a = [], h = f(); h !== e; )
          a.push(h), h = f();
        h = Dr(), h !== e ? (w = s, s = nc(n, h)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function np() {
    var s, l, o, t, n, a, h, c;
    if (s = r, l = ti(), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (t = [], n = ge(); n !== e; )
        t.push(n), n = ge();
      for (n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (a = qe(), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = je(), w = s, s = hc(l, t, a, c);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function hp() {
    var s, l, o, t, n, a, h;
    if (s = r, l = ti(), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = qe(), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        a = je(), h = ci(), w = s, s = uc(l, t, a, h);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function ti() {
    var s, l, o, t, n, a, h, c, g, p, _, $, v, T, I, x, S;
    if (s = r, i.substr(r, 6).toLowerCase() === ne ? (l = i.substr(r, 6), r += 6) : (l = e, u(Kl)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 8).toLowerCase() === O ? (t = i.substr(r, 8), r += 8) : (t = e, u(ve)), t === e && (i.substr(r, 7).toLowerCase() === D ? (t = i.substr(r, 7), r += 7) : (t = e, u(Jl))), t === e && (t = null), n = [], a = f(); a !== e; )
        n.push(a), a = f();
      for (a = [], h = r, c = [], g = f(); g !== e; )
        c.push(g), g = f();
      if (g = Y(), g !== e ? (c = [c, g], h = c) : (r = h, h = e), h === e) {
        for (h = r, c = [], g = f(); g !== e; )
          c.push(g), g = f();
        if (i.charCodeAt(r) === 40 ? (g = m, r++) : (g = e, u(y)), g !== e) {
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
          for (a.push(h), h = r, c = [], g = f(); g !== e; )
            c.push(g), g = f();
          if (g = Y(), g !== e ? (c = [c, g], h = c) : (r = h, h = e), h === e) {
            for (h = r, c = [], g = f(); g !== e; )
              c.push(g), g = f();
            if (i.charCodeAt(r) === 40 ? (g = m, r++) : (g = e, u(y)), g !== e) {
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
        a = e;
      a === e && (i.charCodeAt(r) === 42 ? (a = ae, r++) : (a = e, u(le))), a !== e ? (w = s, s = pc(t, a)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function up() {
    var s, l, o, t, n, a, h, c, g, p, _, $, v, T;
    if (s = r, i.substr(r, 9).toLowerCase() === et ? (l = i.substr(r, 9), r += 9) : (l = e, u(Ct)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = Vp(), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        for (a = [], h = ge(); h !== e; )
          a.push(h), h = ge();
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (c = qe(), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          p = je(), w = s, s = gc(t, a, c, p);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    if (s === e)
      if (s = r, i.substr(r, 9).toLowerCase() === et ? (l = i.substr(r, 9), r += 9) : (l = e, u(Ct)), l !== e) {
        for (o = [], t = f(); t !== e; )
          o.push(t), t = f();
        for (t = [], n = ge(); n !== e; )
          t.push(n), n = ge();
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (i.substr(r, 5).toLowerCase() === ls ? (a = i.substr(r, 5), r += 5) : (a = e, u(Es)), a !== e) {
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
              T = je(), w = s, s = dc(t, p, T);
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
  function pp() {
    var s, l, o, t, n, a, h, c, g, p;
    if (s = r, i.substr(r, 8).toLowerCase() === Wi ? (l = i.substr(r, 8), r += 8) : (l = e, u(ql)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = [], n = Ye(), n !== e)
        for (; n !== e; )
          t.push(n), n = Ye();
      else
        t = e;
      if (t === e && (i.charCodeAt(r) === 42 ? (t = ae, r++) : (t = e, u(le))), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        for (a = [], h = ge(); h !== e; )
          a.push(h), h = ge();
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        for (c = qe(), c === e && (c = null), g = [], p = f(); p !== e; )
          g.push(p), p = f();
        p = je(), w = s, s = wc(t, a, c, p);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function gp() {
    var s, l, o, t, n, a, h, c, g;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.substr(r, 3).toLowerCase() === Yi ? (o = i.substr(r, 3), r += 3) : (o = e, u(ef)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      for (n = [], a = ge(); a !== e; )
        n.push(a), a = ge();
      for (a = [], h = f(); h !== e; )
        a.push(h), h = f();
      if (h = qe(), h !== e) {
        for (c = [], g = f(); g !== e; )
          c.push(g), g = f();
        g = je(), w = s, s = _c(n, h, g);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function ge() {
    var s, l, o, t, n, a;
    if (s = r, i.substr(r, 4).toLowerCase() === Qi ? (l = i.substr(r, 4), r += 4) : (l = e, u(sf)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = dp(), t === e && (t = wp()), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        w = s, s = $c(t);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function dp() {
    var s, l, o;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    return o = V(), o !== e ? (w = s, s = bc(o)) : (r = s, s = e), s;
  }
  function wp() {
    var s, l, o, t;
    if (s = r, i.substr(r, 5).toLowerCase() === js ? (l = i.substr(r, 5), r += 5) : (l = e, u(tr)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = V(), t !== e ? (w = s, s = vc(t)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function qe() {
    var s, l, o;
    for (s = r, i.substr(r, 5).toLowerCase() === ls ? (i.substr(r, 5), r += 5) : u(Es), l = [], o = f(); o !== e; )
      l.push(o), o = f();
    return o = fe(), o !== e ? (w = s, s = mc(o)) : (r = s, s = e), s;
  }
  function je() {
    var s, l, o, t, n;
    return s = r, l = _p(), l === e && (l = null), o = $p(), o === e && (o = null), t = bp(), t === e && (t = null), n = vp(), n === e && (n = null), w = s, s = Ac(l, o, t, n), s;
  }
  function _p() {
    var s, l, o, t, n, a, h;
    if (s = r, i.substr(r, 5).toLowerCase() === zi ? (l = i.substr(r, 5), r += 5) : (l = e, u(rf)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.substr(r, 2).toLowerCase() === st ? (t = i.substr(r, 2), r += 2) : (t = e, u(Et)), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (a = [], h = ii(), h !== e)
          for (; h !== e; )
            a.push(h), h = ii();
        else
          a = e;
        a !== e ? (w = s, s = Cc(a)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function ii() {
    var s, l, o, t, n, a, h, c, g, p, _;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (o = Ir(), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      w = s, s = Ec(o);
    } else
      r = s, s = e;
    if (s === e) {
      for (s = r, l = [], o = f(); o !== e; )
        l.push(o), o = f();
      if (o = vi(), o !== e) {
        for (t = [], n = f(); n !== e; )
          t.push(n), n = f();
        w = s, s = yc(o);
      } else
        r = s, s = e;
      if (s === e) {
        for (s = r, l = [], o = f(); o !== e; )
          l.push(o), o = f();
        if (i.charCodeAt(r) === 40 ? (o = m, r++) : (o = e, u(y)), o !== e) {
          for (t = [], n = f(); n !== e; )
            t.push(n), n = f();
          if (n = C(), n !== e) {
            for (a = [], h = f(); h !== e; )
              a.push(h), h = f();
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
              w = s, s = Pc(n, h);
            } else
              r = s, s = e;
          } else
            r = s, s = e;
        } else
          r = s, s = e;
        if (s === e) {
          for (s = r, l = [], o = f(); o !== e; )
            l.push(o), o = f();
          if (o = Y(), o !== e) {
            for (t = [], n = f(); n !== e; )
              t.push(n), n = f();
            w = s, s = Tc(o);
          } else
            r = s, s = e;
        }
      }
    }
    return s;
  }
  function $p() {
    var s, l, o, t, n;
    if (s = r, i.substr(r, 6).toLowerCase() === Zi ? (l = i.substr(r, 6), r += 6) : (l = e, u(tf)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = [], n = ai(), n !== e)
        for (; n !== e; )
          t.push(n), n = ai();
      else
        t = e;
      t !== e ? (w = s, s = Rc(t)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function ai() {
    var s, l, o, t;
    if (s = r, l = mr(), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      w = s, s = Lc(l);
    } else
      r = s, s = e;
    return s;
  }
  function bp() {
    var s, l, o, t, n, a, h, c;
    if (s = r, i.substr(r, 5).toLowerCase() === Ki ? (l = i.substr(r, 5), r += 5) : (l = e, u(af)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.substr(r, 2).toLowerCase() === st ? (t = i.substr(r, 2), r += 2) : (t = e, u(Et)), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (a = [], h = li(), h !== e)
          for (; h !== e; )
            a.push(h), h = li();
        else
          a = e;
        if (a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          w = s, s = Ic(a);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function li() {
    var s, l, o, t, n, a;
    if (s = r, i.substr(r, 3).toLowerCase() === Ji ? (l = i.substr(r, 3), r += 3) : (l = e, u(lf)), l === e && (i.substr(r, 4).toLowerCase() === qi ? (l = i.substr(r, 4), r += 4) : (l = e, u(ff))), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = Lr(), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        w = s, s = Oc(l, t);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    if (s === e)
      if (s = r, l = mr(), l === e && (l = Y()), l !== e) {
        for (o = [], t = f(); t !== e; )
          o.push(t), t = f();
        w = s, s = Nc(l);
      } else
        r = s, s = e;
    return s;
  }
  function vp() {
    var s, l, o, t;
    return s = r, l = r, o = fi(), o !== e ? (t = oi(), t === e && (t = null), o = [o, t], l = o) : (r = l, l = e), l === e && (l = r, o = oi(), o !== e ? (t = fi(), t === e && (t = null), o = [o, t], l = o) : (r = l, l = e)), l !== e && (w = s, l = Sc(l)), s = l, s;
  }
  function fi() {
    var s, l, o, t, n, a;
    if (s = r, i.substr(r, 5).toLowerCase() === ea ? (l = i.substr(r, 5), r += 5) : (l = e, u(of)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = is(), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        w = s, s = Fc(t);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function oi() {
    var s, l, o, t, n, a;
    if (s = r, i.substr(r, 6).toLowerCase() === sa ? (l = i.substr(r, 6), r += 6) : (l = e, u(cf)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = is(), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        w = s, s = xc(t);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function ci() {
    var s, l, o, t;
    return s = r, l = r, i.substr(r, 6).toLowerCase() === rt ? (o = i.substr(r, 6), r += 6) : (o = e, u(yt)), o !== e ? (t = $i(), t !== e ? (o = [o, t], l = o) : (r = l, l = e)) : (r = l, l = e), l === e && (l = null), w = s, l = Dc(l), s = l, s;
  }
  function ni() {
    var s, l, o, t, n, a, h, c, g, p;
    for (s = r, l = ei(), o = r, t = [], n = f(); n !== e; )
      t.push(n), n = f();
    if (n = mp(), n !== e) {
      for (a = r, h = [], c = f(); c !== e; )
        h.push(c), c = f();
      if (i.charCodeAt(r) === 59 ? (c = Ue, r++) : (c = e, u(ke)), c !== e) {
        for (g = [], p = f(); p !== e; )
          g.push(p), p = f();
        p = ni(), h = [h, c, g, p], a = h;
      } else
        r = a, a = e;
      a === e && (a = null), t = [t, n, a], o = t;
    } else
      r = o, o = e;
    for (o === e && (o = null), t = [], n = f(); n !== e; )
      t.push(n), n = f();
    return w = s, s = Gc(l, o), s;
  }
  function mp() {
    var s;
    return s = Ap(), s === e && (s = Cp(), s === e && (s = Ep(), s === e && (s = Pp(), s === e && (s = Tp(), s === e && (s = Rp(), s === e && (s = yp(), s === e && (s = Lp(), s === e && (s = Ip(), s === e && (s = Op(), s === e && (s = Np())))))))))), s;
  }
  function Ap() {
    var s, l, o, t, n, a, h, c, g, p, _;
    if (s = r, i.substr(r, 4).toLowerCase() === ra ? (l = i.substr(r, 4), r += 4) : (l = e, u(nf)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Re ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (a = V(), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (c = r, i.substr(r, 4).toLowerCase() === ta ? (g = i.substr(r, 4), r += 4) : (g = e, u(hf)), g !== e) {
          for (p = [], _ = f(); _ !== e; )
            p.push(_), _ = f();
          _ = br(), _ !== e ? (g = [g, p, _], c = g) : (r = c, c = e);
        } else
          r = c, c = e;
        c === e && (c = null), w = s, s = Uc(t, a, c);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Cp() {
    var s, l, o, t, n, a;
    if (s = r, i.substr(r, 5).toLowerCase() === ia ? (l = i.substr(r, 5), r += 5) : (l = e, u(uf)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Re ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], a = f(); a !== e; )
        n.push(a), a = f();
      a = pi(), a !== e ? (w = s, s = Hc(t, a)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Ep() {
    var s, l, o, t, n, a;
    if (s = r, i.substr(r, 4).toLowerCase() === aa ? (l = i.substr(r, 4), r += 4) : (l = e, u(pf)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Re ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], a = f(); a !== e; )
        n.push(a), a = f();
      a = pi(), a !== e ? (w = s, s = kc(t, a)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function yp() {
    var s, l, o, t, n, a;
    if (s = r, i.substr(r, 6).toLowerCase() === la ? (l = i.substr(r, 6), r += 6) : (l = e, u(gf)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Re ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], a = f(); a !== e; )
        n.push(a), a = f();
      a = br(), a !== e ? (w = s, s = Bc(t, a)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Pp() {
    var s, l, o, t, n, a, h, c, g, p;
    if (s = r, i.substr(r, 3).toLowerCase() === fa ? (l = i.substr(r, 3), r += 3) : (l = e, u(df)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Re ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (a = Xe(), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (i.substr(r, 2).toLowerCase() === Xs ? (c = i.substr(r, 2), r += 2) : (c = e, u(ir)), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          p = Xe(), p !== e ? (w = s, s = Mc(t, a, p)) : (r = s, s = e);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Tp() {
    var s, l, o, t, n, a, h, c, g, p;
    if (s = r, i.substr(r, 4).toLowerCase() === oa ? (l = i.substr(r, 4), r += 4) : (l = e, u(wf)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Re ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (a = Xe(), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (i.substr(r, 2).toLowerCase() === Xs ? (c = i.substr(r, 2), r += 2) : (c = e, u(ir)), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          p = Xe(), p !== e ? (w = s, s = jc(t, a, p)) : (r = s, s = e);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Rp() {
    var s, l, o, t, n, a, h, c, g, p;
    if (s = r, i.substr(r, 4).toLowerCase() === ca ? (l = i.substr(r, 4), r += 4) : (l = e, u(_f)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Re ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (a = Xe(), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (i.substr(r, 2).toLowerCase() === Xs ? (c = i.substr(r, 2), r += 2) : (c = e, u(ir)), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          p = Xe(), p !== e ? (w = s, s = Xc(t, a, p)) : (r = s, s = e);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Lp() {
    var s, l, o, t, n, a;
    if (s = r, i.substr(r, 6).toLowerCase() === tt ? (l = i.substr(r, 6), r += 6) : (l = e, u(Pt)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.substr(r, 4).toLowerCase() === it ? (t = i.substr(r, 4), r += 4) : (t = e, u(Tt)), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        a = gi(), a !== e ? (w = s, s = Vc(a)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Ip() {
    var s, l, o, t, n;
    if (s = r, i.substr(r, 6).toLowerCase() === Vs ? (l = i.substr(r, 6), r += 6) : (l = e, u(ar)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      i.substr(r, 4).toLowerCase() === it ? (t = i.substr(r, 4), r += 4) : (t = e, u(Tt)), t !== e ? (n = gi(), n !== e ? (w = s, s = Wc(n)) : (r = s, s = e)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Op() {
    var s, l, o, t, n, a;
    if (s = r, i.substr(r, 6).toLowerCase() === Vs ? (l = i.substr(r, 6), r += 6) : (l = e, u(ar)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.substr(r, 5).toLowerCase() === ls ? (t = i.substr(r, 5), r += 5) : (t = e, u(Es)), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        a = vr(), a !== e ? (w = s, s = Yc(a)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Np() {
    var s, l, o, t, n, a, h, c, g, p, _;
    if (s = r, l = r, i.substr(r, 4).toLowerCase() === na ? (o = i.substr(r, 4), r += 4) : (o = e, u($f)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = V(), n !== e) {
        for (a = [], h = f(); h !== e; )
          a.push(h), h = f();
        o = [o, t, n, a], l = o;
      } else
        r = l, l = e;
    } else
      r = l, l = e;
    if (l === e && (l = null), o = r, t = Sp(), t !== e) {
      for (n = [], a = f(); a !== e; )
        n.push(a), a = f();
      a = hi(), a === e && (a = null), t = [t, n, a], o = t;
    } else
      r = o, o = e;
    if (o === e && (o = hi()), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      for (n = [], a = ui(); a !== e; )
        n.push(a), a = ui();
      for (a = [], h = f(); h !== e; )
        a.push(h), h = f();
      if (i.substr(r, 5).toLowerCase() === ls ? (h = i.substr(r, 5), r += 5) : (h = e, u(Es)), h !== e) {
        for (c = [], g = f(); g !== e; )
          c.push(g), g = f();
        if (g = fe(), g !== e) {
          for (p = [], _ = f(); _ !== e; )
            p.push(_), _ = f();
          w = s, s = Qc(l, o, n, g);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Sp() {
    var s, l, o;
    return s = r, i.substr(r, 6).toLowerCase() === Vs ? (l = i.substr(r, 6), r += 6) : (l = e, u(ar)), l !== e ? (o = vr(), o !== e ? (w = s, s = zc(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function hi() {
    var s, l, o;
    return s = r, i.substr(r, 6).toLowerCase() === tt ? (l = i.substr(r, 6), r += 6) : (l = e, u(Pt)), l !== e ? (o = vr(), o !== e ? (w = s, s = Zc(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function ui() {
    var s, l, o, t, n, a, h, c;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.substr(r, 5).toLowerCase() === ha ? (o = i.substr(r, 5), r += 5) : (o = e, u(bf)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = V(), n === e)
        if (n = r, i.substr(r, 5).toLowerCase() === js ? (a = i.substr(r, 5), r += 5) : (a = e, u(tr)), a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = V(), c !== e ? (a = [a, h, c], n = a) : (r = n, n = e);
        } else
          r = n, n = e;
      n !== e ? (w = s, s = Kc(n)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Xe() {
    var s, l, o, t;
    if (s = r, i.substr(r, 7).toLowerCase() === at ? (l = i.substr(r, 7), r += 7) : (l = e, u(Rt)), l !== e && (w = s, l = Jc()), s = l, s === e) {
      for (s = r, i.substr(r, 5).toLowerCase() === fs ? (l = i.substr(r, 5), r += 5) : (l = e, u(ys)), l === e && (l = null), o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = V(), t !== e ? (w = s, s = qc(t)) : (r = s, s = e);
    }
    return s;
  }
  function br() {
    var s, l, o, t;
    if (s = r, i.substr(r, 5).toLowerCase() === fs ? (l = i.substr(r, 5), r += 5) : (l = e, u(ys)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = V(), t !== e ? (w = s, s = en(t)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function pi() {
    var s, l;
    return s = r, l = br(), l !== e && (w = s, l = sn(l)), s = l, s === e && (s = r, i.substr(r, 7).toLowerCase() === at ? (l = i.substr(r, 7), r += 7) : (l = e, u(Rt)), l !== e && (w = s, l = rn()), s = l, s === e && (s = r, i.substr(r, 5).toLowerCase() === js ? (l = i.substr(r, 5), r += 5) : (l = e, u(tr)), l !== e && (w = s, l = tn()), s = l, s === e && (s = r, i.substr(r, 3).toLowerCase() === ua ? (l = i.substr(r, 3), r += 3) : (l = e, u(vf)), l !== e && (w = s, l = an()), s = l))), s;
  }
  function vr() {
    var s, l, o, t, n, a, h, c, g;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.charCodeAt(r) === 123 ? (o = Pe, r++) : (o = e, u(Ie)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      for (n = di(), a = [], h = f(); h !== e; )
        a.push(h), h = f();
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
  function gi() {
    var s, l, o, t, n, a, h, c, g;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.charCodeAt(r) === 123 ? (o = Pe, r++) : (o = e, u(Ie)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      for (n = di(), a = [], h = f(); h !== e; )
        a.push(h), h = f();
      if (i.charCodeAt(r) === 125 ? (h = Te, r++) : (h = e, u(Oe)), h !== e) {
        for (c = [], g = f(); g !== e; )
          c.push(g), g = f();
        w = s, s = fn(n);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function di() {
    var s, l, o, t, n, a, h;
    for (s = r, l = Ve(), l === e && (l = null), o = [], t = r, n = wi(), n !== e ? (i.charCodeAt(r) === 46 ? (a = z, r++) : (a = e, u(Z)), a === e && (a = null), h = Ve(), h === e && (h = null), n = [n, a, h], t = n) : (r = t, t = e); t !== e; )
      o.push(t), t = r, n = wi(), n !== e ? (i.charCodeAt(r) === 46 ? (a = z, r++) : (a = e, u(Z)), a === e && (a = null), h = Ve(), h === e && (h = null), n = [n, a, h], t = n) : (r = t, t = e);
    return w = s, s = on(l, o), s;
  }
  function wi() {
    var s, l, o, t, n, a, h, c, g, p, _, $, v;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.substr(r, 5).toLowerCase() === fs ? (o = i.substr(r, 5), r += 5) : (o = e, u(ys)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = Ye(), n !== e) {
        for (a = [], h = f(); h !== e; )
          a.push(h), h = f();
        if (i.charCodeAt(r) === 123 ? (h = Pe, r++) : (h = e, u(Ie)), h !== e) {
          for (c = [], g = f(); g !== e; )
            c.push(g), g = f();
          for (g = Ve(), g === e && (g = null), p = [], _ = f(); _ !== e; )
            p.push(_), _ = f();
          if (i.charCodeAt(r) === 125 ? (_ = Te, r++) : (_ = e, u(Oe)), _ !== e) {
            for ($ = [], v = f(); v !== e; )
              $.push(v), v = f();
            w = s, s = cn(n, g);
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
    var s, l, o, t, n, a, h;
    if (s = r, l = Ci(), l !== e) {
      for (o = r, t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (i.charCodeAt(r) === 46 ? (n = z, r++) : (n = e, u(Z)), n !== e) {
        for (a = [], h = f(); h !== e; )
          a.push(h), h = f();
        h = Ve(), h === e && (h = null), t = [t, n, a, h], o = t;
      } else
        r = o, o = e;
      o === e && (o = null), w = s, s = nn(l, o);
    } else
      r = s, s = e;
    return s;
  }
  function fe() {
    var s, l, o, t, n, a;
    if (s = r, i.charCodeAt(r) === 123 ? (l = Pe, r++) : (l = e, u(Ie)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = hp(), t === e && (t = Fp()), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        i.charCodeAt(r) === 125 ? (a = Te, r++) : (a = e, u(Oe)), a !== e ? (w = s, s = hn(t)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Fp() {
    var s, l, o, t, n, a, h, c, g, p;
    for (s = r, l = Fs(), l === e && (l = null), o = [], t = f(); t !== e; )
      o.push(t), t = f();
    if (t = [], n = r, a = _i(), a !== e) {
      for (h = [], c = f(); c !== e; )
        h.push(c), c = f();
      for (i.charCodeAt(r) === 46 ? (c = z, r++) : (c = e, u(Z)), c === e && (c = null), g = [], p = f(); p !== e; )
        g.push(p), p = f();
      p = Fs(), p === e && (p = null), a = [a, h, c, g, p], n = a;
    } else
      r = n, n = e;
    for (; n !== e; )
      if (t.push(n), n = r, a = _i(), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        for (i.charCodeAt(r) === 46 ? (c = z, r++) : (c = e, u(Z)), c === e && (c = null), g = [], p = f(); p !== e; )
          g.push(p), p = f();
        p = Fs(), p === e && (p = null), a = [a, h, c, g, p], n = a;
      } else
        r = n, n = e;
    return w = s, s = un(l, t), s;
  }
  function Fs() {
    var s, l, o, t, n, a, h;
    if (s = r, l = Yp(), l !== e) {
      for (o = r, t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (i.charCodeAt(r) === 46 ? (n = z, r++) : (n = e, u(Z)), n !== e) {
        for (a = [], h = f(); h !== e; )
          a.push(h), h = f();
        h = Fs(), h === e && (h = null), t = [t, n, a, h], o = t;
      } else
        r = o, o = e;
      o === e && (o = null), w = s, s = pn(l, o);
    } else
      r = s, s = e;
    return s;
  }
  function _i() {
    var s;
    return s = jp(), s === e && (s = xp(), s === e && (s = Mp(), s === e && (s = Dp(), s === e && (s = Gp(), s === e && (s = Xp(), s === e && (s = Up(), s === e && (s = Hp()))))))), s;
  }
  function xp() {
    var s, l, o, t, n;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.substr(r, 8).toLowerCase() === pa ? (o = i.substr(r, 8), r += 8) : (o = e, u(mf)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      n = fe(), n !== e ? (w = s, s = gn(n)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Dp() {
    var s, l, o, t, n, a, h;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.substr(r, 5).toLowerCase() === fs ? (o = i.substr(r, 5), r += 5) : (o = e, u(ys)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = Ye(), n !== e) {
        for (a = [], h = f(); h !== e; )
          a.push(h), h = f();
        h = fe(), h !== e ? (w = s, s = dn(n, h)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Gp() {
    var s, l, o, t, n, a, h, c;
    if (s = r, i.substr(r, 7).toLowerCase() === ga ? (l = i.substr(r, 7), r += 7) : (l = e, u(Af)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (i.substr(r, 6).toLowerCase() === Re ? (t = i.substr(r, 6), r += 6) : (t = e, u(Ne)), t === e && (t = null), n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (a = Ye(), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = fe(), c !== e ? (w = s, s = wn(t, a, c)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Up() {
    var s, l, o, t, n, a, h, c, g, p, _, $, v;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.substr(r, 4).toLowerCase() === da ? (o = i.substr(r, 4), r += 4) : (o = e, u(Cf)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (i.charCodeAt(r) === 40 ? (n = m, r++) : (n = e, u(y)), n !== e) {
        for (a = [], h = f(); h !== e; )
          a.push(h), h = f();
        if (h = C(), h !== e) {
          for (c = [], g = f(); g !== e; )
            c.push(g), g = f();
          if (i.substr(r, 2).toLowerCase() === $e ? (g = i.substr(r, 2), r += 2) : (g = e, u(Cs)), g !== e) {
            for (p = [], _ = f(); _ !== e; )
              p.push(_), _ = f();
            if (_ = Y(), _ !== e) {
              for ($ = [], v = f(); v !== e; )
                $.push(v), v = f();
              i.charCodeAt(r) === 41 ? (v = E, r++) : (v = e, u(P)), v !== e ? (w = s, s = _n(h, _)) : (r = s, s = e);
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
  function Hp() {
    var s, l, o, t, n;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.substr(r, 6).toLowerCase() === rt ? (o = i.substr(r, 6), r += 6) : (o = e, u(yt)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      n = $i(), n !== e ? (w = s, s = $n(n)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function $i() {
    var s;
    return s = kp(), s === e && (s = Bp()), s;
  }
  function kp() {
    var s, l, o, t, n, a, h, c;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (o = Y(), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (i.charCodeAt(r) === 123 ? (n = Pe, r++) : (n = e, u(Ie)), n !== e) {
        for (a = [], h = f(); h !== e; )
          a.push(h), h = f();
        for (h = [], c = xs(); c !== e; )
          h.push(c), c = xs();
        i.charCodeAt(r) === 125 ? (c = Te, r++) : (c = e, u(Oe)), c !== e ? (w = s, s = bn(o, h)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Bp() {
    var s, l, o, t, n, a, h, c, g, p, _;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.charCodeAt(r) === 40 ? (o = m, r++) : (o = e, u(y)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      for (n = [], a = Y(); a !== e; )
        n.push(a), a = Y();
      if (i.charCodeAt(r) === 41 ? (a = E, r++) : (a = e, u(P)), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (i.charCodeAt(r) === 123 ? (c = Pe, r++) : (c = e, u(Ie)), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          for (p = [], _ = bi(); _ !== e; )
            p.push(_), _ = bi();
          i.charCodeAt(r) === 125 ? (_ = Te, r++) : (_ = e, u(Oe)), _ !== e ? (w = s, s = vn(n, p)) : (r = s, s = e);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function bi() {
    var s, l, o, t, n, a, h;
    if (s = r, i.charCodeAt(r) === 40 ? (l = m, r++) : (l = e, u(y)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (t = [], n = xs(); n !== e; )
        t.push(n), n = xs();
      if (i.charCodeAt(r) === 41 ? (n = E, r++) : (n = e, u(P)), n !== e) {
        for (a = [], h = f(); h !== e; )
          a.push(h), h = f();
        w = s, s = mn(t);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function xs() {
    var s, l, o, t;
    if (s = r, l = V(), l === e && (l = Or(), l === e && (l = Nr(), l === e && (l = xr(), l === e && (i.substr(r, 5) === lt ? (l = lt, r += 5) : (l = e, u(Ef)))))), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      w = s, s = An(l);
    } else
      r = s, s = e;
    return s;
  }
  function Mp() {
    var s, l, o, t;
    if (s = r, i.substr(r, 5).toLowerCase() === wa ? (l = i.substr(r, 5), r += 5) : (l = e, u(yf)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = fe(), t !== e ? (w = s, s = Cn(t)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function jp() {
    var s, l, o, t, n, a, h, c;
    if (s = r, l = fe(), l !== e) {
      for (o = [], t = r, n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (i.substr(r, 5).toLowerCase() === ft ? (a = i.substr(r, 5), r += 5) : (a = e, u(Lt)), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = fe(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (i.substr(r, 5).toLowerCase() === ft ? (a = i.substr(r, 5), r += 5) : (a = e, u(Lt)), a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = fe(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
      }
      w = s, s = En(l, o);
    } else
      r = s, s = e;
    return s;
  }
  function Xp() {
    var s, l, o, t, n;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.substr(r, 6).toLowerCase() === _a ? (o = i.substr(r, 6), r += 6) : (o = e, u(Pf)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      n = mr(), n !== e ? (w = s, s = yn(n)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function mr() {
    var s;
    return s = Lr(), s === e && (s = Ir(), s === e && (s = vi())), s;
  }
  function vi() {
    var s, l, o, t;
    if (s = r, l = V(), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = mi(), t !== e ? (w = s, s = Pn(l, t)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function mi() {
    var s, l, o, t, n, a, h, c, g, p, _, $;
    if (s = r, l = xe(), l !== e && (w = s, l = Tn()), s = l, s === e)
      if (s = r, i.charCodeAt(r) === 40 ? (l = m, r++) : (l = e, u(y)), l !== e) {
        for (o = [], t = f(); t !== e; )
          o.push(t), t = f();
        for (i.substr(r, 8).toLowerCase() === O ? (t = i.substr(r, 8), r += 8) : (t = e, u(ve)), t === e && (t = null), n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (a = C(), a !== e) {
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
          i.charCodeAt(r) === 41 ? (g = E, r++) : (g = e, u(P)), g !== e ? (w = s, s = Rn(t, a, c)) : (r = s, s = e);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    return s;
  }
  function We() {
    var s, l, o, t, n, a, h, c, g, p;
    if (s = r, l = xe(), l !== e && (w = s, l = Ln()), s = l, s === e)
      if (s = r, i.charCodeAt(r) === 40 ? (l = m, r++) : (l = e, u(y)), l !== e) {
        for (o = [], t = f(); t !== e; )
          o.push(t), t = f();
        if (t = V(), t === e && (t = C()), t !== e) {
          for (n = [], a = f(); a !== e; )
            n.push(a), a = f();
          if (a = [], h = r, i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
            for (g = [], p = f(); p !== e; )
              g.push(p), p = f();
            p = V(), p === e && (p = C()), p !== e ? (c = [c, g, p], h = c) : (r = h, h = e);
          } else
            r = h, h = e;
          for (; h !== e; )
            if (a.push(h), h = r, i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
              for (g = [], p = f(); p !== e; )
                g.push(p), p = f();
              p = V(), p === e && (p = C()), p !== e ? (c = [c, g, p], h = c) : (r = h, h = e);
            } else
              r = h, h = e;
          i.charCodeAt(r) === 41 ? (h = E, r++) : (h = e, u(P)), h !== e ? (w = s, s = In(t, a)) : (r = s, s = e);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    return s;
  }
  function Vp() {
    var s, l, o, t, n, a;
    if (s = r, i.charCodeAt(r) === 123 ? (l = Pe, r++) : (l = e, u(Ie)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      for (t = Ai(), t === e && (t = null), n = [], a = f(); a !== e; )
        n.push(a), a = f();
      i.charCodeAt(r) === 125 ? (a = Te, r++) : (a = e, u(Oe)), a !== e ? (w = s, s = On(t)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Ai() {
    var s, l, o, t, n, a, h;
    if (s = r, l = Ci(), l !== e) {
      for (o = r, t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (i.charCodeAt(r) === 46 ? (n = z, r++) : (n = e, u(Z)), n !== e) {
        for (a = [], h = f(); h !== e; )
          a.push(h), h = f();
        h = Ai(), h === e && (h = null), t = [t, n, a, h], o = t;
      } else
        r = o, o = e;
      o === e && (o = null), w = s, s = Nn(l, o);
    } else
      r = s, s = e;
    return s;
  }
  function Ci() {
    var s, l, o, t, n;
    if (s = r, l = Us(), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = Ar(), t !== e ? (w = s, s = Sn(l, t)) : (r = s, s = e);
    } else
      r = s, s = e;
    if (s === e) {
      for (s = r, l = [], o = f(); o !== e; )
        l.push(o), o = f();
      if (o = yi(), o !== e) {
        for (t = [], n = f(); n !== e; )
          t.push(n), n = f();
        n = Wp(), w = s, s = Fn(o, n);
      } else
        r = s, s = e;
    }
    return s;
  }
  function Wp() {
    var s;
    return s = Ar(), s === e && (s = null), s;
  }
  function Ar() {
    var s, l, o, t, n, a, h, c, g, p, _, $, v;
    if (s = r, l = Cr(), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = es(), t !== e) {
        for (n = [], a = r, h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (i.charCodeAt(r) === 59 ? (c = Ue, r++) : (c = e, u(ke)), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          if (p = r, _ = Cr(), _ !== e) {
            for ($ = [], v = f(); v !== e; )
              $.push(v), v = f();
            v = es(), v !== e ? (_ = [_, $, v], p = _) : (r = p, p = e);
          } else
            r = p, p = e;
          p === e && (p = null), h = [h, c, g, p], a = h;
        } else
          r = a, a = e;
        for (; a !== e; ) {
          for (n.push(a), a = r, h = [], c = f(); c !== e; )
            h.push(c), c = f();
          if (i.charCodeAt(r) === 59 ? (c = Ue, r++) : (c = e, u(ke)), c !== e) {
            for (g = [], p = f(); p !== e; )
              g.push(p), p = f();
            if (p = r, _ = Cr(), _ !== e) {
              for ($ = [], v = f(); v !== e; )
                $.push(v), v = f();
              v = es(), v !== e ? (_ = [_, $, v], p = _) : (r = p, p = e);
            } else
              r = p, p = e;
            p === e && (p = null), h = [h, c, g, p], a = h;
          } else
            r = a, a = e;
        }
        w = s, s = xn(l, t, n);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Cr() {
    var s, l;
    return s = Ye(), s === e && (s = r, i.charCodeAt(r) === 97 ? (l = os, r++) : (l = e, u(Ps)), l !== e && (w = s, l = Dn()), s = l), s;
  }
  function es() {
    var s, l, o, t, n, a, h, c;
    if (s = r, l = ss(), l !== e) {
      for (o = [], t = r, n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (i.charCodeAt(r) === 44 ? (a = U, r++) : (a = e, u(H)), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = ss(), c !== e ? t = c : (r = t, t = e);
      } else
        r = t, t = e;
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (i.charCodeAt(r) === 44 ? (a = U, r++) : (a = e, u(H)), a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = ss(), c !== e ? t = c : (r = t, t = e);
        } else
          r = t, t = e;
      }
      w = s, s = Gn(l, o);
    } else
      r = s, s = e;
    return s;
  }
  function Yp() {
    var s, l, o, t, n;
    if (s = r, l = Us(), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = Er(), t !== e ? (w = s, s = Un(l, t)) : (r = s, s = e);
    } else
      r = s, s = e;
    if (s === e) {
      for (s = r, l = [], o = f(); o !== e; )
        l.push(o), o = f();
      if (o = Pi(), o !== e) {
        for (t = [], n = f(); n !== e; )
          t.push(n), n = f();
        n = Qp(), w = s, s = Hn(o, n);
      } else
        r = s, s = e;
    }
    return s;
  }
  function Qp() {
    var s;
    return s = Er(), s === e && (s = null), s;
  }
  function Er() {
    var s, l, o, t, n, a, h, c, g, p, _, $, v;
    if (s = r, l = Ds(), l === e && (l = Y()), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = zp(), t !== e) {
        for (n = [], a = r, h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (i.charCodeAt(r) === 59 ? (c = Ue, r++) : (c = e, u(ke)), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          if (p = r, _ = Ds(), _ === e && (_ = Y()), _ !== e) {
            for ($ = [], v = f(); v !== e; )
              $.push(v), v = f();
            v = es(), v !== e ? (_ = [_, $, v], p = _) : (r = p, p = e);
          } else
            r = p, p = e;
          p === e && (p = null), h = [h, c, g, p], a = h;
        } else
          r = a, a = e;
        for (; a !== e; ) {
          for (n.push(a), a = r, h = [], c = f(); c !== e; )
            h.push(c), c = f();
          if (i.charCodeAt(r) === 59 ? (c = Ue, r++) : (c = e, u(ke)), c !== e) {
            for (g = [], p = f(); p !== e; )
              g.push(p), p = f();
            if (p = r, _ = Ds(), _ === e && (_ = Y()), _ !== e) {
              for ($ = [], v = f(); v !== e; )
                $.push(v), v = f();
              v = es(), v !== e ? (_ = [_, $, v], p = _) : (r = p, p = e);
            } else
              r = p, p = e;
            p === e && (p = null), h = [h, c, g, p], a = h;
          } else
            r = a, a = e;
        }
        w = s, s = kn(l, t, n);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function zp() {
    var s, l, o, t, n, a, h, c;
    if (s = r, l = rs(), l !== e) {
      for (o = [], t = r, n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (i.charCodeAt(r) === 44 ? (a = U, r++) : (a = e, u(H)), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = rs(), c !== e ? t = c : (r = t, t = e);
      } else
        r = t, t = e;
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (i.charCodeAt(r) === 44 ? (a = U, r++) : (a = e, u(H)), a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = rs(), c !== e ? t = c : (r = t, t = e);
        } else
          r = t, t = e;
      }
      w = s, s = Bn(l, o);
    } else
      r = s, s = e;
    return s;
  }
  function Ds() {
    var s, l, o, t, n, a, h, c;
    if (s = r, l = yr(), l !== e) {
      for (o = [], t = r, n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (i.charCodeAt(r) === 124 ? (a = cs, r++) : (a = e, u(Ts)), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = yr(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (i.charCodeAt(r) === 124 ? (a = cs, r++) : (a = e, u(Ts)), a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = yr(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
      }
      w = s, s = Mn(l, o);
    } else
      r = s, s = e;
    return s;
  }
  function yr() {
    var s, l, o, t, n, a, h, c;
    if (s = r, l = Pr(), l !== e) {
      for (o = [], t = r, n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (i.charCodeAt(r) === 47 ? (a = be, r++) : (a = e, u(me)), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = Pr(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (i.charCodeAt(r) === 47 ? (a = be, r++) : (a = e, u(me)), a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = Pr(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
      }
      w = s, s = jn(l, o);
    } else
      r = s, s = e;
    return s;
  }
  function Ei() {
    var s, l, o;
    return s = r, l = Kp(), l !== e ? (o = Zp(), o === e && (o = null), w = s, s = Xn(l, o)) : (r = s, s = e), s;
  }
  function Pr() {
    var s, l, o;
    return s = Ei(), s === e && (s = r, i.charCodeAt(r) === 94 ? (l = ot, r++) : (l = e, u(It)), l !== e ? (o = Ei(), o !== e ? (w = s, s = Vn(o)) : (r = s, s = e)) : (r = s, s = e)), s;
  }
  function Zp() {
    var s;
    return i.charCodeAt(r) === 63 ? (s = Ws, r++) : (s = e, u(lr)), s === e && (i.charCodeAt(r) === 42 ? (s = ae, r++) : (s = e, u(le)), s === e && (i.charCodeAt(r) === 43 ? (s = Le, r++) : (s = e, u(Se)))), s;
  }
  function Kp() {
    var s, l, o, t;
    return s = V(), s === e && (s = r, i.charCodeAt(r) === 97 ? (l = os, r++) : (l = e, u(Ps)), l !== e && (w = s, l = Wn()), s = l, s === e && (s = r, i.charCodeAt(r) === 33 ? (l = Ys, r++) : (l = e, u(fr)), l !== e ? (o = Jp(), o !== e ? (l = [l, o], s = l) : (r = s, s = e)) : (r = s, s = e), s === e && (s = r, i.charCodeAt(r) === 40 ? (l = m, r++) : (l = e, u(y)), l !== e ? (o = Ds(), o !== e ? (i.charCodeAt(r) === 41 ? (t = E, r++) : (t = e, u(P)), t !== e ? (w = s, s = Yn(o)) : (r = s, s = e)) : (r = s, s = e)) : (r = s, s = e)))), s;
  }
  function Jp() {
    var s, l, o, t, n, a, h, c;
    if (s = Gs(), s === e)
      if (s = r, i.charCodeAt(r) === 40 ? (l = m, r++) : (l = e, u(y)), l !== e) {
        if (o = r, t = Gs(), t !== e) {
          for (n = [], a = r, i.charCodeAt(r) === 124 ? (h = cs, r++) : (h = e, u(Ts)), h !== e ? (c = Gs(), c !== e ? (h = [h, c], a = h) : (r = a, a = e)) : (r = a, a = e); a !== e; )
            n.push(a), a = r, i.charCodeAt(r) === 124 ? (h = cs, r++) : (h = e, u(Ts)), h !== e ? (c = Gs(), c !== e ? (h = [h, c], a = h) : (r = a, a = e)) : (r = a, a = e);
          t = [t, n], o = t;
        } else
          r = o, o = e;
        o === e && (o = null), i.charCodeAt(r) === 41 ? (t = E, r++) : (t = e, u(P)), t !== e ? (l = [l, o, t], s = l) : (r = s, s = e);
      } else
        r = s, s = e;
    return s;
  }
  function Gs() {
    var s, l, o;
    return s = V(), s === e && (i.charCodeAt(r) === 97 ? (s = os, r++) : (s = e, u(Ps)), s === e && (s = r, i.charCodeAt(r) === 94 ? (l = ot, r++) : (l = e, u(It)), l !== e ? (o = V(), o === e && (i.charCodeAt(r) === 97 ? (o = os, r++) : (o = e, u(Ps))), o !== e ? (l = [l, o], s = l) : (r = s, s = e)) : (r = s, s = e))), s;
  }
  function yi() {
    var s, l;
    return s = r, l = sg(), l !== e && (w = s, l = Qn(l)), s = l, s === e && (s = qp()), s;
  }
  function qp() {
    var s, l, o, t, n, a, h, c, g;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.charCodeAt(r) === 91 ? (o = Qs, r++) : (o = e, u(or)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = Ar(), n !== e) {
        for (a = [], h = f(); h !== e; )
          a.push(h), h = f();
        if (i.charCodeAt(r) === 93 ? (h = zs, r++) : (h = e, u(cr)), h !== e) {
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
  function Pi() {
    var s, l;
    return s = r, l = rg(), l !== e && (w = s, l = Zn(l)), s = l, s === e && (s = eg()), s;
  }
  function eg() {
    var s, l, o, t, n, a, h, c, g;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.charCodeAt(r) === 91 ? (o = Qs, r++) : (o = e, u(or)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = Er(), n !== e) {
        for (a = [], h = f(); h !== e; )
          a.push(h), h = f();
        if (i.charCodeAt(r) === 93 ? (h = zs, r++) : (h = e, u(cr)), h !== e) {
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
    var s, l, o, t, n, a, h, c, g;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.charCodeAt(r) === 40 ? (o = m, r++) : (o = e, u(y)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = [], a = ss(), a !== e)
        for (; a !== e; )
          n.push(a), a = ss();
      else
        n = e;
      if (n !== e) {
        for (a = [], h = f(); h !== e; )
          a.push(h), h = f();
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
  function rg() {
    var s, l, o, t, n, a, h, c, g;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (i.charCodeAt(r) === 40 ? (o = m, r++) : (o = e, u(y)), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      if (n = [], a = rs(), a !== e)
        for (; a !== e; )
          n.push(a), a = rs();
      else
        n = e;
      if (n !== e) {
        for (a = [], h = f(); h !== e; )
          a.push(h), h = f();
        if (i.charCodeAt(r) === 41 ? (h = E, r++) : (h = e, u(P)), h !== e) {
          for (c = [], g = f(); g !== e; )
            c.push(g), g = f();
          w = s, s = qn(n);
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function ss() {
    var s, l, o;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    return o = Us(), o === e && (o = yi()), o !== e ? (w = s, s = eh(o)) : (r = s, s = e), s;
  }
  function rs() {
    var s, l, o;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    return o = Us(), o === e && (o = Pi()), o !== e ? (w = s, s = sh(o)) : (r = s, s = e), s;
  }
  function Us() {
    var s;
    return s = Y(), s === e && (s = tg()), s;
  }
  function Ye() {
    var s;
    return s = Y(), s === e && (s = V()), s;
  }
  function Y() {
    var s, l, o, t, n;
    for (s = r, l = [], o = f(); o !== e; )
      l.push(o), o = f();
    if (o = wg(), o === e && (o = _g()), o !== e) {
      for (t = [], n = f(); n !== e; )
        t.push(n), n = f();
      w = s, s = rh(o);
    } else
      r = s, s = e;
    return s;
  }
  function tg() {
    var s;
    return s = V(), s === e && (s = Or(), s === e && (s = Nr(), s === e && (s = xr(), s === e && (s = pg(), s === e && (s = xe()))))), s;
  }
  function C() {
    var s, l, o, t, n, a, h, c;
    if (s = r, l = Tr(), l !== e) {
      for (o = [], t = r, n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (i.substr(r, 2) === ns ? (a = ns, r += 2) : (a = e, u(Ot)), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = Tr(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (i.substr(r, 2) === ns ? (a = ns, r += 2) : (a = e, u(Ot)), a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = Tr(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
      }
      w = s, s = th(l, o);
    } else
      r = s, s = e;
    return s;
  }
  function Tr() {
    var s, l, o, t, n, a, h, c;
    if (s = r, l = Rr(), l !== e) {
      for (o = [], t = r, n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (i.substr(r, 2) === hs ? (a = hs, r += 2) : (a = e, u(Nt)), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = Rr(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (i.substr(r, 2) === hs ? (a = hs, r += 2) : (a = e, u(Nt)), a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = Rr(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
      }
      w = s, s = ih(l, o);
    } else
      r = s, s = e;
    return s;
  }
  function Rr() {
    var s, l, o, t, n, a, h, c, g, p;
    if (s = r, l = q(), l !== e) {
      for (o = [], t = r, n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (i.charCodeAt(r) === 61 ? (a = us, r++) : (a = e, u(Rs)), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = q(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      if (t === e) {
        for (t = r, n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (i.substr(r, 2) === ps ? (a = ps, r += 2) : (a = e, u(St)), a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = q(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
        if (t === e) {
          for (t = r, n = [], a = f(); a !== e; )
            n.push(a), a = f();
          if (i.charCodeAt(r) === 60 ? (a = Zs, r++) : (a = e, u(nr)), a !== e) {
            for (h = [], c = f(); c !== e; )
              h.push(c), c = f();
            c = q(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
          } else
            r = t, t = e;
          if (t === e) {
            for (t = r, n = [], a = f(); a !== e; )
              n.push(a), a = f();
            if (i.charCodeAt(r) === 62 ? (a = Ks, r++) : (a = e, u(hr)), a !== e) {
              for (h = [], c = f(); c !== e; )
                h.push(c), c = f();
              c = q(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
            } else
              r = t, t = e;
            if (t === e) {
              for (t = r, n = [], a = f(); a !== e; )
                n.push(a), a = f();
              if (i.substr(r, 2) === gs ? (a = gs, r += 2) : (a = e, u(Ft)), a !== e) {
                for (h = [], c = f(); c !== e; )
                  h.push(c), c = f();
                c = q(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
              } else
                r = t, t = e;
              if (t === e) {
                for (t = r, n = [], a = f(); a !== e; )
                  n.push(a), a = f();
                if (i.substr(r, 2) === ds ? (a = ds, r += 2) : (a = e, u(xt)), a !== e) {
                  for (h = [], c = f(); c !== e; )
                    h.push(c), c = f();
                  c = q(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
                } else
                  r = t, t = e;
                if (t === e) {
                  for (t = r, n = [], a = f(); a !== e; )
                    n.push(a), a = f();
                  if (i.substr(r, 2).toLowerCase() === ws ? (a = i.substr(r, 2), r += 2) : (a = e, u(Ls)), a !== e) {
                    for (h = [], c = f(); c !== e; )
                      h.push(c), c = f();
                    c = We(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
                  } else
                    r = t, t = e;
                  if (t === e) {
                    for (t = r, n = [], a = f(); a !== e; )
                      n.push(a), a = f();
                    if (i.substr(r, 3).toLowerCase() === Js ? (a = i.substr(r, 3), r += 3) : (a = e, u(ur)), a !== e) {
                      for (h = [], c = f(); c !== e; )
                        h.push(c), c = f();
                      if (i.substr(r, 2).toLowerCase() === ws ? (c = i.substr(r, 2), r += 2) : (c = e, u(Ls)), c !== e) {
                        for (g = [], p = f(); p !== e; )
                          g.push(p), p = f();
                        p = We(), p !== e ? (n = [n, a, h, c, g, p], t = n) : (r = t, t = e);
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
        for (o.push(t), t = r, n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (i.charCodeAt(r) === 61 ? (a = us, r++) : (a = e, u(Rs)), a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = q(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
        if (t === e) {
          for (t = r, n = [], a = f(); a !== e; )
            n.push(a), a = f();
          if (i.substr(r, 2) === ps ? (a = ps, r += 2) : (a = e, u(St)), a !== e) {
            for (h = [], c = f(); c !== e; )
              h.push(c), c = f();
            c = q(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
          } else
            r = t, t = e;
          if (t === e) {
            for (t = r, n = [], a = f(); a !== e; )
              n.push(a), a = f();
            if (i.charCodeAt(r) === 60 ? (a = Zs, r++) : (a = e, u(nr)), a !== e) {
              for (h = [], c = f(); c !== e; )
                h.push(c), c = f();
              c = q(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
            } else
              r = t, t = e;
            if (t === e) {
              for (t = r, n = [], a = f(); a !== e; )
                n.push(a), a = f();
              if (i.charCodeAt(r) === 62 ? (a = Ks, r++) : (a = e, u(hr)), a !== e) {
                for (h = [], c = f(); c !== e; )
                  h.push(c), c = f();
                c = q(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
              } else
                r = t, t = e;
              if (t === e) {
                for (t = r, n = [], a = f(); a !== e; )
                  n.push(a), a = f();
                if (i.substr(r, 2) === gs ? (a = gs, r += 2) : (a = e, u(Ft)), a !== e) {
                  for (h = [], c = f(); c !== e; )
                    h.push(c), c = f();
                  c = q(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
                } else
                  r = t, t = e;
                if (t === e) {
                  for (t = r, n = [], a = f(); a !== e; )
                    n.push(a), a = f();
                  if (i.substr(r, 2) === ds ? (a = ds, r += 2) : (a = e, u(xt)), a !== e) {
                    for (h = [], c = f(); c !== e; )
                      h.push(c), c = f();
                    c = q(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
                  } else
                    r = t, t = e;
                  if (t === e) {
                    for (t = r, n = [], a = f(); a !== e; )
                      n.push(a), a = f();
                    if (i.substr(r, 2).toLowerCase() === ws ? (a = i.substr(r, 2), r += 2) : (a = e, u(Ls)), a !== e) {
                      for (h = [], c = f(); c !== e; )
                        h.push(c), c = f();
                      c = We(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
                    } else
                      r = t, t = e;
                    if (t === e) {
                      for (t = r, n = [], a = f(); a !== e; )
                        n.push(a), a = f();
                      if (i.substr(r, 3).toLowerCase() === Js ? (a = i.substr(r, 3), r += 3) : (a = e, u(ur)), a !== e) {
                        for (h = [], c = f(); c !== e; )
                          h.push(c), c = f();
                        if (i.substr(r, 2).toLowerCase() === ws ? (c = i.substr(r, 2), r += 2) : (c = e, u(Ls)), c !== e) {
                          for (g = [], p = f(); p !== e; )
                            g.push(p), p = f();
                          p = We(), p !== e ? (n = [n, a, h, c, g, p], t = n) : (r = t, t = e);
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
      w = s, s = ah(l, o);
    } else
      r = s, s = e;
    return s;
  }
  function q() {
    var s, l, o, t, n, a, h, c, g, p, _;
    if (s = r, l = ts(), l !== e) {
      for (o = [], t = r, n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (i.charCodeAt(r) === 43 ? (a = Le, r++) : (a = e, u(Se)), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = ts(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      if (t === e) {
        for (t = r, n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (i.charCodeAt(r) === 45 ? (a = he, r++) : (a = e, u(ue)), a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = ts(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
        if (t === e)
          if (t = r, n = Sr(), n === e && (n = Fr()), n !== e) {
            for (a = [], h = r, c = [], g = f(); g !== e; )
              c.push(g), g = f();
            if (i.charCodeAt(r) === 42 ? (g = ae, r++) : (g = e, u(le)), g !== e) {
              for (p = [], _ = f(); _ !== e; )
                p.push(_), _ = f();
              _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
            } else
              r = h, h = e;
            if (h === e) {
              for (h = r, c = [], g = f(); g !== e; )
                c.push(g), g = f();
              if (i.charCodeAt(r) === 47 ? (g = be, r++) : (g = e, u(me)), g !== e) {
                for (p = [], _ = f(); _ !== e; )
                  p.push(_), _ = f();
                _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
              } else
                r = h, h = e;
            }
            for (; h !== e; ) {
              for (a.push(h), h = r, c = [], g = f(); g !== e; )
                c.push(g), g = f();
              if (i.charCodeAt(r) === 42 ? (g = ae, r++) : (g = e, u(le)), g !== e) {
                for (p = [], _ = f(); _ !== e; )
                  p.push(_), _ = f();
                _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
              } else
                r = h, h = e;
              if (h === e) {
                for (h = r, c = [], g = f(); g !== e; )
                  c.push(g), g = f();
                if (i.charCodeAt(r) === 47 ? (g = be, r++) : (g = e, u(me)), g !== e) {
                  for (p = [], _ = f(); _ !== e; )
                    p.push(_), _ = f();
                  _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
                } else
                  r = h, h = e;
              }
            }
            n = [n, a], t = n;
          } else
            r = t, t = e;
      }
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (i.charCodeAt(r) === 43 ? (a = Le, r++) : (a = e, u(Se)), a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = ts(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
        if (t === e) {
          for (t = r, n = [], a = f(); a !== e; )
            n.push(a), a = f();
          if (i.charCodeAt(r) === 45 ? (a = he, r++) : (a = e, u(ue)), a !== e) {
            for (h = [], c = f(); c !== e; )
              h.push(c), c = f();
            c = ts(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
          } else
            r = t, t = e;
          if (t === e)
            if (t = r, n = Sr(), n === e && (n = Fr()), n !== e) {
              for (a = [], h = r, c = [], g = f(); g !== e; )
                c.push(g), g = f();
              if (i.charCodeAt(r) === 42 ? (g = ae, r++) : (g = e, u(le)), g !== e) {
                for (p = [], _ = f(); _ !== e; )
                  p.push(_), _ = f();
                _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
              } else
                r = h, h = e;
              if (h === e) {
                for (h = r, c = [], g = f(); g !== e; )
                  c.push(g), g = f();
                if (i.charCodeAt(r) === 47 ? (g = be, r++) : (g = e, u(me)), g !== e) {
                  for (p = [], _ = f(); _ !== e; )
                    p.push(_), _ = f();
                  _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
                } else
                  r = h, h = e;
              }
              for (; h !== e; ) {
                for (a.push(h), h = r, c = [], g = f(); g !== e; )
                  c.push(g), g = f();
                if (i.charCodeAt(r) === 42 ? (g = ae, r++) : (g = e, u(le)), g !== e) {
                  for (p = [], _ = f(); _ !== e; )
                    p.push(_), _ = f();
                  _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
                } else
                  r = h, h = e;
                if (h === e) {
                  for (h = r, c = [], g = f(); g !== e; )
                    c.push(g), g = f();
                  if (i.charCodeAt(r) === 47 ? (g = be, r++) : (g = e, u(me)), g !== e) {
                    for (p = [], _ = f(); _ !== e; )
                      p.push(_), _ = f();
                    _ = ee(), _ !== e ? (c = [c, g, p, _], h = c) : (r = h, h = e);
                  } else
                    r = h, h = e;
                }
              }
              n = [n, a], t = n;
            } else
              r = t, t = e;
        }
      }
      w = s, s = lh(l, o);
    } else
      r = s, s = e;
    return s;
  }
  function ts() {
    var s, l, o, t, n, a, h, c;
    if (s = r, l = ee(), l !== e) {
      for (o = [], t = r, n = [], a = f(); a !== e; )
        n.push(a), a = f();
      if (i.charCodeAt(r) === 42 ? (a = ae, r++) : (a = e, u(le)), a !== e) {
        for (h = [], c = f(); c !== e; )
          h.push(c), c = f();
        c = ee(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
      } else
        r = t, t = e;
      if (t === e) {
        for (t = r, n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (i.charCodeAt(r) === 47 ? (a = be, r++) : (a = e, u(me)), a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = ee(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
      }
      for (; t !== e; ) {
        for (o.push(t), t = r, n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (i.charCodeAt(r) === 42 ? (a = ae, r++) : (a = e, u(le)), a !== e) {
          for (h = [], c = f(); c !== e; )
            h.push(c), c = f();
          c = ee(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
        } else
          r = t, t = e;
        if (t === e) {
          for (t = r, n = [], a = f(); a !== e; )
            n.push(a), a = f();
          if (i.charCodeAt(r) === 47 ? (a = be, r++) : (a = e, u(me)), a !== e) {
            for (h = [], c = f(); c !== e; )
              h.push(c), c = f();
            c = ee(), c !== e ? (n = [n, a, h, c], t = n) : (r = t, t = e);
          } else
            r = t, t = e;
        }
      }
      w = s, s = fh(l, o);
    } else
      r = s, s = e;
    return s;
  }
  function ee() {
    var s, l, o, t;
    if (s = r, i.charCodeAt(r) === 33 ? (l = Ys, r++) : (l = e, u(fr)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = Hs(), t !== e ? (w = s, s = oh(t)) : (r = s, s = e);
    } else
      r = s, s = e;
    if (s === e) {
      if (s = r, i.charCodeAt(r) === 43 ? (l = Le, r++) : (l = e, u(Se)), l !== e) {
        for (o = [], t = f(); t !== e; )
          o.push(t), t = f();
        t = Hs(), t !== e ? (w = s, s = ch(t)) : (r = s, s = e);
      } else
        r = s, s = e;
      if (s === e) {
        if (s = r, i.charCodeAt(r) === 45 ? (l = he, r++) : (l = e, u(ue)), l !== e) {
          for (o = [], t = f(); t !== e; )
            o.push(t), t = f();
          t = Hs(), t !== e ? (w = s, s = nh(t)) : (r = s, s = e);
        } else
          r = s, s = e;
        s === e && (s = Hs());
      }
    }
    return s;
  }
  function Hs() {
    var s, l;
    return s = Lr(), s === e && (s = Ir(), s === e && (s = ng(), s === e && (s = r, l = Or(), l !== e && (w = s, l = hh(l)), s = l, s === e && (s = r, l = Nr(), l !== e && (w = s, l = uh(l)), s = l, s === e && (s = r, l = xr(), l !== e && (w = s, l = ph(l)), s = l, s === e && (s = r, l = Y(), l !== e && (w = s, l = gh(l)), s = l)))))), s;
  }
  function Lr() {
    var s, l, o, t, n, a;
    if (s = r, i.charCodeAt(r) === 40 ? (l = m, r++) : (l = e, u(y)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (t = C(), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        i.charCodeAt(r) === 41 ? (a = E, r++) : (a = e, u(P)), a !== e ? (w = s, s = dh(t)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function Ir() {
    var s, l, o, t, n, a, h, c, g, p, _, $, v, T, I, x;
    if (s = cg(), s === e) {
      if (s = r, i.substr(r, 3).toLowerCase() === $a ? (l = i.substr(r, 3), r += 3) : (l = e, u(Tf)), l !== e) {
        for (o = [], t = f(); t !== e; )
          o.push(t), t = f();
        if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
          for (n = [], a = f(); a !== e; )
            n.push(a), a = f();
          if (a = C(), a !== e) {
            for (h = [], c = f(); c !== e; )
              h.push(c), c = f();
            i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = wh(a)) : (r = s, s = e);
          } else
            r = s, s = e;
        } else
          r = s, s = e;
      } else
        r = s, s = e;
      if (s === e) {
        if (s = r, i.substr(r, 4).toLowerCase() === ba ? (l = i.substr(r, 4), r += 4) : (l = e, u(Rf)), l !== e) {
          for (o = [], t = f(); t !== e; )
            o.push(t), t = f();
          if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
            for (n = [], a = f(); a !== e; )
              n.push(a), a = f();
            if (a = C(), a !== e) {
              for (h = [], c = f(); c !== e; )
                h.push(c), c = f();
              i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = _h(a)) : (r = s, s = e);
            } else
              r = s, s = e;
          } else
            r = s, s = e;
        } else
          r = s, s = e;
        if (s === e) {
          if (s = r, i.substr(r, 11).toLowerCase() === va ? (l = i.substr(r, 11), r += 11) : (l = e, u(Lf)), l !== e) {
            for (o = [], t = f(); t !== e; )
              o.push(t), t = f();
            if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
              for (n = [], a = f(); a !== e; )
                n.push(a), a = f();
              if (a = C(), a !== e) {
                for (h = [], c = f(); c !== e; )
                  h.push(c), c = f();
                if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                  for (g = [], p = f(); p !== e; )
                    g.push(p), p = f();
                  if (p = C(), p !== e) {
                    for (_ = [], $ = f(); $ !== e; )
                      _.push($), $ = f();
                    i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = $h(a, p)) : (r = s, s = e);
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
            if (s = r, i.substr(r, 8).toLowerCase() === ma ? (l = i.substr(r, 8), r += 8) : (l = e, u(If)), l !== e) {
              for (o = [], t = f(); t !== e; )
                o.push(t), t = f();
              if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                for (n = [], a = f(); a !== e; )
                  n.push(a), a = f();
                if (a = C(), a !== e) {
                  for (h = [], c = f(); c !== e; )
                    h.push(c), c = f();
                  i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = bh(a)) : (r = s, s = e);
                } else
                  r = s, s = e;
              } else
                r = s, s = e;
            } else
              r = s, s = e;
            if (s === e) {
              if (s = r, i.substr(r, 5).toLowerCase() === Aa ? (l = i.substr(r, 5), r += 5) : (l = e, u(Of)), l !== e) {
                for (o = [], t = f(); t !== e; )
                  o.push(t), t = f();
                if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                  for (n = [], a = f(); a !== e; )
                    n.push(a), a = f();
                  if (a = Y(), a !== e) {
                    for (h = [], c = f(); c !== e; )
                      h.push(c), c = f();
                    i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = vh(a)) : (r = s, s = e);
                  } else
                    r = s, s = e;
                } else
                  r = s, s = e;
              } else
                r = s, s = e;
              if (s === e) {
                if (s = r, i.substr(r, 3).toLowerCase() === Ca ? (l = i.substr(r, 3), r += 3) : (l = e, u(Nf)), l !== e) {
                  for (o = [], t = f(); t !== e; )
                    o.push(t), t = f();
                  if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                    for (n = [], a = f(); a !== e; )
                      n.push(a), a = f();
                    if (a = C(), a !== e) {
                      for (h = [], c = f(); c !== e; )
                        h.push(c), c = f();
                      i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = mh(a)) : (r = s, s = e);
                    } else
                      r = s, s = e;
                  } else
                    r = s, s = e;
                } else
                  r = s, s = e;
                if (s === e) {
                  if (s = r, i.substr(r, 3).toLowerCase() === Ea ? (l = i.substr(r, 3), r += 3) : (l = e, u(Sf)), l !== e) {
                    for (o = [], t = f(); t !== e; )
                      o.push(t), t = f();
                    if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                      for (n = [], a = f(); a !== e; )
                        n.push(a), a = f();
                      if (a = C(), a !== e) {
                        for (h = [], c = f(); c !== e; )
                          h.push(c), c = f();
                        i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Ah(a)) : (r = s, s = e);
                      } else
                        r = s, s = e;
                    } else
                      r = s, s = e;
                  } else
                    r = s, s = e;
                  if (s === e) {
                    if (s = r, i.substr(r, 5).toLowerCase() === ya ? (l = i.substr(r, 5), r += 5) : (l = e, u(Ff)), l !== e) {
                      for (o = [], t = f(); t !== e; )
                        o.push(t), t = f();
                      if (t = r, i.charCodeAt(r) === 40 ? (n = m, r++) : (n = e, u(y)), n !== e) {
                        for (a = [], h = f(); h !== e; )
                          a.push(h), h = f();
                        if (h = C(), h !== e) {
                          for (c = [], g = f(); g !== e; )
                            c.push(g), g = f();
                          i.charCodeAt(r) === 41 ? (g = E, r++) : (g = e, u(P)), g !== e ? (n = [n, a, h, c, g], t = n) : (r = t, t = e);
                        } else
                          r = t, t = e;
                      } else
                        r = t, t = e;
                      t === e && (t = xe()), t !== e ? (w = s, s = Ch(t)) : (r = s, s = e);
                    } else
                      r = s, s = e;
                    if (s === e) {
                      if (s = r, i.substr(r, 4).toLowerCase() === Pa ? (l = i.substr(r, 4), r += 4) : (l = e, u(xf)), l !== e) {
                        for (o = [], t = f(); t !== e; )
                          o.push(t), t = f();
                        t = xe(), t !== e ? (w = s, s = Eh()) : (r = s, s = e);
                      } else
                        r = s, s = e;
                      if (s === e) {
                        if (s = r, i.substr(r, 3).toLowerCase() === Ta ? (l = i.substr(r, 3), r += 3) : (l = e, u(Df)), l !== e) {
                          for (o = [], t = f(); t !== e; )
                            o.push(t), t = f();
                          if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                            for (n = [], a = f(); a !== e; )
                              n.push(a), a = f();
                            if (a = C(), a !== e) {
                              for (h = [], c = f(); c !== e; )
                                h.push(c), c = f();
                              i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = yh(a)) : (r = s, s = e);
                            } else
                              r = s, s = e;
                          } else
                            r = s, s = e;
                        } else
                          r = s, s = e;
                        if (s === e) {
                          if (s = r, i.substr(r, 4).toLowerCase() === Ra ? (l = i.substr(r, 4), r += 4) : (l = e, u(Gf)), l !== e) {
                            for (o = [], t = f(); t !== e; )
                              o.push(t), t = f();
                            if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                              for (n = [], a = f(); a !== e; )
                                n.push(a), a = f();
                              if (a = C(), a !== e) {
                                for (h = [], c = f(); c !== e; )
                                  h.push(c), c = f();
                                i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Ph(a)) : (r = s, s = e);
                              } else
                                r = s, s = e;
                            } else
                              r = s, s = e;
                          } else
                            r = s, s = e;
                          if (s === e) {
                            if (s = r, i.substr(r, 5).toLowerCase() === La ? (l = i.substr(r, 5), r += 5) : (l = e, u(Uf)), l !== e) {
                              for (o = [], t = f(); t !== e; )
                                o.push(t), t = f();
                              if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                for (n = [], a = f(); a !== e; )
                                  n.push(a), a = f();
                                if (a = C(), a !== e) {
                                  for (h = [], c = f(); c !== e; )
                                    h.push(c), c = f();
                                  i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Th(a)) : (r = s, s = e);
                                } else
                                  r = s, s = e;
                              } else
                                r = s, s = e;
                            } else
                              r = s, s = e;
                            if (s === e) {
                              if (s = r, i.substr(r, 5).toLowerCase() === Ia ? (l = i.substr(r, 5), r += 5) : (l = e, u(Hf)), l !== e) {
                                for (o = [], t = f(); t !== e; )
                                  o.push(t), t = f();
                                if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                  for (n = [], a = f(); a !== e; )
                                    n.push(a), a = f();
                                  if (a = C(), a !== e) {
                                    for (h = [], c = f(); c !== e; )
                                      h.push(c), c = f();
                                    i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Rh(a)) : (r = s, s = e);
                                  } else
                                    r = s, s = e;
                                } else
                                  r = s, s = e;
                              } else
                                r = s, s = e;
                              if (s === e) {
                                if (s = r, i.substr(r, 6).toLowerCase() === Oa ? (l = i.substr(r, 6), r += 6) : (l = e, u(kf)), l !== e) {
                                  for (o = [], t = f(); t !== e; )
                                    o.push(t), t = f();
                                  t = We(), t !== e ? (w = s, s = Lh(t)) : (r = s, s = e);
                                } else
                                  r = s, s = e;
                                if (s === e && (s = ag(), s === e)) {
                                  if (s = r, i.substr(r, 6).toLowerCase() === Na ? (l = i.substr(r, 6), r += 6) : (l = e, u(Bf)), l !== e) {
                                    for (o = [], t = f(); t !== e; )
                                      o.push(t), t = f();
                                    if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                      for (n = [], a = f(); a !== e; )
                                        n.push(a), a = f();
                                      if (a = C(), a !== e) {
                                        for (h = [], c = f(); c !== e; )
                                          h.push(c), c = f();
                                        i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Ih(a)) : (r = s, s = e);
                                      } else
                                        r = s, s = e;
                                    } else
                                      r = s, s = e;
                                  } else
                                    r = s, s = e;
                                  if (s === e && (s = lg(), s === e)) {
                                    if (s = r, i.substr(r, 5).toLowerCase() === Sa ? (l = i.substr(r, 5), r += 5) : (l = e, u(Mf)), l !== e) {
                                      for (o = [], t = f(); t !== e; )
                                        o.push(t), t = f();
                                      if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                        for (n = [], a = f(); a !== e; )
                                          n.push(a), a = f();
                                        if (a = C(), a !== e) {
                                          for (h = [], c = f(); c !== e; )
                                            h.push(c), c = f();
                                          i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Oh(a)) : (r = s, s = e);
                                        } else
                                          r = s, s = e;
                                      } else
                                        r = s, s = e;
                                    } else
                                      r = s, s = e;
                                    if (s === e) {
                                      if (s = r, i.substr(r, 5).toLowerCase() === Fa ? (l = i.substr(r, 5), r += 5) : (l = e, u(jf)), l !== e) {
                                        for (o = [], t = f(); t !== e; )
                                          o.push(t), t = f();
                                        if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                          for (n = [], a = f(); a !== e; )
                                            n.push(a), a = f();
                                          if (a = C(), a !== e) {
                                            for (h = [], c = f(); c !== e; )
                                              h.push(c), c = f();
                                            i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Nh(a)) : (r = s, s = e);
                                          } else
                                            r = s, s = e;
                                        } else
                                          r = s, s = e;
                                      } else
                                        r = s, s = e;
                                      if (s === e) {
                                        if (s = r, i.substr(r, 14).toLowerCase() === xa ? (l = i.substr(r, 14), r += 14) : (l = e, u(Xf)), l !== e) {
                                          for (o = [], t = f(); t !== e; )
                                            o.push(t), t = f();
                                          if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                            for (n = [], a = f(); a !== e; )
                                              n.push(a), a = f();
                                            if (a = C(), a !== e) {
                                              for (h = [], c = f(); c !== e; )
                                                h.push(c), c = f();
                                              i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Sh(a)) : (r = s, s = e);
                                            } else
                                              r = s, s = e;
                                          } else
                                            r = s, s = e;
                                        } else
                                          r = s, s = e;
                                        if (s === e) {
                                          if (s = r, i.substr(r, 8).toLowerCase() === Da ? (l = i.substr(r, 8), r += 8) : (l = e, u(Vf)), l !== e) {
                                            for (o = [], t = f(); t !== e; )
                                              o.push(t), t = f();
                                            if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                              for (n = [], a = f(); a !== e; )
                                                n.push(a), a = f();
                                              if (a = C(), a !== e) {
                                                for (h = [], c = f(); c !== e; )
                                                  h.push(c), c = f();
                                                if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                  for (g = [], p = f(); p !== e; )
                                                    g.push(p), p = f();
                                                  if (p = C(), p !== e) {
                                                    for (_ = [], $ = f(); $ !== e; )
                                                      _.push($), $ = f();
                                                    i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = Fh(a, p)) : (r = s, s = e);
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
                                            if (s = r, i.substr(r, 9).toLowerCase() === Ga ? (l = i.substr(r, 9), r += 9) : (l = e, u(Wf)), l !== e) {
                                              for (o = [], t = f(); t !== e; )
                                                o.push(t), t = f();
                                              if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                for (n = [], a = f(); a !== e; )
                                                  n.push(a), a = f();
                                                if (a = C(), a !== e) {
                                                  for (h = [], c = f(); c !== e; )
                                                    h.push(c), c = f();
                                                  if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                    for (g = [], p = f(); p !== e; )
                                                      g.push(p), p = f();
                                                    if (p = C(), p !== e) {
                                                      for (_ = [], $ = f(); $ !== e; )
                                                        _.push($), $ = f();
                                                      i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = xh(a, p)) : (r = s, s = e);
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
                                              if (s = r, i.substr(r, 9).toLowerCase() === Ua ? (l = i.substr(r, 9), r += 9) : (l = e, u(Yf)), l !== e) {
                                                for (o = [], t = f(); t !== e; )
                                                  o.push(t), t = f();
                                                if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                  for (n = [], a = f(); a !== e; )
                                                    n.push(a), a = f();
                                                  if (a = C(), a !== e) {
                                                    for (h = [], c = f(); c !== e; )
                                                      h.push(c), c = f();
                                                    if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                      for (g = [], p = f(); p !== e; )
                                                        g.push(p), p = f();
                                                      if (p = C(), p !== e) {
                                                        for (_ = [], $ = f(); $ !== e; )
                                                          _.push($), $ = f();
                                                        i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = Dh(a, p)) : (r = s, s = e);
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
                                                if (s = r, i.substr(r, 7).toLowerCase() === Ha ? (l = i.substr(r, 7), r += 7) : (l = e, u(Qf)), l !== e) {
                                                  for (o = [], t = f(); t !== e; )
                                                    o.push(t), t = f();
                                                  if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                    for (n = [], a = f(); a !== e; )
                                                      n.push(a), a = f();
                                                    if (a = C(), a !== e) {
                                                      for (h = [], c = f(); c !== e; )
                                                        h.push(c), c = f();
                                                      if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                        for (g = [], p = f(); p !== e; )
                                                          g.push(p), p = f();
                                                        if (p = C(), p !== e) {
                                                          for (_ = [], $ = f(); $ !== e; )
                                                            _.push($), $ = f();
                                                          i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = Gh(a, p)) : (r = s, s = e);
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
                                                  if (s = r, i.substr(r, 8).toLowerCase() === ka ? (l = i.substr(r, 8), r += 8) : (l = e, u(zf)), l !== e) {
                                                    for (o = [], t = f(); t !== e; )
                                                      o.push(t), t = f();
                                                    if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                      for (n = [], a = f(); a !== e; )
                                                        n.push(a), a = f();
                                                      if (a = C(), a !== e) {
                                                        for (h = [], c = f(); c !== e; )
                                                          h.push(c), c = f();
                                                        if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                          for (g = [], p = f(); p !== e; )
                                                            g.push(p), p = f();
                                                          if (p = C(), p !== e) {
                                                            for (_ = [], $ = f(); $ !== e; )
                                                              _.push($), $ = f();
                                                            i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = Uh(a, p)) : (r = s, s = e);
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
                                                    if (s = r, i.substr(r, 4).toLowerCase() === Ba ? (l = i.substr(r, 4), r += 4) : (l = e, u(Zf)), l !== e) {
                                                      for (o = [], t = f(); t !== e; )
                                                        o.push(t), t = f();
                                                      if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                        for (n = [], a = f(); a !== e; )
                                                          n.push(a), a = f();
                                                        if (a = C(), a !== e) {
                                                          for (h = [], c = f(); c !== e; )
                                                            h.push(c), c = f();
                                                          i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Hh(a)) : (r = s, s = e);
                                                        } else
                                                          r = s, s = e;
                                                      } else
                                                        r = s, s = e;
                                                    } else
                                                      r = s, s = e;
                                                    if (s === e) {
                                                      if (s = r, i.substr(r, 5).toLowerCase() === Ma ? (l = i.substr(r, 5), r += 5) : (l = e, u(Kf)), l !== e) {
                                                        for (o = [], t = f(); t !== e; )
                                                          o.push(t), t = f();
                                                        if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                          for (n = [], a = f(); a !== e; )
                                                            n.push(a), a = f();
                                                          if (a = C(), a !== e) {
                                                            for (h = [], c = f(); c !== e; )
                                                              h.push(c), c = f();
                                                            i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = kh(a)) : (r = s, s = e);
                                                          } else
                                                            r = s, s = e;
                                                        } else
                                                          r = s, s = e;
                                                      } else
                                                        r = s, s = e;
                                                      if (s === e) {
                                                        if (s = r, i.substr(r, 3).toLowerCase() === ja ? (l = i.substr(r, 3), r += 3) : (l = e, u(Jf)), l !== e) {
                                                          for (o = [], t = f(); t !== e; )
                                                            o.push(t), t = f();
                                                          if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                            for (n = [], a = f(); a !== e; )
                                                              n.push(a), a = f();
                                                            if (a = C(), a !== e) {
                                                              for (h = [], c = f(); c !== e; )
                                                                h.push(c), c = f();
                                                              i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Bh(a)) : (r = s, s = e);
                                                            } else
                                                              r = s, s = e;
                                                          } else
                                                            r = s, s = e;
                                                        } else
                                                          r = s, s = e;
                                                        if (s === e) {
                                                          if (s = r, i.substr(r, 5).toLowerCase() === Xa ? (l = i.substr(r, 5), r += 5) : (l = e, u(qf)), l !== e) {
                                                            for (o = [], t = f(); t !== e; )
                                                              o.push(t), t = f();
                                                            if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                              for (n = [], a = f(); a !== e; )
                                                                n.push(a), a = f();
                                                              if (a = C(), a !== e) {
                                                                for (h = [], c = f(); c !== e; )
                                                                  h.push(c), c = f();
                                                                i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Mh(a)) : (r = s, s = e);
                                                              } else
                                                                r = s, s = e;
                                                            } else
                                                              r = s, s = e;
                                                          } else
                                                            r = s, s = e;
                                                          if (s === e) {
                                                            if (s = r, i.substr(r, 7).toLowerCase() === Va ? (l = i.substr(r, 7), r += 7) : (l = e, u(eo)), l !== e) {
                                                              for (o = [], t = f(); t !== e; )
                                                                o.push(t), t = f();
                                                              if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                for (n = [], a = f(); a !== e; )
                                                                  n.push(a), a = f();
                                                                if (a = C(), a !== e) {
                                                                  for (h = [], c = f(); c !== e; )
                                                                    h.push(c), c = f();
                                                                  i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = jh(a)) : (r = s, s = e);
                                                                } else
                                                                  r = s, s = e;
                                                              } else
                                                                r = s, s = e;
                                                            } else
                                                              r = s, s = e;
                                                            if (s === e) {
                                                              if (s = r, i.substr(r, 7).toLowerCase() === Wa ? (l = i.substr(r, 7), r += 7) : (l = e, u(so)), l !== e) {
                                                                for (o = [], t = f(); t !== e; )
                                                                  o.push(t), t = f();
                                                                if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                  for (n = [], a = f(); a !== e; )
                                                                    n.push(a), a = f();
                                                                  if (a = C(), a !== e) {
                                                                    for (h = [], c = f(); c !== e; )
                                                                      h.push(c), c = f();
                                                                    i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Xh(a)) : (r = s, s = e);
                                                                  } else
                                                                    r = s, s = e;
                                                                } else
                                                                  r = s, s = e;
                                                              } else
                                                                r = s, s = e;
                                                              if (s === e) {
                                                                if (s = r, i.substr(r, 8).toLowerCase() === Ya ? (l = i.substr(r, 8), r += 8) : (l = e, u(ro)), l !== e) {
                                                                  for (o = [], t = f(); t !== e; )
                                                                    o.push(t), t = f();
                                                                  if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                    for (n = [], a = f(); a !== e; )
                                                                      n.push(a), a = f();
                                                                    if (a = C(), a !== e) {
                                                                      for (h = [], c = f(); c !== e; )
                                                                        h.push(c), c = f();
                                                                      i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Vh(a)) : (r = s, s = e);
                                                                    } else
                                                                      r = s, s = e;
                                                                  } else
                                                                    r = s, s = e;
                                                                } else
                                                                  r = s, s = e;
                                                                if (s === e) {
                                                                  if (s = r, i.substr(r, 2).toLowerCase() === Qa ? (l = i.substr(r, 2), r += 2) : (l = e, u(to)), l !== e) {
                                                                    for (o = [], t = f(); t !== e; )
                                                                      o.push(t), t = f();
                                                                    if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                      for (n = [], a = f(); a !== e; )
                                                                        n.push(a), a = f();
                                                                      if (a = C(), a !== e) {
                                                                        for (h = [], c = f(); c !== e; )
                                                                          h.push(c), c = f();
                                                                        i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Wh(a)) : (r = s, s = e);
                                                                      } else
                                                                        r = s, s = e;
                                                                    } else
                                                                      r = s, s = e;
                                                                  } else
                                                                    r = s, s = e;
                                                                  if (s === e) {
                                                                    if (s = r, i.substr(r, 3).toLowerCase() === za ? (l = i.substr(r, 3), r += 3) : (l = e, u(io)), l !== e) {
                                                                      for (o = [], t = f(); t !== e; )
                                                                        o.push(t), t = f();
                                                                      t = xe(), t !== e ? (w = s, s = Yh()) : (r = s, s = e);
                                                                    } else
                                                                      r = s, s = e;
                                                                    if (s === e) {
                                                                      if (s = r, i.substr(r, 4).toLowerCase() === Za ? (l = i.substr(r, 4), r += 4) : (l = e, u(ao)), l !== e) {
                                                                        for (o = [], t = f(); t !== e; )
                                                                          o.push(t), t = f();
                                                                        t = xe(), t !== e ? (w = s, s = Qh()) : (r = s, s = e);
                                                                      } else
                                                                        r = s, s = e;
                                                                      if (s === e) {
                                                                        if (s = r, i.substr(r, 7).toLowerCase() === Ka ? (l = i.substr(r, 7), r += 7) : (l = e, u(lo)), l !== e) {
                                                                          for (o = [], t = f(); t !== e; )
                                                                            o.push(t), t = f();
                                                                          t = xe(), t !== e ? (w = s, s = zh()) : (r = s, s = e);
                                                                        } else
                                                                          r = s, s = e;
                                                                        if (s === e) {
                                                                          if (s = r, i.substr(r, 3).toLowerCase() === Ja ? (l = i.substr(r, 3), r += 3) : (l = e, u(fo)), l !== e) {
                                                                            for (o = [], t = f(); t !== e; )
                                                                              o.push(t), t = f();
                                                                            if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                              for (n = [], a = f(); a !== e; )
                                                                                n.push(a), a = f();
                                                                              if (a = C(), a !== e) {
                                                                                for (h = [], c = f(); c !== e; )
                                                                                  h.push(c), c = f();
                                                                                i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Zh(a)) : (r = s, s = e);
                                                                              } else
                                                                                r = s, s = e;
                                                                            } else
                                                                              r = s, s = e;
                                                                          } else
                                                                            r = s, s = e;
                                                                          if (s === e) {
                                                                            if (s = r, i.substr(r, 4).toLowerCase() === qa ? (l = i.substr(r, 4), r += 4) : (l = e, u(oo)), l !== e) {
                                                                              for (o = [], t = f(); t !== e; )
                                                                                o.push(t), t = f();
                                                                              if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                                for (n = [], a = f(); a !== e; )
                                                                                  n.push(a), a = f();
                                                                                if (a = C(), a !== e) {
                                                                                  for (h = [], c = f(); c !== e; )
                                                                                    h.push(c), c = f();
                                                                                  i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Kh(a)) : (r = s, s = e);
                                                                                } else
                                                                                  r = s, s = e;
                                                                              } else
                                                                                r = s, s = e;
                                                                            } else
                                                                              r = s, s = e;
                                                                            if (s === e) {
                                                                              if (s = r, i.substr(r, 6).toLowerCase() === el ? (l = i.substr(r, 6), r += 6) : (l = e, u(co)), l !== e) {
                                                                                for (o = [], t = f(); t !== e; )
                                                                                  o.push(t), t = f();
                                                                                if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                                  for (n = [], a = f(); a !== e; )
                                                                                    n.push(a), a = f();
                                                                                  if (a = C(), a !== e) {
                                                                                    for (h = [], c = f(); c !== e; )
                                                                                      h.push(c), c = f();
                                                                                    i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = Jh(a)) : (r = s, s = e);
                                                                                  } else
                                                                                    r = s, s = e;
                                                                                } else
                                                                                  r = s, s = e;
                                                                              } else
                                                                                r = s, s = e;
                                                                              if (s === e) {
                                                                                if (s = r, i.substr(r, 6).toLowerCase() === sl ? (l = i.substr(r, 6), r += 6) : (l = e, u(no)), l !== e) {
                                                                                  for (o = [], t = f(); t !== e; )
                                                                                    o.push(t), t = f();
                                                                                  if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                                    for (n = [], a = f(); a !== e; )
                                                                                      n.push(a), a = f();
                                                                                    if (a = C(), a !== e) {
                                                                                      for (h = [], c = f(); c !== e; )
                                                                                        h.push(c), c = f();
                                                                                      i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = qh(a)) : (r = s, s = e);
                                                                                    } else
                                                                                      r = s, s = e;
                                                                                  } else
                                                                                    r = s, s = e;
                                                                                } else
                                                                                  r = s, s = e;
                                                                                if (s === e) {
                                                                                  if (s = r, i.substr(r, 6).toLowerCase() === rl ? (l = i.substr(r, 6), r += 6) : (l = e, u(ho)), l !== e) {
                                                                                    for (o = [], t = f(); t !== e; )
                                                                                      o.push(t), t = f();
                                                                                    if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                                      for (n = [], a = f(); a !== e; )
                                                                                        n.push(a), a = f();
                                                                                      if (a = C(), a !== e) {
                                                                                        for (h = [], c = f(); c !== e; )
                                                                                          h.push(c), c = f();
                                                                                        i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = eu(a)) : (r = s, s = e);
                                                                                      } else
                                                                                        r = s, s = e;
                                                                                    } else
                                                                                      r = s, s = e;
                                                                                  } else
                                                                                    r = s, s = e;
                                                                                  if (s === e) {
                                                                                    if (s = r, i.substr(r, 8).toLowerCase() === tl ? (l = i.substr(r, 8), r += 8) : (l = e, u(uo)), l !== e) {
                                                                                      for (o = [], t = f(); t !== e; )
                                                                                        o.push(t), t = f();
                                                                                      t = We(), t !== e ? (w = s, s = su(t)) : (r = s, s = e);
                                                                                    } else
                                                                                      r = s, s = e;
                                                                                    if (s === e) {
                                                                                      if (s = r, i.substr(r, 2).toLowerCase() === il ? (l = i.substr(r, 2), r += 2) : (l = e, u(po)), l !== e) {
                                                                                        for (o = [], t = f(); t !== e; )
                                                                                          o.push(t), t = f();
                                                                                        if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                                          for (n = [], a = f(); a !== e; )
                                                                                            n.push(a), a = f();
                                                                                          if (a = C(), a !== e) {
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
                                                                                                    i.charCodeAt(r) === 41 ? (x = E, r++) : (x = e, u(P)), x !== e ? (w = s, s = ru(a, p, T)) : (r = s, s = e);
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
                                                                                        if (s = r, i.substr(r, 7).toLowerCase() === al ? (l = i.substr(r, 7), r += 7) : (l = e, u(go)), l !== e) {
                                                                                          for (o = [], t = f(); t !== e; )
                                                                                            o.push(t), t = f();
                                                                                          if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                                            for (n = [], a = f(); a !== e; )
                                                                                              n.push(a), a = f();
                                                                                            if (a = C(), a !== e) {
                                                                                              for (h = [], c = f(); c !== e; )
                                                                                                h.push(c), c = f();
                                                                                              if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                                                                for (g = [], p = f(); p !== e; )
                                                                                                  g.push(p), p = f();
                                                                                                if (p = C(), p !== e) {
                                                                                                  for (_ = [], $ = f(); $ !== e; )
                                                                                                    _.push($), $ = f();
                                                                                                  i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = tu(a, p)) : (r = s, s = e);
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
                                                                                          if (s = r, i.substr(r, 5).toLowerCase() === ll ? (l = i.substr(r, 5), r += 5) : (l = e, u(wo)), l !== e) {
                                                                                            for (o = [], t = f(); t !== e; )
                                                                                              o.push(t), t = f();
                                                                                            if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                                              for (n = [], a = f(); a !== e; )
                                                                                                n.push(a), a = f();
                                                                                              if (a = C(), a !== e) {
                                                                                                for (h = [], c = f(); c !== e; )
                                                                                                  h.push(c), c = f();
                                                                                                if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                                                                  for (g = [], p = f(); p !== e; )
                                                                                                    g.push(p), p = f();
                                                                                                  if (p = C(), p !== e) {
                                                                                                    for (_ = [], $ = f(); $ !== e; )
                                                                                                      _.push($), $ = f();
                                                                                                    i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = iu(a, p)) : (r = s, s = e);
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
                                                                                            if (s = r, i.substr(r, 8).toLowerCase() === fl ? (l = i.substr(r, 8), r += 8) : (l = e, u(_o)), l !== e) {
                                                                                              for (o = [], t = f(); t !== e; )
                                                                                                o.push(t), t = f();
                                                                                              if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                                                for (n = [], a = f(); a !== e; )
                                                                                                  n.push(a), a = f();
                                                                                                if (a = C(), a !== e) {
                                                                                                  for (h = [], c = f(); c !== e; )
                                                                                                    h.push(c), c = f();
                                                                                                  if (i.charCodeAt(r) === 44 ? (c = U, r++) : (c = e, u(H)), c !== e) {
                                                                                                    for (g = [], p = f(); p !== e; )
                                                                                                      g.push(p), p = f();
                                                                                                    if (p = C(), p !== e) {
                                                                                                      for (_ = [], $ = f(); $ !== e; )
                                                                                                        _.push($), $ = f();
                                                                                                      i.charCodeAt(r) === 41 ? ($ = E, r++) : ($ = e, u(P)), $ !== e ? (w = s, s = au(a, p)) : (r = s, s = e);
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
                                                                                              if (s = r, i.substr(r, 5).toLowerCase() === ol ? (l = i.substr(r, 5), r += 5) : (l = e, u($o)), l === e && (i.substr(r, 5).toLowerCase() === cl ? (l = i.substr(r, 5), r += 5) : (l = e, u(bo))), l !== e) {
                                                                                                for (o = [], t = f(); t !== e; )
                                                                                                  o.push(t), t = f();
                                                                                                if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                                                  for (n = [], a = f(); a !== e; )
                                                                                                    n.push(a), a = f();
                                                                                                  if (a = C(), a !== e) {
                                                                                                    for (h = [], c = f(); c !== e; )
                                                                                                      h.push(c), c = f();
                                                                                                    i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = lu(a)) : (r = s, s = e);
                                                                                                  } else
                                                                                                    r = s, s = e;
                                                                                                } else
                                                                                                  r = s, s = e;
                                                                                              } else
                                                                                                r = s, s = e;
                                                                                              if (s === e) {
                                                                                                if (s = r, i.substr(r, 7).toLowerCase() === nl ? (l = i.substr(r, 7), r += 7) : (l = e, u(vo)), l !== e) {
                                                                                                  for (o = [], t = f(); t !== e; )
                                                                                                    o.push(t), t = f();
                                                                                                  if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                                                    for (n = [], a = f(); a !== e; )
                                                                                                      n.push(a), a = f();
                                                                                                    if (a = C(), a !== e) {
                                                                                                      for (h = [], c = f(); c !== e; )
                                                                                                        h.push(c), c = f();
                                                                                                      i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = fu(a)) : (r = s, s = e);
                                                                                                    } else
                                                                                                      r = s, s = e;
                                                                                                  } else
                                                                                                    r = s, s = e;
                                                                                                } else
                                                                                                  r = s, s = e;
                                                                                                if (s === e) {
                                                                                                  if (s = r, i.substr(r, 9).toLowerCase() === hl ? (l = i.substr(r, 9), r += 9) : (l = e, u(mo)), l !== e) {
                                                                                                    for (o = [], t = f(); t !== e; )
                                                                                                      o.push(t), t = f();
                                                                                                    if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                                                      for (n = [], a = f(); a !== e; )
                                                                                                        n.push(a), a = f();
                                                                                                      if (a = C(), a !== e) {
                                                                                                        for (h = [], c = f(); c !== e; )
                                                                                                          h.push(c), c = f();
                                                                                                        i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = ou(a)) : (r = s, s = e);
                                                                                                      } else
                                                                                                        r = s, s = e;
                                                                                                    } else
                                                                                                      r = s, s = e;
                                                                                                  } else
                                                                                                    r = s, s = e;
                                                                                                  if (s === e) {
                                                                                                    if (s = r, i.substr(r, 9).toLowerCase() === ul ? (l = i.substr(r, 9), r += 9) : (l = e, u(Ao)), l !== e) {
                                                                                                      for (o = [], t = f(); t !== e; )
                                                                                                        o.push(t), t = f();
                                                                                                      if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                                                                                                        for (n = [], a = f(); a !== e; )
                                                                                                          n.push(a), a = f();
                                                                                                        if (a = C(), a !== e) {
                                                                                                          for (h = [], c = f(); c !== e; )
                                                                                                            h.push(c), c = f();
                                                                                                          i.charCodeAt(r) === 41 ? (c = E, r++) : (c = e, u(P)), c !== e ? (w = s, s = cu(a)) : (r = s, s = e);
                                                                                                        } else
                                                                                                          r = s, s = e;
                                                                                                      } else
                                                                                                        r = s, s = e;
                                                                                                    } else
                                                                                                      r = s, s = e;
                                                                                                    s === e && (s = ig(), s === e && (s = fg(), s === e && (s = og())));
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
  function ig() {
    var s, l, o, t, n, a, h, c, g, p, _, $, v, T, I;
    if (s = r, i.substr(r, 5).toLowerCase() === pl ? (l = i.substr(r, 5), r += 5) : (l = e, u(Co)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (a = C(), a !== e) {
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
              i.charCodeAt(r) === 41 ? (T = E, r++) : (T = e, u(P)), T !== e ? (w = s, s = nu(a, p, $)) : (r = s, s = e);
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
    var s, l, o, t, n, a, h, c, g, p, _, $, v, T, I;
    if (s = r, i.substr(r, 6).toLowerCase() === gl ? (l = i.substr(r, 6), r += 6) : (l = e, u(Eo)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (a = C(), a !== e) {
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
              i.charCodeAt(r) === 41 ? (T = E, r++) : (T = e, u(P)), T !== e ? (w = s, s = hu(a, p, $)) : (r = s, s = e);
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
    var s, l, o, t, n, a, h, c, g, p, _, $, v, T, I, x, S, de, Me;
    if (s = r, i.substr(r, 7).toLowerCase() === dl ? (l = i.substr(r, 7), r += 7) : (l = e, u(yo)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        if (a = C(), a !== e) {
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
                  i.charCodeAt(r) === 41 ? (de = E, r++) : (de = e, u(P)), de !== e ? (w = s, s = uu(a, p, T, x)) : (r = s, s = e);
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
  function fg() {
    var s, l, o, t;
    if (s = r, i.substr(r, 6).toLowerCase() === ct ? (l = i.substr(r, 6), r += 6) : (l = e, u(Dt)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = fe(), t !== e ? (w = s, s = pu(t)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function og() {
    var s, l, o, t, n, a;
    if (s = r, i.substr(r, 3).toLowerCase() === Js ? (l = i.substr(r, 3), r += 3) : (l = e, u(ur)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.substr(r, 6).toLowerCase() === ct ? (t = i.substr(r, 6), r += 6) : (t = e, u(Dt)), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        a = fe(), a !== e ? (w = s, s = gu(a)) : (r = s, s = e);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function cg() {
    var s, l, o, t, n, a, h, c, g, p, _, $, v, T, I, x, S;
    if (s = r, i.substr(r, 5).toLowerCase() === wl ? (l = i.substr(r, 5), r += 5) : (l = e, u(Po)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
        for (n = [], a = f(); a !== e; )
          n.push(a), a = f();
        for (i.substr(r, 8).toLowerCase() === O ? (a = i.substr(r, 8), r += 8) : (a = e, u(ve)), a === e && (a = null), h = [], c = f(); c !== e; )
          h.push(c), c = f();
        if (i.charCodeAt(r) === 42 ? (c = ae, r++) : (c = e, u(le)), c === e && (c = C()), c !== e) {
          for (g = [], p = f(); p !== e; )
            g.push(p), p = f();
          if (i.charCodeAt(r) === 41 ? (p = E, r++) : (p = e, u(P)), p !== e) {
            for (_ = [], $ = f(); $ !== e; )
              _.push($), $ = f();
            w = s, s = du(a, c);
          } else
            r = s, s = e;
        } else
          r = s, s = e;
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    if (s === e) {
      if (s = r, i.substr(r, 3).toLowerCase() === _l ? (l = i.substr(r, 3), r += 3) : (l = e, u(To)), l !== e) {
        for (o = [], t = f(); t !== e; )
          o.push(t), t = f();
        if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
          for (n = [], a = f(); a !== e; )
            n.push(a), a = f();
          for (i.substr(r, 8).toLowerCase() === O ? (a = i.substr(r, 8), r += 8) : (a = e, u(ve)), a === e && (a = null), h = [], c = f(); c !== e; )
            h.push(c), c = f();
          if (c = C(), c !== e) {
            for (g = [], p = f(); p !== e; )
              g.push(p), p = f();
            if (i.charCodeAt(r) === 41 ? (p = E, r++) : (p = e, u(P)), p !== e) {
              for (_ = [], $ = f(); $ !== e; )
                _.push($), $ = f();
              w = s, s = wu(a, c);
            } else
              r = s, s = e;
          } else
            r = s, s = e;
        } else
          r = s, s = e;
      } else
        r = s, s = e;
      if (s === e) {
        if (s = r, i.substr(r, 3).toLowerCase() === $l ? (l = i.substr(r, 3), r += 3) : (l = e, u(Ro)), l !== e) {
          for (o = [], t = f(); t !== e; )
            o.push(t), t = f();
          if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
            for (n = [], a = f(); a !== e; )
              n.push(a), a = f();
            for (i.substr(r, 8).toLowerCase() === O ? (a = i.substr(r, 8), r += 8) : (a = e, u(ve)), a === e && (a = null), h = [], c = f(); c !== e; )
              h.push(c), c = f();
            if (c = C(), c !== e) {
              for (g = [], p = f(); p !== e; )
                g.push(p), p = f();
              if (i.charCodeAt(r) === 41 ? (p = E, r++) : (p = e, u(P)), p !== e) {
                for (_ = [], $ = f(); $ !== e; )
                  _.push($), $ = f();
                w = s, s = _u(a, c);
              } else
                r = s, s = e;
            } else
              r = s, s = e;
          } else
            r = s, s = e;
        } else
          r = s, s = e;
        if (s === e) {
          if (s = r, i.substr(r, 3).toLowerCase() === bl ? (l = i.substr(r, 3), r += 3) : (l = e, u(Lo)), l !== e) {
            for (o = [], t = f(); t !== e; )
              o.push(t), t = f();
            if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
              for (n = [], a = f(); a !== e; )
                n.push(a), a = f();
              for (i.substr(r, 8).toLowerCase() === O ? (a = i.substr(r, 8), r += 8) : (a = e, u(ve)), a === e && (a = null), h = [], c = f(); c !== e; )
                h.push(c), c = f();
              if (c = C(), c !== e) {
                for (g = [], p = f(); p !== e; )
                  g.push(p), p = f();
                if (i.charCodeAt(r) === 41 ? (p = E, r++) : (p = e, u(P)), p !== e) {
                  for (_ = [], $ = f(); $ !== e; )
                    _.push($), $ = f();
                  w = s, s = $u(a, c);
                } else
                  r = s, s = e;
              } else
                r = s, s = e;
            } else
              r = s, s = e;
          } else
            r = s, s = e;
          if (s === e) {
            if (s = r, i.substr(r, 3).toLowerCase() === vl ? (l = i.substr(r, 3), r += 3) : (l = e, u(Io)), l !== e) {
              for (o = [], t = f(); t !== e; )
                o.push(t), t = f();
              if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                for (n = [], a = f(); a !== e; )
                  n.push(a), a = f();
                for (i.substr(r, 8).toLowerCase() === O ? (a = i.substr(r, 8), r += 8) : (a = e, u(ve)), a === e && (a = null), h = [], c = f(); c !== e; )
                  h.push(c), c = f();
                if (c = C(), c !== e) {
                  for (g = [], p = f(); p !== e; )
                    g.push(p), p = f();
                  if (i.charCodeAt(r) === 41 ? (p = E, r++) : (p = e, u(P)), p !== e) {
                    for (_ = [], $ = f(); $ !== e; )
                      _.push($), $ = f();
                    w = s, s = bu(a, c);
                  } else
                    r = s, s = e;
                } else
                  r = s, s = e;
              } else
                r = s, s = e;
            } else
              r = s, s = e;
            if (s === e) {
              if (s = r, i.substr(r, 6).toLowerCase() === ml ? (l = i.substr(r, 6), r += 6) : (l = e, u(Oo)), l !== e) {
                for (o = [], t = f(); t !== e; )
                  o.push(t), t = f();
                if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                  for (n = [], a = f(); a !== e; )
                    n.push(a), a = f();
                  for (i.substr(r, 8).toLowerCase() === O ? (a = i.substr(r, 8), r += 8) : (a = e, u(ve)), a === e && (a = null), h = [], c = f(); c !== e; )
                    h.push(c), c = f();
                  if (c = C(), c !== e) {
                    for (g = [], p = f(); p !== e; )
                      g.push(p), p = f();
                    if (i.charCodeAt(r) === 41 ? (p = E, r++) : (p = e, u(P)), p !== e) {
                      for (_ = [], $ = f(); $ !== e; )
                        _.push($), $ = f();
                      w = s, s = vu(a, c);
                    } else
                      r = s, s = e;
                  } else
                    r = s, s = e;
                } else
                  r = s, s = e;
              } else
                r = s, s = e;
              if (s === e)
                if (s = r, i.substr(r, 12).toLowerCase() === Al ? (l = i.substr(r, 12), r += 12) : (l = e, u(No)), l !== e) {
                  for (o = [], t = f(); t !== e; )
                    o.push(t), t = f();
                  if (i.charCodeAt(r) === 40 ? (t = m, r++) : (t = e, u(y)), t !== e) {
                    for (n = [], a = f(); a !== e; )
                      n.push(a), a = f();
                    for (i.substr(r, 8).toLowerCase() === O ? (a = i.substr(r, 8), r += 8) : (a = e, u(ve)), a === e && (a = null), h = [], c = f(); c !== e; )
                      h.push(c), c = f();
                    if (c = C(), c !== e) {
                      for (g = r, p = [], _ = f(); _ !== e; )
                        p.push(_), _ = f();
                      if (i.charCodeAt(r) === 59 ? (_ = Ue, r++) : (_ = e, u(ke)), _ !== e) {
                        for ($ = [], v = f(); v !== e; )
                          $.push(v), v = f();
                        if (i.substr(r, 9).toLowerCase() === Cl ? (v = i.substr(r, 9), r += 9) : (v = e, u(So)), v !== e) {
                          for (T = [], I = f(); I !== e; )
                            T.push(I), I = f();
                          if (i.charCodeAt(r) === 61 ? (I = us, r++) : (I = e, u(Rs)), I !== e) {
                            for (x = [], S = f(); S !== e; )
                              x.push(S), S = f();
                            S = Ti(), S !== e ? (p = [p, _, $, v, T, I, x, S], g = p) : (r = g, g = e);
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
                        w = s, s = mu(a, c, g);
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
  function ng() {
    var s, l, o, t;
    if (s = r, l = V(), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      t = mi(), t === e && (t = null), w = s, s = Au(l, t);
    } else
      r = s, s = e;
    return s;
  }
  function Or() {
    var s, l, o, t, n;
    return s = r, l = Ti(), l !== e ? (o = $g(), o === e && (o = r, i.substr(r, 2) === nt ? (t = nt, r += 2) : (t = e, u(Fo)), t !== e ? (n = V(), n !== e ? (t = [t, n], o = t) : (r = o, o = e)) : (r = o, o = e)), o === e && (o = null), w = s, s = Cu(l, o)) : (r = s, s = e), s;
  }
  function Nr() {
    var s;
    return s = hg(), s === e && (s = Sr(), s === e && (s = Fr())), s;
  }
  function hg() {
    var s;
    return s = Hr(), s === e && (s = Ur(), s === e && (s = is())), s;
  }
  function Sr() {
    var s;
    return s = mg(), s === e && (s = vg(), s === e && (s = bg())), s;
  }
  function Fr() {
    var s;
    return s = Eg(), s === e && (s = Cg(), s === e && (s = Ag())), s;
  }
  function xr() {
    var s, l;
    return s = r, i.substr(r, 4).toLowerCase() === El ? (l = i.substr(r, 4), r += 4) : (l = e, u(xo)), l !== e && (w = s, l = Eu()), s = l, s === e && (s = r, i.substr(r, 5).toLowerCase() === yl ? (l = i.substr(r, 5), r += 5) : (l = e, u(Do)), l !== e && (w = s, l = yu()), s = l), s;
  }
  function Ti() {
    var s;
    return s = Tg(), s === e && (s = Rg(), s === e && (s = yg(), s === e && (s = Pg()))), s;
  }
  function V() {
    var s, l;
    return s = r, l = Dr(), l !== e && (w = s, l = Pu(l)), s = l, s === e && (s = r, l = ug(), l !== e && (w = s, l = Tu(l)), s = l), s;
  }
  function ug() {
    var s, l;
    return s = r, l = gg(), l !== e && (w = s, l = Ru(l)), s = l, s === e && (s = r, l = Gr(), l !== e && (w = s, l = Lu(l)), s = l), s;
  }
  function pg() {
    var s, l;
    return s = r, l = dg(), l !== e && (w = s, l = Iu(l)), s = l, s === e && (s = r, l = Ig(), l !== e && (w = s, l = Ou()), s = l), s;
  }
  function Dr() {
    var s, l, o, t;
    if (s = r, i.charCodeAt(r) === 60 ? (l = Zs, r++) : (l = e, u(nr)), l !== e) {
      for (o = [], _t.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(Gt)); t !== e; )
        o.push(t), _t.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(Gt));
      i.charCodeAt(r) === 62 ? (t = Ks, r++) : (t = e, u(hr)), t !== e ? (w = s, s = Nu(o)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Gr() {
    var s, l, o;
    return s = r, l = Og(), l === e && (l = null), i.charCodeAt(r) === 58 ? (o = He, r++) : (o = e, u(Be)), o !== e ? (w = s, s = Su(l)) : (r = s, s = e), s;
  }
  function gg() {
    var s, l, o;
    return s = r, l = Gr(), l !== e ? (o = Ng(), o !== e ? (w = s, s = Fu(l, o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function dg() {
    var s, l, o, t, n, a, h;
    if (s = r, i.substr(r, 2) === ht ? (l = ht, r += 2) : (l = e, u(Go)), l !== e)
      if (o = Qe(), o === e && (M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j))), o !== e) {
        for (t = [], n = ie(), n === e && (n = r, i.charCodeAt(r) === 46 ? (a = z, r++) : (a = e, u(Z)), a !== e ? (h = ie(), h !== e ? (a = [a, h], n = a) : (r = n, n = e)) : (r = n, n = e)); n !== e; )
          t.push(n), n = ie(), n === e && (n = r, i.charCodeAt(r) === 46 ? (a = z, r++) : (a = e, u(Z)), a !== e ? (h = ie(), h !== e ? (a = [a, h], n = a) : (r = n, n = e)) : (r = n, n = e));
        w = s, s = xu();
      } else
        r = s, s = e;
    else
      r = s, s = e;
    return s;
  }
  function wg() {
    var s, l, o;
    return s = r, i.charCodeAt(r) === 63 ? (l = Ws, r++) : (l = e, u(lr)), l !== e ? (o = Ii(), o !== e ? (w = s, s = Du(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function _g() {
    var s, l, o;
    return s = r, i.charCodeAt(r) === 36 ? (l = ut, r++) : (l = e, u(Ut)), l !== e ? (o = Ii(), o !== e ? (w = s, s = Gu(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function $g() {
    var s, l, o, t, n, a, h, c;
    if (s = r, i.charCodeAt(r) === 64 ? (l = pt, r++) : (l = e, u(Ht)), l !== e) {
      if (o = [], $t.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(kt)), t !== e)
        for (; t !== e; )
          o.push(t), $t.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(kt));
      else
        o = e;
      if (o !== e) {
        if (t = [], n = r, i.charCodeAt(r) === 45 ? (a = he, r++) : (a = e, u(ue)), a !== e) {
          if (h = [], As.test(i.charAt(r)) ? (c = i.charAt(r), r++) : (c = e, u(Is)), c !== e)
            for (; c !== e; )
              h.push(c), As.test(i.charAt(r)) ? (c = i.charAt(r), r++) : (c = e, u(Is));
          else
            h = e;
          h !== e ? (a = [a, h], n = a) : (r = n, n = e);
        } else
          r = n, n = e;
        for (; n !== e; )
          if (t.push(n), n = r, i.charCodeAt(r) === 45 ? (a = he, r++) : (a = e, u(ue)), a !== e) {
            if (h = [], As.test(i.charAt(r)) ? (c = i.charAt(r), r++) : (c = e, u(Is)), c !== e)
              for (; c !== e; )
                h.push(c), As.test(i.charAt(r)) ? (c = i.charAt(r), r++) : (c = e, u(Is));
            else
              h = e;
            h !== e ? (a = [a, h], n = a) : (r = n, n = e);
          } else
            r = n, n = e;
        w = s, s = Uu(o, t);
      } else
        r = s, s = e;
    } else
      r = s, s = e;
    return s;
  }
  function is() {
    var s, l, o;
    if (s = r, l = [], M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j)), o !== e)
      for (; o !== e; )
        l.push(o), M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j));
    else
      l = e;
    return l !== e && (w = s, l = Hu()), s = l, s;
  }
  function Ur() {
    var s, l, o, t, n;
    for (s = r, l = [], M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j)); o !== e; )
      l.push(o), M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j));
    if (i.charCodeAt(r) === 46 ? (o = z, r++) : (o = e, u(Z)), o !== e) {
      if (t = [], M.test(i.charAt(r)) ? (n = i.charAt(r), r++) : (n = e, u(j)), n !== e)
        for (; n !== e; )
          t.push(n), M.test(i.charAt(r)) ? (n = i.charAt(r), r++) : (n = e, u(j));
      else
        t = e;
      t !== e ? (w = s, s = ku()) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Hr() {
    var s, l, o, t, n;
    if (s = r, l = [], M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j)), o !== e)
      for (; o !== e; )
        l.push(o), M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j));
    else
      l = e;
    if (l !== e)
      if (i.charCodeAt(r) === 46 ? (o = z, r++) : (o = e, u(Z)), o !== e) {
        for (t = [], M.test(i.charAt(r)) ? (n = i.charAt(r), r++) : (n = e, u(j)); n !== e; )
          t.push(n), M.test(i.charAt(r)) ? (n = i.charAt(r), r++) : (n = e, u(j));
        n = kr(), n !== e ? (w = s, s = Bu()) : (r = s, s = e);
      } else
        r = s, s = e;
    else
      r = s, s = e;
    if (s === e) {
      if (s = r, i.charCodeAt(r) === 46 ? (l = z, r++) : (l = e, u(Z)), l !== e) {
        if (o = [], M.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(j)), t !== e)
          for (; t !== e; )
            o.push(t), M.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(j));
        else
          o = e;
        o !== e ? (t = kr(), t !== e ? (w = s, s = Mu()) : (r = s, s = e)) : (r = s, s = e);
      } else
        r = s, s = e;
      if (s === e) {
        if (s = r, l = [], M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j)), o !== e)
          for (; o !== e; )
            l.push(o), M.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(j));
        else
          l = e;
        l !== e ? (o = kr(), o !== e ? (w = s, s = ju()) : (r = s, s = e)) : (r = s, s = e);
      }
    }
    return s;
  }
  function bg() {
    var s, l, o;
    return s = r, i.charCodeAt(r) === 43 ? (l = Le, r++) : (l = e, u(Se)), l !== e ? (o = is(), o !== e ? (w = s, s = Xu(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function vg() {
    var s, l, o;
    return s = r, i.charCodeAt(r) === 43 ? (l = Le, r++) : (l = e, u(Se)), l !== e ? (o = Ur(), o !== e ? (w = s, s = Vu(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function mg() {
    var s, l, o;
    return s = r, i.charCodeAt(r) === 43 ? (l = Le, r++) : (l = e, u(Se)), l !== e ? (o = Hr(), o !== e ? (w = s, s = Wu(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function Ag() {
    var s, l, o;
    return s = r, i.charCodeAt(r) === 45 ? (l = he, r++) : (l = e, u(ue)), l !== e ? (o = is(), o !== e ? (w = s, s = Yu(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function Cg() {
    var s, l, o;
    return s = r, i.charCodeAt(r) === 45 ? (l = he, r++) : (l = e, u(ue)), l !== e ? (o = Ur(), o !== e ? (w = s, s = Qu(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function Eg() {
    var s, l, o;
    return s = r, i.charCodeAt(r) === 45 ? (l = he, r++) : (l = e, u(ue)), l !== e ? (o = Hr(), o !== e ? (w = s, s = zu(o)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function kr() {
    var s, l, o, t, n;
    if (s = r, Rl.test(i.charAt(r)) ? (l = i.charAt(r), r++) : (l = e, u(Uo)), l !== e) {
      if (Ll.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(Ho)), o === e && (o = null), t = [], M.test(i.charAt(r)) ? (n = i.charAt(r), r++) : (n = e, u(j)), n !== e)
        for (; n !== e; )
          t.push(n), M.test(i.charAt(r)) ? (n = i.charAt(r), r++) : (n = e, u(j));
      else
        t = e;
      t !== e ? (l = [l, o, t], s = l) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function yg() {
    var s, l, o, t;
    if (s = r, i.charCodeAt(r) === 39 ? (l = Ke, r++) : (l = e, u(Je)), l !== e) {
      for (o = [], bt.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(Bt)), t === e && (t = Fe()); t !== e; )
        o.push(t), bt.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(Bt)), t === e && (t = Fe());
      i.charCodeAt(r) === 39 ? (t = Ke, r++) : (t = e, u(Je)), t !== e ? (w = s, s = Zu(o)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Pg() {
    var s, l, o, t;
    if (s = r, i.charCodeAt(r) === 34 ? (l = _s, r++) : (l = e, u(Os)), l !== e) {
      for (o = [], vt.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(Mt)), t === e && (t = Fe()); t !== e; )
        o.push(t), vt.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(Mt)), t === e && (t = Fe());
      i.charCodeAt(r) === 34 ? (t = _s, r++) : (t = e, u(Os)), t !== e ? (w = s, s = Ku(o)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Tg() {
    var s, l, o, t, n, a;
    if (s = r, i.substr(r, 3) === $s ? (l = $s, r += 3) : (l = e, u(jt)), l !== e) {
      for (o = [], t = r, i.substr(r, 2) === bs ? (n = bs, r += 2) : (n = e, u(Xt)), n === e && (i.charCodeAt(r) === 39 ? (n = Ke, r++) : (n = e, u(Je))), n === e && (n = null), mt.test(i.charAt(r)) ? (a = i.charAt(r), r++) : (a = e, u(Vt)), a === e && (a = Fe()), a !== e ? (n = [n, a], t = n) : (r = t, t = e); t !== e; )
        o.push(t), t = r, i.substr(r, 2) === bs ? (n = bs, r += 2) : (n = e, u(Xt)), n === e && (i.charCodeAt(r) === 39 ? (n = Ke, r++) : (n = e, u(Je))), n === e && (n = null), mt.test(i.charAt(r)) ? (a = i.charAt(r), r++) : (a = e, u(Vt)), a === e && (a = Fe()), a !== e ? (n = [n, a], t = n) : (r = t, t = e);
      i.substr(r, 3) === $s ? (t = $s, r += 3) : (t = e, u(jt)), t !== e ? (w = s, s = Ju(o)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Rg() {
    var s, l, o, t, n, a;
    if (s = r, i.substr(r, 3) === vs ? (l = vs, r += 3) : (l = e, u(Wt)), l !== e) {
      for (o = [], t = r, i.substr(r, 2) === ms ? (n = ms, r += 2) : (n = e, u(Yt)), n === e && (i.charCodeAt(r) === 34 ? (n = _s, r++) : (n = e, u(Os))), n === e && (n = null), At.test(i.charAt(r)) ? (a = i.charAt(r), r++) : (a = e, u(Qt)), a === e && (a = Fe()), a !== e ? (n = [n, a], t = n) : (r = t, t = e); t !== e; )
        o.push(t), t = r, i.substr(r, 2) === ms ? (n = ms, r += 2) : (n = e, u(Yt)), n === e && (i.charCodeAt(r) === 34 ? (n = _s, r++) : (n = e, u(Os))), n === e && (n = null), At.test(i.charAt(r)) ? (a = i.charAt(r), r++) : (a = e, u(Qt)), a === e && (a = Fe()), a !== e ? (n = [n, a], t = n) : (r = t, t = e);
      i.substr(r, 3) === vs ? (t = vs, r += 3) : (t = e, u(Wt)), t !== e ? (w = s, s = qu(o)) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Fe() {
    var s, l, o;
    return s = r, i.charCodeAt(r) === 92 ? (l = gt, r++) : (l = e, u(zt)), l !== e ? (Il.test(i.charAt(r)) ? (o = i.charAt(r), r++) : (o = e, u(ko)), o !== e ? (w = s, s = ep()) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function xe() {
    var s, l, o, t;
    if (s = r, i.charCodeAt(r) === 40 ? (l = m, r++) : (l = e, u(y)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      i.charCodeAt(r) === 41 ? (t = E, r++) : (t = e, u(P)), t !== e ? (l = [l, o, t], s = l) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function f() {
    var s;
    return s = Lg(), s === e && (s = Br(), s === e && (s = Mr())), s;
  }
  function Br() {
    var s;
    return Ol.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Bo)), s;
  }
  function Mr() {
    var s;
    return Nl.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Mo)), s;
  }
  function ks() {
    var s;
    return Sl.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(jo)), s;
  }
  function Ri() {
    var s, l, o, t;
    if (s = r, i.charCodeAt(r) === 35 ? (l = qs, r++) : (l = e, u(pr)), l !== e) {
      for (o = [], t = ks(); t !== e; )
        o.push(t), t = ks();
      t = Mr(), t !== e ? (w = s, s = sp()) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Lg() {
    var s, l, o, t, n;
    for (s = r, Mr(), l = [], o = Br(); o !== e; )
      l.push(o), o = Br();
    if (i.charCodeAt(r) === 35 ? (o = qs, r++) : (o = e, u(pr)), o !== e) {
      for (t = [], n = ks(); n !== e; )
        t.push(n), n = ks();
      w = s, s = rp();
    } else
      r = s, s = e;
    return s;
  }
  function Ig() {
    var s, l, o, t;
    if (s = r, i.charCodeAt(r) === 91 ? (l = Qs, r++) : (l = e, u(or)), l !== e) {
      for (o = [], t = f(); t !== e; )
        o.push(t), t = f();
      i.charCodeAt(r) === 93 ? (t = zs, r++) : (t = e, u(cr)), t !== e ? (l = [l, o, t], s = l) : (r = s, s = e);
    } else
      r = s, s = e;
    return s;
  }
  function Li() {
    var s;
    return Fl.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Xo)), s === e && (xl.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Vo)), s === e && (Dl.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Wo)), s === e && (Gl.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Yo)), s === e && (Ul.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Qo)), s === e && (Hl.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(zo)), s === e && (kl.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Zo)), s === e && (Bl.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Ko)), s === e && (Ml.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(Jo)), s === e && (jl.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(qo)), s === e && (Xl.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(ec)), s === e && (Vl.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(sc)), s === e && (Wl.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(rc)))))))))))))), s;
  }
  function Qe() {
    var s;
    return s = Li(), s === e && (i.charCodeAt(r) === 95 ? (s = dt, r++) : (s = e, u(Zt))), s;
  }
  function Ii() {
    var s, l, o, t;
    if (s = r, l = Qe(), l === e && (M.test(i.charAt(r)) ? (l = i.charAt(r), r++) : (l = e, u(j))), l !== e) {
      for (o = [], t = Qe(), t === e && (M.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(j)), t === e && (er.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(gr)), t === e && (sr.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(dr)), t === e && (rr.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(wr)))))); t !== e; )
        o.push(t), t = Qe(), t === e && (M.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(j)), t === e && (er.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(gr)), t === e && (sr.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(dr)), t === e && (rr.test(i.charAt(r)) ? (t = i.charAt(r), r++) : (t = e, u(wr))))));
      w = s, s = tp();
    } else
      r = s, s = e;
    return s;
  }
  function ie() {
    var s;
    return s = Qe(), s === e && (i.charCodeAt(r) === 45 ? (s = he, r++) : (s = e, u(ue)), s === e && (M.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(j)), s === e && (er.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(gr)), s === e && (sr.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(dr)), s === e && (rr.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(wr))))))), s;
  }
  function Og() {
    var s, l, o, t, n, a;
    if (s = r, l = Li(), l !== e) {
      for (o = [], t = ie(), t === e && (t = r, i.charCodeAt(r) === 46 ? (n = z, r++) : (n = e, u(Z)), n !== e ? (a = ie(), a !== e ? (n = [n, a], t = n) : (r = t, t = e)) : (r = t, t = e)); t !== e; )
        o.push(t), t = ie(), t === e && (t = r, i.charCodeAt(r) === 46 ? (n = z, r++) : (n = e, u(Z)), n !== e ? (a = ie(), a !== e ? (n = [n, a], t = n) : (r = t, t = e)) : (r = t, t = e));
      w = s, s = ip();
    } else
      r = s, s = e;
    return s;
  }
  function Ng() {
    var s, l, o, t, n, a;
    if (s = r, l = Qe(), l === e && (i.charCodeAt(r) === 58 ? (l = He, r++) : (l = e, u(Be)), l === e && (M.test(i.charAt(r)) ? (l = i.charAt(r), r++) : (l = e, u(j)), l === e && (l = as()))), l !== e) {
      for (o = [], t = ie(), t === e && (i.charCodeAt(r) === 58 ? (t = He, r++) : (t = e, u(Be)), t === e && (t = as())), t === e && (t = r, i.charCodeAt(r) === 46 ? (n = z, r++) : (n = e, u(Z)), n !== e ? (a = ie(), a === e && (i.charCodeAt(r) === 58 ? (a = He, r++) : (a = e, u(Be)), a === e && (a = as())), a !== e ? (n = [n, a], t = n) : (r = t, t = e)) : (r = t, t = e)); t !== e; )
        o.push(t), t = ie(), t === e && (i.charCodeAt(r) === 58 ? (t = He, r++) : (t = e, u(Be)), t === e && (t = as())), t === e && (t = r, i.charCodeAt(r) === 46 ? (n = z, r++) : (n = e, u(Z)), n !== e ? (a = ie(), a === e && (i.charCodeAt(r) === 58 ? (a = He, r++) : (a = e, u(Be)), a === e && (a = as())), a !== e ? (n = [n, a], t = n) : (r = t, t = e)) : (r = t, t = e));
      w = s, s = ap();
    } else
      r = s, s = e;
    return s;
  }
  function as() {
    var s;
    return s = Sg(), s === e && (s = Fg()), s;
  }
  function Sg() {
    var s, l, o, t;
    return s = r, i.charCodeAt(r) === 37 ? (l = wt, r++) : (l = e, u(Kt)), l !== e ? (o = Oi(), o !== e ? (t = Oi(), t !== e ? (l = [l, o, t], s = l) : (r = s, s = e)) : (r = s, s = e)) : (r = s, s = e), s;
  }
  function Oi() {
    var s;
    return M.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(j)), s === e && (Yl.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(tc)), s === e && (Ql.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = e, u(ic)))), s;
  }
  function Fg() {
    var s, l, o;
    return s = r, i.charCodeAt(r) === 92 ? (l = gt, r++) : (l = e, u(zt)), l !== e ? (i.charCodeAt(r) === 95 ? (o = dt, r++) : (o = e, u(Zt)), o === e && (i.charCodeAt(r) === 126 ? (o = Pl, r++) : (o = e, u(ac)), o === e && (i.charCodeAt(r) === 46 ? (o = z, r++) : (o = e, u(Z)), o === e && (i.charCodeAt(r) === 45 ? (o = he, r++) : (o = e, u(ue)), o === e && (i.charCodeAt(r) === 33 ? (o = Ys, r++) : (o = e, u(fr)), o === e && (i.charCodeAt(r) === 36 ? (o = ut, r++) : (o = e, u(Ut)), o === e && (i.charCodeAt(r) === 38 ? (o = Tl, r++) : (o = e, u(lc)), o === e && (i.charCodeAt(r) === 39 ? (o = Ke, r++) : (o = e, u(Je)), o === e && (i.charCodeAt(r) === 40 ? (o = m, r++) : (o = e, u(y)), o === e && (i.charCodeAt(r) === 41 ? (o = E, r++) : (o = e, u(P)), o === e && (i.charCodeAt(r) === 42 ? (o = ae, r++) : (o = e, u(le)), o === e && (i.charCodeAt(r) === 43 ? (o = Le, r++) : (o = e, u(Se)), o === e && (i.charCodeAt(r) === 44 ? (o = U, r++) : (o = e, u(H)), o === e && (i.charCodeAt(r) === 59 ? (o = Ue, r++) : (o = e, u(ke)), o === e && (i.charCodeAt(r) === 58 ? (o = He, r++) : (o = e, u(Be)), o === e && (i.charCodeAt(r) === 61 ? (o = us, r++) : (o = e, u(Rs)), o === e && (i.charCodeAt(r) === 47 ? (o = be, r++) : (o = e, u(me)), o === e && (i.charCodeAt(r) === 63 ? (o = Ws, r++) : (o = e, u(lr)), o === e && (i.charCodeAt(r) === 35 ? (o = qs, r++) : (o = e, u(pr)), o === e && (i.charCodeAt(r) === 64 ? (o = pt, r++) : (o = e, u(Ht)), o === e && (i.charCodeAt(r) === 37 ? (o = wt, r++) : (o = e, u(Kt)))))))))))))))))))))), o !== e ? (l = [l, o], s = l) : (r = s, s = e)) : (r = s, s = e), s;
  }
  let Ni = {};
  if (Ss = Q(), Ss !== e && r === i.length)
    return Ss;
  throw Ss !== e && r < i.length && u(lp()), fp(
    _r,
    pe < i.length ? i.charAt(pe) : null,
    pe < i.length ? $r(pe, pe + 1) : $r(pe, pe)
  );
}
let Ee, De, Ge, Qr = "  ", Bs = 0;
function cd(i, d = 2) {
  var e, A, L, Q, J;
  if (Qr = " ".repeat(d), Ee = [], De = i.comments, Ge = "", i.headers && R(i.headers.join("")), (e = i.prologue) != null && e.length && (i.prologue.forEach((W) => {
    W.base ? R(`BASE <${W.base}>`) : R(`PREFIX ${W.prefix || ""}: <${W.iri}>`);
  }), R("")), (A = i.queryBody) != null && A.select)
    Hi(i.queryBody);
  else if (((L = i.queryBody) == null ? void 0 : L.type) === "construct")
    gd(i.queryBody);
  else if (((Q = i.queryBody) == null ? void 0 : Q.type) === "ask")
    nd(i.queryBody);
  else if (((J = i.queryBody) == null ? void 0 : J.type) === "describe")
    hd(i.queryBody);
  else if (i.update)
    for (let W = 0; W < i.update.length; W++)
      W > 0 && (Ee[Ee.length - 1] += ` ;
`), ud(i.update[W]);
  for (i.values && Zr(i.values); De && De.length; )
    Ee[Ee.length - 1] += De.shift().text;
  return Ee.join(`
`);
}
const we = (i = 1) => {
  Ge += Qr.repeat(i);
}, _e = (i = 1) => {
  Ge = Ge.substr(0, Ge.length - Qr.length * i);
}, R = (i) => {
  Ee.push(Ge + i);
}, B = (i, d) => {
  for (; De && De.length && De[0].pos < d; )
    Ee[Ee.length - 1] += De.shift().text;
  R(i);
}, nd = (i) => {
  R("ASK {");
  const d = se(i.where);
  B("}", d + 1), Ms(i);
}, hd = (i) => {
  const d = i.describe.map(G).join(" ");
  if (R(`DESCRIBE ${d}`), zr(i.from), i.where) {
    R("WHERE {");
    const e = se(i.where);
    B("}", e + 1);
  }
  Ms(i);
}, ud = (i) => {
  if (i.type === "insertdata")
    R("INSERT DATA {"), we(), ye(i.insert), _e(), R("}");
  else if (i.type === "deletedata")
    R("DELETE DATA {"), we(), ye(i.delete), _e(), R("}");
  else if (i.type === "deletewhere")
    R("DELETE WHERE {"), we(), ye(i.delete), _e(), R("}");
  else if (i.type === "modify") {
    i.with && R(`WITH ${G(i.with)}`), i.delete && (R("DELETE {"), we(), ye(i.delete), _e(), R("}")), i.insert && (R("INSERT {"), we(), ye(i.insert), _e(), R("}")), i.using && i.using.forEach((e) => {
      R(`USING ${pd(e)}`);
    }), R("WHERE {");
    const d = se(i.where);
    B("}", d + 1);
  } else if (i.type === "add") {
    const d = ze(i.graphs[0]), e = ze(i.graphs[1]);
    let A = " ";
    i.silent && (A = " SILENT "), R(`ADD${A}${d} TO ${e}`);
  } else if (i.type === "move") {
    const d = ze(i.graphs[0]), e = ze(i.graphs[1]);
    let A = " ";
    i.silent && (A = " SILENT "), R(`MOVE${A}${d} TO ${e}`);
  } else if (i.type === "copy") {
    const d = ze(i.graphs[0]), e = ze(i.graphs[1]);
    let A = " ";
    i.silent && (A = " SILENT "), R(`COPY${A}${d} TO ${e}`);
  } else if (i.type === "load") {
    let d = " ";
    i.silent && (d = " SILENT "), R(`LOAD${d}${re(i.sourceGraph)}`);
  } else if (i.type === "clear") {
    let d = " ";
    i.silent && (d = " SILENT "), R(`CLEAR${d}${xi(i.destinyGraph)}`);
  } else if (i.type === "drop") {
    let d = " ";
    i.silent && (d = " SILENT "), R(`DROP${d}${xi(i.destinyGraph)}`);
  } else if (i.type === "create") {
    let d = " ";
    i.silent && (d = " SILENT "), R(`CREATE${d}GRAPH ${re(i.destinyGraph)}`);
  }
}, pd = (i) => i.named ? `NAMED ${re(i.iri)}` : re(i.iri), ze = (i) => i === "default" ? "DEFAULT" : re(i), xi = (i) => i === "default" ? "DEFAULT" : i === "named" ? "NAMED" : i === "all" ? "ALL" : `GRAPH ${re(i)}`, se = (i, d = 0) => (we(), i.select ? (Hi(i), i.values && (Zr(i.values), d = i.location.end.offset)) : i.graphPattern ? i.graphPattern.forEach((e) => {
  Di(e), d = e.location.end.offset;
}) : i.forEach((e) => {
  Di(e), d = e.location.end.offset;
}), _e(), d), Hi = (i) => {
  i.select;
  const d = i.location.start.offset;
  let e = i.location.end.offset;
  B(bd(i), d);
  const A = zr(i.from);
  A > e && (e = A), B("WHERE {", e + 1), e = se(i.where, e), B("}", e + 1), Ms(i);
}, zr = (i) => {
  if (i) {
    let d;
    return i.forEach((e) => {
      e.graph ? d = dd(e.graph) : e.namedGraph && (d = wd(e.namedGraph));
    }), d;
  }
}, Ms = (i) => {
  var d;
  i.group && R(_d(i.group)), i.having && R(`HAVING ${k(i.having[0])}`), i.orderBy && R("ORDER BY " + $d(i.orderBy)), (d = i.limitOffset) == null || d.forEach((e) => {
    e.limit ? R(`LIMIT ${e.limit}`) : e.offset && R(`OFFSET ${e.offset}`);
  });
}, gd = (i) => {
  i.template ? (B("CONSTRUCT {", i.location.start.offset), we(), ye(i.template.triplePattern), _e(), R("}")) : R("CONSTRUCT"), zr(i.from), R("WHERE {");
  const d = se(i.where);
  B("}", d + 1), Ms(i);
}, dd = (i) => {
  const d = re(i);
  if (d != null) {
    const e = i.location.start.offset, A = i.location.end.offset;
    return B("FROM " + d, e), A;
  }
}, wd = (i) => {
  const d = re(i);
  if (d != null) {
    const e = i.location.start.offset, A = i.location.end.offset;
    return B("FROM NAMED " + d, e), A;
  }
}, Di = (i) => {
  if (Bs = i.location.start.offset, i.graphPattern && i.graph) {
    B(`GRAPH ${G(i.graph)} {`, Bs);
    const d = se(i);
    B("}", d + 1);
    return;
  }
  if (i.graphPattern || i.select) {
    R("{");
    const d = se(i);
    B("}", d + 1);
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
      d > 0 && R("UNION"), R("{"), se(i.union[d]), B("}", i.union[d].location.end.offset + 2);
    return;
  }
  if (i.optional) {
    B("OPTIONAL {", Bs);
    const d = se(i.optional);
    B("}", d + 1);
    return;
  }
  if (i.minus) {
    B("MINUS {", Bs);
    const d = se(i.minus);
    B("}", d + 1);
    return;
  }
  if (i.filter) {
    md(i);
    return;
  }
  if (i.bind) {
    R(`BIND (${k(i.bind)} AS ${ce(i.as)})`);
    return;
  }
  if (i.service) {
    let d = " ";
    i.silent && (d = " SILENT "), R(`SERVICE${d}${G(i.service)} {`);
    const e = se(i.pattern);
    B("}", e + 1);
    return;
  }
  if (i.functionRef) {
    const d = i.args.map(k).join(", ");
    R(re(i.functionRef) + `(${d})`);
  }
}, _d = (i) => {
  let d = ["GROUP BY"], e = 0;
  return i.forEach((A) => {
    d[e].length > 80 ? (e++, d[e] = "  ") : d[e] += " ", d[e] += G(A);
  }), d.join(`
`);
}, $d = (i) => {
  let d = [];
  return i.forEach((e) => {
    let A;
    e.variable ? A = ce(e) : A = k(e), e.asc ? d.push(`ASC(${A})`) : e.desc ? d.push(`DESC(${A})`) : d.push(A);
  }), d.join(" ");
}, bd = (i) => {
  let d = [];
  d[0] = "SELECT", i.distinct && (d[0] += " DISTINCT"), i.reduced && (d[0] += " REDUCED");
  let e = 0;
  return i.select.forEach((A) => {
    d[e].length > 80 ? (e++, d[e] = "  ") : d[e] += " ", d[e] += vd(A);
  }), d.join(`
`);
}, vd = (i) => {
  if (i.variable)
    return ce(i);
  if (i.as)
    return `(${k(i.expression)} AS ${ce(i.as)})`;
  if (i === "*")
    return "*";
}, md = (i) => {
  if (i.filter.notexists) {
    R("FILTER NOT EXISTS {");
    const d = se(i.filter.notexists);
    B("}", d + 1);
  } else if (i.filter.exists) {
    R("FILTER EXISTS {");
    const d = se(i.filter.exists);
    B("}", d + 1);
  } else
    B(`FILTER ${k(i.filter)}`, i.location.start.offset);
}, ye = (i) => {
  i.forEach((d) => {
    d.graph ? (B(`GRAPH ${G(d.graph)} {`, d.graph.location.start.offset), we(), ye(d.triplePattern), _e(), R("}")) : d.triplePattern ? ye(d.triplePattern) : Ad(d);
  });
}, Ad = (i) => {
  const d = G(i.subject);
  let e, A;
  i.properties.forEach((L) => {
    e ? (B(`${e} ;`, A), e = " ".repeat(d.length) + ` ${G(L.predicate)} ${G(L.objects)}`, L.predicate.location ? A = L.predicate.location.start.offset : A = L.predicate.value.location.start.offset) : (e = `${d} ${G(L.predicate)} ${G(L.objects)}`, A = i.subject.location.start.offset);
  }), B(`${e} .`, A);
}, Cd = (i, d) => {
  if (i.length === 1 && !d) {
    const L = i[0];
    return ` ${G(L.predicate)} ${G(L.objects)}`;
  }
  we();
  let e = "";
  const A = Ge + " ".repeat(2);
  return i.forEach((L) => {
    e ? (e += ` ;
`, e += `${A} ${G(L.predicate)} ${G(L.objects, !0)}`) : (e += `
${A}`, e += ` ${G(L.predicate)} ${G(L.objects, !0)}`);
  }), e += `
${Ge}`, _e(), e;
}, Ed = (i) => {
  if (i.aggregateType === "count") {
    let d = i.distinct ? "DISTINCT " : "", e;
    return i.expression === "*" ? e = "*" : e = k(i.expression), `COUNT(${d}${e})`;
  } else {
    if (i.aggregateType === "sum")
      return `sum(${ce(i.expression.value)})`;
    if (i.aggregateType === "min")
      return `MIN(${ce(i.expression.value)})`;
    if (i.aggregateType === "max")
      return `MAX(${ce(i.expression.value)})`;
    if (i.aggregateType === "avg")
      return `AVG(${k(i.expression)})`;
    if (i.aggregateType === "sample")
      return `SAMPLE(${ce(i.expression.value)})`;
    if (i.aggregateType === "group_concat") {
      let d = i.distinct ? "DISTINCT " : "", e = "";
      return i.separator && (e = `; SEPARATOR = ${ki(i.separator)}`), `GROUP_CONCAT(${d}${k(i.expression)}${e})`;
    }
  }
}, k = (i) => {
  if (i.functionRef)
    return re(i.functionRef) + "(" + i.args.map(k).join(", ") + ")";
  switch (i.expressionType) {
    case "atomic":
      return G(i.value);
    case "irireforfunction":
      let d = re(i.iriref);
      return i.args && (d += "(" + i.args.map(k).join(", ") + ")"), Ae(d, i.bracketted);
    case "builtincall":
      let e = "";
      return i.args && (e = i.args.map(G).join(", ")), Ae(`${i.builtincall}(${e})`, i.bracketted);
    case "unaryexpression":
      let A = i.unaryexpression + k(i.expression);
      return Ae(A, i.bracketted);
    case "aggregate":
      return Ed(i);
    case "multiplicativeexpression":
      let L = k(i.first);
      return i.rest.forEach((O) => {
        L += " " + O.operator + " " + k(O.expression);
      }), Ae(L, i.bracketted);
    case "additiveexpression":
      let Q = k(i.op1);
      return i.ops.forEach((O) => {
        Q += " " + O.operator + " " + k(O.expression);
      }), Ae(Q, i.bracketted);
    case "relationalexpression":
      let J = k(i.op1) + " " + i.operator + " ";
      return Array.isArray(i.op2) ? J += "(" + i.op2.map(G).join(", ") + ")" : J += k(i.op2), Ae(J, i.bracketted);
    case "aliasedexpression":
      let W = k(i.expression);
      return i.as && (W += ` AS ${ce(i.as)}`), Ae(W, i.bracketted);
    case "conditionaland":
      return Ae(i.operands.map(k).join(" && "), i.bracketted);
    case "conditionalor":
      return Ae(i.operands.map(k).join(" || "), i.bracketted);
    case "regex":
      let ne = k(i.text);
      return ne += ", " + k(i.pattern), i.flags && (ne += ", " + k(i.flags)), `regex(${ne})`;
  }
}, Ae = (i, d) => d ? `(${i})` : i, Zr = (i) => {
  if (i.oneVar) {
    const d = G(i.oneVar), e = i.data.map(G).join(" ");
    R(`VALUES ${d} { ${e} }`);
  } else if (i.variables) {
    const d = i.variables.map(ce).join(" ");
    if (i.variables.length === 1) {
      const e = i.data.map((A) => "(" + A.map(G).join(" ") + ")").join(" ");
      R(`VALUES (${d}) { ${e} }`);
    } else
      R(`VALUES (${d}) {`), we(), i.data.map((e) => {
        R("(" + e.map(G).join(" ") + ")");
      }), _e(), R("}");
  }
}, G = (i, d = !1) => {
  if (i === "UNDEF")
    return i;
  if (Array.isArray(i))
    return i.map((A) => G(A, d)).join(", ");
  if (i.variable)
    return ce(i);
  if (i.collection)
    return `( ${i.collection.map((L) => G(L)).join(" ")} )`;
  if (i.hasOwnProperty("literal"))
    return ki(i);
  if (i.blankNode)
    return i.blankNode;
  if (i.expressionType)
    return k(i);
  if (i.blankNodeProperties)
    return `[${Cd(i.blankNodeProperties, d)} ]`;
  let e = "";
  return i.inverse && (e += "^"), (i.iriPrefix || i.iriLocal || i.iri || i.a) && (e += re(i)), i.alternative ? e += i.alternative.map((A) => G(A)).join("|") : i.sequence && (e += i.sequence.map((A) => G(A)).join("/")), i.bracketted && (e = `(${e})`), i.modifier && (e += i.modifier), e;
}, ki = (i) => {
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
}, ce = (i) => i.varType === "$" ? "$" + i.variable : "?" + i.variable, Bi = (i, d = 2) => cd(od(i), d);
typeof window < "u" && (window.spfmt = Bi);
const yd = "http://purl.org/ontology/bibo/", Pd = "http://iflastandards.info/ns/lrm/lrmoo/", Ce = "http://www.cidoc-crm.org/cidoc-crm/", Td = "http://www.ics.forth.gr/isl/CRMdig/", Rd = "http://dbpedia.org/resource/", Ld = "http://purl.org/dc/elements/1.1/", Mi = "http://purl.org/dc/terms/", Id = "http://xmlns.com/foaf/0.1/", Od = "http://data-iremus.huma-num.fr/ns/hemef#", Nd = "http://data-iremus.huma-num.fr/id/", Sd = "http://data-iremus.huma-num.fr/ns/", Fd = "http://data-iremus.huma-num.fr/graph/", xd = "http://www.mimo-db.eu/", Dd = "http://data-iremus.huma-num.fr/ns/musrad30#", Gd = "http://www.w3.org/2002/07/owl#", ji = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", Xi = "http://www.w3.org/2000/01/rdf-schema#", Ud = "http://schema.org/", Wr = "http://www.w3.org/2004/02/skos/core#", Hd = /* @__PURE__ */ new Map([
  [Ce, "crm"],
  [Td, "crmdig"],
  [yd, "bibo"],
  [Rd, "dbpedia"],
  [Ld, "dc"],
  [Mi, "dcterms"],
  [Id, "foaf"],
  [Od, "hemef"],
  [Fd, "iremus-graph"],
  [Nd, "iremus-data"],
  [Sd, "iremus-ns"],
  [Pd, "lrmoo"],
  [xd, "mimo"],
  [Dd, "musrad30"],
  [Gd, "owl"],
  [ji, "rdf"],
  [Xi, "rdfs"],
  [Ud, "schema"],
  [Wr, "skos"]
]);
Object.entries(Hd).sort(
  (i, d) => i[0].length < d[0].length ? 1 : -1
);
const _1 = [
  Ce + "P1_is_identified_by",
  Ce + "P102_has_title",
  Ce + "P190_has_symbolic_content",
  Ce + "P1_is_identified_by",
  Ce + "E35_Title",
  Ce + "E41_Appellation",
  Ce + "E42_Identifier",
  Ce + "P2_has_type",
  Mi + "title",
  ji + "type",
  Xi + "label",
  Wr + "prefLabel",
  Wr + "altLabel"
];
var kd = /* @__PURE__ */ ((i) => (i.INCOMING = "INCOMING", i.OUTGOING = "OUTGOING", i))(kd || {});
const Bd = () => [
  "crm:P1_is_identified_by",
  "crm:P48_has_preferred_identifier",
  "crm:P102_has_title",
  "dcterms:title",
  "crm:P190_has_symbolic_content",
  "rdfs:label",
  "skos:prefLabel",
  "skos:altLabel"
].join(" "), Vi = () => [
  "crm:P1_is_identified_by",
  "crm:P48_has_preferred_identifier",
  "crm:P102_has_title"
].join(" "), Md = () => ["crm:E35_Title", "crm:E41_Appellation", "crm:E42_Identifier"].join(" "), $1 = (i, d = !1, e = [], A = "OUTGOING") => Bi(
  Vd() + (d ? Xd(
    i,
    e,
    A
  ) : jd(i))
), jd = (i) => `
SELECT *
WHERE {
  GRAPH ?g {
    ${Jr(`<${i}>`)}
    UNION
    ${qr(`<${i}>`)}
    UNION
    ${Kr(`<${i}>`)}
    UNION
    ${Wd(`<${i}>`)}
  }
}
`, Xd = (i, d, e) => {
  let A = "";
  return d.length > 0 && (A = `VALUES ?lp { ${d.map((L) => `<${L}>`).join(" ")} }`), `
SELECT *
WHERE {
  GRAPH ?g {
    ${A}
    ${e === "INCOMING" ? `?lr ?lp <${i}>` : `<${i}> ?lp ?lr`}
    OPTIONAL {
      GRAPH ?r_g {
        ${Jr("?lr")}
        UNION
        ${qr("?lr")}
        UNION
        ${Kr("?lr")} 
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
`, Kr = (i) => `
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
`, Jr = (i) => `
{ ######## get direct literal label
${i} ?p ?label .
VALUES ?p { ${Bd()} } .
FILTER(isLiteral(?label)) .
}
`, qr = (i) => `
{ ######## get identifiers linked resources
  ${i} ?p ?r .
  VALUES ?p { ${Vi()} }
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
`, b1 = (i, d) => `${zd()}  
  SELECT *
  WHERE {
    ${Yd(i, d)}
    GRAPH ?g {
    ${Jr("?s")}
    UNION
    ${qr("?s")}
    UNION
    ${Kr("?s")}
    }
  }`, Yd = (i, d) => `
{
  SELECT DISTINCT ?s ?score WHERE 
  {
    # Literal text:query that match an identifier 
    {
      { (?x ?score) text:query ("${i}")}
      GRAPH ?g_x {
        VALUES ?identifier_predicate {${Vi()}} .
        ?s ?identifier_predicate ?x 
      }
    }
    UNION
    # Literal text:query that match a relevant resource
    # Pas de P190 car le sujet d'un P190 n'est pas la ressource en tant que telle.
    {
      ${Qd().map((e) => `
      {
        (?s ?score) text:query (${e} "${i}")
      }
      `).join(" UNION ")}
    }
  }
  ORDER BY DESC(?score) 
  LIMIT ${d}  
}
`, Qd = () => [
  "crm:P1_is_identified_by",
  "crm:P102_has_title",
  "dcterms:title",
  "rdfs:label",
  "skos:prefLabel",
  "skos:altLabel"
], zd = () => `PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX text: <http://jena.apache.org/text#>
`, v1 = () => `
    PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
    PREFIX lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/>
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
`, m1 = (i, d) => `

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
GROUP BY ?note_pname`, A1 = (i) => `
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
`, C1 = (i) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE { <${i}> crm:P140_assigned_attribute_to ?p140 }`, E1 = () => `
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
`, y1 = (i) => `
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
`, P1 = (i) => `
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

LIMIT ${i}`;
function T1(i) {
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
const R1 = (i = "", d = "", e = "", A = "") => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

SELECT *
WHERE {
  GRAPH ?g {
    ${i ? `BIND (<${i}> as ?f1)` : ""}
    ${d ? `BIND (<${d}> as ?f2)` : ""}
    ${e ? `BIND (<${e}> as ?f3)` : ""}
    ${A ? `BIND (<${A}> as ?f5)` : ""}
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
`;
export {
  e1 as ANALYTICAL_ENTITY,
  xg as ANALYTICAL_PROJECT,
  t1 as ANNOTATION,
  Dg as DRAFT_PROJECT,
  _1 as IDENTITY_PREDICATES,
  kd as LinkedResourcesDirectionEnum,
  Zd as NOTE,
  Jd as POSITIONNED_NOTE,
  s1 as SCORE,
  Kd as SELECTION,
  r1 as SOFTWARE,
  qd as VERTICALITY,
  Wd as authorityDocument,
  o1 as contributions,
  n1 as contributors,
  u1 as countIncomingPredicates,
  h1 as countOutgoingPredicates,
  p1 as documentsByIndex,
  g1 as fondamentales,
  i1 as getAnalyticalProject,
  a1 as getAnnotations,
  c1 as getContributor,
  C1 as getP140,
  T1 as getResourceByUrlFragment,
  d1 as getResources,
  w1 as historicalModelsOntologies,
  Vi as identifiersPredicates,
  qr as identifiersResources,
  Jr as identitiersLiterals,
  b1 as identitiesByTextQuery,
  $1 as identity,
  v1 as mg_livraisons,
  m1 as noteOccurences,
  A1 as p127,
  E1 as scores,
  y1 as selections,
  P1 as tonalitiesContributions,
  Kr as types,
  R1 as wemi
};

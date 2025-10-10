const zg = "http://purl.org/ontology/bibo/", Zg = "http://iflastandards.info/ns/lrm/lrmoo/", xs = "http://www.cidoc-crm.org/cidoc-crm/", Kg = "http://www.ics.forth.gr/isl/CRMdig/", Jg = "http://dbpedia.org/resource/", qg = "http://purl.org/dc/elements/1.1/", Hg = "http://purl.org/dc/terms/", e1 = "http://xmlns.com/foaf/0.1/", s1 = "http://data-iremus.huma-num.fr/ns/hemef#", r1 = "http://data-iremus.huma-num.fr/id/", i1 = "http://data-iremus.huma-num.fr/ns/sherlock#", t1 = "http://data-iremus.huma-num.fr/graph/", l1 = "http://www.mimo-db.eu/", a1 = "http://data-iremus.huma-num.fr/ns/musrad30#", f1 = "http://www.w3.org/2002/07/owl#", Bg = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", kg = "http://www.w3.org/2000/01/rdf-schema#", o1 = "http://schema.org/", Cg = "http://www.w3.org/2004/02/skos/core#", mg = /* @__PURE__ */ new Map([
  [xs, "crm"],
  [Kg, "crmdig"],
  [zg, "bibo"],
  [Jg, "dbpedia"],
  [qg, "dc"],
  [Hg, "dcterms"],
  [e1, "foaf"],
  [s1, "hemef"],
  [t1, "iremus-graph"],
  [r1, "iremus-data"],
  [i1, "iremus-ns"],
  [Zg, "lrmoo"],
  [l1, "mimo"],
  [a1, "musrad30"],
  [f1, "owl"],
  [Bg, "rdf"],
  [kg, "rdfs"],
  [o1, "schema"],
  [Cg, "skos"]
]);
Object.entries(mg).sort(
  (c, b) => c[0].length < b[0].length ? 1 : -1
);
class Gg {
  prefix;
  localPart;
  constructor(b, e) {
    this.prefix = b, this.localPart = e;
  }
  toString() {
    return this.prefix + ":" + this.localPart;
  }
}
function c1(c) {
  for (const b of mg.keys())
    if (c.startsWith(b))
      return new Gg(mg.get(b), c.replace(b, ""));
  return new Gg("", c);
}
const h1 = [
  "crm:P1_is_identified_by",
  "crm:P48_has_preferred_identifier",
  "crm:P102_has_title",
  "rdfs:label",
  "skos:prefLabel"
], Et = [
  "crm:P1_is_identified_by",
  "crm:P102_has_title",
  "crm:P48_has_preferred_identifier",
  "crm:P190_has_symbolic_content",
  "dcterms:title",
  "rdfs:label",
  "skos:altLabel",
  "skos:prefLabel"
], n1 = [
  xs + "P1_is_identified_by",
  xs + "P102_has_title",
  xs + "P190_has_symbolic_content",
  xs + "P1_is_identified_by",
  xs + "E35_Title",
  xs + "E41_Appellation",
  xs + "E42_Identifier",
  xs + "P2_has_type",
  Hg + "title",
  Bg + "type",
  kg + "label",
  Cg + "prefLabel",
  Cg + "altLabel"
], u1 = n1.map(c1).map((c) => c.toString());
var Lg = /* @__PURE__ */ ((c) => (c.INCOMING = "INCOMING", c.OUTGOING = "OUTGOING", c))(Lg || {});
const p1 = {
  "http://www.cidoc-crm.org/cidoc-crm/": "crm",
  "http://purl.org/dc/terms/": "dcterms",
  "http://www.w3.org/1999/02/22-rdf-syntax-ns#": "rdf",
  "http://www.w3.org/2000/01/rdf-schema#": "rdfs",
  "http://www.w3.org/2004/02/skos/core#": "skos",
  "http://jena.apache.org/text#": "text",
  "http://data-iremus.huma-num.fr/ns/sherlock#": "sherlock",
  "http://data-iremus.huma-num.fr/id/": "iremus",
  "http://purl.org/dc/elements/1.1/": "purl",
  "http://xmlns.com/foaf/0.1/": "foaf"
};
function g1() {
  let c = "";
  for (const [b, e] of Object.entries(p1))
    c += `PREFIX ${e}: <${b}>
`;
  return c;
}
const $d = "http://data-iremus.huma-num.fr/id/d2a536eb-4a95-484f-b13d-f597ac8ea2fd", vd = "http://data-iremus.huma-num.fr/id/9d0388cb-a178-46b2-b047-b5a98f7bdf0b", bd = "http://data-iremus.huma-num.fr/id/689e148d-a97d-45b4-898d-c395a24884df", _d = "http://data-iremus.huma-num.fr/id/90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86", Ad = "http://data-iremus.huma-num.fr/id/6d72746a-9f28-4739-8786-c6415d53c56d", Cd = "http://data-iremus.huma-num.fr/id/bf9dce29-8123-4e8e-b24d-0c7f134bbc8e", md = "http://data-iremus.huma-num.fr/id/29b00e39-75da-4945-b6c4-a0ca00f96f68", Ed = "http://data-iremus.huma-num.fr/id/82dbd157-20df-422c-88db-28d6075d99a1", d1 = "http://data-iremus.huma-num.fr/id/21816195-6708-4bbd-a758-ee354bb84900", w1 = "http://data-iremus.huma-num.fr/id/cabe46bf-23d4-4392-aa20-b3eb21ad7dfd", yd = (c) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
    VALUES ?project { <${c}> }
    VALUES ?draft { <${w1}> }
    ?project crm:P2_has_type <${d1}>.
    ?project crm:P1_is_identified_by ?label.
    ?project crm:P14_carried_out_by ?contributor.
    OPTIONAL { ?project sherlock:has_privacy_type ?draft }.
}
LIMIT 1`, Pd = (c, b) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX dcterms: <http://purl.org/dc/terms/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
  ?annotation sherlock:has_document_context <${c}>.
  <${b}> crm:P9_consists_of ?annotation.
  ?annotation crm:P141_assigned ?concept.
  ?annotation dcterms:created ?date.
  ?annotation crm:P140_assigned_attribute_to  ?entity.
  ?e13 crm:P141_assigned ?entity.
  ?e13 sherlock:has_document_context ?page.
}
`, $1 = "http://purl.org/ontology/bibo/", v1 = "http://iflastandards.info/ns/lrm/lrmoo/", b1 = "http://www.cidoc-crm.org/cidoc-crm/", _1 = "http://www.ics.forth.gr/isl/CRMdig/", A1 = "http://dbpedia.org/resource/", C1 = "http://purl.org/dc/elements/1.1/", m1 = "http://purl.org/dc/terms/", E1 = "http://xmlns.com/foaf/0.1/", y1 = "http://data-iremus.huma-num.fr/ns/hemef#", Ye = "http://data-iremus.huma-num.fr/id/", P1 = "http://data-iremus.huma-num.fr/id/", T1 = "http://data-iremus.huma-num.fr/ns/", L1 = "http://data-iremus.huma-num.fr/graph/", R1 = "http://www.mimo-db.eu/", I1 = "http://data-iremus.huma-num.fr/ns/musrad30#", O1 = "http://www.w3.org/2002/07/owl#", S1 = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", N1 = "http://www.w3.org/2000/01/rdf-schema#", x1 = "http://schema.org/", F1 = "http://www.w3.org/2004/02/skos/core#", D1 = /* @__PURE__ */ new Map([
  [b1, "crm"],
  [_1, "crmdig"],
  [$1, "bibo"],
  [A1, "dbpedia"],
  [C1, "dc"],
  [m1, "dcterms"],
  [E1, "foaf"],
  [y1, "hemef"],
  [L1, "iremus-graph"],
  [P1, "iremus-data"],
  [T1, "iremus-ns"],
  [v1, "lrmoo"],
  [R1, "mimo"],
  [I1, "musrad30"],
  [O1, "owl"],
  [S1, "rdf"],
  [N1, "rdfs"],
  [x1, "schema"],
  [F1, "skos"]
]);
Object.entries(D1).sort(
  (c, b) => c[0].length < b[0].length ? 1 : -1
);
class G1 {
  _pog;
  _uri;
  constructor(b = "") {
    this._uri = b, this._pog = /* @__PURE__ */ new Map();
  }
  getValues(b) {
    return this._pog.get(b);
  }
  addPOG(b, e) {
    this._pog.has(b) ? this._pog.get(b)?.push(e) : this._pog.set(b, [e]);
  }
  get uri() {
    return this._uri;
  }
  get pog() {
    return this._pog;
  }
}
class It {
  static void = new It("");
  _classesRegistry = /* @__PURE__ */ new Map();
  _name;
  _classes;
  _properties;
  _propertiesRegistry = /* @__PURE__ */ new Map();
  constructor(b) {
    this._name = b, this._classes = [], this._properties = [];
  }
  addClass(b) {
    this._classes.push(b), this._classes = this._classes.sort(), this._classesRegistry.set(b.uri, b);
  }
  addProperty(b) {
    this._properties.push(b), this._properties = this._properties.sort(), this._propertiesRegistry.set(b.uri, b);
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
    this._classes = this._classes.sort((b, e) => b.intCodeForSorting - e.intCodeForSorting), this._properties = this._properties.sort((b, e) => b.intCodeForSorting - e.intCodeForSorting);
  }
}
class Mg extends G1 {
  static label = "";
  _comment;
  _intCodeForSorting;
  _label;
  _name;
  _ontology;
  constructor(b, e, T) {
    super(b), this._comment = /* @__PURE__ */ new Map(), this._intCodeForSorting = -1, this._label = /* @__PURE__ */ new Map(), this._name = e, this._ontology = T;
  }
  get comment() {
    return this._comment;
  }
  set comment(b) {
    this._comment = b;
  }
  get intCodeForSorting() {
    return this._intCodeForSorting;
  }
  set intCodeForSorting(b) {
    this._intCodeForSorting = b;
  }
  set label(b) {
    this._label = b;
  }
  get name() {
    return this._name;
  }
  get ontology() {
    return this._ontology;
  }
  getComment(b) {
    return this._comment.get(b);
  }
  getLabel(b) {
    return this._label.get(b);
  }
}
class Lt extends Mg {
  static void = new Lt("", "", It.void);
  _subClassOf;
  constructor(b, e, T) {
    super(b, e, T), this._subClassOf = new Array();
  }
  addSubClassOf(b) {
    this._subClassOf.push(b);
  }
}
class Eg extends Mg {
  static void = new Eg("", "", It.void);
  _domain = Lt.void;
  _inverseOf = Eg.void;
  _range = Lt.void;
  _subPropertyOf;
  constructor(b, e, T) {
    super(b, e, T), this._subPropertyOf = new Array();
  }
  get domain() {
    return this._domain;
  }
  set domain(b) {
    this._domain = b;
  }
  get inverseOf() {
    return this._inverseOf;
  }
  set inverseOf(b) {
    this._inverseOf = b;
  }
  get range() {
    return this._range;
  }
  set range(b) {
    this._range = b;
  }
  addSubPropertyOf(b) {
    this._subPropertyOf.push(b);
  }
}
const ye = {
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
}, Td = (c) => `
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
      ?contribution dcterms:creator <${c}>. #CONTRIBUTOR
      VALUES ?contribution_type { <${ye.selection}> } #SELECTION TYPE
      ?contribution crm:P2_has_type ?contribution_type.
      GRAPH ?g1 {
        ?contribution_type crm:P1_is_identified_by ?contribution_type_label
      }
    } 
    UNION 
    # CONTRIBUTIONS FROM CRM:E13 --> CRM:P14
    {
    	?contribution crm:P14_carried_out_by <${c}>. #CONTRIBUTOR
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
`, Ld = (c) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX analysis: <http://modality-tonality.huma-num.fr/analysisOntology#>
SELECT ?contributor ?color ?emoji ?program
FROM <http://data-iremus.huma-num.fr/graph/users>
WHERE {
    VALUES ?contributor { <${c}> }
    
    OPTIONAL { ?contributor analysis:hasPythonModuleName ?program }
    OPTIONAL {
        ?contributor crm:P1_is_identified_by ?unicode.
        ?unicode crm:P2_has_type <http://data-iremus.huma-num.fr/id/04242f64-fbb3-4b5b-bb2e-3ddd59eeea18>.
        ?unicode crm:P190_has_symbolic_content ?emoji.
        ?contributor crm:P1_is_identified_by ?hexcode.
        ?hexcode crm:P2_has_type <http://data-iremus.huma-num.fr/id/5f1bb74f-6ea0-4073-8b68-086f98454f1c>.
        ?hexcode crm:P190_has_symbolic_content ?color.
    }
}`, Rd = () => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT ?contributor ?name (COUNT(?contribution) AS ?contributions) (CONCAT( "#", ?hex_color_code) AS ?hex_color) ?emoji ?orcid (IRI(CONCAT("https://orcid.org/", ?orcid)) AS ?orcid_profile) (IRI(CONCAT("https://pub.orcid.org/v3.0/", ?orcid)) AS ?orcid_api_user_endpoint) ?untyped_identifier ?contributor_type_label ?user_graph

WHERE {
  GRAPH ?user_graph {  
    VALUES ?contributor_type_predicate {rdf:type crm:P2_has_type}. 
    VALUES ?contributor_type {crm:E21_Person <${ye.software}>}. #PERSON OR SOFTWARE
    ?contributor ?contributor_type_predicate ?contributor_type
    
    OPTIONAL {
	    ?contributor crm:P2_has_type <${ye.software}>. #SOFTWARE
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
      ?hex_color_code_identifier crm:P2_has_type <${ye.hexColorCode}>. #HEX COLOR CODE IDENTIFIER
      ?hex_color_code_identifier crm:P190_has_symbolic_content ?hex_color_code
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?emoji_identifier.
      ?emoji_identifier crm:P2_has_type <${ye.emoji}>. #EMOJI IDENTIFIER
      ?emoji_identifier crm:P190_has_symbolic_content ?emoji
    }
    OPTIONAL {
      ?contributor crm:P1_is_identified_by ?orcid_appellation.
      ?orcid_appellation crm:P2_has_type <${ye.orcidGeneratedName}>. #ORCID NAME IDENTIFIER
      ?orcid_appellation crm:P190_has_symbolic_content ?name
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?ORCID_identifier.
      ?ORCID_identifier crm:P2_has_type <${ye.orcidId}>. #ORCID IDENTIFIER
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
GROUP BY ?contributor ?name ?hex_color_code ?emoji ?orcid ?orcid_profile ?untyped_identifier ?contributor_type_label ?user_graph`, Id = (c) => `
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    <${c}> ?lp ?lr .
  }
}
GROUP BY ?lp
`, Od = (c) => `
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    ?lr ?lp <${c}> .
  }
}
GROUP BY ?lp
`, Sd = (c) => `
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX she: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT ?e13_p140 (GROUP_CONCAT(DISTINCT ?e13_p140_label ; separator=" \\n~~\\n ") as ?e13_p140_labels) ?e13_p177 ?e13_p177_label ?concept ?concept_description ?context (GROUP_CONCAT(DISTINCT ?context_label ; separator=" \\n~~\\n ") as ?context_labels) ?creation_date ?creator ?creator_label ?analytical_project ?analytical_project_label
WHERE 
{ 
    GRAPH <http://data-iremus.huma-num.fr/graph/opentheso> {
        <${c}> skos:narrower* ?concept .
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

`, Nd = (c) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT *
WHERE {
  GRAPH ?g {
    ?pc0 crm:P01_has_domain <${c}> .
    ?pc0 rdf:type ?pc0_type .
    ?pc0 crm:P03_has_range_literal ?value .
    ?pc0 ?dotOneProperty ?e55 .
    VALUES ?dotOneProperty { crm:P3.1_has_type crm:P14.1_in_the_role_of crm:P16.1_mode_of_use crm:P19.1_mode_of_use crm:P62.1_mode_of_depiction crm:P67.1_has_type crm:P69.1_has_type crm:P102.1_has_type crm:P107.1_kind_of_member crm:P130.1_kind_of_similarity crm:P136.1_in_the_taxonomic_role crm:P137.1_in_the_taxonomic_role crm:P138.1_mode_of_representation crm:P139.1_has_type crm:P144.1_kind_of_member crm:P189.1_has_type }
  }
  GRAPH ?g_types {
    ?e55 rdf:type crm:E55_Type .
    ?e55 crm:P1_is_identified_by ?e55_label .
  }
}`, xd = (c) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT *
WHERE {
    GRAPH ?g {
        ?e13 crm:P140_assigned_attribute_to <${c}> .
        ?e13 rdf:type crm:E13_Attribute_Assignment .
        ?e13 crm:P141_assigned ?p141 .
        ?e13 crm:P177_assigned_property_of_type ?p177 .
        FILTER(isLiteral(?p141))
    }
    GRAPH ?g_meta {
        ?p177 crm:P1_is_identified_by ?p177_label .
        FILTER(isLiteral(?p177_label))
    }
}`, Fd = (c) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT DISTINCT ?score ?annotation ?verticality ?note_label ?measure_number 
WHERE {
  GRAPH ?g {
    ${U1(c)}
    ?score crm:P2_has_type <${ye.score}>. #Score type
    ?verticality sherlock:has_document_context ?score.
    ?verticality crm:P2_has_type <${ye.verticality}>. #MEI score offset
    ?note_in_score sherlockmei:contains_beat ?verticality.
    ?note_in_score sherlockmei:measure_number ?measure_number.
    GRAPH ?sherlock_graph {
        ?annotation crm:P140_assigned_attribute_to ?verticality.
        ?annotation crm:P177_assigned_property_of_type <${ye.fondamentaleIdentification}>. #Identification de fondamentale
        ?annotation crm:P141_assigned ?note.
        GRAPH ?sherlock_data_graph {
            ?note crm:P1_is_identified_by ?note_label
        }
    }
  }
}
ORDER BY ?score ?measure_number
`, U1 = (c) => c ? `BIND (<${c}> as ?score).` : "";
function j1(c, b) {
  function e() {
    this.constructor = c;
  }
  e.prototype = b.prototype, c.prototype = new e();
}
function Mr(c, b, e, T) {
  var x = Error.call(this, c);
  return Object.setPrototypeOf && Object.setPrototypeOf(x, Mr.prototype), x.expected = b, x.found = e, x.location = T, x.name = "SyntaxError", x;
}
j1(Mr, Error);
function _g(c, b, e) {
  return e = e || " ", c.length > b ? c : (b -= c.length, e += e.repeat(b), c + e.slice(0, b));
}
Mr.prototype.format = function(c) {
  var b = "Error: " + this.message;
  if (this.location) {
    var e = null, T;
    for (T = 0; T < c.length; T++)
      if (c[T].source === this.location.source) {
        e = c[T].text.split(/\r\n|\n|\r/g);
        break;
      }
    var x = this.location.start, K = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(x) : x, ue = this.location.source + ":" + K.line + ":" + K.column;
    if (e) {
      var Ee = this.location.end, pe = _g("", K.line.toString().length, " "), O = e[x.line - 1], F = x.line === Ee.line ? Ee.column : O.length + 1, A = F - x.column || 1;
      b += `
 --> ` + ue + `
` + pe + ` |
` + K.line + " | " + O + `
` + pe + " | " + _g("", x.column - 1, " ") + _g("", A, "^");
    } else
      b += `
 at ` + ue;
  }
  return b;
};
Mr.buildMessage = function(c, b) {
  var e = {
    literal: function(O) {
      return '"' + x(O.text) + '"';
    },
    class: function(O) {
      var F = O.parts.map(function(A) {
        return Array.isArray(A) ? K(A[0]) + "-" + K(A[1]) : K(A);
      });
      return "[" + (O.inverted ? "^" : "") + F.join("") + "]";
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
  function x(O) {
    return O.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(F) {
      return "\\x0" + T(F);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(F) {
      return "\\x" + T(F);
    });
  }
  function K(O) {
    return O.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(F) {
      return "\\x0" + T(F);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(F) {
      return "\\x" + T(F);
    });
  }
  function ue(O) {
    return e[O.type](O);
  }
  function Ee(O) {
    var F = O.map(ue), A, fe;
    if (F.sort(), F.length > 0) {
      for (A = 1, fe = 1; A < F.length; A++)
        F[A - 1] !== F[A] && (F[fe] = F[A], fe++);
      F.length = fe;
    }
    switch (F.length) {
      case 1:
        return F[0];
      case 2:
        return F[0] + " or " + F[1];
      default:
        return F.slice(0, -1).join(", ") + ", or " + F[F.length - 1];
    }
  }
  function pe(O) {
    return O ? '"' + x(O) + '"' : "end of input";
  }
  return "Expected " + Ee(c) + " but " + pe(b) + " found.";
};
function Tt(c, b) {
  b = b !== void 0 ? b : {};
  var e = {}, T = b.grammarSource, x = { DOCUMENT: Xi }, K = Xi, ue = "base", Ee = "prefix", pe = "select", O = "distinct", F = "reduced", A = "(", fe = "as", E = ")", ee = "*", Vr = "construct", qe = "where", ge = "{", de = "}", Ot = "describe", St = "ask", Nt = "from", Us = "named", xt = "group", Wr = "by", Ft = "having", Dt = "order", Gt = "asc", Ut = "desc", jt = "limit", Ht = "offset", Qr = "values", Pe = ";", Bt = "load", we = "silent", kt = "into", Mt = "clear", Xt = "drop", Vt = "create", Wt = "add", js = "to", Qt = "move", Yt = "copy", Yr = "insert", zr = "data", Hs = "delete", zt = "with", Zt = "using", Zr = "default", es = "graph", Kt = "all", X = ".", Jt = "optional", qt = "service", el = "bind", Kr = "UNDEF", sl = "minus", Jr = "union", rl = "filter", D = ",", ss = "a", rs = "|", oe = "/", qr = "^", Bs = "?", $e = "+", ks = "!", Ms = "[", Xs = "]", is = "||", ts = "&&", ls = "=", as = "!=", Vs = "<", Ws = ">", fs = "<=", os = ">=", cs = "in", Qs = "not", ie = "-", il = "str", tl = "lang", ll = "langmatches", al = "datatype", fl = "bound", ol = "iri", cl = "uri", hl = "bnode", nl = "rand", ul = "abs", pl = "ceil", gl = "floor", dl = "round", wl = "concat", $l = "strlen", vl = "ucase", bl = "lcase", _l = "encode_for_uri", Al = "contains", Cl = "strbefore", ml = "strstarts", El = "strends", yl = "strafter", Pl = "year", Tl = "month", Ll = "day", Rl = "hours", Il = "minutes", Ol = "seconds", Sl = "timezone", Nl = "tz", xl = "now", Fl = "uuid", Dl = "struuid", Gl = "md5", Ul = "sha1", jl = "sha256", Hl = "sha384", Bl = "sha512", kl = "coalesce", Ml = "if", Xl = "strlang", Vl = "strdt", Wl = "sameterm", Ql = "isuri", Yl = "isiri", zl = "isblank", Zl = "isliteral", Kl = "isnumeric", Jl = "regex", ql = "substr", ea = "replace", ei = "exists", sa = "count", ra = "sum", ia = "min", ta = "max", la = "avg", aa = "sample", fa = "group_concat", oa = "separator", si = "^^", ca = "true", ha = "false", Te = ":", ri = "_:", ii = "$", ti = "@", He = "'", hs = '"', ns = "'''", us = "''", ps = '"""', gs = '""', li = "\\", Ys = "#", ai = "_", fi = "%", na = "~", ua = "&", oi = /^[^<>"{}|\^`\\\0- ]/, j = /^[0-9]/, ci = /^[a-zA-Z]/, ds = /^[a-zA-Z0-9]/, pa = /^[eE]/, ga = /^[+\-]/, hi = /^[^'\\\n\r]/, ni = /^[^"\\\n\r]/, ui = /^[^'\\]/, pi = /^[^"\\]/, da = /^[tbnrf\\"']/, wa = /^[ \t]/, $a = /^[\r\n]/, va = /^[^\r\n]/, ba = /^[A-Z]/, _a = /^[a-z]/, Aa = /^[\xC0-\xD6]/, Ca = /^[\xD8-\xF6]/, ma = /^[\xF8-\u02FF]/, Ea = /^[\u0370-\u037D]/, ya = /^[\u037F-\u1FFF]/, Pa = /^[\u200C-\u200D]/, Ta = /^[\u2070-\u218F]/, La = /^[\u2C00-\u2FEF]/, Ra = /^[\u3001-\uD7FF]/, Ia = /^[\uF900-\uFDCF]/, Oa = /^[\uFDF0-\uFFFD]/, zs = /^[\xB7]/, Zs = /^[\u0300-\u036F]/, Ks = /^[\u203F-\u2040]/, Sa = /^[A-F]/, Na = /^[a-f]/, xa = v("BASE", !0), Fa = v("PREFIX", !0), Da = v("SELECT", !0), ce = v("DISTINCT", !0), Ga = v("REDUCED", !0), y = v("(", !1), ws = v("AS", !0), P = v(")", !1), se = v("*", !1), gi = v("CONSTRUCT", !0), $s = v("WHERE", !0), ve = v("{", !1), be = v("}", !1), Ua = v("DESCRIBE", !0), ja = v("ASK", !0), Ha = v("FROM", !0), Js = v("NAMED", !0), Ba = v("GROUP", !0), di = v("BY", !0), ka = v("HAVING", !0), Ma = v("ORDER", !0), Xa = v("ASC", !0), Va = v("DESC", !0), Wa = v("LIMIT", !0), Qa = v("OFFSET", !0), wi = v("VALUES", !0), Le = v(";", !1), Ya = v("LOAD", !0), _e = v("SILENT", !0), za = v("INTO", !0), Za = v("CLEAR", !0), Ka = v("DROP", !0), Ja = v("CREATE", !0), qa = v("ADD", !0), qs = v("TO", !0), ef = v("MOVE", !0), sf = v("COPY", !0), $i = v("INSERT", !0), vi = v("DATA", !0), er = v("DELETE", !0), rf = v("WITH", !0), tf = v("USING", !0), bi = v("DEFAULT", !0), vs = v("GRAPH", !0), lf = v("ALL", !0), V = v(".", !1), af = v("OPTIONAL", !0), ff = v("SERVICE", !0), of = v("BIND", !0), cf = v("UNDEF", !1), hf = v("MINUS", !0), _i = v("UNION", !0), nf = v("FILTER", !0), G = v(",", !1), bs = v("a", !1), _s = v("|", !1), he = v("/", !1), Ai = v("^", !1), sr = v("?", !1), Ae = v("+", !1), rr = v("!", !1), ir = v("[", !1), tr = v("]", !1), Ci = v("||", !1), mi = v("&&", !1), As = v("=", !1), Ei = v("!=", !1), lr = v("<", !1), ar = v(">", !1), yi = v("<=", !1), Pi = v(">=", !1), Cs = v("IN", !0), fr = v("NOT", !0), te = v("-", !1), uf = v("STR", !0), pf = v("LANG", !0), gf = v("LANGMATCHES", !0), df = v("DATATYPE", !0), wf = v("BOUND", !0), $f = v("IRI", !0), vf = v("URI", !0), bf = v("BNODE", !0), _f = v("RAND", !0), Af = v("ABS", !0), Cf = v("CEIL", !0), mf = v("FLOOR", !0), Ef = v("ROUND", !0), yf = v("CONCAT", !0), Pf = v("STRLEN", !0), Tf = v("UCASE", !0), Lf = v("LCASE", !0), Rf = v("ENCODE_FOR_URI", !0), If = v("CONTAINS", !0), Of = v("STRBEFORE", !0), Sf = v("STRSTARTS", !0), Nf = v("STRENDS", !0), xf = v("STRAFTER", !0), Ff = v("YEAR", !0), Df = v("MONTH", !0), Gf = v("DAY", !0), Uf = v("HOURS", !0), jf = v("MINUTES", !0), Hf = v("SECONDS", !0), Bf = v("TIMEZONE", !0), kf = v("TZ", !0), Mf = v("NOW", !0), Xf = v("UUID", !0), Vf = v("STRUUID", !0), Wf = v("MD5", !0), Qf = v("SHA1", !0), Yf = v("SHA256", !0), zf = v("SHA384", !0), Zf = v("SHA512", !0), Kf = v("COALESCE", !0), Jf = v("IF", !0), qf = v("STRLANG", !0), eo = v("STRDT", !0), so = v("sameTerm", !0), ro = v("isURI", !0), io = v("isIRI", !0), to = v("isBLANK", !0), lo = v("isLITERAL", !0), ao = v("isNUMERIC", !0), fo = v("REGEX", !0), oo = v("SUBSTR", !0), co = v("REPLACE", !0), Ti = v("EXISTS", !0), ho = v("COUNT", !0), no = v("SUM", !0), uo = v("MIN", !0), po = v("MAX", !0), go = v("AVG", !0), wo = v("SAMPLE", !0), $o = v("GROUP_CONCAT", !0), vo = v("SEPARATOR", !0), bo = v("^^", !1), _o = v("true", !0), Ao = v("false", !0), Li = N(["<", ">", '"', "{", "}", "|", "^", "`", "\\", ["\0", " "]], !0, !1), Re = v(":", !1), Co = v("_:", !1), H = N([["0", "9"]], !1, !1), Ri = v("$", !1), Ii = v("@", !1), Oi = N([["a", "z"], ["A", "Z"]], !1, !1), ms = N([["a", "z"], ["A", "Z"], ["0", "9"]], !1, !1), mo = N(["e", "E"], !1, !1), Eo = N(["+", "-"], !1, !1), Be = v("'", !1), Si = N(["'", "\\", `
`, "\r"], !0, !1), Es = v('"', !1), Ni = N(['"', "\\", `
`, "\r"], !0, !1), xi = v("'''", !1), Fi = v("''", !1), Di = N(["'", "\\"], !0, !1), Gi = v('"""', !1), Ui = v('""', !1), ji = N(['"', "\\"], !0, !1), Hi = v("\\", !1), yo = N(["t", "b", "n", "r", "f", "\\", '"', "'"], !1, !1), Po = N([" ", "	"], !1, !1), To = N(["\r", `
`], !1, !1), Lo = N(["\r", `
`], !0, !1), or = v("#", !1), Ro = N([["A", "Z"]], !1, !1), Io = N([["a", "z"]], !1, !1), Oo = N([["À", "Ö"]], !1, !1), So = N([["Ø", "ö"]], !1, !1), No = N([["ø", "˿"]], !1, !1), xo = N([["Ͱ", "ͽ"]], !1, !1), Fo = N([["Ϳ", "῿"]], !1, !1), Do = N([["‌", "‍"]], !1, !1), Go = N([["⁰", "↏"]], !1, !1), Uo = N([["Ⰰ", "⿯"]], !1, !1), jo = N([["、", "퟿"]], !1, !1), Ho = N([["豈", "﷏"]], !1, !1), Bo = N([["ﷰ", "�"]], !1, !1), Bi = v("_", !1), cr = N(["·"], !1, !1), hr = N([["̀", "ͯ"]], !1, !1), nr = N([["‿", "⁀"]], !1, !1), ki = v("%", !1), ko = N([["A", "F"]], !1, !1), Mo = N([["a", "f"]], !1, !1), Xo = v("~", !1), Vo = v("&", !1), Wo = function(i, r) {
    let f = {};
    i.length ? f = {
      headers: i,
      ...r
    } : f = r;
    const t = Object.entries(mt).map(([l, o]) => ({
      pos: parseInt(l),
      text: o
    }));
    return t.length && (f.comments = t), {
      "@context": "https://purl.org/sparql-formatter/context.jsonld",
      ...f
    };
  }, Qo = function(i, r, f) {
    let t = { type: "Query" };
    return i && (t.prologue = i), r.type === "SelectQuery" ? t.selectQuery = r : r.type === "ConstructQuery" ? t.constructQuery = r : r.type === "DescribeQuery" ? t.describeQuery = r : r.type === "AskQuery" && (t.askQuery = r), f && (t.values = f), t;
  }, Yo = function(i) {
    if (i.length)
      return {
        type: "Prologue",
        decl: i
      };
  }, zo = function(i) {
    return {
      type: "BaseDecl",
      iriref: i
    };
  }, Zo = function(i, r) {
    return {
      type: "PrefixDecl",
      pn_prefix: i,
      iriref: r
    };
  }, Ko = function(i, r, f, t) {
    return r.length && (i.from = r), i = {
      type: "SelectQuery",
      selectClause: i,
      whereClause: f,
      ...t
    }, i;
  }, Jo = function(i, r, f, t) {
    let l = {
      type: "SubSelect",
      selectClause: i,
      whereClause: r,
      ...f,
      location: I()
    };
    return t && (l.values = t), l;
  }, qo = function(i, r) {
    let f;
    r === "*" ? f = ["*"] : f = r.map((l) => l.length === 2 ? l[1] : {
      expression: l[3],
      as: l[7]
    });
    let t = { var: f };
    if (i) {
      const l = i.toUpperCase();
      l === "DISTINCT" ? t.distinct = !0 : l === "REDUCED" && (t.reduced = !0);
    }
    return t.location = I(), t;
  }, ec = function(i, r, f, t) {
    let l = { type: "ConstructQuery" };
    return r.length && (l.from = r), l = {
      ...l,
      template: i,
      where: f,
      ...t,
      location: I()
    }, l;
  }, sc = function(i, r, f) {
    let t = { type: "ConstructQuery" };
    return i.length && (t.from = i), t = {
      ...t,
      where: [r],
      ...f,
      location: I()
    }, t;
  }, rc = function(i, r, f, t) {
    let l = { type: "DescribeQuery" };
    return r.length && (l.from = r), l.describe = i, f && (l.where = f), l = {
      ...l,
      ...t,
      location: I()
    }, l;
  }, ic = function(i, r, f) {
    let t = { type: "AskQuery" };
    return i.length && (t.from = i), t = {
      ...t,
      where: r,
      ...f,
      location: I()
    }, t;
  }, tc = function(i) {
    return i;
  }, lc = function(i) {
    return {
      graph: i,
      location: I()
    };
  }, ac = function(i) {
    return {
      namedGraph: i,
      location: I()
    };
  }, fc = function(i) {
    return i.graphPattern || i;
  }, oc = function(i, r, f, t) {
    let l = {};
    return i && (l.group = i), r && (l.having = r), f && (l.orderBy = f), t && (l.limitOffset = t), l;
  }, cc = function(i) {
    return i;
  }, hc = function(i) {
    return i;
  }, nc = function(i) {
    return i;
  }, uc = function(i, r) {
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
  }, pc = function(i) {
    return i;
  }, gc = function(i) {
    return i;
  }, dc = function(i) {
    return i;
  }, wc = function(i) {
    return i;
  }, $c = function(i, r) {
    let f = {};
    return i.toUpperCase() === "ASC" ? f = {
      asc: !0,
      ...r
    } : i.toUpperCase() === "DESC" && (f = {
      desc: !0,
      ...r
    }), f;
  }, vc = function(i) {
    return i;
  }, bc = function(i) {
    let r = [i[0]];
    return i[1] && r.push(i[1]), r;
  }, _c = function(i) {
    return {
      limit: parseInt(i.literal)
    };
  }, Ac = function(i) {
    return {
      offset: parseInt(i.literal)
    };
  }, Cc = function(i) {
    return i ? i[1] : null;
  }, mc = function(i, r) {
    let f = { type: "Update" };
    i && (f.prologue = i);
    let t = [];
    return r && (t = [r[1]], r[2] && (t = t.concat(r[2][3].update))), f.update = t, f;
  }, Ec = function(i, r, f) {
    let t = {
      type: "load",
      silent: i,
      sourceGraph: r
    };
    return f && (t.destinyGraph = f[2]), t;
  }, yc = function(i, r) {
    return {
      type: "clear",
      silent: i,
      destinyGraph: r
    };
  }, Pc = function(i, r) {
    return {
      type: "drop",
      silent: i,
      destinyGraph: r
    };
  }, Tc = function(i, r) {
    return {
      type: "create",
      silent: i,
      destinyGraph: r
    };
  }, Lc = function(i, r, f) {
    return {
      type: "add",
      silent: i,
      graphs: [r, f]
    };
  }, Rc = function(i, r, f) {
    return {
      type: "move",
      silent: i,
      graphs: [r, f]
    };
  }, Ic = function(i, r, f) {
    return {
      type: "copy",
      silent: i,
      graphs: [r, f]
    };
  }, Oc = function(i) {
    return {
      type: "insertdata",
      insert: i
    };
  }, Sc = function(i) {
    return {
      type: "deletedata",
      delete: i
    };
  }, Nc = function(i) {
    return {
      type: "deletewhere",
      delete: i
    };
  }, xc = function(i, r, f, t) {
    let l = {
      type: "modify"
    };
    return i && (l.with = i[2]), r.length === 3 ? (l.delete = r[0], r[2] && (l.insert = r[2])) : l.insert = r, f.length && (l.using = f), l.where = t.graphPattern, l;
  }, Fc = function(i) {
    return i;
  }, Dc = function(i) {
    return i;
  }, Gc = function(i) {
    return i.length === 3 ? {
      named: !0,
      iri: i[2]
    } : {
      iri: i
    };
  }, Uc = function() {
    return "default";
  }, jc = function(i) {
    return i;
  }, Hc = function(i) {
    return i;
  }, Bc = function(i) {
    return i;
  }, kc = function() {
    return "default";
  }, Mc = function() {
    return "named";
  }, Xc = function() {
    return "all";
  }, Vc = function(i) {
    return i;
  }, Wc = function(i) {
    return i;
  }, Qc = function(i, r) {
    let f = [];
    return i && (f = f.concat(i)), r.forEach((t) => {
      f = f.concat(t[0]), t[2] && (f = f.concat(t[2]));
    }), f;
  }, Yc = function(i, r) {
    return {
      graph: i,
      ...r
    };
  }, zc = function(i, r) {
    let f = [i];
    return r && r[3] && (f = f.concat(r[3].triplePattern)), {
      triplePattern: f,
      location: I()
    };
  }, Zc = function(i) {
    return i;
  }, Kc = function(i, r) {
    let f = [];
    return i && f.push(i), r.forEach((t) => {
      f.push(t[0]), t[4] && f.push(t[4]);
    }), {
      graphPattern: f,
      location: I()
    };
  }, Jc = function(i, r) {
    let f = [];
    return r && r[3] ? f = [i].concat(r[3].triplePattern) : f = [i], {
      type: "TriplesBlock",
      triplePattern: f,
      location: I()
    };
  }, qc = function(i) {
    return {
      type: "OptionalGraphPattern",
      optional: i.graphPattern || i,
      location: I()
    };
  }, eh = function(i, r) {
    return {
      type: "GraphGraphPattern",
      graph: i,
      ...r
    };
  }, sh = function(i, r, f) {
    let t = {
      type: "ServiceGraphPattern",
      service: r,
      pattern: f.graphPattern || f
    };
    return i && (t.silent = !0), t.location = I(), t;
  }, rh = function(i, r) {
    return {
      type: "Bind",
      bind: i,
      as: r,
      location: I()
    };
  }, ih = function(i) {
    return i;
  }, th = function(i, r) {
    return {
      oneVar: i,
      data: r,
      location: I()
    };
  }, lh = function(i, r) {
    return {
      variables: i,
      data: r,
      location: I()
    };
  }, ah = function(i) {
    return i;
  }, fh = function(i) {
    return i;
  }, oh = function(i) {
    return {
      type: "MinusGraphPattern",
      minus: i.graphPattern || i,
      location: I()
    };
  }, ch = function(i, r) {
    return r.length ? {
      union: [i, ...r],
      location: I()
    } : i;
  }, hh = function(i) {
    return {
      type: "Filter",
      filter: i,
      location: I()
    };
  }, nh = function(i, r) {
    return {
      functionRef: i,
      args: r.list,
      location: I()
    };
  }, uh = function() {
    return {
      list: []
    };
  }, ph = function(i, r, f) {
    return {
      distinct: !!i,
      list: [r, ...f]
    };
  }, gh = function() {
    return [];
  }, dh = function(i, r) {
    return [i, ...r];
  }, wh = function(i) {
    return i;
  }, $h = function(i, r) {
    let f = [i];
    return r && r[3] && (f = f.concat(r[3].triplePattern)), {
      triplePattern: f,
      location: I()
    };
  }, vh = function(i, r) {
    return {
      subject: i,
      properties: r
    };
  }, bh = function(i, r) {
    return {
      subject: i,
      properties: r
    };
  }, _h = function(i, r, f) {
    let t = [];
    return t.push({ predicate: i, objects: r }), f.forEach((l) => {
      l[3] && t.push({ predicate: l[3][0], objects: l[3][2] });
    }), t;
  }, Ah = function() {
    return {
      a: !0,
      location: I()
    };
  }, Ch = function(i, r) {
    return [i, ...r];
  }, mh = function(i, r) {
    return {
      subject: i,
      properties: r
    };
  }, Eh = function(i, r) {
    return {
      subject: i,
      properties: r
    };
  }, yh = function(i, r, f) {
    let t = [];
    return t.push({ predicate: i, objects: r }), f.forEach((l) => {
      l[3] && t.push({ predicate: l[3][0], objects: l[3][2] });
    }), t;
  }, Ph = function(i, r) {
    return [i, ...r];
  }, Th = function(i, r) {
    if (r.length) {
      let f = [i];
      for (let t = 0; t < r.length; t++)
        f.push(r[t][3]);
      return {
        alternative: f,
        location: I()
      };
    } else
      return i;
  }, Lh = function(i, r) {
    if (r.length) {
      let f = [i];
      for (let t = 0; t < r.length; t++)
        f.push(r[t][3]);
      return {
        sequence: f,
        location: I()
      };
    } else
      return i;
  }, Rh = function(i, r) {
    return r && (i.modifier = r), i;
  }, Ih = function(i) {
    return i.inverse = !0, i;
  }, Oh = function() {
    return {
      a: !0,
      location: I()
    };
  }, Sh = function(i) {
    return {
      bracketted: !0,
      ...i
    };
  }, Nh = function(i) {
    return {
      collection: i,
      location: I()
    };
  }, xh = function(i) {
    return {
      blankNodeProperties: i,
      location: I()
    };
  }, Fh = function(i) {
    return {
      collection: i,
      location: I()
    };
  }, Dh = function(i) {
    return {
      blankNodeProperties: i,
      location: I()
    };
  }, Gh = function(i) {
    return i;
  }, Uh = function(i) {
    return i;
  }, jh = function(i) {
    return i;
  }, Hh = function(i) {
    return i;
  }, Bh = function(i) {
    return {
      ...i,
      location: I()
    };
  }, kh = function(i, r) {
    return r.length ? {
      expressionType: "conditionalor",
      operands: [i, ...r]
    } : i;
  }, Mh = function(i, r) {
    return r.length ? {
      expressionType: "conditionaland",
      operands: [i, ...r]
    } : i;
  }, Xh = function(i, r) {
    if (r.length) {
      const f = i;
      let t = r[0][1].toUpperCase(), l = r[0][3];
      return t === "NOT" && (t += " " + r[0][3].toUpperCase(), l = r[0][5]), {
        expressionType: "relationalexpression",
        operator: t,
        op1: f,
        op2: l
      };
    } else
      return i;
  }, Vh = function(i, r) {
    if (r.length === 0)
      return i;
    let f = [];
    return r.forEach((t) => {
      t.length == 4 && f.push({
        operator: t[1],
        expression: t[3]
      });
    }), {
      expressionType: "additiveexpression",
      op1: i,
      ops: f
    };
  }, Wh = function(i, r) {
    return r.length ? {
      expressionType: "multiplicativeexpression",
      first: i,
      rest: r.map((f) => ({ operator: f[1], expression: f[3] }))
    } : i;
  }, Qh = function(i) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "!",
      expression: i
    };
  }, Yh = function(i) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "+",
      expression: i
    };
  }, zh = function(i) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "-",
      expression: i
    };
  }, Zh = function(i) {
    return {
      expressionType: "atomic",
      value: i
    };
  }, Kh = function(i) {
    return {
      expressionType: "atomic",
      value: i
    };
  }, Jh = function(i) {
    return {
      expressionType: "atomic",
      value: i
    };
  }, qh = function(i) {
    return {
      expressionType: "atomic",
      value: i
    };
  }, en = function(i) {
    return {
      bracketted: !0,
      ...i
    };
  }, sn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "str",
      args: [i]
    };
  }, rn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "lang",
      args: [i]
    };
  }, tn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "langMatches",
      args: [i, r]
    };
  }, ln = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "datatype",
      args: [i]
    };
  }, an = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "bound",
      args: [i]
    };
  }, fn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "IRI",
      args: [i]
    };
  }, on = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "URI",
      args: [i]
    };
  }, cn = function(i) {
    const r = {
      expressionType: "builtincall",
      builtincall: "BNODE",
      args: null
    };
    return i.length === 5 && (r.args = [i[2]]), r;
  }, hn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "rand"
    };
  }, nn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "abs",
      args: [i]
    };
  }, un = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "ceil",
      args: [i]
    };
  }, pn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "floor",
      args: [i]
    };
  }, gn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "round",
      args: [i]
    };
  }, dn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "CONCAT",
      args: i
    };
  }, wn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "STRLEN",
      args: [i]
    };
  }, $n = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "UCASE",
      args: [i]
    };
  }, vn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "LCASE",
      args: [i]
    };
  }, bn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "ENCODE_FOR_URI",
      args: [i]
    };
  }, _n = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "CONTAINS",
      args: [i, r]
    };
  }, An = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRBEFORE",
      args: [i, r]
    };
  }, Cn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRSTARTS",
      args: [i, r]
    };
  }, mn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRENDS",
      args: [i, r]
    };
  }, En = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRAFTER",
      args: [i, r]
    };
  }, yn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "year",
      args: [i]
    };
  }, Pn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "month",
      args: [i]
    };
  }, Tn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "day",
      args: [i]
    };
  }, Ln = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "hours",
      args: [i]
    };
  }, Rn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "minutes",
      args: [i]
    };
  }, In = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "seconds",
      args: [i]
    };
  }, On = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "timezone",
      args: [i]
    };
  }, Sn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "tz",
      args: [i]
    };
  }, Nn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "now"
    };
  }, xn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "UUID"
    };
  }, Fn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "STRUUID"
    };
  }, Dn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "MD5",
      args: [i]
    };
  }, Gn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA1",
      args: [i]
    };
  }, Un = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA256",
      args: [i]
    };
  }, jn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA384",
      args: [i]
    };
  }, Hn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA512",
      args: [i]
    };
  }, Bn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "COALESCE",
      args: i
    };
  }, kn = function(i, r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "IF",
      args: [i, r, f]
    };
  }, Mn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRLANG",
      args: [i, r]
    };
  }, Xn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRDT",
      args: [i, r]
    };
  }, Vn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "sameTerm",
      args: [i, r]
    };
  }, Wn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "isURI",
      args: [i]
    };
  }, Qn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "isBlank",
      args: [i]
    };
  }, Yn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "isLiteral",
      args: [i]
    };
  }, zn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "isNumeric",
      args: [i]
    };
  }, Zn = function(i, r, f) {
    let t = {
      expressionType: "regex",
      text: i,
      pattern: r
    };
    return f && (t.flags = f[2]), t;
  }, Kn = function(i, r, f) {
    let t = [i, r];
    return f && t.push(f[2]), {
      expressionType: "builtincall",
      builtincall: "substr",
      args: t
    };
  }, Jn = function(i, r, f, t) {
    let l = [i, r, f];
    return t && l.push(t[2]), {
      expressionType: "builtincall",
      builtincall: "replace",
      args: l
    };
  }, qn = function(i) {
    return {
      exists: i.graphPattern || i
    };
  }, eu = function(i) {
    return {
      notexists: i.graphPattern || i
    };
  }, su = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "count",
      distinct: !!i,
      expression: r
    };
  }, ru = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "sum",
      distinct: !!i,
      expression: r
    };
  }, iu = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "min",
      distinct: !!i,
      expression: r
    };
  }, tu = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "max",
      distinct: !!i,
      expression: r
    };
  }, lu = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "avg",
      distinct: !!i,
      expression: r
    };
  }, au = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "sample",
      distinct: !!i,
      expression: r
    };
  }, fu = function(i, r, f) {
    let t = null;
    return f?.length && (t = f[7]), {
      expressionType: "aggregate",
      aggregateType: "group_concat",
      expression: r,
      separator: t,
      distinct: !!i
    };
  }, ou = function(i, r) {
    let f = {
      expressionType: "irireforfunction",
      iriref: i
    };
    return r && (f.args = r.list), f;
  }, cu = function(i, r) {
    return typeof r == "string" ? i.lang = r : r && (i.dataType = r[1]), i.location = I(), i;
  }, hu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !0
    };
  }, nu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !1
    };
  }, uu = function(i) {
    return {
      type: "IRIref",
      iriref: i,
      location: I()
    };
  }, pu = function(i) {
    return i;
  }, gu = function(i) {
    return {
      type: "PrefixedName",
      pn_prefix: i.pn_prefix,
      pn_local: i.pn_local,
      location: I()
    };
  }, du = function(i) {
    return {
      type: "PrefixedName",
      pn_prefix: i,
      location: I()
    };
  }, wu = function(i) {
    return {
      blankNode: i,
      location: I()
    };
  }, $u = function() {
    return {
      blankNode: "[]",
      location: I()
    };
  }, vu = function(i) {
    return i.join("");
  }, bu = function(i) {
    return i || "";
  }, _u = function(i, r) {
    return {
      pn_prefix: i,
      pn_local: r
    };
  }, Au = function() {
    return J();
  }, Cu = function(i) {
    return {
      type: "Var",
      varType: "VAR1",
      varname: i
    };
  }, mu = function(i) {
    return {
      type: "Var",
      varType: "VAR2",
      varname: i
    };
  }, Eu = function(i, r) {
    let f = i.join("");
    return r.length && (f += "-" + r[0][1].join("")), f.toLowerCase();
  }, yu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#integer",
      literal: J()
    };
  }, Pu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#decimal",
      literal: J()
    };
  }, Tu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: J()
    };
  }, Lu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: J()
    };
  }, Ru = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: J()
    };
  }, Iu = function(i) {
    return i.literal = "+" + i.literal, i;
  }, Ou = function(i) {
    return i.literal = "+" + i.literal, i;
  }, Su = function(i) {
    return i.literal = "+" + i.literal, i;
  }, Nu = function(i) {
    return i.literal = "-" + i.literal, i;
  }, xu = function(i) {
    return i.literal = "-" + i.literal, i;
  }, Fu = function(i) {
    return i.literal = "-" + i.literal, i;
  }, Du = function(i) {
    return {
      quote: "'",
      literal: i.join("")
      // except ' \ LF CR
    };
  }, Gu = function(i) {
    return {
      quote: '"',
      literal: i.join("")
      // except " \ LF CR
    };
  }, Uu = function(i) {
    return {
      quote: "'''",
      literal: i.map((r) => r[0] ? r[0] + r[1] : r[1]).join("")
    };
  }, ju = function(i) {
    return {
      quote: '"""',
      literal: i.map((r) => r[0] ? r[0] + r[1] : r[1]).join("")
    };
  }, Hu = function() {
    return J();
  }, Bu = function() {
    return J();
  }, ku = function() {
    return mt[I().start.offset] = J(), "";
  }, Mu = function() {
    return J();
  }, Xu = function() {
    return J();
  }, Vu = function() {
    return J();
  }, s = 0, w = 0, ys = [{ line: 1, column: 1 }], le = 0, ur = [], Ps;
  if ("startRule" in b) {
    if (!(b.startRule in x))
      throw new Error(`Can't start parsing from rule "` + b.startRule + '".');
    K = x[b.startRule];
  }
  function J() {
    return c.substring(w, s);
  }
  function I() {
    return pr(w, s);
  }
  function v(i, r) {
    return { type: "literal", text: i, ignoreCase: r };
  }
  function N(i, r, f) {
    return { type: "class", parts: i, inverted: r, ignoreCase: f };
  }
  function Wu() {
    return { type: "end" };
  }
  function Mi(i) {
    var r = ys[i], f;
    if (r)
      return r;
    for (f = i - 1; !ys[f]; )
      f--;
    for (r = ys[f], r = {
      line: r.line,
      column: r.column
    }; f < i; )
      c.charCodeAt(f) === 10 ? (r.line++, r.column = 1) : r.column++, f++;
    return ys[i] = r, r;
  }
  function pr(i, r, f) {
    var t = Mi(i), l = Mi(r), o = {
      source: T,
      start: {
        offset: i,
        line: t.line,
        column: t.column
      },
      end: {
        offset: r,
        line: l.line,
        column: l.column
      }
    };
    return o;
  }
  function p(i) {
    s < le || (s > le && (le = s, ur = []), ur.push(i));
  }
  function Qu(i, r, f) {
    return new Mr(
      Mr.buildMessage(i, r),
      i,
      r,
      f
    );
  }
  function Xi() {
    var i, r, f, t, l, o;
    for (i = s, r = [], f = bt(); f !== e; )
      r.push(f), f = bt();
    for (f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (t = Yu(), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      w = i, i = Wo(r, t);
    } else
      s = i, i = e;
    return i;
  }
  function Yu() {
    var i;
    return i = zu(), i === e && (i = st()), i;
  }
  function zu() {
    var i, r, f, t, l;
    for (i = s, r = Vi(), f = [], t = a(); t !== e; )
      f.push(t), t = a();
    return t = Zu(), t === e && (t = Ju(), t === e && (t = qu(), t === e && (t = ep()))), t !== e ? (l = et(), w = i, i = Qo(r, t, l)) : (s = i, i = e), i;
  }
  function Vi() {
    var i, r, f;
    for (i = s, r = [], f = Wi(), f === e && (f = Qi()); f !== e; )
      r.push(f), f = Wi(), f === e && (f = Qi());
    return w = i, r = Yo(r), i = r, i;
  }
  function Wi() {
    var i, r, f, t, l;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.substr(s, 4).toLowerCase() === ue ? (f = c.substr(s, 4), s += 4) : (f = e, p(xa)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = Nr(), l !== e ? (w = i, i = zo(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Qi() {
    var i, r, f, t, l, o, h;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.substr(s, 6).toLowerCase() === Ee ? (f = c.substr(s, 6), s += 6) : (f = e, p(Fa)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = xr(), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        h = Nr(), h !== e ? (w = i, i = Zo(l, h)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Zu() {
    var i, r, f, t, l, o, h, n;
    if (i = s, r = Yi(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (t = [], l = ae(); l !== e; )
        t.push(l), l = ae();
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = ke(), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = Oe(), w = i, i = Ko(r, t, o, n);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Ku() {
    var i, r, f, t, l, o, h;
    if (i = s, r = Yi(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = ke(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        o = Oe(), h = et(), w = i, i = Jo(r, t, o, h);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Yi() {
    var i, r, f, t, l, o, h, n, u, g, d, $, _, m, L, R, S;
    if (i = s, c.substr(s, 6).toLowerCase() === pe ? (r = c.substr(s, 6), s += 6) : (r = e, p(Da)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (c.substr(s, 8).toLowerCase() === O ? (t = c.substr(s, 8), s += 8) : (t = e, p(ce)), t === e && (c.substr(s, 7).toLowerCase() === F ? (t = c.substr(s, 7), s += 7) : (t = e, p(Ga))), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      for (o = [], h = s, n = [], u = a(); u !== e; )
        n.push(u), u = a();
      if (u = M(), u !== e ? (n = [n, u], h = n) : (s = h, h = e), h === e) {
        for (h = s, n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (c.charCodeAt(s) === 40 ? (u = A, s++) : (u = e, p(y)), u !== e) {
          for (g = [], d = a(); d !== e; )
            g.push(d), d = a();
          if (d = C(), d !== e) {
            for ($ = [], _ = a(); _ !== e; )
              $.push(_), _ = a();
            if (c.substr(s, 2).toLowerCase() === fe ? (_ = c.substr(s, 2), s += 2) : (_ = e, p(ws)), _ !== e) {
              for (m = [], L = a(); L !== e; )
                m.push(L), L = a();
              if (L = M(), L !== e) {
                for (R = [], S = a(); S !== e; )
                  R.push(S), S = a();
                c.charCodeAt(s) === 41 ? (S = E, s++) : (S = e, p(P)), S !== e ? (n = [n, u, g, d, $, _, m, L, R, S], h = n) : (s = h, h = e);
              } else
                s = h, h = e;
            } else
              s = h, h = e;
          } else
            s = h, h = e;
        } else
          s = h, h = e;
      }
      if (h !== e)
        for (; h !== e; ) {
          for (o.push(h), h = s, n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (u = M(), u !== e ? (n = [n, u], h = n) : (s = h, h = e), h === e) {
            for (h = s, n = [], u = a(); u !== e; )
              n.push(u), u = a();
            if (c.charCodeAt(s) === 40 ? (u = A, s++) : (u = e, p(y)), u !== e) {
              for (g = [], d = a(); d !== e; )
                g.push(d), d = a();
              if (d = C(), d !== e) {
                for ($ = [], _ = a(); _ !== e; )
                  $.push(_), _ = a();
                if (c.substr(s, 2).toLowerCase() === fe ? (_ = c.substr(s, 2), s += 2) : (_ = e, p(ws)), _ !== e) {
                  for (m = [], L = a(); L !== e; )
                    m.push(L), L = a();
                  if (L = M(), L !== e) {
                    for (R = [], S = a(); S !== e; )
                      R.push(S), S = a();
                    c.charCodeAt(s) === 41 ? (S = E, s++) : (S = e, p(P)), S !== e ? (n = [n, u, g, d, $, _, m, L, R, S], h = n) : (s = h, h = e);
                  } else
                    s = h, h = e;
                } else
                  s = h, h = e;
              } else
                s = h, h = e;
            } else
              s = h, h = e;
          }
        }
      else
        o = e;
      o === e && (c.charCodeAt(s) === 42 ? (o = ee, s++) : (o = e, p(se))), o !== e ? (w = i, i = qo(t, o)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Ju() {
    var i, r, f, t, l, o, h, n, u, g, d, $, _, m;
    if (i = s, c.substr(s, 9).toLowerCase() === Vr ? (r = c.substr(s, 9), s += 9) : (r = e, p(gi)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = Op(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        for (o = [], h = ae(); h !== e; )
          o.push(h), h = ae();
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (n = ke(), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          g = Oe(), w = i, i = ec(t, o, n, g);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    if (i === e)
      if (i = s, c.substr(s, 9).toLowerCase() === Vr ? (r = c.substr(s, 9), s += 9) : (r = e, p(gi)), r !== e) {
        for (f = [], t = a(); t !== e; )
          f.push(t), t = a();
        for (t = [], l = ae(); l !== e; )
          t.push(l), l = ae();
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (c.substr(s, 5).toLowerCase() === qe ? (o = c.substr(s, 5), s += 5) : (o = e, p($s)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          if (c.charCodeAt(s) === 123 ? (n = ge, s++) : (n = e, p(ve)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            for (g = Ne(), g === e && (g = null), d = [], $ = a(); $ !== e; )
              d.push($), $ = a();
            if (c.charCodeAt(s) === 125 ? ($ = de, s++) : ($ = e, p(be)), $ !== e) {
              for (_ = [], m = a(); m !== e; )
                _.push(m), m = a();
              m = Oe(), w = i, i = sc(t, g, m);
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
  function qu() {
    var i, r, f, t, l, o, h, n, u, g;
    if (i = s, c.substr(s, 8).toLowerCase() === Ot ? (r = c.substr(s, 8), s += 8) : (r = e, p(Ua)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = [], l = Fe(), l !== e)
        for (; l !== e; )
          t.push(l), l = Fe();
      else
        t = e;
      if (t === e && (c.charCodeAt(s) === 42 ? (t = ee, s++) : (t = e, p(se))), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        for (o = [], h = ae(); h !== e; )
          o.push(h), h = ae();
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        for (n = ke(), n === e && (n = null), u = [], g = a(); g !== e; )
          u.push(g), g = a();
        g = Oe(), w = i, i = rc(t, o, n, g);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function ep() {
    var i, r, f, t, l, o, h, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.substr(s, 3).toLowerCase() === St ? (f = c.substr(s, 3), s += 3) : (f = e, p(ja)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = [], o = ae(); o !== e; )
        l.push(o), o = ae();
      for (o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (h = ke(), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Oe(), w = i, i = ic(l, h, u);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function ae() {
    var i, r, f, t, l, o;
    if (i = s, c.substr(s, 4).toLowerCase() === Nt ? (r = c.substr(s, 4), s += 4) : (r = e, p(Ha)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = sp(), t === e && (t = rp()), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        w = i, i = tc(t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function sp() {
    var i, r, f;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    return f = W(), f !== e ? (w = i, i = lc(f)) : (s = i, i = e), i;
  }
  function rp() {
    var i, r, f, t;
    if (i = s, c.substr(s, 5).toLowerCase() === Us ? (r = c.substr(s, 5), s += 5) : (r = e, p(Js)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = W(), t !== e ? (w = i, i = ac(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function ke() {
    var i, r, f;
    for (i = s, c.substr(s, 5).toLowerCase() === qe ? (c.substr(s, 5), s += 5) : p($s), r = [], f = a(); f !== e; )
      r.push(f), f = a();
    return f = re(), f !== e ? (w = i, i = fc(f)) : (s = i, i = e), i;
  }
  function Oe() {
    var i, r, f, t, l;
    return i = s, r = ip(), r === e && (r = null), f = tp(), f === e && (f = null), t = lp(), t === e && (t = null), l = ap(), l === e && (l = null), w = i, i = oc(r, f, t, l), i;
  }
  function ip() {
    var i, r, f, t, l, o, h;
    if (i = s, c.substr(s, 5).toLowerCase() === xt ? (r = c.substr(s, 5), s += 5) : (r = e, p(Ba)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (c.substr(s, 2).toLowerCase() === Wr ? (t = c.substr(s, 2), s += 2) : (t = e, p(di)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (o = [], h = zi(), h !== e)
          for (; h !== e; )
            o.push(h), h = zi();
        else
          o = e;
        o !== e ? (w = i, i = cc(o)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function zi() {
    var i, r, f, t, l, o, h, n, u, g, d;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (f = Tr(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      w = i, i = hc(f);
    } else
      s = i, i = e;
    if (i === e) {
      for (i = s, r = [], f = a(); f !== e; )
        r.push(f), f = a();
      if (f = nt(), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        w = i, i = nc(f);
      } else
        s = i, i = e;
      if (i === e) {
        for (i = s, r = [], f = a(); f !== e; )
          r.push(f), f = a();
        if (c.charCodeAt(s) === 40 ? (f = A, s++) : (f = e, p(y)), f !== e) {
          for (t = [], l = a(); l !== e; )
            t.push(l), l = a();
          if (l = C(), l !== e) {
            for (o = [], h = a(); h !== e; )
              o.push(h), h = a();
            if (h = s, c.substr(s, 2).toLowerCase() === fe ? (n = c.substr(s, 2), s += 2) : (n = e, p(ws)), n !== e) {
              for (u = [], g = a(); g !== e; )
                u.push(g), g = a();
              g = M(), g !== e ? (n = [n, u, g], h = n) : (s = h, h = e);
            } else
              s = h, h = e;
            for (h === e && (h = null), n = [], u = a(); u !== e; )
              n.push(u), u = a();
            if (c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e) {
              for (g = [], d = a(); d !== e; )
                g.push(d), d = a();
              w = i, i = uc(l, h);
            } else
              s = i, i = e;
          } else
            s = i, i = e;
        } else
          s = i, i = e;
        if (i === e) {
          for (i = s, r = [], f = a(); f !== e; )
            r.push(f), f = a();
          if (f = M(), f !== e) {
            for (t = [], l = a(); l !== e; )
              t.push(l), l = a();
            w = i, i = pc(f);
          } else
            s = i, i = e;
        }
      }
    }
    return i;
  }
  function tp() {
    var i, r, f, t, l;
    if (i = s, c.substr(s, 6).toLowerCase() === Ft ? (r = c.substr(s, 6), s += 6) : (r = e, p(ka)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = [], l = Zi(), l !== e)
        for (; l !== e; )
          t.push(l), l = Zi();
      else
        t = e;
      t !== e ? (w = i, i = gc(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Zi() {
    var i, r, f, t;
    if (i = s, r = wr(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      w = i, i = dc(r);
    } else
      s = i, i = e;
    return i;
  }
  function lp() {
    var i, r, f, t, l, o, h, n;
    if (i = s, c.substr(s, 5).toLowerCase() === Dt ? (r = c.substr(s, 5), s += 5) : (r = e, p(Ma)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (c.substr(s, 2).toLowerCase() === Wr ? (t = c.substr(s, 2), s += 2) : (t = e, p(di)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (o = [], h = Ki(), h !== e)
          for (; h !== e; )
            o.push(h), h = Ki();
        else
          o = e;
        if (o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          w = i, i = wc(o);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Ki() {
    var i, r, f, t, l, o;
    if (i = s, c.substr(s, 3).toLowerCase() === Gt ? (r = c.substr(s, 3), s += 3) : (r = e, p(Xa)), r === e && (c.substr(s, 4).toLowerCase() === Ut ? (r = c.substr(s, 4), s += 4) : (r = e, p(Va))), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = Pr(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        w = i, i = $c(r, t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    if (i === e)
      if (i = s, r = wr(), r === e && (r = M()), r !== e) {
        for (f = [], t = a(); t !== e; )
          f.push(t), t = a();
        w = i, i = vc(r);
      } else
        s = i, i = e;
    return i;
  }
  function ap() {
    var i, r, f, t;
    return i = s, r = s, f = Ji(), f !== e ? (t = qi(), t === e && (t = null), f = [f, t], r = f) : (s = r, r = e), r === e && (r = s, f = qi(), f !== e ? (t = Ji(), t === e && (t = null), f = [f, t], r = f) : (s = r, r = e)), r !== e && (w = i, r = bc(r)), i = r, i;
  }
  function Ji() {
    var i, r, f, t, l, o;
    if (i = s, c.substr(s, 5).toLowerCase() === jt ? (r = c.substr(s, 5), s += 5) : (r = e, p(Wa)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = We(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        w = i, i = _c(t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function qi() {
    var i, r, f, t, l, o;
    if (i = s, c.substr(s, 6).toLowerCase() === Ht ? (r = c.substr(s, 6), s += 6) : (r = e, p(Qa)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = We(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        w = i, i = Ac(t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function et() {
    var i, r, f, t;
    return i = s, r = s, c.substr(s, 6).toLowerCase() === Qr ? (f = c.substr(s, 6), s += 6) : (f = e, p(wi)), f !== e ? (t = ct(), t !== e ? (f = [f, t], r = f) : (s = r, r = e)) : (s = r, r = e), r === e && (r = null), w = i, r = Cc(r), i = r, i;
  }
  function st() {
    var i, r, f, t, l, o, h, n, u, g;
    for (i = s, r = Vi(), f = s, t = [], l = a(); l !== e; )
      t.push(l), l = a();
    if (l = fp(), l !== e) {
      for (o = s, h = [], n = a(); n !== e; )
        h.push(n), n = a();
      if (c.charCodeAt(s) === 59 ? (n = Pe, s++) : (n = e, p(Le)), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        g = st(), h = [h, n, u, g], o = h;
      } else
        s = o, o = e;
      o === e && (o = null), t = [t, l, o], f = t;
    } else
      s = f, f = e;
    for (f === e && (f = null), t = [], l = a(); l !== e; )
      t.push(l), l = a();
    return w = i, i = mc(r, f), i;
  }
  function fp() {
    var i;
    return i = op(), i === e && (i = cp(), i === e && (i = hp(), i === e && (i = up(), i === e && (i = pp(), i === e && (i = gp(), i === e && (i = np(), i === e && (i = dp(), i === e && (i = wp(), i === e && (i = $p(), i === e && (i = vp())))))))))), i;
  }
  function op() {
    var i, r, f, t, l, o, h, n, u, g, d;
    if (i = s, c.substr(s, 4).toLowerCase() === Bt ? (r = c.substr(s, 4), s += 4) : (r = e, p(Ya)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (c.substr(s, 6).toLowerCase() === we ? (t = c.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = W(), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (n = s, c.substr(s, 4).toLowerCase() === kt ? (u = c.substr(s, 4), s += 4) : (u = e, p(za)), u !== e) {
          for (g = [], d = a(); d !== e; )
            g.push(d), d = a();
          d = gr(), d !== e ? (u = [u, g, d], n = u) : (s = n, n = e);
        } else
          s = n, n = e;
        n === e && (n = null), w = i, i = Ec(t, o, n);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function cp() {
    var i, r, f, t, l, o;
    if (i = s, c.substr(s, 5).toLowerCase() === Mt ? (r = c.substr(s, 5), s += 5) : (r = e, p(Za)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (c.substr(s, 6).toLowerCase() === we ? (t = c.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = tt(), o !== e ? (w = i, i = yc(t, o)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function hp() {
    var i, r, f, t, l, o;
    if (i = s, c.substr(s, 4).toLowerCase() === Xt ? (r = c.substr(s, 4), s += 4) : (r = e, p(Ka)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (c.substr(s, 6).toLowerCase() === we ? (t = c.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = tt(), o !== e ? (w = i, i = Pc(t, o)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function np() {
    var i, r, f, t, l, o;
    if (i = s, c.substr(s, 6).toLowerCase() === Vt ? (r = c.substr(s, 6), s += 6) : (r = e, p(Ja)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (c.substr(s, 6).toLowerCase() === we ? (t = c.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = gr(), o !== e ? (w = i, i = Tc(t, o)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function up() {
    var i, r, f, t, l, o, h, n, u, g;
    if (i = s, c.substr(s, 3).toLowerCase() === Wt ? (r = c.substr(s, 3), s += 3) : (r = e, p(qa)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (c.substr(s, 6).toLowerCase() === we ? (t = c.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = Se(), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (c.substr(s, 2).toLowerCase() === js ? (n = c.substr(s, 2), s += 2) : (n = e, p(qs)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          g = Se(), g !== e ? (w = i, i = Lc(t, o, g)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function pp() {
    var i, r, f, t, l, o, h, n, u, g;
    if (i = s, c.substr(s, 4).toLowerCase() === Qt ? (r = c.substr(s, 4), s += 4) : (r = e, p(ef)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (c.substr(s, 6).toLowerCase() === we ? (t = c.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = Se(), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (c.substr(s, 2).toLowerCase() === js ? (n = c.substr(s, 2), s += 2) : (n = e, p(qs)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          g = Se(), g !== e ? (w = i, i = Rc(t, o, g)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function gp() {
    var i, r, f, t, l, o, h, n, u, g;
    if (i = s, c.substr(s, 4).toLowerCase() === Yt ? (r = c.substr(s, 4), s += 4) : (r = e, p(sf)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (c.substr(s, 6).toLowerCase() === we ? (t = c.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = Se(), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (c.substr(s, 2).toLowerCase() === js ? (n = c.substr(s, 2), s += 2) : (n = e, p(qs)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          g = Se(), g !== e ? (w = i, i = Ic(t, o, g)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function dp() {
    var i, r, f, t, l, o;
    if (i = s, c.substr(s, 6).toLowerCase() === Yr ? (r = c.substr(s, 6), s += 6) : (r = e, p($i)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (c.substr(s, 4).toLowerCase() === zr ? (t = c.substr(s, 4), s += 4) : (t = e, p(vi)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        o = lt(), o !== e ? (w = i, i = Oc(o)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function wp() {
    var i, r, f, t, l;
    if (i = s, c.substr(s, 6).toLowerCase() === Hs ? (r = c.substr(s, 6), s += 6) : (r = e, p(er)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      c.substr(s, 4).toLowerCase() === zr ? (t = c.substr(s, 4), s += 4) : (t = e, p(vi)), t !== e ? (l = lt(), l !== e ? (w = i, i = Sc(l)) : (s = i, i = e)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function $p() {
    var i, r, f, t, l, o;
    if (i = s, c.substr(s, 6).toLowerCase() === Hs ? (r = c.substr(s, 6), s += 6) : (r = e, p(er)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (c.substr(s, 5).toLowerCase() === qe ? (t = c.substr(s, 5), s += 5) : (t = e, p($s)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        o = dr(), o !== e ? (w = i, i = Nc(o)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function vp() {
    var i, r, f, t, l, o, h, n, u, g, d;
    if (i = s, r = s, c.substr(s, 4).toLowerCase() === zt ? (f = c.substr(s, 4), s += 4) : (f = e, p(rf)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = W(), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        f = [f, t, l, o], r = f;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    if (r === e && (r = null), f = s, t = bp(), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = rt(), o === e && (o = null), t = [t, l, o], f = t;
    } else
      s = f, f = e;
    if (f === e && (f = rt()), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = [], o = it(); o !== e; )
        l.push(o), o = it();
      for (o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (c.substr(s, 5).toLowerCase() === qe ? (h = c.substr(s, 5), s += 5) : (h = e, p($s)), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (u = re(), u !== e) {
          for (g = [], d = a(); d !== e; )
            g.push(d), d = a();
          w = i, i = xc(r, f, l, u);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function bp() {
    var i, r, f;
    return i = s, c.substr(s, 6).toLowerCase() === Hs ? (r = c.substr(s, 6), s += 6) : (r = e, p(er)), r !== e ? (f = dr(), f !== e ? (w = i, i = Fc(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function rt() {
    var i, r, f;
    return i = s, c.substr(s, 6).toLowerCase() === Yr ? (r = c.substr(s, 6), s += 6) : (r = e, p($i)), r !== e ? (f = dr(), f !== e ? (w = i, i = Dc(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function it() {
    var i, r, f, t, l, o, h, n;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.substr(s, 5).toLowerCase() === Zt ? (f = c.substr(s, 5), s += 5) : (f = e, p(tf)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = W(), l === e)
        if (l = s, c.substr(s, 5).toLowerCase() === Us ? (o = c.substr(s, 5), s += 5) : (o = e, p(Js)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          n = W(), n !== e ? (o = [o, h, n], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
      l !== e ? (w = i, i = Gc(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Se() {
    var i, r, f, t;
    if (i = s, c.substr(s, 7).toLowerCase() === Zr ? (r = c.substr(s, 7), s += 7) : (r = e, p(bi)), r !== e && (w = i, r = Uc()), i = r, i === e) {
      for (i = s, c.substr(s, 5).toLowerCase() === es ? (r = c.substr(s, 5), s += 5) : (r = e, p(vs)), r === e && (r = null), f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = W(), t !== e ? (w = i, i = jc(t)) : (s = i, i = e);
    }
    return i;
  }
  function gr() {
    var i, r, f, t;
    if (i = s, c.substr(s, 5).toLowerCase() === es ? (r = c.substr(s, 5), s += 5) : (r = e, p(vs)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = W(), t !== e ? (w = i, i = Hc(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function tt() {
    var i, r;
    return i = s, r = gr(), r !== e && (w = i, r = Bc(r)), i = r, i === e && (i = s, c.substr(s, 7).toLowerCase() === Zr ? (r = c.substr(s, 7), s += 7) : (r = e, p(bi)), r !== e && (w = i, r = kc()), i = r, i === e && (i = s, c.substr(s, 5).toLowerCase() === Us ? (r = c.substr(s, 5), s += 5) : (r = e, p(Js)), r !== e && (w = i, r = Mc()), i = r, i === e && (i = s, c.substr(s, 3).toLowerCase() === Kt ? (r = c.substr(s, 3), s += 3) : (r = e, p(lf)), r !== e && (w = i, r = Xc()), i = r))), i;
  }
  function dr() {
    var i, r, f, t, l, o, h, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.charCodeAt(s) === 123 ? (f = ge, s++) : (f = e, p(ve)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = at(), o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (c.charCodeAt(s) === 125 ? (h = de, s++) : (h = e, p(be)), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        w = i, i = Vc(l);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function lt() {
    var i, r, f, t, l, o, h, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.charCodeAt(s) === 123 ? (f = ge, s++) : (f = e, p(ve)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = at(), o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (c.charCodeAt(s) === 125 ? (h = de, s++) : (h = e, p(be)), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        w = i, i = Wc(l);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function at() {
    var i, r, f, t, l, o, h;
    for (i = s, r = Ne(), r === e && (r = null), f = [], t = s, l = ft(), l !== e ? (c.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o === e && (o = null), h = Ne(), h === e && (h = null), l = [l, o, h], t = l) : (s = t, t = e); t !== e; )
      f.push(t), t = s, l = ft(), l !== e ? (c.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o === e && (o = null), h = Ne(), h === e && (h = null), l = [l, o, h], t = l) : (s = t, t = e);
    return w = i, i = Qc(r, f), i;
  }
  function ft() {
    var i, r, f, t, l, o, h, n, u, g, d, $, _;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.substr(s, 5).toLowerCase() === es ? (f = c.substr(s, 5), s += 5) : (f = e, p(vs)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = Fe(), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.charCodeAt(s) === 123 ? (h = ge, s++) : (h = e, p(ve)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          for (u = Ne(), u === e && (u = null), g = [], d = a(); d !== e; )
            g.push(d), d = a();
          if (c.charCodeAt(s) === 125 ? (d = de, s++) : (d = e, p(be)), d !== e) {
            for ($ = [], _ = a(); _ !== e; )
              $.push(_), _ = a();
            w = i, i = Yc(l, u);
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
  function Ne() {
    var i, r, f, t, l, o, h;
    if (i = s, r = gt(), r !== e) {
      for (f = s, t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (c.charCodeAt(s) === 46 ? (l = X, s++) : (l = e, p(V)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        h = Ne(), h === e && (h = null), t = [t, l, o, h], f = t;
      } else
        s = f, f = e;
      f === e && (f = null), w = i, i = zc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function re() {
    var i, r, f, t, l, o;
    if (i = s, c.charCodeAt(s) === 123 ? (r = ge, s++) : (r = e, p(ve)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = Ku(), t === e && (t = _p()), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        c.charCodeAt(s) === 125 ? (o = de, s++) : (o = e, p(be)), o !== e ? (w = i, i = Zc(t)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function _p() {
    var i, r, f, t, l, o, h, n, u, g;
    for (i = s, r = Ts(), r === e && (r = null), f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (t = [], l = s, o = ot(), o !== e) {
      for (h = [], n = a(); n !== e; )
        h.push(n), n = a();
      for (c.charCodeAt(s) === 46 ? (n = X, s++) : (n = e, p(V)), n === e && (n = null), u = [], g = a(); g !== e; )
        u.push(g), g = a();
      g = Ts(), g === e && (g = null), o = [o, h, n, u, g], l = o;
    } else
      s = l, l = e;
    for (; l !== e; )
      if (t.push(l), l = s, o = ot(), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        for (c.charCodeAt(s) === 46 ? (n = X, s++) : (n = e, p(V)), n === e && (n = null), u = [], g = a(); g !== e; )
          u.push(g), g = a();
        g = Ts(), g === e && (g = null), o = [o, h, n, u, g], l = o;
      } else
        s = l, l = e;
    return w = i, i = Kc(r, t), i;
  }
  function Ts() {
    var i, r, f, t, l, o, h;
    if (i = s, r = Np(), r !== e) {
      for (f = s, t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (c.charCodeAt(s) === 46 ? (l = X, s++) : (l = e, p(V)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        h = Ts(), h === e && (h = null), t = [t, l, o, h], f = t;
      } else
        s = f, f = e;
      f === e && (f = null), w = i, i = Jc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function ot() {
    var i;
    return i = Rp(), i === e && (i = Ap(), i === e && (i = Lp(), i === e && (i = Cp(), i === e && (i = mp(), i === e && (i = Ip(), i === e && (i = Ep(), i === e && (i = yp()))))))), i;
  }
  function Ap() {
    var i, r, f, t, l;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.substr(s, 8).toLowerCase() === Jt ? (f = c.substr(s, 8), s += 8) : (f = e, p(af)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = re(), l !== e ? (w = i, i = qc(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Cp() {
    var i, r, f, t, l, o, h;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.substr(s, 5).toLowerCase() === es ? (f = c.substr(s, 5), s += 5) : (f = e, p(vs)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = Fe(), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        h = re(), h !== e ? (w = i, i = eh(l, h)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function mp() {
    var i, r, f, t, l, o, h, n;
    if (i = s, c.substr(s, 7).toLowerCase() === qt ? (r = c.substr(s, 7), s += 7) : (r = e, p(ff)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (c.substr(s, 6).toLowerCase() === we ? (t = c.substr(s, 6), s += 6) : (t = e, p(_e)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = Fe(), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = re(), n !== e ? (w = i, i = sh(t, o, n)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Ep() {
    var i, r, f, t, l, o, h, n, u, g, d, $, _;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.substr(s, 4).toLowerCase() === el ? (f = c.substr(s, 4), s += 4) : (f = e, p(of)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (h = C(), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (c.substr(s, 2).toLowerCase() === fe ? (u = c.substr(s, 2), s += 2) : (u = e, p(ws)), u !== e) {
            for (g = [], d = a(); d !== e; )
              g.push(d), d = a();
            if (d = M(), d !== e) {
              for ($ = [], _ = a(); _ !== e; )
                $.push(_), _ = a();
              c.charCodeAt(s) === 41 ? (_ = E, s++) : (_ = e, p(P)), _ !== e ? (w = i, i = rh(h, d)) : (s = i, i = e);
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
  function yp() {
    var i, r, f, t, l;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.substr(s, 6).toLowerCase() === Qr ? (f = c.substr(s, 6), s += 6) : (f = e, p(wi)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = ct(), l !== e ? (w = i, i = ih(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function ct() {
    var i;
    return i = Pp(), i === e && (i = Tp()), i;
  }
  function Pp() {
    var i, r, f, t, l, o, h, n;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (f = M(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (c.charCodeAt(s) === 123 ? (l = ge, s++) : (l = e, p(ve)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        for (h = [], n = Ls(); n !== e; )
          h.push(n), n = Ls();
        c.charCodeAt(s) === 125 ? (n = de, s++) : (n = e, p(be)), n !== e ? (w = i, i = th(f, h)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Tp() {
    var i, r, f, t, l, o, h, n, u, g, d;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.charCodeAt(s) === 40 ? (f = A, s++) : (f = e, p(y)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = [], o = M(); o !== e; )
        l.push(o), o = M();
      if (c.charCodeAt(s) === 41 ? (o = E, s++) : (o = e, p(P)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (c.charCodeAt(s) === 123 ? (n = ge, s++) : (n = e, p(ve)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          for (g = [], d = ht(); d !== e; )
            g.push(d), d = ht();
          c.charCodeAt(s) === 125 ? (d = de, s++) : (d = e, p(be)), d !== e ? (w = i, i = lh(l, g)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function ht() {
    var i, r, f, t, l, o, h;
    if (i = s, c.charCodeAt(s) === 40 ? (r = A, s++) : (r = e, p(y)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (t = [], l = Ls(); l !== e; )
        t.push(l), l = Ls();
      if (c.charCodeAt(s) === 41 ? (l = E, s++) : (l = e, p(P)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        w = i, i = ah(t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Ls() {
    var i, r, f, t;
    if (i = s, r = W(), r === e && (r = Lr(), r === e && (r = Rr(), r === e && (r = Sr(), r === e && (c.substr(s, 5) === Kr ? (r = Kr, s += 5) : (r = e, p(cf)))))), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      w = i, i = fh(r);
    } else
      s = i, i = e;
    return i;
  }
  function Lp() {
    var i, r, f, t;
    if (i = s, c.substr(s, 5).toLowerCase() === sl ? (r = c.substr(s, 5), s += 5) : (r = e, p(hf)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = re(), t !== e ? (w = i, i = oh(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Rp() {
    var i, r, f, t, l, o, h, n;
    if (i = s, r = re(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.substr(s, 5).toLowerCase() === Jr ? (o = c.substr(s, 5), s += 5) : (o = e, p(_i)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = re(), n !== e ? t = n : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (c.substr(s, 5).toLowerCase() === Jr ? (o = c.substr(s, 5), s += 5) : (o = e, p(_i)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          n = re(), n !== e ? t = n : (s = t, t = e);
        } else
          s = t, t = e;
      }
      w = i, i = ch(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Ip() {
    var i, r, f, t, l;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.substr(s, 6).toLowerCase() === rl ? (f = c.substr(s, 6), s += 6) : (f = e, p(nf)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = wr(), l !== e ? (w = i, i = hh(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function wr() {
    var i;
    return i = Pr(), i === e && (i = Tr(), i === e && (i = nt())), i;
  }
  function nt() {
    var i, r, f, t;
    if (i = s, r = W(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = ut(), t !== e ? (w = i, i = nh(r, t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function ut() {
    var i, r, f, t, l, o, h, n, u, g, d, $;
    if (i = s, r = me(), r !== e && (w = i, r = uh()), i = r, i === e)
      if (i = s, c.charCodeAt(s) === 40 ? (r = A, s++) : (r = e, p(y)), r !== e) {
        for (f = [], t = a(); t !== e; )
          f.push(t), t = a();
        for (c.substr(s, 8).toLowerCase() === O ? (t = c.substr(s, 8), s += 8) : (t = e, p(ce)), t === e && (t = null), l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (o = C(), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          if (n = [], u = s, c.charCodeAt(s) === 44 ? (g = D, s++) : (g = e, p(G)), g !== e) {
            for (d = [], $ = a(); $ !== e; )
              d.push($), $ = a();
            $ = C(), $ !== e ? u = $ : (s = u, u = e);
          } else
            s = u, u = e;
          for (; u !== e; )
            if (n.push(u), u = s, c.charCodeAt(s) === 44 ? (g = D, s++) : (g = e, p(G)), g !== e) {
              for (d = [], $ = a(); $ !== e; )
                d.push($), $ = a();
              $ = C(), $ !== e ? u = $ : (s = u, u = e);
            } else
              s = u, u = e;
          c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = i, i = ph(t, o, n)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    return i;
  }
  function xe() {
    var i, r, f, t, l, o, h, n, u, g, d, $;
    if (i = s, r = me(), r !== e && (w = i, r = gh()), i = r, i === e)
      if (i = s, c.charCodeAt(s) === 40 ? (r = A, s++) : (r = e, p(y)), r !== e) {
        for (f = [], t = a(); t !== e; )
          f.push(t), t = a();
        if (t = C(), t !== e) {
          for (l = [], o = a(); o !== e; )
            l.push(o), o = a();
          if (o = [], h = s, c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = C(), g !== e) {
              for (d = [], $ = a(); $ !== e; )
                d.push($), $ = a();
              h = g;
            } else
              s = h, h = e;
          } else
            s = h, h = e;
          for (; h !== e; )
            if (o.push(h), h = s, c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
              for (u = [], g = a(); g !== e; )
                u.push(g), g = a();
              if (g = C(), g !== e) {
                for (d = [], $ = a(); $ !== e; )
                  d.push($), $ = a();
                h = g;
              } else
                s = h, h = e;
            } else
              s = h, h = e;
          c.charCodeAt(s) === 41 ? (h = E, s++) : (h = e, p(P)), h !== e ? (w = i, i = dh(t, o)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    return i;
  }
  function Op() {
    var i, r, f, t, l, o;
    if (i = s, c.charCodeAt(s) === 123 ? (r = ge, s++) : (r = e, p(ve)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (t = pt(), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      c.charCodeAt(s) === 125 ? (o = de, s++) : (o = e, p(be)), o !== e ? (w = i, i = wh(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function pt() {
    var i, r, f, t, l, o, h;
    if (i = s, r = gt(), r !== e) {
      for (f = s, t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (c.charCodeAt(s) === 46 ? (l = X, s++) : (l = e, p(V)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        h = pt(), h === e && (h = null), t = [t, l, o, h], f = t;
      } else
        s = f, f = e;
      f === e && (f = null), w = i, i = $h(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function gt() {
    var i, r, f, t, l;
    if (i = s, r = Os(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = $r(), t !== e ? (w = i, i = vh(r, t)) : (s = i, i = e);
    } else
      s = i, i = e;
    if (i === e) {
      for (i = s, r = [], f = a(); f !== e; )
        r.push(f), f = a();
      if (f = wt(), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        l = Sp(), w = i, i = bh(f, l);
      } else
        s = i, i = e;
    }
    return i;
  }
  function Sp() {
    var i;
    return i = $r(), i === e && (i = null), i;
  }
  function $r() {
    var i, r, f, t, l, o, h, n, u, g, d, $, _;
    if (i = s, r = vr(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = br(), t !== e) {
        for (l = [], o = s, h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (c.charCodeAt(s) === 59 ? (n = Pe, s++) : (n = e, p(Le)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          if (g = s, d = vr(), d !== e) {
            for ($ = [], _ = a(); _ !== e; )
              $.push(_), _ = a();
            _ = br(), _ !== e ? (d = [d, $, _], g = d) : (s = g, g = e);
          } else
            s = g, g = e;
          g === e && (g = null), h = [h, n, u, g], o = h;
        } else
          s = o, o = e;
        for (; o !== e; ) {
          for (l.push(o), o = s, h = [], n = a(); n !== e; )
            h.push(n), n = a();
          if (c.charCodeAt(s) === 59 ? (n = Pe, s++) : (n = e, p(Le)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = s, d = vr(), d !== e) {
              for ($ = [], _ = a(); _ !== e; )
                $.push(_), _ = a();
              _ = br(), _ !== e ? (d = [d, $, _], g = d) : (s = g, g = e);
            } else
              s = g, g = e;
            g === e && (g = null), h = [h, n, u, g], o = h;
          } else
            s = o, o = e;
        }
        w = i, i = _h(r, t, l);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function vr() {
    var i, r;
    return i = Fe(), i === e && (i = s, c.charCodeAt(s) === 97 ? (r = ss, s++) : (r = e, p(bs)), r !== e && (w = i, r = Ah()), i = r), i;
  }
  function br() {
    var i, r, f, t, l, o, h, n;
    if (i = s, r = Me(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.charCodeAt(s) === 44 ? (o = D, s++) : (o = e, p(G)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = Me(), n !== e ? t = n : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (c.charCodeAt(s) === 44 ? (o = D, s++) : (o = e, p(G)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          n = Me(), n !== e ? t = n : (s = t, t = e);
        } else
          s = t, t = e;
      }
      w = i, i = Ch(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Np() {
    var i, r, f, t, l;
    if (i = s, r = Os(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = _r(), t !== e ? (w = i, i = mh(r, t)) : (s = i, i = e);
    } else
      s = i, i = e;
    if (i === e) {
      for (i = s, r = [], f = a(); f !== e; )
        r.push(f), f = a();
      if (f = $t(), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        l = xp(), w = i, i = Eh(f, l);
      } else
        s = i, i = e;
    }
    return i;
  }
  function xp() {
    var i;
    return i = _r(), i === e && (i = null), i;
  }
  function _r() {
    var i, r, f, t, l, o, h, n, u, g, d, $, _;
    if (i = s, r = Rs(), r === e && (r = M()), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = Ar(), t !== e) {
        for (l = [], o = s, h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (c.charCodeAt(s) === 59 ? (n = Pe, s++) : (n = e, p(Le)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          if (g = s, d = Rs(), d === e && (d = M()), d !== e) {
            for ($ = [], _ = a(); _ !== e; )
              $.push(_), _ = a();
            _ = Ar(), _ !== e ? (d = [d, $, _], g = d) : (s = g, g = e);
          } else
            s = g, g = e;
          g === e && (g = null), h = [h, n, u, g], o = h;
        } else
          s = o, o = e;
        for (; o !== e; ) {
          for (l.push(o), o = s, h = [], n = a(); n !== e; )
            h.push(n), n = a();
          if (c.charCodeAt(s) === 59 ? (n = Pe, s++) : (n = e, p(Le)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = s, d = Rs(), d === e && (d = M()), d !== e) {
              for ($ = [], _ = a(); _ !== e; )
                $.push(_), _ = a();
              _ = Ar(), _ !== e ? (d = [d, $, _], g = d) : (s = g, g = e);
            } else
              s = g, g = e;
            g === e && (g = null), h = [h, n, u, g], o = h;
          } else
            s = o, o = e;
        }
        w = i, i = yh(r, t, l);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Ar() {
    var i, r, f, t, l, o, h, n;
    if (i = s, r = Xe(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.charCodeAt(s) === 44 ? (o = D, s++) : (o = e, p(G)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = Xe(), n !== e ? t = n : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (c.charCodeAt(s) === 44 ? (o = D, s++) : (o = e, p(G)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          n = Xe(), n !== e ? t = n : (s = t, t = e);
        } else
          s = t, t = e;
      }
      w = i, i = Ph(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Rs() {
    var i, r, f, t, l, o, h, n;
    if (i = s, r = Cr(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.charCodeAt(s) === 124 ? (o = rs, s++) : (o = e, p(_s)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = Cr(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (c.charCodeAt(s) === 124 ? (o = rs, s++) : (o = e, p(_s)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          n = Cr(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
      }
      w = i, i = Th(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Cr() {
    var i, r, f, t, l, o, h, n;
    if (i = s, r = mr(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.charCodeAt(s) === 47 ? (o = oe, s++) : (o = e, p(he)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = mr(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (c.charCodeAt(s) === 47 ? (o = oe, s++) : (o = e, p(he)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          n = mr(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
      }
      w = i, i = Lh(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function dt() {
    var i, r, f;
    return i = s, r = Dp(), r !== e ? (f = Fp(), f === e && (f = null), w = i, i = Rh(r, f)) : (s = i, i = e), i;
  }
  function mr() {
    var i, r, f;
    return i = dt(), i === e && (i = s, c.charCodeAt(s) === 94 ? (r = qr, s++) : (r = e, p(Ai)), r !== e ? (f = dt(), f !== e ? (w = i, i = Ih(f)) : (s = i, i = e)) : (s = i, i = e)), i;
  }
  function Fp() {
    var i;
    return c.charCodeAt(s) === 63 ? (i = Bs, s++) : (i = e, p(sr)), i === e && (c.charCodeAt(s) === 42 ? (i = ee, s++) : (i = e, p(se)), i === e && (c.charCodeAt(s) === 43 ? (i = $e, s++) : (i = e, p(Ae)))), i;
  }
  function Dp() {
    var i, r, f, t;
    return i = W(), i === e && (i = s, c.charCodeAt(s) === 97 ? (r = ss, s++) : (r = e, p(bs)), r !== e && (w = i, r = Oh()), i = r, i === e && (i = s, c.charCodeAt(s) === 33 ? (r = ks, s++) : (r = e, p(rr)), r !== e ? (f = Gp(), f !== e ? (r = [r, f], i = r) : (s = i, i = e)) : (s = i, i = e), i === e && (i = s, c.charCodeAt(s) === 40 ? (r = A, s++) : (r = e, p(y)), r !== e ? (f = Rs(), f !== e ? (c.charCodeAt(s) === 41 ? (t = E, s++) : (t = e, p(P)), t !== e ? (w = i, i = Sh(f)) : (s = i, i = e)) : (s = i, i = e)) : (s = i, i = e)))), i;
  }
  function Gp() {
    var i, r, f, t, l, o, h, n;
    if (i = Is(), i === e)
      if (i = s, c.charCodeAt(s) === 40 ? (r = A, s++) : (r = e, p(y)), r !== e) {
        if (f = s, t = Is(), t !== e) {
          for (l = [], o = s, c.charCodeAt(s) === 124 ? (h = rs, s++) : (h = e, p(_s)), h !== e ? (n = Is(), n !== e ? (h = [h, n], o = h) : (s = o, o = e)) : (s = o, o = e); o !== e; )
            l.push(o), o = s, c.charCodeAt(s) === 124 ? (h = rs, s++) : (h = e, p(_s)), h !== e ? (n = Is(), n !== e ? (h = [h, n], o = h) : (s = o, o = e)) : (s = o, o = e);
          t = [t, l], f = t;
        } else
          s = f, f = e;
        f === e && (f = null), c.charCodeAt(s) === 41 ? (t = E, s++) : (t = e, p(P)), t !== e ? (r = [r, f, t], i = r) : (s = i, i = e);
      } else
        s = i, i = e;
    return i;
  }
  function Is() {
    var i, r, f;
    return i = W(), i === e && (c.charCodeAt(s) === 97 ? (i = ss, s++) : (i = e, p(bs)), i === e && (i = s, c.charCodeAt(s) === 94 ? (r = qr, s++) : (r = e, p(Ai)), r !== e ? (f = W(), f === e && (c.charCodeAt(s) === 97 ? (f = ss, s++) : (f = e, p(bs))), f !== e ? (r = [r, f], i = r) : (s = i, i = e)) : (s = i, i = e))), i;
  }
  function wt() {
    var i, r;
    return i = s, r = Hp(), r !== e && (w = i, r = Nh(r)), i = r, i === e && (i = Up()), i;
  }
  function Up() {
    var i, r, f, t, l, o, h, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.charCodeAt(s) === 91 ? (f = Ms, s++) : (f = e, p(ir)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = $r(), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.charCodeAt(s) === 93 ? (h = Xs, s++) : (h = e, p(tr)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          w = i, i = xh(l);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function $t() {
    var i, r;
    return i = s, r = Bp(), r !== e && (w = i, r = Fh(r)), i = r, i === e && (i = jp()), i;
  }
  function jp() {
    var i, r, f, t, l, o, h, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.charCodeAt(s) === 91 ? (f = Ms, s++) : (f = e, p(ir)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = _r(), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.charCodeAt(s) === 93 ? (h = Xs, s++) : (h = e, p(tr)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          w = i, i = Dh(l);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Hp() {
    var i, r, f, t, l, o, h, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.charCodeAt(s) === 40 ? (f = A, s++) : (f = e, p(y)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = [], o = Me(), o !== e)
        for (; o !== e; )
          l.push(o), o = Me();
      else
        l = e;
      if (l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.charCodeAt(s) === 41 ? (h = E, s++) : (h = e, p(P)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          w = i, i = Gh(l);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Bp() {
    var i, r, f, t, l, o, h, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (c.charCodeAt(s) === 40 ? (f = A, s++) : (f = e, p(y)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = [], o = Xe(), o !== e)
        for (; o !== e; )
          l.push(o), o = Xe();
      else
        l = e;
      if (l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.charCodeAt(s) === 41 ? (h = E, s++) : (h = e, p(P)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          w = i, i = Uh(l);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Me() {
    var i, r, f;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    return f = Os(), f === e && (f = wt()), f !== e ? (w = i, i = jh(f)) : (s = i, i = e), i;
  }
  function Xe() {
    var i, r, f;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    return f = Os(), f === e && (f = $t()), f !== e ? (w = i, i = Hh(f)) : (s = i, i = e), i;
  }
  function Os() {
    var i;
    return i = M(), i === e && (i = kp()), i;
  }
  function Fe() {
    var i;
    return i = M(), i === e && (i = W()), i;
  }
  function M() {
    var i, r, f, t, l;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (f = sg(), f === e && (f = rg()), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      w = i, i = Bh(f);
    } else
      s = i, i = e;
    return i;
  }
  function kp() {
    var i;
    return i = W(), i === e && (i = Lr(), i === e && (i = Rr(), i === e && (i = Sr(), i === e && (i = Jp(), i === e && (i = me()))))), i;
  }
  function C() {
    var i, r, f, t, l, o, h, n;
    if (i = s, r = Er(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.substr(s, 2) === is ? (o = is, s += 2) : (o = e, p(Ci)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = Er(), n !== e ? t = n : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (c.substr(s, 2) === is ? (o = is, s += 2) : (o = e, p(Ci)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          n = Er(), n !== e ? t = n : (s = t, t = e);
        } else
          s = t, t = e;
      }
      w = i, i = kh(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Er() {
    var i, r, f, t, l, o, h, n;
    if (i = s, r = yr(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.substr(s, 2) === ts ? (o = ts, s += 2) : (o = e, p(mi)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = yr(), n !== e ? t = n : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (c.substr(s, 2) === ts ? (o = ts, s += 2) : (o = e, p(mi)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          n = yr(), n !== e ? t = n : (s = t, t = e);
        } else
          s = t, t = e;
      }
      w = i, i = Mh(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function yr() {
    var i, r, f, t, l, o, h, n, u, g;
    if (i = s, r = z(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.charCodeAt(s) === 61 ? (o = ls, s++) : (o = e, p(As)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
      } else
        s = t, t = e;
      if (t === e) {
        for (t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (c.substr(s, 2) === as ? (o = as, s += 2) : (o = e, p(Ei)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          n = z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e) {
          for (t = s, l = [], o = a(); o !== e; )
            l.push(o), o = a();
          if (c.charCodeAt(s) === 60 ? (o = Vs, s++) : (o = e, p(lr)), o !== e) {
            for (h = [], n = a(); n !== e; )
              h.push(n), n = a();
            n = z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
          } else
            s = t, t = e;
          if (t === e) {
            for (t = s, l = [], o = a(); o !== e; )
              l.push(o), o = a();
            if (c.charCodeAt(s) === 62 ? (o = Ws, s++) : (o = e, p(ar)), o !== e) {
              for (h = [], n = a(); n !== e; )
                h.push(n), n = a();
              n = z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
            } else
              s = t, t = e;
            if (t === e) {
              for (t = s, l = [], o = a(); o !== e; )
                l.push(o), o = a();
              if (c.substr(s, 2) === fs ? (o = fs, s += 2) : (o = e, p(yi)), o !== e) {
                for (h = [], n = a(); n !== e; )
                  h.push(n), n = a();
                n = z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
              } else
                s = t, t = e;
              if (t === e) {
                for (t = s, l = [], o = a(); o !== e; )
                  l.push(o), o = a();
                if (c.substr(s, 2) === os ? (o = os, s += 2) : (o = e, p(Pi)), o !== e) {
                  for (h = [], n = a(); n !== e; )
                    h.push(n), n = a();
                  n = z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
                } else
                  s = t, t = e;
                if (t === e) {
                  for (t = s, l = [], o = a(); o !== e; )
                    l.push(o), o = a();
                  if (c.substr(s, 2).toLowerCase() === cs ? (o = c.substr(s, 2), s += 2) : (o = e, p(Cs)), o !== e) {
                    for (h = [], n = a(); n !== e; )
                      h.push(n), n = a();
                    n = xe(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
                  } else
                    s = t, t = e;
                  if (t === e) {
                    for (t = s, l = [], o = a(); o !== e; )
                      l.push(o), o = a();
                    if (c.substr(s, 3).toLowerCase() === Qs ? (o = c.substr(s, 3), s += 3) : (o = e, p(fr)), o !== e) {
                      for (h = [], n = a(); n !== e; )
                        h.push(n), n = a();
                      if (c.substr(s, 2).toLowerCase() === cs ? (n = c.substr(s, 2), s += 2) : (n = e, p(Cs)), n !== e) {
                        for (u = [], g = a(); g !== e; )
                          u.push(g), g = a();
                        g = xe(), g !== e ? (l = [l, o, h, n, u, g], t = l) : (s = t, t = e);
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
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (c.charCodeAt(s) === 61 ? (o = ls, s++) : (o = e, p(As)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          n = z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e) {
          for (t = s, l = [], o = a(); o !== e; )
            l.push(o), o = a();
          if (c.substr(s, 2) === as ? (o = as, s += 2) : (o = e, p(Ei)), o !== e) {
            for (h = [], n = a(); n !== e; )
              h.push(n), n = a();
            n = z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
          } else
            s = t, t = e;
          if (t === e) {
            for (t = s, l = [], o = a(); o !== e; )
              l.push(o), o = a();
            if (c.charCodeAt(s) === 60 ? (o = Vs, s++) : (o = e, p(lr)), o !== e) {
              for (h = [], n = a(); n !== e; )
                h.push(n), n = a();
              n = z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
            } else
              s = t, t = e;
            if (t === e) {
              for (t = s, l = [], o = a(); o !== e; )
                l.push(o), o = a();
              if (c.charCodeAt(s) === 62 ? (o = Ws, s++) : (o = e, p(ar)), o !== e) {
                for (h = [], n = a(); n !== e; )
                  h.push(n), n = a();
                n = z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
              } else
                s = t, t = e;
              if (t === e) {
                for (t = s, l = [], o = a(); o !== e; )
                  l.push(o), o = a();
                if (c.substr(s, 2) === fs ? (o = fs, s += 2) : (o = e, p(yi)), o !== e) {
                  for (h = [], n = a(); n !== e; )
                    h.push(n), n = a();
                  n = z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
                } else
                  s = t, t = e;
                if (t === e) {
                  for (t = s, l = [], o = a(); o !== e; )
                    l.push(o), o = a();
                  if (c.substr(s, 2) === os ? (o = os, s += 2) : (o = e, p(Pi)), o !== e) {
                    for (h = [], n = a(); n !== e; )
                      h.push(n), n = a();
                    n = z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
                  } else
                    s = t, t = e;
                  if (t === e) {
                    for (t = s, l = [], o = a(); o !== e; )
                      l.push(o), o = a();
                    if (c.substr(s, 2).toLowerCase() === cs ? (o = c.substr(s, 2), s += 2) : (o = e, p(Cs)), o !== e) {
                      for (h = [], n = a(); n !== e; )
                        h.push(n), n = a();
                      n = xe(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
                    } else
                      s = t, t = e;
                    if (t === e) {
                      for (t = s, l = [], o = a(); o !== e; )
                        l.push(o), o = a();
                      if (c.substr(s, 3).toLowerCase() === Qs ? (o = c.substr(s, 3), s += 3) : (o = e, p(fr)), o !== e) {
                        for (h = [], n = a(); n !== e; )
                          h.push(n), n = a();
                        if (c.substr(s, 2).toLowerCase() === cs ? (n = c.substr(s, 2), s += 2) : (n = e, p(Cs)), n !== e) {
                          for (u = [], g = a(); g !== e; )
                            u.push(g), g = a();
                          g = xe(), g !== e ? (l = [l, o, h, n, u, g], t = l) : (s = t, t = e);
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
      w = i, i = Xh(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function z() {
    var i, r, f, t, l, o, h, n, u, g, d;
    if (i = s, r = Ve(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.charCodeAt(s) === 43 ? (o = $e, s++) : (o = e, p(Ae)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = Ve(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
      } else
        s = t, t = e;
      if (t === e) {
        for (t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (c.charCodeAt(s) === 45 ? (o = ie, s++) : (o = e, p(te)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          n = Ve(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e)
          if (t = s, l = Ir(), l === e && (l = Or()), l !== e) {
            for (o = [], h = s, n = [], u = a(); u !== e; )
              n.push(u), u = a();
            if (c.charCodeAt(s) === 42 ? (u = ee, s++) : (u = e, p(se)), u !== e) {
              for (g = [], d = a(); d !== e; )
                g.push(d), d = a();
              d = Z(), d !== e ? (n = [n, u, g, d], h = n) : (s = h, h = e);
            } else
              s = h, h = e;
            if (h === e) {
              for (h = s, n = [], u = a(); u !== e; )
                n.push(u), u = a();
              if (c.charCodeAt(s) === 47 ? (u = oe, s++) : (u = e, p(he)), u !== e) {
                for (g = [], d = a(); d !== e; )
                  g.push(d), d = a();
                d = Z(), d !== e ? (n = [n, u, g, d], h = n) : (s = h, h = e);
              } else
                s = h, h = e;
            }
            for (; h !== e; ) {
              for (o.push(h), h = s, n = [], u = a(); u !== e; )
                n.push(u), u = a();
              if (c.charCodeAt(s) === 42 ? (u = ee, s++) : (u = e, p(se)), u !== e) {
                for (g = [], d = a(); d !== e; )
                  g.push(d), d = a();
                d = Z(), d !== e ? (n = [n, u, g, d], h = n) : (s = h, h = e);
              } else
                s = h, h = e;
              if (h === e) {
                for (h = s, n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (c.charCodeAt(s) === 47 ? (u = oe, s++) : (u = e, p(he)), u !== e) {
                  for (g = [], d = a(); d !== e; )
                    g.push(d), d = a();
                  d = Z(), d !== e ? (n = [n, u, g, d], h = n) : (s = h, h = e);
                } else
                  s = h, h = e;
              }
            }
            l = [l, o], t = l;
          } else
            s = t, t = e;
      }
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (c.charCodeAt(s) === 43 ? (o = $e, s++) : (o = e, p(Ae)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          n = Ve(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e) {
          for (t = s, l = [], o = a(); o !== e; )
            l.push(o), o = a();
          if (c.charCodeAt(s) === 45 ? (o = ie, s++) : (o = e, p(te)), o !== e) {
            for (h = [], n = a(); n !== e; )
              h.push(n), n = a();
            n = Ve(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
          } else
            s = t, t = e;
          if (t === e)
            if (t = s, l = Ir(), l === e && (l = Or()), l !== e) {
              for (o = [], h = s, n = [], u = a(); u !== e; )
                n.push(u), u = a();
              if (c.charCodeAt(s) === 42 ? (u = ee, s++) : (u = e, p(se)), u !== e) {
                for (g = [], d = a(); d !== e; )
                  g.push(d), d = a();
                d = Z(), d !== e ? (n = [n, u, g, d], h = n) : (s = h, h = e);
              } else
                s = h, h = e;
              if (h === e) {
                for (h = s, n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (c.charCodeAt(s) === 47 ? (u = oe, s++) : (u = e, p(he)), u !== e) {
                  for (g = [], d = a(); d !== e; )
                    g.push(d), d = a();
                  d = Z(), d !== e ? (n = [n, u, g, d], h = n) : (s = h, h = e);
                } else
                  s = h, h = e;
              }
              for (; h !== e; ) {
                for (o.push(h), h = s, n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (c.charCodeAt(s) === 42 ? (u = ee, s++) : (u = e, p(se)), u !== e) {
                  for (g = [], d = a(); d !== e; )
                    g.push(d), d = a();
                  d = Z(), d !== e ? (n = [n, u, g, d], h = n) : (s = h, h = e);
                } else
                  s = h, h = e;
                if (h === e) {
                  for (h = s, n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  if (c.charCodeAt(s) === 47 ? (u = oe, s++) : (u = e, p(he)), u !== e) {
                    for (g = [], d = a(); d !== e; )
                      g.push(d), d = a();
                    d = Z(), d !== e ? (n = [n, u, g, d], h = n) : (s = h, h = e);
                  } else
                    s = h, h = e;
                }
              }
              l = [l, o], t = l;
            } else
              s = t, t = e;
        }
      }
      w = i, i = Vh(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Ve() {
    var i, r, f, t, l, o, h, n;
    if (i = s, r = Z(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.charCodeAt(s) === 42 ? (o = ee, s++) : (o = e, p(se)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = Z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
      } else
        s = t, t = e;
      if (t === e) {
        for (t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (c.charCodeAt(s) === 47 ? (o = oe, s++) : (o = e, p(he)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          n = Z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
      }
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (c.charCodeAt(s) === 42 ? (o = ee, s++) : (o = e, p(se)), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          n = Z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e) {
          for (t = s, l = [], o = a(); o !== e; )
            l.push(o), o = a();
          if (c.charCodeAt(s) === 47 ? (o = oe, s++) : (o = e, p(he)), o !== e) {
            for (h = [], n = a(); n !== e; )
              h.push(n), n = a();
            n = Z(), n !== e ? (l = [l, o, h, n], t = l) : (s = t, t = e);
          } else
            s = t, t = e;
        }
      }
      w = i, i = Wh(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Z() {
    var i, r, f, t;
    if (i = s, c.charCodeAt(s) === 33 ? (r = ks, s++) : (r = e, p(rr)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = Ss(), t !== e ? (w = i, i = Qh(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    if (i === e) {
      if (i = s, c.charCodeAt(s) === 43 ? (r = $e, s++) : (r = e, p(Ae)), r !== e) {
        for (f = [], t = a(); t !== e; )
          f.push(t), t = a();
        t = Ss(), t !== e ? (w = i, i = Yh(t)) : (s = i, i = e);
      } else
        s = i, i = e;
      if (i === e) {
        if (i = s, c.charCodeAt(s) === 45 ? (r = ie, s++) : (r = e, p(te)), r !== e) {
          for (f = [], t = a(); t !== e; )
            f.push(t), t = a();
          t = Ss(), t !== e ? (w = i, i = zh(t)) : (s = i, i = e);
        } else
          s = i, i = e;
        i === e && (i = Ss());
      }
    }
    return i;
  }
  function Ss() {
    var i, r;
    return i = Pr(), i === e && (i = Tr(), i === e && (i = zp(), i === e && (i = s, r = Lr(), r !== e && (w = i, r = Zh(r)), i = r, i === e && (i = s, r = Rr(), r !== e && (w = i, r = Kh(r)), i = r, i === e && (i = s, r = Sr(), r !== e && (w = i, r = Jh(r)), i = r, i === e && (i = s, r = M(), r !== e && (w = i, r = qh(r)), i = r)))))), i;
  }
  function Pr() {
    var i, r, f, t, l, o;
    if (i = s, c.charCodeAt(s) === 40 ? (r = A, s++) : (r = e, p(y)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = C(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        c.charCodeAt(s) === 41 ? (o = E, s++) : (o = e, p(P)), o !== e ? (w = i, i = en(t)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Tr() {
    var i, r, f, t, l, o, h, n, u, g, d, $, _, m, L, R;
    if (i = Yp(), i === e) {
      if (i = s, c.substr(s, 3).toLowerCase() === il ? (r = c.substr(s, 3), s += 3) : (r = e, p(uf)), r !== e) {
        for (f = [], t = a(); t !== e; )
          f.push(t), t = a();
        if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
          for (l = [], o = a(); o !== e; )
            l.push(o), o = a();
          if (o = C(), o !== e) {
            for (h = [], n = a(); n !== e; )
              h.push(n), n = a();
            c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = sn(o)) : (s = i, i = e);
          } else
            s = i, i = e;
        } else
          s = i, i = e;
      } else
        s = i, i = e;
      if (i === e) {
        if (i = s, c.substr(s, 4).toLowerCase() === tl ? (r = c.substr(s, 4), s += 4) : (r = e, p(pf)), r !== e) {
          for (f = [], t = a(); t !== e; )
            f.push(t), t = a();
          if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
            for (l = [], o = a(); o !== e; )
              l.push(o), o = a();
            if (o = C(), o !== e) {
              for (h = [], n = a(); n !== e; )
                h.push(n), n = a();
              c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = rn(o)) : (s = i, i = e);
            } else
              s = i, i = e;
          } else
            s = i, i = e;
        } else
          s = i, i = e;
        if (i === e) {
          if (i = s, c.substr(s, 11).toLowerCase() === ll ? (r = c.substr(s, 11), s += 11) : (r = e, p(gf)), r !== e) {
            for (f = [], t = a(); t !== e; )
              f.push(t), t = a();
            if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
              for (l = [], o = a(); o !== e; )
                l.push(o), o = a();
              if (o = C(), o !== e) {
                for (h = [], n = a(); n !== e; )
                  h.push(n), n = a();
                if (c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                  for (u = [], g = a(); g !== e; )
                    u.push(g), g = a();
                  if (g = C(), g !== e) {
                    for (d = [], $ = a(); $ !== e; )
                      d.push($), $ = a();
                    c.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (w = i, i = tn(o, g)) : (s = i, i = e);
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
            if (i = s, c.substr(s, 8).toLowerCase() === al ? (r = c.substr(s, 8), s += 8) : (r = e, p(df)), r !== e) {
              for (f = [], t = a(); t !== e; )
                f.push(t), t = a();
              if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                for (l = [], o = a(); o !== e; )
                  l.push(o), o = a();
                if (o = C(), o !== e) {
                  for (h = [], n = a(); n !== e; )
                    h.push(n), n = a();
                  c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = ln(o)) : (s = i, i = e);
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
            } else
              s = i, i = e;
            if (i === e) {
              if (i = s, c.substr(s, 5).toLowerCase() === fl ? (r = c.substr(s, 5), s += 5) : (r = e, p(wf)), r !== e) {
                for (f = [], t = a(); t !== e; )
                  f.push(t), t = a();
                if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                  for (l = [], o = a(); o !== e; )
                    l.push(o), o = a();
                  if (o = M(), o !== e) {
                    for (h = [], n = a(); n !== e; )
                      h.push(n), n = a();
                    c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = an(o)) : (s = i, i = e);
                  } else
                    s = i, i = e;
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
              if (i === e) {
                if (i = s, c.substr(s, 3).toLowerCase() === ol ? (r = c.substr(s, 3), s += 3) : (r = e, p($f)), r !== e) {
                  for (f = [], t = a(); t !== e; )
                    f.push(t), t = a();
                  if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                    for (l = [], o = a(); o !== e; )
                      l.push(o), o = a();
                    if (o = C(), o !== e) {
                      for (h = [], n = a(); n !== e; )
                        h.push(n), n = a();
                      c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = fn(o)) : (s = i, i = e);
                    } else
                      s = i, i = e;
                  } else
                    s = i, i = e;
                } else
                  s = i, i = e;
                if (i === e) {
                  if (i = s, c.substr(s, 3).toLowerCase() === cl ? (r = c.substr(s, 3), s += 3) : (r = e, p(vf)), r !== e) {
                    for (f = [], t = a(); t !== e; )
                      f.push(t), t = a();
                    if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                      for (l = [], o = a(); o !== e; )
                        l.push(o), o = a();
                      if (o = C(), o !== e) {
                        for (h = [], n = a(); n !== e; )
                          h.push(n), n = a();
                        c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = on(o)) : (s = i, i = e);
                      } else
                        s = i, i = e;
                    } else
                      s = i, i = e;
                  } else
                    s = i, i = e;
                  if (i === e) {
                    if (i = s, c.substr(s, 5).toLowerCase() === hl ? (r = c.substr(s, 5), s += 5) : (r = e, p(bf)), r !== e) {
                      for (f = [], t = a(); t !== e; )
                        f.push(t), t = a();
                      if (t = s, c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                        for (o = [], h = a(); h !== e; )
                          o.push(h), h = a();
                        if (h = C(), h !== e) {
                          for (n = [], u = a(); u !== e; )
                            n.push(u), u = a();
                          c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (l = [l, o, h, n, u], t = l) : (s = t, t = e);
                        } else
                          s = t, t = e;
                      } else
                        s = t, t = e;
                      t === e && (t = me()), t !== e ? (w = i, i = cn(t)) : (s = i, i = e);
                    } else
                      s = i, i = e;
                    if (i === e) {
                      if (i = s, c.substr(s, 4).toLowerCase() === nl ? (r = c.substr(s, 4), s += 4) : (r = e, p(_f)), r !== e) {
                        for (f = [], t = a(); t !== e; )
                          f.push(t), t = a();
                        t = me(), t !== e ? (w = i, i = hn()) : (s = i, i = e);
                      } else
                        s = i, i = e;
                      if (i === e) {
                        if (i = s, c.substr(s, 3).toLowerCase() === ul ? (r = c.substr(s, 3), s += 3) : (r = e, p(Af)), r !== e) {
                          for (f = [], t = a(); t !== e; )
                            f.push(t), t = a();
                          if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                            for (l = [], o = a(); o !== e; )
                              l.push(o), o = a();
                            if (o = C(), o !== e) {
                              for (h = [], n = a(); n !== e; )
                                h.push(n), n = a();
                              c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = nn(o)) : (s = i, i = e);
                            } else
                              s = i, i = e;
                          } else
                            s = i, i = e;
                        } else
                          s = i, i = e;
                        if (i === e) {
                          if (i = s, c.substr(s, 4).toLowerCase() === pl ? (r = c.substr(s, 4), s += 4) : (r = e, p(Cf)), r !== e) {
                            for (f = [], t = a(); t !== e; )
                              f.push(t), t = a();
                            if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                              for (l = [], o = a(); o !== e; )
                                l.push(o), o = a();
                              if (o = C(), o !== e) {
                                for (h = [], n = a(); n !== e; )
                                  h.push(n), n = a();
                                c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = un(o)) : (s = i, i = e);
                              } else
                                s = i, i = e;
                            } else
                              s = i, i = e;
                          } else
                            s = i, i = e;
                          if (i === e) {
                            if (i = s, c.substr(s, 5).toLowerCase() === gl ? (r = c.substr(s, 5), s += 5) : (r = e, p(mf)), r !== e) {
                              for (f = [], t = a(); t !== e; )
                                f.push(t), t = a();
                              if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                for (l = [], o = a(); o !== e; )
                                  l.push(o), o = a();
                                if (o = C(), o !== e) {
                                  for (h = [], n = a(); n !== e; )
                                    h.push(n), n = a();
                                  c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = pn(o)) : (s = i, i = e);
                                } else
                                  s = i, i = e;
                              } else
                                s = i, i = e;
                            } else
                              s = i, i = e;
                            if (i === e) {
                              if (i = s, c.substr(s, 5).toLowerCase() === dl ? (r = c.substr(s, 5), s += 5) : (r = e, p(Ef)), r !== e) {
                                for (f = [], t = a(); t !== e; )
                                  f.push(t), t = a();
                                if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                  for (l = [], o = a(); o !== e; )
                                    l.push(o), o = a();
                                  if (o = C(), o !== e) {
                                    for (h = [], n = a(); n !== e; )
                                      h.push(n), n = a();
                                    c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = gn(o)) : (s = i, i = e);
                                  } else
                                    s = i, i = e;
                                } else
                                  s = i, i = e;
                              } else
                                s = i, i = e;
                              if (i === e) {
                                if (i = s, c.substr(s, 6).toLowerCase() === wl ? (r = c.substr(s, 6), s += 6) : (r = e, p(yf)), r !== e) {
                                  for (f = [], t = a(); t !== e; )
                                    f.push(t), t = a();
                                  t = xe(), t !== e ? (w = i, i = dn(t)) : (s = i, i = e);
                                } else
                                  s = i, i = e;
                                if (i === e && (i = Xp(), i === e)) {
                                  if (i = s, c.substr(s, 6).toLowerCase() === $l ? (r = c.substr(s, 6), s += 6) : (r = e, p(Pf)), r !== e) {
                                    for (f = [], t = a(); t !== e; )
                                      f.push(t), t = a();
                                    if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                      for (l = [], o = a(); o !== e; )
                                        l.push(o), o = a();
                                      if (o = C(), o !== e) {
                                        for (h = [], n = a(); n !== e; )
                                          h.push(n), n = a();
                                        c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = wn(o)) : (s = i, i = e);
                                      } else
                                        s = i, i = e;
                                    } else
                                      s = i, i = e;
                                  } else
                                    s = i, i = e;
                                  if (i === e && (i = Vp(), i === e)) {
                                    if (i = s, c.substr(s, 5).toLowerCase() === vl ? (r = c.substr(s, 5), s += 5) : (r = e, p(Tf)), r !== e) {
                                      for (f = [], t = a(); t !== e; )
                                        f.push(t), t = a();
                                      if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                        for (l = [], o = a(); o !== e; )
                                          l.push(o), o = a();
                                        if (o = C(), o !== e) {
                                          for (h = [], n = a(); n !== e; )
                                            h.push(n), n = a();
                                          c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = $n(o)) : (s = i, i = e);
                                        } else
                                          s = i, i = e;
                                      } else
                                        s = i, i = e;
                                    } else
                                      s = i, i = e;
                                    if (i === e) {
                                      if (i = s, c.substr(s, 5).toLowerCase() === bl ? (r = c.substr(s, 5), s += 5) : (r = e, p(Lf)), r !== e) {
                                        for (f = [], t = a(); t !== e; )
                                          f.push(t), t = a();
                                        if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                          for (l = [], o = a(); o !== e; )
                                            l.push(o), o = a();
                                          if (o = C(), o !== e) {
                                            for (h = [], n = a(); n !== e; )
                                              h.push(n), n = a();
                                            c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = vn(o)) : (s = i, i = e);
                                          } else
                                            s = i, i = e;
                                        } else
                                          s = i, i = e;
                                      } else
                                        s = i, i = e;
                                      if (i === e) {
                                        if (i = s, c.substr(s, 14).toLowerCase() === _l ? (r = c.substr(s, 14), s += 14) : (r = e, p(Rf)), r !== e) {
                                          for (f = [], t = a(); t !== e; )
                                            f.push(t), t = a();
                                          if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                            for (l = [], o = a(); o !== e; )
                                              l.push(o), o = a();
                                            if (o = C(), o !== e) {
                                              for (h = [], n = a(); n !== e; )
                                                h.push(n), n = a();
                                              c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = bn(o)) : (s = i, i = e);
                                            } else
                                              s = i, i = e;
                                          } else
                                            s = i, i = e;
                                        } else
                                          s = i, i = e;
                                        if (i === e) {
                                          if (i = s, c.substr(s, 8).toLowerCase() === Al ? (r = c.substr(s, 8), s += 8) : (r = e, p(If)), r !== e) {
                                            for (f = [], t = a(); t !== e; )
                                              f.push(t), t = a();
                                            if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                              for (l = [], o = a(); o !== e; )
                                                l.push(o), o = a();
                                              if (o = C(), o !== e) {
                                                for (h = [], n = a(); n !== e; )
                                                  h.push(n), n = a();
                                                if (c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                  for (u = [], g = a(); g !== e; )
                                                    u.push(g), g = a();
                                                  if (g = C(), g !== e) {
                                                    for (d = [], $ = a(); $ !== e; )
                                                      d.push($), $ = a();
                                                    c.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (w = i, i = _n(o, g)) : (s = i, i = e);
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
                                            if (i = s, c.substr(s, 9).toLowerCase() === Cl ? (r = c.substr(s, 9), s += 9) : (r = e, p(Of)), r !== e) {
                                              for (f = [], t = a(); t !== e; )
                                                f.push(t), t = a();
                                              if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                for (l = [], o = a(); o !== e; )
                                                  l.push(o), o = a();
                                                if (o = C(), o !== e) {
                                                  for (h = [], n = a(); n !== e; )
                                                    h.push(n), n = a();
                                                  if (c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                    for (u = [], g = a(); g !== e; )
                                                      u.push(g), g = a();
                                                    if (g = C(), g !== e) {
                                                      for (d = [], $ = a(); $ !== e; )
                                                        d.push($), $ = a();
                                                      c.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (w = i, i = An(o, g)) : (s = i, i = e);
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
                                              if (i = s, c.substr(s, 9).toLowerCase() === ml ? (r = c.substr(s, 9), s += 9) : (r = e, p(Sf)), r !== e) {
                                                for (f = [], t = a(); t !== e; )
                                                  f.push(t), t = a();
                                                if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                  for (l = [], o = a(); o !== e; )
                                                    l.push(o), o = a();
                                                  if (o = C(), o !== e) {
                                                    for (h = [], n = a(); n !== e; )
                                                      h.push(n), n = a();
                                                    if (c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                      for (u = [], g = a(); g !== e; )
                                                        u.push(g), g = a();
                                                      if (g = C(), g !== e) {
                                                        for (d = [], $ = a(); $ !== e; )
                                                          d.push($), $ = a();
                                                        c.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (w = i, i = Cn(o, g)) : (s = i, i = e);
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
                                                if (i = s, c.substr(s, 7).toLowerCase() === El ? (r = c.substr(s, 7), s += 7) : (r = e, p(Nf)), r !== e) {
                                                  for (f = [], t = a(); t !== e; )
                                                    f.push(t), t = a();
                                                  if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                    for (l = [], o = a(); o !== e; )
                                                      l.push(o), o = a();
                                                    if (o = C(), o !== e) {
                                                      for (h = [], n = a(); n !== e; )
                                                        h.push(n), n = a();
                                                      if (c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                        for (u = [], g = a(); g !== e; )
                                                          u.push(g), g = a();
                                                        if (g = C(), g !== e) {
                                                          for (d = [], $ = a(); $ !== e; )
                                                            d.push($), $ = a();
                                                          c.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (w = i, i = mn(o, g)) : (s = i, i = e);
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
                                                  if (i = s, c.substr(s, 8).toLowerCase() === yl ? (r = c.substr(s, 8), s += 8) : (r = e, p(xf)), r !== e) {
                                                    for (f = [], t = a(); t !== e; )
                                                      f.push(t), t = a();
                                                    if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                      for (l = [], o = a(); o !== e; )
                                                        l.push(o), o = a();
                                                      if (o = C(), o !== e) {
                                                        for (h = [], n = a(); n !== e; )
                                                          h.push(n), n = a();
                                                        if (c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                          for (u = [], g = a(); g !== e; )
                                                            u.push(g), g = a();
                                                          if (g = C(), g !== e) {
                                                            for (d = [], $ = a(); $ !== e; )
                                                              d.push($), $ = a();
                                                            c.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (w = i, i = En(o, g)) : (s = i, i = e);
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
                                                    if (i = s, c.substr(s, 4).toLowerCase() === Pl ? (r = c.substr(s, 4), s += 4) : (r = e, p(Ff)), r !== e) {
                                                      for (f = [], t = a(); t !== e; )
                                                        f.push(t), t = a();
                                                      if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                        for (l = [], o = a(); o !== e; )
                                                          l.push(o), o = a();
                                                        if (o = C(), o !== e) {
                                                          for (h = [], n = a(); n !== e; )
                                                            h.push(n), n = a();
                                                          c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = yn(o)) : (s = i, i = e);
                                                        } else
                                                          s = i, i = e;
                                                      } else
                                                        s = i, i = e;
                                                    } else
                                                      s = i, i = e;
                                                    if (i === e) {
                                                      if (i = s, c.substr(s, 5).toLowerCase() === Tl ? (r = c.substr(s, 5), s += 5) : (r = e, p(Df)), r !== e) {
                                                        for (f = [], t = a(); t !== e; )
                                                          f.push(t), t = a();
                                                        if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                          for (l = [], o = a(); o !== e; )
                                                            l.push(o), o = a();
                                                          if (o = C(), o !== e) {
                                                            for (h = [], n = a(); n !== e; )
                                                              h.push(n), n = a();
                                                            c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = Pn(o)) : (s = i, i = e);
                                                          } else
                                                            s = i, i = e;
                                                        } else
                                                          s = i, i = e;
                                                      } else
                                                        s = i, i = e;
                                                      if (i === e) {
                                                        if (i = s, c.substr(s, 3).toLowerCase() === Ll ? (r = c.substr(s, 3), s += 3) : (r = e, p(Gf)), r !== e) {
                                                          for (f = [], t = a(); t !== e; )
                                                            f.push(t), t = a();
                                                          if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                            for (l = [], o = a(); o !== e; )
                                                              l.push(o), o = a();
                                                            if (o = C(), o !== e) {
                                                              for (h = [], n = a(); n !== e; )
                                                                h.push(n), n = a();
                                                              c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = Tn(o)) : (s = i, i = e);
                                                            } else
                                                              s = i, i = e;
                                                          } else
                                                            s = i, i = e;
                                                        } else
                                                          s = i, i = e;
                                                        if (i === e) {
                                                          if (i = s, c.substr(s, 5).toLowerCase() === Rl ? (r = c.substr(s, 5), s += 5) : (r = e, p(Uf)), r !== e) {
                                                            for (f = [], t = a(); t !== e; )
                                                              f.push(t), t = a();
                                                            if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                              for (l = [], o = a(); o !== e; )
                                                                l.push(o), o = a();
                                                              if (o = C(), o !== e) {
                                                                for (h = [], n = a(); n !== e; )
                                                                  h.push(n), n = a();
                                                                c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = Ln(o)) : (s = i, i = e);
                                                              } else
                                                                s = i, i = e;
                                                            } else
                                                              s = i, i = e;
                                                          } else
                                                            s = i, i = e;
                                                          if (i === e) {
                                                            if (i = s, c.substr(s, 7).toLowerCase() === Il ? (r = c.substr(s, 7), s += 7) : (r = e, p(jf)), r !== e) {
                                                              for (f = [], t = a(); t !== e; )
                                                                f.push(t), t = a();
                                                              if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                for (l = [], o = a(); o !== e; )
                                                                  l.push(o), o = a();
                                                                if (o = C(), o !== e) {
                                                                  for (h = [], n = a(); n !== e; )
                                                                    h.push(n), n = a();
                                                                  c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = Rn(o)) : (s = i, i = e);
                                                                } else
                                                                  s = i, i = e;
                                                              } else
                                                                s = i, i = e;
                                                            } else
                                                              s = i, i = e;
                                                            if (i === e) {
                                                              if (i = s, c.substr(s, 7).toLowerCase() === Ol ? (r = c.substr(s, 7), s += 7) : (r = e, p(Hf)), r !== e) {
                                                                for (f = [], t = a(); t !== e; )
                                                                  f.push(t), t = a();
                                                                if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                  for (l = [], o = a(); o !== e; )
                                                                    l.push(o), o = a();
                                                                  if (o = C(), o !== e) {
                                                                    for (h = [], n = a(); n !== e; )
                                                                      h.push(n), n = a();
                                                                    c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = In(o)) : (s = i, i = e);
                                                                  } else
                                                                    s = i, i = e;
                                                                } else
                                                                  s = i, i = e;
                                                              } else
                                                                s = i, i = e;
                                                              if (i === e) {
                                                                if (i = s, c.substr(s, 8).toLowerCase() === Sl ? (r = c.substr(s, 8), s += 8) : (r = e, p(Bf)), r !== e) {
                                                                  for (f = [], t = a(); t !== e; )
                                                                    f.push(t), t = a();
                                                                  if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                    for (l = [], o = a(); o !== e; )
                                                                      l.push(o), o = a();
                                                                    if (o = C(), o !== e) {
                                                                      for (h = [], n = a(); n !== e; )
                                                                        h.push(n), n = a();
                                                                      c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = On(o)) : (s = i, i = e);
                                                                    } else
                                                                      s = i, i = e;
                                                                  } else
                                                                    s = i, i = e;
                                                                } else
                                                                  s = i, i = e;
                                                                if (i === e) {
                                                                  if (i = s, c.substr(s, 2).toLowerCase() === Nl ? (r = c.substr(s, 2), s += 2) : (r = e, p(kf)), r !== e) {
                                                                    for (f = [], t = a(); t !== e; )
                                                                      f.push(t), t = a();
                                                                    if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                      for (l = [], o = a(); o !== e; )
                                                                        l.push(o), o = a();
                                                                      if (o = C(), o !== e) {
                                                                        for (h = [], n = a(); n !== e; )
                                                                          h.push(n), n = a();
                                                                        c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = Sn(o)) : (s = i, i = e);
                                                                      } else
                                                                        s = i, i = e;
                                                                    } else
                                                                      s = i, i = e;
                                                                  } else
                                                                    s = i, i = e;
                                                                  if (i === e) {
                                                                    if (i = s, c.substr(s, 3).toLowerCase() === xl ? (r = c.substr(s, 3), s += 3) : (r = e, p(Mf)), r !== e) {
                                                                      for (f = [], t = a(); t !== e; )
                                                                        f.push(t), t = a();
                                                                      t = me(), t !== e ? (w = i, i = Nn()) : (s = i, i = e);
                                                                    } else
                                                                      s = i, i = e;
                                                                    if (i === e) {
                                                                      if (i = s, c.substr(s, 4).toLowerCase() === Fl ? (r = c.substr(s, 4), s += 4) : (r = e, p(Xf)), r !== e) {
                                                                        for (f = [], t = a(); t !== e; )
                                                                          f.push(t), t = a();
                                                                        t = me(), t !== e ? (w = i, i = xn()) : (s = i, i = e);
                                                                      } else
                                                                        s = i, i = e;
                                                                      if (i === e) {
                                                                        if (i = s, c.substr(s, 7).toLowerCase() === Dl ? (r = c.substr(s, 7), s += 7) : (r = e, p(Vf)), r !== e) {
                                                                          for (f = [], t = a(); t !== e; )
                                                                            f.push(t), t = a();
                                                                          t = me(), t !== e ? (w = i, i = Fn()) : (s = i, i = e);
                                                                        } else
                                                                          s = i, i = e;
                                                                        if (i === e) {
                                                                          if (i = s, c.substr(s, 3).toLowerCase() === Gl ? (r = c.substr(s, 3), s += 3) : (r = e, p(Wf)), r !== e) {
                                                                            for (f = [], t = a(); t !== e; )
                                                                              f.push(t), t = a();
                                                                            if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                              for (l = [], o = a(); o !== e; )
                                                                                l.push(o), o = a();
                                                                              if (o = C(), o !== e) {
                                                                                for (h = [], n = a(); n !== e; )
                                                                                  h.push(n), n = a();
                                                                                c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = Dn(o)) : (s = i, i = e);
                                                                              } else
                                                                                s = i, i = e;
                                                                            } else
                                                                              s = i, i = e;
                                                                          } else
                                                                            s = i, i = e;
                                                                          if (i === e) {
                                                                            if (i = s, c.substr(s, 4).toLowerCase() === Ul ? (r = c.substr(s, 4), s += 4) : (r = e, p(Qf)), r !== e) {
                                                                              for (f = [], t = a(); t !== e; )
                                                                                f.push(t), t = a();
                                                                              if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                                for (l = [], o = a(); o !== e; )
                                                                                  l.push(o), o = a();
                                                                                if (o = C(), o !== e) {
                                                                                  for (h = [], n = a(); n !== e; )
                                                                                    h.push(n), n = a();
                                                                                  c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = Gn(o)) : (s = i, i = e);
                                                                                } else
                                                                                  s = i, i = e;
                                                                              } else
                                                                                s = i, i = e;
                                                                            } else
                                                                              s = i, i = e;
                                                                            if (i === e) {
                                                                              if (i = s, c.substr(s, 6).toLowerCase() === jl ? (r = c.substr(s, 6), s += 6) : (r = e, p(Yf)), r !== e) {
                                                                                for (f = [], t = a(); t !== e; )
                                                                                  f.push(t), t = a();
                                                                                if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                                  for (l = [], o = a(); o !== e; )
                                                                                    l.push(o), o = a();
                                                                                  if (o = C(), o !== e) {
                                                                                    for (h = [], n = a(); n !== e; )
                                                                                      h.push(n), n = a();
                                                                                    c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = Un(o)) : (s = i, i = e);
                                                                                  } else
                                                                                    s = i, i = e;
                                                                                } else
                                                                                  s = i, i = e;
                                                                              } else
                                                                                s = i, i = e;
                                                                              if (i === e) {
                                                                                if (i = s, c.substr(s, 6).toLowerCase() === Hl ? (r = c.substr(s, 6), s += 6) : (r = e, p(zf)), r !== e) {
                                                                                  for (f = [], t = a(); t !== e; )
                                                                                    f.push(t), t = a();
                                                                                  if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                                    for (l = [], o = a(); o !== e; )
                                                                                      l.push(o), o = a();
                                                                                    if (o = C(), o !== e) {
                                                                                      for (h = [], n = a(); n !== e; )
                                                                                        h.push(n), n = a();
                                                                                      c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = jn(o)) : (s = i, i = e);
                                                                                    } else
                                                                                      s = i, i = e;
                                                                                  } else
                                                                                    s = i, i = e;
                                                                                } else
                                                                                  s = i, i = e;
                                                                                if (i === e) {
                                                                                  if (i = s, c.substr(s, 6).toLowerCase() === Bl ? (r = c.substr(s, 6), s += 6) : (r = e, p(Zf)), r !== e) {
                                                                                    for (f = [], t = a(); t !== e; )
                                                                                      f.push(t), t = a();
                                                                                    if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                                      for (l = [], o = a(); o !== e; )
                                                                                        l.push(o), o = a();
                                                                                      if (o = C(), o !== e) {
                                                                                        for (h = [], n = a(); n !== e; )
                                                                                          h.push(n), n = a();
                                                                                        c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = Hn(o)) : (s = i, i = e);
                                                                                      } else
                                                                                        s = i, i = e;
                                                                                    } else
                                                                                      s = i, i = e;
                                                                                  } else
                                                                                    s = i, i = e;
                                                                                  if (i === e) {
                                                                                    if (i = s, c.substr(s, 8).toLowerCase() === kl ? (r = c.substr(s, 8), s += 8) : (r = e, p(Kf)), r !== e) {
                                                                                      for (f = [], t = a(); t !== e; )
                                                                                        f.push(t), t = a();
                                                                                      t = xe(), t !== e ? (w = i, i = Bn(t)) : (s = i, i = e);
                                                                                    } else
                                                                                      s = i, i = e;
                                                                                    if (i === e) {
                                                                                      if (i = s, c.substr(s, 2).toLowerCase() === Ml ? (r = c.substr(s, 2), s += 2) : (r = e, p(Jf)), r !== e) {
                                                                                        for (f = [], t = a(); t !== e; )
                                                                                          f.push(t), t = a();
                                                                                        if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                                          for (l = [], o = a(); o !== e; )
                                                                                            l.push(o), o = a();
                                                                                          if (o = C(), o !== e) {
                                                                                            for (h = [], n = a(); n !== e; )
                                                                                              h.push(n), n = a();
                                                                                            if (c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                                                              for (u = [], g = a(); g !== e; )
                                                                                                u.push(g), g = a();
                                                                                              if (g = C(), g !== e) {
                                                                                                for (d = [], $ = a(); $ !== e; )
                                                                                                  d.push($), $ = a();
                                                                                                if (c.charCodeAt(s) === 44 ? ($ = D, s++) : ($ = e, p(G)), $ !== e) {
                                                                                                  for (_ = [], m = a(); m !== e; )
                                                                                                    _.push(m), m = a();
                                                                                                  if (m = C(), m !== e) {
                                                                                                    for (L = [], R = a(); R !== e; )
                                                                                                      L.push(R), R = a();
                                                                                                    c.charCodeAt(s) === 41 ? (R = E, s++) : (R = e, p(P)), R !== e ? (w = i, i = kn(o, g, m)) : (s = i, i = e);
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
                                                                                        if (i = s, c.substr(s, 7).toLowerCase() === Xl ? (r = c.substr(s, 7), s += 7) : (r = e, p(qf)), r !== e) {
                                                                                          for (f = [], t = a(); t !== e; )
                                                                                            f.push(t), t = a();
                                                                                          if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                                            for (l = [], o = a(); o !== e; )
                                                                                              l.push(o), o = a();
                                                                                            if (o = C(), o !== e) {
                                                                                              for (h = [], n = a(); n !== e; )
                                                                                                h.push(n), n = a();
                                                                                              if (c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                                                                for (u = [], g = a(); g !== e; )
                                                                                                  u.push(g), g = a();
                                                                                                if (g = C(), g !== e) {
                                                                                                  for (d = [], $ = a(); $ !== e; )
                                                                                                    d.push($), $ = a();
                                                                                                  c.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (w = i, i = Mn(o, g)) : (s = i, i = e);
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
                                                                                          if (i = s, c.substr(s, 5).toLowerCase() === Vl ? (r = c.substr(s, 5), s += 5) : (r = e, p(eo)), r !== e) {
                                                                                            for (f = [], t = a(); t !== e; )
                                                                                              f.push(t), t = a();
                                                                                            if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                                              for (l = [], o = a(); o !== e; )
                                                                                                l.push(o), o = a();
                                                                                              if (o = C(), o !== e) {
                                                                                                for (h = [], n = a(); n !== e; )
                                                                                                  h.push(n), n = a();
                                                                                                if (c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                                                                  for (u = [], g = a(); g !== e; )
                                                                                                    u.push(g), g = a();
                                                                                                  if (g = C(), g !== e) {
                                                                                                    for (d = [], $ = a(); $ !== e; )
                                                                                                      d.push($), $ = a();
                                                                                                    c.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (w = i, i = Xn(o, g)) : (s = i, i = e);
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
                                                                                            if (i = s, c.substr(s, 8).toLowerCase() === Wl ? (r = c.substr(s, 8), s += 8) : (r = e, p(so)), r !== e) {
                                                                                              for (f = [], t = a(); t !== e; )
                                                                                                f.push(t), t = a();
                                                                                              if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                                                for (l = [], o = a(); o !== e; )
                                                                                                  l.push(o), o = a();
                                                                                                if (o = C(), o !== e) {
                                                                                                  for (h = [], n = a(); n !== e; )
                                                                                                    h.push(n), n = a();
                                                                                                  if (c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                                                                    for (u = [], g = a(); g !== e; )
                                                                                                      u.push(g), g = a();
                                                                                                    if (g = C(), g !== e) {
                                                                                                      for (d = [], $ = a(); $ !== e; )
                                                                                                        d.push($), $ = a();
                                                                                                      c.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (w = i, i = Vn(o, g)) : (s = i, i = e);
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
                                                                                              if (i = s, c.substr(s, 5).toLowerCase() === Ql ? (r = c.substr(s, 5), s += 5) : (r = e, p(ro)), r === e && (c.substr(s, 5).toLowerCase() === Yl ? (r = c.substr(s, 5), s += 5) : (r = e, p(io))), r !== e) {
                                                                                                for (f = [], t = a(); t !== e; )
                                                                                                  f.push(t), t = a();
                                                                                                if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                                                  for (l = [], o = a(); o !== e; )
                                                                                                    l.push(o), o = a();
                                                                                                  if (o = C(), o !== e) {
                                                                                                    for (h = [], n = a(); n !== e; )
                                                                                                      h.push(n), n = a();
                                                                                                    c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = Wn(o)) : (s = i, i = e);
                                                                                                  } else
                                                                                                    s = i, i = e;
                                                                                                } else
                                                                                                  s = i, i = e;
                                                                                              } else
                                                                                                s = i, i = e;
                                                                                              if (i === e) {
                                                                                                if (i = s, c.substr(s, 7).toLowerCase() === zl ? (r = c.substr(s, 7), s += 7) : (r = e, p(to)), r !== e) {
                                                                                                  for (f = [], t = a(); t !== e; )
                                                                                                    f.push(t), t = a();
                                                                                                  if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                                                    for (l = [], o = a(); o !== e; )
                                                                                                      l.push(o), o = a();
                                                                                                    if (o = C(), o !== e) {
                                                                                                      for (h = [], n = a(); n !== e; )
                                                                                                        h.push(n), n = a();
                                                                                                      c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = Qn(o)) : (s = i, i = e);
                                                                                                    } else
                                                                                                      s = i, i = e;
                                                                                                  } else
                                                                                                    s = i, i = e;
                                                                                                } else
                                                                                                  s = i, i = e;
                                                                                                if (i === e) {
                                                                                                  if (i = s, c.substr(s, 9).toLowerCase() === Zl ? (r = c.substr(s, 9), s += 9) : (r = e, p(lo)), r !== e) {
                                                                                                    for (f = [], t = a(); t !== e; )
                                                                                                      f.push(t), t = a();
                                                                                                    if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                                                      for (l = [], o = a(); o !== e; )
                                                                                                        l.push(o), o = a();
                                                                                                      if (o = C(), o !== e) {
                                                                                                        for (h = [], n = a(); n !== e; )
                                                                                                          h.push(n), n = a();
                                                                                                        c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = Yn(o)) : (s = i, i = e);
                                                                                                      } else
                                                                                                        s = i, i = e;
                                                                                                    } else
                                                                                                      s = i, i = e;
                                                                                                  } else
                                                                                                    s = i, i = e;
                                                                                                  if (i === e) {
                                                                                                    if (i = s, c.substr(s, 9).toLowerCase() === Kl ? (r = c.substr(s, 9), s += 9) : (r = e, p(ao)), r !== e) {
                                                                                                      for (f = [], t = a(); t !== e; )
                                                                                                        f.push(t), t = a();
                                                                                                      if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                                                                                                        for (l = [], o = a(); o !== e; )
                                                                                                          l.push(o), o = a();
                                                                                                        if (o = C(), o !== e) {
                                                                                                          for (h = [], n = a(); n !== e; )
                                                                                                            h.push(n), n = a();
                                                                                                          c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = i, i = zn(o)) : (s = i, i = e);
                                                                                                        } else
                                                                                                          s = i, i = e;
                                                                                                      } else
                                                                                                        s = i, i = e;
                                                                                                    } else
                                                                                                      s = i, i = e;
                                                                                                    i === e && (i = Mp(), i === e && (i = Wp(), i === e && (i = Qp())));
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
  function Mp() {
    var i, r, f, t, l, o, h, n, u, g, d, $, _, m, L;
    if (i = s, c.substr(s, 5).toLowerCase() === Jl ? (r = c.substr(s, 5), s += 5) : (r = e, p(fo)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (o = C(), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          if (c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = C(), g !== e) {
              for (d = [], $ = a(); $ !== e; )
                d.push($), $ = a();
              if ($ = s, c.charCodeAt(s) === 44 ? (_ = D, s++) : (_ = e, p(G)), _ !== e) {
                for (m = [], L = a(); L !== e; )
                  m.push(L), L = a();
                L = C(), L !== e ? (_ = [_, m, L], $ = _) : (s = $, $ = e);
              } else
                s = $, $ = e;
              for ($ === e && ($ = null), _ = [], m = a(); m !== e; )
                _.push(m), m = a();
              c.charCodeAt(s) === 41 ? (m = E, s++) : (m = e, p(P)), m !== e ? (w = i, i = Zn(o, g, $)) : (s = i, i = e);
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
  function Xp() {
    var i, r, f, t, l, o, h, n, u, g, d, $, _, m, L;
    if (i = s, c.substr(s, 6).toLowerCase() === ql ? (r = c.substr(s, 6), s += 6) : (r = e, p(oo)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (o = C(), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          if (c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = C(), g !== e) {
              for (d = [], $ = a(); $ !== e; )
                d.push($), $ = a();
              if ($ = s, c.charCodeAt(s) === 44 ? (_ = D, s++) : (_ = e, p(G)), _ !== e) {
                for (m = [], L = a(); L !== e; )
                  m.push(L), L = a();
                L = C(), L !== e ? (_ = [_, m, L], $ = _) : (s = $, $ = e);
              } else
                s = $, $ = e;
              for ($ === e && ($ = null), _ = [], m = a(); m !== e; )
                _.push(m), m = a();
              c.charCodeAt(s) === 41 ? (m = E, s++) : (m = e, p(P)), m !== e ? (w = i, i = Kn(o, g, $)) : (s = i, i = e);
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
  function Vp() {
    var i, r, f, t, l, o, h, n, u, g, d, $, _, m, L, R, S, B, ne;
    if (i = s, c.substr(s, 7).toLowerCase() === ea ? (r = c.substr(s, 7), s += 7) : (r = e, p(co)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (o = C(), o !== e) {
          for (h = [], n = a(); n !== e; )
            h.push(n), n = a();
          if (c.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = C(), g !== e) {
              for (d = [], $ = a(); $ !== e; )
                d.push($), $ = a();
              if (c.charCodeAt(s) === 44 ? ($ = D, s++) : ($ = e, p(G)), $ !== e) {
                for (_ = [], m = a(); m !== e; )
                  _.push(m), m = a();
                if (m = C(), m !== e) {
                  for (L = [], R = a(); R !== e; )
                    L.push(R), R = a();
                  if (R = s, c.charCodeAt(s) === 44 ? (S = D, s++) : (S = e, p(G)), S !== e) {
                    for (B = [], ne = a(); ne !== e; )
                      B.push(ne), ne = a();
                    ne = C(), ne !== e ? (S = [S, B, ne], R = S) : (s = R, R = e);
                  } else
                    s = R, R = e;
                  for (R === e && (R = null), S = [], B = a(); B !== e; )
                    S.push(B), B = a();
                  c.charCodeAt(s) === 41 ? (B = E, s++) : (B = e, p(P)), B !== e ? (w = i, i = Jn(o, g, m, R)) : (s = i, i = e);
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
  function Wp() {
    var i, r, f, t;
    if (i = s, c.substr(s, 6).toLowerCase() === ei ? (r = c.substr(s, 6), s += 6) : (r = e, p(Ti)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = re(), t !== e ? (w = i, i = qn(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Qp() {
    var i, r, f, t, l, o;
    if (i = s, c.substr(s, 3).toLowerCase() === Qs ? (r = c.substr(s, 3), s += 3) : (r = e, p(fr)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (c.substr(s, 6).toLowerCase() === ei ? (t = c.substr(s, 6), s += 6) : (t = e, p(Ti)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        o = re(), o !== e ? (w = i, i = eu(o)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Yp() {
    var i, r, f, t, l, o, h, n, u, g, d, $, _, m, L, R, S;
    if (i = s, c.substr(s, 5).toLowerCase() === sa ? (r = c.substr(s, 5), s += 5) : (r = e, p(ho)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        for (c.substr(s, 8).toLowerCase() === O ? (o = c.substr(s, 8), s += 8) : (o = e, p(ce)), o === e && (o = null), h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (c.charCodeAt(s) === 42 ? (n = ee, s++) : (n = e, p(se)), n === e && (n = C()), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          if (c.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
            for (d = [], $ = a(); $ !== e; )
              d.push($), $ = a();
            w = i, i = su(o, n);
          } else
            s = i, i = e;
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    if (i === e) {
      if (i = s, c.substr(s, 3).toLowerCase() === ra ? (r = c.substr(s, 3), s += 3) : (r = e, p(no)), r !== e) {
        for (f = [], t = a(); t !== e; )
          f.push(t), t = a();
        if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
          for (l = [], o = a(); o !== e; )
            l.push(o), o = a();
          for (c.substr(s, 8).toLowerCase() === O ? (o = c.substr(s, 8), s += 8) : (o = e, p(ce)), o === e && (o = null), h = [], n = a(); n !== e; )
            h.push(n), n = a();
          if (n = C(), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (c.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
              for (d = [], $ = a(); $ !== e; )
                d.push($), $ = a();
              w = i, i = ru(o, n);
            } else
              s = i, i = e;
          } else
            s = i, i = e;
        } else
          s = i, i = e;
      } else
        s = i, i = e;
      if (i === e) {
        if (i = s, c.substr(s, 3).toLowerCase() === ia ? (r = c.substr(s, 3), s += 3) : (r = e, p(uo)), r !== e) {
          for (f = [], t = a(); t !== e; )
            f.push(t), t = a();
          if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
            for (l = [], o = a(); o !== e; )
              l.push(o), o = a();
            for (c.substr(s, 8).toLowerCase() === O ? (o = c.substr(s, 8), s += 8) : (o = e, p(ce)), o === e && (o = null), h = [], n = a(); n !== e; )
              h.push(n), n = a();
            if (n = C(), n !== e) {
              for (u = [], g = a(); g !== e; )
                u.push(g), g = a();
              if (c.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
                for (d = [], $ = a(); $ !== e; )
                  d.push($), $ = a();
                w = i, i = iu(o, n);
              } else
                s = i, i = e;
            } else
              s = i, i = e;
          } else
            s = i, i = e;
        } else
          s = i, i = e;
        if (i === e) {
          if (i = s, c.substr(s, 3).toLowerCase() === ta ? (r = c.substr(s, 3), s += 3) : (r = e, p(po)), r !== e) {
            for (f = [], t = a(); t !== e; )
              f.push(t), t = a();
            if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
              for (l = [], o = a(); o !== e; )
                l.push(o), o = a();
              for (c.substr(s, 8).toLowerCase() === O ? (o = c.substr(s, 8), s += 8) : (o = e, p(ce)), o === e && (o = null), h = [], n = a(); n !== e; )
                h.push(n), n = a();
              if (n = C(), n !== e) {
                for (u = [], g = a(); g !== e; )
                  u.push(g), g = a();
                if (c.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
                  for (d = [], $ = a(); $ !== e; )
                    d.push($), $ = a();
                  w = i, i = tu(o, n);
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
            } else
              s = i, i = e;
          } else
            s = i, i = e;
          if (i === e) {
            if (i = s, c.substr(s, 3).toLowerCase() === la ? (r = c.substr(s, 3), s += 3) : (r = e, p(go)), r !== e) {
              for (f = [], t = a(); t !== e; )
                f.push(t), t = a();
              if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                for (l = [], o = a(); o !== e; )
                  l.push(o), o = a();
                for (c.substr(s, 8).toLowerCase() === O ? (o = c.substr(s, 8), s += 8) : (o = e, p(ce)), o === e && (o = null), h = [], n = a(); n !== e; )
                  h.push(n), n = a();
                if (n = C(), n !== e) {
                  for (u = [], g = a(); g !== e; )
                    u.push(g), g = a();
                  if (c.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
                    for (d = [], $ = a(); $ !== e; )
                      d.push($), $ = a();
                    w = i, i = lu(o, n);
                  } else
                    s = i, i = e;
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
            } else
              s = i, i = e;
            if (i === e) {
              if (i = s, c.substr(s, 6).toLowerCase() === aa ? (r = c.substr(s, 6), s += 6) : (r = e, p(wo)), r !== e) {
                for (f = [], t = a(); t !== e; )
                  f.push(t), t = a();
                if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                  for (l = [], o = a(); o !== e; )
                    l.push(o), o = a();
                  for (c.substr(s, 8).toLowerCase() === O ? (o = c.substr(s, 8), s += 8) : (o = e, p(ce)), o === e && (o = null), h = [], n = a(); n !== e; )
                    h.push(n), n = a();
                  if (n = C(), n !== e) {
                    for (u = [], g = a(); g !== e; )
                      u.push(g), g = a();
                    if (c.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
                      for (d = [], $ = a(); $ !== e; )
                        d.push($), $ = a();
                      w = i, i = au(o, n);
                    } else
                      s = i, i = e;
                  } else
                    s = i, i = e;
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
              if (i === e)
                if (i = s, c.substr(s, 12).toLowerCase() === fa ? (r = c.substr(s, 12), s += 12) : (r = e, p($o)), r !== e) {
                  for (f = [], t = a(); t !== e; )
                    f.push(t), t = a();
                  if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
                    for (l = [], o = a(); o !== e; )
                      l.push(o), o = a();
                    for (c.substr(s, 8).toLowerCase() === O ? (o = c.substr(s, 8), s += 8) : (o = e, p(ce)), o === e && (o = null), h = [], n = a(); n !== e; )
                      h.push(n), n = a();
                    if (n = C(), n !== e) {
                      for (u = s, g = [], d = a(); d !== e; )
                        g.push(d), d = a();
                      if (c.charCodeAt(s) === 59 ? (d = Pe, s++) : (d = e, p(Le)), d !== e) {
                        for ($ = [], _ = a(); _ !== e; )
                          $.push(_), _ = a();
                        if (c.substr(s, 9).toLowerCase() === oa ? (_ = c.substr(s, 9), s += 9) : (_ = e, p(vo)), _ !== e) {
                          for (m = [], L = a(); L !== e; )
                            m.push(L), L = a();
                          if (c.charCodeAt(s) === 61 ? (L = ls, s++) : (L = e, p(As)), L !== e) {
                            for (R = [], S = a(); S !== e; )
                              R.push(S), S = a();
                            S = vt(), S !== e ? (g = [g, d, $, _, m, L, R, S], u = g) : (s = u, u = e);
                          } else
                            s = u, u = e;
                        } else
                          s = u, u = e;
                      } else
                        s = u, u = e;
                      for (u === e && (u = null), g = [], d = a(); d !== e; )
                        g.push(d), d = a();
                      if (c.charCodeAt(s) === 41 ? (d = E, s++) : (d = e, p(P)), d !== e) {
                        for ($ = [], _ = a(); _ !== e; )
                          $.push(_), _ = a();
                        w = i, i = fu(o, n, u);
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
  function zp() {
    var i, r, f, t;
    if (i = s, r = W(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = ut(), t === e && (t = null), w = i, i = ou(r, t);
    } else
      s = i, i = e;
    return i;
  }
  function Lr() {
    var i, r, f, t, l;
    return i = s, r = vt(), r !== e ? (f = ig(), f === e && (f = s, c.substr(s, 2) === si ? (t = si, s += 2) : (t = e, p(bo)), t !== e ? (l = W(), l !== e ? (t = [t, l], f = t) : (s = f, f = e)) : (s = f, f = e)), f === e && (f = null), w = i, i = cu(r, f)) : (s = i, i = e), i;
  }
  function Rr() {
    var i;
    return i = Zp(), i === e && (i = Ir(), i === e && (i = Or())), i;
  }
  function Zp() {
    var i;
    return i = Dr(), i === e && (i = Fr(), i === e && (i = We())), i;
  }
  function Ir() {
    var i;
    return i = ag(), i === e && (i = lg(), i === e && (i = tg())), i;
  }
  function Or() {
    var i;
    return i = cg(), i === e && (i = og(), i === e && (i = fg())), i;
  }
  function Sr() {
    var i, r;
    return i = s, c.substr(s, 4).toLowerCase() === ca ? (r = c.substr(s, 4), s += 4) : (r = e, p(_o)), r !== e && (w = i, r = hu()), i = r, i === e && (i = s, c.substr(s, 5).toLowerCase() === ha ? (r = c.substr(s, 5), s += 5) : (r = e, p(Ao)), r !== e && (w = i, r = nu()), i = r), i;
  }
  function vt() {
    var i;
    return i = ug(), i === e && (i = pg(), i === e && (i = hg(), i === e && (i = ng()))), i;
  }
  function W() {
    var i, r;
    return i = s, r = Nr(), r !== e && (w = i, r = uu(r)), i = r, i === e && (i = s, r = Kp(), r !== e && (w = i, r = pu(r)), i = r), i;
  }
  function Kp() {
    var i, r;
    return i = s, r = qp(), r !== e && (w = i, r = gu(r)), i = r, i === e && (i = s, r = xr(), r !== e && (w = i, r = du(r)), i = r), i;
  }
  function Jp() {
    var i, r;
    return i = s, r = eg(), r !== e && (w = i, r = wu(r)), i = r, i === e && (i = s, r = dg(), r !== e && (w = i, r = $u()), i = r), i;
  }
  function Nr() {
    var i, r, f, t;
    if (i = s, c.charCodeAt(s) === 60 ? (r = Vs, s++) : (r = e, p(lr)), r !== e) {
      for (f = [], oi.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(Li)); t !== e; )
        f.push(t), oi.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(Li));
      c.charCodeAt(s) === 62 ? (t = Ws, s++) : (t = e, p(ar)), t !== e ? (w = i, i = vu(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function xr() {
    var i, r, f;
    return i = s, r = wg(), r === e && (r = null), c.charCodeAt(s) === 58 ? (f = Te, s++) : (f = e, p(Re)), f !== e ? (w = i, i = bu(r)) : (s = i, i = e), i;
  }
  function qp() {
    var i, r, f;
    return i = s, r = xr(), r !== e ? (f = $g(), f !== e ? (w = i, i = _u(r, f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function eg() {
    var i, r, f, t, l, o, h;
    if (i = s, c.substr(s, 2) === ri ? (r = ri, s += 2) : (r = e, p(Co)), r !== e)
      if (f = De(), f === e && (j.test(c.charAt(s)) ? (f = c.charAt(s), s++) : (f = e, p(H))), f !== e) {
        for (t = [], l = q(), l === e && (l = s, c.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e ? (h = q(), h !== e ? (o = [o, h], l = o) : (s = l, l = e)) : (s = l, l = e)); l !== e; )
          t.push(l), l = q(), l === e && (l = s, c.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e ? (h = q(), h !== e ? (o = [o, h], l = o) : (s = l, l = e)) : (s = l, l = e));
        w = i, i = Au();
      } else
        s = i, i = e;
    else
      s = i, i = e;
    return i;
  }
  function sg() {
    var i, r, f;
    return i = s, c.charCodeAt(s) === 63 ? (r = Bs, s++) : (r = e, p(sr)), r !== e ? (f = At(), f !== e ? (w = i, i = Cu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function rg() {
    var i, r, f;
    return i = s, c.charCodeAt(s) === 36 ? (r = ii, s++) : (r = e, p(Ri)), r !== e ? (f = At(), f !== e ? (w = i, i = mu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function ig() {
    var i, r, f, t, l, o, h, n;
    if (i = s, c.charCodeAt(s) === 64 ? (r = ti, s++) : (r = e, p(Ii)), r !== e) {
      if (f = [], ci.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(Oi)), t !== e)
        for (; t !== e; )
          f.push(t), ci.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(Oi));
      else
        f = e;
      if (f !== e) {
        if (t = [], l = s, c.charCodeAt(s) === 45 ? (o = ie, s++) : (o = e, p(te)), o !== e) {
          if (h = [], ds.test(c.charAt(s)) ? (n = c.charAt(s), s++) : (n = e, p(ms)), n !== e)
            for (; n !== e; )
              h.push(n), ds.test(c.charAt(s)) ? (n = c.charAt(s), s++) : (n = e, p(ms));
          else
            h = e;
          h !== e ? (o = [o, h], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
        for (; l !== e; )
          if (t.push(l), l = s, c.charCodeAt(s) === 45 ? (o = ie, s++) : (o = e, p(te)), o !== e) {
            if (h = [], ds.test(c.charAt(s)) ? (n = c.charAt(s), s++) : (n = e, p(ms)), n !== e)
              for (; n !== e; )
                h.push(n), ds.test(c.charAt(s)) ? (n = c.charAt(s), s++) : (n = e, p(ms));
            else
              h = e;
            h !== e ? (o = [o, h], l = o) : (s = l, l = e);
          } else
            s = l, l = e;
        w = i, i = Eu(f, t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function We() {
    var i, r, f;
    if (i = s, r = [], j.test(c.charAt(s)) ? (f = c.charAt(s), s++) : (f = e, p(H)), f !== e)
      for (; f !== e; )
        r.push(f), j.test(c.charAt(s)) ? (f = c.charAt(s), s++) : (f = e, p(H));
    else
      r = e;
    return r !== e && (w = i, r = yu()), i = r, i;
  }
  function Fr() {
    var i, r, f, t, l;
    for (i = s, r = [], j.test(c.charAt(s)) ? (f = c.charAt(s), s++) : (f = e, p(H)); f !== e; )
      r.push(f), j.test(c.charAt(s)) ? (f = c.charAt(s), s++) : (f = e, p(H));
    if (c.charCodeAt(s) === 46 ? (f = X, s++) : (f = e, p(V)), f !== e) {
      if (t = [], j.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(H)), l !== e)
        for (; l !== e; )
          t.push(l), j.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(H));
      else
        t = e;
      t !== e ? (w = i, i = Pu()) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Dr() {
    var i, r, f, t, l;
    if (i = s, r = [], j.test(c.charAt(s)) ? (f = c.charAt(s), s++) : (f = e, p(H)), f !== e)
      for (; f !== e; )
        r.push(f), j.test(c.charAt(s)) ? (f = c.charAt(s), s++) : (f = e, p(H));
    else
      r = e;
    if (r !== e)
      if (c.charCodeAt(s) === 46 ? (f = X, s++) : (f = e, p(V)), f !== e) {
        for (t = [], j.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(H)); l !== e; )
          t.push(l), j.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(H));
        l = Gr(), l !== e ? (w = i, i = Tu()) : (s = i, i = e);
      } else
        s = i, i = e;
    else
      s = i, i = e;
    if (i === e) {
      if (i = s, c.charCodeAt(s) === 46 ? (r = X, s++) : (r = e, p(V)), r !== e) {
        if (f = [], j.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(H)), t !== e)
          for (; t !== e; )
            f.push(t), j.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(H));
        else
          f = e;
        f !== e ? (t = Gr(), t !== e ? (w = i, i = Lu()) : (s = i, i = e)) : (s = i, i = e);
      } else
        s = i, i = e;
      if (i === e) {
        if (i = s, r = [], j.test(c.charAt(s)) ? (f = c.charAt(s), s++) : (f = e, p(H)), f !== e)
          for (; f !== e; )
            r.push(f), j.test(c.charAt(s)) ? (f = c.charAt(s), s++) : (f = e, p(H));
        else
          r = e;
        r !== e ? (f = Gr(), f !== e ? (w = i, i = Ru()) : (s = i, i = e)) : (s = i, i = e);
      }
    }
    return i;
  }
  function tg() {
    var i, r, f;
    return i = s, c.charCodeAt(s) === 43 ? (r = $e, s++) : (r = e, p(Ae)), r !== e ? (f = We(), f !== e ? (w = i, i = Iu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function lg() {
    var i, r, f;
    return i = s, c.charCodeAt(s) === 43 ? (r = $e, s++) : (r = e, p(Ae)), r !== e ? (f = Fr(), f !== e ? (w = i, i = Ou(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function ag() {
    var i, r, f;
    return i = s, c.charCodeAt(s) === 43 ? (r = $e, s++) : (r = e, p(Ae)), r !== e ? (f = Dr(), f !== e ? (w = i, i = Su(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function fg() {
    var i, r, f;
    return i = s, c.charCodeAt(s) === 45 ? (r = ie, s++) : (r = e, p(te)), r !== e ? (f = We(), f !== e ? (w = i, i = Nu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function og() {
    var i, r, f;
    return i = s, c.charCodeAt(s) === 45 ? (r = ie, s++) : (r = e, p(te)), r !== e ? (f = Fr(), f !== e ? (w = i, i = xu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function cg() {
    var i, r, f;
    return i = s, c.charCodeAt(s) === 45 ? (r = ie, s++) : (r = e, p(te)), r !== e ? (f = Dr(), f !== e ? (w = i, i = Fu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function Gr() {
    var i, r, f, t, l;
    if (i = s, pa.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(mo)), r !== e) {
      if (ga.test(c.charAt(s)) ? (f = c.charAt(s), s++) : (f = e, p(Eo)), f === e && (f = null), t = [], j.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(H)), l !== e)
        for (; l !== e; )
          t.push(l), j.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(H));
      else
        t = e;
      t !== e ? (r = [r, f, t], i = r) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function hg() {
    var i, r, f, t;
    if (i = s, c.charCodeAt(s) === 39 ? (r = He, s++) : (r = e, p(Be)), r !== e) {
      for (f = [], hi.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(Si)), t === e && (t = Ce()); t !== e; )
        f.push(t), hi.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(Si)), t === e && (t = Ce());
      c.charCodeAt(s) === 39 ? (t = He, s++) : (t = e, p(Be)), t !== e ? (w = i, i = Du(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function ng() {
    var i, r, f, t;
    if (i = s, c.charCodeAt(s) === 34 ? (r = hs, s++) : (r = e, p(Es)), r !== e) {
      for (f = [], ni.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(Ni)), t === e && (t = Ce()); t !== e; )
        f.push(t), ni.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(Ni)), t === e && (t = Ce());
      c.charCodeAt(s) === 34 ? (t = hs, s++) : (t = e, p(Es)), t !== e ? (w = i, i = Gu(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function ug() {
    var i, r, f, t, l, o;
    if (i = s, c.substr(s, 3) === ns ? (r = ns, s += 3) : (r = e, p(xi)), r !== e) {
      for (f = [], t = s, c.substr(s, 2) === us ? (l = us, s += 2) : (l = e, p(Fi)), l === e && (c.charCodeAt(s) === 39 ? (l = He, s++) : (l = e, p(Be))), l === e && (l = null), ui.test(c.charAt(s)) ? (o = c.charAt(s), s++) : (o = e, p(Di)), o === e && (o = Ce()), o !== e ? (l = [l, o], t = l) : (s = t, t = e); t !== e; )
        f.push(t), t = s, c.substr(s, 2) === us ? (l = us, s += 2) : (l = e, p(Fi)), l === e && (c.charCodeAt(s) === 39 ? (l = He, s++) : (l = e, p(Be))), l === e && (l = null), ui.test(c.charAt(s)) ? (o = c.charAt(s), s++) : (o = e, p(Di)), o === e && (o = Ce()), o !== e ? (l = [l, o], t = l) : (s = t, t = e);
      c.substr(s, 3) === ns ? (t = ns, s += 3) : (t = e, p(xi)), t !== e ? (w = i, i = Uu(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function pg() {
    var i, r, f, t, l, o;
    if (i = s, c.substr(s, 3) === ps ? (r = ps, s += 3) : (r = e, p(Gi)), r !== e) {
      for (f = [], t = s, c.substr(s, 2) === gs ? (l = gs, s += 2) : (l = e, p(Ui)), l === e && (c.charCodeAt(s) === 34 ? (l = hs, s++) : (l = e, p(Es))), l === e && (l = null), pi.test(c.charAt(s)) ? (o = c.charAt(s), s++) : (o = e, p(ji)), o === e && (o = Ce()), o !== e ? (l = [l, o], t = l) : (s = t, t = e); t !== e; )
        f.push(t), t = s, c.substr(s, 2) === gs ? (l = gs, s += 2) : (l = e, p(Ui)), l === e && (c.charCodeAt(s) === 34 ? (l = hs, s++) : (l = e, p(Es))), l === e && (l = null), pi.test(c.charAt(s)) ? (o = c.charAt(s), s++) : (o = e, p(ji)), o === e && (o = Ce()), o !== e ? (l = [l, o], t = l) : (s = t, t = e);
      c.substr(s, 3) === ps ? (t = ps, s += 3) : (t = e, p(Gi)), t !== e ? (w = i, i = ju(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Ce() {
    var i, r, f;
    return i = s, c.charCodeAt(s) === 92 ? (r = li, s++) : (r = e, p(Hi)), r !== e ? (da.test(c.charAt(s)) ? (f = c.charAt(s), s++) : (f = e, p(yo)), f !== e ? (w = i, i = Hu()) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function me() {
    var i, r, f, t;
    if (i = s, c.charCodeAt(s) === 40 ? (r = A, s++) : (r = e, p(y)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      c.charCodeAt(s) === 41 ? (t = E, s++) : (t = e, p(P)), t !== e ? (r = [r, f, t], i = r) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function a() {
    var i;
    return i = gg(), i === e && (i = Ur(), i === e && (i = jr())), i;
  }
  function Ur() {
    var i;
    return wa.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(Po)), i;
  }
  function jr() {
    var i;
    return $a.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(To)), i;
  }
  function Ns() {
    var i;
    return va.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(Lo)), i;
  }
  function bt() {
    var i, r, f, t;
    if (i = s, c.charCodeAt(s) === 35 ? (r = Ys, s++) : (r = e, p(or)), r !== e) {
      for (f = [], t = Ns(); t !== e; )
        f.push(t), t = Ns();
      t = jr(), t !== e ? (w = i, i = Bu()) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function gg() {
    var i, r, f, t, l;
    for (i = s, jr(), r = [], f = Ur(); f !== e; )
      r.push(f), f = Ur();
    if (c.charCodeAt(s) === 35 ? (f = Ys, s++) : (f = e, p(or)), f !== e) {
      for (t = [], l = Ns(); l !== e; )
        t.push(l), l = Ns();
      w = i, i = ku();
    } else
      s = i, i = e;
    return i;
  }
  function dg() {
    var i, r, f, t;
    if (i = s, c.charCodeAt(s) === 91 ? (r = Ms, s++) : (r = e, p(ir)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      c.charCodeAt(s) === 93 ? (t = Xs, s++) : (t = e, p(tr)), t !== e ? (r = [r, f, t], i = r) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function _t() {
    var i;
    return ba.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(Ro)), i === e && (_a.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(Io)), i === e && (Aa.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(Oo)), i === e && (Ca.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(So)), i === e && (ma.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(No)), i === e && (Ea.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(xo)), i === e && (ya.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(Fo)), i === e && (Pa.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(Do)), i === e && (Ta.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(Go)), i === e && (La.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(Uo)), i === e && (Ra.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(jo)), i === e && (Ia.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(Ho)), i === e && (Oa.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(Bo)))))))))))))), i;
  }
  function De() {
    var i;
    return i = _t(), i === e && (c.charCodeAt(s) === 95 ? (i = ai, s++) : (i = e, p(Bi))), i;
  }
  function At() {
    var i, r, f, t;
    if (i = s, r = De(), r === e && (j.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(H))), r !== e) {
      for (f = [], t = De(), t === e && (j.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(H)), t === e && (zs.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(cr)), t === e && (Zs.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(hr)), t === e && (Ks.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(nr)))))); t !== e; )
        f.push(t), t = De(), t === e && (j.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(H)), t === e && (zs.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(cr)), t === e && (Zs.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(hr)), t === e && (Ks.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(nr))))));
      w = i, i = Mu();
    } else
      s = i, i = e;
    return i;
  }
  function q() {
    var i;
    return i = De(), i === e && (c.charCodeAt(s) === 45 ? (i = ie, s++) : (i = e, p(te)), i === e && (j.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(H)), i === e && (zs.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(cr)), i === e && (Zs.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(hr)), i === e && (Ks.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(nr))))))), i;
  }
  function wg() {
    var i, r, f, t, l, o;
    if (i = s, r = _t(), r !== e) {
      for (f = [], t = q(), t === e && (t = s, c.charCodeAt(s) === 46 ? (l = X, s++) : (l = e, p(V)), l !== e ? (o = q(), o !== e ? (l = [l, o], t = l) : (s = t, t = e)) : (s = t, t = e)); t !== e; )
        f.push(t), t = q(), t === e && (t = s, c.charCodeAt(s) === 46 ? (l = X, s++) : (l = e, p(V)), l !== e ? (o = q(), o !== e ? (l = [l, o], t = l) : (s = t, t = e)) : (s = t, t = e));
      w = i, i = Xu();
    } else
      s = i, i = e;
    return i;
  }
  function $g() {
    var i, r, f, t, l, o;
    if (i = s, r = De(), r === e && (c.charCodeAt(s) === 58 ? (r = Te, s++) : (r = e, p(Re)), r === e && (j.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(H)), r === e && (r = Qe()))), r !== e) {
      for (f = [], t = q(), t === e && (c.charCodeAt(s) === 58 ? (t = Te, s++) : (t = e, p(Re)), t === e && (t = Qe())), t === e && (t = s, c.charCodeAt(s) === 46 ? (l = X, s++) : (l = e, p(V)), l !== e ? (o = q(), o === e && (c.charCodeAt(s) === 58 ? (o = Te, s++) : (o = e, p(Re)), o === e && (o = Qe())), o !== e ? (l = [l, o], t = l) : (s = t, t = e)) : (s = t, t = e)); t !== e; )
        f.push(t), t = q(), t === e && (c.charCodeAt(s) === 58 ? (t = Te, s++) : (t = e, p(Re)), t === e && (t = Qe())), t === e && (t = s, c.charCodeAt(s) === 46 ? (l = X, s++) : (l = e, p(V)), l !== e ? (o = q(), o === e && (c.charCodeAt(s) === 58 ? (o = Te, s++) : (o = e, p(Re)), o === e && (o = Qe())), o !== e ? (l = [l, o], t = l) : (s = t, t = e)) : (s = t, t = e));
      w = i, i = Vu();
    } else
      s = i, i = e;
    return i;
  }
  function Qe() {
    var i;
    return i = vg(), i === e && (i = bg()), i;
  }
  function vg() {
    var i, r, f, t;
    return i = s, c.charCodeAt(s) === 37 ? (r = fi, s++) : (r = e, p(ki)), r !== e ? (f = Ct(), f !== e ? (t = Ct(), t !== e ? (r = [r, f, t], i = r) : (s = i, i = e)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function Ct() {
    var i;
    return j.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(H)), i === e && (Sa.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(ko)), i === e && (Na.test(c.charAt(s)) ? (i = c.charAt(s), s++) : (i = e, p(Mo)))), i;
  }
  function bg() {
    var i, r, f;
    return i = s, c.charCodeAt(s) === 92 ? (r = li, s++) : (r = e, p(Hi)), r !== e ? (c.charCodeAt(s) === 95 ? (f = ai, s++) : (f = e, p(Bi)), f === e && (c.charCodeAt(s) === 126 ? (f = na, s++) : (f = e, p(Xo)), f === e && (c.charCodeAt(s) === 46 ? (f = X, s++) : (f = e, p(V)), f === e && (c.charCodeAt(s) === 45 ? (f = ie, s++) : (f = e, p(te)), f === e && (c.charCodeAt(s) === 33 ? (f = ks, s++) : (f = e, p(rr)), f === e && (c.charCodeAt(s) === 36 ? (f = ii, s++) : (f = e, p(Ri)), f === e && (c.charCodeAt(s) === 38 ? (f = ua, s++) : (f = e, p(Vo)), f === e && (c.charCodeAt(s) === 39 ? (f = He, s++) : (f = e, p(Be)), f === e && (c.charCodeAt(s) === 40 ? (f = A, s++) : (f = e, p(y)), f === e && (c.charCodeAt(s) === 41 ? (f = E, s++) : (f = e, p(P)), f === e && (c.charCodeAt(s) === 42 ? (f = ee, s++) : (f = e, p(se)), f === e && (c.charCodeAt(s) === 43 ? (f = $e, s++) : (f = e, p(Ae)), f === e && (c.charCodeAt(s) === 44 ? (f = D, s++) : (f = e, p(G)), f === e && (c.charCodeAt(s) === 59 ? (f = Pe, s++) : (f = e, p(Le)), f === e && (c.charCodeAt(s) === 58 ? (f = Te, s++) : (f = e, p(Re)), f === e && (c.charCodeAt(s) === 61 ? (f = ls, s++) : (f = e, p(As)), f === e && (c.charCodeAt(s) === 47 ? (f = oe, s++) : (f = e, p(he)), f === e && (c.charCodeAt(s) === 63 ? (f = Bs, s++) : (f = e, p(sr)), f === e && (c.charCodeAt(s) === 35 ? (f = Ys, s++) : (f = e, p(or)), f === e && (c.charCodeAt(s) === 64 ? (f = ti, s++) : (f = e, p(Ii)), f === e && (c.charCodeAt(s) === 37 ? (f = fi, s++) : (f = e, p(ki)))))))))))))))))))))), f !== e ? (r = [r, f], i = r) : (s = i, i = e)) : (s = i, i = e), i;
  }
  let mt = {};
  if (Ps = K(), Ps !== e && s === c.length)
    return Ps;
  throw Ps !== e && s < c.length && p(Wu()), Qu(
    ur,
    le < c.length ? c.charAt(le) : null,
    le < c.length ? pr(le, le + 1) : pr(le, le)
  );
}
function H1(c, b) {
  function e() {
    this.constructor = c;
  }
  e.prototype = b.prototype, c.prototype = new e();
}
function Xr(c, b, e, T) {
  var x = Error.call(this, c);
  return Object.setPrototypeOf && Object.setPrototypeOf(x, Xr.prototype), x.expected = b, x.found = e, x.location = T, x.name = "SyntaxError", x;
}
H1(Xr, Error);
function Ag(c, b, e) {
  return e = e || " ", c.length > b ? c : (b -= c.length, e += e.repeat(b), c + e.slice(0, b));
}
Xr.prototype.format = function(c) {
  var b = "Error: " + this.message;
  if (this.location) {
    var e = null, T;
    for (T = 0; T < c.length; T++)
      if (c[T].source === this.location.source) {
        e = c[T].text.split(/\r\n|\n|\r/g);
        break;
      }
    var x = this.location.start, K = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(x) : x, ue = this.location.source + ":" + K.line + ":" + K.column;
    if (e) {
      var Ee = this.location.end, pe = Ag("", K.line.toString().length, " "), O = e[x.line - 1], F = x.line === Ee.line ? Ee.column : O.length + 1, A = F - x.column || 1;
      b += `
 --> ` + ue + `
` + pe + ` |
` + K.line + " | " + O + `
` + pe + " | " + Ag("", x.column - 1, " ") + Ag("", A, "^");
    } else
      b += `
 at ` + ue;
  }
  return b;
};
Xr.buildMessage = function(c, b) {
  var e = {
    literal: function(O) {
      return '"' + x(O.text) + '"';
    },
    class: function(O) {
      var F = O.parts.map(function(A) {
        return Array.isArray(A) ? K(A[0]) + "-" + K(A[1]) : K(A);
      });
      return "[" + (O.inverted ? "^" : "") + F.join("") + "]";
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
  function x(O) {
    return O.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(F) {
      return "\\x0" + T(F);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(F) {
      return "\\x" + T(F);
    });
  }
  function K(O) {
    return O.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(F) {
      return "\\x0" + T(F);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(F) {
      return "\\x" + T(F);
    });
  }
  function ue(O) {
    return e[O.type](O);
  }
  function Ee(O) {
    var F = O.map(ue), A, fe;
    if (F.sort(), F.length > 0) {
      for (A = 1, fe = 1; A < F.length; A++)
        F[A - 1] !== F[A] && (F[fe] = F[A], fe++);
      F.length = fe;
    }
    switch (F.length) {
      case 1:
        return F[0];
      case 2:
        return F[0] + " or " + F[1];
      default:
        return F.slice(0, -1).join(", ") + ", or " + F[F.length - 1];
    }
  }
  function pe(O) {
    return O ? '"' + x(O) + '"' : "end of input";
  }
  return "Expected " + Ee(c) + " but " + pe(b) + " found.";
};
function Xg(c, b) {
  b = b !== void 0 ? b : {};
  var e = {}, T = b.grammarSource, x = { DOCUMENT: Xi }, K = Xi, ue = "base", Ee = "prefix", pe = "select", O = "distinct", F = "reduced", A = "(", fe = "as", E = ")", ee = "*", Vr = "construct", qe = "where", ge = "{", de = "}", Ot = "describe", St = "ask", Nt = "from", Us = "named", xt = "group", Wr = "by", Ft = "having", Dt = "order", Gt = "asc", Ut = "desc", jt = "limit", Ht = "offset", Qr = "values", Pe = ";", Bt = "load", we = "silent", kt = "into", Mt = "clear", Xt = "drop", Vt = "create", Wt = "add", js = "to", Qt = "move", Yt = "copy", Yr = "insert", zr = "data", Hs = "delete", zt = "with", Zt = "using", Zr = "default", es = "graph", Kt = "all", X = ".", Jt = "optional", qt = "service", el = "bind", Kr = "UNDEF", sl = "minus", Jr = "union", rl = "filter", D = ",", ss = "a", rs = "|", oe = "/", qr = "^", Bs = "?", $e = "+", ks = "!", Ms = "[", Xs = "]", is = "||", ts = "&&", ls = "=", as = "!=", Vs = "<", Ws = ">", fs = "<=", os = ">=", cs = "in", Qs = "not", ie = "-", il = "str", tl = "lang", ll = "langmatches", al = "datatype", fl = "bound", ol = "iri", cl = "uri", hl = "bnode", nl = "rand", ul = "abs", pl = "ceil", gl = "floor", dl = "round", wl = "concat", $l = "strlen", vl = "ucase", bl = "lcase", _l = "encode_for_uri", Al = "contains", Cl = "strbefore", ml = "strstarts", El = "strends", yl = "strafter", Pl = "year", Tl = "month", Ll = "day", Rl = "hours", Il = "minutes", Ol = "seconds", Sl = "timezone", Nl = "tz", xl = "now", Fl = "uuid", Dl = "struuid", Gl = "md5", Ul = "sha1", jl = "sha256", Hl = "sha384", Bl = "sha512", kl = "coalesce", Ml = "if", Xl = "strlang", Vl = "strdt", Wl = "sameterm", Ql = "isuri", Yl = "isiri", zl = "isblank", Zl = "isliteral", Kl = "isnumeric", Jl = "regex", ql = "substr", ea = "replace", ei = "exists", sa = "count", ra = "sum", ia = "min", ta = "max", la = "avg", aa = "sample", fa = "group_concat", oa = "separator", si = "^^", ca = "true", ha = "false", Te = ":", ri = "_:", ii = "$", ti = "@", He = "'", hs = '"', ns = "'''", us = "''", ps = '"""', gs = '""', li = "\\", Ys = "#", ai = "_", fi = "%", na = "~", ua = "&", oi = /^[^<>"{}|\^`\\\0- ]/, j = /^[0-9]/, ci = /^[a-zA-Z]/, ds = /^[a-zA-Z0-9]/, pa = /^[eE]/, ga = /^[+\-]/, hi = /^[^'\\\n\r]/, ni = /^[^"\\\n\r]/, ui = /^[^'\\]/, pi = /^[^"\\]/, da = /^[tbnrf\\"']/, wa = /^[ \t]/, $a = /^[\r\n]/, va = /^[^\r\n]/, ba = /^[A-Z]/, _a = /^[a-z]/, Aa = /^[\xC0-\xD6]/, Ca = /^[\xD8-\xF6]/, ma = /^[\xF8-\u02FF]/, Ea = /^[\u0370-\u037D]/, ya = /^[\u037F-\u1FFF]/, Pa = /^[\u200C-\u200D]/, Ta = /^[\u2070-\u218F]/, La = /^[\u2C00-\u2FEF]/, Ra = /^[\u3001-\uD7FF]/, Ia = /^[\uF900-\uFDCF]/, Oa = /^[\uFDF0-\uFFFD]/, zs = /^[\xB7]/, Zs = /^[\u0300-\u036F]/, Ks = /^[\u203F-\u2040]/, Sa = /^[A-F]/, Na = /^[a-f]/, xa = v("BASE", !0), Fa = v("PREFIX", !0), Da = v("SELECT", !0), ce = v("DISTINCT", !0), Ga = v("REDUCED", !0), y = v("(", !1), ws = v("AS", !0), P = v(")", !1), se = v("*", !1), gi = v("CONSTRUCT", !0), $s = v("WHERE", !0), ve = v("{", !1), be = v("}", !1), Ua = v("DESCRIBE", !0), ja = v("ASK", !0), Ha = v("FROM", !0), Js = v("NAMED", !0), Ba = v("GROUP", !0), di = v("BY", !0), ka = v("HAVING", !0), Ma = v("ORDER", !0), Xa = v("ASC", !0), Va = v("DESC", !0), Wa = v("LIMIT", !0), Qa = v("OFFSET", !0), wi = v("VALUES", !0), Le = v(";", !1), Ya = v("LOAD", !0), _e = v("SILENT", !0), za = v("INTO", !0), Za = v("CLEAR", !0), Ka = v("DROP", !0), Ja = v("CREATE", !0), qa = v("ADD", !0), qs = v("TO", !0), ef = v("MOVE", !0), sf = v("COPY", !0), $i = v("INSERT", !0), vi = v("DATA", !0), er = v("DELETE", !0), rf = v("WITH", !0), tf = v("USING", !0), bi = v("DEFAULT", !0), vs = v("GRAPH", !0), lf = v("ALL", !0), V = v(".", !1), af = v("OPTIONAL", !0), ff = v("SERVICE", !0), of = v("BIND", !0), cf = v("UNDEF", !1), hf = v("MINUS", !0), _i = v("UNION", !0), nf = v("FILTER", !0), G = v(",", !1), bs = v("a", !1), _s = v("|", !1), he = v("/", !1), Ai = v("^", !1), sr = v("?", !1), Ae = v("+", !1), rr = v("!", !1), ir = v("[", !1), tr = v("]", !1), Ci = v("||", !1), mi = v("&&", !1), As = v("=", !1), Ei = v("!=", !1), lr = v("<", !1), ar = v(">", !1), yi = v("<=", !1), Pi = v(">=", !1), Cs = v("IN", !0), fr = v("NOT", !0), te = v("-", !1), uf = v("STR", !0), pf = v("LANG", !0), gf = v("LANGMATCHES", !0), df = v("DATATYPE", !0), wf = v("BOUND", !0), $f = v("IRI", !0), vf = v("URI", !0), bf = v("BNODE", !0), _f = v("RAND", !0), Af = v("ABS", !0), Cf = v("CEIL", !0), mf = v("FLOOR", !0), Ef = v("ROUND", !0), yf = v("CONCAT", !0), Pf = v("STRLEN", !0), Tf = v("UCASE", !0), Lf = v("LCASE", !0), Rf = v("ENCODE_FOR_URI", !0), If = v("CONTAINS", !0), Of = v("STRBEFORE", !0), Sf = v("STRSTARTS", !0), Nf = v("STRENDS", !0), xf = v("STRAFTER", !0), Ff = v("YEAR", !0), Df = v("MONTH", !0), Gf = v("DAY", !0), Uf = v("HOURS", !0), jf = v("MINUTES", !0), Hf = v("SECONDS", !0), Bf = v("TIMEZONE", !0), kf = v("TZ", !0), Mf = v("NOW", !0), Xf = v("UUID", !0), Vf = v("STRUUID", !0), Wf = v("MD5", !0), Qf = v("SHA1", !0), Yf = v("SHA256", !0), zf = v("SHA384", !0), Zf = v("SHA512", !0), Kf = v("COALESCE", !0), Jf = v("IF", !0), qf = v("STRLANG", !0), eo = v("STRDT", !0), so = v("sameTerm", !0), ro = v("isURI", !0), io = v("isIRI", !0), to = v("isBLANK", !0), lo = v("isLITERAL", !0), ao = v("isNUMERIC", !0), fo = v("REGEX", !0), oo = v("SUBSTR", !0), co = v("REPLACE", !0), Ti = v("EXISTS", !0), ho = v("COUNT", !0), no = v("SUM", !0), uo = v("MIN", !0), po = v("MAX", !0), go = v("AVG", !0), wo = v("SAMPLE", !0), $o = v("GROUP_CONCAT", !0), vo = v("SEPARATOR", !0), bo = v("^^", !1), _o = v("true", !0), Ao = v("false", !0), Li = N(["<", ">", '"', "{", "}", "|", "^", "`", "\\", ["\0", " "]], !0, !1), Re = v(":", !1), Co = v("_:", !1), H = N([["0", "9"]], !1, !1), Ri = v("$", !1), Ii = v("@", !1), Oi = N([["a", "z"], ["A", "Z"]], !1, !1), ms = N([["a", "z"], ["A", "Z"], ["0", "9"]], !1, !1), mo = N(["e", "E"], !1, !1), Eo = N(["+", "-"], !1, !1), Be = v("'", !1), Si = N(["'", "\\", `
`, "\r"], !0, !1), Es = v('"', !1), Ni = N(['"', "\\", `
`, "\r"], !0, !1), xi = v("'''", !1), Fi = v("''", !1), Di = N(["'", "\\"], !0, !1), Gi = v('"""', !1), Ui = v('""', !1), ji = N(['"', "\\"], !0, !1), Hi = v("\\", !1), yo = N(["t", "b", "n", "r", "f", "\\", '"', "'"], !1, !1), Po = N([" ", "	"], !1, !1), To = N(["\r", `
`], !1, !1), Lo = N(["\r", `
`], !0, !1), or = v("#", !1), Ro = N([["A", "Z"]], !1, !1), Io = N([["a", "z"]], !1, !1), Oo = N([["À", "Ö"]], !1, !1), So = N([["Ø", "ö"]], !1, !1), No = N([["ø", "˿"]], !1, !1), xo = N([["Ͱ", "ͽ"]], !1, !1), Fo = N([["Ϳ", "῿"]], !1, !1), Do = N([["‌", "‍"]], !1, !1), Go = N([["⁰", "↏"]], !1, !1), Uo = N([["Ⰰ", "⿯"]], !1, !1), jo = N([["、", "퟿"]], !1, !1), Ho = N([["豈", "﷏"]], !1, !1), Bo = N([["ﷰ", "�"]], !1, !1), Bi = v("_", !1), cr = N(["·"], !1, !1), hr = N([["̀", "ͯ"]], !1, !1), nr = N([["‿", "⁀"]], !1, !1), ki = v("%", !1), ko = N([["A", "F"]], !1, !1), Mo = N([["a", "f"]], !1, !1), Xo = v("~", !1), Vo = v("&", !1), Wo = function(r, f) {
    let t = {};
    r.length ? t = {
      headers: r,
      ...f
    } : t = f;
    const l = Object.entries(mt).map(([o, h]) => ({
      pos: parseInt(o),
      text: h
    }));
    return l.length && (t.comments = l), {
      "@context": "https://purl.org/sparql-formatter/context.jsonld",
      ...t
    };
  }, Qo = function(r, f, t) {
    let l = { type: "Query" };
    return r && (l.prologue = r), f.type === "SelectQuery" ? l.selectQuery = f : f.type === "ConstructQuery" ? l.constructQuery = f : f.type === "DescribeQuery" ? l.describeQuery = f : f.type === "AskQuery" && (l.askQuery = f), t && (l.values = t), l;
  }, Yo = function(r) {
    if (r.length)
      return {
        type: "Prologue",
        decl: r
      };
  }, zo = function(r) {
    return {
      type: "BaseDecl",
      iriref: r
    };
  }, Zo = function(r, f) {
    return {
      type: "PrefixDecl",
      pn_prefix: r,
      iriref: f
    };
  }, Ko = function(r, f, t, l) {
    return f.length && (r.from = f), r = {
      type: "SelectQuery",
      selectClause: r,
      whereClause: t,
      ...l
    }, r;
  }, Jo = function(r, f, t, l) {
    let o = {
      type: "SubSelect",
      selectClause: r,
      whereClause: f,
      ...t,
      location: I()
    };
    return l && (o.values = l), o;
  }, qo = function(r, f) {
    let t;
    f === "*" ? t = ["*"] : t = f.map((o) => o.length === 2 ? o[1] : {
      expression: o[3],
      as: o[7]
    });
    let l = { var: t };
    if (r) {
      const o = r.toUpperCase();
      o === "DISTINCT" ? l.distinct = !0 : o === "REDUCED" && (l.reduced = !0);
    }
    return l.location = I(), l;
  }, ec = function(r, f, t, l) {
    let o = { type: "ConstructQuery" };
    return f.length && (o.from = f), o = {
      ...o,
      template: r,
      where: t,
      ...l,
      location: I()
    }, o;
  }, sc = function(r, f, t) {
    let l = { type: "ConstructQuery" };
    return r.length && (l.from = r), l = {
      ...l,
      where: [f],
      ...t,
      location: I()
    }, l;
  }, rc = function(r, f, t, l) {
    let o = { type: "DescribeQuery" };
    return f.length && (o.from = f), o.describe = r, t && (o.where = t), o = {
      ...o,
      ...l,
      location: I()
    }, o;
  }, ic = function(r, f, t) {
    let l = { type: "AskQuery" };
    return r.length && (l.from = r), l = {
      ...l,
      where: f,
      ...t,
      location: I()
    }, l;
  }, tc = function(r) {
    return r;
  }, lc = function(r) {
    return {
      graph: r,
      location: I()
    };
  }, ac = function(r) {
    return {
      namedGraph: r,
      location: I()
    };
  }, fc = function(r) {
    return r.graphPattern || r;
  }, oc = function(r, f, t, l) {
    let o = {};
    return r && (o.group = r), f && (o.having = f), t && (o.orderBy = t), l && (o.limitOffset = l), o;
  }, cc = function(r) {
    return r;
  }, hc = function(r) {
    return r;
  }, nc = function(r) {
    return r;
  }, uc = function(r, f) {
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
  }, pc = function(r) {
    return r;
  }, gc = function(r) {
    return r;
  }, dc = function(r) {
    return r;
  }, wc = function(r) {
    return r;
  }, $c = function(r, f) {
    let t = {};
    return r.toUpperCase() === "ASC" ? t = {
      asc: !0,
      ...f
    } : r.toUpperCase() === "DESC" && (t = {
      desc: !0,
      ...f
    }), t;
  }, vc = function(r) {
    return r;
  }, bc = function(r) {
    let f = [r[0]];
    return r[1] && f.push(r[1]), f;
  }, _c = function(r) {
    return {
      limit: parseInt(r.literal)
    };
  }, Ac = function(r) {
    return {
      offset: parseInt(r.literal)
    };
  }, Cc = function(r) {
    return r ? r[1] : null;
  }, mc = function(r, f) {
    let t = { type: "Update" };
    r && (t.prologue = r);
    let l = [];
    return f && (l = [f[1]], f[2] && (l = l.concat(f[2][3].update))), t.update = l, t;
  }, Ec = function(r, f, t) {
    let l = {
      type: "load",
      silent: r,
      sourceGraph: f
    };
    return t && (l.destinyGraph = t[2]), l;
  }, yc = function(r, f) {
    return {
      type: "clear",
      silent: r,
      destinyGraph: f
    };
  }, Pc = function(r, f) {
    return {
      type: "drop",
      silent: r,
      destinyGraph: f
    };
  }, Tc = function(r, f) {
    return {
      type: "create",
      silent: r,
      destinyGraph: f
    };
  }, Lc = function(r, f, t) {
    return {
      type: "add",
      silent: r,
      graphs: [f, t]
    };
  }, Rc = function(r, f, t) {
    return {
      type: "move",
      silent: r,
      graphs: [f, t]
    };
  }, Ic = function(r, f, t) {
    return {
      type: "copy",
      silent: r,
      graphs: [f, t]
    };
  }, Oc = function(r) {
    return {
      type: "insertdata",
      insert: r
    };
  }, Sc = function(r) {
    return {
      type: "deletedata",
      delete: r
    };
  }, Nc = function(r) {
    return {
      type: "deletewhere",
      delete: r
    };
  }, xc = function(r, f, t, l) {
    let o = {
      type: "modify"
    };
    return r && (o.with = r[2]), f.length === 3 ? (o.delete = f[0], f[2] && (o.insert = f[2])) : o.insert = f, t.length && (o.using = t), o.where = l.graphPattern, o;
  }, Fc = function(r) {
    return r;
  }, Dc = function(r) {
    return r;
  }, Gc = function(r) {
    return r.length === 3 ? {
      named: !0,
      iri: r[2]
    } : {
      iri: r
    };
  }, Uc = function() {
    return "default";
  }, jc = function(r) {
    return r;
  }, Hc = function(r) {
    return r;
  }, Bc = function(r) {
    return r;
  }, kc = function() {
    return "default";
  }, Mc = function() {
    return "named";
  }, Xc = function() {
    return "all";
  }, Vc = function(r) {
    return r;
  }, Wc = function(r) {
    return r;
  }, Qc = function(r, f) {
    let t = [];
    return r && (t = t.concat(r)), f.forEach((l) => {
      t = t.concat(l[0]), l[2] && (t = t.concat(l[2]));
    }), t;
  }, Yc = function(r, f) {
    return {
      graph: r,
      ...f
    };
  }, zc = function(r, f) {
    let t = [r];
    return f && f[3] && (t = t.concat(f[3].triplePattern)), {
      triplePattern: t,
      location: I()
    };
  }, Zc = function(r) {
    return r;
  }, Kc = function(r, f) {
    let t = [];
    return r && t.push(r), f.forEach((l) => {
      t.push(l[0]), l[4] && t.push(l[4]);
    }), {
      graphPattern: t,
      location: I()
    };
  }, Jc = function(r, f) {
    let t = [];
    if (f && f[3])
      if (i(r.subject, f[3].triplePattern[0].subject)) {
        t = JSON.parse(JSON.stringify(f[3].triplePattern));
        const l = r.properties.length - 1;
        if (i(r.properties[l].predicate, f[3].triplePattern[0].properties[0].predicate)) {
          t[0].properties = r.properties;
          const o = t[0].properties[l].objects.length - 1;
          f[3].triplePattern[0].properties[0].objects.forEach((h) => {
            i(r.properties[l].objects[o], h) || t[0].properties[l].objects.push(h);
          }), t[0].properties.push(...f[3].triplePattern[0].properties.slice(1));
        } else
          t[0].properties = r.properties.concat(f[3].triplePattern[0].properties);
      } else
        t = [r].concat(f[3].triplePattern);
    else
      t = [r];
    return {
      type: "TriplesBlock",
      triplePattern: t,
      location: I()
    };
  }, qc = function(r) {
    return {
      type: "OptionalGraphPattern",
      optional: r.graphPattern || r,
      location: I()
    };
  }, eh = function(r, f) {
    return {
      type: "GraphGraphPattern",
      graph: r,
      ...f
    };
  }, sh = function(r, f, t) {
    let l = {
      type: "ServiceGraphPattern",
      service: f,
      pattern: t.graphPattern || t
    };
    return r && (l.silent = !0), l.location = I(), l;
  }, rh = function(r, f) {
    return {
      type: "Bind",
      bind: r,
      as: f,
      location: I()
    };
  }, ih = function(r) {
    return r;
  }, th = function(r, f) {
    return {
      oneVar: r,
      data: f,
      location: I()
    };
  }, lh = function(r, f) {
    return {
      variables: r,
      data: f,
      location: I()
    };
  }, ah = function(r) {
    return r;
  }, fh = function(r) {
    return r;
  }, oh = function(r) {
    return {
      type: "MinusGraphPattern",
      minus: r.graphPattern || r,
      location: I()
    };
  }, ch = function(r, f) {
    return f.length ? {
      union: [r, ...f],
      location: I()
    } : r;
  }, hh = function(r) {
    return {
      type: "Filter",
      filter: r,
      location: I()
    };
  }, nh = function(r, f) {
    return {
      functionRef: r,
      args: f.list,
      location: I()
    };
  }, uh = function() {
    return {
      list: []
    };
  }, ph = function(r, f, t) {
    return {
      distinct: !!r,
      list: [f, ...t]
    };
  }, gh = function() {
    return [];
  }, dh = function(r, f) {
    return [r, ...f];
  }, wh = function(r) {
    return r;
  }, $h = function(r, f) {
    let t = [r];
    return f && f[3] && (t = t.concat(f[3].triplePattern)), {
      triplePattern: t,
      location: I()
    };
  }, vh = function(r, f) {
    return {
      subject: r,
      properties: f
    };
  }, bh = function(r, f) {
    return {
      subject: r,
      properties: f
    };
  }, _h = function(r, f, t) {
    let l = [];
    return l.push({ predicate: r, objects: f }), t.forEach((o) => {
      o[3] && l.push({ predicate: o[3][0], objects: o[3][2] });
    }), l;
  }, Ah = function() {
    return {
      a: !0,
      location: I()
    };
  }, Ch = function(r, f) {
    return [r, ...f];
  }, mh = function(r, f) {
    return {
      subject: r,
      properties: f
    };
  }, Eh = function(r, f) {
    return {
      subject: r,
      properties: f
    };
  }, yh = function(r, f, t) {
    let l = [];
    return l.push({ predicate: r, objects: f }), t.forEach((o) => {
      if (o[3]) {
        const h = l.length - 1, n = l[h].objects.length - 1;
        i(l[h].predicate, o[3][0]) ? o[3][2].forEach((u) => {
          i(l[h].objects[n], u) || l[h].objects.push(u);
        }) : l.push({ predicate: o[3][0], objects: o[3][2] });
      }
    }), l;
  }, Ph = function(r, f) {
    return [r, ...f];
  }, Th = function(r, f) {
    if (f.length) {
      let t = [r];
      for (let l = 0; l < f.length; l++)
        t.push(f[l][3]);
      return {
        alternative: t,
        location: I()
      };
    } else
      return r;
  }, Lh = function(r, f) {
    if (f.length) {
      let t = [r];
      for (let l = 0; l < f.length; l++)
        t.push(f[l][3]);
      return {
        sequence: t,
        location: I()
      };
    } else
      return r;
  }, Rh = function(r, f) {
    return f && (r.modifier = f), r;
  }, Ih = function(r) {
    return r.inverse = !0, r;
  }, Oh = function() {
    return {
      a: !0,
      location: I()
    };
  }, Sh = function(r) {
    return {
      bracketted: !0,
      ...r
    };
  }, Nh = function(r) {
    return {
      collection: r,
      location: I()
    };
  }, xh = function(r) {
    return {
      blankNodeProperties: r,
      location: I()
    };
  }, Fh = function(r) {
    return {
      collection: r,
      location: I()
    };
  }, Dh = function(r) {
    return {
      blankNodeProperties: r,
      location: I()
    };
  }, Gh = function(r) {
    return r;
  }, Uh = function(r) {
    return r;
  }, jh = function(r) {
    return r;
  }, Hh = function(r) {
    return r;
  }, Bh = function(r) {
    return {
      ...r,
      location: I()
    };
  }, kh = function(r, f) {
    return f.length ? {
      expressionType: "conditionalor",
      operands: [r, ...f]
    } : r;
  }, Mh = function(r, f) {
    return f.length ? {
      expressionType: "conditionaland",
      operands: [r, ...f]
    } : r;
  }, Xh = function(r, f) {
    if (f.length) {
      const t = r;
      let l = f[0][1].toUpperCase(), o = f[0][3];
      return l === "NOT" && (l += " " + f[0][3].toUpperCase(), o = f[0][5]), {
        expressionType: "relationalexpression",
        operator: l,
        op1: t,
        op2: o
      };
    } else
      return r;
  }, Vh = function(r, f) {
    if (f.length === 0)
      return r;
    let t = [];
    return f.forEach((l) => {
      l.length == 4 && t.push({
        operator: l[1],
        expression: l[3]
      });
    }), {
      expressionType: "additiveexpression",
      op1: r,
      ops: t
    };
  }, Wh = function(r, f) {
    return f.length ? {
      expressionType: "multiplicativeexpression",
      first: r,
      rest: f.map((t) => ({ operator: t[1], expression: t[3] }))
    } : r;
  }, Qh = function(r) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "!",
      expression: r
    };
  }, Yh = function(r) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "+",
      expression: r
    };
  }, zh = function(r) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "-",
      expression: r
    };
  }, Zh = function(r) {
    return {
      expressionType: "atomic",
      value: r
    };
  }, Kh = function(r) {
    return {
      expressionType: "atomic",
      value: r
    };
  }, Jh = function(r) {
    return {
      expressionType: "atomic",
      value: r
    };
  }, qh = function(r) {
    return {
      expressionType: "atomic",
      value: r
    };
  }, en = function(r) {
    return {
      bracketted: !0,
      ...r
    };
  }, sn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "str",
      args: [r]
    };
  }, rn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "lang",
      args: [r]
    };
  }, tn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "langMatches",
      args: [r, f]
    };
  }, ln = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "datatype",
      args: [r]
    };
  }, an = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "bound",
      args: [r]
    };
  }, fn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "IRI",
      args: [r]
    };
  }, on = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "URI",
      args: [r]
    };
  }, cn = function(r) {
    const f = {
      expressionType: "builtincall",
      builtincall: "BNODE",
      args: null
    };
    return r.length === 5 && (f.args = [r[2]]), f;
  }, hn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "rand"
    };
  }, nn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "abs",
      args: [r]
    };
  }, un = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "ceil",
      args: [r]
    };
  }, pn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "floor",
      args: [r]
    };
  }, gn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "round",
      args: [r]
    };
  }, dn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "CONCAT",
      args: r
    };
  }, wn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRLEN",
      args: [r]
    };
  }, $n = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "UCASE",
      args: [r]
    };
  }, vn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "LCASE",
      args: [r]
    };
  }, bn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "ENCODE_FOR_URI",
      args: [r]
    };
  }, _n = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "CONTAINS",
      args: [r, f]
    };
  }, An = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRBEFORE",
      args: [r, f]
    };
  }, Cn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRSTARTS",
      args: [r, f]
    };
  }, mn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRENDS",
      args: [r, f]
    };
  }, En = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRAFTER",
      args: [r, f]
    };
  }, yn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "year",
      args: [r]
    };
  }, Pn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "month",
      args: [r]
    };
  }, Tn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "day",
      args: [r]
    };
  }, Ln = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "hours",
      args: [r]
    };
  }, Rn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "minutes",
      args: [r]
    };
  }, In = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "seconds",
      args: [r]
    };
  }, On = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "timezone",
      args: [r]
    };
  }, Sn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "tz",
      args: [r]
    };
  }, Nn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "now"
    };
  }, xn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "UUID"
    };
  }, Fn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "STRUUID"
    };
  }, Dn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "MD5",
      args: [r]
    };
  }, Gn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA1",
      args: [r]
    };
  }, Un = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA256",
      args: [r]
    };
  }, jn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA384",
      args: [r]
    };
  }, Hn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA512",
      args: [r]
    };
  }, Bn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "COALESCE",
      args: r
    };
  }, kn = function(r, f, t) {
    return {
      expressionType: "builtincall",
      builtincall: "IF",
      args: [r, f, t]
    };
  }, Mn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRLANG",
      args: [r, f]
    };
  }, Xn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRDT",
      args: [r, f]
    };
  }, Vn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "sameTerm",
      args: [r, f]
    };
  }, Wn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "isURI",
      args: [r]
    };
  }, Qn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "isBlank",
      args: [r]
    };
  }, Yn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "isLiteral",
      args: [r]
    };
  }, zn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "isNumeric",
      args: [r]
    };
  }, Zn = function(r, f, t) {
    let l = {
      expressionType: "regex",
      text: r,
      pattern: f
    };
    return t && (l.flags = t[2]), l;
  }, Kn = function(r, f, t) {
    let l = [r, f];
    return t && l.push(t[2]), {
      expressionType: "builtincall",
      builtincall: "substr",
      args: l
    };
  }, Jn = function(r, f, t, l) {
    let o = [r, f, t];
    return l && o.push(l[2]), {
      expressionType: "builtincall",
      builtincall: "replace",
      args: o
    };
  }, qn = function(r) {
    return {
      exists: r.graphPattern || r
    };
  }, eu = function(r) {
    return {
      notexists: r.graphPattern || r
    };
  }, su = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "count",
      distinct: !!r,
      expression: f
    };
  }, ru = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "sum",
      distinct: !!r,
      expression: f
    };
  }, iu = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "min",
      distinct: !!r,
      expression: f
    };
  }, tu = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "max",
      distinct: !!r,
      expression: f
    };
  }, lu = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "avg",
      distinct: !!r,
      expression: f
    };
  }, au = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "sample",
      distinct: !!r,
      expression: f
    };
  }, fu = function(r, f, t) {
    let l = null;
    return t?.length && (l = t[7]), {
      expressionType: "aggregate",
      aggregateType: "group_concat",
      expression: f,
      separator: l,
      distinct: !!r
    };
  }, ou = function(r, f) {
    let t = {
      expressionType: "irireforfunction",
      iriref: r
    };
    return f && (t.args = f.list), t;
  }, cu = function(r, f) {
    return typeof f == "string" ? r.lang = f : f && (r.dataType = f[1]), r.location = I(), r;
  }, hu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !0
    };
  }, nu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !1
    };
  }, uu = function(r) {
    return {
      type: "IRIref",
      iriref: r,
      location: I()
    };
  }, pu = function(r) {
    return r;
  }, gu = function(r) {
    return {
      type: "PrefixedName",
      pn_prefix: r.pn_prefix,
      pn_local: r.pn_local,
      location: I()
    };
  }, du = function(r) {
    return {
      type: "PrefixedName",
      pn_prefix: r,
      location: I()
    };
  }, wu = function(r) {
    return {
      blankNode: r,
      location: I()
    };
  }, $u = function() {
    return {
      blankNode: "[]",
      location: I()
    };
  }, vu = function(r) {
    return r.join("");
  }, bu = function(r) {
    return r || "";
  }, _u = function(r, f) {
    return {
      pn_prefix: r,
      pn_local: f
    };
  }, Au = function() {
    return J();
  }, Cu = function(r) {
    return {
      type: "Var",
      varType: "VAR1",
      varname: r
    };
  }, mu = function(r) {
    return {
      type: "Var",
      varType: "VAR2",
      varname: r
    };
  }, Eu = function(r, f) {
    let t = r.join("");
    return f.length && (t += "-" + f[0][1].join("")), t.toLowerCase();
  }, yu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#integer",
      literal: J()
    };
  }, Pu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#decimal",
      literal: J()
    };
  }, Tu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: J()
    };
  }, Lu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: J()
    };
  }, Ru = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
      literal: J()
    };
  }, Iu = function(r) {
    return r.literal = "+" + r.literal, r;
  }, Ou = function(r) {
    return r.literal = "+" + r.literal, r;
  }, Su = function(r) {
    return r.literal = "+" + r.literal, r;
  }, Nu = function(r) {
    return r.literal = "-" + r.literal, r;
  }, xu = function(r) {
    return r.literal = "-" + r.literal, r;
  }, Fu = function(r) {
    return r.literal = "-" + r.literal, r;
  }, Du = function(r) {
    return {
      quote: "'",
      literal: r.join("")
      // except ' \ LF CR
    };
  }, Gu = function(r) {
    return {
      quote: '"',
      literal: r.join("")
      // except " \ LF CR
    };
  }, Uu = function(r) {
    return {
      quote: "'''",
      literal: r.map((f) => f[0] ? f[0] + f[1] : f[1]).join("")
    };
  }, ju = function(r) {
    return {
      quote: '"""',
      literal: r.map((f) => f[0] ? f[0] + f[1] : f[1]).join("")
    };
  }, Hu = function() {
    return J();
  }, Bu = function() {
    return J();
  }, ku = function() {
    return mt[I().start.offset] = J(), "";
  }, Mu = function() {
    return J();
  }, Xu = function() {
    return J();
  }, Vu = function() {
    return J();
  }, s = 0, w = 0, ys = [{ line: 1, column: 1 }], le = 0, ur = [], Ps;
  if ("startRule" in b) {
    if (!(b.startRule in x))
      throw new Error(`Can't start parsing from rule "` + b.startRule + '".');
    K = x[b.startRule];
  }
  function J() {
    return c.substring(w, s);
  }
  function I() {
    return pr(w, s);
  }
  function v(r, f) {
    return { type: "literal", text: r, ignoreCase: f };
  }
  function N(r, f, t) {
    return { type: "class", parts: r, inverted: f, ignoreCase: t };
  }
  function Wu() {
    return { type: "end" };
  }
  function Mi(r) {
    var f = ys[r], t;
    if (f)
      return f;
    for (t = r - 1; !ys[t]; )
      t--;
    for (f = ys[t], f = {
      line: f.line,
      column: f.column
    }; t < r; )
      c.charCodeAt(t) === 10 ? (f.line++, f.column = 1) : f.column++, t++;
    return ys[r] = f, f;
  }
  function pr(r, f, t) {
    var l = Mi(r), o = Mi(f), h = {
      source: T,
      start: {
        offset: r,
        line: l.line,
        column: l.column
      },
      end: {
        offset: f,
        line: o.line,
        column: o.column
      }
    };
    return h;
  }
  function p(r) {
    s < le || (s > le && (le = s, ur = []), ur.push(r));
  }
  function Qu(r, f, t) {
    return new Xr(
      Xr.buildMessage(r, f),
      r,
      f,
      t
    );
  }
  function Xi() {
    var r, f, t, l, o, h;
    for (r = s, f = [], t = bt(); t !== e; )
      f.push(t), t = bt();
    for (t = [], l = a(); l !== e; )
      t.push(l), l = a();
    if (l = Yu(), l !== e) {
      for (o = [], h = a(); h !== e; )
        o.push(h), h = a();
      w = r, r = Wo(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function Yu() {
    var r;
    return r = zu(), r === e && (r = st()), r;
  }
  function zu() {
    var r, f, t, l, o;
    for (r = s, f = Vi(), t = [], l = a(); l !== e; )
      t.push(l), l = a();
    return l = Zu(), l === e && (l = Ju(), l === e && (l = qu(), l === e && (l = ep()))), l !== e ? (o = et(), w = r, r = Qo(f, l, o)) : (s = r, r = e), r;
  }
  function Vi() {
    var r, f, t;
    for (r = s, f = [], t = Wi(), t === e && (t = Qi()); t !== e; )
      f.push(t), t = Wi(), t === e && (t = Qi());
    return w = r, f = Yo(f), r = f, r;
  }
  function Wi() {
    var r, f, t, l, o;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.substr(s, 4).toLowerCase() === ue ? (t = c.substr(s, 4), s += 4) : (t = e, p(xa)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = Nr(), o !== e ? (w = r, r = zo(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Qi() {
    var r, f, t, l, o, h, n;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.substr(s, 6).toLowerCase() === Ee ? (t = c.substr(s, 6), s += 6) : (t = e, p(Fa)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = xr(), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = Nr(), n !== e ? (w = r, r = Zo(o, n)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Zu() {
    var r, f, t, l, o, h, n, u;
    if (r = s, f = Yi(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = [], o = ae(); o !== e; )
        l.push(o), o = ae();
      for (o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (h = ke(), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Oe(), w = r, r = Ko(f, l, h, u);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Ku() {
    var r, f, t, l, o, h, n;
    if (r = s, f = Yi(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = ke(), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        h = Oe(), n = et(), w = r, r = Jo(f, l, h, n);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Yi() {
    var r, f, t, l, o, h, n, u, g, d, $, _, m, L, R, S, B;
    if (r = s, c.substr(s, 6).toLowerCase() === pe ? (f = c.substr(s, 6), s += 6) : (f = e, p(Da)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (c.substr(s, 8).toLowerCase() === O ? (l = c.substr(s, 8), s += 8) : (l = e, p(ce)), l === e && (c.substr(s, 7).toLowerCase() === F ? (l = c.substr(s, 7), s += 7) : (l = e, p(Ga))), l === e && (l = null), o = [], h = a(); h !== e; )
        o.push(h), h = a();
      for (h = [], n = s, u = [], g = a(); g !== e; )
        u.push(g), g = a();
      if (g = M(), g !== e ? (u = [u, g], n = u) : (s = n, n = e), n === e) {
        for (n = s, u = [], g = a(); g !== e; )
          u.push(g), g = a();
        if (c.charCodeAt(s) === 40 ? (g = A, s++) : (g = e, p(y)), g !== e) {
          for (d = [], $ = a(); $ !== e; )
            d.push($), $ = a();
          if ($ = C(), $ !== e) {
            for (_ = [], m = a(); m !== e; )
              _.push(m), m = a();
            if (c.substr(s, 2).toLowerCase() === fe ? (m = c.substr(s, 2), s += 2) : (m = e, p(ws)), m !== e) {
              for (L = [], R = a(); R !== e; )
                L.push(R), R = a();
              if (R = M(), R !== e) {
                for (S = [], B = a(); B !== e; )
                  S.push(B), B = a();
                c.charCodeAt(s) === 41 ? (B = E, s++) : (B = e, p(P)), B !== e ? (u = [u, g, d, $, _, m, L, R, S, B], n = u) : (s = n, n = e);
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
          for (h.push(n), n = s, u = [], g = a(); g !== e; )
            u.push(g), g = a();
          if (g = M(), g !== e ? (u = [u, g], n = u) : (s = n, n = e), n === e) {
            for (n = s, u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (c.charCodeAt(s) === 40 ? (g = A, s++) : (g = e, p(y)), g !== e) {
              for (d = [], $ = a(); $ !== e; )
                d.push($), $ = a();
              if ($ = C(), $ !== e) {
                for (_ = [], m = a(); m !== e; )
                  _.push(m), m = a();
                if (c.substr(s, 2).toLowerCase() === fe ? (m = c.substr(s, 2), s += 2) : (m = e, p(ws)), m !== e) {
                  for (L = [], R = a(); R !== e; )
                    L.push(R), R = a();
                  if (R = M(), R !== e) {
                    for (S = [], B = a(); B !== e; )
                      S.push(B), B = a();
                    c.charCodeAt(s) === 41 ? (B = E, s++) : (B = e, p(P)), B !== e ? (u = [u, g, d, $, _, m, L, R, S, B], n = u) : (s = n, n = e);
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
        h = e;
      h === e && (c.charCodeAt(s) === 42 ? (h = ee, s++) : (h = e, p(se))), h !== e ? (w = r, r = qo(l, h)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Ju() {
    var r, f, t, l, o, h, n, u, g, d, $, _, m, L;
    if (r = s, c.substr(s, 9).toLowerCase() === Vr ? (f = c.substr(s, 9), s += 9) : (f = e, p(gi)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = Op(), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        for (h = [], n = ae(); n !== e; )
          h.push(n), n = ae();
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (u = ke(), u !== e) {
          for (g = [], d = a(); d !== e; )
            g.push(d), d = a();
          d = Oe(), w = r, r = ec(l, h, u, d);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    if (r === e)
      if (r = s, c.substr(s, 9).toLowerCase() === Vr ? (f = c.substr(s, 9), s += 9) : (f = e, p(gi)), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        for (l = [], o = ae(); o !== e; )
          l.push(o), o = ae();
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.substr(s, 5).toLowerCase() === qe ? (h = c.substr(s, 5), s += 5) : (h = e, p($s)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (c.charCodeAt(s) === 123 ? (u = ge, s++) : (u = e, p(ve)), u !== e) {
            for (g = [], d = a(); d !== e; )
              g.push(d), d = a();
            for (d = Ne(), d === e && (d = null), $ = [], _ = a(); _ !== e; )
              $.push(_), _ = a();
            if (c.charCodeAt(s) === 125 ? (_ = de, s++) : (_ = e, p(be)), _ !== e) {
              for (m = [], L = a(); L !== e; )
                m.push(L), L = a();
              L = Oe(), w = r, r = sc(l, d, L);
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
  function qu() {
    var r, f, t, l, o, h, n, u, g, d;
    if (r = s, c.substr(s, 8).toLowerCase() === Ot ? (f = c.substr(s, 8), s += 8) : (f = e, p(Ua)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = [], o = Fe(), o !== e)
        for (; o !== e; )
          l.push(o), o = Fe();
      else
        l = e;
      if (l === e && (c.charCodeAt(s) === 42 ? (l = ee, s++) : (l = e, p(se))), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        for (h = [], n = ae(); n !== e; )
          h.push(n), n = ae();
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        for (u = ke(), u === e && (u = null), g = [], d = a(); d !== e; )
          g.push(d), d = a();
        d = Oe(), w = r, r = rc(l, h, u, d);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function ep() {
    var r, f, t, l, o, h, n, u, g;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.substr(s, 3).toLowerCase() === St ? (t = c.substr(s, 3), s += 3) : (t = e, p(ja)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      for (o = [], h = ae(); h !== e; )
        o.push(h), h = ae();
      for (h = [], n = a(); n !== e; )
        h.push(n), n = a();
      if (n = ke(), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        g = Oe(), w = r, r = ic(o, n, g);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function ae() {
    var r, f, t, l, o, h;
    if (r = s, c.substr(s, 4).toLowerCase() === Nt ? (f = c.substr(s, 4), s += 4) : (f = e, p(Ha)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = sp(), l === e && (l = rp()), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        w = r, r = tc(l);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function sp() {
    var r, f, t;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    return t = W(), t !== e ? (w = r, r = lc(t)) : (s = r, r = e), r;
  }
  function rp() {
    var r, f, t, l;
    if (r = s, c.substr(s, 5).toLowerCase() === Us ? (f = c.substr(s, 5), s += 5) : (f = e, p(Js)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = W(), l !== e ? (w = r, r = ac(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function ke() {
    var r, f, t;
    for (r = s, c.substr(s, 5).toLowerCase() === qe ? (c.substr(s, 5), s += 5) : p($s), f = [], t = a(); t !== e; )
      f.push(t), t = a();
    return t = re(), t !== e ? (w = r, r = fc(t)) : (s = r, r = e), r;
  }
  function Oe() {
    var r, f, t, l, o;
    return r = s, f = ip(), f === e && (f = null), t = tp(), t === e && (t = null), l = lp(), l === e && (l = null), o = ap(), o === e && (o = null), w = r, r = oc(f, t, l, o), r;
  }
  function ip() {
    var r, f, t, l, o, h, n;
    if (r = s, c.substr(s, 5).toLowerCase() === xt ? (f = c.substr(s, 5), s += 5) : (f = e, p(Ba)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (c.substr(s, 2).toLowerCase() === Wr ? (l = c.substr(s, 2), s += 2) : (l = e, p(di)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (h = [], n = zi(), n !== e)
          for (; n !== e; )
            h.push(n), n = zi();
        else
          h = e;
        h !== e ? (w = r, r = cc(h)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function zi() {
    var r, f, t, l, o, h, n, u, g, d, $;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (t = Tr(), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      w = r, r = hc(t);
    } else
      s = r, r = e;
    if (r === e) {
      for (r = s, f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = nt(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        w = r, r = nc(t);
      } else
        s = r, r = e;
      if (r === e) {
        for (r = s, f = [], t = a(); t !== e; )
          f.push(t), t = a();
        if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
          for (l = [], o = a(); o !== e; )
            l.push(o), o = a();
          if (o = C(), o !== e) {
            for (h = [], n = a(); n !== e; )
              h.push(n), n = a();
            if (n = s, c.substr(s, 2).toLowerCase() === fe ? (u = c.substr(s, 2), s += 2) : (u = e, p(ws)), u !== e) {
              for (g = [], d = a(); d !== e; )
                g.push(d), d = a();
              d = M(), d !== e ? (u = [u, g, d], n = u) : (s = n, n = e);
            } else
              s = n, n = e;
            for (n === e && (n = null), u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (c.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
              for (d = [], $ = a(); $ !== e; )
                d.push($), $ = a();
              w = r, r = uc(o, n);
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
        if (r === e) {
          for (r = s, f = [], t = a(); t !== e; )
            f.push(t), t = a();
          if (t = M(), t !== e) {
            for (l = [], o = a(); o !== e; )
              l.push(o), o = a();
            w = r, r = pc(t);
          } else
            s = r, r = e;
        }
      }
    }
    return r;
  }
  function tp() {
    var r, f, t, l, o;
    if (r = s, c.substr(s, 6).toLowerCase() === Ft ? (f = c.substr(s, 6), s += 6) : (f = e, p(ka)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = [], o = Zi(), o !== e)
        for (; o !== e; )
          l.push(o), o = Zi();
      else
        l = e;
      l !== e ? (w = r, r = gc(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Zi() {
    var r, f, t, l;
    if (r = s, f = wr(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      w = r, r = dc(f);
    } else
      s = r, r = e;
    return r;
  }
  function lp() {
    var r, f, t, l, o, h, n, u;
    if (r = s, c.substr(s, 5).toLowerCase() === Dt ? (f = c.substr(s, 5), s += 5) : (f = e, p(Ma)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (c.substr(s, 2).toLowerCase() === Wr ? (l = c.substr(s, 2), s += 2) : (l = e, p(di)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (h = [], n = Ki(), n !== e)
          for (; n !== e; )
            h.push(n), n = Ki();
        else
          h = e;
        if (h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          w = r, r = wc(h);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Ki() {
    var r, f, t, l, o, h;
    if (r = s, c.substr(s, 3).toLowerCase() === Gt ? (f = c.substr(s, 3), s += 3) : (f = e, p(Xa)), f === e && (c.substr(s, 4).toLowerCase() === Ut ? (f = c.substr(s, 4), s += 4) : (f = e, p(Va))), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = Pr(), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        w = r, r = $c(f, l);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    if (r === e)
      if (r = s, f = wr(), f === e && (f = M()), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        w = r, r = vc(f);
      } else
        s = r, r = e;
    return r;
  }
  function ap() {
    var r, f, t, l;
    return r = s, f = s, t = Ji(), t !== e ? (l = qi(), l === e && (l = null), t = [t, l], f = t) : (s = f, f = e), f === e && (f = s, t = qi(), t !== e ? (l = Ji(), l === e && (l = null), t = [t, l], f = t) : (s = f, f = e)), f !== e && (w = r, f = bc(f)), r = f, r;
  }
  function Ji() {
    var r, f, t, l, o, h;
    if (r = s, c.substr(s, 5).toLowerCase() === jt ? (f = c.substr(s, 5), s += 5) : (f = e, p(Wa)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = We(), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        w = r, r = _c(l);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function qi() {
    var r, f, t, l, o, h;
    if (r = s, c.substr(s, 6).toLowerCase() === Ht ? (f = c.substr(s, 6), s += 6) : (f = e, p(Qa)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = We(), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        w = r, r = Ac(l);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function et() {
    var r, f, t, l;
    return r = s, f = s, c.substr(s, 6).toLowerCase() === Qr ? (t = c.substr(s, 6), s += 6) : (t = e, p(wi)), t !== e ? (l = ct(), l !== e ? (t = [t, l], f = t) : (s = f, f = e)) : (s = f, f = e), f === e && (f = null), w = r, f = Cc(f), r = f, r;
  }
  function st() {
    var r, f, t, l, o, h, n, u, g, d;
    for (r = s, f = Vi(), t = s, l = [], o = a(); o !== e; )
      l.push(o), o = a();
    if (o = fp(), o !== e) {
      for (h = s, n = [], u = a(); u !== e; )
        n.push(u), u = a();
      if (c.charCodeAt(s) === 59 ? (u = Pe, s++) : (u = e, p(Le)), u !== e) {
        for (g = [], d = a(); d !== e; )
          g.push(d), d = a();
        d = st(), n = [n, u, g, d], h = n;
      } else
        s = h, h = e;
      h === e && (h = null), l = [l, o, h], t = l;
    } else
      s = t, t = e;
    for (t === e && (t = null), l = [], o = a(); o !== e; )
      l.push(o), o = a();
    return w = r, r = mc(f, t), r;
  }
  function fp() {
    var r;
    return r = op(), r === e && (r = cp(), r === e && (r = hp(), r === e && (r = up(), r === e && (r = pp(), r === e && (r = gp(), r === e && (r = np(), r === e && (r = dp(), r === e && (r = wp(), r === e && (r = $p(), r === e && (r = vp())))))))))), r;
  }
  function op() {
    var r, f, t, l, o, h, n, u, g, d, $;
    if (r = s, c.substr(s, 4).toLowerCase() === Bt ? (f = c.substr(s, 4), s += 4) : (f = e, p(Ya)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (c.substr(s, 6).toLowerCase() === we ? (l = c.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (h = W(), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (u = s, c.substr(s, 4).toLowerCase() === kt ? (g = c.substr(s, 4), s += 4) : (g = e, p(za)), g !== e) {
          for (d = [], $ = a(); $ !== e; )
            d.push($), $ = a();
          $ = gr(), $ !== e ? (g = [g, d, $], u = g) : (s = u, u = e);
        } else
          s = u, u = e;
        u === e && (u = null), w = r, r = Ec(l, h, u);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function cp() {
    var r, f, t, l, o, h;
    if (r = s, c.substr(s, 5).toLowerCase() === Mt ? (f = c.substr(s, 5), s += 5) : (f = e, p(Za)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (c.substr(s, 6).toLowerCase() === we ? (l = c.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), o = [], h = a(); h !== e; )
        o.push(h), h = a();
      h = tt(), h !== e ? (w = r, r = yc(l, h)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function hp() {
    var r, f, t, l, o, h;
    if (r = s, c.substr(s, 4).toLowerCase() === Xt ? (f = c.substr(s, 4), s += 4) : (f = e, p(Ka)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (c.substr(s, 6).toLowerCase() === we ? (l = c.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), o = [], h = a(); h !== e; )
        o.push(h), h = a();
      h = tt(), h !== e ? (w = r, r = Pc(l, h)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function np() {
    var r, f, t, l, o, h;
    if (r = s, c.substr(s, 6).toLowerCase() === Vt ? (f = c.substr(s, 6), s += 6) : (f = e, p(Ja)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (c.substr(s, 6).toLowerCase() === we ? (l = c.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), o = [], h = a(); h !== e; )
        o.push(h), h = a();
      h = gr(), h !== e ? (w = r, r = Tc(l, h)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function up() {
    var r, f, t, l, o, h, n, u, g, d;
    if (r = s, c.substr(s, 3).toLowerCase() === Wt ? (f = c.substr(s, 3), s += 3) : (f = e, p(qa)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (c.substr(s, 6).toLowerCase() === we ? (l = c.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (h = Se(), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (c.substr(s, 2).toLowerCase() === js ? (u = c.substr(s, 2), s += 2) : (u = e, p(qs)), u !== e) {
          for (g = [], d = a(); d !== e; )
            g.push(d), d = a();
          d = Se(), d !== e ? (w = r, r = Lc(l, h, d)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function pp() {
    var r, f, t, l, o, h, n, u, g, d;
    if (r = s, c.substr(s, 4).toLowerCase() === Qt ? (f = c.substr(s, 4), s += 4) : (f = e, p(ef)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (c.substr(s, 6).toLowerCase() === we ? (l = c.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (h = Se(), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (c.substr(s, 2).toLowerCase() === js ? (u = c.substr(s, 2), s += 2) : (u = e, p(qs)), u !== e) {
          for (g = [], d = a(); d !== e; )
            g.push(d), d = a();
          d = Se(), d !== e ? (w = r, r = Rc(l, h, d)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function gp() {
    var r, f, t, l, o, h, n, u, g, d;
    if (r = s, c.substr(s, 4).toLowerCase() === Yt ? (f = c.substr(s, 4), s += 4) : (f = e, p(sf)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (c.substr(s, 6).toLowerCase() === we ? (l = c.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (h = Se(), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (c.substr(s, 2).toLowerCase() === js ? (u = c.substr(s, 2), s += 2) : (u = e, p(qs)), u !== e) {
          for (g = [], d = a(); d !== e; )
            g.push(d), d = a();
          d = Se(), d !== e ? (w = r, r = Ic(l, h, d)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function dp() {
    var r, f, t, l, o, h;
    if (r = s, c.substr(s, 6).toLowerCase() === Yr ? (f = c.substr(s, 6), s += 6) : (f = e, p($i)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (c.substr(s, 4).toLowerCase() === zr ? (l = c.substr(s, 4), s += 4) : (l = e, p(vi)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        h = lt(), h !== e ? (w = r, r = Oc(h)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function wp() {
    var r, f, t, l, o;
    if (r = s, c.substr(s, 6).toLowerCase() === Hs ? (f = c.substr(s, 6), s += 6) : (f = e, p(er)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      c.substr(s, 4).toLowerCase() === zr ? (l = c.substr(s, 4), s += 4) : (l = e, p(vi)), l !== e ? (o = lt(), o !== e ? (w = r, r = Sc(o)) : (s = r, r = e)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function $p() {
    var r, f, t, l, o, h;
    if (r = s, c.substr(s, 6).toLowerCase() === Hs ? (f = c.substr(s, 6), s += 6) : (f = e, p(er)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (c.substr(s, 5).toLowerCase() === qe ? (l = c.substr(s, 5), s += 5) : (l = e, p($s)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        h = dr(), h !== e ? (w = r, r = Nc(h)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function vp() {
    var r, f, t, l, o, h, n, u, g, d, $;
    if (r = s, f = s, c.substr(s, 4).toLowerCase() === zt ? (t = c.substr(s, 4), s += 4) : (t = e, p(rf)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = W(), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        t = [t, l, o, h], f = t;
      } else
        s = f, f = e;
    } else
      s = f, f = e;
    if (f === e && (f = null), t = s, l = bp(), l !== e) {
      for (o = [], h = a(); h !== e; )
        o.push(h), h = a();
      h = rt(), h === e && (h = null), l = [l, o, h], t = l;
    } else
      s = t, t = e;
    if (t === e && (t = rt()), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      for (o = [], h = it(); h !== e; )
        o.push(h), h = it();
      for (h = [], n = a(); n !== e; )
        h.push(n), n = a();
      if (c.substr(s, 5).toLowerCase() === qe ? (n = c.substr(s, 5), s += 5) : (n = e, p($s)), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        if (g = re(), g !== e) {
          for (d = [], $ = a(); $ !== e; )
            d.push($), $ = a();
          w = r, r = xc(f, t, o, g);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function bp() {
    var r, f, t;
    return r = s, c.substr(s, 6).toLowerCase() === Hs ? (f = c.substr(s, 6), s += 6) : (f = e, p(er)), f !== e ? (t = dr(), t !== e ? (w = r, r = Fc(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function rt() {
    var r, f, t;
    return r = s, c.substr(s, 6).toLowerCase() === Yr ? (f = c.substr(s, 6), s += 6) : (f = e, p($i)), f !== e ? (t = dr(), t !== e ? (w = r, r = Dc(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function it() {
    var r, f, t, l, o, h, n, u;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.substr(s, 5).toLowerCase() === Zt ? (t = c.substr(s, 5), s += 5) : (t = e, p(tf)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = W(), o === e)
        if (o = s, c.substr(s, 5).toLowerCase() === Us ? (h = c.substr(s, 5), s += 5) : (h = e, p(Js)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = W(), u !== e ? (h = [h, n, u], o = h) : (s = o, o = e);
        } else
          s = o, o = e;
      o !== e ? (w = r, r = Gc(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Se() {
    var r, f, t, l;
    if (r = s, c.substr(s, 7).toLowerCase() === Zr ? (f = c.substr(s, 7), s += 7) : (f = e, p(bi)), f !== e && (w = r, f = Uc()), r = f, r === e) {
      for (r = s, c.substr(s, 5).toLowerCase() === es ? (f = c.substr(s, 5), s += 5) : (f = e, p(vs)), f === e && (f = null), t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = W(), l !== e ? (w = r, r = jc(l)) : (s = r, r = e);
    }
    return r;
  }
  function gr() {
    var r, f, t, l;
    if (r = s, c.substr(s, 5).toLowerCase() === es ? (f = c.substr(s, 5), s += 5) : (f = e, p(vs)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = W(), l !== e ? (w = r, r = Hc(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function tt() {
    var r, f;
    return r = s, f = gr(), f !== e && (w = r, f = Bc(f)), r = f, r === e && (r = s, c.substr(s, 7).toLowerCase() === Zr ? (f = c.substr(s, 7), s += 7) : (f = e, p(bi)), f !== e && (w = r, f = kc()), r = f, r === e && (r = s, c.substr(s, 5).toLowerCase() === Us ? (f = c.substr(s, 5), s += 5) : (f = e, p(Js)), f !== e && (w = r, f = Mc()), r = f, r === e && (r = s, c.substr(s, 3).toLowerCase() === Kt ? (f = c.substr(s, 3), s += 3) : (f = e, p(lf)), f !== e && (w = r, f = Xc()), r = f))), r;
  }
  function dr() {
    var r, f, t, l, o, h, n, u, g;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.charCodeAt(s) === 123 ? (t = ge, s++) : (t = e, p(ve)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      for (o = at(), h = [], n = a(); n !== e; )
        h.push(n), n = a();
      if (c.charCodeAt(s) === 125 ? (n = de, s++) : (n = e, p(be)), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        w = r, r = Vc(o);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function lt() {
    var r, f, t, l, o, h, n, u, g;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.charCodeAt(s) === 123 ? (t = ge, s++) : (t = e, p(ve)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      for (o = at(), h = [], n = a(); n !== e; )
        h.push(n), n = a();
      if (c.charCodeAt(s) === 125 ? (n = de, s++) : (n = e, p(be)), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        w = r, r = Wc(o);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function at() {
    var r, f, t, l, o, h, n;
    for (r = s, f = Ne(), f === e && (f = null), t = [], l = s, o = ft(), o !== e ? (c.charCodeAt(s) === 46 ? (h = X, s++) : (h = e, p(V)), h === e && (h = null), n = Ne(), n === e && (n = null), o = [o, h, n], l = o) : (s = l, l = e); l !== e; )
      t.push(l), l = s, o = ft(), o !== e ? (c.charCodeAt(s) === 46 ? (h = X, s++) : (h = e, p(V)), h === e && (h = null), n = Ne(), n === e && (n = null), o = [o, h, n], l = o) : (s = l, l = e);
    return w = r, r = Qc(f, t), r;
  }
  function ft() {
    var r, f, t, l, o, h, n, u, g, d, $, _, m;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.substr(s, 5).toLowerCase() === es ? (t = c.substr(s, 5), s += 5) : (t = e, p(vs)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = Fe(), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (c.charCodeAt(s) === 123 ? (n = ge, s++) : (n = e, p(ve)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          for (g = Ne(), g === e && (g = null), d = [], $ = a(); $ !== e; )
            d.push($), $ = a();
          if (c.charCodeAt(s) === 125 ? ($ = de, s++) : ($ = e, p(be)), $ !== e) {
            for (_ = [], m = a(); m !== e; )
              _.push(m), m = a();
            w = r, r = Yc(o, g);
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
  function Ne() {
    var r, f, t, l, o, h, n;
    if (r = s, f = gt(), f !== e) {
      for (t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = Ne(), n === e && (n = null), l = [l, o, h, n], t = l;
      } else
        s = t, t = e;
      t === e && (t = null), w = r, r = zc(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function re() {
    var r, f, t, l, o, h;
    if (r = s, c.charCodeAt(s) === 123 ? (f = ge, s++) : (f = e, p(ve)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = Ku(), l === e && (l = _p()), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        c.charCodeAt(s) === 125 ? (h = de, s++) : (h = e, p(be)), h !== e ? (w = r, r = Zc(l)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function _p() {
    var r, f, t, l, o, h, n, u, g, d;
    for (r = s, f = Ts(), f === e && (f = null), t = [], l = a(); l !== e; )
      t.push(l), l = a();
    if (l = [], o = s, h = ot(), h !== e) {
      for (n = [], u = a(); u !== e; )
        n.push(u), u = a();
      for (c.charCodeAt(s) === 46 ? (u = X, s++) : (u = e, p(V)), u === e && (u = null), g = [], d = a(); d !== e; )
        g.push(d), d = a();
      d = Ts(), d === e && (d = null), h = [h, n, u, g, d], o = h;
    } else
      s = o, o = e;
    for (; o !== e; )
      if (l.push(o), o = s, h = ot(), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        for (c.charCodeAt(s) === 46 ? (u = X, s++) : (u = e, p(V)), u === e && (u = null), g = [], d = a(); d !== e; )
          g.push(d), d = a();
        d = Ts(), d === e && (d = null), h = [h, n, u, g, d], o = h;
      } else
        s = o, o = e;
    return w = r, r = Kc(f, l), r;
  }
  function Ts() {
    var r, f, t, l, o, h, n;
    if (r = s, f = Np(), f !== e) {
      for (t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = Ts(), n === e && (n = null), l = [l, o, h, n], t = l;
      } else
        s = t, t = e;
      t === e && (t = null), w = r, r = Jc(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function ot() {
    var r;
    return r = Rp(), r === e && (r = Ap(), r === e && (r = Lp(), r === e && (r = Cp(), r === e && (r = mp(), r === e && (r = Ip(), r === e && (r = Ep(), r === e && (r = yp()))))))), r;
  }
  function Ap() {
    var r, f, t, l, o;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.substr(s, 8).toLowerCase() === Jt ? (t = c.substr(s, 8), s += 8) : (t = e, p(af)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = re(), o !== e ? (w = r, r = qc(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Cp() {
    var r, f, t, l, o, h, n;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.substr(s, 5).toLowerCase() === es ? (t = c.substr(s, 5), s += 5) : (t = e, p(vs)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = Fe(), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = re(), n !== e ? (w = r, r = eh(o, n)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function mp() {
    var r, f, t, l, o, h, n, u;
    if (r = s, c.substr(s, 7).toLowerCase() === qt ? (f = c.substr(s, 7), s += 7) : (f = e, p(ff)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (c.substr(s, 6).toLowerCase() === we ? (l = c.substr(s, 6), s += 6) : (l = e, p(_e)), l === e && (l = null), o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (h = Fe(), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = re(), u !== e ? (w = r, r = sh(l, h, u)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Ep() {
    var r, f, t, l, o, h, n, u, g, d, $, _, m;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.substr(s, 4).toLowerCase() === el ? (t = c.substr(s, 4), s += 4) : (t = e, p(of)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.charCodeAt(s) === 40 ? (o = A, s++) : (o = e, p(y)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (n = C(), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          if (c.substr(s, 2).toLowerCase() === fe ? (g = c.substr(s, 2), s += 2) : (g = e, p(ws)), g !== e) {
            for (d = [], $ = a(); $ !== e; )
              d.push($), $ = a();
            if ($ = M(), $ !== e) {
              for (_ = [], m = a(); m !== e; )
                _.push(m), m = a();
              c.charCodeAt(s) === 41 ? (m = E, s++) : (m = e, p(P)), m !== e ? (w = r, r = rh(n, $)) : (s = r, r = e);
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
  function yp() {
    var r, f, t, l, o;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.substr(s, 6).toLowerCase() === Qr ? (t = c.substr(s, 6), s += 6) : (t = e, p(wi)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = ct(), o !== e ? (w = r, r = ih(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function ct() {
    var r;
    return r = Pp(), r === e && (r = Tp()), r;
  }
  function Pp() {
    var r, f, t, l, o, h, n, u;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (t = M(), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.charCodeAt(s) === 123 ? (o = ge, s++) : (o = e, p(ve)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        for (n = [], u = Ls(); u !== e; )
          n.push(u), u = Ls();
        c.charCodeAt(s) === 125 ? (u = de, s++) : (u = e, p(be)), u !== e ? (w = r, r = th(t, n)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Tp() {
    var r, f, t, l, o, h, n, u, g, d, $;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      for (o = [], h = M(); h !== e; )
        o.push(h), h = M();
      if (c.charCodeAt(s) === 41 ? (h = E, s++) : (h = e, p(P)), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (c.charCodeAt(s) === 123 ? (u = ge, s++) : (u = e, p(ve)), u !== e) {
          for (g = [], d = a(); d !== e; )
            g.push(d), d = a();
          for (d = [], $ = ht(); $ !== e; )
            d.push($), $ = ht();
          c.charCodeAt(s) === 125 ? ($ = de, s++) : ($ = e, p(be)), $ !== e ? (w = r, r = lh(o, d)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function ht() {
    var r, f, t, l, o, h, n;
    if (r = s, c.charCodeAt(s) === 40 ? (f = A, s++) : (f = e, p(y)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = [], o = Ls(); o !== e; )
        l.push(o), o = Ls();
      if (c.charCodeAt(s) === 41 ? (o = E, s++) : (o = e, p(P)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        w = r, r = ah(l);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Ls() {
    var r, f, t, l;
    if (r = s, f = W(), f === e && (f = Lr(), f === e && (f = Rr(), f === e && (f = Sr(), f === e && (c.substr(s, 5) === Kr ? (f = Kr, s += 5) : (f = e, p(cf)))))), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      w = r, r = fh(f);
    } else
      s = r, r = e;
    return r;
  }
  function Lp() {
    var r, f, t, l;
    if (r = s, c.substr(s, 5).toLowerCase() === sl ? (f = c.substr(s, 5), s += 5) : (f = e, p(hf)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = re(), l !== e ? (w = r, r = oh(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Rp() {
    var r, f, t, l, o, h, n, u;
    if (r = s, f = re(), f !== e) {
      for (t = [], l = s, o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (c.substr(s, 5).toLowerCase() === Jr ? (h = c.substr(s, 5), s += 5) : (h = e, p(_i)), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = re(), u !== e ? l = u : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.substr(s, 5).toLowerCase() === Jr ? (h = c.substr(s, 5), s += 5) : (h = e, p(_i)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = re(), u !== e ? l = u : (s = l, l = e);
        } else
          s = l, l = e;
      }
      w = r, r = ch(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Ip() {
    var r, f, t, l, o;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.substr(s, 6).toLowerCase() === rl ? (t = c.substr(s, 6), s += 6) : (t = e, p(nf)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = wr(), o !== e ? (w = r, r = hh(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function wr() {
    var r;
    return r = Pr(), r === e && (r = Tr(), r === e && (r = nt())), r;
  }
  function nt() {
    var r, f, t, l;
    if (r = s, f = W(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = ut(), l !== e ? (w = r, r = nh(f, l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function ut() {
    var r, f, t, l, o, h, n, u, g, d, $, _;
    if (r = s, f = me(), f !== e && (w = r, f = uh()), r = f, r === e)
      if (r = s, c.charCodeAt(s) === 40 ? (f = A, s++) : (f = e, p(y)), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        for (c.substr(s, 8).toLowerCase() === O ? (l = c.substr(s, 8), s += 8) : (l = e, p(ce)), l === e && (l = null), o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (h = C(), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (u = [], g = s, c.charCodeAt(s) === 44 ? (d = D, s++) : (d = e, p(G)), d !== e) {
            for ($ = [], _ = a(); _ !== e; )
              $.push(_), _ = a();
            _ = C(), _ !== e ? g = _ : (s = g, g = e);
          } else
            s = g, g = e;
          for (; g !== e; )
            if (u.push(g), g = s, c.charCodeAt(s) === 44 ? (d = D, s++) : (d = e, p(G)), d !== e) {
              for ($ = [], _ = a(); _ !== e; )
                $.push(_), _ = a();
              _ = C(), _ !== e ? g = _ : (s = g, g = e);
            } else
              s = g, g = e;
          c.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e ? (w = r, r = ph(l, h, u)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    return r;
  }
  function xe() {
    var r, f, t, l, o, h, n, u, g, d, $, _;
    if (r = s, f = me(), f !== e && (w = r, f = gh()), r = f, r === e)
      if (r = s, c.charCodeAt(s) === 40 ? (f = A, s++) : (f = e, p(y)), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        if (l = C(), l !== e) {
          for (o = [], h = a(); h !== e; )
            o.push(h), h = a();
          if (h = [], n = s, c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
            for (g = [], d = a(); d !== e; )
              g.push(d), d = a();
            if (d = C(), d !== e) {
              for ($ = [], _ = a(); _ !== e; )
                $.push(_), _ = a();
              n = d;
            } else
              s = n, n = e;
          } else
            s = n, n = e;
          for (; n !== e; )
            if (h.push(n), n = s, c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
              for (g = [], d = a(); d !== e; )
                g.push(d), d = a();
              if (d = C(), d !== e) {
                for ($ = [], _ = a(); _ !== e; )
                  $.push(_), _ = a();
                n = d;
              } else
                s = n, n = e;
            } else
              s = n, n = e;
          c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (w = r, r = dh(l, h)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    return r;
  }
  function Op() {
    var r, f, t, l, o, h;
    if (r = s, c.charCodeAt(s) === 123 ? (f = ge, s++) : (f = e, p(ve)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = pt(), l === e && (l = null), o = [], h = a(); h !== e; )
        o.push(h), h = a();
      c.charCodeAt(s) === 125 ? (h = de, s++) : (h = e, p(be)), h !== e ? (w = r, r = wh(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function pt() {
    var r, f, t, l, o, h, n;
    if (r = s, f = gt(), f !== e) {
      for (t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (c.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        n = pt(), n === e && (n = null), l = [l, o, h, n], t = l;
      } else
        s = t, t = e;
      t === e && (t = null), w = r, r = $h(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function gt() {
    var r, f, t, l, o;
    if (r = s, f = Os(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = $r(), l !== e ? (w = r, r = vh(f, l)) : (s = r, r = e);
    } else
      s = r, r = e;
    if (r === e) {
      for (r = s, f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = wt(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        o = Sp(), w = r, r = bh(t, o);
      } else
        s = r, r = e;
    }
    return r;
  }
  function Sp() {
    var r;
    return r = $r(), r === e && (r = null), r;
  }
  function $r() {
    var r, f, t, l, o, h, n, u, g, d, $, _, m;
    if (r = s, f = vr(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = br(), l !== e) {
        for (o = [], h = s, n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (c.charCodeAt(s) === 59 ? (u = Pe, s++) : (u = e, p(Le)), u !== e) {
          for (g = [], d = a(); d !== e; )
            g.push(d), d = a();
          if (d = s, $ = vr(), $ !== e) {
            for (_ = [], m = a(); m !== e; )
              _.push(m), m = a();
            m = br(), m !== e ? ($ = [$, _, m], d = $) : (s = d, d = e);
          } else
            s = d, d = e;
          d === e && (d = null), n = [n, u, g, d], h = n;
        } else
          s = h, h = e;
        for (; h !== e; ) {
          for (o.push(h), h = s, n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (c.charCodeAt(s) === 59 ? (u = Pe, s++) : (u = e, p(Le)), u !== e) {
            for (g = [], d = a(); d !== e; )
              g.push(d), d = a();
            if (d = s, $ = vr(), $ !== e) {
              for (_ = [], m = a(); m !== e; )
                _.push(m), m = a();
              m = br(), m !== e ? ($ = [$, _, m], d = $) : (s = d, d = e);
            } else
              s = d, d = e;
            d === e && (d = null), n = [n, u, g, d], h = n;
          } else
            s = h, h = e;
        }
        w = r, r = _h(f, l, o);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function vr() {
    var r, f;
    return r = Fe(), r === e && (r = s, c.charCodeAt(s) === 97 ? (f = ss, s++) : (f = e, p(bs)), f !== e && (w = r, f = Ah()), r = f), r;
  }
  function br() {
    var r, f, t, l, o, h, n, u;
    if (r = s, f = Me(), f !== e) {
      for (t = [], l = s, o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (c.charCodeAt(s) === 44 ? (h = D, s++) : (h = e, p(G)), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Me(), u !== e ? l = u : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.charCodeAt(s) === 44 ? (h = D, s++) : (h = e, p(G)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Me(), u !== e ? l = u : (s = l, l = e);
        } else
          s = l, l = e;
      }
      w = r, r = Ch(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Np() {
    var r, f, t, l, o;
    if (r = s, f = Os(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = _r(), l !== e ? (w = r, r = mh(f, l)) : (s = r, r = e);
    } else
      s = r, r = e;
    if (r === e) {
      for (r = s, f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = $t(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        o = xp(), w = r, r = Eh(t, o);
      } else
        s = r, r = e;
    }
    return r;
  }
  function xp() {
    var r;
    return r = _r(), r === e && (r = null), r;
  }
  function _r() {
    var r, f, t, l, o, h, n, u, g, d, $, _, m;
    if (r = s, f = Rs(), f === e && (f = M()), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = Ar(), l !== e) {
        for (o = [], h = s, n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (c.charCodeAt(s) === 59 ? (u = Pe, s++) : (u = e, p(Le)), u !== e) {
          for (g = [], d = a(); d !== e; )
            g.push(d), d = a();
          if (d = s, $ = Rs(), $ === e && ($ = M()), $ !== e) {
            for (_ = [], m = a(); m !== e; )
              _.push(m), m = a();
            m = Ar(), m !== e ? ($ = [$, _, m], d = $) : (s = d, d = e);
          } else
            s = d, d = e;
          d === e && (d = null), n = [n, u, g, d], h = n;
        } else
          s = h, h = e;
        for (; h !== e; ) {
          for (o.push(h), h = s, n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (c.charCodeAt(s) === 59 ? (u = Pe, s++) : (u = e, p(Le)), u !== e) {
            for (g = [], d = a(); d !== e; )
              g.push(d), d = a();
            if (d = s, $ = Rs(), $ === e && ($ = M()), $ !== e) {
              for (_ = [], m = a(); m !== e; )
                _.push(m), m = a();
              m = Ar(), m !== e ? ($ = [$, _, m], d = $) : (s = d, d = e);
            } else
              s = d, d = e;
            d === e && (d = null), n = [n, u, g, d], h = n;
          } else
            s = h, h = e;
        }
        w = r, r = yh(f, l, o);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Ar() {
    var r, f, t, l, o, h, n, u;
    if (r = s, f = Xe(), f !== e) {
      for (t = [], l = s, o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (c.charCodeAt(s) === 44 ? (h = D, s++) : (h = e, p(G)), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Xe(), u !== e ? l = u : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.charCodeAt(s) === 44 ? (h = D, s++) : (h = e, p(G)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Xe(), u !== e ? l = u : (s = l, l = e);
        } else
          s = l, l = e;
      }
      w = r, r = Ph(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Rs() {
    var r, f, t, l, o, h, n, u;
    if (r = s, f = Cr(), f !== e) {
      for (t = [], l = s, o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (c.charCodeAt(s) === 124 ? (h = rs, s++) : (h = e, p(_s)), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Cr(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.charCodeAt(s) === 124 ? (h = rs, s++) : (h = e, p(_s)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Cr(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
      }
      w = r, r = Th(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Cr() {
    var r, f, t, l, o, h, n, u;
    if (r = s, f = mr(), f !== e) {
      for (t = [], l = s, o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (c.charCodeAt(s) === 47 ? (h = oe, s++) : (h = e, p(he)), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = mr(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.charCodeAt(s) === 47 ? (h = oe, s++) : (h = e, p(he)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = mr(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
      }
      w = r, r = Lh(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function dt() {
    var r, f, t;
    return r = s, f = Dp(), f !== e ? (t = Fp(), t === e && (t = null), w = r, r = Rh(f, t)) : (s = r, r = e), r;
  }
  function mr() {
    var r, f, t;
    return r = dt(), r === e && (r = s, c.charCodeAt(s) === 94 ? (f = qr, s++) : (f = e, p(Ai)), f !== e ? (t = dt(), t !== e ? (w = r, r = Ih(t)) : (s = r, r = e)) : (s = r, r = e)), r;
  }
  function Fp() {
    var r;
    return c.charCodeAt(s) === 63 ? (r = Bs, s++) : (r = e, p(sr)), r === e && (c.charCodeAt(s) === 42 ? (r = ee, s++) : (r = e, p(se)), r === e && (c.charCodeAt(s) === 43 ? (r = $e, s++) : (r = e, p(Ae)))), r;
  }
  function Dp() {
    var r, f, t, l;
    return r = W(), r === e && (r = s, c.charCodeAt(s) === 97 ? (f = ss, s++) : (f = e, p(bs)), f !== e && (w = r, f = Oh()), r = f, r === e && (r = s, c.charCodeAt(s) === 33 ? (f = ks, s++) : (f = e, p(rr)), f !== e ? (t = Gp(), t !== e ? (f = [f, t], r = f) : (s = r, r = e)) : (s = r, r = e), r === e && (r = s, c.charCodeAt(s) === 40 ? (f = A, s++) : (f = e, p(y)), f !== e ? (t = Rs(), t !== e ? (c.charCodeAt(s) === 41 ? (l = E, s++) : (l = e, p(P)), l !== e ? (w = r, r = Sh(t)) : (s = r, r = e)) : (s = r, r = e)) : (s = r, r = e)))), r;
  }
  function Gp() {
    var r, f, t, l, o, h, n, u;
    if (r = Is(), r === e)
      if (r = s, c.charCodeAt(s) === 40 ? (f = A, s++) : (f = e, p(y)), f !== e) {
        if (t = s, l = Is(), l !== e) {
          for (o = [], h = s, c.charCodeAt(s) === 124 ? (n = rs, s++) : (n = e, p(_s)), n !== e ? (u = Is(), u !== e ? (n = [n, u], h = n) : (s = h, h = e)) : (s = h, h = e); h !== e; )
            o.push(h), h = s, c.charCodeAt(s) === 124 ? (n = rs, s++) : (n = e, p(_s)), n !== e ? (u = Is(), u !== e ? (n = [n, u], h = n) : (s = h, h = e)) : (s = h, h = e);
          l = [l, o], t = l;
        } else
          s = t, t = e;
        t === e && (t = null), c.charCodeAt(s) === 41 ? (l = E, s++) : (l = e, p(P)), l !== e ? (f = [f, t, l], r = f) : (s = r, r = e);
      } else
        s = r, r = e;
    return r;
  }
  function Is() {
    var r, f, t;
    return r = W(), r === e && (c.charCodeAt(s) === 97 ? (r = ss, s++) : (r = e, p(bs)), r === e && (r = s, c.charCodeAt(s) === 94 ? (f = qr, s++) : (f = e, p(Ai)), f !== e ? (t = W(), t === e && (c.charCodeAt(s) === 97 ? (t = ss, s++) : (t = e, p(bs))), t !== e ? (f = [f, t], r = f) : (s = r, r = e)) : (s = r, r = e))), r;
  }
  function wt() {
    var r, f;
    return r = s, f = Hp(), f !== e && (w = r, f = Nh(f)), r = f, r === e && (r = Up()), r;
  }
  function Up() {
    var r, f, t, l, o, h, n, u, g;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.charCodeAt(s) === 91 ? (t = Ms, s++) : (t = e, p(ir)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = $r(), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (c.charCodeAt(s) === 93 ? (n = Xs, s++) : (n = e, p(tr)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          w = r, r = xh(o);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function $t() {
    var r, f;
    return r = s, f = Bp(), f !== e && (w = r, f = Fh(f)), r = f, r === e && (r = jp()), r;
  }
  function jp() {
    var r, f, t, l, o, h, n, u, g;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.charCodeAt(s) === 91 ? (t = Ms, s++) : (t = e, p(ir)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = _r(), o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (c.charCodeAt(s) === 93 ? (n = Xs, s++) : (n = e, p(tr)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          w = r, r = Dh(o);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Hp() {
    var r, f, t, l, o, h, n, u, g;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = [], h = Me(), h !== e)
        for (; h !== e; )
          o.push(h), h = Me();
      else
        o = e;
      if (o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          w = r, r = Gh(o);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Bp() {
    var r, f, t, l, o, h, n, u, g;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = [], h = Xe(), h !== e)
        for (; h !== e; )
          o.push(h), h = Xe();
      else
        o = e;
      if (o !== e) {
        for (h = [], n = a(); n !== e; )
          h.push(n), n = a();
        if (c.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          w = r, r = Uh(o);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Me() {
    var r, f, t;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    return t = Os(), t === e && (t = wt()), t !== e ? (w = r, r = jh(t)) : (s = r, r = e), r;
  }
  function Xe() {
    var r, f, t;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    return t = Os(), t === e && (t = $t()), t !== e ? (w = r, r = Hh(t)) : (s = r, r = e), r;
  }
  function Os() {
    var r;
    return r = M(), r === e && (r = kp()), r;
  }
  function Fe() {
    var r;
    return r = M(), r === e && (r = W()), r;
  }
  function M() {
    var r, f, t, l, o;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (t = sg(), t === e && (t = rg()), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      w = r, r = Bh(t);
    } else
      s = r, r = e;
    return r;
  }
  function kp() {
    var r;
    return r = W(), r === e && (r = Lr(), r === e && (r = Rr(), r === e && (r = Sr(), r === e && (r = Jp(), r === e && (r = me()))))), r;
  }
  function C() {
    var r, f, t, l, o, h, n, u;
    if (r = s, f = Er(), f !== e) {
      for (t = [], l = s, o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (c.substr(s, 2) === is ? (h = is, s += 2) : (h = e, p(Ci)), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Er(), u !== e ? l = u : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.substr(s, 2) === is ? (h = is, s += 2) : (h = e, p(Ci)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Er(), u !== e ? l = u : (s = l, l = e);
        } else
          s = l, l = e;
      }
      w = r, r = kh(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Er() {
    var r, f, t, l, o, h, n, u;
    if (r = s, f = yr(), f !== e) {
      for (t = [], l = s, o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (c.substr(s, 2) === ts ? (h = ts, s += 2) : (h = e, p(mi)), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = yr(), u !== e ? l = u : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.substr(s, 2) === ts ? (h = ts, s += 2) : (h = e, p(mi)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = yr(), u !== e ? l = u : (s = l, l = e);
        } else
          s = l, l = e;
      }
      w = r, r = Mh(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function yr() {
    var r, f, t, l, o, h, n, u, g, d;
    if (r = s, f = z(), f !== e) {
      for (t = [], l = s, o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (c.charCodeAt(s) === 61 ? (h = ls, s++) : (h = e, p(As)), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
      } else
        s = l, l = e;
      if (l === e) {
        for (l = s, o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.substr(s, 2) === as ? (h = as, s += 2) : (h = e, p(Ei)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e) {
          for (l = s, o = [], h = a(); h !== e; )
            o.push(h), h = a();
          if (c.charCodeAt(s) === 60 ? (h = Vs, s++) : (h = e, p(lr)), h !== e) {
            for (n = [], u = a(); u !== e; )
              n.push(u), u = a();
            u = z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
          } else
            s = l, l = e;
          if (l === e) {
            for (l = s, o = [], h = a(); h !== e; )
              o.push(h), h = a();
            if (c.charCodeAt(s) === 62 ? (h = Ws, s++) : (h = e, p(ar)), h !== e) {
              for (n = [], u = a(); u !== e; )
                n.push(u), u = a();
              u = z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
            } else
              s = l, l = e;
            if (l === e) {
              for (l = s, o = [], h = a(); h !== e; )
                o.push(h), h = a();
              if (c.substr(s, 2) === fs ? (h = fs, s += 2) : (h = e, p(yi)), h !== e) {
                for (n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                u = z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
              } else
                s = l, l = e;
              if (l === e) {
                for (l = s, o = [], h = a(); h !== e; )
                  o.push(h), h = a();
                if (c.substr(s, 2) === os ? (h = os, s += 2) : (h = e, p(Pi)), h !== e) {
                  for (n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  u = z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
                } else
                  s = l, l = e;
                if (l === e) {
                  for (l = s, o = [], h = a(); h !== e; )
                    o.push(h), h = a();
                  if (c.substr(s, 2).toLowerCase() === cs ? (h = c.substr(s, 2), s += 2) : (h = e, p(Cs)), h !== e) {
                    for (n = [], u = a(); u !== e; )
                      n.push(u), u = a();
                    u = xe(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
                  } else
                    s = l, l = e;
                  if (l === e) {
                    for (l = s, o = [], h = a(); h !== e; )
                      o.push(h), h = a();
                    if (c.substr(s, 3).toLowerCase() === Qs ? (h = c.substr(s, 3), s += 3) : (h = e, p(fr)), h !== e) {
                      for (n = [], u = a(); u !== e; )
                        n.push(u), u = a();
                      if (c.substr(s, 2).toLowerCase() === cs ? (u = c.substr(s, 2), s += 2) : (u = e, p(Cs)), u !== e) {
                        for (g = [], d = a(); d !== e; )
                          g.push(d), d = a();
                        d = xe(), d !== e ? (o = [o, h, n, u, g, d], l = o) : (s = l, l = e);
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
        for (t.push(l), l = s, o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.charCodeAt(s) === 61 ? (h = ls, s++) : (h = e, p(As)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e) {
          for (l = s, o = [], h = a(); h !== e; )
            o.push(h), h = a();
          if (c.substr(s, 2) === as ? (h = as, s += 2) : (h = e, p(Ei)), h !== e) {
            for (n = [], u = a(); u !== e; )
              n.push(u), u = a();
            u = z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
          } else
            s = l, l = e;
          if (l === e) {
            for (l = s, o = [], h = a(); h !== e; )
              o.push(h), h = a();
            if (c.charCodeAt(s) === 60 ? (h = Vs, s++) : (h = e, p(lr)), h !== e) {
              for (n = [], u = a(); u !== e; )
                n.push(u), u = a();
              u = z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
            } else
              s = l, l = e;
            if (l === e) {
              for (l = s, o = [], h = a(); h !== e; )
                o.push(h), h = a();
              if (c.charCodeAt(s) === 62 ? (h = Ws, s++) : (h = e, p(ar)), h !== e) {
                for (n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                u = z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
              } else
                s = l, l = e;
              if (l === e) {
                for (l = s, o = [], h = a(); h !== e; )
                  o.push(h), h = a();
                if (c.substr(s, 2) === fs ? (h = fs, s += 2) : (h = e, p(yi)), h !== e) {
                  for (n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  u = z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
                } else
                  s = l, l = e;
                if (l === e) {
                  for (l = s, o = [], h = a(); h !== e; )
                    o.push(h), h = a();
                  if (c.substr(s, 2) === os ? (h = os, s += 2) : (h = e, p(Pi)), h !== e) {
                    for (n = [], u = a(); u !== e; )
                      n.push(u), u = a();
                    u = z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
                  } else
                    s = l, l = e;
                  if (l === e) {
                    for (l = s, o = [], h = a(); h !== e; )
                      o.push(h), h = a();
                    if (c.substr(s, 2).toLowerCase() === cs ? (h = c.substr(s, 2), s += 2) : (h = e, p(Cs)), h !== e) {
                      for (n = [], u = a(); u !== e; )
                        n.push(u), u = a();
                      u = xe(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
                    } else
                      s = l, l = e;
                    if (l === e) {
                      for (l = s, o = [], h = a(); h !== e; )
                        o.push(h), h = a();
                      if (c.substr(s, 3).toLowerCase() === Qs ? (h = c.substr(s, 3), s += 3) : (h = e, p(fr)), h !== e) {
                        for (n = [], u = a(); u !== e; )
                          n.push(u), u = a();
                        if (c.substr(s, 2).toLowerCase() === cs ? (u = c.substr(s, 2), s += 2) : (u = e, p(Cs)), u !== e) {
                          for (g = [], d = a(); d !== e; )
                            g.push(d), d = a();
                          d = xe(), d !== e ? (o = [o, h, n, u, g, d], l = o) : (s = l, l = e);
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
      w = r, r = Xh(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function z() {
    var r, f, t, l, o, h, n, u, g, d, $;
    if (r = s, f = Ve(), f !== e) {
      for (t = [], l = s, o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (c.charCodeAt(s) === 43 ? (h = $e, s++) : (h = e, p(Ae)), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Ve(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
      } else
        s = l, l = e;
      if (l === e) {
        for (l = s, o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.charCodeAt(s) === 45 ? (h = ie, s++) : (h = e, p(te)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Ve(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e)
          if (l = s, o = Ir(), o === e && (o = Or()), o !== e) {
            for (h = [], n = s, u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (c.charCodeAt(s) === 42 ? (g = ee, s++) : (g = e, p(se)), g !== e) {
              for (d = [], $ = a(); $ !== e; )
                d.push($), $ = a();
              $ = Z(), $ !== e ? (u = [u, g, d, $], n = u) : (s = n, n = e);
            } else
              s = n, n = e;
            if (n === e) {
              for (n = s, u = [], g = a(); g !== e; )
                u.push(g), g = a();
              if (c.charCodeAt(s) === 47 ? (g = oe, s++) : (g = e, p(he)), g !== e) {
                for (d = [], $ = a(); $ !== e; )
                  d.push($), $ = a();
                $ = Z(), $ !== e ? (u = [u, g, d, $], n = u) : (s = n, n = e);
              } else
                s = n, n = e;
            }
            for (; n !== e; ) {
              for (h.push(n), n = s, u = [], g = a(); g !== e; )
                u.push(g), g = a();
              if (c.charCodeAt(s) === 42 ? (g = ee, s++) : (g = e, p(se)), g !== e) {
                for (d = [], $ = a(); $ !== e; )
                  d.push($), $ = a();
                $ = Z(), $ !== e ? (u = [u, g, d, $], n = u) : (s = n, n = e);
              } else
                s = n, n = e;
              if (n === e) {
                for (n = s, u = [], g = a(); g !== e; )
                  u.push(g), g = a();
                if (c.charCodeAt(s) === 47 ? (g = oe, s++) : (g = e, p(he)), g !== e) {
                  for (d = [], $ = a(); $ !== e; )
                    d.push($), $ = a();
                  $ = Z(), $ !== e ? (u = [u, g, d, $], n = u) : (s = n, n = e);
                } else
                  s = n, n = e;
              }
            }
            o = [o, h], l = o;
          } else
            s = l, l = e;
      }
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.charCodeAt(s) === 43 ? (h = $e, s++) : (h = e, p(Ae)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Ve(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e) {
          for (l = s, o = [], h = a(); h !== e; )
            o.push(h), h = a();
          if (c.charCodeAt(s) === 45 ? (h = ie, s++) : (h = e, p(te)), h !== e) {
            for (n = [], u = a(); u !== e; )
              n.push(u), u = a();
            u = Ve(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
          } else
            s = l, l = e;
          if (l === e)
            if (l = s, o = Ir(), o === e && (o = Or()), o !== e) {
              for (h = [], n = s, u = [], g = a(); g !== e; )
                u.push(g), g = a();
              if (c.charCodeAt(s) === 42 ? (g = ee, s++) : (g = e, p(se)), g !== e) {
                for (d = [], $ = a(); $ !== e; )
                  d.push($), $ = a();
                $ = Z(), $ !== e ? (u = [u, g, d, $], n = u) : (s = n, n = e);
              } else
                s = n, n = e;
              if (n === e) {
                for (n = s, u = [], g = a(); g !== e; )
                  u.push(g), g = a();
                if (c.charCodeAt(s) === 47 ? (g = oe, s++) : (g = e, p(he)), g !== e) {
                  for (d = [], $ = a(); $ !== e; )
                    d.push($), $ = a();
                  $ = Z(), $ !== e ? (u = [u, g, d, $], n = u) : (s = n, n = e);
                } else
                  s = n, n = e;
              }
              for (; n !== e; ) {
                for (h.push(n), n = s, u = [], g = a(); g !== e; )
                  u.push(g), g = a();
                if (c.charCodeAt(s) === 42 ? (g = ee, s++) : (g = e, p(se)), g !== e) {
                  for (d = [], $ = a(); $ !== e; )
                    d.push($), $ = a();
                  $ = Z(), $ !== e ? (u = [u, g, d, $], n = u) : (s = n, n = e);
                } else
                  s = n, n = e;
                if (n === e) {
                  for (n = s, u = [], g = a(); g !== e; )
                    u.push(g), g = a();
                  if (c.charCodeAt(s) === 47 ? (g = oe, s++) : (g = e, p(he)), g !== e) {
                    for (d = [], $ = a(); $ !== e; )
                      d.push($), $ = a();
                    $ = Z(), $ !== e ? (u = [u, g, d, $], n = u) : (s = n, n = e);
                  } else
                    s = n, n = e;
                }
              }
              o = [o, h], l = o;
            } else
              s = l, l = e;
        }
      }
      w = r, r = Vh(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Ve() {
    var r, f, t, l, o, h, n, u;
    if (r = s, f = Z(), f !== e) {
      for (t = [], l = s, o = [], h = a(); h !== e; )
        o.push(h), h = a();
      if (c.charCodeAt(s) === 42 ? (h = ee, s++) : (h = e, p(se)), h !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
      } else
        s = l, l = e;
      if (l === e) {
        for (l = s, o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.charCodeAt(s) === 47 ? (h = oe, s++) : (h = e, p(he)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
      }
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (c.charCodeAt(s) === 42 ? (h = ee, s++) : (h = e, p(se)), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e) {
          for (l = s, o = [], h = a(); h !== e; )
            o.push(h), h = a();
          if (c.charCodeAt(s) === 47 ? (h = oe, s++) : (h = e, p(he)), h !== e) {
            for (n = [], u = a(); u !== e; )
              n.push(u), u = a();
            u = Z(), u !== e ? (o = [o, h, n, u], l = o) : (s = l, l = e);
          } else
            s = l, l = e;
        }
      }
      w = r, r = Wh(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Z() {
    var r, f, t, l;
    if (r = s, c.charCodeAt(s) === 33 ? (f = ks, s++) : (f = e, p(rr)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = Ss(), l !== e ? (w = r, r = Qh(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    if (r === e) {
      if (r = s, c.charCodeAt(s) === 43 ? (f = $e, s++) : (f = e, p(Ae)), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        l = Ss(), l !== e ? (w = r, r = Yh(l)) : (s = r, r = e);
      } else
        s = r, r = e;
      if (r === e) {
        if (r = s, c.charCodeAt(s) === 45 ? (f = ie, s++) : (f = e, p(te)), f !== e) {
          for (t = [], l = a(); l !== e; )
            t.push(l), l = a();
          l = Ss(), l !== e ? (w = r, r = zh(l)) : (s = r, r = e);
        } else
          s = r, r = e;
        r === e && (r = Ss());
      }
    }
    return r;
  }
  function Ss() {
    var r, f;
    return r = Pr(), r === e && (r = Tr(), r === e && (r = zp(), r === e && (r = s, f = Lr(), f !== e && (w = r, f = Zh(f)), r = f, r === e && (r = s, f = Rr(), f !== e && (w = r, f = Kh(f)), r = f, r === e && (r = s, f = Sr(), f !== e && (w = r, f = Jh(f)), r = f, r === e && (r = s, f = M(), f !== e && (w = r, f = qh(f)), r = f)))))), r;
  }
  function Pr() {
    var r, f, t, l, o, h;
    if (r = s, c.charCodeAt(s) === 40 ? (f = A, s++) : (f = e, p(y)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = C(), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        c.charCodeAt(s) === 41 ? (h = E, s++) : (h = e, p(P)), h !== e ? (w = r, r = en(l)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Tr() {
    var r, f, t, l, o, h, n, u, g, d, $, _, m, L, R, S;
    if (r = Yp(), r === e) {
      if (r = s, c.substr(s, 3).toLowerCase() === il ? (f = c.substr(s, 3), s += 3) : (f = e, p(uf)), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
          for (o = [], h = a(); h !== e; )
            o.push(h), h = a();
          if (h = C(), h !== e) {
            for (n = [], u = a(); u !== e; )
              n.push(u), u = a();
            c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = sn(h)) : (s = r, r = e);
          } else
            s = r, r = e;
        } else
          s = r, r = e;
      } else
        s = r, r = e;
      if (r === e) {
        if (r = s, c.substr(s, 4).toLowerCase() === tl ? (f = c.substr(s, 4), s += 4) : (f = e, p(pf)), f !== e) {
          for (t = [], l = a(); l !== e; )
            t.push(l), l = a();
          if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
            for (o = [], h = a(); h !== e; )
              o.push(h), h = a();
            if (h = C(), h !== e) {
              for (n = [], u = a(); u !== e; )
                n.push(u), u = a();
              c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = rn(h)) : (s = r, r = e);
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
        if (r === e) {
          if (r = s, c.substr(s, 11).toLowerCase() === ll ? (f = c.substr(s, 11), s += 11) : (f = e, p(gf)), f !== e) {
            for (t = [], l = a(); l !== e; )
              t.push(l), l = a();
            if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
              for (o = [], h = a(); h !== e; )
                o.push(h), h = a();
              if (h = C(), h !== e) {
                for (n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                  for (g = [], d = a(); d !== e; )
                    g.push(d), d = a();
                  if (d = C(), d !== e) {
                    for ($ = [], _ = a(); _ !== e; )
                      $.push(_), _ = a();
                    c.charCodeAt(s) === 41 ? (_ = E, s++) : (_ = e, p(P)), _ !== e ? (w = r, r = tn(h, d)) : (s = r, r = e);
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
            if (r = s, c.substr(s, 8).toLowerCase() === al ? (f = c.substr(s, 8), s += 8) : (f = e, p(df)), f !== e) {
              for (t = [], l = a(); l !== e; )
                t.push(l), l = a();
              if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                for (o = [], h = a(); h !== e; )
                  o.push(h), h = a();
                if (h = C(), h !== e) {
                  for (n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = ln(h)) : (s = r, r = e);
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
            } else
              s = r, r = e;
            if (r === e) {
              if (r = s, c.substr(s, 5).toLowerCase() === fl ? (f = c.substr(s, 5), s += 5) : (f = e, p(wf)), f !== e) {
                for (t = [], l = a(); l !== e; )
                  t.push(l), l = a();
                if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                  for (o = [], h = a(); h !== e; )
                    o.push(h), h = a();
                  if (h = M(), h !== e) {
                    for (n = [], u = a(); u !== e; )
                      n.push(u), u = a();
                    c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = an(h)) : (s = r, r = e);
                  } else
                    s = r, r = e;
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
              if (r === e) {
                if (r = s, c.substr(s, 3).toLowerCase() === ol ? (f = c.substr(s, 3), s += 3) : (f = e, p($f)), f !== e) {
                  for (t = [], l = a(); l !== e; )
                    t.push(l), l = a();
                  if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                    for (o = [], h = a(); h !== e; )
                      o.push(h), h = a();
                    if (h = C(), h !== e) {
                      for (n = [], u = a(); u !== e; )
                        n.push(u), u = a();
                      c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = fn(h)) : (s = r, r = e);
                    } else
                      s = r, r = e;
                  } else
                    s = r, r = e;
                } else
                  s = r, r = e;
                if (r === e) {
                  if (r = s, c.substr(s, 3).toLowerCase() === cl ? (f = c.substr(s, 3), s += 3) : (f = e, p(vf)), f !== e) {
                    for (t = [], l = a(); l !== e; )
                      t.push(l), l = a();
                    if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                      for (o = [], h = a(); h !== e; )
                        o.push(h), h = a();
                      if (h = C(), h !== e) {
                        for (n = [], u = a(); u !== e; )
                          n.push(u), u = a();
                        c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = on(h)) : (s = r, r = e);
                      } else
                        s = r, r = e;
                    } else
                      s = r, r = e;
                  } else
                    s = r, r = e;
                  if (r === e) {
                    if (r = s, c.substr(s, 5).toLowerCase() === hl ? (f = c.substr(s, 5), s += 5) : (f = e, p(bf)), f !== e) {
                      for (t = [], l = a(); l !== e; )
                        t.push(l), l = a();
                      if (l = s, c.charCodeAt(s) === 40 ? (o = A, s++) : (o = e, p(y)), o !== e) {
                        for (h = [], n = a(); n !== e; )
                          h.push(n), n = a();
                        if (n = C(), n !== e) {
                          for (u = [], g = a(); g !== e; )
                            u.push(g), g = a();
                          c.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e ? (o = [o, h, n, u, g], l = o) : (s = l, l = e);
                        } else
                          s = l, l = e;
                      } else
                        s = l, l = e;
                      l === e && (l = me()), l !== e ? (w = r, r = cn(l)) : (s = r, r = e);
                    } else
                      s = r, r = e;
                    if (r === e) {
                      if (r = s, c.substr(s, 4).toLowerCase() === nl ? (f = c.substr(s, 4), s += 4) : (f = e, p(_f)), f !== e) {
                        for (t = [], l = a(); l !== e; )
                          t.push(l), l = a();
                        l = me(), l !== e ? (w = r, r = hn()) : (s = r, r = e);
                      } else
                        s = r, r = e;
                      if (r === e) {
                        if (r = s, c.substr(s, 3).toLowerCase() === ul ? (f = c.substr(s, 3), s += 3) : (f = e, p(Af)), f !== e) {
                          for (t = [], l = a(); l !== e; )
                            t.push(l), l = a();
                          if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                            for (o = [], h = a(); h !== e; )
                              o.push(h), h = a();
                            if (h = C(), h !== e) {
                              for (n = [], u = a(); u !== e; )
                                n.push(u), u = a();
                              c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = nn(h)) : (s = r, r = e);
                            } else
                              s = r, r = e;
                          } else
                            s = r, r = e;
                        } else
                          s = r, r = e;
                        if (r === e) {
                          if (r = s, c.substr(s, 4).toLowerCase() === pl ? (f = c.substr(s, 4), s += 4) : (f = e, p(Cf)), f !== e) {
                            for (t = [], l = a(); l !== e; )
                              t.push(l), l = a();
                            if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                              for (o = [], h = a(); h !== e; )
                                o.push(h), h = a();
                              if (h = C(), h !== e) {
                                for (n = [], u = a(); u !== e; )
                                  n.push(u), u = a();
                                c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = un(h)) : (s = r, r = e);
                              } else
                                s = r, r = e;
                            } else
                              s = r, r = e;
                          } else
                            s = r, r = e;
                          if (r === e) {
                            if (r = s, c.substr(s, 5).toLowerCase() === gl ? (f = c.substr(s, 5), s += 5) : (f = e, p(mf)), f !== e) {
                              for (t = [], l = a(); l !== e; )
                                t.push(l), l = a();
                              if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                for (o = [], h = a(); h !== e; )
                                  o.push(h), h = a();
                                if (h = C(), h !== e) {
                                  for (n = [], u = a(); u !== e; )
                                    n.push(u), u = a();
                                  c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = pn(h)) : (s = r, r = e);
                                } else
                                  s = r, r = e;
                              } else
                                s = r, r = e;
                            } else
                              s = r, r = e;
                            if (r === e) {
                              if (r = s, c.substr(s, 5).toLowerCase() === dl ? (f = c.substr(s, 5), s += 5) : (f = e, p(Ef)), f !== e) {
                                for (t = [], l = a(); l !== e; )
                                  t.push(l), l = a();
                                if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                  for (o = [], h = a(); h !== e; )
                                    o.push(h), h = a();
                                  if (h = C(), h !== e) {
                                    for (n = [], u = a(); u !== e; )
                                      n.push(u), u = a();
                                    c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = gn(h)) : (s = r, r = e);
                                  } else
                                    s = r, r = e;
                                } else
                                  s = r, r = e;
                              } else
                                s = r, r = e;
                              if (r === e) {
                                if (r = s, c.substr(s, 6).toLowerCase() === wl ? (f = c.substr(s, 6), s += 6) : (f = e, p(yf)), f !== e) {
                                  for (t = [], l = a(); l !== e; )
                                    t.push(l), l = a();
                                  l = xe(), l !== e ? (w = r, r = dn(l)) : (s = r, r = e);
                                } else
                                  s = r, r = e;
                                if (r === e && (r = Xp(), r === e)) {
                                  if (r = s, c.substr(s, 6).toLowerCase() === $l ? (f = c.substr(s, 6), s += 6) : (f = e, p(Pf)), f !== e) {
                                    for (t = [], l = a(); l !== e; )
                                      t.push(l), l = a();
                                    if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                      for (o = [], h = a(); h !== e; )
                                        o.push(h), h = a();
                                      if (h = C(), h !== e) {
                                        for (n = [], u = a(); u !== e; )
                                          n.push(u), u = a();
                                        c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = wn(h)) : (s = r, r = e);
                                      } else
                                        s = r, r = e;
                                    } else
                                      s = r, r = e;
                                  } else
                                    s = r, r = e;
                                  if (r === e && (r = Vp(), r === e)) {
                                    if (r = s, c.substr(s, 5).toLowerCase() === vl ? (f = c.substr(s, 5), s += 5) : (f = e, p(Tf)), f !== e) {
                                      for (t = [], l = a(); l !== e; )
                                        t.push(l), l = a();
                                      if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                        for (o = [], h = a(); h !== e; )
                                          o.push(h), h = a();
                                        if (h = C(), h !== e) {
                                          for (n = [], u = a(); u !== e; )
                                            n.push(u), u = a();
                                          c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = $n(h)) : (s = r, r = e);
                                        } else
                                          s = r, r = e;
                                      } else
                                        s = r, r = e;
                                    } else
                                      s = r, r = e;
                                    if (r === e) {
                                      if (r = s, c.substr(s, 5).toLowerCase() === bl ? (f = c.substr(s, 5), s += 5) : (f = e, p(Lf)), f !== e) {
                                        for (t = [], l = a(); l !== e; )
                                          t.push(l), l = a();
                                        if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                          for (o = [], h = a(); h !== e; )
                                            o.push(h), h = a();
                                          if (h = C(), h !== e) {
                                            for (n = [], u = a(); u !== e; )
                                              n.push(u), u = a();
                                            c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = vn(h)) : (s = r, r = e);
                                          } else
                                            s = r, r = e;
                                        } else
                                          s = r, r = e;
                                      } else
                                        s = r, r = e;
                                      if (r === e) {
                                        if (r = s, c.substr(s, 14).toLowerCase() === _l ? (f = c.substr(s, 14), s += 14) : (f = e, p(Rf)), f !== e) {
                                          for (t = [], l = a(); l !== e; )
                                            t.push(l), l = a();
                                          if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                            for (o = [], h = a(); h !== e; )
                                              o.push(h), h = a();
                                            if (h = C(), h !== e) {
                                              for (n = [], u = a(); u !== e; )
                                                n.push(u), u = a();
                                              c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = bn(h)) : (s = r, r = e);
                                            } else
                                              s = r, r = e;
                                          } else
                                            s = r, r = e;
                                        } else
                                          s = r, r = e;
                                        if (r === e) {
                                          if (r = s, c.substr(s, 8).toLowerCase() === Al ? (f = c.substr(s, 8), s += 8) : (f = e, p(If)), f !== e) {
                                            for (t = [], l = a(); l !== e; )
                                              t.push(l), l = a();
                                            if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                              for (o = [], h = a(); h !== e; )
                                                o.push(h), h = a();
                                              if (h = C(), h !== e) {
                                                for (n = [], u = a(); u !== e; )
                                                  n.push(u), u = a();
                                                if (c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                  for (g = [], d = a(); d !== e; )
                                                    g.push(d), d = a();
                                                  if (d = C(), d !== e) {
                                                    for ($ = [], _ = a(); _ !== e; )
                                                      $.push(_), _ = a();
                                                    c.charCodeAt(s) === 41 ? (_ = E, s++) : (_ = e, p(P)), _ !== e ? (w = r, r = _n(h, d)) : (s = r, r = e);
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
                                            if (r = s, c.substr(s, 9).toLowerCase() === Cl ? (f = c.substr(s, 9), s += 9) : (f = e, p(Of)), f !== e) {
                                              for (t = [], l = a(); l !== e; )
                                                t.push(l), l = a();
                                              if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                for (o = [], h = a(); h !== e; )
                                                  o.push(h), h = a();
                                                if (h = C(), h !== e) {
                                                  for (n = [], u = a(); u !== e; )
                                                    n.push(u), u = a();
                                                  if (c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                    for (g = [], d = a(); d !== e; )
                                                      g.push(d), d = a();
                                                    if (d = C(), d !== e) {
                                                      for ($ = [], _ = a(); _ !== e; )
                                                        $.push(_), _ = a();
                                                      c.charCodeAt(s) === 41 ? (_ = E, s++) : (_ = e, p(P)), _ !== e ? (w = r, r = An(h, d)) : (s = r, r = e);
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
                                              if (r = s, c.substr(s, 9).toLowerCase() === ml ? (f = c.substr(s, 9), s += 9) : (f = e, p(Sf)), f !== e) {
                                                for (t = [], l = a(); l !== e; )
                                                  t.push(l), l = a();
                                                if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                  for (o = [], h = a(); h !== e; )
                                                    o.push(h), h = a();
                                                  if (h = C(), h !== e) {
                                                    for (n = [], u = a(); u !== e; )
                                                      n.push(u), u = a();
                                                    if (c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                      for (g = [], d = a(); d !== e; )
                                                        g.push(d), d = a();
                                                      if (d = C(), d !== e) {
                                                        for ($ = [], _ = a(); _ !== e; )
                                                          $.push(_), _ = a();
                                                        c.charCodeAt(s) === 41 ? (_ = E, s++) : (_ = e, p(P)), _ !== e ? (w = r, r = Cn(h, d)) : (s = r, r = e);
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
                                                if (r = s, c.substr(s, 7).toLowerCase() === El ? (f = c.substr(s, 7), s += 7) : (f = e, p(Nf)), f !== e) {
                                                  for (t = [], l = a(); l !== e; )
                                                    t.push(l), l = a();
                                                  if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                    for (o = [], h = a(); h !== e; )
                                                      o.push(h), h = a();
                                                    if (h = C(), h !== e) {
                                                      for (n = [], u = a(); u !== e; )
                                                        n.push(u), u = a();
                                                      if (c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                        for (g = [], d = a(); d !== e; )
                                                          g.push(d), d = a();
                                                        if (d = C(), d !== e) {
                                                          for ($ = [], _ = a(); _ !== e; )
                                                            $.push(_), _ = a();
                                                          c.charCodeAt(s) === 41 ? (_ = E, s++) : (_ = e, p(P)), _ !== e ? (w = r, r = mn(h, d)) : (s = r, r = e);
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
                                                  if (r = s, c.substr(s, 8).toLowerCase() === yl ? (f = c.substr(s, 8), s += 8) : (f = e, p(xf)), f !== e) {
                                                    for (t = [], l = a(); l !== e; )
                                                      t.push(l), l = a();
                                                    if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                      for (o = [], h = a(); h !== e; )
                                                        o.push(h), h = a();
                                                      if (h = C(), h !== e) {
                                                        for (n = [], u = a(); u !== e; )
                                                          n.push(u), u = a();
                                                        if (c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                          for (g = [], d = a(); d !== e; )
                                                            g.push(d), d = a();
                                                          if (d = C(), d !== e) {
                                                            for ($ = [], _ = a(); _ !== e; )
                                                              $.push(_), _ = a();
                                                            c.charCodeAt(s) === 41 ? (_ = E, s++) : (_ = e, p(P)), _ !== e ? (w = r, r = En(h, d)) : (s = r, r = e);
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
                                                    if (r = s, c.substr(s, 4).toLowerCase() === Pl ? (f = c.substr(s, 4), s += 4) : (f = e, p(Ff)), f !== e) {
                                                      for (t = [], l = a(); l !== e; )
                                                        t.push(l), l = a();
                                                      if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                        for (o = [], h = a(); h !== e; )
                                                          o.push(h), h = a();
                                                        if (h = C(), h !== e) {
                                                          for (n = [], u = a(); u !== e; )
                                                            n.push(u), u = a();
                                                          c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = yn(h)) : (s = r, r = e);
                                                        } else
                                                          s = r, r = e;
                                                      } else
                                                        s = r, r = e;
                                                    } else
                                                      s = r, r = e;
                                                    if (r === e) {
                                                      if (r = s, c.substr(s, 5).toLowerCase() === Tl ? (f = c.substr(s, 5), s += 5) : (f = e, p(Df)), f !== e) {
                                                        for (t = [], l = a(); l !== e; )
                                                          t.push(l), l = a();
                                                        if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                          for (o = [], h = a(); h !== e; )
                                                            o.push(h), h = a();
                                                          if (h = C(), h !== e) {
                                                            for (n = [], u = a(); u !== e; )
                                                              n.push(u), u = a();
                                                            c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = Pn(h)) : (s = r, r = e);
                                                          } else
                                                            s = r, r = e;
                                                        } else
                                                          s = r, r = e;
                                                      } else
                                                        s = r, r = e;
                                                      if (r === e) {
                                                        if (r = s, c.substr(s, 3).toLowerCase() === Ll ? (f = c.substr(s, 3), s += 3) : (f = e, p(Gf)), f !== e) {
                                                          for (t = [], l = a(); l !== e; )
                                                            t.push(l), l = a();
                                                          if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                            for (o = [], h = a(); h !== e; )
                                                              o.push(h), h = a();
                                                            if (h = C(), h !== e) {
                                                              for (n = [], u = a(); u !== e; )
                                                                n.push(u), u = a();
                                                              c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = Tn(h)) : (s = r, r = e);
                                                            } else
                                                              s = r, r = e;
                                                          } else
                                                            s = r, r = e;
                                                        } else
                                                          s = r, r = e;
                                                        if (r === e) {
                                                          if (r = s, c.substr(s, 5).toLowerCase() === Rl ? (f = c.substr(s, 5), s += 5) : (f = e, p(Uf)), f !== e) {
                                                            for (t = [], l = a(); l !== e; )
                                                              t.push(l), l = a();
                                                            if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                              for (o = [], h = a(); h !== e; )
                                                                o.push(h), h = a();
                                                              if (h = C(), h !== e) {
                                                                for (n = [], u = a(); u !== e; )
                                                                  n.push(u), u = a();
                                                                c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = Ln(h)) : (s = r, r = e);
                                                              } else
                                                                s = r, r = e;
                                                            } else
                                                              s = r, r = e;
                                                          } else
                                                            s = r, r = e;
                                                          if (r === e) {
                                                            if (r = s, c.substr(s, 7).toLowerCase() === Il ? (f = c.substr(s, 7), s += 7) : (f = e, p(jf)), f !== e) {
                                                              for (t = [], l = a(); l !== e; )
                                                                t.push(l), l = a();
                                                              if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                for (o = [], h = a(); h !== e; )
                                                                  o.push(h), h = a();
                                                                if (h = C(), h !== e) {
                                                                  for (n = [], u = a(); u !== e; )
                                                                    n.push(u), u = a();
                                                                  c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = Rn(h)) : (s = r, r = e);
                                                                } else
                                                                  s = r, r = e;
                                                              } else
                                                                s = r, r = e;
                                                            } else
                                                              s = r, r = e;
                                                            if (r === e) {
                                                              if (r = s, c.substr(s, 7).toLowerCase() === Ol ? (f = c.substr(s, 7), s += 7) : (f = e, p(Hf)), f !== e) {
                                                                for (t = [], l = a(); l !== e; )
                                                                  t.push(l), l = a();
                                                                if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                  for (o = [], h = a(); h !== e; )
                                                                    o.push(h), h = a();
                                                                  if (h = C(), h !== e) {
                                                                    for (n = [], u = a(); u !== e; )
                                                                      n.push(u), u = a();
                                                                    c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = In(h)) : (s = r, r = e);
                                                                  } else
                                                                    s = r, r = e;
                                                                } else
                                                                  s = r, r = e;
                                                              } else
                                                                s = r, r = e;
                                                              if (r === e) {
                                                                if (r = s, c.substr(s, 8).toLowerCase() === Sl ? (f = c.substr(s, 8), s += 8) : (f = e, p(Bf)), f !== e) {
                                                                  for (t = [], l = a(); l !== e; )
                                                                    t.push(l), l = a();
                                                                  if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                    for (o = [], h = a(); h !== e; )
                                                                      o.push(h), h = a();
                                                                    if (h = C(), h !== e) {
                                                                      for (n = [], u = a(); u !== e; )
                                                                        n.push(u), u = a();
                                                                      c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = On(h)) : (s = r, r = e);
                                                                    } else
                                                                      s = r, r = e;
                                                                  } else
                                                                    s = r, r = e;
                                                                } else
                                                                  s = r, r = e;
                                                                if (r === e) {
                                                                  if (r = s, c.substr(s, 2).toLowerCase() === Nl ? (f = c.substr(s, 2), s += 2) : (f = e, p(kf)), f !== e) {
                                                                    for (t = [], l = a(); l !== e; )
                                                                      t.push(l), l = a();
                                                                    if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                      for (o = [], h = a(); h !== e; )
                                                                        o.push(h), h = a();
                                                                      if (h = C(), h !== e) {
                                                                        for (n = [], u = a(); u !== e; )
                                                                          n.push(u), u = a();
                                                                        c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = Sn(h)) : (s = r, r = e);
                                                                      } else
                                                                        s = r, r = e;
                                                                    } else
                                                                      s = r, r = e;
                                                                  } else
                                                                    s = r, r = e;
                                                                  if (r === e) {
                                                                    if (r = s, c.substr(s, 3).toLowerCase() === xl ? (f = c.substr(s, 3), s += 3) : (f = e, p(Mf)), f !== e) {
                                                                      for (t = [], l = a(); l !== e; )
                                                                        t.push(l), l = a();
                                                                      l = me(), l !== e ? (w = r, r = Nn()) : (s = r, r = e);
                                                                    } else
                                                                      s = r, r = e;
                                                                    if (r === e) {
                                                                      if (r = s, c.substr(s, 4).toLowerCase() === Fl ? (f = c.substr(s, 4), s += 4) : (f = e, p(Xf)), f !== e) {
                                                                        for (t = [], l = a(); l !== e; )
                                                                          t.push(l), l = a();
                                                                        l = me(), l !== e ? (w = r, r = xn()) : (s = r, r = e);
                                                                      } else
                                                                        s = r, r = e;
                                                                      if (r === e) {
                                                                        if (r = s, c.substr(s, 7).toLowerCase() === Dl ? (f = c.substr(s, 7), s += 7) : (f = e, p(Vf)), f !== e) {
                                                                          for (t = [], l = a(); l !== e; )
                                                                            t.push(l), l = a();
                                                                          l = me(), l !== e ? (w = r, r = Fn()) : (s = r, r = e);
                                                                        } else
                                                                          s = r, r = e;
                                                                        if (r === e) {
                                                                          if (r = s, c.substr(s, 3).toLowerCase() === Gl ? (f = c.substr(s, 3), s += 3) : (f = e, p(Wf)), f !== e) {
                                                                            for (t = [], l = a(); l !== e; )
                                                                              t.push(l), l = a();
                                                                            if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                              for (o = [], h = a(); h !== e; )
                                                                                o.push(h), h = a();
                                                                              if (h = C(), h !== e) {
                                                                                for (n = [], u = a(); u !== e; )
                                                                                  n.push(u), u = a();
                                                                                c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = Dn(h)) : (s = r, r = e);
                                                                              } else
                                                                                s = r, r = e;
                                                                            } else
                                                                              s = r, r = e;
                                                                          } else
                                                                            s = r, r = e;
                                                                          if (r === e) {
                                                                            if (r = s, c.substr(s, 4).toLowerCase() === Ul ? (f = c.substr(s, 4), s += 4) : (f = e, p(Qf)), f !== e) {
                                                                              for (t = [], l = a(); l !== e; )
                                                                                t.push(l), l = a();
                                                                              if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                                for (o = [], h = a(); h !== e; )
                                                                                  o.push(h), h = a();
                                                                                if (h = C(), h !== e) {
                                                                                  for (n = [], u = a(); u !== e; )
                                                                                    n.push(u), u = a();
                                                                                  c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = Gn(h)) : (s = r, r = e);
                                                                                } else
                                                                                  s = r, r = e;
                                                                              } else
                                                                                s = r, r = e;
                                                                            } else
                                                                              s = r, r = e;
                                                                            if (r === e) {
                                                                              if (r = s, c.substr(s, 6).toLowerCase() === jl ? (f = c.substr(s, 6), s += 6) : (f = e, p(Yf)), f !== e) {
                                                                                for (t = [], l = a(); l !== e; )
                                                                                  t.push(l), l = a();
                                                                                if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                                  for (o = [], h = a(); h !== e; )
                                                                                    o.push(h), h = a();
                                                                                  if (h = C(), h !== e) {
                                                                                    for (n = [], u = a(); u !== e; )
                                                                                      n.push(u), u = a();
                                                                                    c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = Un(h)) : (s = r, r = e);
                                                                                  } else
                                                                                    s = r, r = e;
                                                                                } else
                                                                                  s = r, r = e;
                                                                              } else
                                                                                s = r, r = e;
                                                                              if (r === e) {
                                                                                if (r = s, c.substr(s, 6).toLowerCase() === Hl ? (f = c.substr(s, 6), s += 6) : (f = e, p(zf)), f !== e) {
                                                                                  for (t = [], l = a(); l !== e; )
                                                                                    t.push(l), l = a();
                                                                                  if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                                    for (o = [], h = a(); h !== e; )
                                                                                      o.push(h), h = a();
                                                                                    if (h = C(), h !== e) {
                                                                                      for (n = [], u = a(); u !== e; )
                                                                                        n.push(u), u = a();
                                                                                      c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = jn(h)) : (s = r, r = e);
                                                                                    } else
                                                                                      s = r, r = e;
                                                                                  } else
                                                                                    s = r, r = e;
                                                                                } else
                                                                                  s = r, r = e;
                                                                                if (r === e) {
                                                                                  if (r = s, c.substr(s, 6).toLowerCase() === Bl ? (f = c.substr(s, 6), s += 6) : (f = e, p(Zf)), f !== e) {
                                                                                    for (t = [], l = a(); l !== e; )
                                                                                      t.push(l), l = a();
                                                                                    if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                                      for (o = [], h = a(); h !== e; )
                                                                                        o.push(h), h = a();
                                                                                      if (h = C(), h !== e) {
                                                                                        for (n = [], u = a(); u !== e; )
                                                                                          n.push(u), u = a();
                                                                                        c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = Hn(h)) : (s = r, r = e);
                                                                                      } else
                                                                                        s = r, r = e;
                                                                                    } else
                                                                                      s = r, r = e;
                                                                                  } else
                                                                                    s = r, r = e;
                                                                                  if (r === e) {
                                                                                    if (r = s, c.substr(s, 8).toLowerCase() === kl ? (f = c.substr(s, 8), s += 8) : (f = e, p(Kf)), f !== e) {
                                                                                      for (t = [], l = a(); l !== e; )
                                                                                        t.push(l), l = a();
                                                                                      l = xe(), l !== e ? (w = r, r = Bn(l)) : (s = r, r = e);
                                                                                    } else
                                                                                      s = r, r = e;
                                                                                    if (r === e) {
                                                                                      if (r = s, c.substr(s, 2).toLowerCase() === Ml ? (f = c.substr(s, 2), s += 2) : (f = e, p(Jf)), f !== e) {
                                                                                        for (t = [], l = a(); l !== e; )
                                                                                          t.push(l), l = a();
                                                                                        if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                                          for (o = [], h = a(); h !== e; )
                                                                                            o.push(h), h = a();
                                                                                          if (h = C(), h !== e) {
                                                                                            for (n = [], u = a(); u !== e; )
                                                                                              n.push(u), u = a();
                                                                                            if (c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                                                              for (g = [], d = a(); d !== e; )
                                                                                                g.push(d), d = a();
                                                                                              if (d = C(), d !== e) {
                                                                                                for ($ = [], _ = a(); _ !== e; )
                                                                                                  $.push(_), _ = a();
                                                                                                if (c.charCodeAt(s) === 44 ? (_ = D, s++) : (_ = e, p(G)), _ !== e) {
                                                                                                  for (m = [], L = a(); L !== e; )
                                                                                                    m.push(L), L = a();
                                                                                                  if (L = C(), L !== e) {
                                                                                                    for (R = [], S = a(); S !== e; )
                                                                                                      R.push(S), S = a();
                                                                                                    c.charCodeAt(s) === 41 ? (S = E, s++) : (S = e, p(P)), S !== e ? (w = r, r = kn(h, d, L)) : (s = r, r = e);
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
                                                                                        if (r = s, c.substr(s, 7).toLowerCase() === Xl ? (f = c.substr(s, 7), s += 7) : (f = e, p(qf)), f !== e) {
                                                                                          for (t = [], l = a(); l !== e; )
                                                                                            t.push(l), l = a();
                                                                                          if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                                            for (o = [], h = a(); h !== e; )
                                                                                              o.push(h), h = a();
                                                                                            if (h = C(), h !== e) {
                                                                                              for (n = [], u = a(); u !== e; )
                                                                                                n.push(u), u = a();
                                                                                              if (c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                                                                for (g = [], d = a(); d !== e; )
                                                                                                  g.push(d), d = a();
                                                                                                if (d = C(), d !== e) {
                                                                                                  for ($ = [], _ = a(); _ !== e; )
                                                                                                    $.push(_), _ = a();
                                                                                                  c.charCodeAt(s) === 41 ? (_ = E, s++) : (_ = e, p(P)), _ !== e ? (w = r, r = Mn(h, d)) : (s = r, r = e);
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
                                                                                          if (r = s, c.substr(s, 5).toLowerCase() === Vl ? (f = c.substr(s, 5), s += 5) : (f = e, p(eo)), f !== e) {
                                                                                            for (t = [], l = a(); l !== e; )
                                                                                              t.push(l), l = a();
                                                                                            if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                                              for (o = [], h = a(); h !== e; )
                                                                                                o.push(h), h = a();
                                                                                              if (h = C(), h !== e) {
                                                                                                for (n = [], u = a(); u !== e; )
                                                                                                  n.push(u), u = a();
                                                                                                if (c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                                                                  for (g = [], d = a(); d !== e; )
                                                                                                    g.push(d), d = a();
                                                                                                  if (d = C(), d !== e) {
                                                                                                    for ($ = [], _ = a(); _ !== e; )
                                                                                                      $.push(_), _ = a();
                                                                                                    c.charCodeAt(s) === 41 ? (_ = E, s++) : (_ = e, p(P)), _ !== e ? (w = r, r = Xn(h, d)) : (s = r, r = e);
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
                                                                                            if (r = s, c.substr(s, 8).toLowerCase() === Wl ? (f = c.substr(s, 8), s += 8) : (f = e, p(so)), f !== e) {
                                                                                              for (t = [], l = a(); l !== e; )
                                                                                                t.push(l), l = a();
                                                                                              if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                                                for (o = [], h = a(); h !== e; )
                                                                                                  o.push(h), h = a();
                                                                                                if (h = C(), h !== e) {
                                                                                                  for (n = [], u = a(); u !== e; )
                                                                                                    n.push(u), u = a();
                                                                                                  if (c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                                                                    for (g = [], d = a(); d !== e; )
                                                                                                      g.push(d), d = a();
                                                                                                    if (d = C(), d !== e) {
                                                                                                      for ($ = [], _ = a(); _ !== e; )
                                                                                                        $.push(_), _ = a();
                                                                                                      c.charCodeAt(s) === 41 ? (_ = E, s++) : (_ = e, p(P)), _ !== e ? (w = r, r = Vn(h, d)) : (s = r, r = e);
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
                                                                                              if (r = s, c.substr(s, 5).toLowerCase() === Ql ? (f = c.substr(s, 5), s += 5) : (f = e, p(ro)), f === e && (c.substr(s, 5).toLowerCase() === Yl ? (f = c.substr(s, 5), s += 5) : (f = e, p(io))), f !== e) {
                                                                                                for (t = [], l = a(); l !== e; )
                                                                                                  t.push(l), l = a();
                                                                                                if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                                                  for (o = [], h = a(); h !== e; )
                                                                                                    o.push(h), h = a();
                                                                                                  if (h = C(), h !== e) {
                                                                                                    for (n = [], u = a(); u !== e; )
                                                                                                      n.push(u), u = a();
                                                                                                    c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = Wn(h)) : (s = r, r = e);
                                                                                                  } else
                                                                                                    s = r, r = e;
                                                                                                } else
                                                                                                  s = r, r = e;
                                                                                              } else
                                                                                                s = r, r = e;
                                                                                              if (r === e) {
                                                                                                if (r = s, c.substr(s, 7).toLowerCase() === zl ? (f = c.substr(s, 7), s += 7) : (f = e, p(to)), f !== e) {
                                                                                                  for (t = [], l = a(); l !== e; )
                                                                                                    t.push(l), l = a();
                                                                                                  if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                                                    for (o = [], h = a(); h !== e; )
                                                                                                      o.push(h), h = a();
                                                                                                    if (h = C(), h !== e) {
                                                                                                      for (n = [], u = a(); u !== e; )
                                                                                                        n.push(u), u = a();
                                                                                                      c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = Qn(h)) : (s = r, r = e);
                                                                                                    } else
                                                                                                      s = r, r = e;
                                                                                                  } else
                                                                                                    s = r, r = e;
                                                                                                } else
                                                                                                  s = r, r = e;
                                                                                                if (r === e) {
                                                                                                  if (r = s, c.substr(s, 9).toLowerCase() === Zl ? (f = c.substr(s, 9), s += 9) : (f = e, p(lo)), f !== e) {
                                                                                                    for (t = [], l = a(); l !== e; )
                                                                                                      t.push(l), l = a();
                                                                                                    if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                                                      for (o = [], h = a(); h !== e; )
                                                                                                        o.push(h), h = a();
                                                                                                      if (h = C(), h !== e) {
                                                                                                        for (n = [], u = a(); u !== e; )
                                                                                                          n.push(u), u = a();
                                                                                                        c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = Yn(h)) : (s = r, r = e);
                                                                                                      } else
                                                                                                        s = r, r = e;
                                                                                                    } else
                                                                                                      s = r, r = e;
                                                                                                  } else
                                                                                                    s = r, r = e;
                                                                                                  if (r === e) {
                                                                                                    if (r = s, c.substr(s, 9).toLowerCase() === Kl ? (f = c.substr(s, 9), s += 9) : (f = e, p(ao)), f !== e) {
                                                                                                      for (t = [], l = a(); l !== e; )
                                                                                                        t.push(l), l = a();
                                                                                                      if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                                                                                                        for (o = [], h = a(); h !== e; )
                                                                                                          o.push(h), h = a();
                                                                                                        if (h = C(), h !== e) {
                                                                                                          for (n = [], u = a(); u !== e; )
                                                                                                            n.push(u), u = a();
                                                                                                          c.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (w = r, r = zn(h)) : (s = r, r = e);
                                                                                                        } else
                                                                                                          s = r, r = e;
                                                                                                      } else
                                                                                                        s = r, r = e;
                                                                                                    } else
                                                                                                      s = r, r = e;
                                                                                                    r === e && (r = Mp(), r === e && (r = Wp(), r === e && (r = Qp())));
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
  function Mp() {
    var r, f, t, l, o, h, n, u, g, d, $, _, m, L, R;
    if (r = s, c.substr(s, 5).toLowerCase() === Jl ? (f = c.substr(s, 5), s += 5) : (f = e, p(fo)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (h = C(), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
            for (g = [], d = a(); d !== e; )
              g.push(d), d = a();
            if (d = C(), d !== e) {
              for ($ = [], _ = a(); _ !== e; )
                $.push(_), _ = a();
              if (_ = s, c.charCodeAt(s) === 44 ? (m = D, s++) : (m = e, p(G)), m !== e) {
                for (L = [], R = a(); R !== e; )
                  L.push(R), R = a();
                R = C(), R !== e ? (m = [m, L, R], _ = m) : (s = _, _ = e);
              } else
                s = _, _ = e;
              for (_ === e && (_ = null), m = [], L = a(); L !== e; )
                m.push(L), L = a();
              c.charCodeAt(s) === 41 ? (L = E, s++) : (L = e, p(P)), L !== e ? (w = r, r = Zn(h, d, _)) : (s = r, r = e);
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
  function Xp() {
    var r, f, t, l, o, h, n, u, g, d, $, _, m, L, R;
    if (r = s, c.substr(s, 6).toLowerCase() === ql ? (f = c.substr(s, 6), s += 6) : (f = e, p(oo)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (h = C(), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
            for (g = [], d = a(); d !== e; )
              g.push(d), d = a();
            if (d = C(), d !== e) {
              for ($ = [], _ = a(); _ !== e; )
                $.push(_), _ = a();
              if (_ = s, c.charCodeAt(s) === 44 ? (m = D, s++) : (m = e, p(G)), m !== e) {
                for (L = [], R = a(); R !== e; )
                  L.push(R), R = a();
                R = C(), R !== e ? (m = [m, L, R], _ = m) : (s = _, _ = e);
              } else
                s = _, _ = e;
              for (_ === e && (_ = null), m = [], L = a(); L !== e; )
                m.push(L), L = a();
              c.charCodeAt(s) === 41 ? (L = E, s++) : (L = e, p(P)), L !== e ? (w = r, r = Kn(h, d, _)) : (s = r, r = e);
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
  function Vp() {
    var r, f, t, l, o, h, n, u, g, d, $, _, m, L, R, S, B, ne, Hr;
    if (r = s, c.substr(s, 7).toLowerCase() === ea ? (f = c.substr(s, 7), s += 7) : (f = e, p(co)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        if (h = C(), h !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (c.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
            for (g = [], d = a(); d !== e; )
              g.push(d), d = a();
            if (d = C(), d !== e) {
              for ($ = [], _ = a(); _ !== e; )
                $.push(_), _ = a();
              if (c.charCodeAt(s) === 44 ? (_ = D, s++) : (_ = e, p(G)), _ !== e) {
                for (m = [], L = a(); L !== e; )
                  m.push(L), L = a();
                if (L = C(), L !== e) {
                  for (R = [], S = a(); S !== e; )
                    R.push(S), S = a();
                  if (S = s, c.charCodeAt(s) === 44 ? (B = D, s++) : (B = e, p(G)), B !== e) {
                    for (ne = [], Hr = a(); Hr !== e; )
                      ne.push(Hr), Hr = a();
                    Hr = C(), Hr !== e ? (B = [B, ne, Hr], S = B) : (s = S, S = e);
                  } else
                    s = S, S = e;
                  for (S === e && (S = null), B = [], ne = a(); ne !== e; )
                    B.push(ne), ne = a();
                  c.charCodeAt(s) === 41 ? (ne = E, s++) : (ne = e, p(P)), ne !== e ? (w = r, r = Jn(h, d, L, S)) : (s = r, r = e);
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
  function Wp() {
    var r, f, t, l;
    if (r = s, c.substr(s, 6).toLowerCase() === ei ? (f = c.substr(s, 6), s += 6) : (f = e, p(Ti)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = re(), l !== e ? (w = r, r = qn(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Qp() {
    var r, f, t, l, o, h;
    if (r = s, c.substr(s, 3).toLowerCase() === Qs ? (f = c.substr(s, 3), s += 3) : (f = e, p(fr)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (c.substr(s, 6).toLowerCase() === ei ? (l = c.substr(s, 6), s += 6) : (l = e, p(Ti)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        h = re(), h !== e ? (w = r, r = eu(h)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Yp() {
    var r, f, t, l, o, h, n, u, g, d, $, _, m, L, R, S, B;
    if (r = s, c.substr(s, 5).toLowerCase() === sa ? (f = c.substr(s, 5), s += 5) : (f = e, p(ho)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
        for (o = [], h = a(); h !== e; )
          o.push(h), h = a();
        for (c.substr(s, 8).toLowerCase() === O ? (h = c.substr(s, 8), s += 8) : (h = e, p(ce)), h === e && (h = null), n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (c.charCodeAt(s) === 42 ? (u = ee, s++) : (u = e, p(se)), u === e && (u = C()), u !== e) {
          for (g = [], d = a(); d !== e; )
            g.push(d), d = a();
          if (c.charCodeAt(s) === 41 ? (d = E, s++) : (d = e, p(P)), d !== e) {
            for ($ = [], _ = a(); _ !== e; )
              $.push(_), _ = a();
            w = r, r = su(h, u);
          } else
            s = r, r = e;
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    if (r === e) {
      if (r = s, c.substr(s, 3).toLowerCase() === ra ? (f = c.substr(s, 3), s += 3) : (f = e, p(no)), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
          for (o = [], h = a(); h !== e; )
            o.push(h), h = a();
          for (c.substr(s, 8).toLowerCase() === O ? (h = c.substr(s, 8), s += 8) : (h = e, p(ce)), h === e && (h = null), n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (u = C(), u !== e) {
            for (g = [], d = a(); d !== e; )
              g.push(d), d = a();
            if (c.charCodeAt(s) === 41 ? (d = E, s++) : (d = e, p(P)), d !== e) {
              for ($ = [], _ = a(); _ !== e; )
                $.push(_), _ = a();
              w = r, r = ru(h, u);
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
      } else
        s = r, r = e;
      if (r === e) {
        if (r = s, c.substr(s, 3).toLowerCase() === ia ? (f = c.substr(s, 3), s += 3) : (f = e, p(uo)), f !== e) {
          for (t = [], l = a(); l !== e; )
            t.push(l), l = a();
          if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
            for (o = [], h = a(); h !== e; )
              o.push(h), h = a();
            for (c.substr(s, 8).toLowerCase() === O ? (h = c.substr(s, 8), s += 8) : (h = e, p(ce)), h === e && (h = null), n = [], u = a(); u !== e; )
              n.push(u), u = a();
            if (u = C(), u !== e) {
              for (g = [], d = a(); d !== e; )
                g.push(d), d = a();
              if (c.charCodeAt(s) === 41 ? (d = E, s++) : (d = e, p(P)), d !== e) {
                for ($ = [], _ = a(); _ !== e; )
                  $.push(_), _ = a();
                w = r, r = iu(h, u);
              } else
                s = r, r = e;
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
        if (r === e) {
          if (r = s, c.substr(s, 3).toLowerCase() === ta ? (f = c.substr(s, 3), s += 3) : (f = e, p(po)), f !== e) {
            for (t = [], l = a(); l !== e; )
              t.push(l), l = a();
            if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
              for (o = [], h = a(); h !== e; )
                o.push(h), h = a();
              for (c.substr(s, 8).toLowerCase() === O ? (h = c.substr(s, 8), s += 8) : (h = e, p(ce)), h === e && (h = null), n = [], u = a(); u !== e; )
                n.push(u), u = a();
              if (u = C(), u !== e) {
                for (g = [], d = a(); d !== e; )
                  g.push(d), d = a();
                if (c.charCodeAt(s) === 41 ? (d = E, s++) : (d = e, p(P)), d !== e) {
                  for ($ = [], _ = a(); _ !== e; )
                    $.push(_), _ = a();
                  w = r, r = tu(h, u);
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
            } else
              s = r, r = e;
          } else
            s = r, r = e;
          if (r === e) {
            if (r = s, c.substr(s, 3).toLowerCase() === la ? (f = c.substr(s, 3), s += 3) : (f = e, p(go)), f !== e) {
              for (t = [], l = a(); l !== e; )
                t.push(l), l = a();
              if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                for (o = [], h = a(); h !== e; )
                  o.push(h), h = a();
                for (c.substr(s, 8).toLowerCase() === O ? (h = c.substr(s, 8), s += 8) : (h = e, p(ce)), h === e && (h = null), n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (u = C(), u !== e) {
                  for (g = [], d = a(); d !== e; )
                    g.push(d), d = a();
                  if (c.charCodeAt(s) === 41 ? (d = E, s++) : (d = e, p(P)), d !== e) {
                    for ($ = [], _ = a(); _ !== e; )
                      $.push(_), _ = a();
                    w = r, r = lu(h, u);
                  } else
                    s = r, r = e;
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
            } else
              s = r, r = e;
            if (r === e) {
              if (r = s, c.substr(s, 6).toLowerCase() === aa ? (f = c.substr(s, 6), s += 6) : (f = e, p(wo)), f !== e) {
                for (t = [], l = a(); l !== e; )
                  t.push(l), l = a();
                if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                  for (o = [], h = a(); h !== e; )
                    o.push(h), h = a();
                  for (c.substr(s, 8).toLowerCase() === O ? (h = c.substr(s, 8), s += 8) : (h = e, p(ce)), h === e && (h = null), n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  if (u = C(), u !== e) {
                    for (g = [], d = a(); d !== e; )
                      g.push(d), d = a();
                    if (c.charCodeAt(s) === 41 ? (d = E, s++) : (d = e, p(P)), d !== e) {
                      for ($ = [], _ = a(); _ !== e; )
                        $.push(_), _ = a();
                      w = r, r = au(h, u);
                    } else
                      s = r, r = e;
                  } else
                    s = r, r = e;
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
              if (r === e)
                if (r = s, c.substr(s, 12).toLowerCase() === fa ? (f = c.substr(s, 12), s += 12) : (f = e, p($o)), f !== e) {
                  for (t = [], l = a(); l !== e; )
                    t.push(l), l = a();
                  if (c.charCodeAt(s) === 40 ? (l = A, s++) : (l = e, p(y)), l !== e) {
                    for (o = [], h = a(); h !== e; )
                      o.push(h), h = a();
                    for (c.substr(s, 8).toLowerCase() === O ? (h = c.substr(s, 8), s += 8) : (h = e, p(ce)), h === e && (h = null), n = [], u = a(); u !== e; )
                      n.push(u), u = a();
                    if (u = C(), u !== e) {
                      for (g = s, d = [], $ = a(); $ !== e; )
                        d.push($), $ = a();
                      if (c.charCodeAt(s) === 59 ? ($ = Pe, s++) : ($ = e, p(Le)), $ !== e) {
                        for (_ = [], m = a(); m !== e; )
                          _.push(m), m = a();
                        if (c.substr(s, 9).toLowerCase() === oa ? (m = c.substr(s, 9), s += 9) : (m = e, p(vo)), m !== e) {
                          for (L = [], R = a(); R !== e; )
                            L.push(R), R = a();
                          if (c.charCodeAt(s) === 61 ? (R = ls, s++) : (R = e, p(As)), R !== e) {
                            for (S = [], B = a(); B !== e; )
                              S.push(B), B = a();
                            B = vt(), B !== e ? (d = [d, $, _, m, L, R, S, B], g = d) : (s = g, g = e);
                          } else
                            s = g, g = e;
                        } else
                          s = g, g = e;
                      } else
                        s = g, g = e;
                      for (g === e && (g = null), d = [], $ = a(); $ !== e; )
                        d.push($), $ = a();
                      if (c.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e) {
                        for (_ = [], m = a(); m !== e; )
                          _.push(m), m = a();
                        w = r, r = fu(h, u, g);
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
  function zp() {
    var r, f, t, l;
    if (r = s, f = W(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = ut(), l === e && (l = null), w = r, r = ou(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function Lr() {
    var r, f, t, l, o;
    return r = s, f = vt(), f !== e ? (t = ig(), t === e && (t = s, c.substr(s, 2) === si ? (l = si, s += 2) : (l = e, p(bo)), l !== e ? (o = W(), o !== e ? (l = [l, o], t = l) : (s = t, t = e)) : (s = t, t = e)), t === e && (t = null), w = r, r = cu(f, t)) : (s = r, r = e), r;
  }
  function Rr() {
    var r;
    return r = Zp(), r === e && (r = Ir(), r === e && (r = Or())), r;
  }
  function Zp() {
    var r;
    return r = Dr(), r === e && (r = Fr(), r === e && (r = We())), r;
  }
  function Ir() {
    var r;
    return r = ag(), r === e && (r = lg(), r === e && (r = tg())), r;
  }
  function Or() {
    var r;
    return r = cg(), r === e && (r = og(), r === e && (r = fg())), r;
  }
  function Sr() {
    var r, f;
    return r = s, c.substr(s, 4).toLowerCase() === ca ? (f = c.substr(s, 4), s += 4) : (f = e, p(_o)), f !== e && (w = r, f = hu()), r = f, r === e && (r = s, c.substr(s, 5).toLowerCase() === ha ? (f = c.substr(s, 5), s += 5) : (f = e, p(Ao)), f !== e && (w = r, f = nu()), r = f), r;
  }
  function vt() {
    var r;
    return r = ug(), r === e && (r = pg(), r === e && (r = hg(), r === e && (r = ng()))), r;
  }
  function W() {
    var r, f;
    return r = s, f = Nr(), f !== e && (w = r, f = uu(f)), r = f, r === e && (r = s, f = Kp(), f !== e && (w = r, f = pu(f)), r = f), r;
  }
  function Kp() {
    var r, f;
    return r = s, f = qp(), f !== e && (w = r, f = gu(f)), r = f, r === e && (r = s, f = xr(), f !== e && (w = r, f = du(f)), r = f), r;
  }
  function Jp() {
    var r, f;
    return r = s, f = eg(), f !== e && (w = r, f = wu(f)), r = f, r === e && (r = s, f = dg(), f !== e && (w = r, f = $u()), r = f), r;
  }
  function Nr() {
    var r, f, t, l;
    if (r = s, c.charCodeAt(s) === 60 ? (f = Vs, s++) : (f = e, p(lr)), f !== e) {
      for (t = [], oi.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(Li)); l !== e; )
        t.push(l), oi.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(Li));
      c.charCodeAt(s) === 62 ? (l = Ws, s++) : (l = e, p(ar)), l !== e ? (w = r, r = vu(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function xr() {
    var r, f, t;
    return r = s, f = wg(), f === e && (f = null), c.charCodeAt(s) === 58 ? (t = Te, s++) : (t = e, p(Re)), t !== e ? (w = r, r = bu(f)) : (s = r, r = e), r;
  }
  function qp() {
    var r, f, t;
    return r = s, f = xr(), f !== e ? (t = $g(), t !== e ? (w = r, r = _u(f, t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function eg() {
    var r, f, t, l, o, h, n;
    if (r = s, c.substr(s, 2) === ri ? (f = ri, s += 2) : (f = e, p(Co)), f !== e)
      if (t = De(), t === e && (j.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(H))), t !== e) {
        for (l = [], o = q(), o === e && (o = s, c.charCodeAt(s) === 46 ? (h = X, s++) : (h = e, p(V)), h !== e ? (n = q(), n !== e ? (h = [h, n], o = h) : (s = o, o = e)) : (s = o, o = e)); o !== e; )
          l.push(o), o = q(), o === e && (o = s, c.charCodeAt(s) === 46 ? (h = X, s++) : (h = e, p(V)), h !== e ? (n = q(), n !== e ? (h = [h, n], o = h) : (s = o, o = e)) : (s = o, o = e));
        w = r, r = Au();
      } else
        s = r, r = e;
    else
      s = r, r = e;
    return r;
  }
  function sg() {
    var r, f, t;
    return r = s, c.charCodeAt(s) === 63 ? (f = Bs, s++) : (f = e, p(sr)), f !== e ? (t = At(), t !== e ? (w = r, r = Cu(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function rg() {
    var r, f, t;
    return r = s, c.charCodeAt(s) === 36 ? (f = ii, s++) : (f = e, p(Ri)), f !== e ? (t = At(), t !== e ? (w = r, r = mu(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function ig() {
    var r, f, t, l, o, h, n, u;
    if (r = s, c.charCodeAt(s) === 64 ? (f = ti, s++) : (f = e, p(Ii)), f !== e) {
      if (t = [], ci.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(Oi)), l !== e)
        for (; l !== e; )
          t.push(l), ci.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(Oi));
      else
        t = e;
      if (t !== e) {
        if (l = [], o = s, c.charCodeAt(s) === 45 ? (h = ie, s++) : (h = e, p(te)), h !== e) {
          if (n = [], ds.test(c.charAt(s)) ? (u = c.charAt(s), s++) : (u = e, p(ms)), u !== e)
            for (; u !== e; )
              n.push(u), ds.test(c.charAt(s)) ? (u = c.charAt(s), s++) : (u = e, p(ms));
          else
            n = e;
          n !== e ? (h = [h, n], o = h) : (s = o, o = e);
        } else
          s = o, o = e;
        for (; o !== e; )
          if (l.push(o), o = s, c.charCodeAt(s) === 45 ? (h = ie, s++) : (h = e, p(te)), h !== e) {
            if (n = [], ds.test(c.charAt(s)) ? (u = c.charAt(s), s++) : (u = e, p(ms)), u !== e)
              for (; u !== e; )
                n.push(u), ds.test(c.charAt(s)) ? (u = c.charAt(s), s++) : (u = e, p(ms));
            else
              n = e;
            n !== e ? (h = [h, n], o = h) : (s = o, o = e);
          } else
            s = o, o = e;
        w = r, r = Eu(t, l);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function We() {
    var r, f, t;
    if (r = s, f = [], j.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(H)), t !== e)
      for (; t !== e; )
        f.push(t), j.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(H));
    else
      f = e;
    return f !== e && (w = r, f = yu()), r = f, r;
  }
  function Fr() {
    var r, f, t, l, o;
    for (r = s, f = [], j.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(H)); t !== e; )
      f.push(t), j.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(H));
    if (c.charCodeAt(s) === 46 ? (t = X, s++) : (t = e, p(V)), t !== e) {
      if (l = [], j.test(c.charAt(s)) ? (o = c.charAt(s), s++) : (o = e, p(H)), o !== e)
        for (; o !== e; )
          l.push(o), j.test(c.charAt(s)) ? (o = c.charAt(s), s++) : (o = e, p(H));
      else
        l = e;
      l !== e ? (w = r, r = Pu()) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Dr() {
    var r, f, t, l, o;
    if (r = s, f = [], j.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(H)), t !== e)
      for (; t !== e; )
        f.push(t), j.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(H));
    else
      f = e;
    if (f !== e)
      if (c.charCodeAt(s) === 46 ? (t = X, s++) : (t = e, p(V)), t !== e) {
        for (l = [], j.test(c.charAt(s)) ? (o = c.charAt(s), s++) : (o = e, p(H)); o !== e; )
          l.push(o), j.test(c.charAt(s)) ? (o = c.charAt(s), s++) : (o = e, p(H));
        o = Gr(), o !== e ? (w = r, r = Tu()) : (s = r, r = e);
      } else
        s = r, r = e;
    else
      s = r, r = e;
    if (r === e) {
      if (r = s, c.charCodeAt(s) === 46 ? (f = X, s++) : (f = e, p(V)), f !== e) {
        if (t = [], j.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(H)), l !== e)
          for (; l !== e; )
            t.push(l), j.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(H));
        else
          t = e;
        t !== e ? (l = Gr(), l !== e ? (w = r, r = Lu()) : (s = r, r = e)) : (s = r, r = e);
      } else
        s = r, r = e;
      if (r === e) {
        if (r = s, f = [], j.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(H)), t !== e)
          for (; t !== e; )
            f.push(t), j.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(H));
        else
          f = e;
        f !== e ? (t = Gr(), t !== e ? (w = r, r = Ru()) : (s = r, r = e)) : (s = r, r = e);
      }
    }
    return r;
  }
  function tg() {
    var r, f, t;
    return r = s, c.charCodeAt(s) === 43 ? (f = $e, s++) : (f = e, p(Ae)), f !== e ? (t = We(), t !== e ? (w = r, r = Iu(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function lg() {
    var r, f, t;
    return r = s, c.charCodeAt(s) === 43 ? (f = $e, s++) : (f = e, p(Ae)), f !== e ? (t = Fr(), t !== e ? (w = r, r = Ou(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function ag() {
    var r, f, t;
    return r = s, c.charCodeAt(s) === 43 ? (f = $e, s++) : (f = e, p(Ae)), f !== e ? (t = Dr(), t !== e ? (w = r, r = Su(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function fg() {
    var r, f, t;
    return r = s, c.charCodeAt(s) === 45 ? (f = ie, s++) : (f = e, p(te)), f !== e ? (t = We(), t !== e ? (w = r, r = Nu(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function og() {
    var r, f, t;
    return r = s, c.charCodeAt(s) === 45 ? (f = ie, s++) : (f = e, p(te)), f !== e ? (t = Fr(), t !== e ? (w = r, r = xu(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function cg() {
    var r, f, t;
    return r = s, c.charCodeAt(s) === 45 ? (f = ie, s++) : (f = e, p(te)), f !== e ? (t = Dr(), t !== e ? (w = r, r = Fu(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function Gr() {
    var r, f, t, l, o;
    if (r = s, pa.test(c.charAt(s)) ? (f = c.charAt(s), s++) : (f = e, p(mo)), f !== e) {
      if (ga.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(Eo)), t === e && (t = null), l = [], j.test(c.charAt(s)) ? (o = c.charAt(s), s++) : (o = e, p(H)), o !== e)
        for (; o !== e; )
          l.push(o), j.test(c.charAt(s)) ? (o = c.charAt(s), s++) : (o = e, p(H));
      else
        l = e;
      l !== e ? (f = [f, t, l], r = f) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function hg() {
    var r, f, t, l;
    if (r = s, c.charCodeAt(s) === 39 ? (f = He, s++) : (f = e, p(Be)), f !== e) {
      for (t = [], hi.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(Si)), l === e && (l = Ce()); l !== e; )
        t.push(l), hi.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(Si)), l === e && (l = Ce());
      c.charCodeAt(s) === 39 ? (l = He, s++) : (l = e, p(Be)), l !== e ? (w = r, r = Du(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function ng() {
    var r, f, t, l;
    if (r = s, c.charCodeAt(s) === 34 ? (f = hs, s++) : (f = e, p(Es)), f !== e) {
      for (t = [], ni.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(Ni)), l === e && (l = Ce()); l !== e; )
        t.push(l), ni.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(Ni)), l === e && (l = Ce());
      c.charCodeAt(s) === 34 ? (l = hs, s++) : (l = e, p(Es)), l !== e ? (w = r, r = Gu(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function ug() {
    var r, f, t, l, o, h;
    if (r = s, c.substr(s, 3) === ns ? (f = ns, s += 3) : (f = e, p(xi)), f !== e) {
      for (t = [], l = s, c.substr(s, 2) === us ? (o = us, s += 2) : (o = e, p(Fi)), o === e && (c.charCodeAt(s) === 39 ? (o = He, s++) : (o = e, p(Be))), o === e && (o = null), ui.test(c.charAt(s)) ? (h = c.charAt(s), s++) : (h = e, p(Di)), h === e && (h = Ce()), h !== e ? (o = [o, h], l = o) : (s = l, l = e); l !== e; )
        t.push(l), l = s, c.substr(s, 2) === us ? (o = us, s += 2) : (o = e, p(Fi)), o === e && (c.charCodeAt(s) === 39 ? (o = He, s++) : (o = e, p(Be))), o === e && (o = null), ui.test(c.charAt(s)) ? (h = c.charAt(s), s++) : (h = e, p(Di)), h === e && (h = Ce()), h !== e ? (o = [o, h], l = o) : (s = l, l = e);
      c.substr(s, 3) === ns ? (l = ns, s += 3) : (l = e, p(xi)), l !== e ? (w = r, r = Uu(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function pg() {
    var r, f, t, l, o, h;
    if (r = s, c.substr(s, 3) === ps ? (f = ps, s += 3) : (f = e, p(Gi)), f !== e) {
      for (t = [], l = s, c.substr(s, 2) === gs ? (o = gs, s += 2) : (o = e, p(Ui)), o === e && (c.charCodeAt(s) === 34 ? (o = hs, s++) : (o = e, p(Es))), o === e && (o = null), pi.test(c.charAt(s)) ? (h = c.charAt(s), s++) : (h = e, p(ji)), h === e && (h = Ce()), h !== e ? (o = [o, h], l = o) : (s = l, l = e); l !== e; )
        t.push(l), l = s, c.substr(s, 2) === gs ? (o = gs, s += 2) : (o = e, p(Ui)), o === e && (c.charCodeAt(s) === 34 ? (o = hs, s++) : (o = e, p(Es))), o === e && (o = null), pi.test(c.charAt(s)) ? (h = c.charAt(s), s++) : (h = e, p(ji)), h === e && (h = Ce()), h !== e ? (o = [o, h], l = o) : (s = l, l = e);
      c.substr(s, 3) === ps ? (l = ps, s += 3) : (l = e, p(Gi)), l !== e ? (w = r, r = ju(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Ce() {
    var r, f, t;
    return r = s, c.charCodeAt(s) === 92 ? (f = li, s++) : (f = e, p(Hi)), f !== e ? (da.test(c.charAt(s)) ? (t = c.charAt(s), s++) : (t = e, p(yo)), t !== e ? (w = r, r = Hu()) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function me() {
    var r, f, t, l;
    if (r = s, c.charCodeAt(s) === 40 ? (f = A, s++) : (f = e, p(y)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      c.charCodeAt(s) === 41 ? (l = E, s++) : (l = e, p(P)), l !== e ? (f = [f, t, l], r = f) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function a() {
    var r;
    return r = gg(), r === e && (r = Ur(), r === e && (r = jr())), r;
  }
  function Ur() {
    var r;
    return wa.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(Po)), r;
  }
  function jr() {
    var r;
    return $a.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(To)), r;
  }
  function Ns() {
    var r;
    return va.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(Lo)), r;
  }
  function bt() {
    var r, f, t, l;
    if (r = s, c.charCodeAt(s) === 35 ? (f = Ys, s++) : (f = e, p(or)), f !== e) {
      for (t = [], l = Ns(); l !== e; )
        t.push(l), l = Ns();
      l = jr(), l !== e ? (w = r, r = Bu()) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function gg() {
    var r, f, t, l, o;
    for (r = s, jr(), f = [], t = Ur(); t !== e; )
      f.push(t), t = Ur();
    if (c.charCodeAt(s) === 35 ? (t = Ys, s++) : (t = e, p(or)), t !== e) {
      for (l = [], o = Ns(); o !== e; )
        l.push(o), o = Ns();
      w = r, r = ku();
    } else
      s = r, r = e;
    return r;
  }
  function dg() {
    var r, f, t, l;
    if (r = s, c.charCodeAt(s) === 91 ? (f = Ms, s++) : (f = e, p(ir)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      c.charCodeAt(s) === 93 ? (l = Xs, s++) : (l = e, p(tr)), l !== e ? (f = [f, t, l], r = f) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function _t() {
    var r;
    return ba.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(Ro)), r === e && (_a.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(Io)), r === e && (Aa.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(Oo)), r === e && (Ca.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(So)), r === e && (ma.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(No)), r === e && (Ea.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(xo)), r === e && (ya.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(Fo)), r === e && (Pa.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(Do)), r === e && (Ta.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(Go)), r === e && (La.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(Uo)), r === e && (Ra.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(jo)), r === e && (Ia.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(Ho)), r === e && (Oa.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(Bo)))))))))))))), r;
  }
  function De() {
    var r;
    return r = _t(), r === e && (c.charCodeAt(s) === 95 ? (r = ai, s++) : (r = e, p(Bi))), r;
  }
  function At() {
    var r, f, t, l;
    if (r = s, f = De(), f === e && (j.test(c.charAt(s)) ? (f = c.charAt(s), s++) : (f = e, p(H))), f !== e) {
      for (t = [], l = De(), l === e && (j.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(H)), l === e && (zs.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(cr)), l === e && (Zs.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(hr)), l === e && (Ks.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(nr)))))); l !== e; )
        t.push(l), l = De(), l === e && (j.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(H)), l === e && (zs.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(cr)), l === e && (Zs.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(hr)), l === e && (Ks.test(c.charAt(s)) ? (l = c.charAt(s), s++) : (l = e, p(nr))))));
      w = r, r = Mu();
    } else
      s = r, r = e;
    return r;
  }
  function q() {
    var r;
    return r = De(), r === e && (c.charCodeAt(s) === 45 ? (r = ie, s++) : (r = e, p(te)), r === e && (j.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(H)), r === e && (zs.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(cr)), r === e && (Zs.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(hr)), r === e && (Ks.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(nr))))))), r;
  }
  function wg() {
    var r, f, t, l, o, h;
    if (r = s, f = _t(), f !== e) {
      for (t = [], l = q(), l === e && (l = s, c.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e ? (h = q(), h !== e ? (o = [o, h], l = o) : (s = l, l = e)) : (s = l, l = e)); l !== e; )
        t.push(l), l = q(), l === e && (l = s, c.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e ? (h = q(), h !== e ? (o = [o, h], l = o) : (s = l, l = e)) : (s = l, l = e));
      w = r, r = Xu();
    } else
      s = r, r = e;
    return r;
  }
  function $g() {
    var r, f, t, l, o, h;
    if (r = s, f = De(), f === e && (c.charCodeAt(s) === 58 ? (f = Te, s++) : (f = e, p(Re)), f === e && (j.test(c.charAt(s)) ? (f = c.charAt(s), s++) : (f = e, p(H)), f === e && (f = Qe()))), f !== e) {
      for (t = [], l = q(), l === e && (c.charCodeAt(s) === 58 ? (l = Te, s++) : (l = e, p(Re)), l === e && (l = Qe())), l === e && (l = s, c.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e ? (h = q(), h === e && (c.charCodeAt(s) === 58 ? (h = Te, s++) : (h = e, p(Re)), h === e && (h = Qe())), h !== e ? (o = [o, h], l = o) : (s = l, l = e)) : (s = l, l = e)); l !== e; )
        t.push(l), l = q(), l === e && (c.charCodeAt(s) === 58 ? (l = Te, s++) : (l = e, p(Re)), l === e && (l = Qe())), l === e && (l = s, c.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e ? (h = q(), h === e && (c.charCodeAt(s) === 58 ? (h = Te, s++) : (h = e, p(Re)), h === e && (h = Qe())), h !== e ? (o = [o, h], l = o) : (s = l, l = e)) : (s = l, l = e));
      w = r, r = Vu();
    } else
      s = r, r = e;
    return r;
  }
  function Qe() {
    var r;
    return r = vg(), r === e && (r = bg()), r;
  }
  function vg() {
    var r, f, t, l;
    return r = s, c.charCodeAt(s) === 37 ? (f = fi, s++) : (f = e, p(ki)), f !== e ? (t = Ct(), t !== e ? (l = Ct(), l !== e ? (f = [f, t, l], r = f) : (s = r, r = e)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function Ct() {
    var r;
    return j.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(H)), r === e && (Sa.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(ko)), r === e && (Na.test(c.charAt(s)) ? (r = c.charAt(s), s++) : (r = e, p(Mo)))), r;
  }
  function bg() {
    var r, f, t;
    return r = s, c.charCodeAt(s) === 92 ? (f = li, s++) : (f = e, p(Hi)), f !== e ? (c.charCodeAt(s) === 95 ? (t = ai, s++) : (t = e, p(Bi)), t === e && (c.charCodeAt(s) === 126 ? (t = na, s++) : (t = e, p(Xo)), t === e && (c.charCodeAt(s) === 46 ? (t = X, s++) : (t = e, p(V)), t === e && (c.charCodeAt(s) === 45 ? (t = ie, s++) : (t = e, p(te)), t === e && (c.charCodeAt(s) === 33 ? (t = ks, s++) : (t = e, p(rr)), t === e && (c.charCodeAt(s) === 36 ? (t = ii, s++) : (t = e, p(Ri)), t === e && (c.charCodeAt(s) === 38 ? (t = ua, s++) : (t = e, p(Vo)), t === e && (c.charCodeAt(s) === 39 ? (t = He, s++) : (t = e, p(Be)), t === e && (c.charCodeAt(s) === 40 ? (t = A, s++) : (t = e, p(y)), t === e && (c.charCodeAt(s) === 41 ? (t = E, s++) : (t = e, p(P)), t === e && (c.charCodeAt(s) === 42 ? (t = ee, s++) : (t = e, p(se)), t === e && (c.charCodeAt(s) === 43 ? (t = $e, s++) : (t = e, p(Ae)), t === e && (c.charCodeAt(s) === 44 ? (t = D, s++) : (t = e, p(G)), t === e && (c.charCodeAt(s) === 59 ? (t = Pe, s++) : (t = e, p(Le)), t === e && (c.charCodeAt(s) === 58 ? (t = Te, s++) : (t = e, p(Re)), t === e && (c.charCodeAt(s) === 61 ? (t = ls, s++) : (t = e, p(As)), t === e && (c.charCodeAt(s) === 47 ? (t = oe, s++) : (t = e, p(he)), t === e && (c.charCodeAt(s) === 63 ? (t = Bs, s++) : (t = e, p(sr)), t === e && (c.charCodeAt(s) === 35 ? (t = Ys, s++) : (t = e, p(or)), t === e && (c.charCodeAt(s) === 64 ? (t = ti, s++) : (t = e, p(Ii)), t === e && (c.charCodeAt(s) === 37 ? (t = fi, s++) : (t = e, p(ki)))))))))))))))))))))), t !== e ? (f = [f, t], r = f) : (s = r, r = e)) : (s = r, r = e), r;
  }
  let mt = {};
  function i(r, f) {
    return !!(r.type === "Var" && r.varType === f.varType && r.varname === f.varname || r.iriref && r.iriref === f.iriref || r.type === "PrefixedName" && r.pn_prefix === f.pn_prefix && r.pn_local === f.pn_local);
  }
  if (Ps = K(), Ps !== e && s === c.length)
    return Ps;
  throw Ps !== e && s < c.length && p(Wu()), Qu(
    ur,
    le < c.length ? c.charAt(le) : null,
    le < c.length ? pr(le, le + 1) : pr(le, le)
  );
}
let Fs, Gs, Ke, Rg = "  ", Pt = 0;
function yg(c, b = 2) {
  if (Rg = " ".repeat(b), Fs = [], Gs = c.comments, Ke = "", c.headers && U(c.headers.join("")), c.prologue?.decl.length && (c.prologue.decl.forEach((e) => {
    e.type === "BaseDecl" ? U(`BASE <${e.iriref}>`) : U(`PREFIX ${e.pn_prefix || ""}: <${e.iriref}>`);
  }), U("")), c.selectQuery)
    V1(c.selectQuery);
  else if (c.constructQuery)
    W1(c.constructQuery);
  else if (c.askQuery)
    B1(c.askQuery);
  else if (c.describeQuery)
    k1(c.describeQuery);
  else if (c.update)
    for (let e = 0; e < c.update.length; e++)
      e > 0 && (Fs[Fs.length - 1] += ` ;
`), M1(c.update[e]);
  for (c.values && Og(c.values); Gs && Gs.length; )
    Fs[Fs.length - 1] += Gs.shift().text;
  return Fs.join(`
`);
}
const Ue = (c = 1) => {
  Ke += Rg.repeat(c);
}, je = (c = 1) => {
  Ke = Ke.substr(0, Ke.length - Rg.length * c);
}, U = (c) => {
  Fs.push(Ke + c);
}, Y = (c, b) => {
  for (; Gs && Gs.length && Gs[0].pos < b; )
    Fs[Fs.length - 1] += Gs.shift().text;
  U(c);
}, B1 = (c) => {
  U("ASK {");
  const b = Ie(c.where);
  Y("}", b + 1), yt(c);
}, k1 = (c) => {
  const b = c.describe.map(k).join(" ");
  if (U(`DESCRIBE ${b}`), Ig(c.from), c.where) {
    U("WHERE {");
    const e = Ie(c.where);
    Y("}", e + 1);
  }
  yt(c);
}, M1 = (c) => {
  if (c.type === "insertdata")
    U("INSERT DATA {"), Ue(), Ds(c.insert), je(), U("}");
  else if (c.type === "deletedata")
    U("DELETE DATA {"), Ue(), Ds(c.delete), je(), U("}");
  else if (c.type === "deletewhere")
    U("DELETE WHERE {"), Ue(), Ds(c.delete), je(), U("}");
  else if (c.type === "modify") {
    c.with && U(`WITH ${k(c.with)}`), c.delete && (U("DELETE {"), Ue(), Ds(c.delete), je(), U("}")), c.insert && (U("INSERT {"), Ue(), Ds(c.insert), je(), U("}")), c.using && c.using.forEach((e) => {
      U(`USING ${X1(e)}`);
    }), U("WHERE {");
    const b = Ie(c.where);
    Y("}", b + 1);
  } else if (c.type === "add") {
    const b = kr(c.graphs[0]), e = kr(c.graphs[1]);
    let T = " ";
    c.silent && (T = " SILENT "), U(`ADD${T}${b} TO ${e}`);
  } else if (c.type === "move") {
    const b = kr(c.graphs[0]), e = kr(c.graphs[1]);
    let T = " ";
    c.silent && (T = " SILENT "), U(`MOVE${T}${b} TO ${e}`);
  } else if (c.type === "copy") {
    const b = kr(c.graphs[0]), e = kr(c.graphs[1]);
    let T = " ";
    c.silent && (T = " SILENT "), U(`COPY${T}${b} TO ${e}`);
  } else if (c.type === "load") {
    let b = " ";
    c.silent && (b = " SILENT "), U(`LOAD${b}${Ge(c.sourceGraph)}`);
  } else if (c.type === "clear") {
    let b = " ";
    c.silent && (b = " SILENT "), U(`CLEAR${b}${Ug(c.destinyGraph)}`);
  } else if (c.type === "drop") {
    let b = " ";
    c.silent && (b = " SILENT "), U(`DROP${b}${Ug(c.destinyGraph)}`);
  } else if (c.type === "create") {
    let b = " ";
    c.silent && (b = " SILENT "), U(`CREATE${b}GRAPH ${Ge(c.destinyGraph)}`);
  }
}, X1 = (c) => c.named ? `NAMED ${Ge(c.iri)}` : Ge(c.iri), kr = (c) => c === "default" ? "DEFAULT" : Ge(c), Ug = (c) => c === "default" ? "DEFAULT" : c === "named" ? "NAMED" : c === "all" ? "ALL" : `GRAPH ${Ge(c)}`, Ie = (c, b = 0) => (Ue(), c.type === "SubSelect" ? (Pg(c), b = c.location.end.offset) : c.graphPattern ? c.graphPattern.forEach((e) => {
  jg(e), b = e.location.end.offset;
}) : c.forEach((e) => {
  jg(e), b = e.location.end.offset;
}), je(), b), V1 = (c) => {
  const b = c.selectClause.location.start.offset;
  Y(Vg(c.selectClause), b);
  let e = c.selectClause.location.end.offset;
  const T = Ig(c.selectClause.from);
  T > e && (e = T), Y("WHERE {", e + 1), e = Ie(c.whereClause, e), Y("}", e + 1), yt(c);
}, Pg = (c) => {
  const b = c.selectClause.location.start.offset;
  let e = c.selectClause.location.end.offset;
  Y(Vg(c.selectClause), b), Y("WHERE {", e + 1), e = Ie(c.whereClause, e), Y("}", e + 1), c.values && Og(c.values), yt(c);
}, Ig = (c) => {
  if (c) {
    let b;
    return c.forEach((e) => {
      e.graph ? b = Q1(e.graph) : e.namedGraph && (b = Y1(e.namedGraph));
    }), b;
  }
}, yt = (c) => {
  c.group && U(z1(c.group)), c.having && U(`HAVING ${Q(c.having[0])}`), c.orderBy && U("ORDER BY " + Z1(c.orderBy)), c.limitOffset?.forEach((b) => {
    b.limit ? U(`LIMIT ${b.limit}`) : b.offset && U(`OFFSET ${b.offset}`);
  });
}, W1 = (c) => {
  c.template ? (Y("CONSTRUCT {", c.location.start.offset), Ue(), Ds(c.template.triplePattern), je(), U("}")) : U("CONSTRUCT"), Ig(c.from), U("WHERE {");
  const b = Ie(c.where);
  Y("}", b + 1), yt(c);
}, Q1 = (c) => {
  const b = Ge(c);
  if (b != null) {
    const e = c.location.start.offset, T = c.location.end.offset;
    return Y("FROM " + b, e), T;
  }
}, Y1 = (c) => {
  const b = Ge(c);
  if (b != null) {
    const e = c.location.start.offset, T = c.location.end.offset;
    return Y("FROM NAMED " + b, e), T;
  }
}, jg = (c) => {
  if (Pt = c.location.start.offset, c.type === "SubSelect") {
    U("{"), Ue(), Pg(c), je(), U("}");
    return;
  }
  if (c.graphPattern && c.graph) {
    Y(`GRAPH ${k(c.graph)} {`, Pt);
    const b = Ie(c);
    Y("}", b + 1);
    return;
  }
  if (c.graphPattern) {
    U("{");
    const b = Ie(c);
    Y("}", b + 1);
    return;
  }
  if (c.data) {
    Og(c);
    return;
  }
  if (c.triplePattern) {
    Ds(c.triplePattern);
    return;
  }
  if (c.union) {
    for (let b = 0; b < c.union.length; b++)
      b > 0 && U("UNION"), U("{"), Ie(c.union[b]), Y("}", c.union[b].location.end.offset + 2);
    return;
  }
  if (c.optional) {
    Y("OPTIONAL {", Pt);
    const b = Ie(c.optional);
    Y("}", b + 1);
    return;
  }
  if (c.minus) {
    Y("MINUS {", Pt);
    const b = Ie(c.minus);
    Y("}", b + 1);
    return;
  }
  if (c.filter) {
    J1(c);
    return;
  }
  if (c.bind) {
    U(`BIND (${Q(c.bind)} AS ${Br(c.as)})`);
    return;
  }
  if (c.type === "ServiceGraphPattern") {
    let b = " ";
    c.silent && (b = " SILENT "), U(`SERVICE${b}${k(c.service)} {`), c.pattern.type === "SubSelect" ? (Ue(), Pg(c.pattern), je()) : Ie(c.pattern), U("}");
    return;
  }
  if (c.functionRef) {
    const b = c.args.map(Q).join(", ");
    U(Ge(c.functionRef) + `(${b})`);
  }
}, z1 = (c) => {
  let b = ["GROUP BY"], e = 0;
  return c.forEach((T) => {
    b[e].length > 80 ? (e++, b[e] = "  ") : b[e] += " ", b[e] += k(T);
  }), b.join(`
`);
}, Z1 = (c) => {
  let b = [];
  return c.forEach((e) => {
    let T;
    e.type === "Var" ? T = Br(e) : T = Q(e), e.asc ? b.push(`ASC${T}`) : e.desc ? b.push(`DESC${T}`) : b.push(T);
  }), b.join(" ");
}, Vg = (c) => {
  let b = [];
  b[0] = "SELECT", c.distinct && (b[0] += " DISTINCT"), c.reduced && (b[0] += " REDUCED");
  let e = 0;
  return c.var.forEach((T) => {
    b[e].length > 80 ? (e++, b[e] = "  ") : b[e] += " ", b[e] += K1(T);
  }), b.join(`
`);
}, K1 = (c) => {
  if (c.varname)
    return Br(c);
  if (c.as)
    return `(${Q(c.expression)} AS ${Br(c.as)})`;
  if (c === "*")
    return "*";
}, J1 = (c) => {
  if (c.filter.notexists) {
    U("FILTER NOT EXISTS {");
    const b = Ie(c.filter.notexists);
    Y("}", b + 1);
  } else if (c.filter.exists) {
    U("FILTER EXISTS {");
    const b = Ie(c.filter.exists);
    Y("}", b + 1);
  } else
    Y(`FILTER ${Q(c.filter)}`, c.location.start.offset);
}, Ds = (c) => {
  c.forEach((b) => {
    b.graph ? (Y(`GRAPH ${k(b.graph)} {`, b.graph.location.start.offset), Ue(), Ds(b.triplePattern), je(), U("}")) : b.triplePattern ? Ds(b.triplePattern) : b.properties ? q1(b) : Y(`[${rd(b.subject.blankNodeProperties)}] .`, b.subject.location.start.offset);
  });
}, q1 = (c) => {
  const b = k(c.subject);
  let e, T;
  c.properties.forEach((x) => {
    e ? (Y(`${e} ;`, T), e = " ".repeat(b.length) + ` ${k(x.predicate)} ${k(x.objects)}`, x.predicate.location ? T = x.predicate.location.start.offset : T = x.predicate.value.location.start.offset) : (e = `${b} ${k(x.predicate)} ${k(x.objects)}`, T = c.subject.location.start.offset);
  }), Y(`${e} .`, T);
}, Rt = (c) => {
  let b = "";
  return c.forEach((e) => {
    b && (b += " "), e.graph ? (b += `GRAPH ${k(e.graph)} { `, b += Rt(e.triplePattern), b += " }") : e.triplePattern ? b += Rt(e.triplePattern) : (b += ed(e), (c.length > 1 || e.properties.length > 1) && (b += " ."));
  }), b;
}, ed = (c) => {
  const b = k(c.subject);
  let e;
  return c.properties.forEach((T) => {
    e ? e += ` ; ${k(T.predicate)} ${k(T.objects)}` : e = `${b} ${k(T.predicate)} ${k(T.objects)}`;
  }), e;
}, sd = (c, b) => {
  if (c.length === 1 && !b) {
    const x = c[0];
    return ` ${k(x.predicate)} ${k(x.objects)}`;
  }
  Ue();
  let e = "";
  const T = Ke + " ".repeat(2);
  return c.forEach((x) => {
    e ? (e += ` ;
`, e += `${T} ${k(x.predicate)} ${k(x.objects, !0)}`) : (e += `
${T}`, e += ` ${k(x.predicate)} ${k(x.objects, !0)}`);
  }), e += `
${Ke}`, je(), e;
}, rd = (c) => {
  if (c.length === 1) {
    const T = c[0];
    return ` ${k(T.predicate)} ${k(T.objects)} `;
  }
  let b = "";
  const e = Ke + " ".repeat(2);
  return c.forEach((T) => {
    b ? (b += ` ;
`, b += `${e}${k(T.predicate)} ${k(T.objects, !0)}`) : (b += `
${e}`, b += `${k(T.predicate)} ${k(T.objects, !0)}`);
  }), b += `
${Ke}`, b;
}, id = (c) => {
  let b = c.distinct ? "DISTINCT " : "";
  if (c.aggregateType === "count") {
    let e;
    return c.expression === "*" ? e = "*" : e = Q(c.expression), `COUNT(${b}${e})`;
  } else {
    if (c.aggregateType === "sum")
      return `sum(${b}${Q(c.expression)})`;
    if (c.aggregateType === "min")
      return `MIN(${b}${Q(c.expression)})`;
    if (c.aggregateType === "max")
      return `MAX(${b}${Q(c.expression)})`;
    if (c.aggregateType === "avg")
      return `AVG(${b}${Q(c.expression)})`;
    if (c.aggregateType === "sample")
      return `SAMPLE(${b}${Q(c.expression)})`;
    if (c.aggregateType === "group_concat") {
      let e = "";
      return c.separator && (e = `; SEPARATOR = ${Wg(c.separator)}`), `GROUP_CONCAT(${b}${Q(c.expression)}${e})`;
    }
  }
}, Q = (c) => {
  if (c.functionRef)
    return Ge(c.functionRef) + "(" + c.args.map(Q).join(", ") + ")";
  if (c.exists)
    return `EXISTS { ${Rt(c.exists)} }`;
  if (c.notexists)
    return `NOT EXISTS { ${Rt(c.notexists)} }`;
  switch (c.expressionType) {
    case "atomic":
      return Ze(k(c.value), c.bracketted);
    case "irireforfunction":
      let b = Ge(c.iriref);
      return c.args && (b += "(" + c.args.map(Q).join(", ") + ")"), Ze(b, c.bracketted);
    case "builtincall":
      let e = "";
      return c.args && (e = c.args.map(k).join(", ")), Ze(`${c.builtincall}(${e})`, c.bracketted);
    case "unaryexpression":
      let T = c.unaryexpression + Q(c.expression);
      return Ze(T, c.bracketted);
    case "aggregate":
      return id(c);
    case "multiplicativeexpression":
      let x = Q(c.first);
      return c.rest.forEach((O) => {
        x += " " + O.operator + " " + Q(O.expression);
      }), Ze(x, c.bracketted);
    case "additiveexpression":
      let K = Q(c.op1);
      return c.ops.forEach((O) => {
        K += " " + O.operator + " " + Q(O.expression);
      }), Ze(K, c.bracketted);
    case "relationalexpression":
      let ue = Q(c.op1) + " " + c.operator + " ";
      return Array.isArray(c.op2) ? ue += "(" + c.op2.map(k).join(", ") + ")" : ue += Q(c.op2), Ze(ue, c.bracketted);
    case "aliasedexpression":
      let Ee = Q(c.expression);
      return c.as && (Ee += ` AS ${Br(c.as)}`), Ze(Ee, c.bracketted);
    case "conditionaland":
      return Ze(c.operands.map(Q).join(" && "), c.bracketted);
    case "conditionalor":
      return Ze(c.operands.map(Q).join(" || "), c.bracketted);
    case "regex":
      let pe = Q(c.text);
      return pe += ", " + Q(c.pattern), c.flags && (pe += ", " + Q(c.flags)), `regex(${pe})`;
  }
}, Ze = (c, b) => b ? `(${c})` : c, Og = (c) => {
  if (c.oneVar) {
    const b = k(c.oneVar), e = c.data.map(k).join(" ");
    U(`VALUES ${b} { ${e} }`);
  } else if (c.variables) {
    const b = c.variables.map(Br).join(" ");
    if (c.variables.length === 1) {
      const e = c.data.map((T) => "(" + T.map(k).join(" ") + ")").join(" ");
      U(`VALUES (${b}) { ${e} }`);
    } else
      U(`VALUES (${b}) {`), Ue(), c.data.map((e) => {
        U("(" + e.map(k).join(" ") + ")");
      }), je(), U("}");
  }
}, k = (c, b = !1) => {
  if (c === "UNDEF")
    return c;
  if (Array.isArray(c))
    return c.map((T) => k(T, b)).join(", ");
  if (c.varname)
    return Br(c);
  if (c.collection)
    return `( ${c.collection.map((x) => k(x)).join(" ")} )`;
  if (c.hasOwnProperty("literal"))
    return Wg(c);
  if (c.blankNode)
    return c.blankNode;
  if (c.expressionType)
    return Q(c);
  if (c.blankNodeProperties)
    return `[${sd(c.blankNodeProperties, b)} ]`;
  let e = "";
  return c.inverse && (e += "^"), (c.pn_prefix || c.pn_local || c.iriref || c.a) && (e += Ge(c)), c.alternative ? e += c.alternative.map((T) => k(T)).join("|") : c.sequence && (e += c.sequence.map((T) => k(T)).join("/")), c.bracketted && (e = `(${e})`), c.modifier && (e += c.modifier), e;
}, Wg = (c) => {
  if (c.dataType === "http://www.w3.org/2001/XMLSchema#decimal")
    return c.literal;
  if (c.dataType === "http://www.w3.org/2001/XMLSchema#double")
    return c.literal;
  if (c.dataType === "http://www.w3.org/2001/XMLSchema#integer")
    return c.literal;
  if (c.dataType === "http://www.w3.org/2001/XMLSchema#boolean")
    return c.literal;
  let b = c.quote + c.literal + c.quote;
  return c.dataType ? b += `^^${Ge(c.dataType)}` : c.lang && (b += "@" + c.lang), b;
}, Ge = (c) => {
  if (c.iriref)
    return `<${c.iriref}>`;
  if (c.pn_prefix && c.pn_local)
    return `${c.pn_prefix}:${c.pn_local}`;
  if (c.pn_prefix)
    return `${c.pn_prefix}:`;
  if (c.pn_local)
    return `:${c.pn_local}`;
  if (c.a)
    return "a";
}, Br = (c) => c.varType === "VAR2" ? "$" + c.varname : "?" + c.varname;
let ze = "", Sg;
function td(c, b = 4) {
  Sg = " ".repeat(b);
  let e = "";
  return e += `@prefix : <https://purl.org/sparql-formatter/ontology#> .

`, e += `[]
` + Tg(c) + ` .
`, e;
}
function Tg(c) {
  let b = [];
  return ad(), Object.keys(c).forEach((e) => {
    if (e === "type")
      b.push(ze + `a :${c[e]}`);
    else {
      if (e === "location" || e === "@context")
        return;
      if (typeof c[e] == "object")
        b.push(ld(e, c[e]));
      else {
        let T = c[e];
        typeof T == "string" && (T = JSON.stringify(T)), b.push(ze + `:${e} ${T}`);
      }
    }
  }), fd(), b.join(` ;
`);
}
function ld(c, b) {
  if (Array.isArray(b)) {
    const e = b.map((T) => Tg(T) + `
`);
    return ze + `:${c} [
` + e.join(ze + `], [
`) + ze + "]";
  } else
    return ze + `:${c} [
` + Tg(b) + `
` + ze + "]";
}
const ad = (c = 1) => {
  ze += Sg.repeat(c);
}, fd = (c = 1) => {
  ze = ze.substr(0, ze.length - Sg.length * c);
}, od = (c, b = "default", e = 2) => {
  switch (b) {
    case "default":
      return yg(Tt(c), e);
    case "compact":
      return yg(Xg(c), e);
    case "turtle":
      return td(Tt(c), e);
    case "jsonld":
      return JSON.stringify(Tt(c), cd, e);
    default:
      throw new Error(`Unsupported formatting mode: ${b}`);
  }
};
function cd(c, b) {
  if (c !== "location")
    return b;
}
const Je = {
  parseSparql: Tt,
  parseSparqlAsCompact: Xg,
  formatAst: yg,
  format: od
};
typeof window < "u" && (window.spfmt = Je);
const Dd = () => Je(`
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
        VALUES ?p { ${Et.join(" ")} }
    }
  }
`), Gd = () => `
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
`, hd = () => ["crm:E35_Title", "crm:E41_Appellation", "crm:E42_Identifier"].join(" "), Ud = (c, b = !1, e = [], T = Lg.OUTGOING) => b && e.length == 0 ? "" : Je.format(
  pd() + (b ? ud(
    c,
    e,
    T
  ) : nd(c))
), nd = (c) => `
SELECT *
WHERE {
  GRAPH ?g {
    ${xg(`<${c}>`)}
    UNION
    ${Fg(`<${c}>`)}
    UNION
    ${Ng(`<${c}>`)}
    UNION
    ${gd(`<${c}>`)}
  }
}
`, ud = (c, b, e) => {
  let T = "";
  return b.length > 0 && (T = `VALUES ?lp { ${b.map((x) => `<${x}>`).join(" ")} }`), `
SELECT *
WHERE {
  GRAPH ?g {
    ${T}
    ${e === Lg.INCOMING ? `?lr ?lp <${c}>` : `<${c}> ?lp ?lr`}
    OPTIONAL {
      GRAPH ?r_g {
        ${xg("?lr")}
        UNION
        ${Fg("?lr")}
        UNION
        ${Ng("?lr")} 
      }
    }
    FILTER (?lp NOT IN (${u1}))
  }
}
ORDER BY ?lp ?lr
`;
}, pd = () => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX iremus-data: <http://data-iremus.huma-num.fr/id/>
PREFIX iremus-graphs: <http://data-iremus.huma-num.fr/graph/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX sherlock-ns: <http://data-iremus.huma-num.fr/ns/sherlock#>
`, Ng = (c) => `
{ ######## get types (rdf:type)
  ${c} ?p ?r .
  VALUES ?p { rdf:type }
}
UNION
{ ######## get types (crm:P2_has_type)
 ${c} ?p ?r .
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
`, xg = (c) => `
{ ######## get direct literal label
${c} ?p ?label .
VALUES ?p { ${Et.join(" ")} } .
FILTER(isLiteral(?label)) .
}
`, Fg = (c) => `
{ ######## get identifiers linked resources
  ${c} ?p ?r .
  VALUES ?p { ${h1.join(" ")} }
  GRAPH ?r_types_g {
    ?r rdf:type ?r_type .
    ?r crm:P190_has_symbolic_content ?label .
    VALUES ?r_type { ${hd()} }
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
`, gd = (c) => `
{ ######## if the base resource is part of a E32
  GRAPH ?authdoc_g {
    ?authdoc crm:P71_lists ${c} .
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
    ${c} ?p ?authdoc .
    VALUES ?p { skos:inScheme }

  }
  OPTIONAL {
    GRAPH ?authdoc_g {
      ?authdoc ?authdoc_label_p ?authdoc_label .
      VALUES ?authdoc_label_p { dcterms:title skos:prefLabel }
    }
  }
}
`, jd = (c, b) => `${wd()}  
  SELECT *
  WHERE {
    ${dd(c, b)}
    GRAPH ?g {
    ${xg("?s")}
    UNION
    ${Fg("?s")}
    UNION
    ${Ng("?s")}
    }
  }`, dd = (c, b) => `
{
  SELECT DISTINCT ?s ?score WHERE 
  {
    # Literal text:query that match an identifier 
    {
      { (?x ?score) text:query ("${c}")}
      GRAPH ?g_x {
        VALUES ?identifier_predicate {${Et.join(" ")}} .
        ?s ?identifier_predicate ?x 
      }
    }
    UNION
    # Literal text:query that match a relevant resource
    # Pas de P190 car le sujet d'un P190 n'est pas la ressource en tant que telle.
    {
      ${Et.map((e) => `
      {
        (?s ?score) text:query (${e} "${c}")
      }
      `).join(" UNION ")}
    }
  }
  ORDER BY DESC(?score) 
  LIMIT ${b}  
}
`, wd = () => `PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX text: <http://jena.apache.org/text#>
`, Hd = (c, b) => Je.format(`
${g1()}

SELECT DISTINCT ?linked_resource
(GROUP_CONCAT(DISTINCT ?literal_label; separator=", ") AS ?ll)	
(GROUP_CONCAT(DISTINCT ?id_label; separator=", ") AS ?il)
WHERE {
  GRAPH ?g {
    <${c}> <${b}> ?linked_resource .

    OPTIONAL {
      ?linked_resource ${Et.join("|")} ?literal_label .
      FILTER(isLiteral(?literal_label))
    }
    OPTIONAL {
      ?linked_resource <http://www.cidoc-crm.org/cidoc-crm/P1_is_identified_by> ?id .
      ?id <http://www.cidoc-crm.org/cidoc-crm/P190_has_symbolic_content> ?id_label .
    }
  }
}
GROUP BY ?linked_resource
ORDER BY ?linked_resource
`);
function Qg() {
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
const Bd = () => Je(`
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
    ${Qg()}
  }
}
GROUP BY ?F2_livraison_tei ?livraison_titre ?date ?livraison_business_id
ORDER BY ?livraison_business_id
`), kd = (c) => Je(`
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?F2_article_tei ?article_title ?article_business_id ?livraison_titre
WHERE {
  GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant-tei> {
    VALUES ?livraison_business_id { "${c}" }
    ?F2_livraison_tei crm:P1_is_identified_by ?E42_tei_file .
    ?E42_tei_file a crm:E42_Identifier .
    ?E42_tei_file crm:P2_has_type iremus:f005e36a-4690-4c83-9791-2927f5f823e0 . # type url de fichier tei
    ?F2_article_tei crm:P1_is_identified_by ?E42_article_business_id .
    ?E42_article_business_id a crm:E42_Identifier .
    ?E42_article_business_id crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d . # type business id
    ?E42_article_business_id crm:P190_has_symbolic_content ?article_business_id .
    ?F2_article_tei crm:P102_has_title ?article_title .
    ${Qg()}
  }
}
ORDER BY ?article_business_id
`), Md = (c, b) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT ?note_pname (count(?note) AS ?notes) 
WHERE {
  GRAPH ?g {
    ?note sherlock:has_document_context <${c}>.
    ?note crm:P2_has_type <${ye.note}>. #NOTE
    ?note sherlockmei:pname ?note_pname.
    ${b && `VALUES ?note_pname { "${b}" }`}
  }
}
GROUP BY ?note_pname`, Xd = (c) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT *
WHERE {
  GRAPH ?g {
    <${c}> crm:P127_has_broader_term* ?bt .
    ?bt crm:P1_is_identified_by ?bt_label .
    OPTIONAL {
      ?bt crm:P127_has_broader_term ?btbt .
      ?btbt crm:P1_is_identified_by ?btbt_label .
    }
  }
}
`, Vd = (c) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE { <${c}> crm:P140_assigned_attribute_to ?p140 }`, Dg = `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
`, Yg = 'SELECT ?project_code ?project_logo ?project_name ?project_uri (REPLACE(STR(?project_uri), "^.*/([^/]*)$", "$1") AS ?project_uuid)', Wd = (c) => Je.format(`
${Dg}
${Yg}
WHERE {
  GRAPH ?g1 {
    <${c}> sherlock:has_context_project ?project_uri .
  }
  GRAPH ?g2 {
    ?project_uri crm:P1_is_identified_by ?project_name .
    FILTER(isLiteral(?project_name))
    
    ?project_uri crm:P1_is_identified_by ?e42_logo .
    ?e42_logo rdf:type crm:E42_Identifier .
    ?e42_logo crm:P2_has_type iremus:804d8e72-cced-4b78-85d4-78a016e1c153 .
    ?e42_logo crm:P190_has_symbolic_content ?project_logo .
    
    ?project_uri crm:P1_is_identified_by ?e42_code .
    ?e42_code rdf:type crm:E42_Identifier .
    ?e42_code crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
    ?e42_code crm:P190_has_symbolic_content ?project_code .
  }
}`), Qd = (c) => Je.format(`
${Dg}
${Yg}
WHERE {
  GRAPH ?g {
    BIND ("${c}" as ?project_code)
    ?project_uri crm:P1_is_identified_by ?project_name .
    FILTER(isLiteral(?project_name))
    
    ?project_uri crm:P1_is_identified_by ?e42_logo .
    ?e42_logo rdf:type crm:E42_Identifier .
    ?e42_logo crm:P2_has_type iremus:804d8e72-cced-4b78-85d4-78a016e1c153 .
    ?e42_logo crm:P190_has_symbolic_content ?project_logo .
    
    ?project_uri crm:P1_is_identified_by ?e42_code .
    ?e42_code rdf:type crm:E42_Identifier .
    ?e42_code crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
    ?e42_code crm:P190_has_symbolic_content "${c}" .
  }
}`), Yd = (c) => Je.format(`
${Dg}
SELECT *
WHERE {
  GRAPH ?g {
    ?file a crm:E31_Document .
    ?file crm:P70_documents iremus:${c} .
    ?file crm:P1_is_identified_by ?e42 .
    FILTER (!isLiteral(?e42)) .
    ?e42 a crm:E42_Identifier .
    ?e42 crm:P190_has_symbolic_content ?file_uri .
    OPTIONAL {
      ?file crm:P1_is_identified_by ?p1_literal .
      FILTER (isLiteral(?p1_literal)) .
    }
    OPTIONAL {
      ?file crm:P2_has_type ?file_type .
    }
  }
  GRAPH ?meta {
    OPTIONAL {
      ?file_type crm:P1_is_identified_by ?file_type_label .
    }
  }
}
`), zd = (c) => Je.format(`
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX text: <http://jena.apache.org/text#>

SELECT *
WHERE {
  GRAPH ?g {
  	?e42_business_id crm:P190_has_symbolic_content ${c ? '"' + c + '"' : "?project_code"} .
    ?e42_business_id rdf:type crm:E42_Identifier .
    ?e42_business_id crm:P2_has_type <http://data-iremus.huma-num.fr/id/574ffe9e-525c-42f2-8188-329ba3c7231d> . # Type business id
    ?E7_project crm:P1_is_identified_by ?e42_business_id .
    ?E7_project rdf:type crm:E7_Activity .
    ?E7_project crm:P2_has_type <http://data-iremus.huma-num.fr/id/58c38fd3-ca35-476a-aa39-9cc815ee2dab> . # Type projet
    ?E7_project crm:P1_is_identified_by ?project_name .
    ?E7_project crm:P1_is_identified_by ?e42_graph_uri .
    ?e42_graph_uri rdf:type crm:E42_Identifier .
    ?e42_graph_uri crm:P2_has_type <http://data-iremus.huma-num.fr/id/ca70f2d9-44f1-4137-82e6-882752767d22> . # Type graph uri
    ?e42_graph_uri crm:P190_has_symbolic_content ?graph_uri .
    ?E65_creation crm:P9i_forms_part_of ?E7_project .
    ?E65_creation rdf:type crm:E65_Creation .
    ?E65_creation crm:P94_has_created ?collection .
    ?collection rdf:type sherlock:Collection .
    ?collection crm:P1_is_identified_by ?collection_name
    FILTER(isLITERAL(?project_name))
    FILTER(isLITERAL(?collection_name))
  }
}`), Zd = () => `
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
        ?score crm:P2_has_type <${ye.score}> .
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
                ?selection crm:P2_has_type <${ye.selection}> .
                ?selection sherlock:has_document_context ?score .
            }
        }
        UNION {
            GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> {
                ?e13_on_analytical_entity rdf:type crm:E13_Attribute_Assignment .
                ?e13_on_analytical_entity crm:P141_assigned ?analytical_entity .
                ?analytical_entity rdf:type crm:E28_Conceptual_Object .
                ?analytical_entity crm:P2_has_type <${ye.analyticalEntity}> .
                ?e13_on_analytical_entity crm:P140_assigned_attribute_to ?analytical_selection .
                ?analytical_selection sherlock:has_document_context ?score .
            }
        }
    }
}
GROUP BY ?score
`, Kd = (c) => `
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
          ?analyticalEntity crm:P2_has_type <${ye.analyticalEntity}>.
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
        ?selection sherlock:has_document_context <${c}>.
        ?selection crm:P2_has_type <${ye.selection}>.
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
`, Jd = (c) => `
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

LIMIT ${c}`;
function qd(c) {
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
    ?e42 crm:P190_has_symbolic_content "${c}" .
  }
}
`;
}
const ew = (c = "", b = "", e = "", T = "") => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

SELECT *
WHERE {
  GRAPH ?g {
    ${c ? `BIND (<${c}> as ?f1)` : ""}
    ${b ? `BIND (<${b}> as ?f2)` : ""}
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
`, sw = (c) => `https://yasgui.triply.cc/#query=${encodeURIComponent(c)}&endpoint=http%3A%2F%2Fdata-iremus.huma-num.fr%2Fsparql%2F&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=gchart`;
export {
  Ad as ANALYTICAL_ENTITY,
  d1 as ANALYTICAL_PROJECT,
  Ed as ANNOTATION,
  w1 as DRAFT_PROJECT,
  h1 as IDENTIFIERS_PREDICATES,
  n1 as IDENTITY_PREDICATES,
  u1 as IDENTITY_PREDICATES_PREFIXED,
  Et as LL_PREDICATES,
  Lg as LinkedResourcesDirectionEnum,
  $d as NOTE,
  bd as POSITIONNED_NOTE,
  p1 as PREFIXES,
  Cd as SCORE,
  vd as SELECTION,
  md as SOFTWARE,
  _d as VERTICALITY,
  gd as authorityDocument,
  Td as contributions,
  Rd as contributors,
  Od as countIncomingPredicates,
  Id as countOutgoingPredicates,
  Sd as documentsByIndex,
  xd as e13WithLiteralP141,
  Fd as fondamentales,
  yd as getAnalyticalProject,
  Pd as getAnnotations,
  Ld as getContributor,
  Nd as getDotOneProperties,
  Vd as getP140,
  Qd as getProjectByCode,
  Wd as getProjectByResourceUri,
  Yd as getProjectFiles,
  qd as getResourceByUrlFragment,
  Dd as getResources,
  Gd as historicalModelsOntologies,
  Fg as identifiersResources,
  xg as identitiersLiterals,
  jd as identitiesByTextQuery,
  Ud as identity,
  Hd as listLinkedResources,
  g1 as makePrefixesQueryPart,
  sw as makeYasguiUri,
  kd as mg_livraison,
  Bd as mg_livraisons,
  Md as noteOccurences,
  Xd as p127,
  zd as projectAndCollections,
  Zd as scores,
  Kd as selections,
  Jd as tonalitiesContributions,
  Ng as types,
  ew as wemi
};

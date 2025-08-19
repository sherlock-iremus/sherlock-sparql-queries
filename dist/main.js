const gw = "http://data-iremus.huma-num.fr/id/d2a536eb-4a95-484f-b13d-f597ac8ea2fd", ww = "http://data-iremus.huma-num.fr/id/9d0388cb-a178-46b2-b047-b5a98f7bdf0b", dw = "http://data-iremus.huma-num.fr/id/689e148d-a97d-45b4-898d-c395a24884df", $w = "http://data-iremus.huma-num.fr/id/90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86", vw = "http://data-iremus.huma-num.fr/id/6d72746a-9f28-4739-8786-c6415d53c56d", bw = "http://data-iremus.huma-num.fr/id/bf9dce29-8123-4e8e-b24d-0c7f134bbc8e", Aw = "http://data-iremus.huma-num.fr/id/29b00e39-75da-4945-b6c4-a0ca00f96f68", Cw = "http://data-iremus.huma-num.fr/id/82dbd157-20df-422c-88db-28d6075d99a1", Wg = "http://data-iremus.huma-num.fr/id/21816195-6708-4bbd-a758-ee354bb84900", Qg = "http://data-iremus.huma-num.fr/id/cabe46bf-23d4-4392-aa20-b3eb21ad7dfd", _w = (h) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
    VALUES ?project { <${h}> }
    VALUES ?draft { <${Qg}> }
    ?project crm:P2_has_type <${Wg}>.
    ?project crm:P1_is_identified_by ?label.
    ?project crm:P14_carried_out_by ?contributor.
    OPTIONAL { ?project sherlock:has_privacy_type ?draft }.
}
LIMIT 1`, mw = (h, b) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX dcterms: <http://purl.org/dc/terms/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
  ?annotation sherlock:has_document_context <${h}>.
  <${b}> crm:P9_consists_of ?annotation.
  ?annotation crm:P141_assigned ?concept.
  ?annotation dcterms:created ?date.
  ?annotation crm:P140_assigned_attribute_to  ?entity.
  ?e13 crm:P141_assigned ?entity.
  ?e13 sherlock:has_document_context ?page.
}
`, Yg = "http://purl.org/ontology/bibo/", zg = "http://iflastandards.info/ns/lrm/lrmoo/", Zg = "http://www.cidoc-crm.org/cidoc-crm/", Kg = "http://www.ics.forth.gr/isl/CRMdig/", Jg = "http://dbpedia.org/resource/", qg = "http://purl.org/dc/elements/1.1/", e1 = "http://purl.org/dc/terms/", s1 = "http://xmlns.com/foaf/0.1/", r1 = "http://data-iremus.huma-num.fr/ns/hemef#", Ye = "http://data-iremus.huma-num.fr/id/", i1 = "http://data-iremus.huma-num.fr/id/", t1 = "http://data-iremus.huma-num.fr/ns/", l1 = "http://data-iremus.huma-num.fr/graph/", a1 = "http://www.mimo-db.eu/", f1 = "http://data-iremus.huma-num.fr/ns/musrad30#", o1 = "http://www.w3.org/2002/07/owl#", h1 = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", c1 = "http://www.w3.org/2000/01/rdf-schema#", n1 = "http://schema.org/", u1 = "http://www.w3.org/2004/02/skos/core#", p1 = /* @__PURE__ */ new Map([
  [Zg, "crm"],
  [Kg, "crmdig"],
  [Yg, "bibo"],
  [Jg, "dbpedia"],
  [qg, "dc"],
  [e1, "dcterms"],
  [s1, "foaf"],
  [r1, "hemef"],
  [l1, "iremus-graph"],
  [i1, "iremus-data"],
  [t1, "iremus-ns"],
  [zg, "lrmoo"],
  [a1, "mimo"],
  [f1, "musrad30"],
  [o1, "owl"],
  [h1, "rdf"],
  [c1, "rdfs"],
  [n1, "schema"],
  [u1, "skos"]
]);
Object.entries(p1).sort(
  (h, b) => h[0].length < b[0].length ? 1 : -1
);
class g1 {
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
class Lt {
  static void = new Lt("");
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
class Gg extends g1 {
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
class Pt extends Gg {
  static void = new Pt("", "", Lt.void);
  _subClassOf;
  constructor(b, e, T) {
    super(b, e, T), this._subClassOf = new Array();
  }
  addSubClassOf(b) {
    this._subClassOf.push(b);
  }
}
class Cg extends Gg {
  static void = new Cg("", "", Lt.void);
  _domain = Pt.void;
  _inverseOf = Cg.void;
  _range = Pt.void;
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
      VALUES ?contribution_type { <${ye.selection}> } #SELECTION TYPE
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
GROUP BY ?contributor ?name ?hex_color_code ?emoji ?orcid ?orcid_profile ?untyped_identifier ?contributor_type_label ?user_graph`, Tw = (h) => `
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    <${h}> ?lp ?lr .
  }
}
GROUP BY ?lp
`, Lw = (h) => `
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
}`, Sw = (h) => `
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
}`, Ow = (h) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT DISTINCT ?score ?annotation ?verticality ?note_label ?measure_number 
WHERE {
  GRAPH ?g {
    ${w1(h)}
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
`, w1 = (h) => h ? `BIND (<${h}> as ?score).` : "", Nw = () => `
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
`, xw = () => `
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
function d1(h, b) {
  function e() {
    this.constructor = h;
  }
  e.prototype = b.prototype, h.prototype = new e();
}
function jr(h, b, e, T) {
  var x = Error.call(this, h);
  return Object.setPrototypeOf && Object.setPrototypeOf(x, jr.prototype), x.expected = b, x.found = e, x.location = T, x.name = "SyntaxError", x;
}
d1(jr, Error);
function bg(h, b, e) {
  return e = e || " ", h.length > b ? h : (b -= h.length, e += e.repeat(b), h + e.slice(0, b));
}
jr.prototype.format = function(h) {
  var b = "Error: " + this.message;
  if (this.location) {
    var e = null, T;
    for (T = 0; T < h.length; T++)
      if (h[T].source === this.location.source) {
        e = h[T].text.split(/\r\n|\n|\r/g);
        break;
      }
    var x = this.location.start, K = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(x) : x, ue = this.location.source + ":" + K.line + ":" + K.column;
    if (e) {
      var Ee = this.location.end, pe = bg("", K.line.toString().length, " "), S = e[x.line - 1], F = x.line === Ee.line ? Ee.column : S.length + 1, C = F - x.column || 1;
      b += `
 --> ` + ue + `
` + pe + ` |
` + K.line + " | " + S + `
` + pe + " | " + bg("", x.column - 1, " ") + bg("", C, "^");
    } else
      b += `
 at ` + ue;
  }
  return b;
};
jr.buildMessage = function(h, b) {
  var e = {
    literal: function(S) {
      return '"' + x(S.text) + '"';
    },
    class: function(S) {
      var F = S.parts.map(function(C) {
        return Array.isArray(C) ? K(C[0]) + "-" + K(C[1]) : K(C);
      });
      return "[" + (S.inverted ? "^" : "") + F.join("") + "]";
    },
    any: function() {
      return "any character";
    },
    end: function() {
      return "end of input";
    },
    other: function(S) {
      return S.description;
    }
  };
  function T(S) {
    return S.charCodeAt(0).toString(16).toUpperCase();
  }
  function x(S) {
    return S.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(F) {
      return "\\x0" + T(F);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(F) {
      return "\\x" + T(F);
    });
  }
  function K(S) {
    return S.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(F) {
      return "\\x0" + T(F);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(F) {
      return "\\x" + T(F);
    });
  }
  function ue(S) {
    return e[S.type](S);
  }
  function Ee(S) {
    var F = S.map(ue), C, fe;
    if (F.sort(), F.length > 0) {
      for (C = 1, fe = 1; C < F.length; C++)
        F[C - 1] !== F[C] && (F[fe] = F[C], fe++);
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
  function pe(S) {
    return S ? '"' + x(S) + '"' : "end of input";
  }
  return "Expected " + Ee(h) + " but " + pe(b) + " found.";
};
function yt(h, b) {
  b = b !== void 0 ? b : {};
  var e = {}, T = b.grammarSource, x = { DOCUMENT: ki }, K = ki, ue = "base", Ee = "prefix", pe = "select", S = "distinct", F = "reduced", C = "(", fe = "as", E = ")", ee = "*", Xr = "construct", Je = "where", ge = "{", we = "}", It = "describe", St = "ask", Ot = "from", Gs = "named", Nt = "group", Vr = "by", xt = "having", Ft = "order", Dt = "asc", Gt = "desc", Ut = "limit", Bt = "offset", Wr = "values", Pe = ";", Ht = "load", de = "silent", Mt = "into", jt = "clear", kt = "drop", Xt = "create", Vt = "add", Us = "to", Wt = "move", Qt = "copy", Qr = "insert", Yr = "data", Bs = "delete", Yt = "with", zt = "using", zr = "default", qe = "graph", Zt = "all", X = ".", Kt = "optional", Jt = "service", qt = "bind", Zr = "UNDEF", el = "minus", Kr = "union", sl = "filter", D = ",", es = "a", ss = "|", oe = "/", Jr = "^", Hs = "?", $e = "+", Ms = "!", js = "[", ks = "]", rs = "||", is = "&&", ts = "=", ls = "!=", Xs = "<", Vs = ">", as = "<=", fs = ">=", os = "in", Ws = "not", ie = "-", rl = "str", il = "lang", tl = "langmatches", ll = "datatype", al = "bound", fl = "iri", ol = "uri", hl = "bnode", cl = "rand", nl = "abs", ul = "ceil", pl = "floor", gl = "round", wl = "concat", dl = "strlen", $l = "ucase", vl = "lcase", bl = "encode_for_uri", Al = "contains", Cl = "strbefore", _l = "strstarts", ml = "strends", El = "strafter", yl = "year", Pl = "month", Tl = "day", Ll = "hours", Rl = "minutes", Il = "seconds", Sl = "timezone", Ol = "tz", Nl = "now", xl = "uuid", Fl = "struuid", Dl = "md5", Gl = "sha1", Ul = "sha256", Bl = "sha384", Hl = "sha512", Ml = "coalesce", jl = "if", kl = "strlang", Xl = "strdt", Vl = "sameterm", Wl = "isuri", Ql = "isiri", Yl = "isblank", zl = "isliteral", Zl = "isnumeric", Kl = "regex", Jl = "substr", ql = "replace", qr = "exists", ea = "count", sa = "sum", ra = "min", ia = "max", ta = "avg", la = "sample", aa = "group_concat", fa = "separator", ei = "^^", oa = "true", ha = "false", Te = ":", si = "_:", ri = "$", ii = "@", He = "'", hs = '"', cs = "'''", ns = "''", us = '"""', ps = '""', ti = "\\", Qs = "#", li = "_", ai = "%", ca = "~", na = "&", fi = /^[^<>"{}|\^`\\\0- ]/, B = /^[0-9]/, oi = /^[a-zA-Z]/, gs = /^[a-zA-Z0-9]/, ua = /^[eE]/, pa = /^[+\-]/, hi = /^[^'\\\n\r]/, ci = /^[^"\\\n\r]/, ni = /^[^'\\]/, ui = /^[^"\\]/, ga = /^[tbnrf\\"']/, wa = /^[ \t]/, da = /^[\r\n]/, $a = /^[^\r\n]/, va = /^[A-Z]/, ba = /^[a-z]/, Aa = /^[\xC0-\xD6]/, Ca = /^[\xD8-\xF6]/, _a = /^[\xF8-\u02FF]/, ma = /^[\u0370-\u037D]/, Ea = /^[\u037F-\u1FFF]/, ya = /^[\u200C-\u200D]/, Pa = /^[\u2070-\u218F]/, Ta = /^[\u2C00-\u2FEF]/, La = /^[\u3001-\uD7FF]/, Ra = /^[\uF900-\uFDCF]/, Ia = /^[\uFDF0-\uFFFD]/, Ys = /^[\xB7]/, zs = /^[\u0300-\u036F]/, Zs = /^[\u203F-\u2040]/, Sa = /^[A-F]/, Oa = /^[a-f]/, Na = v("BASE", !0), xa = v("PREFIX", !0), Fa = v("SELECT", !0), he = v("DISTINCT", !0), Da = v("REDUCED", !0), y = v("(", !1), ws = v("AS", !0), P = v(")", !1), se = v("*", !1), pi = v("CONSTRUCT", !0), ds = v("WHERE", !0), ve = v("{", !1), be = v("}", !1), Ga = v("DESCRIBE", !0), Ua = v("ASK", !0), Ba = v("FROM", !0), Ks = v("NAMED", !0), Ha = v("GROUP", !0), gi = v("BY", !0), Ma = v("HAVING", !0), ja = v("ORDER", !0), ka = v("ASC", !0), Xa = v("DESC", !0), Va = v("LIMIT", !0), Wa = v("OFFSET", !0), wi = v("VALUES", !0), Le = v(";", !1), Qa = v("LOAD", !0), Ae = v("SILENT", !0), Ya = v("INTO", !0), za = v("CLEAR", !0), Za = v("DROP", !0), Ka = v("CREATE", !0), Ja = v("ADD", !0), Js = v("TO", !0), qa = v("MOVE", !0), ef = v("COPY", !0), di = v("INSERT", !0), $i = v("DATA", !0), qs = v("DELETE", !0), sf = v("WITH", !0), rf = v("USING", !0), vi = v("DEFAULT", !0), $s = v("GRAPH", !0), tf = v("ALL", !0), V = v(".", !1), lf = v("OPTIONAL", !0), af = v("SERVICE", !0), ff = v("BIND", !0), of = v("UNDEF", !1), hf = v("MINUS", !0), bi = v("UNION", !0), cf = v("FILTER", !0), G = v(",", !1), vs = v("a", !1), bs = v("|", !1), ce = v("/", !1), Ai = v("^", !1), er = v("?", !1), Ce = v("+", !1), sr = v("!", !1), rr = v("[", !1), ir = v("]", !1), Ci = v("||", !1), _i = v("&&", !1), As = v("=", !1), mi = v("!=", !1), tr = v("<", !1), lr = v(">", !1), Ei = v("<=", !1), yi = v(">=", !1), Cs = v("IN", !0), ar = v("NOT", !0), te = v("-", !1), nf = v("STR", !0), uf = v("LANG", !0), pf = v("LANGMATCHES", !0), gf = v("DATATYPE", !0), wf = v("BOUND", !0), df = v("IRI", !0), $f = v("URI", !0), vf = v("BNODE", !0), bf = v("RAND", !0), Af = v("ABS", !0), Cf = v("CEIL", !0), _f = v("FLOOR", !0), mf = v("ROUND", !0), Ef = v("CONCAT", !0), yf = v("STRLEN", !0), Pf = v("UCASE", !0), Tf = v("LCASE", !0), Lf = v("ENCODE_FOR_URI", !0), Rf = v("CONTAINS", !0), If = v("STRBEFORE", !0), Sf = v("STRSTARTS", !0), Of = v("STRENDS", !0), Nf = v("STRAFTER", !0), xf = v("YEAR", !0), Ff = v("MONTH", !0), Df = v("DAY", !0), Gf = v("HOURS", !0), Uf = v("MINUTES", !0), Bf = v("SECONDS", !0), Hf = v("TIMEZONE", !0), Mf = v("TZ", !0), jf = v("NOW", !0), kf = v("UUID", !0), Xf = v("STRUUID", !0), Vf = v("MD5", !0), Wf = v("SHA1", !0), Qf = v("SHA256", !0), Yf = v("SHA384", !0), zf = v("SHA512", !0), Zf = v("COALESCE", !0), Kf = v("IF", !0), Jf = v("STRLANG", !0), qf = v("STRDT", !0), eo = v("sameTerm", !0), so = v("isURI", !0), ro = v("isIRI", !0), io = v("isBLANK", !0), to = v("isLITERAL", !0), lo = v("isNUMERIC", !0), ao = v("REGEX", !0), fo = v("SUBSTR", !0), oo = v("REPLACE", !0), Pi = v("EXISTS", !0), ho = v("COUNT", !0), co = v("SUM", !0), no = v("MIN", !0), uo = v("MAX", !0), po = v("AVG", !0), go = v("SAMPLE", !0), wo = v("GROUP_CONCAT", !0), $o = v("SEPARATOR", !0), vo = v("^^", !1), bo = v("true", !0), Ao = v("false", !0), Ti = N(["<", ">", '"', "{", "}", "|", "^", "`", "\\", ["\0", " "]], !0, !1), Re = v(":", !1), Co = v("_:", !1), H = N([["0", "9"]], !1, !1), Li = v("$", !1), Ri = v("@", !1), Ii = N([["a", "z"], ["A", "Z"]], !1, !1), _s = N([["a", "z"], ["A", "Z"], ["0", "9"]], !1, !1), _o = N(["e", "E"], !1, !1), mo = N(["+", "-"], !1, !1), Me = v("'", !1), Si = N(["'", "\\", `
`, "\r"], !0, !1), ms = v('"', !1), Oi = N(['"', "\\", `
`, "\r"], !0, !1), Ni = v("'''", !1), xi = v("''", !1), Fi = N(["'", "\\"], !0, !1), Di = v('"""', !1), Gi = v('""', !1), Ui = N(['"', "\\"], !0, !1), Bi = v("\\", !1), Eo = N(["t", "b", "n", "r", "f", "\\", '"', "'"], !1, !1), yo = N([" ", "	"], !1, !1), Po = N(["\r", `
`], !1, !1), To = N(["\r", `
`], !0, !1), fr = v("#", !1), Lo = N([["A", "Z"]], !1, !1), Ro = N([["a", "z"]], !1, !1), Io = N([["À", "Ö"]], !1, !1), So = N([["Ø", "ö"]], !1, !1), Oo = N([["ø", "˿"]], !1, !1), No = N([["Ͱ", "ͽ"]], !1, !1), xo = N([["Ϳ", "῿"]], !1, !1), Fo = N([["‌", "‍"]], !1, !1), Do = N([["⁰", "↏"]], !1, !1), Go = N([["Ⰰ", "⿯"]], !1, !1), Uo = N([["、", "퟿"]], !1, !1), Bo = N([["豈", "﷏"]], !1, !1), Ho = N([["ﷰ", "�"]], !1, !1), Hi = v("_", !1), or = N(["·"], !1, !1), hr = N([["̀", "ͯ"]], !1, !1), cr = N([["‿", "⁀"]], !1, !1), Mi = v("%", !1), Mo = N([["A", "F"]], !1, !1), jo = N([["a", "f"]], !1, !1), ko = v("~", !1), Xo = v("&", !1), Vo = function(i, r) {
    let f = {};
    i.length ? f = {
      headers: i,
      ...r
    } : f = r;
    const t = Object.entries(_t).map(([l, o]) => ({
      pos: parseInt(l),
      text: o
    }));
    return t.length && (f.comments = t), {
      "@context": "https://purl.org/sparql-formatter/context.jsonld",
      ...f
    };
  }, Wo = function(i, r, f) {
    let t = { type: "Query" };
    return i && (t.prologue = i), r.type === "SelectQuery" ? t.selectQuery = r : r.type === "ConstructQuery" ? t.constructQuery = r : r.type === "DescribeQuery" ? t.describeQuery = r : r.type === "AskQuery" && (t.askQuery = r), f && (t.values = f), t;
  }, Qo = function(i) {
    if (i.length)
      return {
        type: "Prologue",
        decl: i
      };
  }, Yo = function(i) {
    return {
      type: "BaseDecl",
      iriref: i
    };
  }, zo = function(i, r) {
    return {
      type: "PrefixDecl",
      pn_prefix: i,
      iriref: r
    };
  }, Zo = function(i, r, f, t) {
    return r.length && (i.from = r), i = {
      type: "SelectQuery",
      selectClause: i,
      whereClause: f,
      ...t
    }, i;
  }, Ko = function(i, r, f, t) {
    let l = {
      type: "SubSelect",
      selectClause: i,
      whereClause: r,
      ...f,
      location: I()
    };
    return t && (l.values = t), l;
  }, Jo = function(i, r) {
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
  }, qo = function(i, r, f, t) {
    let l = { type: "ConstructQuery" };
    return r.length && (l.from = r), l = {
      ...l,
      template: i,
      where: f,
      ...t,
      location: I()
    }, l;
  }, eh = function(i, r, f) {
    let t = { type: "ConstructQuery" };
    return i.length && (t.from = i), t = {
      ...t,
      where: [r],
      ...f,
      location: I()
    }, t;
  }, sh = function(i, r, f, t) {
    let l = { type: "DescribeQuery" };
    return r.length && (l.from = r), l.describe = i, f && (l.where = f), l = {
      ...l,
      ...t,
      location: I()
    }, l;
  }, rh = function(i, r, f) {
    let t = { type: "AskQuery" };
    return i.length && (t.from = i), t = {
      ...t,
      where: r,
      ...f,
      location: I()
    }, t;
  }, ih = function(i) {
    return i;
  }, th = function(i) {
    return {
      graph: i,
      location: I()
    };
  }, lh = function(i) {
    return {
      namedGraph: i,
      location: I()
    };
  }, ah = function(i) {
    return i.graphPattern || i;
  }, fh = function(i, r, f, t) {
    let l = {};
    return i && (l.group = i), r && (l.having = r), f && (l.orderBy = f), t && (l.limitOffset = t), l;
  }, oh = function(i) {
    return i;
  }, hh = function(i) {
    return i;
  }, ch = function(i) {
    return i;
  }, nh = function(i, r) {
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
  }, uh = function(i) {
    return i;
  }, ph = function(i) {
    return i;
  }, gh = function(i) {
    return i;
  }, wh = function(i) {
    return i;
  }, dh = function(i, r) {
    let f = {};
    return i.toUpperCase() === "ASC" ? f = {
      asc: !0,
      ...r
    } : i.toUpperCase() === "DESC" && (f = {
      desc: !0,
      ...r
    }), f;
  }, $h = function(i) {
    return i;
  }, vh = function(i) {
    let r = [i[0]];
    return i[1] && r.push(i[1]), r;
  }, bh = function(i) {
    return {
      limit: parseInt(i.literal)
    };
  }, Ah = function(i) {
    return {
      offset: parseInt(i.literal)
    };
  }, Ch = function(i) {
    return i ? i[1] : null;
  }, _h = function(i, r) {
    let f = { type: "Update" };
    i && (f.prologue = i);
    let t = [];
    return r && (t = [r[1]], r[2] && (t = t.concat(r[2][3].update))), f.update = t, f;
  }, mh = function(i, r, f) {
    let t = {
      type: "load",
      silent: i,
      sourceGraph: r
    };
    return f && (t.destinyGraph = f[2]), t;
  }, Eh = function(i, r) {
    return {
      type: "clear",
      silent: i,
      destinyGraph: r
    };
  }, yh = function(i, r) {
    return {
      type: "drop",
      silent: i,
      destinyGraph: r
    };
  }, Ph = function(i, r) {
    return {
      type: "create",
      silent: i,
      destinyGraph: r
    };
  }, Th = function(i, r, f) {
    return {
      type: "add",
      silent: i,
      graphs: [r, f]
    };
  }, Lh = function(i, r, f) {
    return {
      type: "move",
      silent: i,
      graphs: [r, f]
    };
  }, Rh = function(i, r, f) {
    return {
      type: "copy",
      silent: i,
      graphs: [r, f]
    };
  }, Ih = function(i) {
    return {
      type: "insertdata",
      insert: i
    };
  }, Sh = function(i) {
    return {
      type: "deletedata",
      delete: i
    };
  }, Oh = function(i) {
    return {
      type: "deletewhere",
      delete: i
    };
  }, Nh = function(i, r, f, t) {
    let l = {
      type: "modify"
    };
    return i && (l.with = i[2]), r.length === 3 ? (l.delete = r[0], r[2] && (l.insert = r[2])) : l.insert = r, f.length && (l.using = f), l.where = t.graphPattern, l;
  }, xh = function(i) {
    return i;
  }, Fh = function(i) {
    return i;
  }, Dh = function(i) {
    return i.length === 3 ? {
      named: !0,
      iri: i[2]
    } : {
      iri: i
    };
  }, Gh = function() {
    return "default";
  }, Uh = function(i) {
    return i;
  }, Bh = function(i) {
    return i;
  }, Hh = function(i) {
    return i;
  }, Mh = function() {
    return "default";
  }, jh = function() {
    return "named";
  }, kh = function() {
    return "all";
  }, Xh = function(i) {
    return i;
  }, Vh = function(i) {
    return i;
  }, Wh = function(i, r) {
    let f = [];
    return i && (f = f.concat(i)), r.forEach((t) => {
      f = f.concat(t[0]), t[2] && (f = f.concat(t[2]));
    }), f;
  }, Qh = function(i, r) {
    return {
      graph: i,
      ...r
    };
  }, Yh = function(i, r) {
    let f = [i];
    return r && r[3] && (f = f.concat(r[3].triplePattern)), {
      triplePattern: f,
      location: I()
    };
  }, zh = function(i) {
    return i;
  }, Zh = function(i, r) {
    let f = [];
    return i && f.push(i), r.forEach((t) => {
      f.push(t[0]), t[4] && f.push(t[4]);
    }), {
      graphPattern: f,
      location: I()
    };
  }, Kh = function(i, r) {
    let f = [];
    return r && r[3] ? f = [i].concat(r[3].triplePattern) : f = [i], {
      type: "TriplesBlock",
      triplePattern: f,
      location: I()
    };
  }, Jh = function(i) {
    return {
      type: "OptionalGraphPattern",
      optional: i.graphPattern || i,
      location: I()
    };
  }, qh = function(i, r) {
    return {
      type: "GraphGraphPattern",
      graph: i,
      ...r
    };
  }, ec = function(i, r, f) {
    let t = {
      type: "ServiceGraphPattern",
      service: r,
      pattern: f.graphPattern || f
    };
    return i && (t.silent = !0), t.location = I(), t;
  }, sc = function(i, r) {
    return {
      type: "Bind",
      bind: i,
      as: r,
      location: I()
    };
  }, rc = function(i) {
    return i;
  }, ic = function(i, r) {
    return {
      oneVar: i,
      data: r,
      location: I()
    };
  }, tc = function(i, r) {
    return {
      variables: i,
      data: r,
      location: I()
    };
  }, lc = function(i) {
    return i;
  }, ac = function(i) {
    return i;
  }, fc = function(i) {
    return {
      type: "MinusGraphPattern",
      minus: i.graphPattern || i,
      location: I()
    };
  }, oc = function(i, r) {
    return r.length ? {
      union: [i, ...r],
      location: I()
    } : i;
  }, hc = function(i) {
    return {
      type: "Filter",
      filter: i,
      location: I()
    };
  }, cc = function(i, r) {
    return {
      functionRef: i,
      args: r.list,
      location: I()
    };
  }, nc = function() {
    return {
      list: []
    };
  }, uc = function(i, r, f) {
    return {
      distinct: !!i,
      list: [r, ...f]
    };
  }, pc = function() {
    return [];
  }, gc = function(i, r) {
    return [i, ...r];
  }, wc = function(i) {
    return i;
  }, dc = function(i, r) {
    let f = [i];
    return r && r[3] && (f = f.concat(r[3].triplePattern)), {
      triplePattern: f,
      location: I()
    };
  }, $c = function(i, r) {
    return {
      subject: i,
      properties: r
    };
  }, vc = function(i, r) {
    return {
      subject: i,
      properties: r
    };
  }, bc = function(i, r, f) {
    let t = [];
    return t.push({ predicate: i, objects: r }), f.forEach((l) => {
      l[3] && t.push({ predicate: l[3][0], objects: l[3][2] });
    }), t;
  }, Ac = function() {
    return {
      a: !0,
      location: I()
    };
  }, Cc = function(i, r) {
    return [i, ...r];
  }, _c = function(i, r) {
    return {
      subject: i,
      properties: r
    };
  }, mc = function(i, r) {
    return {
      subject: i,
      properties: r
    };
  }, Ec = function(i, r, f) {
    let t = [];
    return t.push({ predicate: i, objects: r }), f.forEach((l) => {
      l[3] && t.push({ predicate: l[3][0], objects: l[3][2] });
    }), t;
  }, yc = function(i, r) {
    return [i, ...r];
  }, Pc = function(i, r) {
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
  }, Tc = function(i, r) {
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
  }, Lc = function(i, r) {
    return r && (i.modifier = r), i;
  }, Rc = function(i) {
    return i.inverse = !0, i;
  }, Ic = function() {
    return {
      a: !0,
      location: I()
    };
  }, Sc = function(i) {
    return {
      bracketted: !0,
      ...i
    };
  }, Oc = function(i) {
    return {
      collection: i,
      location: I()
    };
  }, Nc = function(i) {
    return {
      blankNodeProperties: i,
      location: I()
    };
  }, xc = function(i) {
    return {
      collection: i,
      location: I()
    };
  }, Fc = function(i) {
    return {
      blankNodeProperties: i,
      location: I()
    };
  }, Dc = function(i) {
    return i;
  }, Gc = function(i) {
    return i;
  }, Uc = function(i) {
    return i;
  }, Bc = function(i) {
    return i;
  }, Hc = function(i) {
    return {
      ...i,
      location: I()
    };
  }, Mc = function(i, r) {
    return r.length ? {
      expressionType: "conditionalor",
      operands: [i, ...r]
    } : i;
  }, jc = function(i, r) {
    return r.length ? {
      expressionType: "conditionaland",
      operands: [i, ...r]
    } : i;
  }, kc = function(i, r) {
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
  }, Xc = function(i, r) {
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
  }, Vc = function(i, r) {
    return r.length ? {
      expressionType: "multiplicativeexpression",
      first: i,
      rest: r.map((f) => ({ operator: f[1], expression: f[3] }))
    } : i;
  }, Wc = function(i) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "!",
      expression: i
    };
  }, Qc = function(i) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "+",
      expression: i
    };
  }, Yc = function(i) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "-",
      expression: i
    };
  }, zc = function(i) {
    return {
      expressionType: "atomic",
      value: i
    };
  }, Zc = function(i) {
    return {
      expressionType: "atomic",
      value: i
    };
  }, Kc = function(i) {
    return {
      expressionType: "atomic",
      value: i
    };
  }, Jc = function(i) {
    return {
      expressionType: "atomic",
      value: i
    };
  }, qc = function(i) {
    return {
      bracketted: !0,
      ...i
    };
  }, en = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "str",
      args: [i]
    };
  }, sn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "lang",
      args: [i]
    };
  }, rn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "langMatches",
      args: [i, r]
    };
  }, tn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "datatype",
      args: [i]
    };
  }, ln = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "bound",
      args: [i]
    };
  }, an = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "IRI",
      args: [i]
    };
  }, fn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "URI",
      args: [i]
    };
  }, on = function(i) {
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
  }, cn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "abs",
      args: [i]
    };
  }, nn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "ceil",
      args: [i]
    };
  }, un = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "floor",
      args: [i]
    };
  }, pn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "round",
      args: [i]
    };
  }, gn = function(i) {
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
  }, dn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "UCASE",
      args: [i]
    };
  }, $n = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "LCASE",
      args: [i]
    };
  }, vn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "ENCODE_FOR_URI",
      args: [i]
    };
  }, bn = function(i, r) {
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
  }, _n = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRENDS",
      args: [i, r]
    };
  }, mn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRAFTER",
      args: [i, r]
    };
  }, En = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "year",
      args: [i]
    };
  }, yn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "month",
      args: [i]
    };
  }, Pn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "day",
      args: [i]
    };
  }, Tn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "hours",
      args: [i]
    };
  }, Ln = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "minutes",
      args: [i]
    };
  }, Rn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "seconds",
      args: [i]
    };
  }, In = function(i) {
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
  }, On = function() {
    return {
      expressionType: "builtincall",
      builtincall: "now"
    };
  }, Nn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "UUID"
    };
  }, xn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "STRUUID"
    };
  }, Fn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "MD5",
      args: [i]
    };
  }, Dn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA1",
      args: [i]
    };
  }, Gn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA256",
      args: [i]
    };
  }, Un = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA384",
      args: [i]
    };
  }, Bn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA512",
      args: [i]
    };
  }, Hn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "COALESCE",
      args: i
    };
  }, Mn = function(i, r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "IF",
      args: [i, r, f]
    };
  }, jn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRLANG",
      args: [i, r]
    };
  }, kn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "STRDT",
      args: [i, r]
    };
  }, Xn = function(i, r) {
    return {
      expressionType: "builtincall",
      builtincall: "sameTerm",
      args: [i, r]
    };
  }, Vn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "isURI",
      args: [i]
    };
  }, Wn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "isBlank",
      args: [i]
    };
  }, Qn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "isLiteral",
      args: [i]
    };
  }, Yn = function(i) {
    return {
      expressionType: "builtincall",
      builtincall: "isNumeric",
      args: [i]
    };
  }, zn = function(i, r, f) {
    let t = {
      expressionType: "regex",
      text: i,
      pattern: r
    };
    return f && (t.flags = f[2]), t;
  }, Zn = function(i, r, f) {
    let t = [i, r];
    return f && t.push(f[2]), {
      expressionType: "builtincall",
      builtincall: "substr",
      args: t
    };
  }, Kn = function(i, r, f, t) {
    let l = [i, r, f];
    return t && l.push(t[2]), {
      expressionType: "builtincall",
      builtincall: "replace",
      args: l
    };
  }, Jn = function(i) {
    return {
      exists: i.graphPattern || i
    };
  }, qn = function(i) {
    return {
      notexists: i.graphPattern || i
    };
  }, eu = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "count",
      distinct: !!i,
      expression: r
    };
  }, su = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "sum",
      distinct: !!i,
      expression: r
    };
  }, ru = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "min",
      distinct: !!i,
      expression: r
    };
  }, iu = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "max",
      distinct: !!i,
      expression: r
    };
  }, tu = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "avg",
      distinct: !!i,
      expression: r
    };
  }, lu = function(i, r) {
    return {
      expressionType: "aggregate",
      aggregateType: "sample",
      distinct: !!i,
      expression: r
    };
  }, au = function(i, r, f) {
    let t = null;
    return f?.length && (t = f[7]), {
      expressionType: "aggregate",
      aggregateType: "group_concat",
      expression: r,
      separator: t,
      distinct: !!i
    };
  }, fu = function(i, r) {
    let f = {
      expressionType: "irireforfunction",
      iriref: i
    };
    return r && (f.args = r.list), f;
  }, ou = function(i, r) {
    return typeof r == "string" ? i.lang = r : r && (i.dataType = r[1]), i.location = I(), i;
  }, hu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !0
    };
  }, cu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !1
    };
  }, nu = function(i) {
    return {
      type: "IRIref",
      iriref: i,
      location: I()
    };
  }, uu = function(i) {
    return i;
  }, pu = function(i) {
    return {
      type: "PrefixedName",
      pn_prefix: i.pn_prefix,
      pn_local: i.pn_local,
      location: I()
    };
  }, gu = function(i) {
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
  }, du = function() {
    return {
      blankNode: "[]",
      location: I()
    };
  }, $u = function(i) {
    return i.join("");
  }, vu = function(i) {
    return i || "";
  }, bu = function(i, r) {
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
  }, _u = function(i) {
    return {
      type: "Var",
      varType: "VAR2",
      varname: i
    };
  }, mu = function(i, r) {
    let f = i.join("");
    return r.length && (f += "-" + r[0][1].join("")), f.toLowerCase();
  }, Eu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#integer",
      literal: J()
    };
  }, yu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#decimal",
      literal: J()
    };
  }, Pu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
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
  }, Ru = function(i) {
    return i.literal = "+" + i.literal, i;
  }, Iu = function(i) {
    return i.literal = "+" + i.literal, i;
  }, Su = function(i) {
    return i.literal = "+" + i.literal, i;
  }, Ou = function(i) {
    return i.literal = "-" + i.literal, i;
  }, Nu = function(i) {
    return i.literal = "-" + i.literal, i;
  }, xu = function(i) {
    return i.literal = "-" + i.literal, i;
  }, Fu = function(i) {
    return {
      quote: "'",
      literal: i.join("")
      // except ' \ LF CR
    };
  }, Du = function(i) {
    return {
      quote: '"',
      literal: i.join("")
      // except " \ LF CR
    };
  }, Gu = function(i) {
    return {
      quote: "'''",
      literal: i.map((r) => r[0] ? r[0] + r[1] : r[1]).join("")
    };
  }, Uu = function(i) {
    return {
      quote: '"""',
      literal: i.map((r) => r[0] ? r[0] + r[1] : r[1]).join("")
    };
  }, Bu = function() {
    return J();
  }, Hu = function() {
    return J();
  }, Mu = function() {
    return _t[I().start.offset] = J(), "";
  }, ju = function() {
    return J();
  }, ku = function() {
    return J();
  }, Xu = function() {
    return J();
  }, s = 0, d = 0, Es = [{ line: 1, column: 1 }], le = 0, nr = [], ys;
  if ("startRule" in b) {
    if (!(b.startRule in x))
      throw new Error(`Can't start parsing from rule "` + b.startRule + '".');
    K = x[b.startRule];
  }
  function J() {
    return h.substring(d, s);
  }
  function I() {
    return ur(d, s);
  }
  function v(i, r) {
    return { type: "literal", text: i, ignoreCase: r };
  }
  function N(i, r, f) {
    return { type: "class", parts: i, inverted: r, ignoreCase: f };
  }
  function Vu() {
    return { type: "end" };
  }
  function ji(i) {
    var r = Es[i], f;
    if (r)
      return r;
    for (f = i - 1; !Es[f]; )
      f--;
    for (r = Es[f], r = {
      line: r.line,
      column: r.column
    }; f < i; )
      h.charCodeAt(f) === 10 ? (r.line++, r.column = 1) : r.column++, f++;
    return Es[i] = r, r;
  }
  function ur(i, r, f) {
    var t = ji(i), l = ji(r), o = {
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
    s < le || (s > le && (le = s, nr = []), nr.push(i));
  }
  function Wu(i, r, f) {
    return new jr(
      jr.buildMessage(i, r),
      i,
      r,
      f
    );
  }
  function ki() {
    var i, r, f, t, l, o;
    for (i = s, r = [], f = vt(); f !== e; )
      r.push(f), f = vt();
    for (f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (t = Qu(), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      d = i, i = Vo(r, t);
    } else
      s = i, i = e;
    return i;
  }
  function Qu() {
    var i;
    return i = Yu(), i === e && (i = et()), i;
  }
  function Yu() {
    var i, r, f, t, l;
    for (i = s, r = Xi(), f = [], t = a(); t !== e; )
      f.push(t), t = a();
    return t = zu(), t === e && (t = Ku(), t === e && (t = Ju(), t === e && (t = qu()))), t !== e ? (l = qi(), d = i, i = Wo(r, t, l)) : (s = i, i = e), i;
  }
  function Xi() {
    var i, r, f;
    for (i = s, r = [], f = Vi(), f === e && (f = Wi()); f !== e; )
      r.push(f), f = Vi(), f === e && (f = Wi());
    return d = i, r = Qo(r), i = r, i;
  }
  function Vi() {
    var i, r, f, t, l;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 4).toLowerCase() === ue ? (f = h.substr(s, 4), s += 4) : (f = e, p(Na)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = Or(), l !== e ? (d = i, i = Yo(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Wi() {
    var i, r, f, t, l, o, c;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 6).toLowerCase() === Ee ? (f = h.substr(s, 6), s += 6) : (f = e, p(xa)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = Nr(), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = Or(), c !== e ? (d = i, i = zo(l, c)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function zu() {
    var i, r, f, t, l, o, c, n;
    if (i = s, r = Qi(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (t = [], l = ae(); l !== e; )
        t.push(l), l = ae();
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = je(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Se(), d = i, i = Zo(r, t, o, n);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Zu() {
    var i, r, f, t, l, o, c;
    if (i = s, r = Qi(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = je(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        o = Se(), c = qi(), d = i, i = Ko(r, t, o, c);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Qi() {
    var i, r, f, t, l, o, c, n, u, g, w, $, A, m, L, R, O;
    if (i = s, h.substr(s, 6).toLowerCase() === pe ? (r = h.substr(s, 6), s += 6) : (r = e, p(Fa)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (h.substr(s, 8).toLowerCase() === S ? (t = h.substr(s, 8), s += 8) : (t = e, p(he)), t === e && (h.substr(s, 7).toLowerCase() === F ? (t = h.substr(s, 7), s += 7) : (t = e, p(Da))), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      for (o = [], c = s, n = [], u = a(); u !== e; )
        n.push(u), u = a();
      if (u = k(), u !== e ? (n = [n, u], c = n) : (s = c, c = e), c === e) {
        for (c = s, n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.charCodeAt(s) === 40 ? (u = C, s++) : (u = e, p(y)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          if (w = _(), w !== e) {
            for ($ = [], A = a(); A !== e; )
              $.push(A), A = a();
            if (h.substr(s, 2).toLowerCase() === fe ? (A = h.substr(s, 2), s += 2) : (A = e, p(ws)), A !== e) {
              for (m = [], L = a(); L !== e; )
                m.push(L), L = a();
              if (L = k(), L !== e) {
                for (R = [], O = a(); O !== e; )
                  R.push(O), O = a();
                h.charCodeAt(s) === 41 ? (O = E, s++) : (O = e, p(P)), O !== e ? (n = [n, u, g, w, $, A, m, L, R, O], c = n) : (s = c, c = e);
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
                for ($ = [], A = a(); A !== e; )
                  $.push(A), A = a();
                if (h.substr(s, 2).toLowerCase() === fe ? (A = h.substr(s, 2), s += 2) : (A = e, p(ws)), A !== e) {
                  for (m = [], L = a(); L !== e; )
                    m.push(L), L = a();
                  if (L = k(), L !== e) {
                    for (R = [], O = a(); O !== e; )
                      R.push(O), O = a();
                    h.charCodeAt(s) === 41 ? (O = E, s++) : (O = e, p(P)), O !== e ? (n = [n, u, g, w, $, A, m, L, R, O], c = n) : (s = c, c = e);
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
      o === e && (h.charCodeAt(s) === 42 ? (o = ee, s++) : (o = e, p(se))), o !== e ? (d = i, i = Jo(t, o)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Ku() {
    var i, r, f, t, l, o, c, n, u, g, w, $, A, m;
    if (i = s, h.substr(s, 9).toLowerCase() === Xr ? (r = h.substr(s, 9), s += 9) : (r = e, p(pi)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = Ip(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        for (o = [], c = ae(); c !== e; )
          o.push(c), c = ae();
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (n = je(), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          g = Se(), d = i, i = qo(t, o, n, g);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    if (i === e)
      if (i = s, h.substr(s, 9).toLowerCase() === Xr ? (r = h.substr(s, 9), s += 9) : (r = e, p(pi)), r !== e) {
        for (f = [], t = a(); t !== e; )
          f.push(t), t = a();
        for (t = [], l = ae(); l !== e; )
          t.push(l), l = ae();
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (h.substr(s, 5).toLowerCase() === Je ? (o = h.substr(s, 5), s += 5) : (o = e, p(ds)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          if (h.charCodeAt(s) === 123 ? (n = ge, s++) : (n = e, p(ve)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            for (g = Ne(), g === e && (g = null), w = [], $ = a(); $ !== e; )
              w.push($), $ = a();
            if (h.charCodeAt(s) === 125 ? ($ = we, s++) : ($ = e, p(be)), $ !== e) {
              for (A = [], m = a(); m !== e; )
                A.push(m), m = a();
              m = Se(), d = i, i = eh(t, g, m);
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
  function Ju() {
    var i, r, f, t, l, o, c, n, u, g;
    if (i = s, h.substr(s, 8).toLowerCase() === It ? (r = h.substr(s, 8), s += 8) : (r = e, p(Ga)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = [], l = Fe(), l !== e)
        for (; l !== e; )
          t.push(l), l = Fe();
      else
        t = e;
      if (t === e && (h.charCodeAt(s) === 42 ? (t = ee, s++) : (t = e, p(se))), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        for (o = [], c = ae(); c !== e; )
          o.push(c), c = ae();
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        for (n = je(), n === e && (n = null), u = [], g = a(); g !== e; )
          u.push(g), g = a();
        g = Se(), d = i, i = sh(t, o, n, g);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function qu() {
    var i, r, f, t, l, o, c, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 3).toLowerCase() === St ? (f = h.substr(s, 3), s += 3) : (f = e, p(Ua)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = [], o = ae(); o !== e; )
        l.push(o), o = ae();
      for (o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (c = je(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Se(), d = i, i = rh(l, c, u);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function ae() {
    var i, r, f, t, l, o;
    if (i = s, h.substr(s, 4).toLowerCase() === Ot ? (r = h.substr(s, 4), s += 4) : (r = e, p(Ba)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = ep(), t === e && (t = sp()), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        d = i, i = ih(t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function ep() {
    var i, r, f;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    return f = W(), f !== e ? (d = i, i = th(f)) : (s = i, i = e), i;
  }
  function sp() {
    var i, r, f, t;
    if (i = s, h.substr(s, 5).toLowerCase() === Gs ? (r = h.substr(s, 5), s += 5) : (r = e, p(Ks)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = W(), t !== e ? (d = i, i = lh(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function je() {
    var i, r, f;
    for (i = s, h.substr(s, 5).toLowerCase() === Je ? (h.substr(s, 5), s += 5) : p(ds), r = [], f = a(); f !== e; )
      r.push(f), f = a();
    return f = re(), f !== e ? (d = i, i = ah(f)) : (s = i, i = e), i;
  }
  function Se() {
    var i, r, f, t, l;
    return i = s, r = rp(), r === e && (r = null), f = ip(), f === e && (f = null), t = tp(), t === e && (t = null), l = lp(), l === e && (l = null), d = i, i = fh(r, f, t, l), i;
  }
  function rp() {
    var i, r, f, t, l, o, c;
    if (i = s, h.substr(s, 5).toLowerCase() === Nt ? (r = h.substr(s, 5), s += 5) : (r = e, p(Ha)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (h.substr(s, 2).toLowerCase() === Vr ? (t = h.substr(s, 2), s += 2) : (t = e, p(gi)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (o = [], c = Yi(), c !== e)
          for (; c !== e; )
            o.push(c), c = Yi();
        else
          o = e;
        o !== e ? (d = i, i = oh(o)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Yi() {
    var i, r, f, t, l, o, c, n, u, g, w;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (f = Pr(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      d = i, i = hh(f);
    } else
      s = i, i = e;
    if (i === e) {
      for (i = s, r = [], f = a(); f !== e; )
        r.push(f), f = a();
      if (f = ct(), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        d = i, i = ch(f);
      } else
        s = i, i = e;
      if (i === e) {
        for (i = s, r = [], f = a(); f !== e; )
          r.push(f), f = a();
        if (h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
          for (t = [], l = a(); l !== e; )
            t.push(l), l = a();
          if (l = _(), l !== e) {
            for (o = [], c = a(); c !== e; )
              o.push(c), c = a();
            if (c = s, h.substr(s, 2).toLowerCase() === fe ? (n = h.substr(s, 2), s += 2) : (n = e, p(ws)), n !== e) {
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
              d = i, i = nh(l, c);
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
            for (t = [], l = a(); l !== e; )
              t.push(l), l = a();
            d = i, i = uh(f);
          } else
            s = i, i = e;
        }
      }
    }
    return i;
  }
  function ip() {
    var i, r, f, t, l;
    if (i = s, h.substr(s, 6).toLowerCase() === xt ? (r = h.substr(s, 6), s += 6) : (r = e, p(Ma)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = [], l = zi(), l !== e)
        for (; l !== e; )
          t.push(l), l = zi();
      else
        t = e;
      t !== e ? (d = i, i = ph(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function zi() {
    var i, r, f, t;
    if (i = s, r = wr(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      d = i, i = gh(r);
    } else
      s = i, i = e;
    return i;
  }
  function tp() {
    var i, r, f, t, l, o, c, n;
    if (i = s, h.substr(s, 5).toLowerCase() === Ft ? (r = h.substr(s, 5), s += 5) : (r = e, p(ja)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (h.substr(s, 2).toLowerCase() === Vr ? (t = h.substr(s, 2), s += 2) : (t = e, p(gi)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (o = [], c = Zi(), c !== e)
          for (; c !== e; )
            o.push(c), c = Zi();
        else
          o = e;
        if (o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          d = i, i = wh(o);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Zi() {
    var i, r, f, t, l, o;
    if (i = s, h.substr(s, 3).toLowerCase() === Dt ? (r = h.substr(s, 3), s += 3) : (r = e, p(ka)), r === e && (h.substr(s, 4).toLowerCase() === Gt ? (r = h.substr(s, 4), s += 4) : (r = e, p(Xa))), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = yr(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        d = i, i = dh(r, t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    if (i === e)
      if (i = s, r = wr(), r === e && (r = k()), r !== e) {
        for (f = [], t = a(); t !== e; )
          f.push(t), t = a();
        d = i, i = $h(r);
      } else
        s = i, i = e;
    return i;
  }
  function lp() {
    var i, r, f, t;
    return i = s, r = s, f = Ki(), f !== e ? (t = Ji(), t === e && (t = null), f = [f, t], r = f) : (s = r, r = e), r === e && (r = s, f = Ji(), f !== e ? (t = Ki(), t === e && (t = null), f = [f, t], r = f) : (s = r, r = e)), r !== e && (d = i, r = vh(r)), i = r, i;
  }
  function Ki() {
    var i, r, f, t, l, o;
    if (i = s, h.substr(s, 5).toLowerCase() === Ut ? (r = h.substr(s, 5), s += 5) : (r = e, p(Va)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = We(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        d = i, i = bh(t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Ji() {
    var i, r, f, t, l, o;
    if (i = s, h.substr(s, 6).toLowerCase() === Bt ? (r = h.substr(s, 6), s += 6) : (r = e, p(Wa)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = We(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        d = i, i = Ah(t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function qi() {
    var i, r, f, t;
    return i = s, r = s, h.substr(s, 6).toLowerCase() === Wr ? (f = h.substr(s, 6), s += 6) : (f = e, p(wi)), f !== e ? (t = ot(), t !== e ? (f = [f, t], r = f) : (s = r, r = e)) : (s = r, r = e), r === e && (r = null), d = i, r = Ch(r), i = r, i;
  }
  function et() {
    var i, r, f, t, l, o, c, n, u, g;
    for (i = s, r = Xi(), f = s, t = [], l = a(); l !== e; )
      t.push(l), l = a();
    if (l = ap(), l !== e) {
      for (o = s, c = [], n = a(); n !== e; )
        c.push(n), n = a();
      if (h.charCodeAt(s) === 59 ? (n = Pe, s++) : (n = e, p(Le)), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        g = et(), c = [c, n, u, g], o = c;
      } else
        s = o, o = e;
      o === e && (o = null), t = [t, l, o], f = t;
    } else
      s = f, f = e;
    for (f === e && (f = null), t = [], l = a(); l !== e; )
      t.push(l), l = a();
    return d = i, i = _h(r, f), i;
  }
  function ap() {
    var i;
    return i = fp(), i === e && (i = op(), i === e && (i = hp(), i === e && (i = np(), i === e && (i = up(), i === e && (i = pp(), i === e && (i = cp(), i === e && (i = gp(), i === e && (i = wp(), i === e && (i = dp(), i === e && (i = $p())))))))))), i;
  }
  function fp() {
    var i, r, f, t, l, o, c, n, u, g, w;
    if (i = s, h.substr(s, 4).toLowerCase() === Ht ? (r = h.substr(s, 4), s += 4) : (r = e, p(Qa)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === de ? (t = h.substr(s, 6), s += 6) : (t = e, p(Ae)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = W(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (n = s, h.substr(s, 4).toLowerCase() === Mt ? (u = h.substr(s, 4), s += 4) : (u = e, p(Ya)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          w = pr(), w !== e ? (u = [u, g, w], n = u) : (s = n, n = e);
        } else
          s = n, n = e;
        n === e && (n = null), d = i, i = mh(t, o, n);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function op() {
    var i, r, f, t, l, o;
    if (i = s, h.substr(s, 5).toLowerCase() === jt ? (r = h.substr(s, 5), s += 5) : (r = e, p(za)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === de ? (t = h.substr(s, 6), s += 6) : (t = e, p(Ae)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = it(), o !== e ? (d = i, i = Eh(t, o)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function hp() {
    var i, r, f, t, l, o;
    if (i = s, h.substr(s, 4).toLowerCase() === kt ? (r = h.substr(s, 4), s += 4) : (r = e, p(Za)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === de ? (t = h.substr(s, 6), s += 6) : (t = e, p(Ae)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = it(), o !== e ? (d = i, i = yh(t, o)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function cp() {
    var i, r, f, t, l, o;
    if (i = s, h.substr(s, 6).toLowerCase() === Xt ? (r = h.substr(s, 6), s += 6) : (r = e, p(Ka)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === de ? (t = h.substr(s, 6), s += 6) : (t = e, p(Ae)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = pr(), o !== e ? (d = i, i = Ph(t, o)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function np() {
    var i, r, f, t, l, o, c, n, u, g;
    if (i = s, h.substr(s, 3).toLowerCase() === Vt ? (r = h.substr(s, 3), s += 3) : (r = e, p(Ja)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === de ? (t = h.substr(s, 6), s += 6) : (t = e, p(Ae)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = Oe(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.substr(s, 2).toLowerCase() === Us ? (n = h.substr(s, 2), s += 2) : (n = e, p(Js)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          g = Oe(), g !== e ? (d = i, i = Th(t, o, g)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function up() {
    var i, r, f, t, l, o, c, n, u, g;
    if (i = s, h.substr(s, 4).toLowerCase() === Wt ? (r = h.substr(s, 4), s += 4) : (r = e, p(qa)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === de ? (t = h.substr(s, 6), s += 6) : (t = e, p(Ae)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = Oe(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.substr(s, 2).toLowerCase() === Us ? (n = h.substr(s, 2), s += 2) : (n = e, p(Js)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          g = Oe(), g !== e ? (d = i, i = Lh(t, o, g)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function pp() {
    var i, r, f, t, l, o, c, n, u, g;
    if (i = s, h.substr(s, 4).toLowerCase() === Qt ? (r = h.substr(s, 4), s += 4) : (r = e, p(ef)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === de ? (t = h.substr(s, 6), s += 6) : (t = e, p(Ae)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = Oe(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.substr(s, 2).toLowerCase() === Us ? (n = h.substr(s, 2), s += 2) : (n = e, p(Js)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          g = Oe(), g !== e ? (d = i, i = Rh(t, o, g)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function gp() {
    var i, r, f, t, l, o;
    if (i = s, h.substr(s, 6).toLowerCase() === Qr ? (r = h.substr(s, 6), s += 6) : (r = e, p(di)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (h.substr(s, 4).toLowerCase() === Yr ? (t = h.substr(s, 4), s += 4) : (t = e, p($i)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        o = tt(), o !== e ? (d = i, i = Ih(o)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function wp() {
    var i, r, f, t, l;
    if (i = s, h.substr(s, 6).toLowerCase() === Bs ? (r = h.substr(s, 6), s += 6) : (r = e, p(qs)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      h.substr(s, 4).toLowerCase() === Yr ? (t = h.substr(s, 4), s += 4) : (t = e, p($i)), t !== e ? (l = tt(), l !== e ? (d = i, i = Sh(l)) : (s = i, i = e)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function dp() {
    var i, r, f, t, l, o;
    if (i = s, h.substr(s, 6).toLowerCase() === Bs ? (r = h.substr(s, 6), s += 6) : (r = e, p(qs)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (h.substr(s, 5).toLowerCase() === Je ? (t = h.substr(s, 5), s += 5) : (t = e, p(ds)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        o = gr(), o !== e ? (d = i, i = Oh(o)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function $p() {
    var i, r, f, t, l, o, c, n, u, g, w;
    if (i = s, r = s, h.substr(s, 4).toLowerCase() === Yt ? (f = h.substr(s, 4), s += 4) : (f = e, p(sf)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = W(), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        f = [f, t, l, o], r = f;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    if (r === e && (r = null), f = s, t = vp(), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = st(), o === e && (o = null), t = [t, l, o], f = t;
    } else
      s = f, f = e;
    if (f === e && (f = st()), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = [], o = rt(); o !== e; )
        l.push(o), o = rt();
      for (o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.substr(s, 5).toLowerCase() === Je ? (c = h.substr(s, 5), s += 5) : (c = e, p(ds)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (u = re(), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          d = i, i = Nh(r, f, l, u);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function vp() {
    var i, r, f;
    return i = s, h.substr(s, 6).toLowerCase() === Bs ? (r = h.substr(s, 6), s += 6) : (r = e, p(qs)), r !== e ? (f = gr(), f !== e ? (d = i, i = xh(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function st() {
    var i, r, f;
    return i = s, h.substr(s, 6).toLowerCase() === Qr ? (r = h.substr(s, 6), s += 6) : (r = e, p(di)), r !== e ? (f = gr(), f !== e ? (d = i, i = Fh(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function rt() {
    var i, r, f, t, l, o, c, n;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 5).toLowerCase() === zt ? (f = h.substr(s, 5), s += 5) : (f = e, p(rf)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = W(), l === e)
        if (l = s, h.substr(s, 5).toLowerCase() === Gs ? (o = h.substr(s, 5), s += 5) : (o = e, p(Ks)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = W(), n !== e ? (o = [o, c, n], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
      l !== e ? (d = i, i = Dh(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Oe() {
    var i, r, f, t;
    if (i = s, h.substr(s, 7).toLowerCase() === zr ? (r = h.substr(s, 7), s += 7) : (r = e, p(vi)), r !== e && (d = i, r = Gh()), i = r, i === e) {
      for (i = s, h.substr(s, 5).toLowerCase() === qe ? (r = h.substr(s, 5), s += 5) : (r = e, p($s)), r === e && (r = null), f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = W(), t !== e ? (d = i, i = Uh(t)) : (s = i, i = e);
    }
    return i;
  }
  function pr() {
    var i, r, f, t;
    if (i = s, h.substr(s, 5).toLowerCase() === qe ? (r = h.substr(s, 5), s += 5) : (r = e, p($s)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = W(), t !== e ? (d = i, i = Bh(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function it() {
    var i, r;
    return i = s, r = pr(), r !== e && (d = i, r = Hh(r)), i = r, i === e && (i = s, h.substr(s, 7).toLowerCase() === zr ? (r = h.substr(s, 7), s += 7) : (r = e, p(vi)), r !== e && (d = i, r = Mh()), i = r, i === e && (i = s, h.substr(s, 5).toLowerCase() === Gs ? (r = h.substr(s, 5), s += 5) : (r = e, p(Ks)), r !== e && (d = i, r = jh()), i = r, i === e && (i = s, h.substr(s, 3).toLowerCase() === Zt ? (r = h.substr(s, 3), s += 3) : (r = e, p(tf)), r !== e && (d = i, r = kh()), i = r))), i;
  }
  function gr() {
    var i, r, f, t, l, o, c, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.charCodeAt(s) === 123 ? (f = ge, s++) : (f = e, p(ve)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = lt(), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 125 ? (c = we, s++) : (c = e, p(be)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        d = i, i = Xh(l);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function tt() {
    var i, r, f, t, l, o, c, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.charCodeAt(s) === 123 ? (f = ge, s++) : (f = e, p(ve)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = lt(), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 125 ? (c = we, s++) : (c = e, p(be)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        d = i, i = Vh(l);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function lt() {
    var i, r, f, t, l, o, c;
    for (i = s, r = Ne(), r === e && (r = null), f = [], t = s, l = at(), l !== e ? (h.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o === e && (o = null), c = Ne(), c === e && (c = null), l = [l, o, c], t = l) : (s = t, t = e); t !== e; )
      f.push(t), t = s, l = at(), l !== e ? (h.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o === e && (o = null), c = Ne(), c === e && (c = null), l = [l, o, c], t = l) : (s = t, t = e);
    return d = i, i = Wh(r, f), i;
  }
  function at() {
    var i, r, f, t, l, o, c, n, u, g, w, $, A;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 5).toLowerCase() === qe ? (f = h.substr(s, 5), s += 5) : (f = e, p($s)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = Fe(), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 123 ? (c = ge, s++) : (c = e, p(ve)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          for (u = Ne(), u === e && (u = null), g = [], w = a(); w !== e; )
            g.push(w), w = a();
          if (h.charCodeAt(s) === 125 ? (w = we, s++) : (w = e, p(be)), w !== e) {
            for ($ = [], A = a(); A !== e; )
              $.push(A), A = a();
            d = i, i = Qh(l, u);
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
    var i, r, f, t, l, o, c;
    if (i = s, r = pt(), r !== e) {
      for (f = s, t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (h.charCodeAt(s) === 46 ? (l = X, s++) : (l = e, p(V)), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = Ne(), c === e && (c = null), t = [t, l, o, c], f = t;
      } else
        s = f, f = e;
      f === e && (f = null), d = i, i = Yh(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function re() {
    var i, r, f, t, l, o;
    if (i = s, h.charCodeAt(s) === 123 ? (r = ge, s++) : (r = e, p(ve)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = Zu(), t === e && (t = bp()), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        h.charCodeAt(s) === 125 ? (o = we, s++) : (o = e, p(be)), o !== e ? (d = i, i = zh(t)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function bp() {
    var i, r, f, t, l, o, c, n, u, g;
    for (i = s, r = Ps(), r === e && (r = null), f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (t = [], l = s, o = ft(), o !== e) {
      for (c = [], n = a(); n !== e; )
        c.push(n), n = a();
      for (h.charCodeAt(s) === 46 ? (n = X, s++) : (n = e, p(V)), n === e && (n = null), u = [], g = a(); g !== e; )
        u.push(g), g = a();
      g = Ps(), g === e && (g = null), o = [o, c, n, u, g], l = o;
    } else
      s = l, l = e;
    for (; l !== e; )
      if (t.push(l), l = s, o = ft(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        for (h.charCodeAt(s) === 46 ? (n = X, s++) : (n = e, p(V)), n === e && (n = null), u = [], g = a(); g !== e; )
          u.push(g), g = a();
        g = Ps(), g === e && (g = null), o = [o, c, n, u, g], l = o;
      } else
        s = l, l = e;
    return d = i, i = Zh(r, t), i;
  }
  function Ps() {
    var i, r, f, t, l, o, c;
    if (i = s, r = Op(), r !== e) {
      for (f = s, t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (h.charCodeAt(s) === 46 ? (l = X, s++) : (l = e, p(V)), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = Ps(), c === e && (c = null), t = [t, l, o, c], f = t;
      } else
        s = f, f = e;
      f === e && (f = null), d = i, i = Kh(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function ft() {
    var i;
    return i = Lp(), i === e && (i = Ap(), i === e && (i = Tp(), i === e && (i = Cp(), i === e && (i = _p(), i === e && (i = Rp(), i === e && (i = mp(), i === e && (i = Ep()))))))), i;
  }
  function Ap() {
    var i, r, f, t, l;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 8).toLowerCase() === Kt ? (f = h.substr(s, 8), s += 8) : (f = e, p(lf)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = re(), l !== e ? (d = i, i = Jh(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Cp() {
    var i, r, f, t, l, o, c;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 5).toLowerCase() === qe ? (f = h.substr(s, 5), s += 5) : (f = e, p($s)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = Fe(), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = re(), c !== e ? (d = i, i = qh(l, c)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function _p() {
    var i, r, f, t, l, o, c, n;
    if (i = s, h.substr(s, 7).toLowerCase() === Jt ? (r = h.substr(s, 7), s += 7) : (r = e, p(af)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (h.substr(s, 6).toLowerCase() === de ? (t = h.substr(s, 6), s += 6) : (t = e, p(Ae)), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = Fe(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = re(), n !== e ? (d = i, i = ec(t, o, n)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function mp() {
    var i, r, f, t, l, o, c, n, u, g, w, $, A;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 4).toLowerCase() === qt ? (f = h.substr(s, 4), s += 4) : (f = e, p(ff)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (c = _(), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (h.substr(s, 2).toLowerCase() === fe ? (u = h.substr(s, 2), s += 2) : (u = e, p(ws)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (w = k(), w !== e) {
              for ($ = [], A = a(); A !== e; )
                $.push(A), A = a();
              h.charCodeAt(s) === 41 ? (A = E, s++) : (A = e, p(P)), A !== e ? (d = i, i = sc(c, w)) : (s = i, i = e);
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
  function Ep() {
    var i, r, f, t, l;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 6).toLowerCase() === Wr ? (f = h.substr(s, 6), s += 6) : (f = e, p(wi)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = ot(), l !== e ? (d = i, i = rc(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function ot() {
    var i;
    return i = yp(), i === e && (i = Pp()), i;
  }
  function yp() {
    var i, r, f, t, l, o, c, n;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (f = k(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (h.charCodeAt(s) === 123 ? (l = ge, s++) : (l = e, p(ve)), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        for (c = [], n = Ts(); n !== e; )
          c.push(n), n = Ts();
        h.charCodeAt(s) === 125 ? (n = we, s++) : (n = e, p(be)), n !== e ? (d = i, i = ic(f, c)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Pp() {
    var i, r, f, t, l, o, c, n, u, g, w;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = [], o = k(); o !== e; )
        l.push(o), o = k();
      if (h.charCodeAt(s) === 41 ? (o = E, s++) : (o = e, p(P)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 123 ? (n = ge, s++) : (n = e, p(ve)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          for (g = [], w = ht(); w !== e; )
            g.push(w), w = ht();
          h.charCodeAt(s) === 125 ? (w = we, s++) : (w = e, p(be)), w !== e ? (d = i, i = tc(l, g)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function ht() {
    var i, r, f, t, l, o, c;
    if (i = s, h.charCodeAt(s) === 40 ? (r = C, s++) : (r = e, p(y)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (t = [], l = Ts(); l !== e; )
        t.push(l), l = Ts();
      if (h.charCodeAt(s) === 41 ? (l = E, s++) : (l = e, p(P)), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        d = i, i = lc(t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Ts() {
    var i, r, f, t;
    if (i = s, r = W(), r === e && (r = Tr(), r === e && (r = Lr(), r === e && (r = Sr(), r === e && (h.substr(s, 5) === Zr ? (r = Zr, s += 5) : (r = e, p(of)))))), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      d = i, i = ac(r);
    } else
      s = i, i = e;
    return i;
  }
  function Tp() {
    var i, r, f, t;
    if (i = s, h.substr(s, 5).toLowerCase() === el ? (r = h.substr(s, 5), s += 5) : (r = e, p(hf)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = re(), t !== e ? (d = i, i = fc(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Lp() {
    var i, r, f, t, l, o, c, n;
    if (i = s, r = re(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.substr(s, 5).toLowerCase() === Kr ? (o = h.substr(s, 5), s += 5) : (o = e, p(bi)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = re(), n !== e ? t = n : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (h.substr(s, 5).toLowerCase() === Kr ? (o = h.substr(s, 5), s += 5) : (o = e, p(bi)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = re(), n !== e ? t = n : (s = t, t = e);
        } else
          s = t, t = e;
      }
      d = i, i = oc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Rp() {
    var i, r, f, t, l;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.substr(s, 6).toLowerCase() === sl ? (f = h.substr(s, 6), s += 6) : (f = e, p(cf)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = wr(), l !== e ? (d = i, i = hc(l)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function wr() {
    var i;
    return i = yr(), i === e && (i = Pr(), i === e && (i = ct())), i;
  }
  function ct() {
    var i, r, f, t;
    if (i = s, r = W(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = nt(), t !== e ? (d = i, i = cc(r, t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function nt() {
    var i, r, f, t, l, o, c, n, u, g, w, $;
    if (i = s, r = me(), r !== e && (d = i, r = nc()), i = r, i === e)
      if (i = s, h.charCodeAt(s) === 40 ? (r = C, s++) : (r = e, p(y)), r !== e) {
        for (f = [], t = a(); t !== e; )
          f.push(t), t = a();
        for (h.substr(s, 8).toLowerCase() === S ? (t = h.substr(s, 8), s += 8) : (t = e, p(he)), t === e && (t = null), l = [], o = a(); o !== e; )
          l.push(o), o = a();
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
          h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = i, i = uc(t, o, n)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    return i;
  }
  function xe() {
    var i, r, f, t, l, o, c, n, u, g, w, $;
    if (i = s, r = me(), r !== e && (d = i, r = pc()), i = r, i === e)
      if (i = s, h.charCodeAt(s) === 40 ? (r = C, s++) : (r = e, p(y)), r !== e) {
        for (f = [], t = a(); t !== e; )
          f.push(t), t = a();
        if (t = _(), t !== e) {
          for (l = [], o = a(); o !== e; )
            l.push(o), o = a();
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
          h.charCodeAt(s) === 41 ? (c = E, s++) : (c = e, p(P)), c !== e ? (d = i, i = gc(t, o)) : (s = i, i = e);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    return i;
  }
  function Ip() {
    var i, r, f, t, l, o;
    if (i = s, h.charCodeAt(s) === 123 ? (r = ge, s++) : (r = e, p(ve)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      for (t = ut(), t === e && (t = null), l = [], o = a(); o !== e; )
        l.push(o), o = a();
      h.charCodeAt(s) === 125 ? (o = we, s++) : (o = e, p(be)), o !== e ? (d = i, i = wc(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function ut() {
    var i, r, f, t, l, o, c;
    if (i = s, r = pt(), r !== e) {
      for (f = s, t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (h.charCodeAt(s) === 46 ? (l = X, s++) : (l = e, p(V)), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = ut(), c === e && (c = null), t = [t, l, o, c], f = t;
      } else
        s = f, f = e;
      f === e && (f = null), d = i, i = dc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function pt() {
    var i, r, f, t, l;
    if (i = s, r = Is(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = dr(), t !== e ? (d = i, i = $c(r, t)) : (s = i, i = e);
    } else
      s = i, i = e;
    if (i === e) {
      for (i = s, r = [], f = a(); f !== e; )
        r.push(f), f = a();
      if (f = wt(), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        l = Sp(), d = i, i = vc(f, l);
      } else
        s = i, i = e;
    }
    return i;
  }
  function Sp() {
    var i;
    return i = dr(), i === e && (i = null), i;
  }
  function dr() {
    var i, r, f, t, l, o, c, n, u, g, w, $, A;
    if (i = s, r = $r(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = vr(), t !== e) {
        for (l = [], o = s, c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 59 ? (n = Pe, s++) : (n = e, p(Le)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          if (g = s, w = $r(), w !== e) {
            for ($ = [], A = a(); A !== e; )
              $.push(A), A = a();
            A = vr(), A !== e ? (w = [w, $, A], g = w) : (s = g, g = e);
          } else
            s = g, g = e;
          g === e && (g = null), c = [c, n, u, g], o = c;
        } else
          s = o, o = e;
        for (; o !== e; ) {
          for (l.push(o), o = s, c = [], n = a(); n !== e; )
            c.push(n), n = a();
          if (h.charCodeAt(s) === 59 ? (n = Pe, s++) : (n = e, p(Le)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = s, w = $r(), w !== e) {
              for ($ = [], A = a(); A !== e; )
                $.push(A), A = a();
              A = vr(), A !== e ? (w = [w, $, A], g = w) : (s = g, g = e);
            } else
              s = g, g = e;
            g === e && (g = null), c = [c, n, u, g], o = c;
          } else
            s = o, o = e;
        }
        d = i, i = bc(r, t, l);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function $r() {
    var i, r;
    return i = Fe(), i === e && (i = s, h.charCodeAt(s) === 97 ? (r = es, s++) : (r = e, p(vs)), r !== e && (d = i, r = Ac()), i = r), i;
  }
  function vr() {
    var i, r, f, t, l, o, c, n;
    if (i = s, r = ke(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.charCodeAt(s) === 44 ? (o = D, s++) : (o = e, p(G)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = ke(), n !== e ? t = n : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (h.charCodeAt(s) === 44 ? (o = D, s++) : (o = e, p(G)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = ke(), n !== e ? t = n : (s = t, t = e);
        } else
          s = t, t = e;
      }
      d = i, i = Cc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Op() {
    var i, r, f, t, l;
    if (i = s, r = Is(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = br(), t !== e ? (d = i, i = _c(r, t)) : (s = i, i = e);
    } else
      s = i, i = e;
    if (i === e) {
      for (i = s, r = [], f = a(); f !== e; )
        r.push(f), f = a();
      if (f = dt(), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        l = Np(), d = i, i = mc(f, l);
      } else
        s = i, i = e;
    }
    return i;
  }
  function Np() {
    var i;
    return i = br(), i === e && (i = null), i;
  }
  function br() {
    var i, r, f, t, l, o, c, n, u, g, w, $, A;
    if (i = s, r = Ls(), r === e && (r = k()), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = Ar(), t !== e) {
        for (l = [], o = s, c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 59 ? (n = Pe, s++) : (n = e, p(Le)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          if (g = s, w = Ls(), w === e && (w = k()), w !== e) {
            for ($ = [], A = a(); A !== e; )
              $.push(A), A = a();
            A = Ar(), A !== e ? (w = [w, $, A], g = w) : (s = g, g = e);
          } else
            s = g, g = e;
          g === e && (g = null), c = [c, n, u, g], o = c;
        } else
          s = o, o = e;
        for (; o !== e; ) {
          for (l.push(o), o = s, c = [], n = a(); n !== e; )
            c.push(n), n = a();
          if (h.charCodeAt(s) === 59 ? (n = Pe, s++) : (n = e, p(Le)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = s, w = Ls(), w === e && (w = k()), w !== e) {
              for ($ = [], A = a(); A !== e; )
                $.push(A), A = a();
              A = Ar(), A !== e ? (w = [w, $, A], g = w) : (s = g, g = e);
            } else
              s = g, g = e;
            g === e && (g = null), c = [c, n, u, g], o = c;
          } else
            s = o, o = e;
        }
        d = i, i = Ec(r, t, l);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Ar() {
    var i, r, f, t, l, o, c, n;
    if (i = s, r = Xe(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.charCodeAt(s) === 44 ? (o = D, s++) : (o = e, p(G)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Xe(), n !== e ? t = n : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (h.charCodeAt(s) === 44 ? (o = D, s++) : (o = e, p(G)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = Xe(), n !== e ? t = n : (s = t, t = e);
        } else
          s = t, t = e;
      }
      d = i, i = yc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Ls() {
    var i, r, f, t, l, o, c, n;
    if (i = s, r = Cr(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.charCodeAt(s) === 124 ? (o = ss, s++) : (o = e, p(bs)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Cr(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (h.charCodeAt(s) === 124 ? (o = ss, s++) : (o = e, p(bs)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = Cr(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
      }
      d = i, i = Pc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Cr() {
    var i, r, f, t, l, o, c, n;
    if (i = s, r = _r(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.charCodeAt(s) === 47 ? (o = oe, s++) : (o = e, p(ce)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = _r(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (h.charCodeAt(s) === 47 ? (o = oe, s++) : (o = e, p(ce)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = _r(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
      }
      d = i, i = Tc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function gt() {
    var i, r, f;
    return i = s, r = Fp(), r !== e ? (f = xp(), f === e && (f = null), d = i, i = Lc(r, f)) : (s = i, i = e), i;
  }
  function _r() {
    var i, r, f;
    return i = gt(), i === e && (i = s, h.charCodeAt(s) === 94 ? (r = Jr, s++) : (r = e, p(Ai)), r !== e ? (f = gt(), f !== e ? (d = i, i = Rc(f)) : (s = i, i = e)) : (s = i, i = e)), i;
  }
  function xp() {
    var i;
    return h.charCodeAt(s) === 63 ? (i = Hs, s++) : (i = e, p(er)), i === e && (h.charCodeAt(s) === 42 ? (i = ee, s++) : (i = e, p(se)), i === e && (h.charCodeAt(s) === 43 ? (i = $e, s++) : (i = e, p(Ce)))), i;
  }
  function Fp() {
    var i, r, f, t;
    return i = W(), i === e && (i = s, h.charCodeAt(s) === 97 ? (r = es, s++) : (r = e, p(vs)), r !== e && (d = i, r = Ic()), i = r, i === e && (i = s, h.charCodeAt(s) === 33 ? (r = Ms, s++) : (r = e, p(sr)), r !== e ? (f = Dp(), f !== e ? (r = [r, f], i = r) : (s = i, i = e)) : (s = i, i = e), i === e && (i = s, h.charCodeAt(s) === 40 ? (r = C, s++) : (r = e, p(y)), r !== e ? (f = Ls(), f !== e ? (h.charCodeAt(s) === 41 ? (t = E, s++) : (t = e, p(P)), t !== e ? (d = i, i = Sc(f)) : (s = i, i = e)) : (s = i, i = e)) : (s = i, i = e)))), i;
  }
  function Dp() {
    var i, r, f, t, l, o, c, n;
    if (i = Rs(), i === e)
      if (i = s, h.charCodeAt(s) === 40 ? (r = C, s++) : (r = e, p(y)), r !== e) {
        if (f = s, t = Rs(), t !== e) {
          for (l = [], o = s, h.charCodeAt(s) === 124 ? (c = ss, s++) : (c = e, p(bs)), c !== e ? (n = Rs(), n !== e ? (c = [c, n], o = c) : (s = o, o = e)) : (s = o, o = e); o !== e; )
            l.push(o), o = s, h.charCodeAt(s) === 124 ? (c = ss, s++) : (c = e, p(bs)), c !== e ? (n = Rs(), n !== e ? (c = [c, n], o = c) : (s = o, o = e)) : (s = o, o = e);
          t = [t, l], f = t;
        } else
          s = f, f = e;
        f === e && (f = null), h.charCodeAt(s) === 41 ? (t = E, s++) : (t = e, p(P)), t !== e ? (r = [r, f, t], i = r) : (s = i, i = e);
      } else
        s = i, i = e;
    return i;
  }
  function Rs() {
    var i, r, f;
    return i = W(), i === e && (h.charCodeAt(s) === 97 ? (i = es, s++) : (i = e, p(vs)), i === e && (i = s, h.charCodeAt(s) === 94 ? (r = Jr, s++) : (r = e, p(Ai)), r !== e ? (f = W(), f === e && (h.charCodeAt(s) === 97 ? (f = es, s++) : (f = e, p(vs))), f !== e ? (r = [r, f], i = r) : (s = i, i = e)) : (s = i, i = e))), i;
  }
  function wt() {
    var i, r;
    return i = s, r = Bp(), r !== e && (d = i, r = Oc(r)), i = r, i === e && (i = Gp()), i;
  }
  function Gp() {
    var i, r, f, t, l, o, c, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.charCodeAt(s) === 91 ? (f = js, s++) : (f = e, p(rr)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = dr(), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 93 ? (c = ks, s++) : (c = e, p(ir)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          d = i, i = Nc(l);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function dt() {
    var i, r;
    return i = s, r = Hp(), r !== e && (d = i, r = xc(r)), i = r, i === e && (i = Up()), i;
  }
  function Up() {
    var i, r, f, t, l, o, c, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.charCodeAt(s) === 91 ? (f = js, s++) : (f = e, p(rr)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = br(), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 93 ? (c = ks, s++) : (c = e, p(ir)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          d = i, i = Fc(l);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Bp() {
    var i, r, f, t, l, o, c, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = [], o = ke(), o !== e)
        for (; o !== e; )
          l.push(o), o = ke();
      else
        l = e;
      if (l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 41 ? (c = E, s++) : (c = e, p(P)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          d = i, i = Dc(l);
        } else
          s = i, i = e;
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Hp() {
    var i, r, f, t, l, o, c, n, u;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = [], o = Xe(), o !== e)
        for (; o !== e; )
          l.push(o), o = Xe();
      else
        l = e;
      if (l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 41 ? (c = E, s++) : (c = e, p(P)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          d = i, i = Gc(l);
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
    return f = Is(), f === e && (f = wt()), f !== e ? (d = i, i = Uc(f)) : (s = i, i = e), i;
  }
  function Xe() {
    var i, r, f;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    return f = Is(), f === e && (f = dt()), f !== e ? (d = i, i = Bc(f)) : (s = i, i = e), i;
  }
  function Is() {
    var i;
    return i = k(), i === e && (i = Mp()), i;
  }
  function Fe() {
    var i;
    return i = k(), i === e && (i = W()), i;
  }
  function k() {
    var i, r, f, t, l;
    for (i = s, r = [], f = a(); f !== e; )
      r.push(f), f = a();
    if (f = eg(), f === e && (f = sg()), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      d = i, i = Hc(f);
    } else
      s = i, i = e;
    return i;
  }
  function Mp() {
    var i;
    return i = W(), i === e && (i = Tr(), i === e && (i = Lr(), i === e && (i = Sr(), i === e && (i = Kp(), i === e && (i = me()))))), i;
  }
  function _() {
    var i, r, f, t, l, o, c, n;
    if (i = s, r = mr(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.substr(s, 2) === rs ? (o = rs, s += 2) : (o = e, p(Ci)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = mr(), n !== e ? t = n : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (h.substr(s, 2) === rs ? (o = rs, s += 2) : (o = e, p(Ci)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = mr(), n !== e ? t = n : (s = t, t = e);
        } else
          s = t, t = e;
      }
      d = i, i = Mc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function mr() {
    var i, r, f, t, l, o, c, n;
    if (i = s, r = Er(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.substr(s, 2) === is ? (o = is, s += 2) : (o = e, p(_i)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Er(), n !== e ? t = n : (s = t, t = e);
      } else
        s = t, t = e;
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (h.substr(s, 2) === is ? (o = is, s += 2) : (o = e, p(_i)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = Er(), n !== e ? t = n : (s = t, t = e);
        } else
          s = t, t = e;
      }
      d = i, i = jc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Er() {
    var i, r, f, t, l, o, c, n, u, g;
    if (i = s, r = z(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.charCodeAt(s) === 61 ? (o = ts, s++) : (o = e, p(As)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
      } else
        s = t, t = e;
      if (t === e) {
        for (t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (h.substr(s, 2) === ls ? (o = ls, s += 2) : (o = e, p(mi)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e) {
          for (t = s, l = [], o = a(); o !== e; )
            l.push(o), o = a();
          if (h.charCodeAt(s) === 60 ? (o = Xs, s++) : (o = e, p(tr)), o !== e) {
            for (c = [], n = a(); n !== e; )
              c.push(n), n = a();
            n = z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
          } else
            s = t, t = e;
          if (t === e) {
            for (t = s, l = [], o = a(); o !== e; )
              l.push(o), o = a();
            if (h.charCodeAt(s) === 62 ? (o = Vs, s++) : (o = e, p(lr)), o !== e) {
              for (c = [], n = a(); n !== e; )
                c.push(n), n = a();
              n = z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
            } else
              s = t, t = e;
            if (t === e) {
              for (t = s, l = [], o = a(); o !== e; )
                l.push(o), o = a();
              if (h.substr(s, 2) === as ? (o = as, s += 2) : (o = e, p(Ei)), o !== e) {
                for (c = [], n = a(); n !== e; )
                  c.push(n), n = a();
                n = z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
              } else
                s = t, t = e;
              if (t === e) {
                for (t = s, l = [], o = a(); o !== e; )
                  l.push(o), o = a();
                if (h.substr(s, 2) === fs ? (o = fs, s += 2) : (o = e, p(yi)), o !== e) {
                  for (c = [], n = a(); n !== e; )
                    c.push(n), n = a();
                  n = z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
                } else
                  s = t, t = e;
                if (t === e) {
                  for (t = s, l = [], o = a(); o !== e; )
                    l.push(o), o = a();
                  if (h.substr(s, 2).toLowerCase() === os ? (o = h.substr(s, 2), s += 2) : (o = e, p(Cs)), o !== e) {
                    for (c = [], n = a(); n !== e; )
                      c.push(n), n = a();
                    n = xe(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
                  } else
                    s = t, t = e;
                  if (t === e) {
                    for (t = s, l = [], o = a(); o !== e; )
                      l.push(o), o = a();
                    if (h.substr(s, 3).toLowerCase() === Ws ? (o = h.substr(s, 3), s += 3) : (o = e, p(ar)), o !== e) {
                      for (c = [], n = a(); n !== e; )
                        c.push(n), n = a();
                      if (h.substr(s, 2).toLowerCase() === os ? (n = h.substr(s, 2), s += 2) : (n = e, p(Cs)), n !== e) {
                        for (u = [], g = a(); g !== e; )
                          u.push(g), g = a();
                        g = xe(), g !== e ? (l = [l, o, c, n, u, g], t = l) : (s = t, t = e);
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
        if (h.charCodeAt(s) === 61 ? (o = ts, s++) : (o = e, p(As)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e) {
          for (t = s, l = [], o = a(); o !== e; )
            l.push(o), o = a();
          if (h.substr(s, 2) === ls ? (o = ls, s += 2) : (o = e, p(mi)), o !== e) {
            for (c = [], n = a(); n !== e; )
              c.push(n), n = a();
            n = z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
          } else
            s = t, t = e;
          if (t === e) {
            for (t = s, l = [], o = a(); o !== e; )
              l.push(o), o = a();
            if (h.charCodeAt(s) === 60 ? (o = Xs, s++) : (o = e, p(tr)), o !== e) {
              for (c = [], n = a(); n !== e; )
                c.push(n), n = a();
              n = z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
            } else
              s = t, t = e;
            if (t === e) {
              for (t = s, l = [], o = a(); o !== e; )
                l.push(o), o = a();
              if (h.charCodeAt(s) === 62 ? (o = Vs, s++) : (o = e, p(lr)), o !== e) {
                for (c = [], n = a(); n !== e; )
                  c.push(n), n = a();
                n = z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
              } else
                s = t, t = e;
              if (t === e) {
                for (t = s, l = [], o = a(); o !== e; )
                  l.push(o), o = a();
                if (h.substr(s, 2) === as ? (o = as, s += 2) : (o = e, p(Ei)), o !== e) {
                  for (c = [], n = a(); n !== e; )
                    c.push(n), n = a();
                  n = z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
                } else
                  s = t, t = e;
                if (t === e) {
                  for (t = s, l = [], o = a(); o !== e; )
                    l.push(o), o = a();
                  if (h.substr(s, 2) === fs ? (o = fs, s += 2) : (o = e, p(yi)), o !== e) {
                    for (c = [], n = a(); n !== e; )
                      c.push(n), n = a();
                    n = z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
                  } else
                    s = t, t = e;
                  if (t === e) {
                    for (t = s, l = [], o = a(); o !== e; )
                      l.push(o), o = a();
                    if (h.substr(s, 2).toLowerCase() === os ? (o = h.substr(s, 2), s += 2) : (o = e, p(Cs)), o !== e) {
                      for (c = [], n = a(); n !== e; )
                        c.push(n), n = a();
                      n = xe(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
                    } else
                      s = t, t = e;
                    if (t === e) {
                      for (t = s, l = [], o = a(); o !== e; )
                        l.push(o), o = a();
                      if (h.substr(s, 3).toLowerCase() === Ws ? (o = h.substr(s, 3), s += 3) : (o = e, p(ar)), o !== e) {
                        for (c = [], n = a(); n !== e; )
                          c.push(n), n = a();
                        if (h.substr(s, 2).toLowerCase() === os ? (n = h.substr(s, 2), s += 2) : (n = e, p(Cs)), n !== e) {
                          for (u = [], g = a(); g !== e; )
                            u.push(g), g = a();
                          g = xe(), g !== e ? (l = [l, o, c, n, u, g], t = l) : (s = t, t = e);
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
      d = i, i = kc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function z() {
    var i, r, f, t, l, o, c, n, u, g, w;
    if (i = s, r = Ve(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.charCodeAt(s) === 43 ? (o = $e, s++) : (o = e, p(Ce)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Ve(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
      } else
        s = t, t = e;
      if (t === e) {
        for (t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (h.charCodeAt(s) === 45 ? (o = ie, s++) : (o = e, p(te)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = Ve(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e)
          if (t = s, l = Rr(), l === e && (l = Ir()), l !== e) {
            for (o = [], c = s, n = [], u = a(); u !== e; )
              n.push(u), u = a();
            if (h.charCodeAt(s) === 42 ? (u = ee, s++) : (u = e, p(se)), u !== e) {
              for (g = [], w = a(); w !== e; )
                g.push(w), w = a();
              w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
            } else
              s = c, c = e;
            if (c === e) {
              for (c = s, n = [], u = a(); u !== e; )
                n.push(u), u = a();
              if (h.charCodeAt(s) === 47 ? (u = oe, s++) : (u = e, p(ce)), u !== e) {
                for (g = [], w = a(); w !== e; )
                  g.push(w), w = a();
                w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
              } else
                s = c, c = e;
            }
            for (; c !== e; ) {
              for (o.push(c), c = s, n = [], u = a(); u !== e; )
                n.push(u), u = a();
              if (h.charCodeAt(s) === 42 ? (u = ee, s++) : (u = e, p(se)), u !== e) {
                for (g = [], w = a(); w !== e; )
                  g.push(w), w = a();
                w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
              } else
                s = c, c = e;
              if (c === e) {
                for (c = s, n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (h.charCodeAt(s) === 47 ? (u = oe, s++) : (u = e, p(ce)), u !== e) {
                  for (g = [], w = a(); w !== e; )
                    g.push(w), w = a();
                  w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
                } else
                  s = c, c = e;
              }
            }
            l = [l, o], t = l;
          } else
            s = t, t = e;
      }
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (h.charCodeAt(s) === 43 ? (o = $e, s++) : (o = e, p(Ce)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = Ve(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e) {
          for (t = s, l = [], o = a(); o !== e; )
            l.push(o), o = a();
          if (h.charCodeAt(s) === 45 ? (o = ie, s++) : (o = e, p(te)), o !== e) {
            for (c = [], n = a(); n !== e; )
              c.push(n), n = a();
            n = Ve(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
          } else
            s = t, t = e;
          if (t === e)
            if (t = s, l = Rr(), l === e && (l = Ir()), l !== e) {
              for (o = [], c = s, n = [], u = a(); u !== e; )
                n.push(u), u = a();
              if (h.charCodeAt(s) === 42 ? (u = ee, s++) : (u = e, p(se)), u !== e) {
                for (g = [], w = a(); w !== e; )
                  g.push(w), w = a();
                w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
              } else
                s = c, c = e;
              if (c === e) {
                for (c = s, n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (h.charCodeAt(s) === 47 ? (u = oe, s++) : (u = e, p(ce)), u !== e) {
                  for (g = [], w = a(); w !== e; )
                    g.push(w), w = a();
                  w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
                } else
                  s = c, c = e;
              }
              for (; c !== e; ) {
                for (o.push(c), c = s, n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (h.charCodeAt(s) === 42 ? (u = ee, s++) : (u = e, p(se)), u !== e) {
                  for (g = [], w = a(); w !== e; )
                    g.push(w), w = a();
                  w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
                } else
                  s = c, c = e;
                if (c === e) {
                  for (c = s, n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  if (h.charCodeAt(s) === 47 ? (u = oe, s++) : (u = e, p(ce)), u !== e) {
                    for (g = [], w = a(); w !== e; )
                      g.push(w), w = a();
                    w = Z(), w !== e ? (n = [n, u, g, w], c = n) : (s = c, c = e);
                  } else
                    s = c, c = e;
                }
              }
              l = [l, o], t = l;
            } else
              s = t, t = e;
        }
      }
      d = i, i = Xc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Ve() {
    var i, r, f, t, l, o, c, n;
    if (i = s, r = Z(), r !== e) {
      for (f = [], t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.charCodeAt(s) === 42 ? (o = ee, s++) : (o = e, p(se)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
      } else
        s = t, t = e;
      if (t === e) {
        for (t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (h.charCodeAt(s) === 47 ? (o = oe, s++) : (o = e, p(ce)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = Z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
      }
      for (; t !== e; ) {
        for (f.push(t), t = s, l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (h.charCodeAt(s) === 42 ? (o = ee, s++) : (o = e, p(se)), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          n = Z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
        } else
          s = t, t = e;
        if (t === e) {
          for (t = s, l = [], o = a(); o !== e; )
            l.push(o), o = a();
          if (h.charCodeAt(s) === 47 ? (o = oe, s++) : (o = e, p(ce)), o !== e) {
            for (c = [], n = a(); n !== e; )
              c.push(n), n = a();
            n = Z(), n !== e ? (l = [l, o, c, n], t = l) : (s = t, t = e);
          } else
            s = t, t = e;
        }
      }
      d = i, i = Vc(r, f);
    } else
      s = i, i = e;
    return i;
  }
  function Z() {
    var i, r, f, t;
    if (i = s, h.charCodeAt(s) === 33 ? (r = Ms, s++) : (r = e, p(sr)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = Ss(), t !== e ? (d = i, i = Wc(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    if (i === e) {
      if (i = s, h.charCodeAt(s) === 43 ? (r = $e, s++) : (r = e, p(Ce)), r !== e) {
        for (f = [], t = a(); t !== e; )
          f.push(t), t = a();
        t = Ss(), t !== e ? (d = i, i = Qc(t)) : (s = i, i = e);
      } else
        s = i, i = e;
      if (i === e) {
        if (i = s, h.charCodeAt(s) === 45 ? (r = ie, s++) : (r = e, p(te)), r !== e) {
          for (f = [], t = a(); t !== e; )
            f.push(t), t = a();
          t = Ss(), t !== e ? (d = i, i = Yc(t)) : (s = i, i = e);
        } else
          s = i, i = e;
        i === e && (i = Ss());
      }
    }
    return i;
  }
  function Ss() {
    var i, r;
    return i = yr(), i === e && (i = Pr(), i === e && (i = Yp(), i === e && (i = s, r = Tr(), r !== e && (d = i, r = zc(r)), i = r, i === e && (i = s, r = Lr(), r !== e && (d = i, r = Zc(r)), i = r, i === e && (i = s, r = Sr(), r !== e && (d = i, r = Kc(r)), i = r, i === e && (i = s, r = k(), r !== e && (d = i, r = Jc(r)), i = r)))))), i;
  }
  function yr() {
    var i, r, f, t, l, o;
    if (i = s, h.charCodeAt(s) === 40 ? (r = C, s++) : (r = e, p(y)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = _(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        h.charCodeAt(s) === 41 ? (o = E, s++) : (o = e, p(P)), o !== e ? (d = i, i = qc(t)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Pr() {
    var i, r, f, t, l, o, c, n, u, g, w, $, A, m, L, R;
    if (i = Qp(), i === e) {
      if (i = s, h.substr(s, 3).toLowerCase() === rl ? (r = h.substr(s, 3), s += 3) : (r = e, p(nf)), r !== e) {
        for (f = [], t = a(); t !== e; )
          f.push(t), t = a();
        if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
          for (l = [], o = a(); o !== e; )
            l.push(o), o = a();
          if (o = _(), o !== e) {
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
        if (i = s, h.substr(s, 4).toLowerCase() === il ? (r = h.substr(s, 4), s += 4) : (r = e, p(uf)), r !== e) {
          for (f = [], t = a(); t !== e; )
            f.push(t), t = a();
          if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
            for (l = [], o = a(); o !== e; )
              l.push(o), o = a();
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
          if (i = s, h.substr(s, 11).toLowerCase() === tl ? (r = h.substr(s, 11), s += 11) : (r = e, p(pf)), r !== e) {
            for (f = [], t = a(); t !== e; )
              f.push(t), t = a();
            if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
              for (l = [], o = a(); o !== e; )
                l.push(o), o = a();
              if (o = _(), o !== e) {
                for (c = [], n = a(); n !== e; )
                  c.push(n), n = a();
                if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                  for (u = [], g = a(); g !== e; )
                    u.push(g), g = a();
                  if (g = _(), g !== e) {
                    for (w = [], $ = a(); $ !== e; )
                      w.push($), $ = a();
                    h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = rn(o, g)) : (s = i, i = e);
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
            if (i = s, h.substr(s, 8).toLowerCase() === ll ? (r = h.substr(s, 8), s += 8) : (r = e, p(gf)), r !== e) {
              for (f = [], t = a(); t !== e; )
                f.push(t), t = a();
              if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                for (l = [], o = a(); o !== e; )
                  l.push(o), o = a();
                if (o = _(), o !== e) {
                  for (c = [], n = a(); n !== e; )
                    c.push(n), n = a();
                  h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = tn(o)) : (s = i, i = e);
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
            } else
              s = i, i = e;
            if (i === e) {
              if (i = s, h.substr(s, 5).toLowerCase() === al ? (r = h.substr(s, 5), s += 5) : (r = e, p(wf)), r !== e) {
                for (f = [], t = a(); t !== e; )
                  f.push(t), t = a();
                if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                  for (l = [], o = a(); o !== e; )
                    l.push(o), o = a();
                  if (o = k(), o !== e) {
                    for (c = [], n = a(); n !== e; )
                      c.push(n), n = a();
                    h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = ln(o)) : (s = i, i = e);
                  } else
                    s = i, i = e;
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
              if (i === e) {
                if (i = s, h.substr(s, 3).toLowerCase() === fl ? (r = h.substr(s, 3), s += 3) : (r = e, p(df)), r !== e) {
                  for (f = [], t = a(); t !== e; )
                    f.push(t), t = a();
                  if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                    for (l = [], o = a(); o !== e; )
                      l.push(o), o = a();
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
                  if (i = s, h.substr(s, 3).toLowerCase() === ol ? (r = h.substr(s, 3), s += 3) : (r = e, p($f)), r !== e) {
                    for (f = [], t = a(); t !== e; )
                      f.push(t), t = a();
                    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                      for (l = [], o = a(); o !== e; )
                        l.push(o), o = a();
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
                    if (i = s, h.substr(s, 5).toLowerCase() === hl ? (r = h.substr(s, 5), s += 5) : (r = e, p(vf)), r !== e) {
                      for (f = [], t = a(); t !== e; )
                        f.push(t), t = a();
                      if (t = s, h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                        for (o = [], c = a(); c !== e; )
                          o.push(c), c = a();
                        if (c = _(), c !== e) {
                          for (n = [], u = a(); u !== e; )
                            n.push(u), u = a();
                          h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (l = [l, o, c, n, u], t = l) : (s = t, t = e);
                        } else
                          s = t, t = e;
                      } else
                        s = t, t = e;
                      t === e && (t = me()), t !== e ? (d = i, i = on(t)) : (s = i, i = e);
                    } else
                      s = i, i = e;
                    if (i === e) {
                      if (i = s, h.substr(s, 4).toLowerCase() === cl ? (r = h.substr(s, 4), s += 4) : (r = e, p(bf)), r !== e) {
                        for (f = [], t = a(); t !== e; )
                          f.push(t), t = a();
                        t = me(), t !== e ? (d = i, i = hn()) : (s = i, i = e);
                      } else
                        s = i, i = e;
                      if (i === e) {
                        if (i = s, h.substr(s, 3).toLowerCase() === nl ? (r = h.substr(s, 3), s += 3) : (r = e, p(Af)), r !== e) {
                          for (f = [], t = a(); t !== e; )
                            f.push(t), t = a();
                          if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                            for (l = [], o = a(); o !== e; )
                              l.push(o), o = a();
                            if (o = _(), o !== e) {
                              for (c = [], n = a(); n !== e; )
                                c.push(n), n = a();
                              h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = cn(o)) : (s = i, i = e);
                            } else
                              s = i, i = e;
                          } else
                            s = i, i = e;
                        } else
                          s = i, i = e;
                        if (i === e) {
                          if (i = s, h.substr(s, 4).toLowerCase() === ul ? (r = h.substr(s, 4), s += 4) : (r = e, p(Cf)), r !== e) {
                            for (f = [], t = a(); t !== e; )
                              f.push(t), t = a();
                            if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                              for (l = [], o = a(); o !== e; )
                                l.push(o), o = a();
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
                          if (i === e) {
                            if (i = s, h.substr(s, 5).toLowerCase() === pl ? (r = h.substr(s, 5), s += 5) : (r = e, p(_f)), r !== e) {
                              for (f = [], t = a(); t !== e; )
                                f.push(t), t = a();
                              if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                for (l = [], o = a(); o !== e; )
                                  l.push(o), o = a();
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
                              if (i = s, h.substr(s, 5).toLowerCase() === gl ? (r = h.substr(s, 5), s += 5) : (r = e, p(mf)), r !== e) {
                                for (f = [], t = a(); t !== e; )
                                  f.push(t), t = a();
                                if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                  for (l = [], o = a(); o !== e; )
                                    l.push(o), o = a();
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
                                if (i = s, h.substr(s, 6).toLowerCase() === wl ? (r = h.substr(s, 6), s += 6) : (r = e, p(Ef)), r !== e) {
                                  for (f = [], t = a(); t !== e; )
                                    f.push(t), t = a();
                                  t = xe(), t !== e ? (d = i, i = gn(t)) : (s = i, i = e);
                                } else
                                  s = i, i = e;
                                if (i === e && (i = kp(), i === e)) {
                                  if (i = s, h.substr(s, 6).toLowerCase() === dl ? (r = h.substr(s, 6), s += 6) : (r = e, p(yf)), r !== e) {
                                    for (f = [], t = a(); t !== e; )
                                      f.push(t), t = a();
                                    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                      for (l = [], o = a(); o !== e; )
                                        l.push(o), o = a();
                                      if (o = _(), o !== e) {
                                        for (c = [], n = a(); n !== e; )
                                          c.push(n), n = a();
                                        h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = wn(o)) : (s = i, i = e);
                                      } else
                                        s = i, i = e;
                                    } else
                                      s = i, i = e;
                                  } else
                                    s = i, i = e;
                                  if (i === e && (i = Xp(), i === e)) {
                                    if (i = s, h.substr(s, 5).toLowerCase() === $l ? (r = h.substr(s, 5), s += 5) : (r = e, p(Pf)), r !== e) {
                                      for (f = [], t = a(); t !== e; )
                                        f.push(t), t = a();
                                      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                        for (l = [], o = a(); o !== e; )
                                          l.push(o), o = a();
                                        if (o = _(), o !== e) {
                                          for (c = [], n = a(); n !== e; )
                                            c.push(n), n = a();
                                          h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = dn(o)) : (s = i, i = e);
                                        } else
                                          s = i, i = e;
                                      } else
                                        s = i, i = e;
                                    } else
                                      s = i, i = e;
                                    if (i === e) {
                                      if (i = s, h.substr(s, 5).toLowerCase() === vl ? (r = h.substr(s, 5), s += 5) : (r = e, p(Tf)), r !== e) {
                                        for (f = [], t = a(); t !== e; )
                                          f.push(t), t = a();
                                        if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                          for (l = [], o = a(); o !== e; )
                                            l.push(o), o = a();
                                          if (o = _(), o !== e) {
                                            for (c = [], n = a(); n !== e; )
                                              c.push(n), n = a();
                                            h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = $n(o)) : (s = i, i = e);
                                          } else
                                            s = i, i = e;
                                        } else
                                          s = i, i = e;
                                      } else
                                        s = i, i = e;
                                      if (i === e) {
                                        if (i = s, h.substr(s, 14).toLowerCase() === bl ? (r = h.substr(s, 14), s += 14) : (r = e, p(Lf)), r !== e) {
                                          for (f = [], t = a(); t !== e; )
                                            f.push(t), t = a();
                                          if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                            for (l = [], o = a(); o !== e; )
                                              l.push(o), o = a();
                                            if (o = _(), o !== e) {
                                              for (c = [], n = a(); n !== e; )
                                                c.push(n), n = a();
                                              h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = vn(o)) : (s = i, i = e);
                                            } else
                                              s = i, i = e;
                                          } else
                                            s = i, i = e;
                                        } else
                                          s = i, i = e;
                                        if (i === e) {
                                          if (i = s, h.substr(s, 8).toLowerCase() === Al ? (r = h.substr(s, 8), s += 8) : (r = e, p(Rf)), r !== e) {
                                            for (f = [], t = a(); t !== e; )
                                              f.push(t), t = a();
                                            if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                              for (l = [], o = a(); o !== e; )
                                                l.push(o), o = a();
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
                                            if (i = s, h.substr(s, 9).toLowerCase() === Cl ? (r = h.substr(s, 9), s += 9) : (r = e, p(If)), r !== e) {
                                              for (f = [], t = a(); t !== e; )
                                                f.push(t), t = a();
                                              if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                for (l = [], o = a(); o !== e; )
                                                  l.push(o), o = a();
                                                if (o = _(), o !== e) {
                                                  for (c = [], n = a(); n !== e; )
                                                    c.push(n), n = a();
                                                  if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                    for (u = [], g = a(); g !== e; )
                                                      u.push(g), g = a();
                                                    if (g = _(), g !== e) {
                                                      for (w = [], $ = a(); $ !== e; )
                                                        w.push($), $ = a();
                                                      h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = An(o, g)) : (s = i, i = e);
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
                                              if (i = s, h.substr(s, 9).toLowerCase() === _l ? (r = h.substr(s, 9), s += 9) : (r = e, p(Sf)), r !== e) {
                                                for (f = [], t = a(); t !== e; )
                                                  f.push(t), t = a();
                                                if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                  for (l = [], o = a(); o !== e; )
                                                    l.push(o), o = a();
                                                  if (o = _(), o !== e) {
                                                    for (c = [], n = a(); n !== e; )
                                                      c.push(n), n = a();
                                                    if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                      for (u = [], g = a(); g !== e; )
                                                        u.push(g), g = a();
                                                      if (g = _(), g !== e) {
                                                        for (w = [], $ = a(); $ !== e; )
                                                          w.push($), $ = a();
                                                        h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = Cn(o, g)) : (s = i, i = e);
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
                                                if (i = s, h.substr(s, 7).toLowerCase() === ml ? (r = h.substr(s, 7), s += 7) : (r = e, p(Of)), r !== e) {
                                                  for (f = [], t = a(); t !== e; )
                                                    f.push(t), t = a();
                                                  if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                    for (l = [], o = a(); o !== e; )
                                                      l.push(o), o = a();
                                                    if (o = _(), o !== e) {
                                                      for (c = [], n = a(); n !== e; )
                                                        c.push(n), n = a();
                                                      if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                        for (u = [], g = a(); g !== e; )
                                                          u.push(g), g = a();
                                                        if (g = _(), g !== e) {
                                                          for (w = [], $ = a(); $ !== e; )
                                                            w.push($), $ = a();
                                                          h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = _n(o, g)) : (s = i, i = e);
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
                                                  if (i = s, h.substr(s, 8).toLowerCase() === El ? (r = h.substr(s, 8), s += 8) : (r = e, p(Nf)), r !== e) {
                                                    for (f = [], t = a(); t !== e; )
                                                      f.push(t), t = a();
                                                    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                      for (l = [], o = a(); o !== e; )
                                                        l.push(o), o = a();
                                                      if (o = _(), o !== e) {
                                                        for (c = [], n = a(); n !== e; )
                                                          c.push(n), n = a();
                                                        if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                          for (u = [], g = a(); g !== e; )
                                                            u.push(g), g = a();
                                                          if (g = _(), g !== e) {
                                                            for (w = [], $ = a(); $ !== e; )
                                                              w.push($), $ = a();
                                                            h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = mn(o, g)) : (s = i, i = e);
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
                                                    if (i = s, h.substr(s, 4).toLowerCase() === yl ? (r = h.substr(s, 4), s += 4) : (r = e, p(xf)), r !== e) {
                                                      for (f = [], t = a(); t !== e; )
                                                        f.push(t), t = a();
                                                      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                        for (l = [], o = a(); o !== e; )
                                                          l.push(o), o = a();
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
                                                      if (i = s, h.substr(s, 5).toLowerCase() === Pl ? (r = h.substr(s, 5), s += 5) : (r = e, p(Ff)), r !== e) {
                                                        for (f = [], t = a(); t !== e; )
                                                          f.push(t), t = a();
                                                        if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                          for (l = [], o = a(); o !== e; )
                                                            l.push(o), o = a();
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
                                                        if (i = s, h.substr(s, 3).toLowerCase() === Tl ? (r = h.substr(s, 3), s += 3) : (r = e, p(Df)), r !== e) {
                                                          for (f = [], t = a(); t !== e; )
                                                            f.push(t), t = a();
                                                          if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                            for (l = [], o = a(); o !== e; )
                                                              l.push(o), o = a();
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
                                                          if (i = s, h.substr(s, 5).toLowerCase() === Ll ? (r = h.substr(s, 5), s += 5) : (r = e, p(Gf)), r !== e) {
                                                            for (f = [], t = a(); t !== e; )
                                                              f.push(t), t = a();
                                                            if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                              for (l = [], o = a(); o !== e; )
                                                                l.push(o), o = a();
                                                              if (o = _(), o !== e) {
                                                                for (c = [], n = a(); n !== e; )
                                                                  c.push(n), n = a();
                                                                h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Tn(o)) : (s = i, i = e);
                                                              } else
                                                                s = i, i = e;
                                                            } else
                                                              s = i, i = e;
                                                          } else
                                                            s = i, i = e;
                                                          if (i === e) {
                                                            if (i = s, h.substr(s, 7).toLowerCase() === Rl ? (r = h.substr(s, 7), s += 7) : (r = e, p(Uf)), r !== e) {
                                                              for (f = [], t = a(); t !== e; )
                                                                f.push(t), t = a();
                                                              if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                for (l = [], o = a(); o !== e; )
                                                                  l.push(o), o = a();
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
                                                              if (i = s, h.substr(s, 7).toLowerCase() === Il ? (r = h.substr(s, 7), s += 7) : (r = e, p(Bf)), r !== e) {
                                                                for (f = [], t = a(); t !== e; )
                                                                  f.push(t), t = a();
                                                                if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                  for (l = [], o = a(); o !== e; )
                                                                    l.push(o), o = a();
                                                                  if (o = _(), o !== e) {
                                                                    for (c = [], n = a(); n !== e; )
                                                                      c.push(n), n = a();
                                                                    h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Rn(o)) : (s = i, i = e);
                                                                  } else
                                                                    s = i, i = e;
                                                                } else
                                                                  s = i, i = e;
                                                              } else
                                                                s = i, i = e;
                                                              if (i === e) {
                                                                if (i = s, h.substr(s, 8).toLowerCase() === Sl ? (r = h.substr(s, 8), s += 8) : (r = e, p(Hf)), r !== e) {
                                                                  for (f = [], t = a(); t !== e; )
                                                                    f.push(t), t = a();
                                                                  if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                    for (l = [], o = a(); o !== e; )
                                                                      l.push(o), o = a();
                                                                    if (o = _(), o !== e) {
                                                                      for (c = [], n = a(); n !== e; )
                                                                        c.push(n), n = a();
                                                                      h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = In(o)) : (s = i, i = e);
                                                                    } else
                                                                      s = i, i = e;
                                                                  } else
                                                                    s = i, i = e;
                                                                } else
                                                                  s = i, i = e;
                                                                if (i === e) {
                                                                  if (i = s, h.substr(s, 2).toLowerCase() === Ol ? (r = h.substr(s, 2), s += 2) : (r = e, p(Mf)), r !== e) {
                                                                    for (f = [], t = a(); t !== e; )
                                                                      f.push(t), t = a();
                                                                    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                      for (l = [], o = a(); o !== e; )
                                                                        l.push(o), o = a();
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
                                                                    if (i = s, h.substr(s, 3).toLowerCase() === Nl ? (r = h.substr(s, 3), s += 3) : (r = e, p(jf)), r !== e) {
                                                                      for (f = [], t = a(); t !== e; )
                                                                        f.push(t), t = a();
                                                                      t = me(), t !== e ? (d = i, i = On()) : (s = i, i = e);
                                                                    } else
                                                                      s = i, i = e;
                                                                    if (i === e) {
                                                                      if (i = s, h.substr(s, 4).toLowerCase() === xl ? (r = h.substr(s, 4), s += 4) : (r = e, p(kf)), r !== e) {
                                                                        for (f = [], t = a(); t !== e; )
                                                                          f.push(t), t = a();
                                                                        t = me(), t !== e ? (d = i, i = Nn()) : (s = i, i = e);
                                                                      } else
                                                                        s = i, i = e;
                                                                      if (i === e) {
                                                                        if (i = s, h.substr(s, 7).toLowerCase() === Fl ? (r = h.substr(s, 7), s += 7) : (r = e, p(Xf)), r !== e) {
                                                                          for (f = [], t = a(); t !== e; )
                                                                            f.push(t), t = a();
                                                                          t = me(), t !== e ? (d = i, i = xn()) : (s = i, i = e);
                                                                        } else
                                                                          s = i, i = e;
                                                                        if (i === e) {
                                                                          if (i = s, h.substr(s, 3).toLowerCase() === Dl ? (r = h.substr(s, 3), s += 3) : (r = e, p(Vf)), r !== e) {
                                                                            for (f = [], t = a(); t !== e; )
                                                                              f.push(t), t = a();
                                                                            if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                              for (l = [], o = a(); o !== e; )
                                                                                l.push(o), o = a();
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
                                                                            if (i = s, h.substr(s, 4).toLowerCase() === Gl ? (r = h.substr(s, 4), s += 4) : (r = e, p(Wf)), r !== e) {
                                                                              for (f = [], t = a(); t !== e; )
                                                                                f.push(t), t = a();
                                                                              if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                for (l = [], o = a(); o !== e; )
                                                                                  l.push(o), o = a();
                                                                                if (o = _(), o !== e) {
                                                                                  for (c = [], n = a(); n !== e; )
                                                                                    c.push(n), n = a();
                                                                                  h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Dn(o)) : (s = i, i = e);
                                                                                } else
                                                                                  s = i, i = e;
                                                                              } else
                                                                                s = i, i = e;
                                                                            } else
                                                                              s = i, i = e;
                                                                            if (i === e) {
                                                                              if (i = s, h.substr(s, 6).toLowerCase() === Ul ? (r = h.substr(s, 6), s += 6) : (r = e, p(Qf)), r !== e) {
                                                                                for (f = [], t = a(); t !== e; )
                                                                                  f.push(t), t = a();
                                                                                if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                  for (l = [], o = a(); o !== e; )
                                                                                    l.push(o), o = a();
                                                                                  if (o = _(), o !== e) {
                                                                                    for (c = [], n = a(); n !== e; )
                                                                                      c.push(n), n = a();
                                                                                    h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Gn(o)) : (s = i, i = e);
                                                                                  } else
                                                                                    s = i, i = e;
                                                                                } else
                                                                                  s = i, i = e;
                                                                              } else
                                                                                s = i, i = e;
                                                                              if (i === e) {
                                                                                if (i = s, h.substr(s, 6).toLowerCase() === Bl ? (r = h.substr(s, 6), s += 6) : (r = e, p(Yf)), r !== e) {
                                                                                  for (f = [], t = a(); t !== e; )
                                                                                    f.push(t), t = a();
                                                                                  if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                    for (l = [], o = a(); o !== e; )
                                                                                      l.push(o), o = a();
                                                                                    if (o = _(), o !== e) {
                                                                                      for (c = [], n = a(); n !== e; )
                                                                                        c.push(n), n = a();
                                                                                      h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Un(o)) : (s = i, i = e);
                                                                                    } else
                                                                                      s = i, i = e;
                                                                                  } else
                                                                                    s = i, i = e;
                                                                                } else
                                                                                  s = i, i = e;
                                                                                if (i === e) {
                                                                                  if (i = s, h.substr(s, 6).toLowerCase() === Hl ? (r = h.substr(s, 6), s += 6) : (r = e, p(zf)), r !== e) {
                                                                                    for (f = [], t = a(); t !== e; )
                                                                                      f.push(t), t = a();
                                                                                    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                      for (l = [], o = a(); o !== e; )
                                                                                        l.push(o), o = a();
                                                                                      if (o = _(), o !== e) {
                                                                                        for (c = [], n = a(); n !== e; )
                                                                                          c.push(n), n = a();
                                                                                        h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Bn(o)) : (s = i, i = e);
                                                                                      } else
                                                                                        s = i, i = e;
                                                                                    } else
                                                                                      s = i, i = e;
                                                                                  } else
                                                                                    s = i, i = e;
                                                                                  if (i === e) {
                                                                                    if (i = s, h.substr(s, 8).toLowerCase() === Ml ? (r = h.substr(s, 8), s += 8) : (r = e, p(Zf)), r !== e) {
                                                                                      for (f = [], t = a(); t !== e; )
                                                                                        f.push(t), t = a();
                                                                                      t = xe(), t !== e ? (d = i, i = Hn(t)) : (s = i, i = e);
                                                                                    } else
                                                                                      s = i, i = e;
                                                                                    if (i === e) {
                                                                                      if (i = s, h.substr(s, 2).toLowerCase() === jl ? (r = h.substr(s, 2), s += 2) : (r = e, p(Kf)), r !== e) {
                                                                                        for (f = [], t = a(); t !== e; )
                                                                                          f.push(t), t = a();
                                                                                        if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                          for (l = [], o = a(); o !== e; )
                                                                                            l.push(o), o = a();
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
                                                                                                  for (A = [], m = a(); m !== e; )
                                                                                                    A.push(m), m = a();
                                                                                                  if (m = _(), m !== e) {
                                                                                                    for (L = [], R = a(); R !== e; )
                                                                                                      L.push(R), R = a();
                                                                                                    h.charCodeAt(s) === 41 ? (R = E, s++) : (R = e, p(P)), R !== e ? (d = i, i = Mn(o, g, m)) : (s = i, i = e);
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
                                                                                        if (i = s, h.substr(s, 7).toLowerCase() === kl ? (r = h.substr(s, 7), s += 7) : (r = e, p(Jf)), r !== e) {
                                                                                          for (f = [], t = a(); t !== e; )
                                                                                            f.push(t), t = a();
                                                                                          if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                            for (l = [], o = a(); o !== e; )
                                                                                              l.push(o), o = a();
                                                                                            if (o = _(), o !== e) {
                                                                                              for (c = [], n = a(); n !== e; )
                                                                                                c.push(n), n = a();
                                                                                              if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                                                                for (u = [], g = a(); g !== e; )
                                                                                                  u.push(g), g = a();
                                                                                                if (g = _(), g !== e) {
                                                                                                  for (w = [], $ = a(); $ !== e; )
                                                                                                    w.push($), $ = a();
                                                                                                  h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = jn(o, g)) : (s = i, i = e);
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
                                                                                          if (i = s, h.substr(s, 5).toLowerCase() === Xl ? (r = h.substr(s, 5), s += 5) : (r = e, p(qf)), r !== e) {
                                                                                            for (f = [], t = a(); t !== e; )
                                                                                              f.push(t), t = a();
                                                                                            if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                              for (l = [], o = a(); o !== e; )
                                                                                                l.push(o), o = a();
                                                                                              if (o = _(), o !== e) {
                                                                                                for (c = [], n = a(); n !== e; )
                                                                                                  c.push(n), n = a();
                                                                                                if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                                                                  for (u = [], g = a(); g !== e; )
                                                                                                    u.push(g), g = a();
                                                                                                  if (g = _(), g !== e) {
                                                                                                    for (w = [], $ = a(); $ !== e; )
                                                                                                      w.push($), $ = a();
                                                                                                    h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = kn(o, g)) : (s = i, i = e);
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
                                                                                            if (i = s, h.substr(s, 8).toLowerCase() === Vl ? (r = h.substr(s, 8), s += 8) : (r = e, p(eo)), r !== e) {
                                                                                              for (f = [], t = a(); t !== e; )
                                                                                                f.push(t), t = a();
                                                                                              if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                                for (l = [], o = a(); o !== e; )
                                                                                                  l.push(o), o = a();
                                                                                                if (o = _(), o !== e) {
                                                                                                  for (c = [], n = a(); n !== e; )
                                                                                                    c.push(n), n = a();
                                                                                                  if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
                                                                                                    for (u = [], g = a(); g !== e; )
                                                                                                      u.push(g), g = a();
                                                                                                    if (g = _(), g !== e) {
                                                                                                      for (w = [], $ = a(); $ !== e; )
                                                                                                        w.push($), $ = a();
                                                                                                      h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e ? (d = i, i = Xn(o, g)) : (s = i, i = e);
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
                                                                                              if (i = s, h.substr(s, 5).toLowerCase() === Wl ? (r = h.substr(s, 5), s += 5) : (r = e, p(so)), r === e && (h.substr(s, 5).toLowerCase() === Ql ? (r = h.substr(s, 5), s += 5) : (r = e, p(ro))), r !== e) {
                                                                                                for (f = [], t = a(); t !== e; )
                                                                                                  f.push(t), t = a();
                                                                                                if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                                  for (l = [], o = a(); o !== e; )
                                                                                                    l.push(o), o = a();
                                                                                                  if (o = _(), o !== e) {
                                                                                                    for (c = [], n = a(); n !== e; )
                                                                                                      c.push(n), n = a();
                                                                                                    h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Vn(o)) : (s = i, i = e);
                                                                                                  } else
                                                                                                    s = i, i = e;
                                                                                                } else
                                                                                                  s = i, i = e;
                                                                                              } else
                                                                                                s = i, i = e;
                                                                                              if (i === e) {
                                                                                                if (i = s, h.substr(s, 7).toLowerCase() === Yl ? (r = h.substr(s, 7), s += 7) : (r = e, p(io)), r !== e) {
                                                                                                  for (f = [], t = a(); t !== e; )
                                                                                                    f.push(t), t = a();
                                                                                                  if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                                    for (l = [], o = a(); o !== e; )
                                                                                                      l.push(o), o = a();
                                                                                                    if (o = _(), o !== e) {
                                                                                                      for (c = [], n = a(); n !== e; )
                                                                                                        c.push(n), n = a();
                                                                                                      h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Wn(o)) : (s = i, i = e);
                                                                                                    } else
                                                                                                      s = i, i = e;
                                                                                                  } else
                                                                                                    s = i, i = e;
                                                                                                } else
                                                                                                  s = i, i = e;
                                                                                                if (i === e) {
                                                                                                  if (i = s, h.substr(s, 9).toLowerCase() === zl ? (r = h.substr(s, 9), s += 9) : (r = e, p(to)), r !== e) {
                                                                                                    for (f = [], t = a(); t !== e; )
                                                                                                      f.push(t), t = a();
                                                                                                    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                                      for (l = [], o = a(); o !== e; )
                                                                                                        l.push(o), o = a();
                                                                                                      if (o = _(), o !== e) {
                                                                                                        for (c = [], n = a(); n !== e; )
                                                                                                          c.push(n), n = a();
                                                                                                        h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Qn(o)) : (s = i, i = e);
                                                                                                      } else
                                                                                                        s = i, i = e;
                                                                                                    } else
                                                                                                      s = i, i = e;
                                                                                                  } else
                                                                                                    s = i, i = e;
                                                                                                  if (i === e) {
                                                                                                    if (i = s, h.substr(s, 9).toLowerCase() === Zl ? (r = h.substr(s, 9), s += 9) : (r = e, p(lo)), r !== e) {
                                                                                                      for (f = [], t = a(); t !== e; )
                                                                                                        f.push(t), t = a();
                                                                                                      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                                                                                                        for (l = [], o = a(); o !== e; )
                                                                                                          l.push(o), o = a();
                                                                                                        if (o = _(), o !== e) {
                                                                                                          for (c = [], n = a(); n !== e; )
                                                                                                            c.push(n), n = a();
                                                                                                          h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = i, i = Yn(o)) : (s = i, i = e);
                                                                                                        } else
                                                                                                          s = i, i = e;
                                                                                                      } else
                                                                                                        s = i, i = e;
                                                                                                    } else
                                                                                                      s = i, i = e;
                                                                                                    i === e && (i = jp(), i === e && (i = Vp(), i === e && (i = Wp())));
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
  function jp() {
    var i, r, f, t, l, o, c, n, u, g, w, $, A, m, L;
    if (i = s, h.substr(s, 5).toLowerCase() === Kl ? (r = h.substr(s, 5), s += 5) : (r = e, p(ao)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (o = _(), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = _(), g !== e) {
              for (w = [], $ = a(); $ !== e; )
                w.push($), $ = a();
              if ($ = s, h.charCodeAt(s) === 44 ? (A = D, s++) : (A = e, p(G)), A !== e) {
                for (m = [], L = a(); L !== e; )
                  m.push(L), L = a();
                L = _(), L !== e ? (A = [A, m, L], $ = A) : (s = $, $ = e);
              } else
                s = $, $ = e;
              for ($ === e && ($ = null), A = [], m = a(); m !== e; )
                A.push(m), m = a();
              h.charCodeAt(s) === 41 ? (m = E, s++) : (m = e, p(P)), m !== e ? (d = i, i = zn(o, g, $)) : (s = i, i = e);
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
  function kp() {
    var i, r, f, t, l, o, c, n, u, g, w, $, A, m, L;
    if (i = s, h.substr(s, 6).toLowerCase() === Jl ? (r = h.substr(s, 6), s += 6) : (r = e, p(fo)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        if (o = _(), o !== e) {
          for (c = [], n = a(); n !== e; )
            c.push(n), n = a();
          if (h.charCodeAt(s) === 44 ? (n = D, s++) : (n = e, p(G)), n !== e) {
            for (u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (g = _(), g !== e) {
              for (w = [], $ = a(); $ !== e; )
                w.push($), $ = a();
              if ($ = s, h.charCodeAt(s) === 44 ? (A = D, s++) : (A = e, p(G)), A !== e) {
                for (m = [], L = a(); L !== e; )
                  m.push(L), L = a();
                L = _(), L !== e ? (A = [A, m, L], $ = A) : (s = $, $ = e);
              } else
                s = $, $ = e;
              for ($ === e && ($ = null), A = [], m = a(); m !== e; )
                A.push(m), m = a();
              h.charCodeAt(s) === 41 ? (m = E, s++) : (m = e, p(P)), m !== e ? (d = i, i = Zn(o, g, $)) : (s = i, i = e);
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
    var i, r, f, t, l, o, c, n, u, g, w, $, A, m, L, R, O, M, ne;
    if (i = s, h.substr(s, 7).toLowerCase() === ql ? (r = h.substr(s, 7), s += 7) : (r = e, p(oo)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
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
                for (A = [], m = a(); m !== e; )
                  A.push(m), m = a();
                if (m = _(), m !== e) {
                  for (L = [], R = a(); R !== e; )
                    L.push(R), R = a();
                  if (R = s, h.charCodeAt(s) === 44 ? (O = D, s++) : (O = e, p(G)), O !== e) {
                    for (M = [], ne = a(); ne !== e; )
                      M.push(ne), ne = a();
                    ne = _(), ne !== e ? (O = [O, M, ne], R = O) : (s = R, R = e);
                  } else
                    s = R, R = e;
                  for (R === e && (R = null), O = [], M = a(); M !== e; )
                    O.push(M), M = a();
                  h.charCodeAt(s) === 41 ? (M = E, s++) : (M = e, p(P)), M !== e ? (d = i, i = Kn(o, g, m, R)) : (s = i, i = e);
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
  function Vp() {
    var i, r, f, t;
    if (i = s, h.substr(s, 6).toLowerCase() === qr ? (r = h.substr(s, 6), s += 6) : (r = e, p(Pi)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = re(), t !== e ? (d = i, i = Jn(t)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Wp() {
    var i, r, f, t, l, o;
    if (i = s, h.substr(s, 3).toLowerCase() === Ws ? (r = h.substr(s, 3), s += 3) : (r = e, p(ar)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (h.substr(s, 6).toLowerCase() === qr ? (t = h.substr(s, 6), s += 6) : (t = e, p(Pi)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        o = re(), o !== e ? (d = i, i = qn(o)) : (s = i, i = e);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function Qp() {
    var i, r, f, t, l, o, c, n, u, g, w, $, A, m, L, R, O;
    if (i = s, h.substr(s, 5).toLowerCase() === ea ? (r = h.substr(s, 5), s += 5) : (r = e, p(ho)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        for (h.substr(s, 8).toLowerCase() === S ? (o = h.substr(s, 8), s += 8) : (o = e, p(he)), o === e && (o = null), c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 42 ? (n = ee, s++) : (n = e, p(se)), n === e && (n = _()), n !== e) {
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
      if (i = s, h.substr(s, 3).toLowerCase() === sa ? (r = h.substr(s, 3), s += 3) : (r = e, p(co)), r !== e) {
        for (f = [], t = a(); t !== e; )
          f.push(t), t = a();
        if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
          for (l = [], o = a(); o !== e; )
            l.push(o), o = a();
          for (h.substr(s, 8).toLowerCase() === S ? (o = h.substr(s, 8), s += 8) : (o = e, p(he)), o === e && (o = null), c = [], n = a(); n !== e; )
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
      if (i === e) {
        if (i = s, h.substr(s, 3).toLowerCase() === ra ? (r = h.substr(s, 3), s += 3) : (r = e, p(no)), r !== e) {
          for (f = [], t = a(); t !== e; )
            f.push(t), t = a();
          if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
            for (l = [], o = a(); o !== e; )
              l.push(o), o = a();
            for (h.substr(s, 8).toLowerCase() === S ? (o = h.substr(s, 8), s += 8) : (o = e, p(he)), o === e && (o = null), c = [], n = a(); n !== e; )
              c.push(n), n = a();
            if (n = _(), n !== e) {
              for (u = [], g = a(); g !== e; )
                u.push(g), g = a();
              if (h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
                for (w = [], $ = a(); $ !== e; )
                  w.push($), $ = a();
                d = i, i = ru(o, n);
              } else
                s = i, i = e;
            } else
              s = i, i = e;
          } else
            s = i, i = e;
        } else
          s = i, i = e;
        if (i === e) {
          if (i = s, h.substr(s, 3).toLowerCase() === ia ? (r = h.substr(s, 3), s += 3) : (r = e, p(uo)), r !== e) {
            for (f = [], t = a(); t !== e; )
              f.push(t), t = a();
            if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
              for (l = [], o = a(); o !== e; )
                l.push(o), o = a();
              for (h.substr(s, 8).toLowerCase() === S ? (o = h.substr(s, 8), s += 8) : (o = e, p(he)), o === e && (o = null), c = [], n = a(); n !== e; )
                c.push(n), n = a();
              if (n = _(), n !== e) {
                for (u = [], g = a(); g !== e; )
                  u.push(g), g = a();
                if (h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
                  for (w = [], $ = a(); $ !== e; )
                    w.push($), $ = a();
                  d = i, i = iu(o, n);
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
            } else
              s = i, i = e;
          } else
            s = i, i = e;
          if (i === e) {
            if (i = s, h.substr(s, 3).toLowerCase() === ta ? (r = h.substr(s, 3), s += 3) : (r = e, p(po)), r !== e) {
              for (f = [], t = a(); t !== e; )
                f.push(t), t = a();
              if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                for (l = [], o = a(); o !== e; )
                  l.push(o), o = a();
                for (h.substr(s, 8).toLowerCase() === S ? (o = h.substr(s, 8), s += 8) : (o = e, p(he)), o === e && (o = null), c = [], n = a(); n !== e; )
                  c.push(n), n = a();
                if (n = _(), n !== e) {
                  for (u = [], g = a(); g !== e; )
                    u.push(g), g = a();
                  if (h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
                    for (w = [], $ = a(); $ !== e; )
                      w.push($), $ = a();
                    d = i, i = tu(o, n);
                  } else
                    s = i, i = e;
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
            } else
              s = i, i = e;
            if (i === e) {
              if (i = s, h.substr(s, 6).toLowerCase() === la ? (r = h.substr(s, 6), s += 6) : (r = e, p(go)), r !== e) {
                for (f = [], t = a(); t !== e; )
                  f.push(t), t = a();
                if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                  for (l = [], o = a(); o !== e; )
                    l.push(o), o = a();
                  for (h.substr(s, 8).toLowerCase() === S ? (o = h.substr(s, 8), s += 8) : (o = e, p(he)), o === e && (o = null), c = [], n = a(); n !== e; )
                    c.push(n), n = a();
                  if (n = _(), n !== e) {
                    for (u = [], g = a(); g !== e; )
                      u.push(g), g = a();
                    if (h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e) {
                      for (w = [], $ = a(); $ !== e; )
                        w.push($), $ = a();
                      d = i, i = lu(o, n);
                    } else
                      s = i, i = e;
                  } else
                    s = i, i = e;
                } else
                  s = i, i = e;
              } else
                s = i, i = e;
              if (i === e)
                if (i = s, h.substr(s, 12).toLowerCase() === aa ? (r = h.substr(s, 12), s += 12) : (r = e, p(wo)), r !== e) {
                  for (f = [], t = a(); t !== e; )
                    f.push(t), t = a();
                  if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
                    for (l = [], o = a(); o !== e; )
                      l.push(o), o = a();
                    for (h.substr(s, 8).toLowerCase() === S ? (o = h.substr(s, 8), s += 8) : (o = e, p(he)), o === e && (o = null), c = [], n = a(); n !== e; )
                      c.push(n), n = a();
                    if (n = _(), n !== e) {
                      for (u = s, g = [], w = a(); w !== e; )
                        g.push(w), w = a();
                      if (h.charCodeAt(s) === 59 ? (w = Pe, s++) : (w = e, p(Le)), w !== e) {
                        for ($ = [], A = a(); A !== e; )
                          $.push(A), A = a();
                        if (h.substr(s, 9).toLowerCase() === fa ? (A = h.substr(s, 9), s += 9) : (A = e, p($o)), A !== e) {
                          for (m = [], L = a(); L !== e; )
                            m.push(L), L = a();
                          if (h.charCodeAt(s) === 61 ? (L = ts, s++) : (L = e, p(As)), L !== e) {
                            for (R = [], O = a(); O !== e; )
                              R.push(O), O = a();
                            O = $t(), O !== e ? (g = [g, w, $, A, m, L, R, O], u = g) : (s = u, u = e);
                          } else
                            s = u, u = e;
                        } else
                          s = u, u = e;
                      } else
                        s = u, u = e;
                      for (u === e && (u = null), g = [], w = a(); w !== e; )
                        g.push(w), w = a();
                      if (h.charCodeAt(s) === 41 ? (w = E, s++) : (w = e, p(P)), w !== e) {
                        for ($ = [], A = a(); A !== e; )
                          $.push(A), A = a();
                        d = i, i = au(o, n, u);
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
  function Yp() {
    var i, r, f, t;
    if (i = s, r = W(), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      t = nt(), t === e && (t = null), d = i, i = fu(r, t);
    } else
      s = i, i = e;
    return i;
  }
  function Tr() {
    var i, r, f, t, l;
    return i = s, r = $t(), r !== e ? (f = rg(), f === e && (f = s, h.substr(s, 2) === ei ? (t = ei, s += 2) : (t = e, p(vo)), t !== e ? (l = W(), l !== e ? (t = [t, l], f = t) : (s = f, f = e)) : (s = f, f = e)), f === e && (f = null), d = i, i = ou(r, f)) : (s = i, i = e), i;
  }
  function Lr() {
    var i;
    return i = zp(), i === e && (i = Rr(), i === e && (i = Ir())), i;
  }
  function zp() {
    var i;
    return i = Fr(), i === e && (i = xr(), i === e && (i = We())), i;
  }
  function Rr() {
    var i;
    return i = lg(), i === e && (i = tg(), i === e && (i = ig())), i;
  }
  function Ir() {
    var i;
    return i = og(), i === e && (i = fg(), i === e && (i = ag())), i;
  }
  function Sr() {
    var i, r;
    return i = s, h.substr(s, 4).toLowerCase() === oa ? (r = h.substr(s, 4), s += 4) : (r = e, p(bo)), r !== e && (d = i, r = hu()), i = r, i === e && (i = s, h.substr(s, 5).toLowerCase() === ha ? (r = h.substr(s, 5), s += 5) : (r = e, p(Ao)), r !== e && (d = i, r = cu()), i = r), i;
  }
  function $t() {
    var i;
    return i = ng(), i === e && (i = ug(), i === e && (i = hg(), i === e && (i = cg()))), i;
  }
  function W() {
    var i, r;
    return i = s, r = Or(), r !== e && (d = i, r = nu(r)), i = r, i === e && (i = s, r = Zp(), r !== e && (d = i, r = uu(r)), i = r), i;
  }
  function Zp() {
    var i, r;
    return i = s, r = Jp(), r !== e && (d = i, r = pu(r)), i = r, i === e && (i = s, r = Nr(), r !== e && (d = i, r = gu(r)), i = r), i;
  }
  function Kp() {
    var i, r;
    return i = s, r = qp(), r !== e && (d = i, r = wu(r)), i = r, i === e && (i = s, r = gg(), r !== e && (d = i, r = du()), i = r), i;
  }
  function Or() {
    var i, r, f, t;
    if (i = s, h.charCodeAt(s) === 60 ? (r = Xs, s++) : (r = e, p(tr)), r !== e) {
      for (f = [], fi.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Ti)); t !== e; )
        f.push(t), fi.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Ti));
      h.charCodeAt(s) === 62 ? (t = Vs, s++) : (t = e, p(lr)), t !== e ? (d = i, i = $u(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Nr() {
    var i, r, f;
    return i = s, r = wg(), r === e && (r = null), h.charCodeAt(s) === 58 ? (f = Te, s++) : (f = e, p(Re)), f !== e ? (d = i, i = vu(r)) : (s = i, i = e), i;
  }
  function Jp() {
    var i, r, f;
    return i = s, r = Nr(), r !== e ? (f = dg(), f !== e ? (d = i, i = bu(r, f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function qp() {
    var i, r, f, t, l, o, c;
    if (i = s, h.substr(s, 2) === si ? (r = si, s += 2) : (r = e, p(Co)), r !== e)
      if (f = De(), f === e && (B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H))), f !== e) {
        for (t = [], l = q(), l === e && (l = s, h.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e ? (c = q(), c !== e ? (o = [o, c], l = o) : (s = l, l = e)) : (s = l, l = e)); l !== e; )
          t.push(l), l = q(), l === e && (l = s, h.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e ? (c = q(), c !== e ? (o = [o, c], l = o) : (s = l, l = e)) : (s = l, l = e));
        d = i, i = Au();
      } else
        s = i, i = e;
    else
      s = i, i = e;
    return i;
  }
  function eg() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 63 ? (r = Hs, s++) : (r = e, p(er)), r !== e ? (f = At(), f !== e ? (d = i, i = Cu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function sg() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 36 ? (r = ri, s++) : (r = e, p(Li)), r !== e ? (f = At(), f !== e ? (d = i, i = _u(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function rg() {
    var i, r, f, t, l, o, c, n;
    if (i = s, h.charCodeAt(s) === 64 ? (r = ii, s++) : (r = e, p(Ri)), r !== e) {
      if (f = [], oi.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Ii)), t !== e)
        for (; t !== e; )
          f.push(t), oi.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Ii));
      else
        f = e;
      if (f !== e) {
        if (t = [], l = s, h.charCodeAt(s) === 45 ? (o = ie, s++) : (o = e, p(te)), o !== e) {
          if (c = [], gs.test(h.charAt(s)) ? (n = h.charAt(s), s++) : (n = e, p(_s)), n !== e)
            for (; n !== e; )
              c.push(n), gs.test(h.charAt(s)) ? (n = h.charAt(s), s++) : (n = e, p(_s));
          else
            c = e;
          c !== e ? (o = [o, c], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
        for (; l !== e; )
          if (t.push(l), l = s, h.charCodeAt(s) === 45 ? (o = ie, s++) : (o = e, p(te)), o !== e) {
            if (c = [], gs.test(h.charAt(s)) ? (n = h.charAt(s), s++) : (n = e, p(_s)), n !== e)
              for (; n !== e; )
                c.push(n), gs.test(h.charAt(s)) ? (n = h.charAt(s), s++) : (n = e, p(_s));
            else
              c = e;
            c !== e ? (o = [o, c], l = o) : (s = l, l = e);
          } else
            s = l, l = e;
        d = i, i = mu(f, t);
      } else
        s = i, i = e;
    } else
      s = i, i = e;
    return i;
  }
  function We() {
    var i, r, f;
    if (i = s, r = [], B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H)), f !== e)
      for (; f !== e; )
        r.push(f), B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H));
    else
      r = e;
    return r !== e && (d = i, r = Eu()), i = r, i;
  }
  function xr() {
    var i, r, f, t, l;
    for (i = s, r = [], B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H)); f !== e; )
      r.push(f), B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H));
    if (h.charCodeAt(s) === 46 ? (f = X, s++) : (f = e, p(V)), f !== e) {
      if (t = [], B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H)), l !== e)
        for (; l !== e; )
          t.push(l), B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H));
      else
        t = e;
      t !== e ? (d = i, i = yu()) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function Fr() {
    var i, r, f, t, l;
    if (i = s, r = [], B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H)), f !== e)
      for (; f !== e; )
        r.push(f), B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H));
    else
      r = e;
    if (r !== e)
      if (h.charCodeAt(s) === 46 ? (f = X, s++) : (f = e, p(V)), f !== e) {
        for (t = [], B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H)); l !== e; )
          t.push(l), B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H));
        l = Dr(), l !== e ? (d = i, i = Pu()) : (s = i, i = e);
      } else
        s = i, i = e;
    else
      s = i, i = e;
    if (i === e) {
      if (i = s, h.charCodeAt(s) === 46 ? (r = X, s++) : (r = e, p(V)), r !== e) {
        if (f = [], B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H)), t !== e)
          for (; t !== e; )
            f.push(t), B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H));
        else
          f = e;
        f !== e ? (t = Dr(), t !== e ? (d = i, i = Tu()) : (s = i, i = e)) : (s = i, i = e);
      } else
        s = i, i = e;
      if (i === e) {
        if (i = s, r = [], B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H)), f !== e)
          for (; f !== e; )
            r.push(f), B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H));
        else
          r = e;
        r !== e ? (f = Dr(), f !== e ? (d = i, i = Lu()) : (s = i, i = e)) : (s = i, i = e);
      }
    }
    return i;
  }
  function ig() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 43 ? (r = $e, s++) : (r = e, p(Ce)), r !== e ? (f = We(), f !== e ? (d = i, i = Ru(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function tg() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 43 ? (r = $e, s++) : (r = e, p(Ce)), r !== e ? (f = xr(), f !== e ? (d = i, i = Iu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function lg() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 43 ? (r = $e, s++) : (r = e, p(Ce)), r !== e ? (f = Fr(), f !== e ? (d = i, i = Su(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function ag() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 45 ? (r = ie, s++) : (r = e, p(te)), r !== e ? (f = We(), f !== e ? (d = i, i = Ou(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function fg() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 45 ? (r = ie, s++) : (r = e, p(te)), r !== e ? (f = xr(), f !== e ? (d = i, i = Nu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function og() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 45 ? (r = ie, s++) : (r = e, p(te)), r !== e ? (f = Fr(), f !== e ? (d = i, i = xu(f)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function Dr() {
    var i, r, f, t, l;
    if (i = s, ua.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(_o)), r !== e) {
      if (pa.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(mo)), f === e && (f = null), t = [], B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H)), l !== e)
        for (; l !== e; )
          t.push(l), B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H));
      else
        t = e;
      t !== e ? (r = [r, f, t], i = r) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function hg() {
    var i, r, f, t;
    if (i = s, h.charCodeAt(s) === 39 ? (r = He, s++) : (r = e, p(Me)), r !== e) {
      for (f = [], hi.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Si)), t === e && (t = _e()); t !== e; )
        f.push(t), hi.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Si)), t === e && (t = _e());
      h.charCodeAt(s) === 39 ? (t = He, s++) : (t = e, p(Me)), t !== e ? (d = i, i = Fu(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function cg() {
    var i, r, f, t;
    if (i = s, h.charCodeAt(s) === 34 ? (r = hs, s++) : (r = e, p(ms)), r !== e) {
      for (f = [], ci.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Oi)), t === e && (t = _e()); t !== e; )
        f.push(t), ci.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Oi)), t === e && (t = _e());
      h.charCodeAt(s) === 34 ? (t = hs, s++) : (t = e, p(ms)), t !== e ? (d = i, i = Du(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function ng() {
    var i, r, f, t, l, o;
    if (i = s, h.substr(s, 3) === cs ? (r = cs, s += 3) : (r = e, p(Ni)), r !== e) {
      for (f = [], t = s, h.substr(s, 2) === ns ? (l = ns, s += 2) : (l = e, p(xi)), l === e && (h.charCodeAt(s) === 39 ? (l = He, s++) : (l = e, p(Me))), l === e && (l = null), ni.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(Fi)), o === e && (o = _e()), o !== e ? (l = [l, o], t = l) : (s = t, t = e); t !== e; )
        f.push(t), t = s, h.substr(s, 2) === ns ? (l = ns, s += 2) : (l = e, p(xi)), l === e && (h.charCodeAt(s) === 39 ? (l = He, s++) : (l = e, p(Me))), l === e && (l = null), ni.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(Fi)), o === e && (o = _e()), o !== e ? (l = [l, o], t = l) : (s = t, t = e);
      h.substr(s, 3) === cs ? (t = cs, s += 3) : (t = e, p(Ni)), t !== e ? (d = i, i = Gu(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function ug() {
    var i, r, f, t, l, o;
    if (i = s, h.substr(s, 3) === us ? (r = us, s += 3) : (r = e, p(Di)), r !== e) {
      for (f = [], t = s, h.substr(s, 2) === ps ? (l = ps, s += 2) : (l = e, p(Gi)), l === e && (h.charCodeAt(s) === 34 ? (l = hs, s++) : (l = e, p(ms))), l === e && (l = null), ui.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(Ui)), o === e && (o = _e()), o !== e ? (l = [l, o], t = l) : (s = t, t = e); t !== e; )
        f.push(t), t = s, h.substr(s, 2) === ps ? (l = ps, s += 2) : (l = e, p(Gi)), l === e && (h.charCodeAt(s) === 34 ? (l = hs, s++) : (l = e, p(ms))), l === e && (l = null), ui.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(Ui)), o === e && (o = _e()), o !== e ? (l = [l, o], t = l) : (s = t, t = e);
      h.substr(s, 3) === us ? (t = us, s += 3) : (t = e, p(Di)), t !== e ? (d = i, i = Uu(f)) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function _e() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 92 ? (r = ti, s++) : (r = e, p(Bi)), r !== e ? (ga.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(Eo)), f !== e ? (d = i, i = Bu()) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function me() {
    var i, r, f, t;
    if (i = s, h.charCodeAt(s) === 40 ? (r = C, s++) : (r = e, p(y)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      h.charCodeAt(s) === 41 ? (t = E, s++) : (t = e, p(P)), t !== e ? (r = [r, f, t], i = r) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function a() {
    var i;
    return i = pg(), i === e && (i = Gr(), i === e && (i = Ur())), i;
  }
  function Gr() {
    var i;
    return wa.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(yo)), i;
  }
  function Ur() {
    var i;
    return da.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Po)), i;
  }
  function Os() {
    var i;
    return $a.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(To)), i;
  }
  function vt() {
    var i, r, f, t;
    if (i = s, h.charCodeAt(s) === 35 ? (r = Qs, s++) : (r = e, p(fr)), r !== e) {
      for (f = [], t = Os(); t !== e; )
        f.push(t), t = Os();
      t = Ur(), t !== e ? (d = i, i = Hu()) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function pg() {
    var i, r, f, t, l;
    for (i = s, Ur(), r = [], f = Gr(); f !== e; )
      r.push(f), f = Gr();
    if (h.charCodeAt(s) === 35 ? (f = Qs, s++) : (f = e, p(fr)), f !== e) {
      for (t = [], l = Os(); l !== e; )
        t.push(l), l = Os();
      d = i, i = Mu();
    } else
      s = i, i = e;
    return i;
  }
  function gg() {
    var i, r, f, t;
    if (i = s, h.charCodeAt(s) === 91 ? (r = js, s++) : (r = e, p(rr)), r !== e) {
      for (f = [], t = a(); t !== e; )
        f.push(t), t = a();
      h.charCodeAt(s) === 93 ? (t = ks, s++) : (t = e, p(ir)), t !== e ? (r = [r, f, t], i = r) : (s = i, i = e);
    } else
      s = i, i = e;
    return i;
  }
  function bt() {
    var i;
    return va.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Lo)), i === e && (ba.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Ro)), i === e && (Aa.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Io)), i === e && (Ca.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(So)), i === e && (_a.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Oo)), i === e && (ma.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(No)), i === e && (Ea.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(xo)), i === e && (ya.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Fo)), i === e && (Pa.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Do)), i === e && (Ta.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Go)), i === e && (La.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Uo)), i === e && (Ra.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Bo)), i === e && (Ia.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Ho)))))))))))))), i;
  }
  function De() {
    var i;
    return i = bt(), i === e && (h.charCodeAt(s) === 95 ? (i = li, s++) : (i = e, p(Hi))), i;
  }
  function At() {
    var i, r, f, t;
    if (i = s, r = De(), r === e && (B.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(H))), r !== e) {
      for (f = [], t = De(), t === e && (B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H)), t === e && (Ys.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(or)), t === e && (zs.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(hr)), t === e && (Zs.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(cr)))))); t !== e; )
        f.push(t), t = De(), t === e && (B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H)), t === e && (Ys.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(or)), t === e && (zs.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(hr)), t === e && (Zs.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(cr))))));
      d = i, i = ju();
    } else
      s = i, i = e;
    return i;
  }
  function q() {
    var i;
    return i = De(), i === e && (h.charCodeAt(s) === 45 ? (i = ie, s++) : (i = e, p(te)), i === e && (B.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(H)), i === e && (Ys.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(or)), i === e && (zs.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(hr)), i === e && (Zs.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(cr))))))), i;
  }
  function wg() {
    var i, r, f, t, l, o;
    if (i = s, r = bt(), r !== e) {
      for (f = [], t = q(), t === e && (t = s, h.charCodeAt(s) === 46 ? (l = X, s++) : (l = e, p(V)), l !== e ? (o = q(), o !== e ? (l = [l, o], t = l) : (s = t, t = e)) : (s = t, t = e)); t !== e; )
        f.push(t), t = q(), t === e && (t = s, h.charCodeAt(s) === 46 ? (l = X, s++) : (l = e, p(V)), l !== e ? (o = q(), o !== e ? (l = [l, o], t = l) : (s = t, t = e)) : (s = t, t = e));
      d = i, i = ku();
    } else
      s = i, i = e;
    return i;
  }
  function dg() {
    var i, r, f, t, l, o;
    if (i = s, r = De(), r === e && (h.charCodeAt(s) === 58 ? (r = Te, s++) : (r = e, p(Re)), r === e && (B.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(H)), r === e && (r = Qe()))), r !== e) {
      for (f = [], t = q(), t === e && (h.charCodeAt(s) === 58 ? (t = Te, s++) : (t = e, p(Re)), t === e && (t = Qe())), t === e && (t = s, h.charCodeAt(s) === 46 ? (l = X, s++) : (l = e, p(V)), l !== e ? (o = q(), o === e && (h.charCodeAt(s) === 58 ? (o = Te, s++) : (o = e, p(Re)), o === e && (o = Qe())), o !== e ? (l = [l, o], t = l) : (s = t, t = e)) : (s = t, t = e)); t !== e; )
        f.push(t), t = q(), t === e && (h.charCodeAt(s) === 58 ? (t = Te, s++) : (t = e, p(Re)), t === e && (t = Qe())), t === e && (t = s, h.charCodeAt(s) === 46 ? (l = X, s++) : (l = e, p(V)), l !== e ? (o = q(), o === e && (h.charCodeAt(s) === 58 ? (o = Te, s++) : (o = e, p(Re)), o === e && (o = Qe())), o !== e ? (l = [l, o], t = l) : (s = t, t = e)) : (s = t, t = e));
      d = i, i = Xu();
    } else
      s = i, i = e;
    return i;
  }
  function Qe() {
    var i;
    return i = $g(), i === e && (i = vg()), i;
  }
  function $g() {
    var i, r, f, t;
    return i = s, h.charCodeAt(s) === 37 ? (r = ai, s++) : (r = e, p(Mi)), r !== e ? (f = Ct(), f !== e ? (t = Ct(), t !== e ? (r = [r, f, t], i = r) : (s = i, i = e)) : (s = i, i = e)) : (s = i, i = e), i;
  }
  function Ct() {
    var i;
    return B.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(H)), i === e && (Sa.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(Mo)), i === e && (Oa.test(h.charAt(s)) ? (i = h.charAt(s), s++) : (i = e, p(jo)))), i;
  }
  function vg() {
    var i, r, f;
    return i = s, h.charCodeAt(s) === 92 ? (r = ti, s++) : (r = e, p(Bi)), r !== e ? (h.charCodeAt(s) === 95 ? (f = li, s++) : (f = e, p(Hi)), f === e && (h.charCodeAt(s) === 126 ? (f = ca, s++) : (f = e, p(ko)), f === e && (h.charCodeAt(s) === 46 ? (f = X, s++) : (f = e, p(V)), f === e && (h.charCodeAt(s) === 45 ? (f = ie, s++) : (f = e, p(te)), f === e && (h.charCodeAt(s) === 33 ? (f = Ms, s++) : (f = e, p(sr)), f === e && (h.charCodeAt(s) === 36 ? (f = ri, s++) : (f = e, p(Li)), f === e && (h.charCodeAt(s) === 38 ? (f = na, s++) : (f = e, p(Xo)), f === e && (h.charCodeAt(s) === 39 ? (f = He, s++) : (f = e, p(Me)), f === e && (h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f === e && (h.charCodeAt(s) === 41 ? (f = E, s++) : (f = e, p(P)), f === e && (h.charCodeAt(s) === 42 ? (f = ee, s++) : (f = e, p(se)), f === e && (h.charCodeAt(s) === 43 ? (f = $e, s++) : (f = e, p(Ce)), f === e && (h.charCodeAt(s) === 44 ? (f = D, s++) : (f = e, p(G)), f === e && (h.charCodeAt(s) === 59 ? (f = Pe, s++) : (f = e, p(Le)), f === e && (h.charCodeAt(s) === 58 ? (f = Te, s++) : (f = e, p(Re)), f === e && (h.charCodeAt(s) === 61 ? (f = ts, s++) : (f = e, p(As)), f === e && (h.charCodeAt(s) === 47 ? (f = oe, s++) : (f = e, p(ce)), f === e && (h.charCodeAt(s) === 63 ? (f = Hs, s++) : (f = e, p(er)), f === e && (h.charCodeAt(s) === 35 ? (f = Qs, s++) : (f = e, p(fr)), f === e && (h.charCodeAt(s) === 64 ? (f = ii, s++) : (f = e, p(Ri)), f === e && (h.charCodeAt(s) === 37 ? (f = ai, s++) : (f = e, p(Mi)))))))))))))))))))))), f !== e ? (r = [r, f], i = r) : (s = i, i = e)) : (s = i, i = e), i;
  }
  let _t = {};
  if (ys = K(), ys !== e && s === h.length)
    return ys;
  throw ys !== e && s < h.length && p(Vu()), Wu(
    nr,
    le < h.length ? h.charAt(le) : null,
    le < h.length ? ur(le, le + 1) : ur(le, le)
  );
}
function $1(h, b) {
  function e() {
    this.constructor = h;
  }
  e.prototype = b.prototype, h.prototype = new e();
}
function kr(h, b, e, T) {
  var x = Error.call(this, h);
  return Object.setPrototypeOf && Object.setPrototypeOf(x, kr.prototype), x.expected = b, x.found = e, x.location = T, x.name = "SyntaxError", x;
}
$1(kr, Error);
function Ag(h, b, e) {
  return e = e || " ", h.length > b ? h : (b -= h.length, e += e.repeat(b), h + e.slice(0, b));
}
kr.prototype.format = function(h) {
  var b = "Error: " + this.message;
  if (this.location) {
    var e = null, T;
    for (T = 0; T < h.length; T++)
      if (h[T].source === this.location.source) {
        e = h[T].text.split(/\r\n|\n|\r/g);
        break;
      }
    var x = this.location.start, K = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(x) : x, ue = this.location.source + ":" + K.line + ":" + K.column;
    if (e) {
      var Ee = this.location.end, pe = Ag("", K.line.toString().length, " "), S = e[x.line - 1], F = x.line === Ee.line ? Ee.column : S.length + 1, C = F - x.column || 1;
      b += `
 --> ` + ue + `
` + pe + ` |
` + K.line + " | " + S + `
` + pe + " | " + Ag("", x.column - 1, " ") + Ag("", C, "^");
    } else
      b += `
 at ` + ue;
  }
  return b;
};
kr.buildMessage = function(h, b) {
  var e = {
    literal: function(S) {
      return '"' + x(S.text) + '"';
    },
    class: function(S) {
      var F = S.parts.map(function(C) {
        return Array.isArray(C) ? K(C[0]) + "-" + K(C[1]) : K(C);
      });
      return "[" + (S.inverted ? "^" : "") + F.join("") + "]";
    },
    any: function() {
      return "any character";
    },
    end: function() {
      return "end of input";
    },
    other: function(S) {
      return S.description;
    }
  };
  function T(S) {
    return S.charCodeAt(0).toString(16).toUpperCase();
  }
  function x(S) {
    return S.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(F) {
      return "\\x0" + T(F);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(F) {
      return "\\x" + T(F);
    });
  }
  function K(S) {
    return S.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(F) {
      return "\\x0" + T(F);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(F) {
      return "\\x" + T(F);
    });
  }
  function ue(S) {
    return e[S.type](S);
  }
  function Ee(S) {
    var F = S.map(ue), C, fe;
    if (F.sort(), F.length > 0) {
      for (C = 1, fe = 1; C < F.length; C++)
        F[C - 1] !== F[C] && (F[fe] = F[C], fe++);
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
  function pe(S) {
    return S ? '"' + x(S) + '"' : "end of input";
  }
  return "Expected " + Ee(h) + " but " + pe(b) + " found.";
};
function Ug(h, b) {
  b = b !== void 0 ? b : {};
  var e = {}, T = b.grammarSource, x = { DOCUMENT: ki }, K = ki, ue = "base", Ee = "prefix", pe = "select", S = "distinct", F = "reduced", C = "(", fe = "as", E = ")", ee = "*", Xr = "construct", Je = "where", ge = "{", we = "}", It = "describe", St = "ask", Ot = "from", Gs = "named", Nt = "group", Vr = "by", xt = "having", Ft = "order", Dt = "asc", Gt = "desc", Ut = "limit", Bt = "offset", Wr = "values", Pe = ";", Ht = "load", de = "silent", Mt = "into", jt = "clear", kt = "drop", Xt = "create", Vt = "add", Us = "to", Wt = "move", Qt = "copy", Qr = "insert", Yr = "data", Bs = "delete", Yt = "with", zt = "using", zr = "default", qe = "graph", Zt = "all", X = ".", Kt = "optional", Jt = "service", qt = "bind", Zr = "UNDEF", el = "minus", Kr = "union", sl = "filter", D = ",", es = "a", ss = "|", oe = "/", Jr = "^", Hs = "?", $e = "+", Ms = "!", js = "[", ks = "]", rs = "||", is = "&&", ts = "=", ls = "!=", Xs = "<", Vs = ">", as = "<=", fs = ">=", os = "in", Ws = "not", ie = "-", rl = "str", il = "lang", tl = "langmatches", ll = "datatype", al = "bound", fl = "iri", ol = "uri", hl = "bnode", cl = "rand", nl = "abs", ul = "ceil", pl = "floor", gl = "round", wl = "concat", dl = "strlen", $l = "ucase", vl = "lcase", bl = "encode_for_uri", Al = "contains", Cl = "strbefore", _l = "strstarts", ml = "strends", El = "strafter", yl = "year", Pl = "month", Tl = "day", Ll = "hours", Rl = "minutes", Il = "seconds", Sl = "timezone", Ol = "tz", Nl = "now", xl = "uuid", Fl = "struuid", Dl = "md5", Gl = "sha1", Ul = "sha256", Bl = "sha384", Hl = "sha512", Ml = "coalesce", jl = "if", kl = "strlang", Xl = "strdt", Vl = "sameterm", Wl = "isuri", Ql = "isiri", Yl = "isblank", zl = "isliteral", Zl = "isnumeric", Kl = "regex", Jl = "substr", ql = "replace", qr = "exists", ea = "count", sa = "sum", ra = "min", ia = "max", ta = "avg", la = "sample", aa = "group_concat", fa = "separator", ei = "^^", oa = "true", ha = "false", Te = ":", si = "_:", ri = "$", ii = "@", He = "'", hs = '"', cs = "'''", ns = "''", us = '"""', ps = '""', ti = "\\", Qs = "#", li = "_", ai = "%", ca = "~", na = "&", fi = /^[^<>"{}|\^`\\\0- ]/, B = /^[0-9]/, oi = /^[a-zA-Z]/, gs = /^[a-zA-Z0-9]/, ua = /^[eE]/, pa = /^[+\-]/, hi = /^[^'\\\n\r]/, ci = /^[^"\\\n\r]/, ni = /^[^'\\]/, ui = /^[^"\\]/, ga = /^[tbnrf\\"']/, wa = /^[ \t]/, da = /^[\r\n]/, $a = /^[^\r\n]/, va = /^[A-Z]/, ba = /^[a-z]/, Aa = /^[\xC0-\xD6]/, Ca = /^[\xD8-\xF6]/, _a = /^[\xF8-\u02FF]/, ma = /^[\u0370-\u037D]/, Ea = /^[\u037F-\u1FFF]/, ya = /^[\u200C-\u200D]/, Pa = /^[\u2070-\u218F]/, Ta = /^[\u2C00-\u2FEF]/, La = /^[\u3001-\uD7FF]/, Ra = /^[\uF900-\uFDCF]/, Ia = /^[\uFDF0-\uFFFD]/, Ys = /^[\xB7]/, zs = /^[\u0300-\u036F]/, Zs = /^[\u203F-\u2040]/, Sa = /^[A-F]/, Oa = /^[a-f]/, Na = v("BASE", !0), xa = v("PREFIX", !0), Fa = v("SELECT", !0), he = v("DISTINCT", !0), Da = v("REDUCED", !0), y = v("(", !1), ws = v("AS", !0), P = v(")", !1), se = v("*", !1), pi = v("CONSTRUCT", !0), ds = v("WHERE", !0), ve = v("{", !1), be = v("}", !1), Ga = v("DESCRIBE", !0), Ua = v("ASK", !0), Ba = v("FROM", !0), Ks = v("NAMED", !0), Ha = v("GROUP", !0), gi = v("BY", !0), Ma = v("HAVING", !0), ja = v("ORDER", !0), ka = v("ASC", !0), Xa = v("DESC", !0), Va = v("LIMIT", !0), Wa = v("OFFSET", !0), wi = v("VALUES", !0), Le = v(";", !1), Qa = v("LOAD", !0), Ae = v("SILENT", !0), Ya = v("INTO", !0), za = v("CLEAR", !0), Za = v("DROP", !0), Ka = v("CREATE", !0), Ja = v("ADD", !0), Js = v("TO", !0), qa = v("MOVE", !0), ef = v("COPY", !0), di = v("INSERT", !0), $i = v("DATA", !0), qs = v("DELETE", !0), sf = v("WITH", !0), rf = v("USING", !0), vi = v("DEFAULT", !0), $s = v("GRAPH", !0), tf = v("ALL", !0), V = v(".", !1), lf = v("OPTIONAL", !0), af = v("SERVICE", !0), ff = v("BIND", !0), of = v("UNDEF", !1), hf = v("MINUS", !0), bi = v("UNION", !0), cf = v("FILTER", !0), G = v(",", !1), vs = v("a", !1), bs = v("|", !1), ce = v("/", !1), Ai = v("^", !1), er = v("?", !1), Ce = v("+", !1), sr = v("!", !1), rr = v("[", !1), ir = v("]", !1), Ci = v("||", !1), _i = v("&&", !1), As = v("=", !1), mi = v("!=", !1), tr = v("<", !1), lr = v(">", !1), Ei = v("<=", !1), yi = v(">=", !1), Cs = v("IN", !0), ar = v("NOT", !0), te = v("-", !1), nf = v("STR", !0), uf = v("LANG", !0), pf = v("LANGMATCHES", !0), gf = v("DATATYPE", !0), wf = v("BOUND", !0), df = v("IRI", !0), $f = v("URI", !0), vf = v("BNODE", !0), bf = v("RAND", !0), Af = v("ABS", !0), Cf = v("CEIL", !0), _f = v("FLOOR", !0), mf = v("ROUND", !0), Ef = v("CONCAT", !0), yf = v("STRLEN", !0), Pf = v("UCASE", !0), Tf = v("LCASE", !0), Lf = v("ENCODE_FOR_URI", !0), Rf = v("CONTAINS", !0), If = v("STRBEFORE", !0), Sf = v("STRSTARTS", !0), Of = v("STRENDS", !0), Nf = v("STRAFTER", !0), xf = v("YEAR", !0), Ff = v("MONTH", !0), Df = v("DAY", !0), Gf = v("HOURS", !0), Uf = v("MINUTES", !0), Bf = v("SECONDS", !0), Hf = v("TIMEZONE", !0), Mf = v("TZ", !0), jf = v("NOW", !0), kf = v("UUID", !0), Xf = v("STRUUID", !0), Vf = v("MD5", !0), Wf = v("SHA1", !0), Qf = v("SHA256", !0), Yf = v("SHA384", !0), zf = v("SHA512", !0), Zf = v("COALESCE", !0), Kf = v("IF", !0), Jf = v("STRLANG", !0), qf = v("STRDT", !0), eo = v("sameTerm", !0), so = v("isURI", !0), ro = v("isIRI", !0), io = v("isBLANK", !0), to = v("isLITERAL", !0), lo = v("isNUMERIC", !0), ao = v("REGEX", !0), fo = v("SUBSTR", !0), oo = v("REPLACE", !0), Pi = v("EXISTS", !0), ho = v("COUNT", !0), co = v("SUM", !0), no = v("MIN", !0), uo = v("MAX", !0), po = v("AVG", !0), go = v("SAMPLE", !0), wo = v("GROUP_CONCAT", !0), $o = v("SEPARATOR", !0), vo = v("^^", !1), bo = v("true", !0), Ao = v("false", !0), Ti = N(["<", ">", '"', "{", "}", "|", "^", "`", "\\", ["\0", " "]], !0, !1), Re = v(":", !1), Co = v("_:", !1), H = N([["0", "9"]], !1, !1), Li = v("$", !1), Ri = v("@", !1), Ii = N([["a", "z"], ["A", "Z"]], !1, !1), _s = N([["a", "z"], ["A", "Z"], ["0", "9"]], !1, !1), _o = N(["e", "E"], !1, !1), mo = N(["+", "-"], !1, !1), Me = v("'", !1), Si = N(["'", "\\", `
`, "\r"], !0, !1), ms = v('"', !1), Oi = N(['"', "\\", `
`, "\r"], !0, !1), Ni = v("'''", !1), xi = v("''", !1), Fi = N(["'", "\\"], !0, !1), Di = v('"""', !1), Gi = v('""', !1), Ui = N(['"', "\\"], !0, !1), Bi = v("\\", !1), Eo = N(["t", "b", "n", "r", "f", "\\", '"', "'"], !1, !1), yo = N([" ", "	"], !1, !1), Po = N(["\r", `
`], !1, !1), To = N(["\r", `
`], !0, !1), fr = v("#", !1), Lo = N([["A", "Z"]], !1, !1), Ro = N([["a", "z"]], !1, !1), Io = N([["À", "Ö"]], !1, !1), So = N([["Ø", "ö"]], !1, !1), Oo = N([["ø", "˿"]], !1, !1), No = N([["Ͱ", "ͽ"]], !1, !1), xo = N([["Ϳ", "῿"]], !1, !1), Fo = N([["‌", "‍"]], !1, !1), Do = N([["⁰", "↏"]], !1, !1), Go = N([["Ⰰ", "⿯"]], !1, !1), Uo = N([["、", "퟿"]], !1, !1), Bo = N([["豈", "﷏"]], !1, !1), Ho = N([["ﷰ", "�"]], !1, !1), Hi = v("_", !1), or = N(["·"], !1, !1), hr = N([["̀", "ͯ"]], !1, !1), cr = N([["‿", "⁀"]], !1, !1), Mi = v("%", !1), Mo = N([["A", "F"]], !1, !1), jo = N([["a", "f"]], !1, !1), ko = v("~", !1), Xo = v("&", !1), Vo = function(r, f) {
    let t = {};
    r.length ? t = {
      headers: r,
      ...f
    } : t = f;
    const l = Object.entries(_t).map(([o, c]) => ({
      pos: parseInt(o),
      text: c
    }));
    return l.length && (t.comments = l), {
      "@context": "https://purl.org/sparql-formatter/context.jsonld",
      ...t
    };
  }, Wo = function(r, f, t) {
    let l = { type: "Query" };
    return r && (l.prologue = r), f.type === "SelectQuery" ? l.selectQuery = f : f.type === "ConstructQuery" ? l.constructQuery = f : f.type === "DescribeQuery" ? l.describeQuery = f : f.type === "AskQuery" && (l.askQuery = f), t && (l.values = t), l;
  }, Qo = function(r) {
    if (r.length)
      return {
        type: "Prologue",
        decl: r
      };
  }, Yo = function(r) {
    return {
      type: "BaseDecl",
      iriref: r
    };
  }, zo = function(r, f) {
    return {
      type: "PrefixDecl",
      pn_prefix: r,
      iriref: f
    };
  }, Zo = function(r, f, t, l) {
    return f.length && (r.from = f), r = {
      type: "SelectQuery",
      selectClause: r,
      whereClause: t,
      ...l
    }, r;
  }, Ko = function(r, f, t, l) {
    let o = {
      type: "SubSelect",
      selectClause: r,
      whereClause: f,
      ...t,
      location: I()
    };
    return l && (o.values = l), o;
  }, Jo = function(r, f) {
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
  }, qo = function(r, f, t, l) {
    let o = { type: "ConstructQuery" };
    return f.length && (o.from = f), o = {
      ...o,
      template: r,
      where: t,
      ...l,
      location: I()
    }, o;
  }, eh = function(r, f, t) {
    let l = { type: "ConstructQuery" };
    return r.length && (l.from = r), l = {
      ...l,
      where: [f],
      ...t,
      location: I()
    }, l;
  }, sh = function(r, f, t, l) {
    let o = { type: "DescribeQuery" };
    return f.length && (o.from = f), o.describe = r, t && (o.where = t), o = {
      ...o,
      ...l,
      location: I()
    }, o;
  }, rh = function(r, f, t) {
    let l = { type: "AskQuery" };
    return r.length && (l.from = r), l = {
      ...l,
      where: f,
      ...t,
      location: I()
    }, l;
  }, ih = function(r) {
    return r;
  }, th = function(r) {
    return {
      graph: r,
      location: I()
    };
  }, lh = function(r) {
    return {
      namedGraph: r,
      location: I()
    };
  }, ah = function(r) {
    return r.graphPattern || r;
  }, fh = function(r, f, t, l) {
    let o = {};
    return r && (o.group = r), f && (o.having = f), t && (o.orderBy = t), l && (o.limitOffset = l), o;
  }, oh = function(r) {
    return r;
  }, hh = function(r) {
    return r;
  }, ch = function(r) {
    return r;
  }, nh = function(r, f) {
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
  }, uh = function(r) {
    return r;
  }, ph = function(r) {
    return r;
  }, gh = function(r) {
    return r;
  }, wh = function(r) {
    return r;
  }, dh = function(r, f) {
    let t = {};
    return r.toUpperCase() === "ASC" ? t = {
      asc: !0,
      ...f
    } : r.toUpperCase() === "DESC" && (t = {
      desc: !0,
      ...f
    }), t;
  }, $h = function(r) {
    return r;
  }, vh = function(r) {
    let f = [r[0]];
    return r[1] && f.push(r[1]), f;
  }, bh = function(r) {
    return {
      limit: parseInt(r.literal)
    };
  }, Ah = function(r) {
    return {
      offset: parseInt(r.literal)
    };
  }, Ch = function(r) {
    return r ? r[1] : null;
  }, _h = function(r, f) {
    let t = { type: "Update" };
    r && (t.prologue = r);
    let l = [];
    return f && (l = [f[1]], f[2] && (l = l.concat(f[2][3].update))), t.update = l, t;
  }, mh = function(r, f, t) {
    let l = {
      type: "load",
      silent: r,
      sourceGraph: f
    };
    return t && (l.destinyGraph = t[2]), l;
  }, Eh = function(r, f) {
    return {
      type: "clear",
      silent: r,
      destinyGraph: f
    };
  }, yh = function(r, f) {
    return {
      type: "drop",
      silent: r,
      destinyGraph: f
    };
  }, Ph = function(r, f) {
    return {
      type: "create",
      silent: r,
      destinyGraph: f
    };
  }, Th = function(r, f, t) {
    return {
      type: "add",
      silent: r,
      graphs: [f, t]
    };
  }, Lh = function(r, f, t) {
    return {
      type: "move",
      silent: r,
      graphs: [f, t]
    };
  }, Rh = function(r, f, t) {
    return {
      type: "copy",
      silent: r,
      graphs: [f, t]
    };
  }, Ih = function(r) {
    return {
      type: "insertdata",
      insert: r
    };
  }, Sh = function(r) {
    return {
      type: "deletedata",
      delete: r
    };
  }, Oh = function(r) {
    return {
      type: "deletewhere",
      delete: r
    };
  }, Nh = function(r, f, t, l) {
    let o = {
      type: "modify"
    };
    return r && (o.with = r[2]), f.length === 3 ? (o.delete = f[0], f[2] && (o.insert = f[2])) : o.insert = f, t.length && (o.using = t), o.where = l.graphPattern, o;
  }, xh = function(r) {
    return r;
  }, Fh = function(r) {
    return r;
  }, Dh = function(r) {
    return r.length === 3 ? {
      named: !0,
      iri: r[2]
    } : {
      iri: r
    };
  }, Gh = function() {
    return "default";
  }, Uh = function(r) {
    return r;
  }, Bh = function(r) {
    return r;
  }, Hh = function(r) {
    return r;
  }, Mh = function() {
    return "default";
  }, jh = function() {
    return "named";
  }, kh = function() {
    return "all";
  }, Xh = function(r) {
    return r;
  }, Vh = function(r) {
    return r;
  }, Wh = function(r, f) {
    let t = [];
    return r && (t = t.concat(r)), f.forEach((l) => {
      t = t.concat(l[0]), l[2] && (t = t.concat(l[2]));
    }), t;
  }, Qh = function(r, f) {
    return {
      graph: r,
      ...f
    };
  }, Yh = function(r, f) {
    let t = [r];
    return f && f[3] && (t = t.concat(f[3].triplePattern)), {
      triplePattern: t,
      location: I()
    };
  }, zh = function(r) {
    return r;
  }, Zh = function(r, f) {
    let t = [];
    return r && t.push(r), f.forEach((l) => {
      t.push(l[0]), l[4] && t.push(l[4]);
    }), {
      graphPattern: t,
      location: I()
    };
  }, Kh = function(r, f) {
    let t = [];
    if (f && f[3])
      if (i(r.subject, f[3].triplePattern[0].subject)) {
        t = JSON.parse(JSON.stringify(f[3].triplePattern));
        const l = r.properties.length - 1;
        if (i(r.properties[l].predicate, f[3].triplePattern[0].properties[0].predicate)) {
          t[0].properties = r.properties;
          const o = t[0].properties[l].objects.length - 1;
          f[3].triplePattern[0].properties[0].objects.forEach((c) => {
            i(r.properties[l].objects[o], c) || t[0].properties[l].objects.push(c);
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
  }, Jh = function(r) {
    return {
      type: "OptionalGraphPattern",
      optional: r.graphPattern || r,
      location: I()
    };
  }, qh = function(r, f) {
    return {
      type: "GraphGraphPattern",
      graph: r,
      ...f
    };
  }, ec = function(r, f, t) {
    let l = {
      type: "ServiceGraphPattern",
      service: f,
      pattern: t.graphPattern || t
    };
    return r && (l.silent = !0), l.location = I(), l;
  }, sc = function(r, f) {
    return {
      type: "Bind",
      bind: r,
      as: f,
      location: I()
    };
  }, rc = function(r) {
    return r;
  }, ic = function(r, f) {
    return {
      oneVar: r,
      data: f,
      location: I()
    };
  }, tc = function(r, f) {
    return {
      variables: r,
      data: f,
      location: I()
    };
  }, lc = function(r) {
    return r;
  }, ac = function(r) {
    return r;
  }, fc = function(r) {
    return {
      type: "MinusGraphPattern",
      minus: r.graphPattern || r,
      location: I()
    };
  }, oc = function(r, f) {
    return f.length ? {
      union: [r, ...f],
      location: I()
    } : r;
  }, hc = function(r) {
    return {
      type: "Filter",
      filter: r,
      location: I()
    };
  }, cc = function(r, f) {
    return {
      functionRef: r,
      args: f.list,
      location: I()
    };
  }, nc = function() {
    return {
      list: []
    };
  }, uc = function(r, f, t) {
    return {
      distinct: !!r,
      list: [f, ...t]
    };
  }, pc = function() {
    return [];
  }, gc = function(r, f) {
    return [r, ...f];
  }, wc = function(r) {
    return r;
  }, dc = function(r, f) {
    let t = [r];
    return f && f[3] && (t = t.concat(f[3].triplePattern)), {
      triplePattern: t,
      location: I()
    };
  }, $c = function(r, f) {
    return {
      subject: r,
      properties: f
    };
  }, vc = function(r, f) {
    return {
      subject: r,
      properties: f
    };
  }, bc = function(r, f, t) {
    let l = [];
    return l.push({ predicate: r, objects: f }), t.forEach((o) => {
      o[3] && l.push({ predicate: o[3][0], objects: o[3][2] });
    }), l;
  }, Ac = function() {
    return {
      a: !0,
      location: I()
    };
  }, Cc = function(r, f) {
    return [r, ...f];
  }, _c = function(r, f) {
    return {
      subject: r,
      properties: f
    };
  }, mc = function(r, f) {
    return {
      subject: r,
      properties: f
    };
  }, Ec = function(r, f, t) {
    let l = [];
    return l.push({ predicate: r, objects: f }), t.forEach((o) => {
      if (o[3]) {
        const c = l.length - 1, n = l[c].objects.length - 1;
        i(l[c].predicate, o[3][0]) ? o[3][2].forEach((u) => {
          i(l[c].objects[n], u) || l[c].objects.push(u);
        }) : l.push({ predicate: o[3][0], objects: o[3][2] });
      }
    }), l;
  }, yc = function(r, f) {
    return [r, ...f];
  }, Pc = function(r, f) {
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
  }, Tc = function(r, f) {
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
  }, Lc = function(r, f) {
    return f && (r.modifier = f), r;
  }, Rc = function(r) {
    return r.inverse = !0, r;
  }, Ic = function() {
    return {
      a: !0,
      location: I()
    };
  }, Sc = function(r) {
    return {
      bracketted: !0,
      ...r
    };
  }, Oc = function(r) {
    return {
      collection: r,
      location: I()
    };
  }, Nc = function(r) {
    return {
      blankNodeProperties: r,
      location: I()
    };
  }, xc = function(r) {
    return {
      collection: r,
      location: I()
    };
  }, Fc = function(r) {
    return {
      blankNodeProperties: r,
      location: I()
    };
  }, Dc = function(r) {
    return r;
  }, Gc = function(r) {
    return r;
  }, Uc = function(r) {
    return r;
  }, Bc = function(r) {
    return r;
  }, Hc = function(r) {
    return {
      ...r,
      location: I()
    };
  }, Mc = function(r, f) {
    return f.length ? {
      expressionType: "conditionalor",
      operands: [r, ...f]
    } : r;
  }, jc = function(r, f) {
    return f.length ? {
      expressionType: "conditionaland",
      operands: [r, ...f]
    } : r;
  }, kc = function(r, f) {
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
  }, Xc = function(r, f) {
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
  }, Vc = function(r, f) {
    return f.length ? {
      expressionType: "multiplicativeexpression",
      first: r,
      rest: f.map((t) => ({ operator: t[1], expression: t[3] }))
    } : r;
  }, Wc = function(r) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "!",
      expression: r
    };
  }, Qc = function(r) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "+",
      expression: r
    };
  }, Yc = function(r) {
    return {
      expressionType: "unaryexpression",
      unaryexpression: "-",
      expression: r
    };
  }, zc = function(r) {
    return {
      expressionType: "atomic",
      value: r
    };
  }, Zc = function(r) {
    return {
      expressionType: "atomic",
      value: r
    };
  }, Kc = function(r) {
    return {
      expressionType: "atomic",
      value: r
    };
  }, Jc = function(r) {
    return {
      expressionType: "atomic",
      value: r
    };
  }, qc = function(r) {
    return {
      bracketted: !0,
      ...r
    };
  }, en = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "str",
      args: [r]
    };
  }, sn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "lang",
      args: [r]
    };
  }, rn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "langMatches",
      args: [r, f]
    };
  }, tn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "datatype",
      args: [r]
    };
  }, ln = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "bound",
      args: [r]
    };
  }, an = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "IRI",
      args: [r]
    };
  }, fn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "URI",
      args: [r]
    };
  }, on = function(r) {
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
  }, cn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "abs",
      args: [r]
    };
  }, nn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "ceil",
      args: [r]
    };
  }, un = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "floor",
      args: [r]
    };
  }, pn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "round",
      args: [r]
    };
  }, gn = function(r) {
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
  }, dn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "UCASE",
      args: [r]
    };
  }, $n = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "LCASE",
      args: [r]
    };
  }, vn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "ENCODE_FOR_URI",
      args: [r]
    };
  }, bn = function(r, f) {
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
  }, _n = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRENDS",
      args: [r, f]
    };
  }, mn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRAFTER",
      args: [r, f]
    };
  }, En = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "year",
      args: [r]
    };
  }, yn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "month",
      args: [r]
    };
  }, Pn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "day",
      args: [r]
    };
  }, Tn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "hours",
      args: [r]
    };
  }, Ln = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "minutes",
      args: [r]
    };
  }, Rn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "seconds",
      args: [r]
    };
  }, In = function(r) {
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
  }, On = function() {
    return {
      expressionType: "builtincall",
      builtincall: "now"
    };
  }, Nn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "UUID"
    };
  }, xn = function() {
    return {
      expressionType: "builtincall",
      builtincall: "STRUUID"
    };
  }, Fn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "MD5",
      args: [r]
    };
  }, Dn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA1",
      args: [r]
    };
  }, Gn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA256",
      args: [r]
    };
  }, Un = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA384",
      args: [r]
    };
  }, Bn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "SHA512",
      args: [r]
    };
  }, Hn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "COALESCE",
      args: r
    };
  }, Mn = function(r, f, t) {
    return {
      expressionType: "builtincall",
      builtincall: "IF",
      args: [r, f, t]
    };
  }, jn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRLANG",
      args: [r, f]
    };
  }, kn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "STRDT",
      args: [r, f]
    };
  }, Xn = function(r, f) {
    return {
      expressionType: "builtincall",
      builtincall: "sameTerm",
      args: [r, f]
    };
  }, Vn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "isURI",
      args: [r]
    };
  }, Wn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "isBlank",
      args: [r]
    };
  }, Qn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "isLiteral",
      args: [r]
    };
  }, Yn = function(r) {
    return {
      expressionType: "builtincall",
      builtincall: "isNumeric",
      args: [r]
    };
  }, zn = function(r, f, t) {
    let l = {
      expressionType: "regex",
      text: r,
      pattern: f
    };
    return t && (l.flags = t[2]), l;
  }, Zn = function(r, f, t) {
    let l = [r, f];
    return t && l.push(t[2]), {
      expressionType: "builtincall",
      builtincall: "substr",
      args: l
    };
  }, Kn = function(r, f, t, l) {
    let o = [r, f, t];
    return l && o.push(l[2]), {
      expressionType: "builtincall",
      builtincall: "replace",
      args: o
    };
  }, Jn = function(r) {
    return {
      exists: r.graphPattern || r
    };
  }, qn = function(r) {
    return {
      notexists: r.graphPattern || r
    };
  }, eu = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "count",
      distinct: !!r,
      expression: f
    };
  }, su = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "sum",
      distinct: !!r,
      expression: f
    };
  }, ru = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "min",
      distinct: !!r,
      expression: f
    };
  }, iu = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "max",
      distinct: !!r,
      expression: f
    };
  }, tu = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "avg",
      distinct: !!r,
      expression: f
    };
  }, lu = function(r, f) {
    return {
      expressionType: "aggregate",
      aggregateType: "sample",
      distinct: !!r,
      expression: f
    };
  }, au = function(r, f, t) {
    let l = null;
    return t?.length && (l = t[7]), {
      expressionType: "aggregate",
      aggregateType: "group_concat",
      expression: f,
      separator: l,
      distinct: !!r
    };
  }, fu = function(r, f) {
    let t = {
      expressionType: "irireforfunction",
      iriref: r
    };
    return f && (t.args = f.list), t;
  }, ou = function(r, f) {
    return typeof f == "string" ? r.lang = f : f && (r.dataType = f[1]), r.location = I(), r;
  }, hu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !0
    };
  }, cu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#boolean",
      literal: !1
    };
  }, nu = function(r) {
    return {
      type: "IRIref",
      iriref: r,
      location: I()
    };
  }, uu = function(r) {
    return r;
  }, pu = function(r) {
    return {
      type: "PrefixedName",
      pn_prefix: r.pn_prefix,
      pn_local: r.pn_local,
      location: I()
    };
  }, gu = function(r) {
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
  }, du = function() {
    return {
      blankNode: "[]",
      location: I()
    };
  }, $u = function(r) {
    return r.join("");
  }, vu = function(r) {
    return r || "";
  }, bu = function(r, f) {
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
  }, _u = function(r) {
    return {
      type: "Var",
      varType: "VAR2",
      varname: r
    };
  }, mu = function(r, f) {
    let t = r.join("");
    return f.length && (t += "-" + f[0][1].join("")), t.toLowerCase();
  }, Eu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#integer",
      literal: J()
    };
  }, yu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#decimal",
      literal: J()
    };
  }, Pu = function() {
    return {
      dataType: "http://www.w3.org/2001/XMLSchema#double",
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
  }, Ru = function(r) {
    return r.literal = "+" + r.literal, r;
  }, Iu = function(r) {
    return r.literal = "+" + r.literal, r;
  }, Su = function(r) {
    return r.literal = "+" + r.literal, r;
  }, Ou = function(r) {
    return r.literal = "-" + r.literal, r;
  }, Nu = function(r) {
    return r.literal = "-" + r.literal, r;
  }, xu = function(r) {
    return r.literal = "-" + r.literal, r;
  }, Fu = function(r) {
    return {
      quote: "'",
      literal: r.join("")
      // except ' \ LF CR
    };
  }, Du = function(r) {
    return {
      quote: '"',
      literal: r.join("")
      // except " \ LF CR
    };
  }, Gu = function(r) {
    return {
      quote: "'''",
      literal: r.map((f) => f[0] ? f[0] + f[1] : f[1]).join("")
    };
  }, Uu = function(r) {
    return {
      quote: '"""',
      literal: r.map((f) => f[0] ? f[0] + f[1] : f[1]).join("")
    };
  }, Bu = function() {
    return J();
  }, Hu = function() {
    return J();
  }, Mu = function() {
    return _t[I().start.offset] = J(), "";
  }, ju = function() {
    return J();
  }, ku = function() {
    return J();
  }, Xu = function() {
    return J();
  }, s = 0, d = 0, Es = [{ line: 1, column: 1 }], le = 0, nr = [], ys;
  if ("startRule" in b) {
    if (!(b.startRule in x))
      throw new Error(`Can't start parsing from rule "` + b.startRule + '".');
    K = x[b.startRule];
  }
  function J() {
    return h.substring(d, s);
  }
  function I() {
    return ur(d, s);
  }
  function v(r, f) {
    return { type: "literal", text: r, ignoreCase: f };
  }
  function N(r, f, t) {
    return { type: "class", parts: r, inverted: f, ignoreCase: t };
  }
  function Vu() {
    return { type: "end" };
  }
  function ji(r) {
    var f = Es[r], t;
    if (f)
      return f;
    for (t = r - 1; !Es[t]; )
      t--;
    for (f = Es[t], f = {
      line: f.line,
      column: f.column
    }; t < r; )
      h.charCodeAt(t) === 10 ? (f.line++, f.column = 1) : f.column++, t++;
    return Es[r] = f, f;
  }
  function ur(r, f, t) {
    var l = ji(r), o = ji(f), c = {
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
    return c;
  }
  function p(r) {
    s < le || (s > le && (le = s, nr = []), nr.push(r));
  }
  function Wu(r, f, t) {
    return new kr(
      kr.buildMessage(r, f),
      r,
      f,
      t
    );
  }
  function ki() {
    var r, f, t, l, o, c;
    for (r = s, f = [], t = vt(); t !== e; )
      f.push(t), t = vt();
    for (t = [], l = a(); l !== e; )
      t.push(l), l = a();
    if (l = Qu(), l !== e) {
      for (o = [], c = a(); c !== e; )
        o.push(c), c = a();
      d = r, r = Vo(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function Qu() {
    var r;
    return r = Yu(), r === e && (r = et()), r;
  }
  function Yu() {
    var r, f, t, l, o;
    for (r = s, f = Xi(), t = [], l = a(); l !== e; )
      t.push(l), l = a();
    return l = zu(), l === e && (l = Ku(), l === e && (l = Ju(), l === e && (l = qu()))), l !== e ? (o = qi(), d = r, r = Wo(f, l, o)) : (s = r, r = e), r;
  }
  function Xi() {
    var r, f, t;
    for (r = s, f = [], t = Vi(), t === e && (t = Wi()); t !== e; )
      f.push(t), t = Vi(), t === e && (t = Wi());
    return d = r, f = Qo(f), r = f, r;
  }
  function Vi() {
    var r, f, t, l, o;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.substr(s, 4).toLowerCase() === ue ? (t = h.substr(s, 4), s += 4) : (t = e, p(Na)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = Or(), o !== e ? (d = r, r = Yo(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Wi() {
    var r, f, t, l, o, c, n;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.substr(s, 6).toLowerCase() === Ee ? (t = h.substr(s, 6), s += 6) : (t = e, p(xa)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = Nr(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Or(), n !== e ? (d = r, r = zo(o, n)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function zu() {
    var r, f, t, l, o, c, n, u;
    if (r = s, f = Qi(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = [], o = ae(); o !== e; )
        l.push(o), o = ae();
      for (o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (c = je(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Se(), d = r, r = Zo(f, l, c, u);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Zu() {
    var r, f, t, l, o, c, n;
    if (r = s, f = Qi(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = je(), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = Se(), n = qi(), d = r, r = Ko(f, l, c, n);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Qi() {
    var r, f, t, l, o, c, n, u, g, w, $, A, m, L, R, O, M;
    if (r = s, h.substr(s, 6).toLowerCase() === pe ? (f = h.substr(s, 6), s += 6) : (f = e, p(Fa)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (h.substr(s, 8).toLowerCase() === S ? (l = h.substr(s, 8), s += 8) : (l = e, p(he)), l === e && (h.substr(s, 7).toLowerCase() === F ? (l = h.substr(s, 7), s += 7) : (l = e, p(Da))), l === e && (l = null), o = [], c = a(); c !== e; )
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
            for (A = [], m = a(); m !== e; )
              A.push(m), m = a();
            if (h.substr(s, 2).toLowerCase() === fe ? (m = h.substr(s, 2), s += 2) : (m = e, p(ws)), m !== e) {
              for (L = [], R = a(); R !== e; )
                L.push(R), R = a();
              if (R = k(), R !== e) {
                for (O = [], M = a(); M !== e; )
                  O.push(M), M = a();
                h.charCodeAt(s) === 41 ? (M = E, s++) : (M = e, p(P)), M !== e ? (u = [u, g, w, $, A, m, L, R, O, M], n = u) : (s = n, n = e);
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
                for (A = [], m = a(); m !== e; )
                  A.push(m), m = a();
                if (h.substr(s, 2).toLowerCase() === fe ? (m = h.substr(s, 2), s += 2) : (m = e, p(ws)), m !== e) {
                  for (L = [], R = a(); R !== e; )
                    L.push(R), R = a();
                  if (R = k(), R !== e) {
                    for (O = [], M = a(); M !== e; )
                      O.push(M), M = a();
                    h.charCodeAt(s) === 41 ? (M = E, s++) : (M = e, p(P)), M !== e ? (u = [u, g, w, $, A, m, L, R, O, M], n = u) : (s = n, n = e);
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
      c === e && (h.charCodeAt(s) === 42 ? (c = ee, s++) : (c = e, p(se))), c !== e ? (d = r, r = Jo(l, c)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Ku() {
    var r, f, t, l, o, c, n, u, g, w, $, A, m, L;
    if (r = s, h.substr(s, 9).toLowerCase() === Xr ? (f = h.substr(s, 9), s += 9) : (f = e, p(pi)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = Ip(), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        for (c = [], n = ae(); n !== e; )
          c.push(n), n = ae();
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (u = je(), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          w = Se(), d = r, r = qo(l, c, u, w);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    if (r === e)
      if (r = s, h.substr(s, 9).toLowerCase() === Xr ? (f = h.substr(s, 9), s += 9) : (f = e, p(pi)), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        for (l = [], o = ae(); o !== e; )
          l.push(o), o = ae();
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.substr(s, 5).toLowerCase() === Je ? (c = h.substr(s, 5), s += 5) : (c = e, p(ds)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (h.charCodeAt(s) === 123 ? (u = ge, s++) : (u = e, p(ve)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            for (w = Ne(), w === e && (w = null), $ = [], A = a(); A !== e; )
              $.push(A), A = a();
            if (h.charCodeAt(s) === 125 ? (A = we, s++) : (A = e, p(be)), A !== e) {
              for (m = [], L = a(); L !== e; )
                m.push(L), L = a();
              L = Se(), d = r, r = eh(l, w, L);
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
  function Ju() {
    var r, f, t, l, o, c, n, u, g, w;
    if (r = s, h.substr(s, 8).toLowerCase() === It ? (f = h.substr(s, 8), s += 8) : (f = e, p(Ga)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = [], o = Fe(), o !== e)
        for (; o !== e; )
          l.push(o), o = Fe();
      else
        l = e;
      if (l === e && (h.charCodeAt(s) === 42 ? (l = ee, s++) : (l = e, p(se))), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        for (c = [], n = ae(); n !== e; )
          c.push(n), n = ae();
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        for (u = je(), u === e && (u = null), g = [], w = a(); w !== e; )
          g.push(w), w = a();
        w = Se(), d = r, r = sh(l, c, u, w);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function qu() {
    var r, f, t, l, o, c, n, u, g;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.substr(s, 3).toLowerCase() === St ? (t = h.substr(s, 3), s += 3) : (t = e, p(Ua)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      for (o = [], c = ae(); c !== e; )
        o.push(c), c = ae();
      for (c = [], n = a(); n !== e; )
        c.push(n), n = a();
      if (n = je(), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        g = Se(), d = r, r = rh(o, n, g);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function ae() {
    var r, f, t, l, o, c;
    if (r = s, h.substr(s, 4).toLowerCase() === Ot ? (f = h.substr(s, 4), s += 4) : (f = e, p(Ba)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = ep(), l === e && (l = sp()), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        d = r, r = ih(l);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function ep() {
    var r, f, t;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    return t = W(), t !== e ? (d = r, r = th(t)) : (s = r, r = e), r;
  }
  function sp() {
    var r, f, t, l;
    if (r = s, h.substr(s, 5).toLowerCase() === Gs ? (f = h.substr(s, 5), s += 5) : (f = e, p(Ks)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = W(), l !== e ? (d = r, r = lh(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function je() {
    var r, f, t;
    for (r = s, h.substr(s, 5).toLowerCase() === Je ? (h.substr(s, 5), s += 5) : p(ds), f = [], t = a(); t !== e; )
      f.push(t), t = a();
    return t = re(), t !== e ? (d = r, r = ah(t)) : (s = r, r = e), r;
  }
  function Se() {
    var r, f, t, l, o;
    return r = s, f = rp(), f === e && (f = null), t = ip(), t === e && (t = null), l = tp(), l === e && (l = null), o = lp(), o === e && (o = null), d = r, r = fh(f, t, l, o), r;
  }
  function rp() {
    var r, f, t, l, o, c, n;
    if (r = s, h.substr(s, 5).toLowerCase() === Nt ? (f = h.substr(s, 5), s += 5) : (f = e, p(Ha)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (h.substr(s, 2).toLowerCase() === Vr ? (l = h.substr(s, 2), s += 2) : (l = e, p(gi)), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (c = [], n = Yi(), n !== e)
          for (; n !== e; )
            c.push(n), n = Yi();
        else
          c = e;
        c !== e ? (d = r, r = oh(c)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Yi() {
    var r, f, t, l, o, c, n, u, g, w, $;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (t = Pr(), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      d = r, r = hh(t);
    } else
      s = r, r = e;
    if (r === e) {
      for (r = s, f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = ct(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        d = r, r = ch(t);
      } else
        s = r, r = e;
      if (r === e) {
        for (r = s, f = [], t = a(); t !== e; )
          f.push(t), t = a();
        if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
          for (l = [], o = a(); o !== e; )
            l.push(o), o = a();
          if (o = _(), o !== e) {
            for (c = [], n = a(); n !== e; )
              c.push(n), n = a();
            if (n = s, h.substr(s, 2).toLowerCase() === fe ? (u = h.substr(s, 2), s += 2) : (u = e, p(ws)), u !== e) {
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
              d = r, r = nh(o, n);
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
        if (r === e) {
          for (r = s, f = [], t = a(); t !== e; )
            f.push(t), t = a();
          if (t = k(), t !== e) {
            for (l = [], o = a(); o !== e; )
              l.push(o), o = a();
            d = r, r = uh(t);
          } else
            s = r, r = e;
        }
      }
    }
    return r;
  }
  function ip() {
    var r, f, t, l, o;
    if (r = s, h.substr(s, 6).toLowerCase() === xt ? (f = h.substr(s, 6), s += 6) : (f = e, p(Ma)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = [], o = zi(), o !== e)
        for (; o !== e; )
          l.push(o), o = zi();
      else
        l = e;
      l !== e ? (d = r, r = ph(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function zi() {
    var r, f, t, l;
    if (r = s, f = wr(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      d = r, r = gh(f);
    } else
      s = r, r = e;
    return r;
  }
  function tp() {
    var r, f, t, l, o, c, n, u;
    if (r = s, h.substr(s, 5).toLowerCase() === Ft ? (f = h.substr(s, 5), s += 5) : (f = e, p(ja)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (h.substr(s, 2).toLowerCase() === Vr ? (l = h.substr(s, 2), s += 2) : (l = e, p(gi)), l !== e) {
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
          d = r, r = wh(c);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Zi() {
    var r, f, t, l, o, c;
    if (r = s, h.substr(s, 3).toLowerCase() === Dt ? (f = h.substr(s, 3), s += 3) : (f = e, p(ka)), f === e && (h.substr(s, 4).toLowerCase() === Gt ? (f = h.substr(s, 4), s += 4) : (f = e, p(Xa))), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = yr(), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        d = r, r = dh(f, l);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    if (r === e)
      if (r = s, f = wr(), f === e && (f = k()), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        d = r, r = $h(f);
      } else
        s = r, r = e;
    return r;
  }
  function lp() {
    var r, f, t, l;
    return r = s, f = s, t = Ki(), t !== e ? (l = Ji(), l === e && (l = null), t = [t, l], f = t) : (s = f, f = e), f === e && (f = s, t = Ji(), t !== e ? (l = Ki(), l === e && (l = null), t = [t, l], f = t) : (s = f, f = e)), f !== e && (d = r, f = vh(f)), r = f, r;
  }
  function Ki() {
    var r, f, t, l, o, c;
    if (r = s, h.substr(s, 5).toLowerCase() === Ut ? (f = h.substr(s, 5), s += 5) : (f = e, p(Va)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = We(), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        d = r, r = bh(l);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Ji() {
    var r, f, t, l, o, c;
    if (r = s, h.substr(s, 6).toLowerCase() === Bt ? (f = h.substr(s, 6), s += 6) : (f = e, p(Wa)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = We(), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        d = r, r = Ah(l);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function qi() {
    var r, f, t, l;
    return r = s, f = s, h.substr(s, 6).toLowerCase() === Wr ? (t = h.substr(s, 6), s += 6) : (t = e, p(wi)), t !== e ? (l = ot(), l !== e ? (t = [t, l], f = t) : (s = f, f = e)) : (s = f, f = e), f === e && (f = null), d = r, f = Ch(f), r = f, r;
  }
  function et() {
    var r, f, t, l, o, c, n, u, g, w;
    for (r = s, f = Xi(), t = s, l = [], o = a(); o !== e; )
      l.push(o), o = a();
    if (o = ap(), o !== e) {
      for (c = s, n = [], u = a(); u !== e; )
        n.push(u), u = a();
      if (h.charCodeAt(s) === 59 ? (u = Pe, s++) : (u = e, p(Le)), u !== e) {
        for (g = [], w = a(); w !== e; )
          g.push(w), w = a();
        w = et(), n = [n, u, g, w], c = n;
      } else
        s = c, c = e;
      c === e && (c = null), l = [l, o, c], t = l;
    } else
      s = t, t = e;
    for (t === e && (t = null), l = [], o = a(); o !== e; )
      l.push(o), o = a();
    return d = r, r = _h(f, t), r;
  }
  function ap() {
    var r;
    return r = fp(), r === e && (r = op(), r === e && (r = hp(), r === e && (r = np(), r === e && (r = up(), r === e && (r = pp(), r === e && (r = cp(), r === e && (r = gp(), r === e && (r = wp(), r === e && (r = dp(), r === e && (r = $p())))))))))), r;
  }
  function fp() {
    var r, f, t, l, o, c, n, u, g, w, $;
    if (r = s, h.substr(s, 4).toLowerCase() === Ht ? (f = h.substr(s, 4), s += 4) : (f = e, p(Qa)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === de ? (l = h.substr(s, 6), s += 6) : (l = e, p(Ae)), l === e && (l = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (c = W(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (u = s, h.substr(s, 4).toLowerCase() === Mt ? (g = h.substr(s, 4), s += 4) : (g = e, p(Ya)), g !== e) {
          for (w = [], $ = a(); $ !== e; )
            w.push($), $ = a();
          $ = pr(), $ !== e ? (g = [g, w, $], u = g) : (s = u, u = e);
        } else
          s = u, u = e;
        u === e && (u = null), d = r, r = mh(l, c, u);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function op() {
    var r, f, t, l, o, c;
    if (r = s, h.substr(s, 5).toLowerCase() === jt ? (f = h.substr(s, 5), s += 5) : (f = e, p(za)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === de ? (l = h.substr(s, 6), s += 6) : (l = e, p(Ae)), l === e && (l = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      c = it(), c !== e ? (d = r, r = Eh(l, c)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function hp() {
    var r, f, t, l, o, c;
    if (r = s, h.substr(s, 4).toLowerCase() === kt ? (f = h.substr(s, 4), s += 4) : (f = e, p(Za)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === de ? (l = h.substr(s, 6), s += 6) : (l = e, p(Ae)), l === e && (l = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      c = it(), c !== e ? (d = r, r = yh(l, c)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function cp() {
    var r, f, t, l, o, c;
    if (r = s, h.substr(s, 6).toLowerCase() === Xt ? (f = h.substr(s, 6), s += 6) : (f = e, p(Ka)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === de ? (l = h.substr(s, 6), s += 6) : (l = e, p(Ae)), l === e && (l = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      c = pr(), c !== e ? (d = r, r = Ph(l, c)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function np() {
    var r, f, t, l, o, c, n, u, g, w;
    if (r = s, h.substr(s, 3).toLowerCase() === Vt ? (f = h.substr(s, 3), s += 3) : (f = e, p(Ja)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === de ? (l = h.substr(s, 6), s += 6) : (l = e, p(Ae)), l === e && (l = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (c = Oe(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.substr(s, 2).toLowerCase() === Us ? (u = h.substr(s, 2), s += 2) : (u = e, p(Js)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          w = Oe(), w !== e ? (d = r, r = Th(l, c, w)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function up() {
    var r, f, t, l, o, c, n, u, g, w;
    if (r = s, h.substr(s, 4).toLowerCase() === Wt ? (f = h.substr(s, 4), s += 4) : (f = e, p(qa)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === de ? (l = h.substr(s, 6), s += 6) : (l = e, p(Ae)), l === e && (l = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (c = Oe(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.substr(s, 2).toLowerCase() === Us ? (u = h.substr(s, 2), s += 2) : (u = e, p(Js)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          w = Oe(), w !== e ? (d = r, r = Lh(l, c, w)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function pp() {
    var r, f, t, l, o, c, n, u, g, w;
    if (r = s, h.substr(s, 4).toLowerCase() === Qt ? (f = h.substr(s, 4), s += 4) : (f = e, p(ef)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === de ? (l = h.substr(s, 6), s += 6) : (l = e, p(Ae)), l === e && (l = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (c = Oe(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.substr(s, 2).toLowerCase() === Us ? (u = h.substr(s, 2), s += 2) : (u = e, p(Js)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          w = Oe(), w !== e ? (d = r, r = Rh(l, c, w)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function gp() {
    var r, f, t, l, o, c;
    if (r = s, h.substr(s, 6).toLowerCase() === Qr ? (f = h.substr(s, 6), s += 6) : (f = e, p(di)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (h.substr(s, 4).toLowerCase() === Yr ? (l = h.substr(s, 4), s += 4) : (l = e, p($i)), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = tt(), c !== e ? (d = r, r = Ih(c)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function wp() {
    var r, f, t, l, o;
    if (r = s, h.substr(s, 6).toLowerCase() === Bs ? (f = h.substr(s, 6), s += 6) : (f = e, p(qs)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      h.substr(s, 4).toLowerCase() === Yr ? (l = h.substr(s, 4), s += 4) : (l = e, p($i)), l !== e ? (o = tt(), o !== e ? (d = r, r = Sh(o)) : (s = r, r = e)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function dp() {
    var r, f, t, l, o, c;
    if (r = s, h.substr(s, 6).toLowerCase() === Bs ? (f = h.substr(s, 6), s += 6) : (f = e, p(qs)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (h.substr(s, 5).toLowerCase() === Je ? (l = h.substr(s, 5), s += 5) : (l = e, p(ds)), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = gr(), c !== e ? (d = r, r = Oh(c)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function $p() {
    var r, f, t, l, o, c, n, u, g, w, $;
    if (r = s, f = s, h.substr(s, 4).toLowerCase() === Yt ? (t = h.substr(s, 4), s += 4) : (t = e, p(sf)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = W(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        t = [t, l, o, c], f = t;
      } else
        s = f, f = e;
    } else
      s = f, f = e;
    if (f === e && (f = null), t = s, l = vp(), l !== e) {
      for (o = [], c = a(); c !== e; )
        o.push(c), c = a();
      c = st(), c === e && (c = null), l = [l, o, c], t = l;
    } else
      s = t, t = e;
    if (t === e && (t = st()), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      for (o = [], c = rt(); c !== e; )
        o.push(c), c = rt();
      for (c = [], n = a(); n !== e; )
        c.push(n), n = a();
      if (h.substr(s, 5).toLowerCase() === Je ? (n = h.substr(s, 5), s += 5) : (n = e, p(ds)), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        if (g = re(), g !== e) {
          for (w = [], $ = a(); $ !== e; )
            w.push($), $ = a();
          d = r, r = Nh(f, t, o, g);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function vp() {
    var r, f, t;
    return r = s, h.substr(s, 6).toLowerCase() === Bs ? (f = h.substr(s, 6), s += 6) : (f = e, p(qs)), f !== e ? (t = gr(), t !== e ? (d = r, r = xh(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function st() {
    var r, f, t;
    return r = s, h.substr(s, 6).toLowerCase() === Qr ? (f = h.substr(s, 6), s += 6) : (f = e, p(di)), f !== e ? (t = gr(), t !== e ? (d = r, r = Fh(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function rt() {
    var r, f, t, l, o, c, n, u;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.substr(s, 5).toLowerCase() === zt ? (t = h.substr(s, 5), s += 5) : (t = e, p(rf)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = W(), o === e)
        if (o = s, h.substr(s, 5).toLowerCase() === Gs ? (c = h.substr(s, 5), s += 5) : (c = e, p(Ks)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = W(), u !== e ? (c = [c, n, u], o = c) : (s = o, o = e);
        } else
          s = o, o = e;
      o !== e ? (d = r, r = Dh(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Oe() {
    var r, f, t, l;
    if (r = s, h.substr(s, 7).toLowerCase() === zr ? (f = h.substr(s, 7), s += 7) : (f = e, p(vi)), f !== e && (d = r, f = Gh()), r = f, r === e) {
      for (r = s, h.substr(s, 5).toLowerCase() === qe ? (f = h.substr(s, 5), s += 5) : (f = e, p($s)), f === e && (f = null), t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = W(), l !== e ? (d = r, r = Uh(l)) : (s = r, r = e);
    }
    return r;
  }
  function pr() {
    var r, f, t, l;
    if (r = s, h.substr(s, 5).toLowerCase() === qe ? (f = h.substr(s, 5), s += 5) : (f = e, p($s)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = W(), l !== e ? (d = r, r = Bh(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function it() {
    var r, f;
    return r = s, f = pr(), f !== e && (d = r, f = Hh(f)), r = f, r === e && (r = s, h.substr(s, 7).toLowerCase() === zr ? (f = h.substr(s, 7), s += 7) : (f = e, p(vi)), f !== e && (d = r, f = Mh()), r = f, r === e && (r = s, h.substr(s, 5).toLowerCase() === Gs ? (f = h.substr(s, 5), s += 5) : (f = e, p(Ks)), f !== e && (d = r, f = jh()), r = f, r === e && (r = s, h.substr(s, 3).toLowerCase() === Zt ? (f = h.substr(s, 3), s += 3) : (f = e, p(tf)), f !== e && (d = r, f = kh()), r = f))), r;
  }
  function gr() {
    var r, f, t, l, o, c, n, u, g;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.charCodeAt(s) === 123 ? (t = ge, s++) : (t = e, p(ve)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      for (o = lt(), c = [], n = a(); n !== e; )
        c.push(n), n = a();
      if (h.charCodeAt(s) === 125 ? (n = we, s++) : (n = e, p(be)), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        d = r, r = Xh(o);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function tt() {
    var r, f, t, l, o, c, n, u, g;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.charCodeAt(s) === 123 ? (t = ge, s++) : (t = e, p(ve)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      for (o = lt(), c = [], n = a(); n !== e; )
        c.push(n), n = a();
      if (h.charCodeAt(s) === 125 ? (n = we, s++) : (n = e, p(be)), n !== e) {
        for (u = [], g = a(); g !== e; )
          u.push(g), g = a();
        d = r, r = Vh(o);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function lt() {
    var r, f, t, l, o, c, n;
    for (r = s, f = Ne(), f === e && (f = null), t = [], l = s, o = at(), o !== e ? (h.charCodeAt(s) === 46 ? (c = X, s++) : (c = e, p(V)), c === e && (c = null), n = Ne(), n === e && (n = null), o = [o, c, n], l = o) : (s = l, l = e); l !== e; )
      t.push(l), l = s, o = at(), o !== e ? (h.charCodeAt(s) === 46 ? (c = X, s++) : (c = e, p(V)), c === e && (c = null), n = Ne(), n === e && (n = null), o = [o, c, n], l = o) : (s = l, l = e);
    return d = r, r = Wh(f, t), r;
  }
  function at() {
    var r, f, t, l, o, c, n, u, g, w, $, A, m;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.substr(s, 5).toLowerCase() === qe ? (t = h.substr(s, 5), s += 5) : (t = e, p($s)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = Fe(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 123 ? (n = ge, s++) : (n = e, p(ve)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          for (g = Ne(), g === e && (g = null), w = [], $ = a(); $ !== e; )
            w.push($), $ = a();
          if (h.charCodeAt(s) === 125 ? ($ = we, s++) : ($ = e, p(be)), $ !== e) {
            for (A = [], m = a(); m !== e; )
              A.push(m), m = a();
            d = r, r = Qh(o, g);
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
    var r, f, t, l, o, c, n;
    if (r = s, f = pt(), f !== e) {
      for (t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Ne(), n === e && (n = null), l = [l, o, c, n], t = l;
      } else
        s = t, t = e;
      t === e && (t = null), d = r, r = Yh(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function re() {
    var r, f, t, l, o, c;
    if (r = s, h.charCodeAt(s) === 123 ? (f = ge, s++) : (f = e, p(ve)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = Zu(), l === e && (l = bp()), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        h.charCodeAt(s) === 125 ? (c = we, s++) : (c = e, p(be)), c !== e ? (d = r, r = zh(l)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function bp() {
    var r, f, t, l, o, c, n, u, g, w;
    for (r = s, f = Ps(), f === e && (f = null), t = [], l = a(); l !== e; )
      t.push(l), l = a();
    if (l = [], o = s, c = ft(), c !== e) {
      for (n = [], u = a(); u !== e; )
        n.push(u), u = a();
      for (h.charCodeAt(s) === 46 ? (u = X, s++) : (u = e, p(V)), u === e && (u = null), g = [], w = a(); w !== e; )
        g.push(w), w = a();
      w = Ps(), w === e && (w = null), c = [c, n, u, g, w], o = c;
    } else
      s = o, o = e;
    for (; o !== e; )
      if (l.push(o), o = s, c = ft(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        for (h.charCodeAt(s) === 46 ? (u = X, s++) : (u = e, p(V)), u === e && (u = null), g = [], w = a(); w !== e; )
          g.push(w), w = a();
        w = Ps(), w === e && (w = null), c = [c, n, u, g, w], o = c;
      } else
        s = o, o = e;
    return d = r, r = Zh(f, l), r;
  }
  function Ps() {
    var r, f, t, l, o, c, n;
    if (r = s, f = Op(), f !== e) {
      for (t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = Ps(), n === e && (n = null), l = [l, o, c, n], t = l;
      } else
        s = t, t = e;
      t === e && (t = null), d = r, r = Kh(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function ft() {
    var r;
    return r = Lp(), r === e && (r = Ap(), r === e && (r = Tp(), r === e && (r = Cp(), r === e && (r = _p(), r === e && (r = Rp(), r === e && (r = mp(), r === e && (r = Ep()))))))), r;
  }
  function Ap() {
    var r, f, t, l, o;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.substr(s, 8).toLowerCase() === Kt ? (t = h.substr(s, 8), s += 8) : (t = e, p(lf)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = re(), o !== e ? (d = r, r = Jh(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Cp() {
    var r, f, t, l, o, c, n;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.substr(s, 5).toLowerCase() === qe ? (t = h.substr(s, 5), s += 5) : (t = e, p($s)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = Fe(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = re(), n !== e ? (d = r, r = qh(o, n)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function _p() {
    var r, f, t, l, o, c, n, u;
    if (r = s, h.substr(s, 7).toLowerCase() === Jt ? (f = h.substr(s, 7), s += 7) : (f = e, p(af)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (h.substr(s, 6).toLowerCase() === de ? (l = h.substr(s, 6), s += 6) : (l = e, p(Ae)), l === e && (l = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (c = Fe(), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = re(), u !== e ? (d = r, r = ec(l, c, u)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function mp() {
    var r, f, t, l, o, c, n, u, g, w, $, A, m;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.substr(s, 4).toLowerCase() === qt ? (t = h.substr(s, 4), s += 4) : (t = e, p(ff)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.charCodeAt(s) === 40 ? (o = C, s++) : (o = e, p(y)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (n = _(), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          if (h.substr(s, 2).toLowerCase() === fe ? (g = h.substr(s, 2), s += 2) : (g = e, p(ws)), g !== e) {
            for (w = [], $ = a(); $ !== e; )
              w.push($), $ = a();
            if ($ = k(), $ !== e) {
              for (A = [], m = a(); m !== e; )
                A.push(m), m = a();
              h.charCodeAt(s) === 41 ? (m = E, s++) : (m = e, p(P)), m !== e ? (d = r, r = sc(n, $)) : (s = r, r = e);
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
  function Ep() {
    var r, f, t, l, o;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.substr(s, 6).toLowerCase() === Wr ? (t = h.substr(s, 6), s += 6) : (t = e, p(wi)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = ot(), o !== e ? (d = r, r = rc(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function ot() {
    var r;
    return r = yp(), r === e && (r = Pp()), r;
  }
  function yp() {
    var r, f, t, l, o, c, n, u;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (t = k(), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.charCodeAt(s) === 123 ? (o = ge, s++) : (o = e, p(ve)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        for (n = [], u = Ts(); u !== e; )
          n.push(u), u = Ts();
        h.charCodeAt(s) === 125 ? (u = we, s++) : (u = e, p(be)), u !== e ? (d = r, r = ic(t, n)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Pp() {
    var r, f, t, l, o, c, n, u, g, w, $;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      for (o = [], c = k(); c !== e; )
        o.push(c), c = k();
      if (h.charCodeAt(s) === 41 ? (c = E, s++) : (c = e, p(P)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.charCodeAt(s) === 123 ? (u = ge, s++) : (u = e, p(ve)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          for (w = [], $ = ht(); $ !== e; )
            w.push($), $ = ht();
          h.charCodeAt(s) === 125 ? ($ = we, s++) : ($ = e, p(be)), $ !== e ? (d = r, r = tc(o, w)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function ht() {
    var r, f, t, l, o, c, n;
    if (r = s, h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = [], o = Ts(); o !== e; )
        l.push(o), o = Ts();
      if (h.charCodeAt(s) === 41 ? (o = E, s++) : (o = e, p(P)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        d = r, r = lc(l);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Ts() {
    var r, f, t, l;
    if (r = s, f = W(), f === e && (f = Tr(), f === e && (f = Lr(), f === e && (f = Sr(), f === e && (h.substr(s, 5) === Zr ? (f = Zr, s += 5) : (f = e, p(of)))))), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      d = r, r = ac(f);
    } else
      s = r, r = e;
    return r;
  }
  function Tp() {
    var r, f, t, l;
    if (r = s, h.substr(s, 5).toLowerCase() === el ? (f = h.substr(s, 5), s += 5) : (f = e, p(hf)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = re(), l !== e ? (d = r, r = fc(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Lp() {
    var r, f, t, l, o, c, n, u;
    if (r = s, f = re(), f !== e) {
      for (t = [], l = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.substr(s, 5).toLowerCase() === Kr ? (c = h.substr(s, 5), s += 5) : (c = e, p(bi)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = re(), u !== e ? l = u : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.substr(s, 5).toLowerCase() === Kr ? (c = h.substr(s, 5), s += 5) : (c = e, p(bi)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = re(), u !== e ? l = u : (s = l, l = e);
        } else
          s = l, l = e;
      }
      d = r, r = oc(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Rp() {
    var r, f, t, l, o;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.substr(s, 6).toLowerCase() === sl ? (t = h.substr(s, 6), s += 6) : (t = e, p(cf)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      o = wr(), o !== e ? (d = r, r = hc(o)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function wr() {
    var r;
    return r = yr(), r === e && (r = Pr(), r === e && (r = ct())), r;
  }
  function ct() {
    var r, f, t, l;
    if (r = s, f = W(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = nt(), l !== e ? (d = r, r = cc(f, l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function nt() {
    var r, f, t, l, o, c, n, u, g, w, $, A;
    if (r = s, f = me(), f !== e && (d = r, f = nc()), r = f, r === e)
      if (r = s, h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        for (h.substr(s, 8).toLowerCase() === S ? (l = h.substr(s, 8), s += 8) : (l = e, p(he)), l === e && (l = null), o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (c = _(), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (u = [], g = s, h.charCodeAt(s) === 44 ? (w = D, s++) : (w = e, p(G)), w !== e) {
            for ($ = [], A = a(); A !== e; )
              $.push(A), A = a();
            A = _(), A !== e ? g = A : (s = g, g = e);
          } else
            s = g, g = e;
          for (; g !== e; )
            if (u.push(g), g = s, h.charCodeAt(s) === 44 ? (w = D, s++) : (w = e, p(G)), w !== e) {
              for ($ = [], A = a(); A !== e; )
                $.push(A), A = a();
              A = _(), A !== e ? g = A : (s = g, g = e);
            } else
              s = g, g = e;
          h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e ? (d = r, r = uc(l, c, u)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    return r;
  }
  function xe() {
    var r, f, t, l, o, c, n, u, g, w, $, A;
    if (r = s, f = me(), f !== e && (d = r, f = pc()), r = f, r === e)
      if (r = s, h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        if (l = _(), l !== e) {
          for (o = [], c = a(); c !== e; )
            o.push(c), c = a();
          if (c = [], n = s, h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (w = _(), w !== e) {
              for ($ = [], A = a(); A !== e; )
                $.push(A), A = a();
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
                for ($ = [], A = a(); A !== e; )
                  $.push(A), A = a();
                n = w;
              } else
                s = n, n = e;
            } else
              s = n, n = e;
          h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e ? (d = r, r = gc(l, c)) : (s = r, r = e);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    return r;
  }
  function Ip() {
    var r, f, t, l, o, c;
    if (r = s, h.charCodeAt(s) === 123 ? (f = ge, s++) : (f = e, p(ve)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      for (l = ut(), l === e && (l = null), o = [], c = a(); c !== e; )
        o.push(c), c = a();
      h.charCodeAt(s) === 125 ? (c = we, s++) : (c = e, p(be)), c !== e ? (d = r, r = wc(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function ut() {
    var r, f, t, l, o, c, n;
    if (r = s, f = pt(), f !== e) {
      for (t = s, l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (h.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        n = ut(), n === e && (n = null), l = [l, o, c, n], t = l;
      } else
        s = t, t = e;
      t === e && (t = null), d = r, r = dc(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function pt() {
    var r, f, t, l, o;
    if (r = s, f = Is(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = dr(), l !== e ? (d = r, r = $c(f, l)) : (s = r, r = e);
    } else
      s = r, r = e;
    if (r === e) {
      for (r = s, f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = wt(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        o = Sp(), d = r, r = vc(t, o);
      } else
        s = r, r = e;
    }
    return r;
  }
  function Sp() {
    var r;
    return r = dr(), r === e && (r = null), r;
  }
  function dr() {
    var r, f, t, l, o, c, n, u, g, w, $, A, m;
    if (r = s, f = $r(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = vr(), l !== e) {
        for (o = [], c = s, n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.charCodeAt(s) === 59 ? (u = Pe, s++) : (u = e, p(Le)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          if (w = s, $ = $r(), $ !== e) {
            for (A = [], m = a(); m !== e; )
              A.push(m), m = a();
            m = vr(), m !== e ? ($ = [$, A, m], w = $) : (s = w, w = e);
          } else
            s = w, w = e;
          w === e && (w = null), n = [n, u, g, w], c = n;
        } else
          s = c, c = e;
        for (; c !== e; ) {
          for (o.push(c), c = s, n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (h.charCodeAt(s) === 59 ? (u = Pe, s++) : (u = e, p(Le)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (w = s, $ = $r(), $ !== e) {
              for (A = [], m = a(); m !== e; )
                A.push(m), m = a();
              m = vr(), m !== e ? ($ = [$, A, m], w = $) : (s = w, w = e);
            } else
              s = w, w = e;
            w === e && (w = null), n = [n, u, g, w], c = n;
          } else
            s = c, c = e;
        }
        d = r, r = bc(f, l, o);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function $r() {
    var r, f;
    return r = Fe(), r === e && (r = s, h.charCodeAt(s) === 97 ? (f = es, s++) : (f = e, p(vs)), f !== e && (d = r, f = Ac()), r = f), r;
  }
  function vr() {
    var r, f, t, l, o, c, n, u;
    if (r = s, f = ke(), f !== e) {
      for (t = [], l = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 44 ? (c = D, s++) : (c = e, p(G)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = ke(), u !== e ? l = u : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 44 ? (c = D, s++) : (c = e, p(G)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = ke(), u !== e ? l = u : (s = l, l = e);
        } else
          s = l, l = e;
      }
      d = r, r = Cc(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Op() {
    var r, f, t, l, o;
    if (r = s, f = Is(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = br(), l !== e ? (d = r, r = _c(f, l)) : (s = r, r = e);
    } else
      s = r, r = e;
    if (r === e) {
      for (r = s, f = [], t = a(); t !== e; )
        f.push(t), t = a();
      if (t = dt(), t !== e) {
        for (l = [], o = a(); o !== e; )
          l.push(o), o = a();
        o = Np(), d = r, r = mc(t, o);
      } else
        s = r, r = e;
    }
    return r;
  }
  function Np() {
    var r;
    return r = br(), r === e && (r = null), r;
  }
  function br() {
    var r, f, t, l, o, c, n, u, g, w, $, A, m;
    if (r = s, f = Ls(), f === e && (f = k()), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = Ar(), l !== e) {
        for (o = [], c = s, n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.charCodeAt(s) === 59 ? (u = Pe, s++) : (u = e, p(Le)), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          if (w = s, $ = Ls(), $ === e && ($ = k()), $ !== e) {
            for (A = [], m = a(); m !== e; )
              A.push(m), m = a();
            m = Ar(), m !== e ? ($ = [$, A, m], w = $) : (s = w, w = e);
          } else
            s = w, w = e;
          w === e && (w = null), n = [n, u, g, w], c = n;
        } else
          s = c, c = e;
        for (; c !== e; ) {
          for (o.push(c), c = s, n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (h.charCodeAt(s) === 59 ? (u = Pe, s++) : (u = e, p(Le)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (w = s, $ = Ls(), $ === e && ($ = k()), $ !== e) {
              for (A = [], m = a(); m !== e; )
                A.push(m), m = a();
              m = Ar(), m !== e ? ($ = [$, A, m], w = $) : (s = w, w = e);
            } else
              s = w, w = e;
            w === e && (w = null), n = [n, u, g, w], c = n;
          } else
            s = c, c = e;
        }
        d = r, r = Ec(f, l, o);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Ar() {
    var r, f, t, l, o, c, n, u;
    if (r = s, f = Xe(), f !== e) {
      for (t = [], l = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 44 ? (c = D, s++) : (c = e, p(G)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Xe(), u !== e ? l = u : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 44 ? (c = D, s++) : (c = e, p(G)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Xe(), u !== e ? l = u : (s = l, l = e);
        } else
          s = l, l = e;
      }
      d = r, r = yc(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Ls() {
    var r, f, t, l, o, c, n, u;
    if (r = s, f = Cr(), f !== e) {
      for (t = [], l = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 124 ? (c = ss, s++) : (c = e, p(bs)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Cr(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 124 ? (c = ss, s++) : (c = e, p(bs)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Cr(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
      }
      d = r, r = Pc(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Cr() {
    var r, f, t, l, o, c, n, u;
    if (r = s, f = _r(), f !== e) {
      for (t = [], l = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 47 ? (c = oe, s++) : (c = e, p(ce)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = _r(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 47 ? (c = oe, s++) : (c = e, p(ce)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = _r(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
      }
      d = r, r = Tc(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function gt() {
    var r, f, t;
    return r = s, f = Fp(), f !== e ? (t = xp(), t === e && (t = null), d = r, r = Lc(f, t)) : (s = r, r = e), r;
  }
  function _r() {
    var r, f, t;
    return r = gt(), r === e && (r = s, h.charCodeAt(s) === 94 ? (f = Jr, s++) : (f = e, p(Ai)), f !== e ? (t = gt(), t !== e ? (d = r, r = Rc(t)) : (s = r, r = e)) : (s = r, r = e)), r;
  }
  function xp() {
    var r;
    return h.charCodeAt(s) === 63 ? (r = Hs, s++) : (r = e, p(er)), r === e && (h.charCodeAt(s) === 42 ? (r = ee, s++) : (r = e, p(se)), r === e && (h.charCodeAt(s) === 43 ? (r = $e, s++) : (r = e, p(Ce)))), r;
  }
  function Fp() {
    var r, f, t, l;
    return r = W(), r === e && (r = s, h.charCodeAt(s) === 97 ? (f = es, s++) : (f = e, p(vs)), f !== e && (d = r, f = Ic()), r = f, r === e && (r = s, h.charCodeAt(s) === 33 ? (f = Ms, s++) : (f = e, p(sr)), f !== e ? (t = Dp(), t !== e ? (f = [f, t], r = f) : (s = r, r = e)) : (s = r, r = e), r === e && (r = s, h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e ? (t = Ls(), t !== e ? (h.charCodeAt(s) === 41 ? (l = E, s++) : (l = e, p(P)), l !== e ? (d = r, r = Sc(t)) : (s = r, r = e)) : (s = r, r = e)) : (s = r, r = e)))), r;
  }
  function Dp() {
    var r, f, t, l, o, c, n, u;
    if (r = Rs(), r === e)
      if (r = s, h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
        if (t = s, l = Rs(), l !== e) {
          for (o = [], c = s, h.charCodeAt(s) === 124 ? (n = ss, s++) : (n = e, p(bs)), n !== e ? (u = Rs(), u !== e ? (n = [n, u], c = n) : (s = c, c = e)) : (s = c, c = e); c !== e; )
            o.push(c), c = s, h.charCodeAt(s) === 124 ? (n = ss, s++) : (n = e, p(bs)), n !== e ? (u = Rs(), u !== e ? (n = [n, u], c = n) : (s = c, c = e)) : (s = c, c = e);
          l = [l, o], t = l;
        } else
          s = t, t = e;
        t === e && (t = null), h.charCodeAt(s) === 41 ? (l = E, s++) : (l = e, p(P)), l !== e ? (f = [f, t, l], r = f) : (s = r, r = e);
      } else
        s = r, r = e;
    return r;
  }
  function Rs() {
    var r, f, t;
    return r = W(), r === e && (h.charCodeAt(s) === 97 ? (r = es, s++) : (r = e, p(vs)), r === e && (r = s, h.charCodeAt(s) === 94 ? (f = Jr, s++) : (f = e, p(Ai)), f !== e ? (t = W(), t === e && (h.charCodeAt(s) === 97 ? (t = es, s++) : (t = e, p(vs))), t !== e ? (f = [f, t], r = f) : (s = r, r = e)) : (s = r, r = e))), r;
  }
  function wt() {
    var r, f;
    return r = s, f = Bp(), f !== e && (d = r, f = Oc(f)), r = f, r === e && (r = Gp()), r;
  }
  function Gp() {
    var r, f, t, l, o, c, n, u, g;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.charCodeAt(s) === 91 ? (t = js, s++) : (t = e, p(rr)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = dr(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 93 ? (n = ks, s++) : (n = e, p(ir)), n !== e) {
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
  function dt() {
    var r, f;
    return r = s, f = Hp(), f !== e && (d = r, f = xc(f)), r = f, r === e && (r = Up()), r;
  }
  function Up() {
    var r, f, t, l, o, c, n, u, g;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.charCodeAt(s) === 91 ? (t = js, s++) : (t = e, p(rr)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = br(), o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 93 ? (n = ks, s++) : (n = e, p(ir)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          d = r, r = Fc(o);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Bp() {
    var r, f, t, l, o, c, n, u, g;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
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
          d = r, r = Dc(o);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Hp() {
    var r, f, t, l, o, c, n, u, g;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      if (o = [], c = Xe(), c !== e)
        for (; c !== e; )
          o.push(c), c = Xe();
      else
        o = e;
      if (o !== e) {
        for (c = [], n = a(); n !== e; )
          c.push(n), n = a();
        if (h.charCodeAt(s) === 41 ? (n = E, s++) : (n = e, p(P)), n !== e) {
          for (u = [], g = a(); g !== e; )
            u.push(g), g = a();
          d = r, r = Gc(o);
        } else
          s = r, r = e;
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function ke() {
    var r, f, t;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    return t = Is(), t === e && (t = wt()), t !== e ? (d = r, r = Uc(t)) : (s = r, r = e), r;
  }
  function Xe() {
    var r, f, t;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    return t = Is(), t === e && (t = dt()), t !== e ? (d = r, r = Bc(t)) : (s = r, r = e), r;
  }
  function Is() {
    var r;
    return r = k(), r === e && (r = Mp()), r;
  }
  function Fe() {
    var r;
    return r = k(), r === e && (r = W()), r;
  }
  function k() {
    var r, f, t, l, o;
    for (r = s, f = [], t = a(); t !== e; )
      f.push(t), t = a();
    if (t = eg(), t === e && (t = sg()), t !== e) {
      for (l = [], o = a(); o !== e; )
        l.push(o), o = a();
      d = r, r = Hc(t);
    } else
      s = r, r = e;
    return r;
  }
  function Mp() {
    var r;
    return r = W(), r === e && (r = Tr(), r === e && (r = Lr(), r === e && (r = Sr(), r === e && (r = Kp(), r === e && (r = me()))))), r;
  }
  function _() {
    var r, f, t, l, o, c, n, u;
    if (r = s, f = mr(), f !== e) {
      for (t = [], l = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.substr(s, 2) === rs ? (c = rs, s += 2) : (c = e, p(Ci)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = mr(), u !== e ? l = u : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.substr(s, 2) === rs ? (c = rs, s += 2) : (c = e, p(Ci)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = mr(), u !== e ? l = u : (s = l, l = e);
        } else
          s = l, l = e;
      }
      d = r, r = Mc(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function mr() {
    var r, f, t, l, o, c, n, u;
    if (r = s, f = Er(), f !== e) {
      for (t = [], l = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.substr(s, 2) === is ? (c = is, s += 2) : (c = e, p(_i)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Er(), u !== e ? l = u : (s = l, l = e);
      } else
        s = l, l = e;
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.substr(s, 2) === is ? (c = is, s += 2) : (c = e, p(_i)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Er(), u !== e ? l = u : (s = l, l = e);
        } else
          s = l, l = e;
      }
      d = r, r = jc(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Er() {
    var r, f, t, l, o, c, n, u, g, w;
    if (r = s, f = z(), f !== e) {
      for (t = [], l = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 61 ? (c = ts, s++) : (c = e, p(As)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
      } else
        s = l, l = e;
      if (l === e) {
        for (l = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.substr(s, 2) === ls ? (c = ls, s += 2) : (c = e, p(mi)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e) {
          for (l = s, o = [], c = a(); c !== e; )
            o.push(c), c = a();
          if (h.charCodeAt(s) === 60 ? (c = Xs, s++) : (c = e, p(tr)), c !== e) {
            for (n = [], u = a(); u !== e; )
              n.push(u), u = a();
            u = z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
          } else
            s = l, l = e;
          if (l === e) {
            for (l = s, o = [], c = a(); c !== e; )
              o.push(c), c = a();
            if (h.charCodeAt(s) === 62 ? (c = Vs, s++) : (c = e, p(lr)), c !== e) {
              for (n = [], u = a(); u !== e; )
                n.push(u), u = a();
              u = z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
            } else
              s = l, l = e;
            if (l === e) {
              for (l = s, o = [], c = a(); c !== e; )
                o.push(c), c = a();
              if (h.substr(s, 2) === as ? (c = as, s += 2) : (c = e, p(Ei)), c !== e) {
                for (n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                u = z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
              } else
                s = l, l = e;
              if (l === e) {
                for (l = s, o = [], c = a(); c !== e; )
                  o.push(c), c = a();
                if (h.substr(s, 2) === fs ? (c = fs, s += 2) : (c = e, p(yi)), c !== e) {
                  for (n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  u = z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
                } else
                  s = l, l = e;
                if (l === e) {
                  for (l = s, o = [], c = a(); c !== e; )
                    o.push(c), c = a();
                  if (h.substr(s, 2).toLowerCase() === os ? (c = h.substr(s, 2), s += 2) : (c = e, p(Cs)), c !== e) {
                    for (n = [], u = a(); u !== e; )
                      n.push(u), u = a();
                    u = xe(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
                  } else
                    s = l, l = e;
                  if (l === e) {
                    for (l = s, o = [], c = a(); c !== e; )
                      o.push(c), c = a();
                    if (h.substr(s, 3).toLowerCase() === Ws ? (c = h.substr(s, 3), s += 3) : (c = e, p(ar)), c !== e) {
                      for (n = [], u = a(); u !== e; )
                        n.push(u), u = a();
                      if (h.substr(s, 2).toLowerCase() === os ? (u = h.substr(s, 2), s += 2) : (u = e, p(Cs)), u !== e) {
                        for (g = [], w = a(); w !== e; )
                          g.push(w), w = a();
                        w = xe(), w !== e ? (o = [o, c, n, u, g, w], l = o) : (s = l, l = e);
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
        for (t.push(l), l = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 61 ? (c = ts, s++) : (c = e, p(As)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e) {
          for (l = s, o = [], c = a(); c !== e; )
            o.push(c), c = a();
          if (h.substr(s, 2) === ls ? (c = ls, s += 2) : (c = e, p(mi)), c !== e) {
            for (n = [], u = a(); u !== e; )
              n.push(u), u = a();
            u = z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
          } else
            s = l, l = e;
          if (l === e) {
            for (l = s, o = [], c = a(); c !== e; )
              o.push(c), c = a();
            if (h.charCodeAt(s) === 60 ? (c = Xs, s++) : (c = e, p(tr)), c !== e) {
              for (n = [], u = a(); u !== e; )
                n.push(u), u = a();
              u = z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
            } else
              s = l, l = e;
            if (l === e) {
              for (l = s, o = [], c = a(); c !== e; )
                o.push(c), c = a();
              if (h.charCodeAt(s) === 62 ? (c = Vs, s++) : (c = e, p(lr)), c !== e) {
                for (n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                u = z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
              } else
                s = l, l = e;
              if (l === e) {
                for (l = s, o = [], c = a(); c !== e; )
                  o.push(c), c = a();
                if (h.substr(s, 2) === as ? (c = as, s += 2) : (c = e, p(Ei)), c !== e) {
                  for (n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  u = z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
                } else
                  s = l, l = e;
                if (l === e) {
                  for (l = s, o = [], c = a(); c !== e; )
                    o.push(c), c = a();
                  if (h.substr(s, 2) === fs ? (c = fs, s += 2) : (c = e, p(yi)), c !== e) {
                    for (n = [], u = a(); u !== e; )
                      n.push(u), u = a();
                    u = z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
                  } else
                    s = l, l = e;
                  if (l === e) {
                    for (l = s, o = [], c = a(); c !== e; )
                      o.push(c), c = a();
                    if (h.substr(s, 2).toLowerCase() === os ? (c = h.substr(s, 2), s += 2) : (c = e, p(Cs)), c !== e) {
                      for (n = [], u = a(); u !== e; )
                        n.push(u), u = a();
                      u = xe(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
                    } else
                      s = l, l = e;
                    if (l === e) {
                      for (l = s, o = [], c = a(); c !== e; )
                        o.push(c), c = a();
                      if (h.substr(s, 3).toLowerCase() === Ws ? (c = h.substr(s, 3), s += 3) : (c = e, p(ar)), c !== e) {
                        for (n = [], u = a(); u !== e; )
                          n.push(u), u = a();
                        if (h.substr(s, 2).toLowerCase() === os ? (u = h.substr(s, 2), s += 2) : (u = e, p(Cs)), u !== e) {
                          for (g = [], w = a(); w !== e; )
                            g.push(w), w = a();
                          w = xe(), w !== e ? (o = [o, c, n, u, g, w], l = o) : (s = l, l = e);
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
      d = r, r = kc(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function z() {
    var r, f, t, l, o, c, n, u, g, w, $;
    if (r = s, f = Ve(), f !== e) {
      for (t = [], l = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 43 ? (c = $e, s++) : (c = e, p(Ce)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Ve(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
      } else
        s = l, l = e;
      if (l === e) {
        for (l = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 45 ? (c = ie, s++) : (c = e, p(te)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Ve(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e)
          if (l = s, o = Rr(), o === e && (o = Ir()), o !== e) {
            for (c = [], n = s, u = [], g = a(); g !== e; )
              u.push(g), g = a();
            if (h.charCodeAt(s) === 42 ? (g = ee, s++) : (g = e, p(se)), g !== e) {
              for (w = [], $ = a(); $ !== e; )
                w.push($), $ = a();
              $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
            } else
              s = n, n = e;
            if (n === e) {
              for (n = s, u = [], g = a(); g !== e; )
                u.push(g), g = a();
              if (h.charCodeAt(s) === 47 ? (g = oe, s++) : (g = e, p(ce)), g !== e) {
                for (w = [], $ = a(); $ !== e; )
                  w.push($), $ = a();
                $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
              } else
                s = n, n = e;
            }
            for (; n !== e; ) {
              for (c.push(n), n = s, u = [], g = a(); g !== e; )
                u.push(g), g = a();
              if (h.charCodeAt(s) === 42 ? (g = ee, s++) : (g = e, p(se)), g !== e) {
                for (w = [], $ = a(); $ !== e; )
                  w.push($), $ = a();
                $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
              } else
                s = n, n = e;
              if (n === e) {
                for (n = s, u = [], g = a(); g !== e; )
                  u.push(g), g = a();
                if (h.charCodeAt(s) === 47 ? (g = oe, s++) : (g = e, p(ce)), g !== e) {
                  for (w = [], $ = a(); $ !== e; )
                    w.push($), $ = a();
                  $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
                } else
                  s = n, n = e;
              }
            }
            o = [o, c], l = o;
          } else
            s = l, l = e;
      }
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 43 ? (c = $e, s++) : (c = e, p(Ce)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Ve(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e) {
          for (l = s, o = [], c = a(); c !== e; )
            o.push(c), c = a();
          if (h.charCodeAt(s) === 45 ? (c = ie, s++) : (c = e, p(te)), c !== e) {
            for (n = [], u = a(); u !== e; )
              n.push(u), u = a();
            u = Ve(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
          } else
            s = l, l = e;
          if (l === e)
            if (l = s, o = Rr(), o === e && (o = Ir()), o !== e) {
              for (c = [], n = s, u = [], g = a(); g !== e; )
                u.push(g), g = a();
              if (h.charCodeAt(s) === 42 ? (g = ee, s++) : (g = e, p(se)), g !== e) {
                for (w = [], $ = a(); $ !== e; )
                  w.push($), $ = a();
                $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
              } else
                s = n, n = e;
              if (n === e) {
                for (n = s, u = [], g = a(); g !== e; )
                  u.push(g), g = a();
                if (h.charCodeAt(s) === 47 ? (g = oe, s++) : (g = e, p(ce)), g !== e) {
                  for (w = [], $ = a(); $ !== e; )
                    w.push($), $ = a();
                  $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
                } else
                  s = n, n = e;
              }
              for (; n !== e; ) {
                for (c.push(n), n = s, u = [], g = a(); g !== e; )
                  u.push(g), g = a();
                if (h.charCodeAt(s) === 42 ? (g = ee, s++) : (g = e, p(se)), g !== e) {
                  for (w = [], $ = a(); $ !== e; )
                    w.push($), $ = a();
                  $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
                } else
                  s = n, n = e;
                if (n === e) {
                  for (n = s, u = [], g = a(); g !== e; )
                    u.push(g), g = a();
                  if (h.charCodeAt(s) === 47 ? (g = oe, s++) : (g = e, p(ce)), g !== e) {
                    for (w = [], $ = a(); $ !== e; )
                      w.push($), $ = a();
                    $ = Z(), $ !== e ? (u = [u, g, w, $], n = u) : (s = n, n = e);
                  } else
                    s = n, n = e;
                }
              }
              o = [o, c], l = o;
            } else
              s = l, l = e;
        }
      }
      d = r, r = Xc(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Ve() {
    var r, f, t, l, o, c, n, u;
    if (r = s, f = Z(), f !== e) {
      for (t = [], l = s, o = [], c = a(); c !== e; )
        o.push(c), c = a();
      if (h.charCodeAt(s) === 42 ? (c = ee, s++) : (c = e, p(se)), c !== e) {
        for (n = [], u = a(); u !== e; )
          n.push(u), u = a();
        u = Z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
      } else
        s = l, l = e;
      if (l === e) {
        for (l = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 47 ? (c = oe, s++) : (c = e, p(ce)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
      }
      for (; l !== e; ) {
        for (t.push(l), l = s, o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (h.charCodeAt(s) === 42 ? (c = ee, s++) : (c = e, p(se)), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          u = Z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
        } else
          s = l, l = e;
        if (l === e) {
          for (l = s, o = [], c = a(); c !== e; )
            o.push(c), c = a();
          if (h.charCodeAt(s) === 47 ? (c = oe, s++) : (c = e, p(ce)), c !== e) {
            for (n = [], u = a(); u !== e; )
              n.push(u), u = a();
            u = Z(), u !== e ? (o = [o, c, n, u], l = o) : (s = l, l = e);
          } else
            s = l, l = e;
        }
      }
      d = r, r = Vc(f, t);
    } else
      s = r, r = e;
    return r;
  }
  function Z() {
    var r, f, t, l;
    if (r = s, h.charCodeAt(s) === 33 ? (f = Ms, s++) : (f = e, p(sr)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = Ss(), l !== e ? (d = r, r = Wc(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    if (r === e) {
      if (r = s, h.charCodeAt(s) === 43 ? (f = $e, s++) : (f = e, p(Ce)), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        l = Ss(), l !== e ? (d = r, r = Qc(l)) : (s = r, r = e);
      } else
        s = r, r = e;
      if (r === e) {
        if (r = s, h.charCodeAt(s) === 45 ? (f = ie, s++) : (f = e, p(te)), f !== e) {
          for (t = [], l = a(); l !== e; )
            t.push(l), l = a();
          l = Ss(), l !== e ? (d = r, r = Yc(l)) : (s = r, r = e);
        } else
          s = r, r = e;
        r === e && (r = Ss());
      }
    }
    return r;
  }
  function Ss() {
    var r, f;
    return r = yr(), r === e && (r = Pr(), r === e && (r = Yp(), r === e && (r = s, f = Tr(), f !== e && (d = r, f = zc(f)), r = f, r === e && (r = s, f = Lr(), f !== e && (d = r, f = Zc(f)), r = f, r === e && (r = s, f = Sr(), f !== e && (d = r, f = Kc(f)), r = f, r === e && (r = s, f = k(), f !== e && (d = r, f = Jc(f)), r = f)))))), r;
  }
  function yr() {
    var r, f, t, l, o, c;
    if (r = s, h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (l = _(), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        h.charCodeAt(s) === 41 ? (c = E, s++) : (c = e, p(P)), c !== e ? (d = r, r = qc(l)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Pr() {
    var r, f, t, l, o, c, n, u, g, w, $, A, m, L, R, O;
    if (r = Qp(), r === e) {
      if (r = s, h.substr(s, 3).toLowerCase() === rl ? (f = h.substr(s, 3), s += 3) : (f = e, p(nf)), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
          for (o = [], c = a(); c !== e; )
            o.push(c), c = a();
          if (c = _(), c !== e) {
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
        if (r = s, h.substr(s, 4).toLowerCase() === il ? (f = h.substr(s, 4), s += 4) : (f = e, p(uf)), f !== e) {
          for (t = [], l = a(); l !== e; )
            t.push(l), l = a();
          if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
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
          if (r = s, h.substr(s, 11).toLowerCase() === tl ? (f = h.substr(s, 11), s += 11) : (f = e, p(pf)), f !== e) {
            for (t = [], l = a(); l !== e; )
              t.push(l), l = a();
            if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
              for (o = [], c = a(); c !== e; )
                o.push(c), c = a();
              if (c = _(), c !== e) {
                for (n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                  for (g = [], w = a(); w !== e; )
                    g.push(w), w = a();
                  if (w = _(), w !== e) {
                    for ($ = [], A = a(); A !== e; )
                      $.push(A), A = a();
                    h.charCodeAt(s) === 41 ? (A = E, s++) : (A = e, p(P)), A !== e ? (d = r, r = rn(c, w)) : (s = r, r = e);
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
            if (r = s, h.substr(s, 8).toLowerCase() === ll ? (f = h.substr(s, 8), s += 8) : (f = e, p(gf)), f !== e) {
              for (t = [], l = a(); l !== e; )
                t.push(l), l = a();
              if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                for (o = [], c = a(); c !== e; )
                  o.push(c), c = a();
                if (c = _(), c !== e) {
                  for (n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = tn(c)) : (s = r, r = e);
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
            } else
              s = r, r = e;
            if (r === e) {
              if (r = s, h.substr(s, 5).toLowerCase() === al ? (f = h.substr(s, 5), s += 5) : (f = e, p(wf)), f !== e) {
                for (t = [], l = a(); l !== e; )
                  t.push(l), l = a();
                if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                  for (o = [], c = a(); c !== e; )
                    o.push(c), c = a();
                  if (c = k(), c !== e) {
                    for (n = [], u = a(); u !== e; )
                      n.push(u), u = a();
                    h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = ln(c)) : (s = r, r = e);
                  } else
                    s = r, r = e;
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
              if (r === e) {
                if (r = s, h.substr(s, 3).toLowerCase() === fl ? (f = h.substr(s, 3), s += 3) : (f = e, p(df)), f !== e) {
                  for (t = [], l = a(); l !== e; )
                    t.push(l), l = a();
                  if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
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
                  if (r = s, h.substr(s, 3).toLowerCase() === ol ? (f = h.substr(s, 3), s += 3) : (f = e, p($f)), f !== e) {
                    for (t = [], l = a(); l !== e; )
                      t.push(l), l = a();
                    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
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
                    if (r = s, h.substr(s, 5).toLowerCase() === hl ? (f = h.substr(s, 5), s += 5) : (f = e, p(vf)), f !== e) {
                      for (t = [], l = a(); l !== e; )
                        t.push(l), l = a();
                      if (l = s, h.charCodeAt(s) === 40 ? (o = C, s++) : (o = e, p(y)), o !== e) {
                        for (c = [], n = a(); n !== e; )
                          c.push(n), n = a();
                        if (n = _(), n !== e) {
                          for (u = [], g = a(); g !== e; )
                            u.push(g), g = a();
                          h.charCodeAt(s) === 41 ? (g = E, s++) : (g = e, p(P)), g !== e ? (o = [o, c, n, u, g], l = o) : (s = l, l = e);
                        } else
                          s = l, l = e;
                      } else
                        s = l, l = e;
                      l === e && (l = me()), l !== e ? (d = r, r = on(l)) : (s = r, r = e);
                    } else
                      s = r, r = e;
                    if (r === e) {
                      if (r = s, h.substr(s, 4).toLowerCase() === cl ? (f = h.substr(s, 4), s += 4) : (f = e, p(bf)), f !== e) {
                        for (t = [], l = a(); l !== e; )
                          t.push(l), l = a();
                        l = me(), l !== e ? (d = r, r = hn()) : (s = r, r = e);
                      } else
                        s = r, r = e;
                      if (r === e) {
                        if (r = s, h.substr(s, 3).toLowerCase() === nl ? (f = h.substr(s, 3), s += 3) : (f = e, p(Af)), f !== e) {
                          for (t = [], l = a(); l !== e; )
                            t.push(l), l = a();
                          if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                            for (o = [], c = a(); c !== e; )
                              o.push(c), c = a();
                            if (c = _(), c !== e) {
                              for (n = [], u = a(); u !== e; )
                                n.push(u), u = a();
                              h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = cn(c)) : (s = r, r = e);
                            } else
                              s = r, r = e;
                          } else
                            s = r, r = e;
                        } else
                          s = r, r = e;
                        if (r === e) {
                          if (r = s, h.substr(s, 4).toLowerCase() === ul ? (f = h.substr(s, 4), s += 4) : (f = e, p(Cf)), f !== e) {
                            for (t = [], l = a(); l !== e; )
                              t.push(l), l = a();
                            if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
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
                          if (r === e) {
                            if (r = s, h.substr(s, 5).toLowerCase() === pl ? (f = h.substr(s, 5), s += 5) : (f = e, p(_f)), f !== e) {
                              for (t = [], l = a(); l !== e; )
                                t.push(l), l = a();
                              if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
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
                              if (r = s, h.substr(s, 5).toLowerCase() === gl ? (f = h.substr(s, 5), s += 5) : (f = e, p(mf)), f !== e) {
                                for (t = [], l = a(); l !== e; )
                                  t.push(l), l = a();
                                if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
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
                                if (r = s, h.substr(s, 6).toLowerCase() === wl ? (f = h.substr(s, 6), s += 6) : (f = e, p(Ef)), f !== e) {
                                  for (t = [], l = a(); l !== e; )
                                    t.push(l), l = a();
                                  l = xe(), l !== e ? (d = r, r = gn(l)) : (s = r, r = e);
                                } else
                                  s = r, r = e;
                                if (r === e && (r = kp(), r === e)) {
                                  if (r = s, h.substr(s, 6).toLowerCase() === dl ? (f = h.substr(s, 6), s += 6) : (f = e, p(yf)), f !== e) {
                                    for (t = [], l = a(); l !== e; )
                                      t.push(l), l = a();
                                    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                      for (o = [], c = a(); c !== e; )
                                        o.push(c), c = a();
                                      if (c = _(), c !== e) {
                                        for (n = [], u = a(); u !== e; )
                                          n.push(u), u = a();
                                        h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = wn(c)) : (s = r, r = e);
                                      } else
                                        s = r, r = e;
                                    } else
                                      s = r, r = e;
                                  } else
                                    s = r, r = e;
                                  if (r === e && (r = Xp(), r === e)) {
                                    if (r = s, h.substr(s, 5).toLowerCase() === $l ? (f = h.substr(s, 5), s += 5) : (f = e, p(Pf)), f !== e) {
                                      for (t = [], l = a(); l !== e; )
                                        t.push(l), l = a();
                                      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                        for (o = [], c = a(); c !== e; )
                                          o.push(c), c = a();
                                        if (c = _(), c !== e) {
                                          for (n = [], u = a(); u !== e; )
                                            n.push(u), u = a();
                                          h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = dn(c)) : (s = r, r = e);
                                        } else
                                          s = r, r = e;
                                      } else
                                        s = r, r = e;
                                    } else
                                      s = r, r = e;
                                    if (r === e) {
                                      if (r = s, h.substr(s, 5).toLowerCase() === vl ? (f = h.substr(s, 5), s += 5) : (f = e, p(Tf)), f !== e) {
                                        for (t = [], l = a(); l !== e; )
                                          t.push(l), l = a();
                                        if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                          for (o = [], c = a(); c !== e; )
                                            o.push(c), c = a();
                                          if (c = _(), c !== e) {
                                            for (n = [], u = a(); u !== e; )
                                              n.push(u), u = a();
                                            h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = $n(c)) : (s = r, r = e);
                                          } else
                                            s = r, r = e;
                                        } else
                                          s = r, r = e;
                                      } else
                                        s = r, r = e;
                                      if (r === e) {
                                        if (r = s, h.substr(s, 14).toLowerCase() === bl ? (f = h.substr(s, 14), s += 14) : (f = e, p(Lf)), f !== e) {
                                          for (t = [], l = a(); l !== e; )
                                            t.push(l), l = a();
                                          if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                            for (o = [], c = a(); c !== e; )
                                              o.push(c), c = a();
                                            if (c = _(), c !== e) {
                                              for (n = [], u = a(); u !== e; )
                                                n.push(u), u = a();
                                              h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = vn(c)) : (s = r, r = e);
                                            } else
                                              s = r, r = e;
                                          } else
                                            s = r, r = e;
                                        } else
                                          s = r, r = e;
                                        if (r === e) {
                                          if (r = s, h.substr(s, 8).toLowerCase() === Al ? (f = h.substr(s, 8), s += 8) : (f = e, p(Rf)), f !== e) {
                                            for (t = [], l = a(); l !== e; )
                                              t.push(l), l = a();
                                            if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                              for (o = [], c = a(); c !== e; )
                                                o.push(c), c = a();
                                              if (c = _(), c !== e) {
                                                for (n = [], u = a(); u !== e; )
                                                  n.push(u), u = a();
                                                if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                  for (g = [], w = a(); w !== e; )
                                                    g.push(w), w = a();
                                                  if (w = _(), w !== e) {
                                                    for ($ = [], A = a(); A !== e; )
                                                      $.push(A), A = a();
                                                    h.charCodeAt(s) === 41 ? (A = E, s++) : (A = e, p(P)), A !== e ? (d = r, r = bn(c, w)) : (s = r, r = e);
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
                                            if (r = s, h.substr(s, 9).toLowerCase() === Cl ? (f = h.substr(s, 9), s += 9) : (f = e, p(If)), f !== e) {
                                              for (t = [], l = a(); l !== e; )
                                                t.push(l), l = a();
                                              if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                for (o = [], c = a(); c !== e; )
                                                  o.push(c), c = a();
                                                if (c = _(), c !== e) {
                                                  for (n = [], u = a(); u !== e; )
                                                    n.push(u), u = a();
                                                  if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                    for (g = [], w = a(); w !== e; )
                                                      g.push(w), w = a();
                                                    if (w = _(), w !== e) {
                                                      for ($ = [], A = a(); A !== e; )
                                                        $.push(A), A = a();
                                                      h.charCodeAt(s) === 41 ? (A = E, s++) : (A = e, p(P)), A !== e ? (d = r, r = An(c, w)) : (s = r, r = e);
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
                                              if (r = s, h.substr(s, 9).toLowerCase() === _l ? (f = h.substr(s, 9), s += 9) : (f = e, p(Sf)), f !== e) {
                                                for (t = [], l = a(); l !== e; )
                                                  t.push(l), l = a();
                                                if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                  for (o = [], c = a(); c !== e; )
                                                    o.push(c), c = a();
                                                  if (c = _(), c !== e) {
                                                    for (n = [], u = a(); u !== e; )
                                                      n.push(u), u = a();
                                                    if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                      for (g = [], w = a(); w !== e; )
                                                        g.push(w), w = a();
                                                      if (w = _(), w !== e) {
                                                        for ($ = [], A = a(); A !== e; )
                                                          $.push(A), A = a();
                                                        h.charCodeAt(s) === 41 ? (A = E, s++) : (A = e, p(P)), A !== e ? (d = r, r = Cn(c, w)) : (s = r, r = e);
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
                                                if (r = s, h.substr(s, 7).toLowerCase() === ml ? (f = h.substr(s, 7), s += 7) : (f = e, p(Of)), f !== e) {
                                                  for (t = [], l = a(); l !== e; )
                                                    t.push(l), l = a();
                                                  if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                    for (o = [], c = a(); c !== e; )
                                                      o.push(c), c = a();
                                                    if (c = _(), c !== e) {
                                                      for (n = [], u = a(); u !== e; )
                                                        n.push(u), u = a();
                                                      if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                        for (g = [], w = a(); w !== e; )
                                                          g.push(w), w = a();
                                                        if (w = _(), w !== e) {
                                                          for ($ = [], A = a(); A !== e; )
                                                            $.push(A), A = a();
                                                          h.charCodeAt(s) === 41 ? (A = E, s++) : (A = e, p(P)), A !== e ? (d = r, r = _n(c, w)) : (s = r, r = e);
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
                                                  if (r = s, h.substr(s, 8).toLowerCase() === El ? (f = h.substr(s, 8), s += 8) : (f = e, p(Nf)), f !== e) {
                                                    for (t = [], l = a(); l !== e; )
                                                      t.push(l), l = a();
                                                    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                      for (o = [], c = a(); c !== e; )
                                                        o.push(c), c = a();
                                                      if (c = _(), c !== e) {
                                                        for (n = [], u = a(); u !== e; )
                                                          n.push(u), u = a();
                                                        if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                          for (g = [], w = a(); w !== e; )
                                                            g.push(w), w = a();
                                                          if (w = _(), w !== e) {
                                                            for ($ = [], A = a(); A !== e; )
                                                              $.push(A), A = a();
                                                            h.charCodeAt(s) === 41 ? (A = E, s++) : (A = e, p(P)), A !== e ? (d = r, r = mn(c, w)) : (s = r, r = e);
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
                                                    if (r = s, h.substr(s, 4).toLowerCase() === yl ? (f = h.substr(s, 4), s += 4) : (f = e, p(xf)), f !== e) {
                                                      for (t = [], l = a(); l !== e; )
                                                        t.push(l), l = a();
                                                      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
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
                                                      if (r = s, h.substr(s, 5).toLowerCase() === Pl ? (f = h.substr(s, 5), s += 5) : (f = e, p(Ff)), f !== e) {
                                                        for (t = [], l = a(); l !== e; )
                                                          t.push(l), l = a();
                                                        if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
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
                                                        if (r = s, h.substr(s, 3).toLowerCase() === Tl ? (f = h.substr(s, 3), s += 3) : (f = e, p(Df)), f !== e) {
                                                          for (t = [], l = a(); l !== e; )
                                                            t.push(l), l = a();
                                                          if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
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
                                                          if (r = s, h.substr(s, 5).toLowerCase() === Ll ? (f = h.substr(s, 5), s += 5) : (f = e, p(Gf)), f !== e) {
                                                            for (t = [], l = a(); l !== e; )
                                                              t.push(l), l = a();
                                                            if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                              for (o = [], c = a(); c !== e; )
                                                                o.push(c), c = a();
                                                              if (c = _(), c !== e) {
                                                                for (n = [], u = a(); u !== e; )
                                                                  n.push(u), u = a();
                                                                h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Tn(c)) : (s = r, r = e);
                                                              } else
                                                                s = r, r = e;
                                                            } else
                                                              s = r, r = e;
                                                          } else
                                                            s = r, r = e;
                                                          if (r === e) {
                                                            if (r = s, h.substr(s, 7).toLowerCase() === Rl ? (f = h.substr(s, 7), s += 7) : (f = e, p(Uf)), f !== e) {
                                                              for (t = [], l = a(); l !== e; )
                                                                t.push(l), l = a();
                                                              if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
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
                                                              if (r = s, h.substr(s, 7).toLowerCase() === Il ? (f = h.substr(s, 7), s += 7) : (f = e, p(Bf)), f !== e) {
                                                                for (t = [], l = a(); l !== e; )
                                                                  t.push(l), l = a();
                                                                if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                  for (o = [], c = a(); c !== e; )
                                                                    o.push(c), c = a();
                                                                  if (c = _(), c !== e) {
                                                                    for (n = [], u = a(); u !== e; )
                                                                      n.push(u), u = a();
                                                                    h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Rn(c)) : (s = r, r = e);
                                                                  } else
                                                                    s = r, r = e;
                                                                } else
                                                                  s = r, r = e;
                                                              } else
                                                                s = r, r = e;
                                                              if (r === e) {
                                                                if (r = s, h.substr(s, 8).toLowerCase() === Sl ? (f = h.substr(s, 8), s += 8) : (f = e, p(Hf)), f !== e) {
                                                                  for (t = [], l = a(); l !== e; )
                                                                    t.push(l), l = a();
                                                                  if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                    for (o = [], c = a(); c !== e; )
                                                                      o.push(c), c = a();
                                                                    if (c = _(), c !== e) {
                                                                      for (n = [], u = a(); u !== e; )
                                                                        n.push(u), u = a();
                                                                      h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = In(c)) : (s = r, r = e);
                                                                    } else
                                                                      s = r, r = e;
                                                                  } else
                                                                    s = r, r = e;
                                                                } else
                                                                  s = r, r = e;
                                                                if (r === e) {
                                                                  if (r = s, h.substr(s, 2).toLowerCase() === Ol ? (f = h.substr(s, 2), s += 2) : (f = e, p(Mf)), f !== e) {
                                                                    for (t = [], l = a(); l !== e; )
                                                                      t.push(l), l = a();
                                                                    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
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
                                                                    if (r = s, h.substr(s, 3).toLowerCase() === Nl ? (f = h.substr(s, 3), s += 3) : (f = e, p(jf)), f !== e) {
                                                                      for (t = [], l = a(); l !== e; )
                                                                        t.push(l), l = a();
                                                                      l = me(), l !== e ? (d = r, r = On()) : (s = r, r = e);
                                                                    } else
                                                                      s = r, r = e;
                                                                    if (r === e) {
                                                                      if (r = s, h.substr(s, 4).toLowerCase() === xl ? (f = h.substr(s, 4), s += 4) : (f = e, p(kf)), f !== e) {
                                                                        for (t = [], l = a(); l !== e; )
                                                                          t.push(l), l = a();
                                                                        l = me(), l !== e ? (d = r, r = Nn()) : (s = r, r = e);
                                                                      } else
                                                                        s = r, r = e;
                                                                      if (r === e) {
                                                                        if (r = s, h.substr(s, 7).toLowerCase() === Fl ? (f = h.substr(s, 7), s += 7) : (f = e, p(Xf)), f !== e) {
                                                                          for (t = [], l = a(); l !== e; )
                                                                            t.push(l), l = a();
                                                                          l = me(), l !== e ? (d = r, r = xn()) : (s = r, r = e);
                                                                        } else
                                                                          s = r, r = e;
                                                                        if (r === e) {
                                                                          if (r = s, h.substr(s, 3).toLowerCase() === Dl ? (f = h.substr(s, 3), s += 3) : (f = e, p(Vf)), f !== e) {
                                                                            for (t = [], l = a(); l !== e; )
                                                                              t.push(l), l = a();
                                                                            if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
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
                                                                            if (r = s, h.substr(s, 4).toLowerCase() === Gl ? (f = h.substr(s, 4), s += 4) : (f = e, p(Wf)), f !== e) {
                                                                              for (t = [], l = a(); l !== e; )
                                                                                t.push(l), l = a();
                                                                              if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                for (o = [], c = a(); c !== e; )
                                                                                  o.push(c), c = a();
                                                                                if (c = _(), c !== e) {
                                                                                  for (n = [], u = a(); u !== e; )
                                                                                    n.push(u), u = a();
                                                                                  h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Dn(c)) : (s = r, r = e);
                                                                                } else
                                                                                  s = r, r = e;
                                                                              } else
                                                                                s = r, r = e;
                                                                            } else
                                                                              s = r, r = e;
                                                                            if (r === e) {
                                                                              if (r = s, h.substr(s, 6).toLowerCase() === Ul ? (f = h.substr(s, 6), s += 6) : (f = e, p(Qf)), f !== e) {
                                                                                for (t = [], l = a(); l !== e; )
                                                                                  t.push(l), l = a();
                                                                                if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                  for (o = [], c = a(); c !== e; )
                                                                                    o.push(c), c = a();
                                                                                  if (c = _(), c !== e) {
                                                                                    for (n = [], u = a(); u !== e; )
                                                                                      n.push(u), u = a();
                                                                                    h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Gn(c)) : (s = r, r = e);
                                                                                  } else
                                                                                    s = r, r = e;
                                                                                } else
                                                                                  s = r, r = e;
                                                                              } else
                                                                                s = r, r = e;
                                                                              if (r === e) {
                                                                                if (r = s, h.substr(s, 6).toLowerCase() === Bl ? (f = h.substr(s, 6), s += 6) : (f = e, p(Yf)), f !== e) {
                                                                                  for (t = [], l = a(); l !== e; )
                                                                                    t.push(l), l = a();
                                                                                  if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                    for (o = [], c = a(); c !== e; )
                                                                                      o.push(c), c = a();
                                                                                    if (c = _(), c !== e) {
                                                                                      for (n = [], u = a(); u !== e; )
                                                                                        n.push(u), u = a();
                                                                                      h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Un(c)) : (s = r, r = e);
                                                                                    } else
                                                                                      s = r, r = e;
                                                                                  } else
                                                                                    s = r, r = e;
                                                                                } else
                                                                                  s = r, r = e;
                                                                                if (r === e) {
                                                                                  if (r = s, h.substr(s, 6).toLowerCase() === Hl ? (f = h.substr(s, 6), s += 6) : (f = e, p(zf)), f !== e) {
                                                                                    for (t = [], l = a(); l !== e; )
                                                                                      t.push(l), l = a();
                                                                                    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                      for (o = [], c = a(); c !== e; )
                                                                                        o.push(c), c = a();
                                                                                      if (c = _(), c !== e) {
                                                                                        for (n = [], u = a(); u !== e; )
                                                                                          n.push(u), u = a();
                                                                                        h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Bn(c)) : (s = r, r = e);
                                                                                      } else
                                                                                        s = r, r = e;
                                                                                    } else
                                                                                      s = r, r = e;
                                                                                  } else
                                                                                    s = r, r = e;
                                                                                  if (r === e) {
                                                                                    if (r = s, h.substr(s, 8).toLowerCase() === Ml ? (f = h.substr(s, 8), s += 8) : (f = e, p(Zf)), f !== e) {
                                                                                      for (t = [], l = a(); l !== e; )
                                                                                        t.push(l), l = a();
                                                                                      l = xe(), l !== e ? (d = r, r = Hn(l)) : (s = r, r = e);
                                                                                    } else
                                                                                      s = r, r = e;
                                                                                    if (r === e) {
                                                                                      if (r = s, h.substr(s, 2).toLowerCase() === jl ? (f = h.substr(s, 2), s += 2) : (f = e, p(Kf)), f !== e) {
                                                                                        for (t = [], l = a(); l !== e; )
                                                                                          t.push(l), l = a();
                                                                                        if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                          for (o = [], c = a(); c !== e; )
                                                                                            o.push(c), c = a();
                                                                                          if (c = _(), c !== e) {
                                                                                            for (n = [], u = a(); u !== e; )
                                                                                              n.push(u), u = a();
                                                                                            if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                                                              for (g = [], w = a(); w !== e; )
                                                                                                g.push(w), w = a();
                                                                                              if (w = _(), w !== e) {
                                                                                                for ($ = [], A = a(); A !== e; )
                                                                                                  $.push(A), A = a();
                                                                                                if (h.charCodeAt(s) === 44 ? (A = D, s++) : (A = e, p(G)), A !== e) {
                                                                                                  for (m = [], L = a(); L !== e; )
                                                                                                    m.push(L), L = a();
                                                                                                  if (L = _(), L !== e) {
                                                                                                    for (R = [], O = a(); O !== e; )
                                                                                                      R.push(O), O = a();
                                                                                                    h.charCodeAt(s) === 41 ? (O = E, s++) : (O = e, p(P)), O !== e ? (d = r, r = Mn(c, w, L)) : (s = r, r = e);
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
                                                                                        if (r = s, h.substr(s, 7).toLowerCase() === kl ? (f = h.substr(s, 7), s += 7) : (f = e, p(Jf)), f !== e) {
                                                                                          for (t = [], l = a(); l !== e; )
                                                                                            t.push(l), l = a();
                                                                                          if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                            for (o = [], c = a(); c !== e; )
                                                                                              o.push(c), c = a();
                                                                                            if (c = _(), c !== e) {
                                                                                              for (n = [], u = a(); u !== e; )
                                                                                                n.push(u), u = a();
                                                                                              if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                                                                for (g = [], w = a(); w !== e; )
                                                                                                  g.push(w), w = a();
                                                                                                if (w = _(), w !== e) {
                                                                                                  for ($ = [], A = a(); A !== e; )
                                                                                                    $.push(A), A = a();
                                                                                                  h.charCodeAt(s) === 41 ? (A = E, s++) : (A = e, p(P)), A !== e ? (d = r, r = jn(c, w)) : (s = r, r = e);
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
                                                                                          if (r = s, h.substr(s, 5).toLowerCase() === Xl ? (f = h.substr(s, 5), s += 5) : (f = e, p(qf)), f !== e) {
                                                                                            for (t = [], l = a(); l !== e; )
                                                                                              t.push(l), l = a();
                                                                                            if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                              for (o = [], c = a(); c !== e; )
                                                                                                o.push(c), c = a();
                                                                                              if (c = _(), c !== e) {
                                                                                                for (n = [], u = a(); u !== e; )
                                                                                                  n.push(u), u = a();
                                                                                                if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                                                                  for (g = [], w = a(); w !== e; )
                                                                                                    g.push(w), w = a();
                                                                                                  if (w = _(), w !== e) {
                                                                                                    for ($ = [], A = a(); A !== e; )
                                                                                                      $.push(A), A = a();
                                                                                                    h.charCodeAt(s) === 41 ? (A = E, s++) : (A = e, p(P)), A !== e ? (d = r, r = kn(c, w)) : (s = r, r = e);
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
                                                                                            if (r = s, h.substr(s, 8).toLowerCase() === Vl ? (f = h.substr(s, 8), s += 8) : (f = e, p(eo)), f !== e) {
                                                                                              for (t = [], l = a(); l !== e; )
                                                                                                t.push(l), l = a();
                                                                                              if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                                for (o = [], c = a(); c !== e; )
                                                                                                  o.push(c), c = a();
                                                                                                if (c = _(), c !== e) {
                                                                                                  for (n = [], u = a(); u !== e; )
                                                                                                    n.push(u), u = a();
                                                                                                  if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
                                                                                                    for (g = [], w = a(); w !== e; )
                                                                                                      g.push(w), w = a();
                                                                                                    if (w = _(), w !== e) {
                                                                                                      for ($ = [], A = a(); A !== e; )
                                                                                                        $.push(A), A = a();
                                                                                                      h.charCodeAt(s) === 41 ? (A = E, s++) : (A = e, p(P)), A !== e ? (d = r, r = Xn(c, w)) : (s = r, r = e);
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
                                                                                              if (r = s, h.substr(s, 5).toLowerCase() === Wl ? (f = h.substr(s, 5), s += 5) : (f = e, p(so)), f === e && (h.substr(s, 5).toLowerCase() === Ql ? (f = h.substr(s, 5), s += 5) : (f = e, p(ro))), f !== e) {
                                                                                                for (t = [], l = a(); l !== e; )
                                                                                                  t.push(l), l = a();
                                                                                                if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                                  for (o = [], c = a(); c !== e; )
                                                                                                    o.push(c), c = a();
                                                                                                  if (c = _(), c !== e) {
                                                                                                    for (n = [], u = a(); u !== e; )
                                                                                                      n.push(u), u = a();
                                                                                                    h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Vn(c)) : (s = r, r = e);
                                                                                                  } else
                                                                                                    s = r, r = e;
                                                                                                } else
                                                                                                  s = r, r = e;
                                                                                              } else
                                                                                                s = r, r = e;
                                                                                              if (r === e) {
                                                                                                if (r = s, h.substr(s, 7).toLowerCase() === Yl ? (f = h.substr(s, 7), s += 7) : (f = e, p(io)), f !== e) {
                                                                                                  for (t = [], l = a(); l !== e; )
                                                                                                    t.push(l), l = a();
                                                                                                  if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                                    for (o = [], c = a(); c !== e; )
                                                                                                      o.push(c), c = a();
                                                                                                    if (c = _(), c !== e) {
                                                                                                      for (n = [], u = a(); u !== e; )
                                                                                                        n.push(u), u = a();
                                                                                                      h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Wn(c)) : (s = r, r = e);
                                                                                                    } else
                                                                                                      s = r, r = e;
                                                                                                  } else
                                                                                                    s = r, r = e;
                                                                                                } else
                                                                                                  s = r, r = e;
                                                                                                if (r === e) {
                                                                                                  if (r = s, h.substr(s, 9).toLowerCase() === zl ? (f = h.substr(s, 9), s += 9) : (f = e, p(to)), f !== e) {
                                                                                                    for (t = [], l = a(); l !== e; )
                                                                                                      t.push(l), l = a();
                                                                                                    if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                                      for (o = [], c = a(); c !== e; )
                                                                                                        o.push(c), c = a();
                                                                                                      if (c = _(), c !== e) {
                                                                                                        for (n = [], u = a(); u !== e; )
                                                                                                          n.push(u), u = a();
                                                                                                        h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Qn(c)) : (s = r, r = e);
                                                                                                      } else
                                                                                                        s = r, r = e;
                                                                                                    } else
                                                                                                      s = r, r = e;
                                                                                                  } else
                                                                                                    s = r, r = e;
                                                                                                  if (r === e) {
                                                                                                    if (r = s, h.substr(s, 9).toLowerCase() === Zl ? (f = h.substr(s, 9), s += 9) : (f = e, p(lo)), f !== e) {
                                                                                                      for (t = [], l = a(); l !== e; )
                                                                                                        t.push(l), l = a();
                                                                                                      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                                                                                                        for (o = [], c = a(); c !== e; )
                                                                                                          o.push(c), c = a();
                                                                                                        if (c = _(), c !== e) {
                                                                                                          for (n = [], u = a(); u !== e; )
                                                                                                            n.push(u), u = a();
                                                                                                          h.charCodeAt(s) === 41 ? (u = E, s++) : (u = e, p(P)), u !== e ? (d = r, r = Yn(c)) : (s = r, r = e);
                                                                                                        } else
                                                                                                          s = r, r = e;
                                                                                                      } else
                                                                                                        s = r, r = e;
                                                                                                    } else
                                                                                                      s = r, r = e;
                                                                                                    r === e && (r = jp(), r === e && (r = Vp(), r === e && (r = Wp())));
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
  function jp() {
    var r, f, t, l, o, c, n, u, g, w, $, A, m, L, R;
    if (r = s, h.substr(s, 5).toLowerCase() === Kl ? (f = h.substr(s, 5), s += 5) : (f = e, p(ao)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (c = _(), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (w = _(), w !== e) {
              for ($ = [], A = a(); A !== e; )
                $.push(A), A = a();
              if (A = s, h.charCodeAt(s) === 44 ? (m = D, s++) : (m = e, p(G)), m !== e) {
                for (L = [], R = a(); R !== e; )
                  L.push(R), R = a();
                R = _(), R !== e ? (m = [m, L, R], A = m) : (s = A, A = e);
              } else
                s = A, A = e;
              for (A === e && (A = null), m = [], L = a(); L !== e; )
                m.push(L), L = a();
              h.charCodeAt(s) === 41 ? (L = E, s++) : (L = e, p(P)), L !== e ? (d = r, r = zn(c, w, A)) : (s = r, r = e);
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
  function kp() {
    var r, f, t, l, o, c, n, u, g, w, $, A, m, L, R;
    if (r = s, h.substr(s, 6).toLowerCase() === Jl ? (f = h.substr(s, 6), s += 6) : (f = e, p(fo)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (c = _(), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (w = _(), w !== e) {
              for ($ = [], A = a(); A !== e; )
                $.push(A), A = a();
              if (A = s, h.charCodeAt(s) === 44 ? (m = D, s++) : (m = e, p(G)), m !== e) {
                for (L = [], R = a(); R !== e; )
                  L.push(R), R = a();
                R = _(), R !== e ? (m = [m, L, R], A = m) : (s = A, A = e);
              } else
                s = A, A = e;
              for (A === e && (A = null), m = [], L = a(); L !== e; )
                m.push(L), L = a();
              h.charCodeAt(s) === 41 ? (L = E, s++) : (L = e, p(P)), L !== e ? (d = r, r = Zn(c, w, A)) : (s = r, r = e);
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
    var r, f, t, l, o, c, n, u, g, w, $, A, m, L, R, O, M, ne, Br;
    if (r = s, h.substr(s, 7).toLowerCase() === ql ? (f = h.substr(s, 7), s += 7) : (f = e, p(oo)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        if (c = _(), c !== e) {
          for (n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (h.charCodeAt(s) === 44 ? (u = D, s++) : (u = e, p(G)), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (w = _(), w !== e) {
              for ($ = [], A = a(); A !== e; )
                $.push(A), A = a();
              if (h.charCodeAt(s) === 44 ? (A = D, s++) : (A = e, p(G)), A !== e) {
                for (m = [], L = a(); L !== e; )
                  m.push(L), L = a();
                if (L = _(), L !== e) {
                  for (R = [], O = a(); O !== e; )
                    R.push(O), O = a();
                  if (O = s, h.charCodeAt(s) === 44 ? (M = D, s++) : (M = e, p(G)), M !== e) {
                    for (ne = [], Br = a(); Br !== e; )
                      ne.push(Br), Br = a();
                    Br = _(), Br !== e ? (M = [M, ne, Br], O = M) : (s = O, O = e);
                  } else
                    s = O, O = e;
                  for (O === e && (O = null), M = [], ne = a(); ne !== e; )
                    M.push(ne), ne = a();
                  h.charCodeAt(s) === 41 ? (ne = E, s++) : (ne = e, p(P)), ne !== e ? (d = r, r = Kn(c, w, L, O)) : (s = r, r = e);
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
  function Vp() {
    var r, f, t, l;
    if (r = s, h.substr(s, 6).toLowerCase() === qr ? (f = h.substr(s, 6), s += 6) : (f = e, p(Pi)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = re(), l !== e ? (d = r, r = Jn(l)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Wp() {
    var r, f, t, l, o, c;
    if (r = s, h.substr(s, 3).toLowerCase() === Ws ? (f = h.substr(s, 3), s += 3) : (f = e, p(ar)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (h.substr(s, 6).toLowerCase() === qr ? (l = h.substr(s, 6), s += 6) : (l = e, p(Pi)), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        c = re(), c !== e ? (d = r, r = qn(c)) : (s = r, r = e);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function Qp() {
    var r, f, t, l, o, c, n, u, g, w, $, A, m, L, R, O, M;
    if (r = s, h.substr(s, 5).toLowerCase() === ea ? (f = h.substr(s, 5), s += 5) : (f = e, p(ho)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
        for (o = [], c = a(); c !== e; )
          o.push(c), c = a();
        for (h.substr(s, 8).toLowerCase() === S ? (c = h.substr(s, 8), s += 8) : (c = e, p(he)), c === e && (c = null), n = [], u = a(); u !== e; )
          n.push(u), u = a();
        if (h.charCodeAt(s) === 42 ? (u = ee, s++) : (u = e, p(se)), u === e && (u = _()), u !== e) {
          for (g = [], w = a(); w !== e; )
            g.push(w), w = a();
          if (h.charCodeAt(s) === 41 ? (w = E, s++) : (w = e, p(P)), w !== e) {
            for ($ = [], A = a(); A !== e; )
              $.push(A), A = a();
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
      if (r = s, h.substr(s, 3).toLowerCase() === sa ? (f = h.substr(s, 3), s += 3) : (f = e, p(co)), f !== e) {
        for (t = [], l = a(); l !== e; )
          t.push(l), l = a();
        if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
          for (o = [], c = a(); c !== e; )
            o.push(c), c = a();
          for (h.substr(s, 8).toLowerCase() === S ? (c = h.substr(s, 8), s += 8) : (c = e, p(he)), c === e && (c = null), n = [], u = a(); u !== e; )
            n.push(u), u = a();
          if (u = _(), u !== e) {
            for (g = [], w = a(); w !== e; )
              g.push(w), w = a();
            if (h.charCodeAt(s) === 41 ? (w = E, s++) : (w = e, p(P)), w !== e) {
              for ($ = [], A = a(); A !== e; )
                $.push(A), A = a();
              d = r, r = su(c, u);
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
      } else
        s = r, r = e;
      if (r === e) {
        if (r = s, h.substr(s, 3).toLowerCase() === ra ? (f = h.substr(s, 3), s += 3) : (f = e, p(no)), f !== e) {
          for (t = [], l = a(); l !== e; )
            t.push(l), l = a();
          if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
            for (o = [], c = a(); c !== e; )
              o.push(c), c = a();
            for (h.substr(s, 8).toLowerCase() === S ? (c = h.substr(s, 8), s += 8) : (c = e, p(he)), c === e && (c = null), n = [], u = a(); u !== e; )
              n.push(u), u = a();
            if (u = _(), u !== e) {
              for (g = [], w = a(); w !== e; )
                g.push(w), w = a();
              if (h.charCodeAt(s) === 41 ? (w = E, s++) : (w = e, p(P)), w !== e) {
                for ($ = [], A = a(); A !== e; )
                  $.push(A), A = a();
                d = r, r = ru(c, u);
              } else
                s = r, r = e;
            } else
              s = r, r = e;
          } else
            s = r, r = e;
        } else
          s = r, r = e;
        if (r === e) {
          if (r = s, h.substr(s, 3).toLowerCase() === ia ? (f = h.substr(s, 3), s += 3) : (f = e, p(uo)), f !== e) {
            for (t = [], l = a(); l !== e; )
              t.push(l), l = a();
            if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
              for (o = [], c = a(); c !== e; )
                o.push(c), c = a();
              for (h.substr(s, 8).toLowerCase() === S ? (c = h.substr(s, 8), s += 8) : (c = e, p(he)), c === e && (c = null), n = [], u = a(); u !== e; )
                n.push(u), u = a();
              if (u = _(), u !== e) {
                for (g = [], w = a(); w !== e; )
                  g.push(w), w = a();
                if (h.charCodeAt(s) === 41 ? (w = E, s++) : (w = e, p(P)), w !== e) {
                  for ($ = [], A = a(); A !== e; )
                    $.push(A), A = a();
                  d = r, r = iu(c, u);
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
            } else
              s = r, r = e;
          } else
            s = r, r = e;
          if (r === e) {
            if (r = s, h.substr(s, 3).toLowerCase() === ta ? (f = h.substr(s, 3), s += 3) : (f = e, p(po)), f !== e) {
              for (t = [], l = a(); l !== e; )
                t.push(l), l = a();
              if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                for (o = [], c = a(); c !== e; )
                  o.push(c), c = a();
                for (h.substr(s, 8).toLowerCase() === S ? (c = h.substr(s, 8), s += 8) : (c = e, p(he)), c === e && (c = null), n = [], u = a(); u !== e; )
                  n.push(u), u = a();
                if (u = _(), u !== e) {
                  for (g = [], w = a(); w !== e; )
                    g.push(w), w = a();
                  if (h.charCodeAt(s) === 41 ? (w = E, s++) : (w = e, p(P)), w !== e) {
                    for ($ = [], A = a(); A !== e; )
                      $.push(A), A = a();
                    d = r, r = tu(c, u);
                  } else
                    s = r, r = e;
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
            } else
              s = r, r = e;
            if (r === e) {
              if (r = s, h.substr(s, 6).toLowerCase() === la ? (f = h.substr(s, 6), s += 6) : (f = e, p(go)), f !== e) {
                for (t = [], l = a(); l !== e; )
                  t.push(l), l = a();
                if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                  for (o = [], c = a(); c !== e; )
                    o.push(c), c = a();
                  for (h.substr(s, 8).toLowerCase() === S ? (c = h.substr(s, 8), s += 8) : (c = e, p(he)), c === e && (c = null), n = [], u = a(); u !== e; )
                    n.push(u), u = a();
                  if (u = _(), u !== e) {
                    for (g = [], w = a(); w !== e; )
                      g.push(w), w = a();
                    if (h.charCodeAt(s) === 41 ? (w = E, s++) : (w = e, p(P)), w !== e) {
                      for ($ = [], A = a(); A !== e; )
                        $.push(A), A = a();
                      d = r, r = lu(c, u);
                    } else
                      s = r, r = e;
                  } else
                    s = r, r = e;
                } else
                  s = r, r = e;
              } else
                s = r, r = e;
              if (r === e)
                if (r = s, h.substr(s, 12).toLowerCase() === aa ? (f = h.substr(s, 12), s += 12) : (f = e, p(wo)), f !== e) {
                  for (t = [], l = a(); l !== e; )
                    t.push(l), l = a();
                  if (h.charCodeAt(s) === 40 ? (l = C, s++) : (l = e, p(y)), l !== e) {
                    for (o = [], c = a(); c !== e; )
                      o.push(c), c = a();
                    for (h.substr(s, 8).toLowerCase() === S ? (c = h.substr(s, 8), s += 8) : (c = e, p(he)), c === e && (c = null), n = [], u = a(); u !== e; )
                      n.push(u), u = a();
                    if (u = _(), u !== e) {
                      for (g = s, w = [], $ = a(); $ !== e; )
                        w.push($), $ = a();
                      if (h.charCodeAt(s) === 59 ? ($ = Pe, s++) : ($ = e, p(Le)), $ !== e) {
                        for (A = [], m = a(); m !== e; )
                          A.push(m), m = a();
                        if (h.substr(s, 9).toLowerCase() === fa ? (m = h.substr(s, 9), s += 9) : (m = e, p($o)), m !== e) {
                          for (L = [], R = a(); R !== e; )
                            L.push(R), R = a();
                          if (h.charCodeAt(s) === 61 ? (R = ts, s++) : (R = e, p(As)), R !== e) {
                            for (O = [], M = a(); M !== e; )
                              O.push(M), M = a();
                            M = $t(), M !== e ? (w = [w, $, A, m, L, R, O, M], g = w) : (s = g, g = e);
                          } else
                            s = g, g = e;
                        } else
                          s = g, g = e;
                      } else
                        s = g, g = e;
                      for (g === e && (g = null), w = [], $ = a(); $ !== e; )
                        w.push($), $ = a();
                      if (h.charCodeAt(s) === 41 ? ($ = E, s++) : ($ = e, p(P)), $ !== e) {
                        for (A = [], m = a(); m !== e; )
                          A.push(m), m = a();
                        d = r, r = au(c, u, g);
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
  function Yp() {
    var r, f, t, l;
    if (r = s, f = W(), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      l = nt(), l === e && (l = null), d = r, r = fu(f, l);
    } else
      s = r, r = e;
    return r;
  }
  function Tr() {
    var r, f, t, l, o;
    return r = s, f = $t(), f !== e ? (t = rg(), t === e && (t = s, h.substr(s, 2) === ei ? (l = ei, s += 2) : (l = e, p(vo)), l !== e ? (o = W(), o !== e ? (l = [l, o], t = l) : (s = t, t = e)) : (s = t, t = e)), t === e && (t = null), d = r, r = ou(f, t)) : (s = r, r = e), r;
  }
  function Lr() {
    var r;
    return r = zp(), r === e && (r = Rr(), r === e && (r = Ir())), r;
  }
  function zp() {
    var r;
    return r = Fr(), r === e && (r = xr(), r === e && (r = We())), r;
  }
  function Rr() {
    var r;
    return r = lg(), r === e && (r = tg(), r === e && (r = ig())), r;
  }
  function Ir() {
    var r;
    return r = og(), r === e && (r = fg(), r === e && (r = ag())), r;
  }
  function Sr() {
    var r, f;
    return r = s, h.substr(s, 4).toLowerCase() === oa ? (f = h.substr(s, 4), s += 4) : (f = e, p(bo)), f !== e && (d = r, f = hu()), r = f, r === e && (r = s, h.substr(s, 5).toLowerCase() === ha ? (f = h.substr(s, 5), s += 5) : (f = e, p(Ao)), f !== e && (d = r, f = cu()), r = f), r;
  }
  function $t() {
    var r;
    return r = ng(), r === e && (r = ug(), r === e && (r = hg(), r === e && (r = cg()))), r;
  }
  function W() {
    var r, f;
    return r = s, f = Or(), f !== e && (d = r, f = nu(f)), r = f, r === e && (r = s, f = Zp(), f !== e && (d = r, f = uu(f)), r = f), r;
  }
  function Zp() {
    var r, f;
    return r = s, f = Jp(), f !== e && (d = r, f = pu(f)), r = f, r === e && (r = s, f = Nr(), f !== e && (d = r, f = gu(f)), r = f), r;
  }
  function Kp() {
    var r, f;
    return r = s, f = qp(), f !== e && (d = r, f = wu(f)), r = f, r === e && (r = s, f = gg(), f !== e && (d = r, f = du()), r = f), r;
  }
  function Or() {
    var r, f, t, l;
    if (r = s, h.charCodeAt(s) === 60 ? (f = Xs, s++) : (f = e, p(tr)), f !== e) {
      for (t = [], fi.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Ti)); l !== e; )
        t.push(l), fi.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Ti));
      h.charCodeAt(s) === 62 ? (l = Vs, s++) : (l = e, p(lr)), l !== e ? (d = r, r = $u(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Nr() {
    var r, f, t;
    return r = s, f = wg(), f === e && (f = null), h.charCodeAt(s) === 58 ? (t = Te, s++) : (t = e, p(Re)), t !== e ? (d = r, r = vu(f)) : (s = r, r = e), r;
  }
  function Jp() {
    var r, f, t;
    return r = s, f = Nr(), f !== e ? (t = dg(), t !== e ? (d = r, r = bu(f, t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function qp() {
    var r, f, t, l, o, c, n;
    if (r = s, h.substr(s, 2) === si ? (f = si, s += 2) : (f = e, p(Co)), f !== e)
      if (t = De(), t === e && (B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H))), t !== e) {
        for (l = [], o = q(), o === e && (o = s, h.charCodeAt(s) === 46 ? (c = X, s++) : (c = e, p(V)), c !== e ? (n = q(), n !== e ? (c = [c, n], o = c) : (s = o, o = e)) : (s = o, o = e)); o !== e; )
          l.push(o), o = q(), o === e && (o = s, h.charCodeAt(s) === 46 ? (c = X, s++) : (c = e, p(V)), c !== e ? (n = q(), n !== e ? (c = [c, n], o = c) : (s = o, o = e)) : (s = o, o = e));
        d = r, r = Au();
      } else
        s = r, r = e;
    else
      s = r, r = e;
    return r;
  }
  function eg() {
    var r, f, t;
    return r = s, h.charCodeAt(s) === 63 ? (f = Hs, s++) : (f = e, p(er)), f !== e ? (t = At(), t !== e ? (d = r, r = Cu(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function sg() {
    var r, f, t;
    return r = s, h.charCodeAt(s) === 36 ? (f = ri, s++) : (f = e, p(Li)), f !== e ? (t = At(), t !== e ? (d = r, r = _u(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function rg() {
    var r, f, t, l, o, c, n, u;
    if (r = s, h.charCodeAt(s) === 64 ? (f = ii, s++) : (f = e, p(Ri)), f !== e) {
      if (t = [], oi.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Ii)), l !== e)
        for (; l !== e; )
          t.push(l), oi.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Ii));
      else
        t = e;
      if (t !== e) {
        if (l = [], o = s, h.charCodeAt(s) === 45 ? (c = ie, s++) : (c = e, p(te)), c !== e) {
          if (n = [], gs.test(h.charAt(s)) ? (u = h.charAt(s), s++) : (u = e, p(_s)), u !== e)
            for (; u !== e; )
              n.push(u), gs.test(h.charAt(s)) ? (u = h.charAt(s), s++) : (u = e, p(_s));
          else
            n = e;
          n !== e ? (c = [c, n], o = c) : (s = o, o = e);
        } else
          s = o, o = e;
        for (; o !== e; )
          if (l.push(o), o = s, h.charCodeAt(s) === 45 ? (c = ie, s++) : (c = e, p(te)), c !== e) {
            if (n = [], gs.test(h.charAt(s)) ? (u = h.charAt(s), s++) : (u = e, p(_s)), u !== e)
              for (; u !== e; )
                n.push(u), gs.test(h.charAt(s)) ? (u = h.charAt(s), s++) : (u = e, p(_s));
            else
              n = e;
            n !== e ? (c = [c, n], o = c) : (s = o, o = e);
          } else
            s = o, o = e;
        d = r, r = mu(t, l);
      } else
        s = r, r = e;
    } else
      s = r, r = e;
    return r;
  }
  function We() {
    var r, f, t;
    if (r = s, f = [], B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H)), t !== e)
      for (; t !== e; )
        f.push(t), B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H));
    else
      f = e;
    return f !== e && (d = r, f = Eu()), r = f, r;
  }
  function xr() {
    var r, f, t, l, o;
    for (r = s, f = [], B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H)); t !== e; )
      f.push(t), B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H));
    if (h.charCodeAt(s) === 46 ? (t = X, s++) : (t = e, p(V)), t !== e) {
      if (l = [], B.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(H)), o !== e)
        for (; o !== e; )
          l.push(o), B.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(H));
      else
        l = e;
      l !== e ? (d = r, r = yu()) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function Fr() {
    var r, f, t, l, o;
    if (r = s, f = [], B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H)), t !== e)
      for (; t !== e; )
        f.push(t), B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H));
    else
      f = e;
    if (f !== e)
      if (h.charCodeAt(s) === 46 ? (t = X, s++) : (t = e, p(V)), t !== e) {
        for (l = [], B.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(H)); o !== e; )
          l.push(o), B.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(H));
        o = Dr(), o !== e ? (d = r, r = Pu()) : (s = r, r = e);
      } else
        s = r, r = e;
    else
      s = r, r = e;
    if (r === e) {
      if (r = s, h.charCodeAt(s) === 46 ? (f = X, s++) : (f = e, p(V)), f !== e) {
        if (t = [], B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H)), l !== e)
          for (; l !== e; )
            t.push(l), B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H));
        else
          t = e;
        t !== e ? (l = Dr(), l !== e ? (d = r, r = Tu()) : (s = r, r = e)) : (s = r, r = e);
      } else
        s = r, r = e;
      if (r === e) {
        if (r = s, f = [], B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H)), t !== e)
          for (; t !== e; )
            f.push(t), B.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(H));
        else
          f = e;
        f !== e ? (t = Dr(), t !== e ? (d = r, r = Lu()) : (s = r, r = e)) : (s = r, r = e);
      }
    }
    return r;
  }
  function ig() {
    var r, f, t;
    return r = s, h.charCodeAt(s) === 43 ? (f = $e, s++) : (f = e, p(Ce)), f !== e ? (t = We(), t !== e ? (d = r, r = Ru(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function tg() {
    var r, f, t;
    return r = s, h.charCodeAt(s) === 43 ? (f = $e, s++) : (f = e, p(Ce)), f !== e ? (t = xr(), t !== e ? (d = r, r = Iu(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function lg() {
    var r, f, t;
    return r = s, h.charCodeAt(s) === 43 ? (f = $e, s++) : (f = e, p(Ce)), f !== e ? (t = Fr(), t !== e ? (d = r, r = Su(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function ag() {
    var r, f, t;
    return r = s, h.charCodeAt(s) === 45 ? (f = ie, s++) : (f = e, p(te)), f !== e ? (t = We(), t !== e ? (d = r, r = Ou(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function fg() {
    var r, f, t;
    return r = s, h.charCodeAt(s) === 45 ? (f = ie, s++) : (f = e, p(te)), f !== e ? (t = xr(), t !== e ? (d = r, r = Nu(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function og() {
    var r, f, t;
    return r = s, h.charCodeAt(s) === 45 ? (f = ie, s++) : (f = e, p(te)), f !== e ? (t = Fr(), t !== e ? (d = r, r = xu(t)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function Dr() {
    var r, f, t, l, o;
    if (r = s, ua.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(_o)), f !== e) {
      if (pa.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(mo)), t === e && (t = null), l = [], B.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(H)), o !== e)
        for (; o !== e; )
          l.push(o), B.test(h.charAt(s)) ? (o = h.charAt(s), s++) : (o = e, p(H));
      else
        l = e;
      l !== e ? (f = [f, t, l], r = f) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function hg() {
    var r, f, t, l;
    if (r = s, h.charCodeAt(s) === 39 ? (f = He, s++) : (f = e, p(Me)), f !== e) {
      for (t = [], hi.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Si)), l === e && (l = _e()); l !== e; )
        t.push(l), hi.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Si)), l === e && (l = _e());
      h.charCodeAt(s) === 39 ? (l = He, s++) : (l = e, p(Me)), l !== e ? (d = r, r = Fu(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function cg() {
    var r, f, t, l;
    if (r = s, h.charCodeAt(s) === 34 ? (f = hs, s++) : (f = e, p(ms)), f !== e) {
      for (t = [], ci.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Oi)), l === e && (l = _e()); l !== e; )
        t.push(l), ci.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(Oi)), l === e && (l = _e());
      h.charCodeAt(s) === 34 ? (l = hs, s++) : (l = e, p(ms)), l !== e ? (d = r, r = Du(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function ng() {
    var r, f, t, l, o, c;
    if (r = s, h.substr(s, 3) === cs ? (f = cs, s += 3) : (f = e, p(Ni)), f !== e) {
      for (t = [], l = s, h.substr(s, 2) === ns ? (o = ns, s += 2) : (o = e, p(xi)), o === e && (h.charCodeAt(s) === 39 ? (o = He, s++) : (o = e, p(Me))), o === e && (o = null), ni.test(h.charAt(s)) ? (c = h.charAt(s), s++) : (c = e, p(Fi)), c === e && (c = _e()), c !== e ? (o = [o, c], l = o) : (s = l, l = e); l !== e; )
        t.push(l), l = s, h.substr(s, 2) === ns ? (o = ns, s += 2) : (o = e, p(xi)), o === e && (h.charCodeAt(s) === 39 ? (o = He, s++) : (o = e, p(Me))), o === e && (o = null), ni.test(h.charAt(s)) ? (c = h.charAt(s), s++) : (c = e, p(Fi)), c === e && (c = _e()), c !== e ? (o = [o, c], l = o) : (s = l, l = e);
      h.substr(s, 3) === cs ? (l = cs, s += 3) : (l = e, p(Ni)), l !== e ? (d = r, r = Gu(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function ug() {
    var r, f, t, l, o, c;
    if (r = s, h.substr(s, 3) === us ? (f = us, s += 3) : (f = e, p(Di)), f !== e) {
      for (t = [], l = s, h.substr(s, 2) === ps ? (o = ps, s += 2) : (o = e, p(Gi)), o === e && (h.charCodeAt(s) === 34 ? (o = hs, s++) : (o = e, p(ms))), o === e && (o = null), ui.test(h.charAt(s)) ? (c = h.charAt(s), s++) : (c = e, p(Ui)), c === e && (c = _e()), c !== e ? (o = [o, c], l = o) : (s = l, l = e); l !== e; )
        t.push(l), l = s, h.substr(s, 2) === ps ? (o = ps, s += 2) : (o = e, p(Gi)), o === e && (h.charCodeAt(s) === 34 ? (o = hs, s++) : (o = e, p(ms))), o === e && (o = null), ui.test(h.charAt(s)) ? (c = h.charAt(s), s++) : (c = e, p(Ui)), c === e && (c = _e()), c !== e ? (o = [o, c], l = o) : (s = l, l = e);
      h.substr(s, 3) === us ? (l = us, s += 3) : (l = e, p(Di)), l !== e ? (d = r, r = Uu(t)) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function _e() {
    var r, f, t;
    return r = s, h.charCodeAt(s) === 92 ? (f = ti, s++) : (f = e, p(Bi)), f !== e ? (ga.test(h.charAt(s)) ? (t = h.charAt(s), s++) : (t = e, p(Eo)), t !== e ? (d = r, r = Bu()) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function me() {
    var r, f, t, l;
    if (r = s, h.charCodeAt(s) === 40 ? (f = C, s++) : (f = e, p(y)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      h.charCodeAt(s) === 41 ? (l = E, s++) : (l = e, p(P)), l !== e ? (f = [f, t, l], r = f) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function a() {
    var r;
    return r = pg(), r === e && (r = Gr(), r === e && (r = Ur())), r;
  }
  function Gr() {
    var r;
    return wa.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(yo)), r;
  }
  function Ur() {
    var r;
    return da.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Po)), r;
  }
  function Os() {
    var r;
    return $a.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(To)), r;
  }
  function vt() {
    var r, f, t, l;
    if (r = s, h.charCodeAt(s) === 35 ? (f = Qs, s++) : (f = e, p(fr)), f !== e) {
      for (t = [], l = Os(); l !== e; )
        t.push(l), l = Os();
      l = Ur(), l !== e ? (d = r, r = Hu()) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function pg() {
    var r, f, t, l, o;
    for (r = s, Ur(), f = [], t = Gr(); t !== e; )
      f.push(t), t = Gr();
    if (h.charCodeAt(s) === 35 ? (t = Qs, s++) : (t = e, p(fr)), t !== e) {
      for (l = [], o = Os(); o !== e; )
        l.push(o), o = Os();
      d = r, r = Mu();
    } else
      s = r, r = e;
    return r;
  }
  function gg() {
    var r, f, t, l;
    if (r = s, h.charCodeAt(s) === 91 ? (f = js, s++) : (f = e, p(rr)), f !== e) {
      for (t = [], l = a(); l !== e; )
        t.push(l), l = a();
      h.charCodeAt(s) === 93 ? (l = ks, s++) : (l = e, p(ir)), l !== e ? (f = [f, t, l], r = f) : (s = r, r = e);
    } else
      s = r, r = e;
    return r;
  }
  function bt() {
    var r;
    return va.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Lo)), r === e && (ba.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Ro)), r === e && (Aa.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Io)), r === e && (Ca.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(So)), r === e && (_a.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Oo)), r === e && (ma.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(No)), r === e && (Ea.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(xo)), r === e && (ya.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Fo)), r === e && (Pa.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Do)), r === e && (Ta.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Go)), r === e && (La.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Uo)), r === e && (Ra.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Bo)), r === e && (Ia.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Ho)))))))))))))), r;
  }
  function De() {
    var r;
    return r = bt(), r === e && (h.charCodeAt(s) === 95 ? (r = li, s++) : (r = e, p(Hi))), r;
  }
  function At() {
    var r, f, t, l;
    if (r = s, f = De(), f === e && (B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H))), f !== e) {
      for (t = [], l = De(), l === e && (B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H)), l === e && (Ys.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(or)), l === e && (zs.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(hr)), l === e && (Zs.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(cr)))))); l !== e; )
        t.push(l), l = De(), l === e && (B.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(H)), l === e && (Ys.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(or)), l === e && (zs.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(hr)), l === e && (Zs.test(h.charAt(s)) ? (l = h.charAt(s), s++) : (l = e, p(cr))))));
      d = r, r = ju();
    } else
      s = r, r = e;
    return r;
  }
  function q() {
    var r;
    return r = De(), r === e && (h.charCodeAt(s) === 45 ? (r = ie, s++) : (r = e, p(te)), r === e && (B.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(H)), r === e && (Ys.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(or)), r === e && (zs.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(hr)), r === e && (Zs.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(cr))))))), r;
  }
  function wg() {
    var r, f, t, l, o, c;
    if (r = s, f = bt(), f !== e) {
      for (t = [], l = q(), l === e && (l = s, h.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e ? (c = q(), c !== e ? (o = [o, c], l = o) : (s = l, l = e)) : (s = l, l = e)); l !== e; )
        t.push(l), l = q(), l === e && (l = s, h.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e ? (c = q(), c !== e ? (o = [o, c], l = o) : (s = l, l = e)) : (s = l, l = e));
      d = r, r = ku();
    } else
      s = r, r = e;
    return r;
  }
  function dg() {
    var r, f, t, l, o, c;
    if (r = s, f = De(), f === e && (h.charCodeAt(s) === 58 ? (f = Te, s++) : (f = e, p(Re)), f === e && (B.test(h.charAt(s)) ? (f = h.charAt(s), s++) : (f = e, p(H)), f === e && (f = Qe()))), f !== e) {
      for (t = [], l = q(), l === e && (h.charCodeAt(s) === 58 ? (l = Te, s++) : (l = e, p(Re)), l === e && (l = Qe())), l === e && (l = s, h.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e ? (c = q(), c === e && (h.charCodeAt(s) === 58 ? (c = Te, s++) : (c = e, p(Re)), c === e && (c = Qe())), c !== e ? (o = [o, c], l = o) : (s = l, l = e)) : (s = l, l = e)); l !== e; )
        t.push(l), l = q(), l === e && (h.charCodeAt(s) === 58 ? (l = Te, s++) : (l = e, p(Re)), l === e && (l = Qe())), l === e && (l = s, h.charCodeAt(s) === 46 ? (o = X, s++) : (o = e, p(V)), o !== e ? (c = q(), c === e && (h.charCodeAt(s) === 58 ? (c = Te, s++) : (c = e, p(Re)), c === e && (c = Qe())), c !== e ? (o = [o, c], l = o) : (s = l, l = e)) : (s = l, l = e));
      d = r, r = Xu();
    } else
      s = r, r = e;
    return r;
  }
  function Qe() {
    var r;
    return r = $g(), r === e && (r = vg()), r;
  }
  function $g() {
    var r, f, t, l;
    return r = s, h.charCodeAt(s) === 37 ? (f = ai, s++) : (f = e, p(Mi)), f !== e ? (t = Ct(), t !== e ? (l = Ct(), l !== e ? (f = [f, t, l], r = f) : (s = r, r = e)) : (s = r, r = e)) : (s = r, r = e), r;
  }
  function Ct() {
    var r;
    return B.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(H)), r === e && (Sa.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(Mo)), r === e && (Oa.test(h.charAt(s)) ? (r = h.charAt(s), s++) : (r = e, p(jo)))), r;
  }
  function vg() {
    var r, f, t;
    return r = s, h.charCodeAt(s) === 92 ? (f = ti, s++) : (f = e, p(Bi)), f !== e ? (h.charCodeAt(s) === 95 ? (t = li, s++) : (t = e, p(Hi)), t === e && (h.charCodeAt(s) === 126 ? (t = ca, s++) : (t = e, p(ko)), t === e && (h.charCodeAt(s) === 46 ? (t = X, s++) : (t = e, p(V)), t === e && (h.charCodeAt(s) === 45 ? (t = ie, s++) : (t = e, p(te)), t === e && (h.charCodeAt(s) === 33 ? (t = Ms, s++) : (t = e, p(sr)), t === e && (h.charCodeAt(s) === 36 ? (t = ri, s++) : (t = e, p(Li)), t === e && (h.charCodeAt(s) === 38 ? (t = na, s++) : (t = e, p(Xo)), t === e && (h.charCodeAt(s) === 39 ? (t = He, s++) : (t = e, p(Me)), t === e && (h.charCodeAt(s) === 40 ? (t = C, s++) : (t = e, p(y)), t === e && (h.charCodeAt(s) === 41 ? (t = E, s++) : (t = e, p(P)), t === e && (h.charCodeAt(s) === 42 ? (t = ee, s++) : (t = e, p(se)), t === e && (h.charCodeAt(s) === 43 ? (t = $e, s++) : (t = e, p(Ce)), t === e && (h.charCodeAt(s) === 44 ? (t = D, s++) : (t = e, p(G)), t === e && (h.charCodeAt(s) === 59 ? (t = Pe, s++) : (t = e, p(Le)), t === e && (h.charCodeAt(s) === 58 ? (t = Te, s++) : (t = e, p(Re)), t === e && (h.charCodeAt(s) === 61 ? (t = ts, s++) : (t = e, p(As)), t === e && (h.charCodeAt(s) === 47 ? (t = oe, s++) : (t = e, p(ce)), t === e && (h.charCodeAt(s) === 63 ? (t = Hs, s++) : (t = e, p(er)), t === e && (h.charCodeAt(s) === 35 ? (t = Qs, s++) : (t = e, p(fr)), t === e && (h.charCodeAt(s) === 64 ? (t = ii, s++) : (t = e, p(Ri)), t === e && (h.charCodeAt(s) === 37 ? (t = ai, s++) : (t = e, p(Mi)))))))))))))))))))))), t !== e ? (f = [f, t], r = f) : (s = r, r = e)) : (s = r, r = e), r;
  }
  let _t = {};
  function i(r, f) {
    return !!(r.type === "Var" && r.varType === f.varType && r.varname === f.varname || r.iriref && r.iriref === f.iriref || r.type === "PrefixedName" && r.pn_prefix === f.pn_prefix && r.pn_local === f.pn_local);
  }
  if (ys = K(), ys !== e && s === h.length)
    return ys;
  throw ys !== e && s < h.length && p(Vu()), Wu(
    nr,
    le < h.length ? h.charAt(le) : null,
    le < h.length ? ur(le, le + 1) : ur(le, le)
  );
}
let xs, Ds, Ke, Tg = "  ", Et = 0;
function _g(h, b = 2) {
  if (Tg = " ".repeat(b), xs = [], Ds = h.comments, Ke = "", h.headers && U(h.headers.join("")), h.prologue?.decl.length && (h.prologue.decl.forEach((e) => {
    e.type === "BaseDecl" ? U(`BASE <${e.iriref}>`) : U(`PREFIX ${e.pn_prefix || ""}: <${e.iriref}>`);
  }), U("")), h.selectQuery)
    _1(h.selectQuery);
  else if (h.constructQuery)
    m1(h.constructQuery);
  else if (h.askQuery)
    v1(h.askQuery);
  else if (h.describeQuery)
    b1(h.describeQuery);
  else if (h.update)
    for (let e = 0; e < h.update.length; e++)
      e > 0 && (xs[xs.length - 1] += ` ;
`), A1(h.update[e]);
  for (h.values && Rg(h.values); Ds && Ds.length; )
    xs[xs.length - 1] += Ds.shift().text;
  return xs.join(`
`);
}
const Ue = (h = 1) => {
  Ke += Tg.repeat(h);
}, Be = (h = 1) => {
  Ke = Ke.substr(0, Ke.length - Tg.length * h);
}, U = (h) => {
  xs.push(Ke + h);
}, Y = (h, b) => {
  for (; Ds && Ds.length && Ds[0].pos < b; )
    xs[xs.length - 1] += Ds.shift().text;
  U(h);
}, v1 = (h) => {
  U("ASK {");
  const b = Ie(h.where);
  Y("}", b + 1), mt(h);
}, b1 = (h) => {
  const b = h.describe.map(j).join(" ");
  if (U(`DESCRIBE ${b}`), Lg(h.from), h.where) {
    U("WHERE {");
    const e = Ie(h.where);
    Y("}", e + 1);
  }
  mt(h);
}, A1 = (h) => {
  if (h.type === "insertdata")
    U("INSERT DATA {"), Ue(), Fs(h.insert), Be(), U("}");
  else if (h.type === "deletedata")
    U("DELETE DATA {"), Ue(), Fs(h.delete), Be(), U("}");
  else if (h.type === "deletewhere")
    U("DELETE WHERE {"), Ue(), Fs(h.delete), Be(), U("}");
  else if (h.type === "modify") {
    h.with && U(`WITH ${j(h.with)}`), h.delete && (U("DELETE {"), Ue(), Fs(h.delete), Be(), U("}")), h.insert && (U("INSERT {"), Ue(), Fs(h.insert), Be(), U("}")), h.using && h.using.forEach((e) => {
      U(`USING ${C1(e)}`);
    }), U("WHERE {");
    const b = Ie(h.where);
    Y("}", b + 1);
  } else if (h.type === "add") {
    const b = Mr(h.graphs[0]), e = Mr(h.graphs[1]);
    let T = " ";
    h.silent && (T = " SILENT "), U(`ADD${T}${b} TO ${e}`);
  } else if (h.type === "move") {
    const b = Mr(h.graphs[0]), e = Mr(h.graphs[1]);
    let T = " ";
    h.silent && (T = " SILENT "), U(`MOVE${T}${b} TO ${e}`);
  } else if (h.type === "copy") {
    const b = Mr(h.graphs[0]), e = Mr(h.graphs[1]);
    let T = " ";
    h.silent && (T = " SILENT "), U(`COPY${T}${b} TO ${e}`);
  } else if (h.type === "load") {
    let b = " ";
    h.silent && (b = " SILENT "), U(`LOAD${b}${Ge(h.sourceGraph)}`);
  } else if (h.type === "clear") {
    let b = " ";
    h.silent && (b = " SILENT "), U(`CLEAR${b}${xg(h.destinyGraph)}`);
  } else if (h.type === "drop") {
    let b = " ";
    h.silent && (b = " SILENT "), U(`DROP${b}${xg(h.destinyGraph)}`);
  } else if (h.type === "create") {
    let b = " ";
    h.silent && (b = " SILENT "), U(`CREATE${b}GRAPH ${Ge(h.destinyGraph)}`);
  }
}, C1 = (h) => h.named ? `NAMED ${Ge(h.iri)}` : Ge(h.iri), Mr = (h) => h === "default" ? "DEFAULT" : Ge(h), xg = (h) => h === "default" ? "DEFAULT" : h === "named" ? "NAMED" : h === "all" ? "ALL" : `GRAPH ${Ge(h)}`, Ie = (h, b = 0) => (Ue(), h.type === "SubSelect" ? (mg(h), b = h.location.end.offset) : h.graphPattern ? h.graphPattern.forEach((e) => {
  Fg(e), b = e.location.end.offset;
}) : h.forEach((e) => {
  Fg(e), b = e.location.end.offset;
}), Be(), b), _1 = (h) => {
  const b = h.selectClause.location.start.offset;
  Y(Bg(h.selectClause), b);
  let e = h.selectClause.location.end.offset;
  const T = Lg(h.selectClause.from);
  T > e && (e = T), Y("WHERE {", e + 1), e = Ie(h.whereClause, e), Y("}", e + 1), mt(h);
}, mg = (h) => {
  const b = h.selectClause.location.start.offset;
  let e = h.selectClause.location.end.offset;
  Y(Bg(h.selectClause), b), Y("WHERE {", e + 1), e = Ie(h.whereClause, e), Y("}", e + 1), h.values && Rg(h.values), mt(h);
}, Lg = (h) => {
  if (h) {
    let b;
    return h.forEach((e) => {
      e.graph ? b = E1(e.graph) : e.namedGraph && (b = y1(e.namedGraph));
    }), b;
  }
}, mt = (h) => {
  h.group && U(P1(h.group)), h.having && U(`HAVING ${Q(h.having[0])}`), h.orderBy && U("ORDER BY " + T1(h.orderBy)), h.limitOffset?.forEach((b) => {
    b.limit ? U(`LIMIT ${b.limit}`) : b.offset && U(`OFFSET ${b.offset}`);
  });
}, m1 = (h) => {
  h.template ? (Y("CONSTRUCT {", h.location.start.offset), Ue(), Fs(h.template.triplePattern), Be(), U("}")) : U("CONSTRUCT"), Lg(h.from), U("WHERE {");
  const b = Ie(h.where);
  Y("}", b + 1), mt(h);
}, E1 = (h) => {
  const b = Ge(h);
  if (b != null) {
    const e = h.location.start.offset, T = h.location.end.offset;
    return Y("FROM " + b, e), T;
  }
}, y1 = (h) => {
  const b = Ge(h);
  if (b != null) {
    const e = h.location.start.offset, T = h.location.end.offset;
    return Y("FROM NAMED " + b, e), T;
  }
}, Fg = (h) => {
  if (Et = h.location.start.offset, h.type === "SubSelect") {
    U("{"), Ue(), mg(h), Be(), U("}");
    return;
  }
  if (h.graphPattern && h.graph) {
    Y(`GRAPH ${j(h.graph)} {`, Et);
    const b = Ie(h);
    Y("}", b + 1);
    return;
  }
  if (h.graphPattern) {
    U("{");
    const b = Ie(h);
    Y("}", b + 1);
    return;
  }
  if (h.data) {
    Rg(h);
    return;
  }
  if (h.triplePattern) {
    Fs(h.triplePattern);
    return;
  }
  if (h.union) {
    for (let b = 0; b < h.union.length; b++)
      b > 0 && U("UNION"), U("{"), Ie(h.union[b]), Y("}", h.union[b].location.end.offset + 2);
    return;
  }
  if (h.optional) {
    Y("OPTIONAL {", Et);
    const b = Ie(h.optional);
    Y("}", b + 1);
    return;
  }
  if (h.minus) {
    Y("MINUS {", Et);
    const b = Ie(h.minus);
    Y("}", b + 1);
    return;
  }
  if (h.filter) {
    R1(h);
    return;
  }
  if (h.bind) {
    U(`BIND (${Q(h.bind)} AS ${Hr(h.as)})`);
    return;
  }
  if (h.type === "ServiceGraphPattern") {
    let b = " ";
    h.silent && (b = " SILENT "), U(`SERVICE${b}${j(h.service)} {`), h.pattern.type === "SubSelect" ? (Ue(), mg(h.pattern), Be()) : Ie(h.pattern), U("}");
    return;
  }
  if (h.functionRef) {
    const b = h.args.map(Q).join(", ");
    U(Ge(h.functionRef) + `(${b})`);
  }
}, P1 = (h) => {
  let b = ["GROUP BY"], e = 0;
  return h.forEach((T) => {
    b[e].length > 80 ? (e++, b[e] = "  ") : b[e] += " ", b[e] += j(T);
  }), b.join(`
`);
}, T1 = (h) => {
  let b = [];
  return h.forEach((e) => {
    let T;
    e.type === "Var" ? T = Hr(e) : T = Q(e), e.asc ? b.push(`ASC${T}`) : e.desc ? b.push(`DESC${T}`) : b.push(T);
  }), b.join(" ");
}, Bg = (h) => {
  let b = [];
  b[0] = "SELECT", h.distinct && (b[0] += " DISTINCT"), h.reduced && (b[0] += " REDUCED");
  let e = 0;
  return h.var.forEach((T) => {
    b[e].length > 80 ? (e++, b[e] = "  ") : b[e] += " ", b[e] += L1(T);
  }), b.join(`
`);
}, L1 = (h) => {
  if (h.varname)
    return Hr(h);
  if (h.as)
    return `(${Q(h.expression)} AS ${Hr(h.as)})`;
  if (h === "*")
    return "*";
}, R1 = (h) => {
  if (h.filter.notexists) {
    U("FILTER NOT EXISTS {");
    const b = Ie(h.filter.notexists);
    Y("}", b + 1);
  } else if (h.filter.exists) {
    U("FILTER EXISTS {");
    const b = Ie(h.filter.exists);
    Y("}", b + 1);
  } else
    Y(`FILTER ${Q(h.filter)}`, h.location.start.offset);
}, Fs = (h) => {
  h.forEach((b) => {
    b.graph ? (Y(`GRAPH ${j(b.graph)} {`, b.graph.location.start.offset), Ue(), Fs(b.triplePattern), Be(), U("}")) : b.triplePattern ? Fs(b.triplePattern) : b.properties ? I1(b) : Y(`[${N1(b.subject.blankNodeProperties)}] .`, b.subject.location.start.offset);
  });
}, I1 = (h) => {
  const b = j(h.subject);
  let e, T;
  h.properties.forEach((x) => {
    e ? (Y(`${e} ;`, T), e = " ".repeat(b.length) + ` ${j(x.predicate)} ${j(x.objects)}`, x.predicate.location ? T = x.predicate.location.start.offset : T = x.predicate.value.location.start.offset) : (e = `${b} ${j(x.predicate)} ${j(x.objects)}`, T = h.subject.location.start.offset);
  }), Y(`${e} .`, T);
}, Tt = (h) => {
  let b = "";
  return h.forEach((e) => {
    b && (b += " "), e.graph ? (b += `GRAPH ${j(e.graph)} { `, b += Tt(e.triplePattern), b += " }") : e.triplePattern ? b += Tt(e.triplePattern) : (b += S1(e), (h.length > 1 || e.properties.length > 1) && (b += " ."));
  }), b;
}, S1 = (h) => {
  const b = j(h.subject);
  let e;
  return h.properties.forEach((T) => {
    e ? e += ` ; ${j(T.predicate)} ${j(T.objects)}` : e = `${b} ${j(T.predicate)} ${j(T.objects)}`;
  }), e;
}, O1 = (h, b) => {
  if (h.length === 1 && !b) {
    const x = h[0];
    return ` ${j(x.predicate)} ${j(x.objects)}`;
  }
  Ue();
  let e = "";
  const T = Ke + " ".repeat(2);
  return h.forEach((x) => {
    e ? (e += ` ;
`, e += `${T} ${j(x.predicate)} ${j(x.objects, !0)}`) : (e += `
${T}`, e += ` ${j(x.predicate)} ${j(x.objects, !0)}`);
  }), e += `
${Ke}`, Be(), e;
}, N1 = (h) => {
  if (h.length === 1) {
    const T = h[0];
    return ` ${j(T.predicate)} ${j(T.objects)} `;
  }
  let b = "";
  const e = Ke + " ".repeat(2);
  return h.forEach((T) => {
    b ? (b += ` ;
`, b += `${e}${j(T.predicate)} ${j(T.objects, !0)}`) : (b += `
${e}`, b += `${j(T.predicate)} ${j(T.objects, !0)}`);
  }), b += `
${Ke}`, b;
}, x1 = (h) => {
  let b = h.distinct ? "DISTINCT " : "";
  if (h.aggregateType === "count") {
    let e;
    return h.expression === "*" ? e = "*" : e = Q(h.expression), `COUNT(${b}${e})`;
  } else {
    if (h.aggregateType === "sum")
      return `sum(${b}${Q(h.expression)})`;
    if (h.aggregateType === "min")
      return `MIN(${b}${Q(h.expression)})`;
    if (h.aggregateType === "max")
      return `MAX(${b}${Q(h.expression)})`;
    if (h.aggregateType === "avg")
      return `AVG(${b}${Q(h.expression)})`;
    if (h.aggregateType === "sample")
      return `SAMPLE(${b}${Q(h.expression)})`;
    if (h.aggregateType === "group_concat") {
      let e = "";
      return h.separator && (e = `; SEPARATOR = ${Hg(h.separator)}`), `GROUP_CONCAT(${b}${Q(h.expression)}${e})`;
    }
  }
}, Q = (h) => {
  if (h.functionRef)
    return Ge(h.functionRef) + "(" + h.args.map(Q).join(", ") + ")";
  if (h.exists)
    return `EXISTS { ${Tt(h.exists)} }`;
  if (h.notexists)
    return `NOT EXISTS { ${Tt(h.notexists)} }`;
  switch (h.expressionType) {
    case "atomic":
      return Ze(j(h.value), h.bracketted);
    case "irireforfunction":
      let b = Ge(h.iriref);
      return h.args && (b += "(" + h.args.map(Q).join(", ") + ")"), Ze(b, h.bracketted);
    case "builtincall":
      let e = "";
      return h.args && (e = h.args.map(j).join(", ")), Ze(`${h.builtincall}(${e})`, h.bracketted);
    case "unaryexpression":
      let T = h.unaryexpression + Q(h.expression);
      return Ze(T, h.bracketted);
    case "aggregate":
      return x1(h);
    case "multiplicativeexpression":
      let x = Q(h.first);
      return h.rest.forEach((S) => {
        x += " " + S.operator + " " + Q(S.expression);
      }), Ze(x, h.bracketted);
    case "additiveexpression":
      let K = Q(h.op1);
      return h.ops.forEach((S) => {
        K += " " + S.operator + " " + Q(S.expression);
      }), Ze(K, h.bracketted);
    case "relationalexpression":
      let ue = Q(h.op1) + " " + h.operator + " ";
      return Array.isArray(h.op2) ? ue += "(" + h.op2.map(j).join(", ") + ")" : ue += Q(h.op2), Ze(ue, h.bracketted);
    case "aliasedexpression":
      let Ee = Q(h.expression);
      return h.as && (Ee += ` AS ${Hr(h.as)}`), Ze(Ee, h.bracketted);
    case "conditionaland":
      return Ze(h.operands.map(Q).join(" && "), h.bracketted);
    case "conditionalor":
      return Ze(h.operands.map(Q).join(" || "), h.bracketted);
    case "regex":
      let pe = Q(h.text);
      return pe += ", " + Q(h.pattern), h.flags && (pe += ", " + Q(h.flags)), `regex(${pe})`;
  }
}, Ze = (h, b) => b ? `(${h})` : h, Rg = (h) => {
  if (h.oneVar) {
    const b = j(h.oneVar), e = h.data.map(j).join(" ");
    U(`VALUES ${b} { ${e} }`);
  } else if (h.variables) {
    const b = h.variables.map(Hr).join(" ");
    if (h.variables.length === 1) {
      const e = h.data.map((T) => "(" + T.map(j).join(" ") + ")").join(" ");
      U(`VALUES (${b}) { ${e} }`);
    } else
      U(`VALUES (${b}) {`), Ue(), h.data.map((e) => {
        U("(" + e.map(j).join(" ") + ")");
      }), Be(), U("}");
  }
}, j = (h, b = !1) => {
  if (h === "UNDEF")
    return h;
  if (Array.isArray(h))
    return h.map((T) => j(T, b)).join(", ");
  if (h.varname)
    return Hr(h);
  if (h.collection)
    return `( ${h.collection.map((x) => j(x)).join(" ")} )`;
  if (h.hasOwnProperty("literal"))
    return Hg(h);
  if (h.blankNode)
    return h.blankNode;
  if (h.expressionType)
    return Q(h);
  if (h.blankNodeProperties)
    return `[${O1(h.blankNodeProperties, b)} ]`;
  let e = "";
  return h.inverse && (e += "^"), (h.pn_prefix || h.pn_local || h.iriref || h.a) && (e += Ge(h)), h.alternative ? e += h.alternative.map((T) => j(T)).join("|") : h.sequence && (e += h.sequence.map((T) => j(T)).join("/")), h.bracketted && (e = `(${e})`), h.modifier && (e += h.modifier), e;
}, Hg = (h) => {
  if (h.dataType === "http://www.w3.org/2001/XMLSchema#decimal")
    return h.literal;
  if (h.dataType === "http://www.w3.org/2001/XMLSchema#double")
    return h.literal;
  if (h.dataType === "http://www.w3.org/2001/XMLSchema#integer")
    return h.literal;
  if (h.dataType === "http://www.w3.org/2001/XMLSchema#boolean")
    return h.literal;
  let b = h.quote + h.literal + h.quote;
  return h.dataType ? b += `^^${Ge(h.dataType)}` : h.lang && (b += "@" + h.lang), b;
}, Ge = (h) => {
  if (h.iriref)
    return `<${h.iriref}>`;
  if (h.pn_prefix && h.pn_local)
    return `${h.pn_prefix}:${h.pn_local}`;
  if (h.pn_prefix)
    return `${h.pn_prefix}:`;
  if (h.pn_local)
    return `:${h.pn_local}`;
  if (h.a)
    return "a";
}, Hr = (h) => h.varType === "VAR2" ? "$" + h.varname : "?" + h.varname;
let ze = "", Ig;
function F1(h, b = 4) {
  Ig = " ".repeat(b);
  let e = "";
  return e += `@prefix : <https://purl.org/sparql-formatter/ontology#> .

`, e += `[]
` + Eg(h) + ` .
`, e;
}
function Eg(h) {
  let b = [];
  return G1(), Object.keys(h).forEach((e) => {
    if (e === "type")
      b.push(ze + `a :${h[e]}`);
    else {
      if (e === "location" || e === "@context")
        return;
      if (typeof h[e] == "object")
        b.push(D1(e, h[e]));
      else {
        let T = h[e];
        typeof T == "string" && (T = JSON.stringify(T)), b.push(ze + `:${e} ${T}`);
      }
    }
  }), U1(), b.join(` ;
`);
}
function D1(h, b) {
  if (Array.isArray(b)) {
    const e = b.map((T) => Eg(T) + `
`);
    return ze + `:${h} [
` + e.join(ze + `], [
`) + ze + "]";
  } else
    return ze + `:${h} [
` + Eg(b) + `
` + ze + "]";
}
const G1 = (h = 1) => {
  ze += Ig.repeat(h);
}, U1 = (h = 1) => {
  ze = ze.substr(0, ze.length - Ig.length * h);
}, B1 = (h, b = "default", e = 2) => {
  switch (b) {
    case "default":
      return _g(yt(h), e);
    case "compact":
      return _g(Ug(h), e);
    case "turtle":
      return F1(yt(h), e);
    case "jsonld":
      return JSON.stringify(yt(h), H1, e);
    default:
      throw new Error(`Unsupported formatting mode: ${b}`);
  }
};
function H1(h, b) {
  if (h !== "location")
    return b;
}
const Rt = {
  parseSparql: yt,
  parseSparqlAsCompact: Ug,
  formatAst: _g,
  format: B1
};
typeof window < "u" && (window.spfmt = Rt);
const M1 = "http://purl.org/ontology/bibo/", j1 = "http://iflastandards.info/ns/lrm/lrmoo/", Ns = "http://www.cidoc-crm.org/cidoc-crm/", k1 = "http://www.ics.forth.gr/isl/CRMdig/", X1 = "http://dbpedia.org/resource/", V1 = "http://purl.org/dc/elements/1.1/", Mg = "http://purl.org/dc/terms/", W1 = "http://xmlns.com/foaf/0.1/", Q1 = "http://data-iremus.huma-num.fr/ns/hemef#", Y1 = "http://data-iremus.huma-num.fr/id/", z1 = "http://data-iremus.huma-num.fr/ns/", Z1 = "http://data-iremus.huma-num.fr/graph/", K1 = "http://www.mimo-db.eu/", J1 = "http://data-iremus.huma-num.fr/ns/musrad30#", q1 = "http://www.w3.org/2002/07/owl#", jg = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", kg = "http://www.w3.org/2000/01/rdf-schema#", ew = "http://schema.org/", yg = "http://www.w3.org/2004/02/skos/core#", Pg = /* @__PURE__ */ new Map([
  [Ns, "crm"],
  [k1, "crmdig"],
  [M1, "bibo"],
  [X1, "dbpedia"],
  [V1, "dc"],
  [Mg, "dcterms"],
  [W1, "foaf"],
  [Q1, "hemef"],
  [Z1, "iremus-graph"],
  [Y1, "iremus-data"],
  [z1, "iremus-ns"],
  [j1, "lrmoo"],
  [K1, "mimo"],
  [J1, "musrad30"],
  [q1, "owl"],
  [jg, "rdf"],
  [kg, "rdfs"],
  [ew, "schema"],
  [yg, "skos"]
]);
Object.entries(Pg).sort(
  (h, b) => h[0].length < b[0].length ? 1 : -1
);
class Dg {
  prefix;
  localPart;
  constructor(b, e) {
    this.prefix = b, this.localPart = e;
  }
  toString() {
    return this.prefix + ":" + this.localPart;
  }
}
function sw(h) {
  for (const b of Pg.keys())
    if (h.startsWith(b))
      return new Dg(Pg.get(b), h.replace(b, ""));
  return new Dg("", h);
}
const rw = [
  Ns + "P1_is_identified_by",
  Ns + "P102_has_title",
  Ns + "P190_has_symbolic_content",
  Ns + "P1_is_identified_by",
  Ns + "E35_Title",
  Ns + "E41_Appellation",
  Ns + "E42_Identifier",
  Ns + "P2_has_type",
  Mg + "title",
  jg + "type",
  kg + "label",
  yg + "prefLabel",
  yg + "altLabel"
], iw = rw.map(sw).map((h) => h.toString());
var tw = /* @__PURE__ */ ((h) => (h.INCOMING = "INCOMING", h.OUTGOING = "OUTGOING", h))(tw || {});
const lw = () => [
  "crm:P1_is_identified_by",
  "crm:P48_has_preferred_identifier",
  "crm:P102_has_title",
  "dcterms:title",
  "crm:P190_has_symbolic_content",
  "rdfs:label",
  "skos:prefLabel",
  "skos:altLabel"
].join(" "), Xg = () => [
  "crm:P1_is_identified_by",
  "crm:P48_has_preferred_identifier",
  "crm:P102_has_title"
].join(" "), aw = () => ["crm:E35_Title", "crm:E41_Appellation", "crm:E42_Identifier"].join(" "), Fw = (h, b = !1, e = [], T = "OUTGOING") => b && e.length == 0 ? "" : Rt(
  hw() + (b ? ow(
    h,
    e,
    T
  ) : fw(h))
), fw = (h) => `
SELECT *
WHERE {
  GRAPH ?g {
    ${Og(`<${h}>`)}
    UNION
    ${Ng(`<${h}>`)}
    UNION
    ${Sg(`<${h}>`)}
    UNION
    ${cw(`<${h}>`)}
  }
}
`, ow = (h, b, e) => {
  let T = "";
  return b.length > 0 && (T = `VALUES ?lp { ${b.map((x) => `<${x}>`).join(" ")} }`), `
SELECT *
WHERE {
  GRAPH ?g {
    ${T}
    ${e === "INCOMING" ? `?lr ?lp <${h}>` : `<${h}> ?lp ?lr`}
    OPTIONAL {
      GRAPH ?r_g {
        ${Og("?lr")}
        UNION
        ${Ng("?lr")}
        UNION
        ${Sg("?lr")} 
      }
    }
    FILTER (?lp NOT IN (${iw}))
  }
}
ORDER BY ?lp ?lr
`;
}, hw = () => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX iremus-data: <http://data-iremus.huma-num.fr/id/>
PREFIX iremus-graphs: <http://data-iremus.huma-num.fr/graph/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX sherlock-ns: <http://data-iremus.huma-num.fr/ns/sherlock#>
`, Sg = (h) => `
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
`, Og = (h) => `
{ ######## get direct literal label
${h} ?p ?label .
VALUES ?p { ${lw()} } .
FILTER(isLiteral(?label)) .
}
`, Ng = (h) => `
{ ######## get identifiers linked resources
  ${h} ?p ?r .
  VALUES ?p { ${Xg()} }
  GRAPH ?r_types_g {
    ?r rdf:type ?r_type .
    ?r crm:P190_has_symbolic_content ?label .
    VALUES ?r_type { ${aw()} }
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
`, cw = (h) => `
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
`, Dw = (h, b) => `${pw()}  
  SELECT *
  WHERE {
    ${nw(h, b)}
    GRAPH ?g {
    ${Og("?s")}
    UNION
    ${Ng("?s")}
    UNION
    ${Sg("?s")}
    }
  }`, nw = (h, b) => `
{
  SELECT DISTINCT ?s ?score WHERE 
  {
    # Literal text:query that match an identifier 
    {
      { (?x ?score) text:query ("${h}")}
      GRAPH ?g_x {
        VALUES ?identifier_predicate {${Xg()}} .
        ?s ?identifier_predicate ?x 
      }
    }
    UNION
    # Literal text:query that match a relevant resource
    # Pas de P190 car le sujet d'un P190 n'est pas la ressource en tant que telle.
    {
      ${uw().map((e) => `
      {
        (?s ?score) text:query (${e} "${h}")
      }
      `).join(" UNION ")}
    }
  }
  ORDER BY DESC(?score) 
  LIMIT ${b}  
}
`, uw = () => [
  "crm:P1_is_identified_by",
  "crm:P102_has_title",
  "crm:P48_has_preferred_identifier",
  "dcterms:title",
  "rdfs:label",
  "skos:prefLabel",
  "skos:altLabel"
], pw = () => `PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX text: <http://jena.apache.org/text#>
`;
function Vg() {
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
const Gw = () => Rt(`
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
    ${Vg()}
  }
}
GROUP BY ?F2_livraison_tei ?livraison_titre ?date ?livraison_business_id
ORDER BY ?livraison_business_id
`), Uw = (h) => Rt(`
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
    ${Vg()}
  }
}
ORDER BY ?article_business_id
`), Bw = (h, b) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT ?note_pname (count(?note) AS ?notes) 
WHERE {
  GRAPH ?g {
    ?note sherlock:has_document_context <${h}>.
    ?note crm:P2_has_type <${ye.note}>. #NOTE
    ?note sherlockmei:pname ?note_pname.
    ${b && `VALUES ?note_pname { "${b}" }`}
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
WHERE { <${h}> crm:P140_assigned_attribute_to ?p140 }`, jw = () => `
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
`, kw = (h) => `
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
        ?selection sherlock:has_document_context <${h}>.
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
const Ww = (h = "", b = "", e = "", T = "") => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

SELECT *
WHERE {
  GRAPH ?g {
    ${h ? `BIND (<${h}> as ?f1)` : ""}
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
`, Qw = (h) => `https://yasgui.triply.cc/#query=${encodeURIComponent(h)}&endpoint=http%3A%2F%2Fdata-iremus.huma-num.fr%2Fsparql%2F&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=gchart`;
export {
  vw as ANALYTICAL_ENTITY,
  Wg as ANALYTICAL_PROJECT,
  Cw as ANNOTATION,
  Qg as DRAFT_PROJECT,
  rw as IDENTITY_PREDICATES,
  iw as IDENTITY_PREDICATES_PREFIXED,
  tw as LinkedResourcesDirectionEnum,
  gw as NOTE,
  dw as POSITIONNED_NOTE,
  bw as SCORE,
  ww as SELECTION,
  Aw as SOFTWARE,
  $w as VERTICALITY,
  cw as authorityDocument,
  Ew as contributions,
  Pw as contributors,
  Lw as countIncomingPredicates,
  Tw as countOutgoingPredicates,
  Rw as documentsByIndex,
  Sw as e13WithLiteralP141,
  Ow as fondamentales,
  _w as getAnalyticalProject,
  mw as getAnnotations,
  yw as getContributor,
  Iw as getDotOneProperties,
  Mw as getP140,
  Vw as getResourceByUrlFragment,
  Nw as getResources,
  xw as historicalModelsOntologies,
  Xg as identifiersPredicates,
  Ng as identifiersResources,
  Og as identitiersLiterals,
  Dw as identitiesByTextQuery,
  Fw as identity,
  Qw as makeYasguiUri,
  Uw as mg_livraison,
  Gw as mg_livraisons,
  Bw as noteOccurences,
  Hw as p127,
  jw as scores,
  kw as selections,
  Xw as tonalitiesContributions,
  Sg as types,
  Ww as wemi
};

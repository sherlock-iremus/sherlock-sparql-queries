const et = "http://data-iremus.huma-num.fr/id/d2a536eb-4a95-484f-b13d-f597ac8ea2fd", rt = "http://data-iremus.huma-num.fr/id/9d0388cb-a178-46b2-b047-b5a98f7bdf0b", ot = "http://data-iremus.huma-num.fr/id/689e148d-a97d-45b4-898d-c395a24884df", it = "http://data-iremus.huma-num.fr/id/90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86", nt = "http://data-iremus.huma-num.fr/id/6d72746a-9f28-4739-8786-c6415d53c56d", at = "http://data-iremus.huma-num.fr/id/bf9dce29-8123-4e8e-b24d-0c7f134bbc8e", ct = "http://data-iremus.huma-num.fr/id/29b00e39-75da-4945-b6c4-a0ca00f96f68", st = "http://data-iremus.huma-num.fr/id/82dbd157-20df-422c-88db-28d6075d99a1", I = "http://data-iremus.huma-num.fr/id/21816195-6708-4bbd-a758-ee354bb84900", O = "http://data-iremus.huma-num.fr/id/cabe46bf-23d4-4392-aa20-b3eb21ad7dfd", _t = (e) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
    VALUES ?project { <${e}> }
    VALUES ?draft { <${O}> }
    ?project crm:P2_has_type <${I}>.
    ?project crm:P1_is_identified_by ?label.
    ?project crm:P14_carried_out_by ?contributor.
    OPTIONAL { ?project sherlock:has_privacy_type ?draft }.
}
LIMIT 1`, mt = (e, t) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX dcterms: <http://purl.org/dc/terms/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
  ?annotation sherlock:has_document_context <${e}>.
  <${t}> crm:P9_consists_of ?annotation.
  ?annotation crm:P141_assigned ?concept.
  ?annotation dcterms:created ?date.
  ?annotation crm:P140_assigned_attribute_to  ?entity.
  ?e13 crm:P141_assigned ?entity.
  ?e13 sherlock:has_document_context ?page.
}
`;
var T = Object.defineProperty, A = (e, t, r) => t in e ? T(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, i = (e, t, r) => (A(e, typeof t != "symbol" ? t + "" : t, r), r);
const w = "http://purl.org/ontology/bibo/", N = "http://www.cidoc-crm.org/lrmoo/", S = "http://www.cidoc-crm.org/cidoc-crm/", C = "http://www.ics.forth.gr/isl/CRMdig/", F = "http://purl.org/dc/elements/1.1/", L = "http://purl.org/dc/terms/", $ = "http://xmlns.com/foaf/0.1/", G = "http://data-iremus.huma-num.fr/ns/hemef#", a = "http://data-iremus.huma-num.fr/id/", H = "http://data-iremus.huma-num.fr/id/", U = "http://data-iremus.huma-num.fr/ns/", k = "http://data-iremus.huma-num.fr/graph/", X = "http://data-iremus.huma-num.fr/ns/musrad30#", x = "http://www.w3.org/2002/07/owl#", v = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", j = "http://www.w3.org/2000/01/rdf-schema#", D = "http://schema.org/", M = "http://www.w3.org/2004/02/skos/core#", W = /* @__PURE__ */ new Map([
  [S, "crm"],
  [C, "crmdig"],
  [w, "bibo"],
  [F, "dc"],
  [L, "dcterms"],
  [$, "foaf"],
  [G, "hemef"],
  [k, "iremus-graph"],
  [H, "iremus-data"],
  [U, "iremus-ns"],
  [N, "lrmoo"],
  [X, "musrad30"],
  [x, "owl"],
  [v, "rdf"],
  [j, "rdfs"],
  [D, "schema"],
  [M, "skos"]
]);
Object.entries(W).sort(
  (e, t) => e[0].length < t[0].length ? 1 : -1
);
class B {
  constructor(t = "") {
    i(this, "_pog"), i(this, "_uri"), this._uri = t, this._pog = /* @__PURE__ */ new Map();
  }
  getValues(t) {
    return this._pog.get(t);
  }
  addPOG(t, r) {
    var o;
    this._pog.has(t) ? (o = this._pog.get(t)) == null || o.push(r) : this._pog.set(t, [r]);
  }
  get uri() {
    return this._uri;
  }
  get pog() {
    return this._pog;
  }
}
const s = class {
  constructor(t) {
    i(this, "_classesRegistry", /* @__PURE__ */ new Map()), i(this, "_name"), i(this, "_classes"), i(this, "_properties"), i(this, "_propertiesRegistry", /* @__PURE__ */ new Map()), this._name = t, this._classes = [], this._properties = [];
  }
  addClass(t) {
    this._classes.push(t), this._classes = this._classes.sort(), this._classesRegistry.set(t.uri, t);
  }
  addProperty(t) {
    this._properties.push(t), this._properties = this._properties.sort(), this._propertiesRegistry.set(t.uri, t);
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
    this._classes = this._classes.sort((t, r) => t.intCodeForSorting - r.intCodeForSorting), this._properties = this._properties.sort((t, r) => t.intCodeForSorting - r.intCodeForSorting);
  }
};
i(s, "void", new s(""));
let P = s;
class m extends B {
  constructor(t, r, o) {
    super(t), i(this, "_comment"), i(this, "_intCodeForSorting"), i(this, "_label"), i(this, "_name"), i(this, "_ontology"), this._comment = /* @__PURE__ */ new Map(), this._intCodeForSorting = -1, this._label = /* @__PURE__ */ new Map(), this._name = r, this._ontology = o;
  }
  get comment() {
    return this._comment;
  }
  set comment(t) {
    this._comment = t;
  }
  get intCodeForSorting() {
    return this._intCodeForSorting;
  }
  set intCodeForSorting(t) {
    this._intCodeForSorting = t;
  }
  set label(t) {
    this._label = t;
  }
  get name() {
    return this._name;
  }
  get ontology() {
    return this._ontology;
  }
  getComment(t) {
    return this._comment.get(t);
  }
  getLabel(t) {
    return this._label.get(t);
  }
}
i(m, "label", "");
const _ = class extends m {
  constructor(t, r, o) {
    super(t, r, o), i(this, "_subClassOf"), this._subClassOf = new Array();
  }
  addSubClassOf(t) {
    this._subClassOf.push(t);
  }
};
i(_, "void", new _("", "", P.void));
let h = _;
const u = class b extends m {
  constructor(t, r, o) {
    super(t, r, o), i(this, "_domain", h.void), i(this, "_inverseOf", b.void), i(this, "_range", h.void), i(this, "_subPropertyOf"), this._subPropertyOf = new Array();
  }
  get domain() {
    return this._domain;
  }
  set domain(t) {
    this._domain = t;
  }
  get inverseOf() {
    return this._inverseOf;
  }
  set inverseOf(t) {
    this._inverseOf = t;
  }
  get range() {
    return this._range;
  }
  set range(t) {
    this._range = t;
  }
  addSubPropertyOf(t) {
    this._subPropertyOf.push(t);
  }
};
i(u, "void", new u("", "", P.void));
const n = {
  selection: a + "9d0388cb-a178-46b2-b047-b5a98f7bdf0b",
  analyticalEntity: a + "6d72746a-9f28-4739-8786-c6415d53c56d",
  score: a + "bf9dce29-8123-4e8e-b24d-0c7f134bbc8e",
  software: a + "29b00e39-75da-4945-b6c4-a0ca00f96f68",
  hexColorCode: a + "5f1bb74f-6ea0-4073-8b68-086f98454f1c",
  emoji: a + "04242f64-fbb3-4b5b-bb2e-3ddd59eeea18",
  orcidId: a + "d7ef2583-ff31-4913-9ed3-bc3a1c664b21",
  note: a + "d2a536eb-4a95-484f-b13d-f597ac8ea2fd",
  verticality: a + "90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86",
  fondamentaleIdentification: a + "003559fc-f033-4fc3-9c05-0d5f283123ed",
  orcidGeneratedName: a + "73ea8d74-3526-4f6a-8830-dd369795650d"
}, pt = (e) => `
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
      ?contribution dcterms:creator <${e}>. #CONTRIBUTOR
      VALUES ?contribution_type { <${n.selection}> } #SELECTION TYPE
      ?contribution crm:P2_has_type ?contribution_type.
      GRAPH ?g1 {
        ?contribution_type crm:P1_is_identified_by ?contribution_type_label
      }
    } 
    UNION 
    # CONTRIBUTIONS FROM CRM:E13 --> CRM:P14
    {
    	?contribution crm:P14_carried_out_by <${e}>. #CONTRIBUTOR
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
`, ht = (e) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX analysis: <http://modality-tonality.huma-num.fr/analysisOntology#>
SELECT ?contributor ?color ?emoji ?program
FROM <http://data-iremus.huma-num.fr/graph/users>
WHERE {
    VALUES ?contributor { <${e}> }
    
    OPTIONAL { ?contributor analysis:hasPythonModuleName ?program }
    OPTIONAL {
        ?contributor crm:P1_is_identified_by ?unicode.
        ?unicode crm:P2_has_type <http://data-iremus.huma-num.fr/id/04242f64-fbb3-4b5b-bb2e-3ddd59eeea18>.
        ?unicode crm:P190_has_symbolic_content ?emoji.
        ?contributor crm:P1_is_identified_by ?hexcode.
        ?hexcode crm:P2_has_type <http://data-iremus.huma-num.fr/id/5f1bb74f-6ea0-4073-8b68-086f98454f1c>.
        ?hexcode crm:P190_has_symbolic_content ?color.
    }
}`, ut = () => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT ?contributor ?name (COUNT(?contribution) AS ?contributions) (CONCAT( "#", ?hex_color_code) AS ?hex_color) ?emoji ?orcid (IRI(CONCAT("https://orcid.org/", ?orcid)) AS ?orcid_profile) (IRI(CONCAT("https://pub.orcid.org/v3.0/", ?orcid)) AS ?orcid_api_user_endpoint) ?untyped_identifier ?contributor_type_label ?user_graph

WHERE {
  GRAPH ?user_graph {  
    VALUES ?contributor_type_predicate {rdf:type crm:P2_has_type}. 
    VALUES ?contributor_type {crm:E21_Person <${n.software}>}. #PERSON OR SOFTWARE
    ?contributor ?contributor_type_predicate ?contributor_type
    
    OPTIONAL {
	    ?contributor crm:P2_has_type <${n.software}>. #SOFTWARE
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
      ?hex_color_code_identifier crm:P2_has_type <${n.hexColorCode}>. #HEX COLOR CODE IDENTIFIER
      ?hex_color_code_identifier crm:P190_has_symbolic_content ?hex_color_code
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?emoji_identifier.
      ?emoji_identifier crm:P2_has_type <${n.emoji}>. #EMOJI IDENTIFIER
      ?emoji_identifier crm:P190_has_symbolic_content ?emoji
    }
    OPTIONAL {
      ?contributor crm:P1_is_identified_by ?orcid_appellation.
      ?orcid_appellation crm:P2_has_type <${n.orcidGeneratedName}>. #ORCID NAME IDENTIFIER
      ?orcid_appellation crm:P190_has_symbolic_content ?name
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?ORCID_identifier.
      ?ORCID_identifier crm:P2_has_type <${n.orcidId}>. #ORCID IDENTIFIER
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
GROUP BY ?contributor ?name ?hex_color_code ?emoji ?orcid ?orcid_profile ?untyped_identifier ?contributor_type_label ?user_graph`, Pt = (e) => `
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    <${e}> ?lp ?lr
  }
}
GROUP BY ?lp
`, bt = (e) => `
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX she: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT ?e13_p140 (GROUP_CONCAT(DISTINCT ?e13_p140_label ; separator=" \\n~~\\n ") as ?e13_p140_labels) ?e13_p177 ?e13_p177_label ?concept ?concept_description ?context (GROUP_CONCAT(DISTINCT ?context_label ; separator=" \\n~~\\n ") as ?context_labels) ?creation_date ?creator ?creator_label ?analytical_project ?analytical_project_label
WHERE 
{ 
    GRAPH <http://data-iremus.huma-num.fr/graph/opentheso> {
        <${e}> skos:narrower* ?concept .
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

`, yt = (e) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT DISTINCT ?score ?annotation ?verticality ?note_label ?measure_number 
WHERE {
  GRAPH ?g {
    ${Y(e)}
    ?score crm:P2_has_type <${n.score}>. #Score type
    ?verticality sherlock:has_document_context ?score.
    ?verticality crm:P2_has_type <${n.verticality}>. #MEI score offset
    ?note_in_score sherlockmei:contains_beat ?verticality.
    ?note_in_score sherlockmei:measure_number ?measure_number.
    GRAPH ?sherlock_graph {
        ?annotation crm:P140_assigned_attribute_to ?verticality.
        ?annotation crm:P177_assigned_property_of_type <${n.fondamentaleIdentification}>. #Identification de fondamentale
        ?annotation crm:P141_assigned ?note.
        GRAPH ?sherlock_data_graph {
            ?note crm:P1_is_identified_by ?note_label
        }
    }
  }
}
ORDER BY ?score ?measure_number
`, Y = (e) => e ? `BIND (<${e}> as ?score).` : "", ft = () => `
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
`, Et = () => `
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
`, V = () => [
  "crm:P1_is_identified_by",
  "crm:P102_has_title dcterms:title",
  "crm:P190_has_symbolic_content",
  "rdfs:label",
  "skos:prefLabel",
  "skos:altLabel"
].join(" "), J = () => [
  "crm:P1_is_identified_by",
  "crm:P102_has_title"
].join(" "), q = () => [
  "crm:E35_Title",
  "crm:E41_Appellation",
  "crm:E42_Identifier"
].join(" "), K = () => [
  "crm:P2_has_type",
  "rdf:type"
].join(" "), gt = (e, t = !1, r = !1, o = !1, c = "", R = "OUTGOING") => t ? Q(
  e,
  o,
  c,
  R
) : z(
  e,
  o,
  r
), z = (e, t, r) => {
  let o = `${g()}  
SELECT *
WHERE {
  GRAPH ?g {
  ${d(`<${e}>`, "?p", "?label", r)}
  ${l(`<${e}>`, "?p", "?r", "?label", r)}
  ${y(`<${e}>`, r)}
  ${f(`<${e}>`)}
  }
}`;
  return t && (o += E(`<${e}>`, t)), o;
}, Q = (e, t, r, o) => {
  const c = r ? `<${r}>` : "?lp";
  return `
${g()}
SELECT *
WHERE {
  GRAPH ?lr_graph {
    ${tt(
    `<${e}>`,
    c,
    o
  )}
    OPTIONAL {
      GRAPH ?g {
        ${d("?lr", "?p", "?label", !1)}
        ${l("?lr", "?p", "?r", "?label", !1)}
        ${y("?lr", !1)}
        ${f("?lr")}
        ${E("?lr", t)}
      }
    }
  }
}`;
}, d = (e, t, r, o) => `  {
      VALUES ${t} { ${V()} } .
      ${p(e, t, r, o)}
      FILTER(isLiteral(${r})) .  
    }`, l = (e, t, r, o, c) => `  UNION
    {
      VALUES ${t} { ${J()} }
      ${p(e, t, r, c)}
      GRAPH ${r}_types_graph { 
        VALUES ${r}_type { ${q()} }
        ${r} rdf:type ${r}_type .
        ${r} crm:P190_has_symbolic_content ${o} .
      }
      OPTIONAL {
        GRAPH ${r}_types_types_graph {
          ${r} crm:P2_has_type ${r}_type_type .
          GRAPH ${r}_types_types_label_graph {
            ${r}_type_type crm:P1_is_identified_by ${r}_type_type_label .
          }
        }
      }
    }`, y = (e, t) => `  UNION
    {
      GRAPH ?e32_e55_graph {
        ${p("?e32", "crm:P71_lists", e, t)}
      }
      OPTIONAL {
        GRAPH ?e32_graph {
          ?e32 crm:P1_is_identified_by ?e32_label .
        }
      }
    }`, f = (e) => `  UNION
    {
      VALUES ?p { ${K()} }
      ${e} ?p ?r .
      OPTIONAL {
        GRAPH ?r_types_graph {
          VALUES ?r_type { crm:E55_Type } .
          ?r rdf:type ?r_type .
          ?r crm:P1_is_identified_by ?label .
          FILTER(isLiteral(?label)) .
          OPTIONAL {
            ?type_e32 crm:P71_lists ?r .
            GRAPH ?type_e32_graph {
              ?type_e32 crm:P1_is_identified_by ?type_e32_label .
            }
          }
        }
      }
    }`, E = (e, t) => t ? `
    UNION {
      SELECT (COUNT(?r_out) AS ?c_out) ?lr
      WHERE { GRAPH ?g_out { ${e} ?p_out ?r_out } }
      GROUP BY ?c_out ?lr
    }
    UNION {
      SELECT (COUNT(*) AS ?c_in) ?lr
      WHERE { GRAPH ?g_in { ?r_in ?p_in ${e} } }
      GROUP BY ?c_in ?lr
    }` : "", Z = (e, t, r, o) => o ? `
    UNION 
    {
      ?e13 crm:P177_assigned_property_of_type ${t} .
      ?e13 crm:P140_assigned_attribute_to ${e} .
      ?e13 crm:P141_assigned ${r} .
      ?e13 crm:P14_carried_out_by ?e13_carrier .
      OPTIONAL {
        GRAPH ?e13_graph {
          ${d(
  "?e13_carrier",
  "?e13_carrier_p",
  "?e13_carrier_label",
  !1
)}
          ${l(
  "?e13_carrier",
  "?e13_carrier_p",
  "?e13_carrier_object",
  "?e13_carrier_label",
  !1
)}
        }
      }
    }` : "", p = (e, t, r, o) => {
  let c = `${e} ${t} ${r} .`;
  return o && (c += Z(e, t, r, o)), c;
}, tt = (e, t, r) => {
  if (r === "INCOMING")
    return `?lr ${t} ${e}`;
  if (r === "OUTGOING")
    return `${e} ${t} ?lr`;
}, g = () => `PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
`, Rt = () => `
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
`, It = (e, t) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT ?note_pname (count(?note) AS ?notes) 
WHERE {
  GRAPH ?g {
    ?note sherlock:has_document_context <${e}>.
    ?note crm:P2_has_type <${n.note}>. #NOTE
    ?note sherlockmei:pname ?note_pname.
    ${t && `VALUES ?note_pname { "${t}" }`}
  }
}
GROUP BY ?note_pname`, Ot = (e) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT *
WHERE {
  GRAPH ?g {
    <${e}> crm:P127_has_broader_term* ?bt .
    ?bt crm:P1_is_identified_by ?bt_label .
    OPTIONAL {
      ?bt crm:P127_has_broader_term ?btbt .
      ?btbt crm:P1_is_identified_by ?btbt_label .
    }
  }
}
`, Tt = (e) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE { <${e}> crm:P140_assigned_attribute_to ?p140 }`, At = () => `
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
        ?score crm:P2_has_type <${n.score}> .
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
                ?selection crm:P2_has_type <${n.selection}> .
                ?selection sherlock:has_document_context ?score .
            }
        }
        UNION {
            GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> {
                ?e13_on_analytical_entity rdf:type crm:E13_Attribute_Assignment .
                ?e13_on_analytical_entity crm:P141_assigned ?analytical_entity .
                ?analytical_entity rdf:type crm:E28_Conceptual_Object .
                ?analytical_entity crm:P2_has_type <${n.analyticalEntity}> .
                ?e13_on_analytical_entity crm:P140_assigned_attribute_to ?analytical_selection .
                ?analytical_selection sherlock:has_document_context ?score .
            }
        }
    }
}
GROUP BY ?score
`, wt = (e) => `
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
          ?analyticalEntity crm:P2_has_type <${n.analyticalEntity}>.
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
        ?selection sherlock:has_document_context <${e}>.
        ?selection crm:P2_has_type <${n.selection}>.
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
  nt as ANALYTICAL_ENTITY,
  I as ANALYTICAL_PROJECT,
  st as ANNOTATION,
  O as DRAFT_PROJECT,
  et as NOTE,
  ot as POSITIONNED_NOTE,
  at as SCORE,
  rt as SELECTION,
  ct as SOFTWARE,
  it as VERTICALITY,
  pt as contributions,
  ut as contributors,
  Pt as countLinkingPredicates,
  bt as documentsByIndex,
  yt as fondamentales,
  _t as getAnalyticalProject,
  mt as getAnnotations,
  ht as getContributor,
  Tt as getP140,
  ft as getResources,
  Et as historicalModelsOntologies,
  gt as identity,
  Rt as mg_livraisons,
  It as noteOccurences,
  Ot as p127,
  At as scores,
  wt as selections
};

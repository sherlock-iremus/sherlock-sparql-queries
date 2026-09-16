//#region ../sherlock-rdf/lib/rdf-prefixes.ts
var e = "http://purl.org/ontology/bibo/", t = "http://iflastandards.info/ns/lrm/lrmoo/", n = "http://www.cidoc-crm.org/cidoc-crm/", r = "http://www.ics.forth.gr/isl/CRMdig/", i = "http://dbpedia.org/resource/", a = "http://purl.org/dc/elements/1.1/", o = "http://purl.org/dc/terms/", s = "http://xmlns.com/foaf/0.1/", c = "http://data-iremus.huma-num.fr/ns/hemef#", l = "http://data-iremus.huma-num.fr/id/", u = "http://data-iremus.huma-num.fr/ns/sherlock#", d = "http://data-iremus.huma-num.fr/graph/", f = "http://www.mimo-db.eu/", p = "http://data-iremus.huma-num.fr/ns/musrad30#", m = "http://www.w3.org/2002/07/owl#", h = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", g = "http://www.w3.org/2000/01/rdf-schema#", _ = "http://schema.org/", v = "http://www.w3.org/2004/02/skos/core#";
l + "", l + "", l + "", l + "", l + "";
var y = /* @__PURE__ */ new Map([
	[n, "crm"],
	[r, "crmdig"],
	[e, "bibo"],
	[i, "dbpedia"],
	[a, "dc"],
	[o, "dcterms"],
	[s, "foaf"],
	[c, "hemef"],
	[d, "iremus-graph"],
	[l, "iremus-data"],
	[u, "iremus-ns"],
	[t, "lrmoo"],
	[f, "mimo"],
	[p, "musrad30"],
	[m, "owl"],
	[h, "rdf"],
	[g, "rdfs"],
	[_, "schema"],
	[v, "skos"]
]);
Object.entries(y).sort((e, t) => e[0].length < t[0].length ? 1 : -1);
var b = class {
	prefix;
	localPart;
	constructor(e, t) {
		this.prefix = e, this.localPart = t;
	}
	toString() {
		return this.prefix + ":" + this.localPart;
	}
};
function x(e) {
	for (let t of y.keys()) if (e.startsWith(t)) return new b(y.get(t), e.replace(t, ""));
	return new b("", e);
}
//#endregion
//#region lib/common.ts
var S = [
	"crm:P1_is_identified_by",
	"crm:P48_has_preferred_identifier",
	"crm:P102_has_title",
	"rdfs:label",
	"skos:prefLabel"
], C = [
	"crm:P1_is_identified_by",
	"crm:P102_has_title",
	"crm:P48_has_preferred_identifier",
	"crm:P190_has_symbolic_content",
	"dcterms:title",
	"rdfs:label",
	"skos:altLabel",
	"skos:prefLabel"
], ee = [
	n + "P1_is_identified_by",
	n + "P102_has_title",
	n + "P190_has_symbolic_content",
	n + "P1_is_identified_by",
	n + "E35_Title",
	n + "E41_Appellation",
	n + "E42_Identifier",
	n + "P2_has_type",
	o + "title",
	h + "type",
	g + "label",
	v + "prefLabel",
	v + "altLabel"
], w = ee.map(x).map((e) => e.toString()), te = /* @__PURE__ */ function(e) {
	return e.INCOMING = "INCOMING", e.OUTGOING = "OUTGOING", e;
}({}), ne = {
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
function re() {
	let e = "";
	for (let [t, n] of Object.entries(ne)) e += `PREFIX ${n}: <${t}>\n`;
	return e;
}
//#endregion
//#region lib/constants.ts
var ie = "http://data-iremus.huma-num.fr/id/d2a536eb-4a95-484f-b13d-f597ac8ea2fd", ae = "http://data-iremus.huma-num.fr/id/9d0388cb-a178-46b2-b047-b5a98f7bdf0b", oe = "http://data-iremus.huma-num.fr/id/689e148d-a97d-45b4-898d-c395a24884df", se = "http://data-iremus.huma-num.fr/id/90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86", ce = "http://data-iremus.huma-num.fr/id/6d72746a-9f28-4739-8786-c6415d53c56d", le = "http://data-iremus.huma-num.fr/id/bf9dce29-8123-4e8e-b24d-0c7f134bbc8e", ue = "http://data-iremus.huma-num.fr/id/29b00e39-75da-4945-b6c4-a0ca00f96f68", de = "http://data-iremus.huma-num.fr/id/82dbd157-20df-422c-88db-28d6075d99a1", fe = "http://data-iremus.huma-num.fr/id/21816195-6708-4bbd-a758-ee354bb84900", pe = "http://data-iremus.huma-num.fr/id/cabe46bf-23d4-4392-aa20-b3eb21ad7dfd", me = (e) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
    VALUES ?project { <${e}> }
    VALUES ?draft { <${pe}> }
    ?project crm:P2_has_type <${fe}>.
    ?project crm:P1_is_identified_by ?label.
    ?project crm:P14_carried_out_by ?contributor.
    OPTIONAL { ?project sherlock:has_privacy_type ?draft }.
}
LIMIT 1`, he = (e, t) => `
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
`, ge = "http://purl.org/ontology/bibo/", _e = "http://iflastandards.info/ns/lrm/lrmoo/", ve = "http://www.cidoc-crm.org/cidoc-crm/", ye = "http://www.ics.forth.gr/isl/CRMdig/", be = "http://dbpedia.org/resource/", xe = "http://purl.org/dc/elements/1.1/", Se = "http://purl.org/dc/terms/", Ce = "http://xmlns.com/foaf/0.1/", we = "http://data-iremus.huma-num.fr/ns/hemef#", Te = "http://data-iremus.huma-num.fr/id/", T = "http://data-iremus.huma-num.fr/ns/sherlock#", Ee = "http://data-iremus.huma-num.fr/graph/", De = "http://www.mimo-db.eu/", Oe = "http://data-iremus.huma-num.fr/ns/musrad30#", ke = "http://www.w3.org/2002/07/owl#", Ae = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", je = "http://www.w3.org/2000/01/rdf-schema#", Me = "http://schema.org/", E = "http://www.w3.org/2004/02/skos/core#";
Te + "", Te + "", Te + "", Te + "", Te + "", Object.entries(/* @__PURE__ */ new Map([
	[ve, "crm"],
	[ye, "crmdig"],
	[ge, "bibo"],
	[be, "dbpedia"],
	[xe, "dc"],
	[Se, "dcterms"],
	[Ce, "foaf"],
	[we, "hemef"],
	[Ee, "iremus-graph"],
	[Te, "iremus-data"],
	[T, "iremus-ns"],
	[_e, "lrmoo"],
	[De, "mimo"],
	[Oe, "musrad30"],
	[ke, "owl"],
	[Ae, "rdf"],
	[je, "rdfs"],
	[Me, "schema"],
	[E, "skos"]
])).sort((e, t) => e[0].length < t[0].length ? 1 : -1);
var Ne = class {
	_pog;
	_uri;
	constructor(e = "") {
		this._uri = e, this._pog = /* @__PURE__ */ new Map();
	}
	getValues(e) {
		return this._pog.get(e);
	}
	addPOG(e, t) {
		this._pog.has(e) ? this._pog.get(e)?.push(t) : this._pog.set(e, [t]);
	}
	get uri() {
		return this._uri;
	}
	get pog() {
		return this._pog;
	}
}, Pe = class e {
	static void = new e("");
	_classesRegistry = /* @__PURE__ */ new Map();
	_name;
	_classes;
	_properties;
	_propertiesRegistry = /* @__PURE__ */ new Map();
	constructor(e) {
		this._name = e, this._classes = [], this._properties = [];
	}
	addClass(e) {
		this._classes.push(e), this._classes = this._classes.sort(), this._classesRegistry.set(e.uri, e);
	}
	addProperty(e) {
		this._properties.push(e), this._properties = this._properties.sort(), this._propertiesRegistry.set(e.uri, e);
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
		this._classes = this._classes.sort((e, t) => e.intCodeForSorting - t.intCodeForSorting), this._properties = this._properties.sort((e, t) => e.intCodeForSorting - t.intCodeForSorting);
	}
}, Fe = class extends Ne {
	static label = "";
	_comment;
	_intCodeForSorting;
	_label;
	_name;
	_ontology;
	constructor(e, t, n) {
		super(e), this._comment = /* @__PURE__ */ new Map(), this._intCodeForSorting = -1, this._label = /* @__PURE__ */ new Map(), this._name = t, this._ontology = n;
	}
	get comment() {
		return this._comment;
	}
	set comment(e) {
		this._comment = e;
	}
	get intCodeForSorting() {
		return this._intCodeForSorting;
	}
	set intCodeForSorting(e) {
		this._intCodeForSorting = e;
	}
	set label(e) {
		this._label = e;
	}
	get name() {
		return this._name;
	}
	get ontology() {
		return this._ontology;
	}
	getComment(e) {
		return this._comment.get(e);
	}
	getLabel(e) {
		return this._label.get(e);
	}
}, Ie = class e extends Fe {
	static void = new e("", "", Pe.void);
	_subClassOf;
	constructor(e, t, n) {
		super(e, t, n), this._subClassOf = [];
	}
	addSubClassOf(e) {
		this._subClassOf.push(e);
	}
};
(class e extends Fe {
	static void = new e("", "", Pe.void);
	_domain = Ie.void;
	_inverseOf = e.void;
	_range = Ie.void;
	_subPropertyOf;
	constructor(e, t, n) {
		super(e, t, n), this._subPropertyOf = [];
	}
	get domain() {
		return this._domain;
	}
	set domain(e) {
		this._domain = e;
	}
	get inverseOf() {
		return this._inverseOf;
	}
	set inverseOf(e) {
		this._inverseOf = e;
	}
	get range() {
		return this._range;
	}
	set range(e) {
		this._range = e;
	}
	addSubPropertyOf(e) {
		this._subPropertyOf.push(e);
	}
}), ve + "", xe + "", Se + "", Ce + "", Ce + "", Ce + "", Ce + "", je + "", E + "", ve + "", ve + "", ve + "", Ae + "", Se + "", E + "", je + "";
var Le = {
	selection: Te + "9d0388cb-a178-46b2-b047-b5a98f7bdf0b",
	analyticalEntity: Te + "6d72746a-9f28-4739-8786-c6415d53c56d",
	score: Te + "bf9dce29-8123-4e8e-b24d-0c7f134bbc8e",
	software: Te + "29b00e39-75da-4945-b6c4-a0ca00f96f68",
	hexColorCode: Te + "5f1bb74f-6ea0-4073-8b68-086f98454f1c",
	emoji: Te + "04242f64-fbb3-4b5b-bb2e-3ddd59eeea18",
	orcidId: Te + "d7ef2583-ff31-4913-9ed3-bc3a1c664b21",
	note: Te + "d2a536eb-4a95-484f-b13d-f597ac8ea2fd",
	verticality: Te + "90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86",
	fondamentaleIdentification: Te + "003559fc-f033-4fc3-9c05-0d5f283123ed",
	orcidGeneratedName: Te + "73ea8d74-3526-4f6a-8830-dd369795650d"
}, Re = (e) => `
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
      VALUES ?contribution_type { <${Le.selection}> } #SELECTION TYPE
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
`, ze = (e) => `
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
}`, Be = () => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT ?contributor ?name (COUNT(?contribution) AS ?contributions) (CONCAT( "#", ?hex_color_code) AS ?hex_color) ?emoji ?orcid (IRI(CONCAT("https://orcid.org/", ?orcid)) AS ?orcid_profile) (IRI(CONCAT("https://pub.orcid.org/v3.0/", ?orcid)) AS ?orcid_api_user_endpoint) ?untyped_identifier ?contributor_type_label ?user_graph

WHERE {
  GRAPH ?user_graph {  
    VALUES ?contributor_type_predicate {rdf:type crm:P2_has_type}. 
    VALUES ?contributor_type {crm:E21_Person <${Le.software}>}. #PERSON OR SOFTWARE
    ?contributor ?contributor_type_predicate ?contributor_type
    
    OPTIONAL {
	    ?contributor crm:P2_has_type <${Le.software}>. #SOFTWARE
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
      ?hex_color_code_identifier crm:P2_has_type <${Le.hexColorCode}>. #HEX COLOR CODE IDENTIFIER
      ?hex_color_code_identifier crm:P190_has_symbolic_content ?hex_color_code
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?emoji_identifier.
      ?emoji_identifier crm:P2_has_type <${Le.emoji}>. #EMOJI IDENTIFIER
      ?emoji_identifier crm:P190_has_symbolic_content ?emoji
    }
    OPTIONAL {
      ?contributor crm:P1_is_identified_by ?orcid_appellation.
      ?orcid_appellation crm:P2_has_type <${Le.orcidGeneratedName}>. #ORCID NAME IDENTIFIER
      ?orcid_appellation crm:P190_has_symbolic_content ?name
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?ORCID_identifier.
      ?ORCID_identifier crm:P2_has_type <${Le.orcidId}>. #ORCID IDENTIFIER
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
GROUP BY ?contributor ?name ?hex_color_code ?emoji ?orcid ?orcid_profile ?untyped_identifier ?contributor_type_label ?user_graph`;
//#endregion
//#region node_modules/.pnpm/sparql-formatter@1.0.2/node_modules/sparql-formatter/src/sparql-parser.js
function Ve(e, t) {
	function n() {
		this.constructor = e;
	}
	n.prototype = t.prototype, e.prototype = new n();
}
function He(e, t, n, r) {
	var i = Error.call(this, e);
	return Object.setPrototypeOf && Object.setPrototypeOf(i, He.prototype), i.expected = t, i.found = n, i.location = r, i.name = "SyntaxError", i;
}
Ve(He, Error);
function Ue(e, t, n) {
	return n ||= " ", e.length > t ? e : (t -= e.length, n += n.repeat(t), e + n.slice(0, t));
}
He.prototype.format = function(e) {
	var t = "Error: " + this.message;
	if (this.location) {
		for (var n = null, r = 0; r < e.length; r++) if (e[r].source === this.location.source) {
			n = e[r].text.split(/\r\n|\n|\r/g);
			break;
		}
		var i = this.location.start, a = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(i) : i, o = this.location.source + ":" + a.line + ":" + a.column;
		if (n) {
			var s = this.location.end, c = Ue("", a.line.toString().length, " "), l = n[i.line - 1], u = (i.line === s.line ? s.column : l.length + 1) - i.column || 1;
			t += "\n --> " + o + "\n" + c + " |\n" + a.line + " | " + l + "\n" + c + " | " + Ue("", i.column - 1, " ") + Ue("", u, "^");
		} else t += "\n at " + o;
	}
	return t;
}, He.buildMessage = function(e, t) {
	var n = {
		literal: function(e) {
			return "\"" + i(e.text) + "\"";
		},
		class: function(e) {
			var t = e.parts.map(function(e) {
				return Array.isArray(e) ? a(e[0]) + "-" + a(e[1]) : a(e);
			});
			return "[" + (e.inverted ? "^" : "") + t.join("") + "]";
		},
		any: function() {
			return "any character";
		},
		end: function() {
			return "end of input";
		},
		other: function(e) {
			return e.description;
		}
	};
	function r(e) {
		return e.charCodeAt(0).toString(16).toUpperCase();
	}
	function i(e) {
		return e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
			return "\\x0" + r(e);
		}).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
			return "\\x" + r(e);
		});
	}
	function a(e) {
		return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
			return "\\x0" + r(e);
		}).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
			return "\\x" + r(e);
		});
	}
	function o(e) {
		return n[e.type](e);
	}
	function s(e) {
		var t = e.map(o), n, r;
		if (t.sort(), t.length > 0) {
			for (n = 1, r = 1; n < t.length; n++) t[n - 1] !== t[n] && (t[r] = t[n], r++);
			t.length = r;
		}
		switch (t.length) {
			case 1: return t[0];
			case 2: return t[0] + " or " + t[1];
			default: return t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
		}
	}
	function c(e) {
		return e ? "\"" + i(e) + "\"" : "end of input";
	}
	return "Expected " + s(e) + " but " + c(t) + " found.";
};
function We(e, t) {
	t = t === void 0 ? {} : t;
	var n = {}, r = t.grammarSource, i = { DOCUMENT: Eu }, a = Eu, o = "base", s = "prefix", c = "select", l = "distinct", u = "reduced", d = "(", f = "as", p = ")", m = "*", h = "construct", g = "where", _ = "{", v = "}", y = "describe", b = "ask", x = "from", S = "named", C = "group", ee = "by", w = "having", te = "order", ne = "asc", re = "desc", ie = "limit", ae = "offset", oe = "values", se = ";", ce = "load", le = "silent", ue = "into", de = "clear", fe = "drop", pe = "create", me = "add", he = "to", ge = "move", _e = "copy", ve = "insert", ye = "data", be = "delete", xe = "with", Se = "using", Ce = "default", we = "graph", Te = "all", T = ".", Ee = "optional", De = "service", Oe = "bind", ke = "UNDEF", Ae = "minus", je = "union", Me = "filter", E = ",", Ne = "a", Pe = "|", Fe = "/", Ie = "^", Le = "?", Re = "+", ze = "!", Be = "[", Ve = "]", Ue = "||", We = "&&", Ge = "=", Ke = "!=", qe = "<", Je = ">", Ye = "<=", Xe = ">=", Ze = "in", Qe = "not", D = "-", $e = "str", et = "lang", tt = "langmatches", O = "datatype", k = "bound", nt = "iri", rt = "uri", it = "bnode", at = "rand", ot = "abs", st = "ceil", ct = "floor", lt = "round", ut = "concat", dt = "strlen", ft = "ucase", pt = "lcase", mt = "encode_for_uri", ht = "contains", gt = "strbefore", _t = "strstarts", vt = "strends", yt = "strafter", bt = "year", xt = "month", St = "day", Ct = "hours", wt = "minutes", Tt = "seconds", Et = "timezone", Dt = "tz", Ot = "now", A = "uuid", kt = "struuid", At = "md5", j = "sha1", jt = "sha256", Mt = "sha384", Nt = "sha512", Pt = "coalesce", Ft = "if", It = "strlang", Lt = "strdt", Rt = "sameterm", zt = "isuri", Bt = "isiri", Vt = "isblank", Ht = "isliteral", Ut = "isnumeric", Wt = "regex", Gt = "substr", Kt = "replace", qt = "exists", Jt = "count", Yt = "sum", Xt = "min", Zt = "max", Qt = "avg", $t = "sample", en = "group_concat", tn = "separator", nn = "^^", rn = "true", an = "false", on = ":", sn = "_:", cn = "$", ln = "@", un = "'", dn = "\"", fn = "'''", pn = "''", mn = "\"\"\"", hn = "\"\"", gn = "\\", _n = "#", vn = "_", yn = "%", bn = "~", xn = "&", Sn = /^[^<>"{}|\^`\\\0- ]/, M = /^[0-9]/, Cn = /^[a-zA-Z]/, wn = /^[a-zA-Z0-9]/, Tn = /^[eE]/, En = /^[+\-]/, Dn = /^[^'\\\n\r]/, On = /^[^"\\\n\r]/, kn = /^[^'\\]/, An = /^[^"\\]/, jn = /^[tbnrf\\"']/, Mn = /^[ \t]/, Nn = /^[\r\n]/, Pn = /^[^\r\n]/, Fn = /^[A-Z]/, In = /^[a-z]/, Ln = /^[\xC0-\xD6]/, Rn = /^[\xD8-\xF6]/, zn = /^[\xF8-\u02FF]/, Bn = /^[\u0370-\u037D]/, Vn = /^[\u037F-\u1FFF]/, Hn = /^[\u200C-\u200D]/, Un = /^[\u2070-\u218F]/, Wn = /^[\u2C00-\u2FEF]/, Gn = /^[\u3001-\uD7FF]/, Kn = /^[\uF900-\uFDCF]/, qn = /^[\uFDF0-\uFFFD]/, Jn = /^[\xB7]/, Yn = /^[\u0300-\u036F]/, Xn = /^[\u203F-\u2040]/, Zn = /^[A-F]/, Qn = /^[a-f]/, $n = U("BASE", !0), er = U("PREFIX", !0), tr = U("SELECT", !0), nr = U("DISTINCT", !0), rr = U("REDUCED", !0), N = U("(", !1), ir = U("AS", !0), P = U(")", !1), ar = U("*", !1), or = U("CONSTRUCT", !0), sr = U("WHERE", !0), cr = U("{", !1), lr = U("}", !1), ur = U("DESCRIBE", !0), dr = U("ASK", !0), fr = U("FROM", !0), pr = U("NAMED", !0), mr = U("GROUP", !0), hr = U("BY", !0), gr = U("HAVING", !0), _r = U("ORDER", !0), vr = U("ASC", !0), yr = U("DESC", !0), br = U("LIMIT", !0), xr = U("OFFSET", !0), Sr = U("VALUES", !0), Cr = U(";", !1), wr = U("LOAD", !0), Tr = U("SILENT", !0), Er = U("INTO", !0), Dr = U("CLEAR", !0), Or = U("DROP", !0), kr = U("CREATE", !0), Ar = U("ADD", !0), jr = U("TO", !0), Mr = U("MOVE", !0), Nr = U("COPY", !0), Pr = U("INSERT", !0), Fr = U("DATA", !0), Ir = U("DELETE", !0), Lr = U("WITH", !0), Rr = U("USING", !0), zr = U("DEFAULT", !0), Br = U("GRAPH", !0), Vr = U("ALL", !0), F = U(".", !1), Hr = U("OPTIONAL", !0), Ur = U("SERVICE", !0), Wr = U("BIND", !0), Gr = U("UNDEF", !1), Kr = U("MINUS", !0), qr = U("UNION", !0), Jr = U("FILTER", !0), I = U(",", !1), Yr = U("a", !1), Xr = U("|", !1), Zr = U("/", !1), Qr = U("^", !1), $r = U("?", !1), ei = U("+", !1), ti = U("!", !1), ni = U("[", !1), ri = U("]", !1), ii = U("||", !1), ai = U("&&", !1), oi = U("=", !1), si = U("!=", !1), ci = U("<", !1), li = U(">", !1), ui = U("<=", !1), di = U(">=", !1), fi = U("IN", !0), pi = U("NOT", !0), mi = U("-", !1), hi = U("STR", !0), gi = U("LANG", !0), _i = U("LANGMATCHES", !0), vi = U("DATATYPE", !0), yi = U("BOUND", !0), bi = U("IRI", !0), xi = U("URI", !0), Si = U("BNODE", !0), Ci = U("RAND", !0), wi = U("ABS", !0), Ti = U("CEIL", !0), Ei = U("FLOOR", !0), Di = U("ROUND", !0), Oi = U("CONCAT", !0), ki = U("STRLEN", !0), Ai = U("UCASE", !0), ji = U("LCASE", !0), Mi = U("ENCODE_FOR_URI", !0), Ni = U("CONTAINS", !0), Pi = U("STRBEFORE", !0), Fi = U("STRSTARTS", !0), Ii = U("STRENDS", !0), Li = U("STRAFTER", !0), Ri = U("YEAR", !0), zi = U("MONTH", !0), Bi = U("DAY", !0), Vi = U("HOURS", !0), Hi = U("MINUTES", !0), Ui = U("SECONDS", !0), Wi = U("TIMEZONE", !0), Gi = U("TZ", !0), Ki = U("NOW", !0), qi = U("UUID", !0), Ji = U("STRUUID", !0), Yi = U("MD5", !0), Xi = U("SHA1", !0), Zi = U("SHA256", !0), Qi = U("SHA384", !0), $i = U("SHA512", !0), ea = U("COALESCE", !0), ta = U("IF", !0), na = U("STRLANG", !0), ra = U("STRDT", !0), ia = U("sameTerm", !0), aa = U("isURI", !0), oa = U("isIRI", !0), sa = U("isBLANK", !0), ca = U("isLITERAL", !0), la = U("isNUMERIC", !0), ua = U("REGEX", !0), da = U("SUBSTR", !0), fa = U("REPLACE", !0), pa = U("EXISTS", !0), ma = U("COUNT", !0), ha = U("SUM", !0), ga = U("MIN", !0), _a = U("MAX", !0), va = U("AVG", !0), ya = U("SAMPLE", !0), ba = U("GROUP_CONCAT", !0), xa = U("SEPARATOR", !0), Sa = U("^^", !1), Ca = U("true", !0), wa = U("false", !0), Ta = W([
		"<",
		">",
		"\"",
		"{",
		"}",
		"|",
		"^",
		"`",
		"\\",
		["\0", " "]
	], !0, !1), Ea = U(":", !1), Da = U("_:", !1), L = W([["0", "9"]], !1, !1), Oa = U("$", !1), ka = U("@", !1), Aa = W([["a", "z"], ["A", "Z"]], !1, !1), ja = W([
		["a", "z"],
		["A", "Z"],
		["0", "9"]
	], !1, !1), Ma = W(["e", "E"], !1, !1), Na = W(["+", "-"], !1, !1), Pa = U("'", !1), Fa = W([
		"'",
		"\\",
		"\n",
		"\r"
	], !0, !1), Ia = U("\"", !1), La = W([
		"\"",
		"\\",
		"\n",
		"\r"
	], !0, !1), Ra = U("'''", !1), za = U("''", !1), Ba = W(["'", "\\"], !0, !1), Va = U("\"\"\"", !1), Ha = U("\"\"", !1), Ua = W(["\"", "\\"], !0, !1), Wa = U("\\", !1), Ga = W([
		"t",
		"b",
		"n",
		"r",
		"f",
		"\\",
		"\"",
		"'"
	], !1, !1), Ka = W([" ", "	"], !1, !1), qa = W(["\r", "\n"], !1, !1), Ja = W(["\r", "\n"], !0, !1), Ya = U("#", !1), Xa = W([["A", "Z"]], !1, !1), Za = W([["a", "z"]], !1, !1), Qa = W([["À", "Ö"]], !1, !1), $a = W([["Ø", "ö"]], !1, !1), eo = W([["ø", "˿"]], !1, !1), to = W([["Ͱ", "ͽ"]], !1, !1), no = W([["Ϳ", "῿"]], !1, !1), ro = W([["‌", "‍"]], !1, !1), io = W([["⁰", "↏"]], !1, !1), ao = W([["Ⰰ", "⿯"]], !1, !1), oo = W([["、", "퟿"]], !1, !1), so = W([["豈", "﷏"]], !1, !1), co = W([["ﷰ", "�"]], !1, !1), lo = U("_", !1), uo = W(["·"], !1, !1), fo = W([["̀", "ͯ"]], !1, !1), po = W([["‿", "⁀"]], !1, !1), mo = U("%", !1), ho = W([["A", "F"]], !1, !1), go = W([["a", "f"]], !1, !1), _o = U("~", !1), vo = U("&", !1), yo = function(e, t) {
		let n = {};
		n = e.length ? {
			headers: e,
			...t
		} : t;
		let r = Object.entries(Ep).map(([e, t]) => ({
			pos: parseInt(e),
			text: t
		}));
		return r.length && (n.comments = r), {
			"@context": "https://purl.org/sparql-formatter/context.jsonld",
			...n
		};
	}, bo = function(e, t, n) {
		let r = { type: "Query" };
		return e && (r.prologue = e), t.type === "SelectQuery" ? r.selectQuery = t : t.type === "ConstructQuery" ? r.constructQuery = t : t.type === "DescribeQuery" ? r.describeQuery = t : t.type === "AskQuery" && (r.askQuery = t), n && (r.values = n), r;
	}, xo = function(e) {
		if (e.length) return {
			type: "Prologue",
			decl: e
		};
	}, So = function(e) {
		return {
			type: "BaseDecl",
			iriref: e
		};
	}, Co = function(e, t) {
		return {
			type: "PrefixDecl",
			pn_prefix: e,
			iriref: t
		};
	}, wo = function(e, t, n, r) {
		return t.length && (e.from = t), e = {
			type: "SelectQuery",
			selectClause: e,
			whereClause: n,
			...r
		}, e;
	}, To = function(e, t, n, r) {
		let i = {
			type: "SubSelect",
			selectClause: e,
			whereClause: t,
			...n,
			location: H()
		};
		return r && (i.values = r), i;
	}, Eo = function(e, t) {
		let n;
		n = t === "*" ? ["*"] : t.map((e) => e.length === 2 ? e[1] : {
			expression: e[3],
			as: e[7]
		});
		let r = { var: n };
		if (e) {
			let t = e.toUpperCase();
			t === "DISTINCT" ? r.distinct = !0 : t === "REDUCED" && (r.reduced = !0);
		}
		return r.location = H(), r;
	}, Do = function(e, t, n, r) {
		let i = { type: "ConstructQuery" };
		return t.length && (i.from = t), i = {
			...i,
			template: e,
			where: n,
			...r,
			location: H()
		}, i;
	}, Oo = function(e, t, n) {
		let r = { type: "ConstructQuery" };
		return e.length && (r.from = e), r = {
			...r,
			where: [t],
			...n,
			location: H()
		}, r;
	}, ko = function(e, t, n, r) {
		let i = { type: "DescribeQuery" };
		return t.length && (i.from = t), i.describe = e, n && (i.where = n), i = {
			...i,
			...r,
			location: H()
		}, i;
	}, Ao = function(e, t, n) {
		let r = { type: "AskQuery" };
		return e.length && (r.from = e), r = {
			...r,
			where: t,
			...n,
			location: H()
		}, r;
	}, jo = function(e) {
		return e;
	}, Mo = function(e) {
		return {
			graph: e,
			location: H()
		};
	}, No = function(e) {
		return {
			namedGraph: e,
			location: H()
		};
	}, Po = function(e) {
		return e.graphPattern || e;
	}, Fo = function(e, t, n, r) {
		let i = {};
		return e && (i.group = e), t && (i.having = t), n && (i.orderBy = n), r && (i.limitOffset = r), i;
	}, Io = function(e) {
		return e;
	}, Lo = function(e) {
		return e;
	}, Ro = function(e) {
		return e;
	}, zo = function(e, t) {
		return t ? {
			expressionType: "aliasedexpression",
			bracketted: !0,
			expression: e,
			as: t[2],
			location: H()
		} : {
			bracketted: !0,
			...e
		};
	}, Bo = function(e) {
		return e;
	}, Vo = function(e) {
		return e;
	}, Ho = function(e) {
		return e;
	}, Uo = function(e) {
		return e;
	}, Wo = function(e, t) {
		let n = {};
		return e.toUpperCase() === "ASC" ? n = {
			asc: !0,
			...t
		} : e.toUpperCase() === "DESC" && (n = {
			desc: !0,
			...t
		}), n;
	}, Go = function(e) {
		return e;
	}, Ko = function(e) {
		let t = [e[0]];
		return e[1] && t.push(e[1]), t;
	}, qo = function(e) {
		return { limit: parseInt(e.literal) };
	}, Jo = function(e) {
		return { offset: parseInt(e.literal) };
	}, Yo = function(e) {
		return e ? e[1] : null;
	}, Xo = function(e, t) {
		let n = { type: "Update" };
		e && (n.prologue = e);
		let r = [];
		return t && (r = [t[1]], t[2] && (r = r.concat(t[2][3].update))), n.update = r, n;
	}, Zo = function(e, t, n) {
		let r = {
			type: "load",
			silent: e,
			sourceGraph: t
		};
		return n && (r.destinyGraph = n[2]), r;
	}, Qo = function(e, t) {
		return {
			type: "clear",
			silent: e,
			destinyGraph: t
		};
	}, $o = function(e, t) {
		return {
			type: "drop",
			silent: e,
			destinyGraph: t
		};
	}, es = function(e, t) {
		return {
			type: "create",
			silent: e,
			destinyGraph: t
		};
	}, ts = function(e, t, n) {
		return {
			type: "add",
			silent: e,
			graphs: [t, n]
		};
	}, ns = function(e, t, n) {
		return {
			type: "move",
			silent: e,
			graphs: [t, n]
		};
	}, rs = function(e, t, n) {
		return {
			type: "copy",
			silent: e,
			graphs: [t, n]
		};
	}, is = function(e) {
		return {
			type: "insertdata",
			insert: e
		};
	}, as = function(e) {
		return {
			type: "deletedata",
			delete: e
		};
	}, os = function(e) {
		return {
			type: "deletewhere",
			delete: e
		};
	}, ss = function(e, t, n, r) {
		let i = { type: "modify" };
		return e && (i.with = e[2]), t.length === 3 ? (i.delete = t[0], t[2] && (i.insert = t[2])) : i.insert = t, n.length && (i.using = n), i.where = r.graphPattern, i;
	}, cs = function(e) {
		return e;
	}, ls = function(e) {
		return e;
	}, us = function(e) {
		return e.length === 3 ? {
			named: !0,
			iri: e[2]
		} : { iri: e };
	}, ds = function() {
		return "default";
	}, fs = function(e) {
		return e;
	}, ps = function(e) {
		return e;
	}, ms = function(e) {
		return e;
	}, hs = function() {
		return "default";
	}, gs = function() {
		return "named";
	}, _s = function() {
		return "all";
	}, vs = function(e) {
		return e;
	}, ys = function(e) {
		return e;
	}, bs = function(e, t) {
		let n = [];
		return e && (n = n.concat(e)), t.forEach((e) => {
			n = n.concat(e[0]), e[2] && (n = n.concat(e[2]));
		}), n;
	}, xs = function(e, t) {
		return {
			graph: e,
			...t
		};
	}, Ss = function(e, t) {
		let n = [e];
		return t && t[3] && (n = n.concat(t[3].triplePattern)), {
			triplePattern: n,
			location: H()
		};
	}, Cs = function(e) {
		return e;
	}, ws = function(e, t) {
		let n = [];
		return e && n.push(e), t.forEach((e) => {
			n.push(e[0]), e[4] && n.push(e[4]);
		}), {
			graphPattern: n,
			location: H()
		};
	}, Ts = function(e, t) {
		let n = [];
		return n = t && t[3] ? [e].concat(t[3].triplePattern) : [e], {
			type: "TriplesBlock",
			triplePattern: n,
			location: H()
		};
	}, Es = function(e) {
		return {
			type: "OptionalGraphPattern",
			optional: e.graphPattern || e,
			location: H()
		};
	}, Ds = function(e, t) {
		return {
			type: "GraphGraphPattern",
			graph: e,
			...t
		};
	}, Os = function(e, t, n) {
		let r = {
			type: "ServiceGraphPattern",
			service: t,
			pattern: n.graphPattern || n
		};
		return e && (r.silent = !0), r.location = H(), r;
	}, ks = function(e, t) {
		return {
			type: "Bind",
			bind: e,
			as: t,
			location: H()
		};
	}, As = function(e) {
		return e;
	}, js = function(e, t) {
		return {
			oneVar: e,
			data: t,
			location: H()
		};
	}, Ms = function(e, t) {
		return {
			variables: e,
			data: t,
			location: H()
		};
	}, Ns = function(e) {
		return e;
	}, Ps = function(e) {
		return e;
	}, Fs = function(e) {
		return {
			type: "MinusGraphPattern",
			minus: e.graphPattern || e,
			location: H()
		};
	}, Is = function(e, t) {
		return t.length ? {
			union: [e, ...t],
			location: H()
		} : e;
	}, Ls = function(e) {
		return {
			type: "Filter",
			filter: e,
			location: H()
		};
	}, Rs = function(e, t) {
		return {
			functionRef: e,
			args: t.list,
			location: H()
		};
	}, zs = function() {
		return { list: [] };
	}, Bs = function(e, t, n) {
		return {
			distinct: !!e,
			list: [t, ...n]
		};
	}, Vs = function() {
		return [];
	}, Hs = function(e, t) {
		return [e, ...t];
	}, Us = function(e) {
		return e;
	}, Ws = function(e, t) {
		let n = [e];
		return t && t[3] && (n = n.concat(t[3].triplePattern)), {
			triplePattern: n,
			location: H()
		};
	}, Gs = function(e, t) {
		return {
			subject: e,
			properties: t
		};
	}, Ks = function(e, t) {
		return {
			subject: e,
			properties: t
		};
	}, qs = function(e, t, n) {
		let r = [];
		return r.push({
			predicate: e,
			objects: t
		}), n.forEach((e) => {
			e[3] && r.push({
				predicate: e[3][0],
				objects: e[3][2]
			});
		}), r;
	}, Js = function() {
		return {
			a: !0,
			location: H()
		};
	}, Ys = function(e, t) {
		return [e, ...t];
	}, Xs = function(e, t) {
		return {
			subject: e,
			properties: t
		};
	}, Zs = function(e, t) {
		return {
			subject: e,
			properties: t
		};
	}, Qs = function(e, t, n) {
		let r = [];
		return r.push({
			predicate: e,
			objects: t
		}), n.forEach((e) => {
			e[3] && r.push({
				predicate: e[3][0],
				objects: e[3][2]
			});
		}), r;
	}, $s = function(e, t) {
		return [e, ...t];
	}, ec = function(e, t) {
		if (t.length) {
			let n = [e];
			for (let e = 0; e < t.length; e++) n.push(t[e][3]);
			return {
				alternative: n,
				location: H()
			};
		}
		return e;
	}, tc = function(e, t) {
		if (t.length) {
			let n = [e];
			for (let e = 0; e < t.length; e++) n.push(t[e][3]);
			return {
				sequence: n,
				location: H()
			};
		}
		return e;
	}, nc = function(e, t) {
		return t && (e.modifier = t), e;
	}, rc = function(e) {
		return e.inverse = !0, e;
	}, ic = function() {
		return {
			a: !0,
			location: H()
		};
	}, ac = function(e) {
		return {
			bracketted: !0,
			...e
		};
	}, oc = function(e) {
		return {
			collection: e,
			location: H()
		};
	}, sc = function(e) {
		return {
			blankNodeProperties: e,
			location: H()
		};
	}, cc = function(e) {
		return {
			collection: e,
			location: H()
		};
	}, lc = function(e) {
		return {
			blankNodeProperties: e,
			location: H()
		};
	}, uc = function(e) {
		return e;
	}, dc = function(e) {
		return e;
	}, fc = function(e) {
		return e;
	}, pc = function(e) {
		return e;
	}, mc = function(e) {
		return {
			...e,
			location: H()
		};
	}, hc = function(e, t) {
		return t.length ? {
			expressionType: "conditionalor",
			operands: [e, ...t]
		} : e;
	}, gc = function(e, t) {
		return t.length ? {
			expressionType: "conditionaland",
			operands: [e, ...t]
		} : e;
	}, _c = function(e, t) {
		if (t.length) {
			let n = e, r = t[0][1].toUpperCase(), i = t[0][3];
			return r === "NOT" && (r += " " + t[0][3].toUpperCase(), i = t[0][5]), {
				expressionType: "relationalexpression",
				operator: r,
				op1: n,
				op2: i
			};
		}
		return e;
	}, vc = function(e, t) {
		if (t.length === 0) return e;
		let n = [];
		return t.forEach((e) => {
			e.length == 4 && n.push({
				operator: e[1],
				expression: e[3]
			});
		}), {
			expressionType: "additiveexpression",
			op1: e,
			ops: n
		};
	}, yc = function(e, t) {
		return t.length ? {
			expressionType: "multiplicativeexpression",
			first: e,
			rest: t.map((e) => ({
				operator: e[1],
				expression: e[3]
			}))
		} : e;
	}, bc = function(e) {
		return {
			expressionType: "unaryexpression",
			unaryexpression: "!",
			expression: e
		};
	}, xc = function(e) {
		return {
			expressionType: "unaryexpression",
			unaryexpression: "+",
			expression: e
		};
	}, Sc = function(e) {
		return {
			expressionType: "unaryexpression",
			unaryexpression: "-",
			expression: e
		};
	}, Cc = function(e) {
		return {
			expressionType: "atomic",
			value: e
		};
	}, wc = function(e) {
		return {
			expressionType: "atomic",
			value: e
		};
	}, Tc = function(e) {
		return {
			expressionType: "atomic",
			value: e
		};
	}, Ec = function(e) {
		return {
			expressionType: "atomic",
			value: e
		};
	}, Dc = function(e) {
		return {
			bracketted: !0,
			...e
		};
	}, Oc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "str",
			args: [e]
		};
	}, kc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "lang",
			args: [e]
		};
	}, Ac = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "langMatches",
			args: [e, t]
		};
	}, jc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "datatype",
			args: [e]
		};
	}, Mc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "bound",
			args: [e]
		};
	}, Nc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "IRI",
			args: [e]
		};
	}, Pc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "URI",
			args: [e]
		};
	}, Fc = function(e) {
		let t = {
			expressionType: "builtincall",
			builtincall: "BNODE",
			args: null
		};
		return e.length === 5 && (t.args = [e[2]]), t;
	}, Ic = function() {
		return {
			expressionType: "builtincall",
			builtincall: "rand"
		};
	}, Lc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "abs",
			args: [e]
		};
	}, Rc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "ceil",
			args: [e]
		};
	}, zc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "floor",
			args: [e]
		};
	}, Bc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "round",
			args: [e]
		};
	}, Vc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "CONCAT",
			args: e
		};
	}, Hc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "STRLEN",
			args: [e]
		};
	}, Uc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "UCASE",
			args: [e]
		};
	}, Wc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "LCASE",
			args: [e]
		};
	}, Gc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "ENCODE_FOR_URI",
			args: [e]
		};
	}, Kc = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "CONTAINS",
			args: [e, t]
		};
	}, qc = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "STRBEFORE",
			args: [e, t]
		};
	}, Jc = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "STRSTARTS",
			args: [e, t]
		};
	}, Yc = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "STRENDS",
			args: [e, t]
		};
	}, Xc = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "STRAFTER",
			args: [e, t]
		};
	}, Zc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "year",
			args: [e]
		};
	}, Qc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "month",
			args: [e]
		};
	}, $c = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "day",
			args: [e]
		};
	}, el = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "hours",
			args: [e]
		};
	}, tl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "minutes",
			args: [e]
		};
	}, nl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "seconds",
			args: [e]
		};
	}, rl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "timezone",
			args: [e]
		};
	}, il = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "tz",
			args: [e]
		};
	}, al = function() {
		return {
			expressionType: "builtincall",
			builtincall: "now"
		};
	}, ol = function() {
		return {
			expressionType: "builtincall",
			builtincall: "UUID"
		};
	}, sl = function() {
		return {
			expressionType: "builtincall",
			builtincall: "STRUUID"
		};
	}, cl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "MD5",
			args: [e]
		};
	}, ll = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "SHA1",
			args: [e]
		};
	}, ul = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "SHA256",
			args: [e]
		};
	}, dl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "SHA384",
			args: [e]
		};
	}, fl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "SHA512",
			args: [e]
		};
	}, pl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "COALESCE",
			args: e
		};
	}, ml = function(e, t, n) {
		return {
			expressionType: "builtincall",
			builtincall: "IF",
			args: [
				e,
				t,
				n
			]
		};
	}, hl = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "STRLANG",
			args: [e, t]
		};
	}, gl = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "STRDT",
			args: [e, t]
		};
	}, _l = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "sameTerm",
			args: [e, t]
		};
	}, vl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "isURI",
			args: [e]
		};
	}, yl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "isBlank",
			args: [e]
		};
	}, bl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "isLiteral",
			args: [e]
		};
	}, xl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "isNumeric",
			args: [e]
		};
	}, Sl = function(e, t, n) {
		let r = {
			expressionType: "regex",
			text: e,
			pattern: t
		};
		return n && (r.flags = n[2]), r;
	}, Cl = function(e, t, n) {
		let r = [e, t];
		return n && r.push(n[2]), {
			expressionType: "builtincall",
			builtincall: "substr",
			args: r
		};
	}, wl = function(e, t, n, r) {
		let i = [
			e,
			t,
			n
		];
		return r && i.push(r[2]), {
			expressionType: "builtincall",
			builtincall: "replace",
			args: i
		};
	}, Tl = function(e) {
		return { exists: e.graphPattern || e };
	}, El = function(e) {
		return { notexists: e.graphPattern || e };
	}, Dl = function(e, t) {
		return {
			expressionType: "aggregate",
			aggregateType: "count",
			distinct: !!e,
			expression: t
		};
	}, Ol = function(e, t) {
		return {
			expressionType: "aggregate",
			aggregateType: "sum",
			distinct: !!e,
			expression: t
		};
	}, kl = function(e, t) {
		return {
			expressionType: "aggregate",
			aggregateType: "min",
			distinct: !!e,
			expression: t
		};
	}, Al = function(e, t) {
		return {
			expressionType: "aggregate",
			aggregateType: "max",
			distinct: !!e,
			expression: t
		};
	}, jl = function(e, t) {
		return {
			expressionType: "aggregate",
			aggregateType: "avg",
			distinct: !!e,
			expression: t
		};
	}, Ml = function(e, t) {
		return {
			expressionType: "aggregate",
			aggregateType: "sample",
			distinct: !!e,
			expression: t
		};
	}, Nl = function(e, t, n) {
		let r = null;
		return n?.length && (r = n[7]), {
			expressionType: "aggregate",
			aggregateType: "group_concat",
			expression: t,
			separator: r,
			distinct: !!e
		};
	}, Pl = function(e, t) {
		let n = {
			expressionType: "irireforfunction",
			iriref: e
		};
		return t && (n.args = t.list), n;
	}, Fl = function(e, t) {
		return typeof t == "string" ? e.lang = t : t && (e.dataType = t[1]), e.location = H(), e;
	}, Il = function() {
		return {
			dataType: "http://www.w3.org/2001/XMLSchema#boolean",
			literal: !0
		};
	}, Ll = function() {
		return {
			dataType: "http://www.w3.org/2001/XMLSchema#boolean",
			literal: !1
		};
	}, Rl = function(e) {
		return {
			type: "IRIref",
			iriref: e,
			location: H()
		};
	}, zl = function(e) {
		return e;
	}, Bl = function(e) {
		return {
			type: "PrefixedName",
			pn_prefix: e.pn_prefix,
			pn_local: e.pn_local,
			location: H()
		};
	}, Vl = function(e) {
		return {
			type: "PrefixedName",
			pn_prefix: e,
			location: H()
		};
	}, Hl = function(e) {
		return {
			blankNode: e,
			location: H()
		};
	}, Ul = function() {
		return {
			blankNode: "[]",
			location: H()
		};
	}, Wl = function(e) {
		return e.join("");
	}, Gl = function(e) {
		return e || "";
	}, Kl = function(e, t) {
		return {
			pn_prefix: e,
			pn_local: t
		};
	}, ql = function() {
		return V();
	}, Jl = function(e) {
		return {
			type: "Var",
			varType: "VAR1",
			varname: e
		};
	}, Yl = function(e) {
		return {
			type: "Var",
			varType: "VAR2",
			varname: e
		};
	}, Xl = function(e, t) {
		let n = e.join("");
		return t.length && (n += "-" + t[0][1].join("")), n.toLowerCase();
	}, Zl = function() {
		return {
			dataType: "http://www.w3.org/2001/XMLSchema#integer",
			literal: V()
		};
	}, Ql = function() {
		return {
			dataType: "http://www.w3.org/2001/XMLSchema#decimal",
			literal: V()
		};
	}, $l = function() {
		return {
			dataType: "http://www.w3.org/2001/XMLSchema#double",
			literal: V()
		};
	}, eu = function() {
		return {
			dataType: "http://www.w3.org/2001/XMLSchema#double",
			literal: V()
		};
	}, tu = function() {
		return {
			dataType: "http://www.w3.org/2001/XMLSchema#double",
			literal: V()
		};
	}, nu = function(e) {
		return e.literal = "+" + e.literal, e;
	}, ru = function(e) {
		return e.literal = "+" + e.literal, e;
	}, iu = function(e) {
		return e.literal = "+" + e.literal, e;
	}, au = function(e) {
		return e.literal = "-" + e.literal, e;
	}, ou = function(e) {
		return e.literal = "-" + e.literal, e;
	}, su = function(e) {
		return e.literal = "-" + e.literal, e;
	}, cu = function(e) {
		return {
			quote: "'",
			literal: e.join("")
		};
	}, lu = function(e) {
		return {
			quote: "\"",
			literal: e.join("")
		};
	}, uu = function(e) {
		return {
			quote: "'''",
			literal: e.map((e) => e[0] ? e[0] + e[1] : e[1]).join("")
		};
	}, du = function(e) {
		return {
			quote: "\"\"\"",
			literal: e.map((e) => e[0] ? e[0] + e[1] : e[1]).join("")
		};
	}, fu = function() {
		return V();
	}, pu = function() {
		return V();
	}, mu = function() {
		return Ep[H().start.offset] = V(), "";
	}, hu = function() {
		return V();
	}, gu = function() {
		return V();
	}, _u = function() {
		return V();
	}, R = 0, z = 0, vu = [{
		line: 1,
		column: 1
	}], yu = 0, bu = [], B = 0, xu;
	if ("startRule" in t) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function V() {
		return e.substring(z, R);
	}
	function H() {
		return wu(z, R);
	}
	function U(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function W(e, t, n) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n
		};
	}
	function Su() {
		return { type: "end" };
	}
	function Cu(t) {
		var n = vu[t], r;
		if (n) return n;
		for (r = t - 1; !vu[r];) r--;
		for (n = vu[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return vu[t] = n, n;
	}
	function wu(e, t, n) {
		var i = Cu(e), a = Cu(t), o = {
			source: r,
			start: {
				offset: e,
				line: i.line,
				column: i.column
			},
			end: {
				offset: t,
				line: a.line,
				column: a.column
			}
		};
		return n && r && typeof r.offset == "function" && (o.start = r.offset(o.start), o.end = r.offset(o.end)), o;
	}
	function G(e) {
		R < yu || (R > yu && (yu = R, bu = []), bu.push(e));
	}
	function Tu(e, t, n) {
		return new He(He.buildMessage(e, t), e, t, n);
	}
	function Eu() {
		for (var e = R, t = [], r = mp(), i, a, o; r !== n;) t.push(r), r = mp();
		for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
		if (i = Du(), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			z = e, e = yo(t, i);
		} else R = e, e = n;
		return e;
	}
	function Du() {
		var e = Ou();
		return e === n && (e = $u()), e;
	}
	function Ou() {
		for (var e = R, t = ku(), r = [], i = Q(), a; i !== n;) r.push(i), i = Q();
		return i = Mu(), i === n && (i = Fu(), i === n && (i = Iu(), i === n && (i = Lu()))), i === n ? (R = e, e = n) : (a = Qu(), z = e, e = bo(t, i, a)), e;
	}
	function ku() {
		var e = R, t = [], r = Au();
		for (r === n && (r = ju()); r !== n;) t.push(r), r = Au(), r === n && (r = ju());
		return z = e, t = xo(t), e = t, e;
	}
	function Au() {
		for (var t = R, r = [], i = Q(), a, s; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 4).toLowerCase() === o ? (i = e.substr(R, 4), R += 4) : (i = n, B === 0 && G($n)), i !== n) {
			for (a = [], s = Q(); s !== n;) a.push(s), s = Q();
			s = Hf(), s === n ? (R = t, t = n) : (z = t, t = So(s));
		} else R = t, t = n;
		return t;
	}
	function ju() {
		for (var t = R, r = [], i = Q(), a, o, c, l; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 6).toLowerCase() === s ? (i = e.substr(R, 6), R += 6) : (i = n, B === 0 && G(er)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = Uf(), o !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = Hf(), l === n ? (R = t, t = n) : (z = t, t = Co(o, l));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Mu() {
		var e = R, t = Pu(), r, i, a, o, s, c;
		if (t !== n) {
			for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
			for (i = [], a = Ru(); a !== n;) i.push(a), a = Ru();
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = Vu(), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				c = Hu(), z = e, e = wo(t, i, o, c);
			} else R = e, e = n;
		} else R = e, e = n;
		return e;
	}
	function Nu() {
		var e = R, t = Pu(), r, i, a, o, s;
		if (t !== n) {
			for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
			if (i = Vu(), i !== n) {
				for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
				o = Hu(), s = Qu(), z = e, e = To(t, i, o, s);
			} else R = e, e = n;
		} else R = e, e = n;
		return e;
	}
	function Pu() {
		var t = R, r, i, a, o, s, h, g, _, v, y, b, x, S, C, ee, w;
		if (e.substr(R, 6).toLowerCase() === c ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(tr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 8).toLowerCase() === l ? (a = e.substr(R, 8), R += 8) : (a = n, B === 0 && G(nr)), a === n && (e.substr(R, 7).toLowerCase() === u ? (a = e.substr(R, 7), R += 7) : (a = n, B === 0 && G(rr))), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			for (s = [], h = R, g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
			if (_ = q(), _ === n ? (R = h, h = n) : (g = [g, _], h = g), h === n) {
				for (h = R, g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
				if (e.charCodeAt(R) === 40 ? (_ = d, R++) : (_ = n, B === 0 && G(N)), _ !== n) {
					for (v = [], y = Q(); y !== n;) v.push(y), y = Q();
					if (y = J(), y !== n) {
						for (b = [], x = Q(); x !== n;) b.push(x), x = Q();
						if (e.substr(R, 2).toLowerCase() === f ? (x = e.substr(R, 2), R += 2) : (x = n, B === 0 && G(ir)), x !== n) {
							for (S = [], C = Q(); C !== n;) S.push(C), C = Q();
							if (C = q(), C !== n) {
								for (ee = [], w = Q(); w !== n;) ee.push(w), w = Q();
								e.charCodeAt(R) === 41 ? (w = p, R++) : (w = n, B === 0 && G(P)), w === n ? (R = h, h = n) : (g = [
									g,
									_,
									v,
									y,
									b,
									x,
									S,
									C,
									ee,
									w
								], h = g);
							} else R = h, h = n;
						} else R = h, h = n;
					} else R = h, h = n;
				} else R = h, h = n;
			}
			if (h !== n) for (; h !== n;) {
				for (s.push(h), h = R, g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
				if (_ = q(), _ === n ? (R = h, h = n) : (g = [g, _], h = g), h === n) {
					for (h = R, g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
					if (e.charCodeAt(R) === 40 ? (_ = d, R++) : (_ = n, B === 0 && G(N)), _ !== n) {
						for (v = [], y = Q(); y !== n;) v.push(y), y = Q();
						if (y = J(), y !== n) {
							for (b = [], x = Q(); x !== n;) b.push(x), x = Q();
							if (e.substr(R, 2).toLowerCase() === f ? (x = e.substr(R, 2), R += 2) : (x = n, B === 0 && G(ir)), x !== n) {
								for (S = [], C = Q(); C !== n;) S.push(C), C = Q();
								if (C = q(), C !== n) {
									for (ee = [], w = Q(); w !== n;) ee.push(w), w = Q();
									e.charCodeAt(R) === 41 ? (w = p, R++) : (w = n, B === 0 && G(P)), w === n ? (R = h, h = n) : (g = [
										g,
										_,
										v,
										y,
										b,
										x,
										S,
										C,
										ee,
										w
									], h = g);
								} else R = h, h = n;
							} else R = h, h = n;
						} else R = h, h = n;
					} else R = h, h = n;
				}
			}
			else s = n;
			s === n && (e.charCodeAt(R) === 42 ? (s = m, R++) : (s = n, B === 0 && G(ar))), s === n ? (R = t, t = n) : (z = t, t = Eo(a, s));
		} else R = t, t = n;
		return t;
	}
	function Fu() {
		var t = R, r, i, a, o, s, c, l, u, d, f, p, m, y;
		if (e.substr(R, 9).toLowerCase() === h ? (r = e.substr(R, 9), R += 9) : (r = n, B === 0 && G(or)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = Ud(), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				for (s = [], c = Ru(); c !== n;) s.push(c), c = Ru();
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (l = Vu(), l !== n) {
					for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
					d = Hu(), z = t, t = Do(a, s, l, d);
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		if (t === n) {
			if (t = R, e.substr(R, 9).toLowerCase() === h ? (r = e.substr(R, 9), R += 9) : (r = n, B === 0 && G(or)), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				for (a = [], o = Ru(); o !== n;) a.push(o), o = Ru();
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.substr(R, 5).toLowerCase() === g ? (s = e.substr(R, 5), R += 5) : (s = n, B === 0 && G(sr)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					if (e.charCodeAt(R) === 123 ? (l = _, R++) : (l = n, B === 0 && G(cr)), l !== n) {
						for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
						for (d = Sd(), d === n && (d = null), f = [], p = Q(); p !== n;) f.push(p), p = Q();
						if (e.charCodeAt(R) === 125 ? (p = v, R++) : (p = n, B === 0 && G(lr)), p !== n) {
							for (m = [], y = Q(); y !== n;) m.push(y), y = Q();
							y = Hu(), z = t, t = Oo(a, d, y);
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
		}
		return t;
	}
	function Iu() {
		var t = R, r, i, a, o, s, c, l, u, d;
		if (e.substr(R, 8).toLowerCase() === y ? (r = e.substr(R, 8), R += 8) : (r = n, B === 0 && G(ur)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = [], o = vf(), o !== n) for (; o !== n;) a.push(o), o = vf();
			else a = n;
			if (a === n && (e.charCodeAt(R) === 42 ? (a = m, R++) : (a = n, B === 0 && G(ar))), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				for (s = [], c = Ru(); c !== n;) s.push(c), c = Ru();
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				for (l = Vu(), l === n && (l = null), u = [], d = Q(); d !== n;) u.push(d), d = Q();
				d = Hu(), z = t, t = ko(a, s, l, d);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Lu() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 3).toLowerCase() === b ? (i = e.substr(R, 3), R += 3) : (i = n, B === 0 && G(dr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			for (o = [], s = Ru(); s !== n;) o.push(s), s = Ru();
			for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
			if (c = Vu(), c !== n) {
				for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
				u = Hu(), z = t, t = Ao(o, c, u);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Ru() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 4).toLowerCase() === x ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(fr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = zu(), a === n && (a = Bu()), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				z = t, t = jo(a);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function zu() {
		for (var e = R, t = [], r = Q(); r !== n;) t.push(r), r = Q();
		return r = Z(), r === n ? (R = e, e = n) : (z = e, e = Mo(r)), e;
	}
	function Bu() {
		var t = R, r, i, a;
		if (e.substr(R, 5).toLowerCase() === S ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(pr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			a = Z(), a === n ? (R = t, t = n) : (z = t, t = No(a));
		} else R = t, t = n;
		return t;
	}
	function Vu() {
		var t = R, r, i, a;
		for (e.substr(R, 5).toLowerCase() === g ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(sr)), r === n && (r = null), i = [], a = Q(); a !== n;) i.push(a), a = Q();
		return a = K(), a === n ? (R = t, t = n) : (z = t, t = Po(a)), t;
	}
	function Hu() {
		var e = R, t = Uu(), r, i, a;
		return t === n && (t = null), r = Gu(), r === n && (r = null), i = qu(), i === n && (i = null), a = Yu(), a === n && (a = null), z = e, e = Fo(t, r, i, a), e;
	}
	function Uu() {
		var t = R, r, i, a, o, s, c;
		if (e.substr(R, 5).toLowerCase() === C ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(mr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.substr(R, 2).toLowerCase() === ee ? (a = e.substr(R, 2), R += 2) : (a = n, B === 0 && G(hr)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (s = [], c = Wu(), c !== n) for (; c !== n;) s.push(c), c = Wu();
				else s = n;
				s === n ? (R = t, t = n) : (z = t, t = Io(s));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Wu() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u, m, h; i !== n;) r.push(i), i = Q();
		if (i = Tf(), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			z = t, t = Lo(i);
		} else R = t, t = n;
		if (t === n) {
			for (t = R, r = [], i = Q(); i !== n;) r.push(i), i = Q();
			if (i = Bd(), i !== n) {
				for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
				z = t, t = Ro(i);
			} else R = t, t = n;
			if (t === n) {
				for (t = R, r = [], i = Q(); i !== n;) r.push(i), i = Q();
				if (e.charCodeAt(R) === 40 ? (i = d, R++) : (i = n, B === 0 && G(N)), i !== n) {
					for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
					if (o = J(), o !== n) {
						for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
						if (c = R, e.substr(R, 2).toLowerCase() === f ? (l = e.substr(R, 2), R += 2) : (l = n, B === 0 && G(ir)), l !== n) {
							for (u = [], m = Q(); m !== n;) u.push(m), m = Q();
							m = q(), m === n ? (R = c, c = n) : (l = [
								l,
								u,
								m
							], c = l);
						} else R = c, c = n;
						for (c === n && (c = null), l = [], u = Q(); u !== n;) l.push(u), u = Q();
						if (e.charCodeAt(R) === 41 ? (u = p, R++) : (u = n, B === 0 && G(P)), u !== n) {
							for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
							z = t, t = zo(o, c);
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
				if (t === n) {
					for (t = R, r = [], i = Q(); i !== n;) r.push(i), i = Q();
					if (i = q(), i !== n) {
						for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
						z = t, t = Bo(i);
					} else R = t, t = n;
				}
			}
		}
		return t;
	}
	function Gu() {
		var t = R, r, i, a, o;
		if (e.substr(R, 6).toLowerCase() === w ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(gr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = [], o = Ku(), o !== n) for (; o !== n;) a.push(o), o = Ku();
			else a = n;
			a === n ? (R = t, t = n) : (z = t, t = Vo(a));
		} else R = t, t = n;
		return t;
	}
	function Ku() {
		var e = R, t = zd(), r, i;
		if (t !== n) {
			for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
			z = e, e = Ho(t);
		} else R = e, e = n;
		return e;
	}
	function qu() {
		var t = R, r, i, a, o, s, c, l;
		if (e.substr(R, 5).toLowerCase() === te ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(_r)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.substr(R, 2).toLowerCase() === ee ? (a = e.substr(R, 2), R += 2) : (a = n, B === 0 && G(hr)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (s = [], c = Ju(), c !== n) for (; c !== n;) s.push(c), c = Ju();
				else s = n;
				if (s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					z = t, t = Uo(s);
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Ju() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 3).toLowerCase() === ne ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(vr)), r === n && (e.substr(R, 4).toLowerCase() === re ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(yr))), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = wf(), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				z = t, t = Wo(r, a);
			} else R = t, t = n;
		} else R = t, t = n;
		if (t === n) {
			if (t = R, r = zd(), r === n && (r = q()), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				z = t, t = Go(r);
			} else R = t, t = n;
		}
		return t;
	}
	function Yu() {
		var e = R, t = R, r = Xu(), i;
		return r === n ? (R = t, t = n) : (i = Zu(), i === n && (i = null), r = [r, i], t = r), t === n && (t = R, r = Zu(), r === n ? (R = t, t = n) : (i = Xu(), i === n && (i = null), r = [r, i], t = r)), t !== n && (z = e, t = Ko(t)), e = t, e;
	}
	function Xu() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 5).toLowerCase() === ie ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(br)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = Yf(), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				z = t, t = qo(a);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Zu() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 6).toLowerCase() === ae ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(xr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = Yf(), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				z = t, t = Jo(a);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Qu() {
		var t = R, r = R, i, a;
		return e.substr(R, 6).toLowerCase() === oe ? (i = e.substr(R, 6), R += 6) : (i = n, B === 0 && G(Sr)), i === n ? (R = r, r = n) : (a = jd(), a === n ? (R = r, r = n) : (i = [i, a], r = i)), r === n && (r = null), z = t, r = Yo(r), t = r, t;
	}
	function $u() {
		for (var t = R, r = ku(), i = R, a = [], o = Q(), s, c, l, u, d; o !== n;) a.push(o), o = Q();
		if (o = ed(), o !== n) {
			for (s = R, c = [], l = Q(); l !== n;) c.push(l), l = Q();
			if (e.charCodeAt(R) === 59 ? (l = se, R++) : (l = n, B === 0 && G(Cr)), l !== n) {
				for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
				d = $u(), c = [
					c,
					l,
					u,
					d
				], s = c;
			} else R = s, s = n;
			s === n && (s = null), a = [
				a,
				o,
				s
			], i = a;
		} else R = i, i = n;
		for (i === n && (i = null), a = [], o = Q(); o !== n;) a.push(o), o = Q();
		return z = t, t = Xo(r, i), t;
	}
	function ed() {
		var e = td();
		return e === n && (e = nd(), e === n && (e = rd(), e === n && (e = ad(), e === n && (e = od(), e === n && (e = sd(), e === n && (e = id(), e === n && (e = cd(), e === n && (e = ld(), e === n && (e = ud(), e === n && (e = dd())))))))))), e;
	}
	function td() {
		var t = R, r, i, a, o, s, c, l, u, d, f;
		if (e.substr(R, 4).toLowerCase() === ce ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(wr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (s = Z(), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (l = R, e.substr(R, 4).toLowerCase() === ue ? (u = e.substr(R, 4), R += 4) : (u = n, B === 0 && G(Er)), u !== n) {
					for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
					f = gd(), f === n ? (R = l, l = n) : (u = [
						u,
						d,
						f
					], l = u);
				} else R = l, l = n;
				l === n && (l = null), z = t, t = Zo(a, s, l);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function nd() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 5).toLowerCase() === de ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Dr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			s = _d(), s === n ? (R = t, t = n) : (z = t, t = Qo(a, s));
		} else R = t, t = n;
		return t;
	}
	function rd() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 4).toLowerCase() === fe ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Or)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			s = _d(), s === n ? (R = t, t = n) : (z = t, t = $o(a, s));
		} else R = t, t = n;
		return t;
	}
	function id() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 6).toLowerCase() === pe ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(kr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			s = gd(), s === n ? (R = t, t = n) : (z = t, t = es(a, s));
		} else R = t, t = n;
		return t;
	}
	function ad() {
		var t = R, r, i, a, o, s, c, l, u, d;
		if (e.substr(R, 3).toLowerCase() === me ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(Ar)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (s = hd(), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (e.substr(R, 2).toLowerCase() === he ? (l = e.substr(R, 2), R += 2) : (l = n, B === 0 && G(jr)), l !== n) {
					for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
					d = hd(), d === n ? (R = t, t = n) : (z = t, t = ts(a, s, d));
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function od() {
		var t = R, r, i, a, o, s, c, l, u, d;
		if (e.substr(R, 4).toLowerCase() === ge ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Mr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (s = hd(), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (e.substr(R, 2).toLowerCase() === he ? (l = e.substr(R, 2), R += 2) : (l = n, B === 0 && G(jr)), l !== n) {
					for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
					d = hd(), d === n ? (R = t, t = n) : (z = t, t = ns(a, s, d));
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function sd() {
		var t = R, r, i, a, o, s, c, l, u, d;
		if (e.substr(R, 4).toLowerCase() === _e ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Nr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (s = hd(), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (e.substr(R, 2).toLowerCase() === he ? (l = e.substr(R, 2), R += 2) : (l = n, B === 0 && G(jr)), l !== n) {
					for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
					d = hd(), d === n ? (R = t, t = n) : (z = t, t = rs(a, s, d));
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function cd() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 6).toLowerCase() === ve ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Pr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.substr(R, 4).toLowerCase() === ye ? (a = e.substr(R, 4), R += 4) : (a = n, B === 0 && G(Fr)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				s = yd(), s === n ? (R = t, t = n) : (z = t, t = is(s));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function ld() {
		var t = R, r, i, a, o;
		if (e.substr(R, 6).toLowerCase() === be ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Ir)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			e.substr(R, 4).toLowerCase() === ye ? (a = e.substr(R, 4), R += 4) : (a = n, B === 0 && G(Fr)), a === n ? (R = t, t = n) : (o = yd(), o === n ? (R = t, t = n) : (z = t, t = as(o)));
		} else R = t, t = n;
		return t;
	}
	function ud() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 6).toLowerCase() === be ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Ir)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.substr(R, 5).toLowerCase() === g ? (a = e.substr(R, 5), R += 5) : (a = n, B === 0 && G(sr)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				s = vd(), s === n ? (R = t, t = n) : (z = t, t = os(s));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function dd() {
		var t = R, r = R, i, a, o, s, c, l, u, d, f;
		if (e.substr(R, 4).toLowerCase() === xe ? (i = e.substr(R, 4), R += 4) : (i = n, B === 0 && G(Lr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = Z(), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				i = [
					i,
					a,
					o,
					s
				], r = i;
			} else R = r, r = n;
		} else R = r, r = n;
		if (r === n && (r = null), i = R, a = fd(), a !== n) {
			for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
			s = pd(), s === n && (s = null), a = [
				a,
				o,
				s
			], i = a;
		} else R = i, i = n;
		if (i === n && (i = pd()), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			for (o = [], s = md(); s !== n;) o.push(s), s = md();
			for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
			if (e.substr(R, 5).toLowerCase() === g ? (c = e.substr(R, 5), R += 5) : (c = n, B === 0 && G(sr)), c !== n) {
				for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
				if (u = K(), u !== n) {
					for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
					z = t, t = ss(r, i, o, u);
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function fd() {
		var t = R, r, i;
		return e.substr(R, 6).toLowerCase() === be ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Ir)), r === n ? (R = t, t = n) : (i = vd(), i === n ? (R = t, t = n) : (z = t, t = cs(i))), t;
	}
	function pd() {
		var t = R, r, i;
		return e.substr(R, 6).toLowerCase() === ve ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Pr)), r === n ? (R = t, t = n) : (i = vd(), i === n ? (R = t, t = n) : (z = t, t = ls(i))), t;
	}
	function md() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 5).toLowerCase() === Se ? (i = e.substr(R, 5), R += 5) : (i = n, B === 0 && G(Rr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = Z(), o === n) {
				if (o = R, e.substr(R, 5).toLowerCase() === S ? (s = e.substr(R, 5), R += 5) : (s = n, B === 0 && G(pr)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = Z(), l === n ? (R = o, o = n) : (s = [
						s,
						c,
						l
					], o = s);
				} else R = o, o = n;
			}
			o === n ? (R = t, t = n) : (z = t, t = us(o));
		} else R = t, t = n;
		return t;
	}
	function hd() {
		var t = R, r, i, a;
		if (e.substr(R, 7).toLowerCase() === Ce ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(zr)), r !== n && (z = t, r = ds()), t = r, t === n) {
			for (t = R, e.substr(R, 5).toLowerCase() === we ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Br)), r === n && (r = null), i = [], a = Q(); a !== n;) i.push(a), a = Q();
			a = Z(), a === n ? (R = t, t = n) : (z = t, t = fs(a));
		}
		return t;
	}
	function gd() {
		var t = R, r, i, a;
		if (e.substr(R, 5).toLowerCase() === we ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Br)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			a = Z(), a === n ? (R = t, t = n) : (z = t, t = ps(a));
		} else R = t, t = n;
		return t;
	}
	function _d() {
		var t = R, r = gd();
		return r !== n && (z = t, r = ms(r)), t = r, t === n && (t = R, e.substr(R, 7).toLowerCase() === Ce ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(zr)), r !== n && (z = t, r = hs()), t = r, t === n && (t = R, e.substr(R, 5).toLowerCase() === S ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(pr)), r !== n && (z = t, r = gs()), t = r, t === n && (t = R, e.substr(R, 3).toLowerCase() === Te ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(Vr)), r !== n && (z = t, r = _s()), t = r))), t;
	}
	function vd() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u; i !== n;) r.push(i), i = Q();
		if (e.charCodeAt(R) === 123 ? (i = _, R++) : (i = n, B === 0 && G(cr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			for (o = bd(), s = [], c = Q(); c !== n;) s.push(c), c = Q();
			if (e.charCodeAt(R) === 125 ? (c = v, R++) : (c = n, B === 0 && G(lr)), c !== n) {
				for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
				z = t, t = vs(o);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function yd() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u; i !== n;) r.push(i), i = Q();
		if (e.charCodeAt(R) === 123 ? (i = _, R++) : (i = n, B === 0 && G(cr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			for (o = bd(), s = [], c = Q(); c !== n;) s.push(c), c = Q();
			if (e.charCodeAt(R) === 125 ? (c = v, R++) : (c = n, B === 0 && G(lr)), c !== n) {
				for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
				z = t, t = ys(o);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function bd() {
		var t = R, r = Sd(), i, a, o, s, c;
		for (r === n && (r = null), i = [], a = R, o = xd(), o === n ? (R = a, a = n) : (e.charCodeAt(R) === 46 ? (s = T, R++) : (s = n, B === 0 && G(F)), s === n && (s = null), c = Sd(), c === n && (c = null), o = [
			o,
			s,
			c
		], a = o); a !== n;) i.push(a), a = R, o = xd(), o === n ? (R = a, a = n) : (e.charCodeAt(R) === 46 ? (s = T, R++) : (s = n, B === 0 && G(F)), s === n && (s = null), c = Sd(), c === n && (c = null), o = [
			o,
			s,
			c
		], a = o);
		return z = t, t = bs(r, i), t;
	}
	function xd() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u, d, f, p, m; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 5).toLowerCase() === we ? (i = e.substr(R, 5), R += 5) : (i = n, B === 0 && G(Br)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = vf(), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				if (e.charCodeAt(R) === 123 ? (c = _, R++) : (c = n, B === 0 && G(cr)), c !== n) {
					for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
					for (u = Sd(), u === n && (u = null), d = [], f = Q(); f !== n;) d.push(f), f = Q();
					if (e.charCodeAt(R) === 125 ? (f = v, R++) : (f = n, B === 0 && G(lr)), f !== n) {
						for (p = [], m = Q(); m !== n;) p.push(m), m = Q();
						z = t, t = xs(o, u);
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Sd() {
		var t = R, r = Gd(), i, a, o, s, c;
		if (r !== n) {
			for (i = R, a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (e.charCodeAt(R) === 46 ? (o = T, R++) : (o = n, B === 0 && G(F)), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				c = Sd(), c === n && (c = null), a = [
					a,
					o,
					s,
					c
				], i = a;
			} else R = i, i = n;
			i === n && (i = null), z = t, t = Ss(r, i);
		} else R = t, t = n;
		return t;
	}
	function K() {
		var t = R, r, i, a, o, s;
		if (e.charCodeAt(R) === 123 ? (r = _, R++) : (r = n, B === 0 && G(cr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = Nu(), a === n && (a = Cd()), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				e.charCodeAt(R) === 125 ? (s = v, R++) : (s = n, B === 0 && G(lr)), s === n ? (R = t, t = n) : (z = t, t = Cs(a));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Cd() {
		var t = R, r = wd(), i, a, o, s, c, l, u, d;
		for (r === n && (r = null), i = [], a = Q(); a !== n;) i.push(a), a = Q();
		if (a = [], o = R, s = Td(), s !== n) {
			for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
			for (e.charCodeAt(R) === 46 ? (l = T, R++) : (l = n, B === 0 && G(F)), l === n && (l = null), u = [], d = Q(); d !== n;) u.push(d), d = Q();
			d = wd(), d === n && (d = null), s = [
				s,
				c,
				l,
				u,
				d
			], o = s;
		} else R = o, o = n;
		for (; o !== n;) if (a.push(o), o = R, s = Td(), s !== n) {
			for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
			for (e.charCodeAt(R) === 46 ? (l = T, R++) : (l = n, B === 0 && G(F)), l === n && (l = null), u = [], d = Q(); d !== n;) u.push(d), d = Q();
			d = wd(), d === n && (d = null), s = [
				s,
				c,
				l,
				u,
				d
			], o = s;
		} else R = o, o = n;
		return z = t, t = ws(r, a), t;
	}
	function wd() {
		var t = R, r = Xd(), i, a, o, s, c;
		if (r !== n) {
			for (i = R, a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (e.charCodeAt(R) === 46 ? (o = T, R++) : (o = n, B === 0 && G(F)), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				c = wd(), c === n && (c = null), a = [
					a,
					o,
					s,
					c
				], i = a;
			} else R = i, i = n;
			i === n && (i = null), z = t, t = Ts(r, i);
		} else R = t, t = n;
		return t;
	}
	function Td() {
		var e = Ld();
		return e === n && (e = Ed(), e === n && (e = Id(), e === n && (e = Dd(), e === n && (e = Od(), e === n && (e = Rd(), e === n && (e = kd(), e === n && (e = Ad()))))))), e;
	}
	function Ed() {
		for (var t = R, r = [], i = Q(), a, o; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 8).toLowerCase() === Ee ? (i = e.substr(R, 8), R += 8) : (i = n, B === 0 && G(Hr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			o = K(), o === n ? (R = t, t = n) : (z = t, t = Es(o));
		} else R = t, t = n;
		return t;
	}
	function Dd() {
		for (var t = R, r = [], i = Q(), a, o, s, c; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 5).toLowerCase() === we ? (i = e.substr(R, 5), R += 5) : (i = n, B === 0 && G(Br)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = vf(), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				c = K(), c === n ? (R = t, t = n) : (z = t, t = Ds(o, c));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Od() {
		var t = R, r, i, a, o, s, c, l;
		if (e.substr(R, 7).toLowerCase() === De ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(Ur)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (s = vf(), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = K(), l === n ? (R = t, t = n) : (z = t, t = Os(a, s, l));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function kd() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u, m, h, g, _; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 4).toLowerCase() === Oe ? (i = e.substr(R, 4), R += 4) : (i = n, B === 0 && G(Wr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (e.charCodeAt(R) === 40 ? (o = d, R++) : (o = n, B === 0 && G(N)), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				if (c = J(), c !== n) {
					for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
					if (e.substr(R, 2).toLowerCase() === f ? (u = e.substr(R, 2), R += 2) : (u = n, B === 0 && G(ir)), u !== n) {
						for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
						if (h = q(), h !== n) {
							for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
							e.charCodeAt(R) === 41 ? (_ = p, R++) : (_ = n, B === 0 && G(P)), _ === n ? (R = t, t = n) : (z = t, t = ks(c, h));
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Ad() {
		for (var t = R, r = [], i = Q(), a, o; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 6).toLowerCase() === oe ? (i = e.substr(R, 6), R += 6) : (i = n, B === 0 && G(Sr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			o = jd(), o === n ? (R = t, t = n) : (z = t, t = As(o));
		} else R = t, t = n;
		return t;
	}
	function jd() {
		var e = Md();
		return e === n && (e = Nd()), e;
	}
	function Md() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l; i !== n;) r.push(i), i = Q();
		if (i = q(), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (e.charCodeAt(R) === 123 ? (o = _, R++) : (o = n, B === 0 && G(cr)), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				for (c = [], l = Fd(); l !== n;) c.push(l), l = Fd();
				e.charCodeAt(R) === 125 ? (l = v, R++) : (l = n, B === 0 && G(lr)), l === n ? (R = t, t = n) : (z = t, t = js(i, c));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Nd() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u, f, m; i !== n;) r.push(i), i = Q();
		if (e.charCodeAt(R) === 40 ? (i = d, R++) : (i = n, B === 0 && G(N)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			for (o = [], s = q(); s !== n;) o.push(s), s = q();
			if (e.charCodeAt(R) === 41 ? (s = p, R++) : (s = n, B === 0 && G(P)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (e.charCodeAt(R) === 123 ? (l = _, R++) : (l = n, B === 0 && G(cr)), l !== n) {
					for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
					for (f = [], m = Pd(); m !== n;) f.push(m), m = Pd();
					e.charCodeAt(R) === 125 ? (m = v, R++) : (m = n, B === 0 && G(lr)), m === n ? (R = t, t = n) : (z = t, t = Ms(o, f));
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Pd() {
		var t = R, r, i, a, o, s, c;
		if (e.charCodeAt(R) === 40 ? (r = d, R++) : (r = n, B === 0 && G(N)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (a = [], o = Fd(); o !== n;) a.push(o), o = Fd();
			if (e.charCodeAt(R) === 41 ? (o = p, R++) : (o = n, B === 0 && G(P)), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				z = t, t = Ns(a);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Fd() {
		var t = R, r = Z(), i, a;
		if (r === n && (r = Nf(), r === n && (r = Pf(), r === n && (r = Rf(), r === n && (e.substr(R, 5) === ke ? (r = ke, R += 5) : (r = n, B === 0 && G(Gr)))))), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			z = t, t = Ps(r);
		} else R = t, t = n;
		return t;
	}
	function Id() {
		var t = R, r, i, a;
		if (e.substr(R, 5).toLowerCase() === Ae ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Kr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			a = K(), a === n ? (R = t, t = n) : (z = t, t = Fs(a));
		} else R = t, t = n;
		return t;
	}
	function Ld() {
		var t = R, r = K(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.substr(R, 5).toLowerCase() === je ? (s = e.substr(R, 5), R += 5) : (s = n, B === 0 && G(qr)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = K(), l === n ? (R = a, a = n) : a = l;
			} else R = a, a = n;
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.substr(R, 5).toLowerCase() === je ? (s = e.substr(R, 5), R += 5) : (s = n, B === 0 && G(qr)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = K(), l === n ? (R = a, a = n) : a = l;
				} else R = a, a = n;
			}
			z = t, t = Is(r, i);
		} else R = t, t = n;
		return t;
	}
	function Rd() {
		for (var t = R, r = [], i = Q(), a, o; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 6).toLowerCase() === Me ? (i = e.substr(R, 6), R += 6) : (i = n, B === 0 && G(Jr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			o = zd(), o === n ? (R = t, t = n) : (z = t, t = Ls(o));
		} else R = t, t = n;
		return t;
	}
	function zd() {
		var e = wf();
		return e === n && (e = Tf(), e === n && (e = Bd())), e;
	}
	function Bd() {
		var e = R, t = Z(), r, i;
		if (t !== n) {
			for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
			i = Vd(), i === n ? (R = e, e = n) : (z = e, e = Rs(t, i));
		} else R = e, e = n;
		return e;
	}
	function Vd() {
		var t = R, r = up(), i, a, o, s, c, u, f, m, h, g;
		if (r !== n && (z = t, r = zs()), t = r, t === n) {
			if (t = R, e.charCodeAt(R) === 40 ? (r = d, R++) : (r = n, B === 0 && G(N)), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				for (e.substr(R, 8).toLowerCase() === l ? (a = e.substr(R, 8), R += 8) : (a = n, B === 0 && G(nr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (s = J(), s !== n) {
					for (c = [], u = Q(); u !== n;) c.push(u), u = Q();
					if (u = [], f = R, e.charCodeAt(R) === 44 ? (m = E, R++) : (m = n, B === 0 && G(I)), m !== n) {
						for (h = [], g = Q(); g !== n;) h.push(g), g = Q();
						g = J(), g === n ? (R = f, f = n) : f = g;
					} else R = f, f = n;
					for (; f !== n;) if (u.push(f), f = R, e.charCodeAt(R) === 44 ? (m = E, R++) : (m = n, B === 0 && G(I)), m !== n) {
						for (h = [], g = Q(); g !== n;) h.push(g), g = Q();
						g = J(), g === n ? (R = f, f = n) : f = g;
					} else R = f, f = n;
					e.charCodeAt(R) === 41 ? (f = p, R++) : (f = n, B === 0 && G(P)), f === n ? (R = t, t = n) : (z = t, t = Bs(a, s, u));
				} else R = t, t = n;
			} else R = t, t = n;
		}
		return t;
	}
	function Hd() {
		var t = R, r = up(), i, a, o, s, c, l, u, f, m, h;
		if (r !== n && (z = t, r = Vs()), t = r, t === n) {
			if (t = R, e.charCodeAt(R) === 40 ? (r = d, R++) : (r = n, B === 0 && G(N)), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				if (a = J(), a !== n) {
					for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
					if (s = [], c = R, e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
						for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
						if (f = J(), f !== n) {
							for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
							c = f;
						} else R = c, c = n;
					} else R = c, c = n;
					for (; c !== n;) if (s.push(c), c = R, e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
						for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
						if (f = J(), f !== n) {
							for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
							c = f;
						} else R = c, c = n;
					} else R = c, c = n;
					e.charCodeAt(R) === 41 ? (c = p, R++) : (c = n, B === 0 && G(P)), c === n ? (R = t, t = n) : (z = t, t = Hs(a, s));
				} else R = t, t = n;
			} else R = t, t = n;
		}
		return t;
	}
	function Ud() {
		var t = R, r, i, a, o, s;
		if (e.charCodeAt(R) === 123 ? (r = _, R++) : (r = n, B === 0 && G(cr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (a = Wd(), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			e.charCodeAt(R) === 125 ? (s = v, R++) : (s = n, B === 0 && G(lr)), s === n ? (R = t, t = n) : (z = t, t = Us(a));
		} else R = t, t = n;
		return t;
	}
	function Wd() {
		var t = R, r = Gd(), i, a, o, s, c;
		if (r !== n) {
			for (i = R, a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (e.charCodeAt(R) === 46 ? (o = T, R++) : (o = n, B === 0 && G(F)), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				c = Wd(), c === n && (c = null), a = [
					a,
					o,
					s,
					c
				], i = a;
			} else R = i, i = n;
			i === n && (i = null), z = t, t = Ws(r, i);
		} else R = t, t = n;
		return t;
	}
	function Gd() {
		var e = R, t = _f(), r, i, a;
		if (t !== n) {
			for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
			i = qd(), i === n ? (R = e, e = n) : (z = e, e = Gs(t, i));
		} else R = e, e = n;
		if (e === n) {
			for (e = R, t = [], r = Q(); r !== n;) t.push(r), r = Q();
			if (r = lf(), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				a = Kd(), z = e, e = Ks(r, a);
			} else R = e, e = n;
		}
		return e;
	}
	function Kd() {
		var e = qd();
		return e === n && (e = null), e;
	}
	function qd() {
		var t = R, r = Jd(), i, a, o, s, c, l, u, d, f, p, m;
		if (r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = Yd(), a !== n) {
				for (o = [], s = R, c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (e.charCodeAt(R) === 59 ? (l = se, R++) : (l = n, B === 0 && G(Cr)), l !== n) {
					for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
					if (d = R, f = Jd(), f !== n) {
						for (p = [], m = Q(); m !== n;) p.push(m), m = Q();
						m = Yd(), m === n ? (R = d, d = n) : (f = [
							f,
							p,
							m
						], d = f);
					} else R = d, d = n;
					d === n && (d = null), c = [
						c,
						l,
						u,
						d
					], s = c;
				} else R = s, s = n;
				for (; s !== n;) {
					for (o.push(s), s = R, c = [], l = Q(); l !== n;) c.push(l), l = Q();
					if (e.charCodeAt(R) === 59 ? (l = se, R++) : (l = n, B === 0 && G(Cr)), l !== n) {
						for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
						if (d = R, f = Jd(), f !== n) {
							for (p = [], m = Q(); m !== n;) p.push(m), m = Q();
							m = Yd(), m === n ? (R = d, d = n) : (f = [
								f,
								p,
								m
							], d = f);
						} else R = d, d = n;
						d === n && (d = null), c = [
							c,
							l,
							u,
							d
						], s = c;
					} else R = s, s = n;
				}
				z = t, t = qs(r, a, o);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Jd() {
		var t = vf(), r;
		return t === n && (t = R, e.charCodeAt(R) === 97 ? (r = Ne, R++) : (r = n, B === 0 && G(Yr)), r !== n && (z = t, r = Js()), t = r), t;
	}
	function Yd() {
		var t = R, r = hf(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.charCodeAt(R) === 44 ? (s = E, R++) : (s = n, B === 0 && G(I)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = hf(), l === n ? (R = a, a = n) : a = l;
			} else R = a, a = n;
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 44 ? (s = E, R++) : (s = n, B === 0 && G(I)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = hf(), l === n ? (R = a, a = n) : a = l;
				} else R = a, a = n;
			}
			z = t, t = Ys(r, i);
		} else R = t, t = n;
		return t;
	}
	function Xd() {
		var e = R, t = _f(), r, i, a;
		if (t !== n) {
			for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
			i = Qd(), i === n ? (R = e, e = n) : (z = e, e = Xs(t, i));
		} else R = e, e = n;
		if (e === n) {
			for (e = R, t = [], r = Q(); r !== n;) t.push(r), r = Q();
			if (r = df(), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				a = Zd(), z = e, e = Zs(r, a);
			} else R = e, e = n;
		}
		return e;
	}
	function Zd() {
		var e = Qd();
		return e === n && (e = null), e;
	}
	function Qd() {
		var t = R, r = ef(), i, a, o, s, c, l, u, d, f, p, m;
		if (r === n && (r = q()), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = $d(), a !== n) {
				for (o = [], s = R, c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (e.charCodeAt(R) === 59 ? (l = se, R++) : (l = n, B === 0 && G(Cr)), l !== n) {
					for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
					if (d = R, f = ef(), f === n && (f = q()), f !== n) {
						for (p = [], m = Q(); m !== n;) p.push(m), m = Q();
						m = $d(), m === n ? (R = d, d = n) : (f = [
							f,
							p,
							m
						], d = f);
					} else R = d, d = n;
					d === n && (d = null), c = [
						c,
						l,
						u,
						d
					], s = c;
				} else R = s, s = n;
				for (; s !== n;) {
					for (o.push(s), s = R, c = [], l = Q(); l !== n;) c.push(l), l = Q();
					if (e.charCodeAt(R) === 59 ? (l = se, R++) : (l = n, B === 0 && G(Cr)), l !== n) {
						for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
						if (d = R, f = ef(), f === n && (f = q()), f !== n) {
							for (p = [], m = Q(); m !== n;) p.push(m), m = Q();
							m = $d(), m === n ? (R = d, d = n) : (f = [
								f,
								p,
								m
							], d = f);
						} else R = d, d = n;
						d === n && (d = null), c = [
							c,
							l,
							u,
							d
						], s = c;
					} else R = s, s = n;
				}
				z = t, t = Qs(r, a, o);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function $d() {
		var t = R, r = gf(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.charCodeAt(R) === 44 ? (s = E, R++) : (s = n, B === 0 && G(I)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = gf(), l === n ? (R = a, a = n) : a = l;
			} else R = a, a = n;
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 44 ? (s = E, R++) : (s = n, B === 0 && G(I)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = gf(), l === n ? (R = a, a = n) : a = l;
				} else R = a, a = n;
			}
			z = t, t = $s(r, i);
		} else R = t, t = n;
		return t;
	}
	function ef() {
		var t = R, r = tf(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.charCodeAt(R) === 124 ? (s = Pe, R++) : (s = n, B === 0 && G(Xr)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = tf(), l === n ? (R = a, a = n) : (o = [
					o,
					s,
					c,
					l
				], a = o);
			} else R = a, a = n;
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 124 ? (s = Pe, R++) : (s = n, B === 0 && G(Xr)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = tf(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
			}
			z = t, t = ec(r, i);
		} else R = t, t = n;
		return t;
	}
	function tf() {
		var t = R, r = rf(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.charCodeAt(R) === 47 ? (s = Fe, R++) : (s = n, B === 0 && G(Zr)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = rf(), l === n ? (R = a, a = n) : (o = [
					o,
					s,
					c,
					l
				], a = o);
			} else R = a, a = n;
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 47 ? (s = Fe, R++) : (s = n, B === 0 && G(Zr)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = rf(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
			}
			z = t, t = tc(r, i);
		} else R = t, t = n;
		return t;
	}
	function nf() {
		var e = R, t = of(), r;
		return t === n ? (R = e, e = n) : (r = af(), r === n && (r = null), z = e, e = nc(t, r)), e;
	}
	function rf() {
		var t = nf(), r, i;
		return t === n && (t = R, e.charCodeAt(R) === 94 ? (r = Ie, R++) : (r = n, B === 0 && G(Qr)), r === n ? (R = t, t = n) : (i = nf(), i === n ? (R = t, t = n) : (z = t, t = rc(i)))), t;
	}
	function af() {
		var t;
		return e.charCodeAt(R) === 63 ? (t = Le, R++) : (t = n, B === 0 && G($r)), t === n && (e.charCodeAt(R) === 42 ? (t = m, R++) : (t = n, B === 0 && G(ar)), t === n && (e.charCodeAt(R) === 43 ? (t = Re, R++) : (t = n, B === 0 && G(ei)))), t;
	}
	function of() {
		var t = Z(), r, i, a;
		return t === n && (t = R, e.charCodeAt(R) === 97 ? (r = Ne, R++) : (r = n, B === 0 && G(Yr)), r !== n && (z = t, r = ic()), t = r, t === n && (t = R, e.charCodeAt(R) === 33 ? (r = ze, R++) : (r = n, B === 0 && G(ti)), r === n ? (R = t, t = n) : (i = sf(), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t === n && (t = R, e.charCodeAt(R) === 40 ? (r = d, R++) : (r = n, B === 0 && G(N)), r === n ? (R = t, t = n) : (i = ef(), i === n ? (R = t, t = n) : (e.charCodeAt(R) === 41 ? (a = p, R++) : (a = n, B === 0 && G(P)), a === n ? (R = t, t = n) : (z = t, t = ac(i))))))), t;
	}
	function sf() {
		var t = cf(), r, i, a, o, s, c, l;
		if (t === n) {
			if (t = R, e.charCodeAt(R) === 40 ? (r = d, R++) : (r = n, B === 0 && G(N)), r !== n) {
				if (i = R, a = cf(), a !== n) {
					for (o = [], s = R, e.charCodeAt(R) === 124 ? (c = Pe, R++) : (c = n, B === 0 && G(Xr)), c === n ? (R = s, s = n) : (l = cf(), l === n ? (R = s, s = n) : (c = [c, l], s = c)); s !== n;) o.push(s), s = R, e.charCodeAt(R) === 124 ? (c = Pe, R++) : (c = n, B === 0 && G(Xr)), c === n ? (R = s, s = n) : (l = cf(), l === n ? (R = s, s = n) : (c = [c, l], s = c));
					a = [a, o], i = a;
				} else R = i, i = n;
				i === n && (i = null), e.charCodeAt(R) === 41 ? (a = p, R++) : (a = n, B === 0 && G(P)), a === n ? (R = t, t = n) : (r = [
					r,
					i,
					a
				], t = r);
			} else R = t, t = n;
		}
		return t;
	}
	function cf() {
		var t = Z(), r, i;
		return t === n && (e.charCodeAt(R) === 97 ? (t = Ne, R++) : (t = n, B === 0 && G(Yr)), t === n && (t = R, e.charCodeAt(R) === 94 ? (r = Ie, R++) : (r = n, B === 0 && G(Qr)), r === n ? (R = t, t = n) : (i = Z(), i === n && (e.charCodeAt(R) === 97 ? (i = Ne, R++) : (i = n, B === 0 && G(Yr))), i === n ? (R = t, t = n) : (r = [r, i], t = r)))), t;
	}
	function lf() {
		var e = R, t = pf();
		return t !== n && (z = e, t = oc(t)), e = t, e === n && (e = uf()), e;
	}
	function uf() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u; i !== n;) r.push(i), i = Q();
		if (e.charCodeAt(R) === 91 ? (i = Be, R++) : (i = n, B === 0 && G(ni)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = qd(), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				if (e.charCodeAt(R) === 93 ? (c = Ve, R++) : (c = n, B === 0 && G(ri)), c !== n) {
					for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
					z = t, t = sc(o);
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function df() {
		var e = R, t = mf();
		return t !== n && (z = e, t = cc(t)), e = t, e === n && (e = ff()), e;
	}
	function ff() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u; i !== n;) r.push(i), i = Q();
		if (e.charCodeAt(R) === 91 ? (i = Be, R++) : (i = n, B === 0 && G(ni)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = Qd(), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				if (e.charCodeAt(R) === 93 ? (c = Ve, R++) : (c = n, B === 0 && G(ri)), c !== n) {
					for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
					z = t, t = lc(o);
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function pf() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u; i !== n;) r.push(i), i = Q();
		if (e.charCodeAt(R) === 40 ? (i = d, R++) : (i = n, B === 0 && G(N)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = [], s = hf(), s !== n) for (; s !== n;) o.push(s), s = hf();
			else o = n;
			if (o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				if (e.charCodeAt(R) === 41 ? (c = p, R++) : (c = n, B === 0 && G(P)), c !== n) {
					for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
					z = t, t = uc(o);
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function mf() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u; i !== n;) r.push(i), i = Q();
		if (e.charCodeAt(R) === 40 ? (i = d, R++) : (i = n, B === 0 && G(N)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = [], s = gf(), s !== n) for (; s !== n;) o.push(s), s = gf();
			else o = n;
			if (o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				if (e.charCodeAt(R) === 41 ? (c = p, R++) : (c = n, B === 0 && G(P)), c !== n) {
					for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
					z = t, t = dc(o);
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function hf() {
		for (var e = R, t = [], r = Q(); r !== n;) t.push(r), r = Q();
		return r = _f(), r === n && (r = lf()), r === n ? (R = e, e = n) : (z = e, e = fc(r)), e;
	}
	function gf() {
		for (var e = R, t = [], r = Q(); r !== n;) t.push(r), r = Q();
		return r = _f(), r === n && (r = df()), r === n ? (R = e, e = n) : (z = e, e = pc(r)), e;
	}
	function _f() {
		var e = q();
		return e === n && (e = yf()), e;
	}
	function vf() {
		var e = q();
		return e === n && (e = Z()), e;
	}
	function q() {
		for (var e = R, t = [], r = Q(), i, a; r !== n;) t.push(r), r = Q();
		if (r = Kf(), r === n && (r = qf()), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			z = e, e = mc(r);
		} else R = e, e = n;
		return e;
	}
	function yf() {
		var e = Z();
		return e === n && (e = Nf(), e === n && (e = Pf(), e === n && (e = Rf(), e === n && (e = Vf(), e === n && (e = up()))))), e;
	}
	function J() {
		var t = R, r = bf(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.substr(R, 2) === Ue ? (s = Ue, R += 2) : (s = n, B === 0 && G(ii)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = bf(), l === n ? (R = a, a = n) : a = l;
			} else R = a, a = n;
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.substr(R, 2) === Ue ? (s = Ue, R += 2) : (s = n, B === 0 && G(ii)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = bf(), l === n ? (R = a, a = n) : a = l;
				} else R = a, a = n;
			}
			z = t, t = hc(r, i);
		} else R = t, t = n;
		return t;
	}
	function bf() {
		var t = R, r = xf(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.substr(R, 2) === We ? (s = We, R += 2) : (s = n, B === 0 && G(ai)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = xf(), l === n ? (R = a, a = n) : a = l;
			} else R = a, a = n;
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.substr(R, 2) === We ? (s = We, R += 2) : (s = n, B === 0 && G(ai)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = xf(), l === n ? (R = a, a = n) : a = l;
				} else R = a, a = n;
			}
			z = t, t = gc(r, i);
		} else R = t, t = n;
		return t;
	}
	function xf() {
		var t = R, r = Y(), i, a, o, s, c, l, u, d;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.charCodeAt(R) === 61 ? (s = Ge, R++) : (s = n, B === 0 && G(oi)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = Y(), l === n ? (R = a, a = n) : (o = [
					o,
					s,
					c,
					l
				], a = o);
			} else R = a, a = n;
			if (a === n) {
				for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.substr(R, 2) === Ke ? (s = Ke, R += 2) : (s = n, B === 0 && G(si)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = Y(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
				if (a === n) {
					for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
					if (e.charCodeAt(R) === 60 ? (s = qe, R++) : (s = n, B === 0 && G(ci)), s !== n) {
						for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
						l = Y(), l === n ? (R = a, a = n) : (o = [
							o,
							s,
							c,
							l
						], a = o);
					} else R = a, a = n;
					if (a === n) {
						for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
						if (e.charCodeAt(R) === 62 ? (s = Je, R++) : (s = n, B === 0 && G(li)), s !== n) {
							for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
							l = Y(), l === n ? (R = a, a = n) : (o = [
								o,
								s,
								c,
								l
							], a = o);
						} else R = a, a = n;
						if (a === n) {
							for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
							if (e.substr(R, 2) === Ye ? (s = Ye, R += 2) : (s = n, B === 0 && G(ui)), s !== n) {
								for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
								l = Y(), l === n ? (R = a, a = n) : (o = [
									o,
									s,
									c,
									l
								], a = o);
							} else R = a, a = n;
							if (a === n) {
								for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
								if (e.substr(R, 2) === Xe ? (s = Xe, R += 2) : (s = n, B === 0 && G(di)), s !== n) {
									for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
									l = Y(), l === n ? (R = a, a = n) : (o = [
										o,
										s,
										c,
										l
									], a = o);
								} else R = a, a = n;
								if (a === n) {
									for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
									if (e.substr(R, 2).toLowerCase() === Ze ? (s = e.substr(R, 2), R += 2) : (s = n, B === 0 && G(fi)), s !== n) {
										for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
										l = Hd(), l === n ? (R = a, a = n) : (o = [
											o,
											s,
											c,
											l
										], a = o);
									} else R = a, a = n;
									if (a === n) {
										for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
										if (e.substr(R, 3).toLowerCase() === Qe ? (s = e.substr(R, 3), R += 3) : (s = n, B === 0 && G(pi)), s !== n) {
											for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
											if (e.substr(R, 2).toLowerCase() === Ze ? (l = e.substr(R, 2), R += 2) : (l = n, B === 0 && G(fi)), l !== n) {
												for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
												d = Hd(), d === n ? (R = a, a = n) : (o = [
													o,
													s,
													c,
													l,
													u,
													d
												], a = o);
											} else R = a, a = n;
										} else R = a, a = n;
									}
								}
							}
						}
					}
				}
			}
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 61 ? (s = Ge, R++) : (s = n, B === 0 && G(oi)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = Y(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
				if (a === n) {
					for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
					if (e.substr(R, 2) === Ke ? (s = Ke, R += 2) : (s = n, B === 0 && G(si)), s !== n) {
						for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
						l = Y(), l === n ? (R = a, a = n) : (o = [
							o,
							s,
							c,
							l
						], a = o);
					} else R = a, a = n;
					if (a === n) {
						for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
						if (e.charCodeAt(R) === 60 ? (s = qe, R++) : (s = n, B === 0 && G(ci)), s !== n) {
							for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
							l = Y(), l === n ? (R = a, a = n) : (o = [
								o,
								s,
								c,
								l
							], a = o);
						} else R = a, a = n;
						if (a === n) {
							for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
							if (e.charCodeAt(R) === 62 ? (s = Je, R++) : (s = n, B === 0 && G(li)), s !== n) {
								for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
								l = Y(), l === n ? (R = a, a = n) : (o = [
									o,
									s,
									c,
									l
								], a = o);
							} else R = a, a = n;
							if (a === n) {
								for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
								if (e.substr(R, 2) === Ye ? (s = Ye, R += 2) : (s = n, B === 0 && G(ui)), s !== n) {
									for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
									l = Y(), l === n ? (R = a, a = n) : (o = [
										o,
										s,
										c,
										l
									], a = o);
								} else R = a, a = n;
								if (a === n) {
									for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
									if (e.substr(R, 2) === Xe ? (s = Xe, R += 2) : (s = n, B === 0 && G(di)), s !== n) {
										for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
										l = Y(), l === n ? (R = a, a = n) : (o = [
											o,
											s,
											c,
											l
										], a = o);
									} else R = a, a = n;
									if (a === n) {
										for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
										if (e.substr(R, 2).toLowerCase() === Ze ? (s = e.substr(R, 2), R += 2) : (s = n, B === 0 && G(fi)), s !== n) {
											for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
											l = Hd(), l === n ? (R = a, a = n) : (o = [
												o,
												s,
												c,
												l
											], a = o);
										} else R = a, a = n;
										if (a === n) {
											for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
											if (e.substr(R, 3).toLowerCase() === Qe ? (s = e.substr(R, 3), R += 3) : (s = n, B === 0 && G(pi)), s !== n) {
												for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
												if (e.substr(R, 2).toLowerCase() === Ze ? (l = e.substr(R, 2), R += 2) : (l = n, B === 0 && G(fi)), l !== n) {
													for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
													d = Hd(), d === n ? (R = a, a = n) : (o = [
														o,
														s,
														c,
														l,
														u,
														d
													], a = o);
												} else R = a, a = n;
											} else R = a, a = n;
										}
									}
								}
							}
						}
					}
				}
			}
			z = t, t = _c(r, i);
		} else R = t, t = n;
		return t;
	}
	function Y() {
		var t = R, r = Sf(), i, a, o, s, c, l, u, d, f;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.charCodeAt(R) === 43 ? (s = Re, R++) : (s = n, B === 0 && G(ei)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = Sf(), l === n ? (R = a, a = n) : (o = [
					o,
					s,
					c,
					l
				], a = o);
			} else R = a, a = n;
			if (a === n) {
				for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 45 ? (s = D, R++) : (s = n, B === 0 && G(mi)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = Sf(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
				if (a === n) {
					if (a = R, o = If(), o === n && (o = Lf()), o !== n) {
						for (s = [], c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
						if (e.charCodeAt(R) === 42 ? (u = m, R++) : (u = n, B === 0 && G(ar)), u !== n) {
							for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
							f = X(), f === n ? (R = c, c = n) : (l = [
								l,
								u,
								d,
								f
							], c = l);
						} else R = c, c = n;
						if (c === n) {
							for (c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
							if (e.charCodeAt(R) === 47 ? (u = Fe, R++) : (u = n, B === 0 && G(Zr)), u !== n) {
								for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
								f = X(), f === n ? (R = c, c = n) : (l = [
									l,
									u,
									d,
									f
								], c = l);
							} else R = c, c = n;
						}
						for (; c !== n;) {
							for (s.push(c), c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
							if (e.charCodeAt(R) === 42 ? (u = m, R++) : (u = n, B === 0 && G(ar)), u !== n) {
								for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
								f = X(), f === n ? (R = c, c = n) : (l = [
									l,
									u,
									d,
									f
								], c = l);
							} else R = c, c = n;
							if (c === n) {
								for (c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
								if (e.charCodeAt(R) === 47 ? (u = Fe, R++) : (u = n, B === 0 && G(Zr)), u !== n) {
									for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
									f = X(), f === n ? (R = c, c = n) : (l = [
										l,
										u,
										d,
										f
									], c = l);
								} else R = c, c = n;
							}
						}
						o = [o, s], a = o;
					} else R = a, a = n;
				}
			}
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 43 ? (s = Re, R++) : (s = n, B === 0 && G(ei)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = Sf(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
				if (a === n) {
					for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
					if (e.charCodeAt(R) === 45 ? (s = D, R++) : (s = n, B === 0 && G(mi)), s !== n) {
						for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
						l = Sf(), l === n ? (R = a, a = n) : (o = [
							o,
							s,
							c,
							l
						], a = o);
					} else R = a, a = n;
					if (a === n) {
						if (a = R, o = If(), o === n && (o = Lf()), o !== n) {
							for (s = [], c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
							if (e.charCodeAt(R) === 42 ? (u = m, R++) : (u = n, B === 0 && G(ar)), u !== n) {
								for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
								f = X(), f === n ? (R = c, c = n) : (l = [
									l,
									u,
									d,
									f
								], c = l);
							} else R = c, c = n;
							if (c === n) {
								for (c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
								if (e.charCodeAt(R) === 47 ? (u = Fe, R++) : (u = n, B === 0 && G(Zr)), u !== n) {
									for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
									f = X(), f === n ? (R = c, c = n) : (l = [
										l,
										u,
										d,
										f
									], c = l);
								} else R = c, c = n;
							}
							for (; c !== n;) {
								for (s.push(c), c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
								if (e.charCodeAt(R) === 42 ? (u = m, R++) : (u = n, B === 0 && G(ar)), u !== n) {
									for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
									f = X(), f === n ? (R = c, c = n) : (l = [
										l,
										u,
										d,
										f
									], c = l);
								} else R = c, c = n;
								if (c === n) {
									for (c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
									if (e.charCodeAt(R) === 47 ? (u = Fe, R++) : (u = n, B === 0 && G(Zr)), u !== n) {
										for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
										f = X(), f === n ? (R = c, c = n) : (l = [
											l,
											u,
											d,
											f
										], c = l);
									} else R = c, c = n;
								}
							}
							o = [o, s], a = o;
						} else R = a, a = n;
					}
				}
			}
			z = t, t = vc(r, i);
		} else R = t, t = n;
		return t;
	}
	function Sf() {
		var t = R, r = X(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.charCodeAt(R) === 42 ? (s = m, R++) : (s = n, B === 0 && G(ar)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = X(), l === n ? (R = a, a = n) : (o = [
					o,
					s,
					c,
					l
				], a = o);
			} else R = a, a = n;
			if (a === n) {
				for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 47 ? (s = Fe, R++) : (s = n, B === 0 && G(Zr)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = X(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
			}
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 42 ? (s = m, R++) : (s = n, B === 0 && G(ar)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = X(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
				if (a === n) {
					for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
					if (e.charCodeAt(R) === 47 ? (s = Fe, R++) : (s = n, B === 0 && G(Zr)), s !== n) {
						for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
						l = X(), l === n ? (R = a, a = n) : (o = [
							o,
							s,
							c,
							l
						], a = o);
					} else R = a, a = n;
				}
			}
			z = t, t = yc(r, i);
		} else R = t, t = n;
		return t;
	}
	function X() {
		var t = R, r, i, a;
		if (e.charCodeAt(R) === 33 ? (r = ze, R++) : (r = n, B === 0 && G(ti)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			a = Cf(), a === n ? (R = t, t = n) : (z = t, t = bc(a));
		} else R = t, t = n;
		if (t === n) {
			if (t = R, e.charCodeAt(R) === 43 ? (r = Re, R++) : (r = n, B === 0 && G(ei)), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				a = Cf(), a === n ? (R = t, t = n) : (z = t, t = xc(a));
			} else R = t, t = n;
			if (t === n) {
				if (t = R, e.charCodeAt(R) === 45 ? (r = D, R++) : (r = n, B === 0 && G(mi)), r !== n) {
					for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
					a = Cf(), a === n ? (R = t, t = n) : (z = t, t = Sc(a));
				} else R = t, t = n;
				t === n && (t = Cf());
			}
		}
		return t;
	}
	function Cf() {
		var e = wf(), t;
		return e === n && (e = Tf(), e === n && (e = Mf(), e === n && (e = R, t = Nf(), t !== n && (z = e, t = Cc(t)), e = t, e === n && (e = R, t = Pf(), t !== n && (z = e, t = wc(t)), e = t, e === n && (e = R, t = Rf(), t !== n && (z = e, t = Tc(t)), e = t, e === n && (e = R, t = q(), t !== n && (z = e, t = Ec(t)), e = t)))))), e;
	}
	function wf() {
		var t = R, r, i, a, o, s;
		if (e.charCodeAt(R) === 40 ? (r = d, R++) : (r = n, B === 0 && G(N)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = J(), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				e.charCodeAt(R) === 41 ? (s = p, R++) : (s = n, B === 0 && G(P)), s === n ? (R = t, t = n) : (z = t, t = Dc(a));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Tf() {
		var t = jf(), r, i, a, o, s, c, l, u, f, m, h, g, _, v, y;
		if (t === n) {
			if (t = R, e.substr(R, 3).toLowerCase() === $e ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(hi)), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
					for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
					if (s = J(), s !== n) {
						for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
						e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Oc(s));
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
			if (t === n) {
				if (t = R, e.substr(R, 4).toLowerCase() === et ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(gi)), r !== n) {
					for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
					if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
						for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
						if (s = J(), s !== n) {
							for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
							e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = kc(s));
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
				if (t === n) {
					if (t = R, e.substr(R, 11).toLowerCase() === tt ? (r = e.substr(R, 11), R += 11) : (r = n, B === 0 && G(_i)), r !== n) {
						for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
						if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
							for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
							if (s = J(), s !== n) {
								for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
								if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
									for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
									if (f = J(), f !== n) {
										for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
										e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = Ac(s, f));
									} else R = t, t = n;
								} else R = t, t = n;
							} else R = t, t = n;
						} else R = t, t = n;
					} else R = t, t = n;
					if (t === n) {
						if (t = R, e.substr(R, 8).toLowerCase() === O ? (r = e.substr(R, 8), R += 8) : (r = n, B === 0 && G(vi)), r !== n) {
							for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
							if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
								for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
								if (s = J(), s !== n) {
									for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
									e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = jc(s));
								} else R = t, t = n;
							} else R = t, t = n;
						} else R = t, t = n;
						if (t === n) {
							if (t = R, e.substr(R, 5).toLowerCase() === k ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(yi)), r !== n) {
								for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
								if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
									for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
									if (s = q(), s !== n) {
										for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
										e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Mc(s));
									} else R = t, t = n;
								} else R = t, t = n;
							} else R = t, t = n;
							if (t === n) {
								if (t = R, e.substr(R, 3).toLowerCase() === nt ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(bi)), r !== n) {
									for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
									if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
										for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
										if (s = J(), s !== n) {
											for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
											e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Nc(s));
										} else R = t, t = n;
									} else R = t, t = n;
								} else R = t, t = n;
								if (t === n) {
									if (t = R, e.substr(R, 3).toLowerCase() === rt ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(xi)), r !== n) {
										for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
										if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
											for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
											if (s = J(), s !== n) {
												for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
												e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Pc(s));
											} else R = t, t = n;
										} else R = t, t = n;
									} else R = t, t = n;
									if (t === n) {
										if (t = R, e.substr(R, 5).toLowerCase() === it ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Si)), r !== n) {
											for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
											if (a = R, e.charCodeAt(R) === 40 ? (o = d, R++) : (o = n, B === 0 && G(N)), o !== n) {
												for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
												if (c = J(), c !== n) {
													for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
													e.charCodeAt(R) === 41 ? (u = p, R++) : (u = n, B === 0 && G(P)), u === n ? (R = a, a = n) : (o = [
														o,
														s,
														c,
														l,
														u
													], a = o);
												} else R = a, a = n;
											} else R = a, a = n;
											a === n && (a = up()), a === n ? (R = t, t = n) : (z = t, t = Fc(a));
										} else R = t, t = n;
										if (t === n) {
											if (t = R, e.substr(R, 4).toLowerCase() === at ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Ci)), r !== n) {
												for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
												a = up(), a === n ? (R = t, t = n) : (z = t, t = Ic());
											} else R = t, t = n;
											if (t === n) {
												if (t = R, e.substr(R, 3).toLowerCase() === ot ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(wi)), r !== n) {
													for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
													if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
														for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
														if (s = J(), s !== n) {
															for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
															e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Lc(s));
														} else R = t, t = n;
													} else R = t, t = n;
												} else R = t, t = n;
												if (t === n) {
													if (t = R, e.substr(R, 4).toLowerCase() === st ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Ti)), r !== n) {
														for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
														if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
															for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
															if (s = J(), s !== n) {
																for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Rc(s));
															} else R = t, t = n;
														} else R = t, t = n;
													} else R = t, t = n;
													if (t === n) {
														if (t = R, e.substr(R, 5).toLowerCase() === ct ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Ei)), r !== n) {
															for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
															if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																if (s = J(), s !== n) {
																	for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																	e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = zc(s));
																} else R = t, t = n;
															} else R = t, t = n;
														} else R = t, t = n;
														if (t === n) {
															if (t = R, e.substr(R, 5).toLowerCase() === lt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Di)), r !== n) {
																for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																	for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																	if (s = J(), s !== n) {
																		for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																		e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Bc(s));
																	} else R = t, t = n;
																} else R = t, t = n;
															} else R = t, t = n;
															if (t === n) {
																if (t = R, e.substr(R, 6).toLowerCase() === ut ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Oi)), r !== n) {
																	for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																	a = Hd(), a === n ? (R = t, t = n) : (z = t, t = Vc(a));
																} else R = t, t = n;
																if (t === n && (t = Df(), t === n)) {
																	if (t = R, e.substr(R, 6).toLowerCase() === dt ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(ki)), r !== n) {
																		for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																		if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																			for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																			if (s = J(), s !== n) {
																				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																				e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Hc(s));
																			} else R = t, t = n;
																		} else R = t, t = n;
																	} else R = t, t = n;
																	if (t === n && (t = Of(), t === n)) {
																		if (t = R, e.substr(R, 5).toLowerCase() === ft ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Ai)), r !== n) {
																			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																			if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																				if (s = J(), s !== n) {
																					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																					e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Uc(s));
																				} else R = t, t = n;
																			} else R = t, t = n;
																		} else R = t, t = n;
																		if (t === n) {
																			if (t = R, e.substr(R, 5).toLowerCase() === pt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(ji)), r !== n) {
																				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																				if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																					for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																					if (s = J(), s !== n) {
																						for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																						e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Wc(s));
																					} else R = t, t = n;
																				} else R = t, t = n;
																			} else R = t, t = n;
																			if (t === n) {
																				if (t = R, e.substr(R, 14).toLowerCase() === mt ? (r = e.substr(R, 14), R += 14) : (r = n, B === 0 && G(Mi)), r !== n) {
																					for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																					if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																						for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																						if (s = J(), s !== n) {
																							for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																							e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Gc(s));
																						} else R = t, t = n;
																					} else R = t, t = n;
																				} else R = t, t = n;
																				if (t === n) {
																					if (t = R, e.substr(R, 8).toLowerCase() === ht ? (r = e.substr(R, 8), R += 8) : (r = n, B === 0 && G(Ni)), r !== n) {
																						for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																						if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																							for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																							if (s = J(), s !== n) {
																								for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																								if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																									for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																									if (f = J(), f !== n) {
																										for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																										e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = Kc(s, f));
																									} else R = t, t = n;
																								} else R = t, t = n;
																							} else R = t, t = n;
																						} else R = t, t = n;
																					} else R = t, t = n;
																					if (t === n) {
																						if (t = R, e.substr(R, 9).toLowerCase() === gt ? (r = e.substr(R, 9), R += 9) : (r = n, B === 0 && G(Pi)), r !== n) {
																							for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																							if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																								for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																								if (s = J(), s !== n) {
																									for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																									if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																										for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																										if (f = J(), f !== n) {
																											for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																											e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = qc(s, f));
																										} else R = t, t = n;
																									} else R = t, t = n;
																								} else R = t, t = n;
																							} else R = t, t = n;
																						} else R = t, t = n;
																						if (t === n) {
																							if (t = R, e.substr(R, 9).toLowerCase() === _t ? (r = e.substr(R, 9), R += 9) : (r = n, B === 0 && G(Fi)), r !== n) {
																								for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																								if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																									for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																									if (s = J(), s !== n) {
																										for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																										if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																											for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																											if (f = J(), f !== n) {
																												for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																												e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = Jc(s, f));
																											} else R = t, t = n;
																										} else R = t, t = n;
																									} else R = t, t = n;
																								} else R = t, t = n;
																							} else R = t, t = n;
																							if (t === n) {
																								if (t = R, e.substr(R, 7).toLowerCase() === vt ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(Ii)), r !== n) {
																									for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																									if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																										for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																										if (s = J(), s !== n) {
																											for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																											if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																												for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																												if (f = J(), f !== n) {
																													for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																													e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = Yc(s, f));
																												} else R = t, t = n;
																											} else R = t, t = n;
																										} else R = t, t = n;
																									} else R = t, t = n;
																								} else R = t, t = n;
																								if (t === n) {
																									if (t = R, e.substr(R, 8).toLowerCase() === yt ? (r = e.substr(R, 8), R += 8) : (r = n, B === 0 && G(Li)), r !== n) {
																										for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																										if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																											for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																											if (s = J(), s !== n) {
																												for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																												if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																													for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																													if (f = J(), f !== n) {
																														for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																														e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = Xc(s, f));
																													} else R = t, t = n;
																												} else R = t, t = n;
																											} else R = t, t = n;
																										} else R = t, t = n;
																									} else R = t, t = n;
																									if (t === n) {
																										if (t = R, e.substr(R, 4).toLowerCase() === bt ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Ri)), r !== n) {
																											for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																											if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																												for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																												if (s = J(), s !== n) {
																													for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																													e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Zc(s));
																												} else R = t, t = n;
																											} else R = t, t = n;
																										} else R = t, t = n;
																										if (t === n) {
																											if (t = R, e.substr(R, 5).toLowerCase() === xt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(zi)), r !== n) {
																												for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																												if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																													for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																													if (s = J(), s !== n) {
																														for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																														e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Qc(s));
																													} else R = t, t = n;
																												} else R = t, t = n;
																											} else R = t, t = n;
																											if (t === n) {
																												if (t = R, e.substr(R, 3).toLowerCase() === St ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(Bi)), r !== n) {
																													for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																													if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																														for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																														if (s = J(), s !== n) {
																															for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																															e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = $c(s));
																														} else R = t, t = n;
																													} else R = t, t = n;
																												} else R = t, t = n;
																												if (t === n) {
																													if (t = R, e.substr(R, 5).toLowerCase() === Ct ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Vi)), r !== n) {
																														for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																														if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																															for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																															if (s = J(), s !== n) {
																																for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = el(s));
																															} else R = t, t = n;
																														} else R = t, t = n;
																													} else R = t, t = n;
																													if (t === n) {
																														if (t = R, e.substr(R, 7).toLowerCase() === wt ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(Hi)), r !== n) {
																															for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																															if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																if (s = J(), s !== n) {
																																	for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																	e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = tl(s));
																																} else R = t, t = n;
																															} else R = t, t = n;
																														} else R = t, t = n;
																														if (t === n) {
																															if (t = R, e.substr(R, 7).toLowerCase() === Tt ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(Ui)), r !== n) {
																																for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																	for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																	if (s = J(), s !== n) {
																																		for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																		e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = nl(s));
																																	} else R = t, t = n;
																																} else R = t, t = n;
																															} else R = t, t = n;
																															if (t === n) {
																																if (t = R, e.substr(R, 8).toLowerCase() === Et ? (r = e.substr(R, 8), R += 8) : (r = n, B === 0 && G(Wi)), r !== n) {
																																	for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																	if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																		for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																		if (s = J(), s !== n) {
																																			for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																			e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = rl(s));
																																		} else R = t, t = n;
																																	} else R = t, t = n;
																																} else R = t, t = n;
																																if (t === n) {
																																	if (t = R, e.substr(R, 2).toLowerCase() === Dt ? (r = e.substr(R, 2), R += 2) : (r = n, B === 0 && G(Gi)), r !== n) {
																																		for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																		if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																			for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																			if (s = J(), s !== n) {
																																				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																				e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = il(s));
																																			} else R = t, t = n;
																																		} else R = t, t = n;
																																	} else R = t, t = n;
																																	if (t === n) {
																																		if (t = R, e.substr(R, 3).toLowerCase() === Ot ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(Ki)), r !== n) {
																																			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																			a = up(), a === n ? (R = t, t = n) : (z = t, t = al());
																																		} else R = t, t = n;
																																		if (t === n) {
																																			if (t = R, e.substr(R, 4).toLowerCase() === A ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(qi)), r !== n) {
																																				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																				a = up(), a === n ? (R = t, t = n) : (z = t, t = ol());
																																			} else R = t, t = n;
																																			if (t === n) {
																																				if (t = R, e.substr(R, 7).toLowerCase() === kt ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(Ji)), r !== n) {
																																					for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																					a = up(), a === n ? (R = t, t = n) : (z = t, t = sl());
																																				} else R = t, t = n;
																																				if (t === n) {
																																					if (t = R, e.substr(R, 3).toLowerCase() === At ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(Yi)), r !== n) {
																																						for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																						if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																							for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																							if (s = J(), s !== n) {
																																								for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																								e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = cl(s));
																																							} else R = t, t = n;
																																						} else R = t, t = n;
																																					} else R = t, t = n;
																																					if (t === n) {
																																						if (t = R, e.substr(R, 4).toLowerCase() === j ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Xi)), r !== n) {
																																							for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																							if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																								for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																								if (s = J(), s !== n) {
																																									for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																									e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = ll(s));
																																								} else R = t, t = n;
																																							} else R = t, t = n;
																																						} else R = t, t = n;
																																						if (t === n) {
																																							if (t = R, e.substr(R, 6).toLowerCase() === jt ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Zi)), r !== n) {
																																								for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																								if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																									for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																									if (s = J(), s !== n) {
																																										for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																										e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = ul(s));
																																									} else R = t, t = n;
																																								} else R = t, t = n;
																																							} else R = t, t = n;
																																							if (t === n) {
																																								if (t = R, e.substr(R, 6).toLowerCase() === Mt ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Qi)), r !== n) {
																																									for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																									if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																										for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																										if (s = J(), s !== n) {
																																											for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																											e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = dl(s));
																																										} else R = t, t = n;
																																									} else R = t, t = n;
																																								} else R = t, t = n;
																																								if (t === n) {
																																									if (t = R, e.substr(R, 6).toLowerCase() === Nt ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G($i)), r !== n) {
																																										for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																										if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																											for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																											if (s = J(), s !== n) {
																																												for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																												e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = fl(s));
																																											} else R = t, t = n;
																																										} else R = t, t = n;
																																									} else R = t, t = n;
																																									if (t === n) {
																																										if (t = R, e.substr(R, 8).toLowerCase() === Pt ? (r = e.substr(R, 8), R += 8) : (r = n, B === 0 && G(ea)), r !== n) {
																																											for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																											a = Hd(), a === n ? (R = t, t = n) : (z = t, t = pl(a));
																																										} else R = t, t = n;
																																										if (t === n) {
																																											if (t = R, e.substr(R, 2).toLowerCase() === Ft ? (r = e.substr(R, 2), R += 2) : (r = n, B === 0 && G(ta)), r !== n) {
																																												for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																												if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																													for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																													if (s = J(), s !== n) {
																																														for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																														if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																																															for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																																															if (f = J(), f !== n) {
																																																for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																																																if (e.charCodeAt(R) === 44 ? (h = E, R++) : (h = n, B === 0 && G(I)), h !== n) {
																																																	for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
																																																	if (_ = J(), _ !== n) {
																																																		for (v = [], y = Q(); y !== n;) v.push(y), y = Q();
																																																		e.charCodeAt(R) === 41 ? (y = p, R++) : (y = n, B === 0 && G(P)), y === n ? (R = t, t = n) : (z = t, t = ml(s, f, _));
																																																	} else R = t, t = n;
																																																} else R = t, t = n;
																																															} else R = t, t = n;
																																														} else R = t, t = n;
																																													} else R = t, t = n;
																																												} else R = t, t = n;
																																											} else R = t, t = n;
																																											if (t === n) {
																																												if (t = R, e.substr(R, 7).toLowerCase() === It ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(na)), r !== n) {
																																													for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																													if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																														for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																														if (s = J(), s !== n) {
																																															for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																															if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																																																for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																																																if (f = J(), f !== n) {
																																																	for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																																																	e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = hl(s, f));
																																																} else R = t, t = n;
																																															} else R = t, t = n;
																																														} else R = t, t = n;
																																													} else R = t, t = n;
																																												} else R = t, t = n;
																																												if (t === n) {
																																													if (t = R, e.substr(R, 5).toLowerCase() === Lt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(ra)), r !== n) {
																																														for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																														if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																															for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																															if (s = J(), s !== n) {
																																																for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																																if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																																																	for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																																																	if (f = J(), f !== n) {
																																																		for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																																																		e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = gl(s, f));
																																																	} else R = t, t = n;
																																																} else R = t, t = n;
																																															} else R = t, t = n;
																																														} else R = t, t = n;
																																													} else R = t, t = n;
																																													if (t === n) {
																																														if (t = R, e.substr(R, 8).toLowerCase() === Rt ? (r = e.substr(R, 8), R += 8) : (r = n, B === 0 && G(ia)), r !== n) {
																																															for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																															if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																																for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																																if (s = J(), s !== n) {
																																																	for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																																	if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																																																		for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																																																		if (f = J(), f !== n) {
																																																			for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																																																			e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = _l(s, f));
																																																		} else R = t, t = n;
																																																	} else R = t, t = n;
																																																} else R = t, t = n;
																																															} else R = t, t = n;
																																														} else R = t, t = n;
																																														if (t === n) {
																																															if (t = R, e.substr(R, 5).toLowerCase() === zt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(aa)), r === n && (e.substr(R, 5).toLowerCase() === Bt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(oa))), r !== n) {
																																																for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																																if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																																	for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																																	if (s = J(), s !== n) {
																																																		for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																																		e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = vl(s));
																																																	} else R = t, t = n;
																																																} else R = t, t = n;
																																															} else R = t, t = n;
																																															if (t === n) {
																																																if (t = R, e.substr(R, 7).toLowerCase() === Vt ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(sa)), r !== n) {
																																																	for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																																	if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																																		for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																																		if (s = J(), s !== n) {
																																																			for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																																			e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = yl(s));
																																																		} else R = t, t = n;
																																																	} else R = t, t = n;
																																																} else R = t, t = n;
																																																if (t === n) {
																																																	if (t = R, e.substr(R, 9).toLowerCase() === Ht ? (r = e.substr(R, 9), R += 9) : (r = n, B === 0 && G(ca)), r !== n) {
																																																		for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																																		if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																																			for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																																			if (s = J(), s !== n) {
																																																				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																																				e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = bl(s));
																																																			} else R = t, t = n;
																																																		} else R = t, t = n;
																																																	} else R = t, t = n;
																																																	if (t === n) {
																																																		if (t = R, e.substr(R, 9).toLowerCase() === Ut ? (r = e.substr(R, 9), R += 9) : (r = n, B === 0 && G(la)), r !== n) {
																																																			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																																			if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																																				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																																				if (s = J(), s !== n) {
																																																					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																																					e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = xl(s));
																																																				} else R = t, t = n;
																																																			} else R = t, t = n;
																																																		} else R = t, t = n;
																																																		t === n && (t = Ef(), t === n && (t = kf(), t === n && (t = Af())));
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		return t;
	}
	function Ef() {
		var t = R, r, i, a, o, s, c, l, u, f, m, h, g, _, v;
		if (e.substr(R, 5).toLowerCase() === Wt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(ua)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (s = J(), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
						for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
						if (f = J(), f !== n) {
							for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
							if (h = R, e.charCodeAt(R) === 44 ? (g = E, R++) : (g = n, B === 0 && G(I)), g !== n) {
								for (_ = [], v = Q(); v !== n;) _.push(v), v = Q();
								v = J(), v === n ? (R = h, h = n) : (g = [
									g,
									_,
									v
								], h = g);
							} else R = h, h = n;
							for (h === n && (h = null), g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
							e.charCodeAt(R) === 41 ? (_ = p, R++) : (_ = n, B === 0 && G(P)), _ === n ? (R = t, t = n) : (z = t, t = Sl(s, f, h));
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Df() {
		var t = R, r, i, a, o, s, c, l, u, f, m, h, g, _, v;
		if (e.substr(R, 6).toLowerCase() === Gt ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(da)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (s = J(), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
						for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
						if (f = J(), f !== n) {
							for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
							if (h = R, e.charCodeAt(R) === 44 ? (g = E, R++) : (g = n, B === 0 && G(I)), g !== n) {
								for (_ = [], v = Q(); v !== n;) _.push(v), v = Q();
								v = J(), v === n ? (R = h, h = n) : (g = [
									g,
									_,
									v
								], h = g);
							} else R = h, h = n;
							for (h === n && (h = null), g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
							e.charCodeAt(R) === 41 ? (_ = p, R++) : (_ = n, B === 0 && G(P)), _ === n ? (R = t, t = n) : (z = t, t = Cl(s, f, h));
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Of() {
		var t = R, r, i, a, o, s, c, l, u, f, m, h, g, _, v, y, b, x, S;
		if (e.substr(R, 7).toLowerCase() === Kt ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(fa)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (s = J(), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
						for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
						if (f = J(), f !== n) {
							for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
							if (e.charCodeAt(R) === 44 ? (h = E, R++) : (h = n, B === 0 && G(I)), h !== n) {
								for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
								if (_ = J(), _ !== n) {
									for (v = [], y = Q(); y !== n;) v.push(y), y = Q();
									if (y = R, e.charCodeAt(R) === 44 ? (b = E, R++) : (b = n, B === 0 && G(I)), b !== n) {
										for (x = [], S = Q(); S !== n;) x.push(S), S = Q();
										S = J(), S === n ? (R = y, y = n) : (b = [
											b,
											x,
											S
										], y = b);
									} else R = y, y = n;
									for (y === n && (y = null), b = [], x = Q(); x !== n;) b.push(x), x = Q();
									e.charCodeAt(R) === 41 ? (x = p, R++) : (x = n, B === 0 && G(P)), x === n ? (R = t, t = n) : (z = t, t = wl(s, f, _, y));
								} else R = t, t = n;
							} else R = t, t = n;
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function kf() {
		var t = R, r, i, a;
		if (e.substr(R, 6).toLowerCase() === qt ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(pa)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			a = K(), a === n ? (R = t, t = n) : (z = t, t = Tl(a));
		} else R = t, t = n;
		return t;
	}
	function Af() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 3).toLowerCase() === Qe ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(pi)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.substr(R, 6).toLowerCase() === qt ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(pa)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				s = K(), s === n ? (R = t, t = n) : (z = t, t = El(s));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function jf() {
		var t = R, r, i, a, o, s, c, u, f, h, g, _, v, y, b, x, S;
		if (e.substr(R, 5).toLowerCase() === Jt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(ma)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				for (e.substr(R, 8).toLowerCase() === l ? (s = e.substr(R, 8), R += 8) : (s = n, B === 0 && G(nr)), s === n && (s = null), c = [], u = Q(); u !== n;) c.push(u), u = Q();
				if (e.charCodeAt(R) === 42 ? (u = m, R++) : (u = n, B === 0 && G(ar)), u === n && (u = J()), u !== n) {
					for (f = [], h = Q(); h !== n;) f.push(h), h = Q();
					if (e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h !== n) {
						for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
						z = t, t = Dl(s, u);
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		if (t === n) {
			if (t = R, e.substr(R, 3).toLowerCase() === Yt ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(ha)), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
					for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
					for (e.substr(R, 8).toLowerCase() === l ? (s = e.substr(R, 8), R += 8) : (s = n, B === 0 && G(nr)), s === n && (s = null), c = [], u = Q(); u !== n;) c.push(u), u = Q();
					if (u = J(), u !== n) {
						for (f = [], h = Q(); h !== n;) f.push(h), h = Q();
						if (e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h !== n) {
							for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
							z = t, t = Ol(s, u);
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
			if (t === n) {
				if (t = R, e.substr(R, 3).toLowerCase() === Xt ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(ga)), r !== n) {
					for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
					if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
						for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
						for (e.substr(R, 8).toLowerCase() === l ? (s = e.substr(R, 8), R += 8) : (s = n, B === 0 && G(nr)), s === n && (s = null), c = [], u = Q(); u !== n;) c.push(u), u = Q();
						if (u = J(), u !== n) {
							for (f = [], h = Q(); h !== n;) f.push(h), h = Q();
							if (e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h !== n) {
								for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
								z = t, t = kl(s, u);
							} else R = t, t = n;
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
				if (t === n) {
					if (t = R, e.substr(R, 3).toLowerCase() === Zt ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(_a)), r !== n) {
						for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
						if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
							for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
							for (e.substr(R, 8).toLowerCase() === l ? (s = e.substr(R, 8), R += 8) : (s = n, B === 0 && G(nr)), s === n && (s = null), c = [], u = Q(); u !== n;) c.push(u), u = Q();
							if (u = J(), u !== n) {
								for (f = [], h = Q(); h !== n;) f.push(h), h = Q();
								if (e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h !== n) {
									for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
									z = t, t = Al(s, u);
								} else R = t, t = n;
							} else R = t, t = n;
						} else R = t, t = n;
					} else R = t, t = n;
					if (t === n) {
						if (t = R, e.substr(R, 3).toLowerCase() === Qt ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(va)), r !== n) {
							for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
							if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
								for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
								for (e.substr(R, 8).toLowerCase() === l ? (s = e.substr(R, 8), R += 8) : (s = n, B === 0 && G(nr)), s === n && (s = null), c = [], u = Q(); u !== n;) c.push(u), u = Q();
								if (u = J(), u !== n) {
									for (f = [], h = Q(); h !== n;) f.push(h), h = Q();
									if (e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h !== n) {
										for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
										z = t, t = jl(s, u);
									} else R = t, t = n;
								} else R = t, t = n;
							} else R = t, t = n;
						} else R = t, t = n;
						if (t === n) {
							if (t = R, e.substr(R, 6).toLowerCase() === $t ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(ya)), r !== n) {
								for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
								if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
									for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
									for (e.substr(R, 8).toLowerCase() === l ? (s = e.substr(R, 8), R += 8) : (s = n, B === 0 && G(nr)), s === n && (s = null), c = [], u = Q(); u !== n;) c.push(u), u = Q();
									if (u = J(), u !== n) {
										for (f = [], h = Q(); h !== n;) f.push(h), h = Q();
										if (e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h !== n) {
											for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
											z = t, t = Ml(s, u);
										} else R = t, t = n;
									} else R = t, t = n;
								} else R = t, t = n;
							} else R = t, t = n;
							if (t === n) {
								if (t = R, e.substr(R, 12).toLowerCase() === en ? (r = e.substr(R, 12), R += 12) : (r = n, B === 0 && G(ba)), r !== n) {
									for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
									if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
										for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
										for (e.substr(R, 8).toLowerCase() === l ? (s = e.substr(R, 8), R += 8) : (s = n, B === 0 && G(nr)), s === n && (s = null), c = [], u = Q(); u !== n;) c.push(u), u = Q();
										if (u = J(), u !== n) {
											for (f = R, h = [], g = Q(); g !== n;) h.push(g), g = Q();
											if (e.charCodeAt(R) === 59 ? (g = se, R++) : (g = n, B === 0 && G(Cr)), g !== n) {
												for (_ = [], v = Q(); v !== n;) _.push(v), v = Q();
												if (e.substr(R, 9).toLowerCase() === tn ? (v = e.substr(R, 9), R += 9) : (v = n, B === 0 && G(xa)), v !== n) {
													for (y = [], b = Q(); b !== n;) y.push(b), b = Q();
													if (e.charCodeAt(R) === 61 ? (b = Ge, R++) : (b = n, B === 0 && G(oi)), b !== n) {
														for (x = [], S = Q(); S !== n;) x.push(S), S = Q();
														S = zf(), S === n ? (R = f, f = n) : (h = [
															h,
															g,
															_,
															v,
															y,
															b,
															x,
															S
														], f = h);
													} else R = f, f = n;
												} else R = f, f = n;
											} else R = f, f = n;
											for (f === n && (f = null), h = [], g = Q(); g !== n;) h.push(g), g = Q();
											if (e.charCodeAt(R) === 41 ? (g = p, R++) : (g = n, B === 0 && G(P)), g !== n) {
												for (_ = [], v = Q(); v !== n;) _.push(v), v = Q();
												z = t, t = Nl(s, u, f);
											} else R = t, t = n;
										} else R = t, t = n;
									} else R = t, t = n;
								} else R = t, t = n;
							}
						}
					}
				}
			}
		}
		return t;
	}
	function Mf() {
		var e = R, t = Z(), r, i;
		if (t !== n) {
			for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
			i = Vd(), i === n && (i = null), z = e, e = Pl(t, i);
		} else R = e, e = n;
		return e;
	}
	function Nf() {
		var t = R, r = zf(), i, a, o;
		return r === n ? (R = t, t = n) : (i = Jf(), i === n && (i = R, e.substr(R, 2) === nn ? (a = nn, R += 2) : (a = n, B === 0 && G(Sa)), a === n ? (R = i, i = n) : (o = Z(), o === n ? (R = i, i = n) : (a = [a, o], i = a))), i === n && (i = null), z = t, t = Fl(r, i)), t;
	}
	function Pf() {
		var e = Ff();
		return e === n && (e = If(), e === n && (e = Lf())), e;
	}
	function Ff() {
		var e = Zf();
		return e === n && (e = Xf(), e === n && (e = Yf())), e;
	}
	function If() {
		var e = ep();
		return e === n && (e = $f(), e === n && (e = Qf())), e;
	}
	function Lf() {
		var e = rp();
		return e === n && (e = np(), e === n && (e = tp())), e;
	}
	function Rf() {
		var t = R, r;
		return e.substr(R, 4).toLowerCase() === rn ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Ca)), r !== n && (z = t, r = Il()), t = r, t === n && (t = R, e.substr(R, 5).toLowerCase() === an ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(wa)), r !== n && (z = t, r = Ll()), t = r), t;
	}
	function zf() {
		var e = sp();
		return e === n && (e = cp(), e === n && (e = ap(), e === n && (e = op()))), e;
	}
	function Z() {
		var e = R, t = Hf();
		return t !== n && (z = e, t = Rl(t)), e = t, e === n && (e = R, t = Bf(), t !== n && (z = e, t = zl(t)), e = t), e;
	}
	function Bf() {
		var e = R, t = Wf();
		return t !== n && (z = e, t = Bl(t)), e = t, e === n && (e = R, t = Uf(), t !== n && (z = e, t = Vl(t)), e = t), e;
	}
	function Vf() {
		var e = R, t = Gf();
		return t !== n && (z = e, t = Hl(t)), e = t, e === n && (e = R, t = gp(), t !== n && (z = e, t = Ul()), e = t), e;
	}
	function Hf() {
		var t = R, r, i, a;
		if (e.charCodeAt(R) === 60 ? (r = qe, R++) : (r = n, B === 0 && G(ci)), r !== n) {
			for (i = [], Sn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(Ta)); a !== n;) i.push(a), Sn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(Ta));
			e.charCodeAt(R) === 62 ? (a = Je, R++) : (a = n, B === 0 && G(li)), a === n ? (R = t, t = n) : (z = t, t = Wl(i));
		} else R = t, t = n;
		return t;
	}
	function Uf() {
		var t = R, r = bp(), i;
		return r === n && (r = null), e.charCodeAt(R) === 58 ? (i = on, R++) : (i = n, B === 0 && G(Ea)), i === n ? (R = t, t = n) : (z = t, t = Gl(r)), t;
	}
	function Wf() {
		var e = R, t = Uf(), r;
		return t === n ? (R = e, e = n) : (r = xp(), r === n ? (R = e, e = n) : (z = e, e = Kl(t, r))), e;
	}
	function Gf() {
		var t = R, r, i, a, o, s, c;
		if (e.substr(R, 2) === sn ? (r = sn, R += 2) : (r = n, B === 0 && G(Da)), r !== n) {
			if (i = vp(), i === n && (M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L))), i !== n) {
				for (a = [], o = $(), o === n && (o = R, e.charCodeAt(R) === 46 ? (s = T, R++) : (s = n, B === 0 && G(F)), s === n ? (R = o, o = n) : (c = $(), c === n ? (R = o, o = n) : (s = [s, c], o = s))); o !== n;) a.push(o), o = $(), o === n && (o = R, e.charCodeAt(R) === 46 ? (s = T, R++) : (s = n, B === 0 && G(F)), s === n ? (R = o, o = n) : (c = $(), c === n ? (R = o, o = n) : (s = [s, c], o = s)));
				z = t, t = ql();
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Kf() {
		var t = R, r, i;
		return e.charCodeAt(R) === 63 ? (r = Le, R++) : (r = n, B === 0 && G($r)), r === n ? (R = t, t = n) : (i = yp(), i === n ? (R = t, t = n) : (z = t, t = Jl(i))), t;
	}
	function qf() {
		var t = R, r, i;
		return e.charCodeAt(R) === 36 ? (r = cn, R++) : (r = n, B === 0 && G(Oa)), r === n ? (R = t, t = n) : (i = yp(), i === n ? (R = t, t = n) : (z = t, t = Yl(i))), t;
	}
	function Jf() {
		var t = R, r, i, a, o, s, c, l;
		if (e.charCodeAt(R) === 64 ? (r = ln, R++) : (r = n, B === 0 && G(ka)), r !== n) {
			if (i = [], Cn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(Aa)), a !== n) for (; a !== n;) i.push(a), Cn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(Aa));
			else i = n;
			if (i !== n) {
				if (a = [], o = R, e.charCodeAt(R) === 45 ? (s = D, R++) : (s = n, B === 0 && G(mi)), s !== n) {
					if (c = [], wn.test(e.charAt(R)) ? (l = e.charAt(R), R++) : (l = n, B === 0 && G(ja)), l !== n) for (; l !== n;) c.push(l), wn.test(e.charAt(R)) ? (l = e.charAt(R), R++) : (l = n, B === 0 && G(ja));
					else c = n;
					c === n ? (R = o, o = n) : (s = [s, c], o = s);
				} else R = o, o = n;
				for (; o !== n;) if (a.push(o), o = R, e.charCodeAt(R) === 45 ? (s = D, R++) : (s = n, B === 0 && G(mi)), s !== n) {
					if (c = [], wn.test(e.charAt(R)) ? (l = e.charAt(R), R++) : (l = n, B === 0 && G(ja)), l !== n) for (; l !== n;) c.push(l), wn.test(e.charAt(R)) ? (l = e.charAt(R), R++) : (l = n, B === 0 && G(ja));
					else c = n;
					c === n ? (R = o, o = n) : (s = [s, c], o = s);
				} else R = o, o = n;
				z = t, t = Xl(i, a);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Yf() {
		var t = R, r = [], i;
		if (M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L)), i !== n) for (; i !== n;) r.push(i), M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L));
		else r = n;
		return r !== n && (z = t, r = Zl()), t = r, t;
	}
	function Xf() {
		var t = R, r = [], i, a, o;
		for (M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L)); i !== n;) r.push(i), M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L));
		if (e.charCodeAt(R) === 46 ? (i = T, R++) : (i = n, B === 0 && G(F)), i !== n) {
			if (a = [], M.test(e.charAt(R)) ? (o = e.charAt(R), R++) : (o = n, B === 0 && G(L)), o !== n) for (; o !== n;) a.push(o), M.test(e.charAt(R)) ? (o = e.charAt(R), R++) : (o = n, B === 0 && G(L));
			else a = n;
			a === n ? (R = t, t = n) : (z = t, t = Ql());
		} else R = t, t = n;
		return t;
	}
	function Zf() {
		var t = R, r = [], i, a, o;
		if (M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L)), i !== n) for (; i !== n;) r.push(i), M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L));
		else r = n;
		if (r !== n) {
			if (e.charCodeAt(R) === 46 ? (i = T, R++) : (i = n, B === 0 && G(F)), i !== n) {
				for (a = [], M.test(e.charAt(R)) ? (o = e.charAt(R), R++) : (o = n, B === 0 && G(L)); o !== n;) a.push(o), M.test(e.charAt(R)) ? (o = e.charAt(R), R++) : (o = n, B === 0 && G(L));
				o = ip(), o === n ? (R = t, t = n) : (z = t, t = $l());
			} else R = t, t = n;
		} else R = t, t = n;
		if (t === n) {
			if (t = R, e.charCodeAt(R) === 46 ? (r = T, R++) : (r = n, B === 0 && G(F)), r !== n) {
				if (i = [], M.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(L)), a !== n) for (; a !== n;) i.push(a), M.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(L));
				else i = n;
				i === n ? (R = t, t = n) : (a = ip(), a === n ? (R = t, t = n) : (z = t, t = eu()));
			} else R = t, t = n;
			if (t === n) {
				if (t = R, r = [], M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L)), i !== n) for (; i !== n;) r.push(i), M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L));
				else r = n;
				r === n ? (R = t, t = n) : (i = ip(), i === n ? (R = t, t = n) : (z = t, t = tu()));
			}
		}
		return t;
	}
	function Qf() {
		var t = R, r, i;
		return e.charCodeAt(R) === 43 ? (r = Re, R++) : (r = n, B === 0 && G(ei)), r === n ? (R = t, t = n) : (i = Yf(), i === n ? (R = t, t = n) : (z = t, t = nu(i))), t;
	}
	function $f() {
		var t = R, r, i;
		return e.charCodeAt(R) === 43 ? (r = Re, R++) : (r = n, B === 0 && G(ei)), r === n ? (R = t, t = n) : (i = Xf(), i === n ? (R = t, t = n) : (z = t, t = ru(i))), t;
	}
	function ep() {
		var t = R, r, i;
		return e.charCodeAt(R) === 43 ? (r = Re, R++) : (r = n, B === 0 && G(ei)), r === n ? (R = t, t = n) : (i = Zf(), i === n ? (R = t, t = n) : (z = t, t = iu(i))), t;
	}
	function tp() {
		var t = R, r, i;
		return e.charCodeAt(R) === 45 ? (r = D, R++) : (r = n, B === 0 && G(mi)), r === n ? (R = t, t = n) : (i = Yf(), i === n ? (R = t, t = n) : (z = t, t = au(i))), t;
	}
	function np() {
		var t = R, r, i;
		return e.charCodeAt(R) === 45 ? (r = D, R++) : (r = n, B === 0 && G(mi)), r === n ? (R = t, t = n) : (i = Xf(), i === n ? (R = t, t = n) : (z = t, t = ou(i))), t;
	}
	function rp() {
		var t = R, r, i;
		return e.charCodeAt(R) === 45 ? (r = D, R++) : (r = n, B === 0 && G(mi)), r === n ? (R = t, t = n) : (i = Zf(), i === n ? (R = t, t = n) : (z = t, t = su(i))), t;
	}
	function ip() {
		var t = R, r, i, a, o;
		if (Tn.test(e.charAt(R)) ? (r = e.charAt(R), R++) : (r = n, B === 0 && G(Ma)), r !== n) {
			if (En.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(Na)), i === n && (i = null), a = [], M.test(e.charAt(R)) ? (o = e.charAt(R), R++) : (o = n, B === 0 && G(L)), o !== n) for (; o !== n;) a.push(o), M.test(e.charAt(R)) ? (o = e.charAt(R), R++) : (o = n, B === 0 && G(L));
			else a = n;
			a === n ? (R = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else R = t, t = n;
		return t;
	}
	function ap() {
		var t = R, r, i, a;
		if (e.charCodeAt(R) === 39 ? (r = un, R++) : (r = n, B === 0 && G(Pa)), r !== n) {
			for (i = [], Dn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(Fa)), a === n && (a = lp()); a !== n;) i.push(a), Dn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(Fa)), a === n && (a = lp());
			e.charCodeAt(R) === 39 ? (a = un, R++) : (a = n, B === 0 && G(Pa)), a === n ? (R = t, t = n) : (z = t, t = cu(i));
		} else R = t, t = n;
		return t;
	}
	function op() {
		var t = R, r, i, a;
		if (e.charCodeAt(R) === 34 ? (r = dn, R++) : (r = n, B === 0 && G(Ia)), r !== n) {
			for (i = [], On.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(La)), a === n && (a = lp()); a !== n;) i.push(a), On.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(La)), a === n && (a = lp());
			e.charCodeAt(R) === 34 ? (a = dn, R++) : (a = n, B === 0 && G(Ia)), a === n ? (R = t, t = n) : (z = t, t = lu(i));
		} else R = t, t = n;
		return t;
	}
	function sp() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 3) === fn ? (r = fn, R += 3) : (r = n, B === 0 && G(Ra)), r !== n) {
			for (i = [], a = R, e.substr(R, 2) === pn ? (o = pn, R += 2) : (o = n, B === 0 && G(za)), o === n && (e.charCodeAt(R) === 39 ? (o = un, R++) : (o = n, B === 0 && G(Pa))), o === n && (o = null), kn.test(e.charAt(R)) ? (s = e.charAt(R), R++) : (s = n, B === 0 && G(Ba)), s === n && (s = lp()), s === n ? (R = a, a = n) : (o = [o, s], a = o); a !== n;) i.push(a), a = R, e.substr(R, 2) === pn ? (o = pn, R += 2) : (o = n, B === 0 && G(za)), o === n && (e.charCodeAt(R) === 39 ? (o = un, R++) : (o = n, B === 0 && G(Pa))), o === n && (o = null), kn.test(e.charAt(R)) ? (s = e.charAt(R), R++) : (s = n, B === 0 && G(Ba)), s === n && (s = lp()), s === n ? (R = a, a = n) : (o = [o, s], a = o);
			e.substr(R, 3) === fn ? (a = fn, R += 3) : (a = n, B === 0 && G(Ra)), a === n ? (R = t, t = n) : (z = t, t = uu(i));
		} else R = t, t = n;
		return t;
	}
	function cp() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 3) === mn ? (r = mn, R += 3) : (r = n, B === 0 && G(Va)), r !== n) {
			for (i = [], a = R, e.substr(R, 2) === hn ? (o = hn, R += 2) : (o = n, B === 0 && G(Ha)), o === n && (e.charCodeAt(R) === 34 ? (o = dn, R++) : (o = n, B === 0 && G(Ia))), o === n && (o = null), An.test(e.charAt(R)) ? (s = e.charAt(R), R++) : (s = n, B === 0 && G(Ua)), s === n && (s = lp()), s === n ? (R = a, a = n) : (o = [o, s], a = o); a !== n;) i.push(a), a = R, e.substr(R, 2) === hn ? (o = hn, R += 2) : (o = n, B === 0 && G(Ha)), o === n && (e.charCodeAt(R) === 34 ? (o = dn, R++) : (o = n, B === 0 && G(Ia))), o === n && (o = null), An.test(e.charAt(R)) ? (s = e.charAt(R), R++) : (s = n, B === 0 && G(Ua)), s === n && (s = lp()), s === n ? (R = a, a = n) : (o = [o, s], a = o);
			e.substr(R, 3) === mn ? (a = mn, R += 3) : (a = n, B === 0 && G(Va)), a === n ? (R = t, t = n) : (z = t, t = du(i));
		} else R = t, t = n;
		return t;
	}
	function lp() {
		var t = R, r, i;
		return e.charCodeAt(R) === 92 ? (r = gn, R++) : (r = n, B === 0 && G(Wa)), r === n ? (R = t, t = n) : (jn.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(Ga)), i === n ? (R = t, t = n) : (z = t, t = fu())), t;
	}
	function up() {
		var t = R, r, i, a;
		if (e.charCodeAt(R) === 40 ? (r = d, R++) : (r = n, B === 0 && G(N)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			e.charCodeAt(R) === 41 ? (a = p, R++) : (a = n, B === 0 && G(P)), a === n ? (R = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else R = t, t = n;
		return t;
	}
	function Q() {
		var e = hp();
		return e === n && (e = dp(), e === n && (e = fp())), e;
	}
	function dp() {
		var t;
		return Mn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(Ka)), t;
	}
	function fp() {
		var t;
		return Nn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(qa)), t;
	}
	function pp() {
		var t;
		return Pn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(Ja)), t;
	}
	function mp() {
		var t = R, r, i, a;
		if (e.charCodeAt(R) === 35 ? (r = _n, R++) : (r = n, B === 0 && G(Ya)), r !== n) {
			for (i = [], a = pp(); a !== n;) i.push(a), a = pp();
			a = fp(), a === n ? (R = t, t = n) : (z = t, t = pu());
		} else R = t, t = n;
		return t;
	}
	function hp() {
		var t = R, r = fp(), i, a, o, s;
		for (r === n && (r = null), i = [], a = dp(); a !== n;) i.push(a), a = dp();
		if (e.charCodeAt(R) === 35 ? (a = _n, R++) : (a = n, B === 0 && G(Ya)), a !== n) {
			for (o = [], s = pp(); s !== n;) o.push(s), s = pp();
			z = t, t = mu();
		} else R = t, t = n;
		return t;
	}
	function gp() {
		var t = R, r, i, a;
		if (e.charCodeAt(R) === 91 ? (r = Be, R++) : (r = n, B === 0 && G(ni)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			e.charCodeAt(R) === 93 ? (a = Ve, R++) : (a = n, B === 0 && G(ri)), a === n ? (R = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else R = t, t = n;
		return t;
	}
	function _p() {
		var t;
		return Fn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(Xa)), t === n && (In.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(Za)), t === n && (Ln.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(Qa)), t === n && (Rn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G($a)), t === n && (zn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(eo)), t === n && (Bn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(to)), t === n && (Vn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(no)), t === n && (Hn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(ro)), t === n && (Un.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(io)), t === n && (Wn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(ao)), t === n && (Gn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(oo)), t === n && (Kn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(so)), t === n && (qn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(co)))))))))))))), t;
	}
	function vp() {
		var t = _p();
		return t === n && (e.charCodeAt(R) === 95 ? (t = vn, R++) : (t = n, B === 0 && G(lo))), t;
	}
	function yp() {
		var t = R, r = vp(), i, a;
		if (r === n && (M.test(e.charAt(R)) ? (r = e.charAt(R), R++) : (r = n, B === 0 && G(L))), r !== n) {
			for (i = [], a = vp(), a === n && (M.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(L)), a === n && (Jn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(uo)), a === n && (Yn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(fo)), a === n && (Xn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(po)))))); a !== n;) i.push(a), a = vp(), a === n && (M.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(L)), a === n && (Jn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(uo)), a === n && (Yn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(fo)), a === n && (Xn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(po))))));
			z = t, t = hu();
		} else R = t, t = n;
		return t;
	}
	function $() {
		var t = vp();
		return t === n && (e.charCodeAt(R) === 45 ? (t = D, R++) : (t = n, B === 0 && G(mi)), t === n && (M.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(L)), t === n && (Jn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(uo)), t === n && (Yn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(fo)), t === n && (Xn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(po))))))), t;
	}
	function bp() {
		var t = R, r = _p(), i, a, o, s;
		if (r !== n) {
			for (i = [], a = $(), a === n && (a = R, e.charCodeAt(R) === 46 ? (o = T, R++) : (o = n, B === 0 && G(F)), o === n ? (R = a, a = n) : (s = $(), s === n ? (R = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = $(), a === n && (a = R, e.charCodeAt(R) === 46 ? (o = T, R++) : (o = n, B === 0 && G(F)), o === n ? (R = a, a = n) : (s = $(), s === n ? (R = a, a = n) : (o = [o, s], a = o)));
			z = t, t = gu();
		} else R = t, t = n;
		return t;
	}
	function xp() {
		var t = R, r = vp(), i, a, o, s;
		if (r === n && (e.charCodeAt(R) === 58 ? (r = on, R++) : (r = n, B === 0 && G(Ea)), r === n && (M.test(e.charAt(R)) ? (r = e.charAt(R), R++) : (r = n, B === 0 && G(L)), r === n && (r = Sp()))), r !== n) {
			for (i = [], a = $(), a === n && (e.charCodeAt(R) === 58 ? (a = on, R++) : (a = n, B === 0 && G(Ea)), a === n && (a = Sp())), a === n && (a = R, e.charCodeAt(R) === 46 ? (o = T, R++) : (o = n, B === 0 && G(F)), o === n ? (R = a, a = n) : (s = $(), s === n && (e.charCodeAt(R) === 58 ? (s = on, R++) : (s = n, B === 0 && G(Ea)), s === n && (s = Sp())), s === n ? (R = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = $(), a === n && (e.charCodeAt(R) === 58 ? (a = on, R++) : (a = n, B === 0 && G(Ea)), a === n && (a = Sp())), a === n && (a = R, e.charCodeAt(R) === 46 ? (o = T, R++) : (o = n, B === 0 && G(F)), o === n ? (R = a, a = n) : (s = $(), s === n && (e.charCodeAt(R) === 58 ? (s = on, R++) : (s = n, B === 0 && G(Ea)), s === n && (s = Sp())), s === n ? (R = a, a = n) : (o = [o, s], a = o)));
			z = t, t = _u();
		} else R = t, t = n;
		return t;
	}
	function Sp() {
		var e = Cp();
		return e === n && (e = Tp()), e;
	}
	function Cp() {
		var t = R, r, i, a;
		return e.charCodeAt(R) === 37 ? (r = yn, R++) : (r = n, B === 0 && G(mo)), r === n ? (R = t, t = n) : (i = wp(), i === n ? (R = t, t = n) : (a = wp(), a === n ? (R = t, t = n) : (r = [
			r,
			i,
			a
		], t = r))), t;
	}
	function wp() {
		var t;
		return M.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(L)), t === n && (Zn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(ho)), t === n && (Qn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(go)))), t;
	}
	function Tp() {
		var t = R, r, i;
		return e.charCodeAt(R) === 92 ? (r = gn, R++) : (r = n, B === 0 && G(Wa)), r === n ? (R = t, t = n) : (e.charCodeAt(R) === 95 ? (i = vn, R++) : (i = n, B === 0 && G(lo)), i === n && (e.charCodeAt(R) === 126 ? (i = bn, R++) : (i = n, B === 0 && G(_o)), i === n && (e.charCodeAt(R) === 46 ? (i = T, R++) : (i = n, B === 0 && G(F)), i === n && (e.charCodeAt(R) === 45 ? (i = D, R++) : (i = n, B === 0 && G(mi)), i === n && (e.charCodeAt(R) === 33 ? (i = ze, R++) : (i = n, B === 0 && G(ti)), i === n && (e.charCodeAt(R) === 36 ? (i = cn, R++) : (i = n, B === 0 && G(Oa)), i === n && (e.charCodeAt(R) === 38 ? (i = xn, R++) : (i = n, B === 0 && G(vo)), i === n && (e.charCodeAt(R) === 39 ? (i = un, R++) : (i = n, B === 0 && G(Pa)), i === n && (e.charCodeAt(R) === 40 ? (i = d, R++) : (i = n, B === 0 && G(N)), i === n && (e.charCodeAt(R) === 41 ? (i = p, R++) : (i = n, B === 0 && G(P)), i === n && (e.charCodeAt(R) === 42 ? (i = m, R++) : (i = n, B === 0 && G(ar)), i === n && (e.charCodeAt(R) === 43 ? (i = Re, R++) : (i = n, B === 0 && G(ei)), i === n && (e.charCodeAt(R) === 44 ? (i = E, R++) : (i = n, B === 0 && G(I)), i === n && (e.charCodeAt(R) === 59 ? (i = se, R++) : (i = n, B === 0 && G(Cr)), i === n && (e.charCodeAt(R) === 58 ? (i = on, R++) : (i = n, B === 0 && G(Ea)), i === n && (e.charCodeAt(R) === 61 ? (i = Ge, R++) : (i = n, B === 0 && G(oi)), i === n && (e.charCodeAt(R) === 47 ? (i = Fe, R++) : (i = n, B === 0 && G(Zr)), i === n && (e.charCodeAt(R) === 63 ? (i = Le, R++) : (i = n, B === 0 && G($r)), i === n && (e.charCodeAt(R) === 35 ? (i = _n, R++) : (i = n, B === 0 && G(Ya)), i === n && (e.charCodeAt(R) === 64 ? (i = ln, R++) : (i = n, B === 0 && G(ka)), i === n && (e.charCodeAt(R) === 37 ? (i = yn, R++) : (i = n, B === 0 && G(mo)))))))))))))))))))))), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	let Ep = {};
	if (xu = a(), xu !== n && R === e.length) return xu;
	throw xu !== n && R < e.length && G(Su()), Tu(bu, yu < e.length ? e.charAt(yu) : null, yu < e.length ? wu(yu, yu + 1) : wu(yu, yu));
}
//#endregion
//#region node_modules/.pnpm/sparql-formatter@1.0.2/node_modules/sparql-formatter/src/sparql-parser-compact.js
function Ge(e, t) {
	function n() {
		this.constructor = e;
	}
	n.prototype = t.prototype, e.prototype = new n();
}
function Ke(e, t, n, r) {
	var i = Error.call(this, e);
	return Object.setPrototypeOf && Object.setPrototypeOf(i, Ke.prototype), i.expected = t, i.found = n, i.location = r, i.name = "SyntaxError", i;
}
Ge(Ke, Error);
function qe(e, t, n) {
	return n ||= " ", e.length > t ? e : (t -= e.length, n += n.repeat(t), e + n.slice(0, t));
}
Ke.prototype.format = function(e) {
	var t = "Error: " + this.message;
	if (this.location) {
		for (var n = null, r = 0; r < e.length; r++) if (e[r].source === this.location.source) {
			n = e[r].text.split(/\r\n|\n|\r/g);
			break;
		}
		var i = this.location.start, a = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(i) : i, o = this.location.source + ":" + a.line + ":" + a.column;
		if (n) {
			var s = this.location.end, c = qe("", a.line.toString().length, " "), l = n[i.line - 1], u = (i.line === s.line ? s.column : l.length + 1) - i.column || 1;
			t += "\n --> " + o + "\n" + c + " |\n" + a.line + " | " + l + "\n" + c + " | " + qe("", i.column - 1, " ") + qe("", u, "^");
		} else t += "\n at " + o;
	}
	return t;
}, Ke.buildMessage = function(e, t) {
	var n = {
		literal: function(e) {
			return "\"" + i(e.text) + "\"";
		},
		class: function(e) {
			var t = e.parts.map(function(e) {
				return Array.isArray(e) ? a(e[0]) + "-" + a(e[1]) : a(e);
			});
			return "[" + (e.inverted ? "^" : "") + t.join("") + "]";
		},
		any: function() {
			return "any character";
		},
		end: function() {
			return "end of input";
		},
		other: function(e) {
			return e.description;
		}
	};
	function r(e) {
		return e.charCodeAt(0).toString(16).toUpperCase();
	}
	function i(e) {
		return e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
			return "\\x0" + r(e);
		}).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
			return "\\x" + r(e);
		});
	}
	function a(e) {
		return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
			return "\\x0" + r(e);
		}).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
			return "\\x" + r(e);
		});
	}
	function o(e) {
		return n[e.type](e);
	}
	function s(e) {
		var t = e.map(o), n, r;
		if (t.sort(), t.length > 0) {
			for (n = 1, r = 1; n < t.length; n++) t[n - 1] !== t[n] && (t[r] = t[n], r++);
			t.length = r;
		}
		switch (t.length) {
			case 1: return t[0];
			case 2: return t[0] + " or " + t[1];
			default: return t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
		}
	}
	function c(e) {
		return e ? "\"" + i(e) + "\"" : "end of input";
	}
	return "Expected " + s(e) + " but " + c(t) + " found.";
};
function Je(e, t) {
	t = t === void 0 ? {} : t;
	var n = {}, r = t.grammarSource, i = { DOCUMENT: Eu }, a = Eu, o = "base", s = "prefix", c = "select", l = "distinct", u = "reduced", d = "(", f = "as", p = ")", m = "*", h = "construct", g = "where", _ = "{", v = "}", y = "describe", b = "ask", x = "from", S = "named", C = "group", ee = "by", w = "having", te = "order", ne = "asc", re = "desc", ie = "limit", ae = "offset", oe = "values", se = ";", ce = "load", le = "silent", ue = "into", de = "clear", fe = "drop", pe = "create", me = "add", he = "to", ge = "move", _e = "copy", ve = "insert", ye = "data", be = "delete", xe = "with", Se = "using", Ce = "default", we = "graph", Te = "all", T = ".", Ee = "optional", De = "service", Oe = "bind", ke = "UNDEF", Ae = "minus", je = "union", Me = "filter", E = ",", Ne = "a", Pe = "|", Fe = "/", Ie = "^", Le = "?", Re = "+", ze = "!", Be = "[", Ve = "]", He = "||", Ue = "&&", We = "=", Ge = "!=", qe = "<", Je = ">", Ye = "<=", Xe = ">=", Ze = "in", Qe = "not", D = "-", $e = "str", et = "lang", tt = "langmatches", O = "datatype", k = "bound", nt = "iri", rt = "uri", it = "bnode", at = "rand", ot = "abs", st = "ceil", ct = "floor", lt = "round", ut = "concat", dt = "strlen", ft = "ucase", pt = "lcase", mt = "encode_for_uri", ht = "contains", gt = "strbefore", _t = "strstarts", vt = "strends", yt = "strafter", bt = "year", xt = "month", St = "day", Ct = "hours", wt = "minutes", Tt = "seconds", Et = "timezone", Dt = "tz", Ot = "now", A = "uuid", kt = "struuid", At = "md5", j = "sha1", jt = "sha256", Mt = "sha384", Nt = "sha512", Pt = "coalesce", Ft = "if", It = "strlang", Lt = "strdt", Rt = "sameterm", zt = "isuri", Bt = "isiri", Vt = "isblank", Ht = "isliteral", Ut = "isnumeric", Wt = "regex", Gt = "substr", Kt = "replace", qt = "exists", Jt = "count", Yt = "sum", Xt = "min", Zt = "max", Qt = "avg", $t = "sample", en = "group_concat", tn = "separator", nn = "^^", rn = "true", an = "false", on = ":", sn = "_:", cn = "$", ln = "@", un = "'", dn = "\"", fn = "'''", pn = "''", mn = "\"\"\"", hn = "\"\"", gn = "\\", _n = "#", vn = "_", yn = "%", bn = "~", xn = "&", Sn = /^[^<>"{}|\^`\\\0- ]/, M = /^[0-9]/, Cn = /^[a-zA-Z]/, wn = /^[a-zA-Z0-9]/, Tn = /^[eE]/, En = /^[+\-]/, Dn = /^[^'\\\n\r]/, On = /^[^"\\\n\r]/, kn = /^[^'\\]/, An = /^[^"\\]/, jn = /^[tbnrf\\"']/, Mn = /^[ \t]/, Nn = /^[\r\n]/, Pn = /^[^\r\n]/, Fn = /^[A-Z]/, In = /^[a-z]/, Ln = /^[\xC0-\xD6]/, Rn = /^[\xD8-\xF6]/, zn = /^[\xF8-\u02FF]/, Bn = /^[\u0370-\u037D]/, Vn = /^[\u037F-\u1FFF]/, Hn = /^[\u200C-\u200D]/, Un = /^[\u2070-\u218F]/, Wn = /^[\u2C00-\u2FEF]/, Gn = /^[\u3001-\uD7FF]/, Kn = /^[\uF900-\uFDCF]/, qn = /^[\uFDF0-\uFFFD]/, Jn = /^[\xB7]/, Yn = /^[\u0300-\u036F]/, Xn = /^[\u203F-\u2040]/, Zn = /^[A-F]/, Qn = /^[a-f]/, $n = U("BASE", !0), er = U("PREFIX", !0), tr = U("SELECT", !0), nr = U("DISTINCT", !0), rr = U("REDUCED", !0), N = U("(", !1), ir = U("AS", !0), P = U(")", !1), ar = U("*", !1), or = U("CONSTRUCT", !0), sr = U("WHERE", !0), cr = U("{", !1), lr = U("}", !1), ur = U("DESCRIBE", !0), dr = U("ASK", !0), fr = U("FROM", !0), pr = U("NAMED", !0), mr = U("GROUP", !0), hr = U("BY", !0), gr = U("HAVING", !0), _r = U("ORDER", !0), vr = U("ASC", !0), yr = U("DESC", !0), br = U("LIMIT", !0), xr = U("OFFSET", !0), Sr = U("VALUES", !0), Cr = U(";", !1), wr = U("LOAD", !0), Tr = U("SILENT", !0), Er = U("INTO", !0), Dr = U("CLEAR", !0), Or = U("DROP", !0), kr = U("CREATE", !0), Ar = U("ADD", !0), jr = U("TO", !0), Mr = U("MOVE", !0), Nr = U("COPY", !0), Pr = U("INSERT", !0), Fr = U("DATA", !0), Ir = U("DELETE", !0), Lr = U("WITH", !0), Rr = U("USING", !0), zr = U("DEFAULT", !0), Br = U("GRAPH", !0), Vr = U("ALL", !0), F = U(".", !1), Hr = U("OPTIONAL", !0), Ur = U("SERVICE", !0), Wr = U("BIND", !0), Gr = U("UNDEF", !1), Kr = U("MINUS", !0), qr = U("UNION", !0), Jr = U("FILTER", !0), I = U(",", !1), Yr = U("a", !1), Xr = U("|", !1), Zr = U("/", !1), Qr = U("^", !1), $r = U("?", !1), ei = U("+", !1), ti = U("!", !1), ni = U("[", !1), ri = U("]", !1), ii = U("||", !1), ai = U("&&", !1), oi = U("=", !1), si = U("!=", !1), ci = U("<", !1), li = U(">", !1), ui = U("<=", !1), di = U(">=", !1), fi = U("IN", !0), pi = U("NOT", !0), mi = U("-", !1), hi = U("STR", !0), gi = U("LANG", !0), _i = U("LANGMATCHES", !0), vi = U("DATATYPE", !0), yi = U("BOUND", !0), bi = U("IRI", !0), xi = U("URI", !0), Si = U("BNODE", !0), Ci = U("RAND", !0), wi = U("ABS", !0), Ti = U("CEIL", !0), Ei = U("FLOOR", !0), Di = U("ROUND", !0), Oi = U("CONCAT", !0), ki = U("STRLEN", !0), Ai = U("UCASE", !0), ji = U("LCASE", !0), Mi = U("ENCODE_FOR_URI", !0), Ni = U("CONTAINS", !0), Pi = U("STRBEFORE", !0), Fi = U("STRSTARTS", !0), Ii = U("STRENDS", !0), Li = U("STRAFTER", !0), Ri = U("YEAR", !0), zi = U("MONTH", !0), Bi = U("DAY", !0), Vi = U("HOURS", !0), Hi = U("MINUTES", !0), Ui = U("SECONDS", !0), Wi = U("TIMEZONE", !0), Gi = U("TZ", !0), Ki = U("NOW", !0), qi = U("UUID", !0), Ji = U("STRUUID", !0), Yi = U("MD5", !0), Xi = U("SHA1", !0), Zi = U("SHA256", !0), Qi = U("SHA384", !0), $i = U("SHA512", !0), ea = U("COALESCE", !0), ta = U("IF", !0), na = U("STRLANG", !0), ra = U("STRDT", !0), ia = U("sameTerm", !0), aa = U("isURI", !0), oa = U("isIRI", !0), sa = U("isBLANK", !0), ca = U("isLITERAL", !0), la = U("isNUMERIC", !0), ua = U("REGEX", !0), da = U("SUBSTR", !0), fa = U("REPLACE", !0), pa = U("EXISTS", !0), ma = U("COUNT", !0), ha = U("SUM", !0), ga = U("MIN", !0), _a = U("MAX", !0), va = U("AVG", !0), ya = U("SAMPLE", !0), ba = U("GROUP_CONCAT", !0), xa = U("SEPARATOR", !0), Sa = U("^^", !1), Ca = U("true", !0), wa = U("false", !0), Ta = W([
		"<",
		">",
		"\"",
		"{",
		"}",
		"|",
		"^",
		"`",
		"\\",
		["\0", " "]
	], !0, !1), Ea = U(":", !1), Da = U("_:", !1), L = W([["0", "9"]], !1, !1), Oa = U("$", !1), ka = U("@", !1), Aa = W([["a", "z"], ["A", "Z"]], !1, !1), ja = W([
		["a", "z"],
		["A", "Z"],
		["0", "9"]
	], !1, !1), Ma = W(["e", "E"], !1, !1), Na = W(["+", "-"], !1, !1), Pa = U("'", !1), Fa = W([
		"'",
		"\\",
		"\n",
		"\r"
	], !0, !1), Ia = U("\"", !1), La = W([
		"\"",
		"\\",
		"\n",
		"\r"
	], !0, !1), Ra = U("'''", !1), za = U("''", !1), Ba = W(["'", "\\"], !0, !1), Va = U("\"\"\"", !1), Ha = U("\"\"", !1), Ua = W(["\"", "\\"], !0, !1), Wa = U("\\", !1), Ga = W([
		"t",
		"b",
		"n",
		"r",
		"f",
		"\\",
		"\"",
		"'"
	], !1, !1), Ka = W([" ", "	"], !1, !1), qa = W(["\r", "\n"], !1, !1), Ja = W(["\r", "\n"], !0, !1), Ya = U("#", !1), Xa = W([["A", "Z"]], !1, !1), Za = W([["a", "z"]], !1, !1), Qa = W([["À", "Ö"]], !1, !1), $a = W([["Ø", "ö"]], !1, !1), eo = W([["ø", "˿"]], !1, !1), to = W([["Ͱ", "ͽ"]], !1, !1), no = W([["Ϳ", "῿"]], !1, !1), ro = W([["‌", "‍"]], !1, !1), io = W([["⁰", "↏"]], !1, !1), ao = W([["Ⰰ", "⿯"]], !1, !1), oo = W([["、", "퟿"]], !1, !1), so = W([["豈", "﷏"]], !1, !1), co = W([["ﷰ", "�"]], !1, !1), lo = U("_", !1), uo = W(["·"], !1, !1), fo = W([["̀", "ͯ"]], !1, !1), po = W([["‿", "⁀"]], !1, !1), mo = U("%", !1), ho = W([["A", "F"]], !1, !1), go = W([["a", "f"]], !1, !1), _o = U("~", !1), vo = U("&", !1), yo = function(e, t) {
		let n = {};
		n = e.length ? {
			headers: e,
			...t
		} : t;
		let r = Object.entries(Ep).map(([e, t]) => ({
			pos: parseInt(e),
			text: t
		}));
		return r.length && (n.comments = r), {
			"@context": "https://purl.org/sparql-formatter/context.jsonld",
			...n
		};
	}, bo = function(e, t, n) {
		let r = { type: "Query" };
		return e && (r.prologue = e), t.type === "SelectQuery" ? r.selectQuery = t : t.type === "ConstructQuery" ? r.constructQuery = t : t.type === "DescribeQuery" ? r.describeQuery = t : t.type === "AskQuery" && (r.askQuery = t), n && (r.values = n), r;
	}, xo = function(e) {
		if (e.length) return {
			type: "Prologue",
			decl: e
		};
	}, So = function(e) {
		return {
			type: "BaseDecl",
			iriref: e
		};
	}, Co = function(e, t) {
		return {
			type: "PrefixDecl",
			pn_prefix: e,
			iriref: t
		};
	}, wo = function(e, t, n, r) {
		return t.length && (e.from = t), e = {
			type: "SelectQuery",
			selectClause: e,
			whereClause: n,
			...r
		}, e;
	}, To = function(e, t, n, r) {
		let i = {
			type: "SubSelect",
			selectClause: e,
			whereClause: t,
			...n,
			location: H()
		};
		return r && (i.values = r), i;
	}, Eo = function(e, t) {
		let n;
		n = t === "*" ? ["*"] : t.map((e) => e.length === 2 ? e[1] : {
			expression: e[3],
			as: e[7]
		});
		let r = { var: n };
		if (e) {
			let t = e.toUpperCase();
			t === "DISTINCT" ? r.distinct = !0 : t === "REDUCED" && (r.reduced = !0);
		}
		return r.location = H(), r;
	}, Do = function(e, t, n, r) {
		let i = { type: "ConstructQuery" };
		return t.length && (i.from = t), i = {
			...i,
			template: e,
			where: n,
			...r,
			location: H()
		}, i;
	}, Oo = function(e, t, n) {
		let r = { type: "ConstructQuery" };
		return e.length && (r.from = e), r = {
			...r,
			where: [t],
			...n,
			location: H()
		}, r;
	}, ko = function(e, t, n, r) {
		let i = { type: "DescribeQuery" };
		return t.length && (i.from = t), i.describe = e, n && (i.where = n), i = {
			...i,
			...r,
			location: H()
		}, i;
	}, Ao = function(e, t, n) {
		let r = { type: "AskQuery" };
		return e.length && (r.from = e), r = {
			...r,
			where: t,
			...n,
			location: H()
		}, r;
	}, jo = function(e) {
		return e;
	}, Mo = function(e) {
		return {
			graph: e,
			location: H()
		};
	}, No = function(e) {
		return {
			namedGraph: e,
			location: H()
		};
	}, Po = function(e) {
		return e.graphPattern || e;
	}, Fo = function(e, t, n, r) {
		let i = {};
		return e && (i.group = e), t && (i.having = t), n && (i.orderBy = n), r && (i.limitOffset = r), i;
	}, Io = function(e) {
		return e;
	}, Lo = function(e) {
		return e;
	}, Ro = function(e) {
		return e;
	}, zo = function(e, t) {
		return t ? {
			expressionType: "aliasedexpression",
			bracketted: !0,
			expression: e,
			as: t[2],
			location: H()
		} : {
			bracketted: !0,
			...e
		};
	}, Bo = function(e) {
		return e;
	}, Vo = function(e) {
		return e;
	}, Ho = function(e) {
		return e;
	}, Uo = function(e) {
		return e;
	}, Wo = function(e, t) {
		let n = {};
		return e.toUpperCase() === "ASC" ? n = {
			asc: !0,
			...t
		} : e.toUpperCase() === "DESC" && (n = {
			desc: !0,
			...t
		}), n;
	}, Go = function(e) {
		return e;
	}, Ko = function(e) {
		let t = [e[0]];
		return e[1] && t.push(e[1]), t;
	}, qo = function(e) {
		return { limit: parseInt(e.literal) };
	}, Jo = function(e) {
		return { offset: parseInt(e.literal) };
	}, Yo = function(e) {
		return e ? e[1] : null;
	}, Xo = function(e, t) {
		let n = { type: "Update" };
		e && (n.prologue = e);
		let r = [];
		return t && (r = [t[1]], t[2] && (r = r.concat(t[2][3].update))), n.update = r, n;
	}, Zo = function(e, t, n) {
		let r = {
			type: "load",
			silent: e,
			sourceGraph: t
		};
		return n && (r.destinyGraph = n[2]), r;
	}, Qo = function(e, t) {
		return {
			type: "clear",
			silent: e,
			destinyGraph: t
		};
	}, $o = function(e, t) {
		return {
			type: "drop",
			silent: e,
			destinyGraph: t
		};
	}, es = function(e, t) {
		return {
			type: "create",
			silent: e,
			destinyGraph: t
		};
	}, ts = function(e, t, n) {
		return {
			type: "add",
			silent: e,
			graphs: [t, n]
		};
	}, ns = function(e, t, n) {
		return {
			type: "move",
			silent: e,
			graphs: [t, n]
		};
	}, rs = function(e, t, n) {
		return {
			type: "copy",
			silent: e,
			graphs: [t, n]
		};
	}, is = function(e) {
		return {
			type: "insertdata",
			insert: e
		};
	}, as = function(e) {
		return {
			type: "deletedata",
			delete: e
		};
	}, os = function(e) {
		return {
			type: "deletewhere",
			delete: e
		};
	}, ss = function(e, t, n, r) {
		let i = { type: "modify" };
		return e && (i.with = e[2]), t.length === 3 ? (i.delete = t[0], t[2] && (i.insert = t[2])) : i.insert = t, n.length && (i.using = n), i.where = r.graphPattern, i;
	}, cs = function(e) {
		return e;
	}, ls = function(e) {
		return e;
	}, us = function(e) {
		return e.length === 3 ? {
			named: !0,
			iri: e[2]
		} : { iri: e };
	}, ds = function() {
		return "default";
	}, fs = function(e) {
		return e;
	}, ps = function(e) {
		return e;
	}, ms = function(e) {
		return e;
	}, hs = function() {
		return "default";
	}, gs = function() {
		return "named";
	}, _s = function() {
		return "all";
	}, vs = function(e) {
		return e;
	}, ys = function(e) {
		return e;
	}, bs = function(e, t) {
		let n = [];
		return e && (n = n.concat(e)), t.forEach((e) => {
			n = n.concat(e[0]), e[2] && (n = n.concat(e[2]));
		}), n;
	}, xs = function(e, t) {
		return {
			graph: e,
			...t
		};
	}, Ss = function(e, t) {
		let n = [e];
		return t && t[3] && (n = n.concat(t[3].triplePattern)), {
			triplePattern: n,
			location: H()
		};
	}, Cs = function(e) {
		return e;
	}, ws = function(e, t) {
		let n = [];
		return e && n.push(e), t.forEach((e) => {
			n.push(e[0]), e[4] && n.push(e[4]);
		}), {
			graphPattern: n,
			location: H()
		};
	}, Ts = function(e, t) {
		let n = [];
		if (t && t[3]) {
			if (Dp(e.subject, t[3].triplePattern[0].subject)) {
				n = JSON.parse(JSON.stringify(t[3].triplePattern));
				let r = e.properties.length - 1;
				if (Dp(e.properties[r].predicate, t[3].triplePattern[0].properties[0].predicate)) {
					n[0].properties = e.properties;
					let i = n[0].properties[r].objects.length - 1;
					t[3].triplePattern[0].properties[0].objects.forEach((t) => {
						Dp(e.properties[r].objects[i], t) || n[0].properties[r].objects.push(t);
					}), n[0].properties.push(...t[3].triplePattern[0].properties.slice(1));
				} else n[0].properties = e.properties.concat(t[3].triplePattern[0].properties);
			} else n = [e].concat(t[3].triplePattern);
		} else n = [e];
		return {
			type: "TriplesBlock",
			triplePattern: n,
			location: H()
		};
	}, Es = function(e) {
		return {
			type: "OptionalGraphPattern",
			optional: e.graphPattern || e,
			location: H()
		};
	}, Ds = function(e, t) {
		return {
			type: "GraphGraphPattern",
			graph: e,
			...t
		};
	}, Os = function(e, t, n) {
		let r = {
			type: "ServiceGraphPattern",
			service: t,
			pattern: n.graphPattern || n
		};
		return e && (r.silent = !0), r.location = H(), r;
	}, ks = function(e, t) {
		return {
			type: "Bind",
			bind: e,
			as: t,
			location: H()
		};
	}, As = function(e) {
		return e;
	}, js = function(e, t) {
		return {
			oneVar: e,
			data: t,
			location: H()
		};
	}, Ms = function(e, t) {
		return {
			variables: e,
			data: t,
			location: H()
		};
	}, Ns = function(e) {
		return e;
	}, Ps = function(e) {
		return e;
	}, Fs = function(e) {
		return {
			type: "MinusGraphPattern",
			minus: e.graphPattern || e,
			location: H()
		};
	}, Is = function(e, t) {
		return t.length ? {
			union: [e, ...t],
			location: H()
		} : e;
	}, Ls = function(e) {
		return {
			type: "Filter",
			filter: e,
			location: H()
		};
	}, Rs = function(e, t) {
		return {
			functionRef: e,
			args: t.list,
			location: H()
		};
	}, zs = function() {
		return { list: [] };
	}, Bs = function(e, t, n) {
		return {
			distinct: !!e,
			list: [t, ...n]
		};
	}, Vs = function() {
		return [];
	}, Hs = function(e, t) {
		return [e, ...t];
	}, Us = function(e) {
		return e;
	}, Ws = function(e, t) {
		let n = [e];
		return t && t[3] && (n = n.concat(t[3].triplePattern)), {
			triplePattern: n,
			location: H()
		};
	}, Gs = function(e, t) {
		return {
			subject: e,
			properties: t
		};
	}, Ks = function(e, t) {
		return {
			subject: e,
			properties: t
		};
	}, qs = function(e, t, n) {
		let r = [];
		return r.push({
			predicate: e,
			objects: t
		}), n.forEach((e) => {
			e[3] && r.push({
				predicate: e[3][0],
				objects: e[3][2]
			});
		}), r;
	}, Js = function() {
		return {
			a: !0,
			location: H()
		};
	}, Ys = function(e, t) {
		return [e, ...t];
	}, Xs = function(e, t) {
		return {
			subject: e,
			properties: t
		};
	}, Zs = function(e, t) {
		return {
			subject: e,
			properties: t
		};
	}, Qs = function(e, t, n) {
		let r = [];
		return r.push({
			predicate: e,
			objects: t
		}), n.forEach((e) => {
			if (e[3]) {
				let t = r.length - 1, n = r[t].objects.length - 1;
				Dp(r[t].predicate, e[3][0]) ? e[3][2].forEach((e) => {
					Dp(r[t].objects[n], e) || r[t].objects.push(e);
				}) : r.push({
					predicate: e[3][0],
					objects: e[3][2]
				});
			}
		}), r;
	}, $s = function(e, t) {
		return [e, ...t];
	}, ec = function(e, t) {
		if (t.length) {
			let n = [e];
			for (let e = 0; e < t.length; e++) n.push(t[e][3]);
			return {
				alternative: n,
				location: H()
			};
		}
		return e;
	}, tc = function(e, t) {
		if (t.length) {
			let n = [e];
			for (let e = 0; e < t.length; e++) n.push(t[e][3]);
			return {
				sequence: n,
				location: H()
			};
		}
		return e;
	}, nc = function(e, t) {
		return t && (e.modifier = t), e;
	}, rc = function(e) {
		return e.inverse = !0, e;
	}, ic = function() {
		return {
			a: !0,
			location: H()
		};
	}, ac = function(e) {
		return {
			bracketted: !0,
			...e
		};
	}, oc = function(e) {
		return {
			collection: e,
			location: H()
		};
	}, sc = function(e) {
		return {
			blankNodeProperties: e,
			location: H()
		};
	}, cc = function(e) {
		return {
			collection: e,
			location: H()
		};
	}, lc = function(e) {
		return {
			blankNodeProperties: e,
			location: H()
		};
	}, uc = function(e) {
		return e;
	}, dc = function(e) {
		return e;
	}, fc = function(e) {
		return e;
	}, pc = function(e) {
		return e;
	}, mc = function(e) {
		return {
			...e,
			location: H()
		};
	}, hc = function(e, t) {
		return t.length ? {
			expressionType: "conditionalor",
			operands: [e, ...t]
		} : e;
	}, gc = function(e, t) {
		return t.length ? {
			expressionType: "conditionaland",
			operands: [e, ...t]
		} : e;
	}, _c = function(e, t) {
		if (t.length) {
			let n = e, r = t[0][1].toUpperCase(), i = t[0][3];
			return r === "NOT" && (r += " " + t[0][3].toUpperCase(), i = t[0][5]), {
				expressionType: "relationalexpression",
				operator: r,
				op1: n,
				op2: i
			};
		}
		return e;
	}, vc = function(e, t) {
		if (t.length === 0) return e;
		let n = [];
		return t.forEach((e) => {
			e.length == 4 && n.push({
				operator: e[1],
				expression: e[3]
			});
		}), {
			expressionType: "additiveexpression",
			op1: e,
			ops: n
		};
	}, yc = function(e, t) {
		return t.length ? {
			expressionType: "multiplicativeexpression",
			first: e,
			rest: t.map((e) => ({
				operator: e[1],
				expression: e[3]
			}))
		} : e;
	}, bc = function(e) {
		return {
			expressionType: "unaryexpression",
			unaryexpression: "!",
			expression: e
		};
	}, xc = function(e) {
		return {
			expressionType: "unaryexpression",
			unaryexpression: "+",
			expression: e
		};
	}, Sc = function(e) {
		return {
			expressionType: "unaryexpression",
			unaryexpression: "-",
			expression: e
		};
	}, Cc = function(e) {
		return {
			expressionType: "atomic",
			value: e
		};
	}, wc = function(e) {
		return {
			expressionType: "atomic",
			value: e
		};
	}, Tc = function(e) {
		return {
			expressionType: "atomic",
			value: e
		};
	}, Ec = function(e) {
		return {
			expressionType: "atomic",
			value: e
		};
	}, Dc = function(e) {
		return {
			bracketted: !0,
			...e
		};
	}, Oc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "str",
			args: [e]
		};
	}, kc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "lang",
			args: [e]
		};
	}, Ac = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "langMatches",
			args: [e, t]
		};
	}, jc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "datatype",
			args: [e]
		};
	}, Mc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "bound",
			args: [e]
		};
	}, Nc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "IRI",
			args: [e]
		};
	}, Pc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "URI",
			args: [e]
		};
	}, Fc = function(e) {
		let t = {
			expressionType: "builtincall",
			builtincall: "BNODE",
			args: null
		};
		return e.length === 5 && (t.args = [e[2]]), t;
	}, Ic = function() {
		return {
			expressionType: "builtincall",
			builtincall: "rand"
		};
	}, Lc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "abs",
			args: [e]
		};
	}, Rc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "ceil",
			args: [e]
		};
	}, zc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "floor",
			args: [e]
		};
	}, Bc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "round",
			args: [e]
		};
	}, Vc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "CONCAT",
			args: e
		};
	}, Hc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "STRLEN",
			args: [e]
		};
	}, Uc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "UCASE",
			args: [e]
		};
	}, Wc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "LCASE",
			args: [e]
		};
	}, Gc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "ENCODE_FOR_URI",
			args: [e]
		};
	}, Kc = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "CONTAINS",
			args: [e, t]
		};
	}, qc = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "STRBEFORE",
			args: [e, t]
		};
	}, Jc = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "STRSTARTS",
			args: [e, t]
		};
	}, Yc = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "STRENDS",
			args: [e, t]
		};
	}, Xc = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "STRAFTER",
			args: [e, t]
		};
	}, Zc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "year",
			args: [e]
		};
	}, Qc = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "month",
			args: [e]
		};
	}, $c = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "day",
			args: [e]
		};
	}, el = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "hours",
			args: [e]
		};
	}, tl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "minutes",
			args: [e]
		};
	}, nl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "seconds",
			args: [e]
		};
	}, rl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "timezone",
			args: [e]
		};
	}, il = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "tz",
			args: [e]
		};
	}, al = function() {
		return {
			expressionType: "builtincall",
			builtincall: "now"
		};
	}, ol = function() {
		return {
			expressionType: "builtincall",
			builtincall: "UUID"
		};
	}, sl = function() {
		return {
			expressionType: "builtincall",
			builtincall: "STRUUID"
		};
	}, cl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "MD5",
			args: [e]
		};
	}, ll = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "SHA1",
			args: [e]
		};
	}, ul = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "SHA256",
			args: [e]
		};
	}, dl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "SHA384",
			args: [e]
		};
	}, fl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "SHA512",
			args: [e]
		};
	}, pl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "COALESCE",
			args: e
		};
	}, ml = function(e, t, n) {
		return {
			expressionType: "builtincall",
			builtincall: "IF",
			args: [
				e,
				t,
				n
			]
		};
	}, hl = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "STRLANG",
			args: [e, t]
		};
	}, gl = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "STRDT",
			args: [e, t]
		};
	}, _l = function(e, t) {
		return {
			expressionType: "builtincall",
			builtincall: "sameTerm",
			args: [e, t]
		};
	}, vl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "isURI",
			args: [e]
		};
	}, yl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "isBlank",
			args: [e]
		};
	}, bl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "isLiteral",
			args: [e]
		};
	}, xl = function(e) {
		return {
			expressionType: "builtincall",
			builtincall: "isNumeric",
			args: [e]
		};
	}, Sl = function(e, t, n) {
		let r = {
			expressionType: "regex",
			text: e,
			pattern: t
		};
		return n && (r.flags = n[2]), r;
	}, Cl = function(e, t, n) {
		let r = [e, t];
		return n && r.push(n[2]), {
			expressionType: "builtincall",
			builtincall: "substr",
			args: r
		};
	}, wl = function(e, t, n, r) {
		let i = [
			e,
			t,
			n
		];
		return r && i.push(r[2]), {
			expressionType: "builtincall",
			builtincall: "replace",
			args: i
		};
	}, Tl = function(e) {
		return { exists: e.graphPattern || e };
	}, El = function(e) {
		return { notexists: e.graphPattern || e };
	}, Dl = function(e, t) {
		return {
			expressionType: "aggregate",
			aggregateType: "count",
			distinct: !!e,
			expression: t
		};
	}, Ol = function(e, t) {
		return {
			expressionType: "aggregate",
			aggregateType: "sum",
			distinct: !!e,
			expression: t
		};
	}, kl = function(e, t) {
		return {
			expressionType: "aggregate",
			aggregateType: "min",
			distinct: !!e,
			expression: t
		};
	}, Al = function(e, t) {
		return {
			expressionType: "aggregate",
			aggregateType: "max",
			distinct: !!e,
			expression: t
		};
	}, jl = function(e, t) {
		return {
			expressionType: "aggregate",
			aggregateType: "avg",
			distinct: !!e,
			expression: t
		};
	}, Ml = function(e, t) {
		return {
			expressionType: "aggregate",
			aggregateType: "sample",
			distinct: !!e,
			expression: t
		};
	}, Nl = function(e, t, n) {
		let r = null;
		return n?.length && (r = n[7]), {
			expressionType: "aggregate",
			aggregateType: "group_concat",
			expression: t,
			separator: r,
			distinct: !!e
		};
	}, Pl = function(e, t) {
		let n = {
			expressionType: "irireforfunction",
			iriref: e
		};
		return t && (n.args = t.list), n;
	}, Fl = function(e, t) {
		return typeof t == "string" ? e.lang = t : t && (e.dataType = t[1]), e.location = H(), e;
	}, Il = function() {
		return {
			dataType: "http://www.w3.org/2001/XMLSchema#boolean",
			literal: !0
		};
	}, Ll = function() {
		return {
			dataType: "http://www.w3.org/2001/XMLSchema#boolean",
			literal: !1
		};
	}, Rl = function(e) {
		return {
			type: "IRIref",
			iriref: e,
			location: H()
		};
	}, zl = function(e) {
		return e;
	}, Bl = function(e) {
		return {
			type: "PrefixedName",
			pn_prefix: e.pn_prefix,
			pn_local: e.pn_local,
			location: H()
		};
	}, Vl = function(e) {
		return {
			type: "PrefixedName",
			pn_prefix: e,
			location: H()
		};
	}, Hl = function(e) {
		return {
			blankNode: e,
			location: H()
		};
	}, Ul = function() {
		return {
			blankNode: "[]",
			location: H()
		};
	}, Wl = function(e) {
		return e.join("");
	}, Gl = function(e) {
		return e || "";
	}, Kl = function(e, t) {
		return {
			pn_prefix: e,
			pn_local: t
		};
	}, ql = function() {
		return V();
	}, Jl = function(e) {
		return {
			type: "Var",
			varType: "VAR1",
			varname: e
		};
	}, Yl = function(e) {
		return {
			type: "Var",
			varType: "VAR2",
			varname: e
		};
	}, Xl = function(e, t) {
		let n = e.join("");
		return t.length && (n += "-" + t[0][1].join("")), n.toLowerCase();
	}, Zl = function() {
		return {
			dataType: "http://www.w3.org/2001/XMLSchema#integer",
			literal: V()
		};
	}, Ql = function() {
		return {
			dataType: "http://www.w3.org/2001/XMLSchema#decimal",
			literal: V()
		};
	}, $l = function() {
		return {
			dataType: "http://www.w3.org/2001/XMLSchema#double",
			literal: V()
		};
	}, eu = function() {
		return {
			dataType: "http://www.w3.org/2001/XMLSchema#double",
			literal: V()
		};
	}, tu = function() {
		return {
			dataType: "http://www.w3.org/2001/XMLSchema#double",
			literal: V()
		};
	}, nu = function(e) {
		return e.literal = "+" + e.literal, e;
	}, ru = function(e) {
		return e.literal = "+" + e.literal, e;
	}, iu = function(e) {
		return e.literal = "+" + e.literal, e;
	}, au = function(e) {
		return e.literal = "-" + e.literal, e;
	}, ou = function(e) {
		return e.literal = "-" + e.literal, e;
	}, su = function(e) {
		return e.literal = "-" + e.literal, e;
	}, cu = function(e) {
		return {
			quote: "'",
			literal: e.join("")
		};
	}, lu = function(e) {
		return {
			quote: "\"",
			literal: e.join("")
		};
	}, uu = function(e) {
		return {
			quote: "'''",
			literal: e.map((e) => e[0] ? e[0] + e[1] : e[1]).join("")
		};
	}, du = function(e) {
		return {
			quote: "\"\"\"",
			literal: e.map((e) => e[0] ? e[0] + e[1] : e[1]).join("")
		};
	}, fu = function() {
		return V();
	}, pu = function() {
		return V();
	}, mu = function() {
		return Ep[H().start.offset] = V(), "";
	}, hu = function() {
		return V();
	}, gu = function() {
		return V();
	}, _u = function() {
		return V();
	}, R = 0, z = 0, vu = [{
		line: 1,
		column: 1
	}], yu = 0, bu = [], B = 0, xu;
	if ("startRule" in t) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function V() {
		return e.substring(z, R);
	}
	function H() {
		return wu(z, R);
	}
	function U(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function W(e, t, n) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n
		};
	}
	function Su() {
		return { type: "end" };
	}
	function Cu(t) {
		var n = vu[t], r;
		if (n) return n;
		for (r = t - 1; !vu[r];) r--;
		for (n = vu[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return vu[t] = n, n;
	}
	function wu(e, t, n) {
		var i = Cu(e), a = Cu(t), o = {
			source: r,
			start: {
				offset: e,
				line: i.line,
				column: i.column
			},
			end: {
				offset: t,
				line: a.line,
				column: a.column
			}
		};
		return n && r && typeof r.offset == "function" && (o.start = r.offset(o.start), o.end = r.offset(o.end)), o;
	}
	function G(e) {
		R < yu || (R > yu && (yu = R, bu = []), bu.push(e));
	}
	function Tu(e, t, n) {
		return new Ke(Ke.buildMessage(e, t), e, t, n);
	}
	function Eu() {
		for (var e = R, t = [], r = mp(), i, a, o; r !== n;) t.push(r), r = mp();
		for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
		if (i = Du(), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			z = e, e = yo(t, i);
		} else R = e, e = n;
		return e;
	}
	function Du() {
		var e = Ou();
		return e === n && (e = $u()), e;
	}
	function Ou() {
		for (var e = R, t = ku(), r = [], i = Q(), a; i !== n;) r.push(i), i = Q();
		return i = Mu(), i === n && (i = Fu(), i === n && (i = Iu(), i === n && (i = Lu()))), i === n ? (R = e, e = n) : (a = Qu(), z = e, e = bo(t, i, a)), e;
	}
	function ku() {
		var e = R, t = [], r = Au();
		for (r === n && (r = ju()); r !== n;) t.push(r), r = Au(), r === n && (r = ju());
		return z = e, t = xo(t), e = t, e;
	}
	function Au() {
		for (var t = R, r = [], i = Q(), a, s; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 4).toLowerCase() === o ? (i = e.substr(R, 4), R += 4) : (i = n, B === 0 && G($n)), i !== n) {
			for (a = [], s = Q(); s !== n;) a.push(s), s = Q();
			s = Hf(), s === n ? (R = t, t = n) : (z = t, t = So(s));
		} else R = t, t = n;
		return t;
	}
	function ju() {
		for (var t = R, r = [], i = Q(), a, o, c, l; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 6).toLowerCase() === s ? (i = e.substr(R, 6), R += 6) : (i = n, B === 0 && G(er)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = Uf(), o !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = Hf(), l === n ? (R = t, t = n) : (z = t, t = Co(o, l));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Mu() {
		var e = R, t = Pu(), r, i, a, o, s, c;
		if (t !== n) {
			for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
			for (i = [], a = Ru(); a !== n;) i.push(a), a = Ru();
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = Vu(), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				c = Hu(), z = e, e = wo(t, i, o, c);
			} else R = e, e = n;
		} else R = e, e = n;
		return e;
	}
	function Nu() {
		var e = R, t = Pu(), r, i, a, o, s;
		if (t !== n) {
			for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
			if (i = Vu(), i !== n) {
				for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
				o = Hu(), s = Qu(), z = e, e = To(t, i, o, s);
			} else R = e, e = n;
		} else R = e, e = n;
		return e;
	}
	function Pu() {
		var t = R, r, i, a, o, s, h, g, _, v, y, b, x, S, C, ee, w;
		if (e.substr(R, 6).toLowerCase() === c ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(tr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 8).toLowerCase() === l ? (a = e.substr(R, 8), R += 8) : (a = n, B === 0 && G(nr)), a === n && (e.substr(R, 7).toLowerCase() === u ? (a = e.substr(R, 7), R += 7) : (a = n, B === 0 && G(rr))), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			for (s = [], h = R, g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
			if (_ = q(), _ === n ? (R = h, h = n) : (g = [g, _], h = g), h === n) {
				for (h = R, g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
				if (e.charCodeAt(R) === 40 ? (_ = d, R++) : (_ = n, B === 0 && G(N)), _ !== n) {
					for (v = [], y = Q(); y !== n;) v.push(y), y = Q();
					if (y = J(), y !== n) {
						for (b = [], x = Q(); x !== n;) b.push(x), x = Q();
						if (e.substr(R, 2).toLowerCase() === f ? (x = e.substr(R, 2), R += 2) : (x = n, B === 0 && G(ir)), x !== n) {
							for (S = [], C = Q(); C !== n;) S.push(C), C = Q();
							if (C = q(), C !== n) {
								for (ee = [], w = Q(); w !== n;) ee.push(w), w = Q();
								e.charCodeAt(R) === 41 ? (w = p, R++) : (w = n, B === 0 && G(P)), w === n ? (R = h, h = n) : (g = [
									g,
									_,
									v,
									y,
									b,
									x,
									S,
									C,
									ee,
									w
								], h = g);
							} else R = h, h = n;
						} else R = h, h = n;
					} else R = h, h = n;
				} else R = h, h = n;
			}
			if (h !== n) for (; h !== n;) {
				for (s.push(h), h = R, g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
				if (_ = q(), _ === n ? (R = h, h = n) : (g = [g, _], h = g), h === n) {
					for (h = R, g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
					if (e.charCodeAt(R) === 40 ? (_ = d, R++) : (_ = n, B === 0 && G(N)), _ !== n) {
						for (v = [], y = Q(); y !== n;) v.push(y), y = Q();
						if (y = J(), y !== n) {
							for (b = [], x = Q(); x !== n;) b.push(x), x = Q();
							if (e.substr(R, 2).toLowerCase() === f ? (x = e.substr(R, 2), R += 2) : (x = n, B === 0 && G(ir)), x !== n) {
								for (S = [], C = Q(); C !== n;) S.push(C), C = Q();
								if (C = q(), C !== n) {
									for (ee = [], w = Q(); w !== n;) ee.push(w), w = Q();
									e.charCodeAt(R) === 41 ? (w = p, R++) : (w = n, B === 0 && G(P)), w === n ? (R = h, h = n) : (g = [
										g,
										_,
										v,
										y,
										b,
										x,
										S,
										C,
										ee,
										w
									], h = g);
								} else R = h, h = n;
							} else R = h, h = n;
						} else R = h, h = n;
					} else R = h, h = n;
				}
			}
			else s = n;
			s === n && (e.charCodeAt(R) === 42 ? (s = m, R++) : (s = n, B === 0 && G(ar))), s === n ? (R = t, t = n) : (z = t, t = Eo(a, s));
		} else R = t, t = n;
		return t;
	}
	function Fu() {
		var t = R, r, i, a, o, s, c, l, u, d, f, p, m, y;
		if (e.substr(R, 9).toLowerCase() === h ? (r = e.substr(R, 9), R += 9) : (r = n, B === 0 && G(or)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = Ud(), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				for (s = [], c = Ru(); c !== n;) s.push(c), c = Ru();
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (l = Vu(), l !== n) {
					for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
					d = Hu(), z = t, t = Do(a, s, l, d);
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		if (t === n) {
			if (t = R, e.substr(R, 9).toLowerCase() === h ? (r = e.substr(R, 9), R += 9) : (r = n, B === 0 && G(or)), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				for (a = [], o = Ru(); o !== n;) a.push(o), o = Ru();
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.substr(R, 5).toLowerCase() === g ? (s = e.substr(R, 5), R += 5) : (s = n, B === 0 && G(sr)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					if (e.charCodeAt(R) === 123 ? (l = _, R++) : (l = n, B === 0 && G(cr)), l !== n) {
						for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
						for (d = Sd(), d === n && (d = null), f = [], p = Q(); p !== n;) f.push(p), p = Q();
						if (e.charCodeAt(R) === 125 ? (p = v, R++) : (p = n, B === 0 && G(lr)), p !== n) {
							for (m = [], y = Q(); y !== n;) m.push(y), y = Q();
							y = Hu(), z = t, t = Oo(a, d, y);
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
		}
		return t;
	}
	function Iu() {
		var t = R, r, i, a, o, s, c, l, u, d;
		if (e.substr(R, 8).toLowerCase() === y ? (r = e.substr(R, 8), R += 8) : (r = n, B === 0 && G(ur)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = [], o = vf(), o !== n) for (; o !== n;) a.push(o), o = vf();
			else a = n;
			if (a === n && (e.charCodeAt(R) === 42 ? (a = m, R++) : (a = n, B === 0 && G(ar))), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				for (s = [], c = Ru(); c !== n;) s.push(c), c = Ru();
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				for (l = Vu(), l === n && (l = null), u = [], d = Q(); d !== n;) u.push(d), d = Q();
				d = Hu(), z = t, t = ko(a, s, l, d);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Lu() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 3).toLowerCase() === b ? (i = e.substr(R, 3), R += 3) : (i = n, B === 0 && G(dr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			for (o = [], s = Ru(); s !== n;) o.push(s), s = Ru();
			for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
			if (c = Vu(), c !== n) {
				for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
				u = Hu(), z = t, t = Ao(o, c, u);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Ru() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 4).toLowerCase() === x ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(fr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = zu(), a === n && (a = Bu()), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				z = t, t = jo(a);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function zu() {
		for (var e = R, t = [], r = Q(); r !== n;) t.push(r), r = Q();
		return r = Z(), r === n ? (R = e, e = n) : (z = e, e = Mo(r)), e;
	}
	function Bu() {
		var t = R, r, i, a;
		if (e.substr(R, 5).toLowerCase() === S ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(pr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			a = Z(), a === n ? (R = t, t = n) : (z = t, t = No(a));
		} else R = t, t = n;
		return t;
	}
	function Vu() {
		var t = R, r, i, a;
		for (e.substr(R, 5).toLowerCase() === g ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(sr)), r === n && (r = null), i = [], a = Q(); a !== n;) i.push(a), a = Q();
		return a = K(), a === n ? (R = t, t = n) : (z = t, t = Po(a)), t;
	}
	function Hu() {
		var e = R, t = Uu(), r, i, a;
		return t === n && (t = null), r = Gu(), r === n && (r = null), i = qu(), i === n && (i = null), a = Yu(), a === n && (a = null), z = e, e = Fo(t, r, i, a), e;
	}
	function Uu() {
		var t = R, r, i, a, o, s, c;
		if (e.substr(R, 5).toLowerCase() === C ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(mr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.substr(R, 2).toLowerCase() === ee ? (a = e.substr(R, 2), R += 2) : (a = n, B === 0 && G(hr)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (s = [], c = Wu(), c !== n) for (; c !== n;) s.push(c), c = Wu();
				else s = n;
				s === n ? (R = t, t = n) : (z = t, t = Io(s));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Wu() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u, m, h; i !== n;) r.push(i), i = Q();
		if (i = Tf(), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			z = t, t = Lo(i);
		} else R = t, t = n;
		if (t === n) {
			for (t = R, r = [], i = Q(); i !== n;) r.push(i), i = Q();
			if (i = Bd(), i !== n) {
				for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
				z = t, t = Ro(i);
			} else R = t, t = n;
			if (t === n) {
				for (t = R, r = [], i = Q(); i !== n;) r.push(i), i = Q();
				if (e.charCodeAt(R) === 40 ? (i = d, R++) : (i = n, B === 0 && G(N)), i !== n) {
					for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
					if (o = J(), o !== n) {
						for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
						if (c = R, e.substr(R, 2).toLowerCase() === f ? (l = e.substr(R, 2), R += 2) : (l = n, B === 0 && G(ir)), l !== n) {
							for (u = [], m = Q(); m !== n;) u.push(m), m = Q();
							m = q(), m === n ? (R = c, c = n) : (l = [
								l,
								u,
								m
							], c = l);
						} else R = c, c = n;
						for (c === n && (c = null), l = [], u = Q(); u !== n;) l.push(u), u = Q();
						if (e.charCodeAt(R) === 41 ? (u = p, R++) : (u = n, B === 0 && G(P)), u !== n) {
							for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
							z = t, t = zo(o, c);
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
				if (t === n) {
					for (t = R, r = [], i = Q(); i !== n;) r.push(i), i = Q();
					if (i = q(), i !== n) {
						for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
						z = t, t = Bo(i);
					} else R = t, t = n;
				}
			}
		}
		return t;
	}
	function Gu() {
		var t = R, r, i, a, o;
		if (e.substr(R, 6).toLowerCase() === w ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(gr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = [], o = Ku(), o !== n) for (; o !== n;) a.push(o), o = Ku();
			else a = n;
			a === n ? (R = t, t = n) : (z = t, t = Vo(a));
		} else R = t, t = n;
		return t;
	}
	function Ku() {
		var e = R, t = zd(), r, i;
		if (t !== n) {
			for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
			z = e, e = Ho(t);
		} else R = e, e = n;
		return e;
	}
	function qu() {
		var t = R, r, i, a, o, s, c, l;
		if (e.substr(R, 5).toLowerCase() === te ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(_r)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.substr(R, 2).toLowerCase() === ee ? (a = e.substr(R, 2), R += 2) : (a = n, B === 0 && G(hr)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (s = [], c = Ju(), c !== n) for (; c !== n;) s.push(c), c = Ju();
				else s = n;
				if (s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					z = t, t = Uo(s);
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Ju() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 3).toLowerCase() === ne ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(vr)), r === n && (e.substr(R, 4).toLowerCase() === re ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(yr))), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = wf(), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				z = t, t = Wo(r, a);
			} else R = t, t = n;
		} else R = t, t = n;
		if (t === n) {
			if (t = R, r = zd(), r === n && (r = q()), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				z = t, t = Go(r);
			} else R = t, t = n;
		}
		return t;
	}
	function Yu() {
		var e = R, t = R, r = Xu(), i;
		return r === n ? (R = t, t = n) : (i = Zu(), i === n && (i = null), r = [r, i], t = r), t === n && (t = R, r = Zu(), r === n ? (R = t, t = n) : (i = Xu(), i === n && (i = null), r = [r, i], t = r)), t !== n && (z = e, t = Ko(t)), e = t, e;
	}
	function Xu() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 5).toLowerCase() === ie ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(br)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = Yf(), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				z = t, t = qo(a);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Zu() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 6).toLowerCase() === ae ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(xr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = Yf(), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				z = t, t = Jo(a);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Qu() {
		var t = R, r = R, i, a;
		return e.substr(R, 6).toLowerCase() === oe ? (i = e.substr(R, 6), R += 6) : (i = n, B === 0 && G(Sr)), i === n ? (R = r, r = n) : (a = jd(), a === n ? (R = r, r = n) : (i = [i, a], r = i)), r === n && (r = null), z = t, r = Yo(r), t = r, t;
	}
	function $u() {
		for (var t = R, r = ku(), i = R, a = [], o = Q(), s, c, l, u, d; o !== n;) a.push(o), o = Q();
		if (o = ed(), o !== n) {
			for (s = R, c = [], l = Q(); l !== n;) c.push(l), l = Q();
			if (e.charCodeAt(R) === 59 ? (l = se, R++) : (l = n, B === 0 && G(Cr)), l !== n) {
				for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
				d = $u(), c = [
					c,
					l,
					u,
					d
				], s = c;
			} else R = s, s = n;
			s === n && (s = null), a = [
				a,
				o,
				s
			], i = a;
		} else R = i, i = n;
		for (i === n && (i = null), a = [], o = Q(); o !== n;) a.push(o), o = Q();
		return z = t, t = Xo(r, i), t;
	}
	function ed() {
		var e = td();
		return e === n && (e = nd(), e === n && (e = rd(), e === n && (e = ad(), e === n && (e = od(), e === n && (e = sd(), e === n && (e = id(), e === n && (e = cd(), e === n && (e = ld(), e === n && (e = ud(), e === n && (e = dd())))))))))), e;
	}
	function td() {
		var t = R, r, i, a, o, s, c, l, u, d, f;
		if (e.substr(R, 4).toLowerCase() === ce ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(wr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (s = Z(), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (l = R, e.substr(R, 4).toLowerCase() === ue ? (u = e.substr(R, 4), R += 4) : (u = n, B === 0 && G(Er)), u !== n) {
					for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
					f = gd(), f === n ? (R = l, l = n) : (u = [
						u,
						d,
						f
					], l = u);
				} else R = l, l = n;
				l === n && (l = null), z = t, t = Zo(a, s, l);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function nd() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 5).toLowerCase() === de ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Dr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			s = _d(), s === n ? (R = t, t = n) : (z = t, t = Qo(a, s));
		} else R = t, t = n;
		return t;
	}
	function rd() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 4).toLowerCase() === fe ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Or)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			s = _d(), s === n ? (R = t, t = n) : (z = t, t = $o(a, s));
		} else R = t, t = n;
		return t;
	}
	function id() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 6).toLowerCase() === pe ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(kr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			s = gd(), s === n ? (R = t, t = n) : (z = t, t = es(a, s));
		} else R = t, t = n;
		return t;
	}
	function ad() {
		var t = R, r, i, a, o, s, c, l, u, d;
		if (e.substr(R, 3).toLowerCase() === me ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(Ar)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (s = hd(), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (e.substr(R, 2).toLowerCase() === he ? (l = e.substr(R, 2), R += 2) : (l = n, B === 0 && G(jr)), l !== n) {
					for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
					d = hd(), d === n ? (R = t, t = n) : (z = t, t = ts(a, s, d));
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function od() {
		var t = R, r, i, a, o, s, c, l, u, d;
		if (e.substr(R, 4).toLowerCase() === ge ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Mr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (s = hd(), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (e.substr(R, 2).toLowerCase() === he ? (l = e.substr(R, 2), R += 2) : (l = n, B === 0 && G(jr)), l !== n) {
					for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
					d = hd(), d === n ? (R = t, t = n) : (z = t, t = ns(a, s, d));
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function sd() {
		var t = R, r, i, a, o, s, c, l, u, d;
		if (e.substr(R, 4).toLowerCase() === _e ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Nr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (s = hd(), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (e.substr(R, 2).toLowerCase() === he ? (l = e.substr(R, 2), R += 2) : (l = n, B === 0 && G(jr)), l !== n) {
					for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
					d = hd(), d === n ? (R = t, t = n) : (z = t, t = rs(a, s, d));
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function cd() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 6).toLowerCase() === ve ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Pr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.substr(R, 4).toLowerCase() === ye ? (a = e.substr(R, 4), R += 4) : (a = n, B === 0 && G(Fr)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				s = yd(), s === n ? (R = t, t = n) : (z = t, t = is(s));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function ld() {
		var t = R, r, i, a, o;
		if (e.substr(R, 6).toLowerCase() === be ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Ir)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			e.substr(R, 4).toLowerCase() === ye ? (a = e.substr(R, 4), R += 4) : (a = n, B === 0 && G(Fr)), a === n ? (R = t, t = n) : (o = yd(), o === n ? (R = t, t = n) : (z = t, t = as(o)));
		} else R = t, t = n;
		return t;
	}
	function ud() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 6).toLowerCase() === be ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Ir)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.substr(R, 5).toLowerCase() === g ? (a = e.substr(R, 5), R += 5) : (a = n, B === 0 && G(sr)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				s = vd(), s === n ? (R = t, t = n) : (z = t, t = os(s));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function dd() {
		var t = R, r = R, i, a, o, s, c, l, u, d, f;
		if (e.substr(R, 4).toLowerCase() === xe ? (i = e.substr(R, 4), R += 4) : (i = n, B === 0 && G(Lr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = Z(), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				i = [
					i,
					a,
					o,
					s
				], r = i;
			} else R = r, r = n;
		} else R = r, r = n;
		if (r === n && (r = null), i = R, a = fd(), a !== n) {
			for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
			s = pd(), s === n && (s = null), a = [
				a,
				o,
				s
			], i = a;
		} else R = i, i = n;
		if (i === n && (i = pd()), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			for (o = [], s = md(); s !== n;) o.push(s), s = md();
			for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
			if (e.substr(R, 5).toLowerCase() === g ? (c = e.substr(R, 5), R += 5) : (c = n, B === 0 && G(sr)), c !== n) {
				for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
				if (u = K(), u !== n) {
					for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
					z = t, t = ss(r, i, o, u);
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function fd() {
		var t = R, r, i;
		return e.substr(R, 6).toLowerCase() === be ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Ir)), r === n ? (R = t, t = n) : (i = vd(), i === n ? (R = t, t = n) : (z = t, t = cs(i))), t;
	}
	function pd() {
		var t = R, r, i;
		return e.substr(R, 6).toLowerCase() === ve ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Pr)), r === n ? (R = t, t = n) : (i = vd(), i === n ? (R = t, t = n) : (z = t, t = ls(i))), t;
	}
	function md() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 5).toLowerCase() === Se ? (i = e.substr(R, 5), R += 5) : (i = n, B === 0 && G(Rr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = Z(), o === n) {
				if (o = R, e.substr(R, 5).toLowerCase() === S ? (s = e.substr(R, 5), R += 5) : (s = n, B === 0 && G(pr)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = Z(), l === n ? (R = o, o = n) : (s = [
						s,
						c,
						l
					], o = s);
				} else R = o, o = n;
			}
			o === n ? (R = t, t = n) : (z = t, t = us(o));
		} else R = t, t = n;
		return t;
	}
	function hd() {
		var t = R, r, i, a;
		if (e.substr(R, 7).toLowerCase() === Ce ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(zr)), r !== n && (z = t, r = ds()), t = r, t === n) {
			for (t = R, e.substr(R, 5).toLowerCase() === we ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Br)), r === n && (r = null), i = [], a = Q(); a !== n;) i.push(a), a = Q();
			a = Z(), a === n ? (R = t, t = n) : (z = t, t = fs(a));
		}
		return t;
	}
	function gd() {
		var t = R, r, i, a;
		if (e.substr(R, 5).toLowerCase() === we ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Br)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			a = Z(), a === n ? (R = t, t = n) : (z = t, t = ps(a));
		} else R = t, t = n;
		return t;
	}
	function _d() {
		var t = R, r = gd();
		return r !== n && (z = t, r = ms(r)), t = r, t === n && (t = R, e.substr(R, 7).toLowerCase() === Ce ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(zr)), r !== n && (z = t, r = hs()), t = r, t === n && (t = R, e.substr(R, 5).toLowerCase() === S ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(pr)), r !== n && (z = t, r = gs()), t = r, t === n && (t = R, e.substr(R, 3).toLowerCase() === Te ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(Vr)), r !== n && (z = t, r = _s()), t = r))), t;
	}
	function vd() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u; i !== n;) r.push(i), i = Q();
		if (e.charCodeAt(R) === 123 ? (i = _, R++) : (i = n, B === 0 && G(cr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			for (o = bd(), s = [], c = Q(); c !== n;) s.push(c), c = Q();
			if (e.charCodeAt(R) === 125 ? (c = v, R++) : (c = n, B === 0 && G(lr)), c !== n) {
				for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
				z = t, t = vs(o);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function yd() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u; i !== n;) r.push(i), i = Q();
		if (e.charCodeAt(R) === 123 ? (i = _, R++) : (i = n, B === 0 && G(cr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			for (o = bd(), s = [], c = Q(); c !== n;) s.push(c), c = Q();
			if (e.charCodeAt(R) === 125 ? (c = v, R++) : (c = n, B === 0 && G(lr)), c !== n) {
				for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
				z = t, t = ys(o);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function bd() {
		var t = R, r = Sd(), i, a, o, s, c;
		for (r === n && (r = null), i = [], a = R, o = xd(), o === n ? (R = a, a = n) : (e.charCodeAt(R) === 46 ? (s = T, R++) : (s = n, B === 0 && G(F)), s === n && (s = null), c = Sd(), c === n && (c = null), o = [
			o,
			s,
			c
		], a = o); a !== n;) i.push(a), a = R, o = xd(), o === n ? (R = a, a = n) : (e.charCodeAt(R) === 46 ? (s = T, R++) : (s = n, B === 0 && G(F)), s === n && (s = null), c = Sd(), c === n && (c = null), o = [
			o,
			s,
			c
		], a = o);
		return z = t, t = bs(r, i), t;
	}
	function xd() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u, d, f, p, m; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 5).toLowerCase() === we ? (i = e.substr(R, 5), R += 5) : (i = n, B === 0 && G(Br)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = vf(), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				if (e.charCodeAt(R) === 123 ? (c = _, R++) : (c = n, B === 0 && G(cr)), c !== n) {
					for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
					for (u = Sd(), u === n && (u = null), d = [], f = Q(); f !== n;) d.push(f), f = Q();
					if (e.charCodeAt(R) === 125 ? (f = v, R++) : (f = n, B === 0 && G(lr)), f !== n) {
						for (p = [], m = Q(); m !== n;) p.push(m), m = Q();
						z = t, t = xs(o, u);
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Sd() {
		var t = R, r = Gd(), i, a, o, s, c;
		if (r !== n) {
			for (i = R, a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (e.charCodeAt(R) === 46 ? (o = T, R++) : (o = n, B === 0 && G(F)), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				c = Sd(), c === n && (c = null), a = [
					a,
					o,
					s,
					c
				], i = a;
			} else R = i, i = n;
			i === n && (i = null), z = t, t = Ss(r, i);
		} else R = t, t = n;
		return t;
	}
	function K() {
		var t = R, r, i, a, o, s;
		if (e.charCodeAt(R) === 123 ? (r = _, R++) : (r = n, B === 0 && G(cr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = Nu(), a === n && (a = Cd()), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				e.charCodeAt(R) === 125 ? (s = v, R++) : (s = n, B === 0 && G(lr)), s === n ? (R = t, t = n) : (z = t, t = Cs(a));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Cd() {
		var t = R, r = wd(), i, a, o, s, c, l, u, d;
		for (r === n && (r = null), i = [], a = Q(); a !== n;) i.push(a), a = Q();
		if (a = [], o = R, s = Td(), s !== n) {
			for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
			for (e.charCodeAt(R) === 46 ? (l = T, R++) : (l = n, B === 0 && G(F)), l === n && (l = null), u = [], d = Q(); d !== n;) u.push(d), d = Q();
			d = wd(), d === n && (d = null), s = [
				s,
				c,
				l,
				u,
				d
			], o = s;
		} else R = o, o = n;
		for (; o !== n;) if (a.push(o), o = R, s = Td(), s !== n) {
			for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
			for (e.charCodeAt(R) === 46 ? (l = T, R++) : (l = n, B === 0 && G(F)), l === n && (l = null), u = [], d = Q(); d !== n;) u.push(d), d = Q();
			d = wd(), d === n && (d = null), s = [
				s,
				c,
				l,
				u,
				d
			], o = s;
		} else R = o, o = n;
		return z = t, t = ws(r, a), t;
	}
	function wd() {
		var t = R, r = Xd(), i, a, o, s, c;
		if (r !== n) {
			for (i = R, a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (e.charCodeAt(R) === 46 ? (o = T, R++) : (o = n, B === 0 && G(F)), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				c = wd(), c === n && (c = null), a = [
					a,
					o,
					s,
					c
				], i = a;
			} else R = i, i = n;
			i === n && (i = null), z = t, t = Ts(r, i);
		} else R = t, t = n;
		return t;
	}
	function Td() {
		var e = Ld();
		return e === n && (e = Ed(), e === n && (e = Id(), e === n && (e = Dd(), e === n && (e = Od(), e === n && (e = Rd(), e === n && (e = kd(), e === n && (e = Ad()))))))), e;
	}
	function Ed() {
		for (var t = R, r = [], i = Q(), a, o; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 8).toLowerCase() === Ee ? (i = e.substr(R, 8), R += 8) : (i = n, B === 0 && G(Hr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			o = K(), o === n ? (R = t, t = n) : (z = t, t = Es(o));
		} else R = t, t = n;
		return t;
	}
	function Dd() {
		for (var t = R, r = [], i = Q(), a, o, s, c; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 5).toLowerCase() === we ? (i = e.substr(R, 5), R += 5) : (i = n, B === 0 && G(Br)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = vf(), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				c = K(), c === n ? (R = t, t = n) : (z = t, t = Ds(o, c));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Od() {
		var t = R, r, i, a, o, s, c, l;
		if (e.substr(R, 7).toLowerCase() === De ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(Ur)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (e.substr(R, 6).toLowerCase() === le ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(Tr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (s = vf(), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = K(), l === n ? (R = t, t = n) : (z = t, t = Os(a, s, l));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function kd() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u, m, h, g, _; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 4).toLowerCase() === Oe ? (i = e.substr(R, 4), R += 4) : (i = n, B === 0 && G(Wr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (e.charCodeAt(R) === 40 ? (o = d, R++) : (o = n, B === 0 && G(N)), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				if (c = J(), c !== n) {
					for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
					if (e.substr(R, 2).toLowerCase() === f ? (u = e.substr(R, 2), R += 2) : (u = n, B === 0 && G(ir)), u !== n) {
						for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
						if (h = q(), h !== n) {
							for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
							e.charCodeAt(R) === 41 ? (_ = p, R++) : (_ = n, B === 0 && G(P)), _ === n ? (R = t, t = n) : (z = t, t = ks(c, h));
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Ad() {
		for (var t = R, r = [], i = Q(), a, o; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 6).toLowerCase() === oe ? (i = e.substr(R, 6), R += 6) : (i = n, B === 0 && G(Sr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			o = jd(), o === n ? (R = t, t = n) : (z = t, t = As(o));
		} else R = t, t = n;
		return t;
	}
	function jd() {
		var e = Md();
		return e === n && (e = Nd()), e;
	}
	function Md() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l; i !== n;) r.push(i), i = Q();
		if (i = q(), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (e.charCodeAt(R) === 123 ? (o = _, R++) : (o = n, B === 0 && G(cr)), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				for (c = [], l = Fd(); l !== n;) c.push(l), l = Fd();
				e.charCodeAt(R) === 125 ? (l = v, R++) : (l = n, B === 0 && G(lr)), l === n ? (R = t, t = n) : (z = t, t = js(i, c));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Nd() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u, f, m; i !== n;) r.push(i), i = Q();
		if (e.charCodeAt(R) === 40 ? (i = d, R++) : (i = n, B === 0 && G(N)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			for (o = [], s = q(); s !== n;) o.push(s), s = q();
			if (e.charCodeAt(R) === 41 ? (s = p, R++) : (s = n, B === 0 && G(P)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (e.charCodeAt(R) === 123 ? (l = _, R++) : (l = n, B === 0 && G(cr)), l !== n) {
					for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
					for (f = [], m = Pd(); m !== n;) f.push(m), m = Pd();
					e.charCodeAt(R) === 125 ? (m = v, R++) : (m = n, B === 0 && G(lr)), m === n ? (R = t, t = n) : (z = t, t = Ms(o, f));
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Pd() {
		var t = R, r, i, a, o, s, c;
		if (e.charCodeAt(R) === 40 ? (r = d, R++) : (r = n, B === 0 && G(N)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (a = [], o = Fd(); o !== n;) a.push(o), o = Fd();
			if (e.charCodeAt(R) === 41 ? (o = p, R++) : (o = n, B === 0 && G(P)), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				z = t, t = Ns(a);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Fd() {
		var t = R, r = Z(), i, a;
		if (r === n && (r = Nf(), r === n && (r = Pf(), r === n && (r = Rf(), r === n && (e.substr(R, 5) === ke ? (r = ke, R += 5) : (r = n, B === 0 && G(Gr)))))), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			z = t, t = Ps(r);
		} else R = t, t = n;
		return t;
	}
	function Id() {
		var t = R, r, i, a;
		if (e.substr(R, 5).toLowerCase() === Ae ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Kr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			a = K(), a === n ? (R = t, t = n) : (z = t, t = Fs(a));
		} else R = t, t = n;
		return t;
	}
	function Ld() {
		var t = R, r = K(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.substr(R, 5).toLowerCase() === je ? (s = e.substr(R, 5), R += 5) : (s = n, B === 0 && G(qr)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = K(), l === n ? (R = a, a = n) : a = l;
			} else R = a, a = n;
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.substr(R, 5).toLowerCase() === je ? (s = e.substr(R, 5), R += 5) : (s = n, B === 0 && G(qr)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = K(), l === n ? (R = a, a = n) : a = l;
				} else R = a, a = n;
			}
			z = t, t = Is(r, i);
		} else R = t, t = n;
		return t;
	}
	function Rd() {
		for (var t = R, r = [], i = Q(), a, o; i !== n;) r.push(i), i = Q();
		if (e.substr(R, 6).toLowerCase() === Me ? (i = e.substr(R, 6), R += 6) : (i = n, B === 0 && G(Jr)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			o = zd(), o === n ? (R = t, t = n) : (z = t, t = Ls(o));
		} else R = t, t = n;
		return t;
	}
	function zd() {
		var e = wf();
		return e === n && (e = Tf(), e === n && (e = Bd())), e;
	}
	function Bd() {
		var e = R, t = Z(), r, i;
		if (t !== n) {
			for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
			i = Vd(), i === n ? (R = e, e = n) : (z = e, e = Rs(t, i));
		} else R = e, e = n;
		return e;
	}
	function Vd() {
		var t = R, r = up(), i, a, o, s, c, u, f, m, h, g;
		if (r !== n && (z = t, r = zs()), t = r, t === n) {
			if (t = R, e.charCodeAt(R) === 40 ? (r = d, R++) : (r = n, B === 0 && G(N)), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				for (e.substr(R, 8).toLowerCase() === l ? (a = e.substr(R, 8), R += 8) : (a = n, B === 0 && G(nr)), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (s = J(), s !== n) {
					for (c = [], u = Q(); u !== n;) c.push(u), u = Q();
					if (u = [], f = R, e.charCodeAt(R) === 44 ? (m = E, R++) : (m = n, B === 0 && G(I)), m !== n) {
						for (h = [], g = Q(); g !== n;) h.push(g), g = Q();
						g = J(), g === n ? (R = f, f = n) : f = g;
					} else R = f, f = n;
					for (; f !== n;) if (u.push(f), f = R, e.charCodeAt(R) === 44 ? (m = E, R++) : (m = n, B === 0 && G(I)), m !== n) {
						for (h = [], g = Q(); g !== n;) h.push(g), g = Q();
						g = J(), g === n ? (R = f, f = n) : f = g;
					} else R = f, f = n;
					e.charCodeAt(R) === 41 ? (f = p, R++) : (f = n, B === 0 && G(P)), f === n ? (R = t, t = n) : (z = t, t = Bs(a, s, u));
				} else R = t, t = n;
			} else R = t, t = n;
		}
		return t;
	}
	function Hd() {
		var t = R, r = up(), i, a, o, s, c, l, u, f, m, h;
		if (r !== n && (z = t, r = Vs()), t = r, t === n) {
			if (t = R, e.charCodeAt(R) === 40 ? (r = d, R++) : (r = n, B === 0 && G(N)), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				if (a = J(), a !== n) {
					for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
					if (s = [], c = R, e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
						for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
						if (f = J(), f !== n) {
							for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
							c = f;
						} else R = c, c = n;
					} else R = c, c = n;
					for (; c !== n;) if (s.push(c), c = R, e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
						for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
						if (f = J(), f !== n) {
							for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
							c = f;
						} else R = c, c = n;
					} else R = c, c = n;
					e.charCodeAt(R) === 41 ? (c = p, R++) : (c = n, B === 0 && G(P)), c === n ? (R = t, t = n) : (z = t, t = Hs(a, s));
				} else R = t, t = n;
			} else R = t, t = n;
		}
		return t;
	}
	function Ud() {
		var t = R, r, i, a, o, s;
		if (e.charCodeAt(R) === 123 ? (r = _, R++) : (r = n, B === 0 && G(cr)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			for (a = Wd(), a === n && (a = null), o = [], s = Q(); s !== n;) o.push(s), s = Q();
			e.charCodeAt(R) === 125 ? (s = v, R++) : (s = n, B === 0 && G(lr)), s === n ? (R = t, t = n) : (z = t, t = Us(a));
		} else R = t, t = n;
		return t;
	}
	function Wd() {
		var t = R, r = Gd(), i, a, o, s, c;
		if (r !== n) {
			for (i = R, a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (e.charCodeAt(R) === 46 ? (o = T, R++) : (o = n, B === 0 && G(F)), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				c = Wd(), c === n && (c = null), a = [
					a,
					o,
					s,
					c
				], i = a;
			} else R = i, i = n;
			i === n && (i = null), z = t, t = Ws(r, i);
		} else R = t, t = n;
		return t;
	}
	function Gd() {
		var e = R, t = _f(), r, i, a;
		if (t !== n) {
			for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
			i = qd(), i === n ? (R = e, e = n) : (z = e, e = Gs(t, i));
		} else R = e, e = n;
		if (e === n) {
			for (e = R, t = [], r = Q(); r !== n;) t.push(r), r = Q();
			if (r = lf(), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				a = Kd(), z = e, e = Ks(r, a);
			} else R = e, e = n;
		}
		return e;
	}
	function Kd() {
		var e = qd();
		return e === n && (e = null), e;
	}
	function qd() {
		var t = R, r = Jd(), i, a, o, s, c, l, u, d, f, p, m;
		if (r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = Yd(), a !== n) {
				for (o = [], s = R, c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (e.charCodeAt(R) === 59 ? (l = se, R++) : (l = n, B === 0 && G(Cr)), l !== n) {
					for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
					if (d = R, f = Jd(), f !== n) {
						for (p = [], m = Q(); m !== n;) p.push(m), m = Q();
						m = Yd(), m === n ? (R = d, d = n) : (f = [
							f,
							p,
							m
						], d = f);
					} else R = d, d = n;
					d === n && (d = null), c = [
						c,
						l,
						u,
						d
					], s = c;
				} else R = s, s = n;
				for (; s !== n;) {
					for (o.push(s), s = R, c = [], l = Q(); l !== n;) c.push(l), l = Q();
					if (e.charCodeAt(R) === 59 ? (l = se, R++) : (l = n, B === 0 && G(Cr)), l !== n) {
						for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
						if (d = R, f = Jd(), f !== n) {
							for (p = [], m = Q(); m !== n;) p.push(m), m = Q();
							m = Yd(), m === n ? (R = d, d = n) : (f = [
								f,
								p,
								m
							], d = f);
						} else R = d, d = n;
						d === n && (d = null), c = [
							c,
							l,
							u,
							d
						], s = c;
					} else R = s, s = n;
				}
				z = t, t = qs(r, a, o);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Jd() {
		var t = vf(), r;
		return t === n && (t = R, e.charCodeAt(R) === 97 ? (r = Ne, R++) : (r = n, B === 0 && G(Yr)), r !== n && (z = t, r = Js()), t = r), t;
	}
	function Yd() {
		var t = R, r = hf(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.charCodeAt(R) === 44 ? (s = E, R++) : (s = n, B === 0 && G(I)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = hf(), l === n ? (R = a, a = n) : a = l;
			} else R = a, a = n;
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 44 ? (s = E, R++) : (s = n, B === 0 && G(I)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = hf(), l === n ? (R = a, a = n) : a = l;
				} else R = a, a = n;
			}
			z = t, t = Ys(r, i);
		} else R = t, t = n;
		return t;
	}
	function Xd() {
		var e = R, t = _f(), r, i, a;
		if (t !== n) {
			for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
			i = Qd(), i === n ? (R = e, e = n) : (z = e, e = Xs(t, i));
		} else R = e, e = n;
		if (e === n) {
			for (e = R, t = [], r = Q(); r !== n;) t.push(r), r = Q();
			if (r = df(), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				a = Zd(), z = e, e = Zs(r, a);
			} else R = e, e = n;
		}
		return e;
	}
	function Zd() {
		var e = Qd();
		return e === n && (e = null), e;
	}
	function Qd() {
		var t = R, r = ef(), i, a, o, s, c, l, u, d, f, p, m;
		if (r === n && (r = q()), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = $d(), a !== n) {
				for (o = [], s = R, c = [], l = Q(); l !== n;) c.push(l), l = Q();
				if (e.charCodeAt(R) === 59 ? (l = se, R++) : (l = n, B === 0 && G(Cr)), l !== n) {
					for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
					if (d = R, f = ef(), f === n && (f = q()), f !== n) {
						for (p = [], m = Q(); m !== n;) p.push(m), m = Q();
						m = $d(), m === n ? (R = d, d = n) : (f = [
							f,
							p,
							m
						], d = f);
					} else R = d, d = n;
					d === n && (d = null), c = [
						c,
						l,
						u,
						d
					], s = c;
				} else R = s, s = n;
				for (; s !== n;) {
					for (o.push(s), s = R, c = [], l = Q(); l !== n;) c.push(l), l = Q();
					if (e.charCodeAt(R) === 59 ? (l = se, R++) : (l = n, B === 0 && G(Cr)), l !== n) {
						for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
						if (d = R, f = ef(), f === n && (f = q()), f !== n) {
							for (p = [], m = Q(); m !== n;) p.push(m), m = Q();
							m = $d(), m === n ? (R = d, d = n) : (f = [
								f,
								p,
								m
							], d = f);
						} else R = d, d = n;
						d === n && (d = null), c = [
							c,
							l,
							u,
							d
						], s = c;
					} else R = s, s = n;
				}
				z = t, t = Qs(r, a, o);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function $d() {
		var t = R, r = gf(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.charCodeAt(R) === 44 ? (s = E, R++) : (s = n, B === 0 && G(I)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = gf(), l === n ? (R = a, a = n) : a = l;
			} else R = a, a = n;
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 44 ? (s = E, R++) : (s = n, B === 0 && G(I)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = gf(), l === n ? (R = a, a = n) : a = l;
				} else R = a, a = n;
			}
			z = t, t = $s(r, i);
		} else R = t, t = n;
		return t;
	}
	function ef() {
		var t = R, r = tf(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.charCodeAt(R) === 124 ? (s = Pe, R++) : (s = n, B === 0 && G(Xr)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = tf(), l === n ? (R = a, a = n) : (o = [
					o,
					s,
					c,
					l
				], a = o);
			} else R = a, a = n;
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 124 ? (s = Pe, R++) : (s = n, B === 0 && G(Xr)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = tf(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
			}
			z = t, t = ec(r, i);
		} else R = t, t = n;
		return t;
	}
	function tf() {
		var t = R, r = rf(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.charCodeAt(R) === 47 ? (s = Fe, R++) : (s = n, B === 0 && G(Zr)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = rf(), l === n ? (R = a, a = n) : (o = [
					o,
					s,
					c,
					l
				], a = o);
			} else R = a, a = n;
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 47 ? (s = Fe, R++) : (s = n, B === 0 && G(Zr)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = rf(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
			}
			z = t, t = tc(r, i);
		} else R = t, t = n;
		return t;
	}
	function nf() {
		var e = R, t = of(), r;
		return t === n ? (R = e, e = n) : (r = af(), r === n && (r = null), z = e, e = nc(t, r)), e;
	}
	function rf() {
		var t = nf(), r, i;
		return t === n && (t = R, e.charCodeAt(R) === 94 ? (r = Ie, R++) : (r = n, B === 0 && G(Qr)), r === n ? (R = t, t = n) : (i = nf(), i === n ? (R = t, t = n) : (z = t, t = rc(i)))), t;
	}
	function af() {
		var t;
		return e.charCodeAt(R) === 63 ? (t = Le, R++) : (t = n, B === 0 && G($r)), t === n && (e.charCodeAt(R) === 42 ? (t = m, R++) : (t = n, B === 0 && G(ar)), t === n && (e.charCodeAt(R) === 43 ? (t = Re, R++) : (t = n, B === 0 && G(ei)))), t;
	}
	function of() {
		var t = Z(), r, i, a;
		return t === n && (t = R, e.charCodeAt(R) === 97 ? (r = Ne, R++) : (r = n, B === 0 && G(Yr)), r !== n && (z = t, r = ic()), t = r, t === n && (t = R, e.charCodeAt(R) === 33 ? (r = ze, R++) : (r = n, B === 0 && G(ti)), r === n ? (R = t, t = n) : (i = sf(), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t === n && (t = R, e.charCodeAt(R) === 40 ? (r = d, R++) : (r = n, B === 0 && G(N)), r === n ? (R = t, t = n) : (i = ef(), i === n ? (R = t, t = n) : (e.charCodeAt(R) === 41 ? (a = p, R++) : (a = n, B === 0 && G(P)), a === n ? (R = t, t = n) : (z = t, t = ac(i))))))), t;
	}
	function sf() {
		var t = cf(), r, i, a, o, s, c, l;
		if (t === n) {
			if (t = R, e.charCodeAt(R) === 40 ? (r = d, R++) : (r = n, B === 0 && G(N)), r !== n) {
				if (i = R, a = cf(), a !== n) {
					for (o = [], s = R, e.charCodeAt(R) === 124 ? (c = Pe, R++) : (c = n, B === 0 && G(Xr)), c === n ? (R = s, s = n) : (l = cf(), l === n ? (R = s, s = n) : (c = [c, l], s = c)); s !== n;) o.push(s), s = R, e.charCodeAt(R) === 124 ? (c = Pe, R++) : (c = n, B === 0 && G(Xr)), c === n ? (R = s, s = n) : (l = cf(), l === n ? (R = s, s = n) : (c = [c, l], s = c));
					a = [a, o], i = a;
				} else R = i, i = n;
				i === n && (i = null), e.charCodeAt(R) === 41 ? (a = p, R++) : (a = n, B === 0 && G(P)), a === n ? (R = t, t = n) : (r = [
					r,
					i,
					a
				], t = r);
			} else R = t, t = n;
		}
		return t;
	}
	function cf() {
		var t = Z(), r, i;
		return t === n && (e.charCodeAt(R) === 97 ? (t = Ne, R++) : (t = n, B === 0 && G(Yr)), t === n && (t = R, e.charCodeAt(R) === 94 ? (r = Ie, R++) : (r = n, B === 0 && G(Qr)), r === n ? (R = t, t = n) : (i = Z(), i === n && (e.charCodeAt(R) === 97 ? (i = Ne, R++) : (i = n, B === 0 && G(Yr))), i === n ? (R = t, t = n) : (r = [r, i], t = r)))), t;
	}
	function lf() {
		var e = R, t = pf();
		return t !== n && (z = e, t = oc(t)), e = t, e === n && (e = uf()), e;
	}
	function uf() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u; i !== n;) r.push(i), i = Q();
		if (e.charCodeAt(R) === 91 ? (i = Be, R++) : (i = n, B === 0 && G(ni)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = qd(), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				if (e.charCodeAt(R) === 93 ? (c = Ve, R++) : (c = n, B === 0 && G(ri)), c !== n) {
					for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
					z = t, t = sc(o);
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function df() {
		var e = R, t = mf();
		return t !== n && (z = e, t = cc(t)), e = t, e === n && (e = ff()), e;
	}
	function ff() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u; i !== n;) r.push(i), i = Q();
		if (e.charCodeAt(R) === 91 ? (i = Be, R++) : (i = n, B === 0 && G(ni)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = Qd(), o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				if (e.charCodeAt(R) === 93 ? (c = Ve, R++) : (c = n, B === 0 && G(ri)), c !== n) {
					for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
					z = t, t = lc(o);
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function pf() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u; i !== n;) r.push(i), i = Q();
		if (e.charCodeAt(R) === 40 ? (i = d, R++) : (i = n, B === 0 && G(N)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = [], s = hf(), s !== n) for (; s !== n;) o.push(s), s = hf();
			else o = n;
			if (o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				if (e.charCodeAt(R) === 41 ? (c = p, R++) : (c = n, B === 0 && G(P)), c !== n) {
					for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
					z = t, t = uc(o);
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function mf() {
		for (var t = R, r = [], i = Q(), a, o, s, c, l, u; i !== n;) r.push(i), i = Q();
		if (e.charCodeAt(R) === 40 ? (i = d, R++) : (i = n, B === 0 && G(N)), i !== n) {
			for (a = [], o = Q(); o !== n;) a.push(o), o = Q();
			if (o = [], s = gf(), s !== n) for (; s !== n;) o.push(s), s = gf();
			else o = n;
			if (o !== n) {
				for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
				if (e.charCodeAt(R) === 41 ? (c = p, R++) : (c = n, B === 0 && G(P)), c !== n) {
					for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
					z = t, t = dc(o);
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function hf() {
		for (var e = R, t = [], r = Q(); r !== n;) t.push(r), r = Q();
		return r = _f(), r === n && (r = lf()), r === n ? (R = e, e = n) : (z = e, e = fc(r)), e;
	}
	function gf() {
		for (var e = R, t = [], r = Q(); r !== n;) t.push(r), r = Q();
		return r = _f(), r === n && (r = df()), r === n ? (R = e, e = n) : (z = e, e = pc(r)), e;
	}
	function _f() {
		var e = q();
		return e === n && (e = yf()), e;
	}
	function vf() {
		var e = q();
		return e === n && (e = Z()), e;
	}
	function q() {
		for (var e = R, t = [], r = Q(), i, a; r !== n;) t.push(r), r = Q();
		if (r = Kf(), r === n && (r = qf()), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			z = e, e = mc(r);
		} else R = e, e = n;
		return e;
	}
	function yf() {
		var e = Z();
		return e === n && (e = Nf(), e === n && (e = Pf(), e === n && (e = Rf(), e === n && (e = Vf(), e === n && (e = up()))))), e;
	}
	function J() {
		var t = R, r = bf(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.substr(R, 2) === He ? (s = He, R += 2) : (s = n, B === 0 && G(ii)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = bf(), l === n ? (R = a, a = n) : a = l;
			} else R = a, a = n;
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.substr(R, 2) === He ? (s = He, R += 2) : (s = n, B === 0 && G(ii)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = bf(), l === n ? (R = a, a = n) : a = l;
				} else R = a, a = n;
			}
			z = t, t = hc(r, i);
		} else R = t, t = n;
		return t;
	}
	function bf() {
		var t = R, r = xf(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.substr(R, 2) === Ue ? (s = Ue, R += 2) : (s = n, B === 0 && G(ai)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = xf(), l === n ? (R = a, a = n) : a = l;
			} else R = a, a = n;
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.substr(R, 2) === Ue ? (s = Ue, R += 2) : (s = n, B === 0 && G(ai)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = xf(), l === n ? (R = a, a = n) : a = l;
				} else R = a, a = n;
			}
			z = t, t = gc(r, i);
		} else R = t, t = n;
		return t;
	}
	function xf() {
		var t = R, r = Y(), i, a, o, s, c, l, u, d;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.charCodeAt(R) === 61 ? (s = We, R++) : (s = n, B === 0 && G(oi)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = Y(), l === n ? (R = a, a = n) : (o = [
					o,
					s,
					c,
					l
				], a = o);
			} else R = a, a = n;
			if (a === n) {
				for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.substr(R, 2) === Ge ? (s = Ge, R += 2) : (s = n, B === 0 && G(si)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = Y(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
				if (a === n) {
					for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
					if (e.charCodeAt(R) === 60 ? (s = qe, R++) : (s = n, B === 0 && G(ci)), s !== n) {
						for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
						l = Y(), l === n ? (R = a, a = n) : (o = [
							o,
							s,
							c,
							l
						], a = o);
					} else R = a, a = n;
					if (a === n) {
						for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
						if (e.charCodeAt(R) === 62 ? (s = Je, R++) : (s = n, B === 0 && G(li)), s !== n) {
							for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
							l = Y(), l === n ? (R = a, a = n) : (o = [
								o,
								s,
								c,
								l
							], a = o);
						} else R = a, a = n;
						if (a === n) {
							for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
							if (e.substr(R, 2) === Ye ? (s = Ye, R += 2) : (s = n, B === 0 && G(ui)), s !== n) {
								for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
								l = Y(), l === n ? (R = a, a = n) : (o = [
									o,
									s,
									c,
									l
								], a = o);
							} else R = a, a = n;
							if (a === n) {
								for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
								if (e.substr(R, 2) === Xe ? (s = Xe, R += 2) : (s = n, B === 0 && G(di)), s !== n) {
									for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
									l = Y(), l === n ? (R = a, a = n) : (o = [
										o,
										s,
										c,
										l
									], a = o);
								} else R = a, a = n;
								if (a === n) {
									for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
									if (e.substr(R, 2).toLowerCase() === Ze ? (s = e.substr(R, 2), R += 2) : (s = n, B === 0 && G(fi)), s !== n) {
										for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
										l = Hd(), l === n ? (R = a, a = n) : (o = [
											o,
											s,
											c,
											l
										], a = o);
									} else R = a, a = n;
									if (a === n) {
										for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
										if (e.substr(R, 3).toLowerCase() === Qe ? (s = e.substr(R, 3), R += 3) : (s = n, B === 0 && G(pi)), s !== n) {
											for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
											if (e.substr(R, 2).toLowerCase() === Ze ? (l = e.substr(R, 2), R += 2) : (l = n, B === 0 && G(fi)), l !== n) {
												for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
												d = Hd(), d === n ? (R = a, a = n) : (o = [
													o,
													s,
													c,
													l,
													u,
													d
												], a = o);
											} else R = a, a = n;
										} else R = a, a = n;
									}
								}
							}
						}
					}
				}
			}
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 61 ? (s = We, R++) : (s = n, B === 0 && G(oi)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = Y(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
				if (a === n) {
					for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
					if (e.substr(R, 2) === Ge ? (s = Ge, R += 2) : (s = n, B === 0 && G(si)), s !== n) {
						for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
						l = Y(), l === n ? (R = a, a = n) : (o = [
							o,
							s,
							c,
							l
						], a = o);
					} else R = a, a = n;
					if (a === n) {
						for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
						if (e.charCodeAt(R) === 60 ? (s = qe, R++) : (s = n, B === 0 && G(ci)), s !== n) {
							for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
							l = Y(), l === n ? (R = a, a = n) : (o = [
								o,
								s,
								c,
								l
							], a = o);
						} else R = a, a = n;
						if (a === n) {
							for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
							if (e.charCodeAt(R) === 62 ? (s = Je, R++) : (s = n, B === 0 && G(li)), s !== n) {
								for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
								l = Y(), l === n ? (R = a, a = n) : (o = [
									o,
									s,
									c,
									l
								], a = o);
							} else R = a, a = n;
							if (a === n) {
								for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
								if (e.substr(R, 2) === Ye ? (s = Ye, R += 2) : (s = n, B === 0 && G(ui)), s !== n) {
									for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
									l = Y(), l === n ? (R = a, a = n) : (o = [
										o,
										s,
										c,
										l
									], a = o);
								} else R = a, a = n;
								if (a === n) {
									for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
									if (e.substr(R, 2) === Xe ? (s = Xe, R += 2) : (s = n, B === 0 && G(di)), s !== n) {
										for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
										l = Y(), l === n ? (R = a, a = n) : (o = [
											o,
											s,
											c,
											l
										], a = o);
									} else R = a, a = n;
									if (a === n) {
										for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
										if (e.substr(R, 2).toLowerCase() === Ze ? (s = e.substr(R, 2), R += 2) : (s = n, B === 0 && G(fi)), s !== n) {
											for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
											l = Hd(), l === n ? (R = a, a = n) : (o = [
												o,
												s,
												c,
												l
											], a = o);
										} else R = a, a = n;
										if (a === n) {
											for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
											if (e.substr(R, 3).toLowerCase() === Qe ? (s = e.substr(R, 3), R += 3) : (s = n, B === 0 && G(pi)), s !== n) {
												for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
												if (e.substr(R, 2).toLowerCase() === Ze ? (l = e.substr(R, 2), R += 2) : (l = n, B === 0 && G(fi)), l !== n) {
													for (u = [], d = Q(); d !== n;) u.push(d), d = Q();
													d = Hd(), d === n ? (R = a, a = n) : (o = [
														o,
														s,
														c,
														l,
														u,
														d
													], a = o);
												} else R = a, a = n;
											} else R = a, a = n;
										}
									}
								}
							}
						}
					}
				}
			}
			z = t, t = _c(r, i);
		} else R = t, t = n;
		return t;
	}
	function Y() {
		var t = R, r = Sf(), i, a, o, s, c, l, u, d, f;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.charCodeAt(R) === 43 ? (s = Re, R++) : (s = n, B === 0 && G(ei)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = Sf(), l === n ? (R = a, a = n) : (o = [
					o,
					s,
					c,
					l
				], a = o);
			} else R = a, a = n;
			if (a === n) {
				for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 45 ? (s = D, R++) : (s = n, B === 0 && G(mi)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = Sf(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
				if (a === n) {
					if (a = R, o = If(), o === n && (o = Lf()), o !== n) {
						for (s = [], c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
						if (e.charCodeAt(R) === 42 ? (u = m, R++) : (u = n, B === 0 && G(ar)), u !== n) {
							for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
							f = X(), f === n ? (R = c, c = n) : (l = [
								l,
								u,
								d,
								f
							], c = l);
						} else R = c, c = n;
						if (c === n) {
							for (c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
							if (e.charCodeAt(R) === 47 ? (u = Fe, R++) : (u = n, B === 0 && G(Zr)), u !== n) {
								for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
								f = X(), f === n ? (R = c, c = n) : (l = [
									l,
									u,
									d,
									f
								], c = l);
							} else R = c, c = n;
						}
						for (; c !== n;) {
							for (s.push(c), c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
							if (e.charCodeAt(R) === 42 ? (u = m, R++) : (u = n, B === 0 && G(ar)), u !== n) {
								for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
								f = X(), f === n ? (R = c, c = n) : (l = [
									l,
									u,
									d,
									f
								], c = l);
							} else R = c, c = n;
							if (c === n) {
								for (c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
								if (e.charCodeAt(R) === 47 ? (u = Fe, R++) : (u = n, B === 0 && G(Zr)), u !== n) {
									for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
									f = X(), f === n ? (R = c, c = n) : (l = [
										l,
										u,
										d,
										f
									], c = l);
								} else R = c, c = n;
							}
						}
						o = [o, s], a = o;
					} else R = a, a = n;
				}
			}
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 43 ? (s = Re, R++) : (s = n, B === 0 && G(ei)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = Sf(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
				if (a === n) {
					for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
					if (e.charCodeAt(R) === 45 ? (s = D, R++) : (s = n, B === 0 && G(mi)), s !== n) {
						for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
						l = Sf(), l === n ? (R = a, a = n) : (o = [
							o,
							s,
							c,
							l
						], a = o);
					} else R = a, a = n;
					if (a === n) {
						if (a = R, o = If(), o === n && (o = Lf()), o !== n) {
							for (s = [], c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
							if (e.charCodeAt(R) === 42 ? (u = m, R++) : (u = n, B === 0 && G(ar)), u !== n) {
								for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
								f = X(), f === n ? (R = c, c = n) : (l = [
									l,
									u,
									d,
									f
								], c = l);
							} else R = c, c = n;
							if (c === n) {
								for (c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
								if (e.charCodeAt(R) === 47 ? (u = Fe, R++) : (u = n, B === 0 && G(Zr)), u !== n) {
									for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
									f = X(), f === n ? (R = c, c = n) : (l = [
										l,
										u,
										d,
										f
									], c = l);
								} else R = c, c = n;
							}
							for (; c !== n;) {
								for (s.push(c), c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
								if (e.charCodeAt(R) === 42 ? (u = m, R++) : (u = n, B === 0 && G(ar)), u !== n) {
									for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
									f = X(), f === n ? (R = c, c = n) : (l = [
										l,
										u,
										d,
										f
									], c = l);
								} else R = c, c = n;
								if (c === n) {
									for (c = R, l = [], u = Q(); u !== n;) l.push(u), u = Q();
									if (e.charCodeAt(R) === 47 ? (u = Fe, R++) : (u = n, B === 0 && G(Zr)), u !== n) {
										for (d = [], f = Q(); f !== n;) d.push(f), f = Q();
										f = X(), f === n ? (R = c, c = n) : (l = [
											l,
											u,
											d,
											f
										], c = l);
									} else R = c, c = n;
								}
							}
							o = [o, s], a = o;
						} else R = a, a = n;
					}
				}
			}
			z = t, t = vc(r, i);
		} else R = t, t = n;
		return t;
	}
	function Sf() {
		var t = R, r = X(), i, a, o, s, c, l;
		if (r !== n) {
			for (i = [], a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
			if (e.charCodeAt(R) === 42 ? (s = m, R++) : (s = n, B === 0 && G(ar)), s !== n) {
				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
				l = X(), l === n ? (R = a, a = n) : (o = [
					o,
					s,
					c,
					l
				], a = o);
			} else R = a, a = n;
			if (a === n) {
				for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 47 ? (s = Fe, R++) : (s = n, B === 0 && G(Zr)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = X(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
			}
			for (; a !== n;) {
				for (i.push(a), a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (e.charCodeAt(R) === 42 ? (s = m, R++) : (s = n, B === 0 && G(ar)), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					l = X(), l === n ? (R = a, a = n) : (o = [
						o,
						s,
						c,
						l
					], a = o);
				} else R = a, a = n;
				if (a === n) {
					for (a = R, o = [], s = Q(); s !== n;) o.push(s), s = Q();
					if (e.charCodeAt(R) === 47 ? (s = Fe, R++) : (s = n, B === 0 && G(Zr)), s !== n) {
						for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
						l = X(), l === n ? (R = a, a = n) : (o = [
							o,
							s,
							c,
							l
						], a = o);
					} else R = a, a = n;
				}
			}
			z = t, t = yc(r, i);
		} else R = t, t = n;
		return t;
	}
	function X() {
		var t = R, r, i, a;
		if (e.charCodeAt(R) === 33 ? (r = ze, R++) : (r = n, B === 0 && G(ti)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			a = Cf(), a === n ? (R = t, t = n) : (z = t, t = bc(a));
		} else R = t, t = n;
		if (t === n) {
			if (t = R, e.charCodeAt(R) === 43 ? (r = Re, R++) : (r = n, B === 0 && G(ei)), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				a = Cf(), a === n ? (R = t, t = n) : (z = t, t = xc(a));
			} else R = t, t = n;
			if (t === n) {
				if (t = R, e.charCodeAt(R) === 45 ? (r = D, R++) : (r = n, B === 0 && G(mi)), r !== n) {
					for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
					a = Cf(), a === n ? (R = t, t = n) : (z = t, t = Sc(a));
				} else R = t, t = n;
				t === n && (t = Cf());
			}
		}
		return t;
	}
	function Cf() {
		var e = wf(), t;
		return e === n && (e = Tf(), e === n && (e = Mf(), e === n && (e = R, t = Nf(), t !== n && (z = e, t = Cc(t)), e = t, e === n && (e = R, t = Pf(), t !== n && (z = e, t = wc(t)), e = t, e === n && (e = R, t = Rf(), t !== n && (z = e, t = Tc(t)), e = t, e === n && (e = R, t = q(), t !== n && (z = e, t = Ec(t)), e = t)))))), e;
	}
	function wf() {
		var t = R, r, i, a, o, s;
		if (e.charCodeAt(R) === 40 ? (r = d, R++) : (r = n, B === 0 && G(N)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (a = J(), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				e.charCodeAt(R) === 41 ? (s = p, R++) : (s = n, B === 0 && G(P)), s === n ? (R = t, t = n) : (z = t, t = Dc(a));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Tf() {
		var t = jf(), r, i, a, o, s, c, l, u, f, m, h, g, _, v, y;
		if (t === n) {
			if (t = R, e.substr(R, 3).toLowerCase() === $e ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(hi)), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
					for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
					if (s = J(), s !== n) {
						for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
						e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Oc(s));
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
			if (t === n) {
				if (t = R, e.substr(R, 4).toLowerCase() === et ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(gi)), r !== n) {
					for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
					if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
						for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
						if (s = J(), s !== n) {
							for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
							e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = kc(s));
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
				if (t === n) {
					if (t = R, e.substr(R, 11).toLowerCase() === tt ? (r = e.substr(R, 11), R += 11) : (r = n, B === 0 && G(_i)), r !== n) {
						for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
						if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
							for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
							if (s = J(), s !== n) {
								for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
								if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
									for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
									if (f = J(), f !== n) {
										for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
										e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = Ac(s, f));
									} else R = t, t = n;
								} else R = t, t = n;
							} else R = t, t = n;
						} else R = t, t = n;
					} else R = t, t = n;
					if (t === n) {
						if (t = R, e.substr(R, 8).toLowerCase() === O ? (r = e.substr(R, 8), R += 8) : (r = n, B === 0 && G(vi)), r !== n) {
							for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
							if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
								for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
								if (s = J(), s !== n) {
									for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
									e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = jc(s));
								} else R = t, t = n;
							} else R = t, t = n;
						} else R = t, t = n;
						if (t === n) {
							if (t = R, e.substr(R, 5).toLowerCase() === k ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(yi)), r !== n) {
								for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
								if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
									for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
									if (s = q(), s !== n) {
										for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
										e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Mc(s));
									} else R = t, t = n;
								} else R = t, t = n;
							} else R = t, t = n;
							if (t === n) {
								if (t = R, e.substr(R, 3).toLowerCase() === nt ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(bi)), r !== n) {
									for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
									if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
										for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
										if (s = J(), s !== n) {
											for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
											e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Nc(s));
										} else R = t, t = n;
									} else R = t, t = n;
								} else R = t, t = n;
								if (t === n) {
									if (t = R, e.substr(R, 3).toLowerCase() === rt ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(xi)), r !== n) {
										for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
										if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
											for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
											if (s = J(), s !== n) {
												for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
												e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Pc(s));
											} else R = t, t = n;
										} else R = t, t = n;
									} else R = t, t = n;
									if (t === n) {
										if (t = R, e.substr(R, 5).toLowerCase() === it ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Si)), r !== n) {
											for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
											if (a = R, e.charCodeAt(R) === 40 ? (o = d, R++) : (o = n, B === 0 && G(N)), o !== n) {
												for (s = [], c = Q(); c !== n;) s.push(c), c = Q();
												if (c = J(), c !== n) {
													for (l = [], u = Q(); u !== n;) l.push(u), u = Q();
													e.charCodeAt(R) === 41 ? (u = p, R++) : (u = n, B === 0 && G(P)), u === n ? (R = a, a = n) : (o = [
														o,
														s,
														c,
														l,
														u
													], a = o);
												} else R = a, a = n;
											} else R = a, a = n;
											a === n && (a = up()), a === n ? (R = t, t = n) : (z = t, t = Fc(a));
										} else R = t, t = n;
										if (t === n) {
											if (t = R, e.substr(R, 4).toLowerCase() === at ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Ci)), r !== n) {
												for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
												a = up(), a === n ? (R = t, t = n) : (z = t, t = Ic());
											} else R = t, t = n;
											if (t === n) {
												if (t = R, e.substr(R, 3).toLowerCase() === ot ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(wi)), r !== n) {
													for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
													if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
														for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
														if (s = J(), s !== n) {
															for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
															e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Lc(s));
														} else R = t, t = n;
													} else R = t, t = n;
												} else R = t, t = n;
												if (t === n) {
													if (t = R, e.substr(R, 4).toLowerCase() === st ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Ti)), r !== n) {
														for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
														if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
															for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
															if (s = J(), s !== n) {
																for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Rc(s));
															} else R = t, t = n;
														} else R = t, t = n;
													} else R = t, t = n;
													if (t === n) {
														if (t = R, e.substr(R, 5).toLowerCase() === ct ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Ei)), r !== n) {
															for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
															if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																if (s = J(), s !== n) {
																	for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																	e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = zc(s));
																} else R = t, t = n;
															} else R = t, t = n;
														} else R = t, t = n;
														if (t === n) {
															if (t = R, e.substr(R, 5).toLowerCase() === lt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Di)), r !== n) {
																for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																	for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																	if (s = J(), s !== n) {
																		for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																		e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Bc(s));
																	} else R = t, t = n;
																} else R = t, t = n;
															} else R = t, t = n;
															if (t === n) {
																if (t = R, e.substr(R, 6).toLowerCase() === ut ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Oi)), r !== n) {
																	for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																	a = Hd(), a === n ? (R = t, t = n) : (z = t, t = Vc(a));
																} else R = t, t = n;
																if (t === n && (t = Df(), t === n)) {
																	if (t = R, e.substr(R, 6).toLowerCase() === dt ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(ki)), r !== n) {
																		for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																		if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																			for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																			if (s = J(), s !== n) {
																				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																				e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Hc(s));
																			} else R = t, t = n;
																		} else R = t, t = n;
																	} else R = t, t = n;
																	if (t === n && (t = Of(), t === n)) {
																		if (t = R, e.substr(R, 5).toLowerCase() === ft ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Ai)), r !== n) {
																			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																			if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																				if (s = J(), s !== n) {
																					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																					e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Uc(s));
																				} else R = t, t = n;
																			} else R = t, t = n;
																		} else R = t, t = n;
																		if (t === n) {
																			if (t = R, e.substr(R, 5).toLowerCase() === pt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(ji)), r !== n) {
																				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																				if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																					for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																					if (s = J(), s !== n) {
																						for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																						e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Wc(s));
																					} else R = t, t = n;
																				} else R = t, t = n;
																			} else R = t, t = n;
																			if (t === n) {
																				if (t = R, e.substr(R, 14).toLowerCase() === mt ? (r = e.substr(R, 14), R += 14) : (r = n, B === 0 && G(Mi)), r !== n) {
																					for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																					if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																						for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																						if (s = J(), s !== n) {
																							for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																							e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Gc(s));
																						} else R = t, t = n;
																					} else R = t, t = n;
																				} else R = t, t = n;
																				if (t === n) {
																					if (t = R, e.substr(R, 8).toLowerCase() === ht ? (r = e.substr(R, 8), R += 8) : (r = n, B === 0 && G(Ni)), r !== n) {
																						for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																						if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																							for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																							if (s = J(), s !== n) {
																								for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																								if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																									for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																									if (f = J(), f !== n) {
																										for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																										e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = Kc(s, f));
																									} else R = t, t = n;
																								} else R = t, t = n;
																							} else R = t, t = n;
																						} else R = t, t = n;
																					} else R = t, t = n;
																					if (t === n) {
																						if (t = R, e.substr(R, 9).toLowerCase() === gt ? (r = e.substr(R, 9), R += 9) : (r = n, B === 0 && G(Pi)), r !== n) {
																							for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																							if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																								for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																								if (s = J(), s !== n) {
																									for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																									if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																										for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																										if (f = J(), f !== n) {
																											for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																											e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = qc(s, f));
																										} else R = t, t = n;
																									} else R = t, t = n;
																								} else R = t, t = n;
																							} else R = t, t = n;
																						} else R = t, t = n;
																						if (t === n) {
																							if (t = R, e.substr(R, 9).toLowerCase() === _t ? (r = e.substr(R, 9), R += 9) : (r = n, B === 0 && G(Fi)), r !== n) {
																								for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																								if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																									for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																									if (s = J(), s !== n) {
																										for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																										if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																											for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																											if (f = J(), f !== n) {
																												for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																												e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = Jc(s, f));
																											} else R = t, t = n;
																										} else R = t, t = n;
																									} else R = t, t = n;
																								} else R = t, t = n;
																							} else R = t, t = n;
																							if (t === n) {
																								if (t = R, e.substr(R, 7).toLowerCase() === vt ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(Ii)), r !== n) {
																									for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																									if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																										for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																										if (s = J(), s !== n) {
																											for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																											if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																												for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																												if (f = J(), f !== n) {
																													for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																													e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = Yc(s, f));
																												} else R = t, t = n;
																											} else R = t, t = n;
																										} else R = t, t = n;
																									} else R = t, t = n;
																								} else R = t, t = n;
																								if (t === n) {
																									if (t = R, e.substr(R, 8).toLowerCase() === yt ? (r = e.substr(R, 8), R += 8) : (r = n, B === 0 && G(Li)), r !== n) {
																										for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																										if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																											for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																											if (s = J(), s !== n) {
																												for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																												if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																													for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																													if (f = J(), f !== n) {
																														for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																														e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = Xc(s, f));
																													} else R = t, t = n;
																												} else R = t, t = n;
																											} else R = t, t = n;
																										} else R = t, t = n;
																									} else R = t, t = n;
																									if (t === n) {
																										if (t = R, e.substr(R, 4).toLowerCase() === bt ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Ri)), r !== n) {
																											for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																											if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																												for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																												if (s = J(), s !== n) {
																													for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																													e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Zc(s));
																												} else R = t, t = n;
																											} else R = t, t = n;
																										} else R = t, t = n;
																										if (t === n) {
																											if (t = R, e.substr(R, 5).toLowerCase() === xt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(zi)), r !== n) {
																												for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																												if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																													for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																													if (s = J(), s !== n) {
																														for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																														e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = Qc(s));
																													} else R = t, t = n;
																												} else R = t, t = n;
																											} else R = t, t = n;
																											if (t === n) {
																												if (t = R, e.substr(R, 3).toLowerCase() === St ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(Bi)), r !== n) {
																													for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																													if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																														for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																														if (s = J(), s !== n) {
																															for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																															e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = $c(s));
																														} else R = t, t = n;
																													} else R = t, t = n;
																												} else R = t, t = n;
																												if (t === n) {
																													if (t = R, e.substr(R, 5).toLowerCase() === Ct ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(Vi)), r !== n) {
																														for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																														if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																															for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																															if (s = J(), s !== n) {
																																for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = el(s));
																															} else R = t, t = n;
																														} else R = t, t = n;
																													} else R = t, t = n;
																													if (t === n) {
																														if (t = R, e.substr(R, 7).toLowerCase() === wt ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(Hi)), r !== n) {
																															for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																															if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																if (s = J(), s !== n) {
																																	for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																	e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = tl(s));
																																} else R = t, t = n;
																															} else R = t, t = n;
																														} else R = t, t = n;
																														if (t === n) {
																															if (t = R, e.substr(R, 7).toLowerCase() === Tt ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(Ui)), r !== n) {
																																for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																	for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																	if (s = J(), s !== n) {
																																		for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																		e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = nl(s));
																																	} else R = t, t = n;
																																} else R = t, t = n;
																															} else R = t, t = n;
																															if (t === n) {
																																if (t = R, e.substr(R, 8).toLowerCase() === Et ? (r = e.substr(R, 8), R += 8) : (r = n, B === 0 && G(Wi)), r !== n) {
																																	for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																	if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																		for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																		if (s = J(), s !== n) {
																																			for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																			e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = rl(s));
																																		} else R = t, t = n;
																																	} else R = t, t = n;
																																} else R = t, t = n;
																																if (t === n) {
																																	if (t = R, e.substr(R, 2).toLowerCase() === Dt ? (r = e.substr(R, 2), R += 2) : (r = n, B === 0 && G(Gi)), r !== n) {
																																		for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																		if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																			for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																			if (s = J(), s !== n) {
																																				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																				e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = il(s));
																																			} else R = t, t = n;
																																		} else R = t, t = n;
																																	} else R = t, t = n;
																																	if (t === n) {
																																		if (t = R, e.substr(R, 3).toLowerCase() === Ot ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(Ki)), r !== n) {
																																			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																			a = up(), a === n ? (R = t, t = n) : (z = t, t = al());
																																		} else R = t, t = n;
																																		if (t === n) {
																																			if (t = R, e.substr(R, 4).toLowerCase() === A ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(qi)), r !== n) {
																																				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																				a = up(), a === n ? (R = t, t = n) : (z = t, t = ol());
																																			} else R = t, t = n;
																																			if (t === n) {
																																				if (t = R, e.substr(R, 7).toLowerCase() === kt ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(Ji)), r !== n) {
																																					for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																					a = up(), a === n ? (R = t, t = n) : (z = t, t = sl());
																																				} else R = t, t = n;
																																				if (t === n) {
																																					if (t = R, e.substr(R, 3).toLowerCase() === At ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(Yi)), r !== n) {
																																						for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																						if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																							for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																							if (s = J(), s !== n) {
																																								for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																								e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = cl(s));
																																							} else R = t, t = n;
																																						} else R = t, t = n;
																																					} else R = t, t = n;
																																					if (t === n) {
																																						if (t = R, e.substr(R, 4).toLowerCase() === j ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Xi)), r !== n) {
																																							for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																							if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																								for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																								if (s = J(), s !== n) {
																																									for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																									e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = ll(s));
																																								} else R = t, t = n;
																																							} else R = t, t = n;
																																						} else R = t, t = n;
																																						if (t === n) {
																																							if (t = R, e.substr(R, 6).toLowerCase() === jt ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Zi)), r !== n) {
																																								for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																								if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																									for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																									if (s = J(), s !== n) {
																																										for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																										e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = ul(s));
																																									} else R = t, t = n;
																																								} else R = t, t = n;
																																							} else R = t, t = n;
																																							if (t === n) {
																																								if (t = R, e.substr(R, 6).toLowerCase() === Mt ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(Qi)), r !== n) {
																																									for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																									if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																										for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																										if (s = J(), s !== n) {
																																											for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																											e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = dl(s));
																																										} else R = t, t = n;
																																									} else R = t, t = n;
																																								} else R = t, t = n;
																																								if (t === n) {
																																									if (t = R, e.substr(R, 6).toLowerCase() === Nt ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G($i)), r !== n) {
																																										for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																										if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																											for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																											if (s = J(), s !== n) {
																																												for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																												e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = fl(s));
																																											} else R = t, t = n;
																																										} else R = t, t = n;
																																									} else R = t, t = n;
																																									if (t === n) {
																																										if (t = R, e.substr(R, 8).toLowerCase() === Pt ? (r = e.substr(R, 8), R += 8) : (r = n, B === 0 && G(ea)), r !== n) {
																																											for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																											a = Hd(), a === n ? (R = t, t = n) : (z = t, t = pl(a));
																																										} else R = t, t = n;
																																										if (t === n) {
																																											if (t = R, e.substr(R, 2).toLowerCase() === Ft ? (r = e.substr(R, 2), R += 2) : (r = n, B === 0 && G(ta)), r !== n) {
																																												for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																												if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																													for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																													if (s = J(), s !== n) {
																																														for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																														if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																																															for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																																															if (f = J(), f !== n) {
																																																for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																																																if (e.charCodeAt(R) === 44 ? (h = E, R++) : (h = n, B === 0 && G(I)), h !== n) {
																																																	for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
																																																	if (_ = J(), _ !== n) {
																																																		for (v = [], y = Q(); y !== n;) v.push(y), y = Q();
																																																		e.charCodeAt(R) === 41 ? (y = p, R++) : (y = n, B === 0 && G(P)), y === n ? (R = t, t = n) : (z = t, t = ml(s, f, _));
																																																	} else R = t, t = n;
																																																} else R = t, t = n;
																																															} else R = t, t = n;
																																														} else R = t, t = n;
																																													} else R = t, t = n;
																																												} else R = t, t = n;
																																											} else R = t, t = n;
																																											if (t === n) {
																																												if (t = R, e.substr(R, 7).toLowerCase() === It ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(na)), r !== n) {
																																													for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																													if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																														for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																														if (s = J(), s !== n) {
																																															for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																															if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																																																for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																																																if (f = J(), f !== n) {
																																																	for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																																																	e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = hl(s, f));
																																																} else R = t, t = n;
																																															} else R = t, t = n;
																																														} else R = t, t = n;
																																													} else R = t, t = n;
																																												} else R = t, t = n;
																																												if (t === n) {
																																													if (t = R, e.substr(R, 5).toLowerCase() === Lt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(ra)), r !== n) {
																																														for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																														if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																															for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																															if (s = J(), s !== n) {
																																																for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																																if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																																																	for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																																																	if (f = J(), f !== n) {
																																																		for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																																																		e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = gl(s, f));
																																																	} else R = t, t = n;
																																																} else R = t, t = n;
																																															} else R = t, t = n;
																																														} else R = t, t = n;
																																													} else R = t, t = n;
																																													if (t === n) {
																																														if (t = R, e.substr(R, 8).toLowerCase() === Rt ? (r = e.substr(R, 8), R += 8) : (r = n, B === 0 && G(ia)), r !== n) {
																																															for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																															if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																																for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																																if (s = J(), s !== n) {
																																																	for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																																	if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
																																																		for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
																																																		if (f = J(), f !== n) {
																																																			for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
																																																			e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h === n ? (R = t, t = n) : (z = t, t = _l(s, f));
																																																		} else R = t, t = n;
																																																	} else R = t, t = n;
																																																} else R = t, t = n;
																																															} else R = t, t = n;
																																														} else R = t, t = n;
																																														if (t === n) {
																																															if (t = R, e.substr(R, 5).toLowerCase() === zt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(aa)), r === n && (e.substr(R, 5).toLowerCase() === Bt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(oa))), r !== n) {
																																																for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																																if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																																	for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																																	if (s = J(), s !== n) {
																																																		for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																																		e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = vl(s));
																																																	} else R = t, t = n;
																																																} else R = t, t = n;
																																															} else R = t, t = n;
																																															if (t === n) {
																																																if (t = R, e.substr(R, 7).toLowerCase() === Vt ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(sa)), r !== n) {
																																																	for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																																	if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																																		for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																																		if (s = J(), s !== n) {
																																																			for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																																			e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = yl(s));
																																																		} else R = t, t = n;
																																																	} else R = t, t = n;
																																																} else R = t, t = n;
																																																if (t === n) {
																																																	if (t = R, e.substr(R, 9).toLowerCase() === Ht ? (r = e.substr(R, 9), R += 9) : (r = n, B === 0 && G(ca)), r !== n) {
																																																		for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																																		if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																																			for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																																			if (s = J(), s !== n) {
																																																				for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																																				e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = bl(s));
																																																			} else R = t, t = n;
																																																		} else R = t, t = n;
																																																	} else R = t, t = n;
																																																	if (t === n) {
																																																		if (t = R, e.substr(R, 9).toLowerCase() === Ut ? (r = e.substr(R, 9), R += 9) : (r = n, B === 0 && G(la)), r !== n) {
																																																			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
																																																			if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
																																																				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
																																																				if (s = J(), s !== n) {
																																																					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
																																																					e.charCodeAt(R) === 41 ? (l = p, R++) : (l = n, B === 0 && G(P)), l === n ? (R = t, t = n) : (z = t, t = xl(s));
																																																				} else R = t, t = n;
																																																			} else R = t, t = n;
																																																		} else R = t, t = n;
																																																		t === n && (t = Ef(), t === n && (t = kf(), t === n && (t = Af())));
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		return t;
	}
	function Ef() {
		var t = R, r, i, a, o, s, c, l, u, f, m, h, g, _, v;
		if (e.substr(R, 5).toLowerCase() === Wt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(ua)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (s = J(), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
						for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
						if (f = J(), f !== n) {
							for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
							if (h = R, e.charCodeAt(R) === 44 ? (g = E, R++) : (g = n, B === 0 && G(I)), g !== n) {
								for (_ = [], v = Q(); v !== n;) _.push(v), v = Q();
								v = J(), v === n ? (R = h, h = n) : (g = [
									g,
									_,
									v
								], h = g);
							} else R = h, h = n;
							for (h === n && (h = null), g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
							e.charCodeAt(R) === 41 ? (_ = p, R++) : (_ = n, B === 0 && G(P)), _ === n ? (R = t, t = n) : (z = t, t = Sl(s, f, h));
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Df() {
		var t = R, r, i, a, o, s, c, l, u, f, m, h, g, _, v;
		if (e.substr(R, 6).toLowerCase() === Gt ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(da)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (s = J(), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
						for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
						if (f = J(), f !== n) {
							for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
							if (h = R, e.charCodeAt(R) === 44 ? (g = E, R++) : (g = n, B === 0 && G(I)), g !== n) {
								for (_ = [], v = Q(); v !== n;) _.push(v), v = Q();
								v = J(), v === n ? (R = h, h = n) : (g = [
									g,
									_,
									v
								], h = g);
							} else R = h, h = n;
							for (h === n && (h = null), g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
							e.charCodeAt(R) === 41 ? (_ = p, R++) : (_ = n, B === 0 && G(P)), _ === n ? (R = t, t = n) : (z = t, t = Cl(s, f, h));
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Of() {
		var t = R, r, i, a, o, s, c, l, u, f, m, h, g, _, v, y, b, x, S;
		if (e.substr(R, 7).toLowerCase() === Kt ? (r = e.substr(R, 7), R += 7) : (r = n, B === 0 && G(fa)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				if (s = J(), s !== n) {
					for (c = [], l = Q(); l !== n;) c.push(l), l = Q();
					if (e.charCodeAt(R) === 44 ? (l = E, R++) : (l = n, B === 0 && G(I)), l !== n) {
						for (u = [], f = Q(); f !== n;) u.push(f), f = Q();
						if (f = J(), f !== n) {
							for (m = [], h = Q(); h !== n;) m.push(h), h = Q();
							if (e.charCodeAt(R) === 44 ? (h = E, R++) : (h = n, B === 0 && G(I)), h !== n) {
								for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
								if (_ = J(), _ !== n) {
									for (v = [], y = Q(); y !== n;) v.push(y), y = Q();
									if (y = R, e.charCodeAt(R) === 44 ? (b = E, R++) : (b = n, B === 0 && G(I)), b !== n) {
										for (x = [], S = Q(); S !== n;) x.push(S), S = Q();
										S = J(), S === n ? (R = y, y = n) : (b = [
											b,
											x,
											S
										], y = b);
									} else R = y, y = n;
									for (y === n && (y = null), b = [], x = Q(); x !== n;) b.push(x), x = Q();
									e.charCodeAt(R) === 41 ? (x = p, R++) : (x = n, B === 0 && G(P)), x === n ? (R = t, t = n) : (z = t, t = wl(s, f, _, y));
								} else R = t, t = n;
							} else R = t, t = n;
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function kf() {
		var t = R, r, i, a;
		if (e.substr(R, 6).toLowerCase() === qt ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(pa)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			a = K(), a === n ? (R = t, t = n) : (z = t, t = Tl(a));
		} else R = t, t = n;
		return t;
	}
	function Af() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 3).toLowerCase() === Qe ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(pi)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.substr(R, 6).toLowerCase() === qt ? (a = e.substr(R, 6), R += 6) : (a = n, B === 0 && G(pa)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				s = K(), s === n ? (R = t, t = n) : (z = t, t = El(s));
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function jf() {
		var t = R, r, i, a, o, s, c, u, f, h, g, _, v, y, b, x, S;
		if (e.substr(R, 5).toLowerCase() === Jt ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(ma)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
				for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
				for (e.substr(R, 8).toLowerCase() === l ? (s = e.substr(R, 8), R += 8) : (s = n, B === 0 && G(nr)), s === n && (s = null), c = [], u = Q(); u !== n;) c.push(u), u = Q();
				if (e.charCodeAt(R) === 42 ? (u = m, R++) : (u = n, B === 0 && G(ar)), u === n && (u = J()), u !== n) {
					for (f = [], h = Q(); h !== n;) f.push(h), h = Q();
					if (e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h !== n) {
						for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
						z = t, t = Dl(s, u);
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
		} else R = t, t = n;
		if (t === n) {
			if (t = R, e.substr(R, 3).toLowerCase() === Yt ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(ha)), r !== n) {
				for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
				if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
					for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
					for (e.substr(R, 8).toLowerCase() === l ? (s = e.substr(R, 8), R += 8) : (s = n, B === 0 && G(nr)), s === n && (s = null), c = [], u = Q(); u !== n;) c.push(u), u = Q();
					if (u = J(), u !== n) {
						for (f = [], h = Q(); h !== n;) f.push(h), h = Q();
						if (e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h !== n) {
							for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
							z = t, t = Ol(s, u);
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
			} else R = t, t = n;
			if (t === n) {
				if (t = R, e.substr(R, 3).toLowerCase() === Xt ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(ga)), r !== n) {
					for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
					if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
						for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
						for (e.substr(R, 8).toLowerCase() === l ? (s = e.substr(R, 8), R += 8) : (s = n, B === 0 && G(nr)), s === n && (s = null), c = [], u = Q(); u !== n;) c.push(u), u = Q();
						if (u = J(), u !== n) {
							for (f = [], h = Q(); h !== n;) f.push(h), h = Q();
							if (e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h !== n) {
								for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
								z = t, t = kl(s, u);
							} else R = t, t = n;
						} else R = t, t = n;
					} else R = t, t = n;
				} else R = t, t = n;
				if (t === n) {
					if (t = R, e.substr(R, 3).toLowerCase() === Zt ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(_a)), r !== n) {
						for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
						if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
							for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
							for (e.substr(R, 8).toLowerCase() === l ? (s = e.substr(R, 8), R += 8) : (s = n, B === 0 && G(nr)), s === n && (s = null), c = [], u = Q(); u !== n;) c.push(u), u = Q();
							if (u = J(), u !== n) {
								for (f = [], h = Q(); h !== n;) f.push(h), h = Q();
								if (e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h !== n) {
									for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
									z = t, t = Al(s, u);
								} else R = t, t = n;
							} else R = t, t = n;
						} else R = t, t = n;
					} else R = t, t = n;
					if (t === n) {
						if (t = R, e.substr(R, 3).toLowerCase() === Qt ? (r = e.substr(R, 3), R += 3) : (r = n, B === 0 && G(va)), r !== n) {
							for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
							if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
								for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
								for (e.substr(R, 8).toLowerCase() === l ? (s = e.substr(R, 8), R += 8) : (s = n, B === 0 && G(nr)), s === n && (s = null), c = [], u = Q(); u !== n;) c.push(u), u = Q();
								if (u = J(), u !== n) {
									for (f = [], h = Q(); h !== n;) f.push(h), h = Q();
									if (e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h !== n) {
										for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
										z = t, t = jl(s, u);
									} else R = t, t = n;
								} else R = t, t = n;
							} else R = t, t = n;
						} else R = t, t = n;
						if (t === n) {
							if (t = R, e.substr(R, 6).toLowerCase() === $t ? (r = e.substr(R, 6), R += 6) : (r = n, B === 0 && G(ya)), r !== n) {
								for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
								if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
									for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
									for (e.substr(R, 8).toLowerCase() === l ? (s = e.substr(R, 8), R += 8) : (s = n, B === 0 && G(nr)), s === n && (s = null), c = [], u = Q(); u !== n;) c.push(u), u = Q();
									if (u = J(), u !== n) {
										for (f = [], h = Q(); h !== n;) f.push(h), h = Q();
										if (e.charCodeAt(R) === 41 ? (h = p, R++) : (h = n, B === 0 && G(P)), h !== n) {
											for (g = [], _ = Q(); _ !== n;) g.push(_), _ = Q();
											z = t, t = Ml(s, u);
										} else R = t, t = n;
									} else R = t, t = n;
								} else R = t, t = n;
							} else R = t, t = n;
							if (t === n) {
								if (t = R, e.substr(R, 12).toLowerCase() === en ? (r = e.substr(R, 12), R += 12) : (r = n, B === 0 && G(ba)), r !== n) {
									for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
									if (e.charCodeAt(R) === 40 ? (a = d, R++) : (a = n, B === 0 && G(N)), a !== n) {
										for (o = [], s = Q(); s !== n;) o.push(s), s = Q();
										for (e.substr(R, 8).toLowerCase() === l ? (s = e.substr(R, 8), R += 8) : (s = n, B === 0 && G(nr)), s === n && (s = null), c = [], u = Q(); u !== n;) c.push(u), u = Q();
										if (u = J(), u !== n) {
											for (f = R, h = [], g = Q(); g !== n;) h.push(g), g = Q();
											if (e.charCodeAt(R) === 59 ? (g = se, R++) : (g = n, B === 0 && G(Cr)), g !== n) {
												for (_ = [], v = Q(); v !== n;) _.push(v), v = Q();
												if (e.substr(R, 9).toLowerCase() === tn ? (v = e.substr(R, 9), R += 9) : (v = n, B === 0 && G(xa)), v !== n) {
													for (y = [], b = Q(); b !== n;) y.push(b), b = Q();
													if (e.charCodeAt(R) === 61 ? (b = We, R++) : (b = n, B === 0 && G(oi)), b !== n) {
														for (x = [], S = Q(); S !== n;) x.push(S), S = Q();
														S = zf(), S === n ? (R = f, f = n) : (h = [
															h,
															g,
															_,
															v,
															y,
															b,
															x,
															S
														], f = h);
													} else R = f, f = n;
												} else R = f, f = n;
											} else R = f, f = n;
											for (f === n && (f = null), h = [], g = Q(); g !== n;) h.push(g), g = Q();
											if (e.charCodeAt(R) === 41 ? (g = p, R++) : (g = n, B === 0 && G(P)), g !== n) {
												for (_ = [], v = Q(); v !== n;) _.push(v), v = Q();
												z = t, t = Nl(s, u, f);
											} else R = t, t = n;
										} else R = t, t = n;
									} else R = t, t = n;
								} else R = t, t = n;
							}
						}
					}
				}
			}
		}
		return t;
	}
	function Mf() {
		var e = R, t = Z(), r, i;
		if (t !== n) {
			for (r = [], i = Q(); i !== n;) r.push(i), i = Q();
			i = Vd(), i === n && (i = null), z = e, e = Pl(t, i);
		} else R = e, e = n;
		return e;
	}
	function Nf() {
		var t = R, r = zf(), i, a, o;
		return r === n ? (R = t, t = n) : (i = Jf(), i === n && (i = R, e.substr(R, 2) === nn ? (a = nn, R += 2) : (a = n, B === 0 && G(Sa)), a === n ? (R = i, i = n) : (o = Z(), o === n ? (R = i, i = n) : (a = [a, o], i = a))), i === n && (i = null), z = t, t = Fl(r, i)), t;
	}
	function Pf() {
		var e = Ff();
		return e === n && (e = If(), e === n && (e = Lf())), e;
	}
	function Ff() {
		var e = Zf();
		return e === n && (e = Xf(), e === n && (e = Yf())), e;
	}
	function If() {
		var e = ep();
		return e === n && (e = $f(), e === n && (e = Qf())), e;
	}
	function Lf() {
		var e = rp();
		return e === n && (e = np(), e === n && (e = tp())), e;
	}
	function Rf() {
		var t = R, r;
		return e.substr(R, 4).toLowerCase() === rn ? (r = e.substr(R, 4), R += 4) : (r = n, B === 0 && G(Ca)), r !== n && (z = t, r = Il()), t = r, t === n && (t = R, e.substr(R, 5).toLowerCase() === an ? (r = e.substr(R, 5), R += 5) : (r = n, B === 0 && G(wa)), r !== n && (z = t, r = Ll()), t = r), t;
	}
	function zf() {
		var e = sp();
		return e === n && (e = cp(), e === n && (e = ap(), e === n && (e = op()))), e;
	}
	function Z() {
		var e = R, t = Hf();
		return t !== n && (z = e, t = Rl(t)), e = t, e === n && (e = R, t = Bf(), t !== n && (z = e, t = zl(t)), e = t), e;
	}
	function Bf() {
		var e = R, t = Wf();
		return t !== n && (z = e, t = Bl(t)), e = t, e === n && (e = R, t = Uf(), t !== n && (z = e, t = Vl(t)), e = t), e;
	}
	function Vf() {
		var e = R, t = Gf();
		return t !== n && (z = e, t = Hl(t)), e = t, e === n && (e = R, t = gp(), t !== n && (z = e, t = Ul()), e = t), e;
	}
	function Hf() {
		var t = R, r, i, a;
		if (e.charCodeAt(R) === 60 ? (r = qe, R++) : (r = n, B === 0 && G(ci)), r !== n) {
			for (i = [], Sn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(Ta)); a !== n;) i.push(a), Sn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(Ta));
			e.charCodeAt(R) === 62 ? (a = Je, R++) : (a = n, B === 0 && G(li)), a === n ? (R = t, t = n) : (z = t, t = Wl(i));
		} else R = t, t = n;
		return t;
	}
	function Uf() {
		var t = R, r = bp(), i;
		return r === n && (r = null), e.charCodeAt(R) === 58 ? (i = on, R++) : (i = n, B === 0 && G(Ea)), i === n ? (R = t, t = n) : (z = t, t = Gl(r)), t;
	}
	function Wf() {
		var e = R, t = Uf(), r;
		return t === n ? (R = e, e = n) : (r = xp(), r === n ? (R = e, e = n) : (z = e, e = Kl(t, r))), e;
	}
	function Gf() {
		var t = R, r, i, a, o, s, c;
		if (e.substr(R, 2) === sn ? (r = sn, R += 2) : (r = n, B === 0 && G(Da)), r !== n) {
			if (i = vp(), i === n && (M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L))), i !== n) {
				for (a = [], o = $(), o === n && (o = R, e.charCodeAt(R) === 46 ? (s = T, R++) : (s = n, B === 0 && G(F)), s === n ? (R = o, o = n) : (c = $(), c === n ? (R = o, o = n) : (s = [s, c], o = s))); o !== n;) a.push(o), o = $(), o === n && (o = R, e.charCodeAt(R) === 46 ? (s = T, R++) : (s = n, B === 0 && G(F)), s === n ? (R = o, o = n) : (c = $(), c === n ? (R = o, o = n) : (s = [s, c], o = s)));
				z = t, t = ql();
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Kf() {
		var t = R, r, i;
		return e.charCodeAt(R) === 63 ? (r = Le, R++) : (r = n, B === 0 && G($r)), r === n ? (R = t, t = n) : (i = yp(), i === n ? (R = t, t = n) : (z = t, t = Jl(i))), t;
	}
	function qf() {
		var t = R, r, i;
		return e.charCodeAt(R) === 36 ? (r = cn, R++) : (r = n, B === 0 && G(Oa)), r === n ? (R = t, t = n) : (i = yp(), i === n ? (R = t, t = n) : (z = t, t = Yl(i))), t;
	}
	function Jf() {
		var t = R, r, i, a, o, s, c, l;
		if (e.charCodeAt(R) === 64 ? (r = ln, R++) : (r = n, B === 0 && G(ka)), r !== n) {
			if (i = [], Cn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(Aa)), a !== n) for (; a !== n;) i.push(a), Cn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(Aa));
			else i = n;
			if (i !== n) {
				if (a = [], o = R, e.charCodeAt(R) === 45 ? (s = D, R++) : (s = n, B === 0 && G(mi)), s !== n) {
					if (c = [], wn.test(e.charAt(R)) ? (l = e.charAt(R), R++) : (l = n, B === 0 && G(ja)), l !== n) for (; l !== n;) c.push(l), wn.test(e.charAt(R)) ? (l = e.charAt(R), R++) : (l = n, B === 0 && G(ja));
					else c = n;
					c === n ? (R = o, o = n) : (s = [s, c], o = s);
				} else R = o, o = n;
				for (; o !== n;) if (a.push(o), o = R, e.charCodeAt(R) === 45 ? (s = D, R++) : (s = n, B === 0 && G(mi)), s !== n) {
					if (c = [], wn.test(e.charAt(R)) ? (l = e.charAt(R), R++) : (l = n, B === 0 && G(ja)), l !== n) for (; l !== n;) c.push(l), wn.test(e.charAt(R)) ? (l = e.charAt(R), R++) : (l = n, B === 0 && G(ja));
					else c = n;
					c === n ? (R = o, o = n) : (s = [s, c], o = s);
				} else R = o, o = n;
				z = t, t = Xl(i, a);
			} else R = t, t = n;
		} else R = t, t = n;
		return t;
	}
	function Yf() {
		var t = R, r = [], i;
		if (M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L)), i !== n) for (; i !== n;) r.push(i), M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L));
		else r = n;
		return r !== n && (z = t, r = Zl()), t = r, t;
	}
	function Xf() {
		var t = R, r = [], i, a, o;
		for (M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L)); i !== n;) r.push(i), M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L));
		if (e.charCodeAt(R) === 46 ? (i = T, R++) : (i = n, B === 0 && G(F)), i !== n) {
			if (a = [], M.test(e.charAt(R)) ? (o = e.charAt(R), R++) : (o = n, B === 0 && G(L)), o !== n) for (; o !== n;) a.push(o), M.test(e.charAt(R)) ? (o = e.charAt(R), R++) : (o = n, B === 0 && G(L));
			else a = n;
			a === n ? (R = t, t = n) : (z = t, t = Ql());
		} else R = t, t = n;
		return t;
	}
	function Zf() {
		var t = R, r = [], i, a, o;
		if (M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L)), i !== n) for (; i !== n;) r.push(i), M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L));
		else r = n;
		if (r !== n) {
			if (e.charCodeAt(R) === 46 ? (i = T, R++) : (i = n, B === 0 && G(F)), i !== n) {
				for (a = [], M.test(e.charAt(R)) ? (o = e.charAt(R), R++) : (o = n, B === 0 && G(L)); o !== n;) a.push(o), M.test(e.charAt(R)) ? (o = e.charAt(R), R++) : (o = n, B === 0 && G(L));
				o = ip(), o === n ? (R = t, t = n) : (z = t, t = $l());
			} else R = t, t = n;
		} else R = t, t = n;
		if (t === n) {
			if (t = R, e.charCodeAt(R) === 46 ? (r = T, R++) : (r = n, B === 0 && G(F)), r !== n) {
				if (i = [], M.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(L)), a !== n) for (; a !== n;) i.push(a), M.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(L));
				else i = n;
				i === n ? (R = t, t = n) : (a = ip(), a === n ? (R = t, t = n) : (z = t, t = eu()));
			} else R = t, t = n;
			if (t === n) {
				if (t = R, r = [], M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L)), i !== n) for (; i !== n;) r.push(i), M.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(L));
				else r = n;
				r === n ? (R = t, t = n) : (i = ip(), i === n ? (R = t, t = n) : (z = t, t = tu()));
			}
		}
		return t;
	}
	function Qf() {
		var t = R, r, i;
		return e.charCodeAt(R) === 43 ? (r = Re, R++) : (r = n, B === 0 && G(ei)), r === n ? (R = t, t = n) : (i = Yf(), i === n ? (R = t, t = n) : (z = t, t = nu(i))), t;
	}
	function $f() {
		var t = R, r, i;
		return e.charCodeAt(R) === 43 ? (r = Re, R++) : (r = n, B === 0 && G(ei)), r === n ? (R = t, t = n) : (i = Xf(), i === n ? (R = t, t = n) : (z = t, t = ru(i))), t;
	}
	function ep() {
		var t = R, r, i;
		return e.charCodeAt(R) === 43 ? (r = Re, R++) : (r = n, B === 0 && G(ei)), r === n ? (R = t, t = n) : (i = Zf(), i === n ? (R = t, t = n) : (z = t, t = iu(i))), t;
	}
	function tp() {
		var t = R, r, i;
		return e.charCodeAt(R) === 45 ? (r = D, R++) : (r = n, B === 0 && G(mi)), r === n ? (R = t, t = n) : (i = Yf(), i === n ? (R = t, t = n) : (z = t, t = au(i))), t;
	}
	function np() {
		var t = R, r, i;
		return e.charCodeAt(R) === 45 ? (r = D, R++) : (r = n, B === 0 && G(mi)), r === n ? (R = t, t = n) : (i = Xf(), i === n ? (R = t, t = n) : (z = t, t = ou(i))), t;
	}
	function rp() {
		var t = R, r, i;
		return e.charCodeAt(R) === 45 ? (r = D, R++) : (r = n, B === 0 && G(mi)), r === n ? (R = t, t = n) : (i = Zf(), i === n ? (R = t, t = n) : (z = t, t = su(i))), t;
	}
	function ip() {
		var t = R, r, i, a, o;
		if (Tn.test(e.charAt(R)) ? (r = e.charAt(R), R++) : (r = n, B === 0 && G(Ma)), r !== n) {
			if (En.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(Na)), i === n && (i = null), a = [], M.test(e.charAt(R)) ? (o = e.charAt(R), R++) : (o = n, B === 0 && G(L)), o !== n) for (; o !== n;) a.push(o), M.test(e.charAt(R)) ? (o = e.charAt(R), R++) : (o = n, B === 0 && G(L));
			else a = n;
			a === n ? (R = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else R = t, t = n;
		return t;
	}
	function ap() {
		var t = R, r, i, a;
		if (e.charCodeAt(R) === 39 ? (r = un, R++) : (r = n, B === 0 && G(Pa)), r !== n) {
			for (i = [], Dn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(Fa)), a === n && (a = lp()); a !== n;) i.push(a), Dn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(Fa)), a === n && (a = lp());
			e.charCodeAt(R) === 39 ? (a = un, R++) : (a = n, B === 0 && G(Pa)), a === n ? (R = t, t = n) : (z = t, t = cu(i));
		} else R = t, t = n;
		return t;
	}
	function op() {
		var t = R, r, i, a;
		if (e.charCodeAt(R) === 34 ? (r = dn, R++) : (r = n, B === 0 && G(Ia)), r !== n) {
			for (i = [], On.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(La)), a === n && (a = lp()); a !== n;) i.push(a), On.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(La)), a === n && (a = lp());
			e.charCodeAt(R) === 34 ? (a = dn, R++) : (a = n, B === 0 && G(Ia)), a === n ? (R = t, t = n) : (z = t, t = lu(i));
		} else R = t, t = n;
		return t;
	}
	function sp() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 3) === fn ? (r = fn, R += 3) : (r = n, B === 0 && G(Ra)), r !== n) {
			for (i = [], a = R, e.substr(R, 2) === pn ? (o = pn, R += 2) : (o = n, B === 0 && G(za)), o === n && (e.charCodeAt(R) === 39 ? (o = un, R++) : (o = n, B === 0 && G(Pa))), o === n && (o = null), kn.test(e.charAt(R)) ? (s = e.charAt(R), R++) : (s = n, B === 0 && G(Ba)), s === n && (s = lp()), s === n ? (R = a, a = n) : (o = [o, s], a = o); a !== n;) i.push(a), a = R, e.substr(R, 2) === pn ? (o = pn, R += 2) : (o = n, B === 0 && G(za)), o === n && (e.charCodeAt(R) === 39 ? (o = un, R++) : (o = n, B === 0 && G(Pa))), o === n && (o = null), kn.test(e.charAt(R)) ? (s = e.charAt(R), R++) : (s = n, B === 0 && G(Ba)), s === n && (s = lp()), s === n ? (R = a, a = n) : (o = [o, s], a = o);
			e.substr(R, 3) === fn ? (a = fn, R += 3) : (a = n, B === 0 && G(Ra)), a === n ? (R = t, t = n) : (z = t, t = uu(i));
		} else R = t, t = n;
		return t;
	}
	function cp() {
		var t = R, r, i, a, o, s;
		if (e.substr(R, 3) === mn ? (r = mn, R += 3) : (r = n, B === 0 && G(Va)), r !== n) {
			for (i = [], a = R, e.substr(R, 2) === hn ? (o = hn, R += 2) : (o = n, B === 0 && G(Ha)), o === n && (e.charCodeAt(R) === 34 ? (o = dn, R++) : (o = n, B === 0 && G(Ia))), o === n && (o = null), An.test(e.charAt(R)) ? (s = e.charAt(R), R++) : (s = n, B === 0 && G(Ua)), s === n && (s = lp()), s === n ? (R = a, a = n) : (o = [o, s], a = o); a !== n;) i.push(a), a = R, e.substr(R, 2) === hn ? (o = hn, R += 2) : (o = n, B === 0 && G(Ha)), o === n && (e.charCodeAt(R) === 34 ? (o = dn, R++) : (o = n, B === 0 && G(Ia))), o === n && (o = null), An.test(e.charAt(R)) ? (s = e.charAt(R), R++) : (s = n, B === 0 && G(Ua)), s === n && (s = lp()), s === n ? (R = a, a = n) : (o = [o, s], a = o);
			e.substr(R, 3) === mn ? (a = mn, R += 3) : (a = n, B === 0 && G(Va)), a === n ? (R = t, t = n) : (z = t, t = du(i));
		} else R = t, t = n;
		return t;
	}
	function lp() {
		var t = R, r, i;
		return e.charCodeAt(R) === 92 ? (r = gn, R++) : (r = n, B === 0 && G(Wa)), r === n ? (R = t, t = n) : (jn.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = n, B === 0 && G(Ga)), i === n ? (R = t, t = n) : (z = t, t = fu())), t;
	}
	function up() {
		var t = R, r, i, a;
		if (e.charCodeAt(R) === 40 ? (r = d, R++) : (r = n, B === 0 && G(N)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			e.charCodeAt(R) === 41 ? (a = p, R++) : (a = n, B === 0 && G(P)), a === n ? (R = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else R = t, t = n;
		return t;
	}
	function Q() {
		var e = hp();
		return e === n && (e = dp(), e === n && (e = fp())), e;
	}
	function dp() {
		var t;
		return Mn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(Ka)), t;
	}
	function fp() {
		var t;
		return Nn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(qa)), t;
	}
	function pp() {
		var t;
		return Pn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(Ja)), t;
	}
	function mp() {
		var t = R, r, i, a;
		if (e.charCodeAt(R) === 35 ? (r = _n, R++) : (r = n, B === 0 && G(Ya)), r !== n) {
			for (i = [], a = pp(); a !== n;) i.push(a), a = pp();
			a = fp(), a === n ? (R = t, t = n) : (z = t, t = pu());
		} else R = t, t = n;
		return t;
	}
	function hp() {
		var t = R, r = fp(), i, a, o, s;
		for (r === n && (r = null), i = [], a = dp(); a !== n;) i.push(a), a = dp();
		if (e.charCodeAt(R) === 35 ? (a = _n, R++) : (a = n, B === 0 && G(Ya)), a !== n) {
			for (o = [], s = pp(); s !== n;) o.push(s), s = pp();
			z = t, t = mu();
		} else R = t, t = n;
		return t;
	}
	function gp() {
		var t = R, r, i, a;
		if (e.charCodeAt(R) === 91 ? (r = Be, R++) : (r = n, B === 0 && G(ni)), r !== n) {
			for (i = [], a = Q(); a !== n;) i.push(a), a = Q();
			e.charCodeAt(R) === 93 ? (a = Ve, R++) : (a = n, B === 0 && G(ri)), a === n ? (R = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else R = t, t = n;
		return t;
	}
	function _p() {
		var t;
		return Fn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(Xa)), t === n && (In.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(Za)), t === n && (Ln.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(Qa)), t === n && (Rn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G($a)), t === n && (zn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(eo)), t === n && (Bn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(to)), t === n && (Vn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(no)), t === n && (Hn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(ro)), t === n && (Un.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(io)), t === n && (Wn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(ao)), t === n && (Gn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(oo)), t === n && (Kn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(so)), t === n && (qn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(co)))))))))))))), t;
	}
	function vp() {
		var t = _p();
		return t === n && (e.charCodeAt(R) === 95 ? (t = vn, R++) : (t = n, B === 0 && G(lo))), t;
	}
	function yp() {
		var t = R, r = vp(), i, a;
		if (r === n && (M.test(e.charAt(R)) ? (r = e.charAt(R), R++) : (r = n, B === 0 && G(L))), r !== n) {
			for (i = [], a = vp(), a === n && (M.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(L)), a === n && (Jn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(uo)), a === n && (Yn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(fo)), a === n && (Xn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(po)))))); a !== n;) i.push(a), a = vp(), a === n && (M.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(L)), a === n && (Jn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(uo)), a === n && (Yn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(fo)), a === n && (Xn.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = n, B === 0 && G(po))))));
			z = t, t = hu();
		} else R = t, t = n;
		return t;
	}
	function $() {
		var t = vp();
		return t === n && (e.charCodeAt(R) === 45 ? (t = D, R++) : (t = n, B === 0 && G(mi)), t === n && (M.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(L)), t === n && (Jn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(uo)), t === n && (Yn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(fo)), t === n && (Xn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(po))))))), t;
	}
	function bp() {
		var t = R, r = _p(), i, a, o, s;
		if (r !== n) {
			for (i = [], a = $(), a === n && (a = R, e.charCodeAt(R) === 46 ? (o = T, R++) : (o = n, B === 0 && G(F)), o === n ? (R = a, a = n) : (s = $(), s === n ? (R = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = $(), a === n && (a = R, e.charCodeAt(R) === 46 ? (o = T, R++) : (o = n, B === 0 && G(F)), o === n ? (R = a, a = n) : (s = $(), s === n ? (R = a, a = n) : (o = [o, s], a = o)));
			z = t, t = gu();
		} else R = t, t = n;
		return t;
	}
	function xp() {
		var t = R, r = vp(), i, a, o, s;
		if (r === n && (e.charCodeAt(R) === 58 ? (r = on, R++) : (r = n, B === 0 && G(Ea)), r === n && (M.test(e.charAt(R)) ? (r = e.charAt(R), R++) : (r = n, B === 0 && G(L)), r === n && (r = Sp()))), r !== n) {
			for (i = [], a = $(), a === n && (e.charCodeAt(R) === 58 ? (a = on, R++) : (a = n, B === 0 && G(Ea)), a === n && (a = Sp())), a === n && (a = R, e.charCodeAt(R) === 46 ? (o = T, R++) : (o = n, B === 0 && G(F)), o === n ? (R = a, a = n) : (s = $(), s === n && (e.charCodeAt(R) === 58 ? (s = on, R++) : (s = n, B === 0 && G(Ea)), s === n && (s = Sp())), s === n ? (R = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = $(), a === n && (e.charCodeAt(R) === 58 ? (a = on, R++) : (a = n, B === 0 && G(Ea)), a === n && (a = Sp())), a === n && (a = R, e.charCodeAt(R) === 46 ? (o = T, R++) : (o = n, B === 0 && G(F)), o === n ? (R = a, a = n) : (s = $(), s === n && (e.charCodeAt(R) === 58 ? (s = on, R++) : (s = n, B === 0 && G(Ea)), s === n && (s = Sp())), s === n ? (R = a, a = n) : (o = [o, s], a = o)));
			z = t, t = _u();
		} else R = t, t = n;
		return t;
	}
	function Sp() {
		var e = Cp();
		return e === n && (e = Tp()), e;
	}
	function Cp() {
		var t = R, r, i, a;
		return e.charCodeAt(R) === 37 ? (r = yn, R++) : (r = n, B === 0 && G(mo)), r === n ? (R = t, t = n) : (i = wp(), i === n ? (R = t, t = n) : (a = wp(), a === n ? (R = t, t = n) : (r = [
			r,
			i,
			a
		], t = r))), t;
	}
	function wp() {
		var t;
		return M.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(L)), t === n && (Zn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(ho)), t === n && (Qn.test(e.charAt(R)) ? (t = e.charAt(R), R++) : (t = n, B === 0 && G(go)))), t;
	}
	function Tp() {
		var t = R, r, i;
		return e.charCodeAt(R) === 92 ? (r = gn, R++) : (r = n, B === 0 && G(Wa)), r === n ? (R = t, t = n) : (e.charCodeAt(R) === 95 ? (i = vn, R++) : (i = n, B === 0 && G(lo)), i === n && (e.charCodeAt(R) === 126 ? (i = bn, R++) : (i = n, B === 0 && G(_o)), i === n && (e.charCodeAt(R) === 46 ? (i = T, R++) : (i = n, B === 0 && G(F)), i === n && (e.charCodeAt(R) === 45 ? (i = D, R++) : (i = n, B === 0 && G(mi)), i === n && (e.charCodeAt(R) === 33 ? (i = ze, R++) : (i = n, B === 0 && G(ti)), i === n && (e.charCodeAt(R) === 36 ? (i = cn, R++) : (i = n, B === 0 && G(Oa)), i === n && (e.charCodeAt(R) === 38 ? (i = xn, R++) : (i = n, B === 0 && G(vo)), i === n && (e.charCodeAt(R) === 39 ? (i = un, R++) : (i = n, B === 0 && G(Pa)), i === n && (e.charCodeAt(R) === 40 ? (i = d, R++) : (i = n, B === 0 && G(N)), i === n && (e.charCodeAt(R) === 41 ? (i = p, R++) : (i = n, B === 0 && G(P)), i === n && (e.charCodeAt(R) === 42 ? (i = m, R++) : (i = n, B === 0 && G(ar)), i === n && (e.charCodeAt(R) === 43 ? (i = Re, R++) : (i = n, B === 0 && G(ei)), i === n && (e.charCodeAt(R) === 44 ? (i = E, R++) : (i = n, B === 0 && G(I)), i === n && (e.charCodeAt(R) === 59 ? (i = se, R++) : (i = n, B === 0 && G(Cr)), i === n && (e.charCodeAt(R) === 58 ? (i = on, R++) : (i = n, B === 0 && G(Ea)), i === n && (e.charCodeAt(R) === 61 ? (i = We, R++) : (i = n, B === 0 && G(oi)), i === n && (e.charCodeAt(R) === 47 ? (i = Fe, R++) : (i = n, B === 0 && G(Zr)), i === n && (e.charCodeAt(R) === 63 ? (i = Le, R++) : (i = n, B === 0 && G($r)), i === n && (e.charCodeAt(R) === 35 ? (i = _n, R++) : (i = n, B === 0 && G(Ya)), i === n && (e.charCodeAt(R) === 64 ? (i = ln, R++) : (i = n, B === 0 && G(ka)), i === n && (e.charCodeAt(R) === 37 ? (i = yn, R++) : (i = n, B === 0 && G(mo)))))))))))))))))))))), i === n ? (R = t, t = n) : (r = [r, i], t = r)), t;
	}
	let Ep = {};
	function Dp(e, t) {
		return !!(e.type === "Var" && e.varType === t.varType && e.varname === t.varname || e.iriref && e.iriref === t.iriref || e.type === "PrefixedName" && e.pn_prefix === t.pn_prefix && e.pn_local === t.pn_local);
	}
	if (xu = a(), xu !== n && R === e.length) return xu;
	throw xu !== n && R < e.length && G(Su()), Tu(bu, yu < e.length ? e.charAt(yu) : null, yu < e.length ? wu(yu, yu + 1) : wu(yu, yu));
}
//#endregion
//#region node_modules/.pnpm/sparql-formatter@1.0.2/node_modules/sparql-formatter/src/formatter.js
var Ye, Xe, Ze, Qe = "  ", D = 0;
function $e(e, t = 2) {
	if (Qe = " ".repeat(t), Ye = [], Xe = e.comments, Ze = "", e.headers && O(e.headers.join("")), e.prologue?.decl.length && (e.prologue.decl.forEach((e) => {
		e.type === "BaseDecl" ? O(`BASE <${e.iriref}>`) : O(`PREFIX ${e.pn_prefix || ""}: <${e.iriref}>`);
	}), O("")), e.selectQuery) lt(e.selectQuery);
	else if (e.constructQuery) pt(e.constructQuery);
	else if (e.askQuery) nt(e.askQuery);
	else if (e.describeQuery) rt(e.describeQuery);
	else if (e.update) for (let t = 0; t < e.update.length; t++) t > 0 && (Ye[Ye.length - 1] += " ;\n"), it(e.update[t]);
	for (e.values && At(e.values); Xe && Xe.length;) Ye[Ye.length - 1] += Xe.shift().text;
	return Ye.join("\n");
}
var et = (e = 1) => {
	Ze += Qe.repeat(e);
}, tt = (e = 1) => {
	Ze = Ze.substr(0, Ze.length - Qe.length * e);
}, O = (e) => {
	Ye.push(Ze + e);
}, k = (e, t) => {
	for (; Xe && Xe.length && Xe[0].pos < t;) Ye[Ye.length - 1] += Xe.shift().text;
	O(e);
}, nt = (e) => {
	O("ASK {"), k("}", ct(e.where) + 1), ft(e);
}, rt = (e) => {
	O(`DESCRIBE ${e.describe.map(j).join(" ")}`), dt(e.from), e.where && (O("WHERE {"), k("}", ct(e.where) + 1)), ft(e);
}, it = (e) => {
	if (e.type === "insertdata") O("INSERT DATA {"), et(), St(e.insert), tt(), O("}");
	else if (e.type === "deletedata") O("DELETE DATA {"), et(), St(e.delete), tt(), O("}");
	else if (e.type === "deletewhere") O("DELETE WHERE {"), et(), St(e.delete), tt(), O("}");
	else if (e.type === "modify") e.with && O(`WITH ${j(e.with)}`), e.delete && (O("DELETE {"), et(), St(e.delete), tt(), O("}")), e.insert && (O("INSERT {"), et(), St(e.insert), tt(), O("}")), e.using && e.using.forEach((e) => {
		O(`USING ${at(e)}`);
	}), O("WHERE {"), k("}", ct(e.where) + 1);
	else if (e.type === "add") {
		let t = ot(e.graphs[0]), n = ot(e.graphs[1]), r = " ";
		e.silent && (r = " SILENT "), O(`ADD${r}${t} TO ${n}`);
	} else if (e.type === "move") {
		let t = ot(e.graphs[0]), n = ot(e.graphs[1]), r = " ";
		e.silent && (r = " SILENT "), O(`MOVE${r}${t} TO ${n}`);
	} else if (e.type === "copy") {
		let t = ot(e.graphs[0]), n = ot(e.graphs[1]), r = " ";
		e.silent && (r = " SILENT "), O(`COPY${r}${t} TO ${n}`);
	} else if (e.type === "load") {
		let t = " ";
		e.silent && (t = " SILENT "), O(`LOAD${t}${Mt(e.sourceGraph)}`);
	} else if (e.type === "clear") {
		let t = " ";
		e.silent && (t = " SILENT "), O(`CLEAR${t}${st(e.destinyGraph)}`);
	} else if (e.type === "drop") {
		let t = " ";
		e.silent && (t = " SILENT "), O(`DROP${t}${st(e.destinyGraph)}`);
	} else if (e.type === "create") {
		let t = " ";
		e.silent && (t = " SILENT "), O(`CREATE${t}GRAPH ${Mt(e.destinyGraph)}`);
	}
}, at = (e) => e.named ? `NAMED ${Mt(e.iri)}` : Mt(e.iri), ot = (e) => e === "default" ? "DEFAULT" : Mt(e), st = (e) => e === "default" ? "DEFAULT" : e === "named" ? "NAMED" : e === "all" ? "ALL" : `GRAPH ${Mt(e)}`, ct = (e, t = 0) => (et(), e.type === "SubSelect" ? (ut(e), t = e.location.end.offset) : e.graphPattern ? e.graphPattern.forEach((e) => {
	gt(e), t = e.location.end.offset;
}) : e.forEach((e) => {
	gt(e), t = e.location.end.offset;
}), tt(), t), lt = (e) => {
	let t = e.selectClause.location.start.offset;
	k(yt(e.selectClause), t);
	let n = e.selectClause.location.end.offset, r = dt(e.selectClause.from);
	r > n && (n = r), k("WHERE {", n + 1), n = ct(e.whereClause, n), k("}", n + 1), ft(e);
}, ut = (e) => {
	let t = e.selectClause.location.start.offset, n = e.selectClause.location.end.offset;
	k(yt(e.selectClause), t), k("WHERE {", n + 1), n = ct(e.whereClause, n), k("}", n + 1), e.values && At(e.values), ft(e);
}, dt = (e) => {
	if (e) {
		let t;
		return e.forEach((e) => {
			e.graph ? t = mt(e.graph) : e.namedGraph && (t = ht(e.namedGraph));
		}), t;
	}
}, ft = (e) => {
	e.group && O(_t(e.group)), e.having && O(`HAVING ${A(e.having[0])}`), e.orderBy && O("ORDER BY " + vt(e.orderBy)), e.limitOffset?.forEach((e) => {
		e.limit ? O(`LIMIT ${e.limit}`) : e.offset && O(`OFFSET ${e.offset}`);
	});
}, pt = (e) => {
	e.template ? (k("CONSTRUCT {", e.location.start.offset), et(), St(e.template.triplePattern), tt(), O("}")) : O("CONSTRUCT"), dt(e.from), O("WHERE {"), k("}", ct(e.where) + 1), ft(e);
}, mt = (e) => {
	let t = Mt(e);
	if (t != null) {
		let n = e.location.start.offset, r = e.location.end.offset;
		return k("FROM " + t, n), r;
	}
}, ht = (e) => {
	let t = Mt(e);
	if (t != null) {
		let n = e.location.start.offset, r = e.location.end.offset;
		return k("FROM NAMED " + t, n), r;
	}
}, gt = (e) => {
	if (D = e.location.start.offset, e.type === "SubSelect") {
		O("{"), et(), ut(e), tt(), O("}");
		return;
	}
	if (e.graphPattern && e.graph) {
		k(`GRAPH ${j(e.graph)} {`, D), k("}", ct(e) + 1);
		return;
	}
	if (e.graphPattern) {
		O("{"), k("}", ct(e) + 1);
		return;
	}
	if (e.data) {
		At(e);
		return;
	}
	if (e.triplePattern) {
		St(e.triplePattern);
		return;
	}
	if (e.union) {
		for (let t = 0; t < e.union.length; t++) t > 0 && O("UNION"), O("{"), ct(e.union[t]), k("}", e.union[t].location.end.offset + 2);
		return;
	}
	if (e.optional) {
		k("OPTIONAL {", D), k("}", ct(e.optional) + 1);
		return;
	}
	if (e.minus) {
		k("MINUS {", D), k("}", ct(e.minus) + 1);
		return;
	}
	if (e.filter) {
		xt(e);
		return;
	}
	if (e.bind) {
		O(`BIND (${A(e.bind)} AS ${Nt(e.as)})`);
		return;
	}
	if (e.type === "ServiceGraphPattern") {
		let t = " ";
		e.silent && (t = " SILENT "), O(`SERVICE${t}${j(e.service)} {`), e.pattern.type === "SubSelect" ? (et(), ut(e.pattern), tt()) : ct(e.pattern), O("}");
		return;
	}
	if (e.functionRef) {
		let t = e.args.map(A).join(", ");
		O(Mt(e.functionRef) + `(${t})`);
	}
}, _t = (e) => {
	let t = ["GROUP BY"], n = 0;
	return e.forEach((e) => {
		t[n].length > 80 ? (n++, t[n] = "  ") : t[n] += " ", t[n] += j(e);
	}), t.join("\n");
}, vt = (e) => {
	let t = [];
	return e.forEach((e) => {
		let n;
		n = e.type === "Var" ? Nt(e) : A(e), e.asc ? t.push(`ASC${n}`) : e.desc ? t.push(`DESC${n}`) : t.push(n);
	}), t.join(" ");
}, yt = (e) => {
	let t = [];
	t[0] = "SELECT", e.distinct && (t[0] += " DISTINCT"), e.reduced && (t[0] += " REDUCED");
	let n = 0;
	return e.var.forEach((e) => {
		t[n].length > 80 ? (n++, t[n] = "  ") : t[n] += " ", t[n] += bt(e);
	}), t.join("\n");
}, bt = (e) => {
	if (e.varname) return Nt(e);
	if (e.as) return `(${A(e.expression)} AS ${Nt(e.as)})`;
	if (e === "*") return "*";
}, xt = (e) => {
	e.filter.notexists ? (O("FILTER NOT EXISTS {"), k("}", ct(e.filter.notexists) + 1)) : e.filter.exists ? (O("FILTER EXISTS {"), k("}", ct(e.filter.exists) + 1)) : k(`FILTER ${A(e.filter)}`, e.location.start.offset);
}, St = (e) => {
	e.forEach((e) => {
		e.graph ? (k(`GRAPH ${j(e.graph)} {`, e.graph.location.start.offset), et(), St(e.triplePattern), tt(), O("}")) : e.triplePattern ? St(e.triplePattern) : e.properties ? Ct(e) : k(`[${Dt(e.subject.blankNodeProperties)}] .`, e.subject.location.start.offset);
	});
}, Ct = (e) => {
	let t = j(e.subject), n, r;
	e.properties.forEach((i) => {
		n ? (k(`${n} ;`, r), n = " ".repeat(t.length) + ` ${j(i.predicate)} ${j(i.objects)}`, r = i.predicate.location ? i.predicate.location.start.offset : i.predicate.value.location.start.offset) : (n = `${t} ${j(i.predicate)} ${j(i.objects)}`, r = e.subject.location.start.offset);
	}), k(`${n} .`, r);
}, wt = (e) => {
	let t = "";
	return e.forEach((n) => {
		t && (t += " "), n.graph ? (t += `GRAPH ${j(n.graph)} { `, t += wt(n.triplePattern), t += " }") : n.triplePattern ? t += wt(n.triplePattern) : (t += Tt(n), (e.length > 1 || n.properties.length > 1) && (t += " ."));
	}), t;
}, Tt = (e) => {
	let t = j(e.subject), n;
	return e.properties.forEach((e) => {
		n ? n += ` ; ${j(e.predicate)} ${j(e.objects)}` : n = `${t} ${j(e.predicate)} ${j(e.objects)}`;
	}), n;
}, Et = (e, t) => {
	if (e.length === 1 && !t) {
		let t = e[0];
		return ` ${j(t.predicate)} ${j(t.objects)}`;
	}
	et();
	let n = "", r = Ze + " ".repeat(2);
	return e.forEach((e) => {
		n ? (n += " ;\n", n += `${r} ${j(e.predicate)} ${j(e.objects, !0)}`) : (n += `\n${r}`, n += ` ${j(e.predicate)} ${j(e.objects, !0)}`);
	}), n += `\n${Ze}`, tt(), n;
}, Dt = (e) => {
	if (e.length === 1) {
		let t = e[0];
		return ` ${j(t.predicate)} ${j(t.objects)} `;
	}
	let t = "", n = Ze + " ".repeat(2);
	return e.forEach((e) => {
		t ? (t += " ;\n", t += `${n}${j(e.predicate)} ${j(e.objects, !0)}`) : (t += `\n${n}`, t += `${j(e.predicate)} ${j(e.objects, !0)}`);
	}), t += `\n${Ze}`, t;
}, Ot = (e) => {
	let t = e.distinct ? "DISTINCT " : "";
	if (e.aggregateType === "count") {
		let n;
		return n = e.expression === "*" ? "*" : A(e.expression), `COUNT(${t}${n})`;
	}
	if (e.aggregateType === "sum") return `sum(${t}${A(e.expression)})`;
	if (e.aggregateType === "min") return `MIN(${t}${A(e.expression)})`;
	if (e.aggregateType === "max") return `MAX(${t}${A(e.expression)})`;
	if (e.aggregateType === "avg") return `AVG(${t}${A(e.expression)})`;
	if (e.aggregateType === "sample") return `SAMPLE(${t}${A(e.expression)})`;
	if (e.aggregateType === "group_concat") {
		let n = "";
		return e.separator && (n = `; SEPARATOR = ${jt(e.separator)}`), `GROUP_CONCAT(${t}${A(e.expression)}${n})`;
	}
}, A = (e) => {
	if (e.functionRef) return Mt(e.functionRef) + "(" + e.args.map(A).join(", ") + ")";
	if (e.exists) return `EXISTS { ${wt(e.exists)} }`;
	if (e.notexists) return `NOT EXISTS { ${wt(e.notexists)} }`;
	switch (e.expressionType) {
		case "atomic": return kt(j(e.value), e.bracketted);
		case "irireforfunction":
			let t = Mt(e.iriref);
			return e.args && (t += "(" + e.args.map(A).join(", ") + ")"), kt(t, e.bracketted);
		case "builtincall":
			let n = "";
			return e.args && (n = e.args.map(j).join(", ")), kt(`${e.builtincall}(${n})`, e.bracketted);
		case "unaryexpression": return kt(e.unaryexpression + A(e.expression), e.bracketted);
		case "aggregate": return Ot(e);
		case "multiplicativeexpression":
			let r = A(e.first);
			return e.rest.forEach((e) => {
				r += " " + e.operator + " " + A(e.expression);
			}), kt(r, e.bracketted);
		case "additiveexpression":
			let i = A(e.op1);
			return e.ops.forEach((e) => {
				i += " " + e.operator + " " + A(e.expression);
			}), kt(i, e.bracketted);
		case "relationalexpression":
			let a = A(e.op1) + " " + e.operator + " ";
			return Array.isArray(e.op2) ? a += "(" + e.op2.map(j).join(", ") + ")" : a += A(e.op2), kt(a, e.bracketted);
		case "aliasedexpression":
			let o = A(e.expression);
			return e.as && (o += ` AS ${Nt(e.as)}`), kt(o, e.bracketted);
		case "conditionaland": return kt(e.operands.map(A).join(" && "), e.bracketted);
		case "conditionalor": return kt(e.operands.map(A).join(" || "), e.bracketted);
		case "regex":
			let s = A(e.text);
			return s += ", " + A(e.pattern), e.flags && (s += ", " + A(e.flags)), `regex(${s})`;
	}
}, kt = (e, t) => t ? `(${e})` : e, At = (e) => {
	if (e.oneVar) O(`VALUES ${j(e.oneVar)} { ${e.data.map(j).join(" ")} }`);
	else if (e.variables) {
		let t = e.variables.map(Nt).join(" ");
		e.variables.length === 1 ? O(`VALUES (${t}) { ${e.data.map((e) => "(" + e.map(j).join(" ") + ")").join(" ")} }`) : (O(`VALUES (${t}) {`), et(), e.data.map((e) => {
			O("(" + e.map(j).join(" ") + ")");
		}), tt(), O("}"));
	}
}, j = (e, t = !1) => {
	if (e === "UNDEF") return e;
	if (Array.isArray(e)) return e.map((e) => j(e, t)).join(", ");
	if (e.varname) return Nt(e);
	if (e.collection) return `( ${e.collection.map((e) => j(e)).join(" ")} )`;
	if (e.hasOwnProperty("literal")) return jt(e);
	if (e.blankNode) return e.blankNode;
	if (e.expressionType) return A(e);
	if (e.blankNodeProperties) return `[${Et(e.blankNodeProperties, t)} ]`;
	let n = "";
	return e.inverse && (n += "^"), (e.pn_prefix || e.pn_local || e.iriref || e.a) && (n += Mt(e)), e.alternative ? n += e.alternative.map((e) => j(e)).join("|") : e.sequence && (n += e.sequence.map((e) => j(e)).join("/")), e.bracketted && (n = `(${n})`), e.modifier && (n += e.modifier), n;
}, jt = (e) => {
	if (e.dataType === "http://www.w3.org/2001/XMLSchema#decimal" || e.dataType === "http://www.w3.org/2001/XMLSchema#double" || e.dataType === "http://www.w3.org/2001/XMLSchema#integer" || e.dataType === "http://www.w3.org/2001/XMLSchema#boolean") return e.literal;
	let t = e.quote + e.literal + e.quote;
	return e.dataType ? t += `^^${Mt(e.dataType)}` : e.lang && (t += "@" + e.lang), t;
}, Mt = (e) => {
	if (e.iriref) return `<${e.iriref}>`;
	if (e.pn_prefix && e.pn_local) return `${e.pn_prefix}:${e.pn_local}`;
	if (e.pn_prefix) return `${e.pn_prefix}:`;
	if (e.pn_local) return `:${e.pn_local}`;
	if (e.a) return "a";
}, Nt = (e) => e.varType === "VAR2" ? "$" + e.varname : "?" + e.varname, Pt = "", Ft;
function It(e, t = 4) {
	Ft = " ".repeat(t);
	let n = "";
	return n += "@prefix : <https://purl.org/sparql-formatter/ontology#> .\n\n", n += "[]\n" + Lt(e) + " .\n", n;
}
function Lt(e) {
	let t = [];
	return zt(), Object.keys(e).forEach((n) => {
		if (n === "type") t.push(Pt + `a :${e[n]}`);
		else if (n === "location" || n === "@context") return;
		else if (typeof e[n] == "object") t.push(Rt(n, e[n]));
		else {
			let r = e[n];
			typeof r == "string" && (r = JSON.stringify(r)), t.push(Pt + `:${n} ${r}`);
		}
	}), Bt(), t.join(" ;\n");
}
function Rt(e, t) {
	if (Array.isArray(t)) {
		let n = t.map((e) => Lt(e) + "\n");
		return Pt + `:${e} [\n` + n.join(Pt + "], [\n") + Pt + "]";
	}
	return Pt + `:${e} [\n` + Lt(t) + "\n" + Pt + "]";
}
var zt = (e = 1) => {
	Pt += Ft.repeat(e);
}, Bt = (e = 1) => {
	Pt = Pt.substr(0, Pt.length - Ft.length * e);
}, Vt = (e, t = "default", n = 2) => {
	switch (t) {
		case "default": return $e(We(e), n);
		case "compact": return $e(Je(e), n);
		case "turtle": return It(We(e), n);
		case "jsonld": return JSON.stringify(We(e), Ht, n);
		default: throw Error(`Unsupported formatting mode: ${t}`);
	}
};
function Ht(e, t) {
	if (e !== "location") return t;
}
var Ut = {
	parseSparql: We,
	parseSparqlAsCompact: Je,
	formatAst: $e,
	format: Vt
};
typeof window < "u" && (window.spfmt = Ut);
//#endregion
//#region lib/countLinkingPredicates.ts
var Wt = (e) => Ut.format(`
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    <${e}> ?lp ?lr .
  }
}
GROUP BY ?lp
`), Gt = (e) => Ut.format(`
SELECT (COUNT(*) AS ?c) ?lp
WHERE {
  GRAPH ?g {
    ?lr ?lp <${e}> .
  }
}
GROUP BY ?lp
`), Kt = (e) => `
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

`, qt = (e) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT *
WHERE {
  GRAPH ?g {
    ?pc0 crm:P01_has_domain <${e}> .
    ?pc0 rdf:type ?pc0_type .
    ?pc0 crm:P03_has_range_literal ?value .
    ?pc0 ?dotOneProperty ?e55 .
    VALUES ?dotOneProperty { crm:P3.1_has_type crm:P14.1_in_the_role_of crm:P16.1_mode_of_use crm:P19.1_mode_of_use crm:P62.1_mode_of_depiction crm:P67.1_has_type crm:P69.1_has_type crm:P102.1_has_type crm:P107.1_kind_of_member crm:P130.1_kind_of_similarity crm:P136.1_in_the_taxonomic_role crm:P137.1_in_the_taxonomic_role crm:P138.1_mode_of_representation crm:P139.1_has_type crm:P144.1_kind_of_member crm:P189.1_has_type }
  }
  GRAPH ?g_types {
    ?e55 rdf:type crm:E55_Type .
    ?e55 crm:P1_is_identified_by ?e55_label .
  }
}`, Jt = (e) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT *
WHERE {
    GRAPH ?g {
        ?e13 crm:P140_assigned_attribute_to <${e}> .
        ?e13 rdf:type crm:E13_Attribute_Assignment .
        ?e13 crm:P141_assigned ?p141 .
        ?e13 crm:P177_assigned_property_of_type ?p177 .
        FILTER(isLiteral(?p141))
    }
    GRAPH ?g_meta {
        ?p177 crm:P1_is_identified_by ?p177_label .
        FILTER(isLiteral(?p177_label))
    }
}`, Yt = (e) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT DISTINCT ?score ?annotation ?verticality ?note_label ?measure_number 
WHERE {
  GRAPH ?g {
    ${Xt(e)}
    ?score crm:P2_has_type <${Le.score}>. #Score type
    ?verticality sherlock:has_document_context ?score.
    ?verticality crm:P2_has_type <${Le.verticality}>. #MEI score offset
    ?note_in_score sherlockmei:contains_beat ?verticality.
    ?note_in_score sherlockmei:measure_number ?measure_number.
    GRAPH ?sherlock_graph {
        ?annotation crm:P140_assigned_attribute_to ?verticality.
        ?annotation crm:P177_assigned_property_of_type <${Le.fondamentaleIdentification}>. #Identification de fondamentale
        ?annotation crm:P141_assigned ?note.
        GRAPH ?sherlock_data_graph {
            ?note crm:P1_is_identified_by ?note_label
        }
    }
  }
}
ORDER BY ?score ?measure_number
`, Xt = (e) => e ? `BIND (<${e}> as ?score).` : "", Zt = () => Ut(`
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
        VALUES ?p { ${C.join(" ")} }
    }
}
`), Qt = (e) => Ut.format(`
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>

SELECT ?resource
WHERE {
    GRAPH ?g {
        ?resource crm:P1_is_identified_by ?resource_business_id_e42 .
        ?resource_business_id_e42 a crm:E42_Identifier .
        ?resource_business_id_e42 crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
        ?resource_business_id_e42 crm:P190_has_symbolic_content "${e}" .
    }
}
`), $t = () => "\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\n\nSELECT ?ontology (COUNT(?concept) AS ?concepts) (COUNT(?property) AS ?properties)\nWHERE {\n GRAPH <http://data-iremus.huma-num.fr/graph/modality-tonality-ontology> {\n    {\n      ?concept rdf:type owl:Class.\n      ?ontology rdf:type owl:Ontology.\n      FILTER(STRSTARTS(STR(?concept), STR(?ontology))).\n    }\n    UNION \n    {\n      ?property rdf:type owl:ObjectProperty.\n      ?ontology rdf:type owl:Ontology.\n      FILTER(STRSTARTS(STR(?property), STR(?ontology))).\n      \n    }\n  }\n}\nGROUP BY ?ontology ?author ?comment\n", en = () => [
	"crm:E35_Title",
	"crm:E41_Appellation",
	"crm:E42_Identifier"
].join(" "), tn = (e, t = !1, n = [], r = te.OUTGOING) => t && n.length == 0 ? "" : Ut.format(an() + (t ? rn(e, n, r) : nn(e))), nn = (e) => `
SELECT *
WHERE {
  GRAPH ?g {
    ${sn(`<${e}>`)}
    UNION
    ${cn(`<${e}>`)}
    UNION
    ${on(`<${e}>`)}
    UNION
    ${ln(`<${e}>`)}
  }
}
`, rn = (e, t, n) => {
	let r = "";
	return t.length > 0 && (r = `VALUES ?lp { ${t.map((e) => `<${e}>`).join(" ")} }`), `
SELECT *
WHERE {
  GRAPH ?g {
    ${r}
    ${n === te.INCOMING ? `?lr ?lp <${e}>` : `<${e}> ?lp ?lr`}
    OPTIONAL {
      GRAPH ?r_g {
        ${sn("?lr")}
        UNION
        ${cn("?lr")}
        UNION
        ${on("?lr")} 
      }
    }
    FILTER (?lp NOT IN (${w}))
  }
}
ORDER BY ?lp ?lr
`;
}, an = () => "\nPREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX iremus-data: <http://data-iremus.huma-num.fr/id/>\nPREFIX iremus-graphs: <http://data-iremus.huma-num.fr/graph/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX sherlock-ns: <http://data-iremus.huma-num.fr/ns/sherlock#>\n", on = (e) => `
{ ######## get types (rdf:type)
  ${e} ?p ?r .
  VALUES ?p { rdf:type }
}
UNION
{ ######## get types (crm:P2_has_type)
 ${e} ?p ?r .
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
`, sn = (e) => `
{ ######## get direct literal label
${e} ?p ?label .
VALUES ?p { ${C.join(" ")} } .
FILTER(isLiteral(?label)) .
}
`, cn = (e) => `
{ ######## get identifiers linked resources
  ${e} ?p ?r .
  VALUES ?p { ${S.join(" ")} }
  GRAPH ?r_types_g {
    ?r rdf:type ?r_type .
    ?r crm:P190_has_symbolic_content ?label .
    VALUES ?r_type { ${en()} }
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
`, ln = (e) => `
{ ######## if the base resource is part of a E32
  GRAPH ?authdoc_g {
    ?authdoc crm:P71_lists ${e} .
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
    ${e} ?p ?authdoc .
    VALUES ?p { skos:inScheme }

  }
  OPTIONAL {
    GRAPH ?authdoc_g {
      ?authdoc ?authdoc_label_p ?authdoc_label .
      VALUES ?authdoc_label_p { dcterms:title skos:prefLabel }
    }
  }
}
`, un = (e, t) => `${fn()}  
  SELECT *
  WHERE {
    ${dn(e, t)}
    GRAPH ?g {
    ${sn("?s")}
    UNION
    ${cn("?s")}
    UNION
    ${on("?s")}
    }
  }`, dn = (e, t) => `
{
  SELECT DISTINCT ?s ?score WHERE 
  {
    # Literal text:query that match an identifier 
    {
      { (?x ?score) text:query ("${e}")}
      GRAPH ?g_x {
        VALUES ?identifier_predicate {${C.join(" ")}} .
        ?s ?identifier_predicate ?x 
      }
    }
    UNION
    # Literal text:query that match a relevant resource
    # Pas de P190 car le sujet d'un P190 n'est pas la ressource en tant que telle.
    {
      ${C.map((t) => `
      {
        (?s ?score) text:query (${t} "${e}")
      }
      `).join(" UNION ")}
    }
  }
  ORDER BY DESC(?score) 
  LIMIT ${t}  
}
`, fn = () => "PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX text: <http://jena.apache.org/text#>\n", pn = (e, t) => Ut.format(`
${re()}

SELECT DISTINCT ?linked_resource (COALESCE(?business_id_literal, "") AS ?business_id)
(CONCAT(
    COALESCE(GROUP_CONCAT(DISTINCT ?literal_label; SEPARATOR = " • "), ""),
    COALESCE(GROUP_CONCAT(DISTINCT ?id_label; SEPARATOR = " • "), ""),
    COALESCE(GROUP_CONCAT(DISTINCT ?title; SEPARATOR = " • "), "")
)  AS ?label) 
WHERE {
  GRAPH ?g {
    <${e}> <${t}> ?linked_resource .

    OPTIONAL {
      ?linked_resource ${C.join("|")} ?literal_label .
      FILTER(isLiteral(?literal_label))
    }
    OPTIONAL {
      ?linked_resource crm:P1_is_identified_by ?id .
      FILTER NOT EXISTS { ?id a crm:E42_Identifier }
      ?id <http://www.cidoc-crm.org/cidoc-crm/P190_has_symbolic_content> ?id_label .
    }
    OPTIONAL {
      ?linked_resource crm:P1_is_identified_by ?e42_business_id .
      ?e42_business_id a crm:E42_Identifier .
      ?e42_business_id crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
      ?e42_business_id crm:P190_has_symbolic_content ?business_id_literal .
    }
    OPTIONAL {
      ?linked_resource crm:P102_has_title ?e35 .
      ?e35 a crm:E35_Title .
      ?e35 crm:P190_has_symbolic_content ?title .
    }
  }
}
GROUP BY ?linked_resource ?business_id_literal ?business_id
ORDER BY ?business_id_literal
`), mn = () => Ut.format("\nPREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>\nPREFIX lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/>\nPREFIX iremus: <http://data-iremus.huma-num.fr/id/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT ?livraison_f2 ?livraison_business_id ?livraison_title_source (COUNT(?article_f2) AS ?livraison_n_articles)\nWHERE {\n  GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant-tei> {\n    ?livraison_f2 a lrmoo:F2_Expression .\n    ?livraison_f2 crm:P2_has_type iremus:901c2bb5-549d-47e9-bd91-7a21d7cbe49f .\n\n    ?livraison_f2 crm:P1_is_identified_by ?livraison_business_id_e42 .\n    ?livraison_business_id_e42 a crm:E42_Identifier .\n    ?livraison_business_id_e42 crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .\n    ?livraison_business_id_e42 crm:P190_has_symbolic_content ?livraison_business_id .\n\n    ?livraison_f2 crm:P102_has_title ?livraison_title_source_e35 .\n    ?livraison_title_source_e35 a crm:E35_Title .\n    ?livraison_title_source_e35 crm:P2_has_type iremus:d7fadc20-3937-4b35-8a19-f090fee5b6c6 .\n    ?livraison_title_source_e35 crm:P190_has_symbolic_content ?livraison_title_source .\n\n    ?livraison_f2 lrmoo:R5_has_component ?article_f2 .\n    ?article_f2 a lrmoo:F2_Expression .\n    ?article_f2 crm:P2_has_type iremus:13f43e00-680a-4a6d-a223-48e8d9bbeaae .\n  }\n}\nGROUP BY ?livraison_f2 ?livraison_business_id ?livraison_title_source\nORDER BY ?livraison_business_id\n"), hn = (e) => Ut.format(`
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT *
WHERE {
  GRAPH <http://data-iremus.huma-num.fr/graph/mercure-galant-tei> {
    VALUES ?livraison_business_id { "${e}" }
    ?livraison a lrmoo:F2_Expression .
    ?livraison crm:P1_is_identified_by ?livraison_business_id_e42 .
    ?livraison_business_id_e42 crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
    ?livraison_business_id_e42 crm:P190_has_symbolic_content ?livraison_business_id .

    ?livraison lrmoo:R5_has_component ?article .
    ?article a lrmoo:F2_Expression .
    ?article crm:P1_is_identified_by ?article_business_id_e42 .
    ?article_business_id_e42 crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
    ?article_business_id_e42 crm:P190_has_symbolic_content ?article_business_id .

    OPTIONAL {
      ?article crm:P1_is_identified_by ?E42_pagination .
      ?E42_pagination a crm:E42_Identifier .
      ?E42_pagination crm:P2_has_type iremus:9704a621-3aa0-4e64-a68a-d956c943d4a6 .
      ?E42_pagination crm:P190_has_symbolic_content ?pagination .
    }

    OPTIONAL {
      ?article crm:P102_has_title ?e35_forge .
      ?e35_forge a crm:E35_Title .
      ?e35_forge crm:P2_has_type iremus:aa97d53f-d397-4222-92ad-ea74d5310f60 .
      ?e35_forge crm:P190_has_symbolic_content ?title_forge .
    }
    OPTIONAL {
      ?article crm:P102_has_title ?e35_paratexte .
      ?e35_paratexte a crm:E35_Title .
      ?e35_paratexte crm:P2_has_type iremus:3e8d9526-4c24-4c3a-b7c1-0dfc8ab74e22 .
      ?e35_paratexte crm:P190_has_symbolic_content ?title_paratexte .
    }
    OPTIONAL {
      ?article crm:P102_has_title ?e35_propre .
      ?e35_propre a crm:E35_Title .
      ?e35_propre crm:P2_has_type iremus:f50565da-e46e-40cc-b7b3-167cd0a52404 .
      ?e35_propre crm:P190_has_symbolic_content ?title_propre .
    }
  }
}
ORDER BY ?article_business_id
`), gn = (e, t) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT ?note_pname (count(?note) AS ?notes) 
WHERE {
  GRAPH ?g {
    ?note sherlock:has_document_context <${e}>.
    ?note crm:P2_has_type <${Le.note}>. #NOTE
    ?note sherlockmei:pname ?note_pname.
    ${t && `VALUES ?note_pname { "${t}" }`}
  }
}
GROUP BY ?note_pname`, _n = (e) => `
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
`, vn = (e) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE { <${e}> crm:P140_assigned_attribute_to ?p140 }`, yn = "\nPREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>\nPREFIX iremus: <http://data-iremus.huma-num.fr/id/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>\n", bn = "SELECT ?project_code (COALESCE(?_project_emoticon, \"\") AS ?project_emoticon) ?project_logo ?project_name ?project_uri (REPLACE(STR(?project_uri), \"^.*/([^/]*)$\", \"$1\") AS ?project_uuid)", xn = "\n?project_uri crm:P1_is_identified_by ?project_name .\nFILTER(isLiteral(?project_name))\n", Sn = "\nOPTIONAL {\n  ?project_uri crm:P1_is_identified_by ?e42_emoticon .\n  ?e42_emoticon a crm:E42_Identifier .\n  ?e42_emoticon crm:P2_has_type iremus:17e3d5f6-36ae-4e90-adc2-1de04eeeacb9 .\n  ?e42_emoticon crm:P190_has_symbolic_content ?_project_emoticon .\n}\n", M = "\n?project_uri crm:P1_is_identified_by ?e42_logo .\n?e42_logo a crm:E42_Identifier .\n?e42_logo crm:P2_has_type iremus:804d8e72-cced-4b78-85d4-78a016e1c153 .\n?e42_logo crm:P190_has_symbolic_content ?project_logo .\n", Cn = "\n?project_uri crm:P1_is_identified_by ?e42_code .\n?e42_code a crm:E42_Identifier .\n?e42_code crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .\n?e42_code crm:P190_has_symbolic_content ?project_code .\n", wn = (e) => Ut.format(`
${yn}
${bn}
WHERE {
  GRAPH ?g1 {
    <${e}> sherlock:has_context_project ?direct_project_uri .
  }
  GRAPH ?g2 {
    ?project_uri crm:P9_consists_of* ?direct_project_uri .
    FILTER NOT EXISTS {
      ?other crm:P9_consists_of ?project_uri .
    }
    ${Cn}
    ${Sn}
    ${M}
    ${xn}
  }
}`), Tn = (e) => Ut.format(`
${yn}
${bn}
WHERE {
  GRAPH ?g {
    BIND ("${e}" as ?project_code)
    ${Cn}
    ${Sn}
    ${M}
    ${xn}
  }
}`), En = (e) => Ut.format(`
${yn}
SELECT *
WHERE {
  GRAPH ?g {
    ?file a crm:E31_Document .
    ?file crm:P70_documents iremus:${e} .
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
`), Dn = (e) => Ut.format(`
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX text: <http://jena.apache.org/text#>

SELECT *
WHERE {
  GRAPH ?g {
    ?E7_project a crm:E7_Activity .
    ?E7_project crm:P2_has_type iremus:58c38fd3-ca35-476a-aa39-9cc815ee2dab .
    ?E7_project crm:P1_is_identified_by ?project_name .
    FILTER(isLITERAL(?project_name))

    ?E7_project crm:P1_is_identified_by ?e42_business_id .
    ?e42_business_id a crm:E42_Identifier .
    ?e42_business_id crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
    ?e42_business_id crm:P190_has_symbolic_content ${e ? "\"" + e + "\"" : "?project_code"} .

    OPTIONAL {
      ?E7_project crm:P1_is_identified_by ?e42_graph_uri .
      ?e42_graph_uri a crm:E42_Identifier .
      ?e42_graph_uri crm:P2_has_type iremus:ca70f2d9-44f1-4137-82e6-882752767d22 .
      ?e42_graph_uri crm:P190_has_symbolic_content ?graph_uri .
    }

    OPTIONAL {
      ?E65_creation crm:P9i_forms_part_of ?E7_project .
      ?E65_creation a crm:E65_Creation .
      ?E65_creation crm:P94_has_created ?collection .
      ?collection a sherlock:Collection .
      ?collection crm:P1_is_identified_by ?collection_name
      FILTER(isLITERAL(?collection_name))
    }
  }
}
`), On = () => `
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
        ?score crm:P2_has_type <${Le.score}> .
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
                ?selection crm:P2_has_type <${Le.selection}> .
                ?selection sherlock:has_document_context ?score .
            }
        }
        UNION {
            GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> {
                ?e13_on_analytical_entity rdf:type crm:E13_Attribute_Assignment .
                ?e13_on_analytical_entity crm:P141_assigned ?analytical_entity .
                ?analytical_entity rdf:type crm:E28_Conceptual_Object .
                ?analytical_entity crm:P2_has_type <${Le.analyticalEntity}> .
                ?e13_on_analytical_entity crm:P140_assigned_attribute_to ?analytical_selection .
                ?analytical_selection sherlock:has_document_context ?score .
            }
        }
    }
}
GROUP BY ?score
`, kn = (e) => `
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
          ?analyticalEntity crm:P2_has_type <${Le.analyticalEntity}>.
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
        ?selection crm:P2_has_type <${Le.selection}>.
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
`, An = (e) => `
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

LIMIT ${e}`;
//#endregion
//#region lib/urlFragment.ts
function jn(e) {
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
    ?e42 crm:P190_has_symbolic_content "${e}" .
  }
}
`;
}
//#endregion
//#region lib/wemi.ts
var Mn = (e = "", t = "", n = "", r = "") => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

SELECT *
WHERE {
  GRAPH ?g {
    ${e ? `BIND (<${e}> as ?f1)` : ""}
    ${t ? `BIND (<${t}> as ?f2)` : ""}
    ${n ? `BIND (<${n}> as ?f3)` : ""}
    ${r ? `BIND (<${r}> as ?f5)` : ""}
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
`, Nn = (e) => `https://yasgui.triply.cc/#query=${encodeURIComponent(e)}&endpoint=https%3A%2F%2Fdata-iremus.huma-num.fr%2Fsparql%2F&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=gchart`;
//#endregion
export { ce as ANALYTICAL_ENTITY, fe as ANALYTICAL_PROJECT, de as ANNOTATION, pe as DRAFT_PROJECT, S as IDENTIFIERS_PREDICATES, ee as IDENTITY_PREDICATES, w as IDENTITY_PREDICATES_PREFIXED, C as LL_PREDICATES, te as LinkedResourcesDirectionEnum, ie as NOTE, oe as POSITIONNED_NOTE, ne as PREFIXES, le as SCORE, ae as SELECTION, ue as SOFTWARE, se as VERTICALITY, ln as authorityDocument, Re as contributions, Be as contributors, Gt as countIncomingPredicates, Wt as countOutgoingPredicates, Kt as documentsByIndex, Jt as e13WithLiteralP141, Yt as fondamentales, me as getAnalyticalProject, he as getAnnotations, ze as getContributor, qt as getDotOneProperties, vn as getP140, Tn as getProjectByCode, wn as getProjectByResourceUri, En as getProjectFiles, Qt as getResourceByBusinessId, jn as getResourceByUrlFragment, Zt as getResources, $t as historicalModelsOntologies, cn as identifiersResources, sn as identitiersLiterals, un as identitiesByTextQuery, tn as identity, pn as listLinkedResources, re as makePrefixesQueryPart, Nn as makeYasguiUri, hn as mercure_galant_livraison, mn as mercure_galant_livraisons, gn as noteOccurences, _n as p127, Dn as projectAndCollections, On as scores, kn as selections, An as tonalitiesContributions, on as types, Mn as wemi };

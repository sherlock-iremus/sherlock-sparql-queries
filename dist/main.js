const _c = "http://data-iremus.huma-num.fr/id/d2a536eb-4a95-484f-b13d-f597ac8ea2fd", gc = "http://data-iremus.huma-num.fr/id/9d0388cb-a178-46b2-b047-b5a98f7bdf0b", bc = "http://data-iremus.huma-num.fr/id/689e148d-a97d-45b4-898d-c395a24884df", vc = "http://data-iremus.huma-num.fr/id/90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86", Ec = "http://data-iremus.huma-num.fr/id/6d72746a-9f28-4739-8786-c6415d53c56d", Oc = "http://data-iremus.huma-num.fr/id/bf9dce29-8123-4e8e-b24d-0c7f134bbc8e", wc = "http://data-iremus.huma-num.fr/id/29b00e39-75da-4945-b6c4-a0ca00f96f68", Sc = "http://data-iremus.huma-num.fr/id/82dbd157-20df-422c-88db-28d6075d99a1", Ii = "http://data-iremus.huma-num.fr/id/21816195-6708-4bbd-a758-ee354bb84900", Ci = "http://data-iremus.huma-num.fr/id/cabe46bf-23d4-4392-aa20-b3eb21ad7dfd", Rc = (e) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE {
    VALUES ?project { <${e}> }
    VALUES ?draft { <${Ci}> }
    ?project crm:P2_has_type <${Ii}>.
    ?project crm:P1_is_identified_by ?label.
    ?project crm:P14_carried_out_by ?contributor.
    OPTIONAL { ?project sherlock:has_privacy_type ?draft }.
}
LIMIT 1`, Pc = (e, t) => `
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
var ki = Object.defineProperty, ji = (e, t, n) => t in e ? ki(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ae = (e, t, n) => (ji(e, typeof t != "symbol" ? t + "" : t, n), n);
function Di(e, t) {
  for (var n = 0; n < t.length; n++) {
    const o = t[n];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const i in o)
        if (i !== "default" && !(i in e)) {
          const f = Object.getOwnPropertyDescriptor(o, i);
          f && Object.defineProperty(e, i, f.get ? f : {
            enumerable: !0,
            get: () => o[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const xi = "http://purl.org/ontology/bibo/", $i = "http://www.cidoc-crm.org/lrmoo/", Li = "http://www.cidoc-crm.org/cidoc-crm/", qi = "http://www.ics.forth.gr/isl/CRMdig/", Fi = "http://purl.org/dc/elements/1.1/", Mi = "http://purl.org/dc/terms/", Vi = "http://xmlns.com/foaf/0.1/", zi = "http://data-iremus.huma-num.fr/ns/hemef#", _e = "http://data-iremus.huma-num.fr/id/", Ui = "http://data-iremus.huma-num.fr/id/", Qi = "http://data-iremus.huma-num.fr/ns/", Hi = "http://data-iremus.huma-num.fr/graph/", Gi = "http://data-iremus.huma-num.fr/ns/musrad30#", Ki = "http://www.w3.org/2002/07/owl#", Bi = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", Xi = "http://www.w3.org/2000/01/rdf-schema#", Wi = "http://schema.org/", Yi = "http://www.w3.org/2004/02/skos/core#", Ji = {
  [Li]: "crm",
  [qi]: "crmdig",
  [xi]: "bibo",
  [Fi]: "dc",
  [Mi]: "dcterms",
  [Vi]: "foaf",
  [zi]: "hemef",
  [Ui]: "",
  [Qi]: "",
  [Gi]: "musrad30",
  [$i]: "lrmoo",
  [Ki]: "owl",
  [Bi]: "rdf",
  [Xi]: "rdfs",
  [Wi]: "schema",
  [Yi]: "skos",
  [Hi]: ""
};
Object.entries(Ji).sort(
  (e, t) => e[0].length < t[0].length ? 1 : -1
);
class Zi {
  constructor(t = "") {
    ae(this, "_pog"), ae(this, "_uri"), this._uri = t, this._pog = /* @__PURE__ */ new Map();
  }
  getValues(t) {
    return this._pog.get(t);
  }
  addPOG(t, n) {
    var o;
    this._pog.has(t) ? (o = this._pog.get(t)) == null || o.push(n) : this._pog.set(t, [n]);
  }
  get uri() {
    return this._uri;
  }
  get pog() {
    return this._pog;
  }
}
const Wt = class {
  constructor(t) {
    ae(this, "_classesRegistry", /* @__PURE__ */ new Map()), ae(this, "_name"), ae(this, "_classes"), ae(this, "_properties"), ae(this, "_propertiesRegistry", /* @__PURE__ */ new Map()), this._name = t, this._classes = [], this._properties = [];
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
    this._classes = this._classes.sort((t, n) => t.intCodeForSorting - n.intCodeForSorting), this._properties = this._properties.sort((t, n) => t.intCodeForSorting - n.intCodeForSorting);
  }
};
ae(Wt, "void", new Wt(""));
let Gn = Wt;
class lr extends Zi {
  constructor(t, n, o) {
    super(t), ae(this, "_comment"), ae(this, "_intCodeForSorting"), ae(this, "_label"), ae(this, "_name"), ae(this, "_ontology"), this._comment = /* @__PURE__ */ new Map(), this._intCodeForSorting = -1, this._label = /* @__PURE__ */ new Map(), this._name = n, this._ontology = o;
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
ae(lr, "label", "");
const Yt = class extends lr {
  constructor(t, n, o) {
    super(t, n, o), ae(this, "_subClassOf"), this._subClassOf = new Array();
  }
  addSubClassOf(t) {
    this._subClassOf.push(t);
  }
};
ae(Yt, "void", new Yt("", "", Gn.void));
let cn = Yt;
const un = class Kn extends lr {
  constructor(t, n, o) {
    super(t, n, o), ae(this, "_domain", cn.void), ae(this, "_inverseOf", Kn.void), ae(this, "_range", cn.void), ae(this, "_subPropertyOf"), this._subPropertyOf = new Array();
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
ae(un, "void", new un("", "", Gn.void));
const de = {
  selection: _e + "9d0388cb-a178-46b2-b047-b5a98f7bdf0b",
  analyticalEntity: _e + "6d72746a-9f28-4739-8786-c6415d53c56d",
  score: _e + "bf9dce29-8123-4e8e-b24d-0c7f134bbc8e",
  software: _e + "29b00e39-75da-4945-b6c4-a0ca00f96f68",
  hexColorCode: _e + "5f1bb74f-6ea0-4073-8b68-086f98454f1c",
  emoji: _e + "04242f64-fbb3-4b5b-bb2e-3ddd59eeea18",
  orcidId: _e + "d7ef2583-ff31-4913-9ed3-bc3a1c664b21",
  note: _e + "d2a536eb-4a95-484f-b13d-f597ac8ea2fd",
  verticality: _e + "90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86",
  fondamentaleIdentification: _e + "003559fc-f033-4fc3-9c05-0d5f283123ed",
  orcidGeneratedName: _e + "73ea8d74-3526-4f6a-8830-dd369795650d"
};
function Jt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Vt = () => Math.random().toString(36).substring(7).split("").join("."), ea = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Vt()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Vt()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Vt()}`
}, Qe = ea;
function Ee(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ta(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (oa(e))
    return "date";
  if (na(e))
    return "error";
  const n = ra(e);
  switch (n) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return n;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ra(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function na(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function oa(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function ia(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = ta(e)), t;
}
function ln(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function aa(e, t, n, o) {
  const i = Object.keys(t), f = n && n.type === Qe.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Ee(e))
    return `The ${f} has unexpected type of "${ia(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const _ = Object.keys(e).filter((P) => !t.hasOwnProperty(P) && !o[P]);
  if (_.forEach((P) => {
    o[P] = !0;
  }), !(n && n.type === Qe.REPLACE) && _.length > 0)
    return `Unexpected ${_.length > 1 ? "keys" : "key"} "${_.join('", "')}" found in ${f}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function sa(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Qe.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Jt(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: Qe.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Jt(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${Qe.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function ca(e) {
  const t = Object.keys(e), n = {};
  for (let _ = 0; _ < t.length; _++) {
    const P = t[_];
    process.env.NODE_ENV !== "production" && typeof e[P] > "u" && ln(`No reducer provided for key "${P}"`), typeof e[P] == "function" && (n[P] = e[P]);
  }
  const o = Object.keys(n);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let f;
  try {
    sa(n);
  } catch (_) {
    f = _;
  }
  return function(_ = {}, P) {
    if (f)
      throw f;
    if (process.env.NODE_ENV !== "production") {
      const w = aa(_, n, P, i);
      w && ln(w);
    }
    let g = !1;
    const T = {};
    for (let w = 0; w < o.length; w++) {
      const d = o[w], c = n[d], p = _[d], h = c(p, P);
      if (typeof h > "u") {
        const O = P && P.type;
        throw new Error(process.env.NODE_ENV === "production" ? Jt(14) : `When called with an action of type ${O ? `"${String(O)}"` : "(unknown type)"}, the slice reducer for key "${d}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      T[d] = h, g = g || h !== p;
    }
    return g = g || o.length !== Object.keys(_).length, g ? T : _;
  };
}
function Bn(e) {
  return Ee(e) && "type" in e && typeof e.type == "string";
}
var dr = Symbol.for("immer-nothing"), He = Symbol.for("immer-draftable"), ye = Symbol.for("immer-state"), Xn = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function ue(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Xn[e], o = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${o}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Ne = Object.getPrototypeOf;
function ge(e) {
  return !!e && !!e[ye];
}
function be(e) {
  var t;
  return e ? Wn(e) || Array.isArray(e) || !!e[He] || !!((t = e.constructor) != null && t[He]) || tt(e) || rt(e) : !1;
}
var ua = Object.prototype.constructor.toString();
function Wn(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Ne(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === ua;
}
function la(e) {
  return ge(e) || ue(15, e), e[ye].base_;
}
function Be(e, t) {
  Ae(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, o) => t(o, n, e));
}
function Ae(e) {
  const t = e[ye];
  return t ? t.type_ : Array.isArray(e) ? 1 : tt(e) ? 2 : rt(e) ? 3 : 0;
}
function Xe(e, t) {
  return Ae(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function zt(e, t) {
  return Ae(e) === 2 ? e.get(t) : e[t];
}
function Yn(e, t, n) {
  const o = Ae(e);
  o === 2 ? e.set(t, n) : o === 3 ? e.add(n) : e[t] = n;
}
function da(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function tt(e) {
  return e instanceof Map;
}
function rt(e) {
  return e instanceof Set;
}
function Pe(e) {
  return e.copy_ || e.base_;
}
function Zt(e, t) {
  if (tt(e))
    return new Map(e);
  if (rt(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Wn(e))
    return Ne(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[ye];
  let o = Reflect.ownKeys(n);
  for (let i = 0; i < o.length; i++) {
    const f = o[i], _ = n[f];
    _.writable === !1 && (_.writable = !0, _.configurable = !0), (_.get || _.set) && (n[f] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: _.enumerable,
      value: e[f]
    });
  }
  return Object.create(Ne(e), n);
}
function fr(e, t = !1) {
  return Rt(e) || ge(e) || !be(e) || (Ae(e) > 1 && (e.set = e.add = e.clear = e.delete = fa), Object.freeze(e), t && Object.entries(e).forEach(([n, o]) => fr(o, !0))), e;
}
function fa() {
  ue(2);
}
function Rt(e) {
  return Object.isFrozen(e);
}
var er = {};
function Ie(e) {
  const t = er[e];
  return t || ue(0, e), t;
}
function pa(e, t) {
  er[e] || (er[e] = t);
}
var We;
function Jn() {
  return We;
}
function ha(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function dn(e, t) {
  t && (Ie("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function tr(e) {
  rr(e), e.drafts_.forEach(ya), e.drafts_ = null;
}
function rr(e) {
  e === We && (We = e.parent_);
}
function fn(e) {
  return We = ha(We, e);
}
function ya(e) {
  const t = e[ye];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function pn(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[ye].modified_ && (tr(t), ue(4)), be(e) && (e = wt(t, e), t.parent_ || St(t, e)), t.patches_ && Ie("Patches").generateReplacementPatches_(
    n[ye].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = wt(t, n, []), tr(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== dr ? e : void 0;
}
function wt(e, t, n) {
  if (Rt(t))
    return t;
  const o = t[ye];
  if (!o)
    return Be(
      t,
      (i, f) => hn(e, o, t, i, f, n)
    ), t;
  if (o.scope_ !== e)
    return t;
  if (!o.modified_)
    return St(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const i = o.copy_;
    let f = i, _ = !1;
    o.type_ === 3 && (f = new Set(i), i.clear(), _ = !0), Be(
      f,
      (P, g) => hn(e, o, i, P, g, n, _)
    ), St(e, i, !1), n && e.patches_ && Ie("Patches").generatePatches_(
      o,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function hn(e, t, n, o, i, f, _) {
  if (process.env.NODE_ENV !== "production" && i === n && ue(5), ge(i)) {
    const P = f && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Xe(t.assigned_, o) ? f.concat(o) : void 0, g = wt(e, i, P);
    if (Yn(n, o, g), ge(g))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    _ && n.add(i);
  if (be(i) && !Rt(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    wt(e, i), (!t || !t.scope_.parent_) && typeof o != "symbol" && Object.prototype.propertyIsEnumerable.call(n, o) && St(e, i);
  }
}
function St(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && fr(t, n);
}
function ma(e, t) {
  const n = Array.isArray(e), o = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Jn(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = o, f = pr;
  n && (i = [o], f = Ye);
  const { revoke: _, proxy: P } = Proxy.revocable(i, f);
  return o.draft_ = P, o.revoke_ = _, P;
}
var pr = {
  get(e, t) {
    if (t === ye)
      return e;
    const n = Pe(e);
    if (!Xe(n, t))
      return _a(e, n, t);
    const o = n[t];
    return e.finalized_ || !be(o) ? o : o === Ut(e.base_, t) ? (Qt(e), e.copy_[t] = or(o, e)) : o;
  },
  has(e, t) {
    return t in Pe(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Pe(e));
  },
  set(e, t, n) {
    const o = Zn(Pe(e), t);
    if (o != null && o.set)
      return o.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const i = Ut(Pe(e), t), f = i == null ? void 0 : i[ye];
      if (f && f.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (da(n, i) && (n !== void 0 || Xe(e.base_, t)))
        return !0;
      Qt(e), nr(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ut(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Qt(e), nr(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = Pe(e), o = Reflect.getOwnPropertyDescriptor(n, t);
    return o && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: o.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    ue(11);
  },
  getPrototypeOf(e) {
    return Ne(e.base_);
  },
  setPrototypeOf() {
    ue(12);
  }
}, Ye = {};
Be(pr, (e, t) => {
  Ye[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Ye.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && ue(13), Ye.set.call(this, e, t, void 0);
};
Ye.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && ue(14), pr.set.call(this, e[0], t, n, e[0]);
};
function Ut(e, t) {
  const n = e[ye];
  return (n ? Pe(n) : e)[t];
}
function _a(e, t, n) {
  var o;
  const i = Zn(t, n);
  return i ? "value" in i ? i.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = i.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Zn(e, t) {
  if (!(t in e))
    return;
  let n = Ne(e);
  for (; n; ) {
    const o = Object.getOwnPropertyDescriptor(n, t);
    if (o)
      return o;
    n = Ne(n);
  }
}
function nr(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && nr(e.parent_));
}
function Qt(e) {
  e.copy_ || (e.copy_ = Zt(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var ga = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, o) => {
      if (typeof t == "function" && typeof n != "function") {
        const f = n;
        n = t;
        const _ = this;
        return function(P = f, ...g) {
          return _.produce(P, (T) => n.call(this, T, ...g));
        };
      }
      typeof n != "function" && ue(6), o !== void 0 && typeof o != "function" && ue(7);
      let i;
      if (be(t)) {
        const f = fn(this), _ = or(t, void 0);
        let P = !0;
        try {
          i = n(_), P = !1;
        } finally {
          P ? tr(f) : rr(f);
        }
        return dn(f, o), pn(i, f);
      } else if (!t || typeof t != "object") {
        if (i = n(t), i === void 0 && (i = t), i === dr && (i = void 0), this.autoFreeze_ && fr(i, !0), o) {
          const f = [], _ = [];
          Ie("Patches").generateReplacementPatches_(t, i, f, _), o(f, _);
        }
        return i;
      } else
        ue(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (f, ..._) => this.produceWithPatches(f, (P) => t(P, ..._));
      let o, i;
      return [this.produce(t, n, (f, _) => {
        o = f, i = _;
      }), o, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    be(e) || ue(8), ge(e) && (e = eo(e));
    const t = fn(this), n = or(e, void 0);
    return n[ye].isManual_ = !0, rr(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[ye];
    (!n || !n.isManual_) && ue(9);
    const { scope_: o } = n;
    return dn(o, t), pn(void 0, o);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const o = Ie("Patches").applyPatches_;
    return ge(e) ? o(e, t) : this.produce(
      e,
      (i) => o(i, t)
    );
  }
};
function or(e, t) {
  const n = tt(e) ? Ie("MapSet").proxyMap_(e, t) : rt(e) ? Ie("MapSet").proxySet_(e, t) : ma(e, t);
  return (t ? t.scope_ : Jn()).drafts_.push(n), n;
}
function eo(e) {
  return ge(e) || ue(10, e), to(e);
}
function to(e) {
  if (!be(e) || Rt(e))
    return e;
  const t = e[ye];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Zt(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Zt(e, !0);
  return Be(n, (o, i) => {
    Yn(n, o, to(i));
  }), t && (t.finalized_ = !1), n;
}
function ba() {
  process.env.NODE_ENV !== "production" && Xn.push(
    'Sets cannot have "replace" patches.',
    function(d) {
      return "Unsupported patch operation: " + d;
    },
    function(d) {
      return "Cannot apply patch, path doesn't resolve: " + d;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const e = "replace", t = "add", n = "remove";
  function o(d, c, p, h) {
    switch (d.type_) {
      case 0:
      case 2:
        return f(
          d,
          c,
          p,
          h
        );
      case 1:
        return i(d, c, p, h);
      case 3:
        return _(
          d,
          c,
          p,
          h
        );
    }
  }
  function i(d, c, p, h) {
    let { base_: O, assigned_: E } = d, b = d.copy_;
    b.length < O.length && ([O, b] = [b, O], [p, h] = [h, p]);
    for (let s = 0; s < O.length; s++)
      if (E[s] && b[s] !== O[s]) {
        const l = c.concat([s]);
        p.push({
          op: e,
          path: l,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: w(b[s])
        }), h.push({
          op: e,
          path: l,
          value: w(O[s])
        });
      }
    for (let s = O.length; s < b.length; s++) {
      const l = c.concat([s]);
      p.push({
        op: t,
        path: l,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: w(b[s])
      });
    }
    for (let s = b.length - 1; O.length <= s; --s) {
      const l = c.concat([s]);
      h.push({
        op: n,
        path: l
      });
    }
  }
  function f(d, c, p, h) {
    const { base_: O, copy_: E } = d;
    Be(d.assigned_, (b, s) => {
      const l = zt(O, b), u = zt(E, b), y = s ? Xe(O, b) ? e : t : n;
      if (l === u && y === e)
        return;
      const v = c.concat(b);
      p.push(y === n ? { op: y, path: v } : { op: y, path: v, value: u }), h.push(
        y === t ? { op: n, path: v } : y === n ? { op: t, path: v, value: w(l) } : { op: e, path: v, value: w(l) }
      );
    });
  }
  function _(d, c, p, h) {
    let { base_: O, copy_: E } = d, b = 0;
    O.forEach((s) => {
      if (!E.has(s)) {
        const l = c.concat([b]);
        p.push({
          op: n,
          path: l,
          value: s
        }), h.unshift({
          op: t,
          path: l,
          value: s
        });
      }
      b++;
    }), b = 0, E.forEach((s) => {
      if (!O.has(s)) {
        const l = c.concat([b]);
        p.push({
          op: t,
          path: l,
          value: s
        }), h.unshift({
          op: n,
          path: l,
          value: s
        });
      }
      b++;
    });
  }
  function P(d, c, p, h) {
    p.push({
      op: e,
      path: [],
      value: c === dr ? void 0 : c
    }), h.push({
      op: e,
      path: [],
      value: d
    });
  }
  function g(d, c) {
    return c.forEach((p) => {
      const { path: h, op: O } = p;
      let E = d;
      for (let u = 0; u < h.length - 1; u++) {
        const y = Ae(E);
        let v = h[u];
        typeof v != "string" && typeof v != "number" && (v = "" + v), (y === 0 || y === 1) && (v === "__proto__" || v === "constructor") && ue(19), typeof E == "function" && v === "prototype" && ue(19), E = zt(E, v), typeof E != "object" && ue(18, h.join("/"));
      }
      const b = Ae(E), s = T(p.value), l = h[h.length - 1];
      switch (O) {
        case e:
          switch (b) {
            case 2:
              return E.set(l, s);
            case 3:
              ue(16);
            default:
              return E[l] = s;
          }
        case t:
          switch (b) {
            case 1:
              return l === "-" ? E.push(s) : E.splice(l, 0, s);
            case 2:
              return E.set(l, s);
            case 3:
              return E.add(s);
            default:
              return E[l] = s;
          }
        case n:
          switch (b) {
            case 1:
              return E.splice(l, 1);
            case 2:
              return E.delete(l);
            case 3:
              return E.delete(p.value);
            default:
              return delete E[l];
          }
        default:
          ue(17, O);
      }
    }), d;
  }
  function T(d) {
    if (!be(d))
      return d;
    if (Array.isArray(d))
      return d.map(T);
    if (tt(d))
      return new Map(
        Array.from(d.entries()).map(([p, h]) => [p, T(h)])
      );
    if (rt(d))
      return new Set(Array.from(d).map(T));
    const c = Object.create(Ne(d));
    for (const p in d)
      c[p] = T(d[p]);
    return Xe(d, He) && (c[He] = d[He]), c;
  }
  function w(d) {
    return ge(d) ? T(d) : d;
  }
  pa("Patches", {
    applyPatches_: g,
    generatePatches_: o,
    generateReplacementPatches_: P
  });
}
var me = new ga(), nt = me.produce, ro = me.produceWithPatches.bind(
  me
);
me.setAutoFreeze.bind(me);
me.setUseStrictShallowCopy.bind(me);
var yn = me.applyPatches.bind(me);
me.createDraft.bind(me);
me.finishDraft.bind(me);
var va = (e, t, n) => {
  if (t.length === 1 && t[0] === n) {
    let o = !1;
    try {
      const i = {};
      e(i) === i && (o = !0);
    } catch {
    }
    if (o) {
      let i;
      try {
        throw new Error();
      } catch (f) {
        ({ stack: i } = f);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: i }
      );
    }
  }
}, Ea = (e, t, n) => {
  const { memoize: o, memoizeOptions: i } = t, { inputSelectorResults: f, inputSelectorResultsCopy: _ } = e, P = o(() => ({}), ...i);
  if (P.apply(null, f) !== P.apply(null, _)) {
    let g;
    try {
      throw new Error();
    } catch (T) {
      ({ stack: g } = T);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: n,
        firstInputs: f,
        secondInputs: _,
        stack: g
      }
    );
  }
}, Oa = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function wa(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Sa(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function Ra(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (o) => typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var mn = (e) => Array.isArray(e) ? e : [e];
function Pa(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Ra(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function _n(e, t) {
  const n = [], { length: o } = e;
  for (let i = 0; i < o; i++)
    n.push(e[i].apply(null, t));
  return n;
}
var Ta = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: o } = {
    ...Oa,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: va
    },
    inputStabilityCheck: {
      shouldRun: o === "always" || o === "once" && e,
      run: Ea
    }
  };
}, Na = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Aa = typeof WeakRef < "u" ? WeakRef : Na, Ia = 0, gn = 1;
function mt() {
  return {
    s: Ia,
    v: void 0,
    o: null,
    p: null
  };
}
function Je(e, t = {}) {
  let n = mt();
  const { resultEqualityCheck: o } = t;
  let i, f = 0;
  function _() {
    var P;
    let g = n;
    const { length: T } = arguments;
    for (let c = 0, p = T; c < p; c++) {
      const h = arguments[c];
      if (typeof h == "function" || typeof h == "object" && h !== null) {
        let O = g.o;
        O === null && (g.o = O = /* @__PURE__ */ new WeakMap());
        const E = O.get(h);
        E === void 0 ? (g = mt(), O.set(h, g)) : g = E;
      } else {
        let O = g.p;
        O === null && (g.p = O = /* @__PURE__ */ new Map());
        const E = O.get(h);
        E === void 0 ? (g = mt(), O.set(h, g)) : g = E;
      }
    }
    const w = g;
    let d;
    if (g.s === gn ? d = g.v : (d = e.apply(null, arguments), f++), w.s = gn, o) {
      const c = ((P = i == null ? void 0 : i.deref) == null ? void 0 : P.call(i)) ?? i;
      c != null && o(c, d) && (d = c, f !== 0 && f--), i = typeof d == "object" && d !== null || typeof d == "function" ? new Aa(d) : d;
    }
    return w.v = d, d;
  }
  return _.clearCache = () => {
    n = mt(), _.resetResultsCount();
  }, _.resultsCount = () => f, _.resetResultsCount = () => {
    f = 0;
  }, _;
}
function no(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, o = (...i) => {
    let f = 0, _ = 0, P, g = {}, T = i.pop();
    typeof T == "object" && (g = T, T = i.pop()), wa(
      T,
      `createSelector expects an output function after the inputs, but received: [${typeof T}]`
    );
    const w = {
      ...n,
      ...g
    }, {
      memoize: d,
      memoizeOptions: c = [],
      argsMemoize: p = Je,
      argsMemoizeOptions: h = [],
      devModeChecks: O = {}
    } = w, E = mn(c), b = mn(h), s = Pa(i), l = d(function() {
      return f++, T.apply(
        null,
        arguments
      );
    }, ...E);
    let u = !0;
    const y = p(function() {
      _++;
      const v = _n(
        s,
        arguments
      );
      if (P = l.apply(null, v), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: S, inputStabilityCheck: A } = Ta(u, O);
        if (S.shouldRun && S.run(
          T,
          v,
          P
        ), A.shouldRun) {
          const D = _n(
            s,
            arguments
          );
          A.run(
            { inputSelectorResults: v, inputSelectorResultsCopy: D },
            { memoize: d, memoizeOptions: E },
            arguments
          );
        }
        u && (u = !1);
      }
      return P;
    }, ...b);
    return Object.assign(y, {
      resultFunc: T,
      memoizedResultFunc: l,
      dependencies: s,
      dependencyRecomputations: () => _,
      resetDependencyRecomputations: () => {
        _ = 0;
      },
      lastResult: () => P,
      recomputations: () => f,
      resetRecomputations: () => {
        f = 0;
      },
      memoize: d,
      argsMemoize: p
    });
  };
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var hr = /* @__PURE__ */ no(Je), Ca = Object.assign(
  (e, t = hr) => {
    Sa(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), o = n.map(
      (i) => e[i]
    );
    return t(
      o,
      (...i) => i.reduce((f, _, P) => (f[n[P]] = _, f), {})
    );
  },
  { withTypes: () => Ca }
), ka = (...e) => {
  const t = no(...e), n = Object.assign((...o) => {
    const i = t(...o), f = (_, ...P) => i(ge(_) ? eo(_) : _, ...P);
    return Object.assign(f, i), f;
  }, {
    withTypes: () => n
  });
  return n;
};
ka(Je);
var ja = (e) => e && typeof e.match == "function";
function he(e, t) {
  function n(...o) {
    if (t) {
      let i = t(...o);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? J(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: o[0]
    };
  }
  return n.toString = () => `${e}`, n.type = e, n.match = (o) => Bn(o) && o.type === e, n;
}
function bn(e) {
  return be(e) ? nt(e, () => {
  }) : e;
}
function vn(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && (i = n.update(i, t, e), e.set(t, i)), i;
  }
  if (!n.insert)
    throw new Error(process.env.NODE_ENV === "production" ? J(10) : "No insert provided for key not already in map");
  const o = n.insert(t, e);
  return e.set(t, o), o;
}
var Ue = "RTK_autoBatch", Ve = () => (e) => ({
  payload: e,
  meta: {
    [Ue]: !0
  }
});
process.env.NODE_ENV;
function oo(e) {
  const t = {}, n = [];
  let o;
  const i = {
    addCase(f, _) {
      if (process.env.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? J(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (o)
          throw new Error(process.env.NODE_ENV === "production" ? J(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const P = typeof f == "string" ? f : f.type;
      if (!P)
        throw new Error(process.env.NODE_ENV === "production" ? J(28) : "`builder.addCase` cannot be called with an empty action type");
      if (P in t)
        throw new Error(process.env.NODE_ENV === "production" ? J(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${P}'`);
      return t[P] = _, i;
    },
    addMatcher(f, _) {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error(process.env.NODE_ENV === "production" ? J(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: f,
        reducer: _
      }), i;
    },
    addDefaultCase(f) {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error(process.env.NODE_ENV === "production" ? J(31) : "`builder.addDefaultCase` can only be called once");
      return o = f, i;
    }
  };
  return e(i), [t, n, o];
}
function Da(e) {
  return typeof e == "function";
}
function xa(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? J(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, o, i] = oo(t), f;
  if (Da(e))
    f = () => bn(e());
  else {
    const P = bn(e);
    f = () => P;
  }
  function _(P = f(), g) {
    let T = [n[g.type], ...o.filter(({
      matcher: w
    }) => w(g)).map(({
      reducer: w
    }) => w)];
    return T.filter((w) => !!w).length === 0 && (T = [i]), T.reduce((w, d) => {
      if (d)
        if (ge(w)) {
          const c = d(w, g);
          return c === void 0 ? w : c;
        } else {
          if (be(w))
            return nt(w, (c) => d(c, g));
          {
            const c = d(w, g);
            if (c === void 0) {
              if (w === null)
                return w;
              throw new Error(process.env.NODE_ENV === "production" ? J(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return c;
          }
        }
      return w;
    }, P);
  }
  return _.getInitialState = f, _;
}
var $a = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", yr = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += $a[Math.random() * 64 | 0];
  return t;
}, io = (e, t) => ja(e) ? e.match(t) : e(t);
function Se(...e) {
  return (t) => e.some((n) => io(n, t));
}
function Ge(...e) {
  return (t) => e.every((n) => io(n, t));
}
function Pt(e, t) {
  if (!e || !e.meta)
    return !1;
  const n = typeof e.meta.requestId == "string", o = t.indexOf(e.meta.requestStatus) > -1;
  return n && o;
}
function ot(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function mr(...e) {
  return e.length === 0 ? (t) => Pt(t, ["pending"]) : ot(e) ? (t) => {
    const n = e.map((o) => o.pending);
    return Se(...n)(t);
  } : mr()(e[0]);
}
function Le(...e) {
  return e.length === 0 ? (t) => Pt(t, ["rejected"]) : ot(e) ? (t) => {
    const n = e.map((o) => o.rejected);
    return Se(...n)(t);
  } : Le()(e[0]);
}
function Tt(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0 ? (n) => Ge(Le(...e), t)(n) : ot(e) ? (n) => Ge(Le(...e), t)(n) : Tt()(e[0]);
}
function Re(...e) {
  return e.length === 0 ? (t) => Pt(t, ["fulfilled"]) : ot(e) ? (t) => {
    const n = e.map((o) => o.fulfilled);
    return Se(...n)(t);
  } : Re()(e[0]);
}
function ir(...e) {
  return e.length === 0 ? (t) => Pt(t, ["pending", "fulfilled", "rejected"]) : ot(e) ? (t) => {
    const n = [];
    for (const o of e)
      n.push(o.pending, o.rejected, o.fulfilled);
    return Se(...n)(t);
  } : ir()(e[0]);
}
var La = ["name", "message", "stack", "code"], Ht = class {
  constructor(e, t) {
    ae(this, "_type"), this.payload = e, this.meta = t;
  }
}, En = class {
  constructor(e, t) {
    ae(this, "_type"), this.payload = e, this.meta = t;
  }
}, qa = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of La)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, On = /* @__PURE__ */ (() => {
  function e(t, n, o) {
    const i = he(t + "/fulfilled", (g, T, w, d) => ({
      payload: g,
      meta: {
        ...d || {},
        arg: w,
        requestId: T,
        requestStatus: "fulfilled"
      }
    })), f = he(t + "/pending", (g, T, w) => ({
      payload: void 0,
      meta: {
        ...w || {},
        arg: T,
        requestId: g,
        requestStatus: "pending"
      }
    })), _ = he(t + "/rejected", (g, T, w, d, c) => ({
      payload: d,
      error: (o && o.serializeError || qa)(g || "Rejected"),
      meta: {
        ...c || {},
        arg: w,
        requestId: T,
        rejectedWithValue: !!d,
        requestStatus: "rejected",
        aborted: (g == null ? void 0 : g.name) === "AbortError",
        condition: (g == null ? void 0 : g.name) === "ConditionError"
      }
    }));
    function P(g) {
      return (T, w, d) => {
        const c = o != null && o.idGenerator ? o.idGenerator(g) : yr(), p = new AbortController();
        let h, O;
        function E(s) {
          O = s, p.abort();
        }
        const b = async function() {
          var s, l;
          let u;
          try {
            let y = (s = o == null ? void 0 : o.condition) == null ? void 0 : s.call(o, g, {
              getState: w,
              extra: d
            });
            if (Ma(y) && (y = await y), y === !1 || p.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const v = new Promise((S, A) => {
              h = () => {
                A({
                  name: "AbortError",
                  message: O || "Aborted"
                });
              }, p.signal.addEventListener("abort", h);
            });
            T(f(c, g, (l = o == null ? void 0 : o.getPendingMeta) == null ? void 0 : l.call(o, {
              requestId: c,
              arg: g
            }, {
              getState: w,
              extra: d
            }))), u = await Promise.race([v, Promise.resolve(n(g, {
              dispatch: T,
              getState: w,
              extra: d,
              requestId: c,
              signal: p.signal,
              abort: E,
              rejectWithValue: (S, A) => new Ht(S, A),
              fulfillWithValue: (S, A) => new En(S, A)
            })).then((S) => {
              if (S instanceof Ht)
                throw S;
              return S instanceof En ? i(S.payload, c, g, S.meta) : i(S, c, g);
            })]);
          } catch (y) {
            u = y instanceof Ht ? _(null, c, g, y.payload, y.meta) : _(y, c, g);
          } finally {
            h && p.signal.removeEventListener("abort", h);
          }
          return o && !o.dispatchConditionRejection && _.match(u) && u.meta.condition || T(u), u;
        }();
        return Object.assign(b, {
          abort: E,
          requestId: c,
          arg: g,
          unwrap() {
            return b.then(Fa);
          }
        });
      };
    }
    return Object.assign(P, {
      pending: f,
      rejected: _,
      fulfilled: i,
      settled: Se(_, i),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function Fa(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Ma(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Va = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function za(e, t) {
  return `${e}/${t}`;
}
function Ua({
  creators: e
} = {}) {
  var t;
  const n = (t = e == null ? void 0 : e.asyncThunk) == null ? void 0 : t[Va];
  return function(o) {
    const {
      name: i,
      reducerPath: f = i
    } = o;
    if (!i)
      throw new Error(process.env.NODE_ENV === "production" ? J(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const _ = (typeof o.reducers == "function" ? o.reducers(Ha()) : o.reducers) || {}, P = Object.keys(_), g = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, T = {
      addCase(s, l) {
        const u = typeof s == "string" ? s : s.type;
        if (!u)
          throw new Error(process.env.NODE_ENV === "production" ? J(12) : "`context.addCase` cannot be called with an empty action type");
        if (u in g.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? J(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + u);
        return g.sliceCaseReducersByType[u] = l, T;
      },
      addMatcher(s, l) {
        return g.sliceMatchers.push({
          matcher: s,
          reducer: l
        }), T;
      },
      exposeAction(s, l) {
        return g.actionCreators[s] = l, T;
      },
      exposeCaseReducer(s, l) {
        return g.sliceCaseReducersByName[s] = l, T;
      }
    };
    P.forEach((s) => {
      const l = _[s], u = {
        reducerName: s,
        type: za(i, s),
        createNotation: typeof o.reducers == "function"
      };
      Ka(l) ? Xa(u, l, T, n) : Ga(u, l, T);
    });
    function w() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? J(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [s = {}, l = [], u = void 0] = typeof o.extraReducers == "function" ? oo(o.extraReducers) : [o.extraReducers], y = {
        ...s,
        ...g.sliceCaseReducersByType
      };
      return xa(o.initialState, (v) => {
        for (let S in y)
          v.addCase(S, y[S]);
        for (let S of g.sliceMatchers)
          v.addMatcher(S.matcher, S.reducer);
        for (let S of l)
          v.addMatcher(S.matcher, S.reducer);
        u && v.addDefaultCase(u);
      });
    }
    const d = (s) => s, c = /* @__PURE__ */ new Map();
    let p;
    function h(s, l) {
      return p || (p = w()), p(s, l);
    }
    function O() {
      return p || (p = w()), p.getInitialState();
    }
    function E(s, l = !1) {
      function u(v) {
        let S = v[s];
        if (typeof S > "u") {
          if (l)
            S = O();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? J(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return S;
      }
      function y(v = d) {
        const S = vn(c, l, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return vn(S, v, {
          insert: () => {
            const A = {};
            for (const [D, C] of Object.entries(o.selectors ?? {}))
              A[D] = Qa(C, v, O, l);
            return A;
          }
        });
      }
      return {
        reducerPath: s,
        getSelectors: y,
        get selectors() {
          return y(u);
        },
        selectSlice: u
      };
    }
    const b = {
      name: i,
      reducer: h,
      actions: g.actionCreators,
      caseReducers: g.sliceCaseReducersByName,
      getInitialState: O,
      ...E(f),
      injectInto(s, {
        reducerPath: l,
        ...u
      } = {}) {
        const y = l ?? f;
        return s.inject({
          reducerPath: y,
          reducer: h
        }, u), {
          ...b,
          ...E(y, !0)
        };
      }
    };
    return b;
  };
}
function Qa(e, t, n, o) {
  function i(f, ..._) {
    let P = t(f);
    if (typeof P > "u") {
      if (o)
        P = n();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? J(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(P, ..._);
  }
  return i.unwrapped = e, i;
}
var xe = /* @__PURE__ */ Ua();
function Ha() {
  function e(t, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...n
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...n) {
          return t(...n);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: n
      };
    },
    asyncThunk: e
  };
}
function Ga({
  type: e,
  reducerName: t,
  createNotation: n
}, o, i) {
  let f, _;
  if ("reducer" in o) {
    if (n && !Ba(o))
      throw new Error(process.env.NODE_ENV === "production" ? J(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    f = o.reducer, _ = o.prepare;
  } else
    f = o;
  i.addCase(e, f).exposeCaseReducer(t, f).exposeAction(t, _ ? he(e, _) : he(e));
}
function Ka(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Ba(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Xa({
  type: e,
  reducerName: t
}, n, o, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? J(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: f,
    fulfilled: _,
    pending: P,
    rejected: g,
    settled: T,
    options: w
  } = n, d = i(e, f, w);
  o.exposeAction(t, d), _ && o.addCase(d.fulfilled, _), P && o.addCase(d.pending, P), g && o.addCase(d.rejected, g), T && o.addMatcher(d.settled, T), o.exposeCaseReducer(t, {
    fulfilled: _ || _t,
    pending: P || _t,
    rejected: g || _t,
    settled: T || _t
  });
}
function _t() {
}
var Wa = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? J(32) : `${t} is not a function`);
}, _r = "listenerMiddleware", Ya = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: o,
    predicate: i,
    effect: f
  } = e;
  if (t)
    i = he(t).match;
  else if (n)
    t = n.type, i = n.match;
  else if (o)
    i = o;
  else if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? J(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Wa(f, "options.listener"), {
    predicate: i,
    type: t,
    effect: f
  };
}, Ja = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: o
  } = Ya(e);
  return {
    id: yr(),
    effect: o,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? J(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => Ja
}), Za = Object.assign(he(`${_r}/add`), {
  withTypes: () => Za
});
he(`${_r}/removeAll`);
var es = Object.assign(he(`${_r}/remove`), {
  withTypes: () => es
});
function J(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var ao = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(ao || {});
function ts(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
function rs(e) {
  return new RegExp("(^|:)//").test(e);
}
var ns = (e) => e.replace(/\/$/, ""), os = (e) => e.replace(/^\//, "");
function is(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  if (rs(t))
    return t;
  const n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return e = ns(e), t = os(t), `${e}${n}${t}`;
}
var wn = (e) => [].concat(...e);
function as() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function ss() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var Sn = Ee;
function so(e, t) {
  if (e === t || !(Sn(e) && Sn(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const n = Object.keys(t), o = Object.keys(e);
  let i = n.length === o.length;
  const f = Array.isArray(t) ? [] : {};
  for (const _ of n)
    f[_] = so(e[_], t[_]), i && (i = e[_] === f[_]);
  return i ? e : f;
}
var Rn = (...e) => fetch(...e), cs = (e) => e.status >= 200 && e.status <= 299, us = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function Pn(e) {
  if (!Ee(e))
    return e;
  const t = {
    ...e
  };
  for (const [n, o] of Object.entries(t))
    o === void 0 && delete t[n];
  return t;
}
function ls({
  baseUrl: e,
  prepareHeaders: t = (d) => d,
  fetchFn: n = Rn,
  paramsSerializer: o,
  isJsonContentType: i = us,
  jsonContentType: f = "application/json",
  jsonReplacer: _,
  timeout: P,
  responseHandler: g,
  validateStatus: T,
  ...w
} = {}) {
  return typeof fetch > "u" && n === Rn && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (c, p) => {
    const {
      signal: h,
      getState: O,
      extra: E,
      endpoint: b,
      forced: s,
      type: l
    } = p;
    let u, {
      url: y,
      headers: v = new Headers(w.headers),
      params: S = void 0,
      responseHandler: A = g ?? "json",
      validateStatus: D = T ?? cs,
      timeout: C = P,
      ...x
    } = typeof c == "string" ? {
      url: c
    } : c, j = {
      ...w,
      signal: h,
      ...x
    };
    v = new Headers(Pn(v)), j.headers = await t(v, {
      getState: O,
      extra: E,
      endpoint: b,
      forced: s,
      type: l
    }) || v;
    const F = (I) => typeof I == "object" && (Ee(I) || Array.isArray(I) || typeof I.toJSON == "function");
    if (!j.headers.has("content-type") && F(j.body) && j.headers.set("content-type", f), F(j.body) && i(j.headers) && (j.body = JSON.stringify(j.body, _)), S) {
      const I = ~y.indexOf("?") ? "&" : "?", M = o ? o(S) : new URLSearchParams(Pn(S));
      y += I + M;
    }
    y = is(e, y);
    const V = new Request(y, j);
    u = {
      request: new Request(y, j)
    };
    let L, Q = !1, $ = C && setTimeout(() => {
      Q = !0, p.abort();
    }, C);
    try {
      L = await n(V);
    } catch (I) {
      return {
        error: {
          status: Q ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(I)
        },
        meta: u
      };
    } finally {
      $ && clearTimeout($);
    }
    const K = L.clone();
    u.response = K;
    let oe, m = "";
    try {
      let I;
      if (await Promise.all([
        d(L, A).then((M) => oe = M, (M) => I = M),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        K.text().then((M) => m = M, () => {
        })
      ]), I)
        throw I;
    } catch (I) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: L.status,
          data: m,
          error: String(I)
        },
        meta: u
      };
    }
    return D(L, oe) ? {
      data: oe,
      meta: u
    } : {
      error: {
        status: L.status,
        data: oe
      },
      meta: u
    };
  };
  async function d(c, p) {
    if (typeof p == "function")
      return p(c);
    if (p === "content-type" && (p = i(c.headers) ? "json" : "text"), p === "json") {
      const h = await c.text();
      return h.length ? JSON.parse(h) : null;
    }
    return c.text();
  }
}
var Tn = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, gr = /* @__PURE__ */ he("__rtkq/focused"), co = /* @__PURE__ */ he("__rtkq/unfocused"), br = /* @__PURE__ */ he("__rtkq/online"), uo = /* @__PURE__ */ he("__rtkq/offline");
function lo(e) {
  return e.type === "query";
}
function ds(e) {
  return e.type === "mutation";
}
function vr(e, t, n, o, i, f) {
  return fs(e) ? e(t, n, o, i).map(ar).map(f) : Array.isArray(e) ? e.map(ar).map(f) : [];
}
function fs(e) {
  return typeof e == "function";
}
function ar(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function Nn(e) {
  return e != null;
}
function $e(e) {
  let t = 0;
  for (const n in e)
    t++;
  return t;
}
function ps(e, t) {
  return e.catch(t);
}
var Ze = Symbol("forceQueryFn"), sr = (e) => typeof e[Ze] == "function";
function hs({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: n,
  api: o,
  context: i
}) {
  const f = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: P,
    removeMutationResult: g,
    updateSubscriptionOptions: T
  } = o.internalActions;
  return {
    buildInitiateQuery: O,
    buildInitiateMutation: E,
    getRunningQueryThunk: w,
    getRunningMutationThunk: d,
    getRunningQueriesThunk: c,
    getRunningMutationsThunk: p
  };
  function w(b, s) {
    return (l) => {
      var u;
      const y = i.endpointDefinitions[b], v = e({
        queryArgs: s,
        endpointDefinition: y,
        endpointName: b
      });
      return (u = f.get(l)) == null ? void 0 : u[v];
    };
  }
  function d(b, s) {
    return (l) => {
      var u;
      return (u = _.get(l)) == null ? void 0 : u[s];
    };
  }
  function c() {
    return (b) => Object.values(f.get(b) || {}).filter(Nn);
  }
  function p() {
    return (b) => Object.values(_.get(b) || {}).filter(Nn);
  }
  function h(b) {
    if (process.env.NODE_ENV !== "production") {
      if (h.triggered)
        return;
      const s = b(o.internalActions.internal_getRTKQSubscriptions());
      if (h.triggered = !0, typeof s != "object" || typeof (s == null ? void 0 : s.type) == "string")
        throw new Error(process.env.NODE_ENV === "production" ? J(34) : `Warning: Middleware for RTK-Query API at reducerPath "${o.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function O(b, s) {
    const l = (u, {
      subscribe: y = !0,
      forceRefetch: v,
      subscriptionOptions: S,
      [Ze]: A,
      ...D
    } = {}) => (C, x) => {
      var j;
      const F = e({
        queryArgs: u,
        endpointDefinition: s,
        endpointName: b
      }), V = t({
        ...D,
        type: "query",
        subscribe: y,
        forceRefetch: v,
        subscriptionOptions: S,
        endpointName: b,
        originalArgs: u,
        queryCacheKey: F,
        [Ze]: A
      }), L = o.endpoints[b].select(u), Q = C(V), $ = L(x());
      h(C);
      const {
        requestId: K,
        abort: oe
      } = Q, m = $.requestId !== K, I = (j = f.get(C)) == null ? void 0 : j[F], M = () => L(x()), B = Object.assign(A ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        Q.then(M)
      ) : m && !I ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve($)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([I, Q]).then(M)
      ), {
        arg: u,
        requestId: K,
        subscriptionOptions: S,
        queryCacheKey: F,
        abort: oe,
        async unwrap() {
          const z = await B;
          if (z.isError)
            throw z.error;
          return z.data;
        },
        refetch: () => C(l(u, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          y && C(P({
            queryCacheKey: F,
            requestId: K
          }));
        },
        updateSubscriptionOptions(z) {
          B.subscriptionOptions = z, C(T({
            endpointName: b,
            requestId: K,
            queryCacheKey: F,
            options: z
          }));
        }
      });
      if (!I && !m && !A) {
        const z = f.get(C) || {};
        z[F] = B, f.set(C, z), B.then(() => {
          delete z[F], $e(z) || f.delete(C);
        });
      }
      return B;
    };
    return l;
  }
  function E(b) {
    return (s, {
      track: l = !0,
      fixedCacheKey: u
    } = {}) => (y, v) => {
      const S = n({
        type: "mutation",
        endpointName: b,
        originalArgs: s,
        track: l,
        fixedCacheKey: u
      }), A = y(S);
      h(y);
      const {
        requestId: D,
        abort: C,
        unwrap: x
      } = A, j = ps(A.unwrap().then((Q) => ({
        data: Q
      })), (Q) => ({
        error: Q
      })), F = () => {
        y(g({
          requestId: D,
          fixedCacheKey: u
        }));
      }, V = Object.assign(j, {
        arg: A.arg,
        requestId: D,
        abort: C,
        unwrap: x,
        reset: F
      }), L = _.get(y) || {};
      return _.set(y, L), L[D] = V, V.then(() => {
        delete L[D], $e(L) || _.delete(y);
      }), u && (L[u] = V, V.then(() => {
        L[u] === V && (delete L[u], $e(L) || _.delete(y));
      })), V;
    };
  }
}
function An(e) {
  return e;
}
function ys({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: n
  },
  serializeQueryArgs: o,
  api: i,
  assertTagType: f
}) {
  const _ = (s, l, u, y) => (v, S) => {
    const A = n[s], D = o({
      queryArgs: l,
      endpointDefinition: A,
      endpointName: s
    });
    if (v(i.internalActions.queryResultPatched({
      queryCacheKey: D,
      patches: u
    })), !y)
      return;
    const C = i.endpoints[s].select(l)(
      // Work around TS 4.1 mismatch
      S()
    ), x = vr(A.providesTags, C.data, void 0, l, {}, f);
    v(i.internalActions.updateProvidedBy({
      queryCacheKey: D,
      providedTags: x
    }));
  }, P = (s, l, u, y = !0) => (v, S) => {
    const A = i.endpoints[s].select(l)(
      // Work around TS 4.1 mismatch
      S()
    );
    let D = {
      patches: [],
      inversePatches: [],
      undo: () => v(i.util.patchQueryData(s, l, D.inversePatches, y))
    };
    if (A.status === "uninitialized")
      return D;
    let C;
    if ("data" in A)
      if (be(A.data)) {
        const [x, j, F] = ro(A.data, u);
        D.patches.push(...j), D.inversePatches.push(...F), C = x;
      } else
        C = u(A.data), D.patches.push({
          op: "replace",
          path: [],
          value: C
        }), D.inversePatches.push({
          op: "replace",
          path: [],
          value: A.data
        });
    return v(i.util.patchQueryData(s, l, D.patches, y)), D;
  }, g = (s, l, u) => (y) => y(i.endpoints[s].initiate(l, {
    subscribe: !1,
    forceRefetch: !0,
    [Ze]: () => ({
      data: u
    })
  })), T = async (s, {
    signal: l,
    abort: u,
    rejectWithValue: y,
    fulfillWithValue: v,
    dispatch: S,
    getState: A,
    extra: D
  }) => {
    const C = n[s.endpointName];
    try {
      let x = An, j;
      const F = {
        signal: l,
        abort: u,
        dispatch: S,
        getState: A,
        extra: D,
        endpoint: s.endpointName,
        type: s.type,
        forced: s.type === "query" ? w(s, A()) : void 0
      }, V = s.type === "query" ? s[Ze] : void 0;
      if (V ? j = V() : C.query ? (j = await t(C.query(s.originalArgs), F, C.extraOptions), C.transformResponse && (x = C.transformResponse)) : j = await C.queryFn(s.originalArgs, F, C.extraOptions, (L) => t(L, F, C.extraOptions)), typeof process < "u" && process.env.NODE_ENV === "development") {
        const L = C.query ? "`baseQuery`" : "`queryFn`";
        let Q;
        if (!j)
          Q = `${L} did not return anything.`;
        else if (typeof j != "object")
          Q = `${L} did not return an object.`;
        else if (j.error && j.data)
          Q = `${L} returned an object containing both \`error\` and \`result\`.`;
        else if (j.error === void 0 && j.data === void 0)
          Q = `${L} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
        else
          for (const $ of Object.keys(j))
            if ($ !== "error" && $ !== "data" && $ !== "meta") {
              Q = `The object returned by ${L} has the unknown property ${$}.`;
              break;
            }
        Q && console.error(`Error encountered handling the endpoint ${s.endpointName}.
              ${Q}
              It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
              Object returned was:`, j);
      }
      if (j.error)
        throw new Tn(j.error, j.meta);
      return v(await x(j.data, j.meta, s.originalArgs), {
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: j.meta,
        [Ue]: !0
      });
    } catch (x) {
      let j = x;
      if (j instanceof Tn) {
        let F = An;
        C.query && C.transformErrorResponse && (F = C.transformErrorResponse);
        try {
          return y(await F(j.value, j.meta, s.originalArgs), {
            baseQueryMeta: j.meta,
            [Ue]: !0
          });
        } catch (V) {
          j = V;
        }
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${s.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, j) : console.error(j), j;
    }
  };
  function w(s, l) {
    var u, y, v;
    const S = (y = (u = l[e]) == null ? void 0 : u.queries) == null ? void 0 : y[s.queryCacheKey], A = (v = l[e]) == null ? void 0 : v.config.refetchOnMountOrArgChange, D = S == null ? void 0 : S.fulfilledTimeStamp, C = s.forceRefetch ?? (s.subscribe && A);
    return C ? C === !0 || (Number(/* @__PURE__ */ new Date()) - Number(D)) / 1e3 >= C : !1;
  }
  const d = On(`${e}/executeQuery`, T, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [Ue]: !0
      };
    },
    condition(s, {
      getState: l
    }) {
      var u, y, v;
      const S = l(), A = (y = (u = S[e]) == null ? void 0 : u.queries) == null ? void 0 : y[s.queryCacheKey], D = A == null ? void 0 : A.fulfilledTimeStamp, C = s.originalArgs, x = A == null ? void 0 : A.originalArgs, j = n[s.endpointName];
      return sr(s) ? !0 : (A == null ? void 0 : A.status) === "pending" ? !1 : w(s, S) || lo(j) && (v = j == null ? void 0 : j.forceRefetch) != null && v.call(j, {
        currentArg: C,
        previousArg: x,
        endpointState: A,
        state: S
      }) ? !0 : !D;
    },
    dispatchConditionRejection: !0
  }), c = On(`${e}/executeMutation`, T, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [Ue]: !0
      };
    }
  }), p = (s) => "force" in s, h = (s) => "ifOlderThan" in s, O = (s, l, u) => (y, v) => {
    const S = p(u) && u.force, A = h(u) && u.ifOlderThan, D = (x = !0) => {
      const j = {
        forceRefetch: x,
        isPrefetch: !0
      };
      return i.endpoints[s].initiate(l, j);
    }, C = i.endpoints[s].select(l)(v());
    if (S)
      y(D());
    else if (A) {
      const x = C == null ? void 0 : C.fulfilledTimeStamp;
      if (!x) {
        y(D());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(x))) / 1e3 >= A && y(D());
    } else
      y(D(!1));
  };
  function E(s) {
    return (l) => {
      var u, y;
      return ((y = (u = l == null ? void 0 : l.meta) == null ? void 0 : u.arg) == null ? void 0 : y.endpointName) === s;
    };
  }
  function b(s, l) {
    return {
      matchPending: Ge(mr(s), E(l)),
      matchFulfilled: Ge(Re(s), E(l)),
      matchRejected: Ge(Le(s), E(l))
    };
  }
  return {
    queryThunk: d,
    mutationThunk: c,
    prefetch: O,
    updateQueryData: P,
    upsertQueryData: g,
    patchQueryData: _,
    buildMatchThunkActions: b
  };
}
function fo(e, t, n, o) {
  return vr(n[e.meta.arg.endpointName][t], Re(e) ? e.payload : void 0, Tt(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, o);
}
function gt(e, t, n) {
  const o = e[t];
  o && n(o);
}
function et(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function In(e, t, n) {
  const o = e[et(t)];
  o && n(o);
}
var ze = {};
function ms({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: n,
  context: {
    endpointDefinitions: o,
    apiUid: i,
    extractRehydrationInfo: f,
    hasRehydrationInfo: _
  },
  assertTagType: P,
  config: g
}) {
  const T = he(`${e}/resetApiState`), w = xe({
    name: `${e}/queries`,
    initialState: ze,
    reducers: {
      removeQueryResult: {
        reducer(l, {
          payload: {
            queryCacheKey: u
          }
        }) {
          delete l[u];
        },
        prepare: Ve()
      },
      queryResultPatched: {
        reducer(l, {
          payload: {
            queryCacheKey: u,
            patches: y
          }
        }) {
          gt(l, u, (v) => {
            v.data = yn(v.data, y.concat());
          });
        },
        prepare: Ve()
      }
    },
    extraReducers(l) {
      l.addCase(t.pending, (u, {
        meta: y,
        meta: {
          arg: v
        }
      }) => {
        var S;
        const A = sr(v);
        u[S = v.queryCacheKey] ?? (u[S] = {
          status: "uninitialized",
          endpointName: v.endpointName
        }), gt(u, v.queryCacheKey, (D) => {
          D.status = "pending", D.requestId = A && D.requestId ? (
            // for `upsertQuery` **updates**, keep the current `requestId`
            D.requestId
          ) : (
            // for normal queries or `upsertQuery` **inserts** always update the `requestId`
            y.requestId
          ), v.originalArgs !== void 0 && (D.originalArgs = v.originalArgs), D.startedTimeStamp = y.startedTimeStamp;
        });
      }).addCase(t.fulfilled, (u, {
        meta: y,
        payload: v
      }) => {
        gt(u, y.arg.queryCacheKey, (S) => {
          if (S.requestId !== y.requestId && !sr(y.arg))
            return;
          const {
            merge: A
          } = o[y.arg.endpointName];
          if (S.status = "fulfilled", A)
            if (S.data !== void 0) {
              const {
                fulfilledTimeStamp: D,
                arg: C,
                baseQueryMeta: x,
                requestId: j
              } = y;
              let F = nt(S.data, (V) => A(V, v, {
                arg: C.originalArgs,
                baseQueryMeta: x,
                fulfilledTimeStamp: D,
                requestId: j
              }));
              S.data = F;
            } else
              S.data = v;
          else
            S.data = o[y.arg.endpointName].structuralSharing ?? !0 ? so(ge(S.data) ? la(S.data) : S.data, v) : v;
          delete S.error, S.fulfilledTimeStamp = y.fulfilledTimeStamp;
        });
      }).addCase(t.rejected, (u, {
        meta: {
          condition: y,
          arg: v,
          requestId: S
        },
        error: A,
        payload: D
      }) => {
        gt(u, v.queryCacheKey, (C) => {
          if (!y) {
            if (C.requestId !== S)
              return;
            C.status = "rejected", C.error = D ?? A;
          }
        });
      }).addMatcher(_, (u, y) => {
        const {
          queries: v
        } = f(y);
        for (const [S, A] of Object.entries(v))
          ((A == null ? void 0 : A.status) === "fulfilled" || (A == null ? void 0 : A.status) === "rejected") && (u[S] = A);
      });
    }
  }), d = xe({
    name: `${e}/mutations`,
    initialState: ze,
    reducers: {
      removeMutationResult: {
        reducer(l, {
          payload: u
        }) {
          const y = et(u);
          y in l && delete l[y];
        },
        prepare: Ve()
      }
    },
    extraReducers(l) {
      l.addCase(n.pending, (u, {
        meta: y,
        meta: {
          requestId: v,
          arg: S,
          startedTimeStamp: A
        }
      }) => {
        S.track && (u[et(y)] = {
          requestId: v,
          status: "pending",
          endpointName: S.endpointName,
          startedTimeStamp: A
        });
      }).addCase(n.fulfilled, (u, {
        payload: y,
        meta: v
      }) => {
        v.arg.track && In(u, v, (S) => {
          S.requestId === v.requestId && (S.status = "fulfilled", S.data = y, S.fulfilledTimeStamp = v.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, (u, {
        payload: y,
        error: v,
        meta: S
      }) => {
        S.arg.track && In(u, S, (A) => {
          A.requestId === S.requestId && (A.status = "rejected", A.error = y ?? v);
        });
      }).addMatcher(_, (u, y) => {
        const {
          mutations: v
        } = f(y);
        for (const [S, A] of Object.entries(v))
          ((A == null ? void 0 : A.status) === "fulfilled" || (A == null ? void 0 : A.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          S !== (A == null ? void 0 : A.requestId) && (u[S] = A);
      });
    }
  }), c = xe({
    name: `${e}/invalidation`,
    initialState: ze,
    reducers: {
      updateProvidedBy: {
        reducer(l, u) {
          var y, v;
          const {
            queryCacheKey: S,
            providedTags: A
          } = u.payload;
          for (const D of Object.values(l))
            for (const C of Object.values(D)) {
              const x = C.indexOf(S);
              x !== -1 && C.splice(x, 1);
            }
          for (const {
            type: D,
            id: C
          } of A) {
            const x = (y = l[D] ?? (l[D] = {}))[v = C || "__internal_without_id"] ?? (y[v] = []);
            x.includes(S) || x.push(S);
          }
        },
        prepare: Ve()
      }
    },
    extraReducers(l) {
      l.addCase(w.actions.removeQueryResult, (u, {
        payload: {
          queryCacheKey: y
        }
      }) => {
        for (const v of Object.values(u))
          for (const S of Object.values(v)) {
            const A = S.indexOf(y);
            A !== -1 && S.splice(A, 1);
          }
      }).addMatcher(_, (u, y) => {
        var v, S;
        const {
          provided: A
        } = f(y);
        for (const [D, C] of Object.entries(A))
          for (const [x, j] of Object.entries(C)) {
            const F = (v = u[D] ?? (u[D] = {}))[S = x || "__internal_without_id"] ?? (v[S] = []);
            for (const V of j)
              F.includes(V) || F.push(V);
          }
      }).addMatcher(Se(Re(t), Tt(t)), (u, y) => {
        const v = fo(y, "providesTags", o, P), {
          queryCacheKey: S
        } = y.meta.arg;
        c.caseReducers.updateProvidedBy(u, c.actions.updateProvidedBy({
          queryCacheKey: S,
          providedTags: v
        }));
      });
    }
  }), p = xe({
    name: `${e}/subscriptions`,
    initialState: ze,
    reducers: {
      updateSubscriptionOptions(l, u) {
      },
      unsubscribeQueryResult(l, u) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), h = xe({
    name: `${e}/internalSubscriptions`,
    initialState: ze,
    reducers: {
      subscriptionsUpdated: {
        reducer(l, u) {
          return yn(l, u.payload);
        },
        prepare: Ve()
      }
    }
  }), O = xe({
    name: `${e}/config`,
    initialState: {
      online: as(),
      focused: ss(),
      middlewareRegistered: !1,
      ...g
    },
    reducers: {
      middlewareRegistered(l, {
        payload: u
      }) {
        l.middlewareRegistered = l.middlewareRegistered === "conflict" || i !== u ? "conflict" : !0;
      }
    },
    extraReducers: (l) => {
      l.addCase(br, (u) => {
        u.online = !0;
      }).addCase(uo, (u) => {
        u.online = !1;
      }).addCase(gr, (u) => {
        u.focused = !0;
      }).addCase(co, (u) => {
        u.focused = !1;
      }).addMatcher(_, (u) => ({
        ...u
      }));
    }
  }), E = ca({
    queries: w.reducer,
    mutations: d.reducer,
    provided: c.reducer,
    subscriptions: h.reducer,
    config: O.reducer
  }), b = (l, u) => E(T.match(u) ? void 0 : l, u), s = {
    ...O.actions,
    ...w.actions,
    ...p.actions,
    ...h.actions,
    ...d.actions,
    ...c.actions,
    resetApiState: T
  };
  return {
    reducer: b,
    actions: s
  };
}
var Te = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), po = {
  status: "uninitialized"
  /* uninitialized */
}, Cn = /* @__PURE__ */ nt(po, () => {
}), kn = /* @__PURE__ */ nt(po, () => {
});
function _s({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: n
}) {
  const o = (d) => Cn, i = (d) => kn;
  return {
    buildQuerySelector: P,
    buildMutationSelector: g,
    selectInvalidatedBy: T,
    selectCachedArgsForQuery: w
  };
  function f(d) {
    return {
      ...d,
      ...ts(d.status)
    };
  }
  function _(d) {
    const c = d[t];
    if (process.env.NODE_ENV !== "production" && !c) {
      if (_.triggered)
        return c;
      _.triggered = !0, console.error(`Error: No data found at \`state.${t}\`. Did you forget to add the reducer to the store?`);
    }
    return c;
  }
  function P(d, c) {
    return (p) => {
      const h = e({
        queryArgs: p,
        endpointDefinition: c,
        endpointName: d
      });
      return n(p === Te ? o : (O) => {
        var E, b;
        return ((b = (E = _(O)) == null ? void 0 : E.queries) == null ? void 0 : b[h]) ?? Cn;
      }, f);
    };
  }
  function g() {
    return (d) => {
      let c;
      return typeof d == "object" ? c = et(d) ?? Te : c = d, n(c === Te ? i : (p) => {
        var h, O;
        return ((O = (h = _(p)) == null ? void 0 : h.mutations) == null ? void 0 : O[c]) ?? kn;
      }, f);
    };
  }
  function T(d, c) {
    const p = d[t], h = /* @__PURE__ */ new Set();
    for (const O of c.map(ar)) {
      const E = p.provided[O.type];
      if (!E)
        continue;
      let b = (O.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        E[O.id]
      ) : (
        // no id: invalidate all queries that provide this type
        wn(Object.values(E))
      )) ?? [];
      for (const s of b)
        h.add(s);
    }
    return wn(Array.from(h.values()).map((O) => {
      const E = p.queries[O];
      return E ? [{
        queryCacheKey: O,
        endpointName: E.endpointName,
        originalArgs: E.originalArgs
      }] : [];
    }));
  }
  function w(d, c) {
    return Object.values(d[t].queries).filter(
      (p) => (p == null ? void 0 : p.endpointName) === c && p.status !== "uninitialized"
      /* uninitialized */
    ).map((p) => p.originalArgs);
  }
}
var bt = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, jn = ({
  endpointName: e,
  queryArgs: t
}) => {
  let n = "";
  const o = bt == null ? void 0 : bt.get(t);
  if (typeof o == "string")
    n = o;
  else {
    const i = JSON.stringify(t, (f, _) => Ee(_) ? Object.keys(_).sort().reduce((P, g) => (P[g] = _[g], P), {}) : _);
    Ee(t) && (bt == null || bt.set(t, i)), n = i;
  }
  return `${e}(${n})`;
};
function gs(...e) {
  return function(t) {
    const n = Je((g) => {
      var T;
      return (T = t.extractRehydrationInfo) == null ? void 0 : T.call(t, g, {
        reducerPath: t.reducerPath ?? "api"
      });
    }), o = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...t,
      extractRehydrationInfo: n,
      serializeQueryArgs(g) {
        let T = jn;
        if ("serializeQueryArgs" in g.endpointDefinition) {
          const w = g.endpointDefinition.serializeQueryArgs;
          T = (d) => {
            const c = w(d);
            return typeof c == "string" ? c : jn({
              ...d,
              queryArgs: c
            });
          };
        } else
          t.serializeQueryArgs && (T = t.serializeQueryArgs);
        return T(g);
      },
      tagTypes: [...t.tagTypes || []]
    }, i = {
      endpointDefinitions: {},
      batch(g) {
        g();
      },
      apiUid: yr(),
      extractRehydrationInfo: n,
      hasRehydrationInfo: Je((g) => n(g) != null)
    }, f = {
      injectEndpoints: P,
      enhanceEndpoints({
        addTagTypes: g,
        endpoints: T
      }) {
        if (g)
          for (const w of g)
            o.tagTypes.includes(w) || o.tagTypes.push(w);
        if (T)
          for (const [w, d] of Object.entries(T))
            typeof d == "function" ? d(i.endpointDefinitions[w]) : Object.assign(i.endpointDefinitions[w] || {}, d);
        return f;
      }
    }, _ = e.map((g) => g.init(f, o, i));
    function P(g) {
      const T = g.endpoints({
        query: (w) => ({
          ...w,
          type: "query"
          /* query */
        }),
        mutation: (w) => ({
          ...w,
          type: "mutation"
          /* mutation */
        })
      });
      for (const [w, d] of Object.entries(T)) {
        if (g.overrideExisting !== !0 && w in i.endpointDefinitions) {
          if (g.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? J(39) : `called \`injectEndpoints\` to override already-existing endpointName ${w} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${w} without specifying \`overrideExisting: true\``);
          continue;
        }
        i.endpointDefinitions[w] = d;
        for (const c of _)
          c.injectEndpoint(w, d);
      }
      return f;
    }
    return f.injectEndpoints({
      endpoints: t.endpoints
    });
  };
}
function bs(e) {
  for (let t in e)
    return !1;
  return !0;
}
var vs = 2147483647 / 1e3 - 1, Es = ({
  reducerPath: e,
  api: t,
  context: n,
  internalState: o
}) => {
  const {
    removeQueryResult: i,
    unsubscribeQueryResult: f
  } = t.internalActions;
  function _(w) {
    const d = o.currentSubscriptions[w];
    return !!d && !bs(d);
  }
  const P = {}, g = (w, d, c) => {
    var p;
    if (f.match(w)) {
      const h = d.getState()[e], {
        queryCacheKey: O
      } = w.payload;
      T(O, (p = h.queries[O]) == null ? void 0 : p.endpointName, d, h.config);
    }
    if (t.util.resetApiState.match(w))
      for (const [h, O] of Object.entries(P))
        O && clearTimeout(O), delete P[h];
    if (n.hasRehydrationInfo(w)) {
      const h = d.getState()[e], {
        queries: O
      } = n.extractRehydrationInfo(w);
      for (const [E, b] of Object.entries(O))
        T(E, b == null ? void 0 : b.endpointName, d, h.config);
    }
  };
  function T(w, d, c, p) {
    const h = n.endpointDefinitions[d], O = (h == null ? void 0 : h.keepUnusedDataFor) ?? p.keepUnusedDataFor;
    if (O === 1 / 0)
      return;
    const E = Math.max(0, Math.min(O, vs));
    if (!_(w)) {
      const b = P[w];
      b && clearTimeout(b), P[w] = setTimeout(() => {
        _(w) || c.dispatch(i({
          queryCacheKey: w
        })), delete P[w];
      }, E * 1e3);
    }
  }
  return g;
}, Os = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: n
  },
  mutationThunk: o,
  queryThunk: i,
  api: f,
  assertTagType: _,
  refetchQuery: P,
  internalState: g
}) => {
  const {
    removeQueryResult: T
  } = f.internalActions, w = Se(Re(o), Tt(o)), d = Se(Re(o, i), Le(o, i));
  let c = [];
  const p = (E, b) => {
    w(E) ? O(fo(E, "invalidatesTags", n, _), b) : d(E) ? O([], b) : f.util.invalidateTags.match(E) && O(vr(E.payload, void 0, void 0, void 0, void 0, _), b);
  };
  function h(E) {
    var b, s;
    for (const l in E.queries)
      if (((b = E.queries[l]) == null ? void 0 : b.status) === "pending")
        return !0;
    for (const l in E.mutations)
      if (((s = E.mutations[l]) == null ? void 0 : s.status) === "pending")
        return !0;
    return !1;
  }
  function O(E, b) {
    const s = b.getState(), l = s[e];
    if (c.push(...E), l.config.invalidationBehavior === "delayed" && h(l))
      return;
    const u = c;
    if (c = [], u.length === 0)
      return;
    const y = f.util.selectInvalidatedBy(s, u);
    t.batch(() => {
      const v = Array.from(y.values());
      for (const {
        queryCacheKey: S
      } of v) {
        const A = l.queries[S], D = g.currentSubscriptions[S] ?? {};
        A && ($e(D) === 0 ? b.dispatch(T({
          queryCacheKey: S
        })) : A.status !== "uninitialized" && b.dispatch(P(A, S)));
      }
    });
  }
  return p;
}, ws = ({
  reducerPath: e,
  queryThunk: t,
  api: n,
  refetchQuery: o,
  internalState: i
}) => {
  const f = {}, _ = (c, p) => {
    (n.internalActions.updateSubscriptionOptions.match(c) || n.internalActions.unsubscribeQueryResult.match(c)) && g(c.payload, p), (t.pending.match(c) || t.rejected.match(c) && c.meta.condition) && g(c.meta.arg, p), (t.fulfilled.match(c) || t.rejected.match(c) && !c.meta.condition) && P(c.meta.arg, p), n.util.resetApiState.match(c) && w();
  };
  function P({
    queryCacheKey: c
  }, p) {
    const h = p.getState()[e], O = h.queries[c], E = i.currentSubscriptions[c];
    if (!O || O.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: b,
      skipPollingIfUnfocused: s
    } = d(E);
    if (!Number.isFinite(b))
      return;
    const l = f[c];
    l != null && l.timeout && (clearTimeout(l.timeout), l.timeout = void 0);
    const u = Date.now() + b;
    f[c] = {
      nextPollTimestamp: u,
      pollingInterval: b,
      timeout: setTimeout(() => {
        (h.config.focused || !s) && p.dispatch(o(O, c)), P({
          queryCacheKey: c
        }, p);
      }, b)
    };
  }
  function g({
    queryCacheKey: c
  }, p) {
    const h = p.getState()[e].queries[c], O = i.currentSubscriptions[c];
    if (!h || h.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: E
    } = d(O);
    if (!Number.isFinite(E)) {
      T(c);
      return;
    }
    const b = f[c], s = Date.now() + E;
    (!b || s < b.nextPollTimestamp) && P({
      queryCacheKey: c
    }, p);
  }
  function T(c) {
    const p = f[c];
    p != null && p.timeout && clearTimeout(p.timeout), delete f[c];
  }
  function w() {
    for (const c of Object.keys(f))
      T(c);
  }
  function d(c = {}) {
    let p = !1, h = Number.POSITIVE_INFINITY;
    for (let O in c)
      c[O].pollingInterval && (h = Math.min(c[O].pollingInterval, h), p = c[O].skipPollingIfUnfocused || p);
    return {
      lowestPollingInterval: h,
      skipPollingIfUnfocused: p
    };
  }
  return _;
}, Ss = ({
  reducerPath: e,
  context: t,
  api: n,
  refetchQuery: o,
  internalState: i
}) => {
  const {
    removeQueryResult: f
  } = n.internalActions, _ = (g, T) => {
    gr.match(g) && P(T, "refetchOnFocus"), br.match(g) && P(T, "refetchOnReconnect");
  };
  function P(g, T) {
    const w = g.getState()[e], d = w.queries, c = i.currentSubscriptions;
    t.batch(() => {
      for (const p of Object.keys(c)) {
        const h = d[p], O = c[p];
        !O || !h || (Object.values(O).some((E) => E[T] === !0) || Object.values(O).every((E) => E[T] === void 0) && w.config[T]) && ($e(O) === 0 ? g.dispatch(f({
          queryCacheKey: p
        })) : h.status !== "uninitialized" && g.dispatch(o(h, p)));
      }
    });
  }
  return _;
}, Dn = new Error("Promise never resolved before cacheEntryRemoved."), Rs = ({
  api: e,
  reducerPath: t,
  context: n,
  queryThunk: o,
  mutationThunk: i,
  internalState: f
}) => {
  const _ = ir(o), P = ir(i), g = Re(o, i), T = {}, w = (p, h, O) => {
    const E = d(p);
    if (o.pending.match(p)) {
      const b = O[t].queries[E], s = h.getState()[t].queries[E];
      !b && s && c(p.meta.arg.endpointName, p.meta.arg.originalArgs, E, h, p.meta.requestId);
    } else if (i.pending.match(p))
      h.getState()[t].mutations[E] && c(p.meta.arg.endpointName, p.meta.arg.originalArgs, E, h, p.meta.requestId);
    else if (g(p)) {
      const b = T[E];
      b != null && b.valueResolved && (b.valueResolved({
        data: p.payload,
        meta: p.meta.baseQueryMeta
      }), delete b.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(p) || e.internalActions.removeMutationResult.match(p)) {
      const b = T[E];
      b && (delete T[E], b.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(p))
      for (const [b, s] of Object.entries(T))
        delete T[b], s.cacheEntryRemoved();
  };
  function d(p) {
    return _(p) ? p.meta.arg.queryCacheKey : P(p) ? p.meta.arg.fixedCacheKey ?? p.meta.requestId : e.internalActions.removeQueryResult.match(p) ? p.payload.queryCacheKey : e.internalActions.removeMutationResult.match(p) ? et(p.payload) : "";
  }
  function c(p, h, O, E, b) {
    const s = n.endpointDefinitions[p], l = s == null ? void 0 : s.onCacheEntryAdded;
    if (!l)
      return;
    let u = {};
    const y = new Promise((x) => {
      u.cacheEntryRemoved = x;
    }), v = Promise.race([new Promise((x) => {
      u.valueResolved = x;
    }), y.then(() => {
      throw Dn;
    })]);
    v.catch(() => {
    }), T[O] = u;
    const S = e.endpoints[p].select(s.type === "query" ? h : O), A = E.dispatch((x, j, F) => F), D = {
      ...E,
      getCacheEntry: () => S(E.getState()),
      requestId: b,
      extra: A,
      updateCachedData: s.type === "query" ? (x) => E.dispatch(e.util.updateQueryData(p, h, x)) : void 0,
      cacheDataLoaded: v,
      cacheEntryRemoved: y
    }, C = l(h, D);
    Promise.resolve(C).catch((x) => {
      if (x !== Dn)
        throw x;
    });
  }
  return w;
}, Ps = ({
  api: e,
  context: t,
  queryThunk: n,
  mutationThunk: o
}) => {
  const i = mr(n, o), f = Le(n, o), _ = Re(n, o), P = {};
  return (g, T) => {
    var w, d;
    if (i(g)) {
      const {
        requestId: c,
        arg: {
          endpointName: p,
          originalArgs: h
        }
      } = g.meta, O = t.endpointDefinitions[p], E = O == null ? void 0 : O.onQueryStarted;
      if (E) {
        const b = {}, s = new Promise((v, S) => {
          b.resolve = v, b.reject = S;
        });
        s.catch(() => {
        }), P[c] = b;
        const l = e.endpoints[p].select(O.type === "query" ? h : c), u = T.dispatch((v, S, A) => A), y = {
          ...T,
          getCacheEntry: () => l(T.getState()),
          requestId: c,
          extra: u,
          updateCachedData: O.type === "query" ? (v) => T.dispatch(e.util.updateQueryData(p, h, v)) : void 0,
          queryFulfilled: s
        };
        E(h, y);
      }
    } else if (_(g)) {
      const {
        requestId: c,
        baseQueryMeta: p
      } = g.meta;
      (w = P[c]) == null || w.resolve({
        data: g.payload,
        meta: p
      }), delete P[c];
    } else if (f(g)) {
      const {
        requestId: c,
        rejectedWithValue: p,
        baseQueryMeta: h
      } = g.meta;
      (d = P[c]) == null || d.reject({
        error: g.payload ?? g.error,
        isUnhandledError: !p,
        meta: h
      }), delete P[c];
    }
  };
}, Ts = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: n
}) => (o, i) => {
  var f, _;
  e.util.resetApiState.match(o) && i.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(o) && o.payload === t && ((_ = (f = i.getState()[n]) == null ? void 0 : f.config) == null ? void 0 : _.middlewareRegistered) === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${n}".
You can only have one api per reducer path, this will lead to crashes in various situations!${n === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, Ns = ({
  api: e,
  queryThunk: t,
  internalState: n
}) => {
  const o = `${e.reducerPath}/subscriptions`;
  let i = null, f = null;
  const {
    updateSubscriptionOptions: _,
    unsubscribeQueryResult: P
  } = e.internalActions, g = (d, c) => {
    var p, h, O;
    if (_.match(c)) {
      const {
        queryCacheKey: b,
        requestId: s,
        options: l
      } = c.payload;
      return (p = d == null ? void 0 : d[b]) != null && p[s] && (d[b][s] = l), !0;
    }
    if (P.match(c)) {
      const {
        queryCacheKey: b,
        requestId: s
      } = c.payload;
      return d[b] && delete d[b][s], !0;
    }
    if (e.internalActions.removeQueryResult.match(c))
      return delete d[c.payload.queryCacheKey], !0;
    if (t.pending.match(c)) {
      const {
        meta: {
          arg: b,
          requestId: s
        }
      } = c, l = d[h = b.queryCacheKey] ?? (d[h] = {});
      return l[`${s}_running`] = {}, b.subscribe && (l[s] = b.subscriptionOptions ?? l[s] ?? {}), !0;
    }
    let E = !1;
    if (t.fulfilled.match(c) || t.rejected.match(c)) {
      const b = d[c.meta.arg.queryCacheKey] || {}, s = `${c.meta.requestId}_running`;
      E || (E = !!b[s]), delete b[s];
    }
    if (t.rejected.match(c)) {
      const {
        meta: {
          condition: b,
          arg: s,
          requestId: l
        }
      } = c;
      if (b && s.subscribe) {
        const u = d[O = s.queryCacheKey] ?? (d[O] = {});
        u[l] = s.subscriptionOptions ?? u[l] ?? {}, E = !0;
      }
    }
    return E;
  }, T = () => n.currentSubscriptions, w = {
    getSubscriptions: T,
    getSubscriptionCount: (d) => {
      const c = T()[d] ?? {};
      return $e(c);
    },
    isRequestSubscribed: (d, c) => {
      var p;
      const h = T();
      return !!((p = h == null ? void 0 : h[d]) != null && p[c]);
    }
  };
  return (d, c) => {
    if (i || (i = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(d))
      return i = n.currentSubscriptions = {}, f = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(d))
      return [!1, w];
    const p = g(n.currentSubscriptions, d);
    let h = !0;
    if (p) {
      f || (f = setTimeout(() => {
        const b = JSON.parse(JSON.stringify(n.currentSubscriptions)), [, s] = ro(i, () => b);
        c.next(e.internalActions.subscriptionsUpdated(s)), i = b, f = null;
      }, 500));
      const O = typeof d.type == "string" && !!d.type.startsWith(o), E = t.rejected.match(d) && d.meta.condition && !!d.meta.arg.subscribe;
      h = !O && !E;
    }
    return [h, !1];
  };
};
function As(e) {
  const {
    reducerPath: t,
    queryThunk: n,
    api: o,
    context: i
  } = e, {
    apiUid: f
  } = i, _ = {
    invalidateTags: he(`${t}/invalidateTags`)
  }, P = (w) => w.type.startsWith(`${t}/`), g = [Ts, Es, Os, ws, Rs, Ps];
  return {
    middleware: (w) => {
      let d = !1;
      const c = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: T,
        isThisApiSliceAction: P
      }, p = g.map((E) => E(c)), h = Ns(c), O = Ss(c);
      return (E) => (b) => {
        if (!Bn(b))
          return E(b);
        d || (d = !0, w.dispatch(o.internalActions.middlewareRegistered(f)));
        const s = {
          ...w,
          next: E
        }, l = w.getState(), [u, y] = h(b, s, l);
        let v;
        if (u ? v = E(b) : v = y, w.getState()[t] && (O(b, s, l), P(b) || i.hasRehydrationInfo(b)))
          for (let S of p)
            S(b, s, l);
        return v;
      };
    },
    actions: _
  };
  function T(w, d, c = {}) {
    return n({
      type: "query",
      endpointName: w.endpointName,
      originalArgs: w.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: d,
      ...c
    });
  }
}
function we(e, ...t) {
  return Object.assign(e, ...t);
}
var xn = /* @__PURE__ */ Symbol(), Is = ({
  createSelector: e = hr
} = {}) => ({
  name: xn,
  init(t, {
    baseQuery: n,
    tagTypes: o,
    reducerPath: i,
    serializeQueryArgs: f,
    keepUnusedDataFor: _,
    refetchOnMountOrArgChange: P,
    refetchOnFocus: g,
    refetchOnReconnect: T,
    invalidationBehavior: w
  }, d) {
    ba();
    const c = (K) => (typeof process < "u" && process.env.NODE_ENV === "development" && (o.includes(K.type) || console.error(`Tag type '${K.type}' was used, but not specified in \`tagTypes\`!`)), K);
    Object.assign(t, {
      reducerPath: i,
      endpoints: {},
      internalActions: {
        onOnline: br,
        onOffline: uo,
        onFocus: gr,
        onFocusLost: co
      },
      util: {}
    });
    const {
      queryThunk: p,
      mutationThunk: h,
      patchQueryData: O,
      updateQueryData: E,
      upsertQueryData: b,
      prefetch: s,
      buildMatchThunkActions: l
    } = ys({
      baseQuery: n,
      reducerPath: i,
      context: d,
      api: t,
      serializeQueryArgs: f,
      assertTagType: c
    }), {
      reducer: u,
      actions: y
    } = ms({
      context: d,
      queryThunk: p,
      mutationThunk: h,
      reducerPath: i,
      assertTagType: c,
      config: {
        refetchOnFocus: g,
        refetchOnReconnect: T,
        refetchOnMountOrArgChange: P,
        keepUnusedDataFor: _,
        reducerPath: i,
        invalidationBehavior: w
      }
    });
    we(t.util, {
      patchQueryData: O,
      updateQueryData: E,
      upsertQueryData: b,
      prefetch: s,
      resetApiState: y.resetApiState
    }), we(t.internalActions, y);
    const {
      middleware: v,
      actions: S
    } = As({
      reducerPath: i,
      context: d,
      queryThunk: p,
      mutationThunk: h,
      api: t,
      assertTagType: c
    });
    we(t.util, S), we(t, {
      reducer: u,
      middleware: v
    });
    const {
      buildQuerySelector: A,
      buildMutationSelector: D,
      selectInvalidatedBy: C,
      selectCachedArgsForQuery: x
    } = _s({
      serializeQueryArgs: f,
      reducerPath: i,
      createSelector: e
    });
    we(t.util, {
      selectInvalidatedBy: C,
      selectCachedArgsForQuery: x
    });
    const {
      buildInitiateQuery: j,
      buildInitiateMutation: F,
      getRunningMutationThunk: V,
      getRunningMutationsThunk: L,
      getRunningQueriesThunk: Q,
      getRunningQueryThunk: $
    } = hs({
      queryThunk: p,
      mutationThunk: h,
      api: t,
      serializeQueryArgs: f,
      context: d
    });
    return we(t.util, {
      getRunningMutationThunk: V,
      getRunningMutationsThunk: L,
      getRunningQueryThunk: $,
      getRunningQueriesThunk: Q
    }), {
      name: xn,
      injectEndpoint(K, oe) {
        var m;
        const I = t;
        (m = I.endpoints)[K] ?? (m[K] = {}), lo(oe) ? we(I.endpoints[K], {
          name: K,
          select: A(K, oe),
          initiate: j(K, oe)
        }, l(p, K)) : ds(oe) && we(I.endpoints[K], {
          name: K,
          select: D(),
          initiate: F(K)
        }, l(h, K));
      }
    };
  }
});
function Cs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cr = { exports: {} }, X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $n;
function ks() {
  if ($n)
    return X;
  $n = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), _ = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), T = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), d = Symbol.iterator;
  function c(m) {
    return m === null || typeof m != "object" ? null : (m = d && m[d] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var p = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, h = Object.assign, O = {};
  function E(m, I, M) {
    this.props = m, this.context = I, this.refs = O, this.updater = M || p;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(m, I) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, m, I, "setState");
  }, E.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function b() {
  }
  b.prototype = E.prototype;
  function s(m, I, M) {
    this.props = m, this.context = I, this.refs = O, this.updater = M || p;
  }
  var l = s.prototype = new b();
  l.constructor = s, h(l, E.prototype), l.isPureReactComponent = !0;
  var u = Array.isArray, y = Object.prototype.hasOwnProperty, v = { current: null }, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(m, I, M) {
    var B, z = {}, Z = null, se = null;
    if (I != null)
      for (B in I.ref !== void 0 && (se = I.ref), I.key !== void 0 && (Z = "" + I.key), I)
        y.call(I, B) && !S.hasOwnProperty(B) && (z[B] = I[B]);
    var ee = arguments.length - 2;
    if (ee === 1)
      z.children = M;
    else if (1 < ee) {
      for (var te = Array(ee), fe = 0; fe < ee; fe++)
        te[fe] = arguments[fe + 2];
      z.children = te;
    }
    if (m && m.defaultProps)
      for (B in ee = m.defaultProps, ee)
        z[B] === void 0 && (z[B] = ee[B]);
    return { $$typeof: e, type: m, key: Z, ref: se, props: z, _owner: v.current };
  }
  function D(m, I) {
    return { $$typeof: e, type: m.type, key: I, ref: m.ref, props: m.props, _owner: m._owner };
  }
  function C(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }
  function x(m) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(M) {
      return I[M];
    });
  }
  var j = /\/+/g;
  function F(m, I) {
    return typeof m == "object" && m !== null && m.key != null ? x("" + m.key) : I.toString(36);
  }
  function V(m, I, M, B, z) {
    var Z = typeof m;
    (Z === "undefined" || Z === "boolean") && (m = null);
    var se = !1;
    if (m === null)
      se = !0;
    else
      switch (Z) {
        case "string":
        case "number":
          se = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case e:
            case t:
              se = !0;
          }
      }
    if (se)
      return se = m, z = z(se), m = B === "" ? "." + F(se, 0) : B, u(z) ? (M = "", m != null && (M = m.replace(j, "$&/") + "/"), V(z, I, M, "", function(fe) {
        return fe;
      })) : z != null && (C(z) && (z = D(z, M + (!z.key || se && se.key === z.key ? "" : ("" + z.key).replace(j, "$&/") + "/") + m)), I.push(z)), 1;
    if (se = 0, B = B === "" ? "." : B + ":", u(m))
      for (var ee = 0; ee < m.length; ee++) {
        Z = m[ee];
        var te = B + F(Z, ee);
        se += V(Z, I, M, te, z);
      }
    else if (te = c(m), typeof te == "function")
      for (m = te.call(m), ee = 0; !(Z = m.next()).done; )
        Z = Z.value, te = B + F(Z, ee++), se += V(Z, I, M, te, z);
    else if (Z === "object")
      throw I = String(m), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return se;
  }
  function L(m, I, M) {
    if (m == null)
      return m;
    var B = [], z = 0;
    return V(m, B, "", "", function(Z) {
      return I.call(M, Z, z++);
    }), B;
  }
  function Q(m) {
    if (m._status === -1) {
      var I = m._result;
      I = I(), I.then(function(M) {
        (m._status === 0 || m._status === -1) && (m._status = 1, m._result = M);
      }, function(M) {
        (m._status === 0 || m._status === -1) && (m._status = 2, m._result = M);
      }), m._status === -1 && (m._status = 0, m._result = I);
    }
    if (m._status === 1)
      return m._result.default;
    throw m._result;
  }
  var $ = { current: null }, K = { transition: null }, oe = { ReactCurrentDispatcher: $, ReactCurrentBatchConfig: K, ReactCurrentOwner: v };
  return X.Children = { map: L, forEach: function(m, I, M) {
    L(m, function() {
      I.apply(this, arguments);
    }, M);
  }, count: function(m) {
    var I = 0;
    return L(m, function() {
      I++;
    }), I;
  }, toArray: function(m) {
    return L(m, function(I) {
      return I;
    }) || [];
  }, only: function(m) {
    if (!C(m))
      throw Error("React.Children.only expected to receive a single React element child.");
    return m;
  } }, X.Component = E, X.Fragment = n, X.Profiler = i, X.PureComponent = s, X.StrictMode = o, X.Suspense = g, X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe, X.cloneElement = function(m, I, M) {
    if (m == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
    var B = h({}, m.props), z = m.key, Z = m.ref, se = m._owner;
    if (I != null) {
      if (I.ref !== void 0 && (Z = I.ref, se = v.current), I.key !== void 0 && (z = "" + I.key), m.type && m.type.defaultProps)
        var ee = m.type.defaultProps;
      for (te in I)
        y.call(I, te) && !S.hasOwnProperty(te) && (B[te] = I[te] === void 0 && ee !== void 0 ? ee[te] : I[te]);
    }
    var te = arguments.length - 2;
    if (te === 1)
      B.children = M;
    else if (1 < te) {
      ee = Array(te);
      for (var fe = 0; fe < te; fe++)
        ee[fe] = arguments[fe + 2];
      B.children = ee;
    }
    return { $$typeof: e, type: m.type, key: z, ref: Z, props: B, _owner: se };
  }, X.createContext = function(m) {
    return m = { $$typeof: _, _currentValue: m, _currentValue2: m, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, m.Provider = { $$typeof: f, _context: m }, m.Consumer = m;
  }, X.createElement = A, X.createFactory = function(m) {
    var I = A.bind(null, m);
    return I.type = m, I;
  }, X.createRef = function() {
    return { current: null };
  }, X.forwardRef = function(m) {
    return { $$typeof: P, render: m };
  }, X.isValidElement = C, X.lazy = function(m) {
    return { $$typeof: w, _payload: { _status: -1, _result: m }, _init: Q };
  }, X.memo = function(m, I) {
    return { $$typeof: T, type: m, compare: I === void 0 ? null : I };
  }, X.startTransition = function(m) {
    var I = K.transition;
    K.transition = {};
    try {
      m();
    } finally {
      K.transition = I;
    }
  }, X.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, X.useCallback = function(m, I) {
    return $.current.useCallback(m, I);
  }, X.useContext = function(m) {
    return $.current.useContext(m);
  }, X.useDebugValue = function() {
  }, X.useDeferredValue = function(m) {
    return $.current.useDeferredValue(m);
  }, X.useEffect = function(m, I) {
    return $.current.useEffect(m, I);
  }, X.useId = function() {
    return $.current.useId();
  }, X.useImperativeHandle = function(m, I, M) {
    return $.current.useImperativeHandle(m, I, M);
  }, X.useInsertionEffect = function(m, I) {
    return $.current.useInsertionEffect(m, I);
  }, X.useLayoutEffect = function(m, I) {
    return $.current.useLayoutEffect(m, I);
  }, X.useMemo = function(m, I) {
    return $.current.useMemo(m, I);
  }, X.useReducer = function(m, I, M) {
    return $.current.useReducer(m, I, M);
  }, X.useRef = function(m) {
    return $.current.useRef(m);
  }, X.useState = function(m) {
    return $.current.useState(m);
  }, X.useSyncExternalStore = function(m, I, M) {
    return $.current.useSyncExternalStore(m, I, M);
  }, X.useTransition = function() {
    return $.current.useTransition();
  }, X.version = "18.2.0", X;
}
var Ot = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ot.exports;
var Ln;
function js() {
  return Ln || (Ln = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = "18.2.0", o = Symbol.for("react.element"), i = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), T = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), E = Symbol.iterator, b = "@@iterator";
      function s(r) {
        if (r === null || typeof r != "object")
          return null;
        var a = E && r[E] || r[b];
        return typeof a == "function" ? a : null;
      }
      var l = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, u = {
        transition: null
      }, y = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, v = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, S = {}, A = null;
      function D(r) {
        A = r;
      }
      S.setExtraStackFrame = function(r) {
        A = r;
      }, S.getCurrentStack = null, S.getStackAddendum = function() {
        var r = "";
        A && (r += A);
        var a = S.getCurrentStack;
        return a && (r += a() || ""), r;
      };
      var C = !1, x = !1, j = !1, F = !1, V = !1, L = {
        ReactCurrentDispatcher: l,
        ReactCurrentBatchConfig: u,
        ReactCurrentOwner: v
      };
      L.ReactDebugCurrentFrame = S, L.ReactCurrentActQueue = y;
      function Q(r) {
        {
          for (var a = arguments.length, R = new Array(a > 1 ? a - 1 : 0), N = 1; N < a; N++)
            R[N - 1] = arguments[N];
          K("warn", r, R);
        }
      }
      function $(r) {
        {
          for (var a = arguments.length, R = new Array(a > 1 ? a - 1 : 0), N = 1; N < a; N++)
            R[N - 1] = arguments[N];
          K("error", r, R);
        }
      }
      function K(r, a, R) {
        {
          var N = L.ReactDebugCurrentFrame, k = N.getStackAddendum();
          k !== "" && (a += "%s", R = R.concat([k]));
          var U = R.map(function(q) {
            return String(q);
          });
          U.unshift("Warning: " + a), Function.prototype.apply.call(console[r], console, U);
        }
      }
      var oe = {};
      function m(r, a) {
        {
          var R = r.constructor, N = R && (R.displayName || R.name) || "ReactClass", k = N + "." + a;
          if (oe[k])
            return;
          $("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", a, N), oe[k] = !0;
        }
      }
      var I = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(r) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(r, a, R) {
          m(r, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(r, a, R, N) {
          m(r, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(r, a, R, N) {
          m(r, "setState");
        }
      }, M = Object.assign, B = {};
      Object.freeze(B);
      function z(r, a, R) {
        this.props = r, this.context = a, this.refs = B, this.updater = R || I;
      }
      z.prototype.isReactComponent = {}, z.prototype.setState = function(r, a) {
        if (typeof r != "object" && typeof r != "function" && r != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, r, a, "setState");
      }, z.prototype.forceUpdate = function(r) {
        this.updater.enqueueForceUpdate(this, r, "forceUpdate");
      };
      {
        var Z = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, se = function(r, a) {
          Object.defineProperty(z.prototype, r, {
            get: function() {
              Q("%s(...) is deprecated in plain JavaScript React classes. %s", a[0], a[1]);
            }
          });
        };
        for (var ee in Z)
          Z.hasOwnProperty(ee) && se(ee, Z[ee]);
      }
      function te() {
      }
      te.prototype = z.prototype;
      function fe(r, a, R) {
        this.props = r, this.context = a, this.refs = B, this.updater = R || I;
      }
      var Nt = fe.prototype = new te();
      Nt.constructor = fe, M(Nt, z.prototype), Nt.isPureReactComponent = !0;
      function wo() {
        var r = {
          current: null
        };
        return Object.seal(r), r;
      }
      var So = Array.isArray;
      function it(r) {
        return So(r);
      }
      function Ro(r) {
        {
          var a = typeof Symbol == "function" && Symbol.toStringTag, R = a && r[Symbol.toStringTag] || r.constructor.name || "Object";
          return R;
        }
      }
      function Po(r) {
        try {
          return Rr(r), !1;
        } catch {
          return !0;
        }
      }
      function Rr(r) {
        return "" + r;
      }
      function at(r) {
        if (Po(r))
          return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ro(r)), Rr(r);
      }
      function To(r, a, R) {
        var N = r.displayName;
        if (N)
          return N;
        var k = a.displayName || a.name || "";
        return k !== "" ? R + "(" + k + ")" : R;
      }
      function Pr(r) {
        return r.displayName || "Context";
      }
      function Oe(r) {
        if (r == null)
          return null;
        if (typeof r.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
        switch (r) {
          case f:
            return "Fragment";
          case i:
            return "Portal";
          case P:
            return "Profiler";
          case _:
            return "StrictMode";
          case d:
            return "Suspense";
          case c:
            return "SuspenseList";
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case T:
              var a = r;
              return Pr(a) + ".Consumer";
            case g:
              var R = r;
              return Pr(R._context) + ".Provider";
            case w:
              return To(r, r.render, "ForwardRef");
            case p:
              var N = r.displayName || null;
              return N !== null ? N : Oe(r.type) || "Memo";
            case h: {
              var k = r, U = k._payload, q = k._init;
              try {
                return Oe(q(U));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var qe = Object.prototype.hasOwnProperty, Tr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Nr, Ar, At;
      At = {};
      function Ir(r) {
        if (qe.call(r, "ref")) {
          var a = Object.getOwnPropertyDescriptor(r, "ref").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return r.ref !== void 0;
      }
      function Cr(r) {
        if (qe.call(r, "key")) {
          var a = Object.getOwnPropertyDescriptor(r, "key").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return r.key !== void 0;
      }
      function No(r, a) {
        var R = function() {
          Nr || (Nr = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        R.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: R,
          configurable: !0
        });
      }
      function Ao(r, a) {
        var R = function() {
          Ar || (Ar = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        R.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: R,
          configurable: !0
        });
      }
      function Io(r) {
        if (typeof r.ref == "string" && v.current && r.__self && v.current.stateNode !== r.__self) {
          var a = Oe(v.current.type);
          At[a] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', a, r.ref), At[a] = !0);
        }
      }
      var It = function(r, a, R, N, k, U, q) {
        var H = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: o,
          // Built-in properties that belong on the element
          type: r,
          key: a,
          ref: R,
          props: q,
          // Record the component responsible for creating this element.
          _owner: U
        };
        return H._store = {}, Object.defineProperty(H._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(H, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: N
        }), Object.defineProperty(H, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: k
        }), Object.freeze && (Object.freeze(H.props), Object.freeze(H)), H;
      };
      function Co(r, a, R) {
        var N, k = {}, U = null, q = null, H = null, W = null;
        if (a != null) {
          Ir(a) && (q = a.ref, Io(a)), Cr(a) && (at(a.key), U = "" + a.key), H = a.__self === void 0 ? null : a.__self, W = a.__source === void 0 ? null : a.__source;
          for (N in a)
            qe.call(a, N) && !Tr.hasOwnProperty(N) && (k[N] = a[N]);
        }
        var Y = arguments.length - 2;
        if (Y === 1)
          k.children = R;
        else if (Y > 1) {
          for (var re = Array(Y), ne = 0; ne < Y; ne++)
            re[ne] = arguments[ne + 2];
          Object.freeze && Object.freeze(re), k.children = re;
        }
        if (r && r.defaultProps) {
          var ie = r.defaultProps;
          for (N in ie)
            k[N] === void 0 && (k[N] = ie[N]);
        }
        if (U || q) {
          var ce = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          U && No(k, ce), q && Ao(k, ce);
        }
        return It(r, U, q, H, W, v.current, k);
      }
      function ko(r, a) {
        var R = It(r.type, a, r.ref, r._self, r._source, r._owner, r.props);
        return R;
      }
      function jo(r, a, R) {
        if (r == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
        var N, k = M({}, r.props), U = r.key, q = r.ref, H = r._self, W = r._source, Y = r._owner;
        if (a != null) {
          Ir(a) && (q = a.ref, Y = v.current), Cr(a) && (at(a.key), U = "" + a.key);
          var re;
          r.type && r.type.defaultProps && (re = r.type.defaultProps);
          for (N in a)
            qe.call(a, N) && !Tr.hasOwnProperty(N) && (a[N] === void 0 && re !== void 0 ? k[N] = re[N] : k[N] = a[N]);
        }
        var ne = arguments.length - 2;
        if (ne === 1)
          k.children = R;
        else if (ne > 1) {
          for (var ie = Array(ne), ce = 0; ce < ne; ce++)
            ie[ce] = arguments[ce + 2];
          k.children = ie;
        }
        return It(r.type, U, q, H, W, Y, k);
      }
      function ke(r) {
        return typeof r == "object" && r !== null && r.$$typeof === o;
      }
      var kr = ".", Do = ":";
      function xo(r) {
        var a = /[=:]/g, R = {
          "=": "=0",
          ":": "=2"
        }, N = r.replace(a, function(k) {
          return R[k];
        });
        return "$" + N;
      }
      var jr = !1, $o = /\/+/g;
      function Dr(r) {
        return r.replace($o, "$&/");
      }
      function Ct(r, a) {
        return typeof r == "object" && r !== null && r.key != null ? (at(r.key), xo("" + r.key)) : a.toString(36);
      }
      function st(r, a, R, N, k) {
        var U = typeof r;
        (U === "undefined" || U === "boolean") && (r = null);
        var q = !1;
        if (r === null)
          q = !0;
        else
          switch (U) {
            case "string":
            case "number":
              q = !0;
              break;
            case "object":
              switch (r.$$typeof) {
                case o:
                case i:
                  q = !0;
              }
          }
        if (q) {
          var H = r, W = k(H), Y = N === "" ? kr + Ct(H, 0) : N;
          if (it(W)) {
            var re = "";
            Y != null && (re = Dr(Y) + "/"), st(W, a, re, "", function(Ai) {
              return Ai;
            });
          } else
            W != null && (ke(W) && (W.key && (!H || H.key !== W.key) && at(W.key), W = ko(
              W,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              R + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (W.key && (!H || H.key !== W.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Dr("" + W.key) + "/"
              ) : "") + Y
            )), a.push(W));
          return 1;
        }
        var ne, ie, ce = 0, le = N === "" ? kr : N + Do;
        if (it(r))
          for (var yt = 0; yt < r.length; yt++)
            ne = r[yt], ie = le + Ct(ne, yt), ce += st(ne, a, R, ie, k);
        else {
          var Mt = s(r);
          if (typeof Mt == "function") {
            var on = r;
            Mt === on.entries && (jr || Q("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), jr = !0);
            for (var Ti = Mt.call(on), an, Ni = 0; !(an = Ti.next()).done; )
              ne = an.value, ie = le + Ct(ne, Ni++), ce += st(ne, a, R, ie, k);
          } else if (U === "object") {
            var sn = String(r);
            throw new Error("Objects are not valid as a React child (found: " + (sn === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : sn) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ce;
      }
      function ct(r, a, R) {
        if (r == null)
          return r;
        var N = [], k = 0;
        return st(r, N, "", "", function(U) {
          return a.call(R, U, k++);
        }), N;
      }
      function Lo(r) {
        var a = 0;
        return ct(r, function() {
          a++;
        }), a;
      }
      function qo(r, a, R) {
        ct(r, function() {
          a.apply(this, arguments);
        }, R);
      }
      function Fo(r) {
        return ct(r, function(a) {
          return a;
        }) || [];
      }
      function Mo(r) {
        if (!ke(r))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return r;
      }
      function Vo(r) {
        var a = {
          $$typeof: T,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: r,
          _currentValue2: r,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        a.Provider = {
          $$typeof: g,
          _context: a
        };
        var R = !1, N = !1, k = !1;
        {
          var U = {
            $$typeof: T,
            _context: a
          };
          Object.defineProperties(U, {
            Provider: {
              get: function() {
                return N || (N = !0, $("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), a.Provider;
              },
              set: function(q) {
                a.Provider = q;
              }
            },
            _currentValue: {
              get: function() {
                return a._currentValue;
              },
              set: function(q) {
                a._currentValue = q;
              }
            },
            _currentValue2: {
              get: function() {
                return a._currentValue2;
              },
              set: function(q) {
                a._currentValue2 = q;
              }
            },
            _threadCount: {
              get: function() {
                return a._threadCount;
              },
              set: function(q) {
                a._threadCount = q;
              }
            },
            Consumer: {
              get: function() {
                return R || (R = !0, $("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), a.Consumer;
              }
            },
            displayName: {
              get: function() {
                return a.displayName;
              },
              set: function(q) {
                k || (Q("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", q), k = !0);
              }
            }
          }), a.Consumer = U;
        }
        return a._currentRenderer = null, a._currentRenderer2 = null, a;
      }
      var Fe = -1, kt = 0, xr = 1, zo = 2;
      function Uo(r) {
        if (r._status === Fe) {
          var a = r._result, R = a();
          if (R.then(function(U) {
            if (r._status === kt || r._status === Fe) {
              var q = r;
              q._status = xr, q._result = U;
            }
          }, function(U) {
            if (r._status === kt || r._status === Fe) {
              var q = r;
              q._status = zo, q._result = U;
            }
          }), r._status === Fe) {
            var N = r;
            N._status = kt, N._result = R;
          }
        }
        if (r._status === xr) {
          var k = r._result;
          return k === void 0 && $(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, k), "default" in k || $(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, k), k.default;
        } else
          throw r._result;
      }
      function Qo(r) {
        var a = {
          // We use these fields to store the result.
          _status: Fe,
          _result: r
        }, R = {
          $$typeof: h,
          _payload: a,
          _init: Uo
        };
        {
          var N, k;
          Object.defineProperties(R, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return N;
              },
              set: function(U) {
                $("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), N = U, Object.defineProperty(R, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return k;
              },
              set: function(U) {
                $("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), k = U, Object.defineProperty(R, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return R;
      }
      function Ho(r) {
        r != null && r.$$typeof === p ? $("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof r != "function" ? $("forwardRef requires a render function but was given %s.", r === null ? "null" : typeof r) : r.length !== 0 && r.length !== 2 && $("forwardRef render functions accept exactly two parameters: props and ref. %s", r.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), r != null && (r.defaultProps != null || r.propTypes != null) && $("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var a = {
          $$typeof: w,
          render: r
        };
        {
          var R;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return R;
            },
            set: function(N) {
              R = N, !r.name && !r.displayName && (r.displayName = N);
            }
          });
        }
        return a;
      }
      var $r;
      $r = Symbol.for("react.module.reference");
      function Lr(r) {
        return !!(typeof r == "string" || typeof r == "function" || r === f || r === P || V || r === _ || r === d || r === c || F || r === O || C || x || j || typeof r == "object" && r !== null && (r.$$typeof === h || r.$$typeof === p || r.$$typeof === g || r.$$typeof === T || r.$$typeof === w || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        r.$$typeof === $r || r.getModuleId !== void 0));
      }
      function Go(r, a) {
        Lr(r) || $("memo: The first argument must be a component. Instead received: %s", r === null ? "null" : typeof r);
        var R = {
          $$typeof: p,
          type: r,
          compare: a === void 0 ? null : a
        };
        {
          var N;
          Object.defineProperty(R, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(k) {
              N = k, !r.name && !r.displayName && (r.displayName = k);
            }
          });
        }
        return R;
      }
      function pe() {
        var r = l.current;
        return r === null && $(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), r;
      }
      function Ko(r) {
        var a = pe();
        if (r._context !== void 0) {
          var R = r._context;
          R.Consumer === r ? $("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : R.Provider === r && $("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return a.useContext(r);
      }
      function Bo(r) {
        var a = pe();
        return a.useState(r);
      }
      function Xo(r, a, R) {
        var N = pe();
        return N.useReducer(r, a, R);
      }
      function Wo(r) {
        var a = pe();
        return a.useRef(r);
      }
      function Yo(r, a) {
        var R = pe();
        return R.useEffect(r, a);
      }
      function Jo(r, a) {
        var R = pe();
        return R.useInsertionEffect(r, a);
      }
      function Zo(r, a) {
        var R = pe();
        return R.useLayoutEffect(r, a);
      }
      function ei(r, a) {
        var R = pe();
        return R.useCallback(r, a);
      }
      function ti(r, a) {
        var R = pe();
        return R.useMemo(r, a);
      }
      function ri(r, a, R) {
        var N = pe();
        return N.useImperativeHandle(r, a, R);
      }
      function ni(r, a) {
        {
          var R = pe();
          return R.useDebugValue(r, a);
        }
      }
      function oi() {
        var r = pe();
        return r.useTransition();
      }
      function ii(r) {
        var a = pe();
        return a.useDeferredValue(r);
      }
      function ai() {
        var r = pe();
        return r.useId();
      }
      function si(r, a, R) {
        var N = pe();
        return N.useSyncExternalStore(r, a, R);
      }
      var Me = 0, qr, Fr, Mr, Vr, zr, Ur, Qr;
      function Hr() {
      }
      Hr.__reactDisabledLog = !0;
      function ci() {
        {
          if (Me === 0) {
            qr = console.log, Fr = console.info, Mr = console.warn, Vr = console.error, zr = console.group, Ur = console.groupCollapsed, Qr = console.groupEnd;
            var r = {
              configurable: !0,
              enumerable: !0,
              value: Hr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: r,
              log: r,
              warn: r,
              error: r,
              group: r,
              groupCollapsed: r,
              groupEnd: r
            });
          }
          Me++;
        }
      }
      function ui() {
        {
          if (Me--, Me === 0) {
            var r = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: M({}, r, {
                value: qr
              }),
              info: M({}, r, {
                value: Fr
              }),
              warn: M({}, r, {
                value: Mr
              }),
              error: M({}, r, {
                value: Vr
              }),
              group: M({}, r, {
                value: zr
              }),
              groupCollapsed: M({}, r, {
                value: Ur
              }),
              groupEnd: M({}, r, {
                value: Qr
              })
            });
          }
          Me < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var jt = L.ReactCurrentDispatcher, Dt;
      function ut(r, a, R) {
        {
          if (Dt === void 0)
            try {
              throw Error();
            } catch (k) {
              var N = k.stack.trim().match(/\n( *(at )?)/);
              Dt = N && N[1] || "";
            }
          return `
` + Dt + r;
        }
      }
      var xt = !1, lt;
      {
        var li = typeof WeakMap == "function" ? WeakMap : Map;
        lt = new li();
      }
      function Gr(r, a) {
        if (!r || xt)
          return "";
        {
          var R = lt.get(r);
          if (R !== void 0)
            return R;
        }
        var N;
        xt = !0;
        var k = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var U;
        U = jt.current, jt.current = null, ci();
        try {
          if (a) {
            var q = function() {
              throw Error();
            };
            if (Object.defineProperty(q.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(q, []);
              } catch (le) {
                N = le;
              }
              Reflect.construct(r, [], q);
            } else {
              try {
                q.call();
              } catch (le) {
                N = le;
              }
              r.call(q.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (le) {
              N = le;
            }
            r();
          }
        } catch (le) {
          if (le && N && typeof le.stack == "string") {
            for (var H = le.stack.split(`
`), W = N.stack.split(`
`), Y = H.length - 1, re = W.length - 1; Y >= 1 && re >= 0 && H[Y] !== W[re]; )
              re--;
            for (; Y >= 1 && re >= 0; Y--, re--)
              if (H[Y] !== W[re]) {
                if (Y !== 1 || re !== 1)
                  do
                    if (Y--, re--, re < 0 || H[Y] !== W[re]) {
                      var ne = `
` + H[Y].replace(" at new ", " at ");
                      return r.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", r.displayName)), typeof r == "function" && lt.set(r, ne), ne;
                    }
                  while (Y >= 1 && re >= 0);
                break;
              }
          }
        } finally {
          xt = !1, jt.current = U, ui(), Error.prepareStackTrace = k;
        }
        var ie = r ? r.displayName || r.name : "", ce = ie ? ut(ie) : "";
        return typeof r == "function" && lt.set(r, ce), ce;
      }
      function di(r, a, R) {
        return Gr(r, !1);
      }
      function fi(r) {
        var a = r.prototype;
        return !!(a && a.isReactComponent);
      }
      function dt(r, a, R) {
        if (r == null)
          return "";
        if (typeof r == "function")
          return Gr(r, fi(r));
        if (typeof r == "string")
          return ut(r);
        switch (r) {
          case d:
            return ut("Suspense");
          case c:
            return ut("SuspenseList");
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case w:
              return di(r.render);
            case p:
              return dt(r.type, a, R);
            case h: {
              var N = r, k = N._payload, U = N._init;
              try {
                return dt(U(k), a, R);
              } catch {
              }
            }
          }
        return "";
      }
      var Kr = {}, Br = L.ReactDebugCurrentFrame;
      function ft(r) {
        if (r) {
          var a = r._owner, R = dt(r.type, r._source, a ? a.type : null);
          Br.setExtraStackFrame(R);
        } else
          Br.setExtraStackFrame(null);
      }
      function pi(r, a, R, N, k) {
        {
          var U = Function.call.bind(qe);
          for (var q in r)
            if (U(r, q)) {
              var H = void 0;
              try {
                if (typeof r[q] != "function") {
                  var W = Error((N || "React class") + ": " + R + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw W.name = "Invariant Violation", W;
                }
                H = r[q](a, q, N, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Y) {
                H = Y;
              }
              H && !(H instanceof Error) && (ft(k), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", R, q, typeof H), ft(null)), H instanceof Error && !(H.message in Kr) && (Kr[H.message] = !0, ft(k), $("Failed %s type: %s", R, H.message), ft(null));
            }
        }
      }
      function je(r) {
        if (r) {
          var a = r._owner, R = dt(r.type, r._source, a ? a.type : null);
          D(R);
        } else
          D(null);
      }
      var $t;
      $t = !1;
      function Xr() {
        if (v.current) {
          var r = Oe(v.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
      function hi(r) {
        if (r !== void 0) {
          var a = r.fileName.replace(/^.*[\\\/]/, ""), R = r.lineNumber;
          return `

Check your code at ` + a + ":" + R + ".";
        }
        return "";
      }
      function yi(r) {
        return r != null ? hi(r.__source) : "";
      }
      var Wr = {};
      function mi(r) {
        var a = Xr();
        if (!a) {
          var R = typeof r == "string" ? r : r.displayName || r.name;
          R && (a = `

Check the top-level render call using <` + R + ">.");
        }
        return a;
      }
      function Yr(r, a) {
        if (!(!r._store || r._store.validated || r.key != null)) {
          r._store.validated = !0;
          var R = mi(a);
          if (!Wr[R]) {
            Wr[R] = !0;
            var N = "";
            r && r._owner && r._owner !== v.current && (N = " It was passed a child from " + Oe(r._owner.type) + "."), je(r), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, N), je(null);
          }
        }
      }
      function Jr(r, a) {
        if (typeof r == "object") {
          if (it(r))
            for (var R = 0; R < r.length; R++) {
              var N = r[R];
              ke(N) && Yr(N, a);
            }
          else if (ke(r))
            r._store && (r._store.validated = !0);
          else if (r) {
            var k = s(r);
            if (typeof k == "function" && k !== r.entries)
              for (var U = k.call(r), q; !(q = U.next()).done; )
                ke(q.value) && Yr(q.value, a);
          }
        }
      }
      function Zr(r) {
        {
          var a = r.type;
          if (a == null || typeof a == "string")
            return;
          var R;
          if (typeof a == "function")
            R = a.propTypes;
          else if (typeof a == "object" && (a.$$typeof === w || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          a.$$typeof === p))
            R = a.propTypes;
          else
            return;
          if (R) {
            var N = Oe(a);
            pi(R, r.props, "prop", N, r);
          } else if (a.PropTypes !== void 0 && !$t) {
            $t = !0;
            var k = Oe(a);
            $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
          }
          typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function _i(r) {
        {
          for (var a = Object.keys(r.props), R = 0; R < a.length; R++) {
            var N = a[R];
            if (N !== "children" && N !== "key") {
              je(r), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), je(null);
              break;
            }
          }
          r.ref !== null && (je(r), $("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
        }
      }
      function en(r, a, R) {
        var N = Lr(r);
        if (!N) {
          var k = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var U = yi(a);
          U ? k += U : k += Xr();
          var q;
          r === null ? q = "null" : it(r) ? q = "array" : r !== void 0 && r.$$typeof === o ? (q = "<" + (Oe(r.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : q = typeof r, $("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", q, k);
        }
        var H = Co.apply(this, arguments);
        if (H == null)
          return H;
        if (N)
          for (var W = 2; W < arguments.length; W++)
            Jr(arguments[W], r);
        return r === f ? _i(H) : Zr(H), H;
      }
      var tn = !1;
      function gi(r) {
        var a = en.bind(null, r);
        return a.type = r, tn || (tn = !0, Q("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(a, "type", {
          enumerable: !1,
          get: function() {
            return Q("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: r
            }), r;
          }
        }), a;
      }
      function bi(r, a, R) {
        for (var N = jo.apply(this, arguments), k = 2; k < arguments.length; k++)
          Jr(arguments[k], N.type);
        return Zr(N), N;
      }
      function vi(r, a) {
        var R = u.transition;
        u.transition = {};
        var N = u.transition;
        u.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          r();
        } finally {
          if (u.transition = R, R === null && N._updatedFibers) {
            var k = N._updatedFibers.size;
            k > 10 && Q("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), N._updatedFibers.clear();
          }
        }
      }
      var rn = !1, pt = null;
      function Ei(r) {
        if (pt === null)
          try {
            var a = ("require" + Math.random()).slice(0, 7), R = e && e[a];
            pt = R.call(e, "timers").setImmediate;
          } catch {
            pt = function(N) {
              rn === !1 && (rn = !0, typeof MessageChannel > "u" && $("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var k = new MessageChannel();
              k.port1.onmessage = N, k.port2.postMessage(void 0);
            };
          }
        return pt(r);
      }
      var De = 0, nn = !1;
      function Oi(r) {
        {
          var a = De;
          De++, y.current === null && (y.current = []);
          var R = y.isBatchingLegacy, N;
          try {
            if (y.isBatchingLegacy = !0, N = r(), !R && y.didScheduleLegacyUpdate) {
              var k = y.current;
              k !== null && (y.didScheduleLegacyUpdate = !1, Ft(k));
            }
          } catch (ie) {
            throw ht(a), ie;
          } finally {
            y.isBatchingLegacy = R;
          }
          if (N !== null && typeof N == "object" && typeof N.then == "function") {
            var U = N, q = !1, H = {
              then: function(ie, ce) {
                q = !0, U.then(function(le) {
                  ht(a), De === 0 ? Lt(le, ie, ce) : ie(le);
                }, function(le) {
                  ht(a), ce(le);
                });
              }
            };
            return !nn && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              q || (nn = !0, $("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), H;
          } else {
            var W = N;
            if (ht(a), De === 0) {
              var Y = y.current;
              Y !== null && (Ft(Y), y.current = null);
              var re = {
                then: function(ie, ce) {
                  y.current === null ? (y.current = [], Lt(W, ie, ce)) : ie(W);
                }
              };
              return re;
            } else {
              var ne = {
                then: function(ie, ce) {
                  ie(W);
                }
              };
              return ne;
            }
          }
        }
      }
      function ht(r) {
        r !== De - 1 && $("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), De = r;
      }
      function Lt(r, a, R) {
        {
          var N = y.current;
          if (N !== null)
            try {
              Ft(N), Ei(function() {
                N.length === 0 ? (y.current = null, a(r)) : Lt(r, a, R);
              });
            } catch (k) {
              R(k);
            }
          else
            a(r);
        }
      }
      var qt = !1;
      function Ft(r) {
        if (!qt) {
          qt = !0;
          var a = 0;
          try {
            for (; a < r.length; a++) {
              var R = r[a];
              do
                R = R(!0);
              while (R !== null);
            }
            r.length = 0;
          } catch (N) {
            throw r = r.slice(a + 1), N;
          } finally {
            qt = !1;
          }
        }
      }
      var wi = en, Si = bi, Ri = gi, Pi = {
        map: ct,
        forEach: qo,
        count: Lo,
        toArray: Fo,
        only: Mo
      };
      t.Children = Pi, t.Component = z, t.Fragment = f, t.Profiler = P, t.PureComponent = fe, t.StrictMode = _, t.Suspense = d, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L, t.cloneElement = Si, t.createContext = Vo, t.createElement = wi, t.createFactory = Ri, t.createRef = wo, t.forwardRef = Ho, t.isValidElement = ke, t.lazy = Qo, t.memo = Go, t.startTransition = vi, t.unstable_act = Oi, t.useCallback = ei, t.useContext = Ko, t.useDebugValue = ni, t.useDeferredValue = ii, t.useEffect = Yo, t.useId = ai, t.useImperativeHandle = ri, t.useInsertionEffect = Jo, t.useLayoutEffect = Zo, t.useMemo = ti, t.useReducer = Xo, t.useRef = Wo, t.useState = Bo, t.useSyncExternalStore = si, t.useTransition = oi, t.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ot, Ot.exports)), Ot.exports;
}
process.env.NODE_ENV === "production" ? cr.exports = ks() : cr.exports = js();
var G = cr.exports;
const ho = /* @__PURE__ */ Cs(G), qn = /* @__PURE__ */ Di({
  __proto__: null,
  default: ho
}, [G]);
var ur = { exports: {} }, Gt = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fn;
function Ds() {
  if (Fn)
    return Gt;
  Fn = 1;
  var e = G;
  function t(g, T) {
    return g === T && (g !== 0 || 1 / g === 1 / T) || g !== g && T !== T;
  }
  var n = typeof Object.is == "function" ? Object.is : t, o = e.useSyncExternalStore, i = e.useRef, f = e.useEffect, _ = e.useMemo, P = e.useDebugValue;
  return Gt.useSyncExternalStoreWithSelector = function(g, T, w, d, c) {
    var p = i(null);
    if (p.current === null) {
      var h = { hasValue: !1, value: null };
      p.current = h;
    } else
      h = p.current;
    p = _(function() {
      function E(y) {
        if (!b) {
          if (b = !0, s = y, y = d(y), c !== void 0 && h.hasValue) {
            var v = h.value;
            if (c(v, y))
              return l = v;
          }
          return l = y;
        }
        if (v = l, n(s, y))
          return v;
        var S = d(y);
        return c !== void 0 && c(v, S) ? v : (s = y, l = S);
      }
      var b = !1, s, l, u = w === void 0 ? null : w;
      return [function() {
        return E(T());
      }, u === null ? void 0 : function() {
        return E(u());
      }];
    }, [T, w, d, c]);
    var O = o(g, p[0], p[1]);
    return f(function() {
      h.hasValue = !0, h.value = O;
    }, [O]), P(O), O;
  }, Gt;
}
var Mn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function xs() {
  return Vn || (Vn = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = G;
    function t(T, w) {
      return T === w && (T !== 0 || 1 / T === 1 / w) || T !== T && w !== w;
    }
    var n = typeof Object.is == "function" ? Object.is : t, o = e.useSyncExternalStore, i = e.useRef, f = e.useEffect, _ = e.useMemo, P = e.useDebugValue;
    function g(T, w, d, c, p) {
      var h = i(null), O;
      h.current === null ? (O = {
        hasValue: !1,
        value: null
      }, h.current = O) : O = h.current;
      var E = _(function() {
        var u = !1, y, v, S = function(x) {
          if (!u) {
            u = !0, y = x;
            var j = c(x);
            if (p !== void 0 && O.hasValue) {
              var F = O.value;
              if (p(F, j))
                return v = F, F;
            }
            return v = j, j;
          }
          var V = y, L = v;
          if (n(V, x))
            return L;
          var Q = c(x);
          return p !== void 0 && p(L, Q) ? L : (y = x, v = Q, Q);
        }, A = d === void 0 ? null : d, D = function() {
          return S(w());
        }, C = A === null ? void 0 : function() {
          return S(A());
        };
        return [D, C];
      }, [w, d, c, p]), b = E[0], s = E[1], l = o(T, b, s);
      return f(function() {
        O.hasValue = !0, O.value = l;
      }, [l]), P(l), l;
    }
    Mn.useSyncExternalStoreWithSelector = g, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Mn;
}
process.env.NODE_ENV === "production" ? ur.exports = Ds() : ur.exports = xs();
var $s = ur.exports, ve = (
  // prettier-ignore
  // @ts-ignore
  "default" in qn ? ho : qn
), zn = Symbol.for("react-redux-context"), Un = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ls() {
  if (!ve.createContext)
    return {};
  const e = Un[zn] ?? (Un[zn] = /* @__PURE__ */ new Map());
  let t = e.get(ve.createContext);
  return t || (t = ve.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(ve.createContext, t)), t;
}
var Ce = /* @__PURE__ */ Ls(), qs = () => {
  throw new Error("uSES not initialized!");
};
function Er(e = Ce) {
  return function() {
    const t = ve.useContext(e);
    if (process.env.NODE_ENV !== "production" && !t)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return t;
  };
}
var yo = /* @__PURE__ */ Er(), mo = qs, Fs = (e) => {
  mo = e;
}, Ms = (e, t) => e === t;
function Vs(e = Ce) {
  const t = e === Ce ? yo : Er(e), n = (o, i = {}) => {
    const { equalityFn: f = Ms, devModeChecks: _ = {} } = typeof i == "function" ? { equalityFn: i } : i;
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("You must pass a selector to useSelector");
      if (typeof o != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof f != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: P,
      subscription: g,
      getServerState: T,
      stabilityCheck: w,
      identityFunctionCheck: d
    } = t(), c = ve.useRef(!0), p = ve.useCallback(
      {
        [o.name](O) {
          const E = o(O);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: b,
              stabilityCheck: s
            } = {
              stabilityCheck: w,
              identityFunctionCheck: d,
              ..._
            };
            if (s === "always" || s === "once" && c.current) {
              const l = o(O);
              if (!f(E, l)) {
                let u;
                try {
                  throw new Error();
                } catch (y) {
                  ({ stack: u } = y);
                }
                console.warn(
                  "Selector " + (o.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: O,
                    selected: E,
                    selected2: l,
                    stack: u
                  }
                );
              }
            }
            if ((b === "always" || b === "once" && c.current) && E === O) {
              let l;
              try {
                throw new Error();
              } catch (u) {
                ({ stack: l } = u);
              }
              console.warn(
                "Selector " + (o.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: l }
              );
            }
            c.current && (c.current = !1);
          }
          return E;
        }
      }[o.name],
      [o, w, _.stabilityCheck]
    ), h = mo(
      g.addNestedSub,
      P.getState,
      T || P.getState,
      p,
      f
    );
    return ve.useDebugValue(h), h;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var zs = /* @__PURE__ */ Vs();
function Us(e) {
  e();
}
var Qs = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
Qs ? ve.useLayoutEffect : ve.useEffect;
function Qn(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ke(e, t) {
  if (Qn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !Qn(e[n[i]], t[n[i]]))
      return !1;
  return !0;
}
function _o(e = Ce) {
  const t = e === Ce ? yo : (
    // @ts-ignore
    Er(e)
  ), n = () => {
    const { store: o } = t();
    return o;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var go = /* @__PURE__ */ _o();
function Hs(e = Ce) {
  const t = e === Ce ? go : _o(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Gs = /* @__PURE__ */ Hs(), Ks = Us;
Fs($s.useSyncExternalStoreWithSelector);
function Bs(e) {
  return e.type === "query";
}
function Xs(e) {
  return e.type === "mutation";
}
function vt(e, ...t) {
  return Object.assign(e, ...t);
}
function Kt(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var Et = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Ws = ({
  endpointName: e,
  queryArgs: t
}) => {
  let n = "";
  const o = Et == null ? void 0 : Et.get(t);
  if (typeof o == "string")
    n = o;
  else {
    const i = JSON.stringify(t, (f, _) => Ee(_) ? Object.keys(_).sort().reduce((P, g) => (P[g] = _[g], P), {}) : _);
    Ee(t) && (Et == null || Et.set(t, i)), n = i;
  }
  return `${e}(${n})`;
}, Bt = Symbol();
function Hn(e, t, n, o) {
  const i = G.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: n,
      endpointName: o
    }) : e
  }), [e, t, n, o]), f = G.useRef(i);
  return G.useEffect(() => {
    f.current.serialized !== i.serialized && (f.current = i);
  }, [i]), f.current.serialized === i.serialized ? f.current.queryArgs : e;
}
function Xt(e) {
  const t = G.useRef(e);
  return G.useEffect(() => {
    Ke(t.current, e) || (t.current = e);
  }, [e]), Ke(t.current, e) ? t.current : e;
}
var Ys = typeof window < "u" && window.document && window.document.createElement ? G.useLayoutEffect : G.useEffect, Js = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: ao.pending
} : e;
function Zs({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: {
      useDispatch: n,
      useSelector: o,
      useStore: i
    },
    unstable__sideEffectsInRender: f,
    createSelector: _
  },
  serializeQueryArgs: P,
  context: g
}) {
  const T = f ? (h) => h() : G.useEffect;
  return {
    buildQueryHooks: c,
    buildMutationHook: p,
    usePrefetch: d
  };
  function w(h, O, E) {
    if (O != null && O.endpointName && h.isUninitialized) {
      const {
        endpointName: v
      } = O, S = g.endpointDefinitions[v];
      P({
        queryArgs: O.originalArgs,
        endpointDefinition: S,
        endpointName: v
      }) === P({
        queryArgs: E,
        endpointDefinition: S,
        endpointName: v
      }) && (O = void 0);
    }
    let b = h.isSuccess ? h.data : O == null ? void 0 : O.data;
    b === void 0 && (b = h.data);
    const s = b !== void 0, l = h.isLoading, u = !s && l, y = h.isSuccess || l && s;
    return {
      ...h,
      data: b,
      currentData: h.data,
      isFetching: l,
      isLoading: u,
      isSuccess: y
    };
  }
  function d(h, O) {
    const E = n(), b = Xt(O);
    return G.useCallback((s, l) => E(e.util.prefetch(h, s, {
      ...b,
      ...l
    })), [h, E, b]);
  }
  function c(h) {
    const O = (s, {
      refetchOnReconnect: l,
      refetchOnFocus: u,
      refetchOnMountOrArgChange: y,
      skip: v = !1,
      pollingInterval: S = 0,
      skipPollingIfUnfocused: A = !1
    } = {}) => {
      const {
        initiate: D
      } = e.endpoints[h], C = n(), x = G.useRef();
      if (!x.current) {
        const m = C(e.internalActions.internal_getRTKQSubscriptions());
        if (process.env.NODE_ENV !== "production" && (typeof m != "object" || typeof (m == null ? void 0 : m.type) == "string"))
          throw new Error(process.env.NODE_ENV === "production" ? J(37) : `Warning: Middleware for RTK-Query API at reducerPath "${e.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
        x.current = m;
      }
      const j = Hn(
        v ? Te : s,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        Ws,
        g.endpointDefinitions[h],
        h
      ), F = Xt({
        refetchOnReconnect: l,
        refetchOnFocus: u,
        pollingInterval: S,
        skipPollingIfUnfocused: A
      }), V = G.useRef(!1), L = G.useRef();
      let {
        queryCacheKey: Q,
        requestId: $
      } = L.current || {}, K = !1;
      Q && $ && (K = x.current.isRequestSubscribed(Q, $));
      const oe = !K && V.current;
      return T(() => {
        V.current = K;
      }), T(() => {
        oe && (L.current = void 0);
      }, [oe]), T(() => {
        var m;
        const I = L.current;
        if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(oe), j === Te) {
          I == null || I.unsubscribe(), L.current = void 0;
          return;
        }
        const M = (m = L.current) == null ? void 0 : m.subscriptionOptions;
        if (!I || I.arg !== j) {
          I == null || I.unsubscribe();
          const B = C(D(j, {
            subscriptionOptions: F,
            forceRefetch: y
          }));
          L.current = B;
        } else
          F !== M && I.updateSubscriptionOptions(F);
      }, [C, D, y, j, F, oe]), G.useEffect(() => () => {
        var m;
        (m = L.current) == null || m.unsubscribe(), L.current = void 0;
      }, []), G.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => {
          var m;
          if (!L.current)
            throw new Error(process.env.NODE_ENV === "production" ? J(38) : "Cannot refetch a query that has not been started yet.");
          return (m = L.current) == null ? void 0 : m.refetch();
        }
      }), []);
    }, E = ({
      refetchOnReconnect: s,
      refetchOnFocus: l,
      pollingInterval: u = 0,
      skipPollingIfUnfocused: y = !1
    } = {}) => {
      const {
        initiate: v
      } = e.endpoints[h], S = n(), [A, D] = G.useState(Bt), C = G.useRef(), x = Xt({
        refetchOnReconnect: s,
        refetchOnFocus: l,
        pollingInterval: u,
        skipPollingIfUnfocused: y
      });
      T(() => {
        var V, L;
        const Q = (V = C.current) == null ? void 0 : V.subscriptionOptions;
        x !== Q && ((L = C.current) == null || L.updateSubscriptionOptions(x));
      }, [x]);
      const j = G.useRef(x);
      T(() => {
        j.current = x;
      }, [x]);
      const F = G.useCallback(function(V, L = !1) {
        let Q;
        return t(() => {
          var $;
          ($ = C.current) == null || $.unsubscribe(), C.current = Q = S(v(V, {
            subscriptionOptions: j.current,
            forceRefetch: !L
          })), D(V);
        }), Q;
      }, [S, v]);
      return G.useEffect(() => () => {
        var V;
        (V = C == null ? void 0 : C.current) == null || V.unsubscribe();
      }, []), G.useEffect(() => {
        A !== Bt && !C.current && F(A, !0);
      }, [A, F]), G.useMemo(() => [F, A], [F, A]);
    }, b = (s, {
      skip: l = !1,
      selectFromResult: u
    } = {}) => {
      const {
        select: y
      } = e.endpoints[h], v = Hn(l ? Te : s, P, g.endpointDefinitions[h], h), S = G.useRef(), A = G.useMemo(() => _([y(v), (F, V) => V, (F) => v], w, {
        memoizeOptions: {
          resultEqualityCheck: Ke
        }
      }), [y, v]), D = G.useMemo(() => u ? _([A], u, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : A, [A, u]), C = o((F) => D(F, S.current), Ke), x = i(), j = A(x.getState(), S.current);
      return Ys(() => {
        S.current = j;
      }, [j]), C;
    };
    return {
      useQueryState: b,
      useQuerySubscription: O,
      useLazyQuerySubscription: E,
      useLazyQuery(s) {
        const [l, u] = E(s), y = b(u, {
          ...s,
          skip: u === Bt
        }), v = G.useMemo(() => ({
          lastArg: u
        }), [u]);
        return G.useMemo(() => [l, y, v], [l, y, v]);
      },
      useQuery(s, l) {
        const u = O(s, l), y = b(s, {
          selectFromResult: s === Te || l != null && l.skip ? void 0 : Js,
          ...l
        }), {
          data: v,
          status: S,
          isLoading: A,
          isSuccess: D,
          isError: C,
          error: x
        } = y;
        return G.useDebugValue({
          data: v,
          status: S,
          isLoading: A,
          isSuccess: D,
          isError: C,
          error: x
        }), G.useMemo(() => ({
          ...y,
          ...u
        }), [y, u]);
      }
    };
  }
  function p(h) {
    return ({
      selectFromResult: O,
      fixedCacheKey: E
    } = {}) => {
      const {
        select: b,
        initiate: s
      } = e.endpoints[h], l = n(), [u, y] = G.useState();
      G.useEffect(() => () => {
        u != null && u.arg.fixedCacheKey || u == null || u.reset();
      }, [u]);
      const v = G.useCallback(function(I) {
        const M = l(s(I, {
          fixedCacheKey: E
        }));
        return y(M), M;
      }, [l, s, E]), {
        requestId: S
      } = u || {}, A = G.useMemo(() => b({
        fixedCacheKey: E,
        requestId: u == null ? void 0 : u.requestId
      }), [E, u, b]), D = G.useMemo(() => O ? _([A], O) : A, [O, A]), C = o(D, Ke), x = E == null ? u == null ? void 0 : u.arg.originalArgs : void 0, j = G.useCallback(() => {
        t(() => {
          u && y(void 0), E && l(e.internalActions.removeMutationResult({
            requestId: S,
            fixedCacheKey: E
          }));
        });
      }, [l, E, u, S]), {
        endpointName: F,
        data: V,
        status: L,
        isLoading: Q,
        isSuccess: $,
        isError: K,
        error: oe
      } = C;
      G.useDebugValue({
        endpointName: F,
        data: V,
        status: L,
        isLoading: Q,
        isSuccess: $,
        isError: K,
        error: oe
      });
      const m = G.useMemo(() => ({
        ...C,
        originalArgs: x,
        reset: j
      }), [C, x, j]);
      return G.useMemo(() => [v, m], [v, m]);
    };
  }
}
function ec(e) {
  let t = 0;
  for (const n in e)
    t++;
  return t;
}
var tc = /* @__PURE__ */ Symbol(), rc = ({
  batch: e = Ks,
  hooks: t = {
    useDispatch: Gs,
    useSelector: zs,
    useStore: go
  },
  createSelector: n = hr,
  unstable__sideEffectsInRender: o = !1,
  ...i
} = {}) => {
  if (process.env.NODE_ENV !== "production") {
    const f = ["useDispatch", "useSelector", "useStore"];
    let _ = !1;
    for (const P of f)
      if (ec(i) > 0 && (i[P] && (_ || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), _ = !0)), t[P] = i[P]), typeof t[P] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? J(36) : `When using custom hooks for context, all ${f.length} hooks need to be provided: ${f.join(", ")}.
Hook ${P} was either not provided or not a function.`);
  }
  return {
    name: tc,
    init(f, {
      serializeQueryArgs: _
    }, P) {
      const g = f, {
        buildQueryHooks: T,
        buildMutationHook: w,
        usePrefetch: d
      } = Zs({
        api: f,
        moduleOptions: {
          batch: e,
          hooks: t,
          unstable__sideEffectsInRender: o,
          createSelector: n
        },
        serializeQueryArgs: _,
        context: P
      });
      return vt(g, {
        usePrefetch: d
      }), vt(P, {
        batch: e
      }), {
        injectEndpoint(c, p) {
          if (Bs(p)) {
            const {
              useQuery: h,
              useLazyQuery: O,
              useLazyQuerySubscription: E,
              useQueryState: b,
              useQuerySubscription: s
            } = T(c);
            vt(g.endpoints[c], {
              useQuery: h,
              useLazyQuery: O,
              useLazyQuerySubscription: E,
              useQueryState: b,
              useQuerySubscription: s
            }), f[`use${Kt(c)}Query`] = h, f[`useLazy${Kt(c)}Query`] = O;
          } else if (Xs(p)) {
            const h = w(c);
            vt(g.endpoints[c], {
              useMutation: h
            }), f[`use${Kt(c)}Mutation`] = h;
          }
        }
      };
    }
  };
}, nc = /* @__PURE__ */ gs(Is(), rc());
nc({
  reducerPath: "sparqlApi",
  baseQuery: ls({
    baseUrl: "https://data-iremus.huma-num.fr/sparql"
  }),
  endpoints: (e) => ({
    getSparqlQueryResult: e.query({
      query: (t) => ({
        url: "/",
        method: "POST",
        body: new URLSearchParams({ query: t })
      })
    })
  })
});
const Ac = (e) => `
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
      VALUES ?contribution_type { <${de.selection}> } #SELECTION TYPE
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
`, Ic = (e) => `
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
}`, Cc = () => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT ?contributor ?name (COUNT(?contribution) AS ?contributions) (CONCAT( "#", ?hex_color_code) AS ?hex_color) ?emoji ?orcid (IRI(CONCAT("https://orcid.org/", ?orcid)) AS ?orcid_profile) (IRI(CONCAT("https://pub.orcid.org/v3.0/", ?orcid)) AS ?orcid_api_user_endpoint) ?untyped_identifier ?contributor_type_label ?user_graph

WHERE {
  GRAPH ?user_graph {  
    VALUES ?contributor_type_predicate {rdf:type crm:P2_has_type}. 
    VALUES ?contributor_type {crm:E21_Person <${de.software}>}. #PERSON OR SOFTWARE
    ?contributor ?contributor_type_predicate ?contributor_type
    
    OPTIONAL {
	    ?contributor crm:P2_has_type <${de.software}>. #SOFTWARE
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
      ?hex_color_code_identifier crm:P2_has_type <${de.hexColorCode}>. #HEX COLOR CODE IDENTIFIER
      ?hex_color_code_identifier crm:P190_has_symbolic_content ?hex_color_code
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?emoji_identifier.
      ?emoji_identifier crm:P2_has_type <${de.emoji}>. #EMOJI IDENTIFIER
      ?emoji_identifier crm:P190_has_symbolic_content ?emoji
    }
    OPTIONAL {
      ?contributor crm:P1_is_identified_by ?orcid_appellation.
      ?orcid_appellation crm:P2_has_type <${de.orcidGeneratedName}>. #ORCID NAME IDENTIFIER
      ?orcid_appellation crm:P190_has_symbolic_content ?name
    }
    OPTIONAL {
	    ?contributor crm:P1_is_identified_by ?ORCID_identifier.
      ?ORCID_identifier crm:P2_has_type <${de.orcidId}>. #ORCID IDENTIFIER
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
GROUP BY ?contributor ?name ?hex_color_code ?emoji ?orcid ?orcid_profile ?untyped_identifier ?contributor_type_label ?user_graph`, kc = (e) => `
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

`, jc = (e) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT DISTINCT ?score ?annotation ?verticality ?note_label ?measure_number 
WHERE {
  GRAPH ?g {
    ${oc(e)}
    ?score crm:P2_has_type <${de.score}>. #Score type
    ?verticality sherlock:has_document_context ?score.
    ?verticality crm:P2_has_type <${de.verticality}>. #MEI score offset
    ?note_in_score sherlockmei:contains_beat ?verticality.
    ?note_in_score sherlockmei:measure_number ?measure_number.
    GRAPH ?sherlock_graph {
        ?annotation crm:P140_assigned_attribute_to ?verticality.
        ?annotation crm:P177_assigned_property_of_type <${de.fondamentaleIdentification}>. #Identification de fondamentale
        ?annotation crm:P141_assigned ?note.
        GRAPH ?sherlock_data_graph {
            ?note crm:P1_is_identified_by ?note_label
        }
    }
  }
}
ORDER BY ?score ?measure_number
`, oc = (e) => e ? `BIND (<${e}> as ?score).` : "", Dc = () => `
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
`, xc = () => `
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
`, ic = [
  "crm:P1_is_identified_by",
  "crm:P102_has_title dcterms:title",
  "rdfs:label",
  "skos:prefLabel",
  "skos:altLabel",
  "crm:P190_has_symbolic_content"
], ac = () => ic.join(" "), sc = [
  "crm:P1_is_identified_by",
  "crm:P102_has_title"
], cc = () => sc.join(" "), uc = [
  "crm:E35_Title",
  "crm:E41_Appellation",
  "crm:E42_Identifier"
], lc = () => uc.join(" "), dc = ["crm:P2_has_type", "rdf:type"], fc = () => dc.join(" "), $c = (e, t = !1, n = !1, o = !1, i = "", f = "OUTGOING") => t ? hc(
  e,
  o,
  i,
  f
) : pc(e, o, n), pc = (e, t, n) => `
  ${Oo()}
  SELECT *
  WHERE {
    GRAPH ?g {
      ${Or(
  `<${e}>`,
  "?p",
  "?label",
  n
)}
      ${wr(
  `<${e}>`,
  "?p",
  "?r",
  "?label",
  n
)}
      ${bo(`<${e}>`, n)}
      ${vo(`<${e}>`)}
      ${Eo(`<${e}>`, t)}
    }
  }`, hc = (e, t, n, o) => {
  const i = n ? `<${n}>` : "?lp";
  return `
  ${Oo()}
  SELECT *
  WHERE {
    GRAPH ?lr_g {
      ${mc(
    `<${e}>`,
    i,
    o
  )}
      OPTIONAL {
        GRAPH ?g {
          ${Or("?lr", "?p", "?label", !1)}
          ${wr("?lr", "?p", "?r", "?label", !1)}
          ${bo("?lr", !1)}
          ${vo("?lr")}
          ${Eo("?lr", t)}
        }
      }
    }
  }`;
}, Or = (e, t, n, o) => `
{
  VALUES ${t} { ${ac()} } .
  ${Sr(
  e,
  t,
  n,
  o
)}
  FILTER(isLiteral(${n})) .  
}
`, wr = (e, t, n, o, i) => `
  UNION
  {
    VALUES ${t} { ${cc()} }
    ${Sr(
  e,
  t,
  n,
  i
)}
    GRAPH ${n}_types__g { 
      VALUES ${n}_type { ${lc()} }
      ${n} rdf:type ${n}_type .
      ${n} crm:P190_has_symbolic_content ${o} .
    }
    OPTIONAL {
      GRAPH ${n}_types_types__graph {
        ${n} crm:P2_has_type ${n}_type_type .
        GRAPH ${n}_types_types_label_graph {
          ${n}_type_type crm:P1_is_identified_by ${n}_type_type__label .
        }
      }
    }
  }
  `, bo = (e, t) => `
  UNION {
    GRAPH ?e32_e55__g {
      ${Sr(
  "?e32",
  "crm:P71_lists",
  e,
  t
)}
    }
    OPTIONAL {
      GRAPH ?e32__g {
        ?e32 crm:P1_is_identified_by ?e32__label .
      }
    }
  }`, vo = (e) => `
UNION {
  VALUES ?p { ${fc()} }
  ${e} ?p ?r .
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
`, Eo = (e, t) => t ? `
    UNION {
      SELECT (COUNT(?r_out) AS ?c_out) ?lr
      WHERE { GRAPH ?g_out { ${e} ?p_out ?r_out } }
      GROUP BY ?c_out ?lr
    }
    UNION {
      SELECT (COUNT(*) AS ?c_in) ?lr
      WHERE { GRAPH ?g_in { ?r_in ?p_in ${e} } }
      GROUP BY ?c_in ?lr
    }` : "", yc = (e, t, n, o) => o ? `
    UNION 
    {
      ?e13 crm:P177_assigned_property_of_type ${t} .
      ?e13 crm:P140_assigned_attribute_to ${e} .
      ?e13 crm:P141_assigned ${n} .
      ?e13 crm:P14_carried_out_by ?e13_carrier .
      OPTIONAL {
        GRAPH ?e13_g {
          ${Or(
  "?e13_carrier",
  "?e13_carrier_p",
  "?e13_carrier_label",
  !1
)}
          ${wr(
  "?e13_carrier",
  "?e13_carrier_p",
  "?e13_carrier_object",
  "?e13_carrier_label",
  !1
)}
        }
      }
    }` : "", Sr = (e, t, n, o) => `
    {
      ${e} ${t} ${n} .
    }
    ${yc(
  e,
  t,
  n,
  o
)}
  `, mc = (e, t, n) => {
  if (n === "INCOMING")
    return `?lr ${t} ${e}`;
  if (n === "OUTGOING")
    return `${e} ${t} ?lr`;
}, Oo = () => `
  PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
  PREFIX dcterms: <http://purl.org/dc/terms/>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  `, Lc = () => `
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
`, qc = (e, t) => `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
PREFIX sherlockmei: <http://data-iremus.huma-num.fr/ns/sherlockmei#>

SELECT ?note_pname (count(?note) AS ?notes) 
WHERE {
  GRAPH ?g {
    ?note sherlock:has_document_context <${e}>.
    ?note crm:P2_has_type <${de.note}>. #NOTE
    ?note sherlockmei:pname ?note_pname.
    ${t && `VALUES ?note_pname { "${t}" }`}
  }
}
GROUP BY ?note_pname`, Fc = (e) => `
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
`, Mc = (e) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE { <${e}> crm:P140_assigned_attribute_to ?p140 }`, Vc = () => `
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
        ?score crm:P2_has_type <${de.score}> .
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
                ?selection crm:P2_has_type <${de.selection}> .
                ?selection sherlock:has_document_context ?score .
            }
        }
        UNION {
            GRAPH <http://data-iremus.huma-num.fr/graph/sherlock> {
                ?e13_on_analytical_entity rdf:type crm:E13_Attribute_Assignment .
                ?e13_on_analytical_entity crm:P141_assigned ?analytical_entity .
                ?analytical_entity rdf:type crm:E28_Conceptual_Object .
                ?analytical_entity crm:P2_has_type <${de.analyticalEntity}> .
                ?e13_on_analytical_entity crm:P140_assigned_attribute_to ?analytical_selection .
                ?analytical_selection sherlock:has_document_context ?score .
            }
        }
    }
}
GROUP BY ?score
`, zc = (e) => `
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
          ?analyticalEntity crm:P2_has_type <${de.analyticalEntity}>.
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
        ?selection crm:P2_has_type <${de.selection}>.
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
  Ec as ANALYTICAL_ENTITY,
  Ii as ANALYTICAL_PROJECT,
  Sc as ANNOTATION,
  Ci as DRAFT_PROJECT,
  _c as NOTE,
  bc as POSITIONNED_NOTE,
  Oc as SCORE,
  gc as SELECTION,
  wc as SOFTWARE,
  vc as VERTICALITY,
  Ac as contributions,
  Cc as contributors,
  kc as documentsByIndex,
  jc as fondamentales,
  Rc as getAnalyticalProject,
  Pc as getAnnotations,
  Ic as getContributor,
  Mc as getP140,
  Dc as getResources,
  xc as historicalModelsOntologies,
  $c as identity,
  Lc as mg_livraisons,
  qc as noteOccurences,
  Fc as p127,
  Vc as scores,
  zc as selections
};

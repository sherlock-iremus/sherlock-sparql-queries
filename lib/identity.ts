enum LinkedResourcesDirectionEnum {
  INCOMING = 'INCOMING',
  OUTGOING = 'OUTGOING'
};

const LITERAL_IDENTIFIERS_PREDICATES = [
  "crm:P1_is_identified_by",
  "crm:P102_has_title dcterms:title",
  "rdfs:label",
  "skos:prefLabel",
  "skos:altLabel",
  "crm:P190_has_symbolic_content",
];

const literalIdentifiersPredicates = () => {
  return LITERAL_IDENTIFIERS_PREDICATES.join(" ");
};

const IDENTIFIERS_PREDICATES = [
  "crm:P1_is_identified_by",
  "crm:P102_has_title",
];

const identifiersPredicates = () => {
  return IDENTIFIERS_PREDICATES.join(" ");
};

const IDENTIFIERS_CRM_CLASSES = [
  "crm:E35_Title",
  "crm:E41_Appellation",
  "crm:E42_Identifier",
];

const identifiersCrmClasses = () => {
  return IDENTIFIERS_CRM_CLASSES.join(" ");
};

const TYPE_ATTRIBUTION_PREDICATES = ["crm:P2_has_type", "rdf:type"];

const typeAttributionPredicates = () => {
  return TYPE_ATTRIBUTION_PREDICATES.join(" ");
};

/**
 * @param {string} resource IRI of the targeted resource
 * @param {boolean} getLinkedResourcesIdentity True if you want to retrieve identity of all linked resources to your resource
 * @param {boolean} appendE13ifiedIdentity True if you want to retrieve identity linked by an E13 to your resource
 * @param {boolean} countLinkedResources True if you want to get number of linked resources
 * @param {string} linkingPredicate Will return only identites of resources linked with this predicate (getLinkedResourceIdentity must be true)
 * @param {"INCOMING"|"OUTGOING"} linkedResourcesDirection Define which linked resources you want to get the identity of, default outgoing (getLinkedResourceIdentity must be true)
 * @returns A formatted and executable sparql query
 */
export const identity = (
  resource: string,
  getLinkedResourcesIdentity: boolean = false,
  appendE13ifiedIdentity: boolean = false,
  countLinkedResources: boolean = false,
  linkingPredicate: string = '',
  linkedResourcesDirection: LinkedResourcesDirectionEnum = LinkedResourcesDirectionEnum.OUTGOING
) => {
  // console.log(`identity has been called with \n
  // resource : %s
  // getLinkedResourcesIdentity: %o
  // appendE13ifiedIdentity: %o
  // countLinkedResources: %o
  // linkingPredicate: %s
  // linkedResourcesDirection: %s`, resource, getLinkedResourcesIdentity, appendE13ifiedIdentity, countLinkedResources, linkingPredicate, linkedResourcesDirection)

  return getLinkedResourcesIdentity
    ? linkedResourcesIdentity
      (
        resource,
        countLinkedResources,
        linkingPredicate,
        linkedResourcesDirection
      )
    : resourceIdentity
      (
        resource,
        countLinkedResources,
        appendE13ifiedIdentity
      )

}
/**
 * @returns Resource identity (types / identifiers / number of resources linked / vocabularies)
 */
const resourceIdentity = (
  resource: string,
  countLinkedResources: boolean,
  appendE13ifiedIdentity: boolean
) => {
  let q = `${prefixesFragment()}  
  SELECT *
  WHERE {
    GRAPH ?g {
    ${literalIdentifiersFragment(`<${resource}>`, "?p", "?label", appendE13ifiedIdentity)}
    ${identifiersFragment(`<${resource}>`, "?p", "?r", "?label", appendE13ifiedIdentity)}
    ${authorityDocumentFragment(`<${resource}>`, appendE13ifiedIdentity)}
    ${typesDocumentationFragment(`<${resource}>`)}
    }
  }`
  if (countLinkedResources)
    q += countLinkedResourcesFragment(`<${resource}>`, countLinkedResources)
  return q
}

/**
 * @returns Resources linked identity (types / identifiers / number of resources linked / vocabularies)
 */
const linkedResourcesIdentity = (
  resource: string,
  countLinkedResources: boolean,
  linkingPredicate: string,
  linkedResourcesDirection: LinkedResourcesDirectionEnum
) => {
  const p = linkingPredicate ? `<${linkingPredicate}>` : "?lp";

  return `
  ${prefixesFragment()}
  SELECT *
  WHERE {
    GRAPH ?lr_g {
      ${resourceDeclarationFragment(
    `<${resource}>`,
    p,
    linkedResourcesDirection
  )}
      OPTIONAL {
        GRAPH ?g {
          ${literalIdentifiersFragment(`?lr`, "?p", "?label", false)}
          ${identifiersFragment(`?lr`, "?p", "?r", "?label", false)}
          ${authorityDocumentFragment("?lr", false)}
          ${typesDocumentationFragment("?lr")}
          ${countLinkedResourcesFragment("?lr", countLinkedResources)}
        }
      }
    }
  }`;
};

const literalIdentifiersFragment = (resource: string, predicate: string, label: string, appendE13ifiedIdentity: boolean): string => `  {
        VALUES ${predicate} { ${literalIdentifiersPredicates()} } .
        ${resourcePredicateObjectFragment(resource, predicate, label, appendE13ifiedIdentity)}
        FILTER(isLiteral(${label})) .  
      }`;

/**
 *
 * @param {string} resource IRI of the resource
 */
const identifiersFragment = (
  resource: string,
  predicate: string,
  object: string,
  label: string,
  appendE13ifiedIdentity: boolean
): string => {
  console.log('identifiersFragment', resource, predicate, object, label)
  return `  UNION
      {
        VALUES ${predicate} { ${identifiersPredicates()} }
        ${resourcePredicateObjectFragment(resource, predicate, object, appendE13ifiedIdentity)}
        GRAPH ${object}_types__g { 
          VALUES ${object}_type { ${identifiersCrmClasses()} }
          ${object} rdf:type ${object}_type .
          ${object} crm:P190_has_symbolic_content ${label} .
        }
        OPTIONAL {
          GRAPH ${object}_types_types__graph {
            ${object} crm:P2_has_type ${object}_type_type .
            GRAPH ${object}_types_types_label_graph {
              ${object}_type_type crm:P1_is_identified_by ${object}_type_type__label .
            }
          }
        }
      }`};

/**
 * @param {string} resource IRI of the resource
 */
const authorityDocumentFragment = (resource: string, appendE13ifiedIdentity: boolean): string => `  UNION
      {
        GRAPH ?e32_e55__g {
          ${resourcePredicateObjectFragment("?e32", "crm:P71_lists", resource, appendE13ifiedIdentity)}
        }
        OPTIONAL {
          GRAPH ?e32__g {
            ?e32 crm:P1_is_identified_by ?e32__label .
          }
        }
      }`;

/**
 * @param {string} resource IRI of the resource
 */
const typesDocumentationFragment = (resource: string) => `  UNION
      {
        VALUES ?p { ${typeAttributionPredicates()} }
        ${resource} ?p ?r .
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
      }`

/**
 * @param {string} resource IRI of the resource
 */
const countLinkedResourcesFragment = (resource: string, countLinkedResources: boolean) =>
  countLinkedResources
    ? `
    UNION {
      SELECT (COUNT(?r_out) AS ?c_out) ?lr
      WHERE { GRAPH ?g_out { ${resource} ?p_out ?r_out } }
      GROUP BY ?c_out ?lr
    }
    UNION {
      SELECT (COUNT(*) AS ?c_in) ?lr
      WHERE { GRAPH ?g_in { ?r_in ?p_in ${resource} } }
      GROUP BY ?c_in ?lr
    }`
    : '';

/**
 * @param {string} resource IRI of the resource
 * @param {boolean} appendE13ifiedIdentity should retrieve E13ifiedIdentity triples or not
 */
const resourcePredicateObjectFragmentE13ified = (
  resource: string,
  predicate: string,
  object: string,
  appendE13ifiedIdentity: boolean
): string =>
  appendE13ifiedIdentity
    ? `
    UNION 
    {
      ?e13 crm:P177_assigned_property_of_type ${predicate} .
      ?e13 crm:P140_assigned_attribute_to ${resource} .
      ?e13 crm:P141_assigned ${object} .
      ?e13 crm:P14_carried_out_by ?e13_carrier .
      OPTIONAL {
        GRAPH ?e13_g {
          ${literalIdentifiersFragment(
      "?e13_carrier",
      "?e13_carrier_p",
      "?e13_carrier_label",
      false
    )}
          ${identifiersFragment(
      "?e13_carrier",
      "?e13_carrier_p",
      "?e13_carrier_object",
      "?e13_carrier_label",
      false
    )}
        }
      }
    }`
    : '';

const resourcePredicateObjectFragment = (
  resource: string,
  predicate: string,
  object: string,
  appendE13ifiedIdentity: boolean
): string => {

  let s = `${resource} ${predicate} ${object} .`
  if (appendE13ifiedIdentity)
    s += resourcePredicateObjectFragmentE13ified(resource, predicate, object, appendE13ifiedIdentity)
  return s
}

const resourceDeclarationFragment = (resource: string, p: string, linkedResourcesDirection: LinkedResourcesDirectionEnum) => {
  if (linkedResourcesDirection === LinkedResourcesDirectionEnum.INCOMING)
    return `?lr ${p} ${resource}`;
  else if (linkedResourcesDirection === LinkedResourcesDirectionEnum.OUTGOING)
    return `${resource} ${p} ?lr`;
};

const prefixesFragment = () => `
  PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
  PREFIX dcterms: <http://purl.org/dc/terms/>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  `;

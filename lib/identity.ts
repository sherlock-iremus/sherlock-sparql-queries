// @ts-ignore
import { spfmt } from 'sparql-formatter'
import {
  CRM_BASE,
  DCTERMS_BASE,
  RDF_BASE,
  RDFS_BASE,
  SKOS_BASE
} from 'sherlock-rdf/lib/rdf-prefixes'

export const IDENTITY_PREDICATES = [
  CRM_BASE + 'P1_is_identified_by',
  CRM_BASE + 'P102_has_title',
  CRM_BASE + 'P190_has_symbolic_content',
  CRM_BASE + 'P1_is_identified_by',
  CRM_BASE + 'E35_Title',
  CRM_BASE + 'E41_Appellation',
  CRM_BASE + 'E42_Identifier',
  CRM_BASE + 'P2_has_type',
  DCTERMS_BASE + 'title',
  RDF_BASE + 'type',
  RDFS_BASE + 'label',
  SKOS_BASE + 'prefLabel',
  SKOS_BASE + 'altLabel'
]

export enum LinkedResourcesDirectionEnum {
  INCOMING = 'INCOMING',
  OUTGOING = 'OUTGOING'
}

const literalIdentifiersPredicates = () =>
  [
    'crm:P1_is_identified_by',
    'crm:P48_has_preferred_identifier',
    'crm:P102_has_title',
    'dcterms:title',
    'crm:P190_has_symbolic_content',
    'rdfs:label',
    'skos:prefLabel',
    'skos:altLabel'
  ].join(' ')

const identifiersPredicates = () =>
  [
    'crm:P1_is_identified_by',
    'crm:P48_has_preferred_identifier',
    'crm:P102_has_title'
  ].join(' ')

const identifiersCrmClasses = () =>
  ['crm:E35_Title', 'crm:E41_Appellation', 'crm:E42_Identifier'].join(' ')

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// HIGH LEVEL FUNCTIONS
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const identity = (
  resource: string,
  getLinkedResourcesIdentity: boolean = false,
  linkingPredicates: string[] = [],
  linkedResourcesDirection: LinkedResourcesDirectionEnum = LinkedResourcesDirectionEnum.OUTGOING
) =>
  spfmt(
    prefixes() +
    (!getLinkedResourcesIdentity
      ? resourceIdentity(resource)
      : linkedResourcesIdentity(
        resource,
        linkingPredicates,
        linkedResourcesDirection
      ))
  )

const resourceIdentity = (resource: string) => `
SELECT *
WHERE {
  GRAPH ?g {
    ${identitiersLiterals(`<${resource}>`)}
    UNION
    ${identifiersResources(`<${resource}>`)}
    UNION
    ${types(`<${resource}>`)}
    UNION
    ${authorityDocument(`<${resource}>`)}
  }
}
`

const linkedResourcesIdentity = (
  resource: string,
  linkingPredicates: string[],
  linkedResourcesDirection: LinkedResourcesDirectionEnum
) => {
  let linkingPredicatesClause = ''
  if (linkingPredicates.length > 0) {
    linkingPredicatesClause = `VALUES ?lp { ${linkingPredicates
      .map(_ => `<${_}>`)
      .join(' ')} }`
  }
  return `
SELECT *
WHERE {
  GRAPH ?g {
    ${linkingPredicatesClause}
    ${linkedResourcesDirection === LinkedResourcesDirectionEnum.INCOMING
      ? `?lr ?lp <${resource}>`
      : `<${resource}> ?lp ?lr`
    }
    OPTIONAL {
      GRAPH ?r_g {
        ${identitiersLiterals('?lr')}
        UNION
        ${identifiersResources('?lr')}
        UNION
        ${types('?lr')} 
      }
    }
  }
}
ORDER BY ?lp ?lr
`
}
// UNION
// ${authorityDocument("?lr")}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// HELPERS
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const prefixes = () => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX iremus-data: <http://data-iremus.huma-num.fr/id/>
PREFIX iremus-graphs: <http://data-iremus.huma-num.fr/graph/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX sherlock-ns: <http://data-iremus.huma-num.fr/ns/sherlock#>
`

const types = (resource: string) => `
{ ######## get types (rdf:type)
  ${resource} ?p ?r .
  VALUES ?p { rdf:type }
}
UNION
{ ######## get types (crm:P2_has_type)
 ${resource} ?p ?r .
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
`

const identitiersLiterals = (resource: string): string => `
{ ######## get direct literal label
${resource} ?p ?label .
VALUES ?p { ${literalIdentifiersPredicates()} } .
FILTER(isLiteral(?label)) .
}
`

const identifiersResources = (resource: string): string => `
{ ######## get identifiers linked resources
  ${resource} ?p ?r .
  VALUES ?p { ${identifiersPredicates()} }
  GRAPH ?r_types_g {
    ?r rdf:type ?r_type .
    ?r crm:P190_has_symbolic_content ?label .
    VALUES ?r_type { ${identifiersCrmClasses()} }
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
`

const authorityDocument = (resource: string): string => `
{ ######## if the base resource is part of a E32
  GRAPH ?authdoc_g {
    ?authdoc crm:P71_lists ${resource} .
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
    ${resource} ?p ?authdoc .
    VALUES ?p { skos:inScheme }

  }
  OPTIONAL {
    GRAPH ?authdoc_g {
      ?authdoc ?authdoc_label_p ?authdoc_label .
      VALUES ?authdoc_label_p { dcterms:title skos:prefLabel }
    }
  }
}
`

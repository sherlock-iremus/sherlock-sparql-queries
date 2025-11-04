import { spfmt } from 'sparql-formatter'

const prefixes = `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX iremus: <http://data-iremus.huma-num.fr/id/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sherlock: <http://data-iremus.huma-num.fr/ns/sherlock#>
`

const select = `SELECT ?project_code (COALESCE(?_project_emoticon, "") AS ?project_emoticon) ?project_logo ?project_name ?project_uri (REPLACE(STR(?project_uri), "^.*/([^/]*)$", "$1") AS ?project_uuid)`

const project_name = `
?project_uri crm:P1_is_identified_by ?project_name .
FILTER(isLiteral(?project_name))
`

const project_emoticon = `
OPTIONAL {
  ?project_uri crm:P1_is_identified_by ?e42_emoticon .
  ?e42_emoticon a crm:E42_Identifier .
  ?e42_emoticon crm:P2_has_type iremus:17e3d5f6-36ae-4e90-adc2-1de04eeeacb9 .
  ?e42_emoticon crm:P190_has_symbolic_content ?_project_emoticon .
}
`

const project_logo = `
?project_uri crm:P1_is_identified_by ?e42_logo .
?e42_logo a crm:E42_Identifier .
?e42_logo crm:P2_has_type iremus:804d8e72-cced-4b78-85d4-78a016e1c153 .
?e42_logo crm:P190_has_symbolic_content ?project_logo .
`

const project_code = `
?project_uri crm:P1_is_identified_by ?e42_code .
?e42_code a crm:E42_Identifier .
?e42_code crm:P2_has_type iremus:574ffe9e-525c-42f2-8188-329ba3c7231d .
?e42_code crm:P190_has_symbolic_content ?project_code .
`

export const getProjectByResourceUri = (resourceURI: string) => spfmt.format(`
${prefixes}
${select}
WHERE {
  GRAPH ?g1 {
    <${resourceURI}> sherlock:has_context_project ?project_uri .
  }
  GRAPH ?g2 {
    ${project_code}
    ${project_emoticon}
    ${project_logo}
    ${project_name}
  }
}`)

export const getProjectByCode = (code: string) => spfmt.format(`
${prefixes}
${select}
WHERE {
  GRAPH ?g {
    BIND ("${code}" as ?project_code)
    ${project_code}
    ${project_emoticon}
    ${project_logo}
    ${project_name}
  }
}`)

export const getProjectFiles = (uuid: string): string => spfmt.format(`
${prefixes}
SELECT *
WHERE {
  GRAPH ?g {
    ?file a crm:E31_Document .
    ?file crm:P70_documents iremus:${uuid} .
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
`)
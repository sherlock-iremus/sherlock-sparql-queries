import { test } from 'vitest'
import { identity } from './identity'
import { querySparqlEndpoint } from 'sherlock-rdf'

test('Identity query', async () => {
    const q = identity('http://data-iremus.huma-num.fr/id/336f0cc6-8eb0-4d5d-b1eb-c27674f8e479')
    const p = await querySparqlEndpoint(q)
    console.log(p.results.bindings)
})

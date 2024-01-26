export const getP140 = (e13) => `
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT * FROM <http://data-iremus.huma-num.fr/graph/sherlock>
WHERE { <${e13}> crm:P140_assigned_attribute_to ?p140 }`;

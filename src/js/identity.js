// /**
//  * Generate a sparql query
//  *
//  */
// const q = (iri, getLinkedResourcesIdentity) => {
//   return "Coucou";
// };

// module.exports = q;

// console.log(q());

// //"http://data-iremus.huma-num.fr/id/4ef44d40-8d77-4c37-ac03-62bb503c1161"

const q = require("fs").readFileSync(
  __dirname + "/../sparql/identity.sparql",
  "utf-8"
);

const { bind } = require("../index");

console.log(
  bind(q, {
    resource:
      "http://data-iremus.huma-num.fr/id/18654b25-a05d-415e-b809-e334827edea8",
  })
);

const q = require("fs").readFileSync(
  __dirname + "/../sparql/test.sparql",
  "utf-8"
);

const { bind } = require("../index");

console.log(
  bind(q, {
    s: "http://data-iremus.huma-num.fr/id/4ef44d40-8d77-4c37-ac03-62bb503c1161",
  })
);

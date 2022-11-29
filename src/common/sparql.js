export const sparqlEndpoint = async (query) => {
  let res = await fetch(`https://data-iremus.huma-num.fr/sparql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    mode: "cors",
    cache: "no-cache",
    redirect: "follow",
    body: `query=${encodeURIComponent(query)}`,
  });
  res = await res.json();
  return res;
};

export const rekeyBindings = (bindings, keys = {}) => {
  return bindings.map((binding) => {
    const rekeyedBinding = {};
    for (const k in binding) {
      let v = binding[k].value;
      if (binding[k].datatype === "http://www.w3.org/2001/XMLSchema#integer")
        v = parseInt(v);
      rekeyedBinding[keys[k] || k] = v;
    }
    return rekeyedBinding;
  });
};

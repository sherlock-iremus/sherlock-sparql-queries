const bind = (query, parameters) => {
  for (const p in parameters) {
    query = query.replaceAll("${" + p + "}", parameters[p]);
  }
  return query;
};

module.exports.bind = bind;

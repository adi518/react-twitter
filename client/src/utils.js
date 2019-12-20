export const parseQueryString = queryString => {
  const params = {};
  for (let [key, value] of new URLSearchParams(queryString).entries()) {
    params[key] = value;
  }
  return params;
};

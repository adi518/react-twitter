export const parseQueryString = queryString => {
  const params = {};
  for (const [key, value] of new URLSearchParams(queryString).entries()) {
    params[key] = value;
  }
  return params;
};

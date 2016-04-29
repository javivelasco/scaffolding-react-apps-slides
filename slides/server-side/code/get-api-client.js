const getServerSideClient = req => (endpoint, schema) => {
  const fullEndpoint = `http://${req.get('host')}${endpoint}`;
  const params = { headers: req.headers };

  return axios.get(fullEndpoint, params).then(({ data }) => {
    const camelizedJson = camelizeKeys(data);
    return normalize(camelizedJson, schema);
  });
};

const getClientSideClient = () => (endpoint, schema) => (
  axios.get(endpoint).then(({ data }) => {
    const camelizedJson = camelizeKeys(data);
    return normalize(camelizedJson, schema);
  })
);

export function getApiClient(req) {
  return typeof window === 'undefined'
    ? getServerSideClient(req)
    : getClientSideClient();
}

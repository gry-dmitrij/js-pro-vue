const settings = {
  API: 'http://localhost:3000',
};

function sendJson(url, data, method, headers = {}) {
  const headersParam = { 'Content-Type': 'application/json', ...headers };
  return fetch(settings.API + url, {
    method,
    headersParam,
    body: JSON.stringify(data),
  })
    .then((result) => result.json());
}

export default {
  getJson(url) {
    return fetch(settings.API + url, { cache: 'no-store' })
      .then((result) => result.json());
  },
  postJson(url, data) {
    return sendJson(url, data, 'POST');
  },
  putJson(url, data) {
    return sendJson(url, data, 'PUT');
  },
  deleteJson(url, data = {}) {
    return sendJson(url, data, 'DELETE');
  },
};

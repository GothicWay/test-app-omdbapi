import fetch from 'node-fetch';
const ipServer = 'localhost:8082'; //

export function callApi(options) {
  const { endpoint, method, payload, isFormData, header } = options;
  const url = `http://${ipServer}/api/${endpoint}/`;
  const requestOptions = {
    method: method || 'POST',
    headers: isFormData
      ? {
        'cache-control': 'no-cache',
        content_type: 'multipart/form-data',
        ...header,
      }
      : { 'Content-Type': 'application/json', ...header },
    body: isFormData ? payload : JSON.stringify(payload),
    contentType: isFormData ? 'multipart/form-data' : 'application/json',
  };
  return fetch(url, requestOptions).then(response => {
    const json = response.json();
    return json.then(json => {
      if (!json.success) {
        return Promise.reject(json);
      }
      return json;
    });
  });
}


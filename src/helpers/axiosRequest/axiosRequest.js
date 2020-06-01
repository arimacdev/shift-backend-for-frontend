const axios = require('axios');

export async function postRequest(url, body, headers) {
  return axios.post(url, body, headers);
}

export async function getRequest(url, headers) {
  return axios.get(url, headers);
}

export async function putRequest(url, body, headers) {
  return axios.put(url, body, headers);
}

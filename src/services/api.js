import axios from 'axios';

const baseUrl = 'http://localhost:8080';

const get = async (url, value) => {
  const newCredentials = { ...value, withCredentials: true };
  const response = await axios.get(baseUrl + url, newCredentials);
  return response.data;
}

const post = async (url, value) => {
  const newCredentials = { ...value, withCredentials: true };
  const response = await axios.post(baseUrl + url, newCredentials);
  return response.data;
}

export default { get, post };
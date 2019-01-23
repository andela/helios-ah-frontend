import axios from 'axios';

const baseUrl = (process.env.NODE_ENV !== 'production')
  ? 'http://localhost:4001/api/v1' : process.env.PRODUCTION_URL;

const request = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': window.localStorage.getItem('token-key')
  },
  credentials: 'omit'
});

request.interceptors.request.use(
  (config) => {
    config.headers['x-access-token'] = localStorage.getItem('token-key');
    return config;
  },
  error => Promise.reject(error)
);

export const Get = async (route) => {
  try {
    const response = await request.get(baseUrl + route);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Post = async (route, data) => {
  try {
    const response = await axios.post(`${baseUrl}${route}`, data);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Put = async (route, data) => {
  try {
    const response = await axios.put(`${baseUrl}${route}`, data);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Delete = async (route, data) => {
  try {
    const response = await axios.delete(`${baseUrl}${route}`, data);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

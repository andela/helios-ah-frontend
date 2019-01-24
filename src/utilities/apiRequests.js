import axios from 'axios';


const baseUrl = (process.env.NODE_ENV !== 'production')
  ? 'https://helios-ah-backend-staging.herokuapp.com/api/v1' : process.env.PRODUCTION_URL;

const request = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': window.localStorage.getItem('token')
  },
  credentials: 'omit'
});

request.interceptors.request.use(
  (config) => {
    config.headers['x-access-token'] = localStorage.getItem('token');
    return config;
  },
  error => Promise.reject(error)
);

request.interceptors.request.use(
  (config) => {
    config.headers['x-access-token'] = localStorage.getItem('token-key');
    return config;
  },
  error => Promise.reject(error)
);

export const Get = async (route) => {
  try {
    const response = await request.get(route);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Post = async (route, data) => {
  try {
    const response = await request.post(route, data);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Put = async (route, data) => {
  try {
    const response = await request.put(route, data);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Delete = async (route, data) => {
  try {
    const response = await request.delete(route, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const CloudImage = async (formData) => {
  try {
    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/ah-med/image/upload',
      formData
    );
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

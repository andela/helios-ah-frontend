import axios from 'axios';

const baseUrl = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:4001/api/v1' : process.env.PRODUCTION_URL;

export const Get = async (route) => {
  try {
    const response = await axios.get(baseUrl + route);
    return response.data;
  } catch (error) {
    return error.response.data ? error.response.data : error;
  }
};

export const Post = async (route, data) => {
  try {
    const response = await axios.post(`${baseUrl}${route}`, data);
    return response.data;
  } catch (error) {
    console.log('error in api request is ==> ', error);
    return error.response.data ? error.response.data : error;
  }
};

export const Put = async (route, data) => {
  try {
    const response = await axios.put(`${baseUrl}${route}`, data);
    return response.data;
  } catch (error) {
    return error.response.data ? error.response.data : error;
  }
};

export const Delete = async (route, data) => {
  try {
    const response = await axios.delete(`${baseUrl}${route}`, data);
    return response.data;
  } catch (error) {
    return error.response.data ? error.response.data : error;
  }
};

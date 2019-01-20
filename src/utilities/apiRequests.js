import axios from 'axios';

const baseUrl = 'https://helios-ah-backend-staging.herokuapp.com/api/v1';

export const Get = async(route) => {
  const getUrl = baseUrl + route;
  try {
    const response = await axios.get(getUrl);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const Post = async (route, data) => {
  const postUrl = baseUrl + route;
  try {
    const response = await axios.post(postUrl, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const Put = async (route, data) => {
  const puUrl = baseUrl + route;
  try {
    const response = await axios.put(putUrl, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const Delete = async (route, data) => {
  const deleteUrl = baseUrl + route;
  try {
    const response = await axios.delete(deleteUrl, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
import attachAuthToken from './attachAuth';

const baseUrl = (process.env.NODE_ENV === 'production')
  ? process.env.PRODUCTION_URL : 'http://localhost:4001/api/v1';

export const Get = async (route, token) => {
  try {
    const response = await attachAuthToken(token).get(baseUrl + route);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const Post = async (route, data, token) => {
  try {
    const response = await attachAuthToken(token)
      .post(`${baseUrl}${route}`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const Put = async (route, data, token) => {
  try {
    const response = await attachAuthToken(token)
      .put(`${baseUrl}${route}`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const Delete = async (route, data, token) => {
  try {
    const response = await attachAuthToken(token)
      .delete(`${baseUrl}${route}`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

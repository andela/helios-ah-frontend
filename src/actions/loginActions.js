
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from '../actionTypes';
import setAuthorizationToken from '../utilities/setAuthorizationToken';
import reverseToken from '../utilities/reverseToken';

const baseUrl = (process.env.NODE_ENV === 'production')
  ? 'https://helios-ah-backend-staging.herokuapp.com/api/v1/auth/login'
  : 'http://localhost:4001/api/v1/auth/login';

export const setCurrentUser = userInfo => ({
  type: SET_CURRENT_USER,
  userInfo
});

export const loginRequest = (userData) => {
  const sentData = {
    email: userData.email,
    password: userData.password
  };
  return async (dispatch) => {
    let loginResponse;
    try {
      loginResponse = await axios({
        method: 'post',
        url: baseUrl,
        data: sentData
      });
      const { token } = loginResponse.data.userDetails;
      const decodedToken = jwt.decode(reverseToken(token));
      localStorage.setItem('token', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(decodedToken));
      return loginResponse;
    } catch (error) {
      return error.response;
    }
  };
};


import axios from 'axios';
import jwt from 'jsonwebtoken';
import { USER_SIGNUP_SUCCESS } from '../actionTypes';
import setAuthorizationToken from '../utilities/setAuthorizationToken';
import reverseToken from '../utilities/reverseToken';

export const setCurrentUser = user => ({
  type: USER_SIGNUP_SUCCESS,
  user
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
        url:
        'https://helios-ah-backend-staging.herokuapp.com/api/v1/auth/login',
        data: sentData
      });
      const { token } = loginResponse.data.userDetails;
      const decodedToken = jwt.decode(reverseToken(token));
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(decodedToken));
      return loginResponse;
    } catch (error) {
      return error.response;
    }
  };
};

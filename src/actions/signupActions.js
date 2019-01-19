import { Post } from '../utilities/apiRequests';
import { USER_SIGNUP_SUCCESS } from '../actionTypes';

export const signupSuccess = userInfo => ({
  type: USER_SIGNUP_SUCCESS,
  userInfo,
});
export const signupUser = userDetails => () => Post('/auth/signup', userDetails)
  .then(response => response).catch((error) => {
    if (error.message === 'Network Error') {
      return {
        message: 'Could not connect to the internet. '
        + 'Please check your internet connection.'
      };
    }
    return error;
  });

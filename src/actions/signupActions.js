import { Post } from '../utilities/apiRequests';
import { SIGN_UP_SUCCESS } from '../actionTypes';

export const signupSuccess = userInfo => ({
  type: SIGN_UP_SUCCESS,
  userInfo,
});
export const signupUser = userDetails => async () => {
  try {
    const response = await Post('/auth/signup', userDetails);
    return response;
  } catch (error) {
    if (error.message === 'Network Error') {
      return {
        message: 'Could not connect to the internet. '
          + 'Please check your internet connection.'
      };
    }
    return error;
  }
};

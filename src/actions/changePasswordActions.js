import { Put } from '../utilities/apiRequests';
import { USER_SIGNUP_SUCCESS } from '../actionTypes';

export const setCurrentUser = user => ({
  type: USER_SIGNUP_SUCCESS,
  user
});

const changePassword = passwordDetails => async () => {
  try {
    const { password, token } = passwordDetails;
    const response = await Put(`/change/password?token=${token}`,
      { password });
    return response;
  } catch (error) {
    return error;
  }
};

export default changePassword;

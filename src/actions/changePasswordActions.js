import { Put } from '../utilities/apiRequests';

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

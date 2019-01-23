import { Put } from '../utilities/apiRequests';

const changePw = pwDetails => async () => {
  try {
    const { password, token } = pwDetails;
    const response = await Put(`/change/password?token=${token}`,
      { password });
    return response;
  } catch (error) {
    return error;
  }
};

export default changePw;

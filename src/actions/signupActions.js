import { Post } from '../utilities/apiRequests';

const signupUser = userDetails => () => Post('/auth/signup', userDetails)
  .then(response => response).catch((error) => {
    if (error.message === 'Network Error') {
      return {
        message: 'Could not connect to the internet. '
        + 'Please check your internet connection.'
      };
    }
    return error;
  });

export default signupUser;

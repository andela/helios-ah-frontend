import { Get } from '../utilities/apiRequests';
import { FACEBOOK_LOGIN, GOOGLE_LOGIN, TWITTER_LOGIN } from '../actionTypes/index';

const googleLogin = token => ({
  type: GOOGLE_LOGIN,
  platform: 'google',
  token
});

const twitterLogin = token => ({
  type: TWITTER_LOGIN,
  platform: 'twitter',
  token
});

const facebookLogin = token => ({
  type: FACEBOOK_LOGIN,
  platform: 'facebook',
  token
});

/**
 *
 * @param {string} baseURL - url redirected to
 * @returns {null} - returns null value
 */
export const socialLogin = platform => async (dispatch) => {
  try {
    const res = await Get(`/auth/${platform}/callback${window.location.search}`);    
    localStorage.setItem('x-access-token', res.token);
    if (platform === 'social_ggl') {
      await dispatch(googleLogin(res.token));
    } else if (platform === 'social_tw') {
      await dispatch(twitterLogin(res.token));
    } else if (platform === 'social_fb') {
      await dispatch(facebookLogin(res.token));
    }
  } catch (error) {
    Promise.reject(error);
    console.error(error);
  }
};

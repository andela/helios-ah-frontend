import { Get } from '../utilities/apiRequests';
import {
  FACEBOOK_LOGIN,
  GOOGLE_LOGIN,
  TWITTER_LOGIN,
  LOGIN_FAIL
} from '../actionTypes/index';

export const googleLogin = (token, authenticated = false) => ({
  type: GOOGLE_LOGIN,
  platform: 'google',
  token,
  authenticated
});

const twitterLogin = (token, authenticated = false) => ({
  type: TWITTER_LOGIN,
  platform: 'twitter',
  token,
  authenticated
});

const facebookLogin = (token, authenticated = false) => ({
  type: FACEBOOK_LOGIN,
  platform: 'facebook',
  token,
  authenticated
});

const loginFail = () => ({
  type: LOGIN_FAIL,
  platform: null,
  error: 'user not found'
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
    const authenticated = res.token ? true : false;
    if (platform === 'social_ggl' && res.token) {
      await dispatch(googleLogin(res.token, authenticated));
    } else if (platform === 'social_tw' && res.token) {
      await dispatch(twitterLogin(res.token, authenticated));
    } else if (platform === 'social_fb' && res.token) {
      await dispatch(facebookLogin(res.token, authenticated));
    } else {
      await dispatch(loginFail());
    }
  } catch (error) {
    Promise.reject(error);
    await dispatch(loginFail());
    console.error(error);
  }
};

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

export const twitterLogin = (token, authenticated = false) => ({
  type: TWITTER_LOGIN,
  platform: 'twitter',
  token,
  authenticated
});

export const facebookLogin = (token, authenticated = false) => ({
  type: FACEBOOK_LOGIN,
  platform: 'facebook',
  token,
  authenticated
});

export const loginFail = () => ({
  type: LOGIN_FAIL,
  platform: null,
  error: 'error'
});

/**
 *
 * @param {string} baseURL - url redirected to
 * @returns {null} - returns null value
 */
export const socialLogin = platform => async (dispatch) => {
  try {
    const res = await Get(
      `/auth/${platform}/callback${window.location.search}`
    );
    localStorage.setItem('x-access-token', res.data.token);
    const authenticated = res.data.token ? true : false;
    if (platform === 'social_ggl' && res.data.token) {
      return dispatch(googleLogin(res.data.token, authenticated));
    }
    if (platform === 'social_tw' && res.data.token) {
      return dispatch(twitterLogin(res.data.token, authenticated));
    }
    if (platform === 'social_fb' && res.data.token) {
      return dispatch(facebookLogin(res.data.token, authenticated));
    }
    return dispatch(loginFail());
  } catch (error) {
    return dispatch(loginFail());
  }
};

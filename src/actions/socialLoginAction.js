import axios from "axios";
import {
  FACEBOOK_LOGIN,
  GOOGLE_LOGIN,
  TWITTER_LOGIN
} from "../actionTypes/index";


const googleLogin = (token) => ({
  type: GOOGLE_LOGIN,
  platform: 'google',
  token
});

const twitterLogin = (token) => ({
  type: TWITTER_LOGIN,
  platform: 'twitter',
  token
});

const facebookLogin = (token) => ({
  type: FACEBOOK_LOGIN,
  platform: 'facebook',
  token
});

/**
 * 
 * @param {string} baseURL - url redirected to
 * @returns {null} - returns null value
 */
export const socialLogin = baseURL => async dispatch => {
  try {
    const res = await axios.get(`${baseURL}/callback${window.location.search}`);
    localStorage.setItem('x-access-token', res.data.token);
    if (baseURL.includes('social_ggl')) {
      dispatch(googleLogin(res.data.token));
    } else if (baseURL.includes('social_tw')) {
      dispatch(twitterLogin(res.data.token));
    } else if (baseURL.includes('social_fb')) {
      dispatch(facebookLogin(res.data.token));
    }
  } catch (error) {
    Promise.reject(error);
    console.error(error);
  }
}


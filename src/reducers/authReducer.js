import {
  GOOGLE_LOGIN,
  FACEBOOK_LOGIN,
  TWITTER_LOGIN,
  LOGIN_FAIL
} from '../actionTypes/index';

const initState = {
  authenticated: false,
  token: '',
  platform: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case FACEBOOK_LOGIN:
      return {
        ...state,
        authenticated: action.authenticated,
        platform: 'facebook',
        token: action.token
      };
    case TWITTER_LOGIN:
      return {
        ...state,
        authenticated: action.authenticated,
        platform: 'twitter',
        token: action.token
      };
    case GOOGLE_LOGIN:
      return {
        ...state,
        authenticated: action.authenticated,
        token: action.token,
        platform: 'google'
      };
    case LOGIN_FAIL:
      return {
        ...state,
        authenticated: false,
        token: null,
        platform: null
      };
    default:
      return state;
  }
};

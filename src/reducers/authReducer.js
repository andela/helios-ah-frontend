import {
  SET_CURRENT_USER,
  GOOGLE_LOGIN,
  FACEBOOK_LOGIN,
  TWITTER_LOGIN,
  LOGIN_FAIL
} from '../actionTypes';

const initialState = {
  isAuthenticated: null,
  authenticated: false,
  token: '',
  platform: '',
  userInfo: {}
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: action.userInfo
        && Object.keys(action.userInfo).length > 0,
        userInfo: action.userInfo
      };
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
    default: return state;
  }
};

export default authReducer;

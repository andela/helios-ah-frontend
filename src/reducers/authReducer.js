import {
  GOOGLE_LOGIN,
  FACEBOOK_LOGIN,
  TWITTER_LOGIN
} from '../actionTypes/index';

const initState = {
  authenticated: false,
  token: '',
  platform: ''
};

export default (state = initState, action) => {
  const authenticated = action.token ? true : false;
  switch (action.type) {
    case FACEBOOK_LOGIN:
      return {
        ...state,
        authenticated,
        platform: 'facebook',
        token: action.token
      };
    case TWITTER_LOGIN:
      return {
        ...state,
        user: action.user,
        authenticated,
        platform: 'twitter',
        token: action.token
      };
    case GOOGLE_LOGIN:
      return {
        ...state,
        authenticated,
        token: action.token,
        platform: 'google'
      };
    default:
      return state;
  }
};

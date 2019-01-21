import { USER_SIGNUP_SUCCESS } from '../actionTypes';

export default (state = {
  userInfo: {}, isAuthenticated: false
}, action) => {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        userInfo: action.userInfo,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

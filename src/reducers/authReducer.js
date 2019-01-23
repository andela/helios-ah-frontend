import { SET_CURRENT_USER } from '../actionTypes';

export default (state = {
  userInfo: {}, isAuthenticated: false
}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        userInfo: action.userInfo,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

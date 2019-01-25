import { SET_CURRENT_USER } from '../actionTypes';
import checkUserExists from '../utilities/checkUserExists';

const initialState = {
  isAuthenticated: false,
  userInfo: {}
};

const authReducer = (state = initialState, action = {}) => {
  console.log(action, "ACTION")
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: action.userInfo && Object.keys(action.userInfo).length > 0,
        userInfo: action.userInfo
      };
    default: return state;
  }
};

export default authReducer

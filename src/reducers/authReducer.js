import { SET_CURRENT_USER } from '../actionTypes';
import checkUserExists from '../utils/checkUserExists';

const initialState = {
  isUserAuthenticated: false,
  user: {}
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isUserAuthenticated: checkUserExists(action),
        user: action.user
      };
    default: return state;
  }
};

export default auth;

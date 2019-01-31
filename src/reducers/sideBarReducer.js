import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from '../actionTypes';

export default (state = { isOpen: false }, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        isOpen: true
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};

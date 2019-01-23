import {
  ADD_FLASH_MESSAGE,
  DELETE_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGES
} from '../actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: Math.random(),
          type: action.message.type,
          text: action.message.text
        }
      ];
    case DELETE_FLASH_MESSAGE:
      return [
        ...state.filter(message => message.id !== action.id)
      ];
    case CLEAR_FLASH_MESSAGES:
      return [];
    default: return state;
  }
};

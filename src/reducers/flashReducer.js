import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actionTypes';

export default (state = [], action = {}) => {
  const initialId = Math.random()
 
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: initialId,
          type: action.message.type,
          text: action.message.text
        }
      ];
    case DELETE_FLASH_MESSAGE:
      return [
        ...state.filter(message => message.id !== action.id)
      ];
      return state;
    default: return state;
  }
};
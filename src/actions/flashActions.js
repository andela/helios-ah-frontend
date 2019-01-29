import {
  ADD_FLASH_MESSAGE,
  DELETE_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGES
} from '../actionTypes';

export const addFlashMessage = message => ({
  type: ADD_FLASH_MESSAGE,
  message
});

export const deleteFlashMessage = id => ({
  type: DELETE_FLASH_MESSAGE,
  id
});


export const clearFlashMessages = () => ({
  type: CLEAR_FLASH_MESSAGES,
});

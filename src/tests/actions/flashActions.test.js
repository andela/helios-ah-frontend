import {
  addFlashMessage,
  deleteFlashMessage,
  clearFlashMessages
} from '../../actions/flashActions';
import * as types from '../../actionTypes';

describe('actions', () => {
  it('it should create an action to add a flash message', () => {
    const message = 'Invalid email or password';
    const expectedAction = {
      type: types.ADD_FLASH_MESSAGE,
      message
    };
    expect(addFlashMessage(message)).toEqual(expectedAction);
  });
  it('it should create an action to delete a flash message', () => {
    const id = 0.235;
    const expectedAction = {
      type: types.DELETE_FLASH_MESSAGE,
      id
    };
    expect(deleteFlashMessage(id)).toEqual(expectedAction);
  });
  it('it should create an action to clear flash messages', () => {
    const expectedAction = {
      type: types.CLEAR_FLASH_MESSAGES,
    };
    expect(clearFlashMessages()).toEqual(expectedAction);
  });
});

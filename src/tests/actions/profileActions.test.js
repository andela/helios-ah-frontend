import chai from 'chai';
import * as profileActions from '../../actions/profileActions';
import * as types from '../../actionTypes';

const { expect } = chai;

describe('editFields', () => {
  it('should create an action to edit field\'s name and value', () => {
    const name = 'fieldName';
    const value = 'fieldValue';
    const expectedAction = {
      type: types.UPDATE_FIELD,
      name,
      value
    };
    expect(profileActions.editFields(name, value))
      .to.deep.equal(expectedAction);
  });
});

describe('toggleButton', () => {
  it('should toggle the edit button', () => {
    const expectedAction = {
      type: types.TOGGLE_BUTTON
    };
    expect(profileActions.toggleButton()).to.deep.equal(expectedAction);
  });
});

describe('clearEdit', () => {
  it('should set edit cleared to true', () => {
    const status = true;
    const expectedAction = {
      type: types.CLEAR_EDIT,
      status
    };
    expect(profileActions.clearEdit(status)).to.deep.equal(expectedAction);
  });
});

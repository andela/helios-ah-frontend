import chai from 'chai';
import * as actions from '../../actions/bookmarkActions';
import * as types from '../../actionTypes/bookmarkActionTypes';

const { expect } = chai;


describe('actions', () => {
  it('should create action to get bookmark', () => {
    const expectedAction = {
      type: types.GET_BOOKMARK,
      payload: ['post']
    };
    expect(actions.getbookmarksCreator(['post'])).to.deep.equal(expectedAction);
  });
  it('should create action to delete bookmark', () => {
    const expectedAction = {
      type: types.DELETE_BOOKMARK,
      payload: 'id'
    };
    expect(actions.deleteBookmarkCreator('id')).to.deep.equal(expectedAction);
  });
});

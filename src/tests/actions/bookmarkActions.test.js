import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import chai from 'chai';
import * as apiRequests from '../../utilities/apiRequests';
import * as actions from '../../actions/bookmarkActions';
import * as types from '../../actionTypes/bookmarkActionTypes';

const { expect } = chai;
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('actions', () => {
  const expectedAction = {
    get: {
      type: types.GET_BOOKMARK,
      payload: ['bookmarks'],
    },
    delete: {
      type: types.DELETE_BOOKMARK,
      payload: 'id',
    },
  };
  it('should create action to get bookmark', () => {
    expect(actions.getbookmarksCreator(['bookmarks']))
      .to.deep.equal(expectedAction.get);
  });
  it('should create action to delete bookmark', () => {
    expect(actions.deleteBookmarkCreator('id'))
      .to.deep.equal(expectedAction.delete);
  });
  it('should get bookmarks and dispatch action', async () => {
    const response = {
      bookmarks: [{
        id: '11',
        bookmark: {
          User: { firstName: 'Jide', lastName: 'Ajayi' },
          createdAt: '2019-01-23T17:45:20.350Z',
          body: 'My name is Stephanie St.Claire',
          image: 'https://placeimg.com/640/480/tech',
          readTime: '1 mins',
          title: '11 Things I Wish I Knew When I Started My Business',
        }
      }],
    };
    const stubMethod = sinon.stub(apiRequests, 'Get').resolves(response);
    const store = mockStore({ items: [] });
    await store.dispatch(actions.getbookmarks());
    expect(store.getActions()).to.deep.equal([
      {
        type: types.GET_BOOKMARK,
        payload: response.bookmarks,
      }
    ]);
    stubMethod.restore();
  });
  it('should not get bookmarks and dispatch action', async () => {
    const stubMethod = sinon.stub(apiRequests, 'Get')
      .throws({ error: 'error' });
    const store = mockStore({ items: [] });
    const response = await store.dispatch(actions.getbookmarks());
    expect(response).to.deep.equal({ error: 'error' });
    stubMethod.restore();
  });
  it('should delete a bookmark and dispatch action', async () => {
    const response = {
      bookmarkDeleted: [{ id: '11', isActive: false }],
    };
    const stubMethod = sinon.stub(apiRequests, 'Delete').resolves(response);
    const store = mockStore({ items: [] });
    await store.dispatch(actions.deleteBookmark());
    expect(store.getActions()).to.deep.equal([
      {
        type: types.DELETE_BOOKMARK,
        payload: response.bookmarkDeleted[0],
      }
    ]);
    stubMethod.restore();
  });
  it('should not delete a bookmark and dispatch action', async () => {
    const stubMethod = sinon.stub(apiRequests, 'Delete')
      .throws({ error: 'error' });
    const store = mockStore({ items: [] });
    const response = await store.dispatch(actions.deleteBookmark());
    expect(response).to.deep.equal({ error: 'error' });
    stubMethod.restore();
  });
});

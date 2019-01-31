import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import * as apiRequests from '../../utilities/apiRequests';
import * as actionTypes from '../../actionTypes';
import * as commentActions from '../../actions/commentAction';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
describe('Unit tests for the comment action', () => {
  describe('Unit tests for the comment action creators', () => {
    it('should dispatch an action when  a comment is created', () => {
      const expectedAction = {
        type: actionTypes.CREATE_COMMENT_SUCCESS
      };
      expect(commentActions.createCommentSuccess()).toEqual(expectedAction);
    });
    it('should dispatch an action when there is no internet', () => {
      const expectedAction = {
        type: actionTypes.NO_INTERNET
      };
      expect(commentActions.noInternet()).toEqual(expectedAction);
    });
  });
  describe('Unit tests for the create comment async action creator', () => {
    it('should send a post request when a user comments on an article', () => {
      const mockPostRequest = sinon
        .stub(apiRequests, 'Post').resolves({ success: true });
      const store = mockStore({});
      const expectedActions = [
        { type: actionTypes.CREATE_COMMENT_SUCCESS }
      ];
      return store.dispatch(commentActions.createComment())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          mockPostRequest.restore();
        });
    });
    it('should not dispatch any action if the failed request '
      + 'was not due to no internet connection', () => {
      const mockPostRequest = sinon
        .stub(apiRequests, 'Post').rejects();
      const store = mockStore({});
      return store.dispatch(commentActions.createComment())
        .then(() => {
          expect(store.getActions()).toEqual([]);
          mockPostRequest.restore();
        });
    });
    it('should not dispatch an action if the post request fails', () => {
      const mockPostRequest = sinon
        .stub(apiRequests, 'Post').resolves({ success: false });
      const store = mockStore({});
      return store.dispatch(commentActions.createComment())
        .then(() => {
          expect(store.getActions()).toEqual([]);
          mockPostRequest.restore();
        });
    });
    it('should dispatch a nointernet action when there no internet', () => {
      const mockPostRequest = sinon
        .stub(apiRequests, 'Post').rejects({ message: 'Network Error' });
      const store = mockStore({});
      const expectedActions = [
        { type: actionTypes.NO_INTERNET }
      ];
      return store.dispatch(commentActions.createComment())
        .catch(() => {
          expect(store.getActions()).toEqual(expectedActions);
          mockPostRequest.restore();
        });
    });
  });
});

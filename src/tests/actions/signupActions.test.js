import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as apiRequests from '../../utilities/apiRequests';
import * as actions from '../../actions/signupActions';
import * as actionTypes from '../../actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Unit tests fro the signup actions', () => {
  const userInfo = {
    id: 'qwe34-we43ew33-e434-',
    success: true,
    message: 'some message',
    username: 'myUsername',
    token: 'wer434re445.4543wer543wer445tr.56765^543'
  };
  describe('Unit test for the signup action creator', () => {
    it('should return user-info on successful signup', () => {
      const expectedAction = {
        type: actionTypes.SET_CURRENT_USER,
        userInfo,
      };
      expect(actions.signupSuccess(userInfo)).toEqual(expectedAction);
    });
  });
  describe('Unit test for the signup action creator', () => {
    const userDetails = {
      username: 'someUsername',
      password: '34565432',
      email: 'someEmail',
      firstName: 'someFirstName',
      lastName: 'someLastName'
    };
    it('should complete user signup registration', async () => {
      const stubPostMethod = sinon.stub(apiRequests, 'Post').resolves(userInfo);
      const store = mockStore({ user: {} });
      await store.dispatch(actions.signupUser(userDetails));
      expect(store.getActions()).toEqual([]);
      stubPostMethod.restore();
    });
    it('should let user know when there is no internet network', async () => {
      const stubPostMethod = sinon.stub(apiRequests, 'Post')
        .throws({ message: 'Network Error' });
      const store = mockStore({ user: {} });
      const response = await store.dispatch(actions.signupUser(userDetails));
      expect(response.message).toEqual('Could not connect to the internet. '
      + 'Please check your internet connection.');
      stubPostMethod.restore();
    });
  });
});

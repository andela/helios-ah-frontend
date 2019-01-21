import sinon from 'sinon';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
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
        type: actionTypes.USER_SIGNUP_SUCCESS,
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
      const stubPostMethod = sinon.stub(axios, 'post').returns(userInfo);
      const expectedActions = [];
      const store = mockStore({ user: {} });
      const response = await store.dispatch(actions.signupUser(userDetails));
      console.log('respinse 1 is ==> ', response);
      expect(store.getActions()).toEqual(expectedActions);
      stubPostMethod.restore();
    });
    it('should let user know when there is no internet network', async () => {
      const stubPostMethod = sinon.stub(axios, 'post')
        .throws({ message: 'Network Error' });
      const expectedActions = [];
      const store = mockStore({ user: {} });
      const response = await store.dispatch(actions.signupUser(userDetails));
      console.log('respinse 2 is ==> ', response);
      expect(store.getActions()).toEqual(expectedActions);
      stubPostMethod.restore();
    });
  });
});

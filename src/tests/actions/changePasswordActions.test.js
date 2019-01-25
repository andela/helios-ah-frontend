import sinon from 'sinon';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import changePassword from '../../actions/changePasswordActions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Unit test for the change password action', () => {
  const resInfo = {
    success: true,
    message: 'some message',
  };
  const PasswordDetails = {
    password: '34565432',
    token: 'wer434re445.4543wer543wer445tr.56765^543'
  };
  it('should change user password', async () => {
    const stubPostMethod = sinon.stub(axios, 'put').returns(resInfo);
    const store = mockStore({ user: {} });
    await store.dispatch(changePassword(PasswordDetails));
    expect(store.getActions()).toEqual([]);
    stubPostMethod.restore();
  });
  it('should throw error', async () => {
    const stubPostMethod = sinon.stub(axios, 'put')
      .throws({ message: 'Network Error' });
    const store = mockStore({ user: {} });
    const response = await store.dispatch(changePassword(PasswordDetails));
    expect(response.message).toEqual('Network Error');
    stubPostMethod.restore();
  });
});
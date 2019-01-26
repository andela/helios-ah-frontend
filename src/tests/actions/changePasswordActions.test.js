import sinon from 'sinon';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as apiRequests from '../../utilities/apiRequests';
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
    const stubPostMethod = sinon.stub(apiRequests, 'Put').returns(resInfo);
    const store = mockStore({ user: {} });
    await store.dispatch(changePassword(PasswordDetails));
    expect(store.getActions()).toEqual([]);
    stubPostMethod.restore();
  });
  it('should throw error', async () => {
    const stubPostMethod = sinon.stub(apiRequests, 'Put')
      .throws({ message: 'Network Error' });
    const store = mockStore({ user: {} });
    const response = await store.dispatch(changePassword(PasswordDetails));
    expect(response.message).toEqual('Network Error');
    stubPostMethod.restore();
  });
});

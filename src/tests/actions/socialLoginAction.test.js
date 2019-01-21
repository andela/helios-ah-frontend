import thunk from 'redux-thunk';
import moxios from 'moxios';
import mockStoreConfig from 'redux-mock-store';
import {
  googleLogin, facebookLogin, loginFail, twitterLogin
} from '../../actions/socialLoginAction';
import * as types from '../../actionTypes';

const middlewares = [thunk];
const mockStore = mockStoreConfig(middlewares);
const store = mockStore({});
const dispatchFunc = jest.fn();

describe('actions for social login', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    moxios.uninstall();
    dispatchFunc.mockRestore();
  });
  it('should create an action for login via google', () => {
    const token = '';
    const expectedAction = {
      type: types.GOOGLE_LOGIN,
      authenticated: true,
      platform: 'google',
      token
    };
    expect(googleLogin(token, true)).toEqual(expectedAction);
  });
  it('should create an action for login via facebook', () => {
    const token = '';
    const expectedAction = {
      type: types.FACEBOOK_LOGIN,
      token,
      authenticated: true,
      platform: 'facebook'
    };
    expect(facebookLogin(token, true)).toEqual(expectedAction);
  });
  it('should create an action for login via twitter', () => {
    const token = '';
    const expectedAction = {
      type: types.TWITTER_LOGIN,
      authenticated: true,
      token,
      platform: 'twitter'
    };
    expect(twitterLogin(token, true)).toEqual(expectedAction);
  });
  it('should create an action for failure in login', () => {
    const expectedAction = {
      type: types.LOGIN_FAIL,
      platform: null,
      error: 'error'
    };
    expect(loginFail()).toEqual(expectedAction);
  });
  it('should return an action if social login platform is facebook(social_fb)', async () => {
    const url = 'http://localhost:4001/api/v1/auth/social_fb/callback?4ygd774geiugugr78';
    const fakeResponse = {
      data: {
        message: 'Social login via facebook was successful',
        success: true,
        id: '5fyun-ug',
        token: 'jnwdwede',
        username: 'andypy'
      }
    };
    moxios.stubRequest(url, {
      status: 200,
      response: fakeResponse
    }, 10000);
    const authenticated = fakeResponse.data.token ? true : false;
    await store.dispatch(facebookLogin(fakeResponse.data.token, authenticated));
    expect(store.getActions()).toEqual(
      [
        {
          type: types.FACEBOOK_LOGIN,
          platform: 'facebook',
          authenticated: true,
          token: 'jnwdwede'
        }
      ]
    );
  });
  it('should return an action if social login platform is google(social_ggl)', async () => {
    const url = 'http://localhost:4001/api/v1/auth/social_ggl/callback?4ygd774geiugugr78';
    const fakeResponse = {
      data: {
        message: 'Social login via gmail was successful',
        success: true,
        id: '5fyun-ug',
        token: 'jnwdwede',
        username: 'andypy'
      }
    };
    moxios.stubRequest(url, {
      status: 200,
      response: fakeResponse
    }, 10000);
    const authenticated = fakeResponse.data.token ? true : false;
    await store.dispatch(googleLogin(fakeResponse.data.token, authenticated));
    expect(store.getActions()).toEqual(
      [
        {
          authenticated: true,
          platform: 'google',
          token: 'jnwdwede',
          type: 'GOOGLE_LOGIN'
        }
      ]
    );
  });
});

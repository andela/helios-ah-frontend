import signupReducer from '../../reducers/authReducer';
import * as actionTypes from '../../actionTypes';

describe('Unit test for the signup reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      userInfo: {}, isAuthenticated: false,
    };
    expect(signupReducer(undefined, {})).toEqual(initialState);
  });
  it('should update state on successful signup', () => {
    const userInfo = {
      id: 'qwe34-we43ew33-e434-',
      success: true,
      message: 'some message',
      username: 'myUsername',
      token: 'wer434re445.4543wer543wer445tr.56765^543'
    };
    const signupActionCreator = {
      type: actionTypes.SET_CURRENT_USER,
      userInfo,
    };
    expect(signupReducer({}, signupActionCreator))
      .toEqual({ userInfo, isAuthenticated: true });
  });
});

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../../actionTypes';
import logout from '../../actions/logout';

describe('actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('it should create an action to logout', () => {
    const expectedActions = [
      { type: types.SET_CURRENT_USER, userInfo: {} },
    ];
    const store = mockStore({});
    store.dispatch(logout());
    const actualActions = store.getActions();
    expect(actualActions).toEqual(expectedActions);
  });
});

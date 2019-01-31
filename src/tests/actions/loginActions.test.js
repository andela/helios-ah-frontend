import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import * as actions from '../../actions/loginActions';
import * as types from '../../actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterAll(() => {
    moxios.uninstall();
  });

  it('creates SET_CURRENT_USER when user logs in', async () => {
    const userDetails = {
      emai: 'myemail@email.com',
      password: 'myPassword'
    };

    moxios
      .stubRequest(
        'http://localhost:4001/api/v1/auth/login', {
          status: 200,
          response: {
            message: 'login successful',
            userDetails: { token: 'eyJhbGciOiJ' },
          }
        }
      );


    const expectedActions = [
      { type: types.SET_CURRENT_USER, userInfo: null },
    ];
    const store = mockStore({});
    return store.dispatch(actions.loginRequest(userDetails)).then(() => {
      const actualActions = store.getActions();
      expect(actualActions).toEqual(expectedActions);
    });
  });
});

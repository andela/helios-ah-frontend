import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import * as actions from '../../actions/sideBarAction';
import * as types from '../../actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('actions for the sidebar', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterAll(() => {
    moxios.uninstall();
  });

  it('creates ')
});

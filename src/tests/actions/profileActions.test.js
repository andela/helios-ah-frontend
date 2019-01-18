import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as profileActions from '../../actions/profileActions';
import * as types from '../../actionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('editFields', () => {
    it('should create an action to edit field\'s name and value', () => {
        const name = 'fieldName';
        const value = 'fieldValue';
        const expectedAction = {
            type: types.UPDATE_FIELD,
            name,
            value
        }
        expect(profileActions.editFields(name, value)).toEqual(expectedAction)
    });
});

describe('toggleButton', () => {
    it('should toggle the edit button', () => {
        const expectedAction = {
            type: types.TOGGLE_BUTTON
        }
        expect(profileActions.toggleButton()).toEqual(expectedAction)
    });
});

describe('clearEdit', () => {
    it('should set edit cleared to true', () => {
        const status = true
        const expectedAction = {
            type: types.CLEAR_EDIT,
            status
        }
        expect(profileActions.clearEdit(status)).toEqual(expectedAction)
    });
});

/*
describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('should getFollowDetails', () => {

    });

    it('should updateProfile', () => {

    });

    it('should getUserInfo', () => {
        fetchMock.getOnce('/users/5', {
                user: {
                    firstName: 'firstName',
                    lastName: 'lastName',
                    bio: 'bio',
                    image: 'www.someimage.com'
                },
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [
            {
                type: types.GET_A_USER, 
                    user: {
                        firstName: 'firstName',
                        lastName: 'lastName',
                        bio: 'bio',
                        image: 'www.someimage.com'
                    }
                }
        ]

        const store = mockStore({ user: {} })

        return store.dispatch(profileActions.getUserInfo()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
          });
    });
});
*/
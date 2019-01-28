import {
  GET_A_USER,
  TOGGLE_BUTTON,
  UPDATE_FIELD,
  CLEAR_EDIT
} from '../actionTypes';

const defaultUserState = {
  user: {}
};
const defaultButtonValueState = {
  buttonValue: 'Edit'
};
const defaultEditValue = {
  cleared: false
};
export const userReducer = (state = defaultUserState, action) => {
  const { user } = action;
  switch (action.type) {
    case GET_A_USER:
      return {
        ...state,
        user
      };
    default: return state;
  }
};

export const buttonReducer = (state = defaultButtonValueState, action) => {
  switch (action.type) {
    case TOGGLE_BUTTON:
      return {
        ...state,
        buttonValue: (state.buttonValue === 'Edit') ? 'Save' : 'Edit'
      };
    default: return state;
  }
};

export const editFieldsReducer = (state = defaultEditValue, action) => {
  const { name, value, status } = action;
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [name]: value
      };
    case CLEAR_EDIT:
      return {
        ...state,
        cleared: status
      };
    default: return state;
  }
};

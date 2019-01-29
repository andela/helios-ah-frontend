import {
  GET_BOOKMARK,
  DELETE_BOOKMARK,
} from '../actionTypes/bookmarkActionTypes';

const defaultState = {
  items: [],
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case GET_BOOKMARK:
      return {
        ...state,
        items: action.payload,
      };
    case DELETE_BOOKMARK: {
      const { id, isActive } = action.payload;
      let newItems = state.items;
      if (!isActive) {
        newItems = state.items.filter(item => (item.id !== id));
      }
      return {
        ...state,
        items: newItems,
      };
    }
    default: return state;
  }
};

export default reducers;

import { CREATE_ARTICLE } from '../actionTypes';

const defaultState = {
  cache: {
    id: null,
    title: '',
    body: '',
    description: '',
    image: null
  },
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_ARTICLE:
      return {
        ...state,
        cache: action.payload
      };
    default: return state;
  }
};

export default reducers;

import { CREATE_ARTICLE, GET_ARTICLE } from '../actionTypes';
import isWriter from '../utilities/isWriter';

const defaultState = {
  cache: {
    id: null,
    title: '',
    body: '',
    description: '',
    image: null
  },
  article: {},
  isWriter: false
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_ARTICLE:
      return {
        ...state,
        cache: action.payload
      };
    case GET_ARTICLE:
      return {
        article: action.article,
        isWriter: isWriter(action.article)
      };
    default: return state;
  }
};

export default reducers;

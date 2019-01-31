import { CREATE_ARTICLE, GET_MY_ARTICLES } from '../actionTypes';

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
    case GET_MY_ARTICLES:
      return {
        ...state,
        myArticles: action.articles
      }
    default: return state;
  }
};

export default reducers;

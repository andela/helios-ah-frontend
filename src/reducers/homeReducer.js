import { BOOKMARK_ARTICLE } from '../actionTypes';

const reducers = (state = [], action) => {
  switch (action.type) {
    case BOOKMARK_ARTICLE:
      return [...action.articles];
    default: return state;
  }
};

export default reducers;

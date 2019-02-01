import {
  GET_BOOKMARK,
  DELETE_BOOKMARK,
  POST_BOOKMARK
} from '../actionTypes/bookmarkActionTypes';

const defaultState = {
  items: [],
  itemsArticleId: [],
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case GET_BOOKMARK: {
      return {
        ...state,
        items: action.payload,
        itemsArticleId: action.payload.map(item => item.bookmark.id),
      };
    }
    case DELETE_BOOKMARK: {
      const { id, isActive } = action.payload;
      let newItems = state.items;
      let newItemsArticleId = state.itemsArticleId;
      if (!isActive) {
        newItems = state.items.filter(item => (item.id !== id));
        newItemsArticleId = state.itemsArticleId.filter(item => (item !== id));
      }
      return {
        ...state,
        items: newItems,
        itemsArticleId: newItemsArticleId,
      };
    }
    case POST_BOOKMARK: {
      const newItems = state.items;
      const newItemsArticleId = state.itemsArticleId;
      if (action.payload.isActive) {
        newItems.push({ bookmark: action.payload });
        newItemsArticleId.push(action.payload.articleId);
      }
      return {
        ...state,
        items: newItems,
        itemsArticleId: newItemsArticleId,
      };
    }
    default: return state;
  }
};

export default reducers;

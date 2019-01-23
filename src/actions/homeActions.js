import { Get } from '../utilities/apiRequests';
import {
  BOOKMARK_ARTICLE
} from '../actionTypes';

export const setArticles = articles => ({
  type: BOOKMARK_ARTICLE,
  articles
});

export const getArticles = () => async (dispatch) => {
  const response = await Get('/articles');
  if (response.success) {
    dispatch(setArticles(response.articles));
    return ({
      success: true,
      data: response.articles
    });
  }
  return ({ success: false, message: response.message });
};

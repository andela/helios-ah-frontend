import { Post, Get } from '../utilities/apiRequests';
import { CREATE_ARTICLE, GET_ARTICLE } from '../actionTypes';

export const setArticle = article => ({
  type: CREATE_ARTICLE,
  payload: article
});

export const fetchArticleDispatch = article => ({
  type: GET_ARTICLE,
  article
});

export const createArticle = data => async (dispatch) => {
  data.description = 'No Description';
  if (!data.image) { delete data.image; }
  delete data.id;
  delete data.photo;
  const response = await Post('/articles', data);
  if (response.success) {
    dispatch(setArticle(response.articleCreated));
    return ({
      success: true,
      message: response.message,
      data: response.articleCreated
    });
  }
  return ({ success: false, message: response.message });
};


export const fetchArticle = id => async (dispatch) => {
  const fetchArticleResponse = await Get(`/articles/${id}`);
  if (fetchArticleResponse.success) {
    dispatch(fetchArticleDispatch(fetchArticleResponse.article));
    return ({
      success: true,
      message: fetchArticleResponse.message,
      data: fetchArticleResponse.article
    });
  }
  return ({ success: false, message: fetchArticleResponse.message });
};

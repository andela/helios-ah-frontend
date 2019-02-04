import { Post, Put } from '../utilities/apiRequests';
import { CREATE_ARTICLE } from '../actionTypes';

export const setArticle = article => ({
  type: CREATE_ARTICLE,
  payload: article
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

export const updateArticle = data => async (dispatch) => {
  const { id } = data;
  delete data.id;
  delete data.photo;
  data.isDraft = true;
  const response = await Put(`/articles/${id}`, data);
  if (response.success) {
    dispatch(setArticle(response.articleUpdated));
    return ({
      success: true,
      message: response.message,
      data: response.articleUpdated
    });
  }
  return ({ success: false, message: response.message });
};

export const publishArticle = id => async (dispatch) => {
  const response = await Put(`/articles/${id}/status/publish`);
  if (response.success) {
    dispatch(setArticle(response.articlePublished));
    return ({
      success: true,
      message: response.message,
      data: response.articlePublished
    });
  }
  return ({ success: false, message: response.message });
};

export const createTags = async (tags, articleId) => {
  const tagName = { tagName: tags };
  const response = await Post(`/articles/tag/${articleId}`, tagName);
  if (response.success) {
    return ({
      success: true,
      message: response.message,
    });
  }
  return ({ success: false, message: response.message });
};

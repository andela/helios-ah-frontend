import { Post, Put, Get } from '../utilities/apiRequests';
import {
  CREATE_ARTICLE,
  GET_ARTICLE
} from '../actionTypes';

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

export const articleLike = data => async () => {
  const { articleId } = data;
  const response = await Post(`/articles/${articleId}/likes`);
  if (response.success === true) {
    return response;
  }
  return ({
    success: false,
    message: response.message
  });
};

export const updateArticleLike = data => async () => {
  const { articleId, isLiked } = data;
  const response = await Put(`/articles/${articleId}/likes`, { isLiked });
  if (response.success === true) {
    return response;
  }
  return ({
    success: false,
    message: response.message
  });
};

export const getLike = async (articleId) => {
  const response = await Get(`/articles/${articleId}/likes`);
  if (response.success === true) {
    return response;
  }
  return ({
    success: false,
    message: response.message
  });
};

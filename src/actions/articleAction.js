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
  const response = await Put(`/articles/${id}`, data);
  if (response.success) {
    dispatch(setArticle(response.articleUpdated[0]));
    return ({
      success: true,
      message: response.message,
      data: response.articleUpdated
    });
  }
  return ({ success: false, message: response.message });
};

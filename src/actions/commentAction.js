import { Post } from '../utilities/apiRequests';
import * as actionTypes from '../actionTypes';

export const createCommentSuccess = () => ({
  type: actionTypes.CREATE_COMMENT_SUCCESS,
});

export const noInternet = () => ({
  type: actionTypes.NO_INTERNET,
});

export const createComment = (commentText, articleId) => async (dispatch) => {
  try {
    const response = await
    Post(`articles/${articleId}/comments`, { commentText });
    if (response.success) {
      dispatch(createCommentSuccess());
      return;
    }
  } catch (error) {
    if (error.message === 'Network Error') {
      dispatch(noInternet());
    }
  }
};

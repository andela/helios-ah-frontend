import { Post, Get } from '../utilities/apiRequests';
import { CREATE_ARTICLE, GET_MY_ARTICLES } from '../actionTypes';

export const setArticle = article => ({
  type: CREATE_ARTICLE,
  payload: article
});

export const getMyArticles = articles => ({
  type: GET_MY_ARTICLES,
  articles
})

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

export const getUserArticles = () => async dispatch => {
  const response = await Get('/articles/user');
  dispatch(getMyArticles(response.articles));
  return ({
    success: true,
    message: response.message,
    articles: response.articles
  })
}

import {
  GET_BOOKMARK,
  DELETE_BOOKMARK,
  POST_BOOKMARK
} from '../actionTypes/bookmarkActionTypes';
import { Get, Delete, Post } from '../utilities/apiRequests';

export const getbookmarksCreator = bookmarks => ({
  type: GET_BOOKMARK,
  payload: bookmarks,
});

export const deleteBookmarkCreator = bookmarkId => ({
  type: DELETE_BOOKMARK,
  payload: bookmarkId,
});

export const postBookmarkCreator = bookmarkId => ({
  type: POST_BOOKMARK,
  payload: bookmarkId,
});

export const postbookmarks = articleId => async (dispatch) => {
  try {
    const response = await Post(`/articles/${articleId}/bookmark`, '');
    return dispatch(postBookmarkCreator(response.bookmark));
  } catch (error) {
    return error;
  }
};

export const getbookmarks = () => async (dispatch) => {
  try {
    const response = await Get('/users/bookmarks');
    return dispatch(getbookmarksCreator(response.bookmarks));
  } catch (error) {
    return error;
  }
};

export const deleteBookmark = articleId => async (dispatch) => {
  try {
    const response = await Delete(`/users/bookmarks/${articleId}`, '');
    return dispatch(deleteBookmarkCreator(response.bookmarkDeleted[0]));
  } catch (error) {
    return error;
  }
};

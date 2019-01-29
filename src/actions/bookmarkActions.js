import {
  GET_BOOKMARK,
  DELETE_BOOKMARK
} from '../actionTypes/bookmarkActionTypes';
import { Get, Delete } from '../utilities/apiRequests';

export const getbookmarksCreator = bookmarks => ({
  type: GET_BOOKMARK,
  payload: bookmarks,
});

export const deleteBookmarkCreator = bookmarkId => ({
  type: DELETE_BOOKMARK,
  payload: bookmarkId,
});

export const getbookmarks = () => async (dispatch) => {
  try {
    const response = await Get('/users/bookmarks');
    return dispatch(getbookmarksCreator(response.bookmarks));
  } catch (error) {
    return error;
  }
};

export const deleteBookmark = id => async (dispatch) => {
  try {
    const response = await Delete(`/users/bookmarks/${id}`, '');
    return dispatch(deleteBookmarkCreator(response.bookmarkDeleted[0]));
  } catch (error) {
    return error;
  }
};

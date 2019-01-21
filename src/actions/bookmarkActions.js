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

export const getbookmarks = () => (dispatch) => {
  Get('/users/bookmarks')
    .then(res => res.bookmarks)
    .then(bookmarks => dispatch(getbookmarksCreator(bookmarks)))
    .catch(error => error);
};

export const deleteBookmark = id => (dispatch) => {
  Delete(`/users/bookmarks/${id}`, '')
    .then(res => res.bookmarkDeleted[0])
    .then(bookmarkId => dispatch(deleteBookmarkCreator(bookmarkId)))
    .catch(error => error);
};

import {
  createArticle,
  updateArticle,
  publishArticle,
  createTags
} from './articleAction';
import changePassword from './changePasswordActions';
import {
  addFlashMessage,
  deleteFlashMessage,
  clearFlashMessages
} from './flashActions';
import { setArticles, getArticles } from './homeActions';
import { setCurrentUser, loginRequest } from './loginActions';
import { signupSuccess, signupUser } from './signupActions';
import { createComment } from './commentAction';

export {
  createArticle,
  updateArticle,
  publishArticle,
  changePassword,
  addFlashMessage,
  deleteFlashMessage,
  clearFlashMessages,
  setArticles,
  getArticles,
  setCurrentUser,
  loginRequest,
  signupSuccess,
  signupUser,
  createComment,
  createTags,
};

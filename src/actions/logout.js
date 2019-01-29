import setAuthorizationToken from '../utilities/setAuthorizationToken';
import { setCurrentUser } from './loginActions';

const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  setAuthorizationToken(false);
  dispatch(setCurrentUser({}));
};

export default logout;

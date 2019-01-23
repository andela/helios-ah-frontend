import setAuthorizationToken from '../utilities/setAuthorizationToken';
import { setCurrentUser } from './loginActions';

const logout = () => (dispatch) => {
  localStorage.removeItem('x-access-token');
  setAuthorizationToken(false);
  dispatch(setCurrentUser({}));
};

export default logout;

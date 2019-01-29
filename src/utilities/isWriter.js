import jwt from 'jsonwebtoken';
import reverseToken from './reverseToken';

const isWriter = (article) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }
  const decodedToken = jwt.decode(reverseToken(token));

  if (decodedToken.id === article.userId) {
    return true;
  }
  return false;
};

export default isWriter;

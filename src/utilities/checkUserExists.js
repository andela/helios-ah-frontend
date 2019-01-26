const checkUserExists = (action) => {
  if (action.userInfo && Object.keys(action.userInfo).length > 0) {
    return true;
  }
  return false;
};

export default checkUserExists;

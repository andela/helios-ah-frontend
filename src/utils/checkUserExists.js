const checkUserExists = (action) => {
  if (action.user && Object.keys(action.user).length > 0) {
    return true
  } 
  return false
}

export default checkUserExists;

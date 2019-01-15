const frontendValidation = (data) => {
  const errors = {};
  if (data.password) {
    data.password = data.password.trim();
  }
  if (data.email) {
    data.email = data.email.trim();
  }

  if (!data.email) {
    errors.email = 'Email field is required'
  }
  if (data.email && !/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(data.email)) {
    errors.email = 'Invalid email'
  }
  if (!data.password) {
    errors.password = 'Password field is required'
  }
  return errors;
}

export default frontendValidation;

const loginValidation = (data) => {
  const errors = {};

  if (!data.email.trim()) {
    errors.email = 'Email field is required';
  }
  if (data.email.trim() && !/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/
    .test(data.email.trim())) {
    errors.email = 'Invalid email';
  }
  if (!data.password.trim()) {
    errors.password = 'Password field is required';
  }
  return errors;
};

export default loginValidation;

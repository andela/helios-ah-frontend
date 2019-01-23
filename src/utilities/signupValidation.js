const signupValidation = (data) => {
  const errors = {};

  if (!data.username.trim()) {
    errors.username = 'Username field is required';
  }
  if (data.username.trim() && !/^[0-9a-zA-Z]+$/.test(data.username)) {
    errors
      .username = 'Username must be alphanumeric with no spaces in between';
  }
  if (data.username.trim() && data.username.length < 3) {
    errors
      .username = 'Username must be between 3-20 characters';
  }
  if (data.username.trim() && data.username.length > 20) {
    errors
      .username = 'Username must be between 3-20 characters';
  }
  if (!data.firstName.trim()) {
    errors.firstName = 'First name field is required';
  }
  if (data.firstName.trim() && !/^[a-zA-Z]+$/.test(data.firstName)) {
    errors
      .firstName = 'First name must consist of only alphabets and no spaces';
  }
  if (data.firstName.trim()
    && /^[a-zA-Z]+$/.test(data.firstName) && data.firstName.length < 3) {
    errors
      .firstName = 'First name must consist of between 3-25 characters';
  }
  if (data.firstName.trim() && /^[a-zA-Z]+$/ && data.firstName.length > 25) {
    errors
      .firstName = 'First name must consist of between 3-25 characters';
  }

  if (!data.lastName.trim()) {
    errors.lastName = 'Last Name field is required';
  }
  if (data.lastName.trim() && !/^[a-zA-Z]+$/.test(data.lastName)) {
    errors.lastName = 'Last name must consist of only alphabets';
  }
  if (data.lastName.trim() && /^[a-zA-Z]+$/ && data.lastName.length < 3) {
    errors.lastName = 'Last name must consist of between 3-25 characters';
  }
  if (data.lastName.trim() && /^[a-zA-Z]+$/ && data.lastName.length > 25) {
    errors.lastName = 'Last name must consist of between 3-25 characters';
  }
  if (!data.email.trim()) {
    errors.email = 'Email field is required';
  }
  if (data.email.trim() && !/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(data.email)) {
    errors.email = 'Invalid email';
  }
  if (!data.password.trim()) {
    errors.password = 'Password field is required';
  }

  if (data.password.trim() && data.password.length < 6) {
    errors.password = 'Password must be between 6-150 characters';
  }

  if (data.password.trim() && data.password.length > 150) {
    errors.password = 'Password must be between 6-150 characters';
  }

  if (!data.confirmPassword.trim()) {
    errors.confirmPassword = 'Please confirm your password';
  }
  if (data.password.trim() !== data.confirmPassword.trim()) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
};

export default signupValidation;

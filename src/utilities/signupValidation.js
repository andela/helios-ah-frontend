const signupValidation = (data) => {
  const errors = {};
  if (data.username) {
    data.username = data.username.trim();
  }
  if (data.firstName) {
    data.firstName = data.firstName.trim();
  }
  if (data.lastName) {
    data.lastName = data.lastName.trim();
  }
  if (data.email) {
    data.email = data.email.trim();
  }
  if (data.password) {
    data.password = data.password.trim();
  }

  if (data.confirmPassword) {
    data.confirmPassword = data.confirmPassword.trim();
  }

  if (!data.username) {
    errors.username = 'Username field is required';
  }
  if (data.username && !/^[0-9a-zA-Z]+$/.test(data.username)) {
    errors
      .username = 'Username must be alphanumeric with no spaces in between';
  }
  if (data.username && data.username.length < 3) {
    errors
      .username = 'Username must be between 3-20 characters';
  }
  if (data.username && data.username.length > 20) {
    errors
      .username = 'Username must be between 3-20 characters';
  }
  if (!data.firstName) {
    errors.firstName = 'First name field is required';
  }
  if (data.firstName && !/^[a-zA-Z]+$/.test(data.firstName)) {
    errors
      .firstName = 'First name must consist of only alphabets and no spaces';
  }
  if (data.firstName
    && /^[a-zA-Z]+$/.test(data.firstName) && data.firstName.length < 3) {
    errors
      .firstName = 'First name must consist of between 3-25 characters';
  }
  if (data.firstName && /^[a-zA-Z]+$/ && data.firstName.length > 25) {
    errors
      .firstName = 'First name must consist of between 3-25 characters';
  }

  if (!data.lastName) {
    errors.lastName = 'Last Name field is required';
  }
  if (data.lastName && !/^[a-zA-Z]+$/.test(data.lastName)) {
    errors.lastName = 'Last name must consist of only alphabets';
  }
  if (data.lastName && /^[a-zA-Z]+$/ && data.lastName.length < 3) {
    errors.lastName = 'Last name must consist of between 3-25 characters';
  }
  if (data.lastName && /^[a-zA-Z]+$/ && data.lastName.length > 25) {
    errors.lastName = 'Last name must consist of between 3-25 characters';
  }
  if (!data.email) {
    errors.email = 'Email field is required';
  }
  if (data.email && !/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(data.email)) {
    errors.email = 'Invalid email';
  }
  if (!data.password) {
    errors.password = 'Password field is required';
  }

  if (data.password && data.password.length < 6) {
    errors.password = 'Password must be between 6-150 characters';
  }

  if (data.password && data.password.length > 150) {
    errors.password = 'Password must be between 6-150 characters';
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  }
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
};

export default signupValidation;

const changePasswordValidation = (data) => {
  const errors = {};

  if (!data.password.trim()) {
    errors.password = 'Password field is required';
  }

  if (data.password.trim() && data.password.trim().length < 6) {
    errors.password = 'Password must be between 6-150 characters';
  }

  if (data.password.trim() && data.password.trim().length > 150) {
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

export default changePasswordValidation;

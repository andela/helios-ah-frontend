import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';
import LinkButton from './LinkButton';
import FormInput from './FormInput';

const SignupForm = ({
  onChange,
  username,
  password,
  email,
  isRequestSent,
  confirmPassword,
  firstName,
  lastName,
  submitDetails,
}) => (
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-xs-12" id="welcome-container">
        <div id="welcome-text-container" className="text-center">
          <h2>Writing is an art.</h2>
          <h3>Explore your creative side at authors haven.</h3>
        </div>
        <span id="signup-image" />
      </div>
      <div className="col-sm-6 col-xs-12">
        <div id="form-container">
          <form className="form-horizontal">
            <FormInput
              id="username"
              value={username}
              placeHolder="Username"
              onChange={onChange}
              type="text"
              className="form-control signup-form-input"
            />
            <FormInput
              id="firstName"
              value={firstName}
              placeHolder="First Name"
              onChange={onChange}
              type="text"
              className="form-control signup-form-input"
            />
            <FormInput
              id="lastName"
              value={lastName}
              placeHolder="Last Name"
              onChange={onChange}
              type="text"
              className="form-control signup-form-input"
            />
            <FormInput
              id="email"
              value={email}
              placeHolder="Email"
              onChange={onChange}
              type="text"
              className="form-control signup-form-input"
            />
            <FormInput
              id="password"
              value={password}
              placeHolder="Password"
              onChange={onChange}
              type="password"
              className="form-control signup-form-input"
            />
            <FormInput
              id="confirmPassword"
              value={confirmPassword}
              placeHolder="Confirm Password"
              onChange={onChange}
              type="password"
              className="form-control signup-form-input"
            />

            <div className="row">

              <LinkButton
                onClick={submitDetails}
                isRequestSent={isRequestSent}
                value="Login"
                id="signup-page-login-button"
                className="btn"
                columnAttribute="col-sm-6 col-xs-12"
                to="/login"
              />

              <SubmitButton
                onClick={submitDetails}
                isRequestSent={isRequestSent}
                id="signup-page-button"
                value="Signup"
                className="btn"
                columnAttribute="col-sm-6 col-xs-12"
              />

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

SignupForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  submitDetails: PropTypes.func.isRequired,
  isRequestSent: PropTypes.bool.isRequired,
};

export default SignupForm;

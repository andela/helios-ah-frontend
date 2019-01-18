import React from 'react';
import PropTypes from 'prop-types';
import SignupButton from './SubmitButton';
import LoginButton from './Button';
import SignupInputForm from './FormInput';

const SignupForm = ({
  onChange, username, password, email, isRequestSent,
  confirmPassword, firstName, lastName, submitDetails,
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
            <SignupInputForm
              idAttribute="username"
              inputValue={username}
              inputPlaceHolder="Username"
              onChange={onChange}
              inputType="text"
              classAttribute="form-control signup-form-input"
            />
            <SignupInputForm
              idAttribute="firstName"
              inputValue={firstName}
              inputPlaceHolder="First Name"
              onChange={onChange}
              inputType="text"
              classAttribute="form-control signup-form-input"
            />
            <SignupInputForm
              idAttribute="lastName"
              inputValue={lastName}
              inputPlaceHolder="Last Name"
              onChange={onChange}
              inputType="text"
              classAttribute="form-control signup-form-input"
            />
            <SignupInputForm
              idAttribute="email"
              inputValue={email}
              inputPlaceHolder="Email"
              onChange={onChange}
              inputType="text"
              classAttribute="form-control signup-form-input"
            />
            <SignupInputForm
              idAttribute="password"
              inputValue={password}
              inputPlaceHolder="Password"
              onChange={onChange}
              inputType="password"
              classAttribute="form-control signup-form-input"
            />
            <SignupInputForm
              idAttribute="confirmPassword"
              inputValue={confirmPassword}
              inputPlaceHolder="Confirm Password"
              onChange={onChange}
              inputType="password"
              classAttribute="form-control signup-form-input"
            />

            <div className="row">

              <LoginButton
                submitDetails={submitDetails}
                isRequestSent={isRequestSent}
                buttonValue="Login"
                idAttribute="signup-page-login-button"
                buttonClass="btn"
                columnAttribute="col-sm-6 col-xs-12"
              />

              <SignupButton
                submitDetails={submitDetails}
                isRequestSent={isRequestSent}
                idAttribute="signup-page-button"
                buttonValue="Signup"
                buttonClass="btn"
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

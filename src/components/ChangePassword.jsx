import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';
import FormInput from './FormInput';

const ChangePassword = ({
  onChange,
  password,
  isRequestSent,
  confirmPassword,
  submitDetails,
}) => (
  <div className="row v-flex-page">
    <div className="col-12" id="change-password-container">
      <div id="welcome-text-container" className="text-center">
        <h2>Change Password</h2>
        <br />
        <h4>Enter your new password below</h4>
      </div>
      <div id="change-password-form-container">
        <form className="form-horizontal">
          <FormInput
            id="password"
            value={password}
            placeHolder="New Password"
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
          <SubmitButton
            onClick={submitDetails}
            isRequestSent={isRequestSent}
            id="change-password-page-button"
            value="Submit"
            className="btn"
          />

          <div className="text-center">
            <Link className="text-center link-text" to="/login">Go back to login page</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
);

ChangePassword.propTypes = {
  onChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  submitDetails: PropTypes.func.isRequired,
  isRequestSent: PropTypes.bool.isRequired,
};

export default ChangePassword;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';
import TextFieldGroup from './TextFieldGroup';
import FlashMessageList from './FlashMessagesList';

const ChangePassword = ({
  onChange,
  errors,
  onBlur,
  onInput,
  password,
  isRequestSent,
  confirmPassword,
  submitDetails,
}) => (
  <div className="row v-flex-page">
    <div className="col-12" id="change-password-container">
      <FlashMessageList customAlertClass="change-password-custom-alert col-12" />
      <div id="welcome-text-container" className="text-center">
        <h2>Change Password</h2>
        <br />
        <h4>Enter your new password below</h4>
      </div>
      <div id="change-password-form-container">
        <form className="form-horizontal">
          <TextFieldGroup
            id="password"
            error={errors && errors.password}
            value={password}
            placeholder="New Password"
            field="password"
            onChange={onChange}
            onBlur={onBlur}
            errorFeedbackClass="signup-invalid-feedback"
            validFeedbackClass="signup-valid-feedback"
            customFormDivClass="signup-div-class"
            onInput={onInput}
            type="password"
            className="form-control signup-form-input"
          />
          <TextFieldGroup
            id="confirmPassword"
            error={errors && errors.confirmPassword}
            placeholder="Confirm Password"
            field="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            onBlur={onBlur}
            errorFeedbackClass="signup-invalid-feedback"
            validFeedbackClass="signup-valid-feedback"
            className="form-control signup-form-input"
            customFormDivClass="signup-div-class"
            onInput={onInput}
            type="password"
          />
          <SubmitButton
            onClick={submitDetails}
            isRequestSent={isRequestSent}
            id="change-password-page-button"
            value="Submit"
            className="btn"
          />

          <div className="text-center">
            <Link
              className="text-center link-text"
              to="/login"
            >
            Go back to login page
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
);

ChangePassword.propTypes = {
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.oneOfType([
    PropTypes.string, PropTypes.objectOf(PropTypes.string)]).isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  submitDetails: PropTypes.func.isRequired,
  isRequestSent: PropTypes.bool.isRequired,
  onInput: PropTypes.func,
  onBlur: PropTypes.func
};

ChangePassword.defaultProps = {
  onInput: () => null,
  onBlur: () => null
};

export default ChangePassword;

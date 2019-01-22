import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextFieldGroup from './TextFieldGroup';
import FlashMessageList from './FlashMessagesList';
import SubmitButton from './SubmitButton';
import LinkButton from './LinkButton';


const LoginForm = ({
  onChange,
  onBlur,
  onInput,
  errors,
  isRequestSent,
  submitDetails,
  email,
  password
}) => (
  <div className="container login-body">
    <div className="row">
      <div className="col-md-6">
        <span className="login-image-container" />
      </div>
      <div className="col-md-6 col-xs-12 right-login">
        <h3>WELCOME BACK.....</h3>
        <h5>LOGIN TO AUTHOR`S HAVEN</h5>

        <FlashMessageList
          customAlertClass="custom-alert"
        />

        <form onSubmit={submitDetails} autoComplete="off">
          <TextFieldGroup
            error={errors && errors.email}
            placeholder="Email Address"
            field="email"
            value={email}
            onChange={onChange}
            onBlur={onBlur}
            errorFeedbackClass="login-invalid-feedback"
            validFeedbackClass="login-valid-feedback"
            onInput={onInput}
          />
          <TextFieldGroup
            error={errors && errors.password}
            placeholder="Password"
            field="password"
            type="password"
            value={password}
            onChange={onChange}
            onBlur={onBlur}
            errorFeedbackClass="login-invalid-feedback"
            validFeedbackClass="login-valid-feedback"
            onInput={onInput}
          />
          <div className="forgot-password">
            <Link to="/reset-password"><p>FORGOT PASSWORD?</p></Link>
          </div>
          <div className="login-buttons">
            <SubmitButton
              onClick={submitDetails}
              isRequestSent={isRequestSent}
              className="login-btn"
              value="LOGIN"
              columnAttribute="login-col"
            />
            <LinkButton
              onClick={submitDetails}
              isRequestSent={isRequestSent}
              className="signup-btn"
              value="SIGNUP"
              columnAttribute="signup-col"
              to="/signup"
            />
          </div>
          <div className="social-media-icons">
            <span className="facebook" />
            <span className="twitter" />
            <span className="google" />
          </div>
        </form>
      </div>
    </div>
  </div>
);

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  errors: PropTypes.oneOf([
    PropTypes.string, PropTypes.objectOf(PropTypes.string)]).isRequired,
  submitDetails: PropTypes.func.isRequired,
  isRequestSent: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};


export default LoginForm;

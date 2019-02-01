import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextFieldGroup from './TextFieldGroup';
import FlashMessageList from './FlashMessagesList';
import SubmitButton from './SubmitButton';
import { baseUrl } from '../utilities/apiRequests';

class LoginForm extends Component {
  platformRedirect = platform => this.openLink(`${baseUrl}/auth/${platform}`);

  render() {
    return (
      <div className="container login-body">
        <div className="row">
          <div className="col-md-6">
            <span className="login-image-container" />
          </div>
          <div className="col-md-6 col-xs-12 right-login">
            <h3>WELCOME BACK.....</h3>
            <h5>LOGIN TO AUTHOR`S HAVEN</h5>

            <FlashMessageList customAlertClass="login-custom-alert" />

            <form autoComplete="off">
              <TextFieldGroup
                error={this.props.errors && this.props.errors.email}
                placeholder="Email"
                field="email"
                value={this.props.email}
                onChange={this.props.onChange}
                onBlur={this.props.onBlur}
                errorFeedbackClass="login-invalid-feedback"
                validFeedbackClass="login-valid-feedback"
                onInput={this.props.onInput}
                customFormDivClass="login-div-class"
                className="form-control login-input"
              />
              <TextFieldGroup
                error={this.props.errors && this.props.errors.password}
                placeholder="Password"
                field="password"
                type="password"
                value={this.props.password}
                onChange={this.props.onChange}
                onBlur={this.props.onBlur}
                errorFeedbackClass="login-invalid-feedback"
                validFeedbackClass="login-valid-feedback"
                onInput={this.props.onInput}
                customFormDivClass="login-div-class"
                className="form-control login-input"
              />
              <div className="forgot-password">
                <Link to="/reset-password">
                  <p>FORGOT PASSWORD?</p>
                </Link>
              </div>
              <div className="login-buttons">
                <SubmitButton
                  onClick={this.props.submitDetails}
                  isRequestSent={this.props.isRequestSent}
                  className="login-btn"
                  value="LOGIN"
                  columnAttribute="login-col"
                />
              </div>

              <Link to="/signup" className="signup-link-container">
                <div className="signup-link">Unregistered? Sign up here</div>
              </Link>

              <div className="social-media-icons">
                <a href={`${baseUrl}/auth/social_fb`}>
                  <span
                    className="facebook"
                  />
                </a>
                <a href={`${baseUrl}/auth/social_ggl`}>
                  <span
                    className="google"
                  />
                </a>
                <a href={`${baseUrl}/auth/social_tw`}>
                  <span
                    className="twitter"
                  />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onInput: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string)
  ]).isRequired,
  submitDetails: PropTypes.func.isRequired,
  isRequestSent: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

LoginForm.defaultProps = {
  onInput: () => null,
  onBlur: () => null
};

export default LoginForm;

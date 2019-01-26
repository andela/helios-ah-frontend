import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFlashMessage, clearFlashMessages } from '../actions/flashActions';
import { loginRequest } from '../actions/loginActions';
import { LoginForm } from '../components';
import loginValidation from '../utilities/loginValidation';
import Spinner from '../components/Spinner';

/**
 *  Input sign in body form component
 */
export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.onBlurError = {};
    this.onInputError = {};
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnInput = (e) => {
    const field = e.target.name;
    const { value } = e.target;
    this.setState({ [field]: value }, () => {
      const errors = loginValidation(this.state);
      if (errors[field]) {
        this.onInputError[field] = errors[field];
        this.setState({ errors: this.onInputError[field] });
      } else {
        delete (this.onInputError[field]);
      }
      this.setState({ errors: this.onInputError });
    });
  }

  handleOnBlur = (e) => {
    const field = e.target.name;
    const errors = loginValidation(this.state);
    if (errors[field]) {
      this.onBlurError[field] = errors[field];
      this.setState({ errors: this.onBlurError[field] });
    } else {
      delete (this.onBlurError[field]);
    }
    this.setState({ errors: this.onBlurError });
  }

  handleOnSubmit = async (e) => {
    e.preventDefault();
    const {
      addBannerMessage,
      clearBannerMessages,
      userLogin,
      history
    } = this.props;
    clearBannerMessages();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      const loginResponse = await userLogin(this.state);
      if (loginResponse) {
        this.setState({ isLoading: false });
        if (loginResponse.status === 200) {
          history.push('/');
        } else if (
          loginResponse.data.message === 'Email or password does not exist'
        ) {
          addBannerMessage({
            type: 'error',
            text: 'Incorrect email or password'
          });
        } else {
          addBannerMessage({
            type: 'warning',
            text: `${loginResponse.data.message}`
          });
        }
      }
    }
  }

  isValid() {
    const errors = loginValidation(this.state);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return false;
    }
    return true;
  }

  render() {
    const {
      errors, isLoading, email, password
    } = this.state;
    return (
      <div>
        <LoginForm
          onInput={this.handleOnInput}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
          submitDetails={this.handleOnSubmit}
          errors={errors}
          isRequestSent={isLoading}
          email={email}
          password={password}
        />
        <Spinner
          customSpinnerClass={
            (this.state.isLoading === false) ? 'hide' : ''
          }
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
  addBannerMessage: PropTypes.func.isRequired,
  clearBannerMessages: PropTypes.func,
  history: PropTypes.func
};

LoginPage.defaultProps = {
  clearBannerMessages: () => null
};

const mapDispatchToProps = {
  userLogin: loginRequest,
  addBannerMessage: addFlashMessage,
  clearBannerMessages: clearFlashMessages
};

export default connect(null, mapDispatchToProps)(LoginPage);

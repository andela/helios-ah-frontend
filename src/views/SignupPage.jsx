import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from '../components/SignupForm';
import signupValidation from '../utilities/signupValidation';
import { addFlashMessage, clearFlashMessages } from '../actions/flashActions';
import { signupUser } from '../actions/signupActions';
import Spinner from '../components/Spinner';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      email: '',
      errors: {}
    };
    this.state = { ...this.initialState, isRequestSent: false };
    this.isRequestSent = false;
    this.onBlurError = {};
    this.onInputError = {};
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleOnInput = (e) => {
    const field = e.target.name;
    const { value } = e.target;
    this.setState({ [field]: value }, () => {
      const errors = signupValidation(this.state);
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
    const errors = signupValidation(this.state);
    if (errors[field]) {
      this.onBlurError[field] = errors[field];
      this.setState({ errors: this.onBlurError[field] });
    } else {
      delete (this.onBlurError[field]);
    }
    this.setState({ errors: this.onBlurError });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { clearBannerMessages } = this.props;
    clearBannerMessages();
    if (this.isValid()) {
      const {
        username, email, firstName, lastName, password, errors
      } = this.state;
      const { userSignup, addBannerMessage } = this.props;
      this.setState({ isRequestSent: true });
      userSignup({
        username, email, firstName, lastName, password
      }).then((response) => {
        if (response.success) {
          this.setState({ isRequestSent: false });
          addBannerMessage({ type: 'warning', text: response.message });
        } else {
          this.setState({ isRequestSent: false, errors });
          addBannerMessage({ type: 'error', text: response.message });
        }
      }).catch((error) => {
        this.setState({ isRequestSent: false });
        return addBannerMessage({ type: 'error', text: error.message });
      });
    }
  }

  isValid() {
    const errors = signupValidation(this.state);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return false;
    }
    return true;
  }

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <SignupForm
          onChange={this.handleOnChange}
          {...this.state}
          submitDetails={this.handleOnSubmit}
          errors={errors}
          onInput={this.handleOnInput}
          onBlur={this.handleOnBlur}
        />
        <Spinner
          customSpinnerClass={
        (this.state.isRequestSent === false) ? 'hide' : ''
      }
        />
      </React.Fragment>
    );
  }
}

SignupPage.propTypes = {
  userSignup: PropTypes.func.isRequired,
  addBannerMessage: PropTypes.func.isRequired,
  clearBannerMessages: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  userSignup: userDetails => dispatch(signupUser(userDetails)),
  addBannerMessage: message => dispatch(addFlashMessage(message)),
  clearBannerMessages: id => dispatch(clearFlashMessages(id))
});

export default connect(null, mapDispatchToProps)(SignupPage);

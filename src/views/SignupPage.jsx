import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from '../components/SignupForm';
import signupValidation from '../utilities/signupValidation';
import { addFlashMessage } from '../actions/flashActions';
import { signupUser } from '../actions/signupActions';

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
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
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
          return this.setState({ ...this.initialState, isRequestSent: false });
        }
        this.setState({ isRequestSent: false, errors });
        addBannerMessage({ type: 'error', message: response.message });
      }).catch((error) => {
        this.setState({ isRequestSent: false });
        return addBannerMessage({ type: 'error', message: error.message });
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
      <SignupForm
        onChange={this.handleOnChange}
        {...this.state}
        submitDetails={this.handleOnSubmit}
        errors={errors}
      />
    );
  }
}

SignupPage.propTypes = {
  userSignup: PropTypes.func.isRequired,
  addBannerMessage: PropTypes.func
};

SignupPage.defaultProps = {
  addBannerMessage: () => null
};

const mapDispatchToProps = dispatch => ({
  userSignup: userDetails => dispatch(signupUser(userDetails)),
  addBannerMessage: message => dispatch(addFlashMessage(message))
});

export default connect(null, mapDispatchToProps)(SignupPage);

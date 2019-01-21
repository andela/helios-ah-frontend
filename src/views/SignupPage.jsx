import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toastr } from '../utilities';
import SignupForm from '../components/SignupForm';
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
    };
    this.state = { ...this.initialState, isRequestSent: false };
    this.isRequestSent = false;
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const {
      username, email, firstName, lastName, password, confirmPassword
    } = this.state;
    const { userSignup } = this.props;
    if (confirmPassword !== password) {
      return toastr('error', 'Passwords must match', 3000);
    }
    this.setState({ isRequestSent: true });
    userSignup({
      username, email, firstName, lastName, password
    }).then((response) => {
      if (response.success) {
        toastr('success', response.message, 4000);
        return this.setState({ ...this.initialState, isRequestSent: false });
      }
      this.setState({ isRequestSent: false });
      return toastr('error', response.message, 3000);
    }).catch((error) => {
      this.setState({ isRequestSent: false });
      return toastr('error', error.message, 3000);
    });
  }

  render() {
    return (
      <SignupForm
        onChange={this.handleOnChange}
        {...this.state}
        submitDetails={this.handleOnSubmit}
      />
    );
  }
}

SignupPage.propTypes = {
  userSignup: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  userSignup: userDetails => dispatch(signupUser(userDetails)),
});

export default connect(null, mapDispatchToProps)(SignupPage);

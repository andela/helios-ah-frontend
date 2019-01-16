import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import SignupForm from '../components/SignupForm';
import userSignupAction from '../actions/signupActions';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.InitialState = {
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      email: '',
    };
    this.state = { ...this.InitialState, isRequestSent: false };
    this.isRequestSent = false;
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const {
      username, email, firstName, lastName, password, confirmPassword
    } = this.state;
    const { userSignup } = this.props;
    if (confirmPassword !== password) {
      return toastr.error('Passwords must match', { timeOut: 3000 });
    }
    this.setState({ isRequestSent: true });
    userSignup({
      username, email, firstName, lastName, password
    }).then((response) => {
      if (response.success) {
        toastr.success(response.message, { timeOut: 4000 });
        return this.setState({ ...this.InitialState, isRequestSent: false });
      }
      this.setState({ isRequestSent: false });
      return toastr.error(response.message, { timeOut: 3000 });
    }).catch((error) => {
      this.setState({ isRequestSent: false });
      return toastr.error(error.message, { timeOut: 3000 });
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
  userSignup: userDetails => dispatch(userSignupAction(userDetails)),
});

export default connect(null, mapDispatchToProps)(SignupPage);

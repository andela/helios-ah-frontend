import React, { Component } from 'react';
import * as axios from '../utilities/apiRequests';
import ResetPasswordForm from '../components/ResetPasswordForm';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.spanRef = React.createRef();
    this.emailRef = React.createRef();
    this.state = {
      email: "null",
      status: "null",
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { status, email } = this.state;

    const data = {
      email
    };

    const currentStatus = (status !== 'success' || status !== undefined)
      ? await axios.Post('/user/requests/password/reset', data)
      : null;

    this.setState({ status: currentStatus.status });
    const newStatus = this.state;

    // eslint-disable-next-line no-nested-ternary
    return (newStatus.status === "null" || newStatus.status === undefined)
      ? this.statusHandler('Connection Error, Please try again Later')
      : (newStatus.status === 'error' || newStatus.status === undefined)
        ? this.statusHandler('User Not Found')
        : this.statusHandler('Password reset link has been sent to your mail');
  }


  onChange = (e) => {
    this.clearStatus();
    const value = e.target.value.trim();
    this.setState({ email: value });
  }

  statusHandler = (message = '') => {
    this.spanRef.current.innerHTML = message;
    this.clearEmail();
  }

  clearStatus() {
    this.spanRef.current.innerHTML = '';
  }

  clearEmail() {
    this.emailRef.current.value = '';
  }

  render() {
    return (
      <ResetPasswordForm
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        emailRef={this.emailRef}
        spanRef={this.spanRef}
      />
    );
  }
}

export default ResetPassword;

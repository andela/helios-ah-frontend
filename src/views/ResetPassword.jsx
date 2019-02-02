import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as axios from '../utilities/apiRequests';
import ResetPasswordForm from '../components/ResetPasswordForm';
import { addFlashMessage, clearFlashMessages } from '../actions/flashActions';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.spanRef = React.createRef();
    this.emailRef = React.createRef();
    this.state = {
      email: 'null',
      status: 'null',
    };
  }

  componentDidMount() {
    const { clearBannerMessages } = this.props;
    clearBannerMessages();
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
    return (newStatus.status === 'null' || newStatus.status === undefined)
      ? this.props.addBannerMessage({
        type: 'error',
        text: 'Connection Error, Please try again Later'
      })
      : (newStatus.status === 'error' || newStatus.status === undefined)
        ? this.props.addBannerMessage({
          type: 'error',
          text: 'User Not Found'
        })
        : this.props.addBannerMessage({
          type: 'success',
          text: 'Password reset link has been sent to your mail'
        });
  }

  onChange = (e) => {
    const value = e.target.value.trim();
    this.setState({ email: value });
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
ResetPassword.propTypes = {
  addBannerMessage: PropTypes.func.isRequired,
  clearBannerMessages: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => ({
  addBannerMessage: message => dispatch(addFlashMessage(message)),
  clearBannerMessages: id => dispatch(clearFlashMessages(id))
});

export default connect(null, mapDispatchToProps)(ResetPassword);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toastr } from '../utilities';
import ChangePassword from '../components/ChangePassword';
import changePassword from '../actions/changePasswordActions';

class ChangePasswordPage extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      password: '',
      confirmPassword: '',
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
      password, confirmPassword
    } = this.state;
    const { userChangePassword } = this.props;
    if (confirmPassword !== password) {
      return toastr('error', 'Passwords must match', 3000);
    }
    this.setState({ isRequestSent: true });
    const token = (new URL(document.location)).searchParams.get('token');
    userChangePassword({ password, token }).then((response) => {
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
      <ChangePassword
        onChange={this.handleOnChange}
        {...this.state}
        submitDetails={this.handleOnSubmit}
      />
    );
  }
}

ChangePasswordPage.propTypes = {
  userChangePassword: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  userChangePassword: PasswordDetails => dispatch(changePassword(PasswordDetails)),
});

export default connect(null, mapDispatchToProps)(ChangePasswordPage);

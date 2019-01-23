import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toastr } from '../utilities';
import ChangePw from '../components/ChangePw';
import changePw from '../actions/changePwActions';

class ChangePwPage extends Component {
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
    const { userChangePw } = this.props;
    if (confirmPassword !== password) {
      return toastr('error', 'Passwords must match', 3000);
    }
    this.setState({ isRequestSent: true });
    const token = (new URL(document.location)).searchParams.get('token');
    userChangePw({ password, token }).then((response) => {
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
      <ChangePw
        onChange={this.handleOnChange}
        {...this.state}
        submitDetails={this.handleOnSubmit}
      />
    );
  }
}

ChangePwPage.propTypes = {
  userChangePw: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  userChangePw: pwDetails => dispatch(changePw(pwDetails)),
});

export default connect(null, mapDispatchToProps)(ChangePwPage);

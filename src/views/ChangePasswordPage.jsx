import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChangePassword from '../components/ChangePassword';
import changePassword from '../actions/changePasswordActions';
import changePasswordValidation from '../utilities/changePasswordValidation';
import { addFlashMessage, clearFlashMessages } from '../actions/flashActions';

class ChangePasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      errors: {},
      isRequestSent: false
    };
    this.onInputError = {};
  }

  componentDidMount() {
    const { clearBannerMessages } = this.props;
    clearBannerMessages();
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOnInput = (e) => {
    const field = e.target.name;
    const { value } = e.target;
    this.setState({ [field]: value }, () => {
      const errors = changePasswordValidation(this.state);
      if (errors[field]) {
        this.onInputError[field] = errors[field];
        this.setState({ errors: this.onInputError[field] });
      } else {
        delete (this.onInputError[field]);
      }
      this.setState({ errors: this.onInputError });
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { clearBannerMessages } = this.props;
    clearBannerMessages();
    if (this.isValid()) {
      const { errors } = this.state;
      const { clearBannerMessages } = this.props;
      clearBannerMessages();
      if (errors && Object.keys(errors).length === 0) {
        const { userChangePassword, addBannerMessage } = this.props;
        this.setState({ isRequestSent: true });
        const token = (new URL(document.location)).searchParams.get('token');
        const { password } = this.state;
        userChangePassword({ password, token }).then((response) => {
          if (response.success) {
            this.setState({ isRequestSent: false });
            addBannerMessage({ type: 'success', text: response.message });
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
  }

  isValid() {
    const errors = changePasswordValidation(this.state);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return false;
    }
    return true;
  }

  render() {
    const { errors } = this.state;
    return (
      <ChangePassword
        onChange={this.handleOnChange}
        {...this.state}
        submitDetails={this.handleOnSubmit}
        errors={errors}
        onInput={this.handleOnInput}
      />
    );
  }
}

ChangePasswordPage.propTypes = {
  userChangePassword: PropTypes.func.isRequired,
  addBannerMessage: PropTypes.func.isRequired,
  clearBannerMessages: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  userChangePassword: PasswordDetails => dispatch(changePassword(PasswordDetails)),
  addBannerMessage: message => dispatch(addFlashMessage(message)),
  clearBannerMessages: id => dispatch(clearFlashMessages(id))
});

export default connect(null, mapDispatchToProps)(ChangePasswordPage);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Get } from '../utilities/apiRequests';
import { signupSuccess } from '../actions/signupActions';

class CompleteRegistrationPage extends Component {
  state = {
    pageStatus: 'Redirecting... ',
  };

  componentDidMount() {
    const { history, currentUser } = this.props;
    if (currentUser.isAuthenticated) {
      return history.push('/');
    }
    this.CompleteRegistration();
  }

  CompleteRegistration = () => {
    const { location, history, signupUserSuccess } = this.props;
    const baseUrl = `/auth/complete_reg${location.search}`;
    Get(baseUrl).then((userInfo) => {
      if (userInfo.success) {
        localStorage.setItem('token', userInfo.token);
        signupUserSuccess(userInfo);
        return history.push('/');
      }
      if (userInfo.code === 401) {
        this.setState({
          pageStatus: 'The link we sent to you has expired. '
        + 'Please start the signup process again.'
        });
        return setTimeout(() => { history.push('/signup'); }, 3000);
      }
    })
      .catch(() => {
        this.setState({
          pageStatus: 'We could not verify you. Please try '
        + 'again or start the signup process again.'
        });
        return setTimeout(() => { history.push('/signup'); }, 3000);
      });
  };

  render() {
    const { pageStatus } = this.state;
    return (
      <div>
        <h1 style={{ fontSize: '1em' }}>{pageStatus}</h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
  signupUserSuccess: userInfo => dispatch(signupSuccess(userInfo)),
});

CompleteRegistrationPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  signupUserSuccess: PropTypes.func.isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default
connect(mapStateToProps, mapDispatchToProps)(CompleteRegistrationPage);

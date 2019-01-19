import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Get } from '../utilities/apiRequests';
import { signupSuccess } from '../actions/signupActions';

class CompleteRegistrationPage extends Component {
  state = {
    isLoggedIn: false,
    pageStatus: 'Redirecting... ',
  };

  componentDidMount() {
    const { history, currentUser } = this.props;
    if (currentUser.isAuthenticated) {
      return history.push('/');
    }
  }

  CompleteRegistration = () => {
    const { location, history, signupUserSuccess } = this.props;
    const baseUrl = `/auth/complete_reg${location.search}`;
    Get(baseUrl).then((userInfo) => {
      if (userInfo.success) {
        localStorage.setItem('token', userInfo.token);
        signupUserSuccess(userInfo);
        this.setState({ isLoggedIn: true });
      }
    })
      .catch((error) => {
        console.log('err is ==> ', error);
        this.setState({ pageStatus: 'Could not authenticate ' });
        setTimeout(() => history.push('/signup'), 3000);
      });
  };

  render() {
    const { isLoggedIn, pageStatus } = this.state;
    const { history } = this.props;
    if (isLoggedIn) {
      return history.push('/');
    }
    this.CompleteRegistration();
    return (
      <div>
        <h1>{pageStatus}</h1>
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

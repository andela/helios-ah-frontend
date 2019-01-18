import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { socialLogin } from '../actions/socialLoginAction';

/**
 * @class AuthVerify - component
 * @description - contains the logic that redirects user based on the
 * social login status
 */

class AuthVerify extends Component {
  async componentWillMount() {
    const {
      socialLogin: socialAction,
      authenticated,
      history
    } = this.props;
    if (window.location.pathname.includes('social_ggl')) {
      await socialAction('social_ggl');
    } else if (window.location.pathname.includes('social_tw')) {
      await socialAction('social_tw');
    } else if (window.location.pathname.includes('social_fb')) {
      await socialAction('social_fb');
    } else {
      history.push('/login');
    }

    return authenticated ? history.push('/') : history.push('/login');
  }

  /**
   * @returns {JSX}
   */
  render() {
    const { history, authenticated } = this.props;
    return (
      <div>
        <h6>Redirecting... please wait</h6>
        {authenticated === true ? history.push('/') : history.push('/login')}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  authenticated: state.authReducer.authenticated,
  platform: state.authReducer.platform,
  token: state.authReducer.token
});
AuthVerify.propTypes = {
  socialLogin: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { socialLogin }
)(AuthVerify);

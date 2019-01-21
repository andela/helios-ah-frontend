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
  async componentDidMount() {
    const { socialLogin: socialAction } = this.props;
    if (window.location.pathname.includes('social_ggl')) {
      await socialAction('social_ggl');
    } else if (window.location.pathname.includes('social_tw')) {
      await socialAction('social_tw');
    } else if (window.location.pathname.includes('social_fb')) {
      await socialAction('social_fb');
    }
    const { history, authenticated } = await this.props;
    return authenticated ? history.push('/') : history.push('/login');
  }

  /**
   * @returns {JSX}
   */
  render() {
    return (
      <h5>Redirecting...</h5>
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
};

export default connect(
  mapStateToProps,
  { socialLogin }
)(AuthVerify);
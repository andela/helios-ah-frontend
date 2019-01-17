import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { socialLogin } from "../actions/socialLoginAction";

/**
 * @class AuthVerify - component 
 * @description - contains the logic that redirects user based on the 
 * social login status 
 */
class AuthVerify extends Component {
  async componentWillMount() {
    if (window.location.pathname.includes("social_ggl")) {
      await this.props.socialLogin(
        "https://helios-ah-backend-staging.herokuapp.com/api/v1/auth/social_ggl"
      );
    } else if (window.location.pathname.includes("social_tw")) {
      await this.props.socialLogin("https://helios-ah-backend-staging.herokuapp.com/api/v1/auth/social_tw");
    } else if (window.location.pathname.includes("social_fb")) {
      await this.props.socialLogin("https://helios-ah-backend-staging.herokuapp.com/api/v1/auth/social_fb");
    } else {
      console.error("platform not supported");
    }
    const { authenticated, history } = this.props;
    authenticated ? history.push("/") : history.push("/login")
  }

  /**
   * @returns {JSX}
   */
  render() {
    return (
      <div>
        <h1>Redirecting...</h1>
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
  authenticated: PropTypes.bool,
  platform: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  { socialLogin }
)(AuthVerify);

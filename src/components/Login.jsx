import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { baseUrl } from '../utilities/apiRequests';

class Login extends Component {
  openLink = (url) => {
    window.location.href = url;
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
        <h3 className="test2">Authors Haven</h3>
        <button type="submit" onClick={() => this.openLink(`${baseUrl}/auth/social_fb`)}>FaceBook Login</button>
        <button type="submit" onClick={() => this.openLink(`${baseUrl}/auth/social_ggl`)}>Google Login</button>
        <button type="submit" onClick={() => this.openLink(`${baseUrl}/auth/social_tw`)}>Twitter Login</button>
      </div>
    );
  }
}

Login.propTypes = {
  children: PropTypes.node.isRequired
};
export default Login;

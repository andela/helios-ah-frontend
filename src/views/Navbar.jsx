import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBarAuth from '../components/NavBarAuth';
import NavBarNoAuth from '../components/NavBarNoAuth';
import logout from '../actions/logout';

class Navbar extends Component {
  onClick = (event) => {
    event.preventDefault();
    // const {
    //   signout,
    //   children: {
    //     props: {
    //       history
    //     }
    //   }
    // } = this.props;
    // signout();

    // history.push('/');
  }

  returnAppropriateNavbar = () => {
    // const {
    //   auth: {
    //     isUserAuthenticated
    //   }
    // } = this.props;

    const isUserAuthenticated = false;
    if (isUserAuthenticated) {
      return <NavBarAuth onClick={this.onClick} />;
    }
    return <NavBarNoAuth onClick={this.onClick} />;
  }

  render() {
    const returnAppropriateNavbar = this.returnAppropriateNavbar();

    return (
      <div>
        { returnAppropriateNavbar }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

Navbar.propTypes = {
  // auth: PropTypes.objectOf(PropTypes.string).isRequired,
  // signout: PropTypes.func.isRequired,
  // children: PropTypes.objectOf(PropTypes.string)
};

Navbar.defaultProps = {
  children: {}
};

const mapDispatchToProps = {
  signout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

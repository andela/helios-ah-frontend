import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class HomePageRedirect extends React.Component {
    componentWillMount() {
      const { history, isAuthenticated } = this.props;

      if (isAuthenticated) {
        return history.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
  const mapStateToProps = state => ({
    isAuthenticated: state.currentUser.isAuthenticated
  });

  HomePageRedirect.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    history: PropTypes.objectOf(PropTypes.string).isRequired
  };

  return connect(mapStateToProps, { })(HomePageRedirect);
}

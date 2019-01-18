import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { loginRequest } from '../actions/authActions.js';
import { addFlashMessage, clearFlashMessages } from '../actions/flashActions';
import LoginPage from '../views/LoginPage';

/**
 *  Input sign in body form component
 */

const LoginContainer = (props) => {
  const { loginRequest, history, addFlashMessage, clearFlashMessages } = props
  return (
    <div>
      <LoginPage
        loginRequest={loginRequest}
        history={history}
        addFlashMessage={addFlashMessage}
        clearFlashMessages={clearFlashMessages}
      />
    </div>
  )
}

LoginPage.propTypes = {
  loginRequest: propTypes.func.isRequired
}


export default connect(null, { loginRequest, addFlashMessage, clearFlashMessages })(LoginContainer)
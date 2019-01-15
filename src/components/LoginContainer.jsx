import React from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import { loginRequest }  from '../actions/authActions.js';
import { addFlashMessage } from '../actions/flashActions';
import LoginPage from '../views/LoginPage';

/**
 *  Input sign in body form component
 */

class LoginContainer extends React.Component {
	render() {
		const { loginRequest, history, addFlashMessage } = this.props
		return (
			<div>
        <LoginPage 
         loginRequest = { loginRequest }
         history = { history }
         addFlashMessage = { addFlashMessage }
				/>
			</div>
		)
  }
}

LoginPage.propTypes = {
	loginRequest: propTypes.func.isRequired
}


export default connect(null, { loginRequest, addFlashMessage})(LoginContainer)
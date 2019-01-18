import React, { Component } from 'react';
import TextFieldGroup from '../components/TextFieldGroup.jsx';
import frontendValidation from '../utils/frontendValidation';
import FlashMessagesList from '../components/FlashMessagesList.jsx'
import SubmitButton from '../components/SubmitButton.jsx';

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  isValid() {
    const errors = frontendValidation(this.state)
    if (Object.keys(errors).length > 0) {
      this.setState({ errors })
      return false
    }
    return true;
  }

  async onSubmit(e) {
    e.preventDefault();
    this.props.clearFlashMessages();
    if (this.isValid()) {
      await this.setState({ errors: {}, isLoading: true })
      try {
        const loginResponse = await this.props.loginRequest(this.state)
        if (loginResponse) {
          this.setState({ isLoading: false })
          if (loginResponse.status===200) {
            this.props.addFlashMessage({
              type: 'success',
              text: `${loginResponse.data.message}`
            })
          } 
          else if (loginResponse.data.message === "Email or password does not exist") {
            this.props.addFlashMessage({
              type: 'error',
              text: 'Incorrect email or password'
            })
          } 
          else {
            this.props.addFlashMessage({
              type: 'warning',
              text: `${loginResponse.data.message}`
            })
          }
        }
      } catch (error) {
        return error;
      }
    }
  }

  render() {
    const { errors } = this.state
    return (
      <div className="container login-body">
        <div className="row">
          <div className="col-sm-6">
            <span className="login-image-container">
            </span>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 right-login">
            <h3>WELCOME BACK.....</h3>
            <h5>LOGIN TO AUTHOR'S HAVEN</h5>
            <FlashMessagesList/>
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                error={errors && errors.email}
                placeholder="Email Address"
                field="email"
                onChange={this.onChange}
                value={this.state.email}
              />
              <TextFieldGroup
                error={errors && errors.password}
                placeholder="Password"
                field="password"
                type="password"
                onChange={this.onChange}
                value={this.state.password}
              />
              <div className="forgot-password">
                <a href="#"><p>FORGOT PASSWORD?</p></a>
              </div>
              <div className="login-buttons">
                <SubmitButton
                buttonClass="login-btn"
                isRequestSent={this.state.isLoading}
                buttonValue="LOGIN"
                columnAttribute="login-col"
                />
                <SubmitButton
                buttonClass="signup-btn"
                buttonValue="SIGNUP"
                columnAttribute="signup-col"
                />
              </div>
              <div className="social-media-icons">
                <span className="facebook"></span>
                <span className="twitter"></span>
                <span className="google"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

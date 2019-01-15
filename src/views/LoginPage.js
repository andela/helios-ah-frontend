import React, { Component } from 'react';
import TextFieldGroup from '../components/TextFieldGroup.jsx';
import frontendValidation from '../utils/frontendValidation';
import FlashMessagesList from '../components/FlashMessagesList.jsx'
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

    if (this.isValid()) {
      await this.setState({ errors: {}, isLoading: true })
      try {
        const loginResponse = await this.props.loginRequest(this.state)
        if (loginResponse) {
          this.setState({ isLoading: false })
          console.log(loginResponse.status)
          if (loginResponse.status===200) {
            this.props.addFlashMessage({
              type: 'success',
              text: 'You are now logged in'
            })
          } else {
            console.log("Login failed")
            this.props.addFlashMessage({
              type: 'error',
              text: `Invalid Email or Password`
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
      <div className="container-fluid login-body">
        <div className="form-row">
          <div className="col-lg-6 col-md-6 left-login">
            <img src="../Images/undraw_directions_x53j.svg" className="login-img" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 right-login">
            <h3>WELCOME BACK.....</h3>
            <h5>LOGIN TO AUTHOR'S HAVEN</h5>
            <FlashMessagesList/>
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                error={errors && errors.email}
                placeholder="EMAIL  ADDRESS"
                field="email"
                onChange={this.onChange}
                value={this.state.email}
              />
              <TextFieldGroup
                error={errors && errors.password}
                placeholder="PASSWORD"
                field="password"
                type="password"
                onChange={this.onChange}
                value={this.state.password}
              />
              <div className="forgot-password">
                <a href="#"><p>FORGOT PASSWORD?</p></a>
              </div>

              <div className="social-media-icons">
                <a href=''><img src="../Images/facebook.svg" className="facebook" /></a>
                <a href=""><img src="../Images/twitter.svg" className="twitter" /></a>
                <a href=""><img src="../Images/google-plus.svg" className="google-plus" /></a>
              </div>
              <div className="login-buttons">
                <button type="submit" className="login-btn" disabled={this.state.isLoading}>LOGIN</button>
                <button className="signup-btn">SIGNUP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

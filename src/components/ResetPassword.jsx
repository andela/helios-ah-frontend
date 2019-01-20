import React, { Component } from 'react';
// import * as passwordResetImage from '../image/resetPassword.svg';
import * as axios from '../utilities/apiRequests'

export class ResetPassword extends Component {
  state = {
    email: null,
    status: null
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email
    }
    const status = this.state.status !== 'success'
      ? await axios.Post('/user/requests/password/reset', data)
      : null;

    this.setState({ status: status.status });

    this.state.status === 'error'
      ? this.statusHandler('User Not Found')
      : this.statusHandler('Password reset link has been sent to your mail');
  }

  onChange = (e) => {
    this.clearStatus();
    let value = e.target.value.trim();
    this.setState({ email: value });
  }

  statusHandler = (message = '') => {
  this.refs.status.innerHTML = message;
    this.clearEmail();
  }
  clearStatus(e){
   this.refs.status.innerHTML ='';
  }
  clearEmail(e){
    this.refs.email.value ='';
  }
  render() {
    return (
      <div className='container passwordResetBody'>
        <div className='row passwordResetBody'>
          <div className='d-none d-sm-block col-sm-4 col-md-6 passwordResetImageDiv'>
            <span className='passwordResetImage'/>
          </div>
          <div className='col-sm-8 col-md-6 text-center textWithInput'>
            <div className='resetPasswordText'>
              <h1 className='passwordResetH1'>FORGOT YOUR PASSWORD?</h1>
              <h3 className='passwordResetH3'>ENTER YOUR EMAIL ADDRESS BELOW AND REQUEST A RESET LINK</h3>
            </div>
            <div>
              <form onSubmit={this.onSubmit} className='resetPasswordForm'>
                <div className='passwordResetInputDiv'>
                  <input type='text' className='passwordResetInput' id='email' name='email' ref="email" placeholder='Enter your email here' onChange={this.onChange} />
                </div>
                <span className='passwordResetInfo' ref="status"></span>
                <div className='passwordresetbuttonDiv'>
                  <button className='passwordResetButton'>REQUEST RESET LINK</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
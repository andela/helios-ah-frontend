
import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';
import FormInput from './FormInput';

const ResetPasswordForm = ({
  onChange,
  onSubmit,
  emailRef,
  spanRef,
}) => (
  <div className="container passwordResetBody">
    <div className="row passwordResetBody">
      <div
        className="d-none d-sm-block col-sm-4 col-md-6 passwordResetImageDiv"
      >
        <span className="passwordResetImage" />
      </div>
      <div className="col-sm-8 col-md-6 text-center textWithInput">
        <div className="resetPasswordText">
          <h1 className="passwordResetH1">FORGOT YOUR PASSWORD?</h1>
          <h3
            className="passwordResetH3"
          >
          ENTER YOUR EMAIL ADDRESS BELOW AND REQUEST A RESET LINK
          </h3>
        </div>
        <div>
          <form onSubmit={onSubmit} className="resetPasswordForm">
            <div className="passwordResetInputDiv">
              <FormInput
                type="text"
                className="passwordResetInput"
                id="email"
                name="email"
                Ref={emailRef}
                placeHolder="Enter your email here"
                onChange={onChange}
              />
            </div>
            <span className="passwordResetInfo" ref={spanRef} />
            <div className="passwordresetbuttonDiv">
              <SubmitButton
                id="resetPassword"
                onClick={onSubmit}
                type="button"
                className="passwordResetButton"
                value="REQUEST RESET LINK"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

ResetPasswordForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  emailRef: PropTypes.objectOf(PropTypes.any).isRequired,
  spanRef: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ResetPasswordForm;

import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  idAttribute, inputValue, inputPlaceHolder, onChange, inputType, classAttribute
}) => (
  <div className="form-group">
    <input
      type={inputType}
      className={classAttribute}
      id={idAttribute}
      required
      value={inputValue}
      onChange={onChange}
      placeholder={inputPlaceHolder}
    />
  </div>
);

FormInput.propTypes = {
  idAttribute: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputPlaceHolder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputType: PropTypes.string.isRequired,
  classAttribute: PropTypes.string.isRequired,
};

export default FormInput;

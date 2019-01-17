import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  id, value, placeHolder, onChange, type, className
}) => (
  <div className="form-group">
    <input
      type={type}
      className={className}
      id={id}
      required
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
    />
  </div>
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default FormInput;

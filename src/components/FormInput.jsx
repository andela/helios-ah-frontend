import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  id, placeHolder, onChange, type, className, Ref
}) => (
  <div className="form-group">
    <input
      type={type}
      className={className}
      id={id}
      required
      onChange={onChange}
      placeholder={placeHolder}
      ref={Ref}
    />
  </div>
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  Ref: PropTypes.objectOf(PropTypes.any)
};

FormInput.defaultProps = {
  Ref: React.createRef(),
};

export default FormInput;

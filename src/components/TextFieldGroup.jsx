import React from 'react';
import propTypes from 'prop-types';

const TextFieldGroup = ({
  field,
  value,
  error,
  type,
  className,
  onChange,
  onBlur,
  onInput,
  id,
  placeholder,
  errorFeedbackClass,
  validFeedbackClass,
  customFormDivClass
}) => {
  let checkValidity;
  let feedbackClass;
  if (error) feedbackClass = `${errorFeedbackClass} invalid-feedback`;
  else feedbackClass = `${validFeedbackClass}  valid-feedback`;
  if (error) checkValidity = 'is-invalid';
  else if (value && !error) checkValidity = 'is-valid';
  return (
    <div className={`form-group ${customFormDivClass}`}>
      <input
        type={type}
        name={field}
        onInput={onInput}
        className={`${checkValidity} ${className}`}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className={feedbackClass}>
        {error && error}
      </div>
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: propTypes.string.isRequired,
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]).isRequired,
  error: propTypes.string,
  type: propTypes.string,
  onChange: propTypes.func.isRequired,
  onInput: propTypes.func,
  id: propTypes.string,
  onBlur: propTypes.func,
  placeholder: propTypes.string,
  errorFeedbackClass: propTypes.string,
  validFeedbackClass: propTypes.string,
  className: propTypes.string,
  customFormDivClass: propTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text',
  error: '',
  id: null,
  errorFeedbackClass: null,
  validFeedbackClass: null,
  onInput: null,
  onBlur: null,
  placeholder: '',
  className: '',
  customFormDivClass: ''
};

export default TextFieldGroup;

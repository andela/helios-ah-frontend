import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({
  submitDetails, isRequestSent, buttonValue,
  idAttribute, buttonClass, columnAttribute
}) => (
  <div className={columnAttribute}>
    <div className="form-group text-center">
      <button
        type="submit"
        className={buttonClass}
        id={idAttribute}
        onClick={submitDetails}
        disabled={isRequestSent}
      >
        {buttonValue}
      </button>
    </div>
  </div>
);

SubmitButton.propTypes = {
  submitDetails: PropTypes.func.isRequired,
  isRequestSent: PropTypes.bool.isRequired,
  buttonValue: PropTypes.string.isRequired,
  idAttribute: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  columnAttribute: PropTypes.string.isRequired,
};

export default SubmitButton;

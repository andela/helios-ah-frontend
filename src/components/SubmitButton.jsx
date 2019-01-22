import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({
  onClick,
  isRequestSent,
  value,
  id,
  className,
  columnAttribute
}) => (
  <div className={columnAttribute}>
    <div className="form-group text-center">
      <button
        type="submit"
        className={className}
        id={id}
        onClick={onClick}
        disabled={isRequestSent}
      >
        {value}
      </button>
    </div>
  </div>
);

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isRequestSent: PropTypes.bool,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  columnAttribute: PropTypes.string,
};

SubmitButton.defaultProps = {
  isRequestSent: false,
  columnAttribute: ''
};

export default SubmitButton;

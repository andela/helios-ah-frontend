import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({
  isRequestSent, 
  columnAttribute,
  onClick,
  value,
  id,
  className,
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
  onClick: PropTypes.func,
  isRequestSent: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string.isRequired,
  columnAttribute: PropTypes.string,
};

SubmitButton.defaultProps = {
  id: null,
  columnAttribute: null
}

export default SubmitButton;

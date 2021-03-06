import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  onClick,
  isRequestSent,
  value,
  id,
  className,
  columnAttribute,
  textCenter = 'text-center',
}) => (
  <div className={columnAttribute}>
    <div className={`form-group ${textCenter}`}>
      <button
        type="button"
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

Button.propTypes = {
  onClick: PropTypes.func,
  isRequestSent: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  columnAttribute: PropTypes.string.isRequired,
  textCenter: PropTypes.string,
};

Button.defaultProps = {
  onClick: '',
};

export default Button;

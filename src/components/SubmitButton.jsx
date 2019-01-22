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
  isRequestSent: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string.isRequired,
  columnAttribute: PropTypes.string,
};

SubmitButton.defaultProps = {
  isRequestSent: false,
  id: null,
  columnAttribute: null,
  onClick: () => {}
};

export default SubmitButton;

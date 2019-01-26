import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ customSpinnerClass }) => (
  <div className={`loading-modal ${customSpinnerClass}`}>
    <div className="ring">
      Loading
      <span className="spinner" />
    </div>
  </div>
);


Spinner.propTypes = {
  customSpinnerClass: PropTypes.string
};

Spinner.defaultProps = {
  customSpinnerClass: ''
};

export default Spinner;

import React from 'react';
import PropTypes from 'prop-types';

class FlashMessage extends React.Component {
  handleOnClick = () => {
    const {
      deleteBannerMessage,
      message: {
        id
      }
    } = this.props;
    deleteBannerMessage(id);
  }

  render() {
    let alertType;
    const {
      message: {
        type,
        text
      }
    } = this.props;
    const { customAlertClass } = this.props;
    if (type === 'error') alertType = `alert alert-danger ${customAlertClass}`;
    else if (type === 'success') {
      alertType = `alert alert-success ${customAlertClass}`;
    } else if (type === 'warning') {
      alertType = `alert alert-warning ${customAlertClass}`;
    }
    return (
      <div className={`${alertType}  alert-dismissible`} role="alert">
        {text}
        <button
          onClick={this.handleOnClick}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])).isRequired,
  deleteBannerMessage: PropTypes.func,
  customAlertClass: PropTypes.string
};

FlashMessage.defaultProps = {
  customAlertClass: '',
  deleteBannerMessage: () => null
};

export default FlashMessage;

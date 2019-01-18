import React from 'react';
import propTypes from 'prop-types';

class FlashMessage extends React.Component {
  onClick = () => {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    let alertType;
    const { type, text } = this.props.message;
    const { customAlertClass } = this.props;
    if (type === 'error') {
      alertType = `alert alert-danger ${customAlertClass}`;
    } else if (type === 'success') {
      alertType = `alert alert-success ${customAlertClass}`;
    } else if (type === 'warning') {
      alertType = `alert alert-warning ${customAlertClass}`;
    }
    return (
      <div className={`${alertType}  alert-dismissible`} role="alert">
        {text}
        <button
          onClick={this.onClick}
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
  message: propTypes.objectOf(propTypes.any).isRequired,
  deleteFlashMessage: propTypes.func.isRequired,
  customAlertClass: propTypes.string
};

FlashMessage.defaultProps = {
  customAlertClass: ''
};


export default FlashMessage;

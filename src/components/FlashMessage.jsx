import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class FlashMessage extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    let alertType;
    const { type, text } = this.props.message
   if (type === 'error') alertType = 'alert alert-danger'
   else if (type === 'success') alertType = 'alert alert-success'
   else if (type === 'warning') alertType = 'alert alert-warning'

    return (
      <div className={`${alertType}  alert-dismissible`} role="alert">
        {text}
        <button  onClick={this.onClick} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }
}

FlashMessage.propTypes = {
  message: propTypes.object.isRequired,
  deleteFlashMessage: propTypes.func.isRequired,
}


export default FlashMessage

import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { deleteFlashMessage } from '../actions/flashActions'
import FlashMessage from './FlashMessages.jsx';



class FlashMessageList extends React.Component {
  render() {
    const { deleteFlashMessage } = this.props;
    const messages = this.props.messages.map(message => 
      <FlashMessage 
      key={message.id} 
      message={message}
      deleteFlashMessage = {deleteFlashMessage}
      /> 
    )
    return (
      <div>
        {messages}
      </div>
    )
  }
}

FlashMessageList.propTypes = {
  messages: propTypes.array.isRequired,
  deleteFlashMessage: propTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    messages: state.flashMessages
  }
}




export default connect(mapStateToProps, {deleteFlashMessage })(FlashMessageList)
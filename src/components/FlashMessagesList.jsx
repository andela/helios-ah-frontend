
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { deleteFlashMessage } from '../actions/flashActions';
import FlashMessage from './FlashMessage';


export const FlashMessageList = (props) => {
  const {
    deleteFlashMessage,
    customAlertClass
  } = props;
  return (
    props.messages.map(message => (
      <FlashMessage
        key={message.id}
        message={message}
        deleteFlashMessage={deleteFlashMessage}
        customAlertClass={customAlertClass}
      />
    ))
  );
};

FlashMessageList.propTypes = {
  messages: propTypes.arrayOf(propTypes.any).isRequired,
  deleteFlashMessage: propTypes.func.isRequired
};

export const mapStateToProps = state => ({
  messages: state.flashMessages
});

export const mapDispatchToProps = {
  deleteFlashMessage
};


export default connect(mapStateToProps, mapDispatchToProps)(FlashMessageList);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteFlashMessage } from '../actions/flashActions';
import FlashMessage from './FlashMessage';


export const FlashMessageList = (props) => {
  const { messages, deleteBannerMessage, customAlertClass } = props;
  const renderedMessage = messages.map(message => (
    <FlashMessage
      key={message.id}
      message={message}
      customAlertClass={customAlertClass}
      deleteBannerMessage={deleteBannerMessage}
    />
  ));
  return (
    <div>
      {renderedMessage}
    </div>

  );
};

FlashMessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]))).isRequired,
  deleteBannerMessage: PropTypes.func.isRequired,
  customAlertClass: PropTypes.string
};

FlashMessageList.defaultProps = {
  customAlertClass: ''
};

export const mapStateToProps = state => ({
  messages: state.flashMessages
});

const mapDispatchToProps = {
  deleteBannerMessage: deleteFlashMessage
};


export default connect(mapStateToProps, mapDispatchToProps)(FlashMessageList);

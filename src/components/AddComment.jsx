import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const AddComment = ({
  isRequestSent, onClick, commentText,
  onChange, buttonStatus, isUserAuthenticated
}) => (
  <div className="border-bottom">
    <div id="add-comment">
      <img
        src="https://placeimg.com/640/480/animals"
        alt="reg-user"
        className="rounded-circle mr-2"
      />
      <div className="add-comment-container">
        <textarea
          id="add-comment-text-area"
          placeholder="Add comment..."
          value={commentText}
          onChange={onChange}
          disabled={!isUserAuthenticated}
        />
        {isUserAuthenticated === true
          ? (
            <Button
              onClick={onClick}
              isRequestSent={isRequestSent}
              value={buttonStatus}
              id="add-comment-button"
              className="btn"
              columnAttribute="button-container"
            />
          )
          : (
            <Button
              onClick={onClick}
              isRequestSent={false}
              value={buttonStatus}
              id="add-comment-button"
              className="btn"
              columnAttribute="button-container"
            />
          )
        }
      </div>
    </div>
  </div>
);

AddComment.propTypes = {
  isRequestSent: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  commentText: PropTypes.string.isRequired,
  buttonStatus: PropTypes.string.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
};

export default AddComment;

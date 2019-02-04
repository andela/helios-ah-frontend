import React from 'react';
import PropTypes from 'prop-types';
import { WithContext as ReactTags } from 'react-tag-input';
import suggestions from '../tagSuggestion';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Tags = ({
  tags,
  handleDelete,
  handleAddition,
  handleDrag,
  onPublish
}) => (
  <div
    className="modal fade"
    id="modal-trigger"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="modal-label"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="modal-label">ADD TAGS</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div>
            <ReactTags
              tags={tags}
              suggestions={suggestions}
              delimiters={delimiters}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              handleDrag={handleDrag}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
Close

          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-dismiss="modal"
            onClick={onPublish}
          >
Publish

          </button>
        </div>
      </div>
    </div>
  </div>
);

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  handleAddition: PropTypes.func.isRequired,
  handleDrag: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  onPublish: PropTypes.func.isRequired,
};

export default Tags;

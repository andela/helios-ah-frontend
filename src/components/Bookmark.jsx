import React from 'react';
import PropTypes from 'prop-types';
import ImgBgStyle from './ImgBgStyle';

const Bookmark = ({ bookmark, onDeleteBookmark }) => (
  <div className="bookmarkCard row my-3">
    <div className="details col-sm-9 col-12">
      <div className="cardTitle text-hover cursor-pointer
        font-weight-bold text-capitalize my-2 text-truncate"
      >
        {bookmark.bookmark.title}
      </div>
      <div className="cardText text-justify">{bookmark.bookmark.body}</div>
      <div className="cardFoot row my-2 text-muted">
        <div className="col-10 font-10">
          <span>
            {`${bookmark.bookmark.User.firstName}
            ${bookmark.bookmark.User.lastName}`}
          </span>
          <span className="mx-2">|</span>
          <span>{bookmark.bookmark.createdAt}</span>
          <span className="mx-2">|</span>
          <span>
            {`${bookmark.bookmark.readTime} read`}
          </span>
        </div>
        <div className="col-2 cursor-pointer text-hover">
          <span
            className="d-none d-md-block"
            onClick={() => onDeleteBookmark(bookmark.id)}
            role="button"
            aria-hidden
          >
            Remove
          </span>
          <span
            className="d-md-none"
            onClick={() => onDeleteBookmark(bookmark.id)}
            role="button"
            aria-hidden
          >
            <i
              className="fa fa-trash-o"
            />
          </span>
        </div>
      </div>
    </div>
    <div
      className="image col-3 d-none d-sm-block"
      style={ImgBgStyle(bookmark.bookmark.image)}
    />
  </div>
);

Bookmark.propTypes = {
  bookmark: PropTypes.objectOf(PropTypes.string).isRequired,
  onDeleteBookmark: PropTypes.func.isRequired
};

export default Bookmark;

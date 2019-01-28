import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MostReadArticle = ({
  id,
  title,
  body,
  readTime,
  name
}) => (
  <Link className="article-link" to={`/${id}`}>
    <div className="card w-30 text-center">
      <div className="card-body">
        <h6 className="article-header-size card-title">{title}</h6>
        <p className="card-text">{body}</p>
        <p className="card-text">
          <small className="text-muted row">
            <span className="col">{name}</span>
            <span className="col">{`${readTime} read`}</span>
          </small>
        </p>
      </div>
    </div>
  </Link>
);

MostReadArticle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired

};
export default MostReadArticle;

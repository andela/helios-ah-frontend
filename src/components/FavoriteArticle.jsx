/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Article = ({
  id,
  readTime,
  title,
  image,
  name
}) => (
  <Link to={`/article/${id}`} className="article-link">
    <div className="row article-col">
      <div className="col-6">
        <img className="article-img" src={image} alt="" />
      </div>
      <div className="col" style={{ textAlign: 'left' }}>
        <h5 className="fav-article-header">{`${title.substring(0, 80)}...`}</h5>
        <div>
          <span to="/profile" className="profile-link">
            <small className="text-muted"><span>{name}</span></small>
          </span>
        </div>
        <small className="text-muted">{`${readTime} read`}</small>
      </div>
    </div>
  </Link>
);

Article.propTypes = {
  id: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Article;

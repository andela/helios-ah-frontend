/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Article = ({
  readTime,
  title,
  image,
  name
}) => (
  <div className="row article-col">
    <div className="col-6">
      <Link to="/article/sut5-sg565">
        <img className="article-img" src={image} alt="" />
      </Link>
    </div>
    <div className="col" style={{ textAlign: 'left' }}>
      <Link to="/article/44626-asfg" className="article-link">
        <h5>{`${title.substring(0, 80)}...`}</h5>
      </Link>
      <div>
        <Link to="/profile" className="profile-link">
          <span>{name}</span>
        </Link>
      </div>
      <div>{`${readTime} mins read`}</div>
    </div>
  </div>
);

Article.propTypes = {
  readTime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Article;

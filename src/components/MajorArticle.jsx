import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MajorArticle = ({
  id,
  title,
  body,
  image,
  name,
  readTime
}) => (
  <div className="col-md-6">
    <div className="row" id="main-article">
      <div className="col-lg-5 main-article-text">
        <h5 className="article-header-size">{title}</h5>
        <p>
          {`${body.substring(0, 360)} ...`}
          <Link to={`/article/${id}`}> Read More</Link>
        </p>
        <div className="">
          <small className="text-muted">{name}</small>
          <small className="text-muted offset-3">{readTime}</small>
        </div>
      </div>
      <div className="col-lg-7 main-article-image">
        <img
          className="card-img-top main-article-img"
          id="main-article-img"
          src={image}
          alt="card"
        />
      </div>
    </div>
  </div>
);
MajorArticle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired
};
export default MajorArticle;

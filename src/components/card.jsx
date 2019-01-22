import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  id,
  bookmark,
  like,
  title,
  body,
  rate
}) => (
  <div className="col-sm-12 col-lg-4 card-container" id={id}>
    <div className="card w-30" id="card">
      <img
        className="card-img-top"
        src="https://images.unsplash.com/photo-1547894233-3b986939e29c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt="card"
      />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {`${body.substring(0, 125)}...`}

        </p>
      </div>
      <div className="card-footer footer-container">
        <div>
          <span className="card-icons" onClick={event => bookmark(event)}><i className="fas fa-bookmark" /></span>
          <span className="card-icons" onClick={event => like(event)}><i className="fas fa-heart" /></span>
        </div>
        <div>
          <span onClick={event => rate(event, 1)} className="card-icons">
            <i className="fas fa-star" />
          </span>
          <span onClick={event => rate(event, 2)} className="card-icons"><i className="fas fa-star" /></span>
          <span onClick={event => rate(event, 3)} className="card-icons"><i className="fas fa-star" /></span>
          <span onClick={event => rate(event, 4)} className="card-icons"><i className="fas fa-star" /></span>
          <span onClick={event => rate(event, 5)} className="card-icons"><i className="fas fa-star" /></span>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  bookmark: PropTypes.func.isRequired,
  like: PropTypes.func.isRequired,
  rate: PropTypes.func.isRequired,
};

export default Card;

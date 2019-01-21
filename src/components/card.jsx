import React from 'react';
// import cardImage from '../styles/images/DeadpoolSilence.jpg';

const Card = () => (
  <div className="col-sm-12 col-lg-4">
    <div className="card w-30" id="card">
      <img
        className="card-img-top"
        src="https://images.unsplash.com/photo-1547894233-3b986939e29c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt="card"
      />
      <div className="card-body text-center">
        <h5 className="card-title">Article title</h5>
        <p className="card-text">
          This is a wider card with supporting
          text below as a natural lead-in to additional content.
          This content is a little bit longer.

        </p>
      </div>
      <div className="card-footer footer-container">
        <div>
          <span className="card-icons"><i className="fas fa-bookmark" /></span>
          <span className="card-icons"><i className="fas fa-heart" /></span>
        </div>
        <div>
          <span className="card-icons"><i className="fas fa-star" /></span>
          <span className="card-icons"><i className="fas fa-star" /></span>
          <span className="card-icons"><i className="fas fa-star" /></span>
          <span className="card-icons"><i className="fas fa-star" /></span>
          <span className="card-icons"><i className="fas fa-star" /></span>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {};

export default Card;

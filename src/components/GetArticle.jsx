import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import imgBgStyle from '../utilities/imgBgStyle';
import Navbar from '../views/Navbar';
import dateFormat from '../utilities/dateFormat';
import Button from './Button';

const GetArticle = ({
  fetchedArticle,
  showEllipsisDropdown,
  handleEllipsisClick,
  isWriter,
  likeHandler,
  likeRef
}) => (
  <div>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-xs-12 article-container">
          <div className="article-heading-container">
            <div className="article-title">
              <h1>
                {fetchedArticle.title}
              </h1>
            </div>
            {isWriter && (
            <div className="ellipsis-container">
              <i
                className="fas fa-ellipsis-h"
                onClick={handleEllipsisClick}
              />
              <div
                className={`
                  tool-tip ${showEllipsisDropdown
                  ? 'is-visible' : 'not-visible'
                    }
                `}
              >
                <ul className="tooltip-text">
                  <li><Link to="/">Edit</Link></li>
                  <li><Link to="/">Delete</Link></li>
                </ul>
              </div>
            </div>
            )}
          </div>
          <div className="user-profile">
            <div
              className="profile-image"
              style={imgBgStyle(fetchedArticle.User.image
                  || 'https://image.flaticon.com/icons/png/512/149/149071.png')}
            />
            <div className="profile-details">
              <p>
                {`${fetchedArticle.User.firstName} 
              ${fetchedArticle.User.lastName}`}
              </p>
              <p className="article-date-time">
                {`${dateFormat(fetchedArticle.createdAt).dateTime}`}
              </p>
              {!isWriter
                && (
                <Button
                  className="follow-btn"
                  value="Follow"
                  type="button"
                  id="follow-btn"
                  textCenter="unset"
                />
                )}
            </div>
          </div>
          <span className="icons">
            <i className="fa fa-bookmark" />
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
          </span>
          <div
            className="image-container"
            style={imgBgStyle(fetchedArticle.image)}
          />
          <div className="article-body">
            <p>
              {fetchedArticle.body}
            </p>
          </div>
          <div className="article-icons">
            <div className="like">
              <i className="fa fa-heart" onClick={likeHandler} ref={likeRef} />
            </div>
            <div className="report">
              <i className="fa fa-flag" />
            </div>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

GetArticle.propTypes = {
  fetchedArticle: PropTypes.string.isRequired,
  showEllipsisDropdown: PropTypes.string.isRequired,
  handleEllipsisClick: PropTypes.func.isRequired,
  isWriter: PropTypes.func.isRequired,
  likeHandler: PropTypes.func.isRequired,
  likeRef: PropTypes.objectOf(PropTypes.any).isRequired
};

export default GetArticle;

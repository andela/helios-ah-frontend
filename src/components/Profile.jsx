import React from 'react';
import PropTypes from 'prop-types';


const Profile = React.forwardRef((
  {
    handleSubmitUpdate, buttonValue, userEditFields,
    upLoadImageHandler, displayFileHandler, userInfo,
    handleInputChange, handleCancelUpdate
  }, ref
) => {
  const {
    firstName,
    lastName,
    bio,
    noOfArticlesPublished,
    image,
    following,
    followers
  } = userInfo;
  return (
    <div className="col-md-4" align="center">
      <div className="row profile-header mr-2">
        <div className="col-md-6 d-flex flex-row">
          <span className="title-header">Profile</span>
        </div>
        <div className="col-md-6 d-flex flex-row-reverse">
          <button
            type="submit"
            role={buttonValue}
            className="action-button"
            onClick={handleSubmitUpdate}
          >
            {buttonValue}
          </button>
          <button
            type="submit"
            role={buttonValue}
            className={(buttonValue === 'Save')
              ? 'action-button' : 'action-button hide'}
            onClick={handleCancelUpdate}
          >
          Cancel
          </button>
        </div>
      </div>
      <div className="row user-info card mr-2">
        <div className="col-sm-12">
          <div className="profile-image">
            <img
              alt={firstName}
              src={userEditFields.image || image}
              className={(buttonValue === 'Save')
                ? 'img-fluid dim-image' : 'img-fluid'}
            />
            <div
              className={(buttonValue === 'Save') ? 'change-image' : 'hide'}
            >
              <i
                onKeyDown={() => null}
                onClick={upLoadImageHandler}
                role="button"
                tabIndex="0"
                className="fa fa-camera"
              />
              <input
                ref={ref}
                id="upload-image"
                onChange={displayFileHandler}
                className="hide"
                type="file"
                name="file"
                accept="image/*"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12 following-details">
          <div className="row">
            <div className="col-sm-6 following">
              <span>Following</span>
              <span className="follow-number">{following}</span>
            </div>
            <div className="col-sm-6 followers">
              <span>Followers</span>
              <span className="follow-number">{followers}</span>
            </div>
          </div>
        </div>
        <div className="col-sm-12 name-and-bio">
          <div className="row">
            <div className={(buttonValue === 'Save')
              ? 'col-sm-12 form-row' : 'col-sm-12 form-row hide'}
            >
              <div className="col">
                <input
                  className="edit-border"
                  onChange={handleInputChange}
                  name="firstName"
                  type="text"
                  placeholder={firstName}
                  value={userEditFields.firstName}
                />
              </div>
              <div className="col">
                <input
                  className="edit-border"
                  onChange={handleInputChange}
                  name="lastName"
                  type="text"
                  placeholder={lastName}
                  value={userEditFields.lastName}
                />
              </div>
            </div>
            <h5
              className={!(buttonValue === 'Save')
                ? 'col-sm-12' : 'col-sm-12 hide'}
            >
              <span>{firstName}</span>
&nbsp;&nbsp;&nbsp;
              <span>{lastName}</span>
            </h5>
          </div>
          <div>
            <div>
              <textarea
                className={(buttonValue === 'Save') ? 'edit-border' : ''}
                onChange={handleInputChange}
                name="bio"
                placeholder={bio}
                value={userEditFields.bio || bio}
                disabled={!(buttonValue === 'Save')}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12 no-of-publish">
          <span>
            {noOfArticlesPublished}
            {' '}
published articles
          </span>
        </div>
      </div>
    </div>
  );
});

Profile.propTypes = {
  handleSubmitUpdate: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
  userEditFields: PropTypes.objectOf(PropTypes.any).isRequired,
  upLoadImageHandler: PropTypes.func.isRequired,
  displayFileHandler: PropTypes.func.isRequired,
  userInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleCancelUpdate: PropTypes.func.isRequired
};


export default Profile;

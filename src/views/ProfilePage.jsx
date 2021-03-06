import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Profile from '../components/Profile';


import {
  getUserInfo,
  toggleButton,
  editFields,
  updateProfile,
  clearEdit
} from '../actions/profileActions';


class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.uploadImageRef = React.createRef();
  }

  componentDidMount() {
    const { getUserInfoAction, userId } = this.props;
    getUserInfoAction(userId);
  }

  setStateImage = (url) => {
    const { editFieldsAction } = this.props;
    editFieldsAction('image', url);
  }

  handleInputChange = (event) => {
    const name = event.target.attributes.name.value;
    const { editFieldsAction } = this.props;
    editFieldsAction(name, event.target.value);
  }

  upLoadImage = () => {
    const fileInput = this.uploadImageRef;
    fileInput.current.click();
  }

  handleUpdateSubmit = () => {
    const {
      buttonValue,
      editedFields,
      toggleButtonAction,
      updateProfileAction,
      clearEditAction,
    } = this.props;
    if (buttonValue === 'Save') {
      updateProfileAction(editedFields);
      toggleButtonAction();
    } else {
      clearEditAction(false);
      toggleButtonAction();
    }
  }

  handleUpdateCancel = () => {
    const {
      toggleButtonAction,
      clearEditAction
    } = this.props;
    toggleButtonAction();
    clearEditAction(false);
  }

  displayFile = (event) => {
    const { editFieldsAction } = this.props;
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (onLoadEvent) => {
        editFieldsAction('image', onLoadEvent.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  render() {
    const {
      user,
      buttonValue,
      editedFields
    } = this.props;

    const userEditFields = (editedFields.cleared) ? {} : editedFields;
    return (
      <div className="container-fluid">
        <Profile
          ref={this.uploadImageRef}
          handleSubmitUpdate={this.handleUpdateSubmit}
          handleCancelUpdate={this.handleUpdateCancel}
          buttonValue={buttonValue}
          userEditFields={userEditFields}
          userInfo={user}
          upLoadImageHandler={this.upLoadImage}
          displayFileHandler={this.displayFile}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

ProfilePage.propTypes = {
  editedFields: PropTypes.objectOf(PropTypes.any).isRequired,
  buttonValue: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  getUserInfoAction: PropTypes.func.isRequired,
  toggleButtonAction: PropTypes.func.isRequired,
  editFieldsAction: PropTypes.func.isRequired,
  clearEditAction: PropTypes.func.isRequired,
  updateProfileAction: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};


const mapStateToProps = state => ({
  user: state.users.user,
  buttonValue: state.buttonValue.buttonValue,
  editedFields: state.editFieldsReducer,
  userId: state.currentUser.userInfo.id,
});

const mapDispatchToProps = dispatch => ({
  getUserInfoAction: userId => dispatch(getUserInfo(userId)),
  toggleButtonAction: () => dispatch(toggleButton()),
  editFieldsAction: (name, value) => dispatch(editFields(name, value)),
  updateProfileAction: editField => dispatch(updateProfile(editField)),
  clearEditAction: status => dispatch(clearEdit(status))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

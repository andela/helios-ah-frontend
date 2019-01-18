import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import Published from '../components/Published';
import Drafts  from '../components/Drafts';

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

        this.upLoadImage = this.upLoadImage.bind(this);
        this.displayFile = this.displayFile.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
        this.handleUpdateCancel = this.handleUpdateCancel.bind(this);
    }
    componentDidMount() {
        this.props.getUserInfoAction();
    }
    upLoadImage() {
        const fileInput = document.getElementById('upload-image');
        fileInput.click();
    }
    setStateImage(url) {
        this.props.editFieldsAction('image', url)
    }
    handleInputChange(event) {
        const name = event.target.attributes.name.value;
        this.props.editFieldsAction(name, event.target.value);
    }
    handleUpdateSubmit() {
        if (this.props.buttonValue === 'Save') {
            this.props.updateProfileAction(this.props.editFields)
            this.props.toggleButtonAction();
        } else {
            this.props.clearEditAction(false);
            this.props.toggleButtonAction();
        }
    }

    handleUpdateCancel() {
        this.props.toggleButtonAction();
        this.props.clearEditAction(false);
    }
    displayFile(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                this.props.editFieldsAction('image', event.target.result)
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    render() {
        const { user, buttonValue, editFields } = this.props

        const userEditFields = (editFields.cleared) ? {} : editFields;
        return (
            <div className='container-fluid'>
              <Profile
                    handleSubmitUpdate={this.handleUpdateSubmit}
                    handleCancelUpdate={this.handleUpdateCancel}
                    buttonValue  = {buttonValue}
                    userEditFields = {userEditFields}
                    userInfo={user}
                    upLoadImageHandler = {this.upLoadImage}
                    displayFileHandler = {this.displayFileHandler}
                    handleInputChange = {this.handleInputChange}
                />
                <div className='row main-section' align='center'>
                    <div className='col-md-8 card'>
                        <div className='container'>
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#published">Published</a></li>
                                <li><a data-toggle="tab" href="#drafts">Drafts</a></li>
                            </ul>
                            <div className="tab-content">
                                <div id="published" className="tab-pane fade in active">
                                    <h3>Published</h3>
                                    <p>List of Published Articles</p>
                                </div>
                                <div id="drafts" className="tab-pane fade">
                                    <h3>Drafts</h3>
                                    <p>List of Drafted Articles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    buttonValue: state.buttonValue.buttonValue,
    editFields: state.editFieldsReducer
});

const mapDispatchToProps = dispatch => ({
    getUserInfoAction: () => dispatch(getUserInfo()),
    toggleButtonAction: () => dispatch(toggleButton),
    editFieldsAction: (name, value) => dispatch(editFields(name, value)),
    updateProfileAction: (editFields) => dispatch(updateProfile(editFields)),
    clearEditAction: (status) => dispatch(clearEdit(status))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

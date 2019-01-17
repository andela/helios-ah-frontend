import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    handleUpdateSubmit(event) {
        if (this.props.buttonValue === 'Save') {
            this.props.updateProfileAction(this.props.editFields)
            this.props.toggleButtonAction();
        } else {
            this.props.clearEditAction(false);
            this.props.toggleButtonAction();
        }
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
        const {
            firstName,
            lastName,
            bio,
            noOfArticlesPublished,
            image,
            following,
            followers
        } = user;
        const userEditFields = (editFields.cleared) ? {} : editFields;
        return (
            <div className='container-fluid'>
                <div className='row navbar-bg'>
                    Navigation bar
                </div>
                <div className='row main-section' align='center'>
                    <div className='col-md-4'>
                        <div className='row profile-header mr-2'>
                            <div className='col-md-6 d-flex flex-row'>
                                <span className='title-header'>Profile</span>
                            </div>
                            <div className='col-md-6 d-flex flex-row-reverse'>
                                <button className='action-button' onClick={this.handleUpdateSubmit}>{buttonValue}</button>
                            </div>
                        </div>
                        <div className='row user-info card mr-2'>
                            <div className='col-sm-12'>
                                <div className='profile-image'>
                                    <img
                                        src={userEditFields.image || image}
                                        className={(buttonValue === 'Save') ? "img-fluid dim-image" : "img-fluid"}
                                    />
                                    <div
                                        className={(buttonValue === 'Save') ? "change-image" : "hide"}
                                    >
                                        <i onClick={this.upLoadImage} className="fa fa-camera"></i>
                                        <input id="upload-image" onChange={this.displayFile} className="hide" type="file" name="file" accept="image/*"></input>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 following-details'>
                                <div className='row'>
                                    <div className='col-sm-6 following'>
                                        <span>Following</span><span className='follow-number'>{following}</span>
                                    </div>
                                    <div className='col-sm-6 followers'>
                                        <span>Followers</span><span className='follow-number'>{followers}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 name-and-bio'>
                                <div>
                                    <input onChange={this.handleInputChange} name='firstName' type='text' value={userEditFields.firstName || firstName} disabled={!(buttonValue === 'Save')} />
                                    <input onChange={this.handleInputChange} name='lastName' type='text' value={userEditFields.lastName || lastName} disabled={!(buttonValue === 'Save')} />
                                </div>
                                <div>
                                    <div className="form-group">
                                        <textarea onChange={this.handleInputChange} name='bio' placeholder={bio} value={userEditFields.bio || bio} disabled={!(buttonValue === 'Save')} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 no-of-publish'>
                                <span>{noOfArticlesPublished} published articles</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8 card'>
                        <div className='container'>
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#published">Published</a></li>
                                <li><a data-toggle="tab" href="#menu1">Drafts</a></li>
                            </ul>
                            <div class="tab-content">
                                <div id="published" class="tab-pane fade in active">
                                    <h3>Published</h3>
                                    <p>List of Published Articles</p>
                                </div>
                                <div id="menu1" class="tab-pane fade">
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

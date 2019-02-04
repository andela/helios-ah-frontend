import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlashMessagesList from './FlashMessagesList';
import uploadImageCloudinary from '../utilities/cloudinaryUpload';
import {
  createArticle,
  updateArticle,
  publishArticle,
  createTags,
  addFlashMessage
} from '../actions';

class CreateArticle extends Component {
  constructor(props) {
    super(props);
    const {
      cache: {
        id, photo, title, body, image
      }
    } = this.props;
    this.state = {
      id,
      photo,
      title,
      body,
      image
    };
    this.track = 0;
    this.imageRef = React.createRef();
  }

  async componentDidUpdate(prevProps) {
    if (
      (this.props.publish && prevProps.publish === false)
      || (this.props.draft && prevProps.draft === false)
    ) {
      const { title, body } = this.state;
      if (
        title.trim().length < 3
        || body.trim().length < 3
      ) {
        this.props.onSave();
        this.props.addFlashMessage({
          type: 'error',
          text: 'title and body must not be less than 3 characters'
        });
      } else {
        await this.sendData();
      }
    } else {
      this.props.onSave();
    }
  }

  sendData = async () => {
    const { photo, image, id } = this.state;
    let uploaded = false, upload = image;
    const {
      onSave, createArticle, updateArticle, publish
    } = this.props;
    if (photo && image && this.track === 1) {
      upload = await uploadImageCloudinary(photo);
      uploaded = true;
    }
    if ((uploaded && upload !== null) || !uploaded) {
      this.track = 0;
      this.setState({ image: upload }, async () => {
        if (id) {
          if (publish) {
            onSave();
            if (this.compare()) {
              await this.publishArticle(false);
            } else {
              await this.publishArticle();
            }
          } else if (this.compare()) {
            this.props.addFlashMessage({
              type: 'warning',
              text: 'Nothing to update'
            });
          } else {
            const updated = await updateArticle(this.state);
            onSave();
            if (updated.success) {
              this.updateState(updated.data, 'Article saved successfully');
            } else {
              this.props.addFlashMessage({
                type: 'error',
                text: updated.message
              });
            }
          }
        } else if (publish) {
          onSave();
          await this.publishArticle();
          if (!image) {
            this.onClose();
          }
        } else {
          onSave();
          const article = await createArticle(this.state);
          if (!image) {
            this.onClose();
          }
          if (article.success) {
            this.updateState(article.data, 'Article saved to draft');
          } else {
            this.props.addFlashMessage({
              type: 'error',
              text: article.message
            });
          }
        }
      });
    } else {
      this.props.addFlashMessage({
        type: 'error',
        text: 'failed to upload image'
      });
    }
  };

  publishArticle = async (changed = true) => {
    const { id } = this.state;
    const {
      createArticle,
      publishArticle,
      tags
    } = this.props;
    const mappedTag = tags.map(element => element.text);
    if (!changed) {
      if (this.props.cache.isDraft) {
        const published = await publishArticle(id);
        const tagSuccess = await createTags(mappedTag, published.data.id);
        if (!tagSuccess.success) throw (tagSuccess.message);
        this.updateState(published.data, 'Article has been published');
      } else {
        this.props.addFlashMessage({
          type: 'warning',
          text: 'Already published'
        });
      }
    } else {
      try {
        const article = await createArticle(this.state);
        const published = await publishArticle(article.data.id);
        const tagSuccess = await createTags(mappedTag, published.data.id);
        if (!tagSuccess.success) throw (tagSuccess.message);
        this.updateState(published.data, 'Article has been published');
      } catch (error) {
        this.props.addFlashMessage({
          type: 'error',
          text: error.message
        });
      }
    }
  }

  updateState = (data, message) => {
    this.setState({
      id: data.id,
      title: data.title,
      description: data.description,
      body: data.body,
      readTime: data.readTime,
      image: data.image
    });
    this.props.addFlashMessage({
      type: 'success',
      text: message
    });
  };

  compare = () => {
    const { state, props } = this;
    // eslint-disable-next-line no-nested-ternary
    return state.title !== props.cache.title
      ? false
      : state.body !== props.cache.body
        ? false
        : state.image === props.cache.image;
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    const scroll = event.target.scrollHeight;
    event.target.style.height = `${scroll}px`;
  };

  inputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  fileChange = (event) => {
    const file = event.target.files[0];
    this.setState({
      [event.target.name]: event.target.files[0],
      image: URL.createObjectURL(file)
    });
    this.track = 1;
  };

  onImageClick = () => {
    this.imageRef.current.click();
  };

  onClose = () => {
    this.setState({
      image: null
    });
  };

  render() {
    return (
      <div className="container article-box">
        <FlashMessagesList customAlertClass="article-alert" />
        <div className="row article-row">
          <div className="col-lg-12 create-box">
            <h1>
              <input
                id="title"
                name="title"
                defaultValue={this.props.cache.title}
                className="form-control"
                onChange={this.inputChange}
                type="text"
                placeholder="Article title"
              />
            </h1>
          </div>
        </div>
        <div className="row" id="article-container">
          <div className="col-lg-11" id="article-column">
            <div id="img-wraper">
              <img src={this.state.image} id="image-holder" />
              {this.state.image ? (
                <a
                  href="#"
                  onClick={this.onClose}
                  className="close-thik"
                  id="close-image"
                />
              ) : (
                ''
              )}
            </div>
            <textarea
              id="article-body"
              defaultValue={this.props.cache.body}
              name="body"
              className="form-control"
              onChange={this.onChange}
              type="textarea"
              placeholder="Write your article here"
            />
          </div>
          <div className="col-lg-1">
            <div className="add-image-icon">
              <i className="fa fa-camera" onClick={this.onImageClick} />
              <span className="name" />
              <input
                type="file"
                onChange={this.fileChange}
                name="photo"
                id="add-image"
                ref={this.imageRef}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
CreateArticle.propTypes = {
  draft: PropTypes.bool,
  tags: PropTypes.array,
  publish: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
  cache: PropTypes.object.isRequired,
  createArticle: PropTypes.func.isRequired,
  updateArticle: PropTypes.func.isRequired,
  publishArticle: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cache: state.articles.cache
});

export default connect(
  mapStateToProps,
  {
    createArticle,
    updateArticle,
    publishArticle,
    addFlashMessage,
  }
)(CreateArticle);

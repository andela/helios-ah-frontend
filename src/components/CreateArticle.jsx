import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createArticle } from '../actions/articleAction';
import { addFlashMessage } from '../actions/flashActions';
import FlashMessagesList from './FlashMessagesList';
import uploadImageCloudinary from '../utilities/cloudinaryUpload';

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
      image,
    };
  }

  async componentWillReceiveProps(newProps) {
    if (newProps.publish === true || newProps.draft === true) {
      let uploaded = true;
      const { onSave, createArticle } = this.props;
      const {
        photo,
        image,
        id,
        title,
        body
      } = this.state;
      if (title.trim().length < 3 || body.trim().length < 3) {
        onSave();
        this.props.addFlashMessage({
          type: 'error',
          text: 'title and body must not be less than 3 characters'
        });
      } else {
        if (photo && image) {
          uploaded = await uploadImageCloudinary(image);
        }
        if (uploaded) {
          uploaded = ((typeof uploaded) === 'string') ? uploaded : null;
          this.setState({ image: uploaded }, async () => {
            if (id) {
            //
            } else {
              onSave();
              const article = await createArticle(this.state);
              if (!image) {
                this.onClose();
              }
              if (article.success) {
                this.setState({
                  id: article.data.id,
                  title: article.data.title,
                  description: article.data.description,
                  body: article.data.body,
                  readTime: article.data.readTime,
                  image: article.data.image
                });
                this.props.addFlashMessage({
                  type: 'success',
                  text: 'Article saved to draft'
                });
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
      }
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    const scroll = event.target.scrollHeight;
    event.target.style.height = `${scroll}px`;
  }

  inputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  fileChange = (event) => {
    const file = event.target.files[0];
    this.setState({
      [event.target.name]: event.target.files[0]
    });
    this.readFile(file);
  }

  readFile = (file) => {
    if (file) {
      // eslint-disable-next-line no-undef
      const FR = new FileReader();

      FR.addEventListener('load', (event) => {
        this.setState({
          image: event.target.result
        });
      });

      FR.readAsDataURL(file);
    }
  }

  onImageClick = () => {
    document.getElementById('add-image').click();
  }

  onClose = () => {
    this.setState({
      image: null
    });
  }

  render() {
    return (
      <div className="container create-box">
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
              {(this.state.image !== null)
                ? (
                  <a
                    href="#"
                    onClick={this.onClose}
                    className="close-thik"
                    id="close-image"
                  />
                )
                : ''}
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
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
CreateArticle.propTypes = {
  onSave: PropTypes.func.isRequired,
  cache: PropTypes.objectOf(PropTypes.any).isRequired,
  createArticle: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cache: state.articles.cache,
});

export default connect(mapStateToProps,
  { createArticle, addFlashMessage })(CreateArticle);

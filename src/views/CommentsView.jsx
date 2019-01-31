import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Comment,
  AddComment,
  Conversation
} from '../components';
import * as commentActions from '../actions';

export class CommentsView extends Component {
  initialState = {
    isRequestSent: false,
    commentText: '',
    buttonStatus: 'Add Comment'
  };

  state = {
    ...this.initialState
  };

  componentDidMount() {
    if (!this.props.isUserAuthenticated) {
      this.setState({ buttonStatus: 'Login to comment' });
    }
  }

  handleOnSubmit = () => {
    const { commentText } = this.state;
    const {
      createComment, history, match, isUserAuthenticated
    } = this.props;
    if (!isUserAuthenticated) return history.push('/login');
    this.setState({ isRequestSent: true, buttonStatus: 'Creating Comment...' });
    createComment(commentText, match.params.id).then(() => this
      .setState({ ...this.initialState })).catch(() => this
      .setState({ ...this.initialState }));
  };

  handleOnChange = (event) => {
    this.setState({
      commentText: event.target.value
    });
  }

  render() {
    const { isRequestSent, commentText, buttonStatus } = this.state;
    const { isUserAuthenticated } = this.props;
    return (
      <div id="comments-section" className="container">
        <div className="jumbotron">
          <Conversation />
          <AddComment
            isRequestSent={isRequestSent}
            onClick={this.handleOnSubmit}
            commentText={commentText}
            onChange={this.handleOnChange}
            buttonStatus={buttonStatus}
            isUserAuthenticated={isUserAuthenticated}
          />
          <Comment />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  isUserAuthenticated: state.currentUser.isAuthenticated
});

export const mapDispatchToProps = dispatch => ({
  createComment: commentText => dispatch(commentActions
    .createComment(commentText))
});

CommentsView.propTypes = {
  createComment: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.object, PropTypes.bool, PropTypes.string
  ])),
  isUserAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.object, PropTypes.func, PropTypes.string,
    PropTypes.number
  ])),
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsView);

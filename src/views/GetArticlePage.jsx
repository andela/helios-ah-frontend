import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../components/Spinner';
import GetArticle from '../components/GetArticle';
import {
  fetchArticle,
  articleLike,
  updateArticleLike,
  getLike
} from '../actions/articleAction';

export class GetArticlePage extends Component {
  constructor(props) {
    super(props);
    this.articleLikeRef = React.createRef();
    this.state = {
      showEllipsisDropdown: false,
      isLiked: false,
      articleId: null,
      message: ''
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: {
          id
        }
      },
      getArticle
    } = this.props;
    this.setState({ articleId: id });

    getArticle(id);
    const likeStatus = await this.props.getLike(id);
    this.setState({
      isLiked: likeStatus.isLiked
    });
    if (this.state.isLiked === true) {
      this.articleLikeRef.current.style.color = 'red';
    }
  }

  handleEllipsisClick = () => {
    this.setState(prevState => ({
      showEllipsisDropdown: !prevState.showEllipsisDropdown
    }));
  }

  onLikeHandler = async () => {
    if (this.state.isLiked === false && this.state.message !== 'modified') {
      const data = { articleId: this.state.articleId };
      const likeStatus = await this.props.likeArticle(data);
      this.setState({ isLiked: likeStatus.isLiked });
    } else {
      const data = {
        articleId: this.state.articleId,
        isLiked: !this.state.isLiked
      };
      const likeStatus = await this.props.updateLike(data);
      this.setState({
        isLiked: likeStatus.isLiked,
        message: 'modified'
      });
    }
    if (this.state.isLiked === true) {
      this.articleLikeRef.current.style.color = 'red';
    } else {
      this.articleLikeRef.current.style.color = 'grey';
    }
  }

  render() {
    const { fetchedArticle, isWriter } = this.props;
    const { showEllipsisDropdown } = this.state;
    if (!fetchedArticle || Object.keys(fetchedArticle).length < 1) {
      return <Spinner />;
    }
    return (
      <GetArticle
        fetchedArticle={fetchedArticle}
        showEllipsisDropdown={showEllipsisDropdown}
        handleEllipsisClick={this.handleEllipsisClick}
        isWriter={isWriter}
        likeHandler={this.onLikeHandler}
        likeRef={this.articleLikeRef}
      />
    );
  }
}

const mapDispatchToProps = {
  getArticle: fetchArticle,
  likeArticle: articleLike,
  updateLike: updateArticleLike,
  getLike
};

export const mapStateToProps = state => ({
  fetchedArticle: state.articles.article,
  isWriter: state.articles.isWriter
});

GetArticlePage.propTypes = {
  getArticle: PropTypes.string.isRequired,
  fetchedArticle: PropTypes.string.isRequired,
  match: PropTypes.objectOf(PropTypes.string),
  isWriter: PropTypes.bool.isRequired,
  likeArticle: PropTypes.string.isRequired,
  updateLike: PropTypes.string.isRequired,
  getLike: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(GetArticlePage);

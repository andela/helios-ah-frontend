import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../components/Spinner';
import GetArticle from '../components/GetArticle';
import { fetchArticle } from '../actions/articleAction';

class GetArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEllipsisDropdown: false
    };
  }

  componentDidMount() {
    const {
      match: {
        params: {
          id
        }
      },
      getArticle
    } = this.props;

    getArticle(id);
  }

  handleEllipsisClick = () => {
    this.setState(prevState => ({
      showEllipsisDropdown: !prevState.showEllipsisDropdown
    }));
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
      />
    );
  }
}

const mapDispatchToProps = {
  getArticle: fetchArticle
};

const mapStateToProps = state => ({
  fetchedArticle: state.articles.article,
  isWriter: state.articles.isWriter
});

GetArticlePage.propTypes = {
  getArticle: PropTypes.string.isRequired,
  fetchedArticle: PropTypes.string.isRequired,
  match: PropTypes.objectOf(PropTypes.string),
  isWriter: PropTypes.bool.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(GetArticlePage);

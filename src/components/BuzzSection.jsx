import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getArticles } from '../actions/homeActions';
import MostReadArticleList from './MostReadArticleList';
import MajorArticle from './MajorArticle';
import FavoriteArticleList from './FavoriteArticleList';

class BuzzSection extends Component {
  async componentWillMount() {
    await getArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <div className="container-fluid">
        {
          (articles.length > 0) ? (
            <div className="row buzz-section">
              <MajorArticle
                id={articles[articles.length-1].id}
                title={articles[articles.length-1].title}
                body={articles[articles.length-1].body}
                image={articles[articles.length-1].image}
                name={`${articles[articles.length-1].User.firstName} ${articles[articles.length-1].User.lastName}`}
                readTime={`${articles[articles.length-1].readTime} mins read`}
              />
              <FavoriteArticleList
                articles={[articles[0], articles[1], articles[2]]}
              />
              <MostReadArticleList
                articles={[articles[0], articles[1], articles[2]]}
              />
            </div>
          ) : null
          }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.home
});
const mapDispatchToProps = { getArticles };

BuzzSection.propTypes = {
  articles: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { mapDispatchToProps })(BuzzSection);

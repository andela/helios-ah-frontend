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
                id={articles[5].id}
                title={articles[5].title}
                body={articles[5].body}
                image={articles[5].image}
                name={`${articles[5].User.firstName} ${articles[5].User.lastName}`}
                readTime={`${articles[5].readTime} mins read`}
              />
              <FavoriteArticleList
                articles={[articles[7], articles[8], articles[9], articles[6]]}
              />
              <MostReadArticleList
                articles={[articles[13], articles[14], articles[19]]}
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

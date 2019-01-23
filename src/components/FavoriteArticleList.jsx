import React from 'react';
import PropTypes from 'prop-types';
import Article from './FavoriteArticle';

const FavoriteArticleList = ({ articles }) => {
  const ArticleComponent = articles.map(value => (
    <Article
      key={`andela+${value.id}`}
      id={value.id}
      title={value.title}
      image={value.image}
      name={`${value.User.firstName} ${value.User.lastName}`}
      readTime={value.readTime}
    />
  ));
  return (
    <div className="col-xl-3 col-md-6">
      {ArticleComponent}
    </div>
  );
};

FavoriteArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default FavoriteArticleList;

import React from 'react';
import PropTypes from 'prop-types';
import MostReadArticle from './MostReadArticle';

const MostReadArticleList = ({ articles }) => {
  const MostReadComponent = articles.map(value => (
    <MostReadArticle
      key={`andela+${value.id}`}
      id={value.id}
      title={value.title}
      body={`${value.body.substring(0, 50)}...`}
      readTime={value.readTime}
      name={`${value.User.firstName} ${value.User.lastName}`}
    />
  ));
  return (
    <div className="col-xl-3 col-md most-read-articles">
      <h4 className="text-center">Most Read Articles</h4>
      {MostReadComponent}
    </div>
  );
};

MostReadArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default MostReadArticleList;

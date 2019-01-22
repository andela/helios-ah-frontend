import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBarAuth from '../components/NavBarNoAuth';
import { Card } from '../components';
import { getArticles } from '../actions/homeActions';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

componentWillMount = async () => {
  const { props } = this;
  const articles = await props.getArticles();
  this.setState({ articles: articles.data });
  console.log(articles);
};

bookmark = (event) => {
  event.target.classList.add('bookmark-clicked');
};

like = (event) => {
  event.target.classList.add('like-clicked');
};

rate = (event, value) => {
  let index = 0, item = 0;
  const element = event.target.parentNode.parentNode.children;
  while (index < 5) {
    element[index].firstChild.classList.remove('rated');
    index += 1;
  }
  item = 0;
  while (item < parseInt(value, 10)) {
    element[item].firstChild.classList.add('rated');
    item += 1;
  }
};

render() {
  const { articles } = this.state;
  return (
    <div>
      <NavBarAuth />
      {(articles.length > 0)
        ? (
          <div className="row card-row">
            <Card
              id={articles[0].id}
              bookmark={this.bookmark}
              like={this.like}
              rate={this.rate}
              title={articles[0].title}
              body={articles[0].body}
            />
            <Card
              id={articles[1].id}
              bookmark={this.bookmark}
              like={this.like}
              rate={this.rate}
              title={articles[1].title}
              body={articles[1].body}
            />
            <Card
              id={articles[2].id}
              bookmark={this.bookmark}
              like={this.like}
              rate={this.rate}
              title={articles[2].title}
              body={articles[3].body}
            />
          </div>
        ) : ''}
    </div>
  );
}
}
HomePage.propTypes = {
  getArticles: PropTypes.func.isRequired,
};

export default connect(null,
  { getArticles })(HomePage);

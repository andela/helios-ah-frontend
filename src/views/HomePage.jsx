import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from './Navbar';
import { Card, BuzzSection } from '../components';
import { getArticles } from '../actions/homeActions';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
    this.getArticles = props.getArticlesAction;
  }

  componentWillMount = async () => {
    const { getArticlesAction } = this.props;
    const articles = await getArticlesAction();
    this.setState({ articles: articles.data });
  };

  bookmark = (event) => {
    event.target.classList.add('bookmark-clicked');
  };

  like = (event) => {
    event.target.classList.add('like-clicked');
  };

  // componentWillMount = async () => {
  //   const articles = await this.getArticles();
  //   this.setState({ articles: articles.data });
  // };

  bookmark = (event) => {
    event.target.classList.toggle('bookmark-clicked');
  };

  like = (event) => {
    event.target.classList.toggle('like-clicked');
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
        <NavBar />
        <div className="row mr-4 ml-4">
          <BuzzSection />
        </div>
        <div className="container-fluid">
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
                  image={articles[0].image}
                />
                <Card
                  id={articles[1].id}
                  bookmark={this.bookmark}
                  like={this.like}
                  rate={this.rate}
                  title={articles[1].title}
                  body={articles[1].body}
                  image={articles[1].image}
                />
                <Card
                  id={articles[2].id}
                  bookmark={this.bookmark}
                  like={this.like}
                  rate={this.rate}
                  title={articles[2].title}
                  body={articles[2].body}
                  image={articles[2].image}
                />
              </div>
            )
            : (
              <div id="loading-modal">
                <div className="ring">
                  Loading
                  <span className="spinner" />
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  getArticlesAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getArticlesAction: getArticles
};

export default connect(null, mapDispatchToProps)(HomePage);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from './Navbar';
import { Card, BuzzSection } from '../components';
import { getArticles } from '../actions/homeActions';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import Paginate from '../components/Pagination';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
      activePage: 1,
      pageItems: []
    };
    this.getArticles = props.getArticlesAction;
  }

  componentWillMount = async () => {
    const { getArticlesAction } = this.props;
    const articles = await getArticlesAction();
    this.setState({ articles: articles.data });
    this.handlePageChange(1);
  };

  bookmark = (event) => {
    event.target.classList.add('bookmark-clicked');
  };

  like = (event) => {
    event.target.classList.add('like-clicked');
  };

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
    pageNumber -= 1;
    this.setState(prevState => ({
      pageItems: prevState.articles.slice(pageNumber * 3, (pageNumber + 1) * 3)
    }));
  }

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
    const { pageItems } = this.state;
    const cards = pageItems.map(article => (
      <Card
        id={article.id}
        bookmark={this.bookmark}
        like={this.like}
        rate={this.rate}
        title={article.title}
        body={article.body}
        image={article.image}
      />
    ));
    return (
      <div>
        <NavBar />
        <div className="row mr-4 ml-4">
          <BuzzSection />
        </div>
        <div id="homepageWrapper" className="container-fluid ">
          {(pageItems.length > 0)
            ? (
              <div className="row card-row">
                {cards}
              </div>
            )
            : (
              <Spinner />
            )
          }
        </div>
        <div className="row mt-5">
          <Paginate
            activePage={this.state.activePage}
            handlePageChange={this.handlePageChange}
            itemsPerPage={3}
            totalItems={this.props.totalArticles}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  getArticlesAction: PropTypes.func.isRequired,
  totalArticles: PropTypes.number
};

const mapDispatchToProps = {
  getArticlesAction: getArticles
};

const mapStateToProps = state => ({
  totalArticles: state.home.length
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

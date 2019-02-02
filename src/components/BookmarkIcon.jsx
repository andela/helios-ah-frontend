import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getbookmarks,
  deleteBookmark,
  postbookmarks
} from '../actions/bookmarkActions';

class CheckBookmark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarkClicked: 'initial',
    };
  }

  componentWillMount() {
    this.props.getbookmarks();
  }

  handleBookmarkClass = () => {
    const { id, bookmarks } = this.props;
    if (bookmarks.length) {
      if (bookmarks.findIndex(item => item === id) >= 0) {
        return 'bookmark-clicked';
      }
      return '';
    }
  }

  setBookmarkClass = () => ((this.state.bookmarkClicked === 'initial')
    ? this.handleBookmarkClass()
    : this.state.bookmarkClicked
  );

  handleClick = (event) => {
    const articleId = event.target.id;
    if (this.state.bookmarkClicked === 'bookmark-clicked') {
      this.props.deleteBookmark(articleId);
      this.setState({
        bookmarkClicked: '',
      });
    } else {
      this.props.postbookmarks(articleId);
      this.setState({
        bookmarkClicked: 'bookmark-clicked',
      });
    }
  };

  render() {
    return (
      <span
        className="card-icons"
        role="presentation"
      >
        <i
          className={`fas fa-bookmark ${this.setBookmarkClass()}`}
          onClick={event => this.handleClick(event)}
          id={this.props.id}
        />
      </span>
    );
  }
}

CheckBookmark.propTypes = {
  getbookmarks: PropTypes.func.isRequired,
  deleteBookmark: PropTypes.func.isRequired,
  postbookmarks: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  bookmarks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string, PropTypes.object
  ]))),
};

CheckBookmark.defaultProps = {
  bookmarks: [],
};

const mapStateToProps = state => ({
  bookmarks: state.bookmarks.itemsArticleId,
});

export default connect(mapStateToProps,
  { getbookmarks, deleteBookmark, postbookmarks })(CheckBookmark);

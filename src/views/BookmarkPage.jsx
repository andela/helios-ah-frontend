import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getbookmarks, deleteBookmark } from '../actions/bookmarkActions';
import Navbar from './Navbar';
import Bookmark from '../components/Bookmark';

class Bookmarks extends Component {
  componentWillMount() {
    const { getbookmarks } = this.props;
    getbookmarks();
  }

  onDeleteBookmark = (id) => {
    const { deleteBookmark } = this.props;
    deleteBookmark(id);
  }

  render() {
    const { bookmarks } = this.props;
    if (bookmarks.length) {
      return (
        <div>
          <Navbar />
          <div className="container">
            <div className="row">
              <h3>Bookmarks</h3>
            </div>
            {bookmarks.map(bookmark => (
              <Bookmark
                key={bookmark.id}
                bookmark={bookmark}
                onDeleteBookmark={this.onDeleteBookmark}
              />
            ))}
          </div>
        </div>
      );
    }
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <h3>
              Bookmarks
              <span className="major-color"> (empty)</span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

Bookmarks.propTypes = {
  getbookmarks: PropTypes.func.isRequired,
  deleteBookmark: PropTypes.func.isRequired,
  bookmarks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

Bookmarks.defaultProps = {
  bookmarks: [],
};

const mapStateToProps = state => ({
  bookmarks: state.bookmarks.items,
});

export default connect(mapStateToProps,
  { getbookmarks, deleteBookmark })(Bookmarks);

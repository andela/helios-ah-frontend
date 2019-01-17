import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getbookmarks } from '../actions/actions';



const imgStyle = {
  backgroundImage: 'url(src/images/pix01.png)',
};
class Bookmarks extends Component {
  componentWillMount() {
    this.props.getbookmarks();
  }

  render() {
    const bookmarkItems = this.props.bookmarks.map(bookmark => (
      <div className="bookmarkCard row my-3" key={bookmark.id}>
        <div className="details col-9">
          <div className="cardTitle text-hover cursor-pointer font-weight-bold text-capitalize my-2 text-truncate">{bookmark.title}</div>
          <div className="cardText text-justify">{bookmark.body}</div>
          <div className="cardFoot row my-2 text-muted">
            <div className="col-10 font-10">
              <span>Jide Ajayi</span>
              <span className="mx-2">|</span>
              <span>14/01/2019</span>
              <span className="mx-2">|</span>
              <span>5min read</span>
            </div>
            <div className="col-2 cursor-pointer text-hover">
              <span className="d-none d-md-block">Remove</span>
              <span className="d-md-none">Del</span>
            </div>
          </div>
        </div>
        <div className="image col-3" style={imgStyle}></div>
      </div>
    ));

    return (
      <div>
        {bookmarkItems}
      </div>
    );
  }
}

Bookmarks.propTypes = {
  getbookmarks: PropTypes.func.isRequired,
  bookmarks: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  bookmarks: state.bookmarks.items,
});

export default connect(mapStateToProps, { getbookmarks  })(Bookmarks);

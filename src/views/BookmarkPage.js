import React, { Component } from 'react';
import Links from '../components/Links';
import Bookmark from '../components/Bookmark.jsx';
class BookmarkPage extends Component {
  render() {
    return (
      <div>
        <Links />
        <div className="container">
          <Bookmark />
        </div>
      </div>
    );
  }
}

export default BookmarkPage;

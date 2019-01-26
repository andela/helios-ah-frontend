import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.search = React.createRef();
  }

  onSearchClick = () => {
    this.search.current.style.display = 'inline';
    this.search.current.focus();
  }

  onSearchBlur = () => {
    this.search.current.style.display = 'none';
  }

  render() {
    return (
      <form className="form-inline ml-auto">
        <input
          className="search-input"
          type="text"
          id="search"
          ref={this.search}
          name="search"
          onBlur={this.onSearchBlur}
          placeholder="Search.."
        />
        <i
          className="fa fa-search mb-2"
          onClick={this.onSearchClick}
          onKeyDown={this.onSearchClick}
          role="presentation"
        />
      </form>
    );
  }
}


export default Search;

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Author\'s Haven'
    };
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
      <div className="row fixed-top" id="header">
        <div className="col-lg-1" id="hamburger">
          <span className="major-color"><i className="fa fa-bars" /></span>
        </div>
        <div className="col-lg-3" id="head-title">
          <span id="header-title">{this.state.title}</span>
        </div>
        <div className="col-lg-3" id="search-col">
          <input
            type="text"
            id="search"
            ref={this.search}
            name="search"
            onBlur={this.onSearchBlur}
            placeholder="Search.."
          />
          <span className="major-color">
            <i
              className="fa fa-search"
              onClick={this.onSearchClick}
            />
          </span>
        </div>
        <div className="col-lg-3" id="header-button">
          <input
            id="publish"
            type="button"
            name="publish"
            onClick={this.props.onPublish}
            value="Publish"
          />
          <input
            id="draft"
            type="button"
            name="draft"
            onClick={this.props.onDraft}
            value="Draft"
          />
        </div>
        <div className="col-lg-1" id="notify-col">
          <i className="fa fa-bell-o major-color" />
        </div>
        <div className="col-lg-1" id="image-col">
          <img
            id="img"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          />
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  onPublish: PropTypes.func,
  onDraft: PropTypes.func

};

export default Header;

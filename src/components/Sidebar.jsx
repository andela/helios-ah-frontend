import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideSideBar } from '../actions/sideBarAction';
import Articles from './UserArticles';
import { createArticle, getUserArticles } from '../actions/articleAction';

export class SideBar extends Component {
  componentDidMount() {
    this.props.getUserArticles();
  }

  render() {
    const myArticles = this.props.myArticles ? (
      this.props.myArticles
        .slice(0, 3)
        .map(item => (
          <Articles id={item.id} title={item.title} body={item.body} />
        ))
    ) : (
      <p>You have no articles yet</p>
    );
    return (
      <div id="sidebar-content">
        <div
          className={
            this.props.status ? 'sidenav sidenav-show' : 'sidenav sidenav-hide'
          }
        >
          <div
            style={{ position: 'absolute', top: '0', paddingTop: '5px' }}
            onClick={this.props.hideSideBar}
            id="close-sidenav"
          >
            <i className="fas fa-times" />
          </div>
          <div className="sidebar-div" id="new-article">
            <i className="sidebar fas fa-plus-square" />
            <Link to="/create-article">Create New Article</Link>
          </div>
          <div className="sidebar-div" id="publish-article">
            <i className="sidebar far fa-newspaper" />
            <Link to="/">Published</Link>
          </div>
          <div className="sidebar-div" id="draft-article">
            <i className="sidebar far fa-edit" />
            <Link to="/">Drafts</Link>
          </div>
          <h4 id="sidebar-header">Most Recent</h4>
          {myArticles}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  status: state.sideBar.isOpen,
  myArticles: state.articles.myArticles
});
export default connect(
  mapStateToProps,
  { hideSideBar, createArticle, getUserArticles }
)(SideBar);

import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from "../components/Header";
import CreateArticle from "../components/CreateArticle";
// import { getUserArticles } from "../actions/articleAction";

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      publish: false,
      draft: false
    };
  }

  onPublish = () => {
    this.setState({
      publish: true
    });
  };

  onDraft = () => {
    this.setState({
      draft: true
    });
  };

  onSave = () => {
    this.setState({
      publish: false,
      draft: false
    });
  };
  render() {
    return (
      <div id="contain">
        <div className={this.props.isOpen ? "shift-body-right" : "shift-body-left"}>
          <Header onPublish={this.onPublish} onDraft={this.onDraft} myArticles={this.props.myArticles} />
          <CreateArticle
            publish={this.state.publish}
            onSave={this.onSave}
            draft={this.state.draft}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.sideBar.isOpen,
});
Article.propTypes = {
  isOpen: PropTypes.bool.isRequired
};
export default connect(mapStateToProps, null)(Article);

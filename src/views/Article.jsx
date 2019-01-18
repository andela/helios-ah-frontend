import React, { Component } from 'react';
import Header from '../components/Header';
import CreateArticle from '../components/CreateArticle';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      publish: false,
      draft: false,
    };
  }

  onPublish = () => {
    this.setState({
      publish: true
    });
  }

  onDraft = () => {
    this.setState({
      draft: true
    });
  }

  onSave = () => {
    this.setState({
      publish: false,
      draft: false,
    });
  }

  render() {
    return (
      <div id="contain">
        <Header onPublish={this.onPublish} onDraft={this.onDraft} />
        <CreateArticle
          publish={this.state.publish}
          onSave={this.onSave}
          draft={this.state.draft}
        />
      </div>
    );
  }
}

export default Article;

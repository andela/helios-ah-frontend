import React, { Component } from 'react';
import Header from '../components/Header';
import CreateArticle from '../components/CreateArticle';
import AddTags from '../components/AddTags';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      publish: false,
      draft: false,
      tags: []
    };
  }

  handleDelete = (item) => {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== item),
    });
  }

  handleAddition = (tag) => {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag = (tag, currPos, newPos) => {
    const tags = [...this.state.tags];
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    this.setState({ tags: newTags });
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
    const {
      handleDelete, handleAddition, handleDrag, onPublish
    } = this;
    const { tags } = this.state;

    return (
      <div id="contain">
        <Header onPublish={this.onPublish} onDraft={this.onDraft} />
        <CreateArticle
          tags={tags}
          publish={this.state.publish}
          onSave={this.onSave}
          draft={this.state.draft}
        />
        <AddTags
          tags={tags}
          onPublish={onPublish}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
        />
      </div>
    );
  }
}

export default Article;

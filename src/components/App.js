import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <h3 className="test2">Authors Haven</h3>
      </div>
    );
  }
}

export default App;

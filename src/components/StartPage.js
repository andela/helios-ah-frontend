import React, { Component } from 'react';
import { connect } from 'react-redux';

import { exampleAction } from '../actions/actions'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <h1>Hello World, this is Redux, baby!</h1>
    )
  }
}
  const mapStateToProps = (state) => {
    return {
      examplePropOne: state.examplePropOne,
      examplePropTwo: state.examplePropTwo
    }
  }


export default connect(mapStateToProps, {exampleAction})(App)

import React, { Component } from 'react';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    return (
      <div>
        app
      </div>
    )
  }
}
export default connect(function mapStateToProps (state) {
  return state;
}, function mapDispatchToProps(dispatch) {
  return dispatch;
})(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './Root.css';
import { actions as rootActions } from '../store/root';
import SideBar from './components/SideBar';

class Root extends Component {
  componentDidMount() {
    this.props.loadInit();
  }

  render() {
    return (
      <div>
        <SideBar></SideBar>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

function select(store) {
  return {
    loading: store.root.loading,
    error: store.root.error,
  };
}

function actions(dispatch) {
  return {
    loadInit: () => dispatch(rootActions.loadInit()),
  };
}

export default connect(select, actions)(Root);

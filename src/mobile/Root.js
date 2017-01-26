import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { actions as rootActions } from '../store/root';

class Root extends Component {
  componentDidMount() {
    this.props.loadInit();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit src/mobile/App.js
        </Text>
        <Text style={styles.instructions}>
          iOS: Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text style={styles.instructions}>
          Android: Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

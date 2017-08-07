/* @flow */

import React, { Component } from 'react';
import {
    AppRegistry,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MovieSelection extends Component {
  render() {
    return (
      <View>
        <Text>MovieSelection</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
AppRegistry.registerComponent('MovieSelection', () => MovieSelection);

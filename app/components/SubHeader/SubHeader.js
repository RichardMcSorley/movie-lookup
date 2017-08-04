/* @flow */

import React, { Component } from 'react';
import {
    AppRegistry,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class SubHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SubHeader</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
AppRegistry.registerComponent('SubHeader', () => SubHeader);

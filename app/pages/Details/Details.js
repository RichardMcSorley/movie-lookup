/* @flow */

import React, { Component } from 'react';
import {
    AppRegistry,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Details extends Component {
  render() {
    return (
        <Header />
    );
  }
}

const styles = StyleSheet.create({

});
AppRegistry.registerComponent('Results', () => Results);

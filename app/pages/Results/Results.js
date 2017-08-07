/* @flow */

import React, { Component } from 'react';
import {
    AppRegistry,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Header from '../../components/Header/Header';

export default class Results extends Component {
  render() {
    return (
        <Header />
    );
  }
}

const styles = StyleSheet.create({

});
AppRegistry.registerComponent('Results', () => Results);

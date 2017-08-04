import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MovieSelection from './app/components/MovieSelection/MovieSelection'
import Header from './app/components/Header/Header'
import SubHeader from './app/components/SubHeader/SubHeader'

export default class movieapp extends Component {
  render() {
    return (
      <View>
      <Header />
      <SubHeader />
      <MovieSelection />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('movieapp', () => movieapp);

/* @flow */

import React, { Component } from 'react';
import {
    AppRegistry,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Header from '../../components/Header/Header'

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: 'red'
        },
        headerTitleStyle: {
            color: '#fff'
        }
    };
 getMoviesSearch() {
   return fetch('http://www.omdbapi.com/?s=Batman&page=1&apikey=d3f1fd17')
     .then((response) => response.json())
     .then((responseJson) => {
       return responseJson.Search;
     })
     .catch((error) => {
       console.error(error);
     });
 }
  render() {
      const {navigate} = this.props.navigation;
    return (
        <Header />
    );
  }
}

const styles = StyleSheet.create({

});
AppRegistry.registerComponent('Home', () => Home);

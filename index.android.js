import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
} from 'react-native';

import Home from './app/pages/Home/Home'
import Details from './app/pages/Details/Details'

const movieapp = StackNavigator({
  Home: {
    screen: Home,
},
Details: {
  screen: Details,
},
});

AppRegistry.registerComponent('movieapp', () => movieapp);

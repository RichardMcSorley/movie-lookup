/* @flow */

import React, { Component } from 'react';
import {
    AppRegistry,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Header from '../../components/Header/Header'
import { Provider } from 'react-redux'
import configureStore from '../../../configureStore'
import App from './container'

const store = configureStore()

export default class Home extends Component {
    static navigationOptions = {
        title: 'Search',
        headerStyle: {
            backgroundColor: 'red'
        },
        headerTitleStyle: {
            color: '#fff'
        }
    };
    constructor(props){
        super(props);
        console.log(props)
    }

    render() {
        //constant for navigation
        const {
            navigate
        } = this.props.navigation;
        return (
            <Provider store={store}>
              <App nav={this.props.navigation}/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('Home', () => Home);

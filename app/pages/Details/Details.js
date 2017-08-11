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

export default class Details extends Component {

    static navigationOptions = {
        title: 'Details',
        headerStyle: {
            backgroundColor: 'red'
        },
        headerTitleStyle: {
            color: '#fff'
        }
    };
    componentDidMount(){
        let params = this.props.navigation.state.params;
        console.log('Details Component did mount', params)
    }
    render() {
        //constant for navigation
        const {
            navigate
        } = this.props.navigation;
        const params = this.props.navigation.state.params;
        return (
            <Provider store={store}>
              <App aMovie={params.movie}/>
            </Provider>
        );
    }
}



AppRegistry.registerComponent('Details', () => Details);

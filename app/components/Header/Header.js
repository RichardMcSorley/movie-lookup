/* @flow */

import React, { Component } from 'react';
import {
    AppRegistry,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import Placeholder from '../../test'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = { text: ''}
    }
    submit(){
        console.log('SUBMIT SEARCH', this.state.text)
    }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.searchInput}
            onChangeText={(text)=> this.setState({text})}
            onSubmitEditing={()=> this.submit()}
            placeholder={Placeholder}
            autoFucus='true'
            keyboardType='web-search'
            returnKeyType='search'
            underlineColorAndroid='transparent'
            value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    padding: 20,
    backgroundColor: 'red'
  },
  searchInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      backgroundColor: 'white',
      textAlign: 'left',
      paddingLeft: 20
  }
});
AppRegistry.registerComponent('Header', () => Header);

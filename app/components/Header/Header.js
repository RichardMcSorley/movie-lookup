/* @flow */

import React, { Component } from 'react';
import {
    AppRegistry,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

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
            placeholder='Search for a Movie...'
            autoFucus='true'
            keyboardType='web-search'
            returnKeyType='Search'
            underlineColorAndroid='transparent'
            value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 20,
    padding: 20
  },
  searchInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1
  }
});
AppRegistry.registerComponent('Header', () => Header);

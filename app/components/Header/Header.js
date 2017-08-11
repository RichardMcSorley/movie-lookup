/* @flow */

import React, { Component } from 'react';
import {
    AppRegistry,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { fetchMoviesFromAPI } from './../../../actions'

class Header extends Component {
    constructor(props){
        super(props);
        this.state = { text: ''}
    }
    submit(){
        //fetchMoviesFromAPI('test');
        //dispatch(fetchMoviesFromAPI('Batman')
        this.props.getMovies(this.state.text)
        console.log('SUBMIT SEARCH', this.state.text)
    }
  render() {
      const { movies, isFetching } = this.props.movies;
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.searchInput}
            onChangeText={(text)=> this.setState({text})}
            onSubmitEditing={()=> this.submit()}
            placeholder='Search for Movies...'
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

function mapStateToProps (state) {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getMovies: (name) => dispatch(fetchMoviesFromAPI(name))
  }
}
Header = connect(  mapStateToProps,
  mapDispatchToProps)(Header)
export default Header
AppRegistry.registerComponent('Header', () => Header);

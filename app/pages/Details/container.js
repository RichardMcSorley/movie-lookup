import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, Image, ScrollView, List, Component } from 'react-native'

import { connect } from 'react-redux'
import { fetchMoviesFromAPI, fetchMovieFromAPI } from '../../../actions'

let styles

class App extends React.Component {

  componentDidMount() {
      this.props.getMovie(this.props.aMovie.imdbID)
      console.log('Props', this.props)
  }
  render() {
      const {
          movie
      } = this.props.movie;
    return (
        <ScrollView>

        <Text style={{
          fontSize: 23,
          padding: 10,
          fontWeight: '700'
        }} >{movie.Title}</Text>
        <Text style={{
          paddingLeft: 15
        }}>IMDB Rating: {movie.imdbRating}</Text>
        <Image
              source={{uri: movie.Poster}}
              style={{
                height: 200,
                width: 120,
                padding: 5,
                margin: 10,
              }}
          />
          <Text style={{
            fontSize: 20,
            paddingLeft: 15,
            fontWeight: '700'
          }}>Plot: </Text>
          <Text style={{
            fontSize: 20,
            padding: 15
          }}>{movie.Plot}</Text>

        </ScrollView>
    )
  }
}

styles = StyleSheet.create({
    loading: {
        width: '100%',
        textAlign: 'center'
    },
    container: {
  flex: 3,
  flexDirection: 'row',
  backgroundColor: '#F5FCFF',
  flexWrap: 'wrap',
  justifyContent: 'center'

},
thumbnail:{
    height: 300,
    padding: 5
}
})

function mapStateToProps (state) {
  return {
    movie: state.movie,
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getMovie: (id) => dispatch(fetchMovieFromAPI(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

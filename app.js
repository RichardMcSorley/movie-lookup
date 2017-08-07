import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, Image, ScrollView } from 'react-native'

import { connect } from 'react-redux'
import { fetchMoviesFromAPI } from './actions'

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText
  } = styles
  const { movies, isFetching } = props.movies;
  return (
    <ScrollView>
      <Text style={text}>Redux Example</Text>
      <TouchableHighlight style={button} onPress={() => props.getMovies()}>
        <Text style={buttonText}>Load People</Text>
      </TouchableHighlight>
      {
        isFetching && <Text>Loading</Text>
      }
      {
        movies.length ? (
          movies.map((movie, i) => {
            return <View key={i} >
              <Text>Title: {movie.Title}</Text>
              <Text>Year: {movie.Year}</Text>
              <Image
              style={{height: 444, width: 300}}
                    source={{uri: movie.Poster}}
                />
            </View>
          })
        ) : null
      }
    </ScrollView>
  )
}

styles = StyleSheet.create({
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})

function mapStateToProps (state) {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getMovies: () => dispatch(fetchMoviesFromAPI('Batman'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

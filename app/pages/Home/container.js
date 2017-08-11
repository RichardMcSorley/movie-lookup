import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, Image, ScrollView, List } from 'react-native'

import { connect } from 'react-redux'
import { fetchMoviesFromAPI, fetchMovieFromAPI } from '../../../actions'
import  Header  from '../../../app/components/Header/Header'

let styles
function openDetails(movie, props){
    let passProps = {
        movie: movie,
        getMovie: (id) => props.getMovie(id)
    }
    props.nav.navigate('Details', passProps)
}

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText,
    thumbnail,
    movieStyle
  } = styles
  const { movies, isFetching } = props.movies;
  const { genre } = props.genre;

  return (

    <ScrollView >
<Header />

        <View style={styles.container}>
      {
        isFetching && <Text style={styles.loading}>Loading...</Text>
      }
      {
        movies.length ? (
          movies.map((movie, i) => {
            return <View key={i} style={styles.movieWrapper} >
            <TouchableHighlight style={styles.touchable} onPress={()=>openDetails(movie, props)}>
                <View style={movieStyle}>
              <Image
                    source={{uri: movie.Poster}}
                    style={thumbnail}
                />
                <View style={styles.overlay}></View>
              <Text  numberOfLines={2} style={styles.header}>{movie.Title}</Text>
              <Text style={styles.subHeader}>{movie.Year}</Text>
              </View>
              </TouchableHighlight>

            </View>

          })
      ) : (
        genre.map((ag, i) => {
          return <View key={i}  style={styles.movieWrapper}>
          <TouchableHighlight style={styles.touchable} onPress={()=>props.getMovies(ag.name)}>
              <View style={movieStyle}>
              <Image
                    source={{uri: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'}}
                    style={thumbnail}
                />
            <View style={styles.overlay}></View>
            <Text  numberOfLines={2} style={styles.header}>{ag.name}</Text>
            </View>
            </TouchableHighlight>

          </View>

        })
    )
}
    </View>
    </ScrollView>
  )
}

styles = StyleSheet.create({
    loading: {
        width: '100%',
        textAlign: 'center'
    },
    overlay:{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        zIndex: 200
    },
    touchable:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        zIndex: 9999
    },
    container: {
  flex: 3,
  flexDirection: 'row',
  backgroundColor: '#F5FCFF',
  flexWrap: 'wrap',
  justifyContent: 'center'

},
movieWrapper:{
    height: 180,
    width: 100,
    margin: 5
},
movieStyle: {
    position: 'relative',
    overflow: 'hidden',
},
thumbnail: {
  width: '100%',
  height: '100%',
},
  header: {
    position: 'absolute',
    color: 'white',
    zIndex: 999,
    top: '36%',
    fontWeight: '700',
    width: '100%',
    textAlign: 'center',
    padding: 3
  },
  subHeader: {
    position: 'absolute',
    color: 'white',
    zIndex: 999,
    bottom: '30%',
    width: '100%',
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
    movies: state.movies,
    genre: state.genre
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getMovies: (name) => dispatch(fetchMoviesFromAPI(name)),
    getMovie: (id) => dispatch(fetchMovieFromAPI(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

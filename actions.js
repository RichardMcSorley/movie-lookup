import { FETCHING_MOVIES,
     FETCHING_MOVIES_SUCCESS,
      FETCHING_MOVIES_FAILURE,
      FETCHING_MOVIE_FAILURE,
      FETCHING_MOVIE_SUCCESS,
      FETCHING_MOVIE,
       OMDB_KEY, OMDB_BASE } from './constants'

export function fetchMoviesFromAPI(name){
    return (dispatch) => {
        dispatch(getMovies())
        fetch(OMDB_BASE + '?apikey='+ OMDB_KEY + '&s=' + name + '&page=1')
            .then(res => res.json())
            .then(json => dispatch(getMoviesSuccess(json.Search)))
            .catch(err => dispatch(getMoviesFailure()))
    }
}

function getMovies(){
    return{
        type: FETCHING_MOVIES
    }
}

function getMoviesSuccess(data){
    return{
        type: FETCHING_MOVIES_SUCCESS,
        data
    }
}
function getMoviesFailure(){
    return{
        type: FETCHING_MOVIES_FAILURE
    }
}
export function fetchMovieFromAPI(id){
    return (dispatch) => {
        dispatch(getMovie())
        fetch(OMDB_BASE + '?apikey='+ OMDB_KEY + '&i=' + id + '&plot=full')
            .then(res => res.json())
            .then(json => dispatch(getMovieSuccess(json)))
            .catch(err => dispatch(getMovieFailure()))
    }
}

function getMovie(){
    return{
        type: FETCHING_MOVIE
    }
}

function getMovieSuccess(data){
    return{
        type: FETCHING_MOVIE_SUCCESS,
        data
    }
}
function getMovieFailure(){
    return{
        type: FETCHING_MOVIE_FAILURE
    }
}

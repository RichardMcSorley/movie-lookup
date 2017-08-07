import { FETCHING_MOVIES, FETCHING_MOVIES_SUCCESS, FETCHING_MOVIES_FAILURE, OMDB_KEY, OMDB_BASE } from './constants'

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

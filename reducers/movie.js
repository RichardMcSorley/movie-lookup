import {
    FETCHING_MOVIE,
    FETCHING_MOVIE_SUCCESS,
    FETCHING_MOVIE_FAILURE
} from '../constants'

const initialState = {
    movie: {
        Title: 'Test Title'
    },
    isFetching: false,
    error: false
}

export default function movieReducer(state = initialState, action) {
    console.log(action.type)
    switch (action.type) {
        case FETCHING_MOVIE:
            return {
                ...state,
                isFetching: true,
                movie: {
                    Title: 'I am fetching'
                }
            }
        case FETCHING_MOVIE_SUCCESS:
        console.log('Movie Data', action.data)
            return {
                ...state,
                isFetching: false,
                movie: action.data
            }
        case FETCHING_MOVIE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}

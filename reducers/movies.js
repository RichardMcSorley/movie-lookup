import {
    FETCHING_MOVIES,
    FETCHING_MOVIES_SUCCESS,
    FETCHING_MOVIES_FAILURE
} from '../constants'

const initialState = {
    movies: [],
    isFetching: false,
    error: false
}

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_MOVIES:
            return {
                ...state,
                isFetching: true,
                movies: []
            }
        case FETCHING_MOVIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                movies: action.data
            }
        case FETCHING_MOVIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}

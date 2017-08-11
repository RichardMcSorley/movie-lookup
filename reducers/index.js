import { combineReducers} from 'redux'
import movies from './movies'
import movie from './movie'
import genre from './genre'

const rootReducer = combineReducers({
    movies,
    movie,
    genre
})

export default rootReducer

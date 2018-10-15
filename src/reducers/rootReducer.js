import {combineReducers} from 'redux';
import movies from './movies';
import newMovie from './addMovie';
import token from './token';
export default combineReducers({
    movies,
    newMovie,
    token
})
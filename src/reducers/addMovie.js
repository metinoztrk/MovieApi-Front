
import {NEW_MOVIE,NEW_MOVIE_ERROR,FETCH_MOVIE,FETCH_MOVIE_ERROR,UPDATE_MOVIE,UPDATE_MOVIE_ERROR} from '../actions/newMovie';

const initialState={
    movies:[],
    done:false,
    error:""
}
export default (state=initialState,action)=>{
    switch (action.type){
        case NEW_MOVIE:
            return {
                ...state,
                movies:action.payload,
                done:true
            }
        case NEW_MOVIE_ERROR:
            return {
                ...state
            }
        case FETCH_MOVIE:
            return {
                ...state,
                movies:action.payload,
                done:true
            }
        case FETCH_MOVIE_ERROR:
            return {
                ...state
            }
        case UPDATE_MOVIE:
            return {
                ...state,
                done:true
            }
        case UPDATE_MOVIE_ERROR:
            return {
                ...state
            }    
        default:
            return {
                ...state
            }
    }
        
}
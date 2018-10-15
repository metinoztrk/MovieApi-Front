import {FETCHED_MOVIES,FETCH_MOVIES_ERROR,DELETE_MOVIE,DELETE_MOVIE_ERROR} from '../actions/movies';

const initialState={
    movies:[],
    error:""
}

export default (state=initialState,action)=>{
    switch (action.type){
        case FETCHED_MOVIES:
            return {
                ...state,
                movies:action.payload
            }
        case FETCH_MOVIES_ERROR:
            return{
                ...state,
                error:action.payload
            }
        case DELETE_MOVIE:
            console.log(action.payload);
            return {
                ...state,
                movies:state.movies.filter(item=>item._id !== action.payload)
            }
        case DELETE_MOVIE_ERROR:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}
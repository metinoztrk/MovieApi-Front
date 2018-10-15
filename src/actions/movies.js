import axios from 'axios';
import setAuthorizationToken  from '../setAuthorizationToken';
export const FETCHED_MOVIES="FETCHED_MOVIES";
export const FETCH_MOVIES_ERROR="FETCHED_MOVIES_ERROR";

export const DELETE_MOVIE="DELETE_MOVIE";
export const DELETE_MOVIE_ERROR="DELETE_MOVIE_ERROR";

export const TOKEN="TOKEN";
export const TOKEN_ERROR="TOKEN_ERROR";

export const DELETE_TOKEN="DELETE_TOKEN";
export const DELETE_TOKEN_ERROR="DELETE_TOKEN_ERROR";

export const SET_CURRENT_USER="SET_CURRENT_USER";

export function fetchMovies(){
    return dispatch=>{
                axios.get('http://localhost:8000/api/movies')
                .then(movies=> dispatch({
                    type:FETCHED_MOVIES,
                    payload:movies.data
                }))
                .catch(err=>dispatch({
                    type:FETCH_MOVIES_ERROR,
                    payload:err
                }))  
    }
}

export function deleteMovie(id){
    return dispatch=>{
            axios.delete(`http://localhost:8000/api/movies/${id}`)
                dispatch({ 
                    type:DELETE_MOVIE,
                    payload:id
                })
    }
}

export function token({username,password}) {
    console.log(username,password);
    return dispatch=>{  
        let tokenCopy
        axios.post('http://localhost:8000/authenticate',{username,password})
            .then(token=>token.data.token)
            .then(token=>{
                tokenCopy=token;
                localStorage.setItem('token',tokenCopy);
                setAuthorizationToken(token);
                dispatch({
                    type:TOKEN,
                    payload:tokenCopy,
                })
            })
    }
}

export function setCurrentUser(token) {
    return{
        type:SET_CURRENT_USER,
        payload:token
    };
}

export function deleteToken(){
    return dispatch=>{
        setAuthorizationToken()
        dispatch({
            type:DELETE_TOKEN,
            payload:"",
        })
    }
}
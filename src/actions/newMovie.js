
import axios from 'axios';

export const NEW_MOVIE="NEW_MOVIE";
export const NEW_MOVIE_ERROR="NEW_MOVIE_ERROR";

export const FETCH_MOVIE="FETCH_MOVIE";
export const FETCH_MOVIE_ERROR="FETCH_MOVIE_ERROR";

export const UPDATE_MOVIE="UPDATE_MOVIE";
export const UPDATE_MOVIE_ERROR="UPDATE_MOVIE_ERROR";


export function addNewMovie({title,category,country,year,director_id,imdb_score}) {
    console.log(title+" "+category+" "+country+" "+year+" "+director_id+" "+imdb_score)
    return dispatch=>{
                axios.post('http://localhost:8000/api/movies',{title,category,country,year,director_id,imdb_score})
                .then(movies=> dispatch({
                    type:FETCH_MOVIE,
                    payload:movies.data
                }))
                .catch(err=>dispatch({
                    type:FETCH_MOVIE_ERROR,
                    payload:err
                }))   
    }
  }

  export function fetchMovie(id) {
    return dispatch=>{
                axios.get(`http://localhost:8000/api/movies/${id}`)
                .then(movies=> dispatch({
                    type:NEW_MOVIE,
                    payload:movies.data
                }))
                .catch(err=>dispatch({
                    type:NEW_MOVIE_ERROR,
                    payload:err
                }))  
    }
  }

  export function updateMovie({id,title,category,country,year,director_id,imdb_score}) {
    return dispatch=>{
                console.log(id)
                axios.put(`http://localhost:8000/api/movies/${id}`,{title,category,country,year,director_id,imdb_score})
                .then(movies=> dispatch({
                    type:UPDATE_MOVIE,
                    payload:movies.data
                }))
                .catch(err=>dispatch({
                    type:UPDATE_MOVIE_ERROR,
                    payload:err
                }))   
    }
  }
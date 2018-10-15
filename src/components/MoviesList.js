import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react'

const MoviesList=({movies,deleteMovie})=>{
    const emptyMessage=(
        <p>There are no movies yet</p>
    );

    const moviesList=(
        <div>
            {
                movies.error.response ? <h3>Error</h3> :
                <Grid stackable columns={3} >
                {
                    movies.movies.map(movie=>
                    <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie}></MovieCard>
                    )
                }
                </Grid>
            }
        </div>
    );

    return(
        <div>
           {movies.length === 0 ? emptyMessage : moviesList}
        </div>
    )
}

MoviesList.propTypes={
    movies:PropTypes.object.isRequired
};

export default MoviesList;
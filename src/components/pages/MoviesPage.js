import React ,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MoviesList from '../MoviesList';
import {fetchMovies,deleteMovie} from '../../actions/movies';

class MoviesPage extends Component{

    static propTypes={
        movies:PropTypes.object.isRequired
    }

    componentDidMount(){
       this.props.fetchMovies();
    }

    render(){
        return(
            <div>
                <h1>Movies</h1>
                <MoviesList 
                deleteMovie={this.props.deleteMovie}
                movies={this.props.movies}/>
            </div>
        );
    }
}

const mapStateToProps = state=>{
    return{
        movies:state.movies
    }
}

const mapDispatchToProps={
    fetchMovies,
    deleteMovie
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage) ;
import React,{Component} from 'react';
import NewMovieForm from '../NewMovieForm';
import {connect} from 'react-redux';
import {addNewMovie,fetchMovie,updateMovie} from '../../actions/newMovie';
class AddMoviePage extends Component{
    
    componentDidMount(){
        const {match}=this.props;
        console.log(match.params)
        if(!this.props.movies && match.params.id)
            this.props.fetchMovie(match.params.id)
    }

    render(){
        return(
            <div>
                <h2>New Movie</h2>
                <NewMovieForm 
                movie={this.props.movie}
                addNewMovie={this.props.addNewMovie} 
                updateMovie={this.props.updateMovie}
                newState={this.props}/>
            </div>
        )
    }
}

const mapStateToProps=({newMovie,movies},props)=>{
    return{
       newMovie,
       movie:movies.movies.find(item=>item._id=== props.match.params.id)
    }
}

const mapDispatchToProps={
    addNewMovie,
    fetchMovie,
    updateMovie
}

export default connect(mapStateToProps,mapDispatchToProps)(AddMoviePage);
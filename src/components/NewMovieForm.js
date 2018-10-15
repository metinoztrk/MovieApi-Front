import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types';
class NewMovieForm extends Component{

    state={
        id:this.props.movie ? this.props.movie._id :'',
        title:this.props.movie ? this.props.movie.title :'',
        category:this.props.movie ? this.props.movie.category :'',
        country:this.props.movie ? this.props.movie.country :'',
        year:this.props.movie ? this.props.movie.year :'',
        director_id:this.props.movie ? this.props.movie.director_id :'',
        imdb_score:this.props.movie ? this.props.movie.imdb_score :'',
        redirect:false
    }

    static proptypes={
        addNewMovie:PropTypes.func.isRequired
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newState.newMovie.movies.title && nextProps.newState.newMovie.movies.title!== this.state.title)
        this.setState({
            title:nextProps.newState.newMovie.movies.title,
            category:nextProps.newState.newMovie.movies.category,
            country:nextProps.newState.newMovie.movies.country,
            year:nextProps.newState.newMovie.movies.year,
            director_id:nextProps.newState.newMovie.movies.director_id,
            imdb_score:nextProps.newState.newMovie.movies.imdb_score
        })
    }
    
    handleChange=(e)=>{
        this.setState({
           [e.target.name]:e.target.value
        })
    }

    onSubmit=()=>{
        const errors=this.validate();
        this.setState({
            errors,
            redirect:true
        });
        const id=this.state.id || this.props.newState.newMovie.movies.id;
        if(Object.keys(errors).length===0){ 
            if(!id){
                this.props.addNewMovie(this.state);
            }else{
                console.log(this.state);
                this.props.updateMovie({...this.state,id});
            }
        }
    }

    validate=()=>{
        const errors={};
        if(!this.state.title) errors.title="Cant be blank"
        if(!this.state.category) errors.category="Cant be blank"
        if(!this.state.country) errors.country="Cant be blank"
        if(!this.state.year) errors.year="Cant be blank"
        if(!this.state.director_id) errors.director_id="Cant be blank"
        if(!this.state.imdb_score) errors.imdb_score="Cant be blank"

        return errors
    }

    render(){

        const form=(
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Title</label>
                    <input 
                    id="title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder='Title' />
                    </Form.Field>
                    <Form.Field>
                    <label>Category</label>
                    <input 
                    id="category"
                    name="category"
                    value={this.state.category}
                    onChange={this.handleChange}
                    placeholder='Category' />
                    </Form.Field>
                    <Form.Field>
                    <label>Country</label>
                    <input 
                    id="country"
                    name="country"
                    value={this.state.country}
                    onChange={this.handleChange}
                    placeholder='Country' />
                    </Form.Field>
                    <Form.Field>
                    <label>Year</label>
                    <input 
                    id="year"
                    name="year"
                    value={this.state.year}
                    onChange={this.handleChange}
                    placeholder='Year' />
                    </Form.Field>
                    <Form.Field>
                    <label>Director Id</label>
                    <input 
                    id="director_id"
                    name="director_id"
                    value={this.state.director_id}
                    onChange={this.handleChange}
                    placeholder='Director Id' />
                    </Form.Field>
                    <Form.Field>
                    <label>Imdb Score</label>
                    <input 
                    id="imdb_score"
                    name="imdb_score"
                    value={this.state.imdb_score}
                    onChange={this.handleChange}
                    placeholder='Imbd Score' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
            </Form>
        );
        return(
            <div>
               {
                   this.props.newState.newMovie.done && this.state.redirect ?  <Redirect to="/movies"/> :form
               }
            </div>
        )
    }
}

export default NewMovieForm;
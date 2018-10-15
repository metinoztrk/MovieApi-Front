import React from 'react';
import { Card, Image, Grid, Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
const extra=(movie,deleteMovie)=>{
    return(
    <div className="ui two button">
        <Button animated as={Link} to={`/movie/${movie._id}`}>
        <Button.Content visible>Edit</Button.Content>
        <Button.Content hidden>
            <Icon name='arrow right' />
        </Button.Content>
        </Button>
        <Button animated='vertical' onClick={()=>deleteMovie(movie._id)}>
        <Button.Content hidden>Delete</Button.Content>
        <Button.Content visible>
            <Icon name='trash' />
        </Button.Content>
        </Button>
    </div>
)};

const MovieCard = ({movie,deleteMovie})=>{
    return(
        <Grid.Column> 
            <Card>
                <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                <Card.Content>
                <Card.Header>{movie.title}</Card.Header> 
                <Card.Description>{extra(movie,deleteMovie)}</Card.Description> 
                </Card.Content>
            </Card>
        </Grid.Column>
    )
} 

export default MovieCard;
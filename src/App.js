import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {  Route} from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage';
import AddMoviePage from './components/pages/AddMoviePage';
import LoginPage from './components/pages/LoginPage';
import {
  Container,
} from 'semantic-ui-react'
import Footer from './components/Footer';
import Header from './components/Header';
class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Container >
          <Route exact path='/login' component={LoginPage}></Route>
          <Route exact path='/movies' component={MoviesPage}></Route>
          <Route exact path='/addMovie' component={AddMoviePage}></Route>
          <Route exact path='/movie/:id' component={AddMoviePage}></Route>
        </Container>
        <Footer/>
      </div>
    );
  }
}
export default App;

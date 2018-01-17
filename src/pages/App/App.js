import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/Homepage'
import Prices from '../Prices/Prices'
import AboutMe from '../AboutMe/AboutMe'
import ContactMe from '../ContactMe/ContactMe'
import Footer from '../../components/footer/footer'
class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar/>
       <Switch>
         <Route exact path='/' render={() =>
         <HomePage /> 
         
            } />
         <Route exact path='/pricing' render={() =>
         <Prices />
            } />
         <Route exact path='/aboutme' render={() =>
         <AboutMe />
            } />
        <Route exact path='/contactme' render={() =>
        <ContactMe /> 
            } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

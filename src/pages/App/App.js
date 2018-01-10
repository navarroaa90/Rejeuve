import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar/>
       <Switch>
        </Switch>
      </div>
    );
  }
}

export default App;

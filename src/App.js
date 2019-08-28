import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js'
class App extends Component {
  render() {
    return(
        <Router>
          <div>
            <Route exact path="/" component = {Home} />
            <Route exact path="/About" component = {About} />
            <Route exact path="/Contact" component = {Contact} />
          </div>
        </Router>

    );
  }
}

export default App;

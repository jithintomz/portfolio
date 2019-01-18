import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { particleOptions } from './particleOptions';
import './App.css';


class App extends Component {
  render() {
    return (
    <div className = "particle-container">
    <Particles
      params={ particleOptions } />
      </div>
    )
  }
}

export default App;

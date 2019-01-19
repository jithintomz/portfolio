import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { particleOptions } from './particleOptions';
import Typist from 'react-typist';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        left: '50px'
      }
    }
  }
  componentDidMount = () =>{
    document.addEventListener('keydown',this.handleKeyDown)
    document.addEventListener('keyup',this.handleKeyUp)
    this.keyDowns = []
  }

  changeStyleValue = (value,direction) => {
    if (direction === 'increase') {
      return (Number(value.split('px')[0]) + 50) + 'px';
    }
    if (direction === 'decrease') {
      return (Number(value.split('px')[0]) - 50) + 'px';
    }
  }
  
  handleKeyDown = (event) => {
    if (this.keyDowns.length !== 0) {
      return false;
    }
    this.keyDowns.push(event)
    let newPosition = 0;
    let newTransform = ''
    const newStyle = {}
    if (event.key === 'ArrowRight') {
      newPosition = this.changeStyleValue(this.state.style.left,'increase')
      newTransform = 'rotate(30deg)';
    }
    if (event.key === 'ArrowLeft') {
      newPosition = this.changeStyleValue(this.state.style.left,'decrease')
      newTransform = 'rotate(-30deg)';
    }
    newStyle.left = newPosition;
    newStyle.transform = newTransform;
    this.setState({style : newStyle})
  }

  handleKeyUp = (event) => {
    this.keyDowns.pop()
    this.setState({style : {...this.state.style, 'transform' : ''}})
  }
  render() {
    return (
    <div className = "particle-container" onKeyDown = {this.handleKeyDown}>
    <span className = "speech-bubble"><Typist>
        This is the begining of Jithin's Portfolio.
        <Typist.Backspace count={0} delay={400} />
      </Typist></span>
    <div className = "man-container">
    <i className = "fa fa-android" style={this.state.style} id = "man" aria-hidden = "true"></i> 
    </div>
    <Particles
      params={ particleOptions } />
    </div>
    )
  }
}

export default App;

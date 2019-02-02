import React, { Component } from "react";
/*import Particles from "react-particles-js";
import { particleOptions } from "./particleOptions";*/
import Typist from "react-typist";
import "./App.css";
import CompanyDetails from "./CompanyDetails";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

const skills = [
  {label  : "🐍 Python", value : 9},
  {label  : " Javascript", value : 8},
  {label  : "Django", value : 9},
  {label  : "AngularJs", value : 9},
  {label  : " 🐘 Postgres", value : 5},
  {label  : "AWS", value : 8},
  {label  : " ⚛️ React", value : 7},
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        left: "50px"
      }
    };
  }
  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
    window.addEventListener("scroll", this.handleScroll);
    const about = this.refs.about.refs.aboutContainer;
    const observer = new IntersectionObserver((entries, observer) => {
      const about = entries[0]
      if (about.intersectionRatio > 0) {
        //this.refs.man.classList.add('propel')
      }
    });
    observer.observe(about);
    this.keyDowns = [];
  };

  manageClimax = () => { };
  reachedCheckPoint = position => {
    //this.refs.company1.classList.add('scrollToView');
  };

  handleScroll = event => {
    if (Math.round(window.pageXOffset / 100) === Math.round(1300 / 100)) {
      this.reachedCheckPoint(1);
    }
  };

  changeStyleValue = (value, direction) => {
    if (direction === "increase") {
      return Number(value.split("px")[0]) + 50 + "px";
    }
    if (direction === "decrease") {
      return Number(value.split("px")[0]) - 50 + "px";
    }
  };

  handleKeyDown = event => {
    if (this.keyDowns.length !== 0) {
      return false;
    }
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
      return false;
    }
    this.keyDowns.push(event);
    let newPosition = 0;
    let newTransform = "";
    const newStyle = {};
    if (event.key === "ArrowRight") {
      newPosition = this.changeStyleValue(this.state.style.left, "increase");
      newTransform = "rotate(90deg)";
    }
    if (event.key === "ArrowLeft") {
      newPosition = this.changeStyleValue(this.state.style.left, "decrease");
      newTransform = "rotate(-90deg)";
    }
    newStyle.left = newPosition;
    newStyle.transform = newTransform;
    this.setState({ style: newStyle });
  };

  handleKeyUp = event => {
    this.keyDowns.pop();
    this.setState({ style: { ...this.state.style, transform: "" } });
  };
  render() {
    return (
      <div
        ref="parentNode"
        className="particle-container"
        onKeyDown={this.handleKeyDown}
      >
        <div className="moon-container">
          <div className="moon-glow">
            <div className="moon" />
          </div>
        </div>
        <Skills skills={skills} />
        <About ref="about" />
        <div className="contact-container">
          <Contact />
        </div>
        <div className="speech-bubble" style={{ left: "2100px" }}>
          Career Timeline
        </div>
        <div className="speech-bubble" style={{ left: "4500px"}}>
          Skills
        </div>
        <div className="company-details" ref="company1">
          <CompanyDetails />
        </div>
        <span className="speech-bubble">
          <Typist avgTypingDelay={70}>
            Hey there! Good To see Ya!
            <Typist.Backspace count={26} delay={400} />
            <span>Use
            {" "}<i className="fa fa-arrow-left" />
              {" "}<i className="fa fa-arrow-right" /> to navigate portfolio.
            </span>
          </Typist>
        </span>
        <div className="man-container">
          <i className="fa fa-android" style={this.state.style} ref="man" id="man"
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }
}

export default App;

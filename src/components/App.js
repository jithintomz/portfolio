import React, { Component } from "react";
/*import Particles from "react-particles-js";
import { particleOptions } from "./particleOptions";*/
import Typist from "react-typist";
import "./App.css";
import CompanyDetails from "./CompanyDetails";
import Skills from "./Skills";
import About from "./About";
import Man from "./Man";
import Contact from "./Contact";

const skills = [
  { label: "🐍 Python", value: 9 },
  { label: " Javascript", value: 8 },
  { label: "Django", value: 9 },
  { label: "AngularJs", value: 9 },
  { label: " 🐘 Postgres", value: 5 },
  { label: "AWS", value: 8 },
  { label: " ⚛️ React", value: 7 }
];

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
    window.addEventListener("scroll", this.handleScroll);
    const about = this.refs.about.refs.aboutContainer;
    const observer = new IntersectionObserver((entries, observer) => {
      const about = entries[0];
      if (about.intersectionRatio > 0) {
        //this.refs.man.classList.add('propel')
      }
    });
    observer.observe(about);
  };

  manageClimax = () => {};

  reachedCheckPoint = position => {
    //this.refs.company1.classList.add('scrollToView');
  };

  handleScroll = event => {
    if (Math.round(window.pageXOffset / 100) === Math.round(1300 / 100)) {
      this.reachedCheckPoint(1);
    }
  };

  render() {
    return (
      <div
        ref="parentNode"
        className="particle-container"
        onKeyDown={this.handleKeyDown}
      >
        {/* --------------------Moving man--------------------------------------*/}
        <div className="man-container">
          <Man />
        </div>
        {/* --------------------Moving man End--------------------------------------*/}

        {/* --------------------Welcome text--------------------------------------*/}
        <span className="speech-bubble">
          <Typist avgTypingDelay={70}>
            Hey there! Good To see Ya!
            <Typist.Backspace count={26} delay={400} />
            <span>
              Use <i className="fa fa-arrow-left" />{" "}
              <i className="fa fa-arrow-right" /> to navigate portfolio.
            </span>
          </Typist>
        </span>

        {/* --------------------Welcome text End--------------------------------------*/}

        {/* --------------------Moon Beginning--------------------------------------*/}
        <div className="moon-container">
          <div className="moon-glow">
            <div className="moon" />
          </div>
        </div>
        {/* --------------------Moon Ends--------------------------------------*/}

        {/* --------------------Career Timeline--------------------------------------*/}
        <div className="speech-bubble" style={{ left: "2100px" }}>
          Career Timeline
        </div>
        <div className="company-details" ref="company1">
          <CompanyDetails />
        </div>
        {/* --------------------Career Timeline Ends--------------------------------------*/}

        {/* --------------------Skills--------------------------------------*/}
        <div className="speech-bubble" style={{ left: "4500px" }}>
          Skills
        </div>
        <Skills skills={skills} />
        {/* --------------------Skills End--------------------------------------*/}

        {/* --------------------About Me--------------------------------------*/}
        <About ref="about" />
        {/* --------------------About Me End--------------------------------------*/}

        {/* --------------------Contact Me--------------------------------------*/}
        <div className="contact-container">
          <Contact />
        </div>
        {/* --------------------Contact Me Ends--------------------------------------*/}
      </div>
    );
  }
}

export default App;

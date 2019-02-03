import React, { Component } from "react";
import Typist from "react-typist";
import "./About.css";

function SocialIcon(props){
  return (<a href={props.url} target="blank">
            <i className={`fa ${props.icon}`} />
          </a>)
}

function SocialBar(props) {
  return (
    props.socials.map(element => {
      return <SocialIcon url = {element.url}  key={element.url}  icon = {element.icon }/>  
    })
  )
}

const socials = [
  {url : 'https://github.com/jithintomz/', icon : 'fa-github'},
  {url : 'https://www.linkedin.com/in/jithin-tom/', icon : 'fa-linkedin-square'},
  {url : 'https://stackoverflow.com/users/3350104/jithin', icon : 'fa-stack-overflow'},
]

class About extends Component {
  scrollToContactFrom = () => {
    const contactForm = document.getElementById("contact");
    contactForm.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  };
  render() {
    return (
      <div id="about" ref="aboutContainer">
        <div className="title-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect className="shape" height="60" width="320" />
          </svg>
          <div className="text"> JITHIN TOM </div>
          <div className="developer-info">
            <div>
              <Typist startDelay={1000}>🐍 Python Javascript Developer </Typist>
            </div>
          </div>
          <div className="contact">
            <button
              onClick={this.scrollToContactFrom}
              className="btn btn-white btn-mid">
              Contact Me!
            </button>
          </div>
          <div className="social-bar">
            <SocialBar socials={socials} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;

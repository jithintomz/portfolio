import React, { Component } from "react";

class Man extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        left: "50px"
      }
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
    this.keyDowns = [];
  }

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
      <i
        className="fa fa-android"
        style={this.state.style}
        ref="man"
        id="man"
        aria-hidden="true"
      />
    );
  }
}

export default Man;

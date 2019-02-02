import React, { Component } from "react";
import Chartist from "chartist";
import "./Skills.css";



class Skills extends Component {
  componentDidMount(props) {
    
    const labels = this.props.skills.map(element => element.label)
    const series = this.props.skills.map(element => element.value)
    
    this.chartData = {labels : labels, series : [series]}
    this.chart = this.renderChart();
    
    const wrapper = this.refs.wrapper;
    
    const observer = new IntersectionObserver((entry, observer) => {
      const wrapperEntry = entry[0];
      if (wrapperEntry.intersectionRatio > 0) {
        this.chart.update.call(this.chart);
      }
    });
    
    observer.observe(wrapper);
  }

  renderChart = () => {
    const chart = new Chartist.Line(
      "#skills",
      this.chartData,
      {
        low: 0,
        high: 10,
        divisor: 4,
        showLine: true,
        axisY: {
          showLabel: false,
          showGrid: false,
          offset: 1,
        }
      }
    );

    let seq = 0,
      delays = 80,
      durations = 500;

    // Once the chart is fully created reset the sequence
    chart.on("created", function() {
      seq = 0;
    });

    // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
    chart.on("draw", function(data) {
      seq++;

      if (data.type === "line") {
        // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
        data.element.animate({
          opacity: {
            // The delay when we like to start the animation
            begin: seq * delays + 1000,
            // Duration of the animation
            dur: durations,
            // The value where the animation should start
            from: 0,
            // The value where it should end
            to: 1
          }
        });
      } else if (data.type === "label" && data.axis === "x") {
        data.element.animate({
          y: {
            begin: seq * delays,
            dur: durations,
            from: data.y + 100,
            to: data.y,
            // We can specify an easing function from Chartist.Svg.Easing
            easing: "easeOutQuart"
          }
        });
      } else if (data.type === "label" && data.axis === "y") {
        data.element.animate({
          x: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 100,
            to: data.x,
            easing: "easeOutQuart"
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          x1: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: "easeOutQuart"
          },
          x2: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: "easeOutQuart"
          },
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "easeOutQuart"
          }
        });
      } else if (data.type === "grid") {
        // Using data.axis we get x or y which we can use to construct our animation definition objects
        var pos1Animation = {
          begin: seq * delays,
          dur: durations,
          from: data[data.axis.units.pos + "1"] - 30,
          to: data[data.axis.units.pos + "1"],
          easing: "easeOutQuart"
        };

        var pos2Animation = {
          begin: seq * delays,
          dur: durations,
          from: data[data.axis.units.pos + "2"] - 100,
          to: data[data.axis.units.pos + "2"],
          easing: "easeOutQuart"
        };

        var animations = {};
        animations[data.axis.units.pos + "1"] = pos1Animation;
        animations[data.axis.units.pos + "2"] = pos2Animation;
        animations["opacity"] = {
          begin: seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: "easeOutQuart"
        };

        data.element.animate(animations);
      }
    });
    return chart;
  };
  render() {
    return <div ref="wrapper" id="skills" />;
  }
}

export default Skills;

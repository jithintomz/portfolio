import React from "react";
import "./CompanyDetails.css";

class CompanyDetails extends React.Component {
  componentDidMount() {
    const firstMarker = this.refs.firstMarker;
    const visibilityObserver = new IntersectionObserver((entry, observer) => {
      if (entry[0].intersectionRatio > 0) {
        this.refs.timelineWrapper.classList.add("scrollToView");
      }
    });
    visibilityObserver.observe(firstMarker);
  }
  render() {
    return (
      <div>
        <div className="timeline-container" ref="timelineWrapper">
          <div className="timeline-block timeline-block-left">
            <div className="marker" ref="firstMarker" />
            <div className="timeline-content">
              <h3 className="date-span">65Million B.C</h3>
              <span className="designation">Dinosaurs Roamed the Earth</span>
              <p className="description">RAWWWWWWRRR 🐢🦂</p>
            </div>
          </div>

          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content">
              <h3 className="date-span">2014 Jan - 2016 Oct</h3>
              <span className="designation">
                <a href="https://www.hexnode.com/" target="blank">
                  Hexnode - Software Engineer
                </a>
              </span>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
              </p>
            </div>
          </div>

          <div className="timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content">
              <h3 className="date-span">2016 Nov - 2018 Nov</h3>
              <span className="designation">
                <a href="https://www.sensehawk.com/" target="blank">
                  Sensehawk - Staff Engineer
                </a>
              </span>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
              </p>
            </div>
          </div>

          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content">
              <h3 className="date-span">2019 Jan - </h3>
              <span className="designation">
                <a href="https://pesto.tech/" target="blank">
                  Pesto - Software Engineer
                </a>
              </span>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyDetails;

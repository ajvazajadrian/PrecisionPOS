import React, { Component } from "react";
import "./About.scss"

export default class About extends Component {
  render() {
    return (
      <div className="about-box">
        <div className="about">
        <img className="about-image" src="/images/we-are.png" />
        <h5 className="first">
        <strong>Precision</strong> is a bold thinking, creative digital agency working for leading brands worldwide.
        </h5>
        <img className="logo-entrance" src="/images/precision-door.jpeg" />
        <h1>Lorem ipsum dolor sit amet</h1>
        <p className="second">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore</p>
        <p className="third">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore</p>
      </div>
      </div>
    );
  }
}

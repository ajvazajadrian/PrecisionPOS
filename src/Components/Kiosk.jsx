import React, { Component } from "react";
import './Kiosk.scss';

export default class Kiosk extends Component {
  render() {
    return (
      <div className="kiosk">
      <div className="text-box">
        <h2>Kiosk</h2>
        <h4>FULL FEATURED / CALLER ID / ROBUST REPORTING</h4>
        <p>
          Our highly graphical and intuitive interface allows new employees to
          start taking orders with little or no training. Precision Point of
          Sale was created with restaurant owners in mind. We have more than
          just theoretical experience, we possess the "real world" practical
          experience needed to understand the challenges of the food industry.
          Whether it relates to customers, employees, food costs, operational
          costs, or work-life balance, our software is designed to help make
          your life easier.
        </p>
        </div>
        <img className="kiosk-girl" src='/images/pos-girl.jpg' />
      </div>
    );
  }
}

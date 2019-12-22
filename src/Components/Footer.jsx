import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-box">
      <div className="logo-footer">
        <img src="/images/logo-precision.png" />
        <p>©Precesion 2020 all Rights Reserved</p>
        </div>
        <div className="nav-footer">
        <ul>
              <li><a href="/services">Services</a> </li>
              <li><a href="/pricing">Pricing</a> </li>
              <li><a href="/contact">Contact</a> </li>
              <li><a href="/about">About</a> </li>
            </ul>
        </div>
        <div className="extra-links-footer">
        <ul>
              <li><a href="/services">Help</a> </li>
              <li><a href="/pricing">Terms</a> </li>
              <li><a href="/contact">Privacy</a> </li>
            </ul>
        </div>
        <div className="connect-footer">
        <p>Connect</p></div>
      </div>
    );
  }
}

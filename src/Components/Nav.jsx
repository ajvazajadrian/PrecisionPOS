import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Nav.scss"

export default class Nav extends Component {

    render() {
        return(
            <div className="navigation"> 
            <div className="logo">
            <a href="/"><img src="/images/logo-precision.png" alt="precisionpos logo" /></a>
          </div>
          <div className="right">
            <label className="toggle" for="toggle">&#9776;</label>
            <input type="checkbox" className="toggle" />
            <div className="menu">
            <ul>
              <li><a href="/services">Services</a> </li>
              <li><a href="/pricing">Pricing</a> </li>
              <li><a href="/contact">Contact</a> </li>
              <li><a href="/about">About</a> </li>
            </ul>
          </div>
          </div>
            </div>
        )
    }
}

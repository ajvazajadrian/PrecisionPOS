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
              <li><Link to="/services">Services</Link> </li>
              <li><Link to="/pricing">Pricing</Link> </li>
              <li><Link to="/contact">Contact</Link> </li>
              <li><Link to="/about">About</Link> </li>
            </ul>
          </div>
          </div>
            </div>
        )
    }
}

import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Kiosk from "./Kiosk";
import CloudPos from "./CloudPos.jsx";
import OnlineApps from "./OnlineApps.jsx";
import './Home.scss';


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default class Home extends Component {
  render() {
    return (
      <>
        <header>
        <div className="head-title">
        <div className="head-text">
          <h5 className="title-m">Lorem ipsum dolor</h5>
          <h2 className="title-xl">
            Lorem ipsum dolor sit ahmet, consetetur sadips ing elitr, sed diam
          </h2>
          </div>
          <img className="product-picture" src="images/pos.png"  alt=""/>
          </div>
          
          <div className="information-icons">
            <div className="analytics info-box">
            <img className="info-icons" src="/images/analytics.png" alt=""/> 
              <h4>Analytics</h4>
              <p>
                Extensive real-time reporting lets you see how your stores,
                products and staff are performing and easily identify
                opportunities for even more growth
              </p>
            </div>
            <div className="ecommerce info-box">
            <img className="info-icons" src="/images/ecommerce.png" alt=""/> 
              <h4>Ecommerce</h4>
              <p>
                Reach new customers and sell your products online - without any
                extra work. Reach over 1mm customers in a click of a button.
              </p>
            </div>
            <div className="pos info-box">
            <img className="info-icons" src="/images/pos-finger.png" alt=""/> 
              <h4>Point of Sale</h4>
              <p>
                The intuitive interface allows you to quickly and easily
                checkout your customers, even if there is no internet.
              </p>
            </div>
            <div className="inventory info-box">
            <img className="info-icons" src="/images/inventory.png" alt=""/> 
              <h4>Inventory Management</h4>
              <p>
                Retail-focused inventory management system will enable you to
                track, update, and view inventory across all sales channels and
                locations in real-time.
              </p>
            </div>
          </div>
        </header>
        <main>
          <Kiosk />
          <div className="customer-logos">
            <div className="logoBox">
            <h6>Trusted by the world´s best</h6>
            <div className="company-logos">
            <h6>Logo1</h6>
            <h6>Logo2</h6>
            <h6>Logo3</h6>
            </div>
            </div>
          </div>

          <div className="company-info">
            <div className="info-block phone">
            <img src="images/phone-icon2.png" alt=""/>
            <div className="text-block">
              <h5>Call us</h5>
              <h5><a href="tel:+18556733700">+1 (855) 673-3700</a></h5>
              </div>
            </div>

            <div className="info-block mail">
            <img src="images/mail-icon2.png" alt=""/>
            <div className="text-block">
              <h5>Email us</h5>
              <h5><a href="mailto:sales@precisionpos.com">sales@PrecisionPos.com</a></h5>
              </div>
            </div>

            <div className="info-block adress">
            <img src="images/location-icon3.png" alt=""/>
            <div className="text-block">
              <h5>Adress</h5>
              <h5><a href="https://goo.gl/maps/9zBHyTgbe9t311Xp7" target="_blank">50 Alberigi Drive, Jessup, PA 18434</a></h5>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

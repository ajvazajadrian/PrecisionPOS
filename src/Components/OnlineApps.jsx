import React, { Component } from "react";

export default class OnlineApps extends Component {
  render() {
    return (
      <div className="online-apps">
        <h2>Online Ordering Apps</h2>
        <h4>Branded iPhone, Android, Browser Apps</h4>
        <p>
          "Online Ordering Made Easy" Take one large step ahead of your
          competition with our online ordering suite. Features include natively
          written iOS, Android, and browser based apps. Our apps have
          multi-store support, GPS, CC Payment, Store Payments, Multiple
          Addresses, Delivery Zones, Customer History, Surveys, Suggested
          Upsell, Web Based Admin panel and many more features.
        </p>
        <img className="kiosk-girl" src="../images/pos-girl.jpg" />
      </div>
    );
  }
}

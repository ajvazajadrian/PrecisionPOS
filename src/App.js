import React from "react";
import logo from "./logo.svg";
import './App.css';
import { Link, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import Home from "./Components/Home.jsx";
import Footer from "./Components/Footer.jsx";
import About from "./Components/About.jsx";
import Price from "./Components/Price.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <div className="App">
    <div className="container">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pricing" component={Price} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </div>
    </div>
  );
}

export default App;
// <Route path="/services" component={Services} />
// <Route path="/pricing" component={Pricing} />
// 
// <Route path="/about" component={About} />

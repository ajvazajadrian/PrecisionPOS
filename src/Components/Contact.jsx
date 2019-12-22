import React, { Component } from 'react'
import "./Contact.scss"; 

export default class Contact extends Component{
constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }


    render() {
        return(
            <div className="contact">
            <h1 className="title-contact">Contact us</h1>
            <div className="forma">
            <form onSubmit={this.handleSubmit}>
            
            <label>
            <input className="input-form" type="text" placeholder="First Name"  />
            <input className="input-form" type="text" placeholder="Last Name"  />
            <input className="input-form" type="text" placeholder="Email Adress"  />
            <input className="input-form" type="text" placeholder="Business Name"  />
            <input className="input-form" type="text" placeholder="Phone Number"  />
            <input className="input-form-text" type="text" placeholder="How can we help you?"  />
            </label>
            <input className="inputButton" type="submit" value="Submit" />
            </form>
            </div>
            </div>
        )
    }
}
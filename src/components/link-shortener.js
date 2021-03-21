import React, { Component } from "react";
// import Fetch from 'fetch';
// import Redis from 'redis';

const redis_port = process.env.REDIS_PORT || 6379;

export default class LinkShortener extends Component {
  constructor(props) {
    super(props);

    // we are checking to see if it will show in gh
    this.state = {
      urlEntered: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value,
          errorText: ""
      });
      console.log("change triggered")
      console.log(event.target.value)
  }

  urlShortenerFunc(url) {}

  handleSubmit(event) {
    consoe.log(this.state.urlEntered)
    debug
    event.preventDefault();
  }

  render() {
    return (
      <div className="url-shortener-wrapper">
        <form onSubmit={this.handleSubmit} >
        <div className="url-input">
          <input 
            type="url"
            name="urlEntered"
            placeholder="Your URL"
            value={this.state.urlEntered}
            onChange={this.handleChange}
          />
        </div>
        
        <div className="url-Button-wrapper">
          <button type="submit">Shorten URL</button>
        </div>
        </form>
      </div>
    );
  }
}

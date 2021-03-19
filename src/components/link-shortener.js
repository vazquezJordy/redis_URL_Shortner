import React, { Component } from "react";

export default class LinkShortener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlEntered: "",
    };
  }

  urlShortenerFunc(url) {}

  render() {
    return (
      <div className= "url-shortener-wrapper">
        <input
          className="url-input"
          type="url"
          name="url-name"
          placeholder="Your URL"
          value={this.state.urlEntered}
        />
        <div className= "url-Button-wrapper">
        <button>Shorten URL</button>
        </div>
      </div>
    );
  }
}

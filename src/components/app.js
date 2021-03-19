import React, { Component } from 'react';
import Header from './header'
import LinkShortener from './link-shortener';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <LinkShortener/>
        <h3>Your shortened URL is: </h3>
      </div>
    );
  }
}


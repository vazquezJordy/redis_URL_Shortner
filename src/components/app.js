import React, { Component } from 'react';
import Header from './header'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <h2>URL will go here</h2>
        <button>Shoten URL</button>
        <h3>The return will go here</h3>
      </div>
    );
  }
}

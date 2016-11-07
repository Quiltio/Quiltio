import React, { Component } from 'react';
import Navbar from './app/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

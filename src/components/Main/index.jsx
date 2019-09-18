import React, { Component } from 'react';

import Characters from "./Characters";
import Header from "./Header";

import './../../assets/style.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

render() {
    return (
      <div>
        <Header />
        <br />
        <Characters />
      </div>
    );
  }
}
export default Main;
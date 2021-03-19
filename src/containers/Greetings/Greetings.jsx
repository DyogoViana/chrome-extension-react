import React, { Component } from 'react';
import icon from '../../assets/img/get_started32';

class GreetingComponent extends Component {
  state = {
    name: 'dev',
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.name}!</p>
        <img src={icon} alt="extension icon" />
      </div>
    );
  }
}

export default GreetingComponent;

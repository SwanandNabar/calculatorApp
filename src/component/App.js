import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Toggle from './Toggle';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';


import Roi from '../plangrid/roi';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to react"/>
        </header>
        <p className="App-intro">
        <Toggle onClick="showCal()"/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Display
          value={this.state.next || this.state.total || '0'}
        />
        <ButtonPanel
          clickHandler={this.handleClick}
        />

        <Roi />
      </div>


    );
  }
}

class Welcome extends Component { 
  render() {
    return (
      <h1 className="App-title">{this.props.text}</h1>
    )
  }
}

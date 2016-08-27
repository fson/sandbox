import React, { Component } from 'react';
import Modal from 'react-modal';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Modal isOpen>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Modal>
    );
  }
}

export default App;

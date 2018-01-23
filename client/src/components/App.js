import React, {Component} from 'react';
import '../stylesheets/App.css';
import {Nav} from "./Nav";

class App extends Component {

  render() {
    return (
        <div className="App">
          <Nav/>
          <h1>Test h1</h1>
          <h2>Test h2</h2>
          <h3>Test h3</h3>
          <p>Test paragraph</p>
        </div>
    );
  }
}

export default App;

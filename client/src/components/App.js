import React, {Component} from 'react';
import '../stylesheets/App.css';
import {Nav} from "./Nav";

class App extends Component {

  render() {
    return (
        <main className="App">
          <Nav />
        </main>
    );
  }
}

export default App;

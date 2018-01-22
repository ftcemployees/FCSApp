import React, { Component } from 'react';
import '../stylesheets/App.css';
import {Nav} from "./Nav";

class App extends Component {
  state = {users: []};

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}
export default App;

import React, {Component} from 'react';
import '../stylesheets/Nav.css';

export class Nav extends Component {
  render() {
    return (
        <nav className='Nav'>
          <div className='nav-content'>
            <h1>Copper King Manor</h1>
          </div>
        </nav>
    );
  }
}
import React, {Component} from 'react';
import '../stylesheets/Nav.css';

export class Nav extends Component {
  render() {
    return (
        <nav className='Nav'>
          <div className='nav-content'>
            Hello World!
          </div>
        </nav>
    );
  }
}
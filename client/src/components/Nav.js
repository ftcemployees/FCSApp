import React from 'react';
import '../stylesheets/Nav.css';

export const Nav = () => {
    return (
        <nav className='Nav'>
          <div className='nav-content'>
            <h1 onClick={() => alert('hello')}>CKM</h1>
            <div className='title-bar'></div>
          </div>
        </nav>
    );
};
import React from 'react';
import './Navbar.css';

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar">
      <img src='https://www.meesho.com/assets/svgicons/meeshoLogo.svg' />
      <div className="links">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('cart')}>Cart</button>
      </div>
    </nav>
  );
};

export default Navbar;

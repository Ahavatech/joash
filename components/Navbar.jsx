
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/tools">Tools</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/pricing">Pricing</Link>
    </nav>
  );
}

export default Navbar;

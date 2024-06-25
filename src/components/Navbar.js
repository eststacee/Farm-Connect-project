import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/farmers">Farmers</Link></li>
        <li><Link to="/buyers">Buyers</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

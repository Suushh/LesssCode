// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  return (
    <nav>
       <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/HomeForum">Home</Link>
        </li>
        <li>
          <Link to="/discussions">Discussions</Link>
        </li>
        <li>
          <Link to="/create">Share your Idea</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


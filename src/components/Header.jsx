// src/components/Header.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMenuItemClick = (route) => {
    navigate(route);
    setDropdownOpen(false); // Close the dropdown after navigation
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <nav className='headernav'>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Home & Living</li>
          <li>Beauty</li>
        </ul>
      </nav>
      <div className="header-actions">
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="profile-icon" onClick={toggleDropdown}>
          <FaUserCircle size={40} />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li onClick={() => handleMenuItemClick('/')}>Profile</li>
                <li onClick={() => handleMenuItemClick('/HomeForum')}>Discussion Forum</li>
                <li onClick={() => handleMenuItemClick('/mystyles')}>My Styles</li>
                <li onClick={() => handleMenuItemClick('/settings')}>Settings</li>
                <li onClick={() => handleMenuItemClick('/logout')}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;



import React from 'react';
import '../css/Navbar.css';
import navlogo from '../assets/navlogo.png';

const Navbar = ({ onOpenModal }) => {

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo-container">
          <img src={navlogo} alt="Logo" />
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Find Jobs</a></li>
            <li><a href="#">Find Talents</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </nav>
        <button className="create-jobs-btn" onClick={onOpenModal}>
          Create Jobs
        </button>
      </div>
    </div>
  );
};

export default Navbar;
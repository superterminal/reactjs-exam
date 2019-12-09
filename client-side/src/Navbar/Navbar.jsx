import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
      <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top"><a href="index.html" className="navbar-brand">food.io</a>
        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><span></span><span></span><span></span></button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto align-items-start align-items-lg-center">
            <li className="nav-item"><a href="#about-us" className="nav-link link-scroll">Profile</a></li>
            <li className="nav-item"><a href="#about-us" className="nav-link link-scroll">Login</a></li>
            <li className="nav-item"><a href="#about-us" className="nav-link link-scroll">Register</a></li>
          </ul>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;
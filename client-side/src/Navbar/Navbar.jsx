import React from 'react';
import './Navbar.css';
import Link from '../shared/Link/Link';

function Navbar({ loggedIn }) {
    return (
      <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top"><Link to="/" className="navbar-brand">food.io</Link>
        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><span></span><span></span><span></span></button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto align-items-start align-items-lg-center">
            {loggedIn && <Link to="/random-recipies" className="nav-link link-scroll">Get random recipies</Link>}
            {loggedIn && <Link to="/my-recipies" className="nav-link link-scroll">My Recipies</Link>}
            {loggedIn && <Link to="/advanced-search" className="nav-link link-scroll">Advanced search</Link>}
            {loggedIn && <Link to="/logout" className="nav-link link-scroll">Logout</Link>}
            {!loggedIn && <Link to="/login" className="nav-link link-scroll">Login</Link>}
            {!loggedIn && <Link to="/register" className="nav-link link-scroll">Register</Link>}
          </ul>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;
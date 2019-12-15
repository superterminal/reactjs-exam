import React from 'react';
import './Navbar.css';
import Link from '../shared/Link/Link';

function Navbar({ loggedIn }) {
    return (
      <nav className="nav">
        <Link to="/">food.io</Link>
          <ul className="nav-links">
            {!loggedIn && <Link to="/login">Login</Link>}
            {!loggedIn && <Link to="/register">Register</Link>}
            {loggedIn && <Link to="/videos">Search for food videos</Link>}
            {loggedIn && <Link to="/meal-plan">Generate meal plan</Link>}
            {loggedIn && <Link to="/random-recipies">Get random recipies</Link>}
            {loggedIn && <Link to="/my-recipies">My Recipies</Link>}
            {loggedIn && <Link to="/advanced-search">Advanced search</Link>}
            {loggedIn && <Link to="/logout">Logout</Link>}
          </ul>
      </nav>
    );
}

export default Navbar;
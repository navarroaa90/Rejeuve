import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo right">Logo</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="sass.html">Home</a></li>
        <li><a heref="#">Pricing</a></li>
        <li><a href="badges.html">About Me</a></li>
        <li><a href="collapsible.html">Contact Me</a></li>
      </ul>
    </div>
  </nav>

    )
}

export default NavBar;
    
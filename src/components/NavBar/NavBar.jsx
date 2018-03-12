import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
      <div className="navbar-fixed">
        <nav>
    <div className="nav-wrapper">
      <h6 className="brand-logo right">Rejeuve Pilates</h6>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link className='home-page' to="/">Home</Link></li>
        <li><Link className='price-page' to="/pricing">Services</Link></li>
        <li><Link className='aboutme-page' to="/aboutme">About Me</Link></li>
        <li><Link className='contact-page' to="/contactme">Contact Me</Link></li>
      </ul>
    </div>
  </nav>
  </div>

    )
}

export default NavBar;
    
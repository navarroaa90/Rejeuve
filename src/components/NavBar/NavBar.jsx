import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo right">Rejeuve Pilates</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link className='home-page' to="/">Home</Link></li>
        <li><Link className='price-page' to="/pricing">Prices</Link></li>
        <li><Link className='aboutme-page' to="/aboutme">About Me</Link></li>
        <li><Link className='contact-page' to="/contactme">Contact Me</Link></li>
      </ul>
    </div>
  </nav>

    )
}

export default NavBar;
    
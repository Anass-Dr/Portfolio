import React from 'react';
import ReactDom from 'react-dom';
import { navbarContext } from '../context/NavbarContext';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/navbar-logo.png';
import '../assets/styles/navbar.css';

function Navbar() {
  const { isActive, handleNav } = React.useContext(navbarContext);

  return ReactDom.createPortal(
    <nav id="navbar" className={isActive ? 'show-nav' : 'hide-nav'}>
      <div className="close">
        <i onClick={handleNav} className="fa-solid fa-xmark"></i>
      </div>
      <img src={Logo} alt="logo" />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>,
    document.getElementById('portals')
  );
}

export default Navbar;

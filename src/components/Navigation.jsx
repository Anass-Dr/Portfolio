import React from 'react';
import { NavLink } from 'react-router-dom';
import { navbarContext } from '../context/NavbarContext';
import Logo from '../assets/images/navigation-logo.png';
import '../assets/styles/navigation.css';

function Navigation() {
  const { handleNav } = React.useContext(navbarContext);

  return (
    <div id="navigation">
      <div className="container">
        <NavLink to="/">
          <img src={Logo} alt="logo-img" />
        </NavLink>
        <ul className="nav_items">
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
        <ul className="nav_links">
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li id="nav_toggle">
            <i onClick={handleNav} className="fa-solid fa-bars-staggered"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;

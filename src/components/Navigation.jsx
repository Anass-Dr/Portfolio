import React from 'react';
import Logo from '../assets/images/portfolio_logo.png';
import '../assets/styles/navigation.css';

function Navigation() {
  return (
    <nav id="navigation">
      <img src={Logo} alt="logo-img" />
      <ul className="nav">
        <li>
          <i className="fa-brands fa-facebook"></i>
        </li>
        <li>
          <i className="fa-brands fa-linkedin"></i>
        </li>
        <li>
          <i className="fa-solid fa-bars-staggered"></i>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

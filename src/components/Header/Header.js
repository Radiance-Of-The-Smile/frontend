import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <header className="header">

      <Link to="/" className="logo">
        <img className="logo-icon" src='/logo192.png' alt="ROTS Logo"/>
        <div className="logo-title">R O T S</div>
      </Link>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
      
    </header>
  );
}

export default Header;
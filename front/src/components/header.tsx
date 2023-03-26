import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="container mx-auto px-4">
        <div className="header-wrap">
          <div className="header-logo">
            <Link to={`/`}>Imanishi Portfolio</Link>
          </div>
          <button className="header-hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="header-nav-wrap">
            <nav>
              <ul className="header-navi">
                <li className="header-navi-list">
                  <Link to={`/`}>Home</Link>
                </li>
                <li className="header-navi-list">
                  <a href="#about">About</a>
                </li>
                <li className="header-navi-list">
                  <Link to={`/contact`}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

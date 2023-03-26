import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto px-4">
        <div className="header-wrap">
          <div className="header-logo">
            <a href="">Imanishi Portfolio</a>
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
                  <a href="">Home</a>
                </li>
                <li className="header-navi-list">
                  <a href="">Info</a>
                </li>
                <li className="header-navi-list">
                  <a href="">About</a>
                </li>
                <li className="header-navi-list">
                  <a href="">Work</a>
                </li>
                <li className="header-navi-list">
                  <a href="">Contact</a>
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

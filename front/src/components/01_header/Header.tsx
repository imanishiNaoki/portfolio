import React from "react";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header-wrap">
          <h1 className="header-logo">
            <a href="">Imanishi Portfolio</a>
          </h1>
          <nav>
            <ul className="header-nav">
              <li className="header-nav-list">
                <a href="">Home</a>
              </li>
              <li className="header-nav-list">
                <a href="">Infomation</a>
              </li>
              <li className="header-nav-list">
                <a href="">About</a>
              </li>
              <li className="header-nav-list">
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

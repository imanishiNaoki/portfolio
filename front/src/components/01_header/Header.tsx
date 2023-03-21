import React from "react";
import { useState } from "react";
const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <div className="container px-8 mx-auto">
        <div className="header-wrap">
          <h1 className="header-logo">
            <a href="">Imanishi Portfolio</a>
          </h1>
          <button className="header-menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="header-navi">
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
      </div>
    </header>
  );
};

export default Header;

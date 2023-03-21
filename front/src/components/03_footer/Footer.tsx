import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-wrap">
          <h1 className="footer-logo">
            <a href="">Imanishi Portfolio</a>
          </h1>
          <nav>
            <ul className="footer-nav">
              <li className="footer-nav-list">
                <a href="">Home</a>
              </li>
              <li className="footer-nav-list">
                <a href="">Infomation</a>
              </li>
              <li className="footer-nav-list">
                <a href="">About</a>
              </li>
              <li className="footer-nav-list">
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

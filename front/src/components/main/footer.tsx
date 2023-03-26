import React from "react";
import { Link } from "react-router-dom";
import youtube from "../../img/youtube.png";
import twitter from "../../img/twitter.png";
import github from "../../img/github.png";
const footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="footer-wrap">
          <div className="footer-logo">
            <a href="">Imanishi Portfolio</a>
          </div>
          <div className="footer-nav-wrap">
            <nav>
              <ul className="footer-navi">
                <li className="footer-navi-list">
                  <Link to={`/`}>Home</Link>
                </li>
                <li className="footer-navi-list">
                  <a href="#about">About</a>
                </li>
                <li className="footer-navi-list">
                  <Link to={`/contact`}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-sns">
          <a href="https://www.youtube.com/@akahoshi53535353">
            <img src={youtube} alt="" />
          </a>
          <a href="https://twitter.com/yumejanai60">
            <img src={twitter} alt="" />
          </a>
          <a href="https://github.com/imanishiNaoki">
            <img src={github} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-copy">
        <span>©️2023 Naoki Imanishi</span>
      </div>
    </footer>
  );
};

export default footer;

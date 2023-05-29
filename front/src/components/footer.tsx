import { useState } from 'react';
import { Link } from 'react-router-dom';
import youtube from '../img/youtube.png';
import twitter from '../img/twitter.png';
import github from '../img/github.png';
const Footer = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => setShowNav(!showNav);
  return (
    <footer className="footer">
      <div className="container mx-auto px-10 pt-8 pb-4">
        <div className="footer-wrap">
          <div className="footer-logo">
            <a href="/portfolio/index.html">Imanishi Portfolio</a>
          </div>
          <div className="footer-nav-wrap">
            <nav>
              <ul className="footer-navi">
                <li className="footer-navi-list">
                  <Link to={`/portfolio/index.html`} onClick={handleClick}>
                    Home
                  </Link>
                </li>
                <li className="footer-navi-list">
                  <Link to={`/portfolio/info`} onClick={handleClick}>
                    Infomation
                  </Link>
                </li>
                <li className="footer-navi-list">
                  <Link to={`/portfolio/about`} onClick={handleClick}>
                    About
                  </Link>
                </li>
                <li className="footer-navi-list">
                  <Link to={`/portfolio/contact`} onClick={handleClick}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="footer-sns">
          <a href="https://www.youtube.com/@akahoshi53535353">
            <img src={youtube} alt="" />
          </a>
          <a href="https://twitter.com/Imanishi0105">
            <img src={twitter} alt="" />
          </a>
          <a href="https://github.com/imanishiNaoki">
            <img src={github} alt="" />
          </a>
        </div>
        <div className="footer-copy">
          <span>©️2023 Imanishi Naoki</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

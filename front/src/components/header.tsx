import { useState } from "react";
import { Link } from "react-router-dom";
import youtube from "../img/youtube.png";
import twitter from "../img/twitter.png";
import github from "../img/github.png";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => setShowNav(!showNav);
  return (
    <header className="header">
      <div className="container mx-auto px-6 md:px-10 ">
        <div className="header-wrap">
          <div className="header-logo">
            <Link to={`/`}>Imanishi Portfolio</Link>
          </div>
          <button className={`header-hamburger ${showNav ? "is_active" : ""}`} onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`header-nav-wrap ${showNav ? "is_active" : ""}`} onClick={handleClick}>
            <nav>
              <ul className="header-navi">
                <li className="header-navi-list">
                  <Link to={`/`} onClick={handleClick}>
                    Home
                  </Link>
                </li>
                <li className="header-navi-list">
                  <Link to={`/info`} onClick={handleClick}>
                    Infomation
                  </Link>
                </li>
                <li className="header-navi-list">
                  <Link to={`/about`} onClick={handleClick}>
                    About
                  </Link>
                </li>
                <li className="header-navi-list">
                  <Link to={`/contact`} onClick={handleClick}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="header-sns">
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

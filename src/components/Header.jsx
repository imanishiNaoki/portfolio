import { useState } from "react";
import React from "react";
const Header = () => {
  const linkData = [
    { title: "HOME", link: "#" },
    { title: "NEWS", link: "#news" },
    { title: "ABOUT", link: "#about" },
    { title: "SKILL", link: "#skill" },
    { title: "WORK", link: "#work" },
    { title: "CONTACT", link: "#contact" },
  ];
  const linkList = linkData.map((value) => (
    <li className="header-nav__list" key={value.title}>
      <a className="px-4 mx-2" href={value.link}>
        {value.title}
      </a>
    </li>
  ));
  return (
    <header id="header">
      <div className="header">
        <div className="container mx-auto px-8">
          <div className="header-wrap">
            <h1 className="header-title">Imanishi Portfolio</h1>
            <nav className="header-nav">
              <ul>{linkList}</ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

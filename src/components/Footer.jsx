import { useState } from "react";
import React from "react";

const Footer = () => {
  const linkData = [
    { title: "HOME", link: "#" },
    { title: "NEWS", link: "#news" },
    { title: "ABOUT", link: "#about" },
    { title: "WORK", link: "#" },
    { title: "BLOG", link: "#" },
    { title: "CONTACT", link: "#" },
  ];
  const linkList = linkData.map((value) => (
    <li className="footer-nav__list" key={value.title}>
      <a className="px-4 mx-2" href={value.link}>
        {value.title}
      </a>
    </li>
  ));
  return (
    <footer id="footer">
      <div className="footer pt-4">
        <div className="container mx-auto">
          <div className="footer-wrap">
            <h1 className="footer-title">Imanishi Portfolio</h1>
            <nav className="footer-nav">
              <ul>{linkList}</ul>
            </nav>
          </div>
          <span className="footer-copy text-center">©️2023 Imanishi Naoki</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

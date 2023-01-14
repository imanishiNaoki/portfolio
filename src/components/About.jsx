import { useState } from "react";
import React from "react";
const About = () => {
  return (
    <section>
      <div id="about" className="about py-16">
        <div className="container mx-auto">
          <h2 className="section-title -white">
            ABOUT<span>わたしについて</span>
          </h2>
        </div>
        <div className="about-content">
          <div className="about-content-img"></div>
          <div className="about-content-text"></div>
        </div>
      </div>
    </section>
  );
};
export default About;

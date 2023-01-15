import { useState } from "react";
import React from "react";
import Key from "./Key";
import News from "./News";
import About from "./About";
import Skill from "./Skills";
import Work from "./Work";
//import Blog from "./Blog";
import Contact from "./Contact";
const Main = () => {
  return (
    <main>
      <div className="main">
        <Key />
        <News />
        <About />
        <Skill />
        <Work />
        <Contact />
      </div>
    </main>
  );
};
export default Main;

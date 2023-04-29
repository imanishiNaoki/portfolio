import React from "react";
import Key from "./key/key";
import TopInfo from "./info/Topinfo";
import Info from "./info/_info";
import About from "./about/_about";
import TopAbout from "./about/topAbout";
import Contact from "./contact/contact";
import Form from "./form/form";
import Thanks from "./thanks/thanks";
import Pagetop from "./pegetop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const main = () => {
  return (
    <main className="main">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Key />
              <TopInfo />
              <TopAbout />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Form />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
      <Pagetop />
    </main>
  );
};

export default main;

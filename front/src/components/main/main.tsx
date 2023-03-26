import React from "react";
import Key from "./key/key";
import Info from "./info/info";
import About from "./about/about";
import Contact from "./contact/contact";
import Form from "./form/form";
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
              <Info />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/contact" element={<Form />} />
      </Routes>
    </main>
  );
};

export default main;

import React from "react";
import ReactDOM from "react-dom/client";
//import { BrowserRouter, Route } from "react-router-dom";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/01_header/Header";
import Main from "./components/02_main/01_Top/Main";
import Footer from "./components/03_footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <Header />
    <Main />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

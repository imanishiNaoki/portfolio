import React, { useState } from "react";

const Pegetop = () => {
  const [isActive, active] = useState(false);
  const scroll_top = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  const PageTopActive = () => {
    var scroll_y = 0;
    window.addEventListener("scroll", () => {
      scroll_y = window.scrollY;
      if (200 < scroll_y) {
        active(true);
      } else {
        active(false);
      }
    });
  };
  PageTopActive();
  return <button className={`page-top ${isActive ? "is_active" : ""}`} id="page-top" onClick={scroll_top}></button>;
};

export default Pegetop;

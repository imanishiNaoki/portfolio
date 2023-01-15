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
          <div className="about-content">
            <div className="about-content-img">
              <img src="./src/assets/img/about01.jpg" alt="" />
            </div>
            <div className="about-content-area">
              <h3 class="about-content-area__name">Imanishi Naoki</h3>
              <p class="about-content-area__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quia tenetur inventore ullam repellendus ad quidem? Labore veniam quas esse dolor in est porro, quidem deleniti explicabo doloremque adipisci vero.</p>
              <p class="about-content-area__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut iusto maiores beatae commodi molestiae sed doloremque sit maxime ut dolore, dolores, minus, vel reiciendis laudantium laboriosam. Corporis dolorem ut natus excepturi molestiae quo </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

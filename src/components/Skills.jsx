import { useState } from "react";
import React from "react";
const Skill = () => {
  return (
    <section>
      <div id="skill" className="skill">
        <div className="container mx-auto py-16">
          <h2 className="section-title">
            SKILL<span>技術</span>
          </h2>
          <ul className="skill-list">
            <li className="skill-list-item">
              <div className="skill-list-item__num">01</div>
              <div className="skill-list-item__content">
                <h3 className="skill-list-item__content__title">HTML</h3>
                <p className="skill-list-item__content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto id repellendus enim illum doloribus modi natus non, optio consequuntur molestiae?</p>
              </div>
            </li>
            <li className="skill-list-item">
              <div className="skill-list-item__num">02</div>
              <div className="skill-list-item__content">
                <h3 className="skill-list-item__content__title">CSS</h3>
                <p className="skill-list-item__content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto id repellendus enim illum doloribus modi natus non, optio consequuntur molestiae?</p>
              </div>
            </li>
            <li className="skill-list-item">
              <div className="skill-list-item__num">03</div>
              <div className="skill-list-item__content">
                <h3 className="skill-list-item__content__title">JaveScript</h3>
                <p className="skill-list-item__content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto id repellendus enim illum doloribus modi natus non, optio consequuntur molestiae?</p>
              </div>
            </li>
            <li className="skill-list-item">
              <div className="skill-list-item__num">04</div>
              <div className="skill-list-item__content">
                <h3 className="skill-list-item__content__title">jQuery</h3>
                <p className="skill-list-item__content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto id repellendus enim illum doloribus modi natus non, optio consequuntur molestiae?</p>
              </div>
            </li>
            <li className="skill-list-item">
              <div className="skill-list-item__num">05</div>
              <div className="skill-list-item__content">
                <h3 className="skill-list-item__content__title">React</h3>
                <p className="skill-list-item__content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto id repellendus enim illum doloribus modi natus non, optio consequuntur molestiae?</p>
              </div>
            </li>
            <li className="skill-list-item">
              <div className="skill-list-item__num">06</div>
              <div className="skill-list-item__content">
                <h3 className="skill-list-item__content__title">Node.js</h3>
                <p className="skill-list-item__content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto id repellendus enim illum doloribus modi natus non, optio consequuntur molestiae?</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Skill;

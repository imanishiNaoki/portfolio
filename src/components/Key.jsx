import { useState } from "react";
import React from "react";
const Key = () => {
  return (
    <section id="key">
      <div className="key">
        <div className="container mx-auto">
          <div className="catchcopy">
            <div className="catchcopy-area">
              <h1 className="catchcopy-area__title">Wellcome My Portfolio Site.</h1>
              <h2 className="catchcopy-area__subtitle">埼玉県在住のフロントエンドエンジニア</h2>
              <p className="catchcopy-area__text">
                <span className="pr-2">HTML</span>
                <span className="px-2">CSS</span>
                <span className="px-2">JavaScript</span>
                <span className="px-2">jQuery</span>
                <span className="px-2">React</span>
                <span className="pl-2">Node.js</span>
              </p>
            </div>
          </div>
        </div>
        <div className="key-deco"></div>
      </div>
    </section>
  );
};
export default Key;

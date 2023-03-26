import React from "react";

const info = () => {
  return (
    <section id="info">
      <div className="info">
        <div className="container mx-auto px-4">
          <div className="info-wrap">
            <h2 className="info-title">
              <span>Infomation</span>
            </h2>
            <ul className="info-list">
              <li className="info-list-item">
                <span className="info-date">2023/03/26</span>
                <br className="sp-show" />
                <span className="info-text">ホームページをリニューアルしました</span>
              </li>
              <li className="info-list-item">
                <span className="info-date">2023/03/26</span>
                <br className="sp-show" />
                <span className="info-text">ホームページをリニューアルしました</span>
              </li>
              <li className="info-list-item">
                <span className="info-date">2023/03/26</span>
                <br className="sp-show" />
                <span className="info-text">ホームページをリニューアルしました</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default info;

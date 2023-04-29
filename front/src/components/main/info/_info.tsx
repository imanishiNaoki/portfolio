import React from "react";
import { Link } from "react-router-dom";
const info = () => {
  return (
    <section id="info">
      <div className="info">
        <div className="container mx-auto px-10 py-16 lg:py-24">
          <div className="info-wrap">
            <h2 className="info-title">
              <span>Infomation</span>
            </h2>
            <ul className="info-list">
              <ul className="info-list">
                <li className="info-list-item">
                  <span className="info-type -info">お知らせ</span>
                  <span className="info-date">2023/04/04</span>
                  <br className="sp-show" />
                  <span className="info-text">ホームページ制作の受付を開始しました。</span>
                </li>
                <li className="info-list-item">
                  <span className="info-type -info">お知らせ</span>
                  <span className="info-date">2023/03/29</span>
                  <br className="sp-show" />
                  <span className="info-text">お問合せフォームを設置いたしました。</span>
                </li>
                <li className="info-list-item">
                  <span className="info-type -info">お知らせ</span>
                  <span className="info-date">2023/03/26</span>
                  <br className="sp-show" />
                  <span className="info-text">ホームページをリニューアルしました。</span>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default info;

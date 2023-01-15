import { useState } from "react";
import React from "react";
const News = () => {
  return (
    <section>
      <div id="news" className="news py-16">
        <div className="container mx-auto">
          <h2 className="section-title">
            NEWS<span>新着情報</span>
          </h2>
          <div className="newsarea">
            <ul className="news-list">
              <li>
                <a className="news-list-item" href="#">
                  <span className="news-list-item__date">2023/01/14</span>
                  <span className="news-list-item__label">ラベル</span>
                  <span className="news-list-item__text">テストですテストですテストですテストですテストですテストですテストです</span>
                </a>
              </li>
              <li>
                <a className="news-list-item" href="#">
                  <span className="news-list-item__date">2023/01/14</span>
                  <span className="news-list-item__label">ラベル</span>
                  <span className="news-list-item__text">テストですテストですテストですテストですテストですテストですテストです</span>
                </a>
              </li>
              <li>
                <a className="news-list-item" href="#">
                  <span className="news-list-item__date">2023/01/14</span>
                  <span className="news-list-item__label">ラベル</span>
                  <span className="news-list-item__text">テストですテストですテストですテストですテストですテストですテストです</span>
                </a>
              </li>
              <li>
                <a className="news-list-item" href="#">
                  <span className="news-list-item__date">2023/01/14</span>
                  <span className="news-list-item__label">ラベル</span>
                  <span className="news-list-item__text">テストですテストですテストですテストですテストですテストですテストです</span>
                </a>
              </li>
              <li>
                <a className="news-list-item" href="#">
                  <span className="news-list-item__date">2023/01/14</span>
                  <span className="news-list-item__label">ラベル</span>
                  <span className="news-list-item__text">テストですテストですテストですテストですテストですテストですテストです</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="list-all-btn text-right">
            <a href="">一覧を見る</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default News;

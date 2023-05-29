import React from 'react';
import { Link } from 'react-router-dom';
const about = () => {
  return (
    <section id="about">
      <div className="about">
        <div className="container mx-auto px-10 py-6 lg:py-16">
          <div className="about-wrap">
            <h2 className="about-title">
              <span>About</span>
            </h2>
            <div className="about-content">
              <p>
                兵庫県宝塚出身。 <br className="sp-show" />
                高校卒業してすぐに町工場に就職。
                <br />
                工場の立ち上げメンバーとして千葉に転勤し、 自工程のリーダーとして従事。
              </p>
              <p>IT業界の働き方に魅力を感じ転職を決意。</p>
              <p>テスター、WEB運用監視を経て、 現在フロントエンドエンジニアとして働いております。</p>
            </div>
          </div>
          <div className="view-button">
            <Link to={`/portfolio/about`}>VIEW MORE</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;

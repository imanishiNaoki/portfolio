import React from "react";

const about = () => {
  return (
    <section id="about">
      <div className="about">
        <div className="container mx-auto px-4">
          <div className="about-wrap">
            <h2 className="about-title">
              <span>About</span>
            </h2>
            <div className="about-content">
              <p>
                兵庫県宝塚出身。
                <br className="sp-show" />
                高校卒業してすぐに町工場に就職。
                <br />
                工場の立ち上げメンバーとして千葉に転勤し、
                <br className="sp-show" />
                自工程のリーダーとして従事。
              </p>
              <p>IT業界への働き方に魅力を感じ転職を決意。</p>
              <p>
                テスター、WEB運用監視を経て、
                <br className="sp-show" />
                現在フロントエンドエンジニアとして働いております。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;

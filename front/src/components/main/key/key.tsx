import React from 'react';
import { Link } from 'react-router-dom';
const key = () => {
  return (
    <section id="key">
      <div className="key">
        <div className="container mx-auto px-10">
          <div className="key-content">
            <p className="key-title">
              WEBで創る、
              <br className="sp-show" />
              WEBで繋がる。
            </p>
            <p className="key-sub">
              埼玉県在住の
              <br className="sp-show" />
              フロントエンドエンジニア
            </p>
            <div className="button">
              <Link to={`/portfolio/contact`}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default key;

import React from 'react';
import { Link } from 'react-router-dom';
const contact = () => {
  return (
    <section id="contact">
      <div className="contact">
        <div className="container mx-auto px-10 py-16 lg:py-24">
          <div className="contact-wrap">
            <h2 className="contact-title">
              <span>Contact</span>
            </h2>
            <div className="contact-content">
              <p>
                ここまでホームページを見て頂き、 ありがとうございました。
                <br />
                ホームページ作成、デザイン作成など、 お問い合わせは下記ボタンよりお願いいたします。
              </p>
            </div>
            <div className="button">
              <Link to={`/portfolio/contact`}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;

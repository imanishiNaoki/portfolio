import { useState } from "react";
import { Link } from "react-router-dom";
const Thanks = () => {
  setTimeout(() => {
    window.location.href = "/";
  }, 10000);
  return (
    <section id="end">
      <div className="end">
        <div className="container mx-auto px-10 py-16 lg:py-24">
          <div className="end-wrap">
            <h2 className="end-title">
              <span>Thank You!!</span>
            </h2>
            <div className="end-content">
              <p>
                お問い合せを受け付けました。
                <br />
                内容を確認し後日ご連絡させて頂きます。
                <br />
                10秒後にホームページトップに戻ります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thanks;

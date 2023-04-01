import React from "react";

const form = () => {
  return (
    <section id="form">
      <div className="form">
        <div className="container mx-auto px-4">
          <div className="form-wrap">
            <h2 className="form-title">
              <span>Contact</span>
            </h2>
            <div className="form-content">
              <p>
                ホームページ作成、デザイン作成など相談を受け付けております。 <br />
                お問い合わせ内容を入力し送信ボタンを押してください。
              </p>
            </div>
            <div className="form-formarea">
              <p>
                <label htmlFor="name" className="form-name">
                  お名前
                </label>
                <input type="text" id="name" />
              </p>
              <p>
                <label htmlFor="email" className="form-email">
                  E-Mail
                </label>
                <input type="email" id="email" />
              </p>
              <p>
                <label htmlFor="textarea" className="form-textarea">
                  お問合せ内容
                </label>
                <textarea id="textarea"></textarea>
              </p>
              <div className="form-submit button">
                <button>送信</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default form;

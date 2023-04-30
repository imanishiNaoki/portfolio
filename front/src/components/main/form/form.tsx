import { useState } from "react";
import { Link } from "react-router-dom";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleTextareaChange = (e: any) => {
    setTextarea(e.target.value);
  };

  const handleSubmit = (e: any) => {
    let ValidationName = document.querySelectorAll<HTMLElement>(".name-Validation");
    let ValidationEmail = document.querySelectorAll<HTMLElement>(".email-Validation");
    let ValidationTextarea = document.querySelectorAll<HTMLElement>(".text-Validation");
    e.preventDefault();
    if (name === "") {
      ValidationName[0].innerHTML = "名前が入力されていません。";
    } else {
      ValidationName[0].innerHTML = "";
    }

    if (email === "") {
      ValidationEmail[0].innerHTML = "メールアドレスが入力されていません。";
    } else {
      ValidationEmail[0].innerHTML = "";
    }

    if (textarea === "") {
      ValidationTextarea[0].innerHTML = "お問合せ内容が入力されていません。";
    } else {
      ValidationTextarea[0].innerHTML = "";
    }

    if (name !== "" && email !== "" && textarea !== "") {
      const form = new FormData();
      const today: any = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let date = today.getDate();
      const format = year + "/" + month + "/" + date;
      form.append("date", format);
      form.append("name", name);
      form.append("email", email);
      form.append("textarea", textarea);

      fetch("/api/validation.php", {
        method: "POST",
        body: form,
      });
      //window.location.href = "/thanks";
      console.log(form);
    }
  };
  return (
    <section id="end">
      <div className="end">
        <div className="container mx-auto px-10 py-16 lg:py-24">
          <div className="end-wrap">
            <h2 className="end-title">
              <span>Contact</span>
            </h2>
            <div className="end-content">
              <p>
                ホームページ作成、デザイン作成など相談を受け付けております。 <br />
                お問い合わせ内容を入力し送信ボタンを押してください。
              </p>
            </div>
            <form action="">
              <div className="end-formarea">
                <p>
                  <label htmlFor="name" className="form-name">
                    お名前
                  </label>
                  <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
                  <span className="name-Validation attention"></span>
                </p>
                <p>
                  <label htmlFor="email" className="form-email">
                    メールアドレス
                  </label>
                  <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
                  <span className="email-Validation attention"></span>
                </p>
                <p>
                  <label htmlFor="textarea" className="form-textarea">
                    お問合せ内容
                  </label>
                  <textarea id="textarea" name="textarea" value={textarea} onChange={handleTextareaChange}></textarea>
                  <span className="text-Validation attention"></span>
                </p>
                <div className="end-submit button">
                  <button type="submit" onClick={handleSubmit}>
                    送信
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;

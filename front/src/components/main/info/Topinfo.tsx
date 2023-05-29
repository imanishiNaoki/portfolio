import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
const Info = () => {
  const list: any = [];
  useEffect(() => {
    async function fetchNews() {
      const response = await fetch('/portfolio/api/news.php');
      const json = await response.json();
      for (let i = 0; i < 5; i++) {
        list.push(
          <li className="info-list-item" key={json[i].id}>
            <span className={`info-type ${json[i].type}`}>{json[i].type_text}</span>
            <span className="info-date">{json[i].date}</span>
            <br className="sp-show" />
            <span className="info-text" dangerouslySetInnerHTML={{ __html: json[i].title }} />
          </li>
        );
      }

      ReactDOM.render(list, document.getElementById('info-list'));
    }
    fetchNews();
  }, []);
  return (
    <section id="info">
      <div className="info">
        <div className="container mx-auto px-10 py-6 lg:py-16">
          <div className="info-wrap">
            <h2 className="info-title">
              <span>Infomation</span>
            </h2>
            <ul id="info-list" className="info-list"></ul>
            <div className="view-button">
              <Link to={`/portfolio/info`}>VIEW MORE</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;

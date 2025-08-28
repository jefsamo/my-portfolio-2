import { Link } from "react-router-dom";
import "./header.css";
import CV from "./olawale_shopeyin_resume.pdf";
const Header = () => {
  return (
    <>
      <ul className="header-links">
        <li>
          <Link to="/">Olawale Shopeyin</Link>
        </li>
        <li>
          <Link
            to="https://github.com/jefsamo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => (window.location = "mailto:shopeyinwale@gmail.com")}
          >
            mailto:shopeyinwale@gmail.com
          </Link>
        </li>
        <li>
          <Link
            to="https://twitter.com/wizypro5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
        </li>
        <li>
          <Link
            to={CV}
            download="Download cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read.cv
          </Link>
        </li>
        <li>
          <Link
            to="https://linkedin.com/in/wale-shopeyin-50753019b"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </li>
      </ul>
      <ul className="mobile-links">
        <li>
          <Link
            to="https://linkedin.com/in/wale-shopeyin-50753019b"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            to={CV}
            download="Download cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read.cv
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;

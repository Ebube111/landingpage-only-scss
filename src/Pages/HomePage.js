import React from "react";
import {
  faFacebook,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Aloha, i am <span className="font-mono">EBUBE</span>
        </h1>

        <p className="h-sub-text text-4xl text-pink-900 myName animate-pulse">
          Slim_dev
        </p>
        <footer className="icons footer">
          <Link className="icon-holder" to="/">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link className="icon-holder" to="/">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link className="icon-holder" to="/">
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </Link>
        </footer>
      </header>
    </div>
  );
};

export default HomePage;

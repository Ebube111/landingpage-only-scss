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
          Hi, i am<span>Lorem Ipsum</span>
        </h1>

        <p className="h-sub-text">
          Lorem
          ijkfjlkkdf;lfd'cmc,mc,mcccjhsfdjhkfsdjhfkfjkfdjkfdjfdkjdfkfdjfdkj;dfldfnfdmgfgjkmnlfk,g;,gfgf.gf
        </p>
        <div className="icons">
          <Link className="icon-holder" to="/">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link className="icon-holder" to="/">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link className="icon-holder" to="/">
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HomePage;

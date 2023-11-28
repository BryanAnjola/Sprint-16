import "../Footer/Footer.css";
import React from "react";
import gitHubPic from "../../images/github.svg";
import LnLogo from "../../images/LnLogo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__left-description">
          © 2023 Supersite, Powered by News API
        </p>
      </div>
      <div className="footer__right">
        <NavLink to="/" className="footer__link">
          Home
        </NavLink>
        <a
          className="footer__right-tripleten"
          href="https://tripleten.com/"
          target="_blank"
          rel="noreferrer"
        >
          TripleTen
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <img
            className="footer__right-git"
            src={gitHubPic}
            alt="gitHub logo"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/bryan-anjola-68bb23249/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer__right-ln" src={LnLogo} alt="Ln logo"></img>
        </a>
      </div>
    </footer>
  );
};
export default Footer;

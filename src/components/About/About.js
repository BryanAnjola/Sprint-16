import "../About/About.css";
import React from "react";
import authorPic from "../../images/authorPic.svg";

const About = () => {
  return (
    <section className="about">
      <div className="about__left">
        <img className="about__left-picture" src={authorPic} alt="author pic" />
      </div>
      <div className="about__right">
        <h3 className="about__right-title">About section</h3>
        <p className="about__right-subtitle"></p>
      </div>
    </section>
  );
};

export default About;

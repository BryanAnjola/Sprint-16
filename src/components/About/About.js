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
        <h3 className="about__right-title">About the Author</h3>
        <p className="about__right-subtitle">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with Practicum, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
};

export default About;

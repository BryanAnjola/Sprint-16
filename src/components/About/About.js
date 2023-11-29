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
        <h3 className="about__right-title">About the Author, Bryan Anjola</h3>
        <p className="about__right-subtitle">
          I am Bryan Anjola, a full-stack software engineer currently residing
          in Salt Lake City, Utah. My professional journey unfolds within the
          aerospace industry as I strive to carve a path towards a fulfilling
          career in software engineering, be it within the same industry or
          venturing into new fields. Proficient with languages such as, HTML,
          CSS, Java and intermediate with a few others, I am dedicated to
          advancing my knowledge in every way possible, leveraging any
          experience that comes my way. Triple Ten has played a pivotal role in
          facilitating my growth, providing an exceptional curriculum and
          invaluable assistance from their remarkable tutors. The program has
          been instrumental in equipping me with the best knowledge to navigate
          my career path.
        </p>
      </div>
    </section>
  );
};

export default About;

import { SiLinkedin, SiGithub } from "react-icons/si";
import { HashLink as Link } from "react-router-hash-link";
import aboutData from "../data/about-data";
import React, { Fragment } from "react";

function About() {
  return (
    <section className="about" id="about">
      <h2>About Evan</h2>
      {aboutData.map((detail, i) => {
        return (
          <React.Fragment key={i}>
            <div className="image-frame">
              <img src={detail.portraitImage} alt="portrait of Evan" />
            </div>
            <article className="about-paragraphs">
              {detail.paragraphs.map((paragraph, i) => {
                return (
                  <p key={i} className="about-paragraph">
                    {paragraph}
                  </p>
                );
              })}
            </article>
            <div className="skill-tools-wrap">
              <ul className="about-skill-list">
                <h2>Technical Skills</h2>
                {detail.technicalSkills.map((skill, i) => {
                  return <li key={i}>{skill}</li>;
                })}
              </ul>
              <ul className="about-tools-list">
                <h2>Technical Tools</h2>
                {detail.technicalTools.map((tool, i) => {
                  return <li key={i}>{tool}</li>;
                })}
              </ul>
            </div>
          </React.Fragment>
        );
      })}
      <div className="social-media-icons">
        <a
          className="social-media-icon"
          href="https://www.linkedin.com/in/evanwliao/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SiLinkedin />
        </a>
        <a
          className="social-media-icon"
          href="https://github.com/eliao13"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SiGithub />
        </a>
      </div>

      <Link smooth to="#projects" className="cta-buttons cta-projects">
        Check Out My Projects
      </Link>
    </section>
  );
}
export default About;

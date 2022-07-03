import { HashLink as Link } from "react-router-hash-link";
import aboutData from '../data/about-data';

function About() {
  return (
    <section className="about" id="about">
      <h2>About Evan</h2>
      {aboutData.map((detail, i) => {
        return (
          <>
            <img src={detail.portraitImage} alt='portrait of Evan' />
            {detail.paragraphs.map((paragraph, i) => {
              return (
                <p className="about-paragraph">{paragraph}</p>
              )
            })}
            <ul className="about-skill-list">
              <h3>Technical Skills</h3>
              {detail.technicalSkills.map((skill, i) => {
                return (
                  <li>{skill}</li>
                )
              })}</ul>
            <ul className="about-tools-list">
              <h3>Technical Tools</h3>
              {detail.technicalTools.map((tool, i) => {
                return (
                  <li>{tool}</li>
                )
              })}</ul>
          </>
        )
      })}
      <Link smooth to='#projects' className="cta-buttons">Check Out My Projects</Link>
    </section>
  )
}
export default About
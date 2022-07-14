import { useState } from "react";
import Skills from "./Skills";
import ProjectModal from "./ProjectModal";
import React, { Fragment } from "react";

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <article className="card">
      <img
        className="image-frame"
        src={project.sampleImage}
        alt={`screen shot of ${project.title}`}
      />

      <h3>{project.title}</h3>

      <ul className="project-card-skill-list">
        {project.singleProject.map((singleProjectDetail, i) => {
          return (
            <React.Fragment key={i}>
              <Skills singleProjectDetail={singleProjectDetail} key={i} />

              <ProjectModal
                handleClose={handleClose}
                handleOpen={handleOpen}
                open={open}
                singleProjectDetail={singleProjectDetail}
              />
            </React.Fragment>
          );
        })}
      </ul>

      <p className="project-card-short-summary">{project.shortSummary}</p>

      <div className="project-card-link-container">
        <a className="project-links" href={project.link}>
          Live Site
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </a>

        <button className="learn-more-btn" onClick={handleOpen}>
          Learn More
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </button>
      </div>
    </article>
  );
}
export default ProjectCard;

import projectsData from "../data/projects-data";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

function Projects() {

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-cards">
        {projectsData.map((project, i) => {
          return (<ProjectCard key={i}
            title={project.title}
            shortSummary={project.shortSummary}
            image={project.sampleImage}
            link={project.link}
            singleProject={project.singleProject}
          />)
        })}
      </div>

    </section>
  );
}
export default Projects
import projectsData from "../data/projects-data";
import ProjectCard from "./ProjectCard";
import { HashLink as Link } from "react-router-hash-link";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="cards-container">
        <div className="project-cards">
          {projectsData.map((project, i) => {
            return <ProjectCard key={i} project={project} />;
          })}
        </div>
      </div>

      <Link smooth to="#contact" className="cta-buttons cta-contact">
        Connect With Me!
      </Link>
    </section>
  );
}
export default Projects;

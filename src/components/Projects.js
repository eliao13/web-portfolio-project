import projectsData from "../data/projects-data";
import ProjectCard from "./ProjectCard";

function Projects() {

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-cards">
        {projectsData.map((project, i) => {
          return (<ProjectCard key={i}
            project={project}
          />)
        })}
      </div>

    </section>
  );
}
export default Projects
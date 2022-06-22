import projectsData from "../data/projects-data";
import ProjectCard from "./ProjectCard";

function Projects() {

  return (
    <section className="projects" id="projects">
      <h1>My Projects</h1>

      <div className="project-cards">
        {projectsData.map((project, i) => {
          return <ProjectCard key={i}
                              title={project.title}
                              description={project.description}
                              image={project.image}
                              link={project.link} />
        })}
      </div>
    </section>
  );
}
export default Projects
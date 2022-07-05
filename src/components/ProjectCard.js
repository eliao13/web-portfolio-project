import { useState } from "react";
import Skills from "./Skills";
import ProjectModal from "./ProjectModal";


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
      <img src={project.sampleImage} alt={`screen shot of ${project.title}`} />

      <h3>{project.title}</h3>

      <ul>
        {project.singleProject.map((singleProjectDetail, i) => {
          return (
            <>
              <Skills singleProjectDetail={singleProjectDetail}
                key={i}
              />

              <ProjectModal
                handleClose={handleClose}
                handleOpen={handleOpen}
                open={open}
                singleProjectDetail={singleProjectDetail}
              />
            </>
          )
        })}
      </ul>

      <p>{project.shortSummary}</p>

      <a className="project-card-links" href={project.link}>Live Site</a>

      <button onClick={handleOpen}>Learn More</button>

    </article>
  )
}
export default ProjectCard
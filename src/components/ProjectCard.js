import Skills from "./Skills";

function ProjectCard({ title, shortSummary, image, link, singleProject }) {

  return (
    <article className="card">
      <img src={image} alt={`screen shot of ${title}`} />

      <h3>{title}</h3>

      <ul>
        {singleProject.map((detail, i) => {
          return (
            <Skills detail={detail}
              key={i}
            />
          )
        })}
      </ul>

      <p>{shortSummary}</p>

      <a className="project-card-links" href={link}>Live Site</a>
    </article>
  )
}
export default ProjectCard
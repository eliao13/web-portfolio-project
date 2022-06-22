function ProjectCard({title, description, image, link}) {
  return (
    <div className="projectCard">
        <img src={image} alt={`screen shot of ${title}`} />
        
        <h2>{title}</h2>

        <p>{description}</p>

        <a className="project-card-links" href={link}>Live Site</a>

    </div>
  )
}
export default ProjectCard
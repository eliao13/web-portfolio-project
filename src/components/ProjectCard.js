import Skills from "./Skills";

function ProjectCard({className, title, shortSummary, image, link, singleProject}) {

  return (
    <div className={className}>
        <img src={image} alt={`screen shot of ${title}`} />
        
        <h2>{title}</h2>

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
    </div>
  )
}
export default ProjectCard
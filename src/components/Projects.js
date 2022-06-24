import Slider from "react-slick";
import projectsData from "../data/projects-data";
import ProjectCard from "./ProjectCard";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

function Projects() {


  // Card Carousel - https://react-slick.neostack.com/docs/example/responsive
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    focusOnSelect: true,
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,

    // changing image index when clicking either arrow to be the previous or next index
    beforeChange: (current, next) => setImageIndex(next),

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="projects" id="projects">
      <h1>My Projects</h1>

      <Slider {...settings}>
        {projectsData.map((project, i) => {
          return (<ProjectCard key={i}
            className={i === imageIndex ? 'slide activeSlide' : 'slide'}
            title={project.title}
            shortSummary={project.shortSummary}
            image={project.sampleImage}
            link={project.link}
            singleProject={project.singleProject}
          />)
        })}
      </Slider>
    </section>
  );
}
export default Projects
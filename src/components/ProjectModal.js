import { useState } from "react";
import {
  Modal,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import Skills from "./Skills";
import Tools from "./Tools";

function ProjectModal({ handleClose, open, singleProjectDetail }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "90%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "1rem",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
  };

  // Expands one accordion, closes other accordions
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function handleCloseModal() {
    setExpanded(false);
  }

  return (
    <>
      <Modal
        keepMounted
        open={open}
        onClose={(event) => {
          handleClose();
          handleCloseModal();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className="modal-title">{singleProjectDetail.title}</h2>
          <IconButton className="modal-close-btn" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <section className="project-info">
            <img
              className="project-screenshot image-frame"
              src={singleProjectDetail.responsiveSampleImage}
              alt={`Sample screenshot of ${singleProjectDetail.title}`}
            />
            <section className="modal-details">
              <h3>Skills</h3>
              <ul className="project-card-skill-list">
                <Skills singleProjectDetail={singleProjectDetail} />
              </ul>
              <h3>Tools</h3>
              <ul className="project-card-skill-list">
                <Tools singleProjectDetail={singleProjectDetail} />
              </ul>
              <h3>Timeline</h3>
              <p>{singleProjectDetail.timeline}</p>
              <h3>Team</h3>
              <p>{singleProjectDetail.team}</p>
              <h3>Role</h3>
              <p>{singleProjectDetail.role}</p>
              <div className="project-card-link-container">
                <a
                  className="project-links"
                  href={singleProjectDetail.liveSiteLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live Site
                  <svg viewBox="0 0 70 36">
                    <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                  </svg>
                </a>
                <a
                  className="project-links"
                  href={singleProjectDetail.githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                  <svg viewBox="0 0 70 36">
                    <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                  </svg>
                </a>
              </div>
            </section>
          </section>
          <section className="project-accordion-group">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3>Overview</h3>
              </AccordionSummary>
              <AccordionDetails>
                <p>{singleProjectDetail.overview}</p>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3>Development</h3>
              </AccordionSummary>
              <AccordionDetails>
                {singleProjectDetail.development.map((paragraph, i) => {
                  return (
                    <article key={i}>
                      <h3>{paragraph.title}</h3>
                      <p>{paragraph.content}</p>
                      {paragraph.screenshot !== undefined &&
                        paragraph.screenshot !== "" && (
                          <img
                            src={paragraph.screenshot}
                            alt={`Screenshot or video of ${singleProjectDetail.title}'s ${paragraph.title}`}
                            loading="lazy"
                          />
                        )}
                    </article>
                  );
                })}
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3>Design</h3>
              </AccordionSummary>
              <AccordionDetails className="design-screenshots">
                {singleProjectDetail.design.map((screenshot, i) => {
                  return (
                    <img
                      key={i}
                      src={screenshot.screenshot}
                      alt={screenshot.title}
                    />
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </section>
        </Box>
      </Modal>
    </>
  );
}

export default ProjectModal;

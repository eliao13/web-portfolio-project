import { Modal, Box, Accordion, AccordionSummary, AccordionDetails, IconButton } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import Skills from "./Skills";
import Tools from "./Tools";

function ProjectModal({ handleClose, open, singleProjectDetail }) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2 className="modal-title">{singleProjectDetail.title}</h2>
                    <IconButton onClick={handleClose}><CloseIcon /></IconButton>
                    <section className="modal-details">
                        <img src={singleProjectDetail.responsiveSampleImage} alt={`Responsive sample screenshot of ${singleProjectDetail.title}`} />
                        <h3>Skills</h3>
                        <ul><Skills singleProjectDetail={singleProjectDetail} /></ul>
                        <h3>Tools</h3>
                        <ul><Tools singleProjectDetail={singleProjectDetail} /></ul>
                        <h3>Timeline</h3>
                        <p>{singleProjectDetail.timeline}</p>
                        <h3>Team</h3>
                        <p>{singleProjectDetail.team}</p>
                        <h3>Role</h3>
                        <p>{singleProjectDetail.role}</p>
                        <a className="project-links" href={singleProjectDetail.liveSiteLink}>
                            Live Site
                            <svg viewBox="0 0 70 36">
                                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                            </svg>
                        </a>
                        <a className="project-links" href={singleProjectDetail.githubLink}>
                            GitHub
                            <svg viewBox="0 0 70 36">
                                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                            </svg>
                        </a>
                        <Accordion>
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

                        <Accordion>
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
                                        <article>
                                            <h3>{paragraph.title}</h3>
                                            <p>{paragraph.content}</p>
                                            {console.log(paragraph.screenshot)}
                                            {paragraph.screenshot !== undefined && <img src={paragraph.screenshot} alt={`Screenshot or video of ${singleProjectDetail.title}'s ${paragraph.title}`} />}
                                        </article>
                                    )
                                })}
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <h3>Design</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p>{singleProjectDetail.design}</p>
                            </AccordionDetails>
                        </Accordion>
                    </section>
                </Box>
            </Modal>
        </>
    )
}

export default ProjectModal
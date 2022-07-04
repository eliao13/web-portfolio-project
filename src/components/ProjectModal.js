import { Modal, Box, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2 className="modal-title">{singleProjectDetail.title}</h2>
                    <section className="modal-details">
                        <img src={singleProjectDetail.responsiveSampleImage} alt={`Responsive sample image of ${singleProjectDetail.title}`} />
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
                        <a href={singleProjectDetail.liveSiteLink}>Live Site Link</a>
                        <a href={singleProjectDetail.githubLink}>GitHub Link</a>
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
                                            <h4>{paragraph.title}</h4>
                                            <p>{paragraph.content}</p>
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
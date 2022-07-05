import { SiLinkedin, SiGithub } from 'react-icons/si';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Like what you have seen so far? <br />I would love to be in touch with you!</h2>
      <div className="social-media-icons">
        <a className='social-media-icon' href="https://www.linkedin.com/in/evanwliao/"><SiLinkedin /></a>
        <a className='social-media-icon' href="https://github.com/eliao13"><SiGithub /></a>
      </div>
    </section>
  )
}
export default Contact
import { HashLink as Link } from "react-router-hash-link";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <section className="about" id="about">
      <Fade left big cascade duration={1000}>
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ipsa. Error dolor, quas nobis perspiciatis veritatis tempore mollitia quo alias odit fuga soluta id optio nulla vitae cum corrupti. Impedit.</p>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi officiis ducimus, illum rerum illo asperiores deleniti! Vero, laudantium, eveniet possimus, voluptates soluta quaerat saepe hic culpa illum eaque sapiente earum?</p>
      
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi officiis ducimus, illum rerum illo asperiores deleniti! Vero, laudantium, eveniet possimus, voluptates soluta quaerat saepe hic culpa illum eaque sapiente earum?</p>
      
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi officiis ducimus, illum rerum illo asperiores deleniti! Vero, laudantium, eveniet possimus, voluptates soluta quaerat saepe hic culpa illum eaque sapiente earum?</p>
      
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi officiis ducimus, illum rerum illo asperiores deleniti! Vero, laudantium, eveniet possimus, voluptates soluta quaerat saepe hic culpa illum eaque sapiente earum?</p>
      <Link smooth to='#top'>Top of Page</Link>
      </Fade>
    </section>
  )
}
export default About
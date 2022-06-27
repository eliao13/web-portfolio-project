import { HashLink as Link } from "react-router-hash-link";

function Herobanner() {
  return (
    <section>
      <h1>
        Hello, I'm Evan Liao.<br />Welcome to my page.
      </h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quos consequuntur. Sint distinctio fugiat minima eveniet libero, odit, ipsa id unde ex vero asperiores, pariatur sed dolore eaque quasi hic.
      </h2>
      <Link smooth to='#about' className="about-link">More About Me</Link>
    </section>
  )
}
export default Herobanner
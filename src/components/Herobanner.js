import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";

function Herobanner() {

  // Current text displayed on the page
  const [introHeader, setIntroHeader] = useState("");

  // Final text we want to see typed out
  const [fullIntroHeader, setFullIntroHeader] = useState("Hello, I'm Evan Liao.\nWelcome to my page.");

  // Current index of the displayed text
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullIntroHeader.length) {
      setTimeout(() => {
        setIntroHeader(introHeader + fullIntroHeader[index]);
        setIndex(index + 1);
      }, 60)
    }
  }, [index]);

  return (
    <section className="hero-banner">
      <h1>{introHeader}</h1>

      <h2>
        I'm a web-developer who is experienced in React and SASS. I also love to build projects.
      </h2>
      <Link smooth to='#about' className="about-link">More About Me</Link>
    </section>
  )
}
export default Herobanner;
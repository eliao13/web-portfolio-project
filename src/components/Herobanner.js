import { HashLink as Link } from "react-router-hash-link";
import {useState, useEffect} from "react";

function Herobanner() {

  // Current text displayed on the page
  const [text, setText] = useState("");

  // Final text we want to see typed out
  const [fullText, setFullText] = useState("Hello, I'm Evan Liao. Welcome to my page."); 

  // Current index of the displayed text
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50)
    }
  }, [index]);

  return (
    <section className="hero-banner">
      <h1>{text}</h1>

      <h2>
        I'm a web-developer who is experienced in React and SASS. I also love to build project.
      </h2>
      <Link smooth to='#about' className="about-link">More About Me</Link>
    </section>
  )
}
export default Herobanner;
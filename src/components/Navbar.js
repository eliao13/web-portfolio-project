import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";

function Navbar() {

  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  const [visible, setVisible] = useState(true);

  function handleScroll() {

    // Find current scroll position 
    const currentScrollPosition = window.pageYOffset;

    // Set state based on location info
    setVisible((prevScrollPosition > currentScrollPosition && prevScrollPosition - currentScrollPosition > 70) || currentScrollPosition < 10);

    setPrevScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPosition, visible, handleScroll]);

  return (
    <div className="nav-bar">
      <ul>
        <li>
          <Link smooth to='/' className="home-link">Home</Link>
        </li>
        <li>
          <Link smooth to='#about' className="about-link">About</Link>
        </li>
        <li>
          <Link smooth to='#projects' className="projects-link">Projects</Link>
        </li>
        <li>
          <Link smooth to='#contact' className="contact-link">Contact</Link>
        </li>
      </ul>
    </div>
  )
}
export default Navbar
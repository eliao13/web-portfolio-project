import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { debounce } from '../utilities/helpers';

function Navbar() {

  // show and hide nav bar when scrolling
  // https://www.devtwins.com/blog/sticky-navbar-hides-scroll
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    // Find current scroll position 
    const currentScrollPosition = window.pageYOffset;

    // Set state based on location info
    setVisible((prevScrollPosition > currentScrollPosition && prevScrollPosition - currentScrollPosition > 70) || currentScrollPosition < 10);

    setPrevScrollPosition(currentScrollPosition);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPosition, visible, handleScroll]);

  // const mediaMatch = window.matchMedia('(min-width: 768px)');

  // console.log(mediaMatch.matches);

  const minStyles = {
    style: {
      bottom: visible ? '0' : '-36px',
      color: 'red',
    }
  }

  const maxStyles = {
    style: {
      bottom: 'auto',
      left: visible ? '0' : '-36px',
    }
  }

  const style = function () {
    if (window.innerWidth < 768) {
      return minStyles;
      console.log(minStyles.style);
    } else {
      return maxStyles;
      console.log(maxStyles.style);
    }
  }

  // const style = {
  //   '@media screen and (maxWidth: 768px)': {
  //     bottom: visible ? '0' : '-36px',
  //   },

  //   '@media screen and (minWidth: 768px)': {
  //     bottom: 'auto',
  //     left: visible ? '0' : '-36px',
  //   }
  // }



  return (
    <div className="nav-bar" style={style.style}>
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
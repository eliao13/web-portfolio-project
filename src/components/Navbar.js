import {Link} from "react-router-dom";
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to={About} />
        </li>
        <li>
          <Link to={Projects} />
        </li>
        <li>
          <Link to={Contact} />
        </li>
      </ul>
    </div>
  )
}
export default Navbar
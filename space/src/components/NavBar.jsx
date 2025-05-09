import { Link } from "react-router-dom";
import "../css/NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brank, link">
        <Link to="/" className="nav-link">
          Home Page
        </Link>
      </div>
      <div className="navbar-brand, link">
        <Link to="/picture" className="nav-link">
          Picture Of The Day
        </Link>
      </div>
      <div className="navbar-brand, link">
        <Link to="/donki" className="nav-link">
          DONKICME
        </Link>
      </div>
      <div className="navbar-brand, link">
        <Link to="/rover" className="nav-link">
          Rover
        </Link>
      </div>

      <div className="navbar-brand, link">
        <Link to="/exoplanets" className="nav-link">
          Exoplanets
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

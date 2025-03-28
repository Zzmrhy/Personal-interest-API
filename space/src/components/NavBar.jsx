import { Link } from "react-router-dom";
import "../css/NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand, link">
        <Link to="/" className="nav-link">
          Picture Of The Day
        </Link>
      </div>
      <div className="navbar-brand, link">
        <Link to="/donki" className="nav-link">
          DONKI
        </Link>
      </div>
      <div className="navbar-brand, link">
        <Link to="/rover" className="nav-link">
          Rover
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

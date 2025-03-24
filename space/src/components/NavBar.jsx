import { Link } from "react-router-dom";
import "../css/NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="nav-link">
          Picture Of The Day
        </Link>
      </div>
      <div className="navbar-brand">
        <Link to="/donki" className="nav-link">
          DONKI
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

import { Link } from "react-router-dom";
import "../css/NavBar.css";
function Footer() {
  return (
    <nav className="navbar">
      <div className="navbar-brank, link">
        <Link to="/">Astronomy</Link>
      </div>
      <div className="navbar-brank, link">
        <Link to="/quantum">Quantum Physics</Link>
      </div>
    </nav>
  );
}

export default Footer;

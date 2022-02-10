import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
      <div className="navbar">
        <ul className="nav">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/painting">Painting</Link>
          </li>

          <li className="item">
            <Link to="/sculpture">Sculpture</Link>
          </li>

          <li className="item">
            <Link to="/photography">Photography</Link>
          </li>
        </ul>

        <div className="logo">
          <i className="fa fa-users fa-2x" aria-hidden="true"></i>
        </div>
      </div>
  );
};
export default Navbar;

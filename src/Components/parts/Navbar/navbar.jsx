import { Link } from "react-router-dom";
import "./navbar.css";

 const Navbar=()=>{

  return(
    <div class="navbar">
        <ul class="nav">
          <li class="item">
          <Link to="/">Home</Link>
          </li>
          <li class="item">
          <Link to="/painting">Painting</Link>
          </li>

          <li class="item">
          <Link to="/sculpture">Sculpture</Link>
          </li>

          <li class="item">
          <Link to="/photography">Photography</Link>
          </li>
        </ul>

        <div class="logo">
          <img src="#"/>
        </div>
      </div>
  )
 }
export default Navbar;

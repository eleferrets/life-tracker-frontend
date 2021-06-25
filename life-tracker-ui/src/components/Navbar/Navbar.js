import { Link, NavLink } from "react-router-dom";
import FilterInput from "../FilterInput/FilterInput";
import codepath from "../../assets/codepath.svg";
import "./Navbar.css";

export default function Navbar(filterInputValue, handleOnInputChange) {
  return (
    <nav className="Navbar">
      <Link className="logo" to="/">
        <img src={codepath} alt="logo" />
      </Link>
      {/* <div className="search">
        <FilterInput
          filterInputValue={filterInputValue}
          handleOnInputChange={handleOnInputChange}
        />
      </div> */}

      <div className="content">
        {/* <div className="space"> </div> */}
        <div className="links">
          <ul>
          <li>
          <NavLink to="/activity">Activity</NavLink>
        </li>
        <li>
          <NavLink to="/exercise">Exercise</NavLink>
        </li>
        <li>
          <NavLink to="/nutrition">Nutrition</NavLink>
        </li>
        <li>
          <NavLink to="/sleep">Sleep</NavLink>
        </li>
          </ul>
          
          </div>
  
      </div>
      {/* If we are logged in, render the logout, otherwise use the normal buttons */}
      {/* <div className="btns-normal">
      <Link to="/register">
            <button className="btn primary">Register</button>
          </Link>
          <Link to="/login">
            <button className="btn secondary">Login</button>
          </Link>
          </div>
          <div className="btn-logout"></div> */}
    </nav>
  );
}

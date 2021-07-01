import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard({ user }) {
  return (
    <div className="Dashboard">
      <h1>Welcome <span className="blues">{user.email}</span></h1>
      <div className="Content">
        <h2>Activity Overview</h2>
        <div className="btns">
          <Link to="/activity">
            <button className="btn primary">Activity</button>
          </Link>
          <Link to="/exercise">
            <button className="btn primary">Exercise</button>
          </Link>
          <Link to="/nutrition">
            <button className="btn primary">Nutrition</button>
          </Link>
          <Link to="/sleep">
            <button className="btn primary">Sleep</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard({ user }) {
  return (
    <div className="Dashboard">
      <h1>Welcome <span className="blues">{user.email}</span></h1>
      <div className="Content">
      <div className="btns">
        <h2>Activity Overview</h2>
       
          {/* <Link to="/activity">
            <button className="btn primary">Activity</button>
          </Link> */}
          <Link to="/exercise">
            <button className="btn primary">Add Exercise</button>
          </Link>
          <Link to="/nutrition">
            <button className="btn primary">Record Nutrition</button>
          </Link>
          <Link to="/sleep">
            <button className="btn primary">Add Sleep</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

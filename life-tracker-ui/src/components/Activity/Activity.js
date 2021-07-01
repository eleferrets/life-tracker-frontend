import { Link } from "react-router-dom";
import BannerA from "../Banner/BannerA";
import Message from "../Message/Message";
import ActivityDetails from "../ActivityDetails/ActivityDetails";
import Dashboard from "../Dashboard/Dashboard";
import "./Activity.css";

export default function Activity({ user }) {
  const isAuthenticated = Boolean(user?.email);
  const display = isAuthenticated ? (
    <>
      {/* <BannerA /> */}
      <div className="content">
        {/* <Link to="/newactivity">
          <button className="btn primary">Record Activity</button>
      </Link>
      <ActivityDetails user={user}/> */}
        <Dashboard user={user} />
      </div>
    </>
  ) : (
    <>
      <Message />
    </>
  );
  return <div className="Activity">{display}</div>;
}

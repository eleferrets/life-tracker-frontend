import { Link } from "react-router-dom";
import BannerA from "../Banner/BannerE";
import Message from "../Message/Message";
import ActivityDetails from "../ActivityDetails/ActivityDetails";

export default function Activity({user}) {
  const isAuthenticated = Boolean(user?.email);
  const display = isAuthenticated ? (
    <>
      <BannerA />
      <div className="content">
      <Link to="/newactivity">
          <button className="btn primary">Record Activity</button>
      </Link>
      <ActivityDetails user={user}/>
      </div>
    </>
    ) : (
    <>
      <Message />
    </>
  );
  return (
    <div className="Activity">
      {display}
    </div>
  );
}

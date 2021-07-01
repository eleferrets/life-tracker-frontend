import { Link } from "react-router-dom";
import BannerS from "../Banner/BannerS";
import Message from "../Message/Message";
import SleepDetails from "../SleepDetails/SleepDetails";
import "../Exercise/Exercise.css"

export default function Sleep({user}) {
  const isAuthenticated = Boolean(user?.email);
  const display = isAuthenticated ? (
    <>
      <BannerS />
      <div className="content">
      <Link to="/newsleep">
          <button className="btn primary sleep">Record Sleep</button>
      </Link>
      <SleepDetails user={user}/>
      </div>
    </>
    ) : (
    <>
      <Message />
    </>
  );
  return (
    <div className="Sleep">
      {display}
    </div>
  );
}

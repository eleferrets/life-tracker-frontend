import { Link } from "react-router-dom";
import BannerE from "../Banner/BannerE";
import Message from "../Message/Message";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";

export default function Exercise({user}) {
  const isAuthenticated = Boolean(user?.email);
  const display = isAuthenticated ? (
    <>
      <BannerE />
      <div className="content">
      <Link to="/newexercise">
          <button className="btn primary">Create New Exercise</button>
      </Link>
      <ExerciseDetails user={user}/>
      </div>
    </>
    ) : (
    <>
      <Message />
    </>
  );
  return (
    <div className="Exercise">
      {display}
    </div>
  );
}

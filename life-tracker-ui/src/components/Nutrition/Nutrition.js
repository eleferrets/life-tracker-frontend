import { Link } from "react-router-dom";
import BannerN from "../Banner/BannerN";
import Message from "../Message/Message";
import NutritionDetails from "../NutritionDetails/NutritionDetails";
// import "./Exercise.css";

export default function Nutrition({user}) {
  const isAuthenticated = Boolean(user?.email);
  const display = isAuthenticated ? (
    <>
      <BannerN />
      <div className="content">
      <Link to="/newnutrition">
          <button className="btn primary">Record Nutrition</button>
      </Link>
      <NutritionDetails user={user}/>
      </div>
    </>
    ) : (
    <>
      <Message />
    </>
  );
  return (
    <div className="Nutrition">
      {display}
    </div>
  );
}

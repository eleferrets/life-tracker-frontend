import { Link } from "react-router-dom";
import life from "../../assets/life.jpg";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="Intro">
      <div className="Content">
        <h1>LifeTracker</h1>
        <h2>Helping you towards a better you one step at a time</h2>
      </div>

      <div className="image life">
        <img src={life} alt="Life"></img>
      </div>
    </div>
  );
}

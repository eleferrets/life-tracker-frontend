import { Link } from "react-router-dom";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="Intro">
      <h2>Hello There!</h2>
      <h2>Find Your Groceries Here!</h2>
      <p>
        We have all kinds of groceries! Click on any of the items to learn more
        about each of them!
      </p>
    </div>
  );
}

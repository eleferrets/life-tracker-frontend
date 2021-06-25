import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero(name) {
  return (
    <div className="Hero">
      <h2>${name}</h2>
    </div>
  );
}

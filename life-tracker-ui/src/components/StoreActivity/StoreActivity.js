import { formatDate, formatAmount } from "../../utils/format";
import "./StoreActivity.css";
import { Link } from "react-router-dom";
import fitness from "../../assets/fitness.jpg";
import activity from "../../assets/activity.png";
import exercise from "../../assets/exercise.png";
import nutrition from "../../assets/nutrition.jpg";
import sleep from "../../assets/sleep.png";

export default function StoreActivity() {
  return (
    <div className="StoreActivity">
      <h2>Resources</h2>
      <div className="Categories">
        <div className="zoom">
          <h3>Activity</h3>
          <Link to="/activity">
            <div className="image">
              <button id="close-image">
                <img src={activity} alt="Activity"></img>
              </button>
            </div>
          </Link>
        </div>
        <div className="zoom">
          <h3>Exercise</h3>
          <Link to="/exercise">
            <div className="image">
              <button id="close-image">
                <img src={exercise} alt="Exercise"></img>
              </button>
            </div>
          </Link>
        </div>
        <div className="zoom">
          <h3>Nutrition</h3>
          <Link to="/nutrition">
            <div className="image">
              <button id="close-image">
                <img src={nutrition} alt="Nutrition"></img>
              </button>
            </div>
          </Link>
        </div>
        <div className="zoom">
          <h3>Sleep</h3>
          <Link to="/sleep">
            <div className="image">
              <button id="close-image">
                <img src={sleep} alt="Sleep"></img>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

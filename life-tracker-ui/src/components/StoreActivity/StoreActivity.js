import { formatDate, formatAmount } from "../../utils/format";
import "./StoreActivity.css";
import { Link } from "react-router-dom";
import fitness from "../../assets/fitness.jpg"

export default function StoreActivity({ products = [] }) {
  return (
    <div className="StoreActivity">
       <h2>Resources</h2>
       <div className="Categories">
       <div>
         <h3>Activity</h3>
       <Link to="/activity">
       <div className="image">
         <button id="close-image"><img src={fitness} alt="Fitness"></img></button></div>
       </Link>
       </div>
       <div>
       <h3>Exercise</h3>
       <Link to="/exercise">
       <div className="image"><button id="close-image"><img src={fitness} alt="Fitness"></img></button></div>
       </Link>
       </div>
       <div>
       <h3>Nutrition</h3>
       <Link to="/nutrition">
       <div className="image"><button id="close-image"><img src={fitness} alt="Fitness"></img></button></div>
       </Link>
       </div>
       <div>
       <h3>Sleep</h3>
       <Link to="/sleep">
       <div className="image"><button id="close-image"><img src={fitness} alt="Fitness"></img></button></div>
       </Link>
       </div>
       </div>
     
    </div>
  );
}; 


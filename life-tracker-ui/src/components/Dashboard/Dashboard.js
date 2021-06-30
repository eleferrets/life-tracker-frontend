import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard({user}) {
  return (
    <div className="Dashboard">
      <h1>Welcome {user.email}</h1>
      <div className="Content"><h2>Activity Overview</h2>
      <h2>Helping you towards a better you one step at a time</h2></div>
      
     
      
    </div> 
  );
}

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import "./Banner.css";
import apiClient from "../../services/apiClient";

export default function ActivityDetails({user}) {
    const [isFetching, setFetching] = useState(false);
    const [error, setError] = useState(null);
    const [activities, setActivities] = useState([]);
     // Fetch products
  useEffect(() => {
    const fetchActivities = async () => {
      setFetching(true);
      try {
        //   console.log(user)
        const {data} = await apiClient.listActivities(user)
        //console.log(data.Activities)
        setActivities(data.activities);
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchActivities();
  }, []);
  return (
    <div className="ActivityDetails">
    {   activities.map((activity) => (
    <div className="card" key={activity.id}>
        <span><p>{activity.name}</p></span>
        <span><p>{"Category: "+activity.category}</p></span>
        <span><p>{"Duration: "+activity.duration+" mins"}</p></span>
        <span><p>{"Intensity: "+activity.intensity+"/10"}</p></span>
    </div>
  ))}
    </div>
  );
}

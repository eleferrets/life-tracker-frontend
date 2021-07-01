import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import "./Banner.css";
import apiClient from "../../services/apiClient";

export default function ActivityDetails({ user }) {
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [activities, setActivities] = useState([]);
  // Fetch products
  useEffect(() => {
    const fetchActivities = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.listActivities(user);

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
      {activities.map((activity) => (
        <div className="card" key={activity.activityId}>
          <span>
            <p>{"Activity Type: " + activity.activityType}</p>
          </span>
        </div>
      ))}
    </div>
  );
}

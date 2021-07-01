import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import "./Banner.css";
import apiClient from "../../services/apiClient";

export default function SleepDetails({user}) {
    const [isFetching, setFetching] = useState(false);
    const [error, setError] = useState(null);
    const [sleeps, setSleeps] = useState([]);
     // Fetch products
  useEffect(() => {
    const fetchSleeps = async () => {
      setFetching(true);
      try {
        //   console.log(user)
        const {data} = await apiClient.listSleeps(user)
        //console.log(data.Sleeps)
        setSleeps(data.sleeps);
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchSleeps();
  }, []);
  return (
    <div className="SleepDetails">
    {   sleeps.map((sleep) => (
    <div className="card" key={sleep.sleepId}>
      {/* We get the start time date and the start time time here */}
        <span><p>{"Started: "+(sleep.startTime).substring(0, 10)+"@"+(sleep.startTime).substring(11, 16)}</p></span>
        <span><p>{"Ended: "+(sleep.endTime).substring(0, 10)+"@"+(sleep.endTime).substring(11, 16)}</p></span>
    </div>
  ))}
    </div>
  );
}

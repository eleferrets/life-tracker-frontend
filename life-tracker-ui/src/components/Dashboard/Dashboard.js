import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";

export default function Dashboard({ user }) {
  const [isFetching, setFetching] = useState(false);
  const [exercise, setExercise] = useState([]);
  const [sleep, setSleep] = useState([]);
  const [nutrition, setNutrition] = useState([]);
  const [error, setError] = useState(null);
  // Fetch exercises
  useEffect(() => {
    const fetchExercise = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.fetchExerciseMinutes(user);
        // console.log("exercise", data.minutes)
        setExercise(data.minutes[0]);
        // console.log("e",exercise)
      } catch (err) {
        setError(err);
      }
      setFetching(false);
    };
    const fetchNutrition = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.fetchNutritionCalories(user);
        // console.log("nutrition", data)
        setNutrition(data.calories[0]);
        // console.log("n",nutrition)
      } catch (err) {
        setError(err);
      }
      setFetching(false);
    };
    const fetchSleep = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.fetchLastSleep(user);
        // console.log("sleep", data)
        setSleep(data.sleepy[0]);
        // console.log("s",sleep)
      } catch (err) {
        setError(err);
      }
      setFetching(false);
    };
    fetchExercise();
    fetchNutrition();
    fetchSleep();
  }, []);
  const defaultMsg = (
    <>
      <p>Nothing yet...</p>
    </>
  );
  const Bexercise = Boolean(exercise);
  const messageE = Bexercise ? (
    <>
      <p>{"Duration: " + exercise.duration}</p>
    </>
  ) : (
    <>
      <p>Nothing yet...</p>
    </>
  );
  const Bnutrition = Boolean(nutrition);
  const messageN = Bnutrition ? (
    <>
      <p>{"Calories: " + nutrition.calories}</p>
    </>
  ) : (
    <>
      <p>Nothing yet...</p>
    </>
  );
  const Bsleep = Boolean(sleep);
  const messageS = Bsleep ? (
    <>
      <span>
        <p>{"Started: " + sleep.start_time}</p>
      </span>
      <span>
        <p>{"Ended: " + sleep.end_time}</p>
      </span>
    </>
  ) : (
    <>
      <p>Nothing yet...</p>
    </>
  );
  return (
    <div className="Dashboard">
      <h1>
        Welcome, <span className="blues">{user.username}</span>!
      </h1>
      <div className="Content">
        <div className="btns">
          <h2>Activity Overview</h2>

          {/* <Link to="/activity">
            <button className="btn primary">Activity</button>
          </Link> */}
          <Link to="/exercise">
            <button className="btn primary exercise">Add Exercise</button>
          </Link>
          <Link to="/nutrition">
            <button className="btn primary nutrition">Record Nutrition</button>
          </Link>
          <Link to="/sleep">
            <button className="btn primary sleep">Add Sleep</button>
          </Link>
        </div>
        <h2 className="black">Stats</h2>
        <div className="stats">
        
          <div className="card linor">
            <span>
              <p>Total Minutes</p>
            </span>
            <span>{messageE}</span>
          </div>
          <div className="card lintl">
            <span>
              <p>Total Calories</p>
            </span>
            <span>{messageN}</span>
          </div>
          <div className="card linpnk">
            <span>
              <p>Last entered sleep</p>
            </span>
            <span>{messageS}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

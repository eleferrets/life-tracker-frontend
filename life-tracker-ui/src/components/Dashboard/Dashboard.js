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
          setExercise(data);
          // console.log(exercise)
        } catch (err) {
          setError(err);
        }
        setFetching(false);
      };
      const fetchNutrition = async () => {
        setFetching(true);
        try {
          const { data } = await apiClient.fetchNutritionCalories(user);
          console.log("nutrition", data)
          setNutrition(data.calories);
          console.log(nutrition)
        } catch (err) {
          setError(err);
        }
        setFetching(false);
      };
      const fetchSleep = async () => {
        setFetching(true);
        try {
          const { data } = await apiClient.fetchLastSleep(user);
          console.log("sleep", data)
          setSleep(data.sleepy);
          console.log(sleep)
        } catch (err) {
          setError(err);
        }
        setFetching(false);
      };
      fetchExercise();
      fetchNutrition();
      fetchSleep();
    }, []);
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

        <div className="stats">
        {/* <div className="card" key={exercise.exerciseId}>
          <span>
            <p>{exercise.name}</p>
          </span>
          <span>
            <p>{"Category: " + exercise.category}</p>
          </span>
          <span>
            <p>{"Duration: " + exercise.duration + " mins"}</p>
          </span>
          <span>
            <p>{"Intensity: " + exercise.intensity + "/10"}</p>
          </span>
        </div> */}
        </div>
      </div>
    </div>
  );
}

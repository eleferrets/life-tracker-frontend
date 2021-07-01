import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import "./Banner.css";
import apiClient from "../../services/apiClient";

export default function ExerciseDetails({user}) {
    const [isFetching, setFetching] = useState(false);
    const [error, setError] = useState(null);
    const [exercises, setExercises] = useState([]);
     // Fetch products
  useEffect(() => {
    const fetchExercises = async () => {
      setFetching(true);
      try {
        //   console.log(user)
        const {data} = await apiClient.listExercises(user)
        //console.log(data.exercises)
        setExercises(data.exercises);
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchExercises();
  }, []);
  return (
    <div className="ExerciseDetails">
    {   exercises.map((exercise) => (
    <div className="card" key={exercise.exerciseId}>
        <span><p>{exercise.name}</p></span>
        <span><p>{"Category: "+exercise.category}</p></span>
        <span><p>{"Duration: "+exercise.duration+" mins"}</p></span>
        <span><p>{"Intensity: "+exercise.intensity+"/10"}</p></span>
    </div>
  ))}
    </div>
  );
}

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
        const {data} = await apiClient.listExercises()
        console.log(data.exercises)
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
    <div className="card" key={exercise.id}>
        <p>{exercise.name}</p>
    </div>
  ))}
    </div>
  );
}

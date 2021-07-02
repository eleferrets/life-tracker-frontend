import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import apiClient from "../../services/apiClient";

export default function NutritionDetails({ user }) {
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [nutritions, setNutritions] = useState([]);
  // Fetch nutrition
  useEffect(() => {
    const fetchNutritions = async () => {
      setFetching(true);
      try {
        const { data } = await apiClient.listNutritions(user);

        setNutritions(data.nutritions);
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchNutritions();
  }, []);
  return (
    <div className="NutritionDetails">
      {nutritions.map((nutrition) => (
        <div className="card lintl" key={nutrition.nutritionId}>
          <span>
            <img src={`${nutrition.imageUrl}`} alt="Nutrition picture"></img>
          </span>
          <span>
            <p>{nutrition.name}</p>
          </span>
          <span>
            <p>{"Category: " + nutrition.category}</p>
          </span>
          <span>
            <p>{"Quantity: " + nutrition.quantity}</p>
          </span>
          <span>
            <p>{"Calories: " + nutrition.calories}</p>
          </span>
        </div>
      ))}
    </div>
  );
}

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import "./Banner.css";
import apiClient from "../../services/apiClient";

export default function NutritionDetails({user}) {
    const [isFetching, setFetching] = useState(false);
    const [error, setError] = useState(null);
    const [nutritions, setNutritions] = useState([]);
     // Fetch products
  useEffect(() => {
    const fetchNutritions = async () => {
      setFetching(true);
      try {
        //   console.log(user)
        const {data} = await apiClient.listNutritions(user)
        //console.log(data.Nutritions)
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
    {   nutritions.map((nutrition) => (
    <div className="card" key={nutrition.id}>
        <span><p>{nutrition.name}</p></span>
        <span><p>{"Category: "+nutrition.category}</p></span>
        <span><p>{"Duration: "+nutrition.duration+" mins"}</p></span>
        <span><p>{"Intensity: "+nutrition.intensity+"/10"}</p></span>
    </div>
  ))}
    </div>
  );
}

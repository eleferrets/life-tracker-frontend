import { useState, useEffect } from "react";
import apiClient from "../../services/apiClient";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import "./App.css";
import Activity from "../Activity/Activity";
import Exercise from "../Exercise/Exercise";
import Nutrition from "../Nutrition/Nutrition";
import Sleep from "../Sleep/Sleep";
import CreateExercise from "../CreateExercise/CreateExercise";
import CreateActivity from "../CreateActivity/CreateActivity";
import CreateNutrition from "../CreateNutrition/CreateNutrition";
import CreateSleep from "../CreateSleep/CreateSleep";

export default function App() {
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [filterInputValue, setInputValue] = useState(null);
  const [user, setUser] = useState({});
  // const [appState, setAppState] = useState({});

  const handleOnInputChange = async (evt) => {
    setInputValue();
  };
  // Fetch users
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
      if (error) setError(error);
    };
    const token = localStorage.getItem("rate_my_setup_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, []);
  const handleOnLogout = async () => {
    await apiClient.logoutUser();
    setUser({});
    setError(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          filterInputValue={filterInputValue}
          handleOnInputChange={handleOnInputChange}
          user={user}
          setUser={setUser}
          handleOnLogout={handleOnLogout}
        />
        <Routes>
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route
            path="/register"
            element={<Register user={user} setUser={setUser} />}
          />
          <Route path="/" element={<Home user={user} />}></Route>
          <Route path="/activity" element={<Activity user={user} />}></Route>
          <Route path="/exercise" element={<Exercise user={user} />}></Route>
          <Route path="/nutrition" element={<Nutrition user={user} />}></Route>
          <Route path="/sleep" element={<Sleep user={user} />}></Route>
          <Route
            path="/newexercise"
            element={<CreateExercise user={user} />}
          ></Route>
          <Route path="/newsleep" element={<CreateSleep user={user} />}></Route>
          <Route
            path="/newnutrition"
            element={<CreateNutrition user={user} />}
          ></Route>
          <Route
            path="/newactivity"
            element={<CreateActivity user={user} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

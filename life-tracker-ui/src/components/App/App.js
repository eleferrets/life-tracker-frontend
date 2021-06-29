import { useState, useEffect } from "react";
import apiClient from "../../services/apiClient";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Register from "../Register/Register"
import Login from "../Login/Login"
import "./App.css";
import ProductDetail from "../ProductDetail/ProductDetail";
import AddProduct from "../AddProduct/AddProduct";
import Activity from "../Activity/Activity";
import Exercise from "../Exercise/Exercise";
import Nutrition from "../Nutrition/Nutrition";
import Sleep from "../Sleep/Sleep";
import CreateExercise from "../CreateExercise/CreateExercise";

export default function App() {
  //const [posts, setPosts] = useState([])
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [filterInputValue, setInputValue] = useState(null);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({})
// console.log("here",user)
  const [appState, setAppState] = useState({})
  const AddProduct = (newProduct) => {
    setProducts(t => [...t, newProduct])
  }
  const handleOnInputChange = async (evt) => {
    setInputValue();
  };
// const {data, error} = await apiClient.listPosts()
// if (data) setPosts(data.posts)
// if (error) setError(error)
  // Every time the site or inside the array rendered
  // It will run only once as there is nothing in the array
  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      //   try {
      //     // attaches data to res.data
      //     const res = await axios.get("http://localhost:3001/bank")
      //     const data = res.data
      //     // Optional chain operator for if statements
      //     // This is the same thing as if data, then set posts
      //     const posts = res?.data?.posts
      //   }
      //   catch(err) {
      //     console.log({err})
      //   }
      // }

      setFetching(true);
      try {
        // const transferRes = await axios.get(
        //   "http://localhost:3001/bank/transfers"
        // );
        // //const transferData = transferRes.data;
        // const transfers = transferRes?.data?.transfers;
        // setTransfers(transfers);
        // const res = await axios.get(
        //   "http://localhost:3001/store/products"
        // );
       // const transactionData = res.data;
        // const products = res?.data?.products;
        //console.log(products)
        setProducts(products);
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchProducts();
  }, []);
// Fetch users
useEffect(() => {
  const fetchUser = async () => {
  const {data, error} = await apiClient.fetchUserFromToken()
if (data) setUser(data.user)
if (error) setError(error)
  }
  const token = localStorage.getItem("rate_my_setup_token")
  if (token) {
    apiClient.setToken(token)
    fetchUser()
  }
}, [])
const handleOnLogout = async () => {
  //console.log("logged out")
  await apiClient.logoutUser()
  setUser({})
  setError(null)
}
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar filterInputValue={filterInputValue} handleOnInputChange={handleOnInputChange} user={user} setUser={setUser} handleOnLogout={handleOnLogout} />
        
        <Routes>
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/register" element={<Register user={user} setUser={setUser} />} />
          <Route path="/" element={<Home user={user} />}></Route>
          <Route path="/activity" element={<Activity user={user} />}></Route>
          <Route path="/exercise" element={<Exercise user={user} />}></Route>
          <Route path="/nutrition" element={<Nutrition user={user} />}></Route>
          <Route path="/sleep" element={<Sleep user={user} />}></Route>
          <Route path="/newexercise" element={<CreateExercise user={user} />}></Route>
          {/* <Route
            path="/products/:productId"
            element={<ProductDetail />}
          ></Route> */}
        </Routes>
        
        {/* <Link to="/"></Link> */}
      </BrowserRouter>
    </div>
  );
}

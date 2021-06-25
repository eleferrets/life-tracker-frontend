import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Register from "../Register/Register"
import Login from "../Login/Login"
import "./App.css";
import ProductDetail from "../ProductDetail/ProductDetail";
import AddProduct from "../AddProduct/AddProduct";

export default function App() {
  //const [posts, setPosts] = useState([])
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [filterInputValue, setInputValue] = useState(null);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({})


  const AddProduct = (newProduct) => {
    setProducts(t => [...t, newProduct])
  }
  const handleOnInputChange = async (evt) => {
    setInputValue();
  };

  // Every time the site or inside the array rendered
  // It will run only once as there is nothing in the array
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
        const res = await axios.get(
          "http://localhost:3001/store/products"
        );
       // const transactionData = res.data;
        const products = res?.data?.products;
        //console.log(products)
        setProducts(products);
      } catch (err) {
        setError(err);
      }

      setFetching(false);
    };
    fetchProducts();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar filterInputValue={filterInputValue} handleOnInputChange={handleOnInputChange} />
        
        <Routes>
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/register" element={<Register user={user} setUser={setUser} />} />
          <Route path="/" element={<Home products={products} />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetail />}
          ></Route>
        </Routes>
        
        {/* <Link to="/"></Link> */}
      </BrowserRouter>
    </div>
  );
}

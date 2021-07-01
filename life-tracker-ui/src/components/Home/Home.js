//import { listProducts } from "../../../../student-store-api/models/store";
import Dashboard from "../Dashboard/Dashboard";
import StoreActivity from "../StoreActivity/StoreActivity";
import Intro from "../Intro/Intro";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home({ user }) {
  const isAuthenticated = Boolean(user?.email);

  return (
    <div className="Home">
      <div className="dash">
        <Intro />
        <StoreActivity />
      </div>
    </div>
  );
}

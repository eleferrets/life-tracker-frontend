import { Link } from "react-router-dom";
import "./Message.css";

export default function Message() {
  return (
    <div className="Message">
      <h1>You must be <Link to="/login">logged in</Link> to view this.</h1>
    </div>
  );
}
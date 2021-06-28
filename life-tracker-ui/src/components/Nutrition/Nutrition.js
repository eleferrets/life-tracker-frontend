import { Link } from "react-router-dom";
import BannerN from "../Banner/BannerN";
import Message from "../Message/Message";

export default function Nutrition({user}) {
  const isAuthenticated = Boolean(user?.email);
  const display = isAuthenticated ? (
    <>
      <BannerN />
    </>
    ) : (
    <>
      <Message />
    </>
  );
  return (
    <div className="Nutrition">
      {display}
    </div>
  );
}

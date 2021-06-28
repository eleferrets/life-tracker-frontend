import { Link } from "react-router-dom";
import BannerS from "../Banner/BannerS";
import Message from "../Message/Message";

export default function Sleep({user}) {
  const isAuthenticated = Boolean(user?.email);
  const display = isAuthenticated ? (
    <>
      <BannerS />
    </>
    ) : (
    <>
      <Message />
    </>
  );
  return (
    <div className="Sleep">
      {display}
    </div>
  );
}

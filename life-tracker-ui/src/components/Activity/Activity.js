import { Link } from "react-router-dom";
import BannerA from "../Banner/BannerA";
import Message from "../Message/Message";

export default function Activity({user}) {
  const isAuthenticated = Boolean(user?.email);
  const display = isAuthenticated ? (
    <>
      <BannerA />
    </>
    ) : (
    <>
      <Message />
    </>
  );
  return <div className="Activity">{display}</div>;
}

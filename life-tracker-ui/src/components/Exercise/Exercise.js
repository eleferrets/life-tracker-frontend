import { Link } from "react-router-dom";
import BannerE from "../Banner/BannerE";
import Message from "../Message/Message";

export default function Exercise({user}) {
  const isAuthenticated = Boolean(user?.email);
  const display = isAuthenticated ? (
    <>
      <BannerE />
    </>
    ) : (
    <>
      <Message />
    </>
  );
  return (
    <div className="Exercise">
      {display}
    </div>
  );
}

import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { netflixLogo } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser()); 
        navigate("/");
      })
      .catch((error) => {
        // navigate("/error")
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <Link to="/">
        {" "}
        <img className="w-48" src={netflixLogo} alt="netflix-logo" />
      </Link>

      {user && (
        <div className="flex p-2 items-center space-x-1">
          <img
            className="w-[35px] h-[35px] "
            alt="user-icon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

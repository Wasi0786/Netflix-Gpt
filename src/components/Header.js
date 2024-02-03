import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SUPPORTED_LANGUGES, netflixLogo } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

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

  const handleGptSearchClick = () => {
    // toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <Link to="/">
        {" "}
        <img className="w-48" src={netflixLogo} alt="netflix-logo" />
      </Link>

      {user && (
        <div className="flex p-2 items-center space-x-2">
     {  showGptSearch &&  <select
            onChange={handleLangChange}
            className="p-2 m-2  bg-gray-900 text-white rounded-md"
          >
            {SUPPORTED_LANGUGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select> }
          <button
            onClick={handleGptSearchClick}
            className="py-2 px-3 mx-2 bg-purple-800 text-white rounded-lg"
          >
           {showGptSearch ? ("Home Page") : ("GPT Search") }
          </button>
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

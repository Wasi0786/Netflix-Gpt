import { useState, useRef } from "react";
import Header from "./Header";
// import { checkValidateData } from "..validate/utils/validate.js";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_IMG, USER_LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);


  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSingInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Valideta the data
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    // sign in / sign up Logic
    if (!isSignInForm) {
      // Sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_LOGO,
          })
            .then(() => {
              // ...
              setIsSignInForm(true)
            })
            .catch((error) => {
              console.log(error);
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // sign in Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header />
      <div className="absolute">
        <img
          src={BG_IMG}
          alt="img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black p-12 right-0 my-40 left-0 mx-auto text-white bg-opacity-80 rounded-sm"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full text-white bg-transparent border border-white"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 my-2 w-full text-white bg-transparent border border-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full text-white bg-transparent border border-white"
        />

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button
          className="p-3 my-4 bg-red-600 w-full font-bold text-white rounded-lg hover:bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-gray-400">
          {isSignInForm ? " New to Netflix? " : " Already Registered "}
          <span
            className="cursor-pointer text-white"
            onClick={toggleSingInForm}
          >
            {isSignInForm ? "Sign Up Now " : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

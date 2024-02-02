import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import OpenRoute from "./AuthZ/OpenRoute";
import PrivateRoute from "./AuthZ/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.displayName) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        // User is signed out
        // dispatch(removeUser());
      }
    });
    // Unsubscribe when componwnt unmounts
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <OpenRoute>
          <Login />
        </OpenRoute>
      ),
    },

    {
      path: "/browse",
      element: (
        <PrivateRoute>
          <Browse />
        </PrivateRoute>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

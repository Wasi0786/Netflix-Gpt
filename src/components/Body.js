import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import OpenRoute from "./AuthZ/OpenRoute";
import PrivateRoute from "./AuthZ/PrivateRoute";

const Body = () => {
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

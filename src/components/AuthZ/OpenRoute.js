import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const OpenRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  if (user) {
    return <Navigate to="/browse" />;
  }
  return children;
};

export default OpenRoute;

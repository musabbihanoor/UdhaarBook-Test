import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return true ? ( // set your authentication condition here
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;

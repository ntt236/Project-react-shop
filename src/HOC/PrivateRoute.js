import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { loginSucces } from "../stores/actions/authActions";

const PrivateRoute = () => {
  const [isRestoring, setIsRestoring] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (admin) {
      dispatch(loginSucces(JSON.parse(admin)));
    }
    setIsRestoring(false);
  }, [dispatch]);

  if (isRestoring) {
    return null; // or a loading spinner
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

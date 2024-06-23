import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { loginSucces } from "../stores/actions/authActions";

const PublicRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      dispatch(loginSucces(JSON.parse(user)));
    }
  }, [dispatch]);

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;

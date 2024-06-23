import * as React from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";

import "../Style/AdminPage.css";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { logout } from "../stores/actions/authActions";

export default function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout()); // dispatch logout action
    localStorage.removeItem("admin");
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <>
    <div className="abc"></div>
      <div className="body-admin">
        <div className="left">
          <div className="header-admin-left">
            <h4>SELSOP </h4>
          </div>
          <div className="banner-ad-left">
            <Link to="/admin/dashboard">
              <p>DashBoard</p>
            </Link>
            <Link to="/admin/manager-accout">
              <p> Manager User Account</p>
            </Link>
            <Link to="/admin/manager-products">
              <p> Manager Products New</p>
            </Link>
            <Link to="/admin/quanlydonhang">
              <p>Manager Information Product </p>
            </Link>
          </div>
          <div className="logout">
            <Button onClick={handleLogout} className="btn-logout">
              Logout
            </Button>
          </div>
        </div>
        <div className="right">
          <div className="header-admin-right">
            <h4>DashBoard</h4>
          </div>
          <div className="banner-admin"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

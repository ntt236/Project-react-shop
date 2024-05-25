import { useFormik } from "formik";
import React, { useEffect } from "react";
import { BsGoogle } from "react-icons/bs";
import { Button, Input, Label } from "reactstrap";
import "../Style/sign-in.css";
import axiosInstance from "../api/axiosInstance";
import * as Yup from "yup";
import { Link, Route, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loginSucces } from "../stores/actions/authActions";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(loginSucces(JSON.parse(user)));
    }
  }, [dispatch]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email không được để trống"),
      password: Yup.string().required("Mật khẩu không được để trống"),

      // password: Yup.string().required("Mật khẩu không được để trống"),
    }),
    onSubmit: async (values) => {
      if (!values.email || !values.password) return;
      try {
        const getAd = await axiosInstance.get("/admin");
        const admin = getAd.find((value) => {
          return (
            value.email === values.email && value.password === values.password
          );
        });
        if (admin) {
          alert("Đăng nhập thành công");
          dispatch(loginSucces(admin));
          localStorage.setItem("admin", JSON.stringify(admin));
          localStorage.setItem("isAdmin", true);
          navigate("/admin/dashboard");
        } else {
          const response = await axiosInstance.get("/users");
          const user = response.find((value) => {
            return (
              value.email === values.email && value.password === values.password
            );
          });
          if (user) {
            alert("Đăng nhập thành công");
            dispatch(loginSucces(user));
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.removeItem("isAdmin");
            navigate("/");
          } else if (!user) {
            alert("Tài khoản hoặc mật khâu không chính xác");
          }
        }
      } catch (error) {
        console.log("🚀 ~ onSubmit: ~ error:", error);
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="body">
          <div className="signin">
            <h1>Login </h1>
            <button className="signup-social">
              <BsGoogle className="signup-social-icon" />
              <span className=" signup-social-text">Sign in with Google</span>
            </button>
            <div className="signup-or">
              <span>Or</span>
            </div>
            <Label htmlFor="email" className="signup-label">
              Email:
            </Label>
            <Input
              id="email"
              className="signup-input"
              placeholder="Nhập Email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p style={{ color: "red", marginBottom: 0 }}>
                {formik.errors.email}
              </p>
            )}
            <Label htmlFor="password" className="signup-label">
              Password:
            </Label>
            <Input
              type="password"
              id="password"
              className="signup-input"
              placeholder="Nhập password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <p style={{ color: "red", marginBottom: 0 }}>
                {formik.errors.password}
              </p>
            )}
            <Button className="signup-login" type="submit">
              Login
            </Button>
            <p className="signup-already">
              <span>Do not have an account?</span>
              <Link to="/register" className="p-re-or-log">
                Register
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

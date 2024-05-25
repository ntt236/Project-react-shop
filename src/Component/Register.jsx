import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button, Input, Label } from "reactstrap";
import {} from "react-bootstrap";
import { BsGoogle } from "react-icons/bs";
import axiosInstance from "../api/axiosInstance";
import "../Style/sign-in.css";
const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      conFirmPassword: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(4, "Tên quá ngắn")
        .max(50, "Tên quá dài")
        .required("Tên không được để trống"),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email không được để trống"),
      password: Yup.string()
        .min(6, "Mật khẩu quá ngắn")
        .max(50, "Mật khẩu quá dài")
        .required("Mật khẩu không được để trống"),
      conFirmPassword: Yup.string()

        .oneOf([Yup.ref("password")], "mật khẩu không trùng khớp")
        .required("Hãy nhập lại mật khẩu"),
    }),
    onSubmit: async (values) => {
      // console.log("🚀 ~ Register ~ values:", values);

      try {
        const getUser = await axiosInstance.get("/users");
        const user = getUser.find((value) => {
          return value.email === values.email;
        });
        if (user) {
          alert("Email đã tồn tại");
          return;
        }

        const response = await axiosInstance.post(
          "/users",
          formik.getFieldProps().value
        );
        // console.log("🚀 ~ onPost ~ response:", response);
        if (response) {
          navigate("/login");
        }
      } catch (error) {}
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="body">
          <div className="signup">
            <h1>Sign Up</h1>
            <button className="signup-social">
              <BsGoogle className="signup-social-icon" />
              <span className=" signup-social-text">Sign up with Google</span>
            </button>
            <div className="signup-or">
              <span>Or</span>
            </div>
            <Label htmlFor="fullname" className="signup-label">
              Tài Khoản:
            </Label>
            <Input
              type="text"
              id="fullname"
              className="signup-input"
              placeholder="Nhập tài khoản"
              {...formik.getFieldProps("fullname")}
            />
            {formik.touched.fullname && formik.errors.fullname && (
              <p style={{ color: "red", margin: 0 }}>
                {formik.errors.fullname}
              </p>
            )}
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
              <p style={{ color: "red" }}>{formik.errors.password}</p>
            )}
            <Label htmlFor="conFirmPassword" className="signup-label">
              Confirm Password:
            </Label>
            <Input
              type="password"
              id="conFirmPassword"
              className="signup-input"
              placeholder="Nhập lại password"
              {...formik.getFieldProps("conFirmPassword")}
            />
            {formik.touched.conFirmPassword &&
              formik.errors.conFirmPassword && (
                <p style={{ color: "red" }}>{formik.errors.conFirmPassword}</p>
              )}
            <Button className="signup-login" type="submit">
              Sign Up
            </Button>
            <p className="signup-already">
              <span>Already have an account?</span>
              <Link to="/login" className="p-re-or-log">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

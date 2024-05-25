import React, { useState } from "react";
import { formatPrice } from "../utils/common";
import axios from "axios";
import axiosInstance from "../api/axiosInstance";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ThanhToan = () => {
  const getUser = JSON.parse(localStorage.getItem("user"));

  const getCart = JSON.parse(localStorage.getItem("cart"));

  const totalPrice =
    getCart && getCart.length > 0
      ? getCart.reduce((total, item) => {
          return total + Number(item.price) * Number(item.soluong);
        }, 0)
      : 0;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const data = {
        nameProduct: getCart[0]?.name,
        phone: phoneNumber,
        address: address,
        email: getUser.email,
        totalPrice: totalPrice,
        date: new Date(),
        status: "Đang chờ xác nhận",
      };
      console.log("🚀 ~ handleSubmit ~ data:", data);
      const res = await axiosInstance.post("/order", data);
      alert("Đã đặt hàng thành công!");

      navigate("/thongtindonhang");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
    }
  };
  return (
    <>
      <div>
        <Header />
        <div className="container mt-4">
          <form>
            <div className="py-5 text-center">
              <i className="fa fa-credit-card fa-4x" aria-hidden="true" />
              <h2>Thanh toán</h2>
              <p className="lead" style={{ fontSize: "15px" }}>
                Vui lòng điền và kiểm tra thông tin Khách hàng, thông tin Giỏ
                hàng trước khi Đặt hàng.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Giỏ hàng</span>
                  <span className="badge badge-secondary badge-pill">2</span>
                </h4>
                {getCart.map((item, index) => {
                  const total = formatPrice(
                    Number(item.price) * Number(item.soluong)
                  );
                  return (
                    <ul className="list-group mb-3" key={index}>
                      <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                          <h6 className="my-0">{item.name}</h6>
                          <small className="text-muted">
                            Số lượng: {item.soluong}
                          </small>
                        </div>
                        <span className="text-muted">{total}đ</span>
                      </li>
                    </ul>
                  );
                })}
                <p>Tổng tiền phải trả là: {totalPrice}đ</p>
              </div>
              <div className="col-md-8 order-md-1">
                <h4 className="mb-3">Thông tin khách hàng</h4>
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="kh_ten">Tên</label>
                    <input
                      type="text"
                      className="form-control"
                      name="kh_ten"
                      id="kh_ten"
                      readOnly
                      value={getUser.fullname}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="kh_dienthoai">Điện thoại</label>
                    <input
                      type="number"
                      className="form-control"
                      name="kh_dienthoai"
                      id="kh_dienthoai"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="kh_diachi">Địa chỉ</label>
                    <input
                      type="text"
                      className="form-control"
                      name="kh_diachi"
                      id="kh_diachi"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="kh_email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="kh_email"
                      id="kh_email"
                      readOnly
                      value={getUser.email}
                    />
                  </div>
                </div>
                <h4 className="mb-3">Hình thức thanh toán</h4>
                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      required
                      defaultValue={1}
                    />
                    <label className="custom-control-label" htmlFor="httt-1">
                      Tiền mặt
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      required
                      defaultValue={2}
                    />
                    <label className="custom-control-label" htmlFor="httt-2">
                      Chuyển khoản
                    </label>
                  </div>
                </div>
                <hr className="mb-4" />
                <Button
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleSubmit}
                  type="button"
                >
                  Đặt hàng
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThanhToan;

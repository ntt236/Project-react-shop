import React, { useEffect, useState } from "react";
import Header from "./Header";
import axiosInstance from "../api/axiosInstance";
import Footer from "./Footer";

const ThongtinDonHang = () => {
  const [orderInfo, setOrderInfo] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const response = await axiosInstance.get("/order");
        setOrderInfo(response);
      } catch (error) {
        console.log("Lỗi khi lấy dữ liệu:", error);
      }
    };
    getOrder();
  }, []);

  return (
    <>
      <div>
        <Header />
        <div className="container">
          <h1>Thông tin đơn hàng</h1>
          {orderInfo.map((product) => {
            return (
              <>
                <table
                  className="table"
                  key={product.id}
                  style={{ margin: "50px 0 50px 0" }}
                >
                  <tbody key={product.id}>
                    <tr>
                      <td>Mã đơn hàng</td>
                      <td>{product.id}</td>
                    </tr>
                    <tr>
                      <td>Sản phẩm</td>
                      <td>{product.nameProduct}</td>
                    </tr>
                    <tr>
                      <td>Ngày đặt hàng</td>
                      <td>{product.date}</td>
                    </tr>
                    <tr>
                      <td>Địa chỉ giao hàng</td>
                      <td>{product.address}</td>
                    </tr>
                    <tr>
                      <td>Trạng thái đơn hàng</td>
                      <td>{product.status}</td>
                    </tr>
                  </tbody>
                  <br />
                  <br />
                </table>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThongtinDonHang;

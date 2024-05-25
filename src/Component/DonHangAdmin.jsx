import React, { useState, useEffect } from "react";
import { Button, Table } from "reactstrap";
import axiosInstance from "../api/axiosInstance";
import { Link } from "react-router-dom";

const DonHangAdmin = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axiosInstance.get("/order");
        setOrderList(response);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
    getApi();
  }, []);

  const handleUpdateStatus = async (orderId) => {
    // Tìm đơn hàng cần cập nhật
    const orderToUpdate = orderList.find((order) => order.id === orderId);
    if (!orderToUpdate) return;

    // Cập nhật trạng thái đơn hàng
    const updatedOrder = {
      ...orderToUpdate,
      status: "Đang giao",
    };

    try {
      await axiosInstance.put(`/order/${orderId}`, updatedOrder);

      // Cập nhật trạng thái đơn hàng trong danh sách
      setOrderList((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: "Đang giao" } : order
        )
      );
    } catch (error) {
      console.error("Failed to update order status:", error);
    }
  };

  return (
    <div>
      <div className="body-admin">
        <div className="left">
          <div className="header-admin-left">
            <h4>SELSOP </h4>
          </div>
          <div className="banner-ad-left">
            <Link to="/admin/dashboard">
              <p> DashBoard</p>
            </Link>
            <Link to="/admin/manager-accout">
              <p> Manager User Account</p>
            </Link>
            <Link to="/admin/manager-products">
              <p> Manager Products New</p>
            </Link>
            <Link>
              <p>Manager Information Product </p>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="header-admin-right">
            <h4>Quản lý đơn hàng</h4>
            <Table hover>
              <thead>
                <tr>
                  <th style={{ fontSize: "12px" }}>Id</th>
                  <th style={{ fontSize: "12px" }}>NameProduct</th>
                  <th style={{ fontSize: "12px" }}>Email</th>
                  <th style={{ fontSize: "12px" }}>Address</th>
                  <th style={{ fontSize: "12px" }}>Status</th>
                  <th style={{ fontSize: "12px" }}>TotalPrice</th>
                  <th style={{ fontSize: "12px" }}>Xác nhận</th>
                  <th style={{ fontSize: "12px" }}>Delete</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.nameProduct}</td>
                    <td>{order.email}</td>
                    <td>{order.address}</td>
                    <td>{order.status}</td>
                    <td>{order.totalPrice}đ</td>
                    <td>
                      <Button onClick={() => handleUpdateStatus(order.id)}>
                        Xác nhận
                      </Button>
                    </td>
                    <td>
                      <Button>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonHangAdmin;

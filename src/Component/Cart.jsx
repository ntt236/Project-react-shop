import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/common";
import Footer from "./Footer";
import axiosInstance from "../api/axiosInstance";
import Header from "./Header";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  console.log("🚀 ~ Cart ~ cartItems:", cartItems);

  const getUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axiosInstance.get(`/cart?userId=${getUser.id}`);
        setCartItems(response);
      } catch (error) {
        console.log("🚀 ~ useEffect ~ error:", error);
      }
    };
    getApi();
  }, [getUser?.id]);

  const totalPriceAll = cartItems.reduce(
    (total, item) => total + Number(item.price) * Number(item.soluong),
    0
  );

  const totalCart = cartItems.reduce(
    (total, item) => total + Number(item.soluong),
    0
  );
  console.log("🚀 ~ Cart ~ totalCart:", totalCart);
  const handleIncrease = async (index) => {
    try {
      const updatedItem = {
        ...cartItems[index],
        soluong: cartItems[index].soluong + 1,
      };
      await axiosInstance.put(`/cart/${updatedItem.id}`, updatedItem);
      const updatedCart = [...cartItems];
      updatedCart[index] = updatedItem;
      setCartItems(updatedCart);
    } catch (error) {
      console.error("Error increasing item quantity:", error);
    }
  };

  const handleDecrease = async (index) => {
    if (cartItems[index].soluong > 1) {
      try {
        const updatedItem = {
          ...cartItems[index],
          soluong: cartItems[index].soluong - 1,
        };
        await axiosInstance.put(`/cart/${updatedItem.id}`, updatedItem);
        const updatedCart = [...cartItems];
        updatedCart[index] = updatedItem;
        setCartItems(updatedCart);
      } catch (error) {
        console.error("Error decreasing item quantity:", error);
      }
    }
  };

  const handleDelete = async (index) => {
    try {
      const itemId = cartItems[index].id;
      await axiosInstance.delete(`/cart/${itemId}`);
      const updatedCart = [...cartItems];
      updatedCart.splice(index, 1);
      setCartItems(updatedCart);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <div>
        <section className="h-200">
          <div className="container h-200 py-5">
            <div className="row d-flex justify-content-center align-items-center h-200">
              <div className="col-10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-normal mb-0 text-black">
                    <br />
                    Tổng sản phẩm trong giỏ hàng hiện tại là ({totalCart})
                  </h3>

                  <h5 className="fw-normal mb-0 text-black">
                    <Link to="/" style={{ color: "red" }}>
                      Back to Home
                    </Link>
                  </h5>
                </div>

                {cartItems.map((item, index) => {
                  const total = formatPrice(
                    Number(item.price) * Number(item.soluong)
                  );
                  return (
                    <div className="card rounded-3 mb-4" key={item.id}>
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={item.image}
                              className="img-fluid rounded-3"
                              alt={item.name}
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{item.name}</p>
                            <p>
                              <span className="text-muted">Price: </span>
                              {item.price}đ
                            </p>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <Button
                              className="btn btn-link px-2"
                              onClick={() => handleDecrease(index)}
                            >
                              <LuMinus />
                            </Button>
                            <input
                              min={0}
                              name="quantity"
                              value={item.soluong}
                              type="number"
                              className="form-control form-control-sm"
                              readOnly
                            />
                            <Button
                              className="btn btn-link px-2"
                              onClick={() => handleIncrease(index)}
                            >
                              <GoPlus />
                            </Button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">Tổng giá tiền: {total}đ</h5>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <Button
                              style={{ background: "white" }}
                              onClick={() => handleDelete(index)}
                            >
                              <MdDelete
                                className="fs-2"
                                style={{ color: "red" }}
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <h4>
                  Tổng tiền tất cả đơn hàng của bạn là:{" "}
                  <span style={{ color: "red" }}> {totalPriceAll} </span>
                  <div style={{ marginTop: "30px" }}>
                    Bạn có muốn thanh toán tất cả đơn hàng không?{" "}
                    <Link to="/cart/thanhtoan">
                      <Button>Thanh Toán</Button>
                    </Link>
                  </div>
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

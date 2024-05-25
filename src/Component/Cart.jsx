import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/common";
import Footer from "./Footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleIncrease = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].soluong += 1;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrease = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].soluong > 1) {
      updatedCart[index].soluong -= 1;
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const handleDelete = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPriceAll = cartItems.reduce(
    (total, item) => total + Number(item.price) * Number(item.soluong),
    0
  );

  return (
    <>
      <div>
        <section className="h-200">
          <div className="container h-200 py-5">
            <div className="row d-flex justify-content-center align-items-center h-200">
              <div className="col-10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
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
                        <Button style={{ margin: "10px 10px 10px 0" }}>
                          Thanh Toán{" "}
                        </Button>
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

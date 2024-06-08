import React, { useEffect, useState } from "react";
import "../Style/Home.css";
import { Link, Outlet } from "react-router-dom";
import Logo from "../Img/lgooo.png";
import quan from "../Img/quan.jpg";
import slideshop from "../Img/slideShop.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "reactstrap";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import axiosInstance from "../api/axiosInstance";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../stores/actions/fetchDataHomeAction";
import Footer from "./Footer";
import SlideProduct from "./SlideProduct";
import Header from "./Header";
import SlideProductSell from "./SlideProductSell";
const Home = () => {
  // const [isLogged, setIsLogged] = useState(false);
  // const [user, setUser] = useState(null);

  // const dispatch = useDispatch();

  // const products = useSelector((state) => state.fetchDataHome.products);
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  // useEffect(() => {
  //   const localUser = localStorage.getItem("user");
  //   if (localUser) {
  //     setIsLogged(true);
  //     setUser(JSON.parse(localUser));
  //   } else {
  //     setIsLogged(false);
  //     setUser(null);
  //   }
  // }, []);

  return (
    <div className="fullbodyHome">
      {/* <header>
        <div className="container">
          <div className="row-flex">
            <div className="logo">
              <Link to="/home">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="header-nav active">
              <nav>
                <ul>
                  <li>
                    <Link to="/">TRANG CHỦ</Link>
                  </li>
                  <li>
                    <Link to="#">SẢN PHẨM</Link>
                    <div className="container-fluid ">
                      <div className="dropdown-menu">
                        <div className="dropdown-content">
                          <ul>
                            <li>
                              <Link to="/product-vot">VỢT CẦU LÔNG</Link>
                            </li>
                            <li>
                              <Link to="/product-ao">ÁO CẦU LÔNG</Link>
                            </li>
                            <li>
                              <Link to="/product-quan">QUẦN CẦU LÔNG</Link>
                            </li>
                            <li>
                              <Link to="/product-giay">GIÀY CẦU LÔNG</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/sale">SALE OFF</Link>
                  </li>
                  <li>
                    <Link to="/lienhe">LIÊN HỆ</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="cuoi">
              <Link to="/cart">
                <ShoppingCartIcon className="icon" />
              </Link>
              <div className="taikhoan">
                <Person2OutlinedIcon className="icon" />
                <span className="p-tk">
                  {isLogged && user ? user.fullname : "Tài Khoản"}
                </span>
                <div className="drop-menu">
                  {isLogged ? (
                    <Link to="/" onClick={handleLogout}>
                      Đăng xuất
                    </Link>
                  ) : (
                    <>
                      <Link to="/login" onClick={handleLogin}>
                        Đăng nhập
                      </Link>
                      <Link to="/register">Đăng ký</Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      <Header />

      <div className="container-fluid">
        <div className="slide">
          <img src={slideshop} alt="Slide" />
        </div>
      </div>

      <div className="container">
        <div className="row promo-box">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-6">
            <div className="item">
              <div className="icon">
                <AirportShuttleOutlinedIcon className="icon" />
              </div>
              <div className="title">
                Vận chuyển
                <span> TOÀN QUỐC </span>
                <br />
                Thanh toán khi nhận hàng
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-6">
            <div className="item">
              <div className="icon">
                <RecommendOutlinedIcon className="icon" />
              </div>
              <div className="title">
                <span>BẢO ĐẢM CHẤT LƯỢNG</span>
                <br />
                Sản phẩm bảo đảm chất lượng
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-6">
            <div className="item">
              <div className="icon">
                <CurrencyExchangeOutlinedIcon className="icon" />
              </div>
              <div className="title">
                <span> SẢN PHẨM ĐỔI MỚI</span>
                <br />
                Nếu lỗi sản phẩm
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-6">
            <div className="item">
              <div className="icon">
                <CurrencyExchangeOutlinedIcon className="icon" />
              </div>
              <div className="title">
                <span> THANH TOÁN TIỆN LỢI</span>
                <br />
                với nhiều phương thức
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div>
              <h3
                style={{
                  color: "red",
                  font: "revert-layer",
                  fontSize: "xx-large",
                }}
              >
                SẢN PHẨM MỚI
              </h3>
            </div>
          </div>
          <SlideProduct />

          <h3
            style={{
              color: "red",
              font: "revert-layer",
              fontSize: "xx-large",
            }}
          >
            SẢN PHẨM BÁN CHẠY NHẤT
          </h3>

          <SlideProductSell />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

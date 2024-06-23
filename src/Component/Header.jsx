import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../Img/lgooo.png";
import "../Style/HeaderResponsive.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../stores/actions/authActions";
import axiosInstance from "../api/axiosInstance";
import { getUserCart } from "../stores/actions/fetchUserAction";
import { formatPrice } from "../utils/common";
import { fetchCart } from "../stores/actions/cartAction";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      setIsLogged(true);
      setUser(JSON.parse(localUser));
    } else {
      setIsLogged(false);
      setUser(null);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(logout());
    setIsLogged(false);
    setUser(null);
  };

  const handleLogin = () => {
    setIsLogged(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("🚀 ~ Header ~ cartItems:", cartItems);
  const shouldRefreshAPI = useSelector((state) => state.cart.shouldRefreshAPI);
  const getUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (getUser?.id && shouldRefreshAPI !== null) {
      dispatch(fetchCart(getUser?.id));
    }
  }, [dispatch, getUser?.id, shouldRefreshAPI]);

  const cartTotal = cartItems.reduce(
    (total, item) => total + Number(item.soluong),
    0
  );

  return (
    <header>
      <div className="container">
        <div className="row-flex">
          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <div className={`header-nav ${isMenuOpen ? "active" : ""}`}>
            <nav>
              <ul>
                <li>
                  <Link to="/">TRANG CHỦ</Link>
                </li>
                <li>
                  <Link to="#">SẢN PHẨM</Link>
                  <div className="container-fluid">
                    <div className="dropdown-menu">
                      <div className="dropdown-content">
                        <ul>
                          <li>
                            <Link to="/vot">VỢT CẦU LÔNG</Link>
                          </li>
                          <li>
                            <Link to="/ao">ÁO CẦU LÔNG</Link>
                          </li>
                          <li>
                            <Link to="/quan">QUẦN CẦU LÔNG</Link>
                          </li>
                          <li>
                            <Link to="/giay">GIÀY CẦU LÔNG</Link>
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
            <div className="cart">
              <Link to="/cart">
                <ShoppingCartIcon className="icon-header" />
                {cartTotal > 0 && (
                  <span className="cart-count">{cartTotal}</span>
                )}
                {/* <i class="bi bi-bag-check-fill icon-header"></i> */}
              </Link>
            </div>
            <div className="taikhoan">
              <Person2OutlinedIcon className="icon-header" />
              <span className="p-tk">
                {isLogged && user ? user.fullname : "Tài Khoản"}
              </span>
              <div className="drop-menu">
                {isLogged ? (
                  <>
                    <Link to="/" onClick={handleLogout}>
                      Đăng xuất
                    </Link>
                    <Link to="/thongtindonhang">Thông tin đơn hàng</Link>
                  </>
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
        {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </div>
    </header>
  );
};

export default Header;

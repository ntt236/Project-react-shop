import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import "../Style/DetailProduct.css";
import Header from "./Header";
import {
  fetchProductsDetail,
  fetchProductsDetail1,
  fetchProductsDetail2,
  fetchProductsDetail3,
  fetchProductsDetail4,
  fetchProductSellHome,
} from "../stores/actions/fetchDataHomeAction";
import { formatPrice } from "../utils/common";
import Footer from "./Footer";
import axiosInstance from "../api/axiosInstance";
import { addToCart, updateCartItem } from "../stores/actions/cartAction";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const productDetail = useSelector(
    (state) => state.fetchDataHome.productDetail
  );
  const params = useParams();
  const location = useLocation();

  const productId = params.productId || "";

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (productId) {
      if (location.pathname.includes("/vot/")) {
        dispatch(fetchProductsDetail1(productId));
      } else if (location.pathname.includes("/ao/")) {
        dispatch(fetchProductsDetail2(productId));
      } else if (location.pathname.includes("/quan/")) {
        dispatch(fetchProductsDetail3(productId));
      } else if (location.pathname.includes("/giay/")) {
        dispatch(fetchProductsDetail4(productId));
      } else if (location.pathname.includes("/productsell/")) {
        dispatch(fetchProductSellHome(productId));
      } else {
        dispatch(fetchProductsDetail(productId));
      }
    }
  }, [dispatch, productId, location.pathname]);

  const themgiohang = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Vui lòng đăng nhập để thêm vào giỏ hàng");
        return;
      }
      if (quantity < 0 || quantity === 0) {
        alert("Vui lòng nhập số lượng sản phẩm lớn hơn hoặc bằng 1");
        return;
      }

      const cartResponse = await axiosInstance.get("/cart");
      const cart = cartResponse.find(
        (item) => item.productId === productId && item.userId === user.id
      );
      console.log("🚀 ~ themgiohang ~ cart:", cart);

      if (cart) {
        const updatedCart = {
          ...cart,
          soluong: cart.soluong + quantity,
        };
        dispatch(updateCartItem(updatedCart));
        // await axiosInstance.put(`/cart/${cart.id}`, updatedCart);
      } else {
        const newProduct = {
          userId: user.id,
          productId: productId,
          name: productDetail.name,
          price: productDetail.price,
          image: productDetail.image,
          soluong: quantity,
        };
        dispatch(addToCart(newProduct));
        // await axiosInstance.post("/cart", newProduct);
      }

      alert("Đã thêm sản phẩm vào giỏ hàng");
    } catch (error) {
      console.log("🚀 ~ themgiohang ~ error:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="card">
          <div className="container-fluid">
            <form
              name="frmsanphamchitiet"
              id="frmsanphamchitiet"
              method="post"
              action=""
            >
              <input type="hidden" name="sp_ma" id="sp_ma" value="" />
              <input type="hidden" name="sp_ten" id="sp_ten" value="" />
              <input type="hidden" name="sp_gia" id="sp_gia" value="" />
              <input
                type="hidden"
                name="hinhdaidien"
                id="hinhdaidien"
                value=""
              />
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1">
                      <img src={productDetail?.image} alt="Default" />
                    </div>
                  </div>
                  <ul className="preview-thumbnail nav nav-tabs">
                    <li className="active">
                      <a>
                        <img
                          src={productDetail?.image}
                          alt="Default thumbnail"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{productDetail?.name}</h3>
                  <p className="product-description">
                    {productDetail?.description}
                  </p>
                  <h4 className="price">
                    Giá hiện tại:{" "}
                    <span>{formatPrice(productDetail?.price)}đ</span>
                  </h4>
                  <p className="vote">
                    <strong>100%</strong> hàng <strong>Chất lượng</strong>, đảm
                    bảo <strong>Uy tín</strong>!
                  </p>

                  <div className="form-group">
                    <label htmlFor="soluong">Số lượng đặt mua:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="soluong"
                      name="soluong"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                  </div>
                  <div className="action">
                    <button
                      type="button"
                      className="add-to-cart btn btn-default"
                      id="btnThemVaoGioHang"
                      onClick={themgiohang}
                    >
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="card mt-4">
          <div className="container-fluid">
            <h3>Thông tin chi tiết về Sản phẩm</h3>
            <div className="row">
              <div className="col">Mô tả chi tiết về sản phẩm.</div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DetailProduct;

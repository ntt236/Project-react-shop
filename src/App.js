import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Admin from "./Component/Admin";

import { Provider } from "react-redux";
import PrivateRoute from "./HOC/PrivateRoute";
import store from "./stores/Store";
import TableAccoutAdmin from "./Component/TableAccoutAdmin";

import TableProductAdmin from "./Component/TableProductAdmin";
import Cart from "./Component/Cart";
import DetailProduct from "./Component/DetailProduct";
import SlideProduct from "./Component/SlideProduct";
import StroreVot from "./Component/StroreVot";
import StoreAo from "./Component/StoreAo";
import StoreQuan from "./Component/StoreQuan";
import StoreGiay from "./Component/StoreGiay";
import ThanhToan from "./Component/ThanhToan";
import ThongtinDonHang from "./Component/ThongtinDonHang";
import DonHangAdmin from "./Component/DonHangAdmin";
function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/thanhtoan" element={<ThanhToan />} />
      <Route element={<PrivateRoute />}>
        <Route path="/admin/dashboard" element={<Admin />} />
        <Route path="/admin/manager-accout" element={<TableAccoutAdmin />} />
        <Route path="/admin/manager-products" element={<TableProductAdmin />} />
        <Route path="/admin/quanlydonhang" element={<DonHangAdmin />} />
      </Route>
      <Route path="/" exact element={<Home />} />
      <Route path="/product/:productId" element={<DetailProduct />} />

      <Route path="vot" element={<StroreVot />} />
      <Route path="ao" element={<StoreAo />} />
      <Route path="quan" element={<StoreQuan />} />
      <Route path="giay" element={<StoreGiay />} />
      <Route path="/vot/:productId" element={<DetailProduct />} />
      <Route path="/ao/:productId" element={<DetailProduct />} />
      <Route path="/quan/:productId" element={<DetailProduct />} />
      <Route path="/giay/:productId" element={<DetailProduct />} />
      <Route path="/thongtindonhang" element={<ThongtinDonHang />} />
    </Routes>
  );
}

export default App;

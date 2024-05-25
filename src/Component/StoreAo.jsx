import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import Header from "./Header";
import { Link } from "react-router-dom";
import "../Style/ResponsiveStore.css";
import Footer from "./Footer";

const StoreAo = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    try {
      const getApi = async () => {
        const response = await axiosInstance.get("/ao");
        setProduct(response);
      };

      getApi();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div>
        <div className="fullbodyHome">
          <Header />
          <div className="container">
            <div
              className="body-store"
              style={{ background: "#f0f0f0", height: "100vh" }}
            >
              <div className="left" style={{ background: "#f5f5f5" }}>
                <div className="header-admin-left">
                  <h4>DANH MỤC SẢN PHẨM</h4>
                </div>
                <div className="banner-ad-left">
                  <Link to="/vot">
                    <p> VỢT CẦU LÔNG</p>
                  </Link>
                  <Link to="/giay">
                    <p>GIÀY CẦU LÔNG</p>
                  </Link>
                  <Link to="/ao">
                    <p>ÁO CẦU LÔNG </p>
                  </Link>
                  <Link to="/quan">
                    <p>QUẦN CẦU LÔNG </p>
                  </Link>
                </div>
              </div>
              <div className="right" style={{ background: "#f5f5f5" }}>
                <h1>ÁO CẦU LÔNG</h1>
                <div>
                  <div className="product  ">
                    {product.map((product) => {
                      return (
                        <div
                          className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-product "
                          key={product.id}
                        >
                          <div className="product-new">
                            <div className="item-product">
                              <Link to={`/ao/${product.id}`}>
                                <img src={product.image} alt={product.name} />
                              </Link>
                            </div>
                            <div className="info">
                              <div className="product-info">
                                <Link to={`/ao/${product.id}`}>
                                  <div className="name-product">
                                    <div className="abc">
                                      <div className="ae">{product.name}</div>
                                    </div>
                                  </div>
                                  <span className="price-product">
                                    {product.price}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StoreAo;

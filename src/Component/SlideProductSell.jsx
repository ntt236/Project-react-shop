import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductSelling } from "../stores/actions/fetchDataHomeAction";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../Style/Home.css";
import { formatPrice } from "../utils/common";

const SlideProductSell = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const productsell = useSelector((state) => state.fetchDataHome.productsell);

  useEffect(() => {
    dispatch(fetchProductSelling());
  }, [dispatch]);

  return (
    <Slider {...settings}>
      {productsell.map((product) => (
        <div key={product.id} className="col-product">
          <div className="product-new">
            <div className="item-product">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
            </div>
            <div className="info">
              <div className="product-info">
                <Link to={`/product/${product.id}`}>
                  <div className="name-product">
                    <div className="abc">
                      <div className="ae">{product.name}</div>
                    </div>
                  </div>
                  <span className="price-product">
                    {formatPrice(product.price)}đ
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SlideProductSell;
import React from "react";
import Logo from "../Img/lgooo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="container-fluid my-5">
        <footer
          className="bg-white text-center text-lg-start text-white"
          style={{ borderTop: "1px solid black " }}
        >
          <div className="container p-4">
            <div className="row my-4">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div
                  className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto "
                  style={{ width: 150, height: 150, border: "1px solid black" }}
                >
                  <Link to="/">
                    <img src={Logo} height={70} alt loading="lazy" />
                  </Link>
                </div>

                <ul className="list-unstyled d-flex flex-row justify-content-center">
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="fab fa-facebook-square" />
                    </a>
                  </li>
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="text-white ps-2" href="#!">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h4 className="text-uppercase mb-4 text-black">
                  DANH MỤC SẢN PHẨM
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link to="/vot" className="text-black">
                      <i className="fas fa-paw pe-3" />
                      VỢT CẦU LÔNG
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/vot" className="text-black">
                      <i className="fas fa-paw pe-3" />
                      GIÀY CẦU LÔNG
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/vot" className="text-black">
                      <i className="fas fa-paw pe-3" />
                      ÁO CẦU LÔNG
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/vot" className="text-black">
                      <i className="fas fa-paw pe-3" />
                      QUẦN CẦU LÔNG
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 text-black">THÔNG TIN</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-black">
                      <i className="fas fa-paw pe-3" />
                      GIỚI THIỆU
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-black">
                      <i className="fas fa-paw pe-3" />
                      ĐIỀU KHOẢN
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-black">
                      <i className="fas fa-paw pe-3" />
                      CHÍNH SÁCH BẢO MẬT
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 text-black">Contact</h5>
                <ul className="list-unstyled">
                  <li>
                    <p className="text-black">
                      <i className="fas fa-phone pe-2 " />
                      091616****
                    </p>
                  </li>
                  <li>
                    <p className="text-black">
                      <i className="fas fa-envelope pe-2 mb-0" />
                      trieunt.23it@vku.udn.vn
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-white"></a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

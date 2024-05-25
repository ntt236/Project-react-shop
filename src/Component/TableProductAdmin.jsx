import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAction } from "../stores/actions/fetchProductAction";
const TableProductAdmin = () => {
  const products = useSelector((state) => state.fetchProduct.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductAction());
  }, [dispatch]);

  return (
    <>
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
            <Link to="/admin/quanlydonhang">
              <p>Manager Information Product </p>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="header-admin-right">
            <h4>Manager User Account</h4>
          </div>
          <div className="banner-admin">
            <div>
              {products.map((product) => {
                return (
                  <Table hover key={product.id}>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Img</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">{product.id}</th>
                        <td>{product.name}</td>
                        <td>{product.price}</td>

                        <td>
                          <img src={product.image} alt="Product Image" />
                        </td>
                        <td>{product.description}</td>
                        <td>
                          <Button>Edit</Button>
                        </td>
                        <td>
                          <Button>Delete</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default TableProductAdmin;

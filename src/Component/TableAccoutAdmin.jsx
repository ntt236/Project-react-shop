import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Table } from "reactstrap";
import "../Style/AdminPage.css";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../stores/actions/fetchUserAction";

import { deleteAction } from "../stores/actions/deleteAction";
const TableAccoutAdmin = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.fetchUser.user);
  // const deleteUs = useSelector((state) => state.deleteUser.deleteUs);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteAction(id));
  };
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
              {user.map((users) => {
                return (
                  <Table key={users.id} hover>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">{users.id}</th>
                        <td>{users.fullname}</td>
                        <td>{users.email}</td>
                        <td>{users.password}</td>
                        <td>
                          <Button>Edit</Button>
                        </td>
                        <td>
                          <Button onClick={() => handleDelete(users.id)}>
                            Delete
                          </Button>
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

export default TableAccoutAdmin;

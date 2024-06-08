import axiosInstance from "../../api/axiosInstance";
import { DELETE_ORDER } from "../constants/deleteUser";
import { fetchUsers } from "./fetchUserAction";

export const deleteAction = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.delete(`/users/${id}`);
      dispatch({
        type: "DELETE_USER",
        payload: response,
      });
      dispatch(fetchUsers());
    } catch (error) {
      dispatch({
        type: "DELETE_USER_ERROR",
        payload: error.message,
      });
    }
  };
};

export const deleteProductInfo = (id) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.delete(`/order/${id}`);
      dispatch({
        type: DELETE_ORDER,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "DELETE_USER_ERROR",
        payload: error.message,
      });
    }
  };
};

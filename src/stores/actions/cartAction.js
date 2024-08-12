// src/stores/actions/cartActions.js

import axiosInstance from "../../api/axiosInstance";

export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const UPDATE_CART_ITEM_SUCCESS = "UPDATE_CART_ITEM_SUCCESS";
export const DELETE_CART_ITEM_SUCCESS = "DELETE_CART_ITEM_SUCCESS";
export const UPDATE_SHOULD_REFRESH_SUCCESS = "UPDATE_SHOULD_REFRESH_SUCCESS";
export const CLEAR_CART = "CLEAR_CART";

export const fetchCart = (userId) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/cart?userId=${userId}`);
    dispatch({
      type: FETCH_CART_SUCCESS,
      payload: response,
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};

export const addToCart = (product) => async (dispatch) => {
  try {
    const response = await axiosInstance.post("/cart", product);
    dispatch({
      type: UPDATE_SHOULD_REFRESH_SUCCESS,
      payload: 1,
    });
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

export const updateCartItem = (item) => async (dispatch) => {
  try {
    const response = await axiosInstance.put(`/cart/${item.id}`, item);
    dispatch({
      type: UPDATE_SHOULD_REFRESH_SUCCESS,
      payload: 1,
    });
  } catch (error) {
    console.error("Error updating cart item:", error);
  }
};

export const deleteCartItem = (itemId) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/cart/${itemId}`);
    dispatch({
      type: DELETE_CART_ITEM_SUCCESS,
      payload: itemId,
    });
  } catch (error) {
    console.error("Error deleting cart item:", error);
  }
};
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
}

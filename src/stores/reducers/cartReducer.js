// src/stores/reducers/cartReducer.js

import {
  ADD_TO_CART_SUCCESS,
  DELETE_CART_ITEM_SUCCESS,
  FETCH_CART_SUCCESS,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_SHOULD_REFRESH_SUCCESS,
} from "../actions/cartAction";

const initialState = {
  cartItems: [],
  shouldRefreshAPI: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case UPDATE_SHOULD_REFRESH_SUCCESS:
      return {
        ...state,
        shouldRefreshAPI: state.shouldRefreshAPI + action.payload,
      };
    case UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case DELETE_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;

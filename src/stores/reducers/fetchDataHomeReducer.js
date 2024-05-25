import {
  FETCH_DATA_HOME_ERROR,
  FETCH_DATA_HOME_PRODUCT_SUCCESS,
  FETCH_DATA_HOME_REQUEST,
  FETCH_DATA_HOME_SUCCESS,
  FETCH_DATA_PRODUCT_DETAIL_SUCCESS,
} from "../constants/fetchDataHome";

const initialState = {
  products: [],
  productsell: [],
  productDetail: null,
  loading: false,
  error: "",
};
const fetchDataHomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_HOME_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_DATA_HOME_PRODUCT_SUCCESS:
      return {
        ...state,
        productsell: action.payload,
      };
    case FETCH_DATA_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: action.payload,
      };
    case FETCH_DATA_HOME_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_DATA_HOME_ERROR:
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
};
export default fetchDataHomeReducer;

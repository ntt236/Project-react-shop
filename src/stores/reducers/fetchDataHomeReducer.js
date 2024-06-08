import {
  FETCH_AO_HOME_SUCCESS,
  FETCH_DATA_HOME_ERROR,
  FETCH_DATA_HOME_PRODUCT_SUCCESS,
  FETCH_DATA_HOME_REQUEST,
  FETCH_DATA_HOME_SUCCESS,
  FETCH_DATA_PRODUCT_DETAIL_SUCCESS,
  FETCH_GIAY_HOME_SUCCESS,
  FETCH_QUAN_HOME_SUCCESS,
  FETCH_VOT_HOME_SUCCESS,
} from "../constants/fetchDataHome";

const initialState = {
  products: [],
  productSell: [],
  productDetail: null,
  vot: [],
  giay: [],
  quan: [],
  ao: [],
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
        productSell: action.payload,
      };
    case FETCH_DATA_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: action.payload,
      };
    case FETCH_VOT_HOME_SUCCESS:
      return {
        ...state,
        vot: action.payload,
      };
    case FETCH_GIAY_HOME_SUCCESS:
      return {
        ...state,
        giay: action.payload,
      };
    case FETCH_QUAN_HOME_SUCCESS:
      return {
        ...state,
        quan: action.payload,
      };
    case FETCH_AO_HOME_SUCCESS:
      return {
        ...state,
        ao: action.payload,
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

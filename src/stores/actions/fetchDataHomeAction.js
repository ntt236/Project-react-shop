import axiosInstance from "../../api/axiosInstance";
import {
  FETCH_AO_HOME_SUCCESS,
  FETCH_DATA_HOME_ERROR,
  FETCH_DATA_HOME_PRODUCT_ERROR,
  FETCH_DATA_HOME_PRODUCT_SUCCESS,
  FETCH_DATA_HOME_REQUEST,
  FETCH_DATA_HOME_SUCCESS,
  FETCH_DATA_PRODUCT_DETAIL_SUCCESS,
  FETCH_GIAY_HOME_SUCCESS,
  FETCH_QUAN_HOME_SUCCESS,
  FETCH_VOT_HOME_SUCCESS,
} from "../constants/fetchDataHome";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: true,
      });
      const response = await axiosInstance.get("/products/");
      dispatch({
        type: FETCH_DATA_HOME_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_HOME_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: false,
      });
    }
  };
};
export const fetchProductSelling = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: true,
      });
      const response = await axiosInstance.get("/productsell/");
      dispatch({
        type: FETCH_DATA_HOME_PRODUCT_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_HOME_PRODUCT_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: false,
      });
    }
  };
};

export const fetchProductsDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: true,
      });
      const response = await axiosInstance.get("/products/");
      const existedProduct = response.find((product) => product.id === id);

      dispatch({
        type: FETCH_DATA_PRODUCT_DETAIL_SUCCESS,
        payload: existedProduct ? existedProduct : null,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_HOME_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: false,
      });
    }
  };
};

export const fetchProductsDetail1 = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: true,
      });
      const response = await axiosInstance.get("/vot/");
      const existedProduct = response.find((product) => product.id === id);

      dispatch({
        type: FETCH_DATA_PRODUCT_DETAIL_SUCCESS,
        payload: existedProduct ? existedProduct : null,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_HOME_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: false,
      });
    }
  };
};

export const fetchProductsDetail2 = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: true,
      });
      const response = await axiosInstance.get("/ao/");
      const existedProduct = response.find((product) => product.id === id);

      dispatch({
        type: FETCH_DATA_PRODUCT_DETAIL_SUCCESS,
        payload: existedProduct ? existedProduct : null,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_HOME_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: false,
      });
    }
  };
};
export const fetchProductsDetail3 = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: true,
      });
      const response = await axiosInstance.get("/quan/");
      const existedProduct = response.find((product) => product.id === id);

      dispatch({
        type: FETCH_DATA_PRODUCT_DETAIL_SUCCESS,
        payload: existedProduct ? existedProduct : null,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_HOME_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: false,
      });
    }
  };
};
export const fetchProductsDetail4 = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: true,
      });
      const response = await axiosInstance.get("/giay/");
      const existedProduct = response.find((product) => product.id === id);

      dispatch({
        type: FETCH_DATA_PRODUCT_DETAIL_SUCCESS,
        payload: existedProduct ? existedProduct : null,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_HOME_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: false,
      });
    }
  };
};
export const fetchProductSellHome = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: true,
      });
      const response = await axiosInstance.get("/productsell/");
      const existedProduct = response.find((product) => product.id === id);

      dispatch({
        type: FETCH_DATA_PRODUCT_DETAIL_SUCCESS,
        payload: existedProduct ? existedProduct : null,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_HOME_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: false,
      });
    }
  };
};
export const fetchVotHome = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: true,
      });

      const response = await axiosInstance.get("/vot");
      dispatch({
        type: FETCH_VOT_HOME_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_HOME_ERROR,
        payload: error.message,
      });
    }
  };
};
export const fetchGiayHome = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: true,
      });

      const response = await axiosInstance.get("/giay");
      dispatch({
        type: FETCH_GIAY_HOME_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_HOME_ERROR,
        payload: error.message,
      });
    }
  };
};
export const fetchQuanHome = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: true,
      });

      const response = await axiosInstance.get("/quan");
      dispatch({
        type: FETCH_QUAN_HOME_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_HOME_ERROR,
        payload: error.message,
      });
    }
  };
};
export const fetchAoHome = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_DATA_HOME_REQUEST,
        payload: true,
      });

      const response = await axiosInstance.get("/ao");
      dispatch({
        type: FETCH_AO_HOME_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_HOME_ERROR,
        payload: error.message,
      });
    }
  };
};

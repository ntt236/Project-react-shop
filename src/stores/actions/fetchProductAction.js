import axiosInstance from "../../api/axiosInstance";

export const fetchProductAction = () => {
  return async (dispatch) => {
    try {
      const getProduct = await axiosInstance.get("/products");
      dispatch({
        type: "FETCH_PRODUCT_AD_SUCCESS",
        payload: getProduct,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_PRODUCT_AD_FAILURE",
        payload: error.message,
      });
    }
  };
};

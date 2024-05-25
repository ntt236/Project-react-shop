const initialState = {
  product: [],
  error: false,
};
const fetchProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_AD_SUCCESS":
      return {
        ...state,
        product: action.payload,
      };
    case "FETCH_PRODUCT_AD_FAILURE":
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
};
export default fetchProductReducer;

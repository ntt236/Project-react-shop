const initialState = {
  user: [],
  error: false,
  cart: [],
  // cartUser: [],
};
const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
    // case "GET_USER_SUCCESS":
    //   return {
    //     ...state,
    //     cartUser: action.payload,
    //   };

    case "FETCH_USER_FAILURE":
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
};

export default fetchUserReducer;

const initialState = {
  user: [],
  error: false,
};
const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
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

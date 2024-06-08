import {
  DELETE_ORDER,
  DELETE_USER,
  DELETE_USER_ERROR,
} from "../constants/deleteUser";

const initialState = {
  user: [],
  error: "",
  order: [],
};
const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default deleteReducer;

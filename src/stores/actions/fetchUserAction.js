import axiosInstance from "../../api/axiosInstance";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const getDataUser = await axiosInstance.get("/users");
      dispatch({
        type: "FETCH_USER_SUCCESS",
        payload: getDataUser,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_USER_FAILURE",
        payload: error.message,
      });
    }
  };
};

// export const getUserCart = () => {
//   return async (dispatch) => {
//     try {
//       const getUser = JSON.parse(localStorage.getItem("user"));
//       const response = await axiosInstance.get(`/cart?userId=${getUser.id}`);
//       dispatch({
//         type: "GET_USER_SUCCESS",
//         payload: response,
//       });
//     } catch (error) {
//       dispatch({
//         type: "FETCH_USER_FAILURE",
//         payload: error.message,
//       });
//     }
//   };
// };

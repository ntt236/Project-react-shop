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

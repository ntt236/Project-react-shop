import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  isBoolean: false,
};
export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + action.payload;
    },

    setBoolean: (state, action) => {
      state.isBoolean = action.payload;
    },
  },
});

export const { increment, setBoolean } = counterSlice.actions;
export default counterSlice.reducer;

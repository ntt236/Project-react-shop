import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slide/counterSlice";
export const store = configureStore({
  reducer: {
    counterState: counterSlice,
  },
});

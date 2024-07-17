import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/slices/carSlice";
import countReducer from "./redux/slices/countSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    count: countReducer,
  },
});

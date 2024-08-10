import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./redux/slices/countSlice";
import { cartApi } from "./redux/slices/ApiSlice/cartApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [cartApi.reducerPath]: cartApi.reducer,
    count: countReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartApi.middleware),
});
setupListeners(store.dispatch);

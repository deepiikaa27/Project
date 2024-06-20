import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/CartSlice";
import cartUiSlice from "./shopping-cart/CardUiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});

export default store;

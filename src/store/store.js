import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./shopping-cart/cartSlice"
const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store
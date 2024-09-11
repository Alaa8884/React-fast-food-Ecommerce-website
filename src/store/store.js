import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./shopping-cart/cartSlice";
import CartUiReducer from "./shopping-cart/cartUiSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartUi: CartUiReducer,
  },
});

export default store;

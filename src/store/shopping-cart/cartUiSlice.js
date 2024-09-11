import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState: { showCart: false },
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { toggleCart } = cartUiSlice.actions;
export default cartUiSlice.reducer
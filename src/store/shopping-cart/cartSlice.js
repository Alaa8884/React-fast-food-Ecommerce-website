import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseItemQuantity(state, action) {
      const newItem = action.payload;
      const items = state.cart.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!items) {
        state.cart.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.totalPrice,
        });
      } else {
        items.quantity++
        items.totalPrice = Number(items.totalPrice) + Number(newItem.totalPrice)
      }
      state.totalAmount = state.cart.reduce((total, item)=> total + Number(item.price) * Number(item.quantity))
    },
    // decreaseItemQuantity(state, action){}
  },
});

export const { increaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer
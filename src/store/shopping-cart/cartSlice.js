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
    addItemToCart(state, action) {
      const newItem = action.payload;
      const items = state.cart.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!items) {
        state.cart.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        items.quantity++;
        items.totalPrice = Number(items.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    deleteItem(state, action) {
      const items = state.cart.find((item) => item.id === action.payload);
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.totalQuantity = state.totalQuantity - items.quantity;
      state.totalAmount = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    increaseItemQuantity(state, action) {
      const items = state.cart.find((item) => item.id === action.payload);
      items.quantity++;
      items.totalPrice = Number(items.quantity) * Number(items.price);
      state.totalQuantity++;
      state.totalAmount = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    decreaseItemQuantity(state, action) {
      const items = state.cart.find((item) => item.id === action.payload);

      if (items.quantity > 0) {
        items.quantity--;
        items.totalPrice = Number(items.quantity) * Number(items.price);
        state.totalQuantity--;
        state.totalAmount = state.cart.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        );
      }
      if (items.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItemToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

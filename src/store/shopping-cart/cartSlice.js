import { createSlice } from "@reduxjs/toolkit";

const cartFoods =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;
const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

function setLocalStorage(cart, totalAmount, totalQuantity) {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
}


const initialState = {
  cart: cartFoods,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
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

      setLocalStorage(
        state.cart.map((food) => food),
        state.totalAmount,
        state.totalQuantity
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

      setLocalStorage(
        state.cart.map((food) => food),
        state.totalAmount,
        state.totalQuantity
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
      setLocalStorage(
        state.cart.map((food) => food),
        state.totalAmount,
        state.totalQuantity
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
      setLocalStorage(
        state.cart.map((food) => food),
        state.totalAmount,
        state.totalQuantity
      );
    },
    clearCart(state) {
      state.cart = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      setLocalStorage(
        state.cart.map((food) => food),
        state.totalAmount,
        state.totalQuantity
      );
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

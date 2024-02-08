import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    //This is where your add product should go
    addToCart: (state, action) => {
      // state.cart = [...state.cart, action.payload];
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      ); //action.payload is the product = action.payload === product [0,1,2,3]
      //if doesn't exist, index = -1
      if (index !== -1) {
        //if exists, index = 0,1,2,3
        state.cart[index].quantity += 1;
      } else {
        //if doesn't exist, index = -1
        state.cart.push({ ...action.payload, quantity: 1 });
        //...action.payload this creates a new object with the same properties
        //as the action.payload + quantity: 1
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      // remove product from cart if it exists
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    reducerQuantityByOne: (state, action) => {
      const product = action.payload;
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.cart[index].quantity -= 1;
      } else {
        state.cart.splice(index, 1); // to return new array
      }
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart } = cartSlice.actions;
// This should be used for reducers NOT extraReducers

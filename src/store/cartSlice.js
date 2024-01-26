import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    //This is where your add product should go
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
  extraReducers: (builder) => {},
});

export const { addToCart } = cartSlice.actions;
// This should be used for reducers NOT extraReducers

export default cartSlice.reducer;

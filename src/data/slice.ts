import { cartItemProps } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { basket: cartItemProps[] } = {
  basket: [],
};

export const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket(state, action) {
      if (!state.basket.find((item) => item.id === action.payload.id))
        state.basket.push(action.payload);
    },
    removeFromBasket(state, action) {
      console.log(action.payload);
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    resetBasket(state, action) {
      state.basket = [];
    },
    updateQuantity(state, action) {
      state.basket.forEach((item) => {
        if (
          item.id === action.payload.id &&
          action.payload.type === "increment"
        )
          item.quantity += 1;
        else if (
          item.id === action.payload.id &&
          action.payload.type === "decrement" &&
          item.quantity >= 2
        )
          item.quantity -= 1;
      });
    },
  },
});

export const { addToBasket, removeFromBasket, resetBasket, updateQuantity } =
  basket.actions;
export default basket.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cardItem } from "../../models";
import { getCartLSTotal, getLocalStBasket, getLocalStBasketLenght } from "../../utils/getLocalStBasket";

interface BasketState {
  basket: cardItem[];
  count: number;
  totalPrice: number
}

const initialState: BasketState = {
  basket: getLocalStBasket(),
  count: getLocalStBasketLenght(),
  totalPrice: getCartLSTotal()
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    addToBasket: (state, obj: PayloadAction<cardItem>) => {
      if (state.basket.find((item) => item.id === obj.payload.id)) {
        state.basket = state.basket.filter((elem) => {
          return elem.id !== obj.payload.id;
        });
        state.count = state.count - 1;
      } else {
        state.count = state.count + 1;
        state.basket = [...state.basket, { ...obj.payload, btn: true }]; //????

        state.totalPrice = state.basket.reduce((acc, currentValue) =>{
          return acc + currentValue.price - (currentValue.price * currentValue.sale) / 100
        }, 0)
      }
    },
    delCartBasket: (state, obj:PayloadAction<cardItem>) => {
      state.basket = state.basket.filter((elem) => elem.id !== obj.payload.id);
      state.count = state.count - 1;
    },

    plusTotalPrice: (state, obj:PayloadAction<cardItem>) => {
      state.totalPrice = state.totalPrice + (obj.payload.price - (obj.payload.price * obj.payload.sale) / 100)
    },

    minusTotalPrice: (state, obj:PayloadAction<cardItem>) => {
      state.totalPrice = state.totalPrice - (obj.payload.price - (obj.payload.price * obj.payload.sale) / 100)
    },

    delPrice: (state, num:PayloadAction<number>) => {
      state.totalPrice = state.totalPrice - num.payload
    }
  },
});

export const { addToBasket, delCartBasket, 
  plusTotalPrice,
  minusTotalPrice,
  delPrice,
} = basketSlice.actions;

export default basketSlice.reducer;

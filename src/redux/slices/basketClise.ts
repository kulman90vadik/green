import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cardItem } from "../../models";
import { getLocalStBasket, getLocalStBasketLenght } from "../../utils/getLocalStBasket";

interface BasketState {
  basket: cardItem[];
  count: number;
  // totalPrice: number
}

const initialState: BasketState = {
  basket: getLocalStBasket(),
  count: getLocalStBasketLenght(),
  // totalPrice: getCartLSTotal()
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

        // state.totalPrice = state.basket.reduce((acc, currentValue) =>{
        //   return  acc + currentValue.price
        // }, 0)
      }
    },

    // delCartBasket: (state, obj:PayloadAction<ObjectItem>) => {
    //   state.basket = state.basket.filter((elem) => elem.id !== obj.payload.id);
    //   state.count = state.count - 1;
    // },

    // plusTotalPrice: (state, obj:PayloadAction<ObjectItem>) => {
    //   state.totalPrice = state.totalPrice + obj.payload.price
    // },

    // minusTotalPrice: (state, obj:PayloadAction<ObjectItem>) => {
    //   state.totalPrice = state.totalPrice - obj.payload.price
    // },

    // delPrice: (state, num:PayloadAction<number>) => {
    //   state.totalPrice = state.totalPrice - num.payload
    // }
  },
});

export const {
  addToBasket,
  // delCartBasket,
  // plusTotalPrice,
  // minusTotalPrice,
  // delPrice,
} = basketSlice.actions;

export default basketSlice.reducer;

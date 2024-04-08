import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cardItem } from "../../models";
import { getLocalStFavorites, getLocalStFavoritesLenght } from "../../utils/getLocalStFavorites";
// import { getCartLSTotal, getLocalStBasket, getLocalStBasketLenght } from "../../utils/getLocalStBasket";

interface FavoritesState {
  favorites: cardItem[];
  countFavorites: number
}

const initialState: FavoritesState = {
  favorites: getLocalStFavorites(),
  countFavorites: getLocalStFavoritesLenght(),
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,

  
  reducers: {
    addToFavorites: (state, obj: PayloadAction<cardItem>) => {
      if (state.favorites.find((item) => item.id === obj.payload.id)) {
        state.favorites = state.favorites.filter((elem) => {
          return elem.id !== obj.payload.id;
        });
        state.countFavorites = state.countFavorites - 1;
      } else {
        state.countFavorites = state.countFavorites + 1;
        state.favorites = [...state.favorites, { ...obj.payload, favoritesBtn: true }]; 
      }
    },

    // delCartBasket: (state, obj:PayloadAction<cardItem>) => {
    //   state.basket = state.basket.filter((elem) => elem.id !== obj.payload.id);
    //   state.count = state.count - 1;
    // }
  },
});

export const { 
  addToFavorites, 


} = favoritesSlice.actions;

export default favoritesSlice.reducer;

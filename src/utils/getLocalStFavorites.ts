import { cardItem } from "../models";

export const getLocalStFavorites = (): cardItem[] | [] => {
  // const data = localStorage.getItem('newBasket');
  const data = localStorage.getItem('favorites');
  return data ? JSON.parse(data) : [];
}


export const getLocalStFavoritesLenght = (): number => {
  const data = localStorage.getItem('favorites');
  return data ? JSON.parse(data).length : 0;
}




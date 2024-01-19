import { cardItem } from "../models";

export const getLocalStBasket = (): cardItem[] | [] => {
  const data = localStorage.getItem('cart');
  return data ? JSON.parse(data) : [];
}


export const getLocalStBasketLenght = (): number => {
  const data = localStorage.getItem('cart');
  return data ? JSON.parse(data).length : 0;
}
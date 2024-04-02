import { cardItem } from "../models";

export const getLocalStBasket = (): cardItem[] | [] => {
  // const data = localStorage.getItem('newBasket');
  const data = localStorage.getItem('cart');
  return data ? JSON.parse(data) : [];
}


export const getLocalStBasketLenght = (): number => {
  const data = localStorage.getItem('cart');
  return data ? JSON.parse(data).length : 0;
}



export const getCartLSTotal = (): number => {
  const data = localStorage.getItem('cart');
  // return data ? JSON.parse(data) : [];
  if(data) {
    let price = JSON.parse(data).reduce((accum: number, obj: cardItem) => {
      return accum + obj.price - (obj.price * obj.sale) / 100
    }, 0);
    return price
  } else {
    return 0;
  }
}

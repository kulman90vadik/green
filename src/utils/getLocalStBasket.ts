import { cardItem } from "../models";

export const getLocalStBasket = (): cardItem[] | [] => {
  const data = localStorage.getItem('cart');
  return data ? JSON.parse(data) : [];

//   const favorites = localStorage.getItem('favorites');
//   const data = localStorage.getItem('cart');


//   if(favorites && data) {
//     let arrFavorites = JSON.parse(favorites);
//     let arrData = JSON.parse(data);

//     console.log(arrFavorites)
// console.log(arrData)

//     for (let i = 0; i < arrData.length; i++) {
//       const newItemIndex: number = arrFavorites.findIndex((item: cardItem) => item.id === arrData[i].id)
      
//       if (newItemIndex >= 0) {     
//         // arrData[i] = arrFavorites[newItemIndex]
//         arrData[i] = {...arrData[i], favoritesBtn: true}
        
//         // arrFavorites[newItemIndex]
//       }
//       else {
//         arrData[i] = arrData[i]
//       }
//     }

//     return arrData
//   }
//   else {
//     return []
//   }
  


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

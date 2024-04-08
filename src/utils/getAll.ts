import { cardItem } from "../models";
import { getLocalStBasket } from "./getLocalStBasket";
import { getLocalStFavorites } from "./getLocalStFavorites";




export const getAll = (): cardItem[] | [] => {
  let catalogLG: cardItem[] = getLocalStBasket();
  let favoritesLG: cardItem[] = getLocalStFavorites();

  // console.log(catalogLG)
  // console.log(favoritesLG)

  if(catalogLG.length >= favoritesLG.length) {
    for (let i = 0; i < catalogLG.length; i++) {
      const newItemIndex: number = favoritesLG.findIndex(item => item.id === catalogLG[i].id)
      if (newItemIndex >= 0) {catalogLG[i] = {...catalogLG[i], favoritesBtn: true}}
      else {catalogLG[i] }
    }
    return catalogLG
  } 
  else {
    for (let i = 0; i < favoritesLG.length; i++) {
      const newItemIndex: number = catalogLG.findIndex(item => item.id === favoritesLG[i].id)
      if (newItemIndex >= 0) {favoritesLG[i] = {...favoritesLG[i], btn: true}}
      else {favoritesLG[i] }
    }
    return favoritesLG
  }
}

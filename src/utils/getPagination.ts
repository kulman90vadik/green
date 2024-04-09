
// import { cardItem } from "../models";
// import { getLocalStBasket } from "./getLocalStBasket";
// import { getLocalStFavorites } from "./getLocalStFavorites";
// getPagination()

import axios from "axios";
import { cardItem } from "../models";



 export const getPagination = async () => {
    const {data} =  await axios.get<cardItem[]>('https://652cdf7ad0d1df5273efc824.mockapi.io/greenShop')
    return data.length as number;
}


// const data = localStorage.getItem('cart');
// return data ? JSON.parse(data) : [];

// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())

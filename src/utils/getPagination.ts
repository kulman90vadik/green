
import axios from "axios";
import { cardItem } from "../models";

 export const getPagination = async () => {
    const {data} =  await axios.get<cardItem[]>('https://652cdf7ad0d1df5273efc824.mockapi.io/greenShop')
    return data.length as number;
}

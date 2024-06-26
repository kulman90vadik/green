
export type slideData = {
  id: number;
  title: string;
  subtitle: string;
  greentext: string;
  bigimages: string;
  smallimages: string;
}


export type cardItem = {
  id: number;
  category: number;
  title: string;
  image: string;
  description: string;
  price: number;
  sale: number;
  new: boolean;
  btn: boolean;
  favoritesBtn?: boolean;
  sizesCount: number;
  images: string[];
  sizes: string[];
  counter: number
}


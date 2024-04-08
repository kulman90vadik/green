// 3 ШАГ
import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { cardItem } from '../../models';
// import { getLocalStBasket } from '../../utils/getLocalStBasket';
// import { getLocalStFavorites } from '../../utils/getLocalStFavorites';
import { getAll } from '../../utils/getAll';

// type FetchParams = { categoryId: string, page: string, orderId: string }
// ODER
// type FetchParams = Record <string, string>;

export const fetchCollection = createAsyncThunk<cardItem[], Record<string, string>>('catalog/fetchCollectionStatus', async (params) => {
  const { categoryId, sort } = params;
  const { data } = await axios.get<cardItem[]>(`https://652cdf7ad0d1df5273efc824.mockapi.io/greenShop?${categoryId}${sort}`);
    return data as cardItem[];
  }
)


export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface CatalogState {
  catalog: cardItem[];
  status: Status;
  category: number;
  sortId: string;
  price: number
}

const initialState: CatalogState = {
  catalog: [],
  status: Status.LOADING,
  category: 0,
  price: 0,
  sortId: ''
};


export const catalogSlice = createSlice({
  name: "catalog",
  initialState,

  reducers: {
    categoryChange: (state, index: PayloadAction<number>) => {
      state.category = index.payload;
    },
    sortChange: (state, id: PayloadAction<string>) => {
      state.sortId = id.payload;
    },
    btnChange: (state, obj: PayloadAction<cardItem>) => {
      state.catalog = state.catalog.map((el) =>
        Number(el.id) !== Number(obj.payload.id)
          ? el
          : { ...el, btn: !el.btn }
      );
    },
    favoritesBtnChange: (state, obj: PayloadAction<cardItem>) => {
      state.catalog = state.catalog.map((el) =>
        Number(el.id) !== Number(obj.payload.id)
          ? el
          : { ...el, favoritesBtn: !el.favoritesBtn }
      );
    },
    priceChange: (state, price: PayloadAction<number>) => {
      state.price = price.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCollection.pending, (state) => {
      state.status = Status.LOADING;
      state.catalog = [];
    });
    builder.addCase(fetchCollection.fulfilled, (state, action) => {

     
      // let catalogLG: cardItem[] = getLocalStBasket();

      let newNEw = getAll();
      console.log(newNEw);

      for (let i = 0; i < action.payload.length; i++) {
        const newItemIndex: number = newNEw.findIndex(item => item.id === action.payload[i].id)
        
        if (newItemIndex >= 0) {     
          state.catalog[i] = newNEw[newItemIndex]
        }
        else {
          state.catalog[i] = action.payload[i]
        }
      }


      // let favoritesLG: cardItem[] = getLocalStFavorites();
      // console.log(favoritesLG);
      // for (let i = 0; i < favoritesLG.length; i++) {
      //   if(favoritesLG[i].favoritesBtn) {
      //     return(
      //       [{...state.catalog[i], favoritesBtn: true}]
      //     )
      //   }
      // }


      state.status = Status.SUCCESS;

    });


    builder.addCase(fetchCollection.rejected, (state) => {
      state.status = Status.ERROR;
      state.catalog = []
    });
  }
  // extraReducers: {
  //   [fetchCollection.pending]: (state) => {
  //     state.status = 'loading';
  //     state.collection = []
  //   },
  //   [fetchCollection.fulfilled]: (state, action) => {
      // state.collection = action.payload;
      // state.status = 'succes';
  //   },
  //   [fetchCollection.rejected]: (state) => {
      // state.status = 'error';
      // state.collection = []
  //   }
  // }
});

export const { categoryChange, sortChange, btnChange, favoritesBtnChange, priceChange } = catalogSlice.actions;

export default catalogSlice.reducer;


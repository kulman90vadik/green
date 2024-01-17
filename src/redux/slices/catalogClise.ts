// 3 ШАГ
import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { cardItem } from '../../models';

// type FetchParams = { categoryId: string, page: string, orderId: string }
// ODER
// type FetchParams = Record <string, string>;

export const fetchCollection = createAsyncThunk<cardItem[], Record<string, string>>('catalog/fetchCollectionStatus', async (params) => {
  const { categoryId, sort } = params;
  const { data } = await axios.get<cardItem[]>(`https://652cdf7ad0d1df5273efc824.mockapi.io/greenShop?${categoryId}${sort}`);
    // console.log(`https://652cdf7ad0d1df5273efc824.mockapi.io/greenShop?${categoryId}${sort}`);
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
  sortId: string
}

const initialState: CatalogState = {
  catalog: [],
  status: Status.LOADING,
  category: 0,
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
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCollection.pending, (state, action) => {
      state.status = Status.LOADING;
      state.catalog = [];
    });
    builder.addCase(fetchCollection.fulfilled, (state, action) => {
      state.catalog = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchCollection.rejected, (state, action) => {
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

export const { categoryChange, sortChange } = catalogSlice.actions;

export default catalogSlice.reducer;

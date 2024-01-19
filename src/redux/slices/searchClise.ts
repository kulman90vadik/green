
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
  search: ''
}

export const searchClise = createSlice({
  name: 'search',
  initialState,

  reducers: {
    updateSearchValue: (state, value: PayloadAction<string>) => {
      state.search = value.payload
    },
    closeSearchHandler: (state) => {
      state.search = ''
    }
  },
})

export const { closeSearchHandler, updateSearchValue } = searchClise.actions

export default searchClise.reducer


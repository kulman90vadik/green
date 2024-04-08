

import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from '../redux/slices/catalogClise'
import basketReducer from '../redux/slices/basketClise'
import searchReducer from '../redux/slices/searchClise'
import favoritesReducer from '../redux/slices/favoritesClise'
// import loginReducer from '../redux/slices/loginClise'

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    basket: basketReducer,
    favorites: favoritesReducer,
    search: searchReducer,
    // login: loginReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
// использовать типизацию state...
// import {RootState} from './redux/store'
// const search = useSelector((state: RootState) => state.search.search);

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
// диспатч принимает только объекты... в APP проблема.
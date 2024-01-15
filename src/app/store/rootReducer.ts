import { combineReducers } from "@reduxjs/toolkit";
import { cardReducer, cardAPI } from '@/entities/card';
import { authAPI } from "@/entities/auth";
import { userAPI } from './../../entities/user';
import { cotalogAPI } from "@/entities/cotalog";
import { categoryAPI } from "@/entities/category";
import { paginationReducer } from "@/shared/ui/pagination";
import { mainReducer } from "./main.slice";
import { basketAPI } from "@/entities/basket";
import { orderAPI } from "@/entities/order";

export const rootReducer = combineReducers({
  main: mainReducer,
  card: cardReducer,
  pagination: paginationReducer,
  [cotalogAPI.reducerPath]: cotalogAPI.reducer,
  [categoryAPI.reducerPath]: categoryAPI.reducer,
  [cardAPI.reducerPath]: cardAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [basketAPI.reducerPath]: basketAPI.reducer,
  [orderAPI.reducerPath]: orderAPI.reducer,
  
})
import { authAPI } from './../../entities/auth';
import { userAPI } from './../../entities/user';
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { cotalogAPI } from "@/entities/cotalog";
import { cardAPI } from "@/entities/card";
import { categoryAPI } from "@/entities/category";
import { basketAPI } from '@/entities/basket';
import { orderAPI } from '@/entities/order';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(cotalogAPI.middleware)
  .concat(categoryAPI.middleware)
  .concat(cardAPI.middleware) 
  .concat(authAPI.middleware) 
  .concat(userAPI.middleware)
  .concat(basketAPI.middleware)
  .concat(orderAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
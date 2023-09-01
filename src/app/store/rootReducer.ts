import { cotalogAPI } from "@/entities/cotalog-pop-up";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [cotalogAPI.reducerPath]: cotalogAPI.reducer,
})
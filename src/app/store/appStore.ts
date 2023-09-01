import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { cotalogAPI } from "@/entities/cotalog-pop-up";
// import { cotalogAPI } from "@/entities/categories-pop-up";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(cotalogAPI.middleware) // .concat(photosApi.middleware) 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
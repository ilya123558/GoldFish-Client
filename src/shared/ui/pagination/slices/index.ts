import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: 'paginationSlice',
  initialState: {
    activePage: 1,
    productPageLimite: 15
  },
  reducers: {
    setActivePage: (state, action: PayloadAction<number>) => {
      state.activePage = action.payload
    },
    setProductPageLimite: (state, action: PayloadAction<number>) => {
      state.productPageLimite = action.payload
    },
  },
});

export const { setActivePage, setProductPageLimite } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer
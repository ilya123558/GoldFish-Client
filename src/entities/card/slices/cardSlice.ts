import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICardList } from '../types';
import { cardListInitialState, sortState } from '../const';
import { INavList } from '@/shared/ui/product-sorter-by-category';

const cardSlice = createSlice({
  name: 'cardSlice',
  initialState: cardListInitialState,
  reducers: {
    updateCardList: (state, action: PayloadAction<ICardList>) => {
      state.cardList = action.payload
    },
    setNavList: (state, action: PayloadAction<INavList>) => {
      state.navList = action.payload
    },
    updateCotalogToggle: (state, action: PayloadAction<{ index: number, value: boolean }>) => {
      state.navList[action.payload.index].toggle = action.payload.value
    },
    updateSortListToggle: (state, action: PayloadAction<{ index: number, value: boolean }>) => {
      state.sortList[action.payload.index].toggle = action.payload.value
    },
    updateActiveTitleCategory: (state, action: PayloadAction<string>) => {
      state.sort.categoryUrl = action.payload
    },

    // sorting
    updateSortPrice: (state, action: PayloadAction<{ key: 'from' | 'to' | 'discount', value?: number }>) => {
      if (action.payload.key === 'discount') {
        state.sort.price[action.payload.key] = !state.sort.price[action.payload.key]
        return
      }
      if (action.payload.value || action.payload.value === 0) {
        state.sort.price[action.payload.key] = action.payload.value
      }
    },
    updateSortAgeToggle: (state, action: PayloadAction<{ value: boolean, index: number }>) => {
      state.sort.age[action.payload.index].toggle = action.payload.value
    },
    updateSortAvailabilityToggle: (state, action: PayloadAction<"available" | "forOrdering" | "unavailable">) => {
      state.sort.availability = state.sort.availability.map(item => {
        return item.value === action.payload
          ? { ...item, toggle: !item.toggle }
          : { ...item, toggle: false }
      })
    },
    updateSortPlayers: (state, action: PayloadAction<{ key: 'from' | 'to', index: number }>) => {
      state.sort.players[action.payload.key] = action.payload.index
    },
    resetSort: state => {
      state.sort = sortState
    }
  },
});

export const {
  updateCardList,
  setNavList,
  updateSortPrice,
  updateCotalogToggle,
  updateSortListToggle,
  updateActiveTitleCategory,
  updateSortAgeToggle,
  updateSortAvailabilityToggle,
  updateSortPlayers,
  resetSort,
} = cardSlice.actions;
export const cardReducer = cardSlice.reducer
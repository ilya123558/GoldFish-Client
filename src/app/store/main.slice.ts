import { IUserAndBasketId } from '@/entities/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  status: 'loading' | 'panding' | 'success',
  user: IUserAndBasketId
}

const initialState: IInitialState = {
  status: 'panding',
  user: {
    userId: undefined,
    basketId: undefined
  }
}

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState: initialState,
  reducers: {
    updateStatus: (state, action: PayloadAction<IInitialState['status']>) => {
      state.status = action.payload
    },
    setUserId: (state, action: PayloadAction<IInitialState['user']>) => {
      state.user = action.payload
    },
  },
});

export const { updateStatus, setUserId } = mainSlice.actions;
export const mainReducer = mainSlice.reducer
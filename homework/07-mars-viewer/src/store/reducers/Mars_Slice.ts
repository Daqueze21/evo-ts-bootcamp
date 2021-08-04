import { createSlice, PayloadAction, createDraftSafeSelector } from '@reduxjs/toolkit';

type MarsState = {
  counterNumber: number;
};

const initialState: MarsState = {
  counterNumber: 0,
};

const marsSlice = createSlice({
  name: 'Mars',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.counterNumber += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.counterNumber -= action.payload;
    },
  },
});

// selector
export const selectCounterNumber = ({ Counter }: any) => Counter;

// selector
export const createSelectCounterNumber = createDraftSafeSelector(
  selectCounterNumber,
  (Counter) => Counter
);

export const { increment, decrement } = marsSlice.actions;

export default marsSlice.reducer;

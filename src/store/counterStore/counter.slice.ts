import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CounterType = {
  value: number;
};

const initialState: CounterType = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByOne: (state) => {
      state.value = state.value + 1;
    },
    decrementByOne: (state) => {
      state.value = state.value - 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;

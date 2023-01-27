import { createSlice } from "@reduxjs/toolkit"; // From toolkit lib

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incByAmount: (state, action) => {
      state.value += action.payload;
    },

    decByAmount: (state, action) => {
      state.value -= action.payload;
    },

    resetCounter: (state) => {
      state.value = 0;
    },
  },
});

export const { incByAmount, decByAmount, resetCounter } = counterSlice.actions; // Connecting with the actions.
export const selectCount = (state) => state.counter.value; //Showing the value

export default counterSlice.reducer; // For Store

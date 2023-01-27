import { createSlice } from "@reduxjs/toolkit"; // From toolkit lib

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1000,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;

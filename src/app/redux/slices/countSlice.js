import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value >= 1 && state.value < 5) state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 1 && state.value <= 5) state.value -= 1;
    },

    resetCount: (state) => {
      state.value = 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, resetCount } = countSlice.actions;

export default countSlice.reducer;

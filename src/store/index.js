import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
   name: "counter",
   initialState,
   reducers: {
      increment(state) {
         state.counter++;
      },
      decrement(state) {
         state.counter--;
      },
      incrementBy5(state, action) {
         state.counter += action.payload;
      },
      reset(state) {
         state.counter = 0;
      },
      toggleCounter(state) {
         state.showCounter = !state.showCounter;
      },
   },
});

const store = configureStore({
   reducer: { counter: counterSlice.reducer },
});

export const counterActions = counterSlice.actions;

export default store;

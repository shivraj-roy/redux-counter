import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
   name: "counter",
   initialState: initialCounterState,
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

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
   name: "authentication",
   initialState: initialAuthState,
   reducers: {
      login(state) {
         state.isAuthenticated = true;
      },
      logout(state) {
         state.isAuthenticated = false;
      },
   },
});
const store = configureStore({
   reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;

export const authActions = authSlice.actions;

export default store;

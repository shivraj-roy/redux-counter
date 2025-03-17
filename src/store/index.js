import { legacy_createStore as createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
   if (action.type === "increment") {
      return {
         counter: state.counter + 1,
         showCounter: state.showCounter,
      };
   }

   if (action.type === "decrement") {
      return {
         counter: state.counter - 1,
         showCounter: state.showCounter,
      };
   }

   if (action.type === "incrementBy5") {
      return {
         counter: state.counter + action.amount,
         showCounter: state.showCounter,
      };
   }

   if (action.type === "reset") {
      return {
         counter: 0,
         showCounter: state.showCounter,
      };
   }
   if (action.type === "toggle") {
      return {
         counter: state.counter,
         showCounter: !state.showCounter,
      };
   }

   return state;
};

const store = createStore(counterReducer);

export default store;

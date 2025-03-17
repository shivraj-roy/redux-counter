import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
   const counter = useSelector((state) => state.counter.counter);
   const showCounter = useSelector((state) => state.counter.showCounter);
   const dispatch = useDispatch();

   const incrementHandler = () => {
      dispatch(counterActions.increment());
   };

   const decrementHandler = () => {
      dispatch(counterActions.decrement());
   };

   const incrementBy5Handler = () => {
      dispatch(counterActions.incrementBy5(5));
   };

   const resetCounterHandler = () => {
      dispatch(counterActions.reset());
   };

   const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter());
   };

   return (
      <main className={classes.counter}>
         <h1>Redux Counter</h1>
         <div
            className={classes.value}
            style={{ opacity: showCounter ? 1 : 0 }}
         >
            {counter}
         </div>
         <div className={classes.buttons}>
            <button onClick={decrementHandler}>↓</button>
            <button onClick={resetCounterHandler}>↺</button>
            <button onClick={incrementHandler}>↑</button>
            <button onClick={incrementBy5Handler}>↑ by 5</button>
         </div>
         <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
   );
};

export default Counter;

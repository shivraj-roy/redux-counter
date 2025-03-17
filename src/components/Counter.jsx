import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
   const counter = useSelector((state) => state.counter);
   const showCounter = useSelector((state) => state.showCounter);
   const dispatch = useDispatch();

   const incrementHandler = () => {
      dispatch({ type: "increment" });
   };

   const decrementHandler = () => {
      dispatch({ type: "decrement" });
   };

   const incrementBy5Handler = () => {
      dispatch({ type: "incrementBy5", amount: 5 });
   };

   const resetCounterHandler = () => {
      dispatch({ type: "reset" });
   };

   const toggleCounterHandler = () => {
      dispatch({ type: "toggle" });
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

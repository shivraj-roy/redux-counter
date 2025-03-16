import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
   const counter = useSelector((state) => state.counter);
   const dispatch = useDispatch();

   const incrementHandler = () => {
      dispatch({ type: "increment" });
   };

   const decrementHandler = () => {
      dispatch({ type: "decrement" });
   };

   const toggleCounterHandler = () => {};

   return (
      <main className={classes.counter}>
         <h1>Redux Counter</h1>
         <div className={classes.value}>{counter}</div>
         <div className={classes.buttons}>
            <button onClick={decrementHandler}>↓</button>
            <button onClick={incrementHandler}>↑</button>
         </div>
         <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
   );
};

export default Counter;

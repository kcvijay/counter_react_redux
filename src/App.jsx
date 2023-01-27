import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "./Features/Counter/checkSlice";
import {
  incByAmount,
  decByAmount,
  resetCounter,
} from "./Features/Counter/checkSlice";

const App = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="counter max-w-[1200px] my-[25px] mx-[auto] p-4 flex flex-col items-center">
      <header>Counter with React Redux</header>
      <div className="counter-circle h-[150px] w-[150px] text-3xl text-white bg-slate-400 flex justify-center items-center my-[50px] rounded-full shadow-md">
        {count}
      </div>
      <div className="action-btns flex justify-center items-center flex-wrap gap-4">
        <button onClick={() => dispatch(decByAmount(5))}>Decrease 5</button>
        <button onClick={() => dispatch(decByAmount(1))}>Decrease 1</button>
        <button onClick={() => dispatch(resetCounter())}>Reset</button>
        <button onClick={() => dispatch(incByAmount(1))}>Increase 1</button>
        <button onClick={() => dispatch(incByAmount(5))}>Increase 5</button>
      </div>
    </div>
  );
};

export default App;

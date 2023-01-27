import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "./Features/Counter/checkSlice";
import { increment } from "./Features/Counter/checkSlice";

import Button from "./Button";

const App = () => {
  const count = useSelector(selectCount);

  // const handleMinusFive = () => {
  //   setNumber(number - 5);
  // };

  // const handleMinusOne = () => {
  //   setNumber(number - 1);
  // };

  // const resetHandler = () => {
  //   setNumber(0);
  // };

  // const handlePlusOne = () => {};

  // const handlePlusFive = () => {
  //   setNumber(number + 5);
  // };
  return (
    <div className="counter max-w-[1200px] my-[25px] mx-[auto] p-4 flex flex-col items-center">
      <header>Counter with React Redux</header>
      <div className="counter-circle h-[150px] w-[150px] text-3xl text-white bg-slate-400 flex justify-center items-center my-[50px] rounded-full shadow-md">
        {count}
      </div>
      <div className="action-btns flex justify-center items-center flex-wrap gap-4">
        <Button text={"Decrease 5"} />
        <Button text={"Decrease 1"} />
        <Button text={"Reset"} />
        <Button text={"Increase 1"} />
        <Button text={"Increase 5"} />
      </div>
    </div>
  );
};

export default App;

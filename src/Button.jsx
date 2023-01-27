import React from "react";

const Button = ({ clickHandler, text }) => {
  return (
    <div>
      <button onClick={clickHandler}>{text}</button>
    </div>
  );
};

export default Button;

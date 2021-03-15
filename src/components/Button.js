import React from "react";

const Button = ({ children, onClickFn, ...props }) => {
  return (
    <>
      <button onClick={onClickFn}>{children}</button>
    </>
  );
};

export default Button;

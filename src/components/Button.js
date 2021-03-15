import React from "react";

const Button = ({ children, onClickFn, style, type }) => {
  return (
    <>
      <button onClick={onClickFn} className={style} type={type}>
        {children}
      </button>
    </>
  );
};

export default Button;

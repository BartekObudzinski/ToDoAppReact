import React from "react";
import styles from "./Button.module.scss";
const Button = ({ children, onClickFn, style, type }) => {
  return (
    <>
      <button
        onClick={onClickFn}
        className={`${styles.button} ${style}`}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;

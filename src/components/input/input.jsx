import React from "react";
import classNames from "classnames/bind";
import * as styles from "./input.module.scss";

const c = classNames.bind(styles);

const Input = ({ type, label }) => {
  return (
    <div className={c("btn-wrapper")}>
      <label htmlFor="input">{label}</label>
      <input type={type} id="input" />
    </div>
  );
};

export default Input;

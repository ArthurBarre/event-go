import React from "react";
import classNames from "classnames/bind";
import * as styles from "./input.module.scss";

const c = classNames.bind(styles);

const Input = ({ type, label, placeholder }) => {
  return (
    <div className={c("btnWrapper")}>
      <label htmlFor="input">{label}</label>
      <input className={c("",{isPassword: type === 'password'})} placeholder={placeholder} type={type} id="input" />
    </div>
  );
};

export default Input;

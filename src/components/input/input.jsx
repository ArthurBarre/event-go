import classNames from "classnames/bind";
import React from "react";
import * as styles from "./input.module.scss";

const c = classNames.bind(styles);

const Input = ({ value, onChange, type, label, placeholder, required, className }) => {
  return (
    <div className={c("wrapper", className)}>
      <label htmlFor="input">{label}</label>
      <input
        required={required}
        className={c("", { isPassword: type === "password" })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        id="input"
      />
    </div>
  );
};

export default Input;

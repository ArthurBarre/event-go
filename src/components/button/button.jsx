import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import * as styles from "./button.module.scss";
import Loader from "../../assets/loader.inline.svg";

const c = classNames.bind(styles);

const Button = ({ children, disabled, loading, type, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={c("button", { disabled }, type)}
    >
      {loading && !disabled && <Loader className={c("icon", type)} />}
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "primary",
  loading: false,
  disabled: false,
};

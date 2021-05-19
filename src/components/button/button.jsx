import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import * as styles from "./button.module.scss";
import Loader from "../../assets/loader.inline.svg";

const c = classNames.bind(styles);

const Button = ({ children, disabled, size, loading, type, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={c("button", size, { disabled }, type)}
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
  size: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "primary",
  size: "normal",
  loading: false,
  disabled: false,
};

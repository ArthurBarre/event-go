import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import * as styles from "./Button.module.scss";

const c = classNames.bind(styles);

const Button = ({ children, disabled, size, loading, type, onClick }) => {
  const sizes = {
    small: "24px",
    normal: "34px",
    big: "37px",
  };
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      loading={loading}
      className={c("wrapper", { size: sizes[size], type })}
    >
      {loading && <div>loadingIcon</div>}
      {children}
    </div>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

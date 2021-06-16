import classNames from "classnames/bind";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "./PasswordReset.module.scss";

const c = classNames.bind(styles);

const Signin = () => {

  return (
    <>
      <StaticImage
        className={c("image")}
        src="../../images/illu.png"
        alt="illu"
      />
      <div className={c("wrapper")}>
        <h1 className={c("title")}>Password reset</h1>
      </div>
    </>
  );
};

export default Signin;

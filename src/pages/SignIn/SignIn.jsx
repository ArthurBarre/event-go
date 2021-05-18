import classNames from "classnames/bind";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "./SignIn.module.scss";
import Input from "./../../components/Input/Input";

const c = classNames.bind(styles);

const Signin = () => {
  return (
    <>
      <StaticImage
        className={c("image")}
        src="../../images/illu.png"
        alt="illu"
      />
      <div className={c("flex-col")}>
        <h1 className={c("title")}>Sign In</h1>
        <Input type="text" label="email"></Input>
      </div>
    </>
  );
};

export default Signin;
